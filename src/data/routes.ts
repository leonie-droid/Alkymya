export interface RouteContentSection {
  h2: string;
  paragraphs: string[];
  listItems?: string[];
}

export interface InternalLink {
  href: string;
  label: string;
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
  content: {
    leadParagraph: string;
    sections: RouteContentSection[];
    internalLinks: InternalLink[];
  };
}

export const routes: RouteData[] = [
  {
    path: '/',
    title: "Alkymya | Studio d'Innovation et Formations IA",
    description: "Studio d'innovation et formations en IA générative à Ozoir-la-Ferrière. Accompagnement sur-mesure des entreprises et grandes écoles vers l'IA.",
    h1: "L'art de la transformation IA.",
    ogImage: "https://alkymya.co/og-image.jpg",
    lastmod: "2026-11-09",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Alkymya fusionne créativité et expertise technologique pour propulser la Génération IA vers l'excellence opérationnelle et stratégique en France et en Europe.",
      sections: [
        {
          h2: "Nos trois piliers fondamentaux d'action",
          paragraphs: [
            "Nous guidons les dirigeants, professionnels et étudiants à travers trois axes complémentaires : Explorer les technologies d'IA générative, Transformer les processus métiers avec des prototypes fonctionnels, et Partager les compétences clés pour une autonomie durable."
          ],
          listItems: [
            "Explorer : Ateliers d'acculturation et veille stratégique de pointe sur l'intelligence artificielle.",
            "Transformer : Conseil stratégique, agentification des workflows et prototypage no-code / low-code.",
            "Partager : Formations certifiantes Qualiopi, business games interactifs et mentorat de talents."
          ]
        },
        {
          h2: "Notre impact pédagogique et territorial",
          paragraphs: [
            "Basé en Seine-et-Marne à Ozoir-la-Ferrière, Alkymya collabore étroitement avec les grandes écoles d'ingénieurs et de commerce de premier plan ainsi que les grands groupes industriels et de services.",
            "Plus de 450 étudiants et professionnels formés avec un taux de satisfaction de 98 % sur l'ensemble de nos programmes d'acculturation et d'expérimentation."
          ]
        }
      ],
      internalLinks: [
        { href: "/ateliers/", label: "Découvrir nos ateliers et formations IA" },
        { href: "/newbusiness/", label: "Rejoindre le programme New Business MVP" },
        { href: "/oeuvres/", label: "Consulter nos réalisations concrètes en IA" },
        { href: "/alchimistes/", label: "Rencontrer les fondateurs d'Alkymya" },
        { href: "/contact/", label: "Contacter nos experts pour un projet sur-mesure" }
      ]
    }
  },
  {
    path: '/ia',
    title: "Générateur IA | Outils d'Idéation Alkymya",
    description: "Explorez notre générateur d'idées IA. Testez des prompts avancés, générez des personas métiers et accélérez votre créativité avec les outils Alkymya.",
    h1: "Le Générateur d'Idées IA.",
    ogImage: "https://alkymya.co/og-ia.jpg",
    lastmod: "2026-11-09",
    schemaType: "WebApplication",
    content: {
      leadParagraph: "Explorez en direct la puissance créative de l'intelligence artificielle grâce à notre suite d'outils interactifs d'idéation, de génération de personas et de cas d'usage métiers.",
      sections: [
        {
          h2: "À qui s'adresse le Générateur d'Idées IA Alkymya ?",
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
    title: "Trois carnets de terrain, trois sites mesurés — Alkymya",
    description: "387 pages, 804 photographies, 279 198 mots. Trois sites construits avec la même méthode, mesurés le 9 novembre 2026. Ce qui a été fait, et ce qui reste.",
    ogTitle: "Trois carnets de terrain, trois sites mesurés",
    ogDescription: "Ce n'est pas un portfolio. C'est une démonstration : trois sites, une méthode, des chiffres datés.",
    h1: "Trois carnets de terrain, trois sites mesurés",
    ogImage: "https://alkymya.co/og-oeuvres.jpg",
    lastmod: "2026-11-09",
    schemaType: "CollectionPage",
    content: {
      leadParagraph: "Trois sites, trois territoires, une seule manière de travailler. Ce ne sont pas des références clientes : ce sont mes propres carnets, en Seine-et-Marne, à Paris et dans le Var. Je les ai construits pour être mesurés, et je publie les chiffres — y compris ceux qui ne sont pas terminés. Au total : 387 pages, 804 photographies distinctes, 279 198 mots.",
      sections: [
        {
          h2: "thelittle77.fr — la Seine-et-Marne, en neuf bassins",
          paragraphs: [
            "Un carnet de voyage territorial. Neuf grands bassins éditoriaux, du Grand Morin à la Bassée, avec pour chacun un dossier, des lieux, des récits et un agenda.",
            "216 pages · 149 392 mots · 607 photographies",
            "Ce qui a été fait : le site servait auparavant une seule page vide à tous les moteurs — chaque adresse renvoyait le même HTML sans contenu. Le pré-rendu a été mis en place, puis les neuf dossiers territoriaux écrits, puis les images optimisées : le logo est passé de 1,28 Mo à 2,6 Ko et la page d'accueil de 1,4 Mo à environ 120 Ko. Un fichier de contexte de 40,7 Ko décrit aujourd'hui les neuf territoires aux modèles de langage.",
            "Le 9 novembre 2026, le site est premier résultat sur « photos de ciels et paysages en Seine-et-Marne ». Il est absent des dix premiers sur « randonnée Seine-et-Marne sans voiture » : c'est l'intention d'un concurrent, et je le dis parce que c'est vrai."
          ]
        },
        {
          h2: "thelittle75.fr — Paris, en onze récits",
          paragraphs: [
            "Une revue parisienne : onze grands récits, une carte des vingt arrondissements avec une fiche par arrondissement, un index patrimonial, un agenda culturel et une photothèque.",
            "39 pages · 27 839 mots · 53 photographies",
            "Ce qui a été fait : le site a été construit sans pré-rendu, puis corrigé. En deux jours, on est passé d'une page de HTML unique sur vingt-cinq à trente-huit pages sur trente-huit, chacune avec son titre, son fil d'Ariane et ses données structurées. Ensuite les images : même site, mêmes photos, 2 166 Ko par page avant, 200 Ko après, soit −91 % — rien n'a été retiré.",
            "Le 9 novembre 2026, le site est deuxième résultat sur « chronique Belleville Paris récit », derrière un théâtre. Trente-neuf pages bien tenues se placent devant des sites dix fois plus gros."
          ]
        },
        {
          h2: "thelittle83.fr — le Var, oiseaux et paysages",
          paragraphs: [
            "Un carnet naturaliste et photographique : cinquante et une fiches d'espèces par langue, huit spots d'observation, une galerie de paysages. Une règle éditoriale assumée — aucune capture, aucun appâtage, cent pour cent des photographies prises sur le terrain.",
            "132 pages en deux langues · 101 967 mots · 144 photographies",
            "Ce qui a été fait : mis en ligne le 8 novembre 2026, le site est bilingue français-anglais dès le premier jour, avec 396 déclarations de correspondance entre les deux versions. Les 1 466 emplacements d'image sont tous optimisés et dimensionnés. Le fichier de contexte destiné aux modèles de langage est daté et décrit la démarche de prise de vue.",
            "C'est le site qui a le moins coûté à mettre au niveau : il a été construit sur le socle corrigé des deux premiers."
          ]
        },
        {
          h2: "Les trois, côte à côte",
          paragraphs: [
            "Tableau comparatif des trois carnets au 9 novembre 2026 : thelittle77 (216 pages, 607 photos distinctes, 149 392 mots, français), thelittle75 (39 pages, 53 photos distinctes, 27 839 mots, français), thelittle83 (132 pages, 144 photos distinctes, 101 967 mots, français et anglais).",
            "Mesures du 9 novembre 2026. Les notes internes qui accompagnent ces sites ne mesurent pas une position dans Google : elles notent la solidité d'un site sur dix critères. Une seule position compte, et elle se vérifie requête par requête."
          ]
        },
        {
          h2: "Ce que ces trois sites m'ont appris",
          paragraphs: [
            "Le pré-rendu vaut trente points à lui seul. Sur thelittle75, la note interne est passée de 45 à 77 en deux jours, une fois le bon correctif identifié. Aucun autre chantier n'a ce rendement.",
            "Les images pèsent plus lourd que le contenu. −91 % de poids par page sans retirer une seule photo. C'est le gain le plus rapide à obtenir et le plus visible pour un visiteur.",
            "Le volume ne fait rien tout seul. thelittle77 totalise 149 392 mots, dont soixante-trois récits de fond ; quatre-vingt-dix pages de lieux attendent encore leur texte. Un site de trente-neuf pages soignées se place devant un site de deux cent seize pages mal tenues."
          ]
        },
        {
          h2: "Et pour votre projet",
          paragraphs: [
            "Ces trois sites ont été construits avec la même séquence : mesurer, corriger ce qui bloque l'accès, écrire, mesurer à nouveau. Six semaines séparent le premier audit de thelittle77 de son état actuel ; deux jours ont suffi à thelittle75 pour passer de 45 à 77.",
            "C'est cette séquence que nous proposons dans l'accompagnement NewBusiness MVP, appliquée non plus à un site mais à votre offre : un client idéal documenté, une proposition de valeur écrite, un produit en ligne, un prix testé auprès de vraies personnes, une décision prise sur des faits. Six mois, une séance d'une heure par semaine, un livrable par mois."
          ]
        }
      ],
      internalLinks: [
        { href: "/newbusiness/", label: "Lire comment se déroule l'accompagnement NewBusiness MVP →" },
        { href: "/ateliers/", label: "Découvrir nos ateliers et formations pratiques en IA" },
        { href: "/alchimistes/", label: "Rencontrer Cyril Garnier et l'équipe Alkymya" },
        { href: "/contact/", label: "Échanger sur votre projet de site ou d'offre" }
      ]
    }
  },
  {
    path: '/ateliers',
    title: "Ateliers et Formations IA | Studio Alkymya",
    description: "Formations opérationnelles et ateliers en IA générative, création d'agents autonomes, prompt engineering et conformité européenne de l'IA Act en France.",
    h1: "Nos Ateliers & Formations IA",
    ogImage: "https://alkymya.co/og-ateliers.jpg",
    lastmod: "2026-11-09",
    schemaType: "Course",
    content: {
      leadParagraph: "Des programmes de formation intensifs, immédiatement actionnables et finançables par les OPCO grâce à notre certification d'État Qualiopi en partenariat avec l'école INATEC.",
      sections: [
        {
          h2: "À qui s'adressent nos formations et ateliers IA ?",
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
            "Nous privilégions un ratio strict de 80 % de pratique pour 20 % d'apports méthodologiques. Les sessions peuvent se tenir en présentiel dans vos locaux (partout en France et en Île-de-France), dans nos espaces partenaires, ou en classe virtuelle synchrone haute interaction.",
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
    title: "Ressources et Guides IA | Studio Alkymya",
    description: "Accédez librement à notre veille technologique, guides d'agentification, fiches pratiques et frameworks stratégiques pour maîtriser l'IA en entreprise.",
    h1: "Ressources & Guides IA",
    ogImage: "https://alkymya.co/og-ressources.jpg",
    lastmod: "2026-11-09",
    schemaType: "CollectionPage",
    content: {
      leadParagraph: "Une bibliothèque ouverte de savoirs pratiques, méthodologies d'adoption de l'IA, frameworks d'agentification et veilles technologiques mises à jour chaque semaine.",
      sections: [
        {
          h2: "Guides opérationnels et canevas téléchargeables",
          paragraphs: [
            "Nos ressources ont été élaborées pour vous permettre de franchir chaque palier de maturité technologique avec méthode et sérénité, de l'expérimentation isolée à l'industrialisation des agents IA."
          ],
          listItems: [
            "Matrice de maturité IA pour évaluer le niveau d'adoption de votre organisation.",
            "Guide pas à pas de l'agentification : de l'analyse du workflow à la connexion API.",
            "Modèles de prompts pour dirigeants, directeurs pédagogiques et chefs de projet.",
            "Dossiers de décryptage du cadre réglementaire européen de l'IA Act."
          ]
        },
        {
          h2: "Veille continue et partage en open source",
          paragraphs: [
            "Nous croyons à la diffusion ouverte des connaissances. Tous nos guides intègrent des cas réels tirés de nos interventions en grandes écoles et en entreprises."
          ]
        }
      ],
      internalLinks: [
        { href: "/ateliers/", label: "Participer à un atelier d'application pratique" },
        { href: "/ia/", label: "Tester notre générateur d'idées interactif" },
        { href: "/contact/", label: "Suggérer une thématique de ressource" }
      ]
    }
  },
  {
    path: '/alchimistes',
    title: "Nos Alchimistes | L'Équipe du Studio Alkymya",
    description: "Rencontrez l'équipe Alkymya : Cyril Garnier, Léonie Egesipe, Véronique Landereau et Mariana Didier Laurent, experts de la transformation IA en entreprise.",
    h1: "Nos Alchimistes",
    ogImage: "https://alkymya.co/og-alchimistes.jpg",
    lastmod: "2026-11-09",
    schemaType: "AboutPage",
    content: {
      leadParagraph: "Derrière Alkymya, quatre personnalités complémentaires réunissent la vision stratégique d'entreprise, la rigueur pédagogique, l'audace de la direction artistique — et deux expertises de terrain, la santé et les services à la personne.",
      sections: [
        {
          h2: "Cyril Garnier — Directeur Associé & Fondateur",
          paragraphs: [
            "Consultant senior et enseignant certifié au sein des plus grandes institutions académiques françaises (HETIC, Ynov, IÉSEG, CFA Itis).",
            "Cyril apporte plus de 15 ans d'expérience dans l'accompagnement des dirigeants, la viabilité des modèles d'affaires technologiques et l'intégration des flux d'IA en entreprise (ex-directeur général de SNCF Développement)."
          ]
        },
        {
          h2: "Léonie Egesipe — Co-Fondatrice & Directrice Artistique IA",
          paragraphs: [
            "Créatrice visuelle, scénariste et spécialiste de l'esthétique générative. Léonie insuffle une sensibilité visuelle unique à l'ensemble des créations du studio Alkymya.",
            "Elle pilote notamment le projet Métropolia et supervise la cohérence esthétique et l'expérience utilisateur de nos programmes d'accompagnement."
          ]
        },
        {
          h2: "Véronique Landereau — Alchimiste associée, Santé, Prévention & Innovation",
          paragraphs: [
            "Co-fondatrice de New Health Paradigm, Véronique Landereau consacre son activité aux projets de santé qui placent la prévention, le maintien à domicile et l'accompagnement des aidants au cœur de leur modèle. Formée à Gustave Roussy Éducation, elle évolue au quotidien dans l'écosystème MedTech et dispositifs médicaux.",
            "Nantaise, elle évolue au quotidien entre dispositifs médicaux, prévention et perte d'autonomie, et suit de près les innovations françaises du secteur comme les tours de financement des jeunes entreprises de santé."
          ]
        },
        {
          h2: "Mariana Didier Laurent — Alchimiste associée, Services à la personne & Autonomie",
          paragraphs: [
            "Présidente d'Esperanta Services, Mariana Didier Laurent consacre son activité à l'aide à domicile des personnes en perte d'autonomie et à l'accompagnement des proches aidants. Diplômée de l'École Supérieure d'Assurance, passée par le courtage et la gestion des risques de personnes, elle ancre son entreprise au Plessis-Trévise.",
            "Secouriste bénévole à la Protection Civile de Paris Seine pendant cinq ans, puis réserviste de la Gendarmerie nationale, elle a appris à décider vite, dans l'ordre et sans se disperser. Elle a créé son entreprise en juillet 2026 : ce qu'elle raconte aux créateurs, elle vient de le vivre."
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
    title: "Partenaires Alkymya | Écosystème Académique & IA",
    description: "Découvrez nos partenaires académiques et technologiques : Objectif Alternance, HETIC, Ynov Campus, IÉSEG, CFA Itis, SNCF et Morning.",
    h1: "Nos Partenaires",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-09",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Alkymya s'entoure d'un écosystème d'excellence réunissant grandes écoles, acteurs de l'alternance, institutions publiques et entreprises pionnières.",
      sections: [
        {
          h2: "Partenariat stratégique avec Objectif Alternance",
          paragraphs: [
            "Nous formons une alliance étroite avec Objectif Alternance pour accompagner les étudiants et les entreprises d'accueil dans l'intégration réussie de compétences en IA générative.",
            "Nos modules permettent aux alternants de devenir de véritables accélérateurs d'innovation au sein de leurs équipes d'accueil."
          ]
        },
        {
          h2: "Grandes écoles et entreprises partenaires",
          paragraphs: [
            "Nos formateurs interviennent régulièrement dans les cursus de référence : HETIC, Ynov, IÉSEG, CFA Itis, Paris École de Management, ainsi qu'auprès de structures comme Morning Coworking, SNCF et Fondation GRDF."
          ]
        }
      ],
      internalLinks: [
        { href: "/ateliers/", label: "Découvrir les programmes dispensés aux partenaires" },
        { href: "/alchimistes/", label: "Rencontrer notre équipe pédagogique" },
        { href: "/contact/", label: "Devenir établissement ou entreprise partenaire" }
      ]
    }
  },
  {
    path: '/contact',
    title: "Contactez Alkymya | Experts en IA Générative",
    description: "Un projet d'acculturation IA, de formation ou de transformation numérique ? Contactez le studio Alkymya à Ozoir-la-Ferrière pour un échange personnalisé.",
    h1: "Contactez Alkymya",
    ogImage: "https://alkymya.co/og-contact.jpg",
    lastmod: "2026-11-09",
    schemaType: "ContactPage",
    content: {
      leadParagraph: "Discutons de votre projet d'acculturation, de formation certifiante ou de transformation opérationnelle par l'intelligence artificielle.",
      sections: [
        {
          h2: "Comment pouvons-nous vous accompagner ?",
          paragraphs: [
            "Que vous représentiez une grande école souhaitant intégrer un module IA innovant, une entreprise en quête d'optimisation de ses processus, ou un porteur de projet visant à lancer son MVP, notre équipe vous répond sous 24 à 48 heures."
          ],
          listItems: [
            "Formations certifiantes éligibles au financement OPCO (Qualiopi).",
            "Ateliers intensifs de création d'agents IA et de prompt engineering.",
            "Accompagnement New Business MVP pour valider votre offre terrain.",
            "Conférences, keynotes inspirantes et business games pour vos séminaires."
          ]
        },
        {
          h2: "Nos coordonnées et localisation",
          paragraphs: [
            "Studio Alkymya — Ozoir-la-Ferrière, Seine-et-Marne (77330), Île-de-France.",
            "Email direct : contact@alkymya.co • Téléphone : disponible sur demande via formulaire."
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
    title: "FAQ Alkymya | Réponses sur Nos Formations IA",
    description: "Toutes les réponses sur nos formations IA, la prise en charge OPCO Qualiopi, la création d'agents intelligents et l'offre New Business MVP Alkymya.",
    h1: "Foire Aux Questions",
    ogImage: "https://alkymya.co/og-faq.jpg",
    lastmod: "2026-11-09",
    schemaType: "FAQPage",
    content: {
      leadParagraph: "Retrouvez ici toutes les informations essentielles concernant nos modalités pédagogiques, les financements OPCO et nos parcours d'accompagnement.",
      sections: [
        {
          h2: "Questions fréquentes sur les formations et ateliers Alkymya",
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
    title: "Rejoindre Alkymya | Opportunités et Talents IA",
    description: "Rejoignez l'écosystème Alkymya : intervenants, formateurs IA, mentors de projet et alternants passionnés par la transformation technologique.",
    h1: "Rejoignez l'Alchimie",
    ogImage: "https://alkymya.co/og-rejoindre.jpg",
    lastmod: "2026-11-09",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Alkymya grandit et accueille régulièrement de nouveaux formateurs, experts métiers, conférenciers et créateurs visuels animés par la passion de transmettre.",
      sections: [
        {
          h2: "Pourquoi intervenir au sein du studio Alkymya ?",
          paragraphs: [
            "En rejoignant Alkymya, vous intervenez auprès de prestigieuses écoles et entreprises tout en bénéficiant de nos ressources pédagogiques et de notre écosystème."
          ],
          listItems: [
            "Intervenir comme conférencier ou formateur senior dans les grandes écoles.",
            "Co-développer des business games immersifs et des cas pratiques métiers.",
            "Accéder à une communauté bienveillante de professionnels passionnés par l'innovation."
          ]
        },
        {
          h2: "Profils recherchés et modalités de collaboration",
          paragraphs: [
            "Nous recherchons des experts en prompt engineering, ingénieurs d'agents IA, directeurs artistiques numériques, consultants en transformation digitale et juristes spécialisés IA Act."
          ]
        }
      ],
      internalLinks: [
        { href: "/alchimistes/", label: "Faire connaissance avec nos fondateurs" },
        { href: "/partenaires/", label: "Consulter notre écosystème de partenaires" },
        { href: "/contact/", label: "Déposer une candidature spontanée" }
      ]
    }
  },
  {
    path: '/newbusiness',
    title: "New Business MVP | Validation Client et Offre IA",
    description: "Programme opérationnel de 6 mois pour bâtir votre MVP, tester votre offre auprès de vrais clients et piloter vos décisions selon la boussole stratégique.",
    h1: "New Business MVP — De l'idée à la validation client",
    ogImage: "https://alkymya.co/og-newbusiness.jpg",
    lastmod: "2026-11-09",
    schemaType: "EducationalOccupationalProgram",
    content: {
      leadParagraph: "L'accompagnement opérationnel de 6 mois pour concevoir votre MVP, tester votre offre auprès de vrais clients avant d'investir et décider avec lucidité : Continuer, Pivoter ou Accélérer.",
      sections: [
        {
          h2: "À qui s'adresse l'offre New Business MVP ?",
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
        { href: "/ateliers/", label: "Voir tous nos ateliers et formations" },
        { href: "/oeuvres/", label: "Consulter nos réalisations concrètes en IA" },
        { href: "/faq/", label: "Consulter la foire aux questions" },
        { href: "/contact/", label: "Contacter les mentors de la cohorte" }
      ]
    }
  },
  {
    path: '/mentions-legales',
    title: "Mentions Légales et RGPD | Studio Alkymya",
    description: "Informations légales, hébergement, conditions d'utilisation et politique de protection des données personnelles RGPD du studio d'innovation IA Alkymya.co.",
    h1: "Mentions Légales",
    ogImage: "https://alkymya.co/og-mentions.jpg",
    lastmod: "2026-11-09",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Consultez l'ensemble des informations légales régissant l'utilisation du site alkymya.co, ainsi que nos engagements stricts en matière de confidentialité et de conformité RGPD.",
      sections: [
        {
          h2: "Éditeur du site et direction de publication",
          paragraphs: [
            "Le site internet alkymya.co est édité par le Studio Alkymya, domicilié à Ozoir-la-Ferrière, Seine-et-Marne (77330), France.",
            "Direction de la publication : Cyril Garnier et Léonie Egesipe. Contact : contact@alkymya.co."
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
