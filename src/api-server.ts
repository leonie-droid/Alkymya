import express, { Express } from 'express';
import { Resend } from 'resend';
import { GoogleGenAI } from "@google/genai";

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

  return app;
}
