import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage(null);
    
    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'Contact' }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        // Capture des erreurs spécifiques retournées par le serveur ou Resend
        setErrorMessage(result.error || `Erreur serveur : ${response.status}`);
        console.error('Server error response:', result);
      }
    } catch (error: any) {
      console.error('Network or client error:', error);
      setStatus('error');
      // Distinction entre erreur de réseau et erreur de code
      const msg = error instanceof TypeError && error.message.includes('fetch') 
        ? 'Impossible de joindre le serveur. Vérifiez que les routes API sont bien configurées.' 
        : `Erreur : ${error.message}`;
      setErrorMessage(msg);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper-orange/10 text-copper-orange mb-6">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest">Nous contacter</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-deep-blue mb-8">
            Prenons <span className="text-copper-orange">Contact</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            Une question ? Un projet ? N'hésitez pas à nous laisser un message, nous vous répondrons dans les plus brefs délais.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 md:p-12 rounded-[3rem] border-none shadow-2xl bg-white/80 backdrop-blur-md relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-copper-orange/10 blur-[100px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-deep-blue/5 blur-[100px] -ml-32 -mb-32" />

            <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-black text-deep-blue uppercase tracking-wider ml-1">Prénom</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Votre prénom"
                  required
                  className="w-full px-6 py-4 bg-background border-2 border-border/50 rounded-2xl focus:border-copper-orange focus:ring-0 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black text-deep-blue uppercase tracking-wider ml-1">Nom</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                  className="w-full px-6 py-4 bg-background border-2 border-border/50 rounded-2xl focus:border-copper-orange focus:ring-0 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black text-deep-blue uppercase tracking-wider ml-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                  className="w-full px-6 py-4 bg-background border-2 border-border/50 rounded-2xl focus:border-copper-orange focus:ring-0 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black text-deep-blue uppercase tracking-wider ml-1">Sujet</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="L'objet de votre message"
                  required
                  className="w-full px-6 py-4 bg-background border-2 border-border/50 rounded-2xl focus:border-copper-orange focus:ring-0 transition-all outline-none"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-black text-deep-blue uppercase tracking-wider ml-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Comment pouvons-nous vous aider ?"
                  required
                  className="w-full px-6 py-4 bg-background border-2 border-border/50 rounded-2xl focus:border-copper-orange focus:ring-0 transition-all outline-none resize-none"
                />
              </div>
              <div className="md:col-span-2 pt-4">
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full md:w-auto px-12 py-5 bg-deep-blue text-white rounded-full font-black uppercase tracking-widest hover:bg-copper-orange transition-all shadow-xl hover:shadow-copper-orange/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Envoi en cours...' : 'Envoyer'} <Mail className="h-5 w-5" />
                </button>
                
                {status === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-green-600 font-bold"
                  >
                    Merci ! Votre message a été envoyé avec succès.
                  </motion.p>
                )}
                
                {status === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-red-600 font-bold"
                  >
                    {errorMessage || 'Une erreur est survenue. Veuillez réessayer ou nous contacter par email directement.'}
                  </motion.p>
                )}
              </div>
            </form>
          </Card>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left"
        >
          <div className="p-8 rounded-3xl bg-muted/30 border border-border/50">
            <h3 className="font-black text-deep-blue uppercase tracking-wider mb-4">Cyril Garnier</h3>
            <a href="mailto:cyril@alkymya.co" className="text-copper-orange font-medium hover:underline">cyril@alkymya.co</a>
          </div>
          <div className="p-8 rounded-3xl bg-muted/30 border border-border/50">
            <h3 className="font-black text-deep-blue uppercase tracking-wider mb-4">Léonie Egesipe</h3>
            <a href="mailto:leonie@alkymya.co" className="text-copper-orange font-medium hover:underline">leonie@alkymya.co</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-sm uppercase tracking-[0.4em] font-bold text-muted-foreground/50 italic">
            "Chaque rencontre est une opportunité de transmutation."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
