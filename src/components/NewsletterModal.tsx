import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Check, X, Sparkles, Loader2, ShieldCheck } from 'lucide-react';
import { subscribeToNewsletter } from '../utils/newsletter';

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setStatus('idle');
      setMessage('');
      setTimeout(() => inputRef.current?.focus(), 150);
    };

    window.addEventListener('alkymya_open_newsletter', handleOpen);
    return () => {
      window.removeEventListener('alkymya_open_newsletter', handleOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);
    setStatus('idle');
    setMessage('');

    const res = await subscribeToNewsletter({
      email,
      firstName,
      source: 'modal_button',
    });

    setIsLoading(false);
    if (res.success) {
      setStatus('success');
      setMessage(res.message);
      setEmail('');
      setFirstName('');
    } else {
      setStatus('error');
      setMessage(res.message);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-deep-blue/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-deep-blue/10 overflow-hidden z-10"
          >
            {/* Header with deep blue & copper gradient */}
            <div className="p-8 pb-6 bg-gradient-to-br from-[#1F4F6E] via-[#16384e] to-[#0d2230] text-white relative">
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                aria-label="Fermer la fenêtre"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper-orange/20 border border-copper-orange/40 text-copper-orange text-xs font-black uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Audience Dédiée Resend</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white leading-tight">
                Notre veille créative, sans filtre.
              </h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed font-normal">
                Découvrez nos dernières créations interactives, les projets audacieux nés de notre réseau de partenaires et une sélection affûtée des nouveautés numériques du moment.
              </p>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {status === 'success' ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <Check className="w-7 h-7 stroke-[3]" />
                  </div>
                  <h4 className="text-xl font-heading font-black text-deep-blue">
                    Inscription confirmée !
                  </h4>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    {message} Vous recevrez prochainement notre sélection créative et nos nouveaux projets.
                  </p>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="mt-4 px-6 py-2.5 rounded-full bg-deep-blue hover:bg-copper-orange text-white text-xs font-black uppercase tracking-widest transition-colors shadow-md"
                  >
                    Fermer
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="newsletter-firstname" className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-1.5">
                      Prénom <span className="text-muted-foreground font-normal">(facultatif)</span>
                    </label>
                    <input
                      id="newsletter-firstname"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Ex : Alexandra"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-slate-50 focus:bg-white focus:border-copper-orange focus:ring-2 focus:ring-copper-orange/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="newsletter-email" className="block text-xs font-bold text-deep-blue uppercase tracking-wider mb-1.5">
                      Adresse email <span className="text-copper-orange font-bold">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input
                        ref={inputRef}
                        id="newsletter-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nom@entreprise.fr"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-slate-50 focus:bg-white focus:border-copper-orange focus:ring-2 focus:ring-copper-orange/20 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium leading-relaxed">
                      {message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-2 py-3.5 px-6 rounded-xl bg-copper-orange hover:bg-deep-blue disabled:opacity-60 text-white font-heading font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Inscription en cours...</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4" />
                        <span>Suivre nos projets</span>
                      </>
                    )}
                  </button>

                  <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Zéro spam. Désinscription en un clic à tout moment.</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
