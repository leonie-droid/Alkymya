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
    title: "Agence IA & Studio Création IA | Alkymya",
    description: "Agence IA et studio création IA : accompagnement intelligence artificielle, création d'agents IA sur mesure, stratégie SEO et GEO Google AI.",
    h1: "Agence IA & studio création IA : l'art de la transformation.",
    ogImage: "https://alkymya.co/og-image.jpg",
    lastmod: "2026-11-13",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Alkymya est votre agence IA et studio création IA en France : accompagnement intelligence artificielle, création d'agents IA sur mesure et stratégie SEO et GEO pour votre visibilité Google AI.",
      sections: [
        {
          h2: "Accompagnement intelligence artificielle en trois piliers",
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
    title: "Création d'Agents IA & Démonstrateurs Métiers | Alkymya",
    description: "Studio création IA et générateur d'agents IA sur mesure : personas vidéo, études Génération IA 2024-2026 et accompagnement intelligence artificielle.",
    h1: "Génération IA & création d'agents IA sur mesure.",
    ogImage: "https://alkymya.co/og-ia.jpg",
    lastmod: "2026-11-13",
    schemaType: "WebApplication",
    content: {
      leadParagraph: "Explorez en direct la puissance de notre studio création IA : accompagnement intelligence artificielle, création d'agents IA sur mesure, personas vidéo et stratégie SEO et GEO.",
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
    title: "Création Site Éditorial, Agents IA & SEO GEO | Alkymya",
    description: "Création site éditorial, référencement naturel Google, visibilité AI Overviews, agents IA autonomes en production et direction artistique IA.",
    ogTitle: "Création Site Éditorial, Agents IA & SEO GEO | Alkymya",
    ogDescription: "Création site éditorial, référencement naturel Google, visibilité AI Overviews, agents IA autonomes en production et direction artistique IA.",
    h1: "Création site éditorial, agents IA & direction artistique IA.",
    ogImage: "https://alkymya.co/og-oeuvres.jpg",
    lastmod: "2026-11-13",
    schemaType: "CollectionPage",
    content: {
      leadParagraph: "Création site éditorial, référencement naturel Google, visibilité AI Overviews et agents IA autonomes en production : des projets réels, une veille SEO IA continue et une direction artistique photo vidéo IA vérifiable.",
      sections: [
        {
          h2: "Direction artistique photo vidéo IA & créations visuelles",
          paragraphs: [
            "Des portraits et compositions iconographiques explorant les limites expressives des modèles génératifs de pointe. Chaque œuvre est le fruit d'une recherche approfondie sur le prompt crafting, la matière texturée et la résonance culturelle contemporaine.",
            "De la figure d'Angela Davis réinterprétée en sérigraphie contemporaine à l'hommage vibrant à Joséphine Baker, nos créations marient audace visuelle et rigueur esthétique."
          ]
        },
        {
          h2: "Création site éditorial, référencement naturel Google & AI Overviews",
          paragraphs: [
            "Une démarche photographique documentaire et naturaliste alliée au référencement naturel Google, à la veille SEO IA et à la visibilité AI Overviews. Ciels de Seine-et-Marne (thelittle77), chroniques de ruelles parisiennes (thelittle75) et faune du Var (thelittle83).",
            "La capture de la lumière à l'état pur, révélant la richesse de nos patrimoines locaux et de la biodiversité."
          ]
        }
      ],
      internalLinks: [
        { href: "/contact/", label: "Commander une création ou échanger sur un projet artistique →" },
        { href: "/ateliers/", label: "Découvrir nos ateliers de création et d'acculturation IA" },
        { href: "/alchimistes/", label: "Rencontrer Cyril Garnier et le collectif d'alchimistes" },
        { href: "/ressources/", label: "Consulter notre bibliothèque d'outils et d'études" }
      ]
    }
  },
  {
    path: '/ateliers',
    title: "Atelier IA Pratique & Formation Qualiopi OPCO | Alkymya",
    description: "Atelier IA pratique, formation IA entreprise certifiée Qualiopi finançable OPCO, audit IA PME Capital IA, agent IA métier et conformité IA Act.",
    h1: "Atelier IA pratique & formation IA entreprise Qualiopi.",
    ogImage: "https://alkymya.co/og-ateliers.jpg",
    lastmod: "2026-11-13",
    schemaType: "Course",
    content: {
      leadParagraph: "Atelier IA pratique, formation IA entreprise certifiée Qualiopi finançable OPCO, audit IA PME (Capital IA) et conformité IA Act : créer son agent IA métier et valoriser vos archives photo et vidéo avec du concret.",
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
    title: "Ressources IA, Veille SEO & Outils Gratuits | Alkymya",
    description: "Veille SEO IA, analyseurs intelligents gratuits, études Génération IA et création site éditorial par l'agence IA et studio création IA Alkymya.",
    h1: "Ressources IA, veille SEO IA & outils gratuits.",
    ogImage: "https://alkymya.co/og-ressources.jpg",
    lastmod: "2026-11-13",
    schemaType: "CollectionPage",
    content: {
      leadParagraph: "Bibliothèque ouverte de notre agence IA et studio création IA : veille SEO IA, création d'agents IA sur mesure, stratégie SEO et GEO (visibilité Google AI) et analyseurs gratuits.",
      sections: [
        {
          h2: "Guides opérationnels, stratégie SEO GEO & agents IA",
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
    title: "Experts IA France & Fondateurs Agence IA | Alkymya",
    description: "Experts IA France : Cyril Garnier, Léonie Egesipe, Véronique Landereau et Mariana Didier Laurent. Accompagnement IA dirigeants et indépendants.",
    h1: "Experts IA France : l'équipe de l'agence Alkymya.",
    ogImage: "https://alkymya.co/og-alchimistes.jpg",
    lastmod: "2026-11-13",
    schemaType: "AboutPage",
    content: {
      leadParagraph: "Derrière Alkymya, quatre experts IA France assurent l'accompagnement IA dirigeants et indépendants, la stratégie SEO et GEO, l'innovation santé et les services à la personne.",
      sections: [
        {
          h2: "Cyril Garnier — Expert IA France & Accompagnement Dirigeants",
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
    title: "Partenaires Formation IA & Grandes Écoles | Alkymya",
    description: "Accompagnement intelligence artificielle avec Objectif Alternance, HETIC, Ynov, IÉSEG et CFA Itis. Agence IA et formation IA entreprise Qualiopi.",
    h1: "Partenaires formation IA & alliances stratégiques.",
    ogImage: "https://alkymya.co/og-partenaires.jpg",
    lastmod: "2026-11-13",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Notre agence IA et studio création IA collabore avec grandes écoles, fondations et acteurs de l'alternance pour déployer l'accompagnement intelligence artificielle et la formation IA entreprise certifiée Qualiopi.",
      sections: [
        {
          h2: "Partenariat formation IA stratégique avec Objectif Alternance",
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
    title: "Contact Experts IA & Devis Formation Qualiopi | Alkymya",
    description: "Demandez un devis formation IA Qualiopi finançable OPCO ou un accompagnement IA dirigeants et indépendants auprès de nos experts IA France.",
    h1: "Contactez nos experts IA France & devis Qualiopi.",
    ogImage: "https://alkymya.co/og-contact.jpg",
    lastmod: "2026-11-13",
    schemaType: "ContactPage",
    content: {
      leadParagraph: "Échangez avec nos experts IA France pour un devis formation IA Qualiopi, un audit IA PME (Capital IA) ou un accompagnement IA dirigeants et indépendants.",
      sections: [
        {
          h2: "Devis formation IA Qualiopi & accompagnement dirigeants",
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
    title: "FAQ Agence IA : Qualiopi, OPCO & Agents IA | Alkymya",
    description: "Réponses sur notre formation IA entreprise certifiée Qualiopi, financement OPCO, création d'agents IA sur mesure et accompagnement dirigeants.",
    h1: "FAQ agence IA, formation Qualiopi & agents IA.",
    ogImage: "https://alkymya.co/og-faq.jpg",
    lastmod: "2026-11-13",
    schemaType: "FAQPage",
    content: {
      leadParagraph: "Toutes les réponses de notre agence IA sur la formation IA entreprise certifiée Qualiopi finançable OPCO, la création d'agents IA sur mesure, la stratégie SEO et GEO et l'accompagnement dirigeants.",
      sections: [
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
    description: "Rejoignez notre studio création IA et agence IA : formateurs Qualiopi, créateurs d'agents IA sur mesure et experts IA France engagés.",
    h1: "Rejoignez notre agence IA & experts IA France.",
    ogImage: "https://alkymya.co/og-rejoindre.jpg",
    lastmod: "2026-11-13",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Notre studio création IA et agence IA recrute des experts IA France, formateurs Qualiopi et concepteurs d'agents IA sur mesure pour l'accompagnement intelligence artificielle.",
      sections: [
        {
          h2: "Pourquoi rejoindre l'agence IA et studio création IA Alkymya ?",
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
    title: "Accompagnement IA Dirigeants & MVP 6 Mois | Alkymya",
    description: "Accompagnement IA dirigeants et indépendants sur 6 mois : création de MVP, validation client, agents IA sur mesure et stratégie SEO et GEO.",
    h1: "Accompagnement IA dirigeants & New Business MVP.",
    ogImage: "https://alkymya.co/og-newbusiness.jpg",
    lastmod: "2026-11-13",
    schemaType: "EducationalOccupationalProgram",
    content: {
      leadParagraph: "Accompagnement IA dirigeants et indépendants sur 6 mois : concevez votre MVP, déployez des agents IA sur mesure et validez votre stratégie SEO et GEO auprès de vrais clients.",
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
        { href: "/ateliers/", label: "Voir tous nos ateliers et formations" },
        { href: "/oeuvres/", label: "Consulter nos réalisations concrètes en IA" },
        { href: "/faq/", label: "Consulter la foire aux questions" },
        { href: "/contact/", label: "Contacter les mentors de la cohorte" }
      ]
    }
  },
  {
    path: '/mentions-legales',
    title: "Mentions Légales Agence IA & RGPD | Alkymya",
    description: "Mentions légales de l'agence IA Alkymya, experts IA France à Ozoir-la-Ferrière : conformité RGPD, hébergement cloud et co-création assistée par IA.",
    h1: "Mentions légales agence IA Alkymya & RGPD.",
    ogImage: "https://alkymya.co/og-mentions.jpg",
    lastmod: "2026-11-13",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Consultez les mentions légales de l'agence IA et studio création IA Alkymya (experts IA France à Ozoir-la-Ferrière) ainsi que notre politique stricte de confidentialité RGPD.",
      sections: [
        {
          h2: "Éditeur de l'agence IA et direction de publication",
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
