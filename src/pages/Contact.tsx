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
      const apiUrl = `${window.location.origin}/api/send-contact`;
      console.log(`Fetching: ${apiUrl}`);
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'Contact' }),
      });

      let result;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        result = await response.json();
      } else {
        const text = await response.text();
        console.error("Non-JSON response from server:", text);
        result = { error: `Réponse non-JSON (${response.status}). Le serveur a renvoyé du texte/HTML au lieu d'un objet JSON. URL: ${apiUrl}` };
      }

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
        ? `Impossible de joindre le serveur à ${window.location.origin}/api/send-contact. Vérifiez la configuration du serveur (Proxy/Functions).` 
        : `Erreur client : ${error.message}`;
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
    <div className="bg-[#FAF9F7] text-[#1F4F6E] min-h-screen pt-28 pb-20 selection:bg-copper-orange selection:text-white">
      {/* HERO SECTION EN BLEU FONCÉ AVEC TEXTE EN BLANC NET */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1F4F6E] via-[#163c54] to-[#122e40] text-white py-20 px-6 sm:px-12 md:py-28 text-center">
        {/* Glow & texture subtile */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#02ADAB_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#02ADAB]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#02ADAB] text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Échange &amp; Collaboration · Alkymya</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-tight leading-[1.15] mb-6">
            <span className="text-white block font-light">
              Parlons de votre projet,
            </span>
            <strong className="font-semibold text-white underline decoration-[#02ADAB] decoration-2 underline-offset-8">
              prenons contact.
            </strong>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-normal mb-10">
            Une question sur nos ateliers, notre accompagnement New Business MVP ou un projet de commande artistique ? Écrivez-nous, nous vous répondons rapidement avec une recommandation claire.
          </p>
        </div>

        {/* Chiffres clés intégrés */}
        <div className="max-w-4xl mx-auto mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">
              <strong className="font-semibold text-[#02ADAB]">&lt; 24h</strong>
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Délai de réponse</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">
              <strong className="font-semibold text-white">100%</strong>
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Direct fondateur</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">
              <strong className="font-semibold text-[#C06721]">Paris &amp; 77</strong>
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Présence territoriale</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">
              <strong className="font-semibold text-[#02ADAB]">Visio / Présentiel</strong>
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Modalités d'échange</div>
          </div>
        </div>
      </section>

      {/* FORMULAIRE DE CONTACT */}
      <section className="max-w-[1100px] mx-auto py-16 px-6 sm:px-8">
        <div className="bg-white rounded-3xl border border-[#1F4F6E]/10 shadow-[0_4px_24px_rgba(31,79,110,0.06)] p-8 sm:p-14 mb-16">
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C06721] block mb-2">
              Formulaire de contact direct
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#1F4F6E]">
              Envoyez-nous un message <strong className="font-semibold">pour démarrer</strong>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1F4F6E] uppercase tracking-wider ml-1">Prénom</label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Votre prénom"
                required
                className="w-full px-5 py-3.5 bg-[#FAF9F7] border border-[#1F4F6E]/15 rounded-xl focus:border-[#C06721] focus:bg-white transition-all outline-none text-sm text-[#1F4F6E]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1F4F6E] uppercase tracking-wider ml-1">Nom</label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                className="w-full px-5 py-3.5 bg-[#FAF9F7] border border-[#1F4F6E]/15 rounded-xl focus:border-[#C06721] focus:bg-white transition-all outline-none text-sm text-[#1F4F6E]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1F4F6E] uppercase tracking-wider ml-1">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="nom@entreprise.fr"
                required
                className="w-full px-5 py-3.5 bg-[#FAF9F7] border border-[#1F4F6E]/15 rounded-xl focus:border-[#C06721] focus:bg-white transition-all outline-none text-sm text-[#1F4F6E]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1F4F6E] uppercase tracking-wider ml-1">Sujet</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Objet de votre demande"
                required
                className="w-full px-5 py-3.5 bg-[#FAF9F7] border border-[#1F4F6E]/15 rounded-xl focus:border-[#C06721] focus:bg-white transition-all outline-none text-sm text-[#1F4F6E]"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold text-[#1F4F6E] uppercase tracking-wider ml-1">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Décrivez votre besoin, votre projet ou votre question..."
                required
                className="w-full px-5 py-3.5 bg-[#FAF9F7] border border-[#1F4F6E]/15 rounded-xl focus:border-[#C06721] focus:bg-white transition-all outline-none text-sm text-[#1F4F6E] resize-none"
              />
            </div>
            <div className="md:col-span-2 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-10 py-4 bg-[#1F4F6E] hover:bg-[#02ADAB] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2.5 disabled:opacity-50 cursor-pointer"
              >
                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'} <Mail className="h-4 w-4" />
              </button>
              
              <span className="text-xs text-[#7a9ab0]">
                Nous ne partageons jamais vos coordonnées.
              </span>
            </div>

            {status === 'success' && (
              <div className="md:col-span-2 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold">
                Merci ! Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.
              </div>
            )}
            
            {status === 'error' && (
              <div className="md:col-span-2 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm font-semibold">
                {errorMessage || 'Une erreur est survenue. Veuillez réessayer ou nous contacter par email directement.'}
              </div>
            )}
          </form>
        </div>

        {/* CARTES DE CONTACT DIRECT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-white border border-[#1F4F6E]/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#C06721] uppercase tracking-wider block mb-1">Directeur Associé</span>
              <h3 className="text-xl font-bold text-[#1F4F6E] mb-2">Cyril Garnier</h3>
              <p className="text-xs text-[#5a7a90] leading-relaxed mb-4">
                Conseil stratégique, accompagnement New Business MVP, grands comptes et formations.
              </p>
            </div>
            <a href="mailto:cyril@alkymya.co" className="text-sm font-bold text-[#1F4F6E] hover:text-[#02ADAB] transition-colors">
              cyril@alkymya.co →
            </a>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#1F4F6E]/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#C06721] uppercase tracking-wider block mb-1">Chef de Projet Digital &amp; DA</span>
              <h3 className="text-xl font-bold text-[#1F4F6E] mb-2">Léonie Egesipe</h3>
              <p className="text-xs text-[#5a7a90] leading-relaxed mb-4">
                Créations visuelles, direction artistique IA, gestion des ateliers et réseaux.
              </p>
            </div>
            <a href="mailto:leonie@alkymya.co" className="text-sm font-bold text-[#1F4F6E] hover:text-[#02ADAB] transition-colors">
              leonie@alkymya.co →
            </a>
          </div>
        </div>
      </section>

      {/* BANNIÈRE CITATION FINALE */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 mb-8">
        <div className="bg-[#C06721] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <p className="text-lg md:text-xl font-light italic text-white/95 max-w-xl mx-auto">
            « Chaque rencontre est une opportunité de transmutation. »
          </p>
        </div>
      </section>
    </div>
  );
}
