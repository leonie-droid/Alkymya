import express from 'express';
import { createServer as createViteServer } from 'vite';
import { Resend } from 'resend';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

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

  app.use(express.json());

  // API Route for Contact Form
  app.post('/api/send-contact', async (req, res) => {
    try {
      const { firstName, lastName, email, subject, message, type } = req.body;
      
      console.log(`Tentative d'envoi d'email de ${email} via Resend...`);

      if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is missing in environment variables');
        return res.status(500).json({ error: 'Configuration serveur incomplète (RESEND_API_KEY manquante)' });
      }

      const resendClient = getResend();

      const { data, error } = await resendClient.emails.send({
        from: 'Alkymya Contact <onboarding@resend.dev>',
        to: ['cyril@alkymya.co'],
        subject: `[${type || 'Contact'}] ${subject || 'Nouveau message'}`,
        replyTo: email,
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
            <div style="background-color: #0c1b44; padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">ALKYMYA</h1>
              <p style="color: #fb923c; margin: 10px 0 0 0; text-transform: uppercase; font-size: 12px; font-weight: bold; letter-spacing: 2px;">Formulaire de Contact</p>
            </div>
            
            <div style="padding: 40px;">
              <p style="font-size: 16px; margin-bottom: 25px;">Bonjour,</p>
              <p style="font-size: 16px; margin-bottom: 25px;">Vous avez reçu un nouveau message depuis le site <strong>alkymya.co</strong> :</p>
              
              <div style="background-color: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #fb923c;">
                <p style="margin: 0 0 10px 0;"><strong>Expéditeur :</strong> ${firstName} ${lastName}</p>
                <p style="margin: 0 0 10px 0;"><strong>Email :</strong> <a href="mailto:${email}" style="color: #fb923c; text-decoration: none;">${email}</a></p>
                <p style="margin: 0 0 10px 0;"><strong>Sujet :</strong> ${subject}</p>
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                <p style="margin: 0; font-style: italic; white-space: pre-wrap;">${message}</p>
              </div>
              
              <p style="font-size: 14px; color: #64748b;">Ce message a été envoyé automatiquement via le système de contact Alkymya.</p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 40px; text-align: center; border-top: 1px solid #e2e8f0;">
              <img src="https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png" alt="Alkymya Logo" style="max-width: 180px; margin-bottom: 20px;" />
              <div style="font-size: 12px; color: #94a3b8;">
                <p style="margin: 5px 0;">© ${new Date().getFullYear()} Alkymya. Tous droits réservés.</p>
                <p style="margin: 5px 0;">Créateurs d'avenir par l'IA</p>
              </div>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error('Erreur API Resend:', error);
        return res.status(400).json({ error: error.message || 'Erreur lors de l\'envoi via Resend' });
      }

      console.log('Email envoyé avec succès:', data);
      res.status(200).json({ success: true, data });
    } catch (error: any) {
      console.error('Erreur Critique Serveur:', error);
      res.status(500).json({ error: error.message || 'Erreur Interne Serveur' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
