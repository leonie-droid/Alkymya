import React, { useState, FormEvent } from 'react';
import { Instagram, Linkedin, Mail, ArrowUp, Youtube, Cookie, Check, Loader2, Sparkles, ShieldCheck } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { openCookiePreferencesModal } from '../utils/cookieConsent';
import { openNewsletterModal, subscribeToNewsletter } from '../utils/newsletter';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInlineSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);
    setStatus('idle');
    setFeedback('');

    const res = await subscribeToNewsletter({
      email,
      source: 'footer_inline',
    });

    setIsLoading(false);
    if (res.success) {
      setStatus('success');
      setFeedback(res.message);
      setEmail('');
    } else {
      setStatus('error');
      setFeedback(res.message);
    }
  };

  return (
    <footer id="reseaux" className="bg-primary text-primary-foreground pt-14 pb-8">
      <div className="container mx-auto px-4 max-w-[1240px]">
        {/* Newsletter Subscription Banner */}
        <div className="mb-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#16384e] via-[#102737] to-[#0a1822] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-copper-orange/15 blur-[90px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper-orange/20 border border-copper-orange/30 text-copper-orange text-[11px] font-black uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>Audience Dédiée · Resend</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white leading-tight">
                Notre veille créative, sans filtre.
              </h3>
              <p className="text-sm text-primary-foreground/75 leading-relaxed max-w-xl font-normal">
                Découvrez nos dernières créations interactives, les projets audacieux nés de notre réseau de partenaires et une sélection affûtée des nouveautés numériques du moment.
              </p>
            </div>

            <div className="lg:col-span-5">
              {status === 'success' ? (
                <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-sm flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
                  <div className="space-y-1">
                    <p className="font-bold text-white">Inscription confirmée !</p>
                    <p className="text-xs text-emerald-200/90 leading-relaxed">{feedback}</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleInlineSubscribe} className="space-y-2.5">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-grow">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-primary-foreground/40" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="votre.email@domaine.fr"
                        className="w-full pl-10 pr-4 py-3 rounded-full border border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-copper-orange focus:ring-2 focus:ring-copper-orange/20 outline-none text-sm transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-copper-orange hover:bg-white hover:text-deep-blue text-white text-xs font-black uppercase tracking-wider transition-all shadow-md disabled:opacity-50 cursor-pointer flex-shrink-0"
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <span>Suivre nos projets</span>
                      )}
                    </button>
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-red-300 font-medium px-2">
                      {feedback}
                    </p>
                  )}

                  <div className="flex items-center justify-between text-[11px] text-primary-foreground/50 px-2">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Zéro spam. Désinscription immédiate.</span>
                    </span>
                    <button
                      type="button"
                      onClick={openNewsletterModal}
                      className="hover:text-copper-orange underline transition-colors"
                    >
                      Options avancées
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-3">
            <Link to="/" className="mb-8 block">
              <Logo className="h-16" variant="white" />
            </Link>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-8 font-normal italic">
              "Explorer la beauté, partager la conscience, transformer le futur."
            </p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/alkymya_cyril" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="https://www.tiktok.com/@cyrilgarnierphoto" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <FaTiktok size={24} />
              </a>
              <a href="https://www.youtube.com/channel/UCon0sR5rVfTCuHOWG7LhAig" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Youtube className="h-6 w-6" /></a>
              <a href="https://www.linkedin.com/in/cyril-garnier-89697b1/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Linkedin className="h-6 w-6" /></a>
              <a href="mailto:cyril@alkymya.co" className="hover:text-accent transition-colors"><Mail className="h-6 w-6" /></a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end justify-between">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollToTop}
              className="rounded-full border-primary-foreground/20 hover:bg-accent hover:border-accent text-primary-foreground bg-transparent"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
            <div className="mt-8 md:mt-0 text-left md:text-right">
              <h4 className="text-sm uppercase tracking-[0.2em] font-bold mb-4 opacity-50">Engagement</h4>
              <p className="text-xs text-primary-foreground/60 leading-relaxed max-w-[200px]">
                Alkymya s'engage pour une empreinte numérique minimale et une éthique de production responsable.
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-primary-foreground/50 font-bold">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <p>© 2026 Alkymya.co. Tous droits réservés.</p>
            <Link to="/mentions-legales" className="hover:text-accent transition-colors">
              Mentions Légales
            </Link>
            <Link to="/newbusiness/" className="hover:text-accent transition-colors">
              New business
            </Link>
            <button
              type="button"
              onClick={openNewsletterModal}
              className="inline-flex items-center gap-1.5 text-copper-orange hover:text-white transition-colors cursor-pointer"
            >
              <Mail className="w-3 h-3" />
              <span>Newsletter</span>
            </button>
            <button
              type="button"
              onClick={openCookiePreferencesModal}
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors cursor-pointer"
            >
              <Cookie className="w-3 h-3" />
              <span>Gestion des cookies</span>
            </button>
          </div>
          <p className="text-primary-foreground/30">v2.0 • 2026</p>
        </div>
      </div>
    </footer>
  );
}
