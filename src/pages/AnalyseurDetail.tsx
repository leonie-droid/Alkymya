import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Globe,
  ListChecks,
  Lock,
  Users
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getAnalyserBySlug } from '../data/analyseurs';

export default function AnalyseurDetail() {
  const { toolSlug } = useParams<{ toolSlug: string }>();
  const tool = toolSlug ? getAnalyserBySlug(toolSlug) : undefined;

  if (!tool) {
    return (
      <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen flex items-center justify-center px-6 py-24">
        <div className="bg-white rounded-[12px] p-10 max-w-md w-full text-center shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
          <h1 className="text-2xl font-medium mb-3">Analyseur introuvable</h1>
          <p className="text-sm text-[#5a7a90] mb-6">
            Cet outil n'existe pas ou a été déplacé.
          </p>
          <Link
            to="/ressources/analyseurs/"
            className="inline-flex items-center gap-2 bg-[#1F4F6E] hover:bg-[#02ADAB] text-white text-sm font-medium py-3 px-6 rounded-[8px] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voir nos 4 Analyseurs IA</span>
          </Link>
        </div>
      </div>
    );
  }

  const canonicalUrl = `https://alkymya.co${tool.path}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: tool.seoTitle,
        headline: tool.h1,
        description: tool.seoDescription,
        inLanguage: 'fr-FR',
        isPartOf: { '@id': 'https://alkymya.co/#website' },
        mainEntity: { '@id': `${canonicalUrl}#app` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` }
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${canonicalUrl}#app`,
        name: tool.name,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: tool.subdomain,
        description: tool.whatItDoes,
        isAccessibleForFree: true,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR'
        },
        author: { '@id': 'https://alkymya.co/#organization' },
        publisher: { '@id': 'https://alkymya.co/#organization' }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://alkymya.co/' },
          { '@type': 'ListItem', position: 2, name: 'Nos Ressources', item: 'https://alkymya.co/ressources/' },
          { '@type': 'ListItem', position: 3, name: 'Nos Analyseurs', item: 'https://alkymya.co/ressources/analyseurs/' },
          { '@type': 'ListItem', position: 4, name: tool.shortName, item: canonicalUrl }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title={tool.seoTitle}
        description={tool.seoDescription}
        keywords={tool.keywords}
        canonicalPath={tool.path}
        ogImage="https://alkymya.co/og-ressources.jpg"
        type="WebApplication"
        structuredData={structuredData}
      />

      {/* HERO OUTIL */}
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
              <Link to="/ressources/analyseurs/" className="hover:text-[#02ADAB] transition-colors">
                Nos Analyseurs
              </Link>
              <span>/</span>
              <span className="text-white font-medium">{tool.shortName}</span>
            </nav>

            <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#02ADAB] mb-3">
              <Cpu className="w-4 h-4" />
              <span>{tool.categoryLabel} · Accès gratuit (0 €)</span>
            </span>

            <h1 className="font-light text-[1.95rem] sm:text-[2.45rem] leading-[1.2] mb-4 text-white">
              {tool.h1}
            </h1>

            <p className="text-[1.02rem] text-white/80 leading-[1.7] font-light mb-7">
              {tool.lead}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={tool.subdomain}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C06721] hover:bg-[#a85517] text-white text-sm font-medium py-3.5 px-7 rounded-[8px] transition-colors shadow-sm"
              >
                <span>Lancer {tool.shortName}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-xs text-white/70 font-mono bg-white/10 px-3 py-2 rounded-[6px]">
                {tool.subdomain.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            {tool.videoUrl ? (
              <div className="w-[230px] aspect-[9/16] rounded-[14px] overflow-hidden border border-white/15 shadow-2xl bg-[#16384e]">
                <video
                  src={tool.videoUrl}
                  muted
                  autoPlay
                  loop
                  playsInline
                  controls
                  title={`Démonstration ${tool.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-[240px] aspect-[9/16] rounded-[14px] border border-white/15 shadow-2xl bg-gradient-to-b from-[#16384e] to-[#0f293a] p-5 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="w-9 h-9 rounded-[8px] bg-[#02ADAB]/20 text-[#02ADAB] flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-white/75">
                      Audit Web 360°
                    </span>
                  </div>
                  <p className="text-sm font-medium text-white mb-1">{tool.shortName}</p>
                  <p className="text-xs text-white/65 mb-4">5 piliers analysés · Note / 100</p>
                  <ul className="space-y-2 text-[11px] text-white/85">
                    <li className="border-l-2 border-[#02ADAB] pl-2.5">01. UX &amp; Brand Content</li>
                    <li className="border-l-2 border-[#02ADAB] pl-2.5">02. SEO &amp; GEO (IA)</li>
                    <li className="border-l-2 border-[#02ADAB] pl-2.5">03. E-E-A-T On/Off-Site</li>
                    <li className="border-l-2 border-[#C06721] pl-2.5">04. Perf &amp; Sécurité HTTP</li>
                    <li className="border-l-2 border-[#C06721] pl-2.5">05. RGPD &amp; RGAA</li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-white/10 text-[11px] font-mono text-[#02ADAB]">
                  scan.alkymya.co
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* LES 6 BLOCS REQUIS (400–600 MOTS) */}
      <section className="max-w-[1040px] mx-auto py-14 px-6 space-y-8">
        {/* Bloc 1 : Ce que fait l'outil */}
        <div className="bg-white rounded-[12px] p-6 sm:p-8 shadow-[0_2px_16px_rgba(31,79,110,0.08)] border-l-4 border-l-[#02ADAB]">
          <h2 className="text-[1.35rem] font-medium text-[#1F4F6E] mb-3">
            1. Ce que fait {tool.shortName}
          </h2>
          <p className="text-[0.98rem] text-[#4a6a80] leading-[1.75]">{tool.whatItDoes}</p>
        </div>

        {/* Bloc 2 : À qui il sert */}
        <div>
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#02ADAB] mb-2">
            <Users className="w-4 h-4" />
            <span>Cas d’usage</span>
          </div>
          <h2 className="text-[1.45rem] font-medium text-[#1F4F6E] mb-5">
            2. À qui sert cet outil
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tool.whoItIsFor.map((item) => (
              <div
                key={item.audience}
                className="bg-white rounded-[12px] p-6 shadow-[0_2px_12px_rgba(31,79,110,0.06)]"
              >
                <h3 className="text-[1.05rem] font-medium text-[#1F4F6E] mb-2">
                  {item.audience}
                </h3>
                <p className="text-[0.91rem] text-[#5a7a90] leading-[1.6]">{item.useCase}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bloc 3 : Comment on l'utilise 1-2-3 */}
        <div>
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#02ADAB] mb-2">
            <ListChecks className="w-4 h-4" />
            <span>Mode opératoire</span>
          </div>
          <h2 className="text-[1.45rem] font-medium text-[#1F4F6E] mb-5">
            3. Comment l’utiliser en 3 étapes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tool.howToUse.map((st) => (
              <div
                key={st.step}
                className="bg-white rounded-[12px] p-6 shadow-[0_2px_12px_rgba(31,79,110,0.06)] border-t-4 border-t-[#02ADAB]"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-[6px] bg-[#1F4F6E] text-white text-sm font-medium mb-3">
                  {st.step}
                </span>
                <h3 className="text-[1.06rem] font-medium text-[#1F4F6E] mb-2">{st.title}</h3>
                <p className="text-[0.91rem] text-[#5a7a90] leading-[1.6]">{st.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bloc 4 & 5 : Ce qu'il ne fait pas + Confidentialité */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-[12px] p-6 sm:p-7 shadow-[0_2px_14px_rgba(31,79,110,0.07)] border-l-4 border-l-[#C06721]">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#C06721] mb-2">
              <AlertCircle className="w-4 h-4" />
              <span>Limites assumées</span>
            </div>
            <h2 className="text-[1.25rem] font-medium text-[#1F4F6E] mb-3">
              4. Ce qu’il ne fait pas
            </h2>
            <ul className="space-y-2.5">
              {tool.whatItDoesNotDo.map((lim) => (
                <li key={lim} className="flex items-start gap-2 text-[0.92rem] text-[#4a6a80] leading-[1.6]">
                  <CheckCircle2 className="w-4 h-4 text-[#C06721] shrink-0 mt-1" />
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-[12px] p-6 sm:p-7 shadow-[0_2px_14px_rgba(31,79,110,0.07)] border-l-4 border-l-[#1F4F6E]">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#1F4F6E] mb-2">
              <Lock className="w-4 h-4" />
              <span>Bonnes pratiques</span>
            </div>
            <h2 className="text-[1.25rem] font-medium text-[#1F4F6E] mb-3">
              5. Confidentialité &amp; précautions
            </h2>
            <p className="text-[0.93rem] text-[#4a6a80] leading-[1.7]">{tool.privacy}</p>
          </div>
        </div>

        {/* Partenariat associé (pour Analyseur de CV) */}
        {tool.partnerTie && (
          <div className="bg-[#1F4F6E] text-white rounded-[12px] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-[#02ADAB] block mb-1">
                Partenaire associé : {tool.partnerTie.role}
              </span>
              <h3 className="text-[1.2rem] font-medium text-white mb-1">{tool.partnerTie.name}</h3>
              <p className="text-sm text-white/80 max-w-[600px]">
                L'Analyseur de CV prolonge l'accompagnement humain proposé par Kendra Martine auprès des alternants et dirigeants de TPE/PME.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to={tool.partnerTie.partnerPath}
                className="bg-white text-[#1F4F6E] text-xs font-medium py-2.5 px-4 rounded-[7px]"
              >
                Fiche Objectif Alternance
              </Link>
              <a
                href={tool.partnerTie.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#C06721] text-white text-xs font-medium py-2.5 px-4 rounded-[7px]"
              >
                <span>objectifalternance.fr</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* Bloc 6 : Lancer l'outil + sous-domaine */}
        <div className="bg-white rounded-[12px] p-7 sm:p-9 shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-[#02ADAB] block mb-1">
              6. Accès direct · Sans inscription
            </span>
            <h2 className="text-[1.4rem] font-medium text-[#1F4F6E]">
              Lancer {tool.shortName} maintenant
            </h2>
            <p className="text-sm text-[#5a7a90] mt-1">
              Application hébergée sur <strong className="text-[#1F4F6E]">{tool.subdomain}</strong>
            </p>
          </div>

          <a
            href={tool.subdomain}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#C06721] hover:bg-[#a85517] text-white text-sm font-medium py-3.5 px-7 rounded-[8px] transition-colors shrink-0"
          >
            <span>Ouvrir {tool.shortName}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Liens transverses */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tool.crossLinks.map((lnk) => (
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
