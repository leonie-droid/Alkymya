import {
  INTERVIEW_GEMINI_4_PATH,
  INTERVIEW_GEMINI_4_PDF_URL
} from './etudeGemini4';

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
  articlePath?: string;
  expert?: ExpertInfo;
}

export interface ResourceCategory {
  slug: string;
  path: string;
  name: string;
  eyebrow: string;
  h1Lead: string;
  h1Accent: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  cardSummary: string;
  countLabel: string;
}

export const resourceCategories: ResourceCategory[] = [
  {
    slug: 'etudes',
    path: '/ressources/etudes/',
    name: 'Nos études',
    eyebrow: 'Enquêtes Empiriques & Analyses · Accès Libre',
    h1Lead: 'Nos études IA :',
    h1Accent: 'Génération IA (2024–2026), Gemini 4 & Doctrine IAG.',
    description:
      "L'intégralité de nos recherches longitudinales (1 082 étudiants interrogés), tableaux chiffrés HTML, limites méthodologiques, La Doctrine IAG (PDF + podcast audio) et l'Interview Gemini 4 en pages indexées et téléchargeables.",
    seoTitle: 'Études IA : Génération IA 2024–2026, Gemini 4 & IAG | Alkymya',
    seoDescription:
      'Consultez les 5 études publiées par Alkymya avec chiffres clés, tableaux HTML et PDF : Génération IA 2026 (1 082 étudiants), 2025, 2024, Doctrine IAG et Gemini 4.',
    keywords:
      'étude Génération IA 2026, Génération IA 2025 personas, Génération IA 2024, La Doctrine IAG, Interview Gemini 4, études IA Alkymya',
    cardSummary:
      'Cinq études complètes en HTML + tableaux + PDF : Génération IA 2026 (n=1 082), 2025, 2024, La Doctrine IAG (+ audio) et Interview Gemini 4.',
    countLabel: '5 études publiées'
  },
  {
    slug: 'analyseurs',
    path: '/ressources/analyseurs/',
    name: 'Nos Analyseurs',
    eyebrow: 'Outils IA Gratuits en Production',
    h1Lead: 'Nos Analyseurs IA',
    h1Accent: 'gratuits et documentés.',
    description:
      "Trois applications web ouvertes sans inscription : Analyseur de photo, Analyseur de CV (en partenariat avec Kendra Martine d'Objectif Alternance) et Analyseur de mémoire académique.",
    seoTitle: 'Analyseurs IA Gratuits : Photo, CV & Mémoire | Alkymya',
    seoDescription:
      'Découvrez et lancez nos 3 analyseurs IA gratuits en production (Photo, CV avec Objectif Alternance, Mémoire académique) avec mode d’emploi et garanties de confidentialité.',
    keywords:
      'analyseur de photo IA, analyseur de CV gratuit, analyseur de mémoire IA, Objectif Alternance, outils IA gratuits Alkymya',
    cardSummary:
      'Trois outils gratuits documentés (ce qu’ils font, limites, confidentialité) : Photo, CV et Mémoire académique.',
    countLabel: '3 outils en ligne'
  },
  {
    slug: 'business-game',
    path: '/ressources/business-game/',
    name: 'Business Game',
    eyebrow: 'Pédagogie Active & Stratégie · Gen Z',
    h1Lead: 'Business Game',
    h1Accent: 'NoNo BanaBa en action.',
    description:
      "Simulation interactive autour de la marque fashion Gen Z NoNo BanaBa : web-marketing, analyse de données, arbitrages financiers et usage raisonné de l'IA en grandes écoles et séminaires PME.",
    seoTitle: 'Business Game NoNo BanaBa : Simulation Stratégie & Data | Alkymya',
    seoDescription:
      'NoNo BanaBa : le business game pédagogique d’Alkymya pour expérimenter data, web-marketing, IA et modèles économiques en grande école ou séminaire d’entreprise.',
    keywords:
      'NoNo BanaBa, business game IA, jeu pédagogique stratégie data, atelier grande école Alkymya, simulation entreprise',
    cardSummary:
      'Simulation interactive autour de la marque Gen Z NoNo BanaBa pour piloter data, web-marketing et stratégie.',
    countLabel: '1 simulation live'
  },
  {
    slug: 'outils-partenaires',
    path: '/partenaires/outils/',
    name: 'Outils partenaires',
    eyebrow: 'Briques Souveraines · AWACLOUD & Onecub',
    h1Lead: 'Outils & partenaires',
    h1Accent: 'technologiques souverains.',
    description:
      "Retrouvez dans l'annuaire Partenaires nos briques souveraines recommandées (AWACLOUD pour le RAG documentaire local, Onecub pour les Data Spaces RGPD) et le portage OPCO via INATEC.",
    seoTitle: 'Outils & Partenaires Technologiques | Alkymya',
    seoDescription:
      'AWACLOUD (conversion Markdown locale) et Onecub (Data Spaces souverains) : les partenaires technologiques utilisés par Alkymya.',
    keywords: 'AWACLOUD, Onecub, partenaires technologiques Alkymya, RAG local souverain',
    cardSummary:
      'AWACLOUD (RAG & conversion locale) et Onecub (Data Spaces RGPD), désormais classés dans notre pôle Partenaires.',
    countLabel: 'Voir /partenaires/outils/'
  }
];

export const resources: ResourceItem[] = [
  {
    id: 6,
    title: 'Génération IA 2024 → 2026 (Rapport longitudinal)',
    category: 'Nos études',
    categorySlug: 'etudes',
    description:
      "1 082 étudiants interrogés sur 3 vagues dans 5 grandes écoles franciliennes : adoption à 98,1 %, split-stack 52,3 %, ambivalence productive 3:1 et fracture TikTok Shop ×12.",
    url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1780148789/rapport-generation-ia-2026_v10_20260528_tymyph.pdf',
    pdfUrl:
      'https://res.cloudinary.com/dokzioyu4/image/upload/v1780148789/rapport-generation-ia-2026_v10_20260528_tymyph.pdf',
    articlePath: '/ressources/etudes/generation-ia-2026/',
    type: 'pdf'
  },
  {
    id: 19,
    title: "Interview Gemini 4 : Retour d'expérience & Performances",
    category: 'Nos études',
    categorySlug: 'etudes',
    description:
      "Retour d'expérience de terrain de Cyril Garnier sur Gemini 4 (agents IA, inclusion pédagogique, limites cloud vs exécution locale) croisé avec les benchmarks Google DeepMind (V9).",
    url: INTERVIEW_GEMINI_4_PDF_URL,
    pdfUrl: INTERVIEW_GEMINI_4_PDF_URL,
    articlePath: INTERVIEW_GEMINI_4_PATH,
    type: 'pdf'
  },
  {
    id: 17,
    title: 'La Doctrine IAG (PDF + Podcast Audio)',
    category: 'Nos études',
    categorySlug: 'etudes',
    description:
      "Dialogue sur la stratégie géopolitique, énergétique et technologique de la course à l'IAG : les 5 piliers analysés en page HTML, PDF et podcast audio de 5 min 43.",
    url: 'https://res.cloudinary.com/dyooqwryq/image/upload/v1762315350/La_Doctrine_IAG___Dialogue_sur_la_Strat%C3%A9gie_Cach%C3%A9e_de_l_%C3%88re_Trump_zwxlqi.pdf',
    pdfUrl:
      'https://res.cloudinary.com/dyooqwryq/image/upload/v1762315350/La_Doctrine_IAG___Dialogue_sur_la_Strat%C3%A9gie_Cach%C3%A9e_de_l_%C3%88re_Trump_zwxlqi.pdf',
    audioUrl: 'https://res.cloudinary.com/dyooqwryq/video/upload/v1762315917/merged_audio.19bea92d_cunpbi.mp3',
    articlePath: '/ressources/etudes/doctrine-iag/',
    type: 'pdf'
  },
  {
    id: 7,
    title: 'Génération IA 2025 : Les 5 Personas',
    category: 'Nos études',
    categorySlug: 'etudes',
    description:
      "Segmentation comportementale en 5 profils types (Explorateurs engagés, Pragmatiques productifs, Apprentis connectés, Créatifs numériques, Observateurs prudents) sur n = 387 répondants.",
    url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1777491985/generation_ia_2025_personas_20251105051526_qvl18j_1_jjn9s4.pdf',
    pdfUrl:
      'https://res.cloudinary.com/dokzioyu4/image/upload/v1777491985/generation_ia_2025_personas_20251105051526_qvl18j_1_jjn9s4.pdf',
    articlePath: '/ressources/etudes/generation-ia-2025/',
    type: 'pdf'
  },
  {
    id: 8,
    title: 'Génération IA 2024 : Enquête fondatrice',
    category: 'Nos études',
    categorySlug: 'etudes',
    description:
      "Première vague empirique (mai–déc. 2024, n = 326) auprès d'étudiants Bachelor, Master et enseignants : adoption académique > 90 % et appel à une pédagogie « IA First ».",
    url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1777491668/Generation_IA-2024-V1_Mars_2025_2_cxtaeh_ygnyce.pdf',
    pdfUrl:
      'https://res.cloudinary.com/dokzioyu4/image/upload/v1777491668/Generation_IA-2024-V1_Mars_2025_2_cxtaeh_ygnyce.pdf',
    articlePath: '/ressources/etudes/generation-ia-2024/',
    type: 'pdf'
  },
  {
    id: 1,
    title: 'Analyseur de photo',
    category: 'Nos Analyseurs',
    categorySlug: 'analyseurs',
    description:
      "Analyse de composition, pistes de recadrage et rédaction de descriptions alt SEO fidèles au contenu de vos images.",
    url: 'https://res.cloudinary.com/dokzioyu4/video/upload/v1773761166/46b26247d1084cb39b354fe4c9842b29_aszzay_f48sjs.mov',
    appUrl: 'https://analyseurdephoto.alkymya.co/',
    articlePath: '/ressources/analyseurs/analyseur-de-photo/',
    type: 'video'
  },
  {
    id: 2,
    title: 'Analyseur de CV',
    category: 'Nos Analyseurs',
    categorySlug: 'analyseurs',
    description:
      "Outil IA gratuit co-construit avec Kendra Martine (Objectif Alternance) pour confronter votre CV à une offre cible avant l'entretien.",
    url: 'https://res.cloudinary.com/dokzioyu4/video/upload/v1773762096/c599dc6cd0ef4e6196a739c87b2cb773_gxn0lj.mov',
    appUrl: 'https://analysercvpro.alkymya.co/',
    articlePath: '/ressources/analyseurs/analyseur-de-cv/',
    type: 'video',
    expert: {
      name: 'Kendra Martine',
      role: "Fondatrice d'Objectif Alternance & Coach Emploi",
      avatar:
        'https://res.cloudinary.com/dokzioyu4/image/upload/f_auto,q_auto,w_600,c_limit/v1788941994/0c39dd0a7f91200361816f2b88d68802_cwzov0.jpg',
      hook: "Associez le diagnostic IA de votre CV à un coaching humain sur-mesure pour décrocher l'alternance ou le poste fait pour vous.",
      siteUrl: 'https://www.objectifalternance.fr/',
      siteLabel: 'Découvrir Objectif Alternance'
    }
  },
  {
    id: 3,
    title: 'Analyseur de mémoire',
    category: 'Nos Analyseurs',
    categorySlug: 'analyseurs',
    description:
      "Pré-lecture méthodologique pour mémoires et thèses d'étudiants : cohérence du plan, alignement problématique/hypothèses et sources.",
    url: 'https://res.cloudinary.com/dokzioyu4/video/upload/v1776374160/bac00848173641fd882d43dc3b970835_jtyspz.mov',
    appUrl: 'https://analyseurdememoire.alkymya.co/',
    articlePath: '/ressources/analyseurs/analyseur-de-memoire/',
    type: 'video'
  },
  {
    id: 4,
    title: 'NoNo BanaBa — Business Game',
    category: 'Business Game',
    categorySlug: 'business-game',
    description:
      "Simulation interactive autour d'une marque fashion Gen Z pour explorer la data, le web-marketing et les business modèles en grande école ou séminaire.",
    url: 'https://res.cloudinary.com/dokzioyu4/video/upload/v1777905236/Vide%CC%81o_publicitaire_e%CC%81lectro_pop_cre%CC%81e%CC%81e_oydyo3_xxtwtb.mp4',
    appUrl: 'https://nonobanaba.netlify.app/',
    articlePath: '/ressources/business-game/',
    type: 'video'
  }
];
