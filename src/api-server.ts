import express, { Express } from 'express';
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { Resend } from 'resend';
import { GoogleGenAI } from "@google/genai";

const PROGRAM_PRICE = 200;

interface CohorteCandidature {
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  email: string;
  activity: string;
  stage: string;
  blocker: string;
  availability: string;
  motivation: string;
  pricingApplied: number;
  isFounder: boolean;
}

// In-memory fallbacks when filesystem is read-only (e.g. AWS Lambda / Netlify / Vercel at /var/task)
const inMemoryCandidatures: CohorteCandidature[] = [];
const inMemorySubscribers: any[] = [];

function getWritableDataDir(): string {
  // If running in a serverless environment (Netlify, AWS Lambda, Vercel) or read-only directory
  if (
    process.env.NETLIFY ||
    process.env.VERCEL ||
    process.env.AWS_LAMBDA_FUNCTION_NAME ||
    process.cwd().startsWith('/var/task')
  ) {
    const tmpData = path.join(os.tmpdir(), 'alkymya-data');
    try {
      if (!fs.existsSync(tmpData)) {
        fs.mkdirSync(tmpData, { recursive: true });
      }
      return tmpData;
    } catch {
      return os.tmpdir();
    }
  }

  // Local or containerized runtime
  const localDir = path.join(process.cwd(), 'data');
  try {
    if (!fs.existsSync(localDir)) {
      fs.mkdirSync(localDir, { recursive: true });
    }
    return localDir;
  } catch {
    // If process.cwd() is read-only, fallback to /tmp
    const tmpData = path.join(os.tmpdir(), 'alkymya-data');
    try {
      if (!fs.existsSync(tmpData)) {
        fs.mkdirSync(tmpData, { recursive: true });
      }
      return tmpData;
    } catch {
      return os.tmpdir();
    }
  }
}

function ensureDataFiles() {
  try {
    const dir = getWritableDataDir();
    const candFile = path.join(dir, 'cohorte-candidatures.json');
    const subFile = path.join(dir, 'newsletter-subscribers.json');

    if (!fs.existsSync(candFile)) {
      fs.writeFileSync(candFile, JSON.stringify([], null, 2), 'utf-8');
    }
    if (!fs.existsSync(subFile)) {
      fs.writeFileSync(subFile, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (err) {
    console.warn('Filesystem read-only or not writable, using memory storage:', err);
  }
}

function saveNewsletterSubscriber(email: string, firstName?: string, lastName?: string) {
  const normalizedEmail = email.trim().toLowerCase();
  ensureDataFiles();

  try {
    const dir = getWritableDataDir();
    const subFile = path.join(dir, 'newsletter-subscribers.json');
    if (fs.existsSync(subFile)) {
      const raw = fs.readFileSync(subFile, 'utf-8');
      const list = JSON.parse(raw);
      const existing = list.find((item: any) => item.email?.toLowerCase() === normalizedEmail);
      if (existing) {
        return { alreadySubscribed: true, subscriber: existing };
      }
      const newSub = {
        id: 'sub_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        email: normalizedEmail,
        firstName: firstName?.trim() || '',
        lastName: lastName?.trim() || '',
        createdAt: new Date().toISOString(),
        status: 'subscribed',
      };
      list.push(newSub);
      fs.writeFileSync(subFile, JSON.stringify(list, null, 2), 'utf-8');
      inMemorySubscribers.push(newSub);
      return { alreadySubscribed: false, subscriber: newSub };
    }
  } catch (err) {
    console.warn('Could not write subscriber to disk, falling back to memory:', err);
  }

  // Memory fallback
  const existingMem = inMemorySubscribers.find((item: any) => item.email?.toLowerCase() === normalizedEmail);
  if (existingMem) {
    return { alreadySubscribed: true, subscriber: existingMem };
  }
  const newSub = {
    id: 'sub_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    email: normalizedEmail,
    firstName: firstName?.trim() || '',
    lastName: lastName?.trim() || '',
    createdAt: new Date().toISOString(),
    status: 'subscribed',
  };
  inMemorySubscribers.push(newSub);
  return { alreadySubscribed: false, subscriber: newSub };
}

function getStoredCandidatures(): CohorteCandidature[] {
  ensureDataFiles();
  try {
    const dir = getWritableDataDir();
    const candFile = path.join(dir, 'cohorte-candidatures.json');
    if (fs.existsSync(candFile)) {
      const raw = fs.readFileSync(candFile, 'utf-8');
      const list = JSON.parse(raw);
      if (Array.isArray(list) && list.length > 0) {
        return list;
      }
    }
    return inMemoryCandidatures;
  } catch (err) {
    console.warn('Error reading candidatures from disk, using memory:', err);
    return inMemoryCandidatures;
  }
}

function saveNewCandidature(data: Omit<CohorteCandidature, 'id' | 'createdAt' | 'pricingApplied' | 'isFounder'>): {
  candidature: CohorteCandidature;
  totalCount: number;
  isSoldOut: boolean;
  remainingPlaces: number;
  currentPrice: number;
} {
  ensureDataFiles();
  const existing = getStoredCandidatures();

  const newCand: CohorteCandidature = {
    ...data,
    id: 'cand_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    createdAt: new Date().toISOString(),
    pricingApplied: PROGRAM_PRICE,
    isFounder: false,
  };

  existing.push(newCand);
  inMemoryCandidatures.push(newCand);

  try {
    const dir = getWritableDataDir();
    const candFile = path.join(dir, 'cohorte-candidatures.json');
    fs.writeFileSync(candFile, JSON.stringify(existing, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Could not write candidature to disk, saved in memory:', err);
  }

  const totalCount = existing.length;

  return {
    candidature: newCand,
    totalCount,
    isSoldOut: false,
    remainingPlaces: 0,
    currentPrice: PROGRAM_PRICE,
  };
}

export function createApiApp(): Express {
  const app = express();
  app.use(express.json());

  // Initialize Resend lazily
  let resend: Resend | null = null;
  const getResend = () => {
    if (!resend) {
      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey) {
        throw new Error('RESEND_API_KEY is missing');
      }
      resend = new Resend(apiKey);
    }
    return resend;
  };

  // Initialize Gemini lazily
  let genAI: GoogleGenAI | null = null;
  const getGenAI = () => {
    if (!genAI) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('GEMINI_API_KEY is missing');
      }
      genAI = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
    return genAI;
  };

  // Logging middleware
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ 
      status: 'ok', 
      env: process.env.NODE_ENV,
      resendKeySet: !!process.env.RESEND_API_KEY 
    });
  });

  // Cohorte status API (checks if 10 candidatures reached)
  app.get('/api/cohorte-status', (req, res) => {
    try {
      const candidatures = getStoredCandidatures();
      const count = candidatures.length;

      res.json({
        count,
        currentPrice: PROGRAM_PRICE,
        price: PROGRAM_PRICE,
        message: "Inscriptions ouvertes pour le programme New Business MVP au tarif de 200 € / mois."
      });
    } catch (err: any) {
      console.error('Error fetching cohorte status:', err);
      res.status(500).json({ error: 'Erreur lors de la récupération du statut' });
    }
  });

  // 301 Permanent Redirects to the unique canonical /newbusiness/
  app.get([
    '/new-business',
    '/new-business/',
    '/new-business.html',
    '/cohorte-fondatrice',
    '/cohorte-fondatrice/',
    '/cohorte-fondatrice.html',
    '/cohorte',
    '/cohorte/'
  ], (req, res) => {
    return res.redirect(301, '/newbusiness/');
  });

  // Valid routes set for the site (12 routes)
  const validSiteRoutes = new Set([
    '',
    'ia',
    'oeuvres',
    'ateliers',
    'ressources',
    'alchimistes',
    'partenaires',
    'contact',
    'faq',
    'rejoindre',
    'newbusiness',
    'mentions-legales'
  ]);

  // Serve pre-rendered HTML files from dist for valid routes (or handle 404 for unknown routes)
  app.use((req, res, next) => {
    if (
      req.method === 'GET' &&
      !req.path.startsWith('/api') &&
      !req.path.startsWith('/src') &&
      !req.path.startsWith('/@') &&
      !req.path.startsWith('/node_modules') &&
      !req.path.startsWith('/assets') &&
      !req.path.includes('.')
    ) {
      const cleanPath = req.path.replace(/^\//, '').replace(/\/$/, '');

      // Check if it's a known valid route
      if (validSiteRoutes.has(cleanPath)) {
        const possibleFile = cleanPath === ''
          ? path.join(process.cwd(), 'dist', 'index.html')
          : path.join(process.cwd(), 'dist', cleanPath, 'index.html');

        const userAgent = (req.headers['user-agent'] || '').toLowerCase();
        const isBotOrCurl = userAgent.includes('curl') || userAgent.includes('bot') || userAgent.includes('crawler') || userAgent.includes('spider') || req.query.prerender === 'true';

        if (fs.existsSync(possibleFile) && (isBotOrCurl || cleanPath === 'newbusiness')) {
          return res.sendFile(possibleFile);
        }
      } else {
        // Unknown route -> return true 404 Not Found (fixes soft 404)
        const notFoundFile = path.join(process.cwd(), 'dist', '404.html');
        const fallback404 = path.join(process.cwd(), 'public', '404.html');
        const fileToSend = fs.existsSync(notFoundFile) ? notFoundFile : fallback404;

        if (fs.existsSync(fileToSend)) {
          return res.status(404).sendFile(fileToSend);
        }
        return res.status(404).send('404 Not Found');
      }
    }
    next();
  });

  // Candidature Cohorte Fondatrice API
  app.post('/api/candidature-cohorte', async (req, res) => {
    try {
      const { firstName, lastName, email, activity, stage, blocker, availability, motivation } = req.body;
      console.log(`[${new Date().toISOString()}] Candidature New Business MVP from ${firstName} ${lastName} (${email})`);

      if (!firstName || !lastName || !email) {
        return res.status(400).json({ error: 'Prénom, nom et email sont requis.' });
      }

      // Save to persistent storage
      const saveResult = saveNewCandidature({
        firstName,
        lastName,
        email,
        activity: activity || '',
        stage: stage || '',
        blocker: blocker || '',
        availability: availability || 'oui',
        motivation: motivation || '',
      });

      const { candidature, totalCount } = saveResult;
      const priceText = '200 € / mois';
      const quotaStatusText = `Candidature #${totalCount} • Programme New Business MVP (200 €/mois)`;

      if (!process.env.RESEND_API_KEY) {
        console.warn('RESEND_API_KEY non configuré - candidature enregistrée dans les logs et le fichier local');
        return res.status(200).json({ 
          success: true, 
          message: 'Candidature reçue et enregistrée avec succès.',
          candidatureNumber: totalCount,
          priceApplied: candidature.pricingApplied,
          currentPrice: PROGRAM_PRICE
        });
      }

      const resendClient = getResend();
      const { data, error } = await resendClient.emails.send({
        from: 'Alkymya New Business <onboarding@resend.dev>',
        to: ['cyril@alkymya.co'],
        subject: `[${quotaStatusText}] ${firstName} ${lastName} - ${activity || 'Nouveau projet MVP'}`,
        replyTo: email,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; color: #1e293b; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #1F4F6E 0%, #037971 100%); padding: 35px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 2px;">ALKYMYA</h1>
              <div style="width: 40px; height: 3px; background-color: #c06721; margin: 12px auto;"></div>
              <p style="color: #f1f5f9; margin: 0; font-size: 14px; font-weight: 600;">Candidature • Accompagnement New Business MVP</p>
              <div style="display: inline-block; margin-top: 10px; background-color: #c06721; color: #ffffff; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: bold;">
                ${quotaStatusText}
              </div>
            </div>
            
            <div style="padding: 35px 30px; background-color: #ffffff;">
              <p style="font-size: 16px; margin-bottom: 20px;">Bonjour Cyril,</p>
              <p style="font-size: 15px; margin-bottom: 25px;">
                Une nouvelle candidature a été enregistrée pour le programme <strong>New Business MVP (200 € / mois)</strong>.
              </p>
              
              <div style="background-color: #f8fafc; padding: 25px; border-radius: 10px; border-left: 4px solid #c06721; margin-bottom: 25px;">
                <p style="margin: 0 0 12px 0;"><strong>Numéro de candidature :</strong> #${totalCount}</p>
                <p style="margin: 0 0 12px 0;"><strong>Tarif appliqué :</strong> <strong style="color: #c06721;">${priceText}</strong></p>
                <p style="margin: 0 0 12px 0;"><strong>Candidat :</strong> ${firstName} ${lastName}</p>
                <p style="margin: 0 0 12px 0;"><strong>Email :</strong> <a href="mailto:${email}" style="color: #c06721;">${email}</a></p>
                <p style="margin: 0 0 12px 0;"><strong>Activité / Projet MVP :</strong> ${activity || 'Non précisé'}</p>
                <p style="margin: 0 0 12px 0;"><strong>Stade actuel :</strong> ${stage || 'Non précisé'}</p>
                <p style="margin: 0 0 12px 0;"><strong>Disponibilité (3-4h/semaine) :</strong> ${availability === 'oui' ? '✅ Oui, s\'y engage' : '⚠️ Non'}</p>
                <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
                  <strong>Principal blocage digital :</strong>
                  <p style="margin: 6px 0 0 0; color: #475569; font-style: italic;">${blocker || 'Non renseigné'}</p>
                </div>
                <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
                  <strong>Motivations :</strong>
                  <p style="margin: 6px 0 0 0; color: #475569; font-style: italic;">${motivation || 'Non renseigné'}</p>
                </div>
              </div>
            </div>
            
            <div style="background-color: #f1f5f9; padding: 20px 30px; text-align: center; font-size: 12px; color: #64748b;">
              Alkymya.co • Système automatique de gestion New business
            </div>
          </div>
        `,
      });

      if (error) {
        console.error('Resend Candidature Error:', error);
        return res.status(400).json({ error: error.message });
      }

      res.status(200).json({ 
        success: true, 
        data, 
        candidatureNumber: totalCount,
        priceApplied: candidature.pricingApplied,
        currentPrice: PROGRAM_PRICE
      });
    } catch (error: any) {
      console.error('Candidature Server Error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Contact API
  app.post('/api/send-contact', async (req, res) => {
    try {
      const { firstName, lastName, email, subject, message, type } = req.body;
      console.log(`[${new Date().toISOString()}] Email from ${email}`);

      if (!process.env.RESEND_API_KEY) {
        return res.status(500).json({ error: 'Configuration serveur incomplète (RESEND_API_KEY manquante)' });
      }

      const resendClient = getResend();
      const { data, error } = await resendClient.emails.send({
        from: 'Alkymya Contact <onboarding@resend.dev>',
        to: ['cyril@alkymya.co'],
        subject: `[${type || 'Contact'}] ${subject || 'Nouveau message'}`,
        replyTo: email,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #334155; line-height: 1.6; border: 1px solid #f1f5f9; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #1f4f6e; padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 3px; text-transform: uppercase;">ALKYMYA</h1>
              <div style="width: 40px; height: 3px; background-color: #c06721; margin: 15px auto;"></div>
              <p style="color: #cbd5e1; margin: 0; text-transform: uppercase; font-size: 13px; font-weight: 600; letter-spacing: 2px;">Nouveau Message de Contact</p>
            </div>
            
            <div style="padding: 40px 35px; background-color: #ffffff;">
              <p style="font-size: 16px; color: #475569; margin-bottom: 30px;">Bonjour Cyril,</p>
              <p style="font-size: 16px; color: #475569; margin-bottom: 30px;">Vous avez reçu une nouvelle demande via le site <strong>alkymya.co</strong> :</p>
              
              <div style="background-color: #f8fafc; padding: 30px; border-radius: 12px; margin-bottom: 30px; border-top: 4px solid #c06721;">
                <div style="margin-bottom: 20px;">
                  <span style="display: block; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700; margin-bottom: 4px;">Expéditeur</span>
                  <span style="font-size: 16px; color: #1e293b; font-weight: 600;">${firstName} ${lastName}</span>
                </div>
                
                <div style="margin-bottom: 20px;">
                  <span style="display: block; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700; margin-bottom: 4px;">Email</span>
                  <a href="mailto:${email}" style="font-size: 16px; color: #c06721; text-decoration: none; font-weight: 600;">${email}</a>
                </div>
                
                <div style="margin-bottom: 25px;">
                  <span style="display: block; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700; margin-bottom: 4px;">Sujet</span>
                  <span style="font-size: 16px; color: #1e293b; font-weight: 600;">${subject}</span>
                </div>
                
                <div style="padding-top: 20px; border-top: 1px solid #e2e8f0;">
                  <span style="display: block; font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 700; margin-bottom: 12px;">Message</span>
                  <div style="font-size: 15px; color: #334155; white-space: pre-wrap; font-style: italic; line-height: 1.8;">${message}</div>
                </div>
              </div>
              
              <p style="font-size: 14px; color: #94a3b8; text-align: center;">Ce message a été généré automatiquement par le système Alkymya.</p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 45px 30px; text-align: center; border-top: 1px solid #f1f5f9;">
              <img src="https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png" alt="Alkymya Logo" style="max-width: 160px; height: auto; margin-bottom: 25px;" />
              <div style="font-size: 12px; color: #64748b; letter-spacing: 0.5px;">
                <p style="margin: 4px 0; font-weight: 600; color: #1f4f6e;">© ${new Date().getFullYear()} Alkymya</p>
                <p style="margin: 4px 0;">Créateurs d'avenir par l'IA</p>
              </div>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error('Resend API Error:', error);
        return res.status(400).json({ error: error.message });
      }

      res.status(200).json({ success: true, data });
    } catch (error: any) {
      console.error('Critical Server Error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Chat API
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      
      const ai = getGenAI();
      const model = "gemini-3-flash-preview";
      
      const chat = ai.chats.create({
        model,
        config: {
          systemInstruction: `Tu es l'assistant Alkymya, une agence spécialisée dans l'IA générative et l'enseignement supérieur. 
          Tes réponses doivent être professionnelles, inspirantes et tournées vers l'avenir. 
          Alkymya aide les écoles (comme l'IESEG, HETIC, ISCOM, Ynov) à intégrer l'IA dans leurs cursus.
          Tu connais l'étude "Génération IA" réalisée par Alkymya qui analyse les usages de l'IA chez les étudiants et enseignants.
          Réponds de manière concise et utile. Si l'utilisateur pose une question sur Alkymya, mets en avant son expertise pédagogique et stratégique.`,
        },
        history: history || [],
      });

      const response = await chat.sendMessage({ message });
      res.json({ text: response.text });
    } catch (error: any) {
      console.error('Chat API Error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Cached dedicated audience ID
  let cachedAudienceId: string | null = process.env.RESEND_AUDIENCE_ID || null;

  async function resolveDedicatedAudience(resendClient: Resend): Promise<string | null> {
    if (cachedAudienceId) return cachedAudienceId;
    if (process.env.RESEND_AUDIENCE_ID) {
      cachedAudienceId = process.env.RESEND_AUDIENCE_ID;
      return cachedAudienceId;
    }

    try {
      const listRes = await resendClient.audiences.list();
      const listData = (listRes as any)?.data?.data || (listRes as any)?.data || [];
      if (Array.isArray(listData)) {
        const found = listData.find((a: any) => 
          a.name?.toLowerCase().includes('newsletter') || 
          a.name?.toLowerCase().includes('alkymya')
        );
        if (found?.id) {
          cachedAudienceId = found.id;
          return cachedAudienceId;
        }
      }

      // Auto-create dedicated audience in Resend if not yet present
      const createRes = await resendClient.audiences.create({
        name: 'Newsletter Alkymya',
      });
      const newId = (createRes as any)?.data?.id;
      if (newId) {
        cachedAudienceId = newId;
        return cachedAudienceId;
      }
    } catch (err) {
      console.warn('Could not auto-resolve or create Resend audience:', err);
    }
    return null;
  }

  // Newsletter Subscription API (Resend with dedicated audience)
  app.post('/api/newsletter-subscribe', async (req, res) => {
    try {
      const { email, firstName, lastName } = req.body;
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: 'Une adresse email valide est requise.' });
      }

      const normalizedEmail = email.trim().toLowerCase();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(normalizedEmail)) {
        return res.status(400).json({ error: 'Le format de l\'adresse email est invalide.' });
      }

      console.log(`[${new Date().toISOString()}] Inscription Newsletter pour ${normalizedEmail}`);

      // Save locally in persistent JSON
      const { alreadySubscribed } = saveNewsletterSubscriber(normalizedEmail, firstName, lastName);

      // If no Resend API key is configured, respond in local dev mode
      if (!process.env.RESEND_API_KEY) {
        console.warn('RESEND_API_KEY non configurée — abonné enregistré localement.');
        return res.status(200).json({
          success: true,
          message: alreadySubscribed
            ? 'Vous êtes déjà inscrit(e) à la lettre d\'Alkymya.'
            : 'Votre inscription à la lettre d\'Alkymya a bien été enregistrée avec succès !',
          alreadySubscribed,
          mode: 'local',
        });
      }

      const resendClient = getResend();
      const audienceId = await resolveDedicatedAudience(resendClient);

      // Add contact to Resend with dedicated audience / segment
      let resendContactError: any = null;
      if (audienceId) {
        try {
          const addRes = await resendClient.contacts.create({
            email: normalizedEmail,
            firstName: firstName?.trim(),
            lastName: lastName?.trim(),
            unsubscribed: false,
            audienceId: audienceId,
          });
          if (addRes.error) {
            // Attempt with segments if audienceId was deprecated or expects segments
            const segmentRes = await resendClient.contacts.create({
              email: normalizedEmail,
              firstName: firstName?.trim(),
              lastName: lastName?.trim(),
              unsubscribed: false,
              segments: [{ id: audienceId }],
            });
            if (segmentRes.error) {
              resendContactError = segmentRes.error;
            }
          }
        } catch (err: any) {
          console.warn('Error creating contact with audienceId:', err);
          resendContactError = err;
        }
      } else {
        const globalRes = await resendClient.contacts.create({
          email: normalizedEmail,
          firstName: firstName?.trim(),
          lastName: lastName?.trim(),
          unsubscribed: false,
        });
        if (globalRes.error) {
          resendContactError = globalRes.error;
        }
      }

      const errorMessage = resendContactError?.message || '';
      const isAlreadyExists = errorMessage.toLowerCase().includes('already exists') || 
                              errorMessage.toLowerCase().includes('duplicate');

      // Send confirmation welcome email to subscriber
      try {
        await resendClient.emails.send({
          from: 'Alkymya <onboarding@resend.dev>',
          to: [normalizedEmail],
          subject: 'Bienvenue dans la lettre d\'Alkymya',
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background: #ffffff;">
              <div style="background: linear-gradient(135deg, #1F4F6E 0%, #16384e 100%); padding: 36px 30px; text-align: center; color: #ffffff;">
                <p style="text-transform: uppercase; letter-spacing: 2px; font-size: 11px; margin: 0 0 8px 0; color: #c06721; font-weight: bold;">Lettre d'information</p>
                <h1 style="margin: 0; font-size: 26px; font-weight: 800; letter-spacing: 1px;">ALKYMYA</h1>
                <p style="margin: 10px 0 0 0; font-size: 14px; color: #e2e8f0;">Carnets de terrain, retours d'expérience et signaux faibles de l'IA</p>
              </div>
              <div style="padding: 32px 30px;">
                <p style="font-size: 16px; margin-top: 0;">Bonjour${firstName ? ' ' + firstName : ''},</p>
                <p style="font-size: 15px; color: #475569; line-height: 1.7;">
                  Votre inscription à la lettre d'information d'<strong>Alkymya</strong> est confirmée. Vous faites désormais partie de notre audience dédiée.
                </p>
                <div style="background-color: #f8fafc; border-left: 4px solid #c06721; padding: 20px; border-radius: 8px; margin: 24px 0;">
                  <p style="margin: 0; font-size: 14px; color: #334155; line-height: 1.6;">
                    <strong>Ce que vous recevrez :</strong> des mesures concrètes de terrain (SEO/GEO, pré-rendu, architecture de sites), des retours d'expérience sur les agents IA en production et les coulisses de nos prototypes.
                  </p>
                </div>
                <p style="font-size: 14px; color: #64748b;">
                  Pour toute question ou échange sur votre projet, répondez directement à ce mail ou écrivez-nous à <a href="mailto:cyril@alkymya.co" style="color: #c06721; text-decoration: none; font-weight: 600;">cyril@alkymya.co</a>.
                </p>
              </div>
              <div style="background-color: #f1f5f9; padding: 20px 30px; text-align: center; font-size: 12px; color: #64748b;">
                <p style="margin: 0 0 6px 0;">© ${new Date().getFullYear()} Alkymya.co — Tous droits réservés.</p>
                <p style="margin: 0; font-size: 11px; color: #94a3b8;">Désinscription possible à tout moment en un clic.</p>
              </div>
            </div>
          `,
        });
      } catch (mailErr) {
        console.warn('Could not send welcome email:', mailErr);
      }

      // Notify Cyril
      try {
        await resendClient.emails.send({
          from: 'Alkymya Newsletter <onboarding@resend.dev>',
          to: ['cyril@alkymya.co'],
          subject: `[Nouvel abonné Newsletter] ${normalizedEmail}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px;">
              <h3>Nouvel abonné à la lettre d'Alkymya</h3>
              <p><strong>Email :</strong> ${normalizedEmail}</p>
              <p><strong>Prénom :</strong> ${firstName || 'Non renseigné'}</p>
              <p><strong>Audience Resend :</strong> ${audienceId || 'Globale'}</p>
              <p><strong>Date :</strong> ${new Date().toLocaleString('fr-FR')}</p>
            </div>
          `,
        });
      } catch (adminMailErr) {
        console.warn('Could not send admin notification:', adminMailErr);
      }

      return res.status(200).json({
        success: true,
        message: isAlreadyExists || alreadySubscribed
          ? 'Vous êtes déjà inscrit(e) à notre lettre d\'information !'
          : 'Votre inscription à la lettre d\'Alkymya a bien été enregistrée avec succès !',
        audienceId: audienceId || undefined,
        alreadySubscribed: isAlreadyExists || alreadySubscribed,
      });
    } catch (error: any) {
      console.error('Newsletter Server Error:', error);
      const rawMsg = error?.message || '';
      const isFsError = rawMsg.includes('ENOENT') || rawMsg.includes('mkdir') || rawMsg.includes('EACCES') || rawMsg.includes('EROFS');
      res.status(500).json({ 
        error: !isFsError && rawMsg ? rawMsg : 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer ultérieurement.' 
      });
    }
  });

  return app;
}
