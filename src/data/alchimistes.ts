export interface AlchimisteWork {
  label: string;
  url: string;
}

export interface AlchimisteSocials {
  website?: string;
  linkedin?: string;
  instagram?: string;
  tiktok?: string;
  youtube?: string;
  mail?: string;
}

export interface AlchimisteProfile {
  id: string;
  anchor: string;
  name: string;
  role: string;
  kicker: string;
  seoTitle: string;
  seoDescription: string;
  knowsAbout: string[];
  alumniOf?: string;
  homeLocation?: {
    city: string;
    country: string;
  };
  website: string;
  websiteLabel: string;
  websiteTag?: string;
  websiteIcon?: 'globe' | 'linkedin';
  bio: string;
  details: string;
  quote: string;
  image: string;
  socials: AlchimisteSocials;
  link?: {
    label: string;
    display: string;
    url: string;
    icon: string;
  };
  works: AlchimisteWork[];
}

export const alchimistes: AlchimisteProfile[] = [
  {
    id: "cyril-garnier",
    anchor: "#cyril-garnier",
    name: "Cyril Garnier",
    role: "Directeur Associé",
    kicker: "Directeur Associé & Fondateur",
    seoTitle: "Cyril Garnier — Directeur Associé & Expert IA | Alkymya",
    seoDescription: "Cyril Garnier, Directeur Associé d'Alkymya et ex-DG de SNCF Développement : accompagnement dirigeants, Go-to-Market et stratégie IA en France.",
    knowsAbout: [
      "Intelligence Artificielle Générative",
      "Go-to-Market",
      "Accompagnement dirigeants",
      "Stratégie SEO & GEO",
      "Agents IA autonomes"
    ],
    website: "https://cyrilgarnier.fr/",
    websiteLabel: "cyrilgarnier.fr",
    bio: "Expert reconnu de l'accompagnement entrepreneurial, Cyril Garnier occupe aujourd'hui le poste de Directeur Associé chez Alkymya. Fort d'une expérience marquante à la tête de SNCF Développement, où il a soutenu la création de milliers d'emplois, il met désormais son savoir-faire au service de l'innovation de rupture. Au sein d'Alkymya, il agit comme un architecte de la croissance, spécialisé dans la transformation d'idées complexes en succès commerciaux concrets.",
    details: "Son rôle consiste à sécuriser le \"Go-to-Market\" des projets et à structurer des modèles économiques robustes, faisant de lui un pont stratégique entre l'agilité des startups et la puissance des grands groupes. En résumé, Cyril Garnier est un accélérateur de business qui transforme l'innovation théorique en réalité industrielle et économique.",
    quote: "L'intelligence artificielle n'a de valeur réelle que lorsqu'elle rencontre un marché et de vrais clients engagés.",
    image: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758192982/66cffcd8-15f1-415f-b423-9f428d63e22f_gqjd53.png",
    socials: {
      website: "https://cyrilgarnier.fr/",
      linkedin: "https://www.linkedin.com/in/cyril-garnier-89697b1/",
      instagram: "https://www.instagram.com/alkymya_cyril",
      tiktok: "https://www.tiktok.com/@cyrilgarnierphoto",
      youtube: "https://www.youtube.com/@cyrilgarnier9475",
      mail: "cyril@alkymya.co"
    },
    link: {
      label: "Site officiel",
      display: "cyrilgarnier.fr",
      url: "https://cyrilgarnier.fr/",
      icon: "globe"
    },
    works: [
      { label: "Site thelittle77.fr", url: "https://thelittle77.fr" },
      { label: "Site thelittle83.fr", url: "https://thelittle83.fr" },
      { label: "Doctrine IAG : Dialogue sur la Stratégie Cachée", url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1777500626/La_Doctrine_IAG___Dialogue_sur_la_Strate%CC%81gie_Cache%CC%81e_de_l_E%CC%80re_Trump_zwxlqi_vlfkkw.pdf" },
      { label: "Quiz Maturité IA Entreprise", url: "https://maturiteia.alkymya.co/" },
      { label: "Analyseur de CV", url: "https://analysercvpro.alkymya.co/" },
      { label: "Analyseur de mémoire Pro", url: "https://analyseurdememoire.alkymya.co/" },
      { label: "Analyseur de photo", url: "https://analyseurdephoto.alkymya.co/" },
      { label: "Analyseur de site web", url: "https://analyseurdesiteweb.alkymya.co/" },
      { label: "Business Game: NoNo BanaBa", url: "https://nonobanaba.netlify.app/" },
      { label: "Soda l'agent pédagogique", url: "https://www.genspark.ai/agents?type=custom_super_agent&agent_id=20503058-4b49-40f7-b277-b38c21724a41" },
      { label: "Mon quizz IA", url: "https://quiz.alkymya.co/" }
    ]
  },
  {
    id: "leonie-egesipe",
    anchor: "#leonie-egesipe",
    name: "Léonie Egesipe",
    role: "Chef de Projet Digital",
    kicker: "Co-Fondatrice & Directrice Artistique IA",
    seoTitle: "Léonie Egesipe — Directrice Artistique IA | Alkymya",
    seoDescription: "Léonie Egesipe, co-fondatrice et Cheffe de Projet Digital chez Alkymya : déploiement numérique, direction artistique IA générative et Métropolia.",
    knowsAbout: [
      "Direction Artistique IA",
      "Gestion de projet digital",
      "IA générative visuelle et vidéo",
      "Expérience utilisateur",
      "Création éditoriale"
    ],
    website: "https://leonieegesipe.netlify.app/",
    websiteLabel: "leonieegesipe.netlify.app",
    bio: "Etudiante en chef de Projet Digital. Au sein d’Alkymya, Léonie occupe un rôle central dans le déploiement opérationnel des stratégies d’innovation. En binôme étroit avec Cyril Garnier, elle assure la direction des projets numériques, transformant les visions stratégiques du studio en dispositifs digitaux concrets et performants.",
    details: "À la fois organisatrice et stratège, elle pilote la présence numérique d'Alkymya et optimise les outils de communication pour renforcer l'influence du studio. Sa mission est double : garantir une rigueur de pilotage irréprochable et apporter une agilité digitale indispensable pour partager avec les porteurs de projets leur transformation.",
    quote: "Créer des identités visuelles et narratives singulières où la sensibilité humaine guide l'IA vers l'émotion.",
    image: "https://res.cloudinary.com/dokzioyu4/image/upload/v1762252984/725879fe-afa3-4afa-a900-229030c002de_1_xoep2v.png",
    socials: {
      website: "https://leonieegesipe.netlify.app/",
      instagram: "https://www.instagram.com/alkymya_leonie?igsh=YnRicG01NDBka3lx",
      linkedin: "https://www.linkedin.com/in/l%C3%A9onie-egesipe-96a283291/",
      mail: "leonie@alkymya.co"
    },
    link: {
      label: "Portfolio officiel",
      display: "leonieegesipe.netlify.app",
      url: "https://leonieegesipe.netlify.app/",
      icon: "globe"
    },
    works: [
      { label: "Site thelittle75.fr", url: "https://thelittle75.fr" },
      { label: "Vidéo analyseur de photo", url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1773761166/46b26247d1084cb39b354fe4c9842b29_aszzay_f48sjs.mov" },
      { label: "Vidéo analyseur de cv", url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1773762096/c599dc6cd0ef4e6196a739c87b2cb773_gxn0lj.mov" },
      { label: "Vidéo analyseur de mémoire", url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1776374160/bac00848173641fd882d43dc3b970835_jtyspz.mov" }
    ]
  },
  {
    id: "veronique-landereau",
    anchor: "#veronique-landereau",
    name: "Véronique Landereau",
    role: "Alchimiste associée — Santé, Prévention & Innovation",
    kicker: "Alchimiste associée, Santé",
    seoTitle: "Véronique Landereau — Santé & Innovation IA | Alkymya",
    seoDescription: "Véronique Landereau, Alchimiste associée Santé chez Alkymya et fondatrice d'AvecLouise : prévention, maintien à domicile et accompagnement des aidants.",
    knowsAbout: [
      "Santé",
      "Prévention",
      "Maintien à domicile",
      "MedTech",
      "Intelligence artificielle en santé"
    ],
    alumniOf: "Gustave Roussy Éducation",
    homeLocation: {
      city: "Nantes",
      country: "FR"
    },
    website: "https://aveclouise.fr/",
    websiteLabel: "aveclouise.fr",
    websiteTag: "Site officiel",
    websiteIcon: "globe",
    bio: "Fondatrice d'AvecLouise, Véronique Landereau consacre son activité aux projets de santé qui placent la prévention, le maintien à domicile et l'accompagnement des aidants au cœur de leur modèle. Formée à Gustave Roussy Éducation, elle évolue au quotidien dans l'écosystème MedTech et dispositifs médicaux.",
    details: "Nantaise, elle évolue au quotidien entre dispositifs médicaux, prévention et perte d'autonomie, et suit de près les innovations françaises du secteur comme les tours de financement des jeunes entreprises de santé. Sa conviction : les technologies ne prennent véritablement leur sens que lorsqu'elles sont portées par des femmes et des hommes capables de créer de la confiance et du lien.",
    quote: "Les technologies ne prennent véritablement leur sens que lorsqu'elles sont portées par des femmes et des hommes capables de créer de la confiance et du lien.",
    image: "https://res.cloudinary.com/dokzioyu4/image/upload/v1792763449/1792401247516_ussqzm.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/veronique-landereau-97729a59/",
      mail: ""
    },
    works: [
      { label: "AvecLouise", url: "https://aveclouise.fr/" },
      { label: "Prévention & parcours de soins", url: "https://aveclouise.fr/" },
      { label: "Maintien à domicile & aidants", url: "https://aveclouise.fr/" },
      { label: "MedTech & dispositifs médicaux", url: "https://www.linkedin.com/in/veronique-landereau-97729a59/" },
      { label: "Financement de l'innovation santé", url: "https://www.linkedin.com/in/veronique-landereau-97729a59/" }
    ]
  },
  {
    id: "mariana-didier-laurent",
    anchor: "#mariana-didier-laurent",
    name: "Mariana Didier Laurent",
    role: "Alchimiste associée — Services à la personne & Autonomie",
    kicker: "Alchimiste associée, Services à la personne",
    seoTitle: "Mariana Didier Laurent — Services & Autonomie | Alkymya",
    seoDescription: "Mariana Didier Laurent, Alchimiste associée Alkymya et présidente d'Esperanta Services : aide à domicile, gestion des risques et entrepreneuriat.",
    knowsAbout: [
      "Assurance IARD",
      "Courtage",
      "Services à la personne",
      "Aide à domicile",
      "Création d'entreprise"
    ],
    alumniOf: "École Supérieure d'Assurance",
    homeLocation: {
      city: "Le Plessis-Trévise",
      country: "FR"
    },
    website: "https://esperantaservices.fr/",
    websiteLabel: "esperantaservices.fr",
    websiteTag: "Entreprise & Réseau",
    websiteIcon: "globe",
    bio: "Présidente d'Esperanta Services, Mariana Didier Laurent consacre son activité à l'aide à domicile des personnes en perte d'autonomie et à l'accompagnement des proches aidants. Diplômée de l'École Supérieure d'Assurance, passée par le courtage et la gestion des risques de personnes, elle ancre son entreprise au Plessis-Trévise.",
    details: "Ce qu'elle partage avec les porteurs de projet du programme New Business, c'est l'expérience directe du lancement : choix de la forme juridique, constitution du capital, agrément des services à la personne, relation avec les prescripteurs locaux et les financeurs publics. Sa conviction : dans les services d'aide à la personne, la qualité de l'organisation et la rigueur de gestion sont indissociables de la relation humaine.",
    quote: "Dans les services d'aide à la personne, la qualité de l'organisation et la rigueur de gestion sont indissociables de la relation humaine.",
    image: "https://res.cloudinary.com/dokzioyu4/image/upload/v1794479431/WhatsApp_Image_2026-11-12_at_11.29.28_qwv5le.jpg",
    socials: {
      website: "https://esperantaservices.fr/",
      linkedin: "https://esperantaservices.fr/",
      mail: ""
    },
    works: [
      { label: "Esperanta Services", url: "https://esperantaservices.fr/" },
      { label: "Services à la personne & aide à domicile", url: "https://esperantaservices.fr/" },
      { label: "Accompagnement des proches aidants", url: "https://esperantaservices.fr/" },
      { label: "Gestion des risques & conformité", url: "https://esperantaservices.fr/" },
      { label: "Lancement d'entreprise & agrément", url: "https://esperantaservices.fr/" }
    ]
  },
  {
    id: "olivier-dion",
    anchor: "#olivier-dion",
    name: "Olivier Dion",
    role: "Fondateur de Onecub & Expert Data",
    kicker: "Expert Data & Espaces de Données",
    seoTitle: "Olivier Dion — Expert Data & Onecub | Alkymya",
    seoDescription: "Olivier Dion, Alchimiste Alkymya et fondateur de Onecub : expert Data Spaces souverains, conformité RGPD, gouvernance des données et IA européenne.",
    knowsAbout: [
      "Espaces de Données",
      "Data Spaces souverains",
      "Gouvernance numérique",
      "Conformité RGPD",
      "GAIA-X"
    ],
    website: "https://onecub.com/",
    websiteLabel: "onecub.com",
    bio: "Pionnier des Espaces de Données et expert en gouvernance numérique, le fondateur de Onecub est une figure centrale de la conformité réglementaire européenne. Entrepreneur engagé (notamment via Themy-x), il accompagne la transformation digitale de secteurs stratégiques comme la mobilité, l'énergie et l'agriculture en bâtissant des Data Spaces souverains.",
    details: "Expert auprès des instances de régulation et intervenant régulier pour la Commission Européenne, GAIA-X ou encore le gouvernement coréen, il contribue activement à définir les standards mondiaux de la donnée à travers ses publications et ses conférences internationales.",
    quote: "La souveraineté de la donnée et la confiance sont le socle indispensable des architectures IA d'avenir.",
    image: "https://res.cloudinary.com/dokzioyu4/image/upload/v1760374889/Photo_Olivier_Dion_reve_dk2c5e.png",
    socials: {
      website: "https://onecub.com/",
      linkedin: "https://www.linkedin.com/in/olivierdion/",
      instagram: "",
      mail: ""
    },
    link: {
      label: "Site officiel",
      display: "onecub.com",
      url: "https://onecub.com/",
      icon: "globe"
    },
    works: [
      { label: "Lab Postal 2017", url: "https://www.youtube.com/watch?v=bubawgP2gU0" },
      { label: "TEDxLaBaule", url: "https://www.youtube.com/watch?v=u6Eh26k6O8U" },
      { label: "MyData Online 2020", url: "https://online2020.mydata.org/presenter/olivier-dion/" },
      { label: "IGF / GDPR", url: "https://dig.watch/event/14th-internet-governance-forum/gdpr-after-more-one-year-how-make-it-happen" },
      { label: "Data de confiance", url: "https://www.thedigitalnewdeal.org/wp-content/uploads/DND_DATA-DE-CONFIANCE.pdf" }
    ]
  },
  {
    id: "kendra-martine",
    anchor: "#kendra-martine",
    name: "Kendra Martine",
    role: "Fondatrice d'Objectif Alternance & Formatrice",
    kicker: "Partenaire Alternance & Formatrice",
    seoTitle: "Kendra Martine — Objectif Alternance | Alkymya",
    seoDescription: "Kendra Martine, Alchimiste Alkymya, fondatrice d'Objectif Alternance et formatrice marketing : recrutement d'alternants, coaching emploi PME et TPE.",
    knowsAbout: [
      "Recrutement d'alternants",
      "Coaching emploi",
      "Insertion professionnelle",
      "Stratégie marketing",
      "Formation PME & TPE"
    ],
    website: "https://www.objectifalternance.fr/",
    websiteLabel: "objectifalternance.fr",
    bio: "Fondatrice d’« Objectif Alternance », Kendra Martine est spécialisée dans le recrutement d’alternants et de profils en reconversion, ainsi que dans le coaching emploi et alternance ciblant principalement les TPE et PME. Passionnée par l'humain et l'insertion professionnelle, elle bâtit des passerelles solides entre talents émergents et entreprises en développement.",
    details: "Forte de 7 ans d’expérience en stratégie marketing en entreprise, Kendra mène en parallèle une activité d’enseignante et formatrice avec une réelle passion pour la transmission. Elle dispense des formations et cours de marketing destinés à des lycéens, étudiants et adultes, en présentiel comme en ligne.",
    quote: "Bâtir des passerelles solides entre talents émergents et entreprises en développement grâce à l'insertion et l'alternance.",
    image: "https://res.cloudinary.com/dokzioyu4/image/upload/v1788941994/0c39dd0a7f91200361816f2b88d68802_cwzov0.jpg",
    socials: {
      website: "https://www.objectifalternance.fr/",
      linkedin: "",
      instagram: "",
      mail: ""
    },
    link: {
      label: "Site officiel",
      display: "objectifalternance.fr",
      url: "https://www.objectifalternance.fr/",
      icon: "globe"
    },
    works: [
      { label: "Site Objectif Alternance", url: "https://www.objectifalternance.fr/" }
    ]
  }
];
