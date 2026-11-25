export type FAQIconKey =
  | 'help'
  | 'book'
  | 'wrench'
  | 'chart'
  | 'users'
  | 'zap'
  | 'mail';

export interface FAQLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FAQItemData {
  id: string;
  question: string;
  /** Version texte complète et auto-suffisante pour JSON-LD FAQPage et HTML pré-rendu */
  plainAnswer: string;
  /** Paragraphes structurés pour l'affichage enrichi */
  paragraphs: string[];
  bullets?: string[];
  note?: string;
  links?: FAQLink[];
}

export interface FAQCategoryData {
  title: string;
  icon: FAQIconKey;
  items: FAQItemData[];
}

export const faqCategories: FAQCategoryData[] = [
  {
    title: "À propos d'Alkymya & Ancrage Local",
    icon: 'help',
    items: [
      {
        id: 'qui-est-alkymya-studio-ia',
        question: "Qui est Alkymya, studio d'intelligence artificielle et d'expertise IA ?",
        plainAnswer:
          "Alkymya (alkymya.co) est un studio d'intelligence artificielle et cabinet d'expertise basé à Ozoir-la-Ferrière en Seine-et-Marne (Île-de-France), fondé par Cyril Garnier avec Léonie Egesipe et exploité par CYRIL GARNIER CONSULTING. Alkymya n'est pas un organisme de formation en nom propre : nous intervenons comme praticiens experts en création d'agents IA sur mesure, stratégie SEO et GEO pour Google AI, médias éditoriaux et accompagnement New Business MVP, et collaborons avec des organismes partenaires certifiés Qualiopi (tels qu'INATEC) pour les formations IA en entreprise finançables OPCO.",
        paragraphs: [
          "Alkymya (alkymya.co) est un studio d'intelligence artificielle et cabinet d'expertise basé à Ozoir-la-Ferrière en Seine-et-Marne (Île-de-France), fondé par Cyril Garnier avec Léonie Egesipe et exploité par CYRIL GARNIER CONSULTING.",
          "Alkymya n'est pas un organisme de formation en nom propre : nous intervenons en tant qu'experts IA sur la création d'agents IA sur mesure, la stratégie SEO et GEO (Google AI Overviews), la création de médias éditoriaux (TheLittle77, TheLittle75, TheLittle83) et le programme New Business MVP, tout en collaborant avec des partenaires certifiés Qualiopi (comme INATEC) pour rendre nos formations finançables par les OPCO."
        ],
        links: [
          { label: 'Découvrir les 6 Alchimistes associés', href: '/alchimistes/' },
          { label: 'Explorer nos réalisations en production', href: '/oeuvres/' }
        ]
      },
      {
        id: 'meilleur-accompagnement-ia-entreprise',
        question: "Quel est le meilleur accompagnement pour déployer l'IA en entreprise ?",
        plainAnswer:
          "Le meilleur accompagnement pour déployer l'IA en entreprise combine cadrage des usages réels, gouvernance du shadow IA, montée en compétence pratique des équipes et prototypage rapide d'agents métiers. Chez Alkymya, nous adaptons chaque parcours au niveau de maturité des dirigeants, PME, ETI et équipes (marketing, RH, opérations) : audit et sensibilisation (avec notre partenaire CMI Systèmes sur le risque cyber et la CPME 77), ateliers pratiques finançables OPCO via nos partenaires Qualiopi, déploiement de harnais d'agents IA autonomes connectés à vos outils, et accompagnement New Business MVP sur 6 mois pour les porteurs d'offres.",
        paragraphs: [
          "Un déploiement IA réussi en TPE, PME ou ETI repose sur quatre étapes concrètes : partir des irritants quotidiens des équipes, encadrer le shadow IA et la sécurité des données, former par la pratique plutôt que par la théorie, puis automatiser avec des agents vérifiables.",
          "Alkymya adapte cet accompagnement aux dirigeants, services marketing, RH, opérations et porteurs de projets :"
        ],
        bullets: [
          "Cadrage dirigeants & gouvernance : ateliers sur ce qu'on délègue à l'IA et sur les risques cyber (en partenariat avec CMI Systèmes et la CPME 77).",
          "Montée en compétence des équipes : Formation Core IA (14h) et ateliers sur mesure éligibles OPCO via nos partenaires certifiés Qualiopi.",
          "Déploiement opérationnel : création d'agents IA sur mesure connectés à vos outils métiers, RAG local souverain (AWACLOUD) et stratégie SEO/GEO.",
          "Lancement d'offre : programme New Business MVP pendant 6 mois (200 € / mois) en binôme avec Cyril Garnier et Léonie Egesipe."
        ],
        links: [
          { label: 'Voir nos ateliers & formations entreprise', href: '/ateliers/' },
          { label: 'Découvrir New Business MVP', href: '/newbusiness/' }
        ]
      },
      {
        id: 'formation-ia-seine-et-marne',
        question: "Où suivre une formation en intelligence artificielle en Seine-et-Marne (77) ?",
        plainAnswer:
          "Alkymya anime des formations et ateliers en intelligence artificielle directement en Seine-et-Marne (77) depuis son siège situé au 2 rue Sacha Guitry à Ozoir-la-Ferrière (77330). Nous intervenons sur site dans tout le département et l'Est francilien (Ozoir-la-Ferrière, Torcy / Marne-la-Vallée avec DG Services, Melun, Meaux, Fontainebleau, CFA Itis), co-animons les matinées dirigeants IA de la CPME 77 avec CMI Systèmes, et collaborons avec INATEC (certifié Qualiopi en Seine-et-Marne, NDA 11771056077) pour le financement OPCO.",
        paragraphs: [
          "Implanté au 2 rue Sacha Guitry à Ozoir-la-Ferrière (77330), Alkymya accompagne et forme les entreprises, dirigeants et étudiants partout en Seine-et-Marne (77) et dans l'Est francilien (Marne-la-Vallée, Torcy, Melun, Meaux, Fontainebleau).",
          "Notre ancrage territorial s'appuie sur un écosystème actif en Seine-et-Marne :"
        ],
        bullets: [
          "Matinales dirigeants IA & cybersécurité avec Les Entrepreneurs Seine-et-Marne (CPME 77) et CMI Systèmes.",
          "Portage administratif et financement OPCO via notre partenaire certifié Qualiopi INATEC (NDA 11771056077).",
          "Interventions régulières auprès des entreprises locales, espaces partenaires (DG Services à Torcy) et écoles comme le CFA Itis."
        ],
        links: [
          { label: 'Découvrir le partenariat CPME 77', href: '/partenaires/entreprises/cpme-77/' },
          { label: 'Voir le partenariat CMI Systèmes (77)', href: '/partenaires/entreprises/cmi-systemes/' }
        ]
      },
      {
        id: 'expert-ia-generative-paris',
        question: "Alkymya intervient-il comme expert IA générative à Paris et en Île-de-France ?",
        plainAnswer:
          "Oui, Alkymya intervient quotidiennement comme expert IA générative à Paris et dans toute l'Île-de-France, directement dans les locaux des entreprises comme au sein des espaces Morning (ateliers à Morning Pereire Paris 17e et Morning Saint-Augustin Paris 8e). Nous formons également les promotions de grandes écoles parisiennes et franciliennes (HETIC, IÉSEG Paris-La Défense, Euridis Business School, ISCOM, Paris École de Management, Ynov Campus) et accompagnons des organisations partout en France et à l'international.",
        paragraphs: [
          "Oui. En tant que studio et expert IA générative à Paris et en Île-de-France, Alkymya intervient en intra-entreprise dans tous les arrondissements parisiens, à La Défense et en région parisienne, ainsi qu'en distanciel partout en France et à l'international.",
          "Nos interventions parisiennes et franciliennes s'appuient sur des collaborations terrain éprouvées :"
        ],
        bullets: [
          "Ateliers de découverte et de productivité IA dans les espaces de coworking Morning (Pereire Paris 17e et Saint-Augustin Paris 8e).",
          "Cours, sprints design et jurys en grandes écoles d'Île-de-France : HETIC, IÉSEG Paris-La Défense, Euridis Business School, ISCOM, Paris École de Management et Ynov.",
          "Accompagnement sur site de dirigeants, PME et ETI pour le déploiement d'agents IA et la visibilité Google AI."
        ],
        links: [
          { label: 'Voir nos ateliers chez Morning Paris', href: '/partenaires/lieux/morning/' },
          { label: 'Découvrir nos 7 partenaires École', href: '/partenaires/ecoles/' }
        ]
      }
    ]
  },
  {
    title: "Formations, Agents IA, SEO/GEO & Financement OPCO",
    icon: 'book',
    items: [
      {
        id: 'formation-ia-generative-entreprise',
        question: "Quelle formation IA générative pour entreprise propose Alkymya ?",
        plainAnswer:
          "Alkymya propose des formations et ateliers IA générative pour entreprise centrés sur la mise en pratique immédiate selon la règle « L'IA exécute, vous dirigez » : la Formation Core IA (14h en 4 demi-journées) pour maîtriser prompt engineering avancé, rédaction stratégique, direction artistique et workflows, ainsi que des ateliers intensifs de 3h30 (Agents IA, App No-Code, Éthique & IA Act). Tous nos formats existent en présentiel, hybride ou à distance et sont éligibles au financement OPCO via nos partenaires certifiés Qualiopi.",
        paragraphs: [
          "Les formations IA générative d'Alkymya sont structurées autour de trois piliers — Explorer, Transformer, Partager — avec un fil conducteur constant : « L'IA exécute, vous dirigez. » Nous privilégions les formats présentiels interactifs, tout en proposant des formats hybrides et à distance adaptés aux équipes réparties.",
          "Nos deux formats phares pour les entreprises :"
        ],
        bullets: [
          "Formation Core IA (14h sur 4 demi-journées) : maîtrise complète de la stack IA (prompt engineering avancé, studio graphique & branding, rédaction stratégique, synthèse décisionnelle et prototypage), finançable jusqu'à 100 % OPCO via nos partenaires Qualiopi.",
          "Ateliers intensifs de 3h30 (500 € HT) : Option A dédiée à la création de 3 agents IA autonomes, Option B dédiée aux applications web No-Code avec API IA, et modules Éthique & conformité IA Act."
        ],
        links: [
          { label: 'Consulter le détail des formations & tarifs', href: '/ateliers/' }
        ]
      },
      {
        id: 'atelier-ia-financable-opco',
        question: "Un atelier ou une formation IA Alkymya est-il finançable par un OPCO ?",
        plainAnswer:
          "Oui, les formations professionnelles animées par Alkymya peuvent être financées jusqu'à 100 % par votre OPCO grâce au portage de nos partenaires certifiés Qualiopi. Alkymya est un studio d'expertise IA et n'est pas certifié Qualiopi en nom propre : nous collaborons avec des organismes partenaires certifiés Qualiopi tels que l'école INATEC (NDA 11771056077) qui assurent la gestion administrative et réglementaire de votre dossier OPCO.",
        paragraphs: [
          "Oui. Alkymya n'est pas certifié Qualiopi en nom propre : en tant que studio d'expertise et de création IA, nous collaborons avec des organismes partenaires certifiés Qualiopi — notamment INATEC (NDA 11771056077) — qui assurent le portage administratif de la formation.",
          "Grâce à ce partenariat, votre entreprise peut bénéficier d'une prise en charge financière pouvant atteindre 100 % par son OPCO (selon vos droits et votre budget disponible), tout en profitant d'ateliers concrets conçus et animés par des praticiens de l'IA."
        ],
        links: [
          { label: 'Découvrir le portage Qualiopi/OPCO INATEC', href: '/partenaires/formations-certifiees/inatec/' }
        ]
      },
      {
        id: 'creer-agents-ia-sur-mesure',
        question: "Comment créer des agents IA sur mesure pour son entreprise avec Alkymya ?",
        plainAnswer:
          "Pour créer des agents IA sur mesure durables, Alkymya applique un principe clé : « Le modèle est interchangeable, le harnais ne l'est pas. » Plutôt que de simples prompts isolés, nous concevons l'architecture complète de l'agent (instructions métier, accès aux outils CRM/Slack/Notion/Drive via Make ou Zapier, mémoire documentaire RAG locale avec AWACLOUD et garde-fous de vérification). Vous pouvez soit apprendre à déployer 3 agents autonomes lors de l'atelier Option A (3h30, 500 € HT), soit confier au studio la réalisation d'agents sur mesure comme ceux déjà en production chez Alkymya.",
        paragraphs: [
          "Chez Alkymya, créer un agent IA sur mesure repose sur une conviction technique : « Le modèle est interchangeable, le harnais ne l'est pas. » Un agent fiable repose sur son harnais (règles métier, connecteurs outils, mémoire structurée, boucle de contrôle et validation humaine) compatible aussi bien avec Claude qu'avec Gemini.",
          "Deux voies complémentaires permettent de déployer vos agents avec Alkymya :"
        ],
        bullets: [
          "En atelier pratique (Option A Agents IA — 3h30, 500 € HT) : vos équipes conçoivent et connectent 3 agents autonomes à vos outils quotidiens (Slack, Notion, Gmail, Drive, CRM via Make/Zapier), ou conçoivent une application interne IA sans code (Option B App No-Code — 3h30, 500 € HT).",
          "En production studio sur mesure : agents de veille SEO & IA, analyse concurrentielle, production éditoriale, recherche académique (SODA) et automatisation de newsletters, avec conversion documentaire locale souveraine via AWACLOUD."
        ],
        links: [
          { label: 'Voir nos 4 agents IA en production', href: '/oeuvres/#agents-ia' },
          { label: 'Découvrir le RAG local souverain AWACLOUD', href: '/partenaires/outils/awa-cloud/' }
        ]
      },
      {
        id: 'strategie-seo-google-ai',
        question: "Comment déployer une stratégie SEO et GEO adaptée à Google AI (AI Overviews) ?",
        plainAnswer:
          "Une stratégie SEO et GEO (Generative Engine Optimization) efficace pour Google AI (AI Overviews), ChatGPT Search et Perplexity consiste à rendre vos pages instantanément compréhensibles et citables par les moteurs génératifs sans sacrifier l'expérience utilisateur : architecture HTML pré-rendue lisible sans JavaScript, balisage sémantique strict, graphe Schema.org JSON-LD relié, fichiers llms.txt et llms-full.txt, et contenus factuels « Answer-First ». Alkymya l'a démontré en production avec TheLittle77 (N°1 Google et cité par Google AI Overviews aux côtés de la LPO) et TheLittle83 (indexé par les IA en moins d'une heure), et propose l'audit gratuit Alkymya Scan.",
        paragraphs: [
          "Le référencement traditionnel (SEO) ne suffit plus si les robots d'indexation IA (GPTBot, Google-Extended, PerplexityBot) ne lisent pas votre contenu ou ne peuvent pas vérifier vos entités. La stratégie GEO (Generative Engine Optimization) d'Alkymya aligne technique, données structurées et rédaction factuelle :",
          "Preuves mesurées sur nos propres actifs en production :"
        ],
        bullets: [
          "Architecture technique & balisage : pré-rendu HTML complet, temps de réponse rapide, en-têtes canoniques, graphe Schema.org JSON-LD unifié et base documentaire llms.txt / llms-full.txt.",
          "TheLittle77 (216 pages, 149 392 mots) : classé N°1 sur Google et cité dans Google AI Overviews aux côtés de la LPO.",
          "TheLittle83 (132 pages bilingues FR/EN) : référencé par les moteurs d'IA moins d'une heure après sa mise en ligne, et TheLittle75 optimisé à −91 % de poids par page.",
          "Diagnostic immédiat : testez votre site gratuitement sur 5 piliers (UX, SEO & GEO, E-E-A-T, sécurité HTTP, RGPD) avec notre outil Alkymya Scan."
        ],
        links: [
          { label: 'Voir nos études de cas SEO & GEO', href: '/oeuvres/' },
          { label: 'Auditer votre site avec Alkymya Scan', href: '/ressources/analyseurs/analyseur-de-site-web/' }
        ]
      },
      {
        id: 'new-business-mvp',
        question: "Qu'est-ce que l'offre \"New Business MVP\" (accompagnement 6 mois) ?",
        plainAnswer:
          "Le programme New Business MVP est un accompagnement opérationnel de 6 mois à 200 € / mois guidé en binôme par Cyril Garnier et Léonie Egesipe pour concevoir votre produit minimum viable (MVP), définir votre profil client idéal (ICP), tester votre offre auprès de vrais clients, fixer votre pricing et piloter vos décisions selon le cadre « Continuer, Pivoter ou Accélérer » avant d'engager des budgets lourds.",
        paragraphs: [
          "Le programme New Business MVP est un accompagnement opérationnel de 6 mois conçu pour permettre aux porteurs de projets, créateurs d'entreprise et indépendants de tester et valider leur offre auprès de vrais clients avant d'engager des investissements lourds.",
          "Guidé en binôme par Cyril Garnier et Léonie Egesipe, ce parcours pas à pas vous permet de :"
        ],
        bullets: [
          "Définir avec précision votre profil client idéal (ICP) et ses habitudes réelles d'achat.",
          "Distinguer l'essentiel du superflu pour bâtir un MVP (produit minimum viable) percutant et déployable rapidement.",
          "Mettre en place un pricing optimal et structurer votre routine commerciale.",
          "Construire un pitch convaincant fondé sur des preuves terrain concrètes.",
          "Piloter vos décisions stratégiques grâce à la boussole « Continuer, Pivoter ou Accélérer »."
        ],
        note: "Tarif : 200 € / mois pendant 6 mois. Prévoir un budget complémentaire d'environ 50 € à 150 € pour vos abonnements et crédits aux outils d'IA durant les ateliers pratiques.",
        links: [
          { label: 'Découvrir le programme New Business MVP', href: '/newbusiness/' }
        ]
      }
    ]
  },
  {
    title: "Avis, Résultats & Références",
    icon: 'chart',
    items: [
      {
        id: 'avis-resultats-formations-alkymya',
        question: "Quels sont les avis et résultats mesurés des formations Alkymya ?",
        plainAnswer:
          "Les formations et ateliers Alkymya recueillent 99,3 % de recommandation globale et 90,9 % de participants déclarant se sentir immédiatement plus performants dans leur travail, avec une progression continue de +1,6 point sur 12 mois (175 apprenants évalués individuellement sur le baromètre 2024–2025, plus de 450 professionnels et étudiants accompagnés au total). En grandes écoles, environ 80 % des étudiants finalisent leur TP en 2 jours à Euridis Business School et 100 % des mémoires accompagnés à l'IÉSEG depuis 2019 réussissent leur soutenance, avec des retours très positifs relevés sur les ateliers Morning et les matinées CPME 77.",
        paragraphs: [
          "La satisfaction et l'impact opérationnel des interventions Alkymya sont mesurés systématiquement après chaque cohorte et intervention en entreprise ou en grande école :"
        ],
        bullets: [
          "99,3 % de taux de recommandation globale des formations et ateliers Alkymya.",
          "90,9 % des participants déclarent se sentir immédiatement plus performants dans leur travail après la session.",
          "+1,6 point d'amélioration continue des évaluations sur 12 mois (175 apprenants évalués sur le baromètre 2024–2025, 450+ professionnels et étudiants accompagnés).",
          "~80 % de finalisation complète des travaux pratiques en 2 jours à Euridis Business School (mise en ligne le Jour 1, agent commercial le Jour 2) et 100 % de réussite aux mémoires accompagnés à l'IÉSEG depuis 2019.",
          "Retours très positifs transmis par les équipes des espaces Morning (Pereire et Saint-Augustin) ainsi que par les dirigeants adhérents de la CPME 77."
        ],
        links: [
          { label: 'Voir nos cas écoles (IÉSEG, Euridis)', href: '/partenaires/ecoles/' },
          { label: 'Lire le retour des matinées CPME 77', href: '/partenaires/entreprises/cpme-77/' }
        ]
      },
      {
        id: 'etablissements-et-partenaires',
        question: "Quels établissements et entreprises font confiance à Alkymya ?",
        plainAnswer:
          "Alkymya collabore avec 23 organisations partenaires structurées en 6 pôles : 7 grandes écoles (IÉSEG School of Management, Euridis Business School, HETIC, Ynov Campus, CFA Itis, ISCOM, Paris École de Management), l'organisme certifié Qualiopi INATEC, Objectif Alternance, des entreprises et réseaux dirigeants (CMI Systèmes, CPME 77, SNCF, Fondation GRDF, SEALESTER, Azimuto), les espaces de coworking Morning et DG Services Torcy, ainsi que les acteurs souverains AWACLOUD et Onecub.",
        paragraphs: [
          "Notre écosystème réunit 23 organisations partenaires en entreprise, enseignement supérieur, insertion professionnelle et souveraineté numérique :"
        ],
        bullets: [
          "Grandes écoles (7) : IÉSEG School of Management (depuis 2019), Euridis Business School, HETIC, Ynov Campus, CFA Itis, ISCOM et Paris École de Management.",
          "Entreprises, réseaux & fondations : CMI Systèmes, CPME 77 (Les Entrepreneurs Seine-et-Marne), SNCF, Fondation GRDF, SEALESTER, Azimuto, AvecLouise, Esperanta Services.",
          "Formation, insertion & lieux : INATEC (portage Qualiopi/OPCO), Objectif Alternance (Kendra Martine), espaces Morning (Paris) et DG Services (Torcy).",
          "Technologies souveraines : AWACLOUD (conversion Markdown & RAG local) et Onecub (Data Spaces RGPD & GAIA-X)."
        ],
        links: [
          { label: 'Explorer tout l’annuaire Partenaires', href: '/partenaires/' }
        ]
      },
      {
        id: 'etudes-generation-ia',
        question: "Que révèlent les études Génération IA (2024 → 2026) d'Alkymya ?",
        plainAnswer:
          "L'Observatoire longitudinal Génération IA 2024 → 2026 d'Alkymya porte sur 1 082 étudiants interrogés sur 3 vagues dans 5 grandes écoles franciliennes : l'adoption atteint 98,1 % (dont 61,0 % d'usage quotidien, en hausse de +25 points), 52,3 % pratiquent le split-stack multi-outils (ChatGPT, Claude, Gemini, Perplexity) et 21 % expriment une ambivalence productive entre gain d'efficacité et exigence d'esprit critique.",
        paragraphs: [
          "Plutôt que de commenter l'IA à partir d'opinions abstraites, Alkymya publie depuis 2024 un observatoire empirique en libre accès sur 3 vagues d'enquête (2024 n=326, 2025 n=387 et synthèse longitudinale 2024–2026 sur 1 082 étudiants de 5 grandes écoles franciliennes) :",
          "Ces données éclairent directement les DRH, managers et directeurs pédagogiques sur les compétences hybrides attendues et les dérives à encadrer."
        ],
        bullets: [
          "98,1 % d'adoption étudiante en 2026 et 61,0 % d'usage quotidien (+25 points en deux ans).",
          "52,3 % de pratique « split-stack » multi-modèles selon les tâches (rédaction, code, recherche, synthèse).",
          "21 % d'ambivalence productive et un ratio de 3:1 entre bénéfices perçus et vigilance critique sur la dépendance cognitive."
        ],
        links: [
          { label: 'Consulter l’étude Génération IA 2024 → 2026', href: '/ressources/etudes/generation-ia-2026/' },
          { label: 'Voir toutes nos études (Gemini 4, Doctrine IAG)', href: '/ressources/etudes/' }
        ]
      }
    ]
  },
  {
    title: "Outils Gratuits & Démonstrateurs Alkymya",
    icon: 'wrench',
    items: [
      {
        id: 'analyseur-site-web-alkymya-scan',
        question: "Qu'est-ce que l'Analyseur de site web (Alkymya Scan) ?",
        plainAnswer:
          "Alkymya Scan (scan.alkymya.co/#analyseur) est notre analyseur de site web IA gratuit et sans inscription. Il effectue une inspection technique multi-pages en lecture seule sur 5 piliers — UX & Brand Content, SEO & GEO (lisibilité Google AI, ChatGPT Search, llms.txt, JSON-LD), E-E-A-T On-Page/Off-Site, Performance & 6 en-têtes de sécurité HTTP, et conformité RGPD/Consent Mode v2/RGAA — et délivre une note sur 100 avec les 3 failles P0 prioritaires.",
        paragraphs: [
          "Alkymya Scan (scan.alkymya.co/#analyseur) est notre outil d'audit web 360° gratuit et accessible sans création de compte. Il inspecte vos pages clés (accueil, Contact, À propos, Mentions légales, Cas clients, Blog) pour délivrer immédiatement une note globale sur 100, 5 scores par pilier et vos 3 failles P0 prioritaires :",
          "Les sites protégés par pare-feu anti-bot (Cloudflare, DataDome, Akamai) sont signalés comme bloqués afin d'éviter tout faux diagnostic."
        ],
        bullets: [
          "01. UX & Brand Content : clarté de la proposition de valeur, hiérarchie H1–H2 et appels à l'action.",
          "02. SEO & GEO : pré-rendu HTML sans JS pour GPTBot, Schema.org JSON-LD, /llms.txt, robots.txt et sitemap.xml.",
          "03. E-E-A-T : auteurs identifiés, études de cas, SIRET et signaux de réputation vérifiables.",
          "04. Performance & Sécurité : TTFB mesuré, HTTPS et les 6 en-têtes de sécurité HTTP (HSTS, CSP, etc.).",
          "05. Juridique, RGPD & Accessibilité : mentions légales, cohérence Consent Mode v2, contrastes et attributs alt."
        ],
        links: [
          { label: 'Lire la fiche complète Analyseur de site web', href: '/ressources/analyseurs/analyseur-de-site-web/' },
          { label: 'Lancer Alkymya Scan directement', href: 'https://scan.alkymya.co/#analyseur', external: true }
        ]
      },
      {
        id: 'analyseur-cv-photo-memoire',
        question: "Quels autres analyseurs IA gratuits propose Alkymya (CV, Photo, Mémoire) ?",
        plainAnswer:
          "En complément d'Alkymya Scan, Alkymya met gratuitement en ligne trois autres analyseurs documentés sans inscription : l'Analyseur de CV (analysercvpro.alkymya.co, co-construit avec Kendra Martine d'Objectif Alternance pour confronter un CV à une offre réelle sans l'enregistrer dans une CVthèque), l'Analyseur de photo (analyseurdephoto.alkymya.co pour l'analyse de cadrage et les descriptions alt SEO) et l'Analyseur de mémoire (analyseurdememoire.alkymya.co pour vérifier la cohérence problématique/plan sans jamais rédiger à la place de l'étudiant).",
        paragraphs: [
          "En plus de l'Analyseur de site web, trois autres outils ouverts sans inscription disposent chacun de leur fiche de méthode, de limites assumées et de règles de confidentialité :"
        ],
        bullets: [
          "Analyseur de CV (avec Kendra Martine — Objectif Alternance) : confrontation CV / fiche de poste et diagnostic ATS sincère, sans conservation dans une CVthèque commerciale.",
          "Analyseur de photo : critique de cadrage, lumière et génération de descriptions alt SEO fidèles au visuel réel.",
          "Analyseur de mémoire : relecture méthodologique de l'alignement titre, problématique, hypothèses et bibliographie, sans rédiger à la place de l'étudiant."
        ],
        links: [
          { label: 'Voir nos 4 Analyseurs IA gratuits', href: '/ressources/analyseurs/' },
          { label: 'Découvrir le partenariat Objectif Alternance', href: '/partenaires/insertion/objectif-alternance/' }
        ]
      },
      {
        id: 'business-game-nono-banaba',
        question: "Qu'est-ce que le Business Game « NoNo BanaBa » ?",
        plainAnswer:
          "NoNo BanaBa est un business game pédagogique interactif conçu par Alkymya pour expérimenter le web-marketing, l'analyse de données, les arbitrages budgétaires et l'usage raisonné de l'IA autour d'une marque fashion Gen Z, déployé en grandes écoles et en séminaires d'entreprise.",
        paragraphs: [
          "NoNo BanaBa est une simulation interactive développée par Alkymya autour d'une marque fashion Gen Z. En temps contraint, étudiants de grandes écoles et équipes d'entreprise pilotent le positionnement, le mix acquisition, la lecture d'indicateurs data et les arbitrages de rentabilité avec l'IA."
        ],
        links: [
          { label: 'Découvrir le Business Game NoNo BanaBa', href: '/ressources/business-game/' }
        ]
      },
      {
        id: 'agent-soda-pedagogique',
        question: "À quoi sert « Soda, l'agent IA pédagogique » ?",
        plainAnswer:
          "Soda est un agent IA pédagogique utilisé notamment avec nos promotions IÉSEG qui agit comme un coach méthodologique pour structurer une analyse de marché, affiner une innovation produit/service et préparer un mémoire ou un projet entrepreneurial (nécessite un compte Genspark pour son exécution).",
        paragraphs: [
          "Soda est un agent IA pédagogique utilisé auprès de nos promotions d'étudiants (notamment à l'IÉSEG) et d'entrepreneurs : il guide pas à pas l'analyse de marché, le questionnement produit et la structuration des sources, sans jamais remplacer la réflexion humaine (requiert un compte Genspark)."
        ]
      }
    ]
  },
  {
    title: "L'Équipe & Réalisations Créatives",
    icon: 'users',
    items: [
      {
        id: 'equipe-cyril-garnier-alchimistes',
        question: "Qui pilote Alkymya (Cyril Garnier, Léonie Egesipe & Les Alchimistes) ?",
        plainAnswer:
          "Alkymya est fondé et dirigé par Cyril Garnier (ex-directeur général de SNCF Développement, enseignant en IA en grandes écoles, architecte de croissance et photographe) aux côtés de Léonie Egesipe (co-fondatrice, cheffe de projet digital et directrice artistique Studio Création IA). Le studio rassemble au total six Alchimistes associés complémentaires : Véronique Landereau (Santé & Prévention — AvecLouise), Mariana Didier Laurent (Services à la personne & Assurance — Esperanta Services), Olivier Dion (Data Spaces souverains & RGPD — Onecub) et Kendra Martine (Insertion & Alternance — Objectif Alternance).",
        paragraphs: [
          "Alkymya est dirigé par Cyril Garnier (fondateur, ex-DG de SNCF Développement, enseignant en IA en grandes écoles, conseil de dirigeants et photographe) et Léonie Egesipe (co-fondatrice, cheffe de projet digital, directrice artistique IA et co-animatrice de New Business MVP).",
          "Autour du studio interviennent quatre Alchimistes associés experts de leurs secteurs : Véronique Landereau (AvecLouise), Mariana Didier Laurent (Esperanta Services), Olivier Dion (Onecub) et Kendra Martine (Objectif Alternance)."
        ],
        links: [
          { label: 'Consulter les profils des 6 Alchimistes', href: '/alchimistes/' }
        ]
      },
      {
        id: 'projet-metropolia',
        question: "Qu'est-ce que le projet Métropolia ?",
        plainAnswer:
          "Métropolia est une série narrative cyberpunk expérimentale créée avec l'IA sous la direction artistique de Léonie Egesipe et Cyril Garnier, suivant le personnage de LEONIE & LEONIA dans une dualité inspirée de Fritz Lang pour explorer les usages créatifs de l'IA générative vidéo et sonore.",
        paragraphs: [
          "Métropolia est un projet pédagogique et créatif sous forme de dystopie cyberpunk co-conçu par Léonie Egesipe (scénario et direction artistique) et Cyril Garnier. La série suit la dualité de LEONIE & LEONIA dans un univers inspiré de Fritz Lang, démontrant concrètement la maîtrise de la direction artistique photo, vidéo et audio augmentée par l'IA."
        ],
        links: [
          { label: 'Voir Métropolia dans Nos Œuvres', href: '/oeuvres/#creation-artistique' }
        ]
      }
    ]
  },
  {
    title: "Glossaire & Fondamentaux IA",
    icon: 'zap',
    items: [
      {
        id: 'ia-generative-definition',
        question: "Qu'est-ce qu'une IA Générative ?",
        plainAnswer:
          "Une intelligence artificielle générative est un système capable de produire du contenu original (texte, code, image, audio, vidéo) à partir de modèles statistiques entraînés sur de grands corpus, et non plus seulement de classer ou d'analyser des données existantes.",
        paragraphs: [
          "Une IA générative est un modèle capable de créer un contenu inédit (texte, code informatique, image, voix ou vidéo) en réponse à une instruction. Contrairement aux algorithmes purement analytiques, elle synthétise et génère de nouvelles productions à vérifier par l'humain."
        ]
      },
      {
        id: 'prompt-engineering-definition',
        question: "Qu'est-ce que le « prompt engineering » ?",
        plainAnswer:
          "Le prompt engineering est la discipline consistant à formuler des instructions structurées (rôle, contexte, contraintes, format de sortie, exemples et critères de vérification) afin d'obtenir d'un modèle d'IA des résultats fiables et reproductibles.",
        paragraphs: [
          "C'est l'art de structurer avec précision les instructions fournies à une IA (contexte métier, rôle, format attendu, exemples et garde-fous) pour obtenir des réponses fiables, exploitables et reproductibles."
        ]
      },
      {
        id: 'llm-token-hallucination',
        question: "Que signifient LLM, token et hallucination en intelligence artificielle ?",
        plainAnswer:
          "Un LLM (Large Language Model, tel que Claude, Gemini ou GPT) est un grand modèle de langage entraîné pour comprendre et générer du langage naturel. Il découpe les textes en fragments appelés tokens (qui mesurent sa fenêtre de contexte et son coût de traitement). On appelle hallucination le fait pour une IA de générer avec assurance une affirmation plausible mais factuellement fausse ou inventée, ce qui impose une vérification humaine systématique.",
        paragraphs: [
          "Trois notions essentielles pour piloter l'IA avec discernement :"
        ],
        bullets: [
          "LLM (Large Language Model) : grand modèle de langage entraîné sur d'immenses corpus textuels et multimodaux (ex. : Claude, Gemini, GPT).",
          "Token : unité de texte (mot ou fragment de mot) traitée par le modèle ; la fenêtre de contexte et la facturation API se mesurent en tokens.",
          "Hallucination : réponse fluide et confiante produite par l'IA mais factuellement inexacte ou non sourcée, imposant toujours une relecture humaine."
        ]
      }
    ]
  },
  {
    title: "Contacter Alkymya",
    icon: 'mail',
    items: [
      {
        id: 'qui-contacter-former-equipes-ia',
        question: "Qui contacter pour former ses équipes à l'IA générative avec Alkymya ?",
        plainAnswer:
          "Pour former vos équipes à l'IA générative, créer des agents sur mesure ou lancer un accompagnement dirigeant, contactez directement Cyril Garnier, fondateur d'Alkymya, via le formulaire sur https://alkymya.co/contact/, par e-mail à cyril@alkymya.co ou par téléphone au 06 43 64 97 77 (réponse sous 24h ouvrées). Un échange de cadrage de 20 minutes permet de concevoir votre programme sur mesure et d'organiser si besoin la prise en charge OPCO avec notre partenaire certifié Qualiopi INATEC (ou un volet cybersécurité conjoint avec CMI Systèmes).",
        paragraphs: [
          "Votre interlocuteur direct est Cyril Garnier, fondateur et directeur associé d'Alkymya. Que ce soit pour former vos équipes à l'IA générative, déployer des agents IA métiers ou auditer votre visibilité SEO/GEO, vous pouvez nous joindre directement :"
        ],
        bullets: [
          "Formulaire de cadrage en ligne : sur /contact/ (diagnostic initial de 20 minutes offert).",
          "E-mail direct : cyril@alkymya.co (réponse garantie sous 24h ouvrées).",
          "Téléphone : 06 43 64 97 77 — Studio basé à Ozoir-la-Ferrière (77), interventions à Paris, en Île-de-France et partout en France.",
          "Financement OPCO & Cybersécurité : montage administratif assuré avec notre partenaire certifié Qualiopi INATEC, et co-animation cybersécurité possible avec CMI Systèmes."
        ],
        links: [
          { label: 'Accéder au formulaire de contact', href: '/contact/' },
          { label: 'Écrire à cyril@alkymya.co', href: 'mailto:cyril@alkymya.co', external: true }
        ]
      },
      {
        id: 'reseaux-sociaux-alkymya',
        question: "Sur quels réseaux sociaux suivre Alkymya ?",
        plainAnswer:
          "Vous pouvez suivre Alkymya sur LinkedIn (page Alkymya et profil Cyril Garnier), Instagram (@alkymya.co et @alkymya_cyril), YouTube (chaîne Alkymya pour nos créations vidéo dont Métropolia), TikTok (@cyrilgarnierphoto) et Facebook.",
        paragraphs: [
          "Retrouvez nos actualités, études Génération IA, démonstrations d'agents et projets créatifs sur nos réseaux :"
        ],
        bullets: [
          "LinkedIn : page entreprise Alkymya et profil Cyril Garnier.",
          "YouTube : chaîne Alkymya (projets vidéo, retours ateliers et série Métropolia).",
          "Instagram : @alkymya.co et @alkymya_cyril.",
          "TikTok : @cyrilgarnierphoto · Facebook : Cyril Garnier."
        ],
        links: [
          { label: 'Alkymya sur LinkedIn', href: 'https://www.linkedin.com/company/alkymya/', external: true },
          { label: 'Chaîne YouTube Alkymya', href: 'https://www.youtube.com/@alkymya', external: true }
        ]
      }
    ]
  }
];

export const allFaqItems: FAQItemData[] = faqCategories.flatMap((cat) => cat.items);
