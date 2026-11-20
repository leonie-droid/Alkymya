import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Download,
  FileText,
  Headphones
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { studiesList } from '../data/etudes';
import { etudeGemini4Data, INTERVIEW_GEMINI_4_PATH } from '../data/etudeGemini4';

export default function EtudesHub() {
  const canonicalUrl = 'https://alkymya.co/ressources/etudes/';

  const allStudyEntries = [
    {
      slug: 'generation-ia-2026',
      path: '/ressources/etudes/generation-ia-2026/',
      badge: 'Rapport longitudinal · Juin 2026 · n = 1 082',
      title: 'Génération IA 2024 → 2026 : 3 vagues en grandes écoles',
      summary:
        "98,1 % d'adoption, 61,0 % d'usage quotidien (+25 pts), 52,3 % en split-stack, 21 % d'ambivalence productive et fracture TikTok Shop ×12.",
      pdfUrl: studiesList[0].pdfUrl,
      hasAudio: false
    },
    {
      slug: 'interview-gemini-4',
      path: INTERVIEW_GEMINI_4_PATH,
      badge: 'Retour terrain & Benchmarks V9 · Automne 2026',
      title: 'Interview Gemini 4 : Regard croisé avec Cyril Garnier',
      summary:
        "Agents IA Workspace, inclusion pédagogique, limites cloud vs local (OpenClaw, Claude Code) et benchmarks officiels Google DeepMind (156 tok/s, 91,3 %).",
      pdfUrl: etudeGemini4Data.pdfUrl,
      hasAudio: false
    },
    {
      slug: 'doctrine-iag',
      path: '/ressources/etudes/doctrine-iag/',
      badge: 'Analyse géopolitique · Nov. 2025 · PDF + Audio 5 min 43',
      title: 'La Doctrine IAG : Dialogue sur la Stratégie Cachée',
      summary:
        "Les 5 piliers géopolitiques de la course à l'IAG (déréglementation, énergie, puces, minerais critiques, Europe) avec podcast audio intégré.",
      pdfUrl: studiesList[3].pdfUrl,
      hasAudio: true
    },
    {
      slug: 'generation-ia-2025',
      path: '/ressources/etudes/generation-ia-2025/',
      badge: 'Vague 2 · Nov. 2025 · n = 387 (16–25 ans)',
      title: 'Génération IA 2025 : Les 5 Visages et Personas',
      summary:
        "Typologie en 5 profils (Explorateurs engagés 15-20 %, Pragmatiques productifs 40-45 %...) et top 5 des outils (ChatGPT 95 % à Perplexity 30 %).",
      pdfUrl: studiesList[1].pdfUrl,
      hasAudio: false
    },
    {
      slug: 'generation-ia-2024',
      path: '/ressources/etudes/generation-ia-2024/',
      badge: 'Vague 1 fondatrice · Mai–Déc. 2024 · n = 326',
      title: 'Génération IA 2024 : Le paradoxe à l’école',
      summary:
        "Première enquête empirique (>90 % d'adoption académique dès 2024) comparant attentes des étudiants Bachelor, Master et enseignants.",
      pdfUrl: studiesList[2].pdfUrl,
      hasAudio: false
    }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: 'Études IA Alkymya : Génération IA 2024–2026, Gemini 4 & Doctrine IAG',
        headline: 'Les 5 études publiées par Alkymya en texte, tableaux et PDF',
        description:
          "Consultez nos 5 études empiriques et prospectives avec chiffres clés, tableaux HTML, limites méthodologiques et exports PDF.",
        inLanguage: 'fr-FR',
        isPartOf: { '@id': 'https://alkymya.co/#website' },
        publisher: { '@id': 'https://alkymya.co/#organization' },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        mainEntity: { '@id': `${canonicalUrl}#itemlist` }
      },
      {
        '@type': 'ItemList',
        '@id': `${canonicalUrl}#itemlist`,
        name: 'Études publiées par Alkymya',
        numberOfItems: allStudyEntries.length,
        itemListElement: allStudyEntries.map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.title,
          url: `https://alkymya.co${item.path}`
        }))
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://alkymya.co/' },
          { '@type': 'ListItem', position: 2, name: 'Nos Ressources', item: 'https://alkymya.co/ressources/' },
          { '@type': 'ListItem', position: 3, name: 'Nos études', item: canonicalUrl }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Études IA : Génération IA 2024–2026, Gemini 4 & IAG | Alkymya"
        description="Consultez les 5 études publiées par Alkymya avec tableaux HTML, méthodologie et PDF : Génération IA 2026 (1 082 étudiants), 2025, 2024, Doctrine IAG et Gemini 4."
        keywords="études IA Alkymya, Génération IA 2026 1082 étudiants, Génération IA 2025 personas, La Doctrine IAG, Interview Gemini 4"
        canonicalPath="/ressources/etudes/"
        ogImage="https://alkymya.co/og-ressources.jpg"
        type="CollectionPage"
        structuredData={structuredData}
      />

      {/* HERO */}
      <header className="bg-[#1F4F6E] text-white py-16 px-6 sm:px-10">
        <div className="max-w-[1040px] mx-auto">
          <nav aria-label="Fil d'Ariane" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/75">
            <Link to="/" className="hover:text-[#02ADAB] transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link to="/ressources/" className="hover:text-[#02ADAB] transition-colors">
              Nos Ressources
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Nos études</span>
          </nav>

          <p className="text-[0.8rem] tracking-[0.16em] uppercase text-[#02ADAB] mb-3 font-medium">
            Recherche Terrain &amp; Publications · Accès Libre
          </p>
          <h1 className="font-light text-[2rem] sm:text-[2.5rem] leading-[1.2] mb-4 text-white max-w-[820px]">
            Nos études : <strong className="font-medium">les chiffres publiés en HTML, les PDF en bonus</strong>
          </h1>
          <p className="text-[1.02rem] text-white/80 max-w-[740px] leading-[1.7] font-light mb-8">
            Trois années d'enquêtes empiriques auprès de 1 082 étudiants de grandes écoles franciliennes, notre analyse géopolitique La Doctrine IAG et l'entretien terrain Gemini 4 sont désormais publiés intégralement en pages web structurées, accompagnées de leurs tableaux chiffrés et de leur export PDF.
          </p>

          <div className="pt-7 border-t border-white/12 grid grid-cols-2 md:grid-cols-4 gap-5">
            <div>
              <div className="text-2xl font-light text-[#02ADAB]">1 082</div>
              <div className="text-xs text-white/75 uppercase tracking-wider">Répondants cumulés</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white">5</div>
              <div className="text-xs text-white/75 uppercase tracking-wider">Études publiées</div>
            </div>
            <div>
              <div className="text-2xl font-light text-[#02ADAB]">98,1 %</div>
              <div className="text-xs text-white/75 uppercase tracking-wider">Adoption Vague 3 (2026)</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white">2024–2026</div>
              <div className="text-xs text-white/75 uppercase tracking-wider">Série longitudinale</div>
            </div>
          </div>
        </div>
      </header>

      {/* GRILLE DES 5 ÉTUDES */}
      <section className="max-w-[1040px] mx-auto py-14 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allStudyEntries.map((study, idx) => (
            <article
              key={study.slug}
              className={`bg-white rounded-[12px] p-6 sm:p-7 shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col justify-between border-t-4 ${
                idx === 0 ? 'border-t-[#C06721] md:col-span-2' : 'border-t-[#02ADAB]'
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#037971] bg-[#02ADAB]/10 px-2.5 py-1 rounded-[4px]">
                    {study.badge}
                  </span>
                  {study.hasAudio && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#C06721]">
                      <Headphones className="w-3.5 h-3.5" /> Podcast 5 min 43 inclus
                    </span>
                  )}
                </div>

                <h2 className="text-[1.25rem] sm:text-[1.4rem] font-medium text-[#1F4F6E] mb-2.5">
                  <Link to={study.path} className="hover:text-[#C06721] transition-colors">
                    {study.title}
                  </Link>
                </h2>

                <p className="text-[0.95rem] text-[#4a6a80] leading-[1.65] mb-5">
                  {study.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(31,79,110,0.08)] flex flex-wrap items-center justify-between gap-3">
                <Link
                  to={study.path}
                  className="inline-flex items-center gap-2 bg-[#1F4F6E] hover:bg-[#02ADAB] text-white text-xs sm:text-sm font-medium py-2.5 px-4 rounded-[7px] transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Lire l’étude complète &amp; tableaux</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={study.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C06721] hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Exporter le PDF</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Liens transverses */}
        <div className="mt-12 bg-white rounded-[12px] p-6 sm:p-8 shadow-[0_2px_14px_rgba(31,79,110,0.06)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#02ADAB]">
              <BarChart3 className="w-4 h-4" />
              <span>Terrains d’enquête &amp; prolongements</span>
            </div>
            <h3 className="text-[1.15rem] font-medium text-[#1F4F6E]">
              Relier nos recherches à nos partenaires et outils
            </h3>
            <p className="text-sm text-[#5a7a90]">
              Découvrez les écoles partenaires où sont menées ces enquêtes ou testez nos analyseurs IA gratuits.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/partenaires/ecoles/"
              className="inline-flex items-center gap-1.5 bg-[#f4f6f9] hover:bg-[#e7ecf2] text-[#1F4F6E] text-xs font-medium py-2.5 px-4 rounded-[7px] transition-colors"
            >
              <span>Partenaires École</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/ressources/analyseurs/"
              className="inline-flex items-center gap-1.5 bg-[#f4f6f9] hover:bg-[#e7ecf2] text-[#1F4F6E] text-xs font-medium py-2.5 px-4 rounded-[7px] transition-colors"
            >
              <span>Analyseurs IA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/ressources/"
              className="inline-flex items-center gap-1.5 bg-[#f4f6f9] hover:bg-[#e7ecf2] text-[#1F4F6E] text-xs font-medium py-2.5 px-4 rounded-[7px] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Toutes les ressources</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
