import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Cpu,
  Database,
  ExternalLink,
  Eye,
  FileCode2,
  FileText,
  Layers,
  Lock,
  Mail,
  NotebookPen,
  PenTool,
  Play,
  Scissors,
  Search,
  ServerOff,
  Sparkles,
  Users
} from 'lucide-react';
import { SEO } from '../components/SEO';
import {
  allPartners,
  euridisFormationData,
  iesegFormationData,
  getPartnerCategoryMeta,
  getPartnerDetail
} from '../data/partenaires';
import { cloudinaryUrl } from '../utils/cloudinary';

export default function PartenaireDetail() {
  const { categorySlug, partnerSlug } = useParams<{
    categorySlug: string;
    partnerSlug: string;
  }>();

  const detail =
    categorySlug && partnerSlug ? getPartnerDetail(categorySlug, partnerSlug) : undefined;
  const entry = allPartners.find(
    (p) => p.categorySlug === categorySlug && p.slug === partnerSlug
  );
  const categoryMeta = categorySlug ? getPartnerCategoryMeta(categorySlug) : undefined;

  if (!detail || !entry || !categoryMeta) {
    return (
      <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen flex items-center justify-center px-6 py-24">
        <div className="bg-white rounded-[12px] p-10 max-w-md w-full text-center shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
          <h1 className="text-2xl font-medium mb-3">Fiche partenaire introuvable</h1>
          <p className="text-sm text-[#5a7a90] mb-6">
            Ce partenaire n'a pas de fiche dédiée ou l'URL a changé.
          </p>
          <Link
            to="/partenaires/"
            className="inline-flex items-center gap-2 bg-[#1F4F6E] hover:bg-[#02ADAB] text-white text-sm font-medium py-3 px-6 rounded-[8px] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à Nos Partenaires</span>
          </Link>
        </div>
      </div>
    );
  }

  const canonicalPath = `/partenaires/${categoryMeta.slug}/${detail.slug}/`;
  const canonicalUrl = `https://alkymya.co${canonicalPath}`;

  // Règle d'entité (Principe 5) : WebPage + Organization partenaire (url + sameAs).
  // JAMAIS de LocalBusiness et JAMAIS l'adresse d'Alkymya sur un nœud partenaire.
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: detail.seoTitle,
        headline: detail.h1,
        description: detail.seoDescription,
        inLanguage: 'fr-FR',
        isPartOf: { '@id': 'https://alkymya.co/#website' },
        publisher: { '@id': 'https://alkymya.co/#organization' },
        about: { '@id': `${canonicalUrl}#partner` },
        mainEntity: { '@id': `${canonicalUrl}#partner` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` }
      },
      {
        '@type': 'Organization',
        '@id': `${canonicalUrl}#partner`,
        name: detail.name,
        url: entry.websiteUrl,
        sameAs: entry.sameAs && entry.sameAs.length > 0 ? entry.sameAs : [entry.websiteUrl],
        description: entry.summary
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://alkymya.co/' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Nos Partenaires',
            item: 'https://alkymya.co/partenaires/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: categoryMeta.name,
            item: `https://alkymya.co/partenaires/${categoryMeta.slug}/`
          },
          { '@type': 'ListItem', position: 4, name: detail.name, item: canonicalUrl }
        ]
      }
    ]
  };

  const isAwaCloud = detail.slug === 'awa-cloud';
  const isEuridis = detail.slug === 'euridis';
  const isIeseg = detail.slug === 'ieseg';
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title={detail.seoTitle}
        description={detail.seoDescription}
        keywords={detail.keywords}
        canonicalPath={canonicalPath}
        ogImage={cloudinaryUrl(entry.logo, 600)}
        type="WebPage"
        structuredData={structuredData}
      />

      {/* HERO FICHE PARTENAIRE */}
      <header className="bg-gradient-to-br from-[#1F4F6E] to-[#0d3550] text-white py-10 sm:py-14 px-6 sm:px-8">
        <div className="max-w-[1040px] mx-auto">
          <nav aria-label="Fil d'Ariane" className="mb-5 flex flex-wrap items-center gap-2 text-xs text-white/75">
            <Link to="/" className="hover:text-[#02ADAB] transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link to="/partenaires/" className="hover:text-[#02ADAB] transition-colors">
              Nos Partenaires
            </Link>
            <span>/</span>
            <Link to={`/partenaires/${categoryMeta.slug}/`} className="hover:text-[#02ADAB] transition-colors">
              {categoryMeta.name}
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{detail.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-start gap-4 flex-1">
              <a
                href={entry.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visiter le site officiel de ${detail.name}`}
                className={`rounded-[10px] shadow-sm shrink-0 flex items-center justify-center overflow-hidden ${
                  entry.logoBgDark
                    ? 'w-28 h-16 sm:w-32 sm:h-20 bg-[#0f172a] border border-white/20 px-3 py-2'
                    : 'w-16 h-16 sm:w-20 sm:h-20 bg-white p-2'
                }`}
              >
                <img
                  src={
                    entry.logo.toLowerCase().endsWith('.svg')
                      ? entry.logo
                      : cloudinaryUrl(entry.logo, 320)
                  }
                  width={entry.logoBgDark ? 128 : 80}
                  height={80}
                  alt={`Logo ${detail.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </a>
              <div>
                <span className="inline-block text-[11px] font-medium uppercase tracking-[0.12em] text-[#02ADAB] bg-white/10 px-2.5 py-0.5 rounded-[4px] mb-2">
                  {entry.badge}
                </span>
                <h1 className="font-light text-[1.7rem] sm:text-[2.2rem] leading-[1.2] mb-2 text-white">
                  {detail.h1}
                </h1>
                <p className="text-[0.95rem] sm:text-[1.02rem] text-white/80 max-w-[700px] leading-[1.6] font-light">
                  {detail.lead}
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href={detail.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C06721] hover:bg-[#a85517] text-white px-5 py-3 rounded-[8px] font-medium text-sm transition-colors shadow-sm"
              >
                <span>{detail.ctaLabel}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* BLOC 1 & 2 : RÔLE & POURQUOI NOUS TRAVAILLONS ENSEMBLE */}
      <section className="max-w-[1040px] mx-auto pt-14 pb-8 px-6">
        <div className="bg-white rounded-[12px] p-6 sm:p-8 shadow-[0_2px_16px_rgba(31,79,110,0.08)] border-l-4 border-l-[#02ADAB] mb-10">
          <h2 className="text-[1.3rem] font-medium text-[#1F4F6E] mb-2">
            1. Qui est {detail.name} et quel est son rôle avec Alkymya
          </h2>
          <p className="text-[0.98rem] text-[#4a6a80] leading-[1.7]">{detail.roleSummary}</p>
        </div>

        <h2 className="text-[1.5rem] sm:text-[1.65rem] font-medium text-[#1F4F6E] mb-6">
          2. Pourquoi nous travaillons ensemble
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {detail.whySelected.map((item, idx) => {
            const Icon = idx === 0 ? Lock : idx === 1 ? Building2 : ServerOff;
            return (
              <div
                key={item.title}
                className="bg-white border border-[#e2e8f0] rounded-[12px] p-6 shadow-[0_2px_12px_rgba(31,79,110,0.05)]"
              >
                <div className="w-10 h-10 rounded-[8px] bg-[#02ADAB]/12 text-[#037971] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-[1.08rem] font-medium text-[#1F4F6E] mb-2">{item.title}</h3>
                <p className="text-[0.92rem] text-[#475569] leading-[1.6]">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION SPÉCIFIQUE AWACLOUD : LOGICIELS, BIBLIOTHÈQUES & PIPELINE RAG */}
      {isAwaCloud && (
        <section className="bg-white border-y border-[#e2e8f0] py-14 px-6 my-4">
          <div className="max-w-[1040px] mx-auto">
            <h2 className="text-[1.5rem] sm:text-[1.65rem] font-medium text-[#1F4F6E] mb-2">
              Logiciels gratuits, bibliothèques &amp; pipeline RAG local AWACLOUD
            </h2>
            <p className="text-[#5a7a90] mb-8 max-w-[700px] leading-[1.65]">
              Applications hors ligne dans le navigateur (AWA Viewer, AWA Notepad, AWA Writer, AwaForge) et bibliothèques développeurs (AWA Convert, AWA PDF, AWA Office).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {[
                { icon: Eye, name: 'AWA Viewer', url: 'https://viewer.awacloud.com/', desc: "Ouvre PDF, Word, Excel, PowerPoint, ODF et Markdown localement." },
                { icon: NotebookPen, name: 'AWA Notepad', url: 'https://notepad.awacloud.com/', desc: "Éditeur texte brut hors ligne avec recherche/remplacement." },
                { icon: PenTool, name: 'AWA Writer (bêta)', url: 'https://writer.awacloud.com/', desc: "Traitement de texte DOCX et ODT directement dans le navigateur." },
                { icon: Cpu, name: 'AwaForge', url: 'https://awacloud.com/', desc: "Socle open source souverain : AWA Convert, AWA PDF et AWA Office." }
              ].map((app) => {
                const AppIcon = app.icon;
                return (
                  <div key={app.name} className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-5 flex flex-col justify-between">
                    <div>
                      <AppIcon className="w-5 h-5 text-[#037971] mb-3" />
                      <h3 className="text-[1.05rem] font-medium text-[#1F4F6E] mb-1.5">{app.name}</h3>
                      <p className="text-[0.88rem] text-[#475569] leading-[1.55] mb-3">{app.desc}</p>
                    </div>
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#037971] hover:text-[#C06721]"
                    >
                      <span>Ouvrir {app.name}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Tableau mesure interne & Pipeline RAG */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-5 bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-6">
                <h3 className="text-[1.05rem] font-medium text-[#1F4F6E] mb-3">
                  Mesure interne Alkymya (PDF 39 pages · 773 Ko)
                </h3>
                <table className="w-full text-[0.88rem] border-collapse">
                  <tbody>
                    <tr className="border-b border-[#e2e8f0]">
                      <td className="py-2 text-[#475569]">PDF d'origine</td>
                      <td className="py-2 text-right font-medium text-[#1F4F6E]">773 Ko (binaire)</td>
                    </tr>
                    <tr className="border-b border-[#e2e8f0]">
                      <td className="py-2 text-[#475569]">Texte brut extrait</td>
                      <td className="py-2 text-right font-medium text-[#1F4F6E]">77 794 caractères</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-[#475569]">Markdown AWA structuré</td>
                      <td className="py-2 text-right font-medium text-[#037971]">86 187 car. · 309 blocs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-5 gap-3">
                {[
                  { icon: FileText, title: '1. Convertir', sub: 'AWA Convert → MD' },
                  { icon: Scissors, title: '2. Découper', sub: 'par titres' },
                  { icon: Database, title: '3. Indexer', sub: 'vecteurs' },
                  { icon: Search, title: '4. Retrouver', sub: '2–5 passages' },
                  { icon: Sparkles, title: '5. Répondre', sub: 'source citée' }
                ].map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="bg-[#f0f9f8] border border-[#02ADAB]/25 rounded-[10px] p-3.5 text-center flex flex-col items-center justify-center"
                    >
                      <StepIcon className="w-4 h-4 text-[#037971] mb-1.5" />
                      <div className="font-medium text-xs text-[#1F4F6E]">{step.title}</div>
                      <div className="text-[11px] text-[#475569] mt-0.5">{step.sub}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION SPÉCIFIQUE EURIDIS BUSINESS SCHOOL : PROGRAMME 2 JOURS, HARNAIS, STACK & FAQ */}
      {isEuridis && (
        <section className="bg-white border-y border-[#e2e8f0] py-14 px-6 my-4">
          <div className="max-w-[1040px] mx-auto space-y-12">
            {/* Règle centrale & Idée directrice */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-6 flex flex-col justify-between">
                <p className="text-xs uppercase tracking-[0.12em] text-[#037971] font-medium mb-2">
                  Règle de la formation · B3 &amp; Mastère
                </p>
                <p className="text-xl sm:text-2xl font-medium text-[#1F4F6E] leading-snug mb-3">
                  {euridisFormationData.ruleStatement}
                </p>
                <p className="text-[0.92rem] text-[#475569] leading-[1.6]">
                  {euridisFormationData.introNote}
                </p>
              </div>
              <div className="bg-[#1F4F6E] text-white rounded-[12px] p-6 flex flex-col justify-between">
                <p className="text-xs uppercase tracking-[0.12em] text-[#02ADAB] font-medium mb-2">
                  Idée centrale
                </p>
                <p className="text-xl sm:text-2xl font-light text-white leading-snug mb-3">
                  {euridisFormationData.coreThesis}
                </p>
                <p className="text-[0.92rem] text-white/80 leading-[1.6]">
                  {euridisFormationData.harness.capitalIaLink}
                </p>
              </div>
            </div>

            {/* Programme Jour 1 & Jour 2 */}
            <div className="space-y-8">
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.14em] text-[#C06721] font-medium mb-1">
                  Programme · Première journée
                </p>
                <h2 className="text-[1.45rem] sm:text-[1.6rem] font-medium text-[#1F4F6E] mb-6">
                  {euridisFormationData.day1.title}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-7">
                    <h3 className="text-[1.05rem] font-medium text-[#1F4F6E] mb-3">
                      {euridisFormationData.day1.morningTitle}
                    </h3>
                    <ul className="space-y-2.5">
                      {euridisFormationData.day1.morningItems.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[0.93rem] text-[#475569] leading-[1.6]">
                          <CheckCircle2 className="w-4 h-4 text-[#02ADAB] shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-5 bg-white border border-[#e2e8f0] rounded-[10px] p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-[1.05rem] font-medium text-[#1F4F6E] mb-2">
                        {euridisFormationData.day1.afternoonTitle}
                      </h3>
                      <p className="text-[0.93rem] text-[#475569] leading-[1.65]">
                        {euridisFormationData.day1.afternoonSummary}
                      </p>
                    </div>
                    <p className="text-xs font-medium text-[#037971] mt-4 pt-3 border-t border-[#e2e8f0]">
                      Livrable : guide de style, site publié en ligne &amp; pitch de 2 minutes
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.14em] text-[#C06721] font-medium mb-1">
                  Programme · Deuxième journée
                </p>
                <h2 className="text-[1.45rem] sm:text-[1.6rem] font-medium text-[#1F4F6E] mb-2">
                  {euridisFormationData.day2.title}
                </h2>
                <p className="text-[0.95rem] text-[#475569] mb-6 max-w-[760px] leading-[1.6]">
                  {euridisFormationData.day2.intro}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                  {euridisFormationData.day2.steps.map((s) => (
                    <div
                      key={s.step}
                      className="bg-white border border-[#e2e8f0] rounded-[10px] p-4 flex flex-col"
                    >
                      <span className="text-xs font-mono tabular-nums font-semibold text-[#C06721] mb-1">
                        {s.step}
                      </span>
                      <h3 className="text-[0.98rem] font-medium text-[#1F4F6E] mb-1.5">
                        {s.title}
                      </h3>
                      <p className="text-[0.86rem] text-[#475569] leading-[1.55]">
                        {s.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-[0.93rem] text-[#1F4F6E] bg-white border border-[#e2e8f0] rounded-[10px] p-4 leading-[1.6]">
                  {euridisFormationData.day2.synthesisNote}
                </p>
              </div>
            </div>

            {/* Le Harnais (Agent Harness) */}
            <div>
              <h2 className="text-[1.45rem] sm:text-[1.6rem] font-medium text-[#1F4F6E] mb-2">
                {euridisFormationData.harness.title}
              </h2>
              <p className="text-[0.95rem] text-[#475569] mb-6 max-w-[780px] leading-[1.65]">
                {euridisFormationData.harness.intro}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {euridisFormationData.harness.components.map((comp, idx) => (
                  <div
                    key={comp.name}
                    className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] p-4"
                  >
                    <div className="text-xs font-mono tabular-nums text-[#037971] mb-1">
                      0{idx + 1}
                    </div>
                    <h3 className="text-[1rem] font-medium text-[#1F4F6E] mb-1">{comp.name}</h3>
                    <p className="text-[0.86rem] text-[#475569] leading-[1.5]">{comp.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* La Stack de la formation + Ce que les étudiants emportent */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-6">
                <h2 className="text-[1.3rem] font-medium text-[#1F4F6E] mb-4">
                  La stack de la formation
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-[0.9rem]">
                    <thead>
                      <tr className="border-b border-[#cbd5e1] text-[#1F4F6E]">
                        <th className="py-2.5 pr-4 font-medium">Pôle</th>
                        <th className="py-2.5 font-medium">Outils &amp; briques pratiqués</th>
                      </tr>
                    </thead>
                    <tbody>
                      {euridisFormationData.stack.map((row) => (
                        <tr key={row.category} className="border-b border-[#e2e8f0] last:border-b-0">
                          <td className="py-2.5 pr-4 font-medium text-[#1F4F6E] align-top whitespace-nowrap">
                            {row.category}
                          </td>
                          <td className="py-2.5 text-[#475569]">{row.tools}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e2e8f0] flex flex-wrap gap-4 text-xs font-medium">
                  <Link
                    to="/partenaires/outils/awa-cloud/"
                    className="inline-flex items-center gap-1 text-[#037971] hover:text-[#C06721] transition-colors"
                  >
                    <span>Voir notre partenaire AWA Cloud (conversion Markdown)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-6">
                <h2 className="text-[1.3rem] font-medium text-[#1F4F6E] mb-4">
                  Ce que les étudiants emportent
                </h2>
                <ul className="space-y-3 mb-6">
                  {euridisFormationData.takeaways.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.93rem] text-[#475569] leading-[1.6]">
                      <CheckCircle2 className="w-4 h-4 text-[#02ADAB] shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-[#e2e8f0] text-xs text-[#475569]">
                  <p className="italic mb-2">{euridisFormationData.attribution}</p>
                  <Link
                    to="/alchimistes/cyril-garnier/"
                    className="inline-flex items-center gap-1 font-medium text-[#037971] hover:text-[#C06721] transition-colors"
                  >
                    <span>Profil complet de Cyril Garnier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Questions fréquentes Euridis */}
            <div>
              <h2 className="text-[1.45rem] sm:text-[1.6rem] font-medium text-[#1F4F6E] mb-5">
                Questions fréquentes
              </h2>
              <div className="space-y-3">
                {euridisFormationData.faq.map((item, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={item.question}
                      className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] overflow-hidden"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-white transition-colors"
                      >
                        <span className="font-medium text-[0.98rem] text-[#1F4F6E]">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#037971] shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4 text-[0.92rem] text-[#475569] leading-[1.65] bg-white border-t border-[#e2e8f0] pt-3">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION SPÉCIFIQUE IÉSEG : 4 INTERVENTIONS, SHADOW IA, AGENT SODA, AVIS & FAQ */}
      {isIeseg && (
        <section className="bg-white border-y border-[#e2e8f0] py-14 px-6 my-4">
          <div className="max-w-[1040px] mx-auto space-y-12">
            {/* Conviction & Ancrage depuis 2019 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-6 flex flex-col justify-between">
                <p className="text-xs uppercase tracking-[0.12em] text-[#037971] font-medium mb-2">
                  Master &amp; Incubateur · Depuis 2019
                </p>
                <p className="text-xl sm:text-2xl font-medium text-[#1F4F6E] leading-snug mb-3">
                  {iesegFormationData.conviction}
                </p>
                <p className="text-[0.92rem] text-[#475569] leading-[1.65]">
                  {iesegFormationData.intro}
                </p>
              </div>
              <div className="bg-[#1F4F6E] text-white rounded-[12px] p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#02ADAB] font-medium mb-2">
                    {iesegFormationData.fieldObservation.title}
                  </p>
                  <p className="text-lg sm:text-xl font-normal text-white leading-snug mb-3">
                    {iesegFormationData.fieldObservation.leadStat}
                  </p>
                  <p className="text-[0.91rem] text-white/85 leading-[1.6]">
                    {iesegFormationData.fieldObservation.summary}
                  </p>
                </div>
                <p className="text-xs text-white/75 mt-4 pt-3 border-t border-white/15 leading-[1.55]">
                  {iesegFormationData.fieldObservation.finding}
                </p>
              </div>
            </div>

            {/* Quatre façons d'intervenir */}
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#C06721] font-medium mb-1">
                Pédagogie &amp; terrain
              </p>
              <h2 className="text-[1.45rem] sm:text-[1.65rem] font-medium text-[#1F4F6E] mb-6">
                Quatre façons d’intervenir
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {iesegFormationData.interventions.map((item) => (
                  <div
                    key={item.number}
                    className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-6 flex flex-col"
                  >
                    <span className="text-xs font-mono tabular-nums font-semibold text-[#C06721] mb-1">
                      {item.number}
                    </span>
                    <h3 className="text-[1.08rem] font-medium text-[#1F4F6E] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[0.92rem] text-[#475569] leading-[1.6] mb-3">
                      {item.description}
                    </p>
                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="space-y-2 mt-1 pt-3 border-t border-[#e2e8f0]">
                        {item.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-[0.88rem] text-[#475569] leading-[1.55]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs italic text-[#5a7a90] mt-4">
                {iesegFormationData.fieldObservation.methodologyNote}
              </p>
            </div>

            {/* SODA : un agent d'accompagnement construit sur un cadre de recherche */}
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#037971] font-medium mb-1">
                    Outil méthodologique · Recherche
                  </p>
                  <h2 className="text-[1.35rem] sm:text-[1.5rem] font-medium text-[#1F4F6E] mb-3">
                    {iesegFormationData.soda.title}
                  </h2>
                  <p className="text-[0.93rem] text-[#475569] leading-[1.65] mb-4">
                    {iesegFormationData.soda.description}
                  </p>
                  <Link
                    to="/ressources/analyseurs/analyseur-de-memoire/"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#037971] hover:text-[#C06721] transition-colors"
                  >
                    <span>Découvrir aussi l’Analyseur de mémoire gratuit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="lg:col-span-7 bg-white border border-[#e2e8f0] rounded-[10px] p-6">
                  <blockquote className="text-[0.95rem] text-[#1F4F6E] leading-[1.7] italic mb-4">
                    « {iesegFormationData.soda.review.quote} »
                  </blockquote>
                  <div className="pt-3 border-t border-[#e2e8f0] flex items-center justify-between text-xs text-[#475569]">
                    <span className="font-medium text-[#1F4F6E]">
                      {iesegFormationData.soda.review.author}
                    </span>
                    <span className="text-[#C06721] font-medium">
                      {iesegFormationData.soda.review.source}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ce qu'en disent les étudiants sur l'accompagnement */}
            <div>
              <h2 className="text-[1.45rem] sm:text-[1.65rem] font-medium text-[#1F4F6E] mb-6">
                Ce qu’en disent les étudiants sur l’accompagnement
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {iesegFormationData.testimonials.map((t) => (
                  <blockquote
                    key={t.author}
                    className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-6 flex flex-col justify-between"
                  >
                    <p className="text-[0.93rem] text-[#475569] leading-[1.68] italic mb-5">
                      « {t.quote} »
                    </p>
                    <footer className="pt-3 border-t border-[#e2e8f0] flex flex-wrap items-center justify-between gap-2 text-xs">
                      <strong className="text-[#1F4F6E] font-medium">{t.author}</strong>
                      <span className="text-[#C06721] font-medium">{t.roleAndSource}</span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>

            {/* Mots-clés de l'accompagnement & attribution */}
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-6">
              <h2 className="text-[1.35rem] font-medium text-[#1F4F6E] mb-4">
                Les mots-clés de l’accompagnement
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-[0.9rem]">
                  <thead>
                    <tr className="border-b border-[#cbd5e1] text-[#1F4F6E]">
                      <th className="py-2.5 pr-4 font-medium">Axe</th>
                      <th className="py-2.5 font-medium">Notions &amp; pratiques couvertes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {iesegFormationData.keywordGroups.map((row) => (
                      <tr key={row.category} className="border-b border-[#e2e8f0] last:border-b-0">
                        <td className="py-2.5 pr-4 font-medium text-[#1F4F6E] align-top whitespace-nowrap">
                          {row.category}
                        </td>
                        <td className="py-2.5 text-[#475569]">{row.keywords}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 pt-3 border-t border-[#e2e8f0] flex flex-wrap items-center justify-between gap-4 text-xs text-[#475569]">
                <span className="italic">{iesegFormationData.attribution}</span>
                <Link
                  to="/alchimistes/cyril-garnier/"
                  className="inline-flex items-center gap-1 font-medium text-[#037971] hover:text-[#C06721] transition-colors"
                >
                  <span>Profil complet de Cyril Garnier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Questions fréquentes IÉSEG */}
            <div>
              <h2 className="text-[1.45rem] sm:text-[1.6rem] font-medium text-[#1F4F6E] mb-5">
                Questions fréquentes
              </h2>
              <div className="space-y-3">
                {iesegFormationData.faq.map((item, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={item.question}
                      className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] overflow-hidden"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-white transition-colors"
                      >
                        <span className="font-medium text-[0.98rem] text-[#1F4F6E]">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#037971] shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4 text-[0.92rem] text-[#475569] leading-[1.65] bg-white border-t border-[#e2e8f0] pt-3">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BLOC 3 & 4 : CE QUE NOUS FAISONS ENSEMBLE & RÉSULTATS MESURABLES */}
      <section className="max-w-[1040px] mx-auto py-10 px-6 space-y-12">
        <div>
          <h2 className="text-[1.5rem] sm:text-[1.65rem] font-medium text-[#1F4F6E] mb-6">
            3. Ce que nous réalisons ensemble
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {detail.jointActions.map((act) => (
              <div
                key={act.title}
                className="bg-white rounded-[12px] p-6 shadow-[0_2px_12px_rgba(31,79,110,0.06)]"
              >
                <FileCode2 className="w-5 h-5 text-[#02ADAB] mb-3" />
                <h3 className="text-[1.05rem] font-medium text-[#1F4F6E] mb-2">{act.title}</h3>
                <p className="text-[0.91rem] text-[#4a6a80] leading-[1.6]">{act.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[1.5rem] sm:text-[1.65rem] font-medium text-[#1F4F6E] mb-6">
            4. Repères factuels et résultats vérifiables
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {detail.measurableResults.map((res) => (
              <div
                key={res.label}
                className="bg-white rounded-[12px] p-6 shadow-[0_2px_12px_rgba(31,79,110,0.06)] border-t-4 border-t-[#C06721]"
              >
                <div className="text-2xl font-medium text-[#1F4F6E] mb-1">{res.metric}</div>
                <div className="text-sm font-medium text-[#037971] mb-2">{res.label}</div>
                <p className="text-xs text-[#5a7a90] leading-relaxed">{res.context}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION VIDÉOS INATEC (EX /ressources/alkymya-x-inatec/) */}
        {detail.videos && detail.videos.length > 0 && (
          <div>
            <h2 className="text-[1.5rem] sm:text-[1.65rem] font-medium text-[#1F4F6E] mb-2">
              Capsules vidéo conjointes Alkymya x INATEC
            </h2>
            <p className="text-sm text-[#5a7a90] mb-6">
              Cinq capsules illustrant les cas d'usage PME et l'articulation avec le financement OPCO porté par INATEC.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {detail.videos.map((vid) => (
                <article
                  key={vid.title}
                  className="bg-white rounded-[12px] overflow-hidden shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col"
                >
                  <div className="aspect-[9/16] bg-[#16384e] relative">
                    <video
                      src={vid.url}
                      controls
                      preload="metadata"
                      playsInline
                      title={vid.title}
                      aria-label={`Capsule vidéo Alkymya x INATEC : ${vid.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-[#02ADAB] mb-1">
                        <Play className="w-3 h-3" /> Capsule INATEC
                      </span>
                      <h3 className="text-[1.08rem] font-medium text-[#1F4F6E] mb-1.5">
                        {vid.title}
                      </h3>
                      <p className="text-[0.88rem] text-[#5a7a90] leading-[1.55]">
                        {vid.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* BLOC 5 : POUR QUI */}
        <div className="bg-white rounded-[12px] p-6 sm:p-8 shadow-[0_2px_14px_rgba(31,79,110,0.06)]">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#02ADAB] font-medium mb-2">
            <Users className="w-4 h-4" />
            <span>Publics concernés</span>
          </div>
          <h2 className="text-[1.35rem] font-medium text-[#1F4F6E] mb-4">
            5. À qui s’adresse ce partenariat
          </h2>
          <ul className="space-y-2.5">
            {detail.audience.map((aud) => (
              <li key={aud} className="flex items-start gap-2.5 text-[0.94rem] text-[#4a6a80]">
                <CheckCircle2 className="w-4 h-4 text-[#02ADAB] shrink-0 mt-1" />
                <span>{aud}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BLOC 6 : CTA & LIEN RETOUR */}
      <section className="max-w-[1040px] mx-auto pb-16 px-6 space-y-6">
        <div className="bg-[#1F4F6E] text-white rounded-[16px] p-7 sm:p-9 text-center shadow-[0_8px_30px_rgba(31,79,110,0.16)]">
          <h2 className="text-[1.55rem] sm:text-[1.75rem] font-light text-white mb-2">
            6. Activer un projet avec <strong className="font-medium">{detail.name}</strong> &amp; Alkymya
          </h2>
          <p className="text-[0.96rem] text-white/80 max-w-[560px] mx-auto mb-6 leading-[1.65]">
            Échangez directement avec Cyril Garnier pour qualifier votre besoin (OPCO, alternance, RAG local ou gouvernance data) ou consultez le site officiel de notre partenaire.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={detail.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C06721] hover:bg-[#a85517] text-white px-6 py-3 rounded-[8px] font-medium text-sm transition-colors"
            >
              <span>{detail.ctaLabel}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="mailto:cyril@alkymya.co"
              className="inline-flex items-center gap-2 bg-white text-[#1F4F6E] hover:bg-[#f4f6f9] px-6 py-3 rounded-[8px] font-medium text-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contacter Cyril Garnier</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {detail.secondaryLinks.map((lnk) => (
            <Link
              key={lnk.href}
              to={lnk.href}
              className="flex items-center justify-between gap-2 p-4 rounded-[10px] bg-white shadow-[0_2px_10px_rgba(31,79,110,0.06)] text-sm font-medium text-[#1F4F6E] hover:text-[#C06721] transition-colors"
            >
              <span>{lnk.label}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
