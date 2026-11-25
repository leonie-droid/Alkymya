import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Layers, Users, BookOpen, Wrench, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { SEO } from '../components/SEO';
import { alchimistes } from '../data/alchimistes';
import { studiesList } from '../data/etudes';
import { analyseursList } from '../data/analyseurs';
import { partnerCategories, allPartners } from '../data/partenaires';

interface SitemapGroup {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  links: Array<{ href: string; label: string; description?: string }>;
}

const mainPagesGroup: SitemapGroup = {
  title: 'Studio, Offres & Contact',
  subtitle: 'Pages piliers du studio d’expertise et de création IA Alkymya',
  icon: Compass,
  links: [
    { href: '/', label: 'Accueil Alkymya', description: 'Présentation générale, 3 piliers, preuves terrain et avis Google 5,0/5' },
    { href: '/ateliers/', label: 'Ateliers & Formations IA', description: 'Formation Core IA (14h, OPCO via partenaires Qualiopi), Agents IA, App No-Code & IA Act' },
    { href: '/newbusiness/', label: 'Programme New Business MVP', description: 'Accompagnement dirigeants et indépendants sur 6 mois (200 € / mois)' },
    { href: '/ia/', label: 'Génération IA & Personas', description: 'Observatoire étudiant, personas vidéo et simulateur d’idéation IA' },
    { href: '/oeuvres/', label: 'Œuvres & Études de cas SEO/GEO', description: 'TheLittle77, TheLittle75, TheLittle83, 4 agents IA et direction artistique' },
    { href: '/faq/', label: 'Foire Aux Questions (FAQ)', description: 'Réponses sur nos formations, OPCO, agents IA, SEO/GEO et avis clients' },
    { href: '/rejoindre/', label: 'Rejoindre Alkymya', description: 'Intervenants IA, concepteurs d’agents et alternants sur projets réels' },
    { href: '/contact/', label: 'Contact & Devis', description: 'Demande de devis formation, coordonnées officielles et avis Google vérifiés' },
  ],
};

const studiesGroup: SitemapGroup = {
  title: 'Études & Recherches IA',
  subtitle: 'Publications empiriques en HTML structuré et exports PDF',
  icon: BookOpen,
  links: [
    { href: '/ressources/', label: 'Hub Nos Ressources', description: 'Bibliothèque ouverte des études, analyseurs et simulations d’Alkymya' },
    { href: '/ressources/etudes/', label: 'Hub Nos Études IA', description: 'Ensemble des recherches longitudinales et prospectives Alkymya' },
    ...studiesList.map((study) => ({
      href: study.path,
      label: study.shortTitle,
      description: study.seoDescription,
    })),
    {
      href: '/ressources/etudes/interview-gemini-4/',
      label: 'Interview Gemini 4 — Retour terrain (V9)',
      description: 'Retour d’expérience enseignant IA et benchmarks officiels Google DeepMind',
    },
  ],
};

const toolsGroup: SitemapGroup = {
  title: 'Analyseurs IA Gratuits & Business Game',
  subtitle: 'Applications web gratuites et simulation pédagogique sans inscription',
  icon: Wrench,
  links: [
    { href: '/ressources/analyseurs/', label: 'Hub Nos Analyseurs IA', description: 'Vue d’ensemble des 4 outils de diagnostic gratuits et limites' },
    ...analyseursList.map((tool) => ({
      href: tool.path,
      label: tool.name,
      description: tool.categoryLabel,
    })),
    {
      href: '/ressources/business-game/',
      label: 'Business Game NoNo BanaBa',
      description: 'Simulation interactive de stratégie web-marketing, data et IA (Gen Z)',
    },
  ],
};

const alchimistesGroup: SitemapGroup = {
  title: 'Les Alchimistes',
  subtitle: 'Co-fondateurs et experts associés du collectif Alkymya',
  icon: Users,
  links: [
    { href: '/alchimistes/', label: 'Tous les Alchimistes', description: 'Annuaire complet du collectif d’experts IA, data, santé et insertion' },
    ...alchimistes.map((person) => ({
      href: `/alchimistes/${person.id}/`,
      label: person.name,
      description: `${person.role} — ${person.kicker}`,
    })),
  ],
};

const partnersDetailLinks = allPartners
  .filter((p) => p.hasDetailPage)
  .map((p) => ({
    href: `/partenaires/${p.categorySlug}/${p.slug}/`,
    label: `Fiche partenaire : ${p.name}`,
    description: `${p.relation} (${p.city})`,
  }));

const partnersGroup: SitemapGroup = {
  title: 'Écosystème Partenaires (6 Pôles & 9 Fiches)',
  subtitle: 'Écoles, insertion, portage Qualiopi, lieux, entreprises et outils souverains',
  icon: Layers,
  links: [
    { href: '/partenaires/', label: 'Hub Nos Partenaires', description: 'Annuaire complet des 23 organisations partenaires vérifiées' },
    ...partnerCategories.map((cat) => ({
      href: `/partenaires/${cat.slug}/`,
      label: `Pôle ${cat.name}`,
      description: cat.cardSummary,
    })),
    ...partnersDetailLinks,
  ],
};

const legalGroup: SitemapGroup = {
  title: 'Conformité, Accessibilité & Plan du site',
  subtitle: 'Pages réglementaires LCEN, RGPD, RGAA et indexation',
  icon: ShieldCheck,
  links: [
    { href: '/mentions-legales/', label: 'Mentions légales', description: 'CYRIL GARNIER CONSULTING (SASU, SIREN 842 403 669) et hébergement Netlify' },
    { href: '/politique-confidentialite/', label: 'Politique de confidentialité & cookies RGPD', description: 'Consent Mode v2, durées de conservation, sous-traitants et droits CNIL' },
    { href: '/accessibilite/', label: 'Déclaration d’accessibilité RGAA & WCAG', description: 'Lien d’évitement clavier, contrastes, structure ARIA et recours' },
    { href: '/plan-du-site/', label: 'Plan du site HTML', description: 'Index complet et hiérarchisé de toutes les pages canoniques alkymya.co' },
  ],
};

const groups: SitemapGroup[] = [
  mainPagesGroup,
  studiesGroup,
  toolsGroup,
  alchimistesGroup,
  partnersGroup,
  legalGroup,
];

export default function PlanDuSite() {
  const totalUrls = groups.reduce((acc, g) => acc + g.links.length, 0);

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Plan du site — Toutes les pages Alkymya"
        description="Index complet des 48 pages d'Alkymya : ateliers IA OPCO, New Business MVP, études Génération IA, analyseurs gratuits, Alchimistes et partenaires."
        keywords="plan du site Alkymya, sitemap HTML alkymya.co, pages formation IA, études Génération IA, partenaires Alkymya"
        canonicalPath="/plan-du-site"
        ogImage="https://alkymya.co/og-image.jpg"
        type="CollectionPage"
      />

      <header className="bg-[#1F4F6E] text-white py-20 px-6 sm:px-10 text-center">
        <div className="max-w-[760px] mx-auto">
          <p className="text-[0.85rem] tracking-[0.15em] uppercase text-[#02ADAB] mb-4 font-normal">
            Architecture &amp; Indexation · {totalUrls} URLs canoniques
          </p>
          <h1 className="font-light text-[2.3rem] sm:text-[2.6rem] leading-[1.2] mb-5 text-white">
            Plan du site <strong className="font-medium text-white">Alkymya.co</strong>
          </h1>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-white/80 max-w-[640px] mx-auto leading-[1.7] font-light">
            Accédez en un clic à l’ensemble des pages, études empiriques, analyseurs IA gratuits, fiches d’experts et partenariats publiés sur alkymya.co.
          </p>
        </div>
      </header>

      <section className="max-w-[1140px] mx-auto py-[64px] px-6 space-y-8">
        <nav aria-label="Fil d'Ariane" className="text-sm text-[#5a7a90] flex items-center gap-2">
          <Link to="/" className="text-[#037971] hover:underline font-medium">
            Accueil
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#1F4F6E] font-medium">Plan du site</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <section
                key={group.title}
                className="bg-white rounded-[12px] p-7 sm:p-8 shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col gap-5"
              >
                <div className="flex items-start gap-3.5 pb-4 border-b border-[rgba(31,79,110,0.08)]">
                  <div className="w-10 h-10 rounded-[8px] bg-[rgba(2,173,171,0.1)] text-[#037971] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-[1.25rem] font-medium text-[#1F4F6E] leading-snug">
                      {group.title}
                    </h2>
                    <p className="text-[0.86rem] text-[#5a7a90] mt-0.5">{group.subtitle}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {group.links.map((item) => (
                    <li
                      key={item.href}
                      className="group border-b border-[rgba(31,79,110,0.05)] last:border-b-0 pb-2.5 last:pb-0"
                    >
                      <Link
                        to={item.href}
                        className="inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-[#037971] hover:text-[#1F4F6E] transition-colors"
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                      {item.description && (
                        <p className="text-[0.83rem] text-[#5a7a90] leading-relaxed mt-0.5">
                          {item.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        {/* Ressources techniques pour moteurs de recherche & LLM */}
        <section className="bg-white rounded-[12px] p-7 sm:p-8 shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
          <h2 className="text-[1.2rem] font-medium text-[#1F4F6E] mb-2">
            Index XML, Flux RSS &amp; Fichiers GEO pour moteurs d’IA
          </h2>
          <p className="text-[0.92rem] text-[#5a7a90] mb-5">
            Fichiers normalisés servis directement à la racine du domaine pour l’exploration Google, Bing et moteurs génératifs.
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            {[
              { href: '/sitemap.xml', label: 'sitemap.xml (Index XML & Images)' },
              { href: '/rss.xml', label: 'rss.xml (Flux d’actualités)' },
              { href: '/schema.org.json', label: 'schema.org.json (Graphe JSON-LD)' },
              { href: '/llms.txt', label: 'llms.txt (Synthèse IA)' },
              { href: '/llms-full.txt', label: 'llms-full.txt (Contexte complet)' },
              { href: '/robots.txt', label: 'robots.txt' },
            ].map((file) => (
              <a
                key={file.href}
                href={file.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[8px] bg-[#f4f6f9] hover:bg-[#e8eef4] text-[#1F4F6E] border border-[rgba(31,79,110,0.12)] transition-colors"
              >
                <span>{file.label}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#037971]" />
              </a>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
