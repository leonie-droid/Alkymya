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
    title: "Formation IA en entreprise à Ozoir-la-Ferrière — Alkymya",
    description: "Alkymya, studio IA et organisme de formation à Ozoir-la-Ferrière (77) : formation IA entreprise Qualiopi, agents IA sur mesure et stratégie SEO GEO.",
    h1: "Former vos équipes à l'IA, là où elles travaillent.",
    ogImage: "https://alkymya.co/og-image.jpg",
    lastmod: "2026-11-15",
    schemaType: "WebPage",
    images: [
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1767128574/kk25As37_y8rw27.png",
        alt: "Alkymya, studio IA et organisme de formation à Ozoir-la-Ferrière — direction artistique générative",
        width: 1200,
        height: 800,
        caption: "Création visuelle augmentée — Studio Alkymya (Ozoir-la-Ferrière)"
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758192982/66cffcd8-15f1-415f-b423-9f428d63e22f_gqjd53.png",
        alt: "Cyril Garnier — Fondateur d'Alkymya, studio IA et organisme de formation à Ozoir-la-Ferrière",
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
      leadParagraph: "Alkymya est un studio IA et organisme de formation installé à Ozoir-la-Ferrière (Seine-et-Marne) : formation IA en entreprise certifiée Qualiopi, création d'agents IA sur mesure, stratégie SEO et GEO pour votre visibilité Google AI.",
      sections: [
        {
          h2: "Accompagnement intelligence artificielle en trois piliers",
          paragraphs: [
            "Alkymya, studio IA et organisme de formation à Ozoir-la-Ferrière, guide les dirigeants, équipes métiers et étudiants à travers trois axes complémentaires : Explorer les technologies d'IA générative, Transformer les processus quotidiens avec des prototypes fonctionnels, et Partager les compétences clés pour une autonomie durable.",
            "Chaque intervention privilégie la pratique immédiate sur les outils de travail réels de l'entreprise : rédaction structurée, automatisation documentaire, agents autonomes connectés au CRM et déploiement de sites éditoriaux visibles sur Google et dans Google AI Overviews."
          ],
          listItems: [
            "Explorer : ateliers d'acculturation, veille SEO IA et analyse des cas d'usage rentables par service.",
            "Transformer : conseil stratégique, création d'agents IA sur mesure et prototypage no-code / low-code.",
            "Partager : formations certifiantes Qualiopi finançables OPCO, business games et mentorat de talents."
          ]
        },
        {
          h2: "Ce que vous repartez avec et nos trois formats d'intervention",
          paragraphs: [
            "Nous intervenons directement dans vos locaux en Seine-et-Marne, à Paris et partout en Île-de-France, ou en classe virtuelle synchrone. Chaque participant repart avec des prompts métiers testés sur ses propres dossiers, des agents IA opérationnels et un protocole de conformité IA Act.",
            "Nos résultats ne sont pas théoriques : nos trois études de cas éditoriales en production (thelittle77.fr, thelittle75.fr et thelittle83.fr) totalisent 387 URLs indexables et plus de 279 000 mots publiés sans publicité ni achat de liens."
          ],
          listItems: [
            "Formation Core IA (14h en 4 demi-journées) : certifiée Qualiopi via INATEC, éligible OPCO jusqu'à 100 %, pour maîtriser le prompt engineering, la création de contenus et les premiers workflows.",
            "Ateliers spécialisés (3h30) : création de 3 agents IA métiers autonomes, application web interne no-code connectée à Gemini/GPT ou audit de conformité IA Act.",
            "New Business MVP (6 mois à 200 € / mois) : accompagnement en binôme par Cyril Garnier et Léonie Egesipe pour valider votre offre auprès de vrais clients avant d'investir."
          ]
        },
        {
          h2: "Ancrage territorial à Ozoir-la-Ferrière et impact pédagogique",
          paragraphs: [
            "Basé en Seine-et-Marne à Ozoir-la-Ferrière (77330), Alkymya collabore avec les PME d'Île-de-France, les grands groupes (SNCF, Fondation GRDF, Morning) et les grandes écoles (HETIC, Ynov Campus, IÉSEG, CFA Itis, Paris École de Management).",
            "Plus de 450 professionnels et étudiants ont déjà suivi nos programmes, avec un taux de recommandation de 99,3 % sur nos ateliers pratiques."
          ]
        }
      ],
      internalLinks: [
        { href: "/oeuvres/", label: "Voir nos trois études de cas éditoriales (thelittle77, 75, 83)" },
        { href: "/ateliers/", label: "Découvrir nos ateliers et formations IA Qualiopi" },
        { href: "/newbusiness/", label: "Rejoindre le programme New Business MVP" },
        { href: "/alchimistes/", label: "Rencontrer les fondateurs d'Alkymya" },
        { href: "/contact/", label: "Contacter Alkymya à Ozoir-la-Ferrière" }
      ]
    }
  },
  {
    path: '/ia',
    title: "Création d'Agents IA & Démonstrateurs Métiers | Alkymya",
    description: "Studio création IA et générateur d'agents IA sur mesure : personas vidéo, études Génération IA 2024-2026 et accompagnement intelligence artificielle.",
    h1: "Génération IA & création d'agents IA sur mesure.",
    ogImage: "https://alkymya.co/og-ia.jpg",
    lastmod: "2026-11-15",
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
      leadParagraph: "Explorez en direct la puissance d'Alkymya, studio IA et organisme de formation à Ozoir-la-Ferrière : accompagnement intelligence artificielle, création d'agents IA sur mesure, personas vidéo et stratégie SEO et GEO.",
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
    description: "Trois études de cas mesurées (thelittle77, 75 et 83), agents IA autonomes en production et direction artistique IA par Alkymya à Ozoir-la-Ferrière.",
    ogTitle: "Études de cas SEO, IA & création éditoriale — Alkymya",
    ogDescription: "Trois études de cas mesurées (thelittle77, 75 et 83), agents IA autonomes en production et direction artistique IA par Alkymya à Ozoir-la-Ferrière.",
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
      leadParagraph: "Alkymya, studio IA et organisme de formation à Ozoir-la-Ferrière, publie ici les résultats mesurés de ses trois études de cas éditoriales en production (thelittle77.fr, thelittle75.fr et thelittle83.fr), ses quatre agents IA autonomes et ses séries de direction artistique générative.",
      sections: [
        {
          h2: "Trois études de cas SEO & GEO mesurées en production (relevé du 12 nov. 2026)",
          paragraphs: [
            "Plutôt que d'avancer des promesses abstraites, Alkymya exploite trois sites éditoriaux territoriaux comme laboratoires grandeur nature. Chacun valide notre architecture sémantique, nos agents IA éditoriaux et notre pilotage Google Search & AI Overviews sans achat publicitaire ni backlinks payants.",
            "À ce jour, ces trois plateformes cumulent 387 URLs indexables, 279 198 mots éditoriaux publiés et 1 219 images documentées sur le terrain."
          ],
          listItems: [
            "thelittle77.fr (Créateur : Cyril Garnier) — Construit en 3 mois : 216 URLs, 149 392 mots, 652 images, 275 000 vues mensuelles sans publicité, 1ère page Google sur les paysages de Seine-et-Marne et position 7 devant Wikipedia sur Moulin de Belle-Assise, avec 93 apparitions AI Overviews.",
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
        { href: "/ateliers/", label: "Se former à nos outils lors d'un atelier IA Qualiopi" },
        { href: "/alchimistes/", label: "Rencontrer Cyril Garnier et Léonie Egesipe" },
        { href: "/contact/", label: "Lancer un projet éditorial ou agent IA →" }
      ]
    }
  },
  {
    path: '/ateliers',
    title: "Ateliers IA pour équipes en Île-de-France — Alkymya",
    description: "Ateliers IA pratiques en Île-de-France depuis Ozoir-la-Ferrière : formation IA certifiée Qualiopi finançable OPCO, agents IA métiers et conformité IA Act.",
    h1: "Atelier IA pratique & formation IA entreprise Qualiopi.",
    ogImage: "https://alkymya.co/og-ateliers.jpg",
    lastmod: "2026-11-15",
    schemaType: "Course",
    content: {
      leadParagraph: "Ateliers IA pour équipes en Île-de-France avec Alkymya, studio IA et organisme de formation à Ozoir-la-Ferrière : formation IA entreprise certifiée Qualiopi finançable OPCO, audit Capital IA et création d'agents IA métiers.",
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
            "Formation Core IA (14h) : bibliothèque de prompts maîtres prêts à l'emploi, guides pas-à-pas de prompt engineering, supports complets, attestation de fin de formation Qualiopi et suivi post-formation pendant 1 mois.",
            "Option A — Agents IA (3h30) : conception et déploiement effectif de 3 agents intelligents autonomes connectés à Slack, Notion ou CRM, scénarios Make/Zapier exportables et documentation technique.",
            "Option B — App No-Code (3h30) : une application web interne déployée sur URL sécurisée, interconnectée aux API de Google Gemini ou OpenAI GPT, avec formation à l'administration.",
            "Option C — Éthique & IA Act (3h30) : matrice d'audit de conformité réglementaire, grille de classification des risques et protocole de sécurisation des données d'entreprise."
          ]
        },
        {
          h2: "Comment se déroule concrètement la formation (présentiel & distanciel) ?",
          paragraphs: [
            "Nous privilégions un ratio strict de 80 % de pratique pour 20 % d'apports méthodologiques. Les sessions peuvent se tenir en présentiel dans vos locaux (en Seine-et-Marne, à Ozoir-la-Ferrière, à Paris et partout en Île-de-France), dans nos espaces partenaires, ou en classe virtuelle synchrone haute interaction.",
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
          h2: "Preuves de performance, certification Qualiopi et financements OPCO",
          paragraphs: [
            "Portée en alliance avec l'école INATEC et titulaire de la certification d'État Qualiopi pour les actions de formation, notre offre est éligible à une prise en charge financière pouvant atteindre 100 % par votre Opérateur de Compétences (OPCO).",
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
    title: "Ressources IA, Veille SEO & Outils Gratuits | Alkymya",
    description: "Veille SEO IA, analyseurs intelligents gratuits, études Génération IA et création site éditorial par l'agence IA et studio création IA Alkymya.",
    h1: "Ressources IA, veille SEO IA & outils gratuits.",
    ogImage: "https://alkymya.co/og-ressources.jpg",
    lastmod: "2026-11-15",
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
      leadParagraph: "Bibliothèque ouverte d'Alkymya, studio IA et organisme de formation à Ozoir-la-Ferrière : quatre pôles de ressources en accès libre réunissant nos analyseurs intelligents, nos enquêtes longitudinales Génération IA, le business game NoNo BanaBa et les capsules vidéo Qualiopi avec INATEC.",
      sections: [
        {
          h2: "1. Nos analyseurs IA gratuits en production",
          paragraphs: [
            "Alkymya met à disposition des étudiants, candidats et équipes éditoriales des applications web gratuites permettant d'éprouver immédiatement les apports de l'intelligence artificielle générative sur des documents réels."
          ],
          listItems: [
            "Analyseur de photo (analyseurdephoto.alkymya.co) : explorer, retoucher et extraire des métadonnées ou descriptions alt exploitables pour vos séries visuelles et sites éditoriaux.",
            "Analyseur de CV (analysercvpro.alkymya.co), conçu avec Kendra Martine d'Objectif Alternance : comparer vos compétences aux offres d'emploi ou d'alternance cibles et obtenir des reformulations directement actionnables.",
            "Analyseur de mémoire (analyseurdememoire.alkymya.co) : diagnostiquer la cohérence des plans de mémoires et thèses académiques, vérifier les sources clés et repérer les angles morts méthodologiques."
          ]
        },
        {
          h2: "2. Nos études Génération IA (2024-2026) & La Doctrine IAG",
          paragraphs: [
            "Chaque année depuis 2024, Alkymya publie en accès libre les résultats empiriques de son enquête Génération IA menée auprès de plus de 380 étudiants et enseignants issus d'écoles partenaires (HETIC, IÉSEG, ISCOM, Ynov). Ces études documentent l'évolution des usages, les freins éthiques et les besoins d'encadrement en entreprise.",
            "Notre bibliothèque inclut également La Doctrine IAG (dialogue en PDF et podcast audio de 5 min 43) consacrée aux enjeux industriels, technologiques et géopolitiques de l'intelligence artificielle générative pour les dirigeants et stratèges."
          ],
          listItems: [
            "Rapport Génération IA 2026 : métriques terrain, signaux faibles et recommandations opérationnelles pour les DRH et responsables pédagogiques.",
            "Génération IA 2025 (Personas) : segmentation comportementale en 5 profils types pour calibrer vos cursus et agents IA.",
            "Génération IA 2024 & La Doctrine IAG (PDF + Podcast audio) : accès libre sans inscription obligatoire."
          ]
        },
        {
          h2: "3. Business Game NoNo BanaBa & capsules vidéo Alkymya x INATEC",
          paragraphs: [
            "Pour ancrer les concepts de stratégie data, de marketing digital et de modèle économique par le jeu, nos intervenants déploient le business game NoNo BanaBa en séminaires d'équipe et en grandes écoles.",
            "Enfin, cinq capsules vidéo réalisées avec notre partenaire Qualiopi INATEC (Partenariat d'Avenir, Efficacité Augmentée, Synergie Créative, Le Futur en Marche, Performance Digitale) illustrent comment déployer une formation IA finançable jusqu'à 100 % par votre OPCO."
          ]
        }
      ],
      internalLinks: [
        { href: "/oeuvres/", label: "Voir nos études de cas SEO et GEO en production" },
        { href: "/ateliers/", label: "Participer à un atelier d'application pratique" },
        { href: "/ia/", label: "Tester nos 5 personas vidéo et le générateur IA" },
        { href: "/contact/", label: "Suggérer une thématique ou demander un atelier" }
      ]
    }
  },
  {
    path: '/alchimistes',
    title: "Experts IA France & Fondateurs Agence IA | Alkymya",
    description: "Experts IA France : Cyril Garnier, Léonie Egesipe, Véronique Landereau et Mariana Didier Laurent. Accompagnement IA dirigeants et indépendants.",
    h1: "Experts IA France : l'équipe d'Alkymya à Ozoir-la-Ferrière.",
    ogImage: "https://alkymya.co/og-alchimistes.jpg",
    lastmod: "2026-11-15",
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
      leadParagraph: "Derrière Alkymya, studio IA et organisme de formation à Ozoir-la-Ferrière, six alchimistes complémentaires assurent l'accompagnement IA dirigeants et indépendants, la stratégie SEO et GEO, la gouvernance data, l'insertion professionnelle, l'innovation santé et les services à la personne.",
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
            "Co-fondatrice de New Health Paradigm et formée à Gustave Roussy Éducation, Véronique Landereau consacre son activité aux projets de santé qui placent la prévention, le maintien à domicile et l'accompagnement des aidants au cœur de leur modèle.",
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
        { href: "/ateliers/", label: "Être formé par les experts d'Alkymya" },
        { href: "/newbusiness/", label: "Rejoindre le programme New Business MVP" },
        { href: "/oeuvres/", label: "Voir les réalisations des Alchimistes" },
        { href: "/contact/", label: "Échanger avec nos Alchimistes" }
      ]
    }
  },
  {
    path: '/partenaires',
    title: "Partenaires Formation IA & Grandes Écoles | Alkymya",
    description: "Partenariats formation IA Alkymya : recrutement d'alternants avec Objectif Alternance, interventions en école (HETIC, Ynov, IÉSEG) et projets étudiants.",
    h1: "Partenaires formation IA & alliances stratégiques.",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-15",
    schemaType: "WebPage",
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
        alt: "Logo INATEC — partenaire certification Qualiopi et financement OPCO avec Alkymya",
        width: 240,
        height: 120,
        caption: "INATEC — Portage Qualiopi & Ingénierie Pédagogique"
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
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785830/IESEG_logo_zzx1aa.jpg",
        alt: "Logo IÉSEG — école de management partenaire séminaires stratégie et IA",
        width: 240,
        height: 120
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785836/CFA_ITIS_logo_vetgdg.webp",
        alt: "Logo CFA Itis — formation apprentis en Seine-et-Marne et Île-de-France",
        width: 240,
        height: 120
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1777819108/t%C3%A9l%C3%A9chargement_16_j060qu.jpg",
        alt: "Logo SNCF — partenaire historique d'accompagnement entrepreneurial",
        width: 240,
        height: 120
      },
      {
        src: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759925019/logo-fondation-grdf_wx9kpo.png",
        alt: "Logo Fondation GRDF — accompagnement de projets à impact territorial",
        width: 240,
        height: 120
      }
    ],
    content: {
      leadParagraph: "Alkymya, studio IA et organisme de formation à Ozoir-la-Ferrière, fédère plus de 15 écoles supérieures, fondations et partenaires d'insertion autour de trois missions concrètes : le recrutement d'alternants, les interventions pédagogiques en école et la supervision de projets étudiants réels.",
      sections: [
        {
          h2: "Recrutement d'alternants & insertion avec Objectif Alternance",
          paragraphs: [
            "Notre alliance stratégique avec Objectif Alternance (dirigé par Kendra Martine) relie directement les TPE/PME en croissance aux jeunes talents formés aux outils d'intelligence artificielle générative. Ensemble, nous couplons l'Analyseur de CV IA gratuit d'Alkymya à un coaching emploi humain sur mesure.",
            "Les alternants intégrés dans nos entreprises partenaires maîtrisent dès la prise de poste la veille automatisée, la structuration éditoriale SEO/GEO et l'usage responsable des modèles de langage, raccourcissant de moitié leur temps de montée en autonomie."
          ]
        },
        {
          h2: "Interventions en école, hackathons et jurys de projets étudiants",
          paragraphs: [
            "Nos alchimistes interviennent chaque semestre dans les cursus de plus de huit grandes écoles et campus spécialisés : HETIC (ateliers produit web et jurys), Ynov Campus (prompt engineering, agents IA et hackathons), IÉSEG (séminaires de stratégie business), CFA Itis (parcours apprentis en Seine-et-Marne), EURIDIS (prospection B2B augmentée), ISCOM (direction artistique et stratégie de marque) et Paris École de Management.",
            "Plus de 450 étudiants et apprentis ont déjà éprouvé nos business games (NoNo BanaBa) et nos démonstrateurs métiers, alimentant en retour nos enquêtes annuelles Génération IA 2024, 2025 et 2026."
          ]
        },
        {
          h2: "Alliances Qualiopi, territoires et entreprises engagées",
          paragraphs: [
            "Grâce au portage pédagogique et à la certification Qualiopi d'INATEC, l'ensemble de nos formations inter et intra-entreprises bénéficie d'une éligibilité OPCO pouvant couvrir jusqu'à 100 % du coût pédagogique pour les TPE, PME et grands comptes d'Île-de-France.",
            "Notre écosystème réunit également des acteurs de terrain et d'innovation tels que SNCF, Morning Coworking (accueil d'ateliers en présentiel en Île-de-France), la Fondation GRDF, SEALESTER, la Fondation Flamenca, Azimuto, La Ressourcerie Gaillarde, Onecub, New Health Paradigm et Esperanta Services.",
            "Chaque partenariat donne lieu à des livrables tangibles : diagnostics de maturité IA pour dirigeants, déploiement de workflows documentaires conformes à l'IA Act, ateliers de direction artistique générative et accompagnement vers la création d'activité ou l'employabilité durable des apprenants."
          ]
        }
      ],
      internalLinks: [
        { href: "/rejoindre/", label: "Découvrir le parcours de nos jeunes talents & alternants" },
        { href: "/ateliers/", label: "Découvrir les programmes dispensés aux partenaires" },
        { href: "/alchimistes/", label: "Rencontrer notre équipe pédagogique" },
        { href: "/contact/", label: "Devenir établissement ou entreprise partenaire" }
      ]
    }
  },
  {
    path: '/contact',
    title: "Contact — formation IA et conseil, Ozoir-la-Ferrière",
    description: "Contactez Alkymya, studio IA et organisme de formation à Ozoir-la-Ferrière (77) : devis formation Qualiopi OPCO, ateliers IA et accompagnement dirigeants.",
    h1: "Contactez Alkymya : formation IA & conseil à Ozoir-la-Ferrière.",
    ogImage: "https://alkymya.co/og-contact.jpg",
    lastmod: "2026-11-15",
    schemaType: "ContactPage",
    content: {
      leadParagraph: "Échangez avec Alkymya, studio IA et organisme de formation à Ozoir-la-Ferrière (Seine-et-Marne), pour un devis formation IA Qualiopi finançable OPCO, un atelier d'agents IA en Île-de-France ou un accompagnement New Business MVP.",
      sections: [
        {
          h2: "Devis formation IA Qualiopi & accompagnement dirigeants",
          paragraphs: [
            "Que vous représentiez une grande école souhaitant intégrer un module IA innovant, une PME d'Île-de-France en quête d'optimisation de ses processus, ou un porteur de projet visant à lancer son MVP, notre équipe vous répond sous 24 à 48 heures."
          ],
          listItems: [
            "Formations certifiantes éligibles au financement OPCO (Qualiopi via INATEC).",
            "Ateliers intensifs de création d'agents IA et de prompt engineering.",
            "Accompagnement New Business MVP pour valider votre offre terrain en 6 mois.",
            "Conférences, keynotes inspirantes et business games pour vos séminaires."
          ]
        },
        {
          h2: "Nos coordonnées et localisation en Seine-et-Marne",
          paragraphs: [
            "Alkymya — Studio IA et organisme de formation, Ozoir-la-Ferrière, Seine-et-Marne (77330), Île-de-France.",
            "Email direct : contact@alkymya.co • Téléphone : +33 1 89 71 32 40."
          ]
        }
      ],
      internalLinks: [
        { href: "/ateliers/", label: "Explorer le catalogue de nos ateliers" },
        { href: "/faq/", label: "Consulter les réponses aux questions fréquentes" },
        { href: "/newbusiness/", label: "Candidater au programme New Business MVP" }
      ]
    }
  },
  {
    path: '/faq',
    title: "FAQ Agence IA : Qualiopi, OPCO & Agents IA | Alkymya",
    description: "Réponses sur Alkymya (studio IA à Ozoir-la-Ferrière), formation IA entreprise certifiée Qualiopi, financement OPCO et création d'agents IA.",
    h1: "FAQ Alkymya : identité, formation Qualiopi & agents IA.",
    ogImage: "https://alkymya.co/og-faq.jpg",
    lastmod: "2026-11-15",
    schemaType: "FAQPage",
    content: {
      leadParagraph: "Toutes les réponses sur Alkymya (studio IA et organisme de formation à Ozoir-la-Ferrière), la formation IA entreprise certifiée Qualiopi finançable OPCO, la création d'agents IA sur mesure et le programme New Business MVP.",
      sections: [
        {
          h2: "Identité d'Alkymya & désambiguïsation",
          paragraphs: [
            "Alkymya (alkymya.co) est un studio d'intelligence artificielle et organisme de formation professionnelle fondé par Cyril Garnier et Léonie Egesipe, implanté à Ozoir-la-Ferrière en Seine-et-Marne (77)."
          ],
          listItems: [
            "Qu'est-ce qu'Alkymya ? Alkymya (alkymya.co) est un studio IA et organisme de formation certifié Qualiopi basé à Ozoir-la-Ferrière (Seine-et-Marne), spécialisé en formation IA en entreprise, création d'agents IA sur mesure, stratégie SEO/GEO et accompagnement New Business MVP.",
            "Alkymya, est-ce un restaurant ? Non. Alkymya (alkymya.co) est exclusivement un studio d'intelligence artificielle et organisme de formation professionnelle en France (Ozoir-la-Ferrière, 77) — sans aucun lien avec le restaurant Alkymya Bellini de Naples, ni avec le groupe de musique Alkymya Music, ni avec le livre brésilien Alkymya de Assustos."
          ]
        },
        {
          h2: "Questions fréquentes : formation IA Qualiopi, OPCO & agents IA",
          paragraphs: [
            "Nous mettons un point d'honneur à apporter une transparence totale sur le contenu de nos formations, les profils des intervenants et les modalités financières."
          ],
          listItems: [
            "Quel est le format des ateliers d'agents IA ? Des sessions intensives de 3h30 pour concevoir et déployer 3 agents intelligents autonomes connectés à vos outils métiers.",
            "Les formations sont-elles finançables par un OPCO ? Oui, grâce au partenariat avec INATEC et à la certification d'État Qualiopi, la prise en charge peut atteindre 100%.",
            "Qu'est-ce que l'offre New Business MVP ? Un accompagnement de 6 mois à 200 € / mois pour concevoir votre MVP, tester votre offre auprès de clients réels et piloter avec lucidité.",
            "Quels établissements font confiance à Alkymya ? HETIC, Ynov, IÉSEG, CFA Itis, Paris École de Management, SNCF, Morning Coworking, Fondation GRDF et Objectif Alternance."
          ]
        }
      ],
      internalLinks: [
        { href: "/ateliers/", label: "Consulter nos offres de formation détaillées" },
        { href: "/contact/", label: "Poser une question spécifique à notre équipe" }
      ]
    }
  },
  {
    path: '/rejoindre',
    title: "Rejoindre l'Agence IA Alkymya | Experts IA France",
    description: "Rejoignez Alkymya à Ozoir-la-Ferrière : formateurs IA Qualiopi, concepteurs d'agents autonomes et alternants formés sur des projets réels en production.",
    h1: "Rejoindre Alkymya : experts IA, formateurs & jeunes talents.",
    ogImage: "https://alkymya.co/og-rejoindre.jpg",
    lastmod: "2026-11-15",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Alkymya, studio IA et organisme de formation à Ozoir-la-Ferrière, recrute des formateurs Qualiopi, des concepteurs d'agents IA et accueille chaque année des alternants et jeunes talents sur des projets en production réelle.",
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
      leadParagraph: "Accompagnement IA dirigeants et indépendants sur 6 mois avec Alkymya (Ozoir-la-Ferrière) : concevez votre MVP, déployez des agents IA sur mesure et validez votre stratégie SEO et GEO auprès de vrais clients grâce aux méthodes éprouvées sur nos trois études de cas TheLittle.",
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
    description: "Mentions légales d'Alkymya, studio IA et organisme de formation à Ozoir-la-Ferrière : conformité RGPD, hébergement cloud et propriété intellectuelle.",
    h1: "Mentions légales Alkymya (Ozoir-la-Ferrière) & RGPD.",
    ogImage: "https://alkymya.co/og-mentions.jpg",
    lastmod: "2026-11-15",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Consultez les mentions légales d'Alkymya, studio IA et organisme de formation à Ozoir-la-Ferrière (Seine-et-Marne), ainsi que notre politique stricte de confidentialité RGPD.",
      sections: [
        {
          h2: "Éditeur du site et direction de publication",
          paragraphs: [
            "Le site internet alkymya.co est édité par Alkymya, studio IA et organisme de formation professionnelle, domicilié à Ozoir-la-Ferrière, Seine-et-Marne (77330), France.",
            "Direction de la publication : Cyril Garnier (cyrilgarnier.fr) et Léonie Egesipe. Contact : contact@alkymya.co."
          ]
        },
        {
          h2: "Protection des données personnelles et respect du RGPD",
          paragraphs: [
            "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, les informations recueillies via nos formulaires sont exclusivement destinées au traitement de vos demandes de contact ou de candidature.",
            "Aucune donnée personnelle n'est cédée, louée ou vendue à des tiers. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données en écrivant à contact@alkymya.co."
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
        { href: "/ateliers/", label: "Consulter nos formations certifiées Qualiopi" },
        { href: "/contact/", label: "Exercer vos droits d'accès aux données personnelles" }
      ]
    }
  }
];
