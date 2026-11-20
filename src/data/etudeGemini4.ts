export const INTERVIEW_GEMINI_4_PDF_URL =
  'https://res.cloudinary.com/dokzioyu4/image/upload/v1795167255/Interview_Gemini_4___Retour_d_exp%C3%A9rience_d_un_enseignant_en_IA_et_donn%C3%A9es_de_performance_V9_1_xynfvu.pdf';

export const INTERVIEW_GEMINI_4_PATH = '/ressources/etudes/interview-gemini-4/';

export interface StudyHighlight {
  value: string;
  label: string;
  detail: string;
}

export interface InterviewSection {
  number: string;
  title: string;
  summary: string;
  keyPoints: string[];
  quote: string;
}

export interface Gemini4ModelSpec {
  model: string;
  releaseDate: string;
  positioning: string;
  specsAndPricing: string;
}

export interface Gemini4BenchmarkRow {
  metric: string;
  result: string;
  source: string;
}

export const etudeGemini4Data = {
  title: "Gemini 4 à l'épreuve du terrain : Regard croisé avec Cyril Garnier",
  subtitle:
    "Retour d'expérience d'un enseignant en IA et données de performance (Version V9)",
  period: "Automne 2026",
  version: "V9",
  author: "Cyril Garnier — Entretien IA",
  pdfUrl: INTERVIEW_GEMINI_4_PDF_URL,
  transparencyNote:
    "Cyril Garnier et ses structures (CYRIL GARNIER CONSULTING / Alkymya) n'entretiennent aucun lien commercial ou financier avec Google. Utilisateur multi-outils au quotidien (Gemini, Claude, Perplexity, Genspark, OpenClaw), il partage ici un retour d'expérience indépendant issu de ses tests en classe et en studio.",
  intro:
    "À l'automne 2026, le déploiement de la famille de modèles Gemini 4 marque un tournant dans l'adoption pratique des agents autonomes et de l'interaction multimodale en temps réel. Cet article croise les observations pédagogiques de terrain de Cyril Garnier avec les données officielles de lancement et les benchmarks publiés par Google et Google DeepMind.",
  highlights: [
    {
      value: "156 tok/s",
      label: "Débit Gemini 4 Hydrogen",
      detail: "Mesure moyenne officielle sur Google AI Studio (latence initiale 1,78 s à 2,26 s)."
    },
    {
      value: "1M tokens",
      label: "Contexte unifié multimodal",
      detail: "Traitement natif texte, image, audio et vidéo sur une fenêtre de contexte unifiée."
    },
    {
      value: "91,3 %",
      label: "Taux de non-hallucination",
      detail: "Résultat en mode High sur l'indice AA-Omniscience Non-Hallucination Rate."
    },
    {
      value: "-81 %",
      label: "Dérives agentiques (overreach)",
      detail: "Réduction des actions excessives par rapport à Gemini 3.8 Flash (Google DeepMind)."
    }
  ] as StudyHighlight[],
  sections: [
    {
      number: "01",
      title: "Démocratisation, inclusion et fracture d'accès",
      summary:
        "Dans Google AI Studio, le modèle Gemini 4 Hydrogen permet de concevoir un site web de qualité en moins d'une heure et d'assembler rapidement des micro-agents connectés à Google Workspace (Gmail, Drive) via les compétences (skills). Lors des ateliers, un étudiant a ainsi bâti en quelques minutes un assistant de relances de facturation et de prospection commerciale.",
      keyPoints: [
        "L'accessibilité native abaisse la barrière technique et encourage une adoption plus équilibrée entre étudiantes et étudiants face à des outils parfois perçus comme très techniques.",
        "Alerte sur la fracture d'accès : si l'offre gratuite AI Plus d'un an bénéficie aux étudiants majeurs du supérieur, ceux qui n'y ont pas accès risquent d'être laissés en retrait."
      ],
      quote:
        "Cette technologie est géniale pour mes étudiants qui en bénéficient, mais potentiellement terrible pour ceux qui en sont exclus."
    },
    {
      number: "02",
      title: "L'IA dans l'instantané : vitesse et relation de confiance",
      summary:
        "Au-delà de la création d'agents, la réactivité de Gemini 4 transforme l'usage quotidien sans même recourir systématiquement aux variantes les plus profondes. Cyril Garnier cite la préparation en moins de deux minutes de sujets de brevet blanc de mathématiques avec corrigé complet et sans erreur.",
      keyPoints: [
        "La vitesse d'exécution rend la production pédagogique et opérationnelle fluide et immédiatement vérifiable.",
        "Avec Gemini Live, la réponse du tac au tac installe une relation de confiance naturelle, à la fois impressionnante et exigeante en vigilance."
      ],
      quote:
        "Parce que le modèle répond du tac au tac, on entre en connexion directe avec lui. Cela ajoute un côté très naturel qui est impressionnant."
    },
    {
      number: "03",
      title: "Avenir de l'enseignement et souveraineté intellectuelle",
      summary:
        "Face à une technologie capable de répondre plus vite et avec plus de justesse factuelle que n'importe quel individu sur la majorité des questions, l'enseignement de l'IA se déplace de la pure technique vers l'esprit critique, l'art du questionnement et l'équité des chances.",
      keyPoints: [
        "Aider tous les profils d'apprenants à oser utiliser ces outils afin d'éviter de creuser de nouveaux écarts en entreprise.",
        "Maintenir impérativement le recul humain, savoir travailler par soi-même et ne jamais déléguer l'intégralité de son raisonnement à la machine."
      ],
      quote:
        "Il est indispensable de garder du recul, de savoir travailler par soi-même et de ne pas déléguer l'intégralité de son cerveau à une IA, aussi puissante soit-elle."
    },
    {
      number: "04",
      title: "Multimodalité temps réel et limites cloud vs exécution locale",
      summary:
        "Le mode vidéo en direct de Gemini Live impressionne par sa perception du monde réel (lecture du titre d'un livre, analyse d'un écran ou d'un bureau sur smartphone), tout en soulevant des enjeux de confidentialité. Côté agents autonomes, l'approche standard reste cependant plus limitée sur les interactions système locales que des environnements dédiés.",
      keyPoints: [
        "Sans passer par des couches CLI ou des surcouches comme Antigravity, les agents standards restent cantonnés à leur périmètre applicatif cloud (Google Workspace).",
        "Arbitrage architectural : Google privilégie l'ubiquité et la sécurité cloud, là où Claude Code, Genspark ou OpenClaw offrent un pilotage local direct du poste de travail."
      ],
      quote:
        "Pour démarrer rapidement, cela suffit largement, mais sans couche technique supplémentaire l'agent reste cantonné à son périmètre applicatif."
    }
  ] as InterviewSection[],
  keyTakeaways: [
    {
      title: "1. Démocratisation & inclusion par l'intégration",
      text: "La connexion native entre Google AI Studio, les skills agentiques et Google Workspace abaisse la barrière technique et favorise une adoption plus équilibrée entre les genres."
    },
    {
      title: "2. Vitesse & fiabilité opérationnelle",
      text: "L'exécution quasi instantanée transforme l'IA en partenaire de production capable de générer des livrables pédagogiques ou professionnels fiables en quelques minutes."
    },
    {
      title: "3. Vigilance éthique & périmètre agentique",
      text: "L'accompagnement humain doit réduire la fracture d'accès, cultiver l'esprit critique et tenir compte des limites des architectures 100 % cloud face aux outils locaux."
    },
    {
      title: "4. Perception environnementale",
      text: "L'analyse vidéo en direct via Gemini Live inaugure une assistance proactive ancrée dans le réel, qui demande un encadrement strict de la confidentialité."
    }
  ],
  models: [
    {
      model: "Gemini 4 Argon",
      releaseDate: "30 sept. 2026 (cyber) / 13 oct. 2026 (général)",
      positioning: "Raisonnement long-horizon, ingénierie logicielle complexe, analyse documentaire et cyberdéfense.",
      specsAndPricing: "Jusqu'à 1M tokens en sortie ; 77,9 % DeepSWE v1.1 ; 91,9 % Vibe Code Bench. Tarif API Google : 2 $–4 $ entrée / 10 $–20 $ sortie (par 1M tokens)."
    },
    {
      model: "Gemini 4 Carbon",
      releaseDate: "Automne 2026",
      positioning: "Modèle phare pour les projets complexes à très long horizon.",
      specsAndPricing: "Score de 60 sur l'Artificial Analysis Intelligence Index (relais technique Google)."
    },
    {
      model: "Gemini 4 Hydrogen",
      releaseDate: "12 nov. 2026",
      positioning: "Exécution rapide au quotidien, workflows agentiques à haut débit, codage et routage.",
      specsAndPricing: "Contexte unifié 1M tokens ; réflexion Low à xHigh ; 156 tok/s en moyenne. Tarif API Google : 1,50 $ entrée / 7,50 $ sortie (cache -95 %)."
    },
    {
      model: "Gemini 4 Neon",
      releaseDate: "18 nov. 2026",
      positioning: "Modèle intermédiaire équilibrant profondeur analytique et coût pour le code et la science.",
      specsAndPricing: "Score de 61 (xHigh) sur l'Artificial Analysis Intelligence Index ; 70,7 % sur CWE-bench v2 (Google DeepMind)."
    }
  ] as Gemini4ModelSpec[],
  agenticReliability: [
    {
      label: "Précision d'appel d'outils",
      value: "0,04 % d'erreur",
      detail: "Mesuré sur Google AI Studio (Priority) et 0,01 % d'erreur sur les sorties structurées."
    },
    {
      label: "Réduction des dérives",
      value: "-81 % / -79 %",
      detail: "Par rapport à Gemini 3.8 Flash : -81 % d'actions excessives, -79 % de réponses incomplètes et raccourcis divisés par 12."
    },
    {
      label: "Sécurité & honnêteté",
      value: "96,7 %",
      detail: "Score d'honnêteté agentique et résilience multipliée par plus de 2,3 face aux injections indirectes."
    }
  ],
  benchmarks: [
    {
      metric: "Débit de génération (Throughput)",
      result: "156 tokens/seconde (moyenne)",
      source: "Mesures officielles Google AI Studio (Flex)"
    },
    {
      metric: "Latence initiale (TTFT)",
      result: "1,78 s à 2,26 s",
      source: "Télémétrie officielle Google Vertex AI / Google AI Studio"
    },
    {
      metric: "Artificial Analysis Intelligence Index",
      result: "51 (High) / 54 (xHigh)",
      source: "Communication de lancement Google (devant Claude Sonnet 5.5 sur 7/10 tests et GPT-6.1 Terra sur 9/10)"
    },
    {
      metric: "Sciences et mathématiques",
      result: "51,4 % (Terminal-Bench-Science 0.1) ; 78,0 % (CritPt v2 High)",
      source: "Rapport technique Google DeepMind (lancement Hydrogen)"
    },
    {
      metric: "Taux de non-hallucination",
      result: "91,3 % (mode High)",
      source: "Fiche technique Google (AA-Omniscience Non-Hallucination Rate)"
    }
  ] as Gemini4BenchmarkRow[]
};
