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
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      {/* HERO SECTION */}
      <header className="bg-[#1F4F6E] text-white py-20 px-6 sm:px-10 text-center relative overflow-hidden">
        <div className="max-w-[700px] mx-auto relative z-10">
          <p className="text-[0.85rem] tracking-[0.15em] uppercase text-[#02ADAB] mb-4 font-normal">
            Échange &amp; Collaboration · Alkymya
          </p>
          <h1 className="font-light text-[2.4rem] sm:text-[2.6rem] leading-[1.2] mb-5 text-white">
            Parlons de votre projet,<br />
            <strong className="font-medium text-white">prenons contact.</strong>
          </h1>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-white/75 max-w-[620px] mx-auto leading-[1.7] font-light mb-8">
            Une question sur nos ateliers, notre accompagnement New Business MVP ou un projet de commande artistique ? Écrivez-nous, nous vous répondons rapidement avec une recommandation claire.
          </p>

          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">&lt; 24h</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Délai de réponse</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">100%</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Direct fondateur</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">Paris &amp; 77</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Présence territoriale</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">Visio / Site</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Modalités d'échange</div>
            </div>
          </div>
        </div>
      </header>

      {/* FORMULAIRE DE CONTACT */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Formulaire de contact direct
        </p>
        <h2 className="text-[1.8rem] sm:text-[2rem] font-light mb-3 text-[#1F4F6E]">
          Envoyez-nous un message <strong className="font-medium text-[#1F4F6E]">pour démarrer</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-10 font-normal">
          Décrivez votre besoin ou votre contexte : nous étudions chaque demande personnellement.
        </p>

        <div className="bg-white rounded-[12px] shadow-[0_2px_16px_rgba(31,79,110,0.08)] p-8 sm:p-12 mb-12">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-medium text-[#1F4F6E] uppercase tracking-wider block">Prénom</label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Votre prénom"
                required
                className="w-full px-4 py-3 bg-[#f4f6f9] border border-[rgba(31,79,110,0.15)] rounded-[8px] focus:border-[#02ADAB] focus:bg-white transition-all outline-none text-sm text-[#1F4F6E]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-[#1F4F6E] uppercase tracking-wider block">Nom</label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                className="w-full px-4 py-3 bg-[#f4f6f9] border border-[rgba(31,79,110,0.15)] rounded-[8px] focus:border-[#02ADAB] focus:bg-white transition-all outline-none text-sm text-[#1F4F6E]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-[#1F4F6E] uppercase tracking-wider block">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="nom@entreprise.fr"
                required
                className="w-full px-4 py-3 bg-[#f4f6f9] border border-[rgba(31,79,110,0.15)] rounded-[8px] focus:border-[#02ADAB] focus:bg-white transition-all outline-none text-sm text-[#1F4F6E]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-[#1F4F6E] uppercase tracking-wider block">Sujet</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Objet de votre demande"
                required
                className="w-full px-4 py-3 bg-[#f4f6f9] border border-[rgba(31,79,110,0.15)] rounded-[8px] focus:border-[#02ADAB] focus:bg-white transition-all outline-none text-sm text-[#1F4F6E]"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-medium text-[#1F4F6E] uppercase tracking-wider block">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Décrivez votre besoin, votre projet ou votre question..."
                required
                className="w-full px-4 py-3 bg-[#f4f6f9] border border-[rgba(31,79,110,0.15)] rounded-[8px] focus:border-[#02ADAB] focus:bg-white transition-all outline-none text-sm text-[#1F4F6E] resize-none"
              />
            </div>
            <div className="md:col-span-2 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#C06721] hover:bg-[#a85517] text-white rounded-[8px] font-medium text-sm tracking-[0.04em] transition-all shadow-sm flex items-center justify-center gap-2.5 disabled:opacity-50 cursor-pointer"
              >
                <span>{status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                <Mail className="h-4 w-4" />
              </button>
              
              <span className="text-xs text-[#7a9ab0]">
                Nous ne partageons jamais vos coordonnées.
              </span>
            </div>

            {status === 'success' && (
              <div className="md:col-span-2 p-4 rounded-[8px] bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium">
                Merci ! Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.
              </div>
            )}
            
            {status === 'error' && (
              <div className="md:col-span-2 p-4 rounded-[8px] bg-red-50 border border-red-200 text-red-800 text-sm font-medium">
                {errorMessage || 'Une erreur est survenue. Veuillez réessayer ou nous contacter par email directement.'}
              </div>
            )}
          </form>
        </div>

        {/* CARTES DE CONTACT DIRECT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col justify-between">
            <div>
              <span className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-[#02ADAB] block mb-2">
                Directeur Associé
              </span>
              <h3 className="text-[1.2rem] font-medium text-[#1F4F6E] mb-2">Cyril Garnier</h3>
              <p className="text-[0.95rem] text-[#5a7a90] leading-[1.6] mb-5 font-normal">
                Conseil stratégique, accompagnement New Business MVP, grands comptes et formations.
              </p>
            </div>
            <a href="mailto:cyril@alkymya.co" className="text-[0.9rem] font-medium text-[#02ADAB] hover:text-[#037971] transition-colors">
              cyril@alkymya.co →
            </a>
          </div>

          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col justify-between">
            <div>
              <span className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-[#02ADAB] block mb-2">
                Chef de Projet Digital &amp; DA
              </span>
              <h3 className="text-[1.2rem] font-medium text-[#1F4F6E] mb-2">Léonie Egesipe</h3>
              <p className="text-[0.95rem] text-[#5a7a90] leading-[1.6] mb-5 font-normal">
                Créations visuelles, direction artistique IA, gestion des ateliers et réseaux.
              </p>
            </div>
            <a href="mailto:leonie@alkymya.co" className="text-[0.9rem] font-medium text-[#02ADAB] hover:text-[#037971] transition-colors">
              leonie@alkymya.co →
            </a>
          </div>
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* BANNIÈRE CITATION FINALE ORANGE #C06721 */}
      <div className="bg-[#C06721] text-white text-center py-[70px] px-10">
        <p className="text-[1.35rem] sm:text-[1.6rem] font-light text-white max-w-[600px] mx-auto leading-[1.5]">
          « Chaque rencontre est une opportunité de transmutation. »
        </p>
      </div>
    </div>
  );
}
