import fs from 'node:fs';
import path from 'node:path';
import { routes, RouteData } from '../src/data/routes';
import { cloudinaryUrl, cloudinarySrcSet } from '../src/utils/cloudinary';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function generatePageBody(route: RouteData): string {
  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/ia/', label: 'Génération IA' },
    { href: '/oeuvres/', label: 'Nos Œuvres' },
    { href: '/alchimistes/', label: 'Nos Alchimistes' },
    { href: '/ateliers/', label: 'Nos Ateliers' },
    { href: '/ressources/', label: 'Nos Ressources' },
    { href: '/partenaires/', label: 'Nos Partenaires' },
    { href: '/rejoindre/', label: 'Nous Rejoindre' },
    { href: '/newbusiness/', label: 'New Business MVP' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/contact/', label: 'Contact' }
  ];

  return `
    <header style="background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 1rem 1.5rem; position: sticky; top: 0; z-index: 50;">
      <div style="max-width: 1280px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <a href="/" aria-label="Accueil Alkymya" style="display: flex; align-items: center; text-decoration: none;">
          <img src="${cloudinaryUrl('https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png', 600)}" alt="Alkymya, studio d'expertise et de création IA" width="150" height="38" style="height: 38px; width: auto;" />
        </a>
        <nav aria-label="Navigation principale" style="display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
          ${navItems.map(item => `
            <a href="${item.href}" style="color: ${item.href === (route.path === '/' ? '/' : `${route.path}/`) ? '#d97706' : '#1e293b'}; text-decoration: none; padding: 0.25rem 0.5rem;">
              ${item.label}
            </a>
          `).join('')}
        </nav>
      </div>
    </header>

    <main id="main-content" style="max-width: 1200px; margin: 0 auto; padding: 3rem 1.5rem; font-family: system-ui, -apple-system, sans-serif; color: #1e293b; line-height: 1.6;">
      <article>
        <header style="text-align: center; max-width: 900px; margin: 0 auto 3.5rem auto;">
          <h1 style="font-size: 2.75rem; font-weight: 900; color: #1F4F6E; margin-bottom: 1.5rem; line-height: 1.2;">
            ${escapeHtml(route.h1)}
          </h1>
          <p style="font-size: 1.25rem; color: #475569; line-height: 1.6; margin: 0;">
            ${escapeHtml(route.content.leadParagraph)}
          </p>
        </header>

        <div style="display: grid; gap: 2.5rem; margin-bottom: 4rem;">
          ${route.content.sections.map(section => `
            <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 2rem 2.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
              <h2 style="font-size: 1.625rem; font-weight: 800; color: #1F4F6E; margin-top: 0; margin-bottom: 1rem;">
                ${escapeHtml(section.h2)}
              </h2>
              ${section.paragraphs.map(p => `
                <p style="font-size: 1rem; color: #334155; margin-bottom: 1rem; line-height: 1.7;">
                  ${escapeHtml(p)}
                </p>
              `).join('')}
              ${section.listItems && section.listItems.length > 0 ? `
                <ul style="margin: 1.25rem 0 0.5rem 0; padding-left: 1.5rem; color: #334155; font-size: 0.95rem; line-height: 1.8;">
                  ${section.listItems.map(item => `
                    <li style="margin-bottom: 0.5rem;">${escapeHtml(item)}</li>
                  `).join('')}
                </ul>
              ` : ''}
            </section>
          `).join('')}
        </div>

        ${route.images && route.images.length > 0 ? `
        <section style="margin-bottom: 3rem;">
          <h2 style="font-size: 1.375rem; font-weight: 800; color: #1F4F6E; margin-top: 0; margin-bottom: 1.25rem;">
            Visuels &amp; réalisations illustrées
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem;">
            ${route.images.map((img, idx) => {
              const optimizedSrc = cloudinaryUrl(img.src, 1200);
              const srcset = cloudinarySrcSet(img.src);
              const srcsetAttr = srcset ? ` srcset="${srcset}" sizes="(max-width: 768px) 100vw, 480px"` : '';
              const lazyAttr = idx === 0 ? '' : ' loading="lazy"';
              return `
            <figure style="margin: 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 0.75rem; overflow: hidden;">
              <img src="${optimizedSrc}"${srcsetAttr} alt="${escapeHtml(img.alt)}" width="${img.width}" height="${img.height}"${lazyAttr} style="width: 100%; height: 180px; object-fit: cover; display: block;" />
              ${img.caption ? `<figcaption style="padding: 0.65rem 0.85rem; font-size: 0.82rem; color: #475569;">${escapeHtml(img.caption)}</figcaption>` : ''}
            </figure>`;
            }).join('')}
          </div>
        </section>
        ` : ''}

        <section style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 1.25rem; padding: 2rem 2.5rem; margin-bottom: 3rem;">
          <h2 style="font-size: 1.375rem; font-weight: 800; color: #1F4F6E; margin-top: 0; margin-bottom: 1rem;">
            Découvrir d'autres pages et ressources Alkymya
          </h2>
          <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
            ${route.content.internalLinks.map(link => `
              <li>
                <a href="${link.href}" style="display: block; padding: 0.75rem 1rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 0.75rem; color: #037971; font-weight: 700; text-decoration: none; font-size: 0.9rem;">
                  → ${escapeHtml(link.label)}
                </a>
              </li>
            `).join('')}
          </ul>
        </section>
      </article>
    </main>

    <footer style="background: #1F4F6E; color: #ffffff; padding: 3rem 1.5rem; margin-top: 4rem; font-family: system-ui, -apple-system, sans-serif;">
      <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: space-between; gap: 1.5rem; text-align: center;">
        <p style="margin: 0; font-size: 0.875rem; color: #cbd5e1;">
          © 2026 <strong>Alkymya.co</strong> — Alkymya, studio d'expertise et de création IA en Île-de-France, France.
        </p>
        <nav aria-label="Liens de pied de page" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem; font-size: 0.8125rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">
          <a href="https://cyrilgarnier.fr/" target="_blank" rel="noopener noreferrer" style="color: #02ADAB; text-decoration: none;">Voir le site de Cyril Garnier →</a>
          <a href="/mentions-legales/" style="color: #cbd5e1; text-decoration: none;">Mentions Légales</a>
          <a href="/newbusiness/" style="color: #cbd5e1; text-decoration: none;">New Business MVP</a>
          <a href="/faq/" style="color: #cbd5e1; text-decoration: none;">FAQ</a>
          <a href="/contact/" style="color: #cbd5e1; text-decoration: none;">Contact</a>
        </nav>
      </div>
    </footer>
  `.trim();
}

const breadcrumbNames: Record<string, string> = {
  '/': 'Accueil',
  '/ia': 'Génération IA',
  '/oeuvres': 'Nos Œuvres',
  '/alchimistes': 'Nos Alchimistes',
  '/ateliers': 'Nos Ateliers',
  '/ressources': 'Nos Ressources',
  '/ressources/nos-analyseurs': 'Nos Analyseurs',
  '/ressources/nos-etudes': 'Nos études',
  '/ressources/business-game': 'Business Game',
  '/ressources/alkymya-x-inatec': 'Alkymya x Inatec',
  '/partenaires': 'Nos Partenaires',
  '/contact': 'Contact',
  '/faq': 'FAQ',
  '/rejoindre': 'Nous Rejoindre',
  '/newbusiness': 'New Business MVP',
  '/mentions-legales': 'Mentions Légales'
};

const faqQuestions = [
  {
    name: "Qu'est-ce qu'Alkymya ?",
    answer: "Alkymya (alkymya.co) est un studio IA et cabinet d'expertise en Île-de-France (France), fondé par Cyril Garnier et Léonie Egesipe. Alkymya n'est pas un organisme de formation en nom propre : nous collaborons avec des partenaires certifiés Qualiopi (comme INATEC) pour proposer des formations IA en entreprise finançables OPCO, concevons des agents IA sur mesure et accompagnons les dirigeants dans le programme New Business MVP."
  },
  {
    name: "Alkymya, est-ce un restaurant ?",
    answer: "Non. Alkymya (alkymya.co) est un studio d'intelligence artificielle et cabinet d'expertise en France (Île-de-France), sans aucun lien avec le restaurant Alkymya Bellini à Naples, le groupe Alkymya Music ni le livre brésilien Alkymya de Assustos."
  },
  {
    name: "Quel est le format des ateliers d'agents IA ?",
    answer: "Des sessions intensives de 3h30 pour concevoir et déployer 3 agents intelligents autonomes connectés à vos outils métiers (Slack, Notion, CRM via Make/Zapier)."
  },
  {
    name: "Les formations Alkymya sont-elles finançables par un OPCO ?",
    answer: "Oui ! Alkymya n'est pas certifié Qualiopi directement : nous travaillons avec des organisations partenaires certifiées Qualiopi (telles que l'école INATEC). Grâce à ce partenariat, votre formation est finançable jusqu'à 100% par votre OPCO, selon vos droits et votre budget disponible."
  },
  {
    name: "Qu'est-ce que l'offre New Business MVP (studio new business) ?",
    answer: "Un accompagnement opérationnel de 6 mois à 200 € / mois guidé en binôme par Cyril Garnier et Léonie Egesipe pour concevoir votre MVP, tester l'ICP auprès de vrais clients et piloter selon la boussole Continuer, Pivoter ou Accélérer."
  },
  {
    name: "Qu'est-ce que le programme Formation Core IA (Best Value) ?",
    answer: "La Formation Core est notre programme complet de 14h réparties sur 4 demi-journées pour maîtriser la stack IA (prompt engineering avancé, studio graphique & branding, rédaction stratégique et prototypage). Finançable jusqu'à 100% OPCO via nos partenaires certifiés Qualiopi."
  },
  {
    name: "Quels établissements et entreprises font confiance à Alkymya ?",
    answer: "HETIC, Ynov Campus, IÉSEG School of Management, CFA Itis, Paris École de Management, SNCF, Morning Coworking, Fondation GRDF et notre partenaire officiel Objectif Alternance."
  }
];

function buildJsonLd(route: RouteData, canonicalUrl: string) {
  // 1. Déterminer le type précis du document WebPage
  let webpageType = 'WebPage';
  if (route.path === '/faq') webpageType = 'FAQPage';
  else if (route.path === '/alchimistes') webpageType = 'AboutPage';
  else if (route.path === '/contact') webpageType = 'ContactPage';
  else if (route.path === '/oeuvres' || route.path === '/ressources') webpageType = 'CollectionPage';

  const webpageNode: Record<string, any> = {
    "@type": webpageType,
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": route.title,
    "headline": route.h1,
    "description": route.description,
    "inLanguage": "fr-FR",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://alkymya.co/#website",
      "url": "https://alkymya.co/",
      "name": "Alkymya",
      "description": "Studio d'innovation, d'expertise et de création en Intelligence Artificielle générative."
    },
    "publisher": {
      "@id": "https://alkymya.co/#organization"
    },
    "about": {
      "@id": "https://alkymya.co/#organization"
    },
    "author": [
      {
        "@id": "https://alkymya.co/#cyril-garnier"
      },
      {
        "@type": "Person",
        "@id": "https://alkymya.co/#leonie-egesipe",
        "name": "Léonie Egesipe",
        "url": "https://alkymya.co/alchimistes/leonie-egesipe/"
      }
    ],
    "breadcrumb": {
      "@id": `${canonicalUrl}#breadcrumb`
    }
  };

  // Si FAQPage, injecter les questions/réponses enrichies dans mainEntity
  if (route.path === '/faq') {
    webpageNode.mainEntity = faqQuestions.map(q => ({
      "@type": "Question",
      "name": q.name,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }));
  }

  // 2. Fil d'Ariane (BreadcrumbList)
  const breadcrumbNode: Record<string, any> = {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    "itemListElement": route.path === '/'
      ? [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://alkymya.co/"
          }
        ]
      : route.path.startsWith('/ressources/')
      ? [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://alkymya.co/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Nos Ressources",
            "item": "https://alkymya.co/ressources/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": breadcrumbNames[route.path] || route.h1,
            "item": canonicalUrl
          }
        ]
      : [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://alkymya.co/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": breadcrumbNames[route.path] || route.h1,
            "item": canonicalUrl
          }
        ]
  };

  // 3. Fiche Organization enrichie (LocalBusiness + ProfessionalService)
  const organizationNode: Record<string, any> = {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": "https://alkymya.co/#organization",
    "name": "Alkymya",
    "alternateName": ["Alkymya.co", "Studio Alkymya"],
    "url": "https://alkymya.co/",
    "logo": cloudinaryUrl("https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png", 600),
    "image": "https://alkymya.co/og-image.jpg",
    "description": "Alkymya, studio d'expertise et de création IA en France : accompagnement intelligence artificielle, création d'agents IA sur mesure, stratégie SEO et GEO Google AI et formations finançables OPCO via nos organismes partenaires certifiés Qualiopi.",
    "founder": {
      "@id": "https://alkymya.co/#cyril-garnier"
    },
    "telephone": "+33 1 89 71 32 40",
    "email": "contact@alkymya.co",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.7667,
      "longitude": 2.6833
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Seine-et-Marne" },
      { "@type": "AdministrativeArea", "name": "Île-de-France" },
      { "@type": "Country", "name": "France" }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/alkymya/",
      "https://www.youtube.com/@alkymya",
      "https://www.instagram.com/alkymya.co/",
      "https://cyrilgarnier.fr/"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:30"
      }
    ]
  };

  // Entité fondateur Cyril Garnier présente sur toutes les pages pour résoudre founder.@id
  const cyrilGarnierNode: Record<string, any> = {
    "@type": "Person",
    "@id": "https://alkymya.co/#cyril-garnier",
    "name": "Cyril Garnier",
    "jobTitle": "Directeur Associé & Fondateur Alkymya",
    "url": "https://cyrilgarnier.fr/",
    "image": cloudinaryUrl("https://res.cloudinary.com/dokzioyu4/image/upload/v1758192982/66cffcd8-15f1-415f-b423-9f428d63e22f_gqjd53.png", 600),
    "worksFor": {
      "@id": "https://alkymya.co/#organization"
    },
    "sameAs": [
      "https://www.linkedin.com/in/cyril-garnier-89697b1/",
      "https://cyrilgarnier.fr/"
    ]
  };

  const graphNodes: any[] = [webpageNode, breadcrumbNode, organizationNode, cyrilGarnierNode];

  // 4. Schéma Course spécifique pour /ateliers/ avec hasCourseInstance
  if (route.path === '/ateliers') {
    graphNodes.push({
      "@type": "Course",
      "@id": "https://alkymya.co/ateliers/#course-ia",
      "name": "Formations & Ateliers Pratiques en Intelligence Artificielle Générative",
      "description": "Formations opérationnelles et ateliers pratiques en IA générative, création d'agents autonomes, prompt engineering et conformité européenne de l'IA Act en France (éligibles OPCO via nos partenaires certifiés Qualiopi).",
      "provider": {
        "@id": "https://alkymya.co/#organization"
      },
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "name": "Formation Core IA (14h - 4 demi-journées)",
          "description": "Programme intensif éligible OPCO via nos partenaires certifiés Qualiopi (tels qu'INATEC) pour maîtriser la stack d'IA générative et de prompt engineering.",
          "courseMode": ["blended", "onsite", "online"],
          "courseWorkload": "PT14H",
          "instructor": [
            { "@type": "Person", "name": "Cyril Garnier" },
            { "@type": "Person", "name": "Léonie Egesipe" }
          ]
        },
        {
          "@type": "CourseInstance",
          "name": "Option A : Création & Déploiement d'Agents IA",
          "description": "Atelier pratique de 3h30 pour concevoir et déployer 3 agents intelligents autonomes connectés à vos outils métiers.",
          "courseMode": ["blended", "onsite", "online"],
          "courseWorkload": "PT3H30M",
          "instructor": [
            { "@type": "Person", "name": "Cyril Garnier" }
          ]
        },
        {
          "@type": "CourseInstance",
          "name": "Option B : Application Web Interne Dopée à l'IA",
          "description": "Atelier pratique de 3h30 pour concevoir une application web interne sans code connectée aux modèles d'IA générative.",
          "courseMode": ["blended", "onsite", "online"],
          "courseWorkload": "PT3H30M",
          "instructor": [
            { "@type": "Person", "name": "Cyril Garnier" }
          ]
        }
      ]
    });
  }

  // 5. Schéma Person pour /alchimistes/ (Léonie Egesipe, Véronique Landereau & Mariana Didier Laurent — Cyril Garnier déjà inclus dans graphNodes)
  if (route.path === '/alchimistes') {
    graphNodes.push(
      {
        "@type": "Person",
        "@id": "https://alkymya.co/#leonie-egesipe",
        "name": "Léonie Egesipe",
        "jobTitle": "Co-Fondatrice & Directrice Artistique IA",
        "image": cloudinaryUrl("https://res.cloudinary.com/dokzioyu4/image/upload/v1762252984/725879fe-afa3-4afa-a900-229030c002de_1_xoep2v.png", 600),
        "worksFor": {
          "@id": "https://alkymya.co/#organization"
        },
        "sameAs": [
          "https://www.linkedin.com/in/leonie-egesipe/",
          "https://leonieegesipe.netlify.app/"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://alkymya.co/alchimistes/#veronique-landereau",
        "name": "Véronique Landereau",
        "jobTitle": "Alchimiste associée, Santé, Prévention & Innovation",
        "image": "https://res.cloudinary.com/dokzioyu4/image/upload/v1792763449/1792401247516_ussqzm.png",
        "worksFor": {
          "@type": "Organization",
          "name": "Alkymya",
          "url": "https://alkymya.co"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Gustave Roussy Éducation"
        },
        "knowsAbout": [
          "Santé",
          "Prévention",
          "Maintien à domicile",
          "MedTech",
          "Intelligence artificielle en santé"
        ],
        "homeLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nantes",
            "addressCountry": "FR"
          }
        },
        "sameAs": [
          "https://www.linkedin.com/in/veronique-landereau-97729a59/"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://alkymya.co/alchimistes/#mariana-didier-laurent",
        "name": "Mariana Didier Laurent",
        "jobTitle": "Alchimiste associée, Assurance & Services à la personne",
        "image": "https://res.cloudinary.com/dokzioyu4/image/upload/v1794479431/WhatsApp_Image_2026-11-12_at_11.29.28_qwv5le.jpg",
        "worksFor": {
          "@type": "Organization",
          "name": "Alkymya",
          "url": "https://alkymya.co"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "École Supérieure d'Assurance"
        },
        "knowsAbout": [
          "Assurance IARD",
          "Courtage",
          "Services à la personne",
          "Aide à domicile",
          "Création d'entreprise"
        ],
        "homeLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Le Plessis-Trévise",
            "addressCountry": "FR"
          }
        },
        "sameAs": [
          "https://esperantaservices.fr/"
        ]
      }
    );
  }

  // 6. Schéma EducationalOccupationalProgram pour /newbusiness/
  if (route.path === '/newbusiness') {
    graphNodes.push({
      "@type": "EducationalOccupationalProgram",
      "@id": "https://alkymya.co/newbusiness/#program",
      "name": "Programme New Business MVP — De l'idée à la validation client",
      "description": "Accompagnement opérationnel de 6 mois pour concevoir votre MVP, tester votre offre auprès de vrais clients avant d'investir et décider avec lucidité : Continuer, Pivoter ou Accélérer.",
      "provider": {
        "@id": "https://alkymya.co/#organization"
      },
      "timeToComplete": "P6M",
      "offers": {
        "@type": "Offer",
        "price": "1200",
        "priceCurrency": "EUR",
        "description": "200 € / mois sur 6 mois"
      }
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graphNodes
  };
}

function generateRedirectHtml(targetUrl: string, title: string): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=${targetUrl}">
  <script>window.location.replace('${targetUrl}');</script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="robots" content="noindex, follow">
  <link rel="canonical" href="https://alkymya.co${targetUrl}">
</head>
<body style="font-family: system-ui, sans-serif; text-align: center; padding: 3rem; color: #1e293b;">
  <p>Redirection vers <a href="${targetUrl}">New Business MVP</a>...</p>
</body>
</html>`;
}

function generateSitemapXml(allRoutes: RouteData[]): string {
  const today = new Date().toISOString().split('T')[0];
  const urlEntries = allRoutes.map(r => {
    const loc = `https://alkymya.co${r.path === '/' ? '/' : `${r.path}/`}`;
    const priority = r.path === '/' ? '1.0' : (r.path === '/newbusiness' || r.path === '/ateliers' ? '0.9' : '0.8');
    const changefreq = r.path === '/' ? 'daily' : (r.path === '/newbusiness' || r.path === '/ateliers' || r.path === '/ressources' ? 'weekly' : 'monthly');

    const images: { loc: string; title: string }[] = [
      { loc: r.ogImage, title: `${r.title} — Alkymya` }
    ];

    if (r.images && r.images.length > 0) {
      for (const img of r.images) {
        images.push({
          loc: cloudinaryUrl(img.src, 1200),
          title: img.caption || img.alt
        });
      }
    }

    const imageXml = images.map(img => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${escapeHtml(img.title)}</image:title>
    </image:image>`).join('\n');

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${imageXml}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;
}

async function prerender() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error(`[prerender] Erreur : ${templatePath} introuvable. Exécutez "vite build" d'abord.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf-8');
  console.log(`[prerender] Template de base chargé (${baseHtml.length} octets).`);

  // 1. Pré-rendre chacune des 12 routes canoniques
  for (const route of routes) {
    const canonicalUrl = route.path === '/' 
      ? 'https://alkymya.co/' 
      : `https://alkymya.co${route.path}/`;

    const jsonLd = buildJsonLd(route, canonicalUrl);
    const bodyHtml = generatePageBody(route);

    let html = baseHtml;

    // Remplacer <title>
    html = html.replace(/<title>.*?<\/title>/is, `<title>${escapeHtml(route.title)}</title>`);

    // Remplacer / injecter <meta name="description">
    if (html.includes('<meta name="description"')) {
      html = html.replace(
        /<meta\s+name="description"\s+content=".*?"\s*\/?>/is,
        `<meta name="description" content="${escapeHtml(route.description)}" />`
      );
    } else {
      html = html.replace('</head>', `  <meta name="description" content="${escapeHtml(route.description)}" />\n</head>`);
    }

    // Remplacer / injecter <link rel="canonical"> (avec slash final obligatoire)
    if (html.includes('<link rel="canonical"')) {
      html = html.replace(
        /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/is,
        `<link rel="canonical" href="${canonicalUrl}" />`
      );
    } else {
      html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`);
    }

    // Balises Meta Robots, Open Graph & Twitter Cards 1200x630
    const metaTags = `
    <!-- Robots Directive for Google Discover & Rich Snippets -->
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

    <!-- RSS Feed Discovery -->
    <link rel="alternate" type="application/rss+xml" title="Flux RSS Alkymya" href="https://alkymya.co/rss.xml" />

    <!-- Open Graph / Facebook / LinkedIn (1200x630) -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${escapeHtml(route.ogTitle || route.title)}" />
    <meta property="og:description" content="${escapeHtml(route.ogDescription || route.description)}" />
    <meta property="og:image" content="${route.ogImage}" />
    <meta property="og:image:secure_url" content="${route.ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:alt" content="Alkymya — Agence IA & Studio Création IA en France" />
    <meta property="og:site_name" content="Alkymya" />
    <meta property="og:locale" content="fr_FR" />

    <!-- Twitter Cards (summary_large_image) -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonicalUrl}" />
    <meta name="twitter:title" content="${escapeHtml(route.ogTitle || route.title)}" />
    <meta name="twitter:description" content="${escapeHtml(route.ogDescription || route.description)}" />
    <meta name="twitter:image" content="${route.ogImage}" />
    <meta name="twitter:image:alt" content="Alkymya — Agence IA & Studio Création IA en France" />

    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
    </script>
`;

    // Nettoyer les balises robots, og:, twitter: et json-ld existantes pour éviter les doublons
    html = html
      .replace(/<script\s+type="application\/ld\+json">.*?<\/script>/gis, '')
      .replace(/<meta\s+name="robots"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:title"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:description"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:url"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:image[^"]*"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:type"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:site_name"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:locale"[^>]*>/gi, '')
      .replace(/<meta\s+name="twitter:card"[^>]*>/gi, '')
      .replace(/<meta\s+name="twitter:title"[^>]*>/gi, '')
      .replace(/<meta\s+name="twitter:description"[^>]*>/gi, '')
      .replace(/<meta\s+name="twitter:image[^"]*"[^>]*>/gi, '')
      .replace(/<meta\s+name="twitter:url"[^>]*>/gi, '');

    html = html.replace('</head>', `${metaTags}\n</head>`);

    // Remplacer <div id="root"></div> par le contenu statique riche
    html = html.replace(
      /<div id="root"><\/div>/is,
      `<div id="root">${bodyHtml}</div>`
    );

    // Déterminer le dossier de sortie
    let targetDir = distDir;
    if (route.path !== '/') {
      const cleanPath = route.path.replace(/^\//, '');
      targetDir = path.join(distDir, cleanPath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
    }

    const targetFile = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetFile, html, 'utf-8');
    console.log(`[prerender] Route générée : ${route.path} -> ${path.relative(process.cwd(), targetFile)} (${html.length} octets)`);
  }

  // 2. Générer les redirections 301 statiques vers /newbusiness/
  const redirectHtml = generateRedirectHtml('/newbusiness/', 'Redirection — New Business MVP | Alkymya');

  // /new-business.html
  fs.writeFileSync(path.join(distDir, 'new-business.html'), redirectHtml, 'utf-8');
  // /new-business/index.html
  const newBusinessAliasDir = path.join(distDir, 'new-business');
  if (!fs.existsSync(newBusinessAliasDir)) fs.mkdirSync(newBusinessAliasDir, { recursive: true });
  fs.writeFileSync(path.join(newBusinessAliasDir, 'index.html'), redirectHtml, 'utf-8');

  // /cohorte-fondatrice.html
  fs.writeFileSync(path.join(distDir, 'cohorte-fondatrice.html'), redirectHtml, 'utf-8');
  // /cohorte-fondatrice/index.html
  const cohorteAliasDir = path.join(distDir, 'cohorte-fondatrice');
  if (!fs.existsSync(cohorteAliasDir)) fs.mkdirSync(cohorteAliasDir, { recursive: true });
  fs.writeFileSync(path.join(cohorteAliasDir, 'index.html'), redirectHtml, 'utf-8');

  // /cohorte/index.html
  const cohorteShortDir = path.join(distDir, 'cohorte');
  if (!fs.existsSync(cohorteShortDir)) fs.mkdirSync(cohorteShortDir, { recursive: true });
  fs.writeFileSync(path.join(cohorteShortDir, 'index.html'), redirectHtml, 'utf-8');

  console.log(`[prerender] Redirections 301 statiques créées pour new-business et cohorte-fondatrice.`);

  // 3. Générer le sitemap.xml avec les 12 URL canoniques et slash final
  const sitemapXml = generateSitemapXml(routes);
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log(`[prerender] Sitemap XML généré avec les 12 URL canoniques (dist/sitemap.xml & public/sitemap.xml).`);

  // 4. Copier 404.html et _redirects vers dist/
  const public404 = path.join(process.cwd(), 'public', '404.html');
  if (fs.existsSync(public404)) {
    fs.copyFileSync(public404, path.join(distDir, '404.html'));
    console.log(`[prerender] Page 404 copiée dans dist/404.html.`);
  }

  const publicRedirects = path.join(process.cwd(), 'public', '_redirects');
  if (fs.existsSync(publicRedirects)) {
    fs.copyFileSync(publicRedirects, path.join(distDir, '_redirects'));
    console.log(`[prerender] Fichier _redirects copié dans dist/_redirects.`);
  }

  const publicHeaders = path.join(process.cwd(), 'public', '_headers');
  if (fs.existsSync(publicHeaders)) {
    fs.copyFileSync(publicHeaders, path.join(distDir, '_headers'));
    console.log(`[prerender] Fichier _headers copié dans dist/_headers.`);
  }

  for (const llmsFile of ['llms.txt', 'llm.txt', 'llms-full.txt', 'robots.txt']) {
    const srcLlms = path.join(process.cwd(), 'public', llmsFile);
    if (fs.existsSync(srcLlms)) {
      fs.copyFileSync(srcLlms, path.join(distDir, llmsFile));
      console.log(`[prerender] Fichier ${llmsFile} copié dans dist/${llmsFile}.`);
    }
  }

  // Copier rss.xml et schema.org.json
  const publicRss = path.join(process.cwd(), 'public', 'rss.xml');
  if (fs.existsSync(publicRss)) {
    fs.copyFileSync(publicRss, path.join(distDir, 'rss.xml'));
    console.log(`[prerender] Flux RSS copié dans dist/rss.xml.`);
  }

  const publicSchema = path.join(process.cwd(), 'public', 'schema.org.json');
  if (fs.existsSync(publicSchema)) {
    fs.copyFileSync(publicSchema, path.join(distDir, 'schema.org.json'));
    console.log(`[prerender] Schéma JSON-LD copié dans dist/schema.org.json.`);
  }

  // Copier l'ensemble des images og-*.jpg vers dist/
  const publicDir = path.join(process.cwd(), 'public');
  if (fs.existsSync(publicDir)) {
    const ogFiles = fs.readdirSync(publicDir).filter(f => f.startsWith('og-') && (f.endsWith('.jpg') || f.endsWith('.png')));
    for (const f of ogFiles) {
      fs.copyFileSync(path.join(publicDir, f), path.join(distDir, f));
      console.log(`[prerender] Image ${f} copiée dans dist/${f}.`);
    }
  }

  console.log(`[prerender] Succès complet du build SEO !`);
}

prerender().catch(err => {
  console.error('[prerender] Erreur fatale durant le pré-rendu :', err);
  process.exit(1);
});
