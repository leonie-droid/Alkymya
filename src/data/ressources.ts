export interface ExpertInfo {
  name: string;
  role: string;
  avatar: string;
  hook: string;
  siteUrl: string;
  siteLabel: string;
}

export interface ResourceItem {
  id: number;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  url: string;
  type: 'video' | 'pdf' | 'audio' | 'site' | 'app';
  appUrl?: string;
  audioUrl?: string;
  pdfUrl?: string;
  imageUrl?: string;
  expert?: ExpertInfo;
}

export interface ResourceCategory {
  slug: string;
  name: string;
  eyebrow: string;
  h1Lead: string;
  h1Accent: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  cardSummary: string;
}

export const resourceCategories: ResourceCategory[] = [
  {
    slug: "nos-analyseurs",
    name: "Nos Analyseurs",
    eyebrow: "Analyseurs IA Gratuits · Outils en Ligne",
    h1Lead: "Nos Analyseurs IA",
    h1Accent: "gratuits en production.",
    description:
      "Testez nos trois outils IA ouverts sans inscription : Analyseur de photo, Analyseur de CV (avec Kendra Martine d'Objectif Alternance) et Analyseur de mémoire académique.",
    seoTitle: "Nos Analyseurs IA Gratuits | Ressources Alkymya",
    seoDescription:
      "Analyseur de photo, Analyseur de CV avec Kendra Martine et Analyseur de mémoire : outils IA gratuits en production par Alkymya.",
    keywords:
      "analyseur de photo IA, analyseur de CV gratuit, analyseur de mémoire IA, Kendra Martine Objectif Alternance, outils IA gratuits Alkymya",
    cardSummary:
      "Trois outils web gratuits pour explorer vos photos, optimiser votre CV ou diagnostiquer un mémoire académique."
  },
  {
    slug: "nos-etudes",
    name: "Nos études",
    eyebrow: "Enquêtes & Publications · Accès Libre",
    h1Lead: "Nos études",
    h1Accent: "Génération IA & Doctrine IAG.",
    description:
      "Consultez et téléchargez gratuitement nos trois rapports longitudinaux Génération IA (2024, 2025, 2026) auprès de 1 082 étudiants ainsi que La Doctrine IAG en PDF et podcast audio.",
    seoTitle: "Nos Études Génération IA & Doctrine IAG | Alkymya",
    seoDescription:
      "Téléchargez gratuitement nos études Génération IA (2024, 2025, 2026) auprès de 1 082 étudiants et La Doctrine IAG en PDF et podcast.",
    keywords:
      "étude Génération IA 2026, Génération IA 2025 personas, Génération IA 2024, La Doctrine IAG, podcast IA Alkymya",
    cardSummary:
      "Rapports PDF et podcasts audio sur les usages IA de 1 082 étudiants (2024-2026) et La Doctrine IAG."
  },
  {
    slug: "business-game",
    name: "Business Game",
    eyebrow: "Pédagogie Active & Stratégie · Gen Z",
    h1Lead: "Business Game",
    h1Accent: "NoNo BanaBa en action.",
    description:
      "Explorez le web-marketing, l'analyse de données et les business modèles contemporains au travers de notre simulation interactive utilisée en grandes écoles et séminaires d'équipe.",
    seoTitle: "Business Game NoNo BanaBa | Ressources Alkymya",
    seoDescription:
      "Découvrez NoNo BanaBa, le business game pédagogique d'Alkymya pour explorer data, web-marketing et stratégie en école ou entreprise.",
    keywords:
      "NoNo BanaBa, business game IA, jeu pédagogique stratégie data, atelier grande école Alkymya",
    cardSummary:
      "Simulation interactive autour d'une marque Gen Z pour expérimenter data, web-marketing et business modèles."
  },
  {
    slug: "alkymya-x-inatec",
    name: "Alkymya x Inatec",
    eyebrow: "Partenariat Certifié Qualiopi & OPCO",
    h1Lead: "Alkymya x INATEC :",
    h1Accent: "capsules vidéo & OPCO.",
    description:
      "Cinq capsules vidéo illustrant notre collaboration avec INATEC, organisme partenaire certifié Qualiopi, pour déployer des formations IA pratiques et finançables OPCO.",
    seoTitle: "Alkymya x INATEC : Capsules & OPCO | Ressources",
    seoDescription:
      "Découvrez nos 5 capsules vidéo réalisées avec INATEC, organisme partenaire certifié Qualiopi, pour des formations IA finançables OPCO.",
    keywords:
      "Alkymya INATEC, organisme partenaire certifié Qualiopi, formation IA OPCO, capsules vidéo IA entreprise",
    cardSummary:
      "Cinq capsules vidéo dédiées à la performance digitale et au portage OPCO avec notre partenaire certifié Qualiopi INATEC."
  },
  {
    slug: "partenaires",
    name: "Partenaires",
    eyebrow: "Ressources · Partenaires",
    h1Lead: "Les outils et acteurs avec lesquels",
    h1Accent: "nous travaillons.",
    description:
      "Technologie, formation, territoire : un écosystème choisi pour sa fiabilité, sa souveraineté et son utilité concrète, dont AWA Cloud.",
    seoTitle: "Nos Partenaires IA & Technologie | Ressources Alkymya",
    seoDescription:
      "Découvrez l'écosystème de partenaires technologiques et pédagogiques d'Alkymya : AWA Cloud, INATEC et les laboratoires éditoriaux TheLittle.",
    keywords:
      "partenaires IA France, AWA Cloud, INATEC Qualiopi, TheLittle SEO GEO, ressources partenaires Alkymya",
    cardSummary:
      "Les outils et acteurs recommandés par Alkymya : AWA Cloud (documents & RAG local), INATEC et TheLittle."
  }
];

export const resources: ResourceItem[] = [
  {
    id: 1,
    title: "Analyseur de photo",
    category: "Nos Analyseurs",
    categorySlug: "nos-analyseurs",
    description:
      "Analyseur de photo vous permet d'explorer, de retoucher et de métamorphoser vos images en un instant. Idéal pour tester des cadrages éditoriaux, extraire des descriptions alt et préparer des séries visuelles.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1773761166/46b26247d1084cb39b354fe4c9842b29_aszzay_f48sjs.mov",
    appUrl: "https://analyseurdephoto.alkymya.co/",
    type: "video"
  },
  {
    id: 2,
    title: "Analyseur de CV",
    category: "Nos Analyseurs",
    categorySlug: "nos-analyseurs",
    description:
      "Outil IA gratuit pour optimiser votre CV et maximiser vos chances de décrocher le poste de vos rêves. Compare vos compétences aux offres cibles et suggère des reformulations directement actionnables.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1773762096/c599dc6cd0ef4e6196a739c87b2cb773_gxn0lj.mov",
    appUrl: "https://analysercvpro.alkymya.co/",
    type: "video",
    expert: {
      name: "Kendra Martine",
      role: "Fondatrice d'Objectif Alternance & Coach Emploi",
      avatar:
        "https://res.cloudinary.com/dokzioyu4/image/upload/f_auto,q_auto,w_600,c_limit/v1788941994/0c39dd0a7f91200361816f2b88d68802_cwzov0.jpg",
      hook: "Boostez vos candidatures : associez l'optimisation IA de votre CV à un coaching humain sur-mesure pour décrocher l'alternance ou le poste fait pour vous.",
      siteUrl: "https://www.objectifalternance.fr/",
      siteLabel: "Découvrir Objectif Alternance"
    }
  },
  {
    id: 3,
    title: "Analyseur de mémoire",
    category: "Nos Analyseurs",
    categorySlug: "nos-analyseurs",
    description:
      "Outil puissant pour analyser en profondeur les mémoires et thèses d'étudiants et chercheurs. Identifie les points de vigilance méthodologiques, vérifie la cohérence des plans et synthétise les sources clés.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1776374160/bac00848173641fd882d43dc3b970835_jtyspz.mov",
    appUrl: "https://analyseurdememoire.alkymya.co/",
    type: "video"
  },
  {
    id: 17,
    title: "La Doctrine IAG",
    category: "Nos études",
    categorySlug: "nos-etudes",
    description:
      "Dialogue sur la Stratégie Cachée de l'Ère Trump. Analyse prospective et décryptage approfondi des enjeux géopolitiques, technologiques et industriels de l'IAG pour dirigeants et stratèges.",
    url: "https://res.cloudinary.com/dyooqwryq/image/upload/v1762315350/La_Doctrine_IAG___Dialogue_sur_la_Strat%C3%A9gie_Cach%C3%A9e_de_l_%C3%88re_Trump_zwxlqi.pdf",
    audioUrl: "https://res.cloudinary.com/dyooqwryq/video/upload/v1762315917/merged_audio.19bea92d_cunpbi.mp3",
    type: "pdf"
  },
  {
    id: 18,
    title: "Podcast • La Doctrine IAG",
    category: "Nos études",
    categorySlug: "nos-etudes",
    description:
      "Dialogue et synthèse audio immersive : explorez en profondeur la thèse, les stratégies cachées et les implications de la Doctrine IAG sous l'ère Trump (5 min 43) en format écoute directe.",
    url: "https://res.cloudinary.com/dyooqwryq/video/upload/v1762315917/merged_audio.19bea92d_cunpbi.mp3",
    pdfUrl:
      "https://res.cloudinary.com/dyooqwryq/image/upload/v1762315350/La_Doctrine_IAG___Dialogue_sur_la_Strat%C3%A9gie_Cach%C3%A9e_de_l_%C3%88re_Trump_zwxlqi.pdf",
    type: "audio"
  },
  {
    id: 6,
    title: "Génération IA 2026",
    category: "Nos études",
    categorySlug: "nos-etudes",
    description:
      "Notre tout nouveau rapport complet sur l'impact futur, les usages et l'évolution de l'intelligence artificielle générative pour 2026. Rassemble métriques terrain, signaux faibles et recommandations DRH.",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1780148789/rapport-generation-ia-2026_v10_20260528_tymyph.pdf",
    type: "pdf"
  },
  {
    id: 7,
    title: "Génération IA 2025",
    category: "Nos études",
    categorySlug: "nos-etudes",
    description:
      "Une segmentation approfondie en 5 profils types (personas) pour refléter la diversité des usages et des niveaux de maîtrise de l'IA générative dans les écoles et les équipes métiers.",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1777491985/generation_ia_2025_personas_20251105051526_qvl18j_1_jjn9s4.pdf",
    type: "pdf"
  },
  {
    id: 8,
    title: "Génération IA 2024",
    category: "Nos études",
    categorySlug: "nos-etudes",
    description:
      "Une analyse empirique détaillée sur l'introduction et l'usage des outils d'intelligence artificielle auprès de centaines d'étudiants de l'enseignement supérieur et leurs premiers réflexes professionnels.",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1777491668/Generation_IA-2024-V1_Mars_2025_2_cxtaeh_ygnyce.pdf",
    type: "pdf"
  },
  {
    id: 4,
    title: "NoNo BanaBa",
    category: "Business Game",
    categorySlug: "business-game",
    description:
      "Au travers de la marque fashion de la Gen Z, explorez la data, le web-marketing et les business modèles contemporains en atelier de grande école ou lors d'un séminaire d'équipe.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1777905236/Vide%CC%81o_publicitaire_e%CC%81lectro_pop_cre%CC%81e%CC%81e_oydyo3_xxtwtb.mp4",
    appUrl: "https://nonobanaba.netlify.app/",
    type: "video"
  },
  {
    id: 10,
    title: "Partenariat d'Avenir",
    category: "Alkymya x Inatec",
    categorySlug: "alkymya-x-inatec",
    description:
      "Découvrez l'introduction de notre collaboration avec INATEC, organisme partenaire certifié Qualiopi, alliant excellence pédagogique et IA de pointe pour rendre les formations finançables OPCO.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1780954428/reel_01_v2_3_zwqjnw.mp4",
    type: "video"
  },
  {
    id: 11,
    title: "Efficacité Augmentée",
    category: "Alkymya x Inatec",
    categorySlug: "alkymya-x-inatec",
    description:
      "Optimisation des processus et automatisation intelligente : plongez au cœur des métiers de demain avec des démonstrations concrètes de gains de temps hebdomadaires.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1780954633/reel_02_p2_2_ggfpvz.mp4",
    type: "video"
  },
  {
    id: 12,
    title: "Synergie Créative",
    category: "Alkymya x Inatec",
    categorySlug: "alkymya-x-inatec",
    description:
      "Exploration de l'intégration créative des nouvelles technologies au sein des environnements collaboratifs pour stimuler l'autonomie des apprenants et managers.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1780954632/reel_03_v2_2_bms3f4.mp4",
    type: "video"
  },
  {
    id: 13,
    title: "Le Futur en Marche",
    category: "Alkymya x Inatec",
    categorySlug: "alkymya-x-inatec",
    description:
      "Comment transformer les défis organisationnels en opportunités grâce à la puissance des algorithmes génératifs et à un encadrement pragmatique sur le terrain.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1780954634/reel_01_p2_2_stdxyh.mp4",
    type: "video"
  },
  {
    id: 14,
    title: "Performance Digitale",
    category: "Alkymya x Inatec",
    categorySlug: "alkymya-x-inatec",
    description:
      "Visualisez la mise en œuvre concrète de nos solutions digitales de pointe et leur impact direct sur la performance opérationnelle des PME accompagnées.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1780954634/reel_04_v2_2_ozedom.mp4",
    type: "video"
  }
];
