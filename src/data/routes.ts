import { alchimistes } from './alchimistes';
import { faqCategories } from './faq';

export interface RouteContentSection {
  h2: string;
  paragraphs: string[];
  listItems?: string[];
}

export interface InternalLink {
  href: string;
  label: string;
}

export interface RouteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface RouteData {
  path: string;
  title: string; // strictly <= 60 characters
  description: string; // strictly 140-155 characters
  ogTitle?: string;
  ogDescription?: string;
  h1: string;
  ogImage: string;
  lastmod: string;
  schemaType: string;
  images?: RouteImage[];
  content: {
    leadParagraph: string;
    sections: RouteContentSection[];
    internalLinks: InternalLink[];
  };
}

export const routes: RouteData[] = [
  {
    path: '/',
    title: "Formation IA en entreprise en Île-de-France — Alkymya",
    description: "Alkymya, studio d'expertise et de création IA : ateliers IA finançables OPCO via nos partenaires certifiés Qualiopi, agents IA et accompagnement.",
    h1: "Déployez l'intelligence artificielle au service de vos équipes.",
    ogImage: "https://alkymya.co/og-image.jpg",
    lastmod: "2026-11-15",
    schemaType: "WebPage",
    images: [
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1794758649/duo_office_bifqwq.jpg",
        alt: "Cyril Garnier et Léonie Egesipe, co-fondateurs d'Alkymya — formation IA en entreprise",
        width: 1200,
        height: 675,
        caption: "Cyril Garnier et Léonie Egesipe, co-fondateurs d'Alkymya — le binôme qui accompagne vos équipes sur le terrain."
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758192982/66cffcd8-15f1-415f-b423-9f428d63e22f_gqjd53.png",
        alt: "Cyril Garnier — Fondateur d'Alkymya, studio d'expertise et de création IA",
        width: 600,
        height: 750,
        caption: "Cyril Garnier — Directeur Associé & Fondateur"
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1762252984/725879fe-afa3-4afa-a900-229030c002de_1_xoep2v.png",
        alt: "Léonie Egesipe — Co-fondatrice et Directrice Artistique IA chez Alkymya",
        width: 600,
        height: 750,
        caption: "Léonie Egesipe — Cheffe de Projet Digital & DA IA"
      }
    ],
    content: {
      leadParagraph: "Alkymya est un studio d'expertise et de création IA : ateliers IA finançables OPCO via nos organismes partenaires certifiés Qualiopi, création d'agents IA sur mesure, stratégie SEO et GEO pour votre visibilité Google AI.",
      sections: [
        {
          h2: "Accompagnement intelligence artificielle en trois piliers",
          paragraphs: [
            "Alkymya, studio d'expertise et de création IA, guide les dirigeants, équipes métiers et étudiants à travers trois axes complémentaires : Explorer les technologies d'IA générative, Transformer les processus quotidiens avec des prototypes fonctionnels, et Partager les compétences clés pour une autonomie durable.",
            "Chaque intervention privilégie la pratique immédiate sur les outils de travail réels de l'entreprise : rédaction structurée, automatisation documentaire, agents autonomes connectés au CRM et déploiement de sites éditoriaux visibles sur Google et dans Google AI Overviews."
          ],
          listItems: [
            "Explorer : ateliers d'acculturation, veille SEO IA et analyse des cas d'usage rentables par service.",
            "Transformer : conseil stratégique, création d'agents IA sur mesure et prototypage no-code / low-code.",
            "Partager : formations sur mesure finançables OPCO via nos partenaires certifiés Qualiopi, business games et mentorat de talents."
          ]
        },
        {
          h2: "Ce que vous repartez avec et nos trois formats d'intervention",
          paragraphs: [
            "Nous intervenons directement dans vos locaux en Seine-et-Marne, à Paris et partout en Île-de-France, ou en classe virtuelle synchrone. Chaque participant repart avec des prompts métiers testés sur ses propres dossiers, des agents IA opérationnels et un protocole de conformité IA Act.",
            "Nos résultats ne sont pas théoriques : nos trois études de cas éditoriales en production (thelittle77.fr, thelittle75.fr et thelittle83.fr) totalisent 387 URLs indexables et plus de 279 000 mots publiés sans publicité ni achat de liens."
          ],
          listItems: [
            "Formation Core IA (14h en 4 demi-journées) : portée avec notre partenaire certifié Qualiopi INATEC, éligible OPCO jusqu'à 100 %, pour maîtriser le prompt engineering, la création de contenus et les premiers workflows.",
            "Ateliers spécialisés (3h30) : création de 3 agents IA métiers autonomes, application web interne no-code connectée à Gemini/GPT ou audit de conformité IA Act.",
            "New Business MVP (6 mois à 200 € / mois) : accompagnement en binôme par Cyril Garnier et Léonie Egesipe pour valider votre offre auprès de vrais clients avant d'investir."
          ]
        },
        {
          h2: "Ancrage en Île-de-France et impact pédagogique",
          paragraphs: [
            "Présent en Île-de-France et partout en France, Alkymya collabore avec les PME, les grands groupes (SNCF, Fondation GRDF, Morning) et les grandes écoles (HETIC, Ynov Campus, IÉSEG, CFA Itis, Paris École de Management).",
            "Plus de 450 professionnels et étudiants ont déjà suivi nos programmes, avec un taux de recommandation de 99,3 % sur nos ateliers pratiques."
          ]
        }
      ],
      internalLinks: [
        { href: "/oeuvres/", label: "Voir nos trois études de cas éditoriales (thelittle77, 75, 83)" },
        { href: "/ateliers/", label: "Découvrir nos ateliers et formations IA (OPCO via partenaires Qualiopi)" },
        { href: "/newbusiness/", label: "Rejoindre le programme New Business MVP" },
        { href: "/alchimistes/", label: "Rencontrer les fondateurs d'Alkymya" },
        { href: "/contact/", label: "Contacter Alkymya" }
      ]
    }
  },
  {
    path: '/ia',
    title: "Génération IA : une génération, de nouveaux usages | Alkymya",
    description: "Comment les étudiants intègrent-ils l'IA ? Trois années d'enquête (2024-2026) auprès de 1 082 étudiants : pratiques, attentes et inquiétudes.",
    h1: "Génération IA : une génération, de nouveaux usages",
    ogImage: "https://alkymya.co/og-ia.jpg",
    lastmod: "2026-11-16",
    schemaType: "WebApplication",
    images: [
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1777491204/Capture_GENERATION_IA_lrxvdx.png",
        alt: "Étude Génération IA et création d'agents IA sur mesure par le studio création IA Alkymya",
        width: 1000,
        height: 620,
        caption: "Méthodologie Génération IA 2024-2026 — Enquêtes et personas"
      }
    ],
    content: {
      leadParagraph: "Comment les étudiants intègrent-ils l’IA dans leurs études et leur quotidien ? Trois années d’enquête, de 2024 à 2026, auprès de 1 082 étudiants pour comprendre leurs pratiques, leurs attentes et leurs inquiétudes.",
      sections: [
        {
          h2: "À qui s'adresse notre studio création IA et Générateur d'Idées ?",
          paragraphs: [
            "Cette suite d'outils d'idéation s'adresse en priorité aux dirigeants d'entreprise, directeurs de l'innovation, chefs de produit, consultants en stratégie et étudiants des grandes écoles qui souhaitent dépasser les simples requêtes génériques pour éprouver de vraies hypothèses de marché.",
            "Que vous soyez en phase de cadrage d'un nouveau produit numérique, à la recherche de personas clients documentés ou en quête de cas d'usage opérationnels pour vos équipes métiers, le Générateur IA offre un cadre interactif rigoureux, sans jargon superflu et immédiatement mobilisable."
          ],
          listItems: [
            "Dirigeants et entrepreneurs : tester l'appétence d'un segment de marché et identifier les fonctionnalités indispensables avant tout investissement.",
            "Responsables marketing et produit : simuler des réactions utilisateurs et formaliser des personas comportementaux nuancés.",
            "Formateurs et enseignants : illustrer en direct auprès d'apprenants la puissance de l'ingénierie de prompt contextualisée."
          ]
        },
        {
          h2: "Que livre concrètement cette suite de démonstrateurs ?",
          paragraphs: [
            "Le Générateur IA n'est pas un concept théorique : c'est un ensemble d'applications concrètes connectées aux modèles de langage les plus avancés du marché (Google Gemini et OpenAI GPT), calibrés avec nos propres bibliothèques de contraintes métiers.",
            "En naviguant dans l'outil, vous accédez à des livrables exploitables immédiatement pour nourrir vos réunions stratégiques ou vos dossiers de cadrage."
          ],
          listItems: [
            "Simulateur de personas interactif : cinq profils types d'usagers de l'IA (explorateur engagé, usager pragmatique, apprentis connectés, designers créatifs, observateurs prudents) avec scénarios vidéo et fiches de comportement.",
            "Moteurs de prompts avancés : formulaires guidés pour générer des propositions de valeur, des matrices de risques et des scripts de pitch.",
            "Rapport prospectif téléchargeable : accès direct à notre étude exclusive « Génération IA 2026 » analysant les mutations technologiques et organisationnelles à venir.",
            "Quiz d'auto-évaluation : outil de diagnostic interactif pour situer la maturité IA de vos collaborateurs et de vos processus."
          ]
        },
        {
          h2: "Comment se déroule l'expérimentation d'un cas d'usage ?",
          paragraphs: [
            "L'utilisation du Générateur IA suit une méthodologie en trois étapes éprouvée lors de nos interventions en entreprise : observation, confrontation et synthèse opérationnelle.",
            "Vous commencez par choisir une problématique métier précise (par exemple la qualification automatisée de prospects ou la génération de synthèses documentaires). L'outil sollicite alors des agents spécialisés qui confrontent votre idée à des contraintes réalistes de budget, de conformité RGPD et d'adoption utilisateur. En moins de dix minutes, vous obtenez une vue panoramique des forces et des angles morts de votre initiative."
          ]
        },
        {
          h2: "Ce que change l'idéation assistée par IA pour vos équipes",
          paragraphs: [
            "Dans la plupart des organisations, passer de l'idée au premier cadrage demande entre trois et six semaines de réunions préparatoires. Grâce à l'ingénierie de prompt contextualisée développée par Alkymya, ce délai est ramené à quelques heures.",
            "Ce gain de temps ne se fait jamais au détriment de la rigueur : l'intelligence artificielle est paramétrée pour agir comme un contradicteur exigeant, qui pointe les failles du modèle économique plutôt que de valider passivement des hypothèses complaisantes. Vos équipes abordent ensuite leurs ateliers de prototypage avec une vision lucide et argumentée."
          ]
        },
        {
          h2: "Preuves de terrain et retours d'expérience vérifiables",
          paragraphs: [
            "Les démonstrateurs présentés sur cette page ont été testés et enrichis auprès de plus de 450 professionnels et étudiants issus d'écoles reconnues comme HETIC, Ynov Campus, IÉSEG et CFA Itis.",
            "Sur nos médias de territoire comme TheLittle77, l'agent d'analyse de marché adossé à cette technologie a produit plus de 400 simulations de personas documentés en moins de dix minutes, permettant de calibrer la ligne éditoriale sans mobiliser des semaines d'enquêtes terrain préalables."
          ]
        }
      ],
      internalLinks: [
        { href: "/ateliers/", label: "Créer vos propres agents IA en atelier" },
        { href: "/oeuvres/", label: "Voir nos réalisations réelles et mesurables" },
        { href: "/ressources/", label: "Consulter nos guides et méthodologies IA" },
        { href: "/contact/", label: "Demander une démonstration privée" }
      ]
    }
  },
  {
    path: '/oeuvres',
    title: "Études de cas SEO, IA & création éditoriale — Alkymya",
    description: "Trois études de cas mesurées (thelittle77, 75 et 83), agents IA autonomes en production et direction artistique IA par Alkymya en France.",
    ogTitle: "Études de cas SEO, IA & création éditoriale — Alkymya",
    ogDescription: "Trois études de cas mesurées (thelittle77, 75 et 83), agents IA autonomes en production et direction artistique IA par Alkymya en France.",
    h1: "Études de cas SEO, agents IA & création éditoriale.",
    ogImage: "https://alkymya.co/og-oeuvres.jpg",
    lastmod: "2026-11-15",
    schemaType: "CollectionPage",
    images: [
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1788941703/PHOTO-2026-09-08-06-54-57_ynrbkt.jpg",
        alt: "Ciel de Seine-et-Marne — étude de cas éditoriale thelittle77.fr (216 URLs, 149 392 mots)",
        width: 1200,
        height: 800,
        caption: "thelittle77.fr — Créateur Cyril Garnier"
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1788941670/Logo_thelittle75.fr_d1tmes.jpg",
        alt: "Paris — étude de cas éditoriale thelittle75.fr (39 URLs, 27 839 mots)",
        width: 1000,
        height: 667,
        caption: "thelittle75.fr — Créateur Léonie Egesipe"
      },
      {
        src: "https://res.cloudinary.com/dyooqwryq/image/upload/v1794124042/thelittle83-logo_op3yvm.svg",
        alt: "Logo thelittle83.fr — atlas naturaliste bilingue du Var (132 URLs, 101 967 mots)",
        width: 600,
        height: 360,
        caption: "thelittle83.fr — Créateur Cyril Garnier"
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1767128574/kk25As37_y8rw27.png",
        alt: "Alkymya Vision #01 — Composition chromatique & géométrie lumineuse",
        width: 1000,
        height: 1000,
        caption: "Direction artistique Alkymya — Cyril Garnier & Léonie Egesipe"
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1767128268/n0DtTbCd_n4wyfq.png",
        alt: "Alkymya Vision #02 — Matières brutes & grain argentique",
        width: 1000,
        height: 1000
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1767127553/MVpvT2RW_s1n5ul.png",
        alt: "Alkymya Vision #03 — Drapé algorithmique & fluidité textile",
        width: 1000,
        height: 1000
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1767127109/ya7Z8TI3_iaygii.png",
        alt: "Alkymya Vision #04 — Profil sculptural & ombres portées",
        width: 1000,
        height: 1000
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1767127394/kXMN69tr_iskmoq.png",
        alt: "Alkymya Vision #05 — Scénographie numérique & abstraction",
        width: 1000,
        height: 1000
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1767126747/8YHpK93A_c1xlyq.png",
        alt: "Alkymya Vision #06 — Épure minérale & palette signature",
        width: 1000,
        height: 1000
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1767007589/WhatsApp_Image_2025-12-13_at_19.07.53_beeekx.jpg",
        alt: "Alkymya Vision #07 — Instant décisif & matière de terrain",
        width: 1000,
        height: 750
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1770044606/4333e2ce-3ca9-43ca-9498-5149956f55a8_pzltlj.jpg",
        alt: "Métropolia #01 — Vertiges d'acier & verticalité cyberpunk",
        width: 1000,
        height: 1000,
        caption: "Métropolia — Narration générative urbaine"
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1770044606/d54d1975-3bf2-43bf-83da-c03d78f7ab96_f0jcm2.jpg",
        alt: "Métropolia #02 — Nocturne cyberpunk & flux de données",
        width: 1000,
        height: 1000
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1770044606/1e9ba31e-8c38-48c3-ab3c-26b3337a305d_ynksne.jpg",
        alt: "Métropolia #03 — Perspectives cinématiques & architecture brute",
        width: 1000,
        height: 1000
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1770044606/IMG_2742_yfl8fu.jpg",
        alt: "Métropolia #04 — Passages secrets & interstices urbains",
        width: 1000,
        height: 1000
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1770044606/fcecdf84-531c-4531-85bd-405b0c861c7d_tpdkpz.jpg",
        alt: "Métropolia #05 — Brume industrielle & horizon crépusculaire",
        width: 1000,
        height: 1000
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1770044605/etudiante_tbrydi.jpg",
        alt: "Métropolia #06 — Silhouette citadine & errance narrative",
        width: 1000,
        height: 1000
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1770044605/IMG_2525_jsdqwk.jpg",
        alt: "Métropolia #07 — Réalité brute & texture urbaine originelle",
        width: 1000,
        height: 1000
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1772112521/e23iKTwc_u35aql.png",
        alt: "Portrait Angela Davis — Direction artistique IA & sérigraphie contemporaine",
        width: 1000,
        height: 1000,
        caption: "Portraits & Figures historiques — Série sérigraphique IA"
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1772112521/d9eRiVt6_pmcd6l.png",
        alt: "Portrait Joséphine Baker — Résistance, engagement patriotique & audace",
        width: 1000,
        height: 1000
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1772112521/jnya8Go8_e6eczn.png",
        alt: "Portrait Katherine Johnson — Génie mathématique & conquête spatiale",
        width: 1000,
        height: 1000
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1772112521/ucGK9H1u_xjx5t7.png",
        alt: "Portrait Rosa Parks — Dignité inébranlable & résistance pacifique",
        width: 1000,
        height: 1000
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1772112520/moVD6Z2d_pm4jnx.png",
        alt: "New York 70s — Émancipation culturelle & énergie urbaine",
        width: 1000,
        height: 1000
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1772112520/grq2NVff_rcr9vi.png",
        alt: "Portrait Shirley Chisholm — Pionnière politique & Maison Blanche",
        width: 1000,
        height: 1000
      }
    ],
    content: {
      leadParagraph: "Alkymya, studio d'expertise et de création IA, publie ici les résultats mesurés de ses trois études de cas éditoriales en production (thelittle77.fr, thelittle75.fr et thelittle83.fr), ses quatre agents IA autonomes et ses séries de direction artistique générative.",
      sections: [
        {
          h2: "Trois études de cas SEO & GEO mesurées en production (relevé du 12 nov. 2026)",
          paragraphs: [
            "Plutôt que d'avancer des promesses abstraites, Alkymya exploite trois sites éditoriaux territoriaux comme laboratoires grandeur nature. Chacun valide notre architecture sémantique, nos agents IA éditoriaux et notre pilotage Google Search & AI Overviews sans achat publicitaire ni backlinks payants.",
            "À ce jour, ces trois plateformes cumulent 387 URLs indexables, 279 198 mots éditoriaux publiés et 1 219 images documentées sur le terrain."
          ],
          listItems: [
            "thelittle77.fr (Créateur : Cyril Garnier) — Construit en 3 mois : 216 URLs, 149 392 mots, 652 images, 275 000 vues mensuelles sur Facebook sans publicité, 1ère page Google sur les paysages de Seine-et-Marne et position 7 devant Wikipedia sur Moulin de Belle-Assise, avec 93 apparitions AI Overviews.",
            "thelittle75.fr (Créateur : Léonie Egesipe) — Construit en 2 mois : 39 URLs, 27 839 mots, 53 images (-91 % sur le poids des visuels), 2ème résultat Google sur chronique Belleville Paris récit et score technique SEO passé de 45 à 77 en 48 heures.",
            "thelittle83.fr (Créateur : Cyril Garnier) — Lancé le 8 novembre 2026 en 24 heures : 132 URLs bilingues, 101 967 mots, 514 images, indexé par Google AI en moins d'une heure et 1er résultat image dès le lendemain sur aigrette garzette Hyères."
          ]
        },
        {
          h2: "Synthèse comparative : délais, volumes mesurés et positionnement Google AI",
          paragraphs: [
            "Comparés côte à côte, ces trois déploiements montrent comment la vitesse de mise en production s'articule avec la profondeur documentaire : trois mois pour ancrer un média régional de 216 pages en Seine-et-Marne, deux mois pour structurer un index patrimonial parisien optimisé techniquement, et vingt-quatre heures pour publier un atlas naturaliste bilingue de 132 fiches dans le Var.",
            "Dans chacun des cas, les images sont servies au format adaptatif avec dimensions déclarées et chargement progressif, tandis que les données structurées Schema.org relient chaque fiche locale à une entité éditoriale vérifiable."
          ]
        },
        {
          h2: "Comment ces résultats alimentent votre offre dans New Business MVP",
          paragraphs: [
            "La méthode éprouvée sur thelittle77.fr, thelittle75.fr et thelittle83.fr est directement transférée aux dirigeants et indépendants qui rejoignent le programme New Business MVP sur 6 mois. Dès le troisième mois, votre vitrine ou offre MVP est architecturée pour capter de vraies intentions de recherche Google et être citée par les moteurs génératifs.",
            "Ce socle éditorial et technique évite de brûler du budget en publicité payante avant d'avoir prouvé la traction commerciale de votre offre."
          ]
        },
        {
          h2: "Quatre agents IA autonomes en production chaque semaine",
          paragraphs: [
            "Ces sites s'appuient sur quatre agents IA spécialisés exploités au quotidien chez Alkymya : l'agent d'analyse de marché SODA (400 réponses synthétiques en moins de 10 minutes), l'agent de veille SEO et AI Overviews, l'agent de création éditoriale sous contraintes terrain et le pipeline autonome de newsletter."
          ]
        },
        {
          h2: "Direction artistique photo vidéo IA : trois séries originales",
          paragraphs: [
            "L'outil ne remplace pas l'œil : nos trois albums photographiques et génératifs explorent l'équilibre entre cadrage réel, lumière studio et synthèse algorithmique.",
            "Découvrez les 7 visuels d'Alkymya Vision conçus en binôme par Cyril Garnier et Léonie Egesipe, les 7 scènes cyberpunk documentaires de Métropolia et les 6 portraits sérigraphiques de la série Portraits et Figures Historiques (Angela Davis, Joséphine Baker, Katherine Johnson, Rosa Parks, New York 70s et Shirley Chisholm)."
          ]
        }
      ],
      internalLinks: [
        { href: "/newbusiness/", label: "Appliquer cette méthode avec New Business MVP" },
        { href: "/ateliers/", label: "Se former à nos outils lors d'un atelier IA pratique" },
        { href: "/alchimistes/", label: "Rencontrer Cyril Garnier et Léonie Egesipe" },
        { href: "/contact/", label: "Lancer un projet éditorial ou agent IA →" }
      ]
    }
  },
  {
    path: '/ateliers',
    title: "Ateliers IA pour équipes en Île-de-France — Alkymya",
    description: "Ateliers IA pratiques en Île-de-France : formation IA finançable OPCO via partenaires certifiés Qualiopi, agents IA métiers et conformité IA Act.",
    h1: "Atelier IA pratique & formation IA en entreprise.",
    ogImage: "https://alkymya.co/og-ateliers.jpg",
    lastmod: "2026-11-15",
    schemaType: "Course",
    content: {
      leadParagraph: "Ateliers IA pour équipes en Île-de-France avec Alkymya, studio d'expertise et de création IA : formations IA finançables OPCO via nos partenaires certifiés Qualiopi (tels qu'INATEC), audit Capital IA et création d'agents IA métiers.",
      sections: [
        {
          h2: "À qui s'adressent nos ateliers IA pratiques, audits Capital IA et formations OPCO ?",
          paragraphs: [
            "Nos formations sont conçues pour les professionnels qui refusent les discours purement conceptuels et veulent acquérir des automatismes opérationnels concrets : cadres dirigeants, managers d'équipes, consultants indépendants, responsables marketing, communicants, créatifs et chefs de projet technique.",
            "Aucun prérequis en développement informatique n'est nécessaire. Nous adaptons la pédagogie aux réalités quotidiennes de votre organisation pour que chaque participant reparte avec des outils directement branchés sur ses propres tâches de travail."
          ],
          listItems: [
            "Dirigeants et DRH : accélérer la montée en compétences globale de l'entreprise tout en garantissant la sécurité des données internes.",
            "Chefs de projet et consultants : automatiser la recherche documentaire, la formalisation de livrables et la veille stratégique.",
            "Équipes marketing et communication : multiplier par trois la production de contenus textuels, visuels et graphiques fidèles à la charte de marque."
          ]
        },
        {
          h2: "Ce qui vous est concrètement livré à l'issue de chaque module",
          paragraphs: [
            "Contrairement aux formations magistrales classiques où l'on se contente de diapositives théoriques, nos ateliers reposent sur une règle simple : vous repartez avec des actifs numériques tangibles, testés et fonctionnels dès le lendemain matin.",
            "Chaque participant bénéficie d'un accès permanent aux espaces collaboratifs Alkymya et à l'ensemble des ressources pédagogiques mises à jour en continu."
          ],
          listItems: [
            "Formation Core IA (14h) : bibliothèque de prompts maîtres prêts à l'emploi, guides pas-à-pas de prompt engineering, supports complets, attestation de fin de formation (via nos partenaires certifiés Qualiopi) et suivi post-formation pendant 1 mois.",
            "Option A — Agents IA (3h30) : conception et déploiement effectif de 3 agents intelligents autonomes connectés à Slack, Notion ou CRM, scénarios Make/Zapier exportables et documentation technique.",
            "Option B — App No-Code (3h30) : une application web interne déployée sur URL sécurisée, interconnectée aux API de Google Gemini ou OpenAI GPT, avec formation à l'administration.",
            "Option C — Éthique & IA Act (3h30) : matrice d'audit de conformité réglementaire, grille de classification des risques et protocole de sécurisation des données d'entreprise."
          ]
        },
        {
          h2: "Comment se déroule concrètement la formation (présentiel & distanciel) ?",
          paragraphs: [
            "Nous privilégions un ratio strict de 80 % de pratique pour 20 % d'apports méthodologiques. Les sessions peuvent se tenir en présentiel dans vos locaux (en Seine-et-Marne, à Paris et partout en Île-de-France), dans nos espaces partenaires, ou en classe virtuelle synchrone haute interaction.",
            "Le programme Core IA de 14 heures est articulé en 4 demi-journées modulables pour préserver l'activité de vos équipes. Les options spécialisées de 3h30 s'organisent sur une demi-journée dédiée et intense, focalisée sur un objectif unique : livrer un dispositif opérationnel avant la fin de la séance."
          ]
        },
        {
          h2: "Ce que nos ateliers changent dans votre organisation au quotidien",
          paragraphs: [
            "Le bénéfice le plus immédiatement mesurable est le gain de temps : nos apprenants constatent en moyenne une économie de 1 à 2 jours de travail par semaine sur la production de leurs livrables récurrents (synthèses de dossiers, comptes-rendus, propositions commerciales, créations visuelles).",
            "Au-delà du gain horaire, nos ateliers instaurent une culture de l'autonomie et de la rigueur : vos collaborateurs ne subissent plus la vague de l'intelligence artificielle mais savent exactement quel outil choisir, comment formuler une consigne infaillible et comment repérer les hallucinations."
          ]
        },
        {
          h2: "Preuves de performance, partenaires certifiés Qualiopi et financements OPCO",
          paragraphs: [
            "Alkymya n'est pas certifié Qualiopi directement : nous collaborons avec des organisations partenaires certifiées Qualiopi — dont l'école INATEC — pour permettre une prise en charge financière pouvant atteindre 100 % par votre Opérateur de Compétences (OPCO).",
            "Nos chiffres parlent d'eux-mêmes : 99,3 % des participants recommandent nos ateliers, avec plus de 175 professionnels formés et évalués lors de la dernière campagne annuelle et une note de progression continue de +1,6 point sur douze mois. De prestigieuses institutions comme HETIC, Ynov, l'IÉSEG et le CFA Itis nous confient régulièrement leurs promotions."
          ]
        }
      ],
      internalLinks: [
        { href: "/newbusiness/", label: "Découvrir le programme New Business MVP" },
        { href: "/oeuvres/", label: "Voir nos réalisations concrètes en IA" },
        { href: "/faq/", label: "Consulter les réponses sur les financements OPCO" },
        { href: "/contact/", label: "Demander un devis de formation pour votre équipe" }
      ]
    }
  },
  {
    path: '/ressources',
    title: "Ressources IA, Études & Analyseurs Gratuits | Alkymya",
    description: "Découvrez nos 5 études (Génération IA 2024–2026, Gemini 4, Doctrine IAG), 4 analyseurs IA gratuits, Business Game NoNo BanaBa et outils.",
    h1: "Ressources IA, études et outils gratuits en production.",
    ogImage: "https://alkymya.co/og-ressources.jpg",
    lastmod: "2026-11-24",
    schemaType: "CollectionPage",
    images: [
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1788941994/0c39dd0a7f91200361816f2b88d68802_cwzov0.jpg",
        alt: "Kendra Martine — Fondatrice d'Objectif Alternance et partenaire de l'Analyseur de CV Alkymya",
        width: 400,
        height: 400,
        caption: "Kendra Martine — Partenaire Analyseur de CV & Coaching Alternance"
      }
    ],
    content: {
      leadParagraph: "Bibliothèque ouverte d'Alkymya, studio d'expertise et de création IA : quatre portes d'entrée réunissant nos cinq études complètes en HTML et PDF, quatre analyseurs IA documentés et gratuits, le business game NoNo BanaBa et les outils technologiques partenaires.",
      sections: [
        {
          h2: "1. Nos études (Génération IA 2024 → 2026, Gemini 4 & Doctrine IAG)",
          paragraphs: [
            "Trois années d'enquête longitudinale menée auprès de 1 082 étudiants franciliens, nos analyses géopolitiques (La Doctrine IAG en PDF et podcast audio de 5 min 43) et l'Interview Gemini 4 sont publiées en pages HTML indexées avec tableaux complets, limites méthodologiques et PDF téléchargeables."
          ],
          listItems: [
            "Génération IA 2024 → 2026 (n = 1 082 répondants, 5 écoles) : adoption à 98,1 %, split-stack 52,3 %, ambivalence 3:1.",
            "Génération IA 2025 (n = 387) : 5 personas comportementaux et top 5 outils.",
            "Génération IA 2024 (n = 326) : vague fondatrice sur l'adoption académique (> 90 %).",
            "La Doctrine IAG (PDF + podcast 5 min 43) & Interview Gemini 4 (retour terrain + benchmarks Google DeepMind V9)."
          ]
        },
        {
          h2: "2. Nos Analyseurs IA gratuits en production",
          paragraphs: [
            "Quatre applications web accessibles sans inscription obligatoire, dotées chacune d'une fiche de méthode expliquant ce qu'elles font, leurs limites et nos recommandations de confidentialité."
          ],
          listItems: [
            "Analyseur de photo (analyseurdephoto.alkymya.co) : composition, recadrage et descriptions alt SEO fidèles.",
            "Analyseur de CV (analysercvpro.alkymya.co) avec Kendra Martine d'Objectif Alternance : adéquation CV / offre d'alternance.",
            "Analyseur de mémoire (analyseurdememoire.alkymya.co) : pré-lecture méthodologique et cohérence de plan.",
            "Analyseur de site web — Alkymya Scan (scan.alkymya.co/#analyseur) : audit 360° UX, SEO & GEO, E-E-A-T, sécurité HTTP et RGPD/RGAA."
          ]
        },
        {
          h2: "3. Business Game NoNo BanaBa & Outils partenaires",
          paragraphs: [
            "Expérimentez la stratégie data et le web-marketing Gen Z avec le Business Game NoNo BanaBa (nonobanaba.netlify.app), et retrouvez nos partenaires technologiques souverains AWACLOUD et Onecub directement dans le pôle dédié des Partenaires."
          ]
        }
      ],
      internalLinks: [
        { href: "/ressources/etudes/", label: "Nos études IA (Génération IA, Gemini 4, Doctrine IAG)" },
        { href: "/ressources/analyseurs/", label: "Nos Analyseurs IA gratuits (Photo, CV, Mémoire, Site web)" },
        { href: "/ressources/business-game/", label: "Business Game NoNo BanaBa" },
        { href: "/partenaires/outils/", label: "Outils partenaires souverains (AWACLOUD & Onecub)" }
      ]
    }
  },
  {
    path: '/ressources/etudes',
    title: "Études IA : Génération IA, Gemini 4 & IAG | Alkymya",
    description: "Consultez les 5 études publiées par Alkymya avec tableaux HTML et PDF : Génération IA 2026 (1 082 étudiants), 2025, 2024, Doctrine IAG et Gemini 4.",
    h1: "Nos études Génération IA, Gemini 4 & Doctrine IAG.",
    ogImage: "https://alkymya.co/og-ressources.jpg",
    lastmod: "2026-11-20",
    schemaType: "CollectionPage",
    content: {
      leadParagraph: "L'intégralité de nos recherches empiriques et analyses prospectives publiées en pages HTML indexées : question de recherche, méthodologie, tableaux chiffrés HTML, limites assumées, recommandations datées et exports PDF.",
      sections: [
        {
          h2: "Cinq études accessibles en HTML, tableaux structurés et PDF",
          paragraphs: [
            "Contrairement à de simples PDF isolés, chaque publication Alkymya expose directement ses métriques vérifiables et ses tableaux de données pour éclairer dirigeants, DRH, responsables pédagogiques et étudiants."
          ],
          listItems: [
            "Génération IA 2024 → 2026 (Rapport longitudinal, n = 1 082) : adoption à 98,1 %, split-stack 52,3 %, ambivalence productive 3:1.",
            "Génération IA 2025 (Les 5 Personas, n = 387) : segmentation comportementale 16–25 ans.",
            "Génération IA 2024 (Enquête fondatrice, n = 326) : adoption académique initiale > 90 %.",
            "La Doctrine IAG (PDF + Podcast audio 5 min 43) : les 5 piliers géopolitiques et énergétiques de la course à l'AGI.",
            "Interview Gemini 4 (V9) : retour terrain indépendant de Cyril Garnier et benchmarks Google DeepMind."
          ]
        }
      ],
      internalLinks: [
        { href: "/ressources/etudes/generation-ia-2026/", label: "Étude Génération IA 2024 → 2026 (1 082 étudiants)" },
        { href: "/ressources/etudes/generation-ia-2025/", label: "Étude Génération IA 2025 : Les 5 Personas" },
        { href: "/ressources/etudes/generation-ia-2024/", label: "Étude Génération IA 2024 : Enquête fondatrice" },
        { href: "/ressources/etudes/doctrine-iag/", label: "La Doctrine IAG (Étude, tableau & podcast)" },
        { href: "/ressources/etudes/interview-gemini-4/", label: "Interview Gemini 4 : Retour d'expérience & V9" }
      ]
    }
  },
  {
    path: '/ressources/etudes/generation-ia-2026',
    title: "Étude Génération IA 2024–2026 (1 082 étudiants) | Alkymya",
    description: "Rapport longitudinal Alkymya (n=1 082, 5 écoles) : 98,1 % d'adoption, 61 % d'usage quotidien, split-stack Claude, ambivalence 3:1 et TikTok Shop.",
    h1: "Génération IA 2024 → 2026 : 1 082 étudiants français face à l’IA et à l’attention",
    ogImage: "https://res.cloudinary.com/dokzioyu4/image/upload/v1777491204/Capture_GENERATION_IA_lrxvdx.png",
    lastmod: "2026-11-20",
    schemaType: "Dataset",
    content: {
      leadParagraph: "Trois années d'enquête continue menée par Cyril Garnier auprès de 1 082 étudiants de cinq grandes écoles franciliennes révèlent une adoption saturée (98,1 %), le basculement vers le multi-outils (52,3 % en split-stack) et un paradoxe majeur : 21 % d'ambivalence productive.",
      sections: [
        {
          h2: "Question de recherche & méthodologie (3 vagues · n = 1 082)",
          paragraphs: [
            "Design longitudinal par cohortes successives indépendantes administré en ligne entre mai 2024 et avril 2026 auprès d'étudiants Bachelor à Master issus de 5 grandes écoles d'Île-de-France anonymisées (codes A à E), croisé avec 10 benchmarks internationaux."
          ],
          listItems: [
            "Vague 1 (mai–déc. 2024) : n = 326 répondants.",
            "Vague 2 (janv.–déc. 2025) : n = 387 répondants.",
            "Vague 3 (sept. 2025–avr. 2026) : n = 369 répondants (98,1 % d'adoption, 61,0 % d'usage quotidien).",
            "Segmentation K-means (k = 3) : Power Users (41,2 %), Productivistes (17,9 %), Observateurs (40,9 %)."
          ]
        },
        {
          h2: "Limites assumées & recommandation opérationnelle (juin / nov. 2026)",
          paragraphs: [
            "L'étude porte sur des cohortes successives franciliennes (non un panel individuel suivi sur 3 ans) avec un score silhouette K-means modéré (0,16). En clair, interdire l'IA échoue : la seule réponse robuste associe socle multi-modèles, signalétique transparente rouge/orange/vert et évaluation par la trace et l'oral."
          ]
        }
      ],
      internalLinks: [
        { href: "/ressources/etudes/", label: "Toutes nos études IA" },
        { href: "/ressources/etudes/generation-ia-2025/", label: "Comparer avec Génération IA 2025 (5 Personas)" },
        { href: "/partenaires/ecoles/", label: "Nos 7 partenaires École" },
        { href: "/ia/", label: "Simulateur de personas sur /ia/" }
      ]
    }
  },
  {
    path: '/ressources/etudes/generation-ia-2025',
    title: "Étude Génération IA 2025 : 5 Personas Étudiants | Alkymya",
    description: "Enquête Génération IA 2025 (387 répondants 16–25 ans : HETIC, IÉSEG, ISCOM, Ynov) : 5 personas comportementaux, top 5 outils et 4 recommandations pédagogiques.",
    h1: "Génération IA 2025 : cinq personas pour comprendre les usages étudiants de l’IA",
    ogImage: "https://res.cloudinary.com/dokzioyu4/image/upload/v1777491204/Capture_GENERATION_IA_lrxvdx.png",
    lastmod: "2026-11-20",
    schemaType: "Dataset",
    content: {
      leadParagraph: "Réalisée auprès de 387 répondants âgés de 16 à 25 ans (HETIC, IÉSEG, ISCOM, Ynov…), l'édition 2025 de Génération IA dépasse le simple taux d'adoption pour modéliser cinq comportements types face aux outils génératifs.",
      sections: [
        {
          h2: "Segmentation en 5 personas et top 5 des outils (n = 387)",
          paragraphs: [
            "Les usages se structurent autour de cinq profils distincts et d'un classement dominé par ChatGPT (95 %), Gemini (55 %), Midjourney (40 %), Microsoft Copilot (35 %) et Perplexity (30 %)."
          ],
          listItems: [
            "Explorateurs engagés (15–20 %) : 5+ outils chaînés, 40 % paient déjà des licences.",
            "Pragmatiques productifs (40–45 %) : cœur majoritaire des promotions (gain de temps).",
            "Apprentis connectés (20–25 %) : 16–20 ans, usage scolaire et ChatGPT gratuit.",
            "Créatifs numériques (10–15 %) & Observateurs prudents (5–10 %)."
          ]
        }
      ],
      internalLinks: [
        { href: "/ressources/etudes/", label: "Toutes nos études IA" },
        { href: "/ressources/etudes/generation-ia-2026/", label: "Lire la vague 3 (2024 → 2026, n = 1 082)" },
        { href: "/ia/", label: "Visionner les 5 personas en vidéo sur /ia/" }
      ]
    }
  },
  {
    path: '/ressources/etudes/generation-ia-2024',
    title: "Étude Génération IA 2024 (n=326 étudiants) | Alkymya",
    description: "Vague 1 Génération IA (2024, 326 répondants Bachelor, Master et enseignants) : usages académiques (>90 %), outils et pédagogie « IA First ».",
    h1: "Génération IA 2024 : l’étude fondatrice sur le paradoxe de l’IA à l’école",
    ogImage: "https://res.cloudinary.com/dokzioyu4/image/upload/v1777491204/Capture_GENERATION_IA_lrxvdx.png",
    lastmod: "2026-11-20",
    schemaType: "Dataset",
    content: {
      leadParagraph: "Première vague empirique menée entre mai et décembre 2024 auprès de 326 répondants (Bachelor, Master, enseignants) révélant dès 2024 plus de 90 % d'adoption académique et 80 % d'usage hors des cours.",
      sections: [
        {
          h2: "Résultats fondateurs (Vague 1 · n = 326)",
          paragraphs: [
            "Alors que de nombreux établissements tentaient d'interdire les LLM, 95 % des répondants utilisaient l'IA pour la recherche d'information, 90 % pour la rédaction/synthèse et 70 % la jugeaient déjà indispensable pour leur carrière."
          ],
          listItems: [
            "Adoption académique > 90 % dès le second semestre 2024.",
            "Usage hors des études : 80 % ; tricherie spontanément citée à seulement ~5 %.",
            "Recommandation mars 2025 : adopter une pédagogie « IA First » plutôt que le contrôle policier."
          ]
        }
      ],
      internalLinks: [
        { href: "/ressources/etudes/", label: "Toutes nos études IA" },
        { href: "/ressources/etudes/generation-ia-2025/", label: "Lire la vague 2 (2025 : 5 Personas)" },
        { href: "/ressources/etudes/generation-ia-2026/", label: "Lire le rapport complet 2024 → 2026" }
      ]
    }
  },
  {
    path: '/ressources/etudes/doctrine-iag',
    title: "La Doctrine IAG : Géopolitique & Stratégie IA | Alkymya",
    description: "Analyse de Cyril Garnier : les 5 piliers de la Doctrine IAG américaine (déréglementation, énergie, puces, minerais, Europe) en HTML, PDF et audio.",
    h1: "La Doctrine IAG : décrypter la stratégie géopolitique et énergétique de la course à l’AGI",
    ogImage: "https://alkymya.co/og-ressources.jpg",
    lastmod: "2026-11-20",
    schemaType: "Article",
    content: {
      leadParagraph: "Construite sous forme de dialogue analytique entre Cyril Garnier et Gemini le 5 novembre 2025, cette étude relie déréglementation américaine, politique énergétique, contrôle des semi-conducteurs et souveraineté des minerais critiques.",
      sections: [
        {
          h2: "Les 5 piliers de la « Doctrine de l'IAG » & podcast audio (5 min 43)",
          paragraphs: [
            "Des décisions apparemment disparates (abrogation du décret 14110, relance énergétique pour data centers, restrictions GPU NVIDIA/AMD, accords bilatéraux sur les minerais critiques et pression sur l'AI Act européen) obéissent à une stratégie cohérente d'avance vers l'IAG."
          ],
          listItems: [
            "1. Moteur national : déréglementation et « doctrine de la vélocité ».",
            "2. Alimentation énergétique : électricité massive, gaz hors-réseau, nucléaire et fusion.",
            "3. Endiguement géopolitique des puces & 4. Chaîne d'approvisionnement des minerais critiques.",
            "5. Gestion des alliés : pression sur l'AI Act, le DMA et le DSA européens — urgence de briques souveraines (AWACLOUD, Onecub)."
          ]
        }
      ],
      internalLinks: [
        { href: "/ressources/etudes/", label: "Toutes nos études IA" },
        { href: "/partenaires/outils/awa-cloud/", label: "Brique souveraine documentaire : AWACLOUD" },
        { href: "/partenaires/outils/onecub/", label: "Brique souveraine data : Onecub" },
        { href: "/ateliers/", label: "Atelier Option C : Éthique & IA Act" }
      ]
    }
  },
  {
    path: '/ressources/etudes/interview-gemini-4',
    title: "Interview Gemini 4 : Retour Terrain IA | Alkymya",
    description: "Retour d'expérience de Cyril Garnier sur Gemini 4 : agents IA, inclusion pédagogique, limites cloud vs local et benchmarks officiels Google. PDF V9.",
    h1: "Gemini 4 à l'épreuve du terrain : regard croisé avec Cyril Garnier",
    ogImage: "https://alkymya.co/og-ressources.jpg",
    lastmod: "2026-11-20",
    schemaType: "Article",
    content: {
      leadParagraph: "Retour d'expérience indépendant de Cyril Garnier (enseignant en IA, fondateur d'Alkymya et de CYRIL GARNIER CONSULTING) sur la famille Gemini 4, croisé avec les données officielles de performance Google et Google DeepMind (Automne 2026 · Version V9).",
      sections: [
        {
          h2: "Synthèse des 4 axes de l'entretien",
          paragraphs: [
            "L'entretien aborde sans filtre l'adoption pratique des agents Gemini 4 en atelier, la vitesse d'exécution au quotidien et la souveraineté intellectuelle face à des outils toujours plus autonomes.",
            "Sans lien commercial avec Google, Cyril Garnier confronte Gemini 4 Hydrogen et Gemini Live aux environnements de développement agentiques locaux (Claude Code, Genspark, OpenClaw)."
          ],
          listItems: [
            "Démocratisation et inclusion : création rapide de micro-agents Gmail/Drive et réduction de la barrière technique, tout en alertant sur la fracture d'accès pour les publics hors enseignement supérieur.",
            "Confiance née de l'instantané : préparation de supports pédagogiques complets et vérifiés en moins de deux minutes, et interaction vocale fluide via Gemini Live.",
            "Souveraineté intellectuelle : priorité donnée à l'esprit critique, à l'équité des chances et à la capacité à ne pas déléguer l'intégralité de son raisonnement à l'IA.",
            "Multimodalité et limites cloud : analyse vidéo en temps réel sur smartphone via Gemini Live, et périmètre d'action cloud des agents Gemini comparé aux outils CLI locaux."
          ]
        },
        {
          h2: "Les quatre enseignements clés et données officielles Google DeepMind",
          paragraphs: [
            "Le dossier technique V9 rassemble les spécifications officielles de la gamme Gemini 4 (Argon, Carbon, Hydrogen, Neon) lancée à l'automne 2026 ainsi que les benchmarks mesurés sur Google AI Studio et Vertex AI."
          ],
          listItems: [
            "Débit moyen de Gemini 4 Hydrogen : 156 tokens/seconde pour une latence initiale (TTFT) de 1,78 s à 2,26 s et un contexte unifié de 1M tokens.",
            "Fiabilité agentique : taux d'erreur d'appel d'outils de 0,04 % sur Google AI Studio (Priority), 0,01 % sur les sorties structurées et -81 % d'actions excessives par rapport à Gemini 3.8 Flash.",
            "Raisonnement et véracité : 51 (High) / 54 (xHigh) sur Artificial Analysis Intelligence Index, 78,0 % sur CritPt v2 High et 91,3 % de taux de non-hallucination (AA-Omniscience).",
            "Téléchargement intégral : le document complet Interview Gemini 4 (V9) est librement téléchargeable au format PDF."
          ]
        }
      ],
      internalLinks: [
        { href: "/ressources/etudes/", label: "Retour à la rubrique Nos études" },
        { href: "/ressources/", label: "Explorer toutes nos ressources IA" },
        { href: "/ateliers/", label: "Découvrir nos ateliers d'agents IA" }
      ]
    }
  },
  {
    path: '/ressources/analyseurs',
    title: "Analyseurs IA : Photo, CV, Mémoire & Site Web | Alkymya",
    description: "Lancez nos 4 analyseurs IA gratuits en production (Photo, CV, Mémoire, Site web Alkymya Scan) avec mode d’emploi, limites et confidentialité.",
    h1: "Nos Analyseurs IA gratuits en production.",
    ogImage: "https://alkymya.co/og-ressources.jpg",
    lastmod: "2026-11-24",
    schemaType: "CollectionPage",
    content: {
      leadParagraph: "Quatre applications web gratuites accessibles sans inscription préalable : chacune dispose de sa page dédiée détaillant son usage, son public cible, ses limites et nos consignes de confidentialité.",
      sections: [
        {
          h2: "Quatre analyseurs IA documentés et reliés au domaine principal",
          paragraphs: [
            "Conçus par le studio Alkymya pour expérimenter immédiatement l'intelligence artificielle générative et le diagnostic web sur des cas réels, nos analyseurs couvrent le traitement visuel, l'employabilité, la rigueur académique et l'audit SEO/GEO/RGPD."
          ],
          listItems: [
            "Analyseur de photo (analyseurdephoto.alkymya.co) : composition, recadrage et descriptions alt SEO fidèles.",
            "Analyseur de CV (analysercvpro.alkymya.co), en partenariat avec Kendra Martine d'Objectif Alternance : adéquation CV / fiche de poste.",
            "Analyseur de mémoire (analyseurdememoire.alkymya.co) : pré-lecture méthodologique et cohérence problématique/plan.",
            "Analyseur de site web — Alkymya Scan (scan.alkymya.co/#analyseur) : audit 360° sur 5 piliers (UX, SEO & GEO, E-E-A-T, sécurité HTTP, RGPD/RGAA)."
          ]
        }
      ],
      internalLinks: [
        { href: "/ressources/analyseurs/analyseur-de-photo/", label: "Analyseur de photo IA" },
        { href: "/ressources/analyseurs/analyseur-de-cv/", label: "Analyseur de CV IA (avec Objectif Alternance)" },
        { href: "/ressources/analyseurs/analyseur-de-memoire/", label: "Analyseur de mémoire IA" },
        { href: "/ressources/analyseurs/analyseur-de-site-web/", label: "Analyseur de site web (Alkymya Scan)" },
        { href: "/ressources/", label: "Retour à toutes nos ressources" }
      ]
    }
  },
  {
    path: '/ressources/analyseurs/analyseur-de-photo',
    title: "Analyseur de Photo IA Gratuit | Ressources Alkymya",
    description: "Outil IA gratuit en ligne : analysez vos photographies, préparez vos retouches de cadrage et générez des descriptions alt SEO exploitables sans inscription.",
    h1: "Analyseur de photo IA : explorer, analyser et structurer vos visuels en un instant",
    ogImage: "https://alkymya.co/og-ressources.jpg",
    lastmod: "2026-11-20",
    schemaType: "SoftwareApplication",
    content: {
      leadParagraph: "Développé par le studio Alkymya à l'intersection de la pratique photographique de terrain (TheLittle77, TheLittle83, TheLittle75) et de la vision par ordinateur, l'Analyseur de photo aide à lire, qualifier et préparer vos images pour le web et vos séries éditoriales.",
      sections: [
        {
          h2: "Ce qu'il fait, pour qui, comment l'utiliser et ce qu'il ne fait pas",
          paragraphs: [
            "L'application examine instantanément votre image dans le navigateur sur analyseurdephoto.alkymya.co pour proposer une lecture de composition, des pistes de recadrage et des textes alternatifs (alt) SEO fidèles.",
            "Il ne remplace pas un photographe professionnel ni un logiciel d'étalonnage avancé, et ne doit pas servir à identifier des visages privés. Aucune inscription n'est requise."
          ]
        }
      ],
      internalLinks: [
        { href: "/ressources/analyseurs/", label: "Tous nos Analyseurs IA" },
        { href: "/oeuvres/", label: "Voir nos créations photographiques TheLittle" },
        { href: "/ateliers/", label: "Atelier Direction Artistique & Visuels IA" }
      ]
    }
  },
  {
    path: '/ressources/analyseurs/analyseur-de-cv',
    title: "Analyseur de CV IA Gratuit (Objectif Alternance) | Alkymya",
    description: "Optimisez gratuitement votre CV face à une offre d’emploi ou d’alternance grâce à l’Analyseur de CV IA co-construit avec Kendra Martine.",
    h1: "Analyseur de CV IA : confrontez votre CV à l’offre cible avant de postuler",
    ogImage: "https://alkymya.co/og-ressources.jpg",
    lastmod: "2026-11-20",
    schemaType: "SoftwareApplication",
    content: {
      leadParagraph: "Conçu par Alkymya en partenariat avec Kendra Martine, fondatrice d'Objectif Alternance, cet outil gratuit passe votre CV au crible d'une offre réelle sur analysercvpro.alkymya.co.",
      sections: [
        {
          h2: "Double boucle IA + coaching humain avec Objectif Alternance",
          paragraphs: [
            "L'Analyseur de CV identifie les compétences manquantes face à la fiche de poste et suggère des reformulations orientées résultats, sans jamais inventer de faux diplômes ni conserver votre CV dans une CVthèque commerciale.",
            "Il complète le coaching humain de Kendra Martine au sein d'Objectif Alternance pour réussir les entretiens d'alternance et de reconversion."
          ]
        }
      ],
      internalLinks: [
        { href: "/partenaires/insertion/objectif-alternance/", label: "Partenariat Objectif Alternance" },
        { href: "/alchimistes/kendra-martine/", label: "Fiche de Kendra Martine" },
        { href: "/ressources/analyseurs/", label: "Tous nos Analyseurs IA" }
      ]
    }
  },
  {
    path: '/ressources/analyseurs/analyseur-de-memoire',
    title: "Analyseur de Mémoire & Thèse IA Gratuit | Alkymya",
    description: "Diagnostiquez gratuitement la structure, la problématique et la cohérence méthodologique de votre mémoire ou rapport de stage sur analyseurdememoire.alkymya.co.",
    h1: "Analyseur de mémoire : diagnostiquer la rigueur méthodologique de vos travaux",
    ogImage: "https://alkymya.co/og-ressources.jpg",
    lastmod: "2026-11-20",
    schemaType: "SoftwareApplication",
    content: {
      leadParagraph: "Conçu par Cyril Garnier à partir des jurys encadrés en grandes écoles, l'Analyseur de mémoire (analyseurdememoire.alkymya.co) aide les étudiants à vérifier la solidité de leur problématique et de leur plan avant la remise finale.",
      sections: [
        {
          h2: "Un relecteur méthodologique critique — jamais un rédacteur automatique",
          paragraphs: [
            "L'outil évalue l'alignement titre / problématique / hypothèses, signale les affirmations non sourcées et synthétise les points de vigilance pour votre soutenance.",
            "Il ne rédige pas votre mémoire à votre place, ne génère pas de fausses bibliographies et ne remplace pas les consignes de votre tuteur académique."
          ]
        }
      ],
      internalLinks: [
        { href: "/ressources/analyseurs/", label: "Tous nos Analyseurs IA" },
        { href: "/ressources/etudes/generation-ia-2026/", label: "Étude Génération IA 2026 (évaluation & intégrité)" },
        { href: "/partenaires/ecoles/", label: "Nos 7 partenaires École" }
      ]
    }
  },
  {
    path: '/ressources/analyseurs/analyseur-de-site-web',
    title: "Analyseur de Site Web IA (SEO, GEO & RGPD) | Alkymya",
    description: "Auditez gratuitement votre site web avec Alkymya Scan sur 5 piliers (UX, SEO & GEO, E-E-A-T, sécurité, RGPD/RGAA) : note sur 100 et 3 failles P0.",
    h1: "Analyseur de site web (Alkymya Scan) : audit 360° UX, SEO/GEO, E-E-A-T, sécurité & RGPD",
    ogImage: "https://alkymya.co/og-ressources.jpg",
    lastmod: "2026-11-24",
    schemaType: "SoftwareApplication",
    content: {
      leadParagraph: "Développé par le studio Alkymya sur scan.alkymya.co/#analyseur, Alkymya Scan (Version Bêta) combine une inspection technique serveur réelle multi-pages (TTFB, en-têtes HTTP, pré-rendu GPTBot, JSON-LD, /llms.txt, E-E-A-T, RGPD et RGAA) et une synthèse experte.",
      sections: [
        {
          h2: "Les 5 piliers évalués et les limites d’un diagnostic automatisé",
          paragraphs: [
            "En une requête sans inscription, Alkymya Scan inspecte vos pages clés (Contact, À propos, Mentions légales, Cas clients, Blog) et calcule une note sur 100 assortie de vos 3 failles P0 prioritaires : UX & Brand, SEO & GEO, E-E-A-T On-Page/Off-Site, Performance & 6 en-têtes de sécurité HTTP, et conformité RGPD/Consent Mode v2/RGAA.",
            "Diagnostic automatisé indicatif en lecture seule : les sites protégés par pare-feu anti-bot (Cloudflare, DataDome, Akamai) sont détectés comme bloqués afin d'éviter tout faux diagnostic, et l'outil ne remplace ni un DPO ni un test d'intrusion."
          ]
        }
      ],
      internalLinks: [
        { href: "/ressources/analyseurs/", label: "Tous nos Analyseurs IA" },
        { href: "/oeuvres/", label: "Voir nos études de cas SEO & GEO (TheLittle77, 75, 83)" },
        { href: "/contact/", label: "Réserver un échange 20 min avec Cyril Garnier" }
      ]
    }
  },
  {
    path: '/ressources/business-game',
    title: "Business Game NoNo BanaBa : Stratégie & Data | Alkymya",
    description: "NoNo BanaBa : le business game pédagogique d’Alkymya pour expérimenter data, web-marketing, IA et modèles économiques en grande école ou entreprise.",
    h1: "Business Game NoNo BanaBa : apprendre le web-marketing, la data et l’IA par la simulation",
    ogImage: "https://alkymya.co/og-ressources.jpg",
    lastmod: "2026-11-20",
    schemaType: "SoftwareApplication",
    content: {
      leadParagraph: "Conçu et animé par Alkymya autour de la marque fashion Gen Z NoNo BanaBa (nonobanaba.netlify.app), ce business game immersif place étudiants et collaborateurs aux commandes d'une croissance numérique sous contrainte de rentabilité et d'éthique IA.",
      sections: [
        {
          h2: "Un simulateur entreprenariat, acquisition & arbitrages IA",
          paragraphs: [
            "Plutôt que d'empiler des diapositives théoriques sur le web-marketing ou l'IA, les équipes gèrent en temps contraint le positionnement de la marque, le mix acquisition (TikTok Shop, social media, contenu éditorial), la lecture d'indicateurs data et les arbitrages de marge.",
            "Déployé dans nos écoles partenaires (HETIC, Ynov, IÉSEG, ISCOM, Paris École de Management) comme lors de séminaires d'équipe en entreprise, NoNo BanaBa ancre durablement les réflexes d'analyse et de décision."
          ],
          listItems: [
            "Séquence 1 (45 min) : cadrage marché, lecture des personas Gen Z et positionnement.",
            "Séquence 2 (1 h) : arbitrages budgétaires, campagnes acquisition et signaux faibles data.",
            "Séquence 3 (1 h) : production assistée par IA (charte, prompts, fiches produits) avec contrôle qualité.",
            "Séquence 4 (45 min) : soutenance devant jury et débriefing ROI / éthique."
          ]
        }
      ],
      internalLinks: [
        { href: "/ressources/", label: "Retour à toutes nos ressources" },
        { href: "/partenaires/ecoles/", label: "Voir les 7 écoles où le business game est animé" },
        { href: "/ateliers/", label: "Organiser un séminaire ou atelier en entreprise" },
        { href: "/contact/", label: "Demander une session NoNo BanaBa" }
      ]
    }
  },
  {
    path: '/alchimistes',
    title: "Experts IA France & Fondateurs Agence IA | Alkymya",
    description: "Experts IA France : Cyril Garnier, Léonie Egesipe, Véronique Landereau, Mariana Didier Laurent, Olivier Dion et Kendra Martine.",
    h1: "Experts IA France : l'équipe d'Alkymya.",
    ogImage: "https://alkymya.co/og-alchimistes.jpg",
    lastmod: "2026-11-17",
    schemaType: "AboutPage",
    images: [
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758192982/66cffcd8-15f1-415f-b423-9f428d63e22f_gqjd53.png",
        alt: "Cyril Garnier — Directeur Associé & Fondateur d'Alkymya",
        width: 600,
        height: 750,
        caption: "Cyril Garnier — Directeur Associé (cyrilgarnier.fr)"
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1762252984/725879fe-afa3-4afa-a900-229030c002de_1_xoep2v.png",
        alt: "Léonie Egesipe — Cheffe de Projet Digital & Co-Fondatrice Alkymya",
        width: 600,
        height: 750,
        caption: "Léonie Egesipe — Cheffe de Projet Digital & DA IA"
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1792763449/1792401247516_ussqzm.png",
        alt: "Véronique Landereau — Alchimiste associée Santé, Prévention & Innovation",
        width: 600,
        height: 750,
        caption: "Véronique Landereau — Santé, Prévention & MedTech"
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1794479431/WhatsApp_Image_2026-11-12_at_11.29.28_qwv5le.jpg",
        alt: "Mariana Didier Laurent — Alchimiste associée Services à la personne & Autonomie",
        width: 600,
        height: 750,
        caption: "Mariana Didier Laurent — Présidente d'Esperanta Services"
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1760374889/Photo_Olivier_Dion_reve_dk2c5e.png",
        alt: "Olivier Dion — Fondateur de Onecub & Expert Data Spaces",
        width: 600,
        height: 750,
        caption: "Olivier Dion — Expert Data & Gouvernance Européenne"
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1788941994/0c39dd0a7f91200361816f2b88d68802_cwzov0.jpg",
        alt: "Kendra Martine — Fondatrice d'Objectif Alternance & Formatrice",
        width: 600,
        height: 750,
        caption: "Kendra Martine — Recrutement Alternance & Coaching Emploi"
      }
    ],
    content: {
      leadParagraph: "Derrière Alkymya, studio d'expertise et de création IA, six alchimistes complémentaires assurent l'accompagnement IA dirigeants et indépendants, la stratégie SEO et GEO, la gouvernance data, l'insertion professionnelle, l'innovation santé et les services à la personne.",
      sections: [
        {
          h2: "Cyril Garnier — Directeur Associé & Fondateur",
          paragraphs: [
            "Consultant senior, fondateur d'Alkymya (cyrilgarnier.fr) et intervenant certifié au sein de grandes institutions académiques (HETIC, Ynov, IÉSEG, CFA Itis), Cyril Garnier apporte plus de 15 ans d'expérience dans l'accompagnement des dirigeants (ex-directeur général de SNCF Développement).",
            "Il pilote la viabilité économique des projets, le Go-to-Market du programme New Business MVP et les créations éditoriales thelittle77.fr et thelittle83.fr."
          ]
        },
        {
          h2: "Léonie Egesipe — Cheffe de Projet Digital & Directrice Artistique IA",
          paragraphs: [
            "Créatrice visuelle, scénariste et spécialiste de l'esthétique générative, Léonie Egesipe co-pilote le studio Alkymya en binôme étroit avec Cyril Garnier et dirige la stratégie de déploiement numérique.",
            "Elle supervise notamment la direction artistique de Métropolia, le média parisien thelittle75.fr et l'expérience utilisateur des programmes d'accompagnement."
          ]
        },
        {
          h2: "Véronique Landereau — Alchimiste associée, Santé, Prévention & Innovation",
          paragraphs: [
            "Fondatrice d'AvecLouise (aveclouise.fr) et formée à Gustave Roussy Éducation, Véronique Landereau consacre son activité aux projets de santé qui placent la prévention, le maintien à domicile et l'accompagnement des aidants au cœur de leur modèle.",
            "Basée à Nantes, elle évolue au quotidien dans l'écosystème MedTech et dispositifs médicaux."
          ]
        },
        {
          h2: "Mariana Didier Laurent — Alchimiste associée, Services à la personne & Autonomie",
          paragraphs: [
            "Présidente d'Esperanta Services au Plessis-Trévise (esperantaservices.fr), diplômée de l'École Supérieure d'Assurance, Mariana Didier Laurent accompagne les personnes en perte d'autonomie et leurs proches aidants.",
            "Créatrice de son entreprise en juillet 2026 après un parcours en courtage et gestion des risques, elle partage avec les porteurs de projets la réalité concrète du lancement, des agréments et du pilotage quotidien."
          ]
        },
        {
          h2: "Olivier Dion (Onecub) & Kendra Martine (Objectif Alternance)",
          paragraphs: [
            "Olivier Dion, fondateur de Onecub et pionnier européen des Data Spaces souverains (intervenant Commission Européenne et GAIA-X), apporte son expertise en gouvernance des données et conformité RGPD.",
            "Kendra Martine, fondatrice d'Objectif Alternance et formatrice marketing, relie les talents émergents aux PME en croissance via le coaching emploi, l'alternance et l'Analyseur de CV Alkymya."
          ]
        }
      ],
      internalLinks: [
        ...alchimistes.map((person) => ({
          href: `/alchimistes/${person.id}/`,
          label: `${person.name} — ${person.kicker}`
        })),
        { href: "/ateliers/", label: "Être formé par les experts d'Alkymya" },
        { href: "/newbusiness/", label: "Rejoindre le programme New Business MVP" },
        { href: "/oeuvres/", label: "Voir les réalisations des Alchimistes" },
        { href: "/contact/", label: "Échanger avec nos Alchimistes" }
      ]
    }
  },
  ...alchimistes.map((person): RouteData => ({
    path: `/alchimistes/${person.id}`,
    title: person.seoTitle,
    description: person.seoDescription,
    h1: `${person.name} — ${person.kicker}`,
    ogImage: person.image,
    lastmod: "2026-11-17",
    schemaType: "ProfilePage",
    images: [
      {
        src: person.image,
        alt: `${person.name} — ${person.role}, expert IA France Alkymya`,
        width: 480,
        height: 600,
        caption: `${person.name} — ${person.role}`
      }
    ],
    content: {
      leadParagraph: person.bio,
      sections: [
        {
          h2: `Parcours & expertise de ${person.name}`,
          paragraphs: [
            person.details,
            person.quote ? `« ${person.quote} »` : ''
          ].filter(Boolean),
          listItems: person.knowsAbout
        },
        ...(person.works.length > 0
          ? [
              {
                h2: `Réalisations et œuvres de ${person.name}`,
                paragraphs: [
                  `Retrouvez les projets, publications, réalisations et sites associés de ${person.name} au sein de l'écosystème Alkymya.`
                ],
                listItems: person.works.map((work) => `${work.label} (${work.url})`)
              }
            ]
          : [])
      ],
      internalLinks: [
        { href: "/alchimistes/", label: "Tous les Alchimistes d'Alkymya" },
        ...alchimistes
          .filter((other) => other.id !== person.id)
          .map((other) => ({
            href: `/alchimistes/${other.id}/`,
            label: `Découvrir ${other.name} — ${other.kicker}`
          })),
        { href: "/contact/", label: `Échanger avec ${person.name} et l'équipe Alkymya` }
      ]
    }
  })),
  {
    path: '/partenaires',
    title: "Partenaires IA, Écoles, OPCO & Outils | Alkymya",
    description: "Écosystème de partenaires Alkymya : 7 grandes écoles, Objectif Alternance, portage Qualiopi INATEC, Morning, CMI Systèmes, CPME 77, AWACLOUD et Onecub.",
    h1: "Partenaires formation IA, écoles & écosystème souverain.",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-23",
    schemaType: "CollectionPage",
    images: [
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1788507182/logo_objectif_code_u3otua.png",
        alt: "Logo Objectif Alternance — partenaire recrutement alternants et coaching emploi avec Alkymya",
        width: 320,
        height: 160,
        caption: "Objectif Alternance — Partenaire Insertion & Alternance"
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1777818451/WhatsApp_Image_2026-02-27_at_15.38.53_utvfxs.jpg",
        alt: "Logo INATEC — organisme partenaire certifié Qualiopi et financement OPCO avec Alkymya",
        width: 240,
        height: 120,
        caption: "INATEC — Organisme Certifié Qualiopi (OPCO)"
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785816/logo-hetic_fnt2zy.png",
        alt: "Logo HETIC — école partenaire pour ateliers IA et jurys de projets étudiants",
        width: 240,
        height: 120
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785824/ynov-campus_logo_e1ma2q.png",
        alt: "Logo Ynov Campus — école partenaire pour modules prompt engineering et hackathons IA",
        width: 240,
        height: 120
      }
    ],
    content: {
      leadParagraph: "Alkymya ne cite aucun partenaire sans lien vérifiable. Notre annuaire s'organise en six sous-hubs clairs : Partenaires École, Insertion & Alternance, Formations Certifiées & OPCO, Lieux & Coworking, Entreprises & Fondations et Outils & Technologies souveraines.",
      sections: [
        {
          h2: "Six pôles de partenaires complémentaires",
          paragraphs: [
            "Chaque catégorie regroupe les organismes, écoles, entreprises et éditeurs avec lesquels Cyril Garnier Consulting et Alkymya collaborent sur le terrain, avec liens sortants vérifiés et fiches détaillées lorsque la documentation est réunie."
          ],
          listItems: [
            "Partenaires École (7 établissements) : HETIC, Ynov Campus, IÉSEG, CFA Itis, Euridis, ISCOM, Paris École de Management.",
            "Insertion & Alternance : Objectif Alternance (fiche dédiée et Analyseur de CV IA gratuit).",
            "Formations Certifiées & OPCO : portage Qualiopi assuré par INATEC (NDA 11771056077) — fiche dédiée et 5 capsules vidéo.",
            "Lieux & Coworking : Morning (fiche dédiée) et DG Services Torcy (77200).",
            "Entreprises & Fondations : CMI Systèmes (fiche dédiée), CPME 77 (fiche dédiée), SNCF, Fondation GRDF, SEALESTER, Azimuto, AvecLouise, Esperanta Services, La fondation Flamenca, La Ressourcerie Gaillarde.",
            "Outils & Technologies souveraines : AWACLOUD (RAG et conversion locale) et Onecub (Data Spaces RGPD d'Olivier Dion)."
          ]
        }
      ],
      internalLinks: [
        { href: "/partenaires/ecoles/", label: "Partenaires École (7 établissements)" },
        { href: "/partenaires/insertion/", label: "Insertion & Alternance (Objectif Alternance)" },
        { href: "/partenaires/formations-certifiees/", label: "Formations Certifiées & OPCO (INATEC)" },
        { href: "/partenaires/lieux/", label: "Lieux & Coworking (Morning & Torcy)" },
        { href: "/partenaires/lieux/morning/", label: "Fiche Morning : ateliers IA à Paris" },
        { href: "/partenaires/entreprises/", label: "Entreprises & Fondations (10 organisations)" },
        { href: "/partenaires/entreprises/cmi-systemes/", label: "Fiche CMI Systèmes (info & cyber)" },
        { href: "/partenaires/entreprises/cpme-77/", label: "Fiche CPME 77 (matinées IA & cyber)" },
        { href: "/partenaires/outils/", label: "Outils & Technologies (AWACLOUD & Onecub)" }
      ]
    }
  },
  {
    path: '/partenaires/ecoles',
    title: "Partenaires École & Grandes Écoles IA | Alkymya",
    description: "HETIC, Ynov, IÉSEG, CFA Itis, Euridis, ISCOM et Paris École de Management : découvrez les 7 écoles partenaires où Alkymya déploie ses ateliers IA.",
    h1: "Partenaires École : 7 grandes écoles et CFA où Alkymya enseigne l’IA",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-20",
    schemaType: "CollectionPage",
    content: {
      leadParagraph: "Depuis 2024, Alkymya intervient au cœur des cursus Bachelor, Master et alternance dans sept établissements d'enseignement supérieur. Ces cours nourrissent directement notre enquête longitudinale Génération IA (1 082 étudiants interrogés).",
      sections: [
        {
          h2: "Sept établissements reliés par des modules pratiques IA",
          paragraphs: [
            "Nos intervenants animent des modules de prompt engineering, création d'agents IA, jurys et sessions Business Game NoNo BanaBa directement dans les maquettes pédagogiques."
          ],
          listItems: [
            "HETIC (Montreuil) — Interventions & jurys IA générative.",
            "Ynov Campus (Paris / Nanterre) — Modules prompt engineering & hackathons.",
            "IÉSEG School of Management — Depuis 2019 : sprint design M1, cours IA & marketing digital avancés, mentorat mémoires (100 % réussite) et incubateur.",
            "CFA Itis (Évry) — Parcours IA pour apprentis en informatique.",
            "Euridis Business School — 2 jours pour diriger l'IA, mesurer AWA/tokens et concevoir un agent harness commercial.",
            "ISCOM (Paris) — Direction artistique & création éditoriale IA.",
            "Paris École de Management — Cas pratiques & Business Game NoNo BanaBa."
          ]
        }
      ],
      internalLinks: [
        { href: "/partenaires/ecoles/euridis/", label: "Fiche Euridis : 2 jours pour diriger l'IA" },
        { href: "/partenaires/ecoles/ieseg/", label: "Fiche IÉSEG : cours, mentorat & agent SODA" },
        { href: "/partenaires/", label: "Retour au hub Nos Partenaires" },
        { href: "/ressources/etudes/generation-ia-2026/", label: "Lire l'étude Génération IA 2024 → 2026" }
      ]
    }
  },
  {
    path: '/partenaires/ecoles/ieseg',
    title: "IÉSEG x Alkymya : Innovation & Mentorat IA | Partenaires",
    description: "Intervenant en Master à l'IÉSEG depuis 2019 : sprint design M1, IA et marketing digital avancés, mentorat mémoires (100 % réussite), incubateur et agent SODA.",
    h1: "IÉSEG : innover, accompagner, mener des étudiants jusqu'au mémoire",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-20",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Intervenant dans le Master de l'IÉSEG depuis 2019, Cyril Garnier y enseigne l'innovation et l'IA, accompagne chaque année 6 à 10 étudiants dans leurs projets de création d'entreprise et leurs mémoires de consulting (100 % de réussite) avec l'agent SODA, et est mentor à l'incubateur de l'IÉSEG.",
      sections: [
        {
          h2: "Quatre façons d'intervenir à l'IÉSEG",
          paragraphs: [
            "Sprint design de rentrée des M1, cours d'innovation et d'IA & marketing digital avancés, mentorat annuel de 6 à 10 mémoires par promotion (avec deux visites en entreprise par an et des sujets comme le commerce agentique) et accompagnement de porteurs de projets à l'incubateur."
          ]
        },
        {
          h2: "Observatoire du shadow IA et agent de recherche SODA",
          paragraphs: [
            "La moitié des étudiants accompagnés travaillent sur le déploiement de l'IA dans leur propre entreprise, offrant un poste d'observation concret sur la conduite du changement et le shadow IA. L'agent SODA aide les étudiants à structurer leur étude et à challenger leurs hypothèses tout en leur laissant la direction et la signature du mémoire."
          ]
        }
      ],
      internalLinks: [
        { href: "/partenaires/ecoles/", label: "Retour aux 7 Partenaires École" },
        { href: "/alchimistes/cyril-garnier/", label: "Profil de Cyril Garnier, intervenant & mentor" },
        { href: "/ressources/analyseurs/analyseur-de-memoire/", label: "Tester l'Analyseur de mémoire gratuit" },
        { href: "/partenaires/ecoles/euridis/", label: "Voir aussi la fiche Euridis Business School" }
      ]
    }
  },
  {
    path: '/partenaires/ecoles/euridis',
    title: "Euridis x Alkymya : Diriger l'IA & Agents | Partenaires",
    description: "Deux journées IA à Euridis (B3 & Mastère) : 80 % de TP finalisé, site en ligne le Jour 1, mesure AWA et agent commercial le Jour 2.",
    h1: "Euridis : deux journées pour apprendre à diriger l'IA, puis à en mesurer la valeur",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-20",
    schemaType: "WebPage",
    content: {
      leadParagraph: "À Euridis Business School, les étudiants de B3 et de Mastère mettent l'IA au travail en deux journées autour d'une règle — l'IA exécute, vous dirigez — et d'une idée centrale : le modèle est interchangeable, le harnais ne l'est pas (~80 % de finalisation TP, y compris sur tablette ou smartphone).",
      sections: [
        {
          h2: "Jour 1 : de l'observation à un site en ligne",
          paragraphs: [
            "Le matin : jeu de cartes Capital IA, recherche sourcée sur son voisin et son entreprise avec Perplexity et Deep Research, analyse documentaire sans inventer via NotebookLM (et podcast audio), compréhension des modèles de langage (tokens, embeddings, attention, RAG) et pratique créative avec ChatGPT, Claude, Gemini et Canva IA.",
            "L'après-midi : chaque étudiant choisit un sujet (portfolio professionnel, passion ou « moi dans dix ans »), rédige un guide de style, met son site en ligne et le défend lors d'une battle de pitchs de deux minutes."
          ]
        },
        {
          h2: "Jour 2 : mode agence, mesure AWA et harnais d'agent commercial",
          paragraphs: [
            "Les étudiants deviennent une agence avec l'intervenant comme client : quiz comparatif Google vs assistants, enquête sur un site (sans IA, puis AI Overviews et navigateurs IA), mesure du coût en tokens et conversion Markdown avec AWA Cloud, conception sans modèle fourni du harnais d'un agent commercial (instructions, outils, mémoire, boucle, garde-fous) avec Claude ou Gemini et note de synthèse présentée en fin de journée."
          ]
        }
      ],
      internalLinks: [
        { href: "/partenaires/ecoles/", label: "Retour aux 7 Partenaires École" },
        { href: "/alchimistes/cyril-garnier/", label: "Cyril Garnier, concepteur de la formation" },
        { href: "/partenaires/outils/awa-cloud/", label: "Découvrir AWA Cloud (mesure Markdown & tokens)" },
        { href: "/ressources/etudes/generation-ia-2026/", label: "Étude Génération IA 2024 → 2026" }
      ]
    }
  },
  {
    path: '/partenaires/insertion',
    title: "Partenaires Insertion & Alternance IA | Alkymya",
    description: "Objectif Alternance et Alkymya : coaching emploi, recrutement d'alternants en TPE/PME et Analyseur de CV IA gratuit en production.",
    h1: "Partenaires Insertion & Alternance : relier IA pratique et accès à l’emploi",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-20",
    schemaType: "CollectionPage",
    content: {
      leadParagraph: "Avec Objectif Alternance, fondé par Kendra Martine (Alchimiste associée), nous associons coaching humain exigeant et outillage IA gratuit pour accélérer l'insertion professionnelle en TPE et PME.",
      sections: [
        {
          h2: "Une passerelle directe entre Analyseur de CV et coaching emploi",
          paragraphs: [
            "L'Analyseur de CV gratuit (analysercvpro.alkymya.co) prépare le diagnostic d'adéquation face à une offre, prolongé par l'accompagnement humain d'Objectif Alternance."
          ]
        }
      ],
      internalLinks: [
        { href: "/partenaires/insertion/objectif-alternance/", label: "Fiche partenaire Objectif Alternance" },
        { href: "/ressources/analyseurs/analyseur-de-cv/", label: "Tester l'Analyseur de CV gratuit" },
        { href: "/alchimistes/kendra-martine/", label: "Profil de Kendra Martine" }
      ]
    }
  },
  {
    path: '/partenaires/insertion/objectif-alternance',
    title: "Objectif Alternance x Alkymya : Insertion | Alkymya",
    description: "Partenariat Objectif Alternance (Kendra Martine) et Alkymya : coaching emploi TPE/PME, alternance et Analyseur de CV IA gratuit en production.",
    h1: "Objectif Alternance : relier l’IA pratique et le coaching humain vers l’emploi",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-20",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Fondé par Kendra Martine, Alchimiste associée d'Alkymya, Objectif Alternance accompagne les TPE/PME dans leur recrutement d'alternants et prépare les candidats avec des outils concrets.",
      sections: [
        {
          h2: "Actions conjointes & impact pour les candidats et TPE/PME",
          paragraphs: [
            "L'alliance réunit l'Analyseur de CV gratuit en ligne (analysercvpro.alkymya.co) et le coaching individuel fondé sur 7 ans d'expérience marketing en PME et d'enseignement."
          ]
        }
      ],
      internalLinks: [
        { href: "/partenaires/insertion/", label: "Retour au pôle Insertion & Alternance" },
        { href: "/ressources/analyseurs/analyseur-de-cv/", label: "Tester l'Analyseur de CV gratuit" },
        { href: "/alchimistes/kendra-martine/", label: "Fiche de Kendra Martine" }
      ]
    }
  },
  {
    path: '/partenaires/formations-certifiees',
    title: "Formations IA Qualiopi & OPCO via INATEC | Alkymya",
    description: "Comment financer votre formation IA par votre OPCO grâce au portage Qualiopi assuré par notre partenaire INATEC (NDA 11771056077).",
    h1: "Formations Certifiées & Portage OPCO : le partenariat Alkymya x INATEC",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-20",
    schemaType: "CollectionPage",
    content: {
      leadParagraph: "Alkymya (marque de CYRIL GARNIER CONSULTING) n'est pas un organisme de formation certifié Qualiopi en nom propre. Pour financer vos formations IA par les OPCO jusqu'à 100 %, nous collaborons avec INATEC (certifié Qualiopi, NDA 11771056077).",
      sections: [
        {
          h2: "Séparation claire entre studio opérationnel et portage Qualiopi",
          paragraphs: [
            "INATEC établit les conventions de formation, assure la conformité administrative Qualiopi et gère les dossiers OPCO ; Alkymya conçoit et anime les ateliers IA pratiques sur le terrain."
          ]
        }
      ],
      internalLinks: [
        { href: "/partenaires/formations-certifiees/inatec/", label: "Fiche complète INATEC x Alkymya (5 vidéos)" },
        { href: "/ateliers/", label: "Voir les programmes éligibles OPCO" },
        { href: "/contact/", label: "Monter un dossier OPCO" }
      ]
    }
  },
  {
    path: '/partenaires/formations-certifiees/inatec',
    title: "Alkymya x INATEC : Portage Qualiopi & OPCO | Partenaires",
    description: "Partenariat Alkymya x INATEC (NDA 11771056077, certifié Qualiopi) : 5 capsules vidéo et financement OPCO jusqu’à 100 % pour vos formations IA en entreprise.",
    h1: "INATEC x Alkymya : portage Qualiopi et formations IA finançables OPCO",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-20",
    schemaType: "WebPage",
    content: {
      leadParagraph: "INATEC est l'organisme de formation et CFA partenaire certifié Qualiopi (certification ICPF, NDA 11771056077) permettant le financement OPCO jusqu'à 100 % des formations IA animées par Alkymya.",
      sections: [
        {
          h2: "5 capsules vidéo Alkymya x INATEC & portage Formation Core IA (14 h)",
          paragraphs: [
            "Retrouvez sur cette fiche les cinq capsules vidéo réalisées conjointement (Partenariat d'Avenir, Efficacité Augmentée, Synergie Créative, Le Futur en Marche, Performance Digitale) ainsi que les modalités de montage OPCO."
          ]
        }
      ],
      internalLinks: [
        { href: "/partenaires/formations-certifiees/", label: "Retour au pôle Formations Certifiées" },
        { href: "/ateliers/", label: "Consulter le catalogue des ateliers" },
        { href: "/contact/", label: "Demander un devis avec portage OPCO INATEC" }
      ]
    }
  },
  {
    path: '/partenaires/lieux',
    title: "Lieux & Coworking Partenaires | Alkymya",
    description: "Morning Coworking à Paris et DG Services à Torcy (77200) : découvrez les espaces qui accueillent les ateliers IA et sessions d’Alkymya.",
    h1: "Lieux & Coworking partenaires : où se déroulent les ateliers Alkymya",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-23",
    schemaType: "CollectionPage",
    content: {
      leadParagraph: "Nos ateliers IA pratiques, bootcamps New Business MVP et rencontres d'entrepreneurs s'appuient sur des espaces physiques à Paris (Morning) et en Seine-et-Marne (DG Services Torcy).",
      sections: [
        {
          h2: "Couverture Paris & Marne-la-Vallée (Torcy 77200)",
          paragraphs: [
            "Morning accueille nos ateliers de découverte IA à Paris (Morning Pereire 17e et Morning Saint-Augustin 8e) tandis que DG Services Torcy (22 rue Pierre-Mendès-France, 77200 Torcy) offre des salles au pied du RER A pour le tissu économique du 77."
          ]
        }
      ],
      internalLinks: [
        { href: "/partenaires/lieux/morning/", label: "Fiche Morning : ateliers découverte IA à Paris" },
        { href: "/partenaires/", label: "Retour au hub Nos Partenaires" },
        { href: "/ateliers/", label: "Réserver un atelier en présentiel" },
        { href: "/contact/", label: "Organiser une session dans vos locaux" }
      ]
    }
  },
  {
    path: '/partenaires/lieux/morning',
    title: "Morning x Alkymya : Ateliers IA Coworking | Partenaires",
    description: "Deux ateliers gratuits de découverte de l'IA générative animés par Alkymya en 2026 à Morning Pereire (Paris 17e) et Morning Saint-Augustin (8e).",
    h1: "Morning : deux ateliers de découverte de l'IA pour les clients des espaces de coworking",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-23",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Alkymya a animé en 2026 deux ateliers de découverte de l'IA générative dans des espaces Morning, le réseau d'espaces de bureaux et de coworking. Morning met à disposition son réseau de clients, le lieu et la communication autour de la session ; l'intervenant offre son expertise, gratuitement, à ces communautés.",
      sections: [
        {
          h2: "Deux ateliers à Paris en 2026 : Pereire (17e) et Saint-Augustin (8e)",
          paragraphs: [
            "Jeudi 23 avril 2026, de 12 h 30 à 13 h 30, à Morning Pereire (Paris 17e) : atelier « Booster sa productivité avec les IA » animé par Cyril Garnier sur 15 places ouvertes, suivi de retours très positifs et d'une vidéo transmise à l'équipe.",
            "Mardi 19 mai 2026, à Morning Saint-Augustin (Paris 8e) : atelier IA organisé à l'initiative de la manager du lieu pour une douzaine de personnes, avec des retours très positifs."
          ],
          listItems: [
            "Comprendre ce qu'est l'IA générative, ce qu'elle fait bien et ce qu'elle fait mal",
            "Usages concrets pour gagner du temps : rédaction, recherche, synthèse, préparation de réunions",
            "Choisir ses outils et garder la main : vérifier les sources, protéger ses données"
          ]
        }
      ],
      internalLinks: [
        { href: "/partenaires/lieux/", label: "Retour au pôle Lieux & Coworking" },
        { href: "/alchimistes/cyril-garnier/", label: "Profil de Cyril Garnier (intervenant)" },
        { href: "/ateliers/", label: "Voir nos ateliers & formations OPCO" }
      ]
    }
  },
  {
    path: '/partenaires/entreprises',
    title: "Entreprises, Fondations & Collectifs | Alkymya",
    description: "CMI Systèmes, CPME 77, SNCF, Fondation GRDF, SEALESTER, Azimuto, AvecLouise, Esperanta Services, Fondation Flamenca et Ressourcerie Gaillarde : nos partenaires.",
    h1: "Entreprises, fondations et collectifs partenaires d’Alkymya",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-23",
    schemaType: "CollectionPage",
    content: {
      leadParagraph: "Dix organisations, fondations, collectifs de dirigeants et entreprises innovantes collaborent avec Alkymya sur l'IA maîtrisée, la cybersécurité, l'entrepreneuriat, la santé, les services à la personne, la culture et l'économie circulaire.",
      sections: [
        {
          h2: "Dix organisations reliées avec liens vérifiés",
          paragraphs: [
            "Chaque entreprise, collectif ou fondation est directement lié vers son site officiel, dont CMI Systèmes (partenaire informatique et cybersécurité) et la CPME 77 (Les Entrepreneurs Seine-et-Marne), ainsi que deux structures (AvecLouise et Esperanta Services) portées au quotidien par des alchimistes associées d'Alkymya."
          ],
          listItems: [
            "CMI Systèmes — Infogérance TPE/PME, cybersécurité & centre de formation Qualiopi cyber",
            "CPME 77 (Les Entrepreneurs Seine-et-Marne) — Matinées dirigeants IA & cybersécurité (avec CMI Systèmes)",
            "SNCF · Fondation GRDF · SEALESTER · Azimuto",
            "AvecLouise (Véronique Landereau) · Esperanta Services (Mariana Didier Laurent)",
            "La fondation Flamenca · La Ressourcerie Gaillarde"
          ]
        }
      ],
      internalLinks: [
        { href: "/partenaires/entreprises/cmi-systemes/", label: "Fiche CMI Systèmes : informatique & cyber" },
        { href: "/partenaires/entreprises/cpme-77/", label: "Fiche CPME 77 : matinées IA & cybersécurité" },
        { href: "/partenaires/", label: "Retour au hub Nos Partenaires" },
        { href: "/alchimistes/veronique-landereau/", label: "Profil de Véronique Landereau" },
        { href: "/alchimistes/mariana-didier-laurent/", label: "Profil de Mariana Didier Laurent" }
      ]
    }
  },
  {
    path: '/partenaires/entreprises/cmi-systemes',
    title: "CMI Systèmes x Alkymya : IT & Cyber | Partenaires",
    description: "CMI Systèmes (Seine-et-Marne, Cyril Milan), partenaire d'Alkymya sur l'IA et la cybersécurité : infogérance TPE/PME et centre Qualiopi cyber.",
    h1: "CMI Systèmes : l'informatique de confiance des TPE, PME et collectivités",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-23",
    schemaType: "WebPage",
    content: {
      leadParagraph: "CMI Systèmes est une entreprise informatique de Seine-et-Marne qui pilote, avec ses clients ou à leur place, leur système d'information. Fondée en 2011 par Cyril Milan (25 ans d'expertise), elle collabore avec Alkymya auprès des entreprises, de la CPME 77 et d'organisations publiques : Alkymya sur l'IA, CMI Systèmes sur l'infrastructure et la cybersécurité.",
      sections: [
        {
          h2: "Un partenaire informatique « clé en main » et centre de formation Qualiopi cybersécurité",
          paragraphs: [
            "CMI Systèmes assure migration de messagerie, passage au cloud, préparation et installation de matériel spécifique, accompagnement lors d'un déménagement, assistance quotidienne avec outil de demandes de service traçable et audit gratuit sans engagement.",
            "Son centre de formation, certifié Qualiopi pour la cybersécurité, propose notamment une formation de deux jours « Introduction à la cybersécurité dans un contexte professionnel » ainsi que des quiz quotidiens adaptés au niveau de chaque utilisateur."
          ],
          listItems: [
            "Les matinales de la CPME 77 : IA (Alkymya) et cybersécurité (CMI Systèmes)",
            "Interventions conjointes en entreprise autour du shadow IA et de la sécurité des données",
            "Projets avec des organisations publiques associant infrastructure, sécurité et usages IA"
          ]
        }
      ],
      internalLinks: [
        { href: "/partenaires/entreprises/cpme-77/", label: "Voir les matinales CPME 77 (IA & Cyber)" },
        { href: "/partenaires/entreprises/", label: "Retour aux Entreprises & Collectifs" },
        { href: "/alchimistes/cyril-garnier/", label: "Profil de Cyril Garnier (Alkymya)" }
      ]
    }
  },
  {
    path: '/partenaires/entreprises/cpme-77',
    title: "CPME 77 x Alkymya : Matinées IA & Cyber | Partenaires",
    description: "Deux matinées CPME 77 à l'automne 2026 pour dirigeants de TPE/PME : matinée IA par Alkymya (13 oct.) et cybersécurité par CMI Systèmes (29 oct.).",
    h1: "CPME 77 : deux matinées pour que les dirigeants gardent la main sur l'IA et sur le risque cyber",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-23",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Les Entrepreneurs Seine-et-Marne (CPME 77) ont organisé à l'automne 2026 deux matinées d'échanges destinées aux dirigeants de TPE et de PME, sur deux sujets qui les concernent directement : l'intelligence artificielle et la cybersécurité. Alkymya animait la matinée consacrée à l'IA, en partenariat avec CMI Systèmes, qui animait celle sur la cybersécurité.",
      sections: [
        {
          h2: "Matinée IA (13 octobre 2026) & Matinée cybersécurité (29 octobre 2026)",
          paragraphs: [
            "Mardi 13 octobre 2026, de 9 h 30 à 11 h 30, Cyril Garnier (Alkymya) a animé la matinée « Comment faire de l'IA un allié du quotidien sans perdre la maîtrise de ce que l'on délègue ? » autour du fil rouge : l'IA exécute, vous dirigez.",
            "Jeudi 29 octobre 2026, de 9 h 30 à 11 h 30, un formateur de CMI Systèmes a animé la matinée cybersécurité « Prise de conscience et enjeux du risque cyber »."
          ],
          listItems: [
            "Usages concrets de l'IA pour un dirigeant, au quotidien",
            "Choix des outils, délégation maîtrisée et vérification des résultats",
            "Réponse au shadow IA et aux nouveaux risques d'arnaque et d'hameçonnage"
          ]
        },
        {
          h2: "Pourquoi associer IA et cybersécurité dans un partenariat à trois",
          paragraphs: [
            "On ne déploie pas l'IA sans se poser la question de la sécurité des données d'entreprise ni du shadow IA, et on ne protège pas son entreprise en ignorant ce que ses équipes utilisent déjà. Un dispositif conjoint porté par la CPME 77, Alkymya et CMI Systèmes."
          ]
        }
      ],
      internalLinks: [
        { href: "/partenaires/entreprises/", label: "Retour aux Entreprises & Collectifs" },
        { href: "/alchimistes/cyril-garnier/", label: "Profil de Cyril Garnier (animateur IA)" },
        { href: "/ateliers/", label: "Voir nos ateliers & formations dirigeants" }
      ]
    }
  },
  {
    path: '/partenaires/outils',
    title: "Outils & Partenaires Technologiques Souverains | Alkymya",
    description: "AWACLOUD (conversion documents et RAG local) et Onecub (Data Spaces souverains par Olivier Dion) : les technologies partenaires d’Alkymya.",
    h1: "Outils & Partenaires technologiques : les briques souveraines recommandées par Alkymya",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-20",
    schemaType: "CollectionPage",
    content: {
      leadParagraph: "Nous ne recommandons que des solutions technologiques françaises ou européennes éprouvées dans nos propres pipelines RAG, ateliers et conseils en gouvernance des données.",
      sections: [
        {
          h2: "AWACLOUD & Onecub : souveraineté documentaire et Data Spaces",
          paragraphs: [
            "AWACLOUD assure la lecture et conversion locale de documents PDF/Office en Markdown structuré sans envoi cloud ; Onecub, fondée par l'alchimiste Olivier Dion, structure les Data Spaces souverains conformes au RGPD."
          ]
        }
      ],
      internalLinks: [
        { href: "/partenaires/outils/awa-cloud/", label: "Fiche partenaire AWACLOUD" },
        { href: "/partenaires/outils/onecub/", label: "Fiche partenaire Onecub" },
        { href: "/partenaires/", label: "Retour au hub Nos Partenaires" }
      ]
    }
  },
  {
    path: '/partenaires/outils/awa-cloud',
    title: "AWACLOUD : Documents & RAG Local | Partenaires Alkymya",
    description: "Partenaire technologique AWACLOUD : bibliothèques et logiciels français pour convertir PDF, Word et Excel en Markdown localement sans fuite de données.",
    h1: "AWACLOUD : vos documents, lisibles par l'IA, sans quitter votre ordinateur",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-20",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Éditeur français fondé en 2016 publiant des bibliothèques et applications pour lire, convertir, signer et vérifier vos fichiers Word, Excel, PowerPoint, PDF et OpenDocument localement, sans envoyer aucun fichier sur le cloud.",
      sections: [
        {
          h2: "Applications hors ligne et test RAG local (< 1 seconde)",
          paragraphs: [
            "Applications gratuites dans le navigateur (AWA Viewer, AWA Notepad, AWA Writer bêta), socle AwaForge et bibliothèques développeurs AWA Convert, AWA PDF et AWA Office.",
            "Mesure interne sur un rapport PDF de 39 pages (773 Ko) : AWA Convert produit 86 187 caractères de Markdown structuré en 309 blocs en moins d'une seconde en local, réduisant le contexte envoyé au LLM à 1 000–3 000 tokens utiles au lieu de 25 000."
          ]
        }
      ],
      internalLinks: [
        { href: "/partenaires/outils/", label: "Retour au pôle Outils & Technologies" },
        { href: "/partenaires/outils/onecub/", label: "Voir aussi Onecub (Data Spaces)" },
        { href: "/contact/", label: "Discuter d'un pipeline RAG souverain" }
      ]
    }
  },
  {
    path: '/partenaires/outils/onecub',
    title: "Onecub x Alkymya : Data Spaces & RGPD | Partenaires",
    description: "Onecub, fondé par Olivier Dion (Alchimiste Alkymya) : Data Spaces souverains, conformité RGPD, standards GAIA-X et gouvernance des données IA.",
    h1: "Onecub : bâtir des espaces de données souverains et conformes pour l’IA européenne",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-20",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Fondée par Olivier Dion (Alchimiste associé d'Alkymya), Onecub conçoit des architectures Data Spaces souveraines et des mécanismes de portabilité conformes au RGPD, au Data Act et aux standards GAIA-X.",
      sections: [
        {
          h2: "Gouvernance des données, RGPD et souveraineté européenne",
          paragraphs: [
            "Intervenant régulier auprès de la Commission Européenne, de GAIA-X et de MyData, Olivier Dion apporte à l'écosystème Alkymya un éclairage de terrain sur la donnée de confiance en mobilité, énergie, courrier et agriculture."
          ]
        }
      ],
      internalLinks: [
        { href: "/partenaires/outils/", label: "Retour au pôle Outils & Technologies" },
        { href: "/alchimistes/olivier-dion/", label: "Profil complet d'Olivier Dion" },
        { href: "/partenaires/outils/awa-cloud/", label: "Voir aussi AWACLOUD" }
      ]
    }
  },
  {
    path: '/contact',
    title: "Contact — formation IA et conseil en France | Alkymya",
    description: "Contactez Alkymya, studio IA en France : devis formation IA OPCO via partenaires certifiés Qualiopi, ateliers et accompagnement dirigeants.",
    h1: "Contactez Alkymya : formation IA & conseil en France.",
    ogImage: "https://alkymya.co/og-contact.jpg",
    lastmod: "2026-11-15",
    schemaType: "ContactPage",
    content: {
      leadParagraph: "Échangez avec Alkymya, studio d'expertise et de création IA en France, pour un devis formation IA (finançable OPCO via nos partenaires certifiés Qualiopi), un atelier d'agents IA en Île-de-France ou un accompagnement New Business MVP.",
      sections: [
        {
          h2: "Devis formation IA (OPCO) & accompagnement dirigeants",
          paragraphs: [
            "Que vous représentiez une grande école souhaitant intégrer un module IA innovant, une PME d'Île-de-France en quête d'optimisation de ses processus, ou un porteur de projet visant à lancer son MVP, notre équipe vous répond sous 24 à 48 heures."
          ],
          listItems: [
            "Formations professionnelles éligibles au financement OPCO via nos partenaires certifiés Qualiopi (dont INATEC).",
            "Ateliers intensifs de création d'agents IA et de prompt engineering.",
            "Accompagnement New Business MVP pour valider votre offre terrain en 6 mois.",
            "Conférences, keynotes inspirantes et business games pour vos séminaires."
          ]
        },
        {
          h2: "Coordonnées officielles & avis clients vérifiés Google",
          paragraphs: [
            "Alkymya — studio d'expertise et de création IA de CYRIL GARNIER CONSULTING (SASU, SIREN 842 403 669, RCS Melun) : 2 rue Sacha Guitry, 77330 Ozoir-la-Ferrière · Email : cyril@alkymya.co · Téléphone : 06 43 64 97 77 · Zone d'intervention : Paris, Seine-et-Marne (77) et France entière.",
            "Fiche Google Business Profile vérifiée (5,0 / 5 sur 11 avis clients, 99,3 % de recommandation sur nos ateliers) : https://www.google.com/maps?cid=10471291206194913670"
          ],
          listItems: [
            "Augustine (IÉSEG, avis Google 5/5) : accompagnement très riche, maîtrise de l'IA et vraie pédagogie sur le commerce agentique.",
            "Mélinda (IÉSEG, avis Google 5/5) : expertise concrète, vision stratégique et accompagnement appliqué du mémoire à la création applicative IA.",
            "Noémie (avis Google 5/5 sur l'agent SODA) : analyse structurée, approfondie et ouverture de nouvelles perspectives."
          ]
        }
      ],
      internalLinks: [
        { href: "/ateliers/", label: "Explorer le catalogue de nos ateliers" },
        { href: "/faq/", label: "Consulter les réponses aux questions fréquentes" },
        { href: "/newbusiness/", label: "Candidater au programme New Business MVP" },
        { href: "/politique-confidentialite/", label: "Politique de confidentialité & cookies RGPD" }
      ]
    }
  },
  {
    path: '/faq',
    title: "FAQ Alkymya | Formations IA, Agents, SEO/GEO & OPCO",
    description: "Questions fréquentes Alkymya : formations IA en entreprise (Seine-et-Marne, Paris), agents sur mesure, SEO Google AI, financement OPCO et avis.",
    h1: "Questions fréquentes. Vos réponses claires.",
    ogImage: "https://alkymya.co/og-faq.jpg",
    lastmod: "2026-11-25",
    schemaType: "FAQPage",
    content: {
      leadParagraph: "Toutes les réponses sur le studio Alkymya (Seine-et-Marne, Paris et France), nos formations IA en entreprise finançables OPCO via nos partenaires certifiés Qualiopi, la création d'agents IA sur mesure, la stratégie SEO et GEO pour Google AI et nos avis clients.",
      sections: [
        ...faqCategories.map((cat) => ({
          h2: cat.title,
          paragraphs: [cat.items[0]?.plainAnswer || ''],
          listItems: cat.items.map((item) => `${item.question} — ${item.plainAnswer}`)
        })),
        {
          h2: "Avis clients vérifiés Google (5,0 / 5)",
          paragraphs: [
            "Alkymya recueille une note moyenne de 5,0 / 5 sur 11 avis clients Google Business Profile (https://www.google.com/maps?cid=10471291206194913670) ainsi qu'un taux de recommandation de 99,3 % sur ses ateliers pratiques.",
          ],
          listItems: [
            "Augustine (IÉSEG, avis Google 5/5) : accompagnement très riche en cours puis en mémoire sur le commerce agentique, maîtrise de l'IA et pédagogie.",
            "Mélinda (IÉSEG, avis Google 5/5) : expertise concrète en intelligence artificielle, vision stratégique et développement d'une application IA.",
            "Noémie (avis Google 5/5 sur l'agent SODA) : analyse hyper structurée, approfondie et ouverture de nouvelles perspectives."
          ]
        }
      ],
      internalLinks: [
        { href: "/ateliers/", label: "Consulter nos formations et ateliers IA" },
        { href: "/oeuvres/", label: "Voir nos agents IA et cas SEO/GEO" },
        { href: "/ressources/analyseurs/analyseur-de-site-web/", label: "Auditer votre site avec Alkymya Scan" },
        { href: "/contact/", label: "Contacter Cyril Garnier (diagnostic 20 min)" }
      ]
    }
  },
  {
    path: '/rejoindre',
    title: "Rejoindre l'Agence IA Alkymya | Experts IA France",
    description: "Rejoignez Alkymya en Île-de-France : formateurs IA, concepteurs d'agents autonomes et alternants formés sur des projets réels en production.",
    h1: "Rejoindre Alkymya : experts IA, formateurs & jeunes talents.",
    ogImage: "https://alkymya.co/og-rejoindre.jpg",
    lastmod: "2026-11-15",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Alkymya, studio d'expertise et de création IA, recrute des intervenants IA terrain, des concepteurs d'agents IA et accueille chaque année des alternants et jeunes talents sur des projets en production réelle.",
      sections: [
        {
          h2: "Pourquoi rejoindre Alkymya et notre collectif d'alchimistes ?",
          paragraphs: [
            "En rejoignant Alkymya, vous intervenez sur des chantiers à impact mesurable : ateliers pratiques en PME, conférences et jurys en grandes écoles (HETIC, Ynov, IÉSEG, CFA Itis), déploiement de sites éditoriaux SEO/GEO et création d'agents IA autonomes.",
            "Nous privilégions la transmission directe entre profils seniors et nouvelle génération numérique : chaque membre contribue activement aux livrables clients et aux publications open source du studio."
          ],
          listItems: [
            "Intervenir comme conférencier, mentor ou formateur en entreprises et grandes écoles.",
            "Co-développer des agents IA sur mesure, des business games immersifs et des médias éditoriaux.",
            "Accéder à une communauté active en Île-de-France reliant dirigeants, chercheurs data et talents en alternance."
          ]
        },
        {
          h2: "Ce que devient un alternant ou jeune talent chez Alkymya : l'exemple de Léonie Egesipe",
          paragraphs: [
            "Chez Alkymya, un alternant ou jeune talent n'est pas cantonné à des tâches de support : il est responsabilisé sur de vrais actifs numériques visibles sur Google et utilisés par des dirigeants. Léonie Egesipe en incarne le parcours réel au sein du studio.",
            "Initialement étudiante en cheffe de projet digital, Léonie Egesipe a pris la co-direction opérationnelle des projets numériques d'Alkymya aux côtés de Cyril Garnier. Elle a conçu et déployé thelittle75.fr (39 URLs structurées, 27 839 mots, -91 % de poids images, Top 2 Google sur chronique Belleville Paris récit), piloté la direction artistique de la série Métropolia et co-encadre aujourd'hui la cohorte New Business MVP."
          ],
          listItems: [
            "Premier mois : prise en main de l'architecture éditoriale SEO/GEO, des workflows génératifs et de la qualité de code en production.",
            "Deuxième mois : mise en ligne et suivi hebdomadaire d'un média ou d'un agent IA autonome mesuré par les outils de veille Google.",
            "À 90 jours : co-animation d'ateliers en entreprise ou en école et responsabilisation complète sur le pilotage client."
          ]
        },
        {
          h2: "Profils recherchés et modalités de collaboration",
          paragraphs: [
            "Nous recherchons tout au long de l'année des formateurs IA pragmatiques, ingénieurs d'agents IA, directeurs artistiques numériques, consultants en transformation digitale, juristes spécialisés IA Act ainsi que des candidats en alternance via notre partenaire Objectif Alternance."
          ]
        }
      ],
      internalLinks: [
        { href: "/alchimistes/", label: "Découvrir le profil de Léonie Egesipe et des Alchimistes" },
        { href: "/oeuvres/", label: "Voir les réalisations en production (dont thelittle75.fr)" },
        { href: "/partenaires/", label: "Consulter notre écosystème écoles & Objectif Alternance" },
        { href: "/contact/", label: "Déposer une candidature spontanée" }
      ]
    }
  },
  {
    path: '/newbusiness',
    title: "New Business MVP : valider son offre en 6 mois — Alkymya",
    description: "Accompagnement IA dirigeants et indépendants sur 6 mois : création de MVP, validation client, agents IA sur mesure et stratégie SEO et GEO.",
    h1: "Accompagnement IA dirigeants & New Business MVP.",
    ogImage: "https://alkymya.co/og-newbusiness.jpg",
    lastmod: "2026-11-15",
    schemaType: "EducationalOccupationalProgram",
    images: [
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758192982/66cffcd8-15f1-415f-b423-9f428d63e22f_gqjd53.png",
        alt: "Cyril Garnier — Mentor stratégie et accompagnement dirigeants New Business MVP",
        width: 240,
        height: 240,
        caption: "Cyril Garnier — Stratégie & Viabilité Économique"
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758192982/c4f25b29-1634-44bf-a6d1-41f2378fbb4d_j10d8m.png",
        alt: "Léonie Egesipe — Mentor ergonomie numérique et direction artistique IA New Business MVP",
        width: 240,
        height: 240,
        caption: "Léonie Egesipe — Direction Artistique & Ergonomie MVP"
      }
    ],
    content: {
      leadParagraph: "Accompagnement IA dirigeants et indépendants sur 6 mois avec Alkymya : concevez votre MVP, déployez des agents IA sur mesure et validez votre stratégie SEO et GEO auprès de vrais clients grâce aux méthodes éprouvées sur nos trois études de cas TheLittle.",
      sections: [
        {
          h2: "À qui s'adresse cet accompagnement IA dirigeants et indépendants ?",
          paragraphs: [
            "Ce programme s'adresse aux créateurs d'entreprise, consultants indépendants en phase de lancement, repreneurs, intrapreneurs et professionnels porteurs d'un projet innovant qui refusent de s'enfermer dans l'effet tunnel du développement solitaire.",
            "Il est spécialement conçu pour ceux qui ont une idée forte mais manquent de méthode pour valider la réalité de la demande avant d'engager des milliers d'euros en développements informatiques ou en campagnes publicitaires hasardeuses."
          ],
          listItems: [
            "Solopreneurs et indépendants : passer du statut de prestataire à la vente d'une offre packagée et testée.",
            "Fondateurs de startups : confronter immédiatement leur hypothèse au terrain et signer leurs premiers clients payants.",
            "Professionnels en reconversion : acquérir une routine entrepreneuriale rigoureuse guidée par des mentors chevronnés."
          ]
        },
        {
          h2: "Ce qui vous est concrètement livré mois après mois",
          paragraphs: [
            "New Business MVP est un parcours jalonné d'actifs tangibles. Vous ne repartez pas avec de vagues conseils théoriques, mais avec des livrables opérationnels co-construits avec nos directeurs associés."
          ],
          listItems: [
            "Mois 1 — Fiche Profil Client Idéal (ICP) : cartographie chirurgicale de qui paie, analyse des budgets existants et scénario d'interviews terrain qualifiées.",
            "Mois 2 — Proposition de Valeur & Arbitrage : matrice valeur/complexité, élagage impitoyable du superflu et formalisation d'un argumentaire percutant.",
            "Mois 3 — MVP Opérationnel en Ligne : vitrine ou produit fonctionnel déployé sans coûts de développement superflus, avec capture de prospects active.",
            "Mois 4 — Grille Tarifaire & Rituels : modélisation du modèle de revenus, tests d'acceptabilité prix et ancrage des rituels hebdomadaires de travail.",
            "Mois 5 — Pitch Deck Partenaires (10 slides) : présentation percutante appuyée sur vos preuves de traction réelles et script oral rodé de 3 minutes.",
            "Mois 6 — Boussole Stratégique & Demo Day : analyse approfondie des métriques d'usage et arbitrage lucide entre Continuer, Pivoter ou Accélérer."
          ]
        },
        {
          h2: "Comment se déroule concrètement l'accompagnement sur 6 mois ?",
          paragraphs: [
            "L'accompagnement associe deux rendez-vous mensuels stratégiques en tête-à-tête en visioconférence avec Cyril Garnier et Léonie Egesipe, complétés par des rituels hebdomadaires de suivi asynchrone pour ne jamais laisser un blocage s'installer.",
            "Chaque mois est dédié à un palier clair. Entre les sessions, vous appliquez des protocoles d'action guidés sur le terrain. L'effort personnel attendu est de 3 à 4 heures par semaine en plus de vos rendez-vous, ce qui permet de concilier parfaitement le programme avec votre activité professionnelle existante."
          ]
        },
        {
          h2: "Ce que la méthode change pour la viabilité de votre projet",
          paragraphs: [
            "Le risque numéro un de tout projet entrepreneurial n'est pas technique, c'est de construire quelque chose dont personne ne veut au prix fixé. En vous forçant à confronter votre offre à de vrais prospects dès le premier mois, nous supprimons le risque de l'illusion.",
            "Notre tarification est totalement transparente et accessible : 200 € / mois pendant 6 mois (soit un coût global de 1 200 € HT sans aucun engagement contractuel au-delà). Vous préservez votre trésorerie et financez votre accélération sur la base de premiers revenus avérés."
          ]
        },
        {
          h2: "Preuves de terrain, références et mentors engagés",
          paragraphs: [
            "Le programme s'appuie sur plus de 15 années d'expérience accumulées par Cyril Garnier, ancien directeur général de SNCF Développement où il a supervisé la création de milliers d'emplois et accompagné des centaines de projets vers la viabilité commerciale.",
            "Le binôme est renforcé par Léonie Egesipe, directrice artistique et spécialiste de l'ergonomie numérique, garantissant que chaque livrable produit bénéficie d'un niveau d'exécution visuelle et d'expérience utilisateur digne des meilleurs standards du marché."
          ]
        }
      ],
      internalLinks: [
        { href: "/oeuvres/", label: "Consulter nos 3 études de cas TheLittle en production" },
        { href: "/ateliers/", label: "Voir tous nos ateliers et formations" },
        { href: "/faq/", label: "Consulter la foire aux questions" },
        { href: "/contact/", label: "Contacter les mentors de la cohorte" }
      ]
    }
  },
  {
    path: '/mentions-legales',
    title: "Mentions Légales Agence IA & RGPD | Alkymya",
    description: "Mentions légales d'Alkymya (marque de CYRIL GARNIER CONSULTING, SASU, 2 rue Sacha Guitry, 77330 Ozoir-la-Ferrière) : RCS Melun, hébergement Netlify et RGPD.",
    h1: "Mentions légales Alkymya & RGPD.",
    ogImage: "https://alkymya.co/og-mentions.jpg",
    lastmod: "2026-11-18",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Consultez les mentions légales du site alkymya.co (marque exploitée par CYRIL GARNIER CONSULTING) et notre politique stricte de confidentialité RGPD.",
      sections: [
        {
          h2: "Éditeur du site",
          paragraphs: [
            "Le site alkymya.co est édité par CYRIL GARNIER CONSULTING, SASU au capital de 1 500 €, dont le siège social est situé 2 rue Sacha Guitry, 77330 Ozoir-la-Ferrière, France."
          ],
          listItems: [
            "Raison sociale : CYRIL GARNIER CONSULTING",
            "Forme juridique : SASU au capital de 1 500 €",
            "Siège social : 2 rue Sacha Guitry, 77330 Ozoir-la-Ferrière",
            "RCS : 842 403 669 R.C.S. Melun, immatriculée le 17 septembre 2018",
            "SIREN : 842 403 669 — SIRET (siège) : 842 403 669 00018",
            "TVA intracommunautaire : FR 82 842403669",
            "Code APE : 70.22Z",
            "Directeur de la publication : Cyril Garnier",
            "Contact : cyril@alkymya.co — 06 43 64 97 77"
          ]
        },
        {
          h2: "Hébergement",
          paragraphs: [
            "Le site est hébergé par Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, CA 94104, États-Unis — www.netlify.com"
          ]
        },
        {
          h2: "Marques",
          paragraphs: [
            "Alkymya, TheLittle77, TheLittle75 et TheLittle83 sont des marques exploitées par CYRIL GARNIER CONSULTING."
          ]
        },
        {
          h2: "Protection des données personnelles et respect du RGPD",
          paragraphs: [
            "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, les informations recueillies via nos formulaires sont exclusivement destinées au traitement de vos demandes de contact ou de candidature.",
            "Aucune donnée personnelle n'est cédée, louée ou vendue à des tiers. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données en écrivant à cyril@alkymya.co."
          ],
          listItems: [
            "Hébergement sécurisé respectant les normes de souveraineté des données.",
            "Consentement explicite et paramétrable pour les cookies de mesure d'audience.",
            "Conservation des données limitée à la durée légale nécessaire au traitement."
          ]
        }
      ],
      internalLinks: [
        { href: "/", label: "Retourner à la page d'accueil d'Alkymya" },
        { href: "/politique-confidentialite/", label: "Politique de confidentialité & cookies RGPD" },
        { href: "/accessibilite/", label: "Déclaration d'accessibilité RGAA" },
        { href: "/contact/", label: "Exercer vos droits d'accès aux données personnelles" }
      ]
    }
  },
  {
    path: '/politique-confidentialite',
    title: "Politique de confidentialité & cookies RGPD | Alkymya",
    description: "Politique de confidentialité d'Alkymya (CYRIL GARNIER CONSULTING) : données personnelles, Google Analytics Consent Mode v2, conservation et droits RGPD.",
    h1: "Politique de confidentialité & gestion des cookies.",
    ogImage: "https://alkymya.co/og-mentions.jpg",
    lastmod: "2026-11-25",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Politique de protection des données personnelles et de gestion des cookies d'Alkymya (CYRIL GARNIER CONSULTING, 2 rue Sacha Guitry, 77330 Ozoir-la-Ferrière), conforme au RGPD (UE 2016/679) et aux recommandations de la CNIL.",
      sections: [
        {
          h2: "1. Responsable du traitement & données collectées",
          paragraphs: [
            "Le responsable du traitement est CYRIL GARNIER CONSULTING (SASU, SIRET 842 403 669 00018, représentant légal Cyril Garnier, cyril@alkymya.co, 06 43 64 97 77). Seules les informations strictement nécessaires à vos demandes de contact, candidatures New Business MVP et inscriptions à la lettre d'information sont collectées."
          ],
          listItems: [
            "Formulaire de contact (/contact/) : prénom, nom, email, sujet et message — conservation 3 ans maximum après le dernier échange.",
            "Candidature New Business MVP : coordonnées et éléments de cadrage projet — conservation 3 ans ou durée contractuelle.",
            "Lettre d'information : email (prénom/nom facultatifs) acheminé via Resend — jusqu'au retrait du consentement.",
            "Analyseurs IA gratuits (Photo, CV, Mémoire, Alkymya Scan) : traitement ponctuel sans revente ni constitution de CVthèque."
          ]
        },
        {
          h2: "2. Cookies & Google Analytics Consent Mode v2 (G-87HJ0K59JX)",
          paragraphs: [
            "Par défaut, Google Consent Mode v2 bloque tout traceur statistique (analytics_storage: denied, ad_storage: denied) tant qu'aucun consentement positif n'est enregistré. En cas d'acceptation, l'adresse IP est systématiquement anonymisée (anonymize_ip: true) et la durée de mémorisation du choix est fixée à 6 mois conformément aux directives CNIL."
          ]
        },
        {
          h2: "3. Sous-traitants, droits RGPD & réclamation CNIL",
          paragraphs: [
            "Aucune donnée personnelle n'est vendue ou cédée à des tiers commerciaux. Les seuls sous-traitants techniques habilités sont Netlify (hébergement), Resend (emails) et Google LLC (mesure d'audience si consentie). Vous pouvez exercer vos droits d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité à cyril@alkymya.co (réponse sous 30 jours) ou saisir la CNIL (cnil.fr)."
          ]
        }
      ],
      internalLinks: [
        { href: "/mentions-legales/", label: "Consulter les Mentions légales" },
        { href: "/accessibilite/", label: "Déclaration d'accessibilité RGAA" },
        { href: "/contact/", label: "Contacter le responsable RGPD (cyril@alkymya.co)" }
      ]
    }
  },
  {
    path: '/accessibilite',
    title: "Déclaration d'accessibilité RGAA & WCAG | Alkymya",
    description: "Déclaration d'accessibilité numérique d'Alkymya (alkymya.co) : engagements RGAA et WCAG AA, navigation clavier, skip link, contrastes et contact dédié.",
    h1: "Déclaration d'accessibilité RGAA & WCAG.",
    ogImage: "https://alkymya.co/og-mentions.jpg",
    lastmod: "2026-11-25",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Engagement volontaire d'Alkymya (CYRIL GARNIER CONSULTING) en faveur de l'accessibilité numérique sur https://alkymya.co/, selon les bonnes pratiques du Référentiel Général d'Amélioration de l'Accessibilité (RGAA) et des directives WCAG 2.1 niveau AA.",
      sections: [
        {
          h2: "1. Mesures d'accessibilité mises en œuvre",
          paragraphs: [
            "Chaque page pré-rendue et chaque écran de l'application respectent une structure sémantique claire, une navigation clavier complète et des contrastes élevés entre texte et arrière-plan."
          ],
          listItems: [
            "Lien d'évitement (« Aller au contenu principal ») en tête de document pointant vers #main-content, visible à la prise de focus clavier.",
            "Hiérarchie de titres structurée (un unique H1 par page suivi de H2/H3) et balises HTML5 sémantiques (header, nav, main, article, footer).",
            "Contrôles interactifs accessibles au clavier avec états ARIA explicites (menu, modale cookies, accordéons FAQ, formulaires étiquetés).",
            "Attributs alt descriptifs et dimensions déclarées sur l'ensemble des photographies et logos, doublés de tableaux HTML natifs pour nos études PDF."
          ]
        },
        {
          h2: "2. Signalement d'un défaut & voies de recours",
          paragraphs: [
            "Si vous rencontrez une difficulté d'accès à un contenu ou service sur alkymya.co, contactez Cyril Garnier à cyril@alkymya.co ou au 06 43 64 97 77 (réponse sous 48h ouvrées). En l'absence de réponse satisfaisante, vous pouvez saisir le Défenseur des droits (defenseurdesdroits.fr ou Libre réponse 71120, 75342 Paris CEDEX 07)."
          ]
        }
      ],
      internalLinks: [
        { href: "/politique-confidentialite/", label: "Politique de confidentialité & cookies RGPD" },
        { href: "/mentions-legales/", label: "Mentions légales" },
        { href: "/contact/", label: "Signaler un défaut d'accessibilité" }
      ]
    }
  },
  {
    path: '/plan-du-site',
    title: "Plan du site — Toutes les pages Alkymya",
    description: "Index complet des 48 pages d'Alkymya : ateliers IA OPCO, New Business MVP, études Génération IA, analyseurs gratuits, Alchimistes et partenaires.",
    h1: "Plan du site Alkymya : toutes les pages.",
    ogImage: "https://alkymya.co/og-image.jpg",
    lastmod: "2026-11-25",
    schemaType: "CollectionPage",
    content: {
      leadParagraph: "Accès direct et hiérarchisé à l'ensemble des 48 pages canoniques publiées sur alkymya.co : studio IA, ateliers et formations OPCO via partenaires Qualiopi, études chiffrées, analyseurs gratuits, profils d'Alchimistes et écosystème de partenaires.",
      sections: [
        {
          h2: "Navigation thématique complète",
          paragraphs: [
            "Ce plan du site facilite l'exploration pour nos visiteurs comme pour les moteurs de recherche (Googlebot, Bingbot, GPTBot, PerplexityBot). Toutes les URLs canoniques se terminent par un slash final et renvoient un HTML pré-rendu complet."
          ]
        }
      ],
      internalLinks: [
        { href: "/", label: "Accueil Alkymya" },
        { href: "/ateliers/", label: "Ateliers & Formations IA (OPCO via Qualiopi)" },
        { href: "/newbusiness/", label: "Programme New Business MVP" },
        { href: "/oeuvres/", label: "Œuvres & Études de cas SEO/GEO" },
        { href: "/ressources/", label: "Ressources, Études & Analyseurs IA" },
        { href: "/alchimistes/", label: "Les 6 Alchimistes d'Alkymya" },
        { href: "/partenaires/", label: "Écosystème Partenaires (6 pôles & 9 fiches)" },
        { href: "/faq/", label: "Foire Aux Questions & Avis Google" },
        { href: "/contact/", label: "Contact & Devis" }
      ]
    }
  }
];
