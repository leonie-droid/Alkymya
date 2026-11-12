import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Shield, User, Globe, Info, Cookie, Settings2, Bot, ArrowRight } from 'lucide-react';
import { openCookiePreferencesModal } from '../utils/cookieConsent';
import { SEO } from '../components/SEO';

const MentionsLegales: React.FC = () => {
  return (
    <div className="bg-[#FAF9F7] text-[#1F4F6E] min-h-screen pt-28 pb-20 selection:bg-copper-orange selection:text-white">
      <SEO
        title="Mentions Légales & Gestion des Cookies | Alkymya"
        description="Consultez les informations légales, mentions obligatoires, hébergement et politique de protection des données (RGPD) du site Alkymya."
      />

      {/* Hero Section — Maquette Signature Deep Blue */}
      <section className="bg-gradient-to-b from-[#1F4F6E] via-[#163c54] to-[#122e40] text-white py-20 px-6 sm:px-12 md:py-28 text-center relative overflow-hidden mb-16">
        {/* Micro-dot grid pattern & glow blur */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#02ADAB_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#02ADAB]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-copper-orange/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#02ADAB] text-xs font-bold uppercase tracking-wider mb-6">
            <Shield className="w-4 h-4" />
            <span>Cadre Juridique &amp; Transparence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-light text-white mb-6 tracking-tight leading-tight">
            Mentions Légales &amp; <strong className="font-semibold text-white underline decoration-[#02ADAB] decoration-2 underline-offset-8">données personnelles</strong>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-6">
            Informations réglementaires, hébergement, droits de propriété intellectuelle et gestion des cookies conformément au RGPD.
          </p>

          <div className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white/70">
            Version 2.2 • Mise à jour Mars 2026
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 space-y-16">

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Éditeur */}
          <div className="p-8 rounded-2xl bg-white border border-[#1F4F6E]/10 shadow-[0_4px_24px_rgba(31,79,110,0.06)] space-y-5">
            <div className="flex items-center gap-3 text-[#1F4F6E]">
              <div className="w-10 h-10 rounded-xl bg-[#02ADAB]/10 text-[#02ADAB] flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-[#1F4F6E]">Éditeur du site</h2>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <p><strong className="text-[#1F4F6E]">Nom :</strong> Cyril Garnier</p>
              <p><strong className="text-[#1F4F6E]">Qualité :</strong> Enseignant-Explorateur, Expert IA &amp; Innovation</p>
              <p><strong className="text-[#1F4F6E]">Société :</strong> Cyril Garnier Consulting</p>
              <p><strong className="text-[#1F4F6E]">Email de contact :</strong> <a href="mailto:cyril@alkymya.co" className="text-copper-orange hover:underline font-bold">cyril@alkymya.co</a></p>
            </div>
          </div>

          {/* Co-auteurs IA */}
          <div className="p-8 rounded-2xl bg-white border border-[#1F4F6E]/10 shadow-[0_4px_24px_rgba(31,79,110,0.06)] space-y-5">
            <div className="flex items-center gap-3 text-copper-orange">
              <div className="w-10 h-10 rounded-xl bg-copper-orange/10 text-copper-orange flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-[#1F4F6E]">Co-création assistée par IA</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ce site web, ses outils interactifs et ses supports de recherche ont été co-créés avec l'assistance d'agents d'intelligence artificielle :
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Google Gemini", "Genspark", "Reve", "Perplexity", "Claude"].map((agent) => (
                <span key={agent} className="px-3 py-1 rounded-full bg-[#1F4F6E]/5 text-xs font-bold text-[#1F4F6E]">
                  {agent}
                </span>
              ))}
            </div>
          </div>

          {/* Responsable & Contacts */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1F4F6E] to-[#122e40] text-white shadow-xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#02ADAB] mb-1 block">
                Publication
              </span>
              <h2 className="text-2xl font-heading font-bold mb-2">Responsable de publication</h2>
              <p className="text-white/80 text-sm">Cyril Garnier — Directeur Associé Alkymya</p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#02ADAB] shrink-0" />
                <span className="text-white/90">Direction &amp; Ateliers : <a href="mailto:cyril@alkymya.co" className="hover:underline font-semibold">cyril@alkymya.co</a></span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#02ADAB] shrink-0" />
                <span className="text-white/90">Direction Artistique : <a href="mailto:leonie@alkymya.co" className="hover:underline font-semibold">leonie@alkymya.co</a></span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-copper-orange shrink-0" />
                <span className="text-white/90">Réseaux : @alkymya_cyril / @alkymya_leonie</span>
              </div>
            </div>
          </div>

          {/* Hébergement */}
          <div className="p-8 rounded-2xl bg-white border border-[#1F4F6E]/10 shadow-[0_4px_24px_rgba(31,79,110,0.06)] space-y-5">
            <div className="flex items-center gap-3 text-[#1F4F6E]">
              <div className="w-10 h-10 rounded-xl bg-[#1F4F6E]/10 text-[#1F4F6E] flex items-center justify-center">
                <Info className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-[#1F4F6E]">Hébergement &amp; Cloud</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Cette application et ses serveurs de traitement sont hébergés par l'infrastructure cloud haute performance :
            </p>
            <div className="p-4 rounded-xl bg-[#FAF9F7] border border-[#1F4F6E]/10 text-sm">
              <p className="font-bold text-[#1F4F6E]">Google Cloud Platform (GCP)</p>
              <p className="text-xs text-slate-500 mt-0.5">Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>
            </div>
          </div>
        </div>

        {/* Section Cookies & Protection des données (RGPD / CNIL) */}
        <section className="p-8 md:p-12 rounded-3xl bg-white border border-[#1F4F6E]/10 shadow-[0_8px_32px_rgba(31,79,110,0.06)] space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#1F4F6E]/10 pb-6">
            <div className="flex items-center gap-3 text-[#1F4F6E]">
              <div className="w-12 h-12 rounded-xl bg-copper-orange/10 text-copper-orange flex items-center justify-center">
                <Cookie className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1F4F6E]">
                  Cookies &amp; Mesure d'audience (RGPD)
                </h2>
                <p className="text-xs text-slate-500">Google Analytics ID : G-87HJ0K59JX • Consent Mode v2</p>
              </div>
            </div>

            <button
              type="button"
              onClick={openCookiePreferencesModal}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1F4F6E] hover:bg-[#163c54] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              <Settings2 className="w-4 h-4" />
              <span>Gérer mes préférences cookies</span>
            </button>
          </div>

          <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
            <p>
              Alkymya applique une politique stricte de respect de la vie privée conforme au Règlement Général sur la Protection des Données (RGPD 2016/679) et aux recommandations de la CNIL.
            </p>
            <p>
              Ce site utilise le tag d’analyse <strong className="text-[#1F4F6E]">Google Analytics (ID : G-87HJ0K59JX)</strong> afin d'établir des statistiques anonymisées d'audience et d’optimiser l'ergonomie de nos pages.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FAF9F7] border border-[#1F4F6E]/10 text-xs space-y-1">
                <p className="font-bold text-[#1F4F6E]">Cookies techniques indispensables :</p>
                <p className="text-slate-600">Nécessaires à la navigation, au fonctionnement du panier et au respect de vos choix de consentement. Aucune donnée nominative n'est transmise.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF9F7] border border-[#1F4F6E]/10 text-xs space-y-1">
                <p className="font-bold text-[#1F4F6E]">Cookies de mesure d'audience :</p>
                <p className="text-slate-600">Soumis à votre consentement préalable explicite. Votre adresse IP est systématiquement anonymisée avant enregistrement.</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 pt-2">
              Vous pouvez à tout instant retirer ou modifier votre choix via le bouton ci-dessus ou en cliquant sur le lien « Gestion des cookies » présent dans le pied de page du site.
            </p>
          </div>
        </section>

        {/* Back Link */}
        <div className="text-center pt-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#02ADAB] hover:text-copper-orange transition-colors"
          >
            <span>← Retourner à la page d'accueil</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MentionsLegales;
