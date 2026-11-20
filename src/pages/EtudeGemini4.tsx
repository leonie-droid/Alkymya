import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Cpu,
  Download,
  ExternalLink,
  FileText,
  Quote,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { etudeGemini4Data, INTERVIEW_GEMINI_4_PATH } from '../data/etudeGemini4';
import NewsletterButton from '../components/NewsletterButton';

export default function EtudeGemini4() {
  const canonicalUrl = `https://alkymya.co${INTERVIEW_GEMINI_4_PATH}`;
  const ogImage = 'https://alkymya.co/og-ressources.jpg';

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: 'Interview Gemini 4 : Retour Terrain IA | Alkymya',
        headline: etudeGemini4Data.title,
        description:
          "Retour d'expérience de Cyril Garnier sur Gemini 4 : agents IA, inclusion pédagogique, limites cloud vs local et benchmarks officiels Google. PDF V9.",
        inLanguage: 'fr-FR',
        isPartOf: { '@id': 'https://alkymya.co/#website' },
        mainEntity: { '@id': `${canonicalUrl}#article` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` }
      },
      {
        '@type': ['Article', 'Dataset'],
        '@id': `${canonicalUrl}#article`,
        name: etudeGemini4Data.title,
        headline: etudeGemini4Data.title,
        alternativeHeadline: etudeGemini4Data.subtitle,
        description: etudeGemini4Data.intro,
        image: ogImage,
        datePublished: '2026-11-20',
        dateModified: '2026-11-20',
        inLanguage: 'fr-FR',
        isAccessibleForFree: true,
        author: {
          '@type': 'Person',
          '@id': 'https://alkymya.co/#cyril-garnier',
          name: 'Cyril Garnier',
          url: 'https://alkymya.co/alchimistes/cyril-garnier/'
        },
        publisher: {
          '@id': 'https://alkymya.co/#organization'
        },
        mainEntityOfPage: {
          '@id': `${canonicalUrl}#webpage`
        },
        distribution: [
          {
            '@type': 'DataDownload',
            contentUrl: etudeGemini4Data.pdfUrl,
            encodingFormat: 'application/pdf',
            name: "Interview Gemini 4 : Retour d'expérience d'un enseignant en IA et données de performance V9.pdf"
          }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://alkymya.co/' },
          { '@type': 'ListItem', position: 2, name: 'Nos Ressources', item: 'https://alkymya.co/ressources/' },
          { '@type': 'ListItem', position: 3, name: 'Nos études', item: 'https://alkymya.co/ressources/etudes/' },
          { '@type': 'ListItem', position: 4, name: 'Interview Gemini 4', item: canonicalUrl }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Interview Gemini 4 : Retour Terrain IA | Alkymya"
        description="Retour d'expérience de Cyril Garnier sur Gemini 4 : agents IA, inclusion pédagogique, limites cloud vs local et benchmarks officiels Google. PDF V9."
        keywords="Interview Gemini 4, Cyril Garnier, Gemini 4 Hydrogen, Gemini 4 Argon, Gemini 4 Neon, retour d'expérience enseignant IA, benchmarks Google DeepMind"
        canonicalPath={INTERVIEW_GEMINI_4_PATH}
        ogImage={ogImage}
        type="Article"
        structuredData={articleStructuredData}
      />

      {/* HERO ÉDITORIAL */}
      <header className="bg-[#1F4F6E] text-white py-16 sm:py-20 px-6 sm:px-10 relative overflow-hidden">
        <div className="max-w-[960px] mx-auto relative z-10">
          <nav aria-label="Fil d'Ariane" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/75">
            <Link to="/" className="hover:text-[#02ADAB] transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link to="/ressources/" className="hover:text-[#02ADAB] transition-colors">
              Nos Ressources
            </Link>
            <span>/</span>
            <Link to="/ressources/etudes/" className="hover:text-[#02ADAB] transition-colors">
              Nos études
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Interview Gemini 4</span>
          </nav>

          <p className="text-[0.8rem] tracking-[0.16em] uppercase text-[#02ADAB] mb-3 font-medium">
            Étude &amp; Retour d'Expérience · {etudeGemini4Data.period} · Version {etudeGemini4Data.version}
          </p>

          <h1 className="font-light text-[2rem] sm:text-[2.65rem] leading-[1.18] mb-4 text-white">
            Gemini 4 à l'épreuve du terrain :{' '}
            <strong className="font-medium text-white">regard croisé avec Cyril Garnier</strong>
          </h1>

          <p className="text-[1.05rem] sm:text-[1.15rem] text-white/80 max-w-[780px] leading-[1.7] font-light mb-8">
            {etudeGemini4Data.subtitle}. Analyse indépendante des usages pédagogiques et agentiques, complétée par les données officielles de performance Google &amp; Google DeepMind.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={etudeGemini4Data.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Interview_Gemini_4_Retour_experience_enseignant_IA_et_performances_V9.pdf"
              className="inline-flex items-center justify-center gap-2.5 bg-[#C06721] hover:bg-[#a85517] text-white text-[0.95rem] font-medium py-3.5 px-7 rounded-[8px] transition-all shadow-md hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger l'article complet (PDF · V9)</span>
            </a>

            <a
              href="#resume-entretien"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-[0.95rem] font-medium py-3.5 px-6 rounded-[8px] border border-white/25 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Lire le résumé structuré</span>
            </a>

            <Link
              to="/ressources/etudes/"
              className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-[#02ADAB] transition-colors ml-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Toutes nos études</span>
            </Link>
          </div>
        </div>
      </header>

      {/* CHIFFRES CLÉS */}
      <section className="max-w-[1060px] mx-auto -mt-8 px-6 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {etudeGemini4Data.highlights.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-[12px] p-5 shadow-[0_4px_20px_rgba(31,79,110,0.09)] border border-[rgba(31,79,110,0.08)]"
            >
              <div className="text-2xl sm:text-3xl font-medium text-[#02ADAB] mb-1">
                {item.value}
              </div>
              <div className="text-sm font-medium text-[#1F4F6E] mb-1.5">
                {item.label}
              </div>
              <p className="text-xs text-[#5a7a90] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NOTE DE TRANSPARENCE & INTRO */}
      <section className="max-w-[1060px] mx-auto pt-12 pb-6 px-6">
        <div className="bg-white rounded-[12px] p-6 sm:p-8 shadow-[0_2px_16px_rgba(31,79,110,0.08)] border-l-4 border-[#02ADAB] space-y-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#02ADAB] shrink-0 mt-0.5" />
            <div>
              <h2 className="text-sm font-medium uppercase tracking-[0.12em] text-[#1F4F6E] mb-1">
                Note de transparence et d'indépendance éditoriale
              </h2>
              <p className="text-[0.94rem] text-[#4a6a80] leading-[1.65]">
                {etudeGemini4Data.transparencyNote}
              </p>
            </div>
          </div>

          <hr className="border-t border-[rgba(31,79,110,0.08)]" />

          <p className="text-[1rem] text-[#1F4F6E] leading-[1.7] font-normal">
            {etudeGemini4Data.intro}
          </p>
        </div>
      </section>

      {/* LES 4 AXES */}
      <section id="resume-entretien" className="max-w-[1060px] mx-auto py-10 px-6">
        <div className="mb-8">
          <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2 font-medium">
            Synthèse de l'entretien
          </p>
          <h2 className="text-[1.7rem] sm:text-[2rem] font-light text-[#1F4F6E]">
            Les 4 axes du <strong className="font-medium">retour d'expérience terrain</strong>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {etudeGemini4Data.sections.map((section) => (
            <article
              key={section.number}
              className="bg-white rounded-[12px] p-6 sm:p-7 shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-[8px] bg-[#02ADAB]/12 text-[#02ADAB] font-medium text-sm shrink-0">
                    {section.number}
                  </span>
                  <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] leading-snug">
                    {section.title}
                  </h3>
                </div>

                <p className="text-[0.94rem] text-[#4a6a80] leading-[1.65]">
                  {section.summary}
                </p>

                <ul className="space-y-2 pt-1">
                  {section.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[0.88rem] text-[#5a7a90] leading-[1.55]">
                      <CheckCircle2 className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="bg-[#f4f6f9] rounded-[8px] p-4 border-l-2 border-[#C06721] text-[0.88rem] italic text-[#1F4F6E] flex items-start gap-2.5">
                <Quote className="w-4 h-4 text-[#C06721] shrink-0 mt-0.5" />
                <span>« {section.quote} »</span>
              </blockquote>
            </article>
          ))}
        </div>
      </section>

      {/* LES 4 ENSEIGNEMENTS */}
      <section className="max-w-[1060px] mx-auto py-8 px-6">
        <div className="bg-[#1F4F6E] text-white rounded-[14px] p-7 sm:p-10 shadow-md">
          <div className="flex items-center gap-2.5 text-[#02ADAB] text-xs font-medium uppercase tracking-[0.16em] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>À retenir · Synthèse Alkymya</span>
          </div>
          <h2 className="text-[1.6rem] sm:text-[1.85rem] font-light text-white mb-6">
            Les quatre enseignements clés de <strong className="font-medium">Cyril Garnier</strong>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {etudeGemini4Data.keyTakeaways.map((takeaway) => (
              <div
                key={takeaway.title}
                className="bg-white/8 border border-white/12 rounded-[10px] p-5"
              >
                <h3 className="text-[1rem] font-medium text-[#02ADAB] mb-2">
                  {takeaway.title}
                </h3>
                <p className="text-[0.9rem] text-white/85 leading-[1.6]">
                  {takeaway.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOSSIER TECHNIQUE & BENCHMARKS GOOGLE */}
      <section className="max-w-[1060px] mx-auto py-10 px-6 space-y-10">
        <div>
          <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2 font-medium">
            Dossier Technique &amp; Benchmarks Officiels
          </p>
          <h2 className="text-[1.7rem] sm:text-[2rem] font-light text-[#1F4F6E] mb-2">
            Gamme Gemini 4 &amp; <strong className="font-medium">données de performance Google DeepMind</strong>
          </h2>
          <p className="text-[0.96rem] text-[#4a6a80] max-w-[740px] leading-[1.65]">
            Spécifications officielles publiées par Google et Google DeepMind à l'automne 2026 pour éclairer les observations de terrain.
          </p>
        </div>

        <div className="bg-white rounded-[12px] shadow-[0_2px_16px_rgba(31,79,110,0.08)] overflow-hidden">
          <div className="px-6 py-4 border-b border-[rgba(31,79,110,0.08)] flex items-center gap-2.5 bg-[#f9fbfc]">
            <Cpu className="w-5 h-5 text-[#02ADAB]" />
            <h3 className="text-[1.05rem] font-medium text-[#1F4F6E]">
              A. Architecture, positionnement et tarifs API de la gamme Gemini 4
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[rgba(31,79,110,0.1)] text-xs uppercase tracking-wider text-[#5a7a90] bg-[#f4f6f9]/60">
                  <th className="py-3.5 px-5 font-medium">Modèle</th>
                  <th className="py-3.5 px-5 font-medium">Lancement</th>
                  <th className="py-3.5 px-5 font-medium">Positionnement et usage</th>
                  <th className="py-3.5 px-5 font-medium">Spécifications clés &amp; Tarifs API</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(31,79,110,0.08)] text-[0.9rem]">
                {etudeGemini4Data.models.map((row) => (
                  <tr key={row.model} className="hover:bg-[#f4f6f9]/50 transition-colors">
                    <td className="py-4 px-5 font-medium text-[#1F4F6E] whitespace-nowrap">
                      {row.model}
                    </td>
                    <td className="py-4 px-5 text-[#4a6a80] whitespace-nowrap">
                      {row.releaseDate}
                    </td>
                    <td className="py-4 px-5 text-[#4a6a80]">
                      {row.positioning}
                    </td>
                    <td className="py-4 px-5 text-[#5a7a90]">
                      {row.specsAndPricing}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {etudeGemini4Data.agenticReliability.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-[12px] p-6 shadow-[0_2px_16px_rgba(31,79,110,0.08)]"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-[#02ADAB] block mb-1">
                Fiabilité agentique · Hydrogen
              </span>
              <div className="text-xl font-medium text-[#1F4F6E] mb-1">
                {item.value}
              </div>
              <div className="text-sm font-medium text-[#C06721] mb-2">
                {item.label}
              </div>
              <p className="text-[0.88rem] text-[#5a7a90] leading-[1.55]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[12px] shadow-[0_2px_16px_rgba(31,79,110,0.08)] overflow-hidden">
          <div className="px-6 py-4 border-b border-[rgba(31,79,110,0.08)] flex items-center gap-2.5 bg-[#f9fbfc]">
            <BarChart3 className="w-5 h-5 text-[#02ADAB]" />
            <h3 className="text-[1.05rem] font-medium text-[#1F4F6E]">
              B. Performances de vitesse et de raisonnement (Gemini 4 Hydrogen)
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[rgba(31,79,110,0.1)] text-xs uppercase tracking-wider text-[#5a7a90] bg-[#f4f6f9]/60">
                  <th className="py-3.5 px-5 font-medium">Indicateur de performance</th>
                  <th className="py-3.5 px-5 font-medium">Résultat mesuré</th>
                  <th className="py-3.5 px-5 font-medium">Source officielle Google</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(31,79,110,0.08)] text-[0.9rem]">
                {etudeGemini4Data.benchmarks.map((row) => (
                  <tr key={row.metric} className="hover:bg-[#f4f6f9]/50 transition-colors">
                    <td className="py-4 px-5 font-medium text-[#1F4F6E]">
                      {row.metric}
                    </td>
                    <td className="py-4 px-5 font-medium text-[#02ADAB]">
                      {row.result}
                    </td>
                    <td className="py-4 px-5 text-[#5a7a90]">
                      {row.source}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BLOC DE TÉLÉCHARGEMENT DIRECT & CTA */}
      <section className="max-w-[1060px] mx-auto pb-16 px-6 space-y-6">
        <div className="bg-white rounded-[12px] p-7 sm:p-10 shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-[640px]">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-[#02ADAB]">
              <FileText className="w-4 h-4" />
              Document intégral au format PDF
            </span>
            <h2 className="text-[1.45rem] sm:text-[1.65rem] font-light text-[#1F4F6E]">
              Télécharger l'étude complète{' '}
              <strong className="font-medium">Interview Gemini 4 (Version V9)</strong>
            </h2>
            <p className="text-[0.94rem] text-[#5a7a90] leading-[1.6]">
              Retrouvez l'intégralité des échanges questions-réponses avec Cyril Garnier et le dossier technique complet sur les modèles Gemini 4 (Argon, Carbon, Hydrogen, Neon).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full md:w-auto">
            <a
              href={etudeGemini4Data.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Interview_Gemini_4_Retour_experience_enseignant_IA_et_performances_V9.pdf"
              className="inline-flex items-center justify-center gap-2.5 bg-[#C06721] hover:bg-[#a85517] text-white text-[0.95rem] font-medium py-3.5 px-7 rounded-[8px] transition-all shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger le PDF (V9)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              to="/ressources/etudes/"
              className="inline-flex items-center justify-center gap-2 bg-[#f4f6f9] hover:bg-[#e7ecf2] text-[#1F4F6E] text-[0.9rem] font-medium py-3 px-6 rounded-[8px] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à Nos études</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-[#C06721] text-white text-center py-[65px] px-10">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-white/80 mb-2.5 font-medium">
          Accompagnement &amp; Ateliers IA
        </p>
        <h2 className="text-[1.9rem] font-light mb-3.5 text-white">
          Passer de la veille au <strong className="font-medium text-white">déploiement terrain</strong>
        </h2>
        <p className="text-[1.02rem] text-white/85 max-w-[560px] mx-auto mb-8 leading-[1.7] font-light">
          Déployez des agents IA concrets en entreprise ou organisez un atelier pratique avec Cyril Garnier et nos Alchimistes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact/"
            className="inline-flex items-center gap-2 bg-white text-[#C06721] text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px]"
          >
            <span>Échanger avec l'équipe</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <NewsletterButton
            variant="outline"
            size="md"
            label="Suivre nos études"
            className="border-white/40 text-white hover:bg-white/10 rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
}
