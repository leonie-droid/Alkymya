export interface AnalyserToolData {
  slug: string;
  path: string;
  name: string;
  shortName: string;
  subdomain: string;
  categoryLabel: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  h1: string;
  lead: string;
  videoUrl: string;
  // 6 blocs requis (Section 4.6)
  whatItDoes: string;
  whoItIsFor: Array<{ audience: string; useCase: string }>;
  howToUse: Array<{ step: string; title: string; detail: string }>;
  whatItDoesNotDo: string[];
  privacy: string;
  partnerTie?: {
    name: string;
    role: string;
    partnerPath: string;
    alchimistePath: string;
    websiteUrl: string;
  };
  crossLinks: Array<{ href: string; label: string }>;
}

export const analyseursList: AnalyserToolData[] = [
  {
    slug: 'analyseur-de-photo',
    path: '/ressources/analyseurs/analyseur-de-photo/',
    name: 'Analyseur de photo',
    shortName: 'Analyseur de photo',
    subdomain: 'https://analyseurdephoto.alkymya.co/',
    categoryLabel: 'Image · Alt-text & Direction Artistique',
    seoTitle: 'Analyseur de Photo IA Gratuit | Ressources Alkymya',
    seoDescription:
      'Outil IA gratuit en ligne : analysez vos photographies, préparez vos retouches de cadrage et générez des descriptions alt SEO exploitables sans inscription.',
    keywords:
      'analyseur de photo IA gratuit, description alt SEO image, analyse cadrage photo IA, analyseurdephoto.alkymya.co, Alkymya',
    h1: 'Analyseur de photo IA : explorer, analyser et structurer vos visuels en un instant',
    lead: "Développé par le studio Alkymya à l'intersection de la pratique photographique de terrain (TheLittle77, TheLittle83, TheLittle75) et de la vision par ordinateur, l'Analyseur de photo aide à lire, qualifier et préparer vos images pour le web et vos séries éditoriales.",
    videoUrl:
      'https://res.cloudinary.com/dokzioyu4/video/upload/v1773761166/46b26247d1084cb39b354fe4c9842b29_aszzay_f48sjs.mov',
    whatItDoes:
      "L'Analyseur de photo examine instantanément n'importe quel fichier image que vous lui soumettez dans le navigateur. Il produit une lecture critique de la composition (lumière, cadrage, lisibilité du sujet), propose des pistes concrètes de retouche ou de recadrage et rédige des textes alternatifs (attributs alt) fidèles au contenu réel de la prise de vue pour le SEO et l'accessibilité.",
    whoItIsFor: [
      {
        audience: 'Rédacteurs, éditeurs de sites et responsables SEO',
        useCase:
          "Produire rapidement des descriptions alt précises et descriptives sans inventer d'éléments absents de la photo, sur des sites riches en images."
      },
      {
        audience: 'Étudiants en communication, design et création (ISCOM, HETIC)',
        useCase:
          "Prendre du recul sur une série visuelle, comparer deux cadrages et préparer l'argumentaire créatif d'un dossier."
      },
      {
        audience: 'Artisans, commerçants et dirigeants de PME',
        useCase:
          "Vérifier avant publication sur Google Business Profile ou Instagram si une photo de produit ou de vitrine reste lisible et nette."
      }
    ],
    howToUse: [
      {
        step: '1',
        title: 'Importez votre visuel',
        detail:
          "Ouvrez analyseurdephoto.alkymya.co sans créer de compte et déposez directement votre photographie depuis votre ordinateur ou smartphone."
      },
      {
        step: '2',
        title: 'Choisissez l’angle d’analyse',
        detail:
          "Lancez une lecture technique (composition, exposition, points forts) ou une extraction orientée publication web (légende, texte alt, mots-clés)."
      },
      {
        step: '3',
        title: 'Ajustez et publiez',
        detail:
          "Relisez toujours la description générée pour vérifier les noms propres ou lieux exacts, puis intégrez le texte alt dans votre CMS ou ajustez votre recadrage."
      }
    ],
    whatItDoesNotDo: [
      "Il ne remplace pas un photographe professionnel pour la prise de vue sur site ni un logiciel d'étalonnage avancé pour l'impression haute définition.",
      "Il ne garantit pas l'identification nominative de personnes privées et ne doit pas servir à reconnaître des visages.",
      "Il ne modifie pas les métadonnées EXIF d'origine sur votre disque local à votre insu."
    ],
    privacy:
      "Aucun compte utilisateur ni inscription par e-mail n'est requis pour tester l'application. Les images soumises sont traitées uniquement pour générer l'analyse demandée à la volée : ne téléversez néanmoins ni documents d'identité ni photos soumises au secret médical ou industriel.",
    crossLinks: [
      { href: '/oeuvres/', label: 'Voir nos créations éditoriales (TheLittle77, 75, 83)' },
      { href: '/ressources/analyseurs/', label: 'Retour à tous nos Analyseurs IA' },
      { href: '/ateliers/', label: 'Atelier Direction Artistique & Visuels IA' }
    ]
  },

  {
    slug: 'analyseur-de-cv',
    path: '/ressources/analyseurs/analyseur-de-cv/',
    name: 'Analyseur de CV',
    shortName: 'Analyseur de CV',
    subdomain: 'https://analysercvpro.alkymya.co/',
    categoryLabel: 'Employabilité · En partenariat avec Objectif Alternance',
    seoTitle: 'Analyseur de CV IA Gratuit (Objectif Alternance) | Alkymya',
    seoDescription:
      'Optimisez gratuitement votre CV face à une offre d’emploi ou d’alternance grâce à l’Analyseur de CV IA co-construit avec Kendra Martine.',
    keywords:
      'analyseur de CV IA gratuit, optimiser CV alternance, analysercvpro.alkymya.co, Kendra Martine Objectif Alternance, Alkymya',
    h1: 'Analyseur de CV IA : confrontez votre CV à l’offre cible avant de postuler',
    lead: "Conçu par Alkymya en partenariat avec Kendra Martine, fondatrice d'Objectif Alternance, cet outil gratuit passe votre CV au crible d'une offre d'alternance ou d'emploi réelle pour repérer les trous dans la raquette et préparer des reformulations sincères.",
    videoUrl:
      'https://res.cloudinary.com/dokzioyu4/video/upload/v1773762096/c599dc6cd0ef4e6196a739c87b2cb773_gxn0lj.mov',
    whatItDoes:
      "L'Analyseur de CV compare le contenu structuré de votre CV avec les compétences attendues sur le poste ou l'alternance que vous visez. Il met en évidence les mots-clés métiers manquants (utiles face aux filtres ATS et à la lecture rapide des recruteurs), identifie les formulations trop vagues et suggère des réécritures orientées résultats.",
    whoItIsFor: [
      {
        audience: 'Étudiants en recherche d’alternance (BTS, Bachelor, Master)',
        useCase:
          "Adapter rapidement un CV généraliste à une fiche de poste de PME sans perdre la cohérence de son parcours académique."
      },
      {
        audience: 'Profils en reconversion professionnelle',
        useCase:
          "Traduire des expériences d'un ancien secteur en compétences transférables immédiatement compréhensibles par un recruteur."
      },
      {
        audience: 'Accompagnants emploi & responsables pédagogiques',
        useCase:
          "Disposer d'un premier diagnostic objectif en atelier avant d'engager le travail humain de simulation d'entretien."
      }
    ],
    howToUse: [
      {
        step: '1',
        title: 'Importez votre CV et l’offre visée',
        detail:
          "Rendez-vous sur analysercvpro.alkymya.co, déposez votre CV (PDF/texte) et collez l'intitulé ou le descriptif de l'offre d'alternance ou d'emploi."
      },
      {
        step: '2',
        title: 'Lisez le diagnostic d’adéquation',
        detail:
          "Repérez les écarts entre vos expériences actuelles et les attentes de l'entreprise : compétences présentes à mieux valoriser et manques réels à combler."
      },
      {
        step: '3',
        title: 'Reformulez avec sincérité (et passez au coaching)',
        detail:
          "Sélectionnez uniquement les reformulations qui reflètent vos réalisations vraies, puis sollicitez Objectif Alternance si vous souhaitez un coaching humain pour décrocher l'entretien."
      }
    ],
    whatItDoesNotDo: [
      "Il n'invente jamais d'expériences professionnelles, de diplômes ou de compétences que vous ne possédez pas : mentir sur un CV échoue dès le premier entretien.",
      "Il ne garantit pas à lui seul l'obtention d'un contrat d'alternance ni le remplacement de la préparation humaine à l'entretien.",
      "Il ne conserve pas vos candidatures dans une CVthèque commerciale cachée."
    ],
    privacy:
      "L'outil fonctionne sans création de compte obligatoire. Par prudence élémentaire sur tout outil d'IA en ligne, masquez vos données strictement personnelles inutiles à l'analyse (numéro de sécurité sociale, adresse postale exacte ou numéro de pièce d'identité) avant le dépôt du fichier.",
    partnerTie: {
      name: 'Kendra Martine — Objectif Alternance',
      role: 'Partenaire insertion & coaching emploi',
      partnerPath: '/partenaires/insertion/objectif-alternance/',
      alchimistePath: '/alchimistes/kendra-martine/',
      websiteUrl: 'https://www.objectifalternance.fr/'
    },
    crossLinks: [
      { href: '/partenaires/insertion/objectif-alternance/', label: 'Découvrir le partenariat Objectif Alternance' },
      { href: '/alchimistes/kendra-martine/', label: 'Consulter la fiche de Kendra Martine' },
      { href: '/ressources/analyseurs/', label: 'Retour à tous nos Analyseurs IA' }
    ]
  },

  {
    slug: 'analyseur-de-memoire',
    path: '/ressources/analyseurs/analyseur-de-memoire/',
    name: 'Analyseur de mémoire',
    shortName: 'Analyseur de mémoire',
    subdomain: 'https://analyseurdememoire.alkymya.co/',
    categoryLabel: 'Académique · Méthodologie & Cohérence de Plan',
    seoTitle: 'Analyseur de Mémoire & Thèse IA Gratuit | Alkymya',
    seoDescription:
      'Diagnostiquez gratuitement la structure, la problématique et la cohérence méthodologique de votre mémoire ou rapport de stage sur analyseurdememoire.alkymya.co.',
    keywords:
      'analyseur de mémoire IA gratuit, relecture méthodologique thèse, cohérence plan mémoire étudiant, analyseurdememoire.alkymya.co',
    h1: 'Analyseur de mémoire : diagnostiquer la rigueur méthodologique de vos travaux',
    lead: "Conçu par Cyril Garnier à partir des jurys et soutenances encadrés en grandes écoles, l'Analyseur de mémoire aide les étudiants de Master, Mastère ou Bachelor à vérifier la solidité de leur problématique, de leur plan et de leur appareil critique avant la remise finale.",
    videoUrl:
      'https://res.cloudinary.com/dokzioyu4/video/upload/v1776374160/bac00848173641fd882d43dc3b970835_jtyspz.mov',
    whatItDoes:
      "L'Analyseur de mémoire relit votre document académique (mémoire de fin d'études, rapport d'alternance ou note de recherche) sous l'angle d'un membre de jury exigeant. Il évalue l'alignement entre le titre, la problématique et les hypothèses, signale les ruptures de transition entre parties, repère les affirmations non sourcées et synthétise les axes prioritaires d'amélioration.",
    whoItIsFor: [
      {
        audience: 'Étudiants en Master, Mastère spécialisé et Bachelor',
        useCase:
          "Effectuer une pré-lecture méthodologique rigoureuse trois semaines avant le dépôt pour corriger un plan déséquilibré ou une problématique floue."
      },
      {
        audience: 'Alternants rédigeant un rapport de mission professionnelle',
        useCase:
          "Vérifier que l'articulation entre apports théoriques et recommandations opérationnelles en entreprise reste claire et démontrée."
      },
      {
        audience: 'Directeurs de mémoire et jurys pédagogiques',
        useCase:
          "Illustrer en cours comment utiliser l'IA comme relecteur critique plutôt que comme générateur de texte."
      }
    ],
    howToUse: [
      {
        step: '1',
        title: 'Soumettez votre plan ou manuscrit',
        detail:
          "Ouvrez analyseurdememoire.alkymya.co et déposez votre document de travail (ou votre introduction + sommaire détaillé en phase intermédiaire)."
      },
      {
        step: '2',
        title: 'Analysez les points de vigilance',
        detail:
          "Consultez le diagnostic structuré : adéquation problématique/conclusion, clarté des définitions, équilibre des chapitres et qualité des sources."
      },
      {
        step: '3',
        title: 'Retravaillez vos arguments en autonomie',
        detail:
          "Utilisez les remarques comme grille de révision personnelle : l'outil signale les faiblesses à corriger, mais la rédaction et la soutenance restent 100 % les vôtres."
      }
    ],
    whatItDoesNotDo: [
      "Il ne rédige pas votre mémoire à votre place et ne génère pas de fausses références bibliographiques.",
      "Il ne remplace jamais les consignes méthodologiques de votre école ni les retours de votre tuteur académique.",
      "Il ne réalise pas un contrôle anti-plagiat certifié face aux bases documentaires universitaires (Compilatio, Turnitin)."
    ],
    privacy:
      "Accessible librement sans inscription obligatoire. Si votre mémoire de fin d'études porte sur des données confidentielles de votre entreprise d'accueil (stratégie, chiffres financiers non publics, noms de clients), anonymisez ces passages avant de soumettre le fichier.",
    crossLinks: [
      { href: '/ressources/etudes/generation-ia-2026/', label: 'Lire l’étude Génération IA 2026 (évaluation & tricherie)' },
      { href: '/partenaires/ecoles/', label: 'Voir nos 7 partenaires École' },
      { href: '/ressources/analyseurs/', label: 'Retour à tous nos Analyseurs IA' }
    ]
  }
];

export function getAnalyserBySlug(slug: string): AnalyserToolData | undefined {
  return analyseursList.find((a) => a.slug === slug);
}
