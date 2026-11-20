import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Compass,
  ExternalLink,
  Gamepad2,
  GraduationCap,
  Layers,
  Users
} from 'lucide-react';
import { SEO } from '../components/SEO';

const APP_URL = 'https://nonobanaba.netlify.app/';
const VIDEO_URL =
  'https://res.cloudinary.com/dokzioyu4/video/upload/v1777905236/Vide%CC%81o_publicitaire_e%CC%81lectro_pop_cre%CC%81e%CC%81e_oydyo3_xxtwtb.mp4';

export default function BusinessGame() {
  const canonicalUrl = 'https://alkymya.co/ressources/business-game/';

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: 'Business Game NoNo BanaBa : Simulation Stratégie & Data | Alkymya',
        headline: 'Business Game NoNo BanaBa : apprendre le web-marketing et la data par le jeu',
        description:
          "Découvrez NoNo BanaBa, le business game pédagogique conçu par Alkymya pour former étudiants de grandes écoles et équipes dirigeantes à la data, au marketing digital et aux business modèles.",
        inLanguage: 'fr-FR',
        isPartOf: { '@id': 'https://alkymya.co/#website' },
        mainEntity: { '@id': `${canonicalUrl}#app` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` }
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${canonicalUrl}#app`,
        name: 'NoNo BanaBa — Business Game Alkymya',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web',
        url: APP_URL,
        isAccessibleForFree: true,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR'
        },
        author: { '@id': 'https://alkymya.co/#organization' }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://alkymya.co/' },
          { '@type': 'ListItem', position: 2, name: 'Nos Ressources', item: 'https://alkymya.co/ressources/' },
          { '@type': 'ListItem', position: 3, name: 'Business Game NoNo BanaBa', item: canonicalUrl }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Business Game NoNo BanaBa : Stratégie & Data | Alkymya"
        description="NoNo BanaBa : simulation interactive conçue par Alkymya pour expérimenter web-marketing, analyse de données, IA et business modèles en grande école ou séminaire PME."
        keywords="NoNo BanaBa, business game IA, jeu pédagogique marketing data, atelier grande école Alkymya, simulation stratégie"
        canonicalPath="/ressources/business-game/"
        ogImage="https://alkymya.co/og-ressources.jpg"
        type="WebApplication"
        structuredData={structuredData}
      />

      {/* HERO */}
      <header className="bg-[#1F4F6E] text-white py-16 px-6 sm:px-10">
        <div className="max-w-[1040px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <nav aria-label="Fil d'Ariane" className="mb-5 flex flex-wrap items-center gap-2 text-xs text-white/75">
              <Link to="/" className="hover:text-[#02ADAB] transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <Link to="/ressources/" className="hover:text-[#02ADAB] transition-colors">
                Nos Ressources
              </Link>
              <span>/</span>
              <span className="text-white font-medium">Business Game NoNo BanaBa</span>
            </nav>

            <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#02ADAB] mb-3">
              <Gamepad2 className="w-4 h-4" />
              <span>Pédagogie Active · Marque Gen Z &amp; Data</span>
            </span>

            <h1 className="font-light text-[2rem] sm:text-[2.5rem] leading-[1.2] mb-4 text-white">
              NoNo BanaBa : <strong className="font-medium">piloter une marque Gen Z par la data et l’IA</strong>
            </h1>

            <p className="text-[1.02rem] text-white/80 leading-[1.7] font-light mb-7">
              Au lieu d'enseigner le web-marketing, l'analyse de données et la stratégie d'entreprise sur des diapositives théoriques, NoNo BanaBa place étudiants et équipes de direction aux commandes d'une marque fashion Gen Z confrontée à des arbitrages budgétaires, éditoriaux et algorithmiques réels.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C06721] hover:bg-[#a85517] text-white text-sm font-medium py-3.5 px-7 rounded-[8px] transition-colors shadow-sm"
              >
                <span>Découvrir NoNo BanaBa en ligne</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                to="/contact/"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium py-3.5 px-6 rounded-[8px] border border-white/25 transition-colors"
              >
                <span>Organiser une session animée</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-[230px] aspect-[9/16] rounded-[14px] overflow-hidden border border-white/15 shadow-2xl bg-[#16384e]">
              <video
                src={VIDEO_URL}
                muted
                autoPlay
                loop
                playsInline
                controls
                title="Teaser Business Game NoNo BanaBa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* CORPS ÉDITORIAL RICHE (> 600 MOTS) */}
      <section className="max-w-[1040px] mx-auto py-14 px-6 space-y-10">
        <div className="bg-white rounded-[12px] p-6 sm:p-8 shadow-[0_2px_16px_rgba(31,79,110,0.08)] border-l-4 border-l-[#02ADAB]">
          <h2 className="text-[1.45rem] font-medium text-[#1F4F6E] mb-3">
            Pourquoi un business game centré sur la génération Z et l’économie de l’attention
          </h2>
          <p className="text-[0.98rem] text-[#4a6a80] leading-[1.75] mb-3">
            Nos enquêtes longitudinales <em>Génération IA 2024 → 2026</em> montrent un basculement net des comportements d'achat et de recherche des jeunes adultes : Instagram (70,5 %), TikTok (66,1 %, dont 85 % d'usages décisionnels) et l'IA conversationnelle redessinent la façon dont une marque acquiert sa visibilité.
          </p>
          <p className="text-[0.98rem] text-[#4a6a80] leading-[1.75]">
            NoNo BanaBa traduit ces dynamiques concrètes en terrain de simulation. Chaque équipe endosse le rôle d'un comité de direction chargé de transformer une intuition créative en activité rentable : définir le positionnement, lire les signaux des tableaux de bord clients, choisir les canaux d'acquisition et intégrer les outils d'IA générative sans sacrifier la marge ni la cohérence éditoriale.
          </p>
        </div>

        {/* 4 modules / mécaniques */}
        <div>
          <h2 className="text-[1.55rem] font-light text-[#1F4F6E] mb-6">
            Les <strong className="font-medium">4 piliers pédagogiques</strong> de la simulation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Compass,
                title: '1. Positionnement de marque & économie unitaire',
                text: "Analyse de l'audience Gen Z, construction de la proposition de valeur, politique tarifaire et arbitrage entre volume social commerce et préservation du positionnement."
              },
              {
                icon: BarChart3,
                title: '2. Lecture de données & diagnostic d’entonnoir',
                text: "Interprétation des métriques de trafic, taux de conversion, panier moyen et rétention pour identifier les goulets d'étranglement avant d'investir en acquisition."
              },
              {
                icon: Layers,
                title: '3. Web-marketing, social commerce & GEO',
                text: "Structuration des contenus organiques et payants adaptés aux nouveaux moteurs de découverte (TikTok, recherche conversationnelle IA et référencement éditorial)."
              },
              {
                icon: GraduationCap,
                title: '4. Production augmentée par l’IA & soutenance',
                text: "Mobilisation critique d'assistants IA pour prototyper des campagnes, tester des messages et défendre la stratégie devant un jury d'alchimistes en temps contraint."
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-[12px] p-6 shadow-[0_2px_14px_rgba(31,79,110,0.07)]"
                >
                  <div className="w-10 h-10 rounded-[8px] bg-[#02ADAB]/12 text-[#037971] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[1.1rem] font-medium text-[#1F4F6E] mb-2">{item.title}</h3>
                  <p className="text-[0.93rem] text-[#5a7a90] leading-[1.65]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Déroulé type + Publics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-[12px] p-6 sm:p-7 shadow-[0_2px_14px_rgba(31,79,110,0.07)]">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#02ADAB] mb-2">
              <Users className="w-4 h-4" />
              <span>Publics &amp; contextes d’animation</span>
            </div>
            <h2 className="text-[1.28rem] font-medium text-[#1F4F6E] mb-4">
              Déployé en grandes écoles et séminaires PME
            </h2>
            <ul className="space-y-2.5 text-[0.93rem] text-[#4a6a80]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#02ADAB] shrink-0 mt-1" />
                <span>
                  <strong>Grandes écoles &amp; CFA</strong> (Bachelor, Master, alternance) : séminaires d'intégration, modules Corporate Innovation, marketing digital ou hackathons de 1 à 3 jours.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#02ADAB] shrink-0 mt-1" />
                <span>
                  <strong>Comités de direction &amp; équipes marketing PME</strong> : prise de recul ludique sur les attentes des jeunes générations et expérimentation sans risque de nouvelles stratégies digitales.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#02ADAB] shrink-0 mt-1" />
                <span>
                  <strong>Porteurs de projets (New Business MVP)</strong> : exercice pratique de confrontation d'une marque avec les réalités de la demande avant de engager du budget.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1F4F6E] text-white rounded-[12px] p-6 sm:p-7 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-[#02ADAB] block mb-2">
                Format d’atelier type
              </span>
              <h2 className="text-[1.3rem] font-medium text-white mb-3">
                Déroulé d’une session NoNo BanaBa
              </h2>
              <ol className="space-y-2.5 text-[0.92rem] text-white/85 list-decimal pl-5 leading-[1.6]">
                <li>Brief de lancement et prise en main de l'environnement NoNo BanaBa (45 min).</li>
                <li>Diagnostic data et définition de la stratégie marque / acquisition par équipes (1h30).</li>
                <li>Sprint de production IA et résolution d'aléas de marché en temps réel (2h).</li>
                <li>Pitch de comité de direction et débriefing critique avec les alchimistes (1h).</li>
              </ol>
            </div>

            <div className="pt-5 mt-5 border-t border-white/15 flex flex-wrap gap-3">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C06721] hover:bg-[#a85517] text-white text-xs font-medium py-2.5 px-4 rounded-[7px]"
              >
                <span>Ouvrir nonobanaba.netlify.app</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/ateliers/"
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium py-2.5 px-4 rounded-[7px]"
              >
                <span>Catalogue des ateliers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Liens transverses */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/ressources/etudes/generation-ia-2026/"
            className="flex items-center justify-between gap-2 p-4 rounded-[10px] bg-white shadow-[0_2px_10px_rgba(31,79,110,0.06)] text-sm font-medium text-[#1F4F6E] hover:text-[#C06721]"
          >
            <span>Étude Génération IA 2026 (TikTok &amp; Gen Z)</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
          <Link
            to="/partenaires/ecoles/"
            className="flex items-center justify-between gap-2 p-4 rounded-[10px] bg-white shadow-[0_2px_10px_rgba(31,79,110,0.06)] text-sm font-medium text-[#1F4F6E] hover:text-[#C06721]"
          >
            <span>Nos 7 partenaires École</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
          <Link
            to="/ressources/"
            className="flex items-center justify-between gap-2 p-4 rounded-[10px] bg-white shadow-[0_2px_10px_rgba(31,79,110,0.06)] text-sm font-medium text-[#1F4F6E] hover:text-[#C06721]"
          >
            <span className="inline-flex items-center gap-1.5">
              <ArrowLeft className="w-4 h-4" /> Retour à Nos Ressources
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
