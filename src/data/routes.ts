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
  title: string; // <= 60 characters
  description: string; // 140-155 characters
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
    title: "Alkymya | Studio d'Innovation & Formation IA en France",
    description: "Studio d'innovation et formation en IA générative à Ozoir-la-Ferrière. Accompagnement sur-mesure des entreprises et grandes écoles vers l'excellence IA.",
    h1: "L'art de la transformation IA.",
    ogImage: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png",
    lastmod: "2026-10-02",
    schemaType: "EducationalOrganization",
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
            "Partager : Formations diplômantes, business games interactifs et mentorat de talents."
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
        { href: "/alchimistes/", label: "Rencontrer les fondateurs d'Alkymya" },
        { href: "/contact/", label: "Contacter nos experts pour un projet sur-mesure" }
      ]
    }
  },
  {
    path: '/ia',
    title: "Générateur IA | Outil Interactif d'Idéation Alkymya",
    description: "Explorez notre générateur d'idées et cas d'usage IA. Testez des prompts avancés, explorez des personas et accélérez votre créativité avec les outils IA.",
    h1: "Le Générateur d'Idées IA.",
    ogImage: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png",
    lastmod: "2026-10-02",
    schemaType: "WebApplication",
    content: {
      leadParagraph: "Explorez en direct la puissance créative de l'intelligence artificielle grâce à notre suite d'outils interactifs d'idéation, de génération de personas et de cas d'usage métiers.",
      sections: [
        {
          h2: "Démonstrateurs interactifs et cas d'usage pratiques",
          paragraphs: [
            "Le Générateur IA Alkymya illustre concrètement comment l'intelligence artificielle générative transforme les démarches d'idéation, de prototypage de produits et de modélisation stratégique.",
            "Chaque démonstrateur repose sur des modèles de langage de pointe (Google Gemini et OpenAI GPT) configurés avec des prompts d'ingénierie avancés et des contraintes métier réalistes."
          ],
          listItems: [
            "Génération de personas d'utilisateurs et analyse de cas d'usage.",
            "Simulation de dialogues et d'interactions avec des agents spécialisés.",
            "Téléchargement de fiches synthétiques et de jeux de données d'inspiration."
          ]
        },
        {
          h2: "Passer de la démonstration à l'application en entreprise",
          paragraphs: [
            "Ces démonstrateurs ne sont qu'un aperçu des applications que nous concevons et déployons lors de nos ateliers d'agentification et de prototypage rapide."
          ]
        }
      ],
      internalLinks: [
        { href: "/ateliers/", label: "Créer vos propres agents IA en atelier" },
        { href: "/ressources/", label: "Consulter nos guides et méthodologies IA" },
        { href: "/contact/", label: "Demander une démonstration privée" }
      ]
    }
  },
  {
    path: '/oeuvres',
    title: "Galerie Numérique | Art Visuel & IA Générative Alkymya",
    description: "Découvrez notre collection d'œuvres visuelles nées de la synergie entre direction artistique humaine et puissance créative de l'intelligence artificielle.",
    h1: "Nos Œuvres",
    ogImage: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png",
    lastmod: "2026-10-02",
    schemaType: "CollectionPage",
    content: {
      leadParagraph: "Une exploration artistique où la sensibilité humaine guide la machine pour créer des univers visuels immersifs, des récits cyberpunk et des identités visuelles singulières.",
      sections: [
        {
          h2: "L'alliance de la direction artistique et des modèles génératifs",
          paragraphs: [
            "Chez Alkymya, l'art numérique n'est pas une simple commande d'algorithme. C'est un dialogue esthétique minutieux, fruit de la collaboration entre Cyril Garnier et Léonie Egesipe.",
            "Chaque série explore une thématique contemporaine forte : la mémoire industrielle, la symbiose homme-machine, ou encore les futurs urbains dystopiques."
          ]
        },
        {
          h2: "Le projet narratif Métropolia",
          paragraphs: [
            "Métropolia est notre œuvre narrative majeure : une dystopie cyberpunk poétique inspirée de l'univers de Fritz Lang qui suit le parcours énigmatique du personnage Léonie & Léonia à travers des épisodes vidéos immersifs."
          ],
          listItems: [
            "Série narrative dystopique diffusée sur notre chaîne YouTube.",
            "Créations visuelles hybrides intégrant photographie réelle et diffusion d'IA.",
            "Expositions virtuelles et projections interactives."
          ]
        }
      ],
      internalLinks: [
        { href: "/alchimistes/", label: "Découvrir la démarche des créateurs" },
        { href: "/ressources/", label: "Accéder à nos tutoriels de création visuelle" },
        { href: "/contact/", label: "Commander une œuvre ou une identité de marque" }
      ]
    }
  },
  {
    path: '/ateliers',
    title: "Ateliers & Formations IA | Programmes Certifiés Alkymya",
    description: "Formations opérationnelles et ateliers en IA générative, création d'agents autonomes, prompt engineering et conformité européenne de l'IA Act en France.",
    h1: "Nos Ateliers & Formations IA",
    ogImage: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png",
    lastmod: "2026-10-02",
    schemaType: "Course",
    content: {
      leadParagraph: "Des programmes de formation intensifs, immédiatement actionnables et finançables par les OPCO grâce à notre certification d'État Qualiopi en partenariat avec INATEC.",
      sections: [
        {
          h2: "Notre catalogue d'ateliers et parcours professionnels",
          paragraphs: [
            "Conçus pour les dirigeants, consultants, managers, créatifs et équipes techniques, nos ateliers combinent mise en pratique immédiate sur vos propres cas d'usage et rigueur méthodologique."
          ],
          listItems: [
            "1. Acculturation & Fondamentaux de l'IA Générative : Comprendre les LLM, maîtriser les prompts avancés et sécuriser ses données.",
            "2. Agentification & Automatisation des Métiers : Concevoir et interconnecter des agents intelligents autonomes (Slack, Notion, CRM).",
            "3. Éthique, Gouvernance & Conformité IA Act : Se mettre en conformité avec la réglementation européenne sur l'intelligence artificielle.",
            "4. New business MVP : Accompagnement de 6 mois pour tester et valider votre offre auprès de vrais clients avant d'investir (200 € / mois)."
          ]
        },
        {
          h2: "Financement OPCO et certification Qualiopi",
          paragraphs: [
            "Tous nos modules de formation professionnelle continue sont éligibles à une prise en charge financière jusqu'à 100% par votre opérateur de compétences (OPCO).",
            "Nous vous accompagnons dans le montage administratif complet de votre dossier pour un déploiement fluide au sein de vos équipes."
          ]
        }
      ],
      internalLinks: [
        { href: "/newbusiness/", label: "Consulter le programme New Business MVP" },
        { href: "/faq/", label: "Questions fréquentes sur les financements OPCO" },
        { href: "/contact/", label: "Demander un devis de formation pour votre équipe" }
      ]
    }
  },
  {
    path: '/ressources',
    title: "Ressources & Guides IA | Méthodes et Frameworks Alkymya",
    description: "Accédez librement à notre veille technologique, guides d'agentification, fiches pratiques et frameworks stratégiques pour maîtriser l'IA en entreprise.",
    h1: "Ressources & Guides IA",
    ogImage: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png",
    lastmod: "2026-10-02",
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
    title: "Les Alchimistes | Experts & Fondateurs du Studio Alkymya",
    description: "Rencontrez l'équipe Alkymya : Cyril Garnier et Léonie Egesipe, experts passionnés de la transmission pédagogique et de la transformation IA en entreprise.",
    h1: "Nos Alchimistes",
    ogImage: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758192982/66cffcd8-15f1-415f-b423-9f428d63e22f_gqjd53.png",
    lastmod: "2026-10-02",
    schemaType: "AboutPage",
    content: {
      leadParagraph: "Derrière Alkymya, deux personnalités complémentaires réunissent la vision stratégique d'entreprise, la rigueur pédagogique et l'audace de la direction artistique.",
      sections: [
        {
          h2: "Cyril Garnier — Fondateur & Consultant Stratégie IA",
          paragraphs: [
            "Consultant senior et enseignant certifié au sein des plus grandes institutions académiques françaises (HETIC, Ynov, IÉSEG, CFA Itis).",
            "Cyril apporte plus de 15 ans d'expérience dans l'accompagnement des dirigeants, la viabilité des modèles d'affaires technologiques et l'intégration des flux d'IA en entreprise."
          ]
        },
        {
          h2: "Léonie Egesipe — Co-Fondatrice & Directrice Artistique IA",
          paragraphs: [
            "Créatrice visuelle, scénariste et spécialiste de l'esthétique générative. Léonie insuffle une sensibilité visuelle unique à l'ensemble des créations du studio Alkymya.",
            "Elle pilote notamment le projet Métropolia et supervise la cohérence esthétique et l'expérience utilisateur de nos programmes d'accompagnement."
          ]
        }
      ],
      internalLinks: [
        { href: "/ateliers/", label: "Être formé par Cyril Garnier et Léonie Egesipe" },
        { href: "/oeuvres/", label: "Découvrir les créations de la galerie" },
        { href: "/contact/", label: "Échanger directement avec nos fondateurs" }
      ]
    }
  },
  {
    path: '/partenaires',
    title: "Partenaires | Grandes Écoles & Entreprises Alkymya",
    description: "Découvrez notre écosystème d'excellence : HETIC, Ynov, IÉSEG, SNCF, Morning, Fondation GRDF et notre alliance stratégique avec Objectif Alternance.",
    h1: "Nos Partenaires d'Excellence",
    ogImage: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png",
    lastmod: "2026-10-02",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Alkymya tisse des liens solides et durables avec les acteurs majeurs de l'enseignement supérieur, les grands groupes industriels et les pionniers de l'alternance.",
      sections: [
        {
          h2: "Grandes écoles et universités de premier plan",
          paragraphs: [
            "Nous concevons des modules pédagogiques d'excellence, des cours magistraux et des business games interactifs pour former la future génération de leaders du numérique.",
            "Nos partenaires académiques incluent HETIC, Ynov Campus, IÉSEG School of Management, CFA Itis, ainsi que Paris École de Management."
          ]
        },
        {
          h2: "Entreprises et institutions engagées",
          paragraphs: [
            "Alkymya accompagne les entreprises dans leur montée en compétence technologique et leurs projets d'innovation stratégique.",
            "Nous sommes fiers de collaborer avec la SNCF, Morning Coworking, la Fondation GRDF, Sealester, INATEC et Objectif Alternance."
          ],
          listItems: [
            "Alliance officielle avec Objectif Alternance pour l'insertion des jeunes talents IA.",
            "Partenariat certifié Qualiopi avec INATEC pour le financement OPCO.",
            "Co-création d'ateliers sur-mesure pour les collaborateurs de grands groupes."
          ]
        }
      ],
      internalLinks: [
        { href: "/rejoindre/", label: "Devenir partenaire ou intervenant Alkymya" },
        { href: "/ateliers/", label: "Consulter nos formations pour entreprises" },
        { href: "/contact/", label: "Proposer une convention de partenariat" }
      ]
    }
  },
  {
    path: '/contact',
    title: "Contactez Alkymya | Échangez avec Nos Experts en IA",
    description: "Un projet d'acculturation IA, de formation ou de transformation numérique ? Contactez le studio Alkymya à Ozoir-la-Ferrière pour un échange personnalisé.",
    h1: "Contactez Alkymya",
    ogImage: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png",
    lastmod: "2026-10-02",
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
    title: "FAQ Alkymya | Réponses sur Nos Formations & Ateliers IA",
    description: "Toutes les réponses sur nos formations IA, la prise en charge OPCO Qualiopi, la création d'agents intelligents et l'offre New Business MVP Alkymya.",
    h1: "Foire Aux Questions",
    ogImage: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png",
    lastmod: "2026-10-02",
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
        },
        {
          h2: "Vous avez une question spécifique ?",
          paragraphs: [
            "Si votre interrogation ne figure pas dans cette sélection, n'hésitez pas à nous contacter directement pour obtenir un conseil personnalisé adapté à vos besoins."
          ]
        }
      ],
      internalLinks: [
        { href: "/ateliers/", label: "Découvrir nos 4 programmes de formation" },
        { href: "/newbusiness/", label: "En savoir plus sur le programme New Business MVP" },
        { href: "/contact/", label: "Poser une question à notre équipe" }
      ]
    }
  },
  {
    path: '/rejoindre',
    title: "Rejoindre Alkymya | Opportunités & Partenariats IA",
    description: "Rejoignez le collectif Alkymya : devenez intervenant expert, formateur en intelligence artificielle ou partenaire pour bâtir le futur de la pédagogie IA.",
    h1: "Rejoignez l'Aventure Alkymya",
    ogImage: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png",
    lastmod: "2026-10-02",
    schemaType: "WebPage",
    content: {
      leadParagraph: "Participez à la diffusion d'une intelligence artificielle responsable, créative et résolument pragmatique en intégrant notre réseau d'experts et d'intervenants.",
      sections: [
        {
          h2: "Pourquoi s'engager aux côtés d'Alkymya ?",
          paragraphs: [
            "L'IA transforme les métiers à une vitesse sans précédent. Pour préparer durablement les étudiants et les professionnels, nous fédérons des talents d'exception animés par la passion de transmettre.",
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
    title: "New Business MVP | Accompagnement Validation Client IA",
    description: "Programme opérationnel de 6 mois pour bâtir votre MVP, tester votre offre auprès de vrais clients et piloter vos décisions selon la boussole stratégique.",
    h1: "New Business MVP — De l'idée à la validation client",
    ogImage: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png",
    lastmod: "2026-10-02",
    schemaType: "EducationalOccupationalProgram",
    content: {
      leadParagraph: "L'accompagnement opérationnel de 6 mois pour concevoir votre MVP, tester votre offre auprès de vrais clients avant d'investir et décider avec lucidité : Continuer, Pivoter ou Accélérer.",
      sections: [
        {
          h2: "Les 6 étapes clés de la méthode New Business MVP",
          paragraphs: [
            "Sortez de l'effet tunnel et du piège du développement en vase clos. Nous vous guidons à travers un parcours structuré pour confronter immédiatement votre valeur au terrain."
          ],
          listItems: [
            "Mois 1 — Profil Client Idéal (ICP) : Identifier avec précision qui paie et analyser les budgets réels du marché.",
            "Mois 2 — Proposition de Valeur & Arbitrage : Élaguer impitoyablement le superflu pour construire un MVP focalisé.",
            "Mois 3 — Construction du MVP Opérationnel : Déployer votre premier produit ou offre en ligne sans complexité technique.",
            "Mois 4 — Tarification & Routine Entrepreneuriale : Tester l'acceptabilité prix et structurer vos rituels d'exécution.",
            "Mois 5 — Pitch Investisseurs & Partenaires : Créer un pitch deck percutant fondé sur vos preuves de traction réelles.",
            "Mois 6 — Décision Data-Driven & Demo Day : Analyser les retours et arbitrer selon la boussole Continuer / Pivoter / Accélérer."
          ]
        },
        {
          h2: "Tarif transparent et mentorat de haut niveau",
          paragraphs: [
            "Tarif clair de 200 € / mois pendant 6 mois (coût total : 1 200 € sans engagement contractuel au-delà).",
            "Encadrement direct en binôme par Cyril Garnier (stratégie business) et Léonie Egesipe (création & ergonomie). Prévoir un budget d'environ 50€ à 150€ pour les abonnements et crédits d'outils d'IA utiles aux étapes pratiques."
          ]
        }
      ],
      internalLinks: [
        { href: "/ateliers/", label: "Voir tous nos ateliers et formations" },
        { href: "/faq/", label: "Consulter la foire aux questions" },
        { href: "/contact/", label: "Contacter les mentors de la cohorte" }
      ]
    }
  },
  {
    path: '/mentions-legales',
    title: "Mentions Légales & RGPD | Studio d'Innovation Alkymya",
    description: "Informations légales, hébergement, conditions d'utilisation et politique de protection des données personnelles RGPD du studio d'innovation IA Alkymya.co.",
    h1: "Mentions Légales",
    ogImage: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png",
    lastmod: "2026-10-02",
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
