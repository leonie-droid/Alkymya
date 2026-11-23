import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MapPin,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { SEO } from '../components/SEO';
import {
  getPartnerCategoryMeta,
  getPartnersByCategory,
  partnerCategories,
  PartnerCategorySlug
} from '../data/partenaires';
import { cloudinaryUrl } from '../utils/cloudinary';

export default function PartenairesSubHub() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const meta = categorySlug ? getPartnerCategoryMeta(categorySlug) : undefined;
  const [failedLogos, setFailedLogos] = React.useState<Record<string, boolean>>({});

  if (!meta) {
    return (
      <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen flex items-center justify-center px-6 py-24">
        <div className="bg-white rounded-[12px] p-10 max-w-md w-full text-center shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
          <h1 className="text-2xl font-medium mb-3">Catégorie de partenaires introuvable</h1>
          <p className="text-sm text-[#5a7a90] mb-6">
            Ce pôle partenaire n'existe pas ou a été déplacé.
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

  const partners = getPartnersByCategory(meta.slug as PartnerCategorySlug);
  const canonicalPath = `/partenaires/${meta.slug}/`;
  const canonicalUrl = `https://alkymya.co${canonicalPath}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: meta.seoTitle,
        headline: meta.h1,
        description: meta.seoDescription,
        inLanguage: 'fr-FR',
        isPartOf: { '@id': 'https://alkymya.co/#website' },
        publisher: { '@id': 'https://alkymya.co/#organization' },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        mainEntity: { '@id': `${canonicalUrl}#itemlist` }
      },
      {
        '@type': 'ItemList',
        '@id': `${canonicalUrl}#itemlist`,
        name: meta.name,
        numberOfItems: partners.length,
        itemListElement: partners.map((p, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: p.name,
          url: p.hasDetailPage
            ? `https://alkymya.co/partenaires/${meta.slug}/${p.slug}/`
            : p.websiteUrl
        }))
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://alkymya.co/' },
          { '@type': 'ListItem', position: 2, name: 'Nos Partenaires', item: 'https://alkymya.co/partenaires/' },
          { '@type': 'ListItem', position: 3, name: meta.name, item: canonicalUrl }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title={meta.seoTitle}
        description={meta.seoDescription}
        keywords={meta.keywords}
        canonicalPath={canonicalPath}
        ogImage="https://alkymya.co/og-partenaires.jpg"
        type="CollectionPage"
        structuredData={structuredData}
      />

      {/* HERO SUB-HUB */}
      <header className="bg-[#1F4F6E] text-white py-16 px-6 sm:px-10">
        <div className="max-w-[1040px] mx-auto">
          <nav aria-label="Fil d'Ariane" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/75">
            <Link to="/" className="hover:text-[#02ADAB] transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link to="/partenaires/" className="hover:text-[#02ADAB] transition-colors">
              Nos Partenaires
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{meta.name}</span>
          </nav>

          <p className="text-[0.8rem] tracking-[0.16em] uppercase text-[#02ADAB] mb-3 font-medium">
            {meta.eyebrow}
          </p>

          <h1 className="font-light text-[2rem] sm:text-[2.5rem] leading-[1.2] mb-4 text-white max-w-[820px]">
            {meta.h1}
          </h1>

          <p className="text-[1.02rem] text-white/80 max-w-[740px] leading-[1.7] font-light mb-8">
            {meta.heroIntro}
          </p>

          {/* Navigation entre les 6 sous-hubs */}
          <nav aria-label="Autres catégories de partenaires" className="flex flex-wrap gap-2 mb-8">
            {partnerCategories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/partenaires/${cat.slug}/`}
                className={`px-3.5 py-2 rounded-[7px] text-xs font-medium transition-colors ${
                  cat.slug === meta.slug
                    ? 'bg-white text-[#1F4F6E]'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                {cat.shortTitle}
              </Link>
            ))}
          </nav>

          {/* Preuves / volumes */}
          <div className="pt-7 border-t border-white/12 grid grid-cols-2 md:grid-cols-4 gap-5">
            {meta.proofStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-light text-[#02ADAB]">{stat.value}</div>
                <div className="text-xs text-white/75 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* NOTES MÉTHODOLOGIQUES / OPCO / QUALIOPI */}
      {meta.hubNotes && meta.hubNotes.length > 0 && (
        <section className="max-w-[1040px] mx-auto pt-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {meta.hubNotes.map((note) => (
              <div
                key={note.title}
                className="bg-white rounded-[12px] p-6 shadow-[0_2px_14px_rgba(31,79,110,0.06)] border-l-4 border-l-[#02ADAB]"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#02ADAB] font-medium mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Cadre &amp; Transparence</span>
                </div>
                <h2 className="text-[1.1rem] font-medium text-[#1F4F6E] mb-2">{note.title}</h2>
                <p className="text-[0.92rem] text-[#4a6a80] leading-[1.65]">{note.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* LISTE STRUCTURÉE DES PARTENAIRES */}
      <section className="max-w-[1040px] mx-auto py-14 px-6">
        <div className="mb-8">
          <h2 className="text-[1.65rem] font-light text-[#1F4F6E]">
            Organisations référencées dans le pôle <strong className="font-medium">{meta.name}</strong>
          </h2>
          <p className="text-sm text-[#5a7a90] mt-1">
            Chaque partenaire cité inclut son rôle concret avec Alkymya et un lien vérifié vers son site officiel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partners.map((partner) => (
            <article
              key={partner.slug}
              className="bg-white rounded-[12px] p-6 shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col justify-between border border-[rgba(31,79,110,0.07)]"
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-24 h-14 rounded-[8px] border p-2 flex items-center justify-center shrink-0 ${
                      partner.logoBgDark
                        ? 'bg-[#0f172a] border-[#1e293b]'
                        : 'bg-[#f8fafc] border-[#e2e8f0]'
                    }`}
                  >
                    {failedLogos[partner.slug] ? (
                      <span className="text-[11px] font-semibold text-[#1F4F6E] text-center leading-tight">
                        {partner.name.split(' ')[0]}
                      </span>
                    ) : (
                      <img
                        src={
                          partner.logo.toLowerCase().endsWith('.svg')
                            ? partner.logo
                            : cloudinaryUrl(partner.logo, 320)
                        }
                        width={96}
                        height={56}
                        loading="lazy"
                        alt={`Logo ${partner.name} — partenaire Alkymya`}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedLogos((prev) => ({ ...prev, [partner.slug]: true }))
                        }
                        className="max-w-full max-h-full object-contain"
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-[#C06721] block mb-0.5">
                      {partner.badge}
                    </span>
                    <h3 className="text-[1.2rem] font-medium text-[#1F4F6E] leading-snug">
                      {partner.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#5a7a90] mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#02ADAB] shrink-0" />
                      <span>{partner.city}</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs font-medium text-[#037971] bg-[#02ADAB]/10 px-3 py-1.5 rounded-[6px] mb-3 inline-block">
                  Relation : {partner.relation}
                </div>

                <p className="text-[0.93rem] text-[#4a6a80] leading-[1.65]">{partner.summary}</p>
              </div>

              <div className="pt-4 mt-5 border-t border-[rgba(31,79,110,0.08)] flex flex-wrap items-center justify-between gap-3">
                <a
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1F4F6E] hover:text-[#C06721] transition-colors"
                >
                  <span>Site officiel : {partner.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="flex flex-wrap items-center gap-2">
                  {partner.alchimistePath && (
                    <Link
                      to={partner.alchimistePath}
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#037971] bg-[#f4f6f9] hover:bg-[#e7ecf2] px-3 py-1.5 rounded-[6px] transition-colors"
                    >
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>Fiche Alchimiste</span>
                    </Link>
                  )}
                  {partner.hasDetailPage && (
                    <Link
                      to={`/partenaires/${meta.slug}/${partner.slug}/`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-[#C06721] hover:bg-[#a85517] px-3.5 py-1.5 rounded-[6px] transition-colors"
                    >
                      <span>Ouvrir la fiche {partner.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Liens transverses */}
        <div className="mt-14 bg-white rounded-[12px] p-6 sm:p-8 shadow-[0_2px_14px_rgba(31,79,110,0.06)]">
          <h3 className="text-[1.1rem] font-medium text-[#1F4F6E] mb-4">
            Ressources et pages liées à ce pôle
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {meta.crossLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center justify-between gap-2 p-4 rounded-[8px] bg-[#f4f6f9] hover:bg-[#02ADAB]/10 text-sm font-medium text-[#1F4F6E] hover:text-[#037971] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
