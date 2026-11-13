import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Shield, User, Globe, Info, Cookie, Settings2, Bot, ArrowRight } from 'lucide-react';
import { openCookiePreferencesModal } from '../utils/cookieConsent';
import { SEO } from '../components/SEO';

const MentionsLegales: React.FC = () => {
  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Mentions Légales & Gestion des Cookies | Alkymya"
        description="Consultez les informations légales, mentions obligatoires, hébergement et politique de protection des données (RGPD) du site Alkymya."
      />

      {/* HERO SECTION */}
      <header className="bg-[#1F4F6E] text-white py-20 px-6 sm:px-10 text-center relative overflow-hidden">
        <div className="max-w-[700px] mx-auto relative z-10">
          <p className="text-[0.85rem] tracking-[0.15em] uppercase text-[#02ADAB] mb-4 font-normal">
            Cadre Juridique &amp; Transparence
          </p>
          <h1 className="font-light text-[2.4rem] sm:text-[2.6rem] leading-[1.2] mb-5 text-white">
            Mentions Légales &amp;<br />
            <strong className="font-medium text-white">données personnelles</strong>
          </h1>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-white/75 max-w-[620px] mx-auto leading-[1.7] font-light mb-6">
            Informations réglementaires, hébergement, droits de propriété intellectuelle et gestion des cookies conformément au RGPD.
          </p>
          <span className="inline-block bg-white/10 text-white/80 text-xs font-medium uppercase tracking-wider px-3.5 py-1.5 rounded-[4px]">
            Version 2.2 · Mise à jour Mars 2026
          </span>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6 space-y-10">
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Éditeur */}
          <div className="p-7 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] space-y-4">
            <div className="flex items-center gap-3 text-[#1F4F6E]">
              <div className="w-10 h-10 rounded-[8px] bg-[rgba(2,173,171,0.1)] text-[#02ADAB] flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <h2 className="text-[1.25rem] font-medium text-[#1F4F6E]">Éditeur du site</h2>
            </div>
            <div className="space-y-2.5 text-[0.95rem] text-[#5a7a90]">
              <p><strong className="text-[#1F4F6E] font-medium">Nom :</strong> Cyril Garnier</p>
              <p><strong className="text-[#1F4F6E] font-medium">Qualité :</strong> Enseignant-Explorateur, Expert IA &amp; Innovation</p>
              <p><strong className="text-[#1F4F6E] font-medium">Société :</strong> Cyril Garnier Consulting</p>
              <p><strong className="text-[#1F4F6E] font-medium">Email de contact :</strong> <a href="mailto:cyril@alkymya.co" className="text-[#02ADAB] hover:text-[#037971] font-medium">cyril@alkymya.co</a></p>
            </div>
          </div>

          {/* Co-auteurs IA */}
          <div className="p-7 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] space-y-4">
            <div className="flex items-center gap-3 text-[#1F4F6E]">
              <div className="w-10 h-10 rounded-[8px] bg-[rgba(192,103,33,0.12)] text-[#C06721] flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <h2 className="text-[1.25rem] font-medium text-[#1F4F6E]">Co-création assistée par IA</h2>
            </div>
            <p className="text-[0.95rem] text-[#5a7a90] leading-[1.6]">
              Ce site web, ses outils interactifs et ses supports de recherche ont été co-créés avec l'assistance d'agents d'intelligence artificielle :
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Google Gemini", "Genspark", "Reve", "Perplexity", "Claude"].map((agent) => (
                <span key={agent} className="px-3 py-1 rounded-[4px] bg-[#f4f6f9] text-xs font-medium text-[#1F4F6E]">
                  {agent}
                </span>
              ))}
            </div>
          </div>

          {/* Responsable & Contacts */}
          <div className="p-7 rounded-[12px] bg-[#1F4F6E] text-white shadow-[0_2px_16px_rgba(31,79,110,0.12)] space-y-5">
            <div>
              <span className="text-[0.72rem] font-medium uppercase tracking-[0.15em] text-[#02ADAB] mb-1 block">
                Publication
              </span>
              <h2 className="text-[1.25rem] font-medium mb-1.5 text-white">Responsable de publication</h2>
              <p className="text-white/75 text-[0.95rem]">Cyril Garnier — Directeur Associé Alkymya</p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2.5 text-[0.9rem]">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#02ADAB] shrink-0" />
                <span className="text-white/90">Direction &amp; Ateliers : <a href="mailto:cyril@alkymya.co" className="hover:underline font-medium">cyril@alkymya.co</a></span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#02ADAB] shrink-0" />
                <span className="text-white/90">Direction Artistique : <a href="mailto:leonie@alkymya.co" className="hover:underline font-medium">leonie@alkymya.co</a></span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#C06721] shrink-0" />
                <span className="text-white/90">Réseaux : @alkymya_cyril / @alkymya_leonie</span>
              </div>
            </div>
          </div>

          {/* Hébergement */}
          <div className="p-7 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] space-y-4">
            <div className="flex items-center gap-3 text-[#1F4F6E]">
              <div className="w-10 h-10 rounded-[8px] bg-[rgba(31,79,110,0.08)] text-[#1F4F6E] flex items-center justify-center">
                <Info className="w-5 h-5" />
              </div>
              <h2 className="text-[1.25rem] font-medium text-[#1F4F6E]">Hébergement &amp; Cloud</h2>
            </div>
            <p className="text-[0.95rem] text-[#5a7a90] leading-[1.6]">
              Cette application et ses serveurs de traitement sont hébergés par l'infrastructure cloud haute performance :
            </p>
            <div className="p-4 rounded-[8px] bg-[#f4f6f9] text-sm">
              <p className="font-medium text-[#1F4F6E]">Google Cloud Platform (GCP)</p>
              <p className="text-xs text-[#5a7a90] mt-0.5">Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>
            </div>
          </div>
        </div>

        {/* Section Cookies & Protection des données (RGPD / CNIL) */}
        <div className="p-7 sm:p-10 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[rgba(31,79,110,0.08)] pb-6">
            <div className="flex items-center gap-3 text-[#1F4F6E]">
              <div className="w-11 h-11 rounded-[8px] bg-[rgba(192,103,33,0.12)] text-[#C06721] flex items-center justify-center">
                <Cookie className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-[1.3rem] font-medium text-[#1F4F6E]">
                  Cookies &amp; Mesure d'audience (RGPD)
                </h2>
                <p className="text-xs text-[#7a9ab0]">Google Analytics ID : G-87HJ0K59JX · Consent Mode v2</p>
              </div>
            </div>

            <button
              type="button"
              onClick={openCookiePreferencesModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#1F4F6E] hover:bg-[#02ADAB] text-white text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Settings2 className="w-4 h-4" />
              <span>Gérer mes préférences cookies</span>
            </button>
          </div>

          <div className="space-y-4 text-[#5a7a90] text-[0.95rem] leading-[1.65]">
            <p>
              Alkymya applique une politique stricte de respect de la vie privée conforme au Règlement Général sur la Protection des Données (RGPD 2016/679) et aux recommandations de la CNIL.
            </p>
            <p>
              Ce site utilise le tag d’analyse <strong className="text-[#1F4F6E] font-medium">Google Analytics (ID : G-87HJ0K59JX)</strong> afin d'établir des statistiques anonymisées d'audience et d’optimiser l'ergonomie de nos pages.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-[8px] bg-[#f4f6f9] text-xs space-y-1">
                <p className="font-medium text-[#1F4F6E]">Cookies techniques indispensables :</p>
                <p className="text-[#5a7a90]">Nécessaires à la navigation, au fonctionnement du panier et au respect de vos choix de consentement. Aucune donnée nominative n'est transmise.</p>
              </div>
              <div className="p-4 rounded-[8px] bg-[#f4f6f9] text-xs space-y-1">
                <p className="font-medium text-[#1F4F6E]">Cookies de mesure d'audience :</p>
                <p className="text-[#5a7a90]">Soumis à votre consentement préalable explicite. Votre adresse IP est systématiquement anonymisée avant enregistrement.</p>
              </div>
            </div>
            <p className="text-xs text-[#7a9ab0] pt-2">
              Vous pouvez à tout instant retirer ou modifier votre choix via le bouton ci-dessus ou en cliquant sur le lien « Gestion des cookies » présent dans le pied de page du site.
            </p>
          </div>
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* CTA FINAL ORANGE #C06721 */}
      <div className="bg-[#C06721] text-white text-center py-[70px] px-10">
        <h2 className="text-[2rem] font-light mb-3.5 text-white">
          Poursuivre votre <strong className="font-medium text-white">exploration</strong>
        </h2>
        <p className="text-[1.05rem] text-white/80 max-w-[480px] mx-auto mb-8 leading-[1.7] font-light">
          Retrouvez nos réalisations, nos ressources et nos ateliers pratiques.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-white text-[#C06721] text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
        >
          ← Retourner à la page d'accueil
        </Link>
      </div>
    </div>
  );
};

export default MentionsLegales;
