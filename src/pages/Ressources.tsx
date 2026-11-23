import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Cpu,
  Download,
  ExternalLink,
  Gamepad2,
  Headphones
} from 'lucide-react';
import NewsletterButton from '../components/NewsletterButton';
import { SEO } from '../components/SEO';
import { resourceCategories, resources } from '../data/ressources';

const doorIcons: Record<string, typeof BookOpen> = {
  etudes: BookOpen,
  analyseurs: Cpu,
  'business-game': Gamepad2,
  'outils-partenaires': Cpu
};

export default function Ressources() {
  const canonicalUrl = 'https://alkymya.co/ressources/';

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: 'Ressources IA, Études & Analyseurs Gratuits | Alkymya',
        headline: 'La bibliothèque ouverte d’Alkymya : 4 portes d’entrée opérationnelles',
        description:
          "Accédez à nos 5 études longitudinales et prospectives (Génération IA 2024–2026, Gemini 4, La Doctrine IAG), nos 3 analyseurs IA gratuits, le Business Game NoNo BanaBa et nos partenaires technologiques souverains.",
        inLanguage: 'fr-FR',
        isPartOf: { '@id': 'https://alkymya.co/#website' },
        publisher: { '@id': 'https://alkymya.co/#organization' },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        mainEntity: { '@id': `${canonicalUrl}#itemlist` }
      },
      {
        '@type': 'ItemList',
        '@id': `${canonicalUrl}#itemlist`,
        name: 'Catégories de ressources Alkymya',
        numberOfItems: resourceCategories.length,
        itemListElement: resourceCategories.map((cat, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: cat.name,
          url: `https://alkymya.co${cat.path}`
        }))
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://alkymya.co/' },
          { '@type': 'ListItem', position: 2, name: 'Nos Ressources', item: canonicalUrl }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Ressources IA, Études & Analyseurs Gratuits | Alkymya"
        description="Découvrez nos 5 études (Génération IA 2024–2026, Gemini 4, Doctrine IAG), 3 analyseurs IA gratuits, Business Game NoNo BanaBa et outils."
        keywords="études IA Alkymya, Génération IA 2026 1082 étudiants, analyseurs IA gratuits, Business Game NoNo BanaBa, Doctrine IAG"
        canonicalPath="/ressources/"
        ogImage="https://alkymya.co/og-ressources.jpg"
        type="CollectionPage"
        structuredData={structuredData}
      />

      {/* HERO HUB 4 PORTES */}
      <header className="bg-[#1F4F6E] text-white py-16 sm:py-20 px-6 sm:px-10 text-center">
        <div className="max-w-[820px] mx-auto">
          <p className="text-[0.82rem] tracking-[0.16em] uppercase text-[#02ADAB] mb-4 font-medium">
            Bibliothèque Ouverte · Données, Outils &amp; Pédagogie
          </p>

          <h1 className="font-light text-[2.2rem] sm:text-[2.65rem] leading-[1.2] mb-5 text-white">
            Ressources IA d’Alkymya :<br />
            <strong className="font-medium text-white">études terrain, outils ouverts &amp; simulation.</strong>
          </h1>

          <p className="text-[1.04rem] text-white/80 max-w-[660px] mx-auto leading-[1.7] font-light mb-8">
            Toutes nos publications et applications sont accessibles sans inscription : le fond complet de nos enquêtes (1 082 étudiants) est publié directement en HTML avec tableaux et export PDF en bonus, et chaque analyseur dispose de sa fiche technique claire.
          </p>

          <nav aria-label="Les 4 portes des ressources" className="inline-flex flex-wrap justify-center gap-2 mb-8">
            {resourceCategories.map((cat) => (
              <Link
                key={cat.slug}
                to={cat.path}
                className="px-4 py-2 rounded-[7px] text-xs font-medium bg-white/10 hover:bg-white hover:text-[#1F4F6E] text-white transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </nav>

          <div className="pt-8 border-t border-white/12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB]">5</div>
              <div className="text-xs text-white/70 uppercase tracking-wider">Études en HTML &amp; PDF</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white">3</div>
              <div className="text-xs text-white/70 uppercase tracking-wider">Analyseurs gratuits</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB]">1 082</div>
              <div className="text-xs text-white/70 uppercase tracking-wider">Étudiants enquêtés</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white">100 %</div>
              <div className="text-xs text-white/70 uppercase tracking-wider">Accès libre</div>
            </div>
          </div>
        </div>
      </header>

      {/* LES 4 PORTES D'ENTRÉE */}
      <section className="max-w-[1100px] mx-auto pt-14 px-6">
        <div className="mb-8">
          <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2 font-medium">
            Architecture des ressources
          </p>
          <h2 className="text-[1.75rem] sm:text-[1.95rem] font-light text-[#1F4F6E]">
            Choisir votre <strong className="font-medium">porte d’entrée</strong>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourceCategories.map((cat) => {
            const Icon = doorIcons[cat.slug] || BookOpen;
            return (
              <Link
                key={cat.slug}
                to={cat.path}
                className="group bg-white rounded-[12px] p-6 sm:p-7 shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between border border-transparent hover:border-[#02ADAB]/35"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="w-10 h-10 rounded-[8px] bg-[#02ADAB]/12 text-[#02ADAB] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-medium text-[#037971] bg-[#02ADAB]/10 px-2.5 py-1 rounded-[4px]">
                      {cat.countLabel}
                    </span>
                  </div>
                  <h3 className="text-[1.2rem] font-medium text-[#1F4F6E] group-hover:text-[#C06721] transition-colors mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-[0.92rem] text-[#5a7a90] leading-[1.6]">{cat.cardSummary}</p>
                </div>
                <div className="pt-4 mt-5 border-t border-[rgba(31,79,110,0.08)] flex items-center justify-between text-xs font-medium text-[#02ADAB] group-hover:text-[#C06721]">
                  <span>Ouvrir la rubrique {cat.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CATALOGUE COMPLET AVEC LIENS DIRECTS VERS CHAQUE PAGE HTML */}
      <section className="max-w-[1100px] mx-auto py-14 px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2 font-medium">
              Accès Direct aux Pages Publiées
            </p>
            <h2 className="text-[1.75rem] sm:text-[1.95rem] font-light text-[#1F4F6E]">
              Les <strong className="font-medium">9 publications &amp; outils</strong> en un coup d’œil
            </h2>
          </div>
          <NewsletterButton variant="primary" size="sm" label="Suivre nos projets" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-[12px] p-6 shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col justify-between border-t-4 border-t-[#02ADAB]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#037971] bg-[#02ADAB]/10 px-2.5 py-0.5 rounded-[4px]">
                    {item.category}
                  </span>
                  {item.audioUrl && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#C06721]">
                      <Headphones className="w-3.5 h-3.5" /> Audio
                    </span>
                  )}
                </div>

                <h3 className="text-[1.12rem] font-medium text-[#1F4F6E] mb-2 leading-snug">
                  <Link
                    to={item.articlePath || '/ressources/'}
                    className="hover:text-[#C06721] transition-colors"
                  >
                    {item.title}
                  </Link>
                </h3>

                <p className="text-[0.9rem] text-[#5a7a90] leading-[1.6] mb-5">{item.description}</p>
              </div>

              <div className="pt-4 border-t border-[rgba(31,79,110,0.08)] flex flex-wrap items-center justify-between gap-2.5">
                <Link
                  to={item.articlePath || '/ressources/'}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#1F4F6E] hover:text-[#C06721] transition-colors"
                >
                  <span>Consulter la page {item.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {item.pdfUrl && (
                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#C06721] hover:underline"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>PDF</span>
                  </a>
                )}

                {item.appUrl && (
                  <a
                    href={item.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#037971] hover:underline"
                  >
                    <span>Ouvrir</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <div className="bg-[#C06721] text-white text-center py-16 px-8">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-white/80 mb-2 font-medium">
          Veille &amp; Terrain
        </p>
        <h2 className="text-[1.9rem] font-light mb-3 text-white">
          Explorer nos partenaires <strong className="font-medium text-white">&amp; nos ateliers pratiques</strong>
        </h2>
        <p className="text-[1rem] text-white/90 max-w-[540px] mx-auto mb-7 font-light">
          Retrouvez également l'annuaire de nos partenaires (INATEC Qualiopi/OPCO, Objectif Alternance, AWACLOUD, Onecub) et nos programmes d'ateliers en entreprise.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/partenaires/"
            className="inline-flex items-center gap-2 bg-white text-[#C06721] text-sm font-medium py-3.5 px-7 rounded-[8px]"
          >
            <span>Voir tous nos partenaires</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/ateliers/"
            className="inline-block bg-white/10 hover:bg-white/20 text-white text-sm font-medium py-3.5 px-7 rounded-[8px] border border-white/25"
          >
            Découvrir nos ateliers IA
          </Link>
        </div>
      </div>
    </div>
  );
}
