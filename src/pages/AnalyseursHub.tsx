import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Cpu, ExternalLink } from 'lucide-react';
import { SEO } from '../components/SEO';
import { analyseursList } from '../data/analyseurs';

export default function AnalyseursHub() {
  const canonicalUrl = 'https://alkymya.co/ressources/analyseurs/';

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: 'Analyseurs IA Gratuits : Photo, CV & Mémoire | Alkymya',
        headline: 'Trois analyseurs IA gratuits en production par Alkymya',
        description:
          "Chaque outil web possède sa page documentée (ce qu'il fait, à qui il sert, mode d'emploi, limites, confidentialité) avant de lancer l'application.",
        inLanguage: 'fr-FR',
        isPartOf: { '@id': 'https://alkymya.co/#website' },
        publisher: { '@id': 'https://alkymya.co/#organization' },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        mainEntity: { '@id': `${canonicalUrl}#itemlist` }
      },
      {
        '@type': 'ItemList',
        '@id': `${canonicalUrl}#itemlist`,
        name: 'Nos 3 Analyseurs IA gratuits',
        numberOfItems: analyseursList.length,
        itemListElement: analyseursList.map((tool, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: tool.name,
          url: `https://alkymya.co${tool.path}`
        }))
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://alkymya.co/' },
          { '@type': 'ListItem', position: 2, name: 'Nos Ressources', item: 'https://alkymya.co/ressources/' },
          { '@type': 'ListItem', position: 3, name: 'Nos Analyseurs', item: canonicalUrl }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Analyseurs IA Gratuits : Photo, CV & Mémoire | Alkymya"
        description="Testez nos 3 analyseurs IA gratuits sans inscription : Analyseur de photo, Analyseur de CV (avec Objectif Alternance) et Analyseur de mémoire."
        keywords="analyseur de photo IA, analyseur de CV gratuit, analyseur de mémoire IA, outils IA gratuits Alkymya"
        canonicalPath="/ressources/analyseurs/"
        ogImage="https://alkymya.co/og-ressources.jpg"
        type="CollectionPage"
        structuredData={structuredData}
      />

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
            <span className="text-white font-medium">Nos Analyseurs</span>
          </nav>

          <p className="text-[0.8rem] tracking-[0.16em] uppercase text-[#02ADAB] mb-3 font-medium">
            Outils IA Ouverts · Accès Libre &amp; Sans Inscription
          </p>
          <h1 className="font-light text-[2rem] sm:text-[2.5rem] leading-[1.2] mb-4 text-white max-w-[800px]">
            Nos Analyseurs IA <strong className="font-medium">gratuits et documentés</strong>
          </h1>
          <p className="text-[1.02rem] text-white/80 max-w-[700px] leading-[1.7] font-light">
            Avant d'ouvrir l'application sur son sous-domaine dédié, chaque analyseur dispose sur alkymya.co de sa fiche explicative complète : usages réels, mode d'emploi en trois étapes, limites assumées et règles de confidentialité.
          </p>
        </div>
      </header>

      <section className="max-w-[1040px] mx-auto py-14 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {analyseursList.map((tool) => (
            <article
              key={tool.slug}
              className="bg-white rounded-[12px] overflow-hidden shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[9/16] bg-[#16384e] relative">
                  <video
                    src={tool.videoUrl}
                    muted
                    autoPlay
                    loop
                    playsInline
                    title={tool.name}
                    aria-label={`Démonstration de ${tool.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#037971] bg-[#02ADAB]/10 px-2.5 py-1 rounded-[4px] mb-3">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>{tool.categoryLabel}</span>
                  </span>
                  <h2 className="text-[1.25rem] font-medium text-[#1F4F6E] mb-2">
                    <Link to={tool.path} className="hover:text-[#C06721] transition-colors">
                      {tool.name}
                    </Link>
                  </h2>
                  <p className="text-[0.92rem] text-[#5a7a90] leading-[1.6]">{tool.lead}</p>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2.5">
                <Link
                  to={tool.path}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1F4F6E] hover:bg-[#02ADAB] text-white text-xs sm:text-sm font-medium py-3 px-4 rounded-[8px] transition-colors"
                >
                  <span>Lire la fiche &amp; mode d’emploi</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={tool.subdomain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-medium text-[#C06721] hover:underline py-1.5"
                >
                  <span>Lancer directement {tool.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-start">
          <Link
            to="/ressources/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#037971] hover:text-[#C06721]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à Nos Ressources</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
