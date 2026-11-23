export type PartnerCategorySlug =
  | 'ecoles'
  | 'insertion'
  | 'formations-certifiees'
  | 'lieux'
  | 'entreprises'
  | 'outils';

export interface PartnerEntry {
  slug: string;
  name: string;
  categorySlug: PartnerCategorySlug;
  badge: string;
  city: string;
  relation: string;
  summary: string;
  websiteUrl: string;
  sameAs?: string[];
  logo: string;
  logoBgDark?: boolean;
  hasDetailPage: boolean;
  alchimistePath?: string;
  relatedToolPath?: string;
  relatedStudyPath?: string;
}

export interface PartnerCategoryMeta {
  slug: PartnerCategorySlug;
  name: string;
  shortTitle: string;
  cardSummary: string;
  eyebrow: string;
  h1: string;
  heroIntro: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  proofStats: Array<{ value: string; label: string }>;
  hubNotes?: Array<{ title: string; text: string }>;
  crossLinks: Array<{ href: string; label: string }>;
}

export interface PartnerDetailContent {
  slug: string;
  categorySlug: PartnerCategorySlug;
  name: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  h1: string;
  lead: string;
  roleSummary: string;
  whySelected: Array<{ title: string; text: string }>;
  jointActions: Array<{ title: string; detail: string }>;
  measurableResults: Array<{ metric: string; label: string; context: string }>;
  audience: string[];
  ctaLabel: string;
  ctaUrl: string;
  secondaryLinks: Array<{ href: string; label: string }>;
  videos?: Array<{ title: string; description: string; url: string }>;
}

export const partnerCategories: PartnerCategoryMeta[] = [
  {
    slug: 'ecoles',
    name: 'Partenaires École',
    shortTitle: 'Écoles & Campus',
    cardSummary:
      "Sept grandes écoles, campus tech et CFA franciliens où nos alchimistes animent modules IA, jurys et séminaires.",
    eyebrow: 'Enseignement Supérieur · Île-de-France',
    h1: 'Partenaires École : 7 grandes écoles et CFA où Alkymya enseigne l’IA',
    heroIntro:
      "Depuis 2024, Alkymya intervient au cœur des cursus Bachelor, Master et alternance dans sept établissements d'enseignement supérieur. Ces cours nourrissent directement notre enquête longitudinale Génération IA (1 082 étudiants interrogés).",
    seoTitle: 'Partenaires École & Grandes Écoles IA | Alkymya',
    seoDescription:
      'HETIC, Ynov, IÉSEG, CFA Itis, Euridis, ISCOM et Paris École de Management : découvrez les 7 écoles partenaires où Alkymya déploie ses ateliers IA.',
    keywords:
      'partenaires école IA, HETIC, Ynov, IÉSEG, CFA Itis, Euridis, ISCOM, Paris École de Management, enseignement IA France',
    proofStats: [
      { value: '7', label: 'Écoles & CFA actifs' },
      { value: '1 082', label: 'Étudiants enquêtés (2024-2026)' },
      { value: '450+', label: 'Apprenants formés en atelier' },
      { value: '99,3 %', label: 'Taux de recommandation' }
    ],
    hubNotes: [
      {
        title: 'Des interventions ancrées dans les maquettes pédagogiques',
        text: "Plutôt que des conférences isolées, nos alchimistes interviennent sur des formats de 14h à plusieurs jours : prompt engineering avancé, création d'agents IA métiers, business game NoNo BanaBa et jurys de soutenance."
      },
      {
        title: 'Mesure empirique continue (Génération IA 2024 → 2026)',
        text: "Les cours dispensés au sein de ces établissements alimentent nos trois vagues d'enquêtes anonymisées sur l'adoption des outils génératifs par les étudiants français."
      }
    ],
    crossLinks: [
      { href: '/partenaires/ecoles/euridis/', label: 'Fiche Euridis : 2 jours pour diriger l’IA' },
      { href: '/partenaires/ecoles/ieseg/', label: 'Fiche IÉSEG : cours, mentorat & agent SODA' },
      { href: '/ateliers/', label: 'Voir le catalogue des ateliers & formations' }
    ]
  },
  {
    slug: 'insertion',
    name: 'Insertion & Alternance',
    shortTitle: 'Insertion & Alternance',
    cardSummary:
      "Accompagnement vers l'emploi et l'alternance avec Objectif Alternance et l'Analyseur de CV ouvert en production.",
    eyebrow: 'Employabilité · Recrutement & Coaching',
    h1: 'Partenaires Insertion & Alternance : relier IA pratique et accès à l’emploi',
    heroIntro:
      "Maîtriser l'IA générative est devenu un marqueur décisif lors des recrutements en alternance et en reconversion. Avec Objectif Alternance, fondé par Kendra Martine, nous associons coaching humain et outillage IA gratuit.",
    seoTitle: 'Partenaires Insertion & Alternance IA | Alkymya',
    seoDescription:
      "Objectif Alternance et Alkymya : coaching emploi, recrutement d'alternants en TPE/PME et Analyseur de CV IA gratuit en production.",
    keywords:
      'Objectif Alternance, Kendra Martine, recrutement alternant IA, analyseur de CV gratuit, insertion professionnelle IA',
    proofStats: [
      { value: '1', label: 'Partenaire insertion officiel' },
      { value: '7 ans', label: 'Expertise marketing & coaching' },
      { value: '100 %', label: 'Accès gratuit Analyseur de CV' },
      { value: 'TPE / PME', label: 'Cœur du placement alternance' }
    ],
    crossLinks: [
      { href: '/partenaires/insertion/objectif-alternance/', label: 'Fiche partenaire Objectif Alternance' },
      { href: '/ressources/analyseurs/analyseur-de-cv/', label: 'Tester l’Analyseur de CV gratuit' },
      { href: '/alchimistes/kendra-martine/', label: 'Profil de Kendra Martine' }
    ]
  },
  {
    slug: 'formations-certifiees',
    name: 'Formations Certifiées & OPCO',
    shortTitle: 'Formations & OPCO',
    cardSummary:
      "Portage administratif Qualiopi via INATEC pour financer vos formations IA par les OPCO sans confusion d'entité.",
    eyebrow: 'Portage Qualiopi & Financement OPCO',
    h1: 'Formations Certifiées & Portage OPCO : le partenariat Alkymya x INATEC',
    heroIntro:
      "Alkymya (marque de CYRIL GARNIER CONSULTING) est un studio d'expertise et de création IA, pas un organisme de formation certifié Qualiopi en nom propre. Pour rendre nos ateliers finançables par les OPCO jusqu'à 100 %, nous travaillons avec l'organisme certifié Qualiopi INATEC.",
    seoTitle: 'Formations IA Qualiopi & OPCO via INATEC | Alkymya',
    seoDescription:
      "Comment financer votre formation IA par votre OPCO grâce au portage Qualiopi assuré par notre partenaire INATEC (NDA 11771056077).",
    keywords:
      'formation IA OPCO, INATEC Qualiopi, financement OPCO formation IA, Alkymya INATEC, portage Qualiopi',
    proofStats: [
      { value: 'Qualiopi', label: 'Certification portée par INATEC' },
      { value: 'OPCO', label: 'Prise en charge jusqu’à 100 %' },
      { value: '5', label: 'Capsules vidéo conjointes' },
      { value: '14 h', label: 'Socle Formation Core IA' }
    ],
    hubNotes: [
      {
        title: 'Comment fonctionne le financement OPCO ?',
        text: "Le dossier administratif, la convention de formation et les pièces justificatives exigées par les OPCO (AKTO, Atlas, Opcommerce, Constructys, AFDAS…) sont établis et suivis par INATEC (NDA 11771056077, certifié Qualiopi). Alkymya intervient sur la conception pédagogique et l'animation opérationnelle par ses praticiens."
      },
      {
        title: 'Transparence sur la certification Qualiopi',
        text: "La certification Qualiopi appartient exclusivement à notre partenaire INATEC. Cette séparation claire garantit la conformité réglementaire du financement tout en conservant la liberté et l'agilité d'un studio IA indépendant."
      }
    ],
    crossLinks: [
      { href: '/partenaires/formations-certifiees/inatec/', label: 'Fiche complète Alkymya x INATEC (5 vidéos)' },
      { href: '/ateliers/', label: 'Consulter les programmes éligibles OPCO' },
      { href: '/contact/', label: 'Monter un dossier de financement OPCO' }
    ]
  },
  {
    slug: 'lieux',
    name: 'Lieux & Coworking',
    shortTitle: 'Lieux & Coworking',
    cardSummary:
      "Espaces de travail partenaires à Paris et en Seine-et-Marne (Morning, DG Services Torcy) pour nos sessions en présentiel.",
    eyebrow: 'Espaces d’Accueil · Paris & 77',
    h1: 'Lieux & Coworking partenaires : où se déroulent les ateliers Alkymya',
    heroIntro:
      "Nos ateliers IA pratiques, bootcamps New Business MVP et rencontres d'entrepreneurs s'appuient sur des espaces physiques choisis pour leur accessibilité (Paris intra-muros et Marne-la-Vallée / Torcy) et la qualité de leur accueil.",
    seoTitle: 'Lieux d’Accueil & Coworking Partenaires | Alkymya',
    seoDescription:
      'Morning Coworking à Paris et DG Services à Torcy (77200) : découvrez les espaces qui accueillent les ateliers IA et sessions d’Alkymya.',
    keywords:
      'Morning coworking ateliers IA, DG Services Torcy, formation IA Seine-et-Marne 77, coworking Paris IA',
    proofStats: [
      { value: '2', label: 'Réseaux d’accueil actifs' },
      { value: 'Paris & 77', label: 'Couverture Île-de-France' },
      { value: 'RER A', label: 'Accès direct Torcy & Paris' },
      { value: '3h30–14h', label: 'Formats en présentiel' }
    ],
    hubNotes: [
      {
        title: 'Proximité Île-de-France Est & Paris Centre',
        text: "L'implantation de CYRIL GARNIER CONSULTING en Seine-et-Marne (Ozoir-la-Ferrière) s'articule avec DG Services à Torcy pour le tissu économique du 77 et les espaces Morning pour les entreprises parisiennes."
      }
    ],
    crossLinks: [
      { href: '/partenaires/lieux/morning/', label: 'Fiche Morning : ateliers découverte IA à Paris' },
      { href: '/ateliers/', label: 'Réserver un atelier en présentiel' },
      { href: '/contact/', label: 'Organiser une session dans vos locaux' }
    ]
  },
  {
    slug: 'entreprises',
    name: 'Entreprises & Fondations',
    shortTitle: 'Entreprises & Fondations',
    cardSummary:
      "Dix entreprises, fondations et collectifs accompagnés autour de l'IA, de la cybersécurité, de l'entrepreneuriat, du numérique et des territoires.",
    eyebrow: 'Écosystème Économique & Impact',
    h1: 'Entreprises, fondations et collectifs partenaires d’Alkymya',
    heroIntro:
      "De grands opérateurs industriels aux fondations territoriales, syndicats patronaux, spécialistes informatiques & cybersécurité et jeunes entreprises innovantes, Alkymya collabore avec dix organisations.",
    seoTitle: 'Entreprises, Fondations & Collectifs Partenaires | Alkymya',
    seoDescription:
      'CMI Systèmes, CPME 77, SNCF, Fondation GRDF, SEALESTER, Azimuto, AvecLouise, Esperanta Services, Fondation Flamenca et Ressourcerie Gaillarde : nos partenaires.',
    keywords:
      'CMI Systèmes, CPME 77, Les Entrepreneurs Seine-et-Marne, SNCF, Fondation GRDF, SEALESTER, Azimuto, AvecLouise, Esperanta Services, Fondation Flamenca, Ressourcerie Gaillarde',
    proofStats: [
      { value: '10', label: 'Organisations & collectifs' },
      { value: '2', label: 'Alchimistes dirigeants dédiés' },
      { value: '15+ ans', label: 'Expérience direction (ex-SNCF Dév.)' },
      { value: 'France', label: 'Déploiement national & territorial' }
    ],
    crossLinks: [
      { href: '/partenaires/entreprises/cmi-systemes/', label: 'Fiche CMI Systèmes : informatique & cybersécurité' },
      { href: '/partenaires/entreprises/cpme-77/', label: 'Fiche CPME 77 : matinées IA & cybersécurité' },
      { href: '/alchimistes/veronique-landereau/', label: 'Véronique Landereau — AvecLouise' }
    ]
  },
  {
    slug: 'outils',
    name: 'Outils & Technologies',
    shortTitle: 'Outils & Tech',
    cardSummary:
      "Briques souveraines utilisées par Alkymya au quotidien : AWACLOUD (RAG & conversion locale) et Onecub (Data Spaces).",
    eyebrow: 'Briques Logicielles Souveraines',
    h1: 'Outils & Partenaires technologiques : les briques souveraines recommandées par Alkymya',
    heroIntro:
      "Nous ne recommandons que des solutions technologiques françaises ou européennes que nous utilisons concrètement dans nos architectures documentaires, nos ateliers et nos conseils en gouvernance des données.",
    seoTitle: 'Outils & Partenaires Technologiques Souverains | Alkymya',
    seoDescription:
      'AWACLOUD (conversion documents et RAG local) et Onecub (Data Spaces souverains par Olivier Dion) : les technologies partenaires d’Alkymya.',
    keywords:
      'AWACLOUD, Onecub, Olivier Dion, Data Spaces souverains, RAG local Markdown, partenaires technologiques IA France',
    proofStats: [
      { value: '2', label: 'Éditeurs souverains publiés' },
      { value: '0 octet', label: 'Fuite cloud sur AWA Convert' },
      { value: 'GAIA-X', label: 'Standards Data Spaces Onecub' },
      { value: '100 %', label: 'Testés en production' }
    ],
    crossLinks: [
      { href: '/partenaires/outils/awa-cloud/', label: 'Fiche partenaire AWACLOUD' },
      { href: '/partenaires/outils/onecub/', label: 'Fiche partenaire Onecub' },
      { href: '/ressources/analyseurs/', label: 'Tester nos analyseurs IA gratuits' }
    ]
  }
];

export const allPartners: PartnerEntry[] = [
  // 1. ÉCOLES
  {
    slug: 'hetic',
    name: 'HETIC',
    categorySlug: 'ecoles',
    badge: 'Grande École du Web',
    city: 'Montreuil (93)',
    relation: 'Interventions & jurys IA générative',
    summary:
      "Ateliers intensifs d'IA générative et jurys de projets numériques pour former les futurs chefs de produit web, designers et développeurs.",
    websiteUrl: 'https://www.hetic.net/',
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1759785816/logo-hetic_fnt2zy.png',
    hasDetailPage: false
  },
  {
    slug: 'ynov',
    name: 'Ynov Campus',
    categorySlug: 'ecoles',
    badge: 'Campus Tech & Digital',
    city: 'Paris / Nanterre',
    relation: 'Modules prompt engineering & hackathons',
    summary:
      "Modules de prompt engineering avancé, prototypage d'agents IA et hackathons appliqués aux métiers du numérique et de la création.",
    websiteUrl: 'https://www.ynov.com/',
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1759785824/ynov-campus_logo_e1ma2q.png',
    hasDetailPage: false
  },
  {
    slug: 'ieseg',
    name: 'IÉSEG School of Management',
    categorySlug: 'ecoles',
    badge: 'Grande École de Management · Master & Incubateur',
    city: 'Paris La Défense / Lille',
    relation: 'Cours Master IA, mentorat mémoires (100 % réussite) & incubateur depuis 2019',
    summary:
      "Intervenant dans le Master de l'IÉSEG depuis 2019, Cyril Garnier anime le sprint design M1, enseigne l'innovation et l'IA & marketing digital avancés, accompagne 6 à 10 mémoires par promotion (100 % de réussite) avec l'agent SODA et est mentor à l'incubateur.",
    websiteUrl: 'https://www.ieseg.fr/',
    sameAs: ['https://www.ieseg.fr/'],
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1759785830/IESEG_logo_zzx1aa.jpg',
    hasDetailPage: true,
    alchimistePath: '/alchimistes/cyril-garnier/',
    relatedToolPath: '/ressources/analyseurs/analyseur-de-memoire/',
    relatedStudyPath: '/ressources/etudes/generation-ia-2026/'
  },
  {
    slug: 'cfa-itis',
    name: 'CFA Itis',
    categorySlug: 'ecoles',
    badge: 'CFA & Alternance Tech',
    city: 'Évry-Courcouronnes (91)',
    relation: 'Parcours IA pour apprentis en informatique',
    summary:
      "Parcours pratiques dédiés aux apprentis développeurs et chefs de projet pour déployer l'IA directement au service de leurs entreprises d'accueil.",
    websiteUrl: 'https://itis.fr/',
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1759785836/CFA_ITIS_logo_vetgdg.webp',
    hasDetailPage: false
  },
  {
    slug: 'euridis',
    name: 'Euridis Business School',
    categorySlug: 'ecoles',
    badge: 'Business School B2B · B3 & Mastère',
    city: 'Paris / Île-de-France',
    relation: '2 jours pour diriger l’IA, agents & agent harness',
    summary:
      "À Euridis Business School, les étudiants de B3 et de Mastère mettent l'IA au travail en deux journées : Jour 1 de l'observation sourcée au site en ligne ; Jour 2 en mode agence (AI Overviews, tokens/AWA Cloud, harnais d'agent commercial avec Claude ou Gemini).",
    websiteUrl: 'https://www.euridis-ecole.com/',
    sameAs: ['https://www.euridis-ecole.com/'],
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1759785888/EURIDIS_logo_rjpc9a.webp',
    hasDetailPage: true,
    alchimistePath: '/alchimistes/cyril-garnier/',
    relatedToolPath: '/partenaires/outils/awa-cloud/',
    relatedStudyPath: '/ressources/etudes/generation-ia-2026/'
  },
  {
    slug: 'iscom',
    name: 'ISCOM',
    categorySlug: 'ecoles',
    badge: 'Communication & Marque',
    city: 'Paris',
    relation: 'Direction artistique & création éditoriale IA',
    summary:
      "Ateliers de direction artistique, création éditoriale, social media et stratégie de marque assistée par IA générative.",
    websiteUrl: 'https://www.iscom.fr/',
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1759785896/ISCOM_logo_vrvwbp.webp',
    hasDetailPage: false
  },
  {
    slug: 'paris-ecole-de-management',
    name: 'Paris École de Management',
    categorySlug: 'ecoles',
    badge: 'Management & Stratégie',
    city: 'Paris',
    relation: 'Cas pratiques & nouveaux business modèles',
    summary:
      "Cas pratiques d'entreprise, Business Game NoNo BanaBa et acculturation des apprenants aux nouveaux modèles économiques dopés à l'IA.",
    websiteUrl: 'https://paris-em.fr/',
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1760635542/logo_paris_ecole_de_management_vs3hwl.jpg',
    hasDetailPage: false
  },

  // 2. INSERTION
  {
    slug: 'objectif-alternance',
    name: 'Objectif Alternance',
    categorySlug: 'insertion',
    badge: 'Partenaire Insertion Officiel',
    city: 'Île-de-France',
    relation: 'Recrutement alternants, coaching emploi & Analyseur de CV',
    summary:
      "Fondé par Kendra Martine (Alchimiste associée), Objectif Alternance accompagne TPE/PME et candidats en alternance ou reconversion en combinant coaching humain et Analyseur de CV IA gratuit.",
    websiteUrl: 'https://www.objectifalternance.fr/',
    sameAs: ['https://www.objectifalternance.fr/'],
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1788507182/logo_objectif_code_u3otua.png',
    hasDetailPage: true,
    alchimistePath: '/alchimistes/kendra-martine/',
    relatedToolPath: '/ressources/analyseurs/analyseur-de-cv/'
  },

  // 3. FORMATIONS CERTIFIÉES
  {
    slug: 'inatec',
    name: 'INATEC',
    categorySlug: 'formations-certifiees',
    badge: 'Organisme Certifié Qualiopi · NDA 11771056077',
    city: 'Île-de-France',
    relation: 'Portage administratif Qualiopi & financement OPCO',
    summary:
      "CFA et organisme de formation certifié Qualiopi (certification ICPF), INATEC assure le portage administratif permettant le financement OPCO jusqu'à 100 % des formations animées par Alkymya.",
    websiteUrl: 'https://www.inatec.fr/',
    sameAs: ['https://www.inatec.fr/'],
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1777818451/WhatsApp_Image_2026-02-27_at_15.38.53_utvfxs.jpg',
    hasDetailPage: true
  },

  // 4. LIEUX
  {
    slug: 'morning',
    name: 'Morning',
    categorySlug: 'lieux',
    badge: 'Espaces de Bureaux & Coworking · Paris',
    city: 'Paris & Île-de-France',
    relation: 'Ateliers de découverte IA pour les communautés d’espaces (Pereire & Saint-Augustin)',
    summary:
      "Partenariat avec le réseau d'espaces de bureaux et de coworking Morning : accueil de deux ateliers gratuits de découverte de l'IA générative en 2026 à Morning Pereire (Paris 17e) et Morning Saint-Augustin (Paris 8e).",
    websiteUrl: 'https://www.morning.fr/',
    sameAs: ['https://www.morning.fr/'],
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1779185919/Logo_Morning_sma32y.png',
    hasDetailPage: true
  },
  {
    slug: 'dgs-services-torcy',
    name: 'DG Services Torcy',
    categorySlug: 'lieux',
    badge: 'Domiciliation & Salles de réunion',
    city: '22 rue Pierre-Mendès-France, 77200 Torcy',
    relation: 'Accueil ateliers & sessions en Seine-et-Marne',
    summary:
      "Centre d'affaires et salles équipées au pied du RER A de Torcy pour accueillir nos ateliers IA, rendez-vous dirigeants et sessions New Business en Seine-et-Marne.",
    websiteUrl: 'https://www.dgservices.fr/',
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1795182487/Sticky_logo_dgs_ret_alxuwi.png',
    hasDetailPage: false
  },

  // 5. ENTREPRISES & FONDATIONS
  {
    slug: 'cmi-systemes',
    name: 'CMI Systèmes',
    categorySlug: 'entreprises',
    badge: 'Informatique, Infogérance & Cybersécurité · Qualiopi Cyber',
    city: 'Seine-et-Marne (77)',
    relation: 'Partenaire infrastructure & cybersécurité (interventions conjointes IA & cyber)',
    summary:
      "Entreprise informatique de Seine-et-Marne fondée en 2011 par Cyril Milan (25 ans d'expertise), partenaire clé en main des TPE, PME et collectivités, dotée d'un centre de formation certifié Qualiopi pour la cybersécurité.",
    websiteUrl: 'https://cmisystemes.com/',
    sameAs: ['https://cmisystemes.com/'],
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1795435262/logo_sans_fond_mnd5ud.png',
    hasDetailPage: true
  },
  {
    slug: 'cpme-77',
    name: 'CPME 77 (Les Entrepreneurs Seine-et-Marne)',
    categorySlug: 'entreprises',
    badge: 'Organisation Patronale · TPE & PME 77',
    city: 'Seine-et-Marne (77)',
    relation: 'Matinées dirigeants IA & cybersécurité (avec CMI Systèmes)',
    summary:
      "Organisation à l'automne 2026 de deux matinées d'échanges pour les dirigeants de TPE et PME de Seine-et-Marne : la matinée IA animée par Alkymya et la matinée cybersécurité animée par CMI Systèmes.",
    websiteUrl: 'https://www.cpme77.fr/',
    sameAs: [
      'https://www.cpme77.fr/',
      'https://www.facebook.com/CPME77',
      'https://x.com/cpme77'
    ],
    logo: 'https://www.cpme77.fr/wp-content/themes/test/assets/img/logo-cpme77.png',
    hasDetailPage: true
  },
  {
    slug: 'sncf',
    name: 'SNCF',
    categorySlug: 'entreprises',
    badge: 'Mobilité & Territoires',
    city: 'France',
    relation: 'Programmes entrepreneuriaux & développement économique',
    summary:
      "Collaboration inscrite dans la continuité du parcours de Cyril Garnier (ex-Directeur Général de SNCF Développement) en appui aux dynamiques entrepreneuriales territoriales.",
    websiteUrl: 'https://www.sncf.com/',
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1777819108/t%C3%A9l%C3%A9chargement_16_j060qu.jpg',
    hasDetailPage: false
  },
  {
    slug: 'fondation-grdf',
    name: 'Fondation GRDF',
    categorySlug: 'entreprises',
    badge: 'Fondation d’Entreprise',
    city: 'France',
    relation: 'Accompagnement projets à impact territorial',
    summary:
      "Accompagnement de porteurs de projets à impact territorial et transmission des usages responsables et sobres de l'intelligence artificielle.",
    websiteUrl: 'https://fondationgrdf.fr/',
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1759925019/logo-fondation-grdf_wx9kpo.png',
    hasDetailPage: false
  },
  {
    slug: 'sealester',
    name: 'SEALESTER',
    categorySlug: 'entreprises',
    badge: 'Innovation Industrielle',
    city: 'France',
    relation: 'Veille technologique & automatisation produit',
    summary:
      "Exploration d'outils de veille technologique, de structuration de la connaissance et d'automatisation au service de l'innovation produit industrielle.",
    websiteUrl: 'https://www.sealester.com/',
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1759785904/SEALESTER_logo_iyccmi.webp',
    hasDetailPage: false
  },
  {
    slug: 'azimuto',
    name: 'Azimuto',
    categorySlug: 'entreprises',
    badge: 'Conseil & Transition Numérique',
    city: 'France',
    relation: 'Diagnostic & outils de transformation dirigeants',
    summary:
      "Outils de diagnostic et méthodes structurantes pour sécuriser les choix numériques et organisationnels des dirigeants de PME.",
    websiteUrl: 'https://azimuto.org/',
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1760702297/Logo_Azimuto_iqqqce.webp',
    hasDetailPage: false
  },
  {
    slug: 'aveclouise',
    name: 'AvecLouise',
    categorySlug: 'entreprises',
    badge: 'Santé, Maintien à domicile & Aidants',
    city: 'Nantes (44)',
    relation: 'Alchimiste associée Véronique Landereau',
    summary:
      "Initiative portée par Véronique Landereau (docteure en pharmacie), dédiée à l'accompagnement du maintien à domicile, des personnes en perte d'autonomie et de leurs proches aidants.",
    websiteUrl: 'https://aveclouise.fr/',
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1795182244/logo_final_fqhztp.png',
    hasDetailPage: false,
    alchimistePath: '/alchimistes/veronique-landereau/'
  },
  {
    slug: 'esperanta-services',
    name: 'Esperanta Services',
    categorySlug: 'entreprises',
    badge: 'Services à la personne & Autonomie',
    city: 'Le Plessis-Trévise (94)',
    relation: 'Alchimiste associée Mariana Didier Laurent',
    summary:
      "Structure d'aide à domicile et de soutien aux proches aidants fondée et présidée par Mariana Didier Laurent, partenaire du programme New Business MVP sur les volets réglementaires et gestion.",
    websiteUrl: 'https://esperantaservices.fr/',
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1795182349/LOGO_ESPERANTA_SERVICES_1_format_carre_logo_oiseaux_f8pqa2.jpg',
    hasDetailPage: false,
    alchimistePath: '/alchimistes/mariana-didier-laurent/'
  },
  {
    slug: 'fondation-flamenca',
    name: 'La fondation Flamenca',
    categorySlug: 'entreprises',
    badge: 'Culture & Transmission',
    city: 'France',
    relation: 'Valorisation de patrimoines culturels par l’IA',
    summary:
      "Valorisation numérique de patrimoines artistiques et conception de récits culturels augmentés tout en respectant l'intégrité des œuvres.",
    websiteUrl: 'https://fondationflamenca.org/',
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1760702243/Logo_fondation_Flamenca_vprft5.png',
    hasDetailPage: false
  },
  {
    slug: 'ressourcerie-gaillarde',
    name: 'La Ressourcerie Gaillarde',
    categorySlug: 'entreprises',
    badge: 'Économie Circulaire',
    city: 'Paris (19e)',
    relation: 'Communication locale & flux d’information sobres',
    summary:
      "Optimisation des flux d'information et communication de proximité grâce à des outils d'IA sobres, accessibles et sans surcoût logiciel.",
    websiteUrl: 'https://www.ressourceries19.fr/',
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1760702361/Logo_Ressourcerie_Gaillarde_nndpbj.png',
    hasDetailPage: false
  },

  // 6. OUTILS & TECH
  {
    slug: 'awa-cloud',
    name: 'AWACLOUD',
    categorySlug: 'outils',
    badge: 'Éditeur Français · RAG & Documents Local',
    city: 'France',
    relation: 'Conversion documentaire locale PDF/Office → Markdown',
    summary:
      "Bibliothèques et logiciels français (AWA Convert, AWA Viewer, AWA PDF, AWA Office) qui lisent, convertissent et signent vos documents localement sans envoyer aucun fichier sur le cloud.",
    websiteUrl: 'https://awacloud.com/',
    sameAs: ['https://awacloud.com/', 'https://awacloud.com/fr/apps'],
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1795185378/logo-awacloud_wm3ldx.png',
    hasDetailPage: true
  },
  {
    slug: 'onecub',
    name: 'Onecub',
    categorySlug: 'outils',
    badge: 'Data Spaces Souverains & RGPD',
    city: 'France / Europe',
    relation: 'Gouvernance des données, conformité RGPD & Alchimiste Olivier Dion',
    summary:
      "Fondée par Olivier Dion (Alchimiste Alkymya), Onecub conçoit des architectures Data Spaces souveraines et des dispositifs de portabilité conforme au RGPD pour la mobilité, l'énergie et la data de confiance.",
    websiteUrl: 'https://onecub.com/',
    sameAs: ['https://onecub.com/', 'https://www.linkedin.com/in/olivierdion/'],
    logo: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1795182578/onecub-horizontal-white-prism11_iyh9fx.svg',
    logoBgDark: true,
    hasDetailPage: true,
    alchimistePath: '/alchimistes/olivier-dion/'
  }
];

export interface EuridisFormationData {
  ruleStatement: string;
  coreThesis: string;
  introNote: string;
  day1: {
    title: string;
    morningTitle: string;
    morningItems: string[];
    afternoonTitle: string;
    afternoonSummary: string;
  };
  day2: {
    title: string;
    intro: string;
    steps: Array<{ step: string; title: string; detail: string }>;
    synthesisNote: string;
  };
  harness: {
    title: string;
    intro: string;
    components: Array<{ name: string; detail: string }>;
    capitalIaLink: string;
  };
  stack: Array<{ category: string; tools: string }>;
  takeaways: string[];
  faq: Array<{ question: string; answer: string }>;
  attribution: string;
}

export const euridisFormationData: EuridisFormationData = {
  ruleStatement: "L'IA exécute, vous dirigez.",
  coreThesis: "Le modèle est interchangeable, le harnais ne l'est pas.",
  introNote:
    "À Euridis Business School, les étudiants de B3 et de Mastère ne suivent pas un cours sur l'IA : ils la mettent au travail. Depuis deux ans, environ 80 % des étudiants vont jusqu'au bout du TP, parfois avec une simple tablette ou un smartphone, et construisent dès la deuxième journée leurs propres agents avec la stack Claude ou Gemini.",
  day1: {
    title: "Jour 1 : de l'observation à un site en ligne",
    morningTitle: "Le matin : observer, chercher, analyser.",
    morningItems: [
      "Un jeu de cartes pour poser le vocabulaire (le Capital IA).",
      "Une recherche sourcée : chacun enquête sur son voisin et son entreprise, avec Perplexity et Deep Research, et vérifie ses sources.",
      "NotebookLM pour analyser des documents sans inventer, et générer un podcast audio de synthèse.",
      "Un détour pour comprendre comment fonctionne un modèle de langage : tokens, embeddings, attention, RAG.",
      "Une pratique créative avec ChatGPT, Claude, Gemini et Canva IA."
    ],
    afternoonTitle: "L'après-midi : choisir, construire, présenter.",
    afternoonSummary:
      "Chaque étudiant choisit un sujet (un portfolio professionnel, un site sur une passion, « moi dans dix ans »), rédige un guide de style, puis construit et met en ligne son site. La journée se termine par une battle de pitchs de deux minutes."
  },
  day2: {
    title: "Jour 2 : où va la valeur ?",
    intro:
      "Les étudiants deviennent une agence. Le client, c'est l'intervenant, et chaque groupe travaille sur un site.",
    steps: [
      {
        step: "01",
        title: "Un quiz de lancement",
        detail:
          "Les mêmes questions posées à Google et à plusieurs assistants, pour voir que les réponses changent selon l'outil, la personne et le moment."
      },
      {
        step: "02",
        title: "L'enquête",
        detail:
          "Regarder le site sans IA, puis avec les moteurs et leurs réponses automatiques (AI Overviews), puis avec des navigateurs IA qui lisent la page, puis qui agissent à la place de l'utilisateur."
      },
      {
        step: "03",
        title: "La mesure",
        detail:
          "Ce que coûte la lecture d'un document pour une IA (tokens, conversion en Markdown avec AWA), et comment un agent est construit autour d'un modèle (instructions, outils, mémoire, garde-fous)."
      },
      {
        step: "04",
        title: "La construction d'agents",
        detail:
          "Chaque groupe conçoit le harnais d'un agent commercial, avec Claude ou Gemini."
      },
      {
        step: "05",
        title: "La question de fond",
        detail:
          "Quels métiers et quelles activités l'IA remplace, lesquels elle augmente, et où se déplace la valeur."
      }
    ],
    synthesisNote:
      "Tout au long de la journée, chaque groupe écrit une note de synthèse qui s'enrichit à chaque étape, et la présente en fin de journée avec une proposition de développement commercial assisté par l'IA."
  },
  harness: {
    title: "Le harnais : ce qui fait la différence entre deux agents",
    intro:
      "À modèle égal, deux agents peuvent donner des résultats très différents. Ce qui change, c'est tout ce qu'on construit autour du modèle, le harnais (en anglais, agent harness) :",
    components: [
      {
        name: "Instructions",
        detail: "Les règles, le rôle, le ton."
      },
      {
        name: "Outils",
        detail: "Ce que l'agent peut utiliser (recherche, fichiers, messagerie)."
      },
      {
        name: "Mémoire",
        detail: "Ce qu'il sait du contexte et garde d'une fois sur l'autre."
      },
      {
        name: "Boucle",
        detail: "Planifier, agir, vérifier, recommencer."
      },
      {
        name: "Garde-fous",
        detail: "Les droits, la validation humaine, la traçabilité."
      }
    ],
    capitalIaLink:
      "Le harnais est la partie « machine » du Capital IA. Le Capital IA, c'est le harnais plus les personnes qui savent le diriger. Les étudiants apprennent à écrire le leur, sans modèle fourni : on leur donne l'objectif, pas le moyen."
  },
  stack: [
    {
      category: "Recherche et analyse",
      tools: "Perplexity, Deep Research, NotebookLM, Google AI Overviews"
    },
    {
      category: "Modèles et assistants",
      tools: "ChatGPT, Claude, Gemini, Canva IA"
    },
    {
      category: "Construction",
      tools: "Google AI Studio, Cloudinary, GitHub, Netlify, Cloud Run"
    },
    {
      category: "Agents",
      tools: "Skills, connexion à Gmail et Google Drive (Claude, Gemini)"
    },
    {
      category: "Harnais (agent harness)",
      tools: "Instructions, outils, mémoire, boucle, garde-fous"
    },
    {
      category: "Mesure",
      tools: "Tokens, AWA Cloud (conversion de documents en Markdown), Google Analytics, Search Console"
    }
  ],
  takeaways: [
    "Savoir vérifier une source avant de la citer.",
    "Comprendre ce qu'un agent fait à la place d'une personne, et où l'humain doit rester.",
    "Poser la bonne question sur la valeur d'une activité à l'ère de l'IA."
  ],
  faq: [
    {
      question: "Qu'est-ce qu'un harnais d'agent ?",
      answer:
        "C'est l'ensemble des instructions, des outils, de la mémoire, de la boucle de travail et des garde-fous qu'on construit autour d'un modèle d'IA pour qu'il travaille de façon fiable. Le terme anglais est agent harness ; on parle aussi de harness engineering."
    },
    {
      question: "Faut-il savoir coder ?",
      answer:
        "Non. La stack permet de construire un site ou un agent à partir d'une description, avec un guide de style ou un harnais écrit par l'étudiant (sans modèle fourni : on donne l'objectif, pas le moyen)."
    },
    {
      question: "Quel matériel faut-il ?",
      answer:
        "Un ordinateur, mais beaucoup d'étudiants vont au bout du TP avec une tablette ou un smartphone."
    },
    {
      question: "Quels outils faut-il payer ?",
      answer:
        "Pas nécessairement : plusieurs outils ont une offre gratuite, et Google propose aux étudiants éligibles un an gratuit de Google AI Plus (conditions d'âge, de statut étudiant et de date à vérifier)."
    },
    {
      question: "Comment sont évalués les étudiants ?",
      answer:
        "Sur la qualité des sources, l'esprit critique, la compréhension des agents et la cohérence de leurs propositions, pas sur la maîtrise d'un outil."
    },
    {
      question: "Cette formation existe-t-elle pour d'autres écoles ou des entreprises ?",
      answer:
        "Oui. Le format s'adapte aux maquettes d'écoles supérieures comme aux équipes d'entreprises : contactez Alkymya (cyril@alkymya.co)."
    }
  ],
  attribution: "Cette formation est conçue et animée par Cyril Garnier, Alkymya."
};

export interface IesegFormationData {
  conviction: string;
  intro: string;
  interventions: Array<{
    number: string;
    title: string;
    description: string;
    bullets?: string[];
  }>;
  fieldObservation: {
    title: string;
    leadStat: string;
    summary: string;
    finding: string;
    methodologyNote: string;
  };
  soda: {
    title: string;
    description: string;
    review: {
      quote: string;
      author: string;
      source: string;
    };
  };
  testimonials: Array<{
    quote: string;
    author: string;
    roleAndSource: string;
  }>;
  keywordGroups: Array<{ category: string; keywords: string }>;
  faq: Array<{ question: string; answer: string }>;
  attribution: string;
}

export const iesegFormationData: IesegFormationData = {
  conviction: "L'IA exécute, vous dirigez.",
  intro:
    "Intervenant dans le Master de l'IÉSEG depuis 2019, Cyril Garnier y enseigne l'innovation et l'IA, accompagne chaque année des étudiants dans leurs projets de création d'entreprise et leurs mémoires de consulting, et est mentor à l'incubateur de l'IÉSEG.",
  interventions: [
    {
      number: "01",
      title: "Lancer la rentrée des M1 : le sprint design",
      description:
        "Dès la rentrée, les étudiants de M1 entrent dans l'innovation par la pratique : un sprint design pour poser un problème, imaginer, tester vite."
    },
    {
      number: "02",
      title: "Les cours d'innovation et, nouveau, IA et marketing digital avancés",
      description:
        "Des cours d'innovation, auxquels s'ajoute un cours consacré à l'IA et au marketing digital avancés : comment l'IA transforme les pratiques, les métiers et la valeur."
    },
    {
      number: "03",
      title: "Le mentorat : de 6 à 10 étudiants par promotion",
      description:
        "Cyril est le mentor d'étudiants dans le cadre de leur mémoire, en consulting ou en création d'entreprise.",
      bullets: [
        "Un accompagnement tout au long de l'année.",
        "Deux visites en entreprise par an, pour voir le terrain de chaque étudiant.",
        "Un taux de réussite de 100 % aux mémoires accompagnés à ce jour.",
        "Des sujets de pointe, comme le commerce agentique."
      ]
    },
    {
      number: "04",
      title: "Mentor à l'incubateur de l'IÉSEG",
      description:
        "Cyril accompagne aussi des porteurs de projets dans le cadre de l'incubateur de l'école."
    }
  ],
  fieldObservation: {
    title: "Un poste d'observation sur l'IA en entreprise",
    leadStat:
      "La moitié des étudiants accompagnés travaillent sur le déploiement de l'IA dans leur propre entreprise.",
    summary:
      "C'est, pour Cyril, un poste d'observation privilégié : grâce à eux, il voit de près de nombreux phénomènes de conduite du changement, dont le shadow IA, c'est-à-dire l'usage d'outils d'IA par les équipes en dehors de tout cadre défini par l'entreprise.",
    finding:
      "Son constat de terrain : il reste du chemin à parcourir pour de nombreuses entreprises, entre des usages qui avancent seuls dans les équipes et une organisation qui n'a pas encore posé de règles, de formation ni de gouvernance. Ces observations nourrissent ensuite ses cours et ses accompagnements.",
    methodologyNote:
      "Ces constats sont des observations de terrain issues des mémoires encadrés, sans citer d'entreprise."
  },
  soda: {
    title: "SODA : un agent d'accompagnement construit sur un cadre de recherche",
    description:
      "Pour accompagner les étudiants, Cyril a conçu SODA, un agent construit sur un cadre de recherche exigeant. Il aide à structurer une étude, à confronter une hypothèse au terrain et à garder l'esprit critique, sans jamais remplacer le jugement de l'étudiant.",
    review: {
      quote:
        "Je suis impressionnée par la qualité des réponses : l'outil ne se contente pas de répondre simplement à une question, mais il propose une analyse hyper structurée, approfondie et il re-challenge vraiment ce qu'on lui dit. Il apporte en plus de nouvelles idées/perspectives auxquelles je n'avais pas pensé, l'agent va au-delà de la question initiale et analyse vraiment les enjeux autour de la question ! Je le recommande vivement !",
      author: "Noémie",
      source: "Avis Google ★★★★★ sur SODA"
    }
  },
  testimonials: [
    {
      quote:
        "Très contente d'avoir eu Cyril en professeur à l'IÉSEG puis en tuteur de mémoire (sur le commerce agentique). Il est très investi dans l'enseignement et possède une vraie maîtrise de l'IA. Sa passion est contagieuse et il est toujours au courant des dernières nouveautés. Ça a été une expérience d'accompagnement très riche, que je recommande.",
      author: "Augustine",
      roleAndSource: "Ancienne étudiante, avis Google ★★★★★"
    },
    {
      quote:
        "J'ai eu l'opportunité de suivre les cours de Cyril à l'IESEG School of Management et il a également été mon directeur de mémoire. Grâce à son expertise en intelligence artificielle, il sait rendre ces sujets accessibles et très concrets. Dans le cadre de mon mémoire, il m'a accompagnée dans la réflexion et le développement d'une application intégrant de l'IA. J'ai particulièrement apprécié sa pédagogie, sa vision stratégique et sa capacité à transmettre sa passion pour l'innovation. Je recommande vivement Alkymya à toute personne ou organisation souhaitant mieux comprendre et intégrer l'IA dans ses projets.",
      author: "Mélinda",
      roleAndSource: "Ancienne étudiante, avis Google ★★★★★"
    }
  ],
  keywordGroups: [
    {
      category: "Innovation",
      keywords: "sprint design, design thinking, créativité, prototypage"
    },
    {
      category: "IA et marketing",
      keywords: "IA générative, marketing digital avancé, agents IA, commerce agentique"
    },
    {
      category: "Accompagnement",
      keywords: "mentorat, incubateur, mémoire de consulting, création d'entreprise, visites en entreprise"
    },
    {
      category: "IA en entreprise",
      keywords: "déploiement de l'IA, conduite du changement, shadow IA, gouvernance de l'IA"
    },
    {
      category: "Méthode",
      keywords: "cadre de recherche, esprit critique, agent SODA, harnais d'agent"
    }
  ],
  faq: [
    {
      question: "Qui peut être accompagné ?",
      answer:
        "Les étudiants du Master dont le mémoire est encadré par Cyril : de 6 à 10 par promotion."
    },
    {
      question: "Qu'est-ce que le shadow IA ?",
      answer:
        "C'est l'usage d'outils d'IA par des collaborateurs sans que l'entreprise l'ait prévu ni encadré : comptes personnels, données internes collées dans un outil non autorisé. Il révèle souvent un besoin réel que l'organisation n'a pas encore pris en charge."
    },
    {
      question: "À quelle fréquence se voit-on ?",
      answer:
        "L'accompagnement dure toute l'année, avec deux visites en entreprise par an."
    },
    {
      question: "Sur quels sujets ?",
      answer:
        "Des projets de création d'entreprise et des mémoires de consulting, dont des sujets d'IA et de commerce agentique."
    },
    {
      question: "L'IA fait-elle le mémoire à la place de l'étudiant ?",
      answer:
        "Non. Les outils servent à explorer, structurer et vérifier. L'étudiant dirige, choisit et signe."
    },
    {
      question: "Cet accompagnement existe-t-il pour d'autres écoles ou des entreprises ?",
      answer:
        "Oui. Le format s'adapte : contactez Alkymya (cyril@alkymya.co)."
    }
  ],
  attribution: "Intervenant et mentor : Cyril Garnier, Alkymya."
};

export interface Cpme77PartnershipData {
  conviction: string;
  intro: string;
  morningAi: {
    heading: string;
    dateAndTime: string;
    speaker: string;
    summary: string;
    programmeIntro: string;
    programme: string[];
  };
  morningCyber: {
    heading: string;
    dateAndTime: string;
    speaker: string;
    summary: string;
  };
  whyCombine: {
    heading: string;
    body: string;
  };
  tripartite: {
    heading: string;
    actors: Array<{
      name: string;
      role: string;
      url?: string;
      internalHref?: string;
    }>;
  };
  keywordGroups: Array<{ category: string; keywords: string }>;
  faq: Array<{ question: string; answer: string }>;
  attribution: string;
}

export const cpme77Data: Cpme77PartnershipData = {
  conviction: "L'IA exécute, vous dirigez.",
  intro:
    "Les Entrepreneurs Seine-et-Marne (CPME 77) ont organisé à l'automne 2026 deux matinées d'échanges destinées aux dirigeants de TPE et de PME, sur deux sujets qui les concernent directement : l'intelligence artificielle et la cybersécurité. Alkymya animait la matinée consacrée à l'IA, en partenariat avec CMI Systèmes, qui animait celle sur la cybersécurité.",
  morningAi: {
    heading:
      "Matinée IA : « Comment faire de l'IA un allié du quotidien sans perdre la maîtrise de ce que l'on délègue ? »",
    dateAndTime: "Mardi 13 octobre 2026, de 9 h 30 à 11 h 30",
    speaker: "Animée par Cyril Garnier, dirigeant d'Alkymya.",
    summary:
      "Le fil rouge tient dans la question du titre : l'IA exécute, vous dirigez. La matinée s'adresse à des dirigeants qui utilisent déjà l'IA, ou qui hésitent, et qui veulent savoir comment l'intégrer sans perdre le contrôle.",
    programmeIntro: "Au programme :",
    programme: [
      "les usages concrets de l'IA pour un dirigeant, au quotidien ;",
      "le choix des outils ;",
      "ce qu'on peut déléguer à une IA, ce qu'on garde, et comment vérifier ce qu'elle produit ;",
      "un temps d'échange : les participants pouvaient poser leurs questions en amont."
    ]
  },
  morningCyber: {
    heading:
      "Matinée cybersécurité : « Prise de conscience et enjeux du risque cyber »",
    dateAndTime: "Jeudi 29 octobre 2026, de 9 h 30 à 11 h 30",
    speaker: "Animée par un formateur de CMI Systèmes.",
    summary:
      "Un angle par le risque : identifier les principales menaces, comprendre les conséquences possibles pour son entreprise, et réfléchir au niveau de protection réellement nécessaire pour son activité."
  },
  whyCombine: {
    heading: "Pourquoi associer IA et cybersécurité ?",
    body:
      "Adopter l'IA, c'est aussi ouvrir de nouvelles portes : des données d'entreprise confiées à des outils, des usages qui se développent dans les équipes sans cadre (le shadow IA), de nouveaux risques d'arnaque et d'hameçonnage. Les deux sujets se répondent : on ne déploie pas l'IA sans se poser la question de la sécurité, et on ne protège pas son entreprise en ignorant ce que ses équipes utilisent déjà."
  },
  tripartite: {
    heading: "Un partenariat à trois",
    actors: [
      {
        name: "La CPME 77 (Les Entrepreneurs Seine-et-Marne)",
        role: "Organise les rencontres et invite ses adhérents.",
        url: "https://www.cpme77.fr/"
      },
      {
        name: "Alkymya",
        role: "Conçoit et anime la matinée IA.",
        internalHref: "/alchimistes/cyril-garnier/"
      },
      {
        name: "CMI Systèmes, entreprise informatique",
        role: "Anime la matinée cybersécurité.",
        url: "https://cmisystemes.com/"
      }
    ]
  },
  keywordGroups: [
    {
      category: "Usages",
      keywords: "IA au quotidien, assistants IA, délégation, vérification des résultats"
    },
    {
      category: "Gouvernance",
      keywords: "maîtrise de l'IA, shadow IA, règles d'usage, données de l'entreprise"
    },
    {
      category: "Public",
      keywords: "dirigeants de TPE et PME, adhérents de la CPME 77, Seine-et-Marne"
    }
  ],
  faq: [
    {
      question: "À qui s'adressent ces matinées ?",
      answer:
        "Aux dirigeants de TPE et de PME, en particulier aux adhérents de la CPME 77."
    },
    {
      question: "Faut-il déjà utiliser l'IA ?",
      answer:
        "Non. La matinée convient aussi bien aux dirigeants qui utilisent déjà l'IA qu'à ceux qui hésitent et veulent comprendre comment l'intégrer sans perdre le contrôle."
    },
    {
      question:
        "Peut-on organiser une matinée similaire dans notre réseau ou notre entreprise ?",
      answer:
        "Oui. Le format s'adapte aux fédérations professionnelles, clubs de dirigeants et entreprises : contactez Alkymya (cyril@alkymya.co)."
    },
    {
      question:
        "Existe-t-il des formations plus longues finançables par les OPCO ?",
      answer:
        "Oui. Alkymya conçoit et anime des ateliers et formations plus approfondis, portés administrativement par des organismes partenaires certifiés Qualiopi tels qu'INATEC (NDA 11771056077)."
    }
  ],
  attribution: "Matinale IA animée par Cyril Garnier, Alkymya."
};

export interface MorningPartnershipData {
  intro: string;
  workshops: Array<{
    number: string;
    heading: string;
    dateAndTime: string;
    capacity: string;
    detail: string;
    feedback: string;
  }>;
  whyFormat: Array<{ audience: string; benefit: string }>;
  coveredTopics: string[];
  keywordGroups: Array<{ category: string; keywords: string }>;
  faq: Array<{ question: string; answer: string }>;
  attribution: string;
}

export const morningData: MorningPartnershipData = {
  intro:
    "Alkymya a animé en 2026 deux ateliers de découverte de l'IA générative dans des espaces Morning, le réseau d'espaces de bureaux et de coworking. Le principe, défini avec Morning : un partenariat. Morning met à disposition son réseau de clients, le lieu et la communication autour de la session ; l'intervenant offre son expertise, gratuitement, à ces communautés.",
  workshops: [
    {
      number: "Atelier 1",
      heading: "Morning Pereire (Paris 17e) : « Booster sa productivité avec les IA »",
      dateAndTime: "Jeudi 23 avril 2026, de 12 h 30 à 13 h 30",
      capacity: "15 places ouvertes",
      detail:
        "Un atelier de découverte de l'IA générative pour les clients de l'espace, animé par Cyril Garnier. L'espace avait ouvert 15 places.",
      feedback:
        "À la suite de la session, l'équipe de Morning Pereire a relayé un retour très positif : les clients ont beaucoup apprécié l'atelier, et une vidéo de la session leur a été transmise."
    },
    {
      number: "Atelier 2",
      heading: "Morning Saint-Augustin (Paris 8e) : atelier IA",
      dateAndTime: "Mardi 19 mai 2026",
      capacity: "Jauge d'une douzaine de personnes",
      detail:
        "Un atelier IA pour les clients de l'espace, à l'initiative de la manager du lieu, avec une jauge d'une douzaine de personnes.",
      feedback:
        "Le retour de Morning après la session : des retours très positifs sur l'atelier."
    }
  ],
  whyFormat: [
    {
      audience: "Pour les participants",
      benefit:
        "Découvrir ce que l'IA fait concrètement pour leur quotidien professionnel, sans engagement, au cœur de leur lieu de travail."
    },
    {
      audience: "Pour les espaces",
      benefit:
        "Proposer à leur communauté des rencontres utiles, sans coût."
    },
    {
      audience: "Pour Alkymya",
      benefit:
        "Rencontrer des indépendants, des dirigeants de petites structures et des équipes, et comprendre leurs usages réels de l'IA."
    }
  ],
  coveredTopics: [
    "Comprendre ce qu'est l'IA générative, ce qu'elle fait bien et ce qu'elle fait mal.",
    "Des usages concrets pour gagner du temps : rédaction, recherche, synthèse, préparation de réunions.",
    "Choisir ses outils.",
    "Garder la main sur ce qu'on délègue : vérifier les sources, protéger ses données."
  ],
  keywordGroups: [
    {
      category: "Usages",
      keywords: "IA générative, productivité, assistants IA, gain de temps"
    },
    {
      category: "Format",
      keywords: "atelier de découverte, conférence, coworking, réseau Morning"
    },
    {
      category: "Public",
      keywords: "indépendants, dirigeants de TPE et de PME, équipes en espace partagé"
    }
  ],
  faq: [
    {
      question: "À qui s'adressent ces ateliers ?",
      answer:
        "Aux clients des espaces Morning : indépendants, entrepreneurs, équipes de petites entreprises."
    },
    {
      question: "Faut-il déjà utiliser l'IA ?",
      answer: "Non. L'atelier est une découverte."
    },
    {
      question: "Les ateliers sont-ils gratuits ?",
      answer:
        "Oui pour les participants : l'espace accueille et communique, l'intervenant offre la session."
    },
    {
      question: "Peut-on en organiser un dans notre espace ou notre entreprise ?",
      answer: "Oui. Le format s'adapte : contactez Alkymya."
    },
    {
      question: "Existe-t-il des formations plus longues ?",
      answer:
        "Oui : ateliers et formations finançables par les OPCO via des partenaires certifiés Qualiopi. Les conditions dépendent de l'entreprise."
    }
  ],
  attribution: "Ateliers animés par Cyril Garnier, Alkymya."
};

export interface CmiSystemesPartnershipData {
  identity: {
    founded: string;
    expertise: string;
    president: string;
    pillars: string[];
    summary: string;
    collaboration: string;
  };
  whatTheyDo: {
    title: string;
    subtitle: string;
    services: string[];
  };
  cyberAcademy: {
    title: string;
    description: string;
    qualiopiNote: string;
  };
  whyTogether: {
    title: string;
    body: string;
  };
  jointWork: {
    title: string;
    items: Array<{ label: string; detail: string }>;
    enrichmentNote: string;
  };
  keywordGroups: Array<{ category: string; keywords: string }>;
  faq: Array<{ question: string; answer: string }>;
}

export const cmiSystemesData: CmiSystemesPartnershipData = {
  identity: {
    founded: "Fondée en 2011",
    expertise: "25 ans d'expertise",
    president: "Président : Cyril Milan",
    pillars: ["Expertise", "Proximité", "Réactivité", "Confidentialité"],
    summary:
      "CMI Systèmes est une entreprise informatique de Seine-et-Marne qui pilote, avec ses clients ou à leur place, leur système d'information. Fondée en 2011, elle revendique 25 ans d'expertise, une taille humaine et quatre maîtres mots : expertise, proximité, réactivité, confidentialité. Son président est Cyril Milan.",
    collaboration:
      "Alkymya et CMI Systèmes travaillent ensemble : ils interviennent côte à côte auprès des entreprises, de la CPME 77 et d'organisations publiques, l'une sur l'IA et ses usages, l'autre sur l'infrastructure et la cybersécurité."
  },
  whatTheyDo: {
    title: "Ce que fait CMI Systèmes",
    subtitle:
      "Un partenaire informatique « clé en main » pour les TPE, PME, groupes et marchés publics, avec des interventions ponctuelles ou un accompagnement régulier :",
    services: [
      "migration de la messagerie ;",
      "passage au cloud ;",
      "préparation et installation de matériel spécifique ;",
      "accompagnement lors d'un déménagement ;",
      "assistance quotidienne, avec un outil de demandes de service qui assure traçabilité, suivi et analyse ;",
      "audit gratuit et sans engagement pour démarrer."
    ]
  },
  cyberAcademy: {
    title: "Un centre de formation à la cybersécurité",
    description:
      "CMI Systèmes dispose d'un centre de formation qui aide ses clients à comprendre les risques cyber. Sa formation « Introduction à la cybersécurité dans un contexte professionnel » dure deux jours : chacun apprend à détecter les menaces actuelles et à agir. L'entreprise propose aussi des solutions de sensibilisation intégrées aux outils du quotidien, sous forme de quiz adaptés au niveau de chaque utilisateur.",
    qualiopiNote:
      "Le centre de formation de CMI Systèmes est certifié Qualiopi pour la cybersécurité, ce qui permet, selon les cas, une prise en charge par les OPCO."
  },
  whyTogether: {
    title: "Pourquoi IA et cybersécurité vont ensemble",
    body:
      "Adopter l'IA, c'est confier des données à de nouveaux outils, voir apparaître des usages dans les équipes sans cadre (le shadow IA), et s'exposer à de nouveaux risques. Les deux sujets se répondent. C'est l'esprit des deux matinées organisées avec la CPME 77 à l'automne 2026 : l'IA animée par Alkymya, la cybersécurité par CMI Systèmes."
  },
  jointWork: {
    title: "Ce que nous faisons ensemble",
    items: [
      {
        label: "Les matinales de la CPME 77",
        detail: "une matinée IA et une matinée cybersécurité, pour les dirigeants de TPE et PME."
      },
      {
        label: "Des interventions en entreprise",
        detail: "sensibilisation à l'IA et à la cyber, adaptées à chaque structure."
      },
      {
        label: "Des projets avec des organisations publiques",
        detail: "où infrastructure, sécurité et usages de l'IA doivent être pensés ensemble."
      }
    ],
    enrichmentNote: "Cette fiche s'enrichira au fil de nos interventions."
  },
  keywordGroups: [
    {
      category: "CMI Systèmes",
      keywords:
        "infogérance, informatique TPE PME, cybersécurité, formation cyber, Qualiopi, Seine-et-Marne"
    },
    {
      category: "Avec Alkymya",
      keywords:
        "IA et cybersécurité, shadow IA, sensibilisation, formation en entreprise, CPME 77"
    }
  ],
  faq: [
    {
      question: "Qui est CMI Systèmes ?",
      answer:
        "Une entreprise informatique de Seine-et-Marne fondée en 2011, avec un centre de formation à la cybersécurité."
    },
    {
      question: "Quel est le lien avec Alkymya ?",
      answer:
        "Un partenariat : Alkymya apporte l'IA et la pédagogie, CMI l'infrastructure et la cybersécurité. Ils interviennent ensemble auprès d'entreprises."
    },
    {
      question: "Les formations sont-elles finançables ?",
      answer:
        "Le centre de formation de CMI est certifié Qualiopi pour la cybersécurité. La prise en charge par un OPCO dépend de l'entreprise et du dossier."
    },
    {
      question: "Peut-on organiser une intervention commune dans notre entreprise ?",
      answer: "Oui. Contactez Alkymya ou CMI Systèmes."
    }
  ]
};

export const partnerDetails: Record<string, PartnerDetailContent> = {
  'cmi-systemes': {
    slug: 'cmi-systemes',
    categorySlug: 'entreprises',
    name: 'CMI Systèmes',
    seoTitle: "CMI Systèmes x Alkymya : IT & Cybersécurité | Partenaires",
    seoDescription:
      "CMI Systèmes (Seine-et-Marne, Cyril Milan), partenaire d'Alkymya sur l'IA et la cybersécurité : infogérance TPE/PME et centre Qualiopi cyber.",
    keywords:
      'CMI Systèmes, Cyril Milan, cybersécurité Seine-et-Marne, infogérance TPE PME, IA et cybersécurité, shadow IA, Qualiopi cybersécurité, CPME 77, Alkymya',
    h1: "CMI Systèmes : l'informatique de confiance des TPE, PME et collectivités",
    lead: "CMI Systèmes est une entreprise informatique de Seine-et-Marne qui pilote, avec ses clients ou à leur place, leur système d'information. Fondée en 2011, elle revendique 25 ans d'expertise, une taille humaine et quatre maîtres mots : expertise, proximité, réactivité, confidentialité. Son président est Cyril Milan.",
    roleSummary:
      "Alkymya et CMI Systèmes travaillent ensemble : ils interviennent côte à côte auprès des entreprises, de la CPME 77 et d'organisations publiques, Alkymya sur l'IA et ses usages, CMI Systèmes sur l'infrastructure, l'infogérance clé en main et la cybersécurité.",
    whySelected: [
      {
        title: "Expertise, proximité, réactivité, confidentialité",
        text: "Fondée en 2011 et présidée par Cyril Milan, CMI Systèmes associe 25 ans d'expertise et une organisation à taille humaine en Seine-et-Marne."
      },
      {
        title: "Un centre de formation certifié Qualiopi cybersécurité",
        text: "Formation de deux jours « Introduction à la cybersécurité dans un contexte professionnel » et quiz quotidiens adaptés au niveau de chaque utilisateur."
      },
      {
        title: "Réponse conjointe à l'IA et au shadow IA",
        text: "Penser ensemble le déploiement des outils d'IA (Alkymya) et la maîtrise des données, de l'infrastructure et du risque cyber (CMI Systèmes)."
      }
    ],
    jointActions: [
      {
        title: "Les matinales de la CPME 77",
        detail: "Une matinée IA animée par Alkymya et une matinée cybersécurité animée par CMI Systèmes à l'automne 2026 pour les dirigeants de TPE et PME."
      },
      {
        title: "Interventions conjointes en entreprise",
        detail: "Sensibilisation croisée à l'IA, au shadow IA et à la cybersécurité adaptée à chaque structure."
      },
      {
        title: "Projets avec des organisations publiques",
        detail: "Accompagnement où infrastructure informatique, sécurité des systèmes et usages concrets de l'IA sont pensés ensemble."
      }
    ],
    measurableResults: [
      {
        metric: "Depuis 2011",
        label: "25 ans d'expertise SI",
        context: "Entreprise informatique à taille humaine implantée en Seine-et-Marne"
      },
      {
        metric: "2 jours",
        label: "Formation cybersécurité Qualiopi",
        context: "Centre de formation CMI Systèmes certifié Qualiopi pour la cybersécurité"
      },
      {
        metric: "IA + Cyber",
        label: "Interventions conjointes",
        context: "CPME 77, TPE/PME et organisations publiques aux côtés d'Alkymya"
      }
    ],
    audience: [
      "Dirigeants de TPE, PME, groupes et collectivités de Seine-et-Marne et d'Île-de-France",
      "Organisations publiques devant concilier infrastructure sécurisée et déploiement encadré de l'IA",
      "Entreprises cherchant une sensibilisation conjointe IA (Alkymya) et cybersécurité (CMI Systèmes)"
    ],
    ctaLabel: 'Visiter cmisystemes.com',
    ctaUrl: 'https://cmisystemes.com/',
    secondaryLinks: [
      { href: '/partenaires/entreprises/cpme-77/', label: 'Voir les matinales CPME 77 (IA & Cyber)' },
      { href: '/partenaires/entreprises/', label: 'Retour aux Entreprises & Collectifs' },
      { href: '/alchimistes/cyril-garnier/', label: 'Profil de Cyril Garnier (Alkymya)' }
    ]
  },
  'cpme-77': {
    slug: 'cpme-77',
    categorySlug: 'entreprises',
    name: 'CPME 77 (Les Entrepreneurs Seine-et-Marne)',
    seoTitle: "CPME 77 x Alkymya : Matinées IA & Cyber | Partenaires",
    seoDescription:
      "Deux matinées CPME 77 à l'automne 2026 pour dirigeants de TPE/PME : matinée IA par Alkymya (13 oct.) et cybersécurité par CMI Systèmes (29 oct.).",
    keywords:
      'CPME 77, Les Entrepreneurs Seine-et-Marne, IA dirigeants TPE PME, CMI Systèmes, cybersécurité PME, shadow IA, gouvernance IA, Alkymya',
    h1: "CPME 77 : deux matinées pour que les dirigeants gardent la main sur l'IA et sur le risque cyber",
    lead: "Les Entrepreneurs Seine-et-Marne (CPME 77) ont organisé à l'automne 2026 deux matinées d'échanges destinées aux dirigeants de TPE et de PME, sur deux sujets qui les concernent directement : l'intelligence artificielle et la cybersécurité. Alkymya animait la matinée consacrée à l'IA, en partenariat avec CMI Systèmes, qui animait celle sur la cybersécurité.",
    roleSummary:
      "Organisation patronale de proximité en Seine-et-Marne (77), la CPME 77 rassemble les dirigeants de TPE et de PME du territoire. Dans le cadre de ces deux matinées complémentaires d'octobre 2026, elle réunit Alkymya pour le volet intelligence artificielle et CMI Systèmes pour la prise de conscience du risque cyber.",
    whySelected: [
      {
        title: "Ancrage TPE/PME en Seine-et-Marne",
        text: "Des échanges pensés directement pour la réalité opérationnelle des dirigeants de TPE et PME adhérents de la CPME 77."
      },
      {
        title: "Complémentarité IA & cybersécurité",
        text: "Associer l'IA (Alkymya) et la sécurité informatique (CMI Systèmes) évite de déployer des assistants sans maîtriser données, shadow IA ni hameçonnage."
      },
      {
        title: "Un fil rouge clair : l'IA exécute, vous dirigez",
        text: "Définir ce que l'on délègue, ce que l'on garde en interne et comment vérifier systématiquement les résultats produits par les outils."
      }
    ],
    jointActions: [
      {
        title: "Matinée IA — 13 octobre 2026 (9 h 30 – 11 h 30)",
        detail: "Animation par Cyril Garnier (Alkymya) autour des usages concrets du dirigeant, du choix des outils, de la délégation vérifiée et des questions préparées en amont."
      },
      {
        title: "Matinée cybersécurité — 29 octobre 2026 (9 h 30 – 11 h 30)",
        detail: "Animation par CMI Systèmes sous l'angle du risque : identifier les menaces, mesurer les conséquences possibles et ajuster le niveau de protection nécessaire."
      },
      {
        title: "Sensibilisation croisée shadow IA & gouvernance",
        detail: "Articulation concrète entre usages IA non encadrés dans les équipes, confidentialité des données d'entreprise et nouveaux vecteurs d'arnaque."
      }
    ],
    measurableResults: [
      {
        metric: "2 matinées",
        label: "Automne 2026 · 9 h 30 – 11 h 30",
        context: "Mardi 13 octobre (IA · Alkymya) et Jeudi 29 octobre (Cybersécurité · CMI Systèmes)"
      },
      {
        metric: "3 acteurs",
        label: "Partenariat territorial 77",
        context: "CPME 77 (Les Entrepreneurs Seine-et-Marne), Alkymya et CMI Systèmes"
      },
      {
        metric: "TPE & PME",
        label: "Dirigeants de Seine-et-Marne",
        context: "Format accessible aux dirigeants déjà utilisateurs comme à ceux qui hésitent"
      }
    ],
    audience: [
      "Dirigeants de TPE et de PME adhérents de la CPME 77 en Seine-et-Marne",
      "Chefs d'entreprise souhaitant encadrer le shadow IA et protéger les données internes",
      "Fédérations professionnelles et clubs de dirigeants cherchant une intervention croisée IA & cyber"
    ],
    ctaLabel: 'Visiter cpme77.fr',
    ctaUrl: 'https://www.cpme77.fr/',
    secondaryLinks: [
      { href: '/partenaires/entreprises/', label: 'Retour aux Entreprises & Collectifs' },
      { href: '/alchimistes/cyril-garnier/', label: 'Profil de Cyril Garnier (animateur IA)' },
      { href: '/ateliers/', label: 'Voir nos ateliers & formats dirigeants' }
    ]
  },
  morning: {
    slug: 'morning',
    categorySlug: 'lieux',
    name: 'Morning',
    seoTitle: "Morning x Alkymya : Ateliers IA Coworking | Partenaires",
    seoDescription:
      "Deux ateliers gratuits de découverte de l'IA générative animés par Alkymya en 2026 à Morning Pereire (Paris 17e) et Morning Saint-Augustin (8e).",
    keywords:
      'Morning, coworking, IA générative, productivité, atelier IA, entrepreneurs, Paris, Alkymya, Morning Pereire, Morning Saint-Augustin',
    h1: "Morning : deux ateliers de découverte de l'IA pour les clients des espaces de coworking",
    lead: "Alkymya a animé en 2026 deux ateliers de découverte de l'IA générative dans des espaces Morning, le réseau d'espaces de bureaux et de coworking. Le principe, défini avec Morning : un partenariat. Morning met à disposition son réseau de clients, le lieu et la communication autour de la session ; l'intervenant offre son expertise, gratuitement, à ces communautés.",
    roleSummary:
      "Acteur de référence des espaces de bureaux et de coworking à Paris et en Île-de-France, Morning ouvre ses lieux à des interventions utiles pour sa communauté de résidents. À Morning Pereire (Paris 17e) en avril 2026 puis à Morning Saint-Augustin (Paris 8e) en mai 2026, Alkymya a animé deux sessions de découverte de l'IA générative accessibles gratuitement aux clients des espaces.",
    whySelected: [
      {
        title: "Un format gagnant-gagnant pour les communautés",
        text: "Morning met à disposition le lieu, son réseau et sa communication ; l'intervenant offre son expertise sans frais pour les résidents."
      },
      {
        title: "Une découverte concrète sur le lieu de travail",
        text: "Des formats courts (comme 12 h 30 – 13 h 30 à Pereire) centrés sur la productivité quotidienne : rédaction, recherche, synthèse et réunions."
      },
      {
        title: "Maîtrise de la délégation et des données",
        text: "Chaque atelier rappelle ce que l'IA générative fait bien ou mal, comment choisir ses outils, vérifier ses sources et protéger ses données."
      }
    ],
    jointActions: [
      {
        title: "Morning Pereire (Paris 17e) — 23 avril 2026 (12 h 30 – 13 h 30)",
        detail: "Atelier « Booster sa productivité avec les IA » sur 15 places ouvertes, suivi de retours très positifs et transmission d'une vidéo de la session à l'équipe du lieu."
      },
      {
        title: "Morning Saint-Augustin (Paris 8e) — 19 mai 2026",
        detail: "Atelier IA organisé à l'initiative de la manager de l'espace pour une douzaine de personnes, avec des retours très positifs."
      },
      {
        title: "Programme pragmatique en 4 volets",
        detail: "Fonctionnement réel de l'IA générative, cas d'usage de gain de temps, choix des outils et vérification des sources et données."
      }
    ],
    measurableResults: [
      {
        metric: "2 ateliers",
        label: "Printemps 2026 à Paris",
        context: "Morning Pereire (Paris 17e, 23 avril) et Morning Saint-Augustin (Paris 8e, 19 mai)"
      },
      {
        metric: "12–15 places",
        label: "Jauges de proximité",
        context: "Formats interactifs dédiés aux indépendants, TPE, PME et équipes résidentes"
      },
      {
        metric: "0 €",
        label: "Pour les participants",
        context: "Partenariat d'animation communautaire : lieu & communication Morning, expertise offerte par Alkymya"
      }
    ],
    audience: [
      "Clients des espaces Morning : indépendants, entrepreneurs et équipes de petites entreprises",
      "Managers d'espaces de coworking souhaitant proposer des ateliers utiles sans coût à leur communauté",
      "Entreprises cherchant ensuite à déployer des ateliers ou formations plus longues finançables OPCO via partenaires Qualiopi"
    ],
    ctaLabel: 'Découvrir morning.fr',
    ctaUrl: 'https://www.morning.fr/',
    secondaryLinks: [
      { href: '/partenaires/lieux/', label: 'Retour au pôle Lieux & Coworking' },
      { href: '/alchimistes/cyril-garnier/', label: 'Profil de Cyril Garnier (intervenant)' },
      { href: '/ateliers/', label: 'Voir nos ateliers & formats entreprise' }
    ]
  },
  ieseg: {
    slug: 'ieseg',
    categorySlug: 'ecoles',
    name: 'IÉSEG School of Management',
    seoTitle: "IÉSEG x Alkymya : Innovation & Mentorat IA | Partenaires",
    seoDescription:
      "Intervenant en Master à l'IÉSEG depuis 2019 : sprint design M1, IA et marketing digital avancés, mentorat mémoires (100 % réussite), incubateur et agent SODA.",
    keywords:
      'IESEG IA innovation, Cyril Garnier IESEG, mentorat mémoire consulting IA, agent SODA, shadow IA entreprise, commerce agentique',
    h1: "IÉSEG : innover, accompagner, mener des étudiants jusqu'au mémoire",
    lead: "Intervenant dans le Master de l'IÉSEG depuis 2019, Cyril Garnier y enseigne l'innovation et l'IA, accompagne chaque année des étudiants dans leurs projets de création d'entreprise et leurs mémoires de consulting, et est mentor à l'incubateur de l'IÉSEG. Une conviction : l'IA exécute, vous dirigez.",
    roleSummary:
      "Depuis 2019, l'intervention de Cyril Garnier au sein du Master de l'IÉSEG School of Management articule quatre volets complémentaires : le sprint design de rentrée des M1, les cours d'innovation ainsi que le nouveau cours IA et marketing digital avancés, le mentorat annuel de 6 à 10 étudiants jusqu'au mémoire (100 % de réussite à ce jour, avec deux visites en entreprise par an) et l'accompagnement de porteurs de projets à l'incubateur de l'IÉSEG.",
    whySelected: [
      {
        title: "Une continuité pédagogique et entrepreneuriale depuis 2019",
        text: "Du sprint design dès la rentrée des M1 jusqu'à l'incubateur et au mémoire de fin d'études, les étudiants passent de l'idéation à la confrontation terrain."
      },
      {
        title: "Un observatoire réel du shadow IA et de la conduite du changement",
        text: "La moitié des étudiants accompagnés travaillent sur le déploiement de l'IA dans leur entreprise, offrant une lecture directe des écarts entre usages terrain et gouvernance."
      },
      {
        title: "Outillage méthodologique par l'agent SODA et contrôle humain",
        text: "Conçu sur un cadre de recherche exigeant, l'agent SODA structure l'étude et challenge les hypothèses sans jamais rédiger ni décider à la place de l'étudiant."
      }
    ],
    jointActions: [
      {
        title: "Sprint design M1 & cours d'IA et marketing digital avancés",
        detail:
          "Mise en mouvement dès la rentrée des M1 puis approfondissement sur la transformation des pratiques, des métiers et de la valeur par l'IA générative et les agents."
      },
      {
        title: "Mentorat annuel (6 à 10 mémoires/promo) & 2 visites en entreprise",
        detail:
          "Suivi tout au long de l'année sur des projets de création d'entreprise ou de consulting (dont commerce agentique), avec 100 % de réussite aux mémoires accompagnés."
      },
      {
        title: "Mentorat à l'incubateur de l'IÉSEG & agent de recherche SODA",
        detail:
          "Accompagnement de porteurs de projets à l'incubateur et appui de l'agent SODA pour re-challenger les hypothèses face au terrain."
      }
    ],
    measurableResults: [
      {
        metric: '100 %',
        label: 'Réussite aux mémoires accompagnés',
        context: "Taux de réussite constaté à ce jour sur les promotions suivies en consulting et création d'entreprise depuis 2019"
      },
      {
        metric: '6 à 10 / promo',
        label: 'Étudiants mentorés par an',
        context: "Accompagnement annuel continu incluant deux visites en entreprise par étudiant"
      },
      {
        metric: '50 %',
        label: 'Sujets sur le déploiement IA en entreprise',
        context: "Observatoire direct de la conduite du changement et du shadow IA sans citer d'entreprise"
      }
    ],
    audience: [
      'Étudiants de Master de l’IÉSEG School of Management (sprint M1, cours IA & marketing digital avancés, mémoires)',
      'Porteurs de projets accompagnés à l’incubateur de l’IÉSEG',
      'Entreprises et écoles souhaitant structurer un accompagnement IA, gouvernance et lutte contre le shadow IA'
    ],
    ctaLabel: 'Visiter ieseg.fr',
    ctaUrl: 'https://www.ieseg.fr/',
    secondaryLinks: [
      { href: '/alchimistes/cyril-garnier/', label: 'Profil de Cyril Garnier, intervenant & mentor' },
      { href: '/ressources/analyseurs/analyseur-de-memoire/', label: 'Tester l’Analyseur de mémoire gratuit' },
      { href: '/partenaires/ecoles/', label: 'Retour aux 7 Partenaires École' }
    ]
  },

  euridis: {
    slug: 'euridis',
    categorySlug: 'ecoles',
    name: 'Euridis Business School',
    seoTitle: "Euridis x Alkymya : Diriger l'IA & Agents | Partenaires",
    seoDescription:
      "Deux journées IA à Euridis (B3 & Mastère) : 80 % de TP finalisé, site en ligne le Jour 1, mesure AWA et agent commercial le Jour 2.",
    keywords:
      'Euridis Business School IA, formation IA Euridis, agent harness, harness engineering, Capital IA, Cyril Garnier Alkymya, Claude Gemini étudiants',
    h1: "Euridis : deux journées pour apprendre à diriger l'IA, puis à en mesurer la valeur",
    lead: "À Euridis Business School, les étudiants de B3 et de Mastère ne suivent pas un cours sur l'IA : ils la mettent au travail. Deux journées, une règle : « l'IA exécute, vous dirigez. » Et une idée centrale : le modèle est interchangeable, le harnais ne l'est pas.",
    roleSummary:
      "Depuis deux ans, Alkymya intervient à Euridis Business School auprès des promotions B3 et Mastère sur un format intensif de deux jours. Environ 80 % des étudiants vont jusqu'au bout du TP — parfois sur tablette ou smartphone — et conçoivent dès la deuxième journée le harnais complet de leurs propres agents commerciaux avec Claude ou Gemini.",
    whySelected: [
      {
        title: "Une pédagogie par l'objectif, jamais par le mode d'emploi",
        text: "Les étudiants apprennent à rédiger leur guide de style et leur harnais d'agent sans modèle fourni : on leur donne l'objectif, pas le moyen, afin qu'ils gardent la direction."
      },
      {
        title: 'Du vocabulaire Capital IA à la mise en ligne réelle',
        text: "Dès le Jour 1, chacun enquête avec sources vérifiées (Perplexity, Deep Research, NotebookLM), conçoit un guide de style et publie un vrai site web présenté en battle de pitchs de deux minutes."
      },
      {
        title: 'Mesure économique et agent harness en mode agence',
        text: "Le Jour 2 transforme la classe en agence face à un vrai site : quiz moteurs vs assistants, AI Overviews, coût en tokens via AWA Cloud, conception d'un agent commercial et analyse de valeur."
      }
    ],
    jointActions: [
      {
        title: "Jour 1 : de l'observation sourcée à un site en ligne",
        detail:
          "Matinée Capital IA, recherche sourcée Perplexity/Deep Research, NotebookLM sans hallucination + podcast audio, fonctionnement LLM (tokens, embeddings, attention, RAG) et création ; après-midi mise en ligne d'un site avec guide de style et battle de pitchs."
      },
      {
        title: 'Jour 2 : mode agence, mesure AWA et agents commerciaux',
        detail:
          "Quiz moteurs/assistants, enquête sans IA → AI Overviews → navigateurs IA, mesure du coût documentaire en tokens avec AWA Cloud, construction du harnais d'un agent commercial avec Claude ou Gemini et note de synthèse."
      },
      {
        title: 'Maîtrise de l’agent harness et du Capital IA',
        detail:
          "Chaque groupe conçoit les 5 briques du harnais (instructions, outils, mémoire, boucle, garde-fous) sans modèle prédéfini et présente une proposition de développement commercial assisté par l'IA."
      }
    ],
    measurableResults: [
      {
        metric: '~80 %',
        label: 'Étudiants allant jusqu’au bout du TP',
        context: "Constat mesuré depuis deux ans en B3 et Mastère à Euridis Business School (y compris sur tablette ou smartphone)"
      },
      {
        metric: '2 jours',
        label: 'De l’observation à l’agent commercial',
        context: "Jour 1 : site web en ligne + pitch 2 min · Jour 2 : mesure tokens/AWA + agent harness Claude ou Gemini"
      },
      {
        metric: '5 briques',
        label: 'Architecture Agent Harness complète',
        context: "Instructions, outils, mémoire, boucle et garde-fous conçus par les groupes sans modèle fourni"
      }
    ],
    audience: [
      'Étudiants de B3 et Mastère d’Euridis Business School en ingénierie d’affaires et vente B2B',
      'Directions pédagogiques de grandes écoles souhaitant passer de la conférence IA à la direction d’agents',
      'Équipes commerciales et marketing d’entreprises adaptant le format à leur pile métier'
    ],
    ctaLabel: 'Visiter euridis-ecole.com',
    ctaUrl: 'https://www.euridis-ecole.com/',
    secondaryLinks: [
      { href: '/alchimistes/cyril-garnier/', label: 'Cyril Garnier, concepteur de la formation' },
      { href: '/partenaires/outils/awa-cloud/', label: 'Découvrir AWA Cloud (mesure Markdown & tokens)' },
      { href: '/partenaires/ecoles/', label: 'Retour aux 7 Partenaires École' }
    ]
  },

  'objectif-alternance': {
    slug: 'objectif-alternance',
    categorySlug: 'insertion',
    name: 'Objectif Alternance',
    seoTitle: 'Objectif Alternance x Alkymya : Insertion & IA | Partenaires',
    seoDescription:
      'Partenariat Objectif Alternance (Kendra Martine) et Alkymya : coaching emploi TPE/PME, alternance et Analyseur de CV IA gratuit en production.',
    keywords:
      'Objectif Alternance, Kendra Martine, Analyseur de CV IA, recrutement alternant TPE PME, insertion professionnelle Alkymya',
    h1: 'Objectif Alternance : relier l’IA pratique et le coaching humain vers l’emploi',
    lead: "Fondé par Kendra Martine, Alchimiste associée d'Alkymya, Objectif Alternance accompagne les TPE/PME dans leur recrutement d'alternants et prépare les candidats à défendre leur candidature avec des outils concrets.",
    roleSummary:
      "Objectif Alternance est le partenaire insertion officiel d'Alkymya. Alors que le studio forme les apprenants aux usages de l'IA générative et met en ligne des outils ouverts comme l'Analyseur de CV, Kendra Martine transforme cette maîtrise technique en placement concret en entreprise et en accompagnement humain sur-mesure.",
    whySelected: [
      {
        title: 'Connaissance fine des TPE et PME',
        text: "Contrairement aux plateformes généralistes, Objectif Alternance connaît les réalités des dirigeants de petites et moyennes entreprises qui manquent de temps pour filtrer les profils."
      },
      {
        title: 'L’IA comme accélérateur, jamais comme masque',
        text: "Le partenariat interdit les CV standardisés sans sincérité : l'Analyseur de CV sert à révéler la pertinence réelle d'un parcours face à une fiche de poste avant le coaching humain."
      },
      {
        title: 'Double légitimité terrain & pédagogique',
        text: "Forte de 7 ans d'expérience en stratégie marketing en entreprise et d'une pratique régulière d'enseignante, Kendra Martine maîtrise les attentes des recruteurs comme celles des étudiants."
      }
    ],
    jointActions: [
      {
        title: "Co-conception d'usage autour de l'Analyseur de CV gratuit",
        detail: "L'outil web analysercvpro.alkymya.co associe directement l'analyse automatique du CV face à une offre cible et la passerelle vers l'accompagnement humain d'Objectif Alternance."
      },
      {
        title: 'Coaching emploi et préparation aux entretiens',
        detail: "Accompagnement des étudiants en recherche d'alternance et des profils en reconversion pour structurer leur discours, valoriser leurs projets IA et cibler les bonnes entreprises."
      },
      {
        title: 'Interventions et ateliers employabilité',
        detail: "Ateliers pratiques sur le positionnement personnel, la recherche ciblée et l'usage éthique des assistants IA dans les candidatures."
      }
    ],
    measurableResults: [
      {
        metric: '0 €',
        label: "Accès ouvert à l'Analyseur de CV",
        context: 'Disponible librement sans inscription préalable sur analysercvpro.alkymya.co'
      },
      {
        metric: '7 ans',
        label: 'Expérience marketing & entreprise',
        context: 'Expertise opérationnelle portée par Kendra Martine auprès des PME/TPE'
      },
      {
        metric: '100 %',
        label: 'Double boucle Outil + Humain',
        context: 'Diagnostic algorithmique instantané relayé par un coaching personnalisé'
      }
    ],
    audience: [
      'Étudiants en Bachelor et Master en recherche d’alternance en Île-de-France',
      'Dirigeants de TPE et PME cherchant un alternant opérationnel en marketing, commerce ou digital',
      'Adultes en reconversion professionnelle souhaitant sécuriser leur positionnement CV'
    ],
    ctaLabel: 'Visiter objectifalternance.fr',
    ctaUrl: 'https://www.objectifalternance.fr/',
    secondaryLinks: [
      { href: '/ressources/analyseurs/analyseur-de-cv/', label: 'Tester l’Analyseur de CV gratuit' },
      { href: '/alchimistes/kendra-martine/', label: 'Fiche Alchimiste de Kendra Martine' },
      { href: '/partenaires/insertion/', label: 'Retour au pôle Insertion & Alternance' }
    ]
  },

  inatec: {
    slug: 'inatec',
    categorySlug: 'formations-certifiees',
    name: 'INATEC',
    seoTitle: 'Alkymya x INATEC : Portage Qualiopi & OPCO | Partenaires',
    seoDescription:
      'Partenariat Alkymya x INATEC (NDA 11771056077, certifié Qualiopi) : 5 capsules vidéo et financement OPCO jusqu’à 100 % pour vos formations IA en entreprise.',
    keywords:
      'INATEC, Alkymya INATEC, formation IA OPCO, organisme partenaire certifié Qualiopi, NDA 11771056077',
    h1: 'INATEC x Alkymya : portage Qualiopi et formations IA finançables OPCO',
    lead: "INATEC est l'organisme de formation et CFA partenaire certifié Qualiopi (certification ICPF, NDA 11771056077) avec lequel Alkymya déploie des formations IA en entreprise finançables par votre OPCO jusqu'à 100 %.",
    roleSummary:
      "Alkymya n'est pas un organisme de formation et ne détient pas la certification Qualiopi en son nom propre. Pour que nos clients PME et ETI bénéficient d'une prise en charge OPCO rigoureuse tout en conservant nos programmes pratiques animés par Cyril Garnier et nos alchimistes, INATEC assure l'ingénierie administrative, la contractualisation et la conformité Qualiopi.",
    whySelected: [
      {
        title: 'Clarification juridique et administrative totale',
        text: "Le numéro de déclaration d'activité (NDA 11771056077) et la certification Qualiopi sont portés sans ambiguïté par INATEC, garantissant des dossiers OPCO conformes."
      },
      {
        title: 'Ancre territoriale partagée en Seine-et-Marne et Île-de-France',
        text: "CFA et organisme ancré sur le territoire francilien, INATEC facilite la mise en œuvre rapide des conventions inter ou intra-entreprise."
      },
      {
        title: 'Complémentarité entre conformité et pratique studio',
        text: "INATEC sécurise le cadre réglementaire, le suivi des présences et les bilans, pendant qu'Alkymya apporte le terrain opérationnel (agents IA, RAG, création visuelle, IA Act)."
      }
    ],
    jointActions: [
      {
        title: 'Portage des parcours Formation Core IA (14 h)',
        detail: "Montage administratif des sessions de 4 demi-journées couvrant prompt engineering avancé, création visuelle, rédaction stratégique et prototypage d'outils."
      },
      {
        title: 'Série de 5 capsules vidéo conjointes Alkymya x INATEC',
        detail: "Cinq formats courts dédiés à la performance opérationnelle des PME : Partenariat d'Avenir, Efficacité Augmentée, Synergie Créative, Le Futur en Marche et Performance Digitale."
      },
      {
        title: 'Accompagnement du montage OPCO de bout en bout',
        detail: "De l'identification du besoin entreprise jusqu'à la remise de la convention et des attestations de réalisation nécessaires au remboursement OPCO."
      }
    ],
    measurableResults: [
      {
        metric: 'Qualiopi',
        label: 'Certification portée par INATEC',
        context: 'Certification qualité délivrée au titre des actions de formation & apprentissage (ICPF)'
      },
      {
        metric: "Jusqu'à 100 %",
        label: 'Prise en charge OPCO possible',
        context: 'Selon les critères et plafonds annuels de votre OPCO de branche'
      },
      {
        metric: '5 capsules',
        label: 'Série vidéo Alkymya x INATEC',
        context: 'Démonstrations terrain des usages IA en PME et accompagnement dirigeant'
      }
    ],
    audience: [
      'Dirigeants de PME et ETI souhaitant former leurs équipes avec financement OPCO',
      'Responsables RH et formation cherchant un partenaire réactif certifié Qualiopi',
      'Équipes opérationnelles (marketing, commerce, administratif) passant aux workflows IA'
    ],
    ctaLabel: 'Découvrir inatec.fr',
    ctaUrl: 'https://www.inatec.fr/',
    secondaryLinks: [
      { href: '/ateliers/', label: 'Voir le détail de la Formation Core IA (14 h)' },
      { href: '/contact/', label: 'Demander un devis avec montage OPCO' },
      { href: '/partenaires/formations-certifiees/', label: 'Retour au pôle Formations Certifiées' }
    ],
    videos: [
      {
        title: "Partenariat d'Avenir",
        description:
          "Introduction de notre collaboration avec INATEC, organisme partenaire certifié Qualiopi, alliant excellence pédagogique et IA de pointe pour rendre les formations finançables OPCO.",
        url: 'https://res.cloudinary.com/dokzioyu4/video/upload/v1780954428/reel_01_v2_3_zwqjnw.mp4'
      },
      {
        title: 'Efficacité Augmentée',
        description:
          "Optimisation des processus et automatisation intelligente : démonstrations concrètes de gains de temps hebdomadaires pour les équipes métiers.",
        url: 'https://res.cloudinary.com/dokzioyu4/video/upload/v1780954633/reel_02_p2_2_ggfpvz.mp4'
      },
      {
        title: 'Synergie Créative',
        description:
          "Intégration créative des outils génératifs au sein des environnements collaboratifs pour stimuler l'autonomie des apprenants et managers.",
        url: 'https://res.cloudinary.com/dokzioyu4/video/upload/v1780954632/reel_03_v2_2_bms3f4.mp4'
      },
      {
        title: 'Le Futur en Marche',
        description:
          "Comment transformer les défis organisationnels en opportunités grâce aux modèles génératifs et à un encadrement pragmatique sur le terrain.",
        url: 'https://res.cloudinary.com/dokzioyu4/video/upload/v1780954634/reel_01_p2_2_stdxyh.mp4'
      },
      {
        title: 'Performance Digitale',
        description:
          "Mise en œuvre concrète de solutions IA de pointe et impact direct sur la performance opérationnelle des PME accompagnées.",
        url: 'https://res.cloudinary.com/dokzioyu4/video/upload/v1780954634/reel_04_v2_2_ozedom.mp4'
      }
    ]
  },

  'awa-cloud': {
    slug: 'awa-cloud',
    categorySlug: 'outils',
    name: 'AWACLOUD',
    seoTitle: 'AWACLOUD : Documents & RAG Local | Partenaires Alkymya',
    seoDescription:
      'Partenaire technologique AWACLOUD : bibliothèques et logiciels français pour convertir PDF, Word et Excel en Markdown localement sans fuite de données.',
    keywords:
      'AWACLOUD, AWA Convert, AWA Viewer, AWA Notepad, AWA Writer, Markdown RAG local, souveraineté IA France',
    h1: "AWACLOUD : vos documents, lisibles par l'IA, sans quitter votre ordinateur",
    lead: "Un éditeur français (fondé en 2016) qui publie des bibliothèques et applications pour lire, convertir, signer et vérifier vos fichiers Word, Excel, PowerPoint, PDF et OpenDocument. Tout s'exécute localement : aucun fichier n'est envoyé à l'extérieur.",
    roleSummary:
      "AWACLOUD est le partenaire technologique recommandé par Alkymya pour la préparation documentaire des pipelines RAG et des assistants IA confidentiels.",
    whySelected: [
      {
        title: 'Confidentiel par conception',
        text: "Le traitement se fait sur vos machines ou directement dans le navigateur. Rien n'est envoyé à AWA ni à un serveur tiers."
      },
      {
        title: 'Souverain et auditable',
        text: "Éditeur français fondé en 2016, sans dépendance cloud opaque : vous gardez la maîtrise de l'ensemble de la chaîne documentaire."
      },
      {
        title: 'Simple à intégrer',
        text: "Une bibliothèque légère plutôt qu'une infrastructure lourde : aucun serveur LibreOffice ou conteneur de conversion complexe à maintenir."
      }
    ],
    jointActions: [
      {
        title: 'Qualification de conversion RAG local (AWA Convert)',
        detail: "Mesure interne réalisée sur un rapport PDF de 39 pages (773 Ko) : conversion en moins d'une seconde en local vers 86 187 caractères de Markdown structuré sur 309 blocs."
      },
      {
        title: 'Réduction des coûts de tokens en entreprise',
        detail: "Grâce au découpage par titres (Markdown structuré), l'assistant IA ne reçoit que 1 000 à 3 000 tokens pertinents par question au lieu de 25 000."
      },
      {
        title: 'Cas pratique en ateliers IA & conformité',
        detail: "Démonstration des logiciels hors ligne (AWA Viewer, AWA Notepad, AWA Writer) pour sensibiliser les équipes aux architectures locales souveraines."
      }
    ],
    measurableResults: [
      {
        metric: '< 1 sec',
        label: 'Conversion locale 39 pages',
        context: 'Mesure interne Alkymya sur PDF 773 Ko vers Markdown structuré (309 blocs)'
      },
      {
        metric: '1k–3k tokens',
        label: 'Contexte injecté au RAG',
        context: 'Contre ~25 000 tokens si le rapport complet brut était envoyé à chaque requête'
      },
      {
        metric: '0 fichier',
        label: 'Envoyé sur un serveur tiers',
        context: 'Exécution locale intégrale dans le navigateur ou en bibliothèque'
      }
    ],
    audience: [
      'Équipes techniques et DSI concevant un assistant RAG interne sur contrats ou procédures',
      'Cabinets de conseil, juridiques ou RH traitant des documents confidentiels',
      'Participants de nos ateliers souhaitant utiliser des outils gratuits sans fuite de données'
    ],
    ctaLabel: 'Découvrir awacloud.com',
    ctaUrl: 'https://awacloud.com/',
    secondaryLinks: [
      { href: '/partenaires/outils/onecub/', label: 'Voir aussi notre partenaire Onecub (Data Spaces)' },
      { href: '/partenaires/outils/', label: 'Retour au pôle Outils & Technologies' },
      { href: '/contact/', label: 'Discuter d’un pipeline RAG souverain' }
    ]
  },

  onecub: {
    slug: 'onecub',
    categorySlug: 'outils',
    name: 'Onecub',
    categoryBadge: undefined,
    seoTitle: 'Onecub x Alkymya : Data Spaces & RGPD | Partenaires',
    seoDescription:
      'Onecub, fondé par Olivier Dion (Alchimiste Alkymya) : Data Spaces souverains, conformité RGPD, standards GAIA-X et gouvernance des données IA.',
    keywords:
      'Onecub, Olivier Dion, Data Spaces souverains, GAIA-X, conformité RGPD IA, gouvernance données Europe',
    h1: 'Onecub : bâtir des espaces de données souverains et conformes pour l’IA européenne',
    lead: "Fondée par Olivier Dion, Alchimiste associé d'Alkymya, Onecub est un pionnier français et européen des Data Spaces souverains, de la portabilité des données et de la conformité réglementaire (RGPD, Data Act, GAIA-X).",
    roleSummary:
      "Quand une organisation souhaite croiser des jeux de données entre partenaires industriels ou mobiliser l'IA sans perdre le contrôle de ses données, la gouvernance devient centrale. Olivier Dion et Onecub apportent à Alkymya et ses clients cette expertise de niveau européen.",
    whySelected: [
      {
        title: 'Expertise reconnue par les institutions européennes',
        text: "Intervenant régulier auprès de la Commission Européenne, de GAIA-X, de MyData et du Forum sur la Gouvernance de l'Internet (IGF), Olivier Dion anticipe les standards applicables."
      },
      {
        title: 'Réalisations sectorielles concrètes',
        text: "Déploiement d'espaces de données souverains dans des secteurs stratégiques tels que la mobilité, l'énergie, le courrier (Lab Postal) et l'agriculture."
      },
      {
        title: 'Alignement avec l’IA Act et la souveraineté',
        text: "Complète parfaitement nos ateliers Option C (Éthique & IA Act) et les architectures locales d'AWACLOUD sur la protection de l'actif informationnel."
      }
    ],
    jointActions: [
      {
        title: 'Conseil en gouvernance des données et conformité RGPD / IA',
        detail: "Éclairage réglementaire et architectural pour les dirigeants de PME/ETI et porteurs de projets intégrant des données tierces ou personnelles."
      },
      {
        title: 'Références publiques et conférences partagées',
        detail: "Valorisation des interventions d'Olivier Dion (TEDxLaBaule, MyData Online, publication « Data de confiance » pour The Digital New Deal)."
      },
      {
        title: 'Passerelle avec les alchimistes et programmes studio',
        detail: "Contribution aux réflexions stratégiques du collectif Alkymya sur la donnée de confiance et les modèles économiques européens de la data."
      }
    ],
    measurableResults: [
      {
        metric: 'GAIA-X / CE',
        label: 'Écosystème de standardisation',
        context: 'Travaux et interventions directs auprès des instances européennes et MyData'
      },
      {
        metric: 'RGPD & Data Act',
        label: 'Conformité by-design',
        context: 'Modèles de portabilité et consentement vérifiable de la donnée personnelle'
      },
      {
        metric: '3+ secteurs',
        label: 'Domaines stratégiques',
        context: 'Mobilité, énergie, agriculture et transformation numérique souveraine'
      }
    ],
    audience: [
      'Directions juridiques, DPO et DSI préparant la mise en conformité IA Act et Data Act',
      'Consortiums industriels ou territoriaux souhaitant partager des données sans plateforme US',
      'Dirigeants et startups du programme New Business MVP manipulant des données sensibles'
    ],
    ctaLabel: 'Découvrir onecub.com',
    ctaUrl: 'https://onecub.com/',
    secondaryLinks: [
      { href: '/alchimistes/olivier-dion/', label: 'Profil complet d’Olivier Dion' },
      { href: '/partenaires/outils/awa-cloud/', label: 'Voir aussi AWACLOUD (Conversion locale)' },
      { href: '/partenaires/outils/', label: 'Retour au pôle Outils & Technologies' }
    ]
  } as PartnerDetailContent
};

export function getPartnersByCategory(categorySlug: PartnerCategorySlug): PartnerEntry[] {
  return allPartners.filter((p) => p.categorySlug === categorySlug);
}

export function getPartnerCategoryMeta(categorySlug: string): PartnerCategoryMeta | undefined {
  return partnerCategories.find((c) => c.slug === categorySlug);
}

export function getPartnerDetail(categorySlug: string, partnerSlug: string): PartnerDetailContent | undefined {
  const detail = partnerDetails[partnerSlug];
  if (!detail || detail.categorySlug !== categorySlug) return undefined;
  return detail;
}
