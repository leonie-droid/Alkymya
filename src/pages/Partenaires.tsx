import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Cpu,
  ExternalLink,
  GraduationCap,
  MapPin
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { allPartners, partnerCategories, PartnerCategorySlug } from '../data/partenaires';

const categoryIcons: Record<PartnerCategorySlug, typeof GraduationCap> = {
  ecoles: GraduationCap,
  insertion: Briefcase,
  'formations-certifiees': Award,
  lieux: MapPin,
  entreprises: Building2,
  outils: Cpu
};

const featuredFiches = [
  {
    name: 'Euridis Business School',
    category: 'Partenaires École',
    href: '/partenaires/ecoles/euridis/',
    summary: "Deux journées en B3 & Mastère (~80 % de finalisation TP) : site en ligne le Jour 1, mesure AWA et harnais d'agent commercial le Jour 2."
  },
  {
    name: 'IÉSEG School of Management',
    category: 'Partenaires École',
    href: '/partenaires/ecoles/ieseg/',
    summary: "Depuis 2019 : sprint design M1, IA & marketing digital avancés, mentorat mémoires (100 % de réussite), incubateur et agent SODA."
  },
  {
    name: 'INATEC (Portage Qualiopi & OPCO)',
    category: 'Formations Certifiées',
    href: '/partenaires/formations-certifiees/inatec/',
    summary: "Portage administratif Qualiopi (NDA 11771056077) et 5 capsules vidéo pour financer vos formations IA par votre OPCO."
  },
  {
    name: 'Objectif Alternance',
    category: 'Insertion & Alternance',
    href: '/partenaires/insertion/objectif-alternance/',
    summary: "Recrutement d'alternants TPE/PME, coaching emploi avec Kendra Martine et couplage avec l'Analyseur de CV gratuit."
  },
  {
    name: 'AWACLOUD',
    category: 'Outils & RAG Local',
    href: '/partenaires/outils/awa-cloud/',
    summary: "Éditeur français de bibliothèques locales pour convertir PDF et Word en Markdown structuré sans fuite cloud."
  },
  {
    name: 'CPME 77 (Les Entrepreneurs Seine-et-Marne)',
    category: 'Entreprises & Collectifs',
    href: '/partenaires/entreprises/cpme-77/',
    summary: "Deux matinées dirigeants à l'automne 2026 en Seine-et-Marne : IA (Alkymya, 13 octobre) et cybersécurité (CMI Systèmes, 29 octobre)."
  },
  {
    name: 'CMI Systèmes',
    category: 'Entreprises & Cybersécurité',
    href: '/partenaires/entreprises/cmi-systemes/',
    summary: "Entreprise informatique de Seine-et-Marne (cybersécurité, infogérance TPE/PME et centre Qualiopi cyber), partenaire IA & cyber d'Alkymya."
  },
  {
    name: 'Morning',
    category: 'Lieux & Coworking',
    href: '/partenaires/lieux/morning/',
    summary: "Deux ateliers gratuits de découverte de l'IA générative en 2026 à Paris : Morning Pereire (17e, 15 places) et Morning Saint-Augustin (8e)."
  },
  {
    name: 'Onecub',
    category: 'Data Spaces & RGPD',
    href: '/partenaires/outils/onecub/',
    summary: "Espaces de données souverains, standards GAIA-X et conformité RGPD portés par Olivier Dion."
  }
];

export default function Partenaires() {
  const canonicalUrl = 'https://alkymya.co/partenaires/';

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: 'Partenaires IA, Écoles, OPCO & Outils Souverains | Alkymya',
        headline: 'Les partenaires d’Alkymya : 6 pôles de collaboration IA sur le terrain',
        description:
          "Annuaire structuré des partenaires d'Alkymya : 7 grandes écoles, Objectif Alternance, portage Qualiopi/OPCO via INATEC, lieux coworking (dont Morning), 10 entreprises et collectifs dont la CPME 77 et CMI Systèmes, et briques souveraines AWACLOUD & Onecub.",
        inLanguage: 'fr-FR',
        isPartOf: { '@id': 'https://alkymya.co/#website' },
        publisher: { '@id': 'https://alkymya.co/#organization' },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        mainEntity: { '@id': `${canonicalUrl}#itemlist` }
      },
      {
        '@type': 'ItemList',
        '@id': `${canonicalUrl}#itemlist`,
        name: 'Les 6 catégories de partenaires d’Alkymya',
        numberOfItems: partnerCategories.length,
        itemListElement: partnerCategories.map((cat, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: cat.name,
          url: `https://alkymya.co/partenaires/${cat.slug}/`
        }))
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://alkymya.co/' },
          { '@type': 'ListItem', position: 2, name: 'Nos Partenaires', item: canonicalUrl }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Partenaires IA, Écoles, OPCO & Outils Souverains | Alkymya"
        description="Écosystème de partenaires Alkymya : 7 grandes écoles, Objectif Alternance, portage Qualiopi INATEC, Morning, CMI Systèmes, CPME 77, AWACLOUD et Onecub."
        keywords="partenaires Alkymya, HETIC Ynov IESEG Euridis, INATEC Qualiopi OPCO, Objectif Alternance, CMI Systèmes, CPME 77, AWACLOUD, Onecub, Morning coworking"
        canonicalPath="/partenaires/"
        ogImage="https://alkymya.co/og-partenaires.jpg"
        type="CollectionPage"
        structuredData={structuredData}
      />

      {/* HERO HUB (~80 mots chapeau) */}
      <header className="bg-[#1F4F6E] text-white py-16 sm:py-20 px-6 sm:px-10 text-center">
        <div className="max-w-[820px] mx-auto">
          <p className="text-[0.82rem] tracking-[0.16em] uppercase text-[#02ADAB] mb-4 font-medium">
            Écosystème Terrain · 6 Pôles Structurés
          </p>

          <h1 className="font-light text-[2.2rem] sm:text-[2.65rem] leading-[1.2] mb-5 text-white">
            Les partenaires d’Alkymya :<br />
            <strong className="font-medium text-white">écoles, entreprises, OPCO et briques souveraines.</strong>
          </h1>

          <p className="text-[1.03rem] sm:text-[1.08rem] text-white/80 max-w-[680px] mx-auto leading-[1.7] font-light mb-8">
            Alkymya déploie ses ateliers, ses recherches empiriques et ses agents IA au sein d'un réseau vérifié d'organisations en France. Chaque partenariat répond à un rôle précis : enseignement supérieur en grandes écoles, insertion professionnelle, portage administratif Qualiopi pour les financements OPCO, accueil d'ateliers en présentiel, projets d'entreprise et éditeurs technologiques souverains.
          </p>

          {/* Chiffres écosystème */}
          <div className="pt-8 border-t border-white/12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5 tabular-nums">23</div>
              <div className="text-xs text-white/70 uppercase tracking-wider">Organisations liées</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">450+</div>
              <div className="text-xs text-white/70 uppercase tracking-wider">Étudiants formés</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">7</div>
              <div className="text-xs text-white/70 uppercase tracking-wider">Écoles &amp; CFA</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">3 ans</div>
              <div className="text-xs text-white/70 uppercase tracking-wider">Enquête Génération IA</div>
            </div>
          </div>
        </div>
      </header>

      {/* LES 6 CARTES CATÉGORIES */}
      <section className="max-w-[1120px] mx-auto py-16 px-6">
        <div className="mb-10">
          <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2 font-medium">
            Architecture des alliances
          </p>
          <h2 className="text-[1.8rem] sm:text-[2rem] font-light text-[#1F4F6E]">
            Explorer nos <strong className="font-medium">6 pôles de partenaires</strong>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerCategories.map((cat) => {
            const Icon = categoryIcons[cat.slug];
            const count = allPartners.filter((p) => p.categorySlug === cat.slug).length;
            return (
              <Link
                key={cat.slug}
                to={`/partenaires/${cat.slug}/`}
                className="group bg-white rounded-[12px] p-6 shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between border border-transparent hover:border-[#02ADAB]/35"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="w-10 h-10 rounded-[8px] bg-[#02ADAB]/12 text-[#02ADAB] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-medium text-[#4a6a80] bg-[#f4f6f9] px-2.5 py-1 rounded-[4px]">
                      {count} {count > 1 ? 'organisations' : 'organisation'}
                    </span>
                  </div>
                  <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] group-hover:text-[#C06721] transition-colors mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-[0.9rem] text-[#5a7a90] leading-[1.6] font-normal">
                    {cat.cardSummary}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[rgba(31,79,110,0.08)] flex items-center justify-between text-xs font-medium text-[#02ADAB] group-hover:text-[#C06721] transition-colors">
                  <span>Consulter le pôle {cat.shortTitle}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1120px] md:mx-auto" />

      {/* FICHES PARTENAIRES DÉTAILLÉES PUBLIÉES */}
      <section className="max-w-[1120px] mx-auto py-16 px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2 font-medium">
              Dossiers Détaillés &amp; Preuves d’Usage
            </p>
            <h2 className="text-[1.8rem] sm:text-[2rem] font-light text-[#1F4F6E]">
              Fiches partenaires <strong className="font-medium">publiées</strong>
            </h2>
          </div>
          <Link
            to="/ressources/etudes/generation-ia-2026/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#02ADAB] hover:text-[#C06721] transition-colors"
          >
            <span>Lire l’étude Génération IA 2024–2026</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredFiches.map((fiche) => (
            <Link
              key={fiche.href}
              to={fiche.href}
              className="group bg-white rounded-[12px] p-6 shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_28px_rgba(31,79,110,0.13)] transition-all flex flex-col justify-between border-l-4 border-l-[#02ADAB]"
            >
              <div>
                <span className="text-[11px] font-medium uppercase tracking-wider text-[#C06721] block mb-1.5">
                  {fiche.category}
                </span>
                <h3 className="text-[1.18rem] font-medium text-[#1F4F6E] group-hover:text-[#C06721] transition-colors mb-2">
                  {fiche.name}
                </h3>
                <p className="text-[0.92rem] text-[#5a7a90] leading-[1.6]">{fiche.summary}</p>
              </div>
              <div className="pt-4 mt-4 flex items-center gap-2 text-xs font-medium text-[#02ADAB] group-hover:text-[#C06721]">
                <span>Ouvrir la fiche partenaire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* Récapitulatif transparent des liens officiels */}
        <div className="mt-12 bg-white rounded-[12px] p-6 sm:p-8 shadow-[0_2px_16px_rgba(31,79,110,0.06)]">
          <h3 className="text-[1.1rem] font-medium text-[#1F4F6E] mb-3">
            Accès direct aux sites officiels de nos partenaires
          </h3>
          <p className="text-sm text-[#5a7a90] mb-5 leading-relaxed">
            Chaque organisation citée sur alkymya.co dispose d'un lien vérifié vers son site officiel. Les fiches détaillées sont publiées au fil de la collecte des éléments terrain complets.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {allPartners.map((p) => (
              <a
                key={p.slug}
                href={p.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1F4F6E] bg-[#f4f6f9] hover:bg-[#02ADAB] hover:text-white px-3 py-1.5 rounded-[6px] transition-colors"
              >
                <span>{p.name}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL (~40 mots) */}
      <div className="bg-[#C06721] text-white text-center py-16 px-8">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-white/80 mb-2 font-medium">
          Nouvelles Alliances
        </p>
        <h2 className="text-[1.9rem] font-light mb-3 text-white">
          Collaborer avec <strong className="font-medium text-white">Alkymya</strong>
        </h2>
        <p className="text-[1rem] text-white/90 max-w-[540px] mx-auto mb-7 leading-[1.65] font-light">
          Vous dirigez une école, une entreprise, un espace de coworking ou un outil souverain ? Construisons une intervention terrain, une étude partagée ou un parcours finançable OPCO via notre partenaire Qualiopi.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact/"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#C06721] text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] transition-transform duration-150 hover:-translate-y-0.5"
          >
            <span>Proposer un partenariat</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/ateliers/"
            className="inline-block bg-white/10 hover:bg-white/20 text-white text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] border border-white/25 transition-colors"
          >
            Découvrir nos ateliers
          </Link>
        </div>
      </div>
    </div>
  );
}
