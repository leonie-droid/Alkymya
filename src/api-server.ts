import express, { Express } from 'express';
import { Resend } from 'resend';

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
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
            <div style="background-color: #0c1b44; padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">ALKYMYA</h1>
              <p style="color: #fb923c; margin: 10px 0 0 0; text-transform: uppercase; font-size: 12px; font-weight: bold; letter-spacing: 2px;">Formulaire de Contact</p>
            </div>
            <div style="padding: 40px;">
              <p style="font-size: 16px;">Vous avez reçu un nouveau message depuis le site <strong>alkymya.co</strong> :</p>
              <div style="background-color: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #fb923c;">
                <p><strong>Expéditeur :</strong> ${firstName} ${lastName}</p>
                <p><strong>Email :</strong> <a href="mailto:${email}" style="color: #fb923c; text-decoration: none;">${email}</a></p>
                <p><strong>Sujet :</strong> ${subject}</p>
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            <div style="background-color: #f8fafc; padding: 40px; text-align: center; border-top: 1px solid #e2e8f0;">
              <img src="https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png" alt="Alkymya Logo" style="max-width: 180px;" />
              <p style="font-size: 12px; color: #94a3b8; margin-top: 10px;">© ${new Date().getFullYear()} Alkymya. Créateurs d'avenir par l'IA</p>
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

  return app;
}
