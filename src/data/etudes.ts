export interface StudyTable {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface StudyQuantifiedResult {
  figure: string;
  label: string;
  explanation: string;
}

export interface StudyEnClairBox {
  title: string;
  takeaway: string;
}

export interface StudyPageData {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  period: string;
  datePublished: string;
  dateModified: string;
  version: string;
  author: string;
  coAuthors?: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  h1: string;
  lead: string;
  pdfUrl: string;
  pdfFilename: string;
  audioUrl?: string;
  audioDuration?: string;
  csvFilename?: string;
  // 8 blocs conformes Section 4.5
  researchQuestion: string;
  methodSummary: string;
  methodBullets: string[];
  quantifiedResults: StudyQuantifiedResult[];
  tables: StudyTable[];
  enClairBoxes: StudyEnClairBox[];
  limits: string[];
  recommendationDate: string;
  operationalRecommendation: string;
  transparencyNote: string;
  crossLinks: Array<{ href: string; label: string }>;
}

export const studiesList: StudyPageData[] = [
  {
    slug: 'generation-ia-2026',
    path: '/ressources/etudes/generation-ia-2026/',
    title: 'Génération IA 2024 → 2026 : Rapport longitudinal (1 082 répondants)',
    shortTitle: 'Génération IA 2026',
    eyebrow: 'Recherche Pédagogique · Rapport Longitudinal Juin 2026',
    period: 'Mai 2024 – Avril 2026 (3 vagues)',
    datePublished: '2026-06-15',
    dateModified: '2026-11-20',
    version: 'V10 (Juin 2026)',
    author: 'Cyril Garnier',
    coAuthors: 'Analyse & production assistées par Claw (Claude Sonnet), Gemini, Perplexity AI, Python/Matplotlib et Typst (agrégats anonymisés uniquement).',
    seoTitle: 'Étude Génération IA 2024–2026 (1 082 étudiants) | Alkymya',
    seoDescription:
      "Rapport longitudinal Alkymya (n=1 082, 5 écoles) : 98,1 % d'adoption, 61 % d'usage quotidien, split-stack Claude, ambivalence 3:1 et TikTok Shop.",
    keywords:
      'étude Génération IA 2026, Cyril Garnier, 1082 étudiants IA France, split-stack Claude ChatGPT, ambivalence productive, TikTok Shop étudiants',
    h1: 'Génération IA 2024 → 2026 : 1 082 étudiants français face à l’IA et à l’attention',
    lead: "Trois années d'enquête continue menée par Cyril Garnier auprès de 1 082 étudiants de cinq grandes écoles franciliennes révèlent une adoption saturée (98,1 %), le basculement vers le multi-outils (52,3 % en split-stack) et un paradoxe majeur : 21 % d'ambivalence productive.",
    pdfUrl:
      'https://res.cloudinary.com/dokzioyu4/image/upload/v1780148789/rapport-generation-ia-2026_v10_20260528_tymyph.pdf',
    pdfFilename: 'rapport-generation-ia-2026-v10-alkymya.pdf',
    csvFilename: 'donnees-cles-generation-ia-2024-2026.csv',
    researchQuestion:
      "Lorsque l'adoption de l'IA générative dans l'enseignement supérieur dépasse 95 %, où se situe le véritable clivage entre étudiants, quels usages émergent (split-stack, IA confidente, double moteur de recherche) et comment réorienter l'évaluation pédagogique ?",
    methodSummary:
      "Design longitudinal par cohortes successives indépendantes administré en ligne entre mai 2024 et avril 2026 auprès d'étudiants Bachelor à Master (majoritairement 21-25 ans, forte proportion d'alternants) issus de 5 grandes écoles d'Île-de-France anonymisées (codes A à E), croisé avec 10 benchmarks institutionnels internationaux.",
    methodBullets: [
      'Vague 1 (mai – déc. 2024) : n = 326 répondants (Écoles A 40 %, B 30 %, E 20 % et autres).',
      'Vague 2 (janv. – déc. 2025) : n = 387 répondants (Écoles A, B, C + 2 écoles numériques créatives).',
      'Vague 3 (sept. 2025 – avr. 2026) : n = 369 répondants (École A 88, École B 118, École C 50, École D 31, École E 56).',
      'Traitements statistiques : analyses fréquentielles, segmentation K-means (k=3, score silhouette 0,16), analyse thématique de 271 verbatims qualitatifs, tests χ² sur le temps d’écran (χ² = 9,31, p = 0,026).'
    ],
    quantifiedResults: [
      {
        figure: '98,1 %',
        label: "Taux d'adoption (Vague 3)",
        explanation:
          "L'adoption est saturée par le haut (contre 94 % Ipsos/EPITA 2026 et 95 % HEPI UK 2026). L'usage quotidien atteint 61,0 % (+25 points en 2 ans)."
      },
      {
        figure: '52,3 %',
        label: 'Usage multi-outils (split-stack)',
        explanation:
          "Plus de la moitié des étudiants combinent ChatGPT avec au moins un modèle alternatif sérieux, contre 33,6 % en mono-outil ChatGPT exclusif."
      },
      {
        figure: '×2,7 outils',
        label: 'Effet marqueur de Claude',
        explanation:
          "Les utilisateurs de Claude citent en moyenne 6,11 outils dans leur stack, contre 2,32 pour les autres répondants."
      },
      {
        figure: '3 : 1',
        label: 'Ratio négatif/positif des verbatims',
        explanation:
          "Sur 271 verbatims, 34,7 % expriment une anxiété liée à l'emploi et 21 % une « ambivalence productive » : ils utilisent massivement un outil dont ils redoutent les effets."
      },
      {
        figure: '×12 écart',
        label: 'Fracture TikTok Shop inter-écoles',
        explanation:
          "66,1 % placent TikTok dans leur top 3 apps et 85 % en usage décisionnel ; l'intention d'achat TikTok Shop atteint 51,6 % à l'École D (CFA tech) contre 4 % à l'École A (management international)."
      }
    ],
    tables: [
      {
        caption: 'Tableau 1 — Synthèse des 3 vagues d’enquête et comparaison aux benchmarks internationaux',
        headers: ['Source / Vague', 'Périmètre & Période', 'Effectif (n)', 'Taux d’adoption', 'Usage quotidien / hebdo'],
        rows: [
          ['Vague 1 — Alkymya', 'Grandes écoles Île-de-France (mai–déc. 2024)', '326', '> 90 %', '≈ 36 % quotidien'],
          ['Vague 2 — Alkymya', 'Grandes écoles Île-de-France (2025)', '387', '> 94 %', 'En forte hausse'],
          ['Vague 3 — Alkymya', '5 écoles A–E anonymisées (sept. 2025–avr. 2026)', '369 (cumul 1 082)', '98,1 %', '61,0 % quotidien (+25 pts)'],
          ['Ipsos / EPITA 2026', 'Étudiants France', '1 000', '94 %', '48 % quotidien'],
          ['HEPI 2026 / 2025', 'Étudiants Royaume-Uni', '1 041 (2025)', '95 % (2026) / 92 % (2025)', 'n.d.'],
          ['Digital Education Council 2024', '16 pays internationaux', '3 839', '86 %', '54 % hebdomadaire']
        ]
      },
      {
        caption: 'Tableau 2 — Segmentation K-means (k=3, Vague 3) & Double moteur de recherche',
        headers: ['Profil / Canal', 'Part observée', 'Fréquence / Registre', 'Comportement caractéristique'],
        rows: [
          ['Power User (K-means k=3)', '41,2 %', '84,9 % quotidien · 3,34 outils', 'Multi-stack avancé (Claude 16,4 %), exploration critique des limites'],
          ['Productiviste (K-means k=3)', '17,9 %', '56,1 % quotidien · 2,96 outils', 'ChatGPT dominant, recherche de ROI immédiat et gain de temps'],
          ['Observateur (K-means k=3)', '40,9 %', '39,1 % quotidien · 1,97 outil', 'Posture prudente, anxiété emploi marquée : zone pédagogique prioritaire'],
          ['ChatGPT vs TikTok vs Google', '66,1 % TikTok top 3', '85 % décisionnel · 19,2 % TikTok Shop', 'ChatGPT (cognitif) · TikTok (expérientiel) · Google (résiduel admin/local)']
        ]
      }
    ],
    enClairBoxes: [
      {
        title: 'En clair : ce qui change pour les écoles et DRH en 2026',
        takeaway:
          "Former aux « bases de ChatGPT » est obsolète à 98,1 % d'adoption. La fracture passe entre les Power Users (41,2 %) qui orchestrent plusieurs modèles et les Observateurs (40,9 %) qui subissent l'anxiété de remplacement (34,7 % des verbatims) sans cadre méthodologique."
      },
      {
        title: 'En clair : l’insight « ambivalence productive »',
        takeaway:
          "Un étudiant sur cinq (21 %) exprime simultanément dépendance et critique dans les mêmes réponses, et 20,6 % reconnaissent des usages assimilables à de la tricherie. Interdire l'IA échoue ; évaluer la trace, le questionnement et l'oral devient la seule réponse robuste."
      }
    ],
    limits: [
      'Cohortes successives indépendantes : il ne s’agit pas d’un suivi longitudinal individuel des mêmes étudiants sur 3 ans.',
      'Représentativité circonscrite à cinq grandes écoles et CFA d’Île-de-France (pas d’échantillon national universitaire général).',
      'Biais déclaratif potentiel sur les pratiques sensibles comme la tricherie (20,6 % autodéclarés).',
      'Score silhouette K-means modéré (0,16) : les frontières entre les trois clusters comportementaux restent poreuses et non étanches.'
    ],
    recommendationDate: 'Recommandation publiée en juin 2026 · Révisée en novembre 2026',
    operationalRecommendation:
      "Déployer trois leviers dès la rentrée : (1) un socle commun de littératie IA incluant comparaison critique multi-modèles, (2) une signalétique transparente rouge / orange / vert sur chaque évaluation (remplaçant le flou d'interdiction), et (3) l'évaluation par la maîtrise (oraux, soutenances de trace et cas en temps contraint).",
    transparencyNote:
      "Étude autofinancée par CYRIL GARNIER CONSULTING / Alkymya. Les établissements cités en vagues 1–3 sont anonymisés par convention (Écoles A à E) ; aucune donnée personnelle n'a été transmise aux agents IA lors du traitement statistique.",
    crossLinks: [
      { href: '/partenaires/ecoles/', label: 'Voir nos 7 partenaires École' },
      { href: '/ressources/etudes/generation-ia-2025/', label: 'Comparer avec les 5 personas 2025' },
      { href: '/ateliers/', label: 'Déployer nos ateliers & formations OPCO (via INATEC)' },
      { href: '/ia/', label: 'Explorer le simulateur de personas sur /ia/' }
    ]
  },

  {
    slug: 'generation-ia-2025',
    path: '/ressources/etudes/generation-ia-2025/',
    title: 'Génération IA 2025 : Les 5 Visages et Personas des étudiants (n=387)',
    shortTitle: 'Génération IA 2025',
    eyebrow: 'Vague 2 · Segmentation Comportementale 2025',
    period: 'Janvier – Décembre 2025',
    datePublished: '2025-11-05',
    dateModified: '2026-11-20',
    version: 'V1 (Novembre 2025)',
    author: 'Cyril Garnier & Léonie Egesipe',
    seoTitle: 'Étude Génération IA 2025 : 5 Personas Étudiants | Alkymya',
    seoDescription:
      'Enquête Génération IA 2025 (387 répondants 16–25 ans : HETIC, IÉSEG, ISCOM, Ynov) : 5 personas comportementaux, top 5 outils et 4 recommandations pédagogiques.',
    keywords:
      'Génération IA 2025, 5 personas IA étudiants, Explorateurs engagés, Pragmatiques productifs, Cyril Garnier Léonie Egesipe',
    h1: 'Génération IA 2025 : cinq personas pour comprendre les usages étudiants de l’IA',
    lead: "Réalisée auprès de 387 répondants âgés de 16 à 25 ans (HETIC, IÉSEG, ISCOM, Ynov…), l'édition 2025 de Génération IA dépasse le simple taux d'adoption pour modéliser cinq comportements types face aux outils génératifs.",
    pdfUrl:
      'https://res.cloudinary.com/dokzioyu4/image/upload/v1777491985/generation_ia_2025_personas_20251105051526_qvl18j_1_jjn9s4.pdf',
    pdfFilename: 'generation-ia-2025-5-personas-alkymya.pdf',
    csvFilename: 'personas-generation-ia-2025.csv',
    researchQuestion:
      "Au-delà de l'utilisation quasi générale de ChatGPT, comment se segmentent concrètement les jeunes adultes (16-25 ans) en termes de maturité technique, de consentement à payer, de choix d'outils et de rapport à leur futur métier ?",
    methodSummary:
      "Enquête quantitative et qualitative conduite en 2025 par Cyril Garnier et Léonie Egesipe auprès de 387 jeunes adultes (16-25 ans) scolarisés en écoles du web, de management, de communication et campus tech franciliens.",
    methodBullets: [
      'Échantillon de 387 répondants issus d’établissements complémentaires (HETIC, IÉSEG, ISCOM, Ynov et lycées/classes préparatoires).',
      'Analyse des domaines d’usage (recherche, rédaction, code, création visuelle), outils utilisés et budget consacré.',
      'Construction d’une typologie à 5 personas opérationnels utilisable en entreprise comme dans l’enseignement supérieur.'
    ],
    quantifiedResults: [
      {
        figure: '387',
        label: 'Répondants (16–25 ans)',
        explanation:
          "Panel multi-filières couvrant management, communication, développement numérique et profils juniors."
      },
      {
        figure: '40–45 %',
        label: 'Pragmatiques productifs',
        explanation:
          "Le cœur majoritaire des promotions (21-25 ans) : orientés efficacité, ChatGPT en socle central avec ajouts ciblés gratuits."
      },
      {
        figure: '15–20 %',
        label: 'Explorateurs engagés',
        explanation:
          "Avant-garde mobilisant 5+ outils (ChatGPT 98 %, Perplexity 70 %, MidJourney 60 %, Claude, Gamma) ; 40 % paient déjà des licences pro."
      },
      {
        figure: '95 % / 55 %',
        label: 'ChatGPT & Gemini en tête',
        explanation:
          "Top 5 des outils 2025 : ChatGPT (95 %), Gemini (55 %), Midjourney (40 %), Copilot (35 %) et Perplexity (30 %)."
      },
      {
        figure: '> 70 %',
        label: 'Crainte de remplacement perçue',
        explanation:
          "Plus de 70 % anticipent une transformation profonde ou une disparition de tâches d'entrée de gamme dans leur futur métier."
      }
    ],
    tables: [
      {
        caption: 'Tableau 1 — Les 5 Personas de la Génération IA 2025 (n = 387)',
        headers: ['Persona', 'Part estimée', 'Profil & Âge', 'Stack & Pratique IA'],
        rows: [
          [
            '1. Explorateurs engagés',
            '15–20 %',
            '21–25 ans · Master & jeunes pros (IÉSEG, HETIC)',
            '5+ outils (ChatGPT 98 %, Perplexity 70 %, Midjourney 60 %, Claude, Gamma) ; 40 % prêts à payer'
          ],
          [
            '2. Pragmatiques productifs',
            '40–45 %',
            '21–25 ans · Toutes écoles supérieures (majoritaires)',
            'Recherche de gain de temps ; ChatGPT central + outils ciblés gratuits'
          ],
          [
            '3. Apprentis connectés',
            '20–25 %',
            '16–20 ans · Hyper-connectés réseaux sociaux',
            'Usage scolaire prioritaire, ChatGPT exclusif gratuit, aide aux devoirs'
          ],
          [
            '4. Créatifs numériques',
            '10–15 %',
            'Filières communication, design & marque (ISCOM)',
            'Midjourney / DALL-E, ouverts au payant pour prototypes visuels & DA'
          ],
          [
            '5. Observateurs prudents',
            '5–10 %',
            'Tous niveaux · Distance ou méfiance',
            'Usage rare ou inexistant ; besoin d’accompagnement sécurisant et éthique'
          ]
        ]
      },
      {
        caption: 'Tableau 2 — Top 5 des outils d’IA déclarés (Vague 2 · 2025)',
        headers: ['Outil', 'Taux d’usage déclaré', 'Usage dominant observé'],
        rows: [
          ['ChatGPT (OpenAI)', '95 %', 'Socle universel rédaction, synthèse et structuration'],
          ['Gemini (Google)', '55 %', 'Recherche contextuelle et écosystème Google'],
          ['Midjourney', '40 %', 'Direction artistique, concepts visuels et moodboards'],
          ['Microsoft Copilot', '35 %', 'Intégration bureautique et contexte entreprise'],
          ['Perplexity AI', '30 %', 'Recherche sourcée et veille documentaire rapide']
        ]
      }
    ],
    enClairBoxes: [
      {
        title: 'En clair : ne pas confondre un Apprenti connecté et un Explorateur engagé',
        takeaway:
          "Les deux utilisent ChatGPT chaque semaine, mais seuls 15 à 20 % savent chaîner plusieurs modèles (Perplexity pour sourcer, Claude pour structurer, Midjourney pour illustrer) et investir dans une licence professionnelle."
      },
      {
        title: 'En clair : transformer les Explorateurs en ambassadeurs internes',
        takeaway:
          "En entreprise comme à l'école, plutôt que d'imposer une doctrine uniforme, l'étude recommande d'associer ces 15-20 % de profils moteurs à la co-construction de la charte IA et aux ateliers pairs-à-pairs."
      }
    ],
    limits: [
      'Proportions exprimées en fourchettes issues d’un classement typologique manuel antérieur à la segmentation K-means de 2026.',
      'Sur-représentation des filières numériques, communication et commerce franciliennes.',
      'Rapidité d’évolution des versions de modèles entre le printemps et l’automne 2025.'
    ],
    recommendationDate: 'Recommandation publiée en novembre 2025 · Mise à jour novembre 2026',
    operationalRecommendation:
      "Mettre en place 4 actions immédiates : (1) co-construire une charte IA institutionnelle transparente, (2) réinventer l'évaluation via des oraux et études de cas contextualisées, (3) enseigner la littératie IA et l'esprit critique, et (4) mobiliser les Explorateurs engagés comme relais internes.",
    transparencyNote:
      "Publication produite par Cyril Garnier et Léonie Egesipe (Alkymya / CYRIL GARNIER CONSULTING). Aucun sponsor éditeur de modèle IA.",
    crossLinks: [
      { href: '/ia/', label: 'Visualiser les 5 personas en vidéo sur /ia/' },
      { href: '/ressources/etudes/generation-ia-2026/', label: 'Voir l’évolution mesurée en vague 3 (2026)' },
      { href: '/partenaires/ecoles/', label: 'Découvrir les écoles où l’enquête est menée' }
    ]
  },

  {
    slug: 'generation-ia-2024',
    path: '/ressources/etudes/generation-ia-2024/',
    title: 'Génération IA 2024 : Enquête fondatrice sur l’IA en études supérieures (n=326)',
    shortTitle: 'Génération IA 2024',
    eyebrow: 'Vague 1 · Enquête Empirique Initiale',
    period: 'Mai – Décembre 2024',
    datePublished: '2025-03-01',
    dateModified: '2026-11-20',
    version: 'V1 (Mars 2025)',
    author: 'Cyril Garnier',
    seoTitle: 'Étude Génération IA 2024 (n=326 étudiants) | Alkymya',
    seoDescription:
      'Vague 1 Génération IA (2024, 326 répondants Bachelor, Master et enseignants) : usages académiques (>90 %), outils et pédagogie « IA First ».',
    keywords:
      'Génération IA 2024, sondage IA étudiants 2024, Cyril Garnier, IA First enseignement supérieur, ChatGPT 2024 étudiants',
    h1: 'Génération IA 2024 : l’étude fondatrice sur le paradoxe de l’IA à l’école',
    lead: "Née d'une remarque d'étudiant en cours de Corporate Innovation — « vous nous poussez à utiliser l'IA alors que les autres profs veulent nous l'interdire » — cette première vague auprès de 326 participants documente la bascule initiale dès 2024.",
    pdfUrl:
      'https://res.cloudinary.com/dokzioyu4/image/upload/v1777491668/Generation_IA-2024-V1_Mars_2025_2_cxtaeh_ygnyce.pdf',
    pdfFilename: 'generation-ia-2024-v1-alkymya.pdf',
    csvFilename: 'resultats-generation-ia-2024.csv',
    researchQuestion:
      "Face aux politiques d'interdiction adoptées par une majorité d'établissements en 2024, dans quelle proportion les étudiants Bachelor, Master et leurs enseignants utilisent-ils déjà l'IA générative dans leurs travaux et hors des cours ?",
    methodSummary:
      "Questionnaire terrain diffusé entre mai et décembre 2024 auprès de 326 participants (plus de 90 % d'étudiants en Bachelor et Master, majoritairement 20-30 ans, issus principalement d'IÉSEG 40 %, EBS 30 %, PEM 20 %, complétés par un panel d'enseignants).",
    methodBullets: [
      'Collecte continue de mai à décembre 2024 sur les promotions suivies par Cyril Garnier.',
      'Analyse croisée des taux d’utilisation par tâche (recherche, rédaction, analyse de données, image, code).',
      'Comparaison qualitative des attentes entre étudiants Bachelor, étudiants Master et enseignants.'
    ],
    quantifiedResults: [
      {
        figure: '> 90 %',
        label: 'Adoption académique dès 2024',
        explanation:
          "Plus de 90 % des participants utilisent déjà l'IA générative dans le cadre de leurs études ou enseignements dès le second semestre 2024."
      },
      {
        figure: '95 % / 90 %',
        label: 'Recherche d’info & Rédaction',
        explanation:
          "95 % des utilisateurs mobilisent l'IA pour trouver l'information plus vite et 90 % pour rédiger, synthétiser des textes et structurer leurs idées."
      },
      {
        figure: '80 %',
        label: 'Usage hors des études',
        explanation:
          "Quatre répondants sur cinq utilisent également l'IA générative dans leur vie quotidienne, leurs projets personnels et leur vie professionnelle."
      },
      {
        figure: '70 %',
        label: 'Perçue comme indispensable',
        explanation:
          "70 % jugent l'IA « très utile » et « indispensable » pour leur future carrière, tandis que 25 % la considèrent déjà comme « tout à fait normale »."
      },
      {
        figure: '≈ 5 %',
        label: 'Risque de tricherie cité spontanément',
        explanation:
          "Seule une minorité associe d'emblée l'outil à de la fraude : la majorité réclame des cours qui apprennent à vérifier et prompter proprement."
      }
    ],
    tables: [
      {
        caption: 'Tableau 1 — Domaines d’usage et parts déclarées des outils en Vague 1 (2024, n = 326)',
        headers: ['Dimension mesurée', 'Indicateur', 'Part déclarée', 'Observation terrain'],
        rows: [
          ['Usage académique', 'Recherche d’information', '95 %', 'Accélération de la phase exploratoire et bibliographique'],
          ['Usage académique', 'Rédaction & synthèse', '90 %', 'Plans, synthèses d’études longues, reformulations'],
          ['Usage académique', 'Traitement / analyse de données', '65 %', 'Premières analyses tabulaires et Excel assistés'],
          ['Usage académique', 'Génération d’images / Code', '≈ 50 % / ≈ 35 %', 'Support présentations visuelles et débogage'],
          ['Outils (2024)', 'ChatGPT / Gemini / Midjourney', '95 % / 60 % / 45 %', 'Suivis de Copilot (30 %) et Perplexity (25 %)']
        ]
      },
      {
        caption: 'Tableau 2 — Regard comparé : Enseignants vs Étudiants Bachelor vs Étudiants Master',
        headers: ['Population', 'Posture dominante en 2024', 'Attente principale exprimée'],
        rows: [
          [
            'Étudiants Bachelor',
            'Usage immédiat centré sur l’aide aux devoirs et la rapidité',
            'Exemples concrets et repères simples pour ne pas être pénalisés'
          ],
          [
            'Étudiants Master & Alternants',
            'Orientation employabilité et transfert vers l’entreprise',
            'Cas métiers réels, productivité et différenciation sur le marché du travail'
          ],
          [
            'Enseignants répondants',
            'Tension entre curiosité pédagogique et peur de la fraude',
            'Guides d’intégration en cours et refonte des grilles d’évaluation'
          ]
        ]
      }
    ],
    enClairBoxes: [
      {
        title: 'En clair : pourquoi interdire l’IA dès 2024 était déjà perdu d’avance',
        takeaway:
          "Avec plus de 90 % d'adoption académique et 80 % d'usage personnel dès 2024, les règlements prohibitifs créaient un angle mort pédagogique : les étudiants utilisaient l'IA seuls, sans formation à la vérification des sources."
      }
    ],
    limits: [
      'Échantillon pionnier concentré sur des écoles de commerce et management franciliennes (IÉSEG, EBS, PEM).',
      'Effectif enseignant minoritaire (<10 %), utile à titre qualitatif mais non représentatif statistiquement de l’ensemble du corps professoral.'
    ],
    recommendationDate: 'Recommandation publiée en mars 2025 (historique fondateur de la série)',
    operationalRecommendation:
      "Passer d'une posture de contrôle policier à un design pédagogique « IA First » : former les enseignants aux pédagogies augmentées et auditer les usages dès le début de chaque module.",
    transparencyNote:
      "Document de référence historique de la série Génération IA (Vague 1) menée par Cyril Garnier Consulting.",
    crossLinks: [
      { href: '/ressources/etudes/generation-ia-2025/', label: 'Lire la suite : Vague 2 (5 Personas 2025)' },
      { href: '/ressources/etudes/generation-ia-2026/', label: 'Lire le rapport complet 2024 → 2026 (n=1 082)' },
      { href: '/alchimistes/cyril-garnier/', label: 'Profil de Cyril Garnier' }
    ]
  },

  {
    slug: 'doctrine-iag',
    path: '/ressources/etudes/doctrine-iag/',
    title: 'La Doctrine IAG : Dialogue sur la Stratégie Cachée de l’Ère Trump',
    shortTitle: 'La Doctrine IAG',
    eyebrow: 'Analyse Géopolitique & Industrielle · PDF & Podcast Audio',
    period: 'Novembre 2025',
    datePublished: '2025-11-05',
    dateModified: '2026-11-20',
    version: 'Édition originale (5 nov. 2025)',
    author: 'Cyril Garnier (avec Gemini)',
    seoTitle: 'La Doctrine IAG : Géopolitique & Stratégie IA | Alkymya',
    seoDescription:
      'Analyse de Cyril Garnier : les 5 piliers de la Doctrine IAG américaine (déréglementation, énergie, puces, minerais, Europe) en HTML, PDF et audio.',
    keywords:
      'Doctrine IAG, Cyril Garnier, géopolitique intelligence artificielle, AGI Trump administration, AI Action Plan, podcast IA Alkymya',
    h1: 'La Doctrine IAG : décrypter la stratégie géopolitique et énergétique de la course à l’AGI',
    lead: "Construite sous forme de dialogue analytique entre Cyril Garnier et Gemini le 5 novembre 2025, cette étude relie décisions réglementaires américaines, politique énergétique, contrôle des semi-conducteurs et souveraineté des minerais autour d'un fil conducteur unique : l'avance vers l'Intelligence Artificielle Générale.",
    pdfUrl:
      'https://res.cloudinary.com/dyooqwryq/image/upload/v1762315350/La_Doctrine_IAG___Dialogue_sur_la_Strat%C3%A9gie_Cach%C3%A9e_de_l_%C3%88re_Trump_zwxlqi.pdf',
    pdfFilename: 'La_Doctrine_IAG_Cyril_Garnier_Alkymya.pdf',
    audioUrl: 'https://res.cloudinary.com/dyooqwryq/video/upload/v1762315917/merged_audio.19bea92d_cunpbi.mp3',
    audioDuration: '5 min 43',
    researchQuestion:
      "Des décisions politiques apparemment disparates (révocation du décret 14110, relance fossile et nucléaire, accords sur les puces et minerais rares, pression sur le DMA/AI Act européen) obéissent-elles à une architecture cohérente centrée sur la course à l'IAG ?",
    methodSummary:
      "Synthèse analytique contradictoire conduite en novembre 2025 à partir de l'examen croisé de décrets exécutifs américains (« Removing Barriers to American Leadership in AI », « AI Action Plan »), accords sur les semi-conducteurs (NVIDIA, AMD), accords bilatéraux sur les minerais critiques et prises de position industrielles.",
    methodBullets: [
      'Formulation d’une thèse de lecture géopolitique structurée en 5 piliers stratégiques.',
      'Confrontation avec l’alignement des acteurs privés (contrats fédéraux GSA/AWS/NVIDIA, cas Elon Musk et vulnérabilité industrielle d’Apple).',
      'Mise en perspective historique : Project 2025, « American Dynamism » et comparaison critique avec le Projet Manhattan.'
    ],
    quantifiedResults: [
      {
        figure: '5 piliers',
        label: 'Grille de lecture stratégique',
        explanation:
          "Déréglementation (« doctrine de la vélocité »), énergie, endiguement de la Chine, minerais critiques et positionnement de l'Europe."
      },
      {
        figure: '14110 → 0',
        label: 'Révocation des garde-fous',
        explanation:
          "Abrogation du décret Biden 14110 remplacé par l'objectif explicite de lever les « obstacles » fédéraux à la vitesse de développement IA."
      },
      {
        figure: '500 Md$ / 600 Md$',
        label: 'Engagements industriels US',
        explanation:
          "Chiffres évoqués dans le dossier concernant les chaînes semi-conducteurs / fabrication domestique (NVIDIA, Apple) sous contrainte géopolitique."
      },
      {
        figure: '5 min 43',
        label: 'Podcast audio associé',
        explanation:
          "Dialogue audio immersif directement écoutable sur la page en complément du document PDF intégral."
      },
      {
        figure: '100 %',
        label: 'Prémisse pour dirigeants européens',
        explanation:
          "Alertes concrètes sur le risque pour l'Europe de rester simple marché consommateur si les briques d'infrastructure et de calcul manquent."
      }
    ],
    tables: [
      {
        caption: 'Tableau 1 — Les 5 piliers de l’hypothèse « Doctrine de l’IAG »',
        headers: ['Pilier', 'Levier principal identifié', 'Exemples analysés dans l’étude', 'Implication pour l’Europe & les PME'],
        rows: [
          [
            '1. Moteur national',
            'Déréglementation & vélocité',
            'Révocation du décret 14110 ; priorité à la vitesse sur le frein normatif',
            'Décalage de rythme avec le calendrier de mise en conformité européen'
          ],
          [
            '2. Alimentation énergétique',
            'Production électrique massive pour data centers',
            '« AI Action Plan », centrales gaz hors-réseau, relance nucléaire & feuille de route fusion',
            'Le coût et la disponibilité de l’électricité deviennent un facteur IA majeur'
          ],
          [
            '3. Endiguement géopolitique',
            'Contrôle des puces IA avancées',
            'Restrictions d’exportation semi-conducteurs NVIDIA / AMD vers la Chine',
            'Dépendance matérielle critique des entreprises européennes aux fondeurs et GPU'
          ],
          [
            '4. Chaîne d’approvisionnement',
            'Sécurisation des minerais critiques',
            'Accords bilatéraux (RDC, Mauritanie, Gabon, Japon, Malaisie)',
            'Enjeu de souveraineté sur les matières premières numériques'
          ],
          [
            '5. Gestion des alliés',
            'Pression sur les régulations tierces',
            'Positionnement critique face à l’AI Act, au DMA et au DSA européens',
            'Nécessité de bâtir des briques souveraines locales (RAG local, Data Spaces)'
          ]
        ]
      }
    ],
    enClairBoxes: [
      {
        title: 'En clair : pourquoi un dirigeant de PME doit lire cette note géopolitique',
        takeaway:
          "Même si les décrets américains semblent lointains, ils dictent le prix des API, la concentration des clouds et le niveau d'exposition réglementaire entre l'AI Act européen et les fournisseurs américains."
      }
    ],
    limits: [
      'Il s’agit d’une hypothèse interprétative prospective (note d’analyse et dialogue du 5 novembre 2025), non d’une étude empirique quantitative.',
      'Certains accords bilatéraux, tarifs douaniers ou décrets analysés évoluent rapidement au gré de l’actualité politique et judiciaire.'
    ],
    recommendationDate: 'Recommandation stratégique publiée en novembre 2025 · Révisée novembre 2026',
    operationalRecommendation:
      "Ne jamais bâtir le système d'information IA d'une entreprise sur un fournisseur unique non réversible : privilégier la portabilité des prompts et des données (Markdown structuré local avec AWACLOUD, gouvernance RGPD/Data Spaces avec Onecub, audit IA Act).",
    transparencyNote:
      "Dialogue co-construit par Cyril Garnier avec Gemini (Google) à titre d'outil de recherche et de structuration. L'auteur assume la thèse analytique proposée.",
    crossLinks: [
      { href: '/partenaires/outils/awa-cloud/', label: 'Brique souveraine documentaire : AWACLOUD' },
      { href: '/partenaires/outils/onecub/', label: 'Brique souveraine data : Onecub (Olivier Dion)' },
      { href: '/ateliers/', label: 'Atelier Option C : Éthique & conformité IA Act' }
    ]
  }
];

export function getStudyBySlug(slug: string): StudyPageData | undefined {
  return studiesList.find((s) => s.slug === slug);
}
