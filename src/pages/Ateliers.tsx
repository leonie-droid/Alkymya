import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  GraduationCap, 
  Sparkles, 
  Target, 
  User, 
  Users, 
  Layers, 
  Bot, 
  Package, 
  Rocket, 
  Building2, 
  Euro, 
  FileCheck, 
  ExternalLink,
  MessageSquare,
  HelpCircle,
  Lightbulb,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AtelierIndividuel {
  id: string;
  badge: string;
  category: string;
  title: string;
  promise: string;
  description: string;
  icon: React.ElementType;
  accentColor: string;
  format: string;
  targetAudience: string;
  concreteDeliverable: string;
  caseStudy: {
    label: string;
    context: string;
    impact: string;
    link?: string;
  };
  syllabus: string[];
  price: string;
  priceNote: string;
  ctaText: string;
  ctaLink: string;
}

const ateliersIndividuels: AtelierIndividuel[] = [
  {
    id: "archives-en-ligne",
    badge: "Nouveau",
    category: "Valorisation & Médias",
    title: "Vos archives en ligne",
    promise: "Transformez vos photos, vidéos ou écrits dormants en un média vivant et indexé.",
    description: "Vous possédez des centaines de photos, d'œuvres, d'articles ou d'archives documentaires qui dorment sur des disques durs. En trois séances intensives, nous bâtissons ensemble un site éditorial structuré, pré-rendu pour le web moderne, indexé par Google et activement compris par les intelligences artificielles génératives.",
    icon: Package,
    accentColor: "#C06721",
    format: "3 séances de 2h + travail asynchrone guidé",
    targetAudience: "Photographes, artistes, auteurs, collectionneurs, historiens locaux",
    concreteDeliverable: "Un site web live, ultra-rapide, indexé sur votre nom de domaine avec votre collection mise en valeur",
    caseStudy: {
      label: "Cas d'application réel — TheLittle83",
      context: "600 photographies de terrain dans le Var transformées en atlas naturaliste bilingue pré-rendu.",
      impact: "Cité comme source directe par les modèles d'IA générative moins d'une heure après son indexation. Site conçu et livré en 24h.",
      link: "https://thelittle77.fr"
    },
    syllabus: [
      "Inventaire et curation des actifs dormants : sélection, titrage et contextualisation sémantique",
      "Génération du fichier de contexte IA (llms.txt) et balisage schema.org pour les moteurs de recherche",
      "Architecture de navigation et optimisation des poids d'images (de 1,5 Mo à moins de 80 Ko par cliché)",
      "Mise en ligne, indexation immédiate et formation à la publication autonome"
    ],
    price: "1 500 € HT",
    priceNote: "Financement possible selon statut (FIF-PL, AFDAS, OPCO)",
    ctaText: "Valoriser mes archives",
    ctaLink: "/contact?subject=Atelier%20Archives%20en%20Ligne"
  },
  {
    id: "outil-ia",
    badge: "Signature",
    category: "Systèmes Experts & Métier",
    title: "Construire son outil IA",
    promise: "Un système expert, un agent ou une mini-app — conçu pour votre métier, par vous.",
    description: "Vous possédez une expertise rare, des protocoles éprouvés et des règles métier que vous répétez inlassablement. On conçoit ensemble l'architecture décisionnelle de votre propre outil IA, on formalise vos prompts maîtres et on le déploie sur une interface sécurisée. Vous repartez avec un actif propriétaire et l'autonomie totale pour le faire évoluer.",
    icon: Bot,
    accentColor: "#037971",
    format: "4 à 6 séances de 2h modulables selon complexité",
    targetAudience: "Thérapeutes, coachs, consultants, juristes, directeurs métiers",
    concreteDeliverable: "Un outil métier opérationnel, une base de connaissances souveraine et votre documentation d'autonomie",
    caseStudy: {
      label: "Cas d'application réel — AvecLouise",
      context: "Système expert d'orientation pour les aidants familiaux fondé par Véronique Landreau.",
      impact: "Moteur de règles métier + base documentaire interactive réduisant le temps de diagnostic d'orientation de plusieurs jours à quelques minutes.",
    },
    syllabus: [
      "Cartographie de votre corpus métier : extraction des invariants, des exceptions et des arbres de décision",
      "Ingénierie de prompt avancée : contextualisation multi-couches, prévention des hallucinations et ton de marque",
      "Connexion à une base de connaissances documentaire (RAG ou fiches de règles structurées)",
      "Déploiement sur interface web privée avec guide d'administration et de maintenance pas-à-pas"
    ],
    price: "Sur devis",
    priceNote: "À partir de 2 000 € HT selon le périmètre technique",
    ctaText: "Concevoir mon outil IA",
    ctaLink: "/contact?subject=Atelier%20Construire%20son%20outil%20IA"
  },
  {
    id: "new-business-mvp",
    badge: "Accompagnement 6 Mois",
    category: "Entrepreneuriat & Traction",
    title: "New Business MVP",
    promise: "De l'idée à la première vente payante — avec l'IA comme accélérateur de validation.",
    description: "Le plus grand piège de l'innovation est de passer six mois à peaufiner un produit dans l'ombre sans savoir si un client est prêt à payer. Ce programme hybride mensuel structure votre offre, teste l'appétence du marché en quelques jours et vous confronte immédiatement au terrain. Chaque séance produit une décision factuelle : Continuer, Pivoter ou Accélérer.",
    icon: Rocket,
    accentColor: "#C06721",
    format: "1 séance stratégique par mois × 6 mois + revues hebdomadaires asynchrones",
    targetAudience: "Indépendants, repreneurs, fondateurs lançant une offre ou nouvelle ligne de revenus",
    concreteDeliverable: "Profil ICP documenté, MVP fonctionnel en ligne, grille tarifaire validée et premiers prospects engagés",
    caseStudy: {
      label: "L'effet démultiplicateur de l'IA de terrain",
      context: "Ce qui exigeait autrefois 3 mois d'enquêtes terrain s'effectue en quelques jours d'analyse de marché par agents spécialisés.",
      impact: "Vous prenez des arbitrages fondés sur des données chiffrées de dépenses réelles plutôt que sur des intuitions complaisantes.",
      link: "/newbusiness/"
    },
    syllabus: [
      "Mois 1 — ICP & Habitudes de dépenses : Cartographie chirurgicale du client idéal et de ses arbitrages budgétaires",
      "Mois 2 — Proposition de valeur & Élagage : Séparer l'indispensable du superflu pour définir le cœur de valeur",
      "Mois 3 — MVP Opérationnel : Assemblage rapide de la première version testable sans friction technique",
      "Mois 4 — Tarification & Routine Fondateur : Modélisation des prix et rituels d'exécution hebdomadaire",
      "Mois 5 — Pitch & Partenaires : Structuration du discours commercial pour convaincre alliés et financeurs",
      "Mois 6 — Arbitrage Data-Driven : Continuer, Pivoter ou Accélérer sur la base des métriques réelles"
    ],
    price: "500 € HT / mois",
    priceNote: "Engagement sur 6 mois (total 3 000 € HT) · Mentorat Cyril Garnier & Léonie Egesipe",
    ctaText: "Découvrir le programme MVP",
    ctaLink: "/newbusiness/"
  },
  {
    id: "capital-ia",
    badge: "Diagnostic Stratégique",
    category: "Audit & Direction Générale",
    title: "Construire son Capital IA",
    promise: "Auditez vos données, choisissez vos outils, identifiez les 3 processus à transformer.",
    description: "Une journée d'immersion stratégique pour faire l'état des lieux lucide de votre potentiel d'agentification : quelles données internes sont réellement exploitables, quels goulets d'étranglement méritent d'être automatisés et quelles technologies privilégier pour garantir la souveraineté de votre organisation. Vous repartez avec une feuille de route 6-12 mois claire et arbitrée.",
    icon: Building2,
    accentColor: "#1F4F6E",
    format: "1 journée complète d'immersion + benchmark amont + restitution formalisée",
    targetAudience: "Dirigeants de PME, ETI, directeurs de l'innovation, associés de cabinets de conseil",
    concreteDeliverable: "Rapport d'audit exhaustif, feuille de route IA priorisée par ROI et préconisations d'outils",
    caseStudy: {
      label: "Ce qui fait la différence",
      context: "L'analyse concurrentielle et la cartographie des flux sont préparées par nos agents en amont de la journée.",
      impact: "Le jour de l'atelier, vous ne perdez pas votre temps à collecter l'information : vous débattez directement des choix stratégiques.",
    },
    syllabus: [
      "Audit des données d'entreprise : qualité, conformité RGPD et accessibilité technique",
      "Matrice d'opportunité : croisement de la faisabilité technique et de la rentabilité opérationnelle",
      "Sélection raisonnée de la stack : open-source vs API propriétaires (Gemini, Claude, Mistral, OpenAI)",
      "Feuille de route 6 à 12 mois avec indicateurs de succès mesurables et cadrage budgétaire"
    ],
    price: "3 000 – 5 000 € HT",
    priceNote: "Selon la taille de la structure et l'étendue du périmètre d'audit",
    ctaText: "Demander un diagnostic",
    ctaLink: "/contact?subject=Audit%20Capital%20IA"
  }
];

const modulesCollectifs = [
  {
    id: "core-14h",
    badge: "Socle Indispensable",
    duration: "14h · 4 demi-journées",
    title: "Formation Core IA : Devenir Collaborateur Augmenté",
    description: "Le parcours fondamental pour transformer vos équipes en professionnels capables de produire avec l'IA au quotidien sans jamais sacrifier la rigueur de leur signature.",
    keyPoints: [
      "Prompt engineering stratégique : contextualisation multi-étapes et réduction des hallucinations",
      "Studio visuel et graphisme haute fidélité : création de visuels adaptés à votre charte",
      "Rédaction décisionnelle & synthèse documentaire : traitement accéléré de dossiers volumineux",
      "Prototypage rapide d'écrans web et de flux automatisés"
    ],
    deliverables: "Pack de prompts maîtres réutilisables, supports interactifs et attestation Qualiopi"
  },
  {
    id: "agents-3h30",
    badge: "Option Avancée",
    duration: "3h30 · 1 demi-journée",
    title: "Agents IA Autonomes : Automatisation des Processus",
    description: "Passez de la simple conversation à une flotte d'assistants numériques actifs 24h/24, capables de surveiller vos flux et d'agir dans vos logiciels de travail.",
    keyPoints: [
      "Architecture cognitive d'un agent autonome (rôles, mémoire, actions autorisées)",
      "Interconnexion directe avec vos outils (Slack, Notion, Google Workspace, CRM)",
      "Orchestration d'automatisations intelligentes avec Make et Zapier",
      "Déploiement en direct de 3 agents personnalisés prêts à l'usage"
    ],
    deliverables: "3 agents actifs dans vos logiciels et scénarios d'automatisation exportables"
  },
  {
    id: "nocode-3h30",
    badge: "Option Créative",
    duration: "3h30 · 1 demi-journée",
    title: "App No-Code : Votre Logiciel Métier Sur-Mesure",
    description: "Concevez et déployez une application web interne ergonomique, propulsée par les API d'intelligence artificielle, sans écrire une seule ligne de code.",
    keyPoints: [
      "Modélisation de données visuelles et gestion des droits d'accès",
      "Injection des API Gemini / GPT au cœur de formulaires interactifs",
      "Conception d'une interface utilisateur fluide et adaptée à vos usages",
      "Mise en production sécurisée sur URL d'entreprise avec cession de propriété"
    ],
    deliverables: "Une application web opérationnelle hébergée et passation de maintenance"
  },
  {
    id: "ethique-3h30",
    badge: "Option Gouvernance",
    duration: "3h30 · 1 demi-journée",
    title: "Gouvernance, Éthique & IA Act Européen",
    description: "Anticipez les obligations réglementaires européennes, sécurisez la confidentialité de vos secrets d'affaires et instaurez une charte d'utilisation responsable.",
    keyPoints: [
      "Grille de classification des risques selon les directives de l'IA Act européen",
      "Mesures d'étanchéité des données et paramétrage 'zéro rétention' auprès des fournisseurs d'IA",
      "Rédaction de la charte interne d'usage de l'IA pour les collaborateurs",
      "Audit des responsabilités légales liées aux contenus générés"
    ],
    deliverables: "Matrice d'audit de conformité réglementaire et modèle de charte interne prêt à l'emploi"
  }
];

const opcoProfiles = [
  {
    type: "Indépendant / Profession libérale",
    opco: "FIF-PL ou AGEFICE",
    coverage: "Prise en charge forfaitaire annuelle (souvent 750 € à 1 500 € / an)",
    note: "Dossier simple à déposer au moins 15 jours avant la première séance."
  },
  {
    type: "Artiste-Auteur / Photographe / Créatif",
    opco: "AFDAS",
    coverage: "Jusqu'à 100% des frais pédagogiques selon vos droits acquis",
    note: "Éligible sur attestation de revenus artistiques ou adhésion récente."
  },
  {
    type: "Entreprise de moins de 50 salariés",
    opco: "Votre OPCO de branche (Atlas, Akto, Opco EP, etc.)",
    coverage: "Financement possible à 100% dans le cadre du Plan de Développement des Compétences",
    note: "Convention de formation portée via la certification Qualiopi de notre partenaire INATEC."
  },
  {
    type: "Entreprise de plus de 50 salariés",
    opco: "Budget formation interne / FNE-Formation",
    coverage: "Financement direct ou co-financement sur projets de transition technologique",
    note: "Programme modulable en intra-entreprise dans vos locaux ou en distanciel."
  }
];

export default function Ateliers() {
  const [activeTab, setActiveTab] = useState<'tous' | 'individuels' | 'collectifs'>('tous');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [selectedOpcoIdx, setSelectedOpcoIdx] = useState<number>(0);

  const toggleCard = (id: string) => {
    setExpandedCardId(prev => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#FAF9F7] text-[#1F4F6E] min-h-screen pt-28 pb-20">
      {/* HERO SECTION DE HAUTE TENUE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1F4F6E] via-[#163c54] to-[#122e40] text-white py-20 px-6 sm:px-12 md:py-28 text-center">
        {/* Glow & texture subtile */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#02ADAB_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#02ADAB]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#02ADAB] text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio de Transmission · Alkymya</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.15] mb-6">
            Vous repartez avec <br className="hidden sm:block" />
            <strong className="font-semibold text-white underline decoration-[#02ADAB] decoration-2 underline-offset-8">
              quelque chose de réel.
            </strong>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-normal mb-10">
            Pas de diapositives théoriques. Pas de certificats sans lendemain. À la fin de chaque atelier, vous avez un outil, un site, un agent ou une offre commerciale qui tourne.
          </p>

          {/* Sélecteur de vue (Segmented Switcher) */}
          <div className="inline-flex p-1.5 rounded-2xl bg-black/25 backdrop-blur-md border border-white/15 max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('tous')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'tous'
                  ? 'bg-white text-[#1F4F6E] shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Tous les programmes
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('individuels')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'individuels'
                  ? 'bg-white text-[#1F4F6E] shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Ateliers individuels & dirigeants
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('collectifs')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'collectifs'
                  ? 'bg-white text-[#1F4F6E] shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Formations d'équipe Qualiopi
            </button>
          </div>
        </div>

        {/* Chiffres clés intégrés */}
        <div className="max-w-4xl mx-auto mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">
              <strong className="font-semibold text-[#02ADAB]">99,3%</strong>
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Recommandation</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">
              <strong className="font-semibold text-white">175+</strong>
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Professionnels formés</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">
              <strong className="font-semibold text-[#C06721]">1 à 2j</strong>
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Économisés / semaine</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">
              <strong className="font-semibold text-[#02ADAB]">100%</strong>
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Finançable OPCO</div>
          </div>
        </div>
      </section>

      {/* SECTION ATELIERS INDIVIDUELS */}
      {(activeTab === 'tous' || activeTab === 'individuels') && (
        <section className="max-w-[1200px] mx-auto py-16 px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#02ADAB] uppercase tracking-[0.2em] mb-2">
                <span>Parcours sur-mesure</span>
                <span aria-hidden="true">·</span>
                <span>Sans équipe à mobiliser</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-[#1F4F6E] leading-tight">
                Ateliers individuels : <strong className="font-semibold">un livrable concret à chaque séance</strong>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#5a7a90] max-w-md leading-relaxed">
              Pour indépendants, artistes, créateurs et dirigeants. On travaille directement sur votre matière première, à votre rythme, jusqu'à la mise en ligne.
            </p>
          </div>

          {/* Grille des cartes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ateliersIndividuels.map((atelier) => {
              const Icon = atelier.icon;
              const isExpanded = expandedCardId === atelier.id;

              return (
                <article
                  key={atelier.id}
                  className="bg-white rounded-2xl border border-[#1F4F6E]/10 shadow-[0_4px_24px_rgba(31,79,110,0.06)] hover:shadow-[0_12px_36px_rgba(31,79,110,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-7 sm:p-9">
                    {/* Header de carte */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#f4f6f9] text-[#1F4F6E] border border-[#1F4F6E]/10">
                        <Icon className="w-6 h-6" style={{ color: atelier.accentColor }} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold text-[#5a7a90] uppercase tracking-wider">
                          {atelier.category}
                        </span>
                        <span aria-hidden="true" className="text-[#5a7a90]/40">·</span>
                        <span className="text-xs font-bold text-[#C06721] bg-[#C06721]/10 px-2.5 py-0.5 rounded-full">
                          {atelier.badge}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-[#1F4F6E] mb-2 leading-snug">
                      {atelier.title}
                    </h3>
                    <p className="text-base text-[#C06721] font-medium leading-relaxed mb-4">
                      {atelier.promise}
                    </p>
                    <p className="text-sm text-[#5a7a90] leading-relaxed mb-6 font-normal">
                      {atelier.description}
                    </p>

                    {/* Méta-informations sans pilule superflue */}
                    <div className="space-y-2.5 pt-4 border-t border-[#1F4F6E]/8 text-xs text-[#4a6a80]">
                      <div className="flex items-start gap-2.5">
                        <Clock className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                        <span><strong>Format :</strong> {atelier.format}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Target className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                        <span><strong>Livrable clé :</strong> {atelier.concreteDeliverable}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <User className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                        <span><strong>Pour qui :</strong> {atelier.targetAudience}</span>
                      </div>
                    </div>

                    {/* Encart cas réel */}
                    <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-[#f2f8f8] to-[#e8f3f3] border-l-4 border-[#02ADAB] text-xs text-[#1F4F6E]">
                      <div className="font-semibold text-[#037971] mb-1 flex items-center justify-between">
                        <span>{atelier.caseStudy.label}</span>
                        {atelier.caseStudy.link && (
                          <a
                            href={atelier.caseStudy.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:underline text-[#02ADAB]"
                          >
                            <span>Voir</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <p className="text-[#3b5d72] mb-1 leading-relaxed">
                        {atelier.caseStudy.context}
                      </p>
                      <p className="font-medium text-[#1F4F6E]">
                        {atelier.caseStudy.impact}
                      </p>
                    </div>

                    {/* Accordéon Syllabus & Détails */}
                    <div className="mt-4 pt-4 border-t border-[#1F4F6E]/8">
                      <button
                        type="button"
                        onClick={() => toggleCard(atelier.id)}
                        className="w-full flex items-center justify-between text-xs font-bold text-[#1F4F6E] hover:text-[#02ADAB] transition-colors py-1 cursor-pointer"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? "Masquer les étapes du programme" : "Consulter les 4 étapes du programme"}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden pt-3 space-y-2"
                          >
                            {atelier.syllabus.map((step, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-[#4a6a80] leading-snug">
                                <span className="w-4 h-4 rounded-full bg-[#1F4F6E]/10 text-[#1F4F6E] font-bold flex items-center justify-center shrink-0 text-[10px]">
                                  {idx + 1}
                                </span>
                                <span>{step}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Pied de carte avec tarif et action */}
                  <div className="p-7 sm:p-9 pt-4 bg-[#fbfcfd] border-t border-[#1F4F6E]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-2xl font-bold text-[#1F4F6E] font-mono">
                        {atelier.price}
                      </div>
                      <div className="text-[11px] text-[#7a9ab0] font-medium">
                        {atelier.priceNote}
                      </div>
                    </div>

                    <Link
                      to={atelier.ctaLink}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1F4F6E] hover:bg-[#02ADAB] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
                    >
                      <span>{atelier.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* SECTION FORMATIONS COLLECTIVES QUALIOPI */}
      {(activeTab === 'tous' || activeTab === 'collectifs') && (
        <section className="bg-white border-y border-[#1F4F6E]/10 py-20 px-6 sm:px-8 mt-12">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Colonne gauche : Cadre légal & Partenariats (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#037971] uppercase tracking-[0.2em]">
                  <GraduationCap className="w-4 h-4" />
                  <span>Organisations & Équipes</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-light text-[#1F4F6E] leading-tight">
                  Formation collective : <br />
                  <strong className="font-semibold">80% de pratique sur vos vraies tâches</strong>
                </h2>

                <p className="text-base text-[#5a7a90] leading-relaxed">
                  Portée en alliance avec l'école <strong className="text-[#1F4F6E]">INATEC</strong>, notre offre est couverte par la certification d'État <strong className="text-[#1F4F6E]">Qualiopi</strong>. Vos collaborateurs ne subissent plus la théorie : ils construisent des outils fonctionnels directement connectés à leurs logiciels métiers.
                </p>

                {/* Badge Qualiopi */}
                <div className="p-5 rounded-2xl bg-[#037971]/8 border border-[#037971]/20 flex items-start gap-4">
                  <ShieldCheck className="w-8 h-8 text-[#037971] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#037971] uppercase tracking-wider mb-1">
                      Certification Qualiopi
                    </h4>
                    <p className="text-xs text-[#3b5d72] leading-relaxed">
                      Conformité pédagogique garantie par l'État pour les actions de formation. Finançable jusqu'à 100% par votre OPCO selon vos droits acquis.
                    </p>
                  </div>
                </div>

                {/* Écoles et références */}
                <div className="pt-4 border-t border-[#1F4F6E]/10">
                  <div className="text-xs font-bold text-[#7a9ab0] uppercase tracking-wider mb-3">
                    Ils nous confient leurs promotions et équipes :
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#1F4F6E]">
                    <span className="px-3 py-1.5 rounded-lg bg-[#f4f6f9] border border-[#1F4F6E]/10">HETIC</span>
                    <span className="px-3 py-1.5 rounded-lg bg-[#f4f6f9] border border-[#1F4F6E]/10">Ynov Campus</span>
                    <span className="px-3 py-1.5 rounded-lg bg-[#f4f6f9] border border-[#1F4F6E]/10">IÉSEG School of Management</span>
                    <span className="px-3 py-1.5 rounded-lg bg-[#f4f6f9] border border-[#1F4F6E]/10">CFA Itis</span>
                  </div>
                </div>

                {/* Action devis rapide */}
                <div className="pt-2">
                  <Link
                    to="/contact?subject=Devis%20Formation%20Collective%20Qualiopi"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1F4F6E] hover:bg-[#02ADAB] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                  >
                    <span>Demander une convention de formation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Colonne droite : Les 4 Modules (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-bold text-[#5a7a90] uppercase tracking-wider mb-2">
                  Architecture modulaire des formations :
                </div>

                {modulesCollectifs.map((mod, idx) => (
                  <div
                    key={mod.id}
                    className="p-6 rounded-2xl bg-[#FAF9F7] border border-[#1F4F6E]/10 hover:border-[#02ADAB]/40 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-[#1F4F6E] text-white">
                          {mod.badge}
                        </span>
                        <span className="text-xs font-mono font-semibold text-[#C06721]">
                          {mod.duration}
                        </span>
                      </div>
                      <span className="text-xs text-[#7a9ab0]">Module {idx + 1}/4</span>
                    </div>

                    <h3 className="text-lg font-semibold text-[#1F4F6E] mb-2">
                      {mod.title}
                    </h3>
                    <p className="text-sm text-[#5a7a90] leading-relaxed mb-4">
                      {mod.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4a6a80] mb-4">
                      {mod.keyPoints.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#02ADAB] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-xs pt-3 border-t border-[#1F4F6E]/8 flex items-center gap-2 text-[#037971]">
                      <FileCheck className="w-4 h-4 shrink-0" />
                      <span><strong>Livrable remis :</strong> {mod.deliverables}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SIMULATEUR OPCO PRAGMATIQUE */}
      <section className="max-w-[1200px] mx-auto py-16 px-6 sm:px-8">
        <div className="bg-gradient-to-br from-[#1F4F6E] to-[#122e40] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#02ADAB] uppercase tracking-[0.2em] block mb-2">
              Prise en charge financière
            </span>
            <h2 className="text-2xl sm:text-3xl font-light leading-snug">
              Comment financer votre formation <strong className="font-semibold text-white">via votre OPCO ?</strong>
            </h2>
            <p className="text-sm text-white/75 mt-2 leading-relaxed">
              Sélectionnez votre situation juridique pour connaître les modalités de prise en charge :
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {opcoProfiles.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedOpcoIdx(idx)}
                className={`p-4 rounded-xl text-left transition-all cursor-pointer border ${
                  selectedOpcoIdx === idx
                    ? 'bg-white text-[#1F4F6E] border-white shadow-lg'
                    : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-wider mb-1">
                  {p.type}
                </div>
                <div className={`text-xs ${selectedOpcoIdx === idx ? 'text-[#02ADAB]' : 'text-white/60'}`}>
                  {p.opco}
                </div>
              </button>
            ))}
          </div>

          {/* Fiche d'information OPCO sélectionnée */}
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="text-xs font-bold text-[#02ADAB] uppercase tracking-wider">
                Prise en charge estimée :
              </div>
              <div className="text-base sm:text-lg font-semibold text-white">
                {opcoProfiles[selectedOpcoIdx].coverage}
              </div>
              <p className="text-xs text-white/70 max-w-xl leading-relaxed">
                {opcoProfiles[selectedOpcoIdx].note}
              </p>
            </div>

            <Link
              to="/contact?subject=Accompagnement%20Dossier%20Financement%20OPCO"
              className="px-6 py-3 rounded-xl bg-[#C06721] hover:bg-white hover:text-[#1F4F6E] text-white text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 shadow-md"
            >
              Vérifier mon éligibilité
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL : LE POINT DE 30 MINUTES (STYLE MAQUETTE ÉPURÉ) */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 mb-8">
        <div className="bg-[#C06721] text-white rounded-3xl p-8 sm:p-14 text-center shadow-xl">
          <div className="max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 block mb-3">
              Orientation personnalisée
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 leading-snug">
              Pas sûr de quel atelier <strong className="font-semibold text-white">vous convient ?</strong>
            </h2>
            <p className="text-base text-white/90 leading-relaxed mb-8 font-normal">
              On fait un point de 30 minutes ensemble. Vous repartez avec une recommandation claire et pragmatique — même si ce n'est pas chez nous.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact?subject=Point%2030%20minutes%20orientation%20atelier"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#C06721] hover:bg-[#1F4F6E] hover:text-white font-semibold text-sm transition-all duration-200 shadow-md"
              >
                Prendre rendez-vous (30 min) →
              </Link>
              <a
                href="mailto:contact@alkymya.co"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all text-center"
              >
                Écrire à Cyril & Léonie
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
