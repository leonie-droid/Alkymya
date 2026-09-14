import React from 'react';
import { motion } from 'motion/react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { Mail, Shield, User, Globe, Info, Cookie, Settings2 } from 'lucide-react';
import { openCookiePreferencesModal } from '../utils/cookieConsent';

const MentionsLegales: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Mini Header for this page */}
      <div className="p-8">
        <Link to="/" className="inline-block group">
          <Logo className="text-4xl md:text-5xl" />
        </Link>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-16"
        >
          {/* Hero Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-4 text-accent">
              <Shield className="w-8 h-8" />
              <span className="text-xs font-black uppercase tracking-[0.3em]">Juridique</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-deep-blue leading-none">
              Mentions Légales
            </h1>
            <p className="text-xl text-muted-foreground font-medium">Version 2.1</p>
          </section>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Editeur */}
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-[2.5rem] bg-muted/30 border border-accent/10 space-y-6"
            >
              <div className="flex items-center gap-3 text-deep-blue">
                <User className="w-6 h-6" />
                <h2 className="text-2xl font-heading font-black">Éditeur</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p><strong className="text-deep-blue">Nom :</strong> Cyril Garnier</p>
                <p><strong className="text-deep-blue">Qualité :</strong> Enseignant-Explorateur, Expert IA</p>
                <p><strong className="text-deep-blue">Email :</strong> <a href="mailto:cyril@alkymya.co" className="hover:text-accent font-bold transition-colors">cyril@alkymya.co</a></p>
                <p><strong className="text-deep-blue">Société :</strong> Cyril Garnier Consulting</p>
              </div>
            </motion.section>

            {/* Co-auteurs */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-[2.5rem] bg-accent/5 border border-accent/20 space-y-6"
            >
              <div className="flex items-center gap-3 text-accent">
                <Bot className="w-6 h-6" />
                <h2 className="text-2xl font-heading font-black">Co-auteurs</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ce site a été co-créé avec l'assistance d'intelligences artificielles, notamment : <br/>
                <span className="font-bold text-deep-blue">Gemini, Genspark, Reve, Perplexity.</span>
              </p>
            </motion.section>

            {/* Responsable & Contacts */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-[2.5rem] bg-deep-blue text-white space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-black">Responsable de publication</h2>
                <p className="text-white/70">Cyril Garnier</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-black">Contacts</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-accent" />
                    <span className="text-sm">Support technique : cyril@alkymya.co</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-accent" />
                    <span className="text-sm">Partenariats éducatifs : leonie@alkymya.co</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-accent" />
                    <span className="text-sm">Instagram : @alkymya_cyril / @alkymya_leonie</span>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Hébergement */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 rounded-[2.5rem] border-2 border-dashed border-muted/50 space-y-6"
            >
              <div className="flex items-center gap-3 text-deep-blue">
                <Info className="w-6 h-6" />
                <h2 className="text-2xl font-heading font-black">Hébergement</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Cette application est hébergée par <br/>
                <strong className="text-deep-blue">Google Cloud Platform</strong>.
              </p>
            </motion.section>
          </div>

          {/* Section Cookies & Protection des données (RGPD / CNIL) */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-200 space-y-6"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3 text-deep-blue">
                <Cookie className="w-7 h-7 text-deep-green" />
                <h2 className="text-2xl md:text-3xl font-heading font-black">Cookies & Mesure d'audience (Google Tag)</h2>
              </div>
              <button
                type="button"
                onClick={openCookiePreferencesModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-deep-blue hover:bg-deep-blue/90 text-white text-xs font-bold transition-all shadow-sm"
              >
                <Settings2 className="w-4 h-4" />
                <span>Modifier mes préférences de cookies</span>
              </button>
            </div>

            <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
              <p>
                Alkymya applique une politique stricte de respect de la vie privée conforme au Règlement Général sur la Protection des Données (RGPD) et aux recommandations de la CNIL.
              </p>
              <p>
                Ce site utilise le tag d’analyse <strong className="text-deep-blue">Google Analytics (ID : G-87HJ0K59JX)</strong> afin d'établir des statistiques de fréquentation anonymisées et d’améliorer la qualité de nos ateliers et œuvres.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Cookies techniques indispensables :</strong> nécessaires au bon fonctionnement de la navigation, conservés sans recueil préalable de consentement.</li>
                <li><strong>Cookies de mesure d'audience (Google Analytics) :</strong> soumis à votre consentement préalable via le bandeau de consentement (Google Consent Mode v2). L’adresse IP est systématiquement anonymisée.</li>
              </ul>
              <p className="text-xs text-slate-500">
                Vous pouvez retirer ou modifier votre consentement à tout instant à l'aide du bouton ci-dessus ou via le lien « Gestion des cookies » présent en pied de page.
              </p>
            </div>
          </motion.section>

          {/* Bottom Link */}
          <div className="pt-12 text-center">
            <Link 
              to="/" 
              className="text-xs font-black uppercase tracking-[0.4em] text-accent hover:text-deep-blue transition-colors"
            >
              ← Retour à l'accueil
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

// Simple Bot icon since it's used in the Co-auteurs section
const Bot = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </svg>
);

export default MentionsLegales;
