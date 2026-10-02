import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  ShieldCheck, 
  Euro, 
  GraduationCap, 
  ArrowRight, 
  Quote, 
  X, 
  Rocket, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Target, 
  Users, 
  CheckCircle2, 
  Clock, 
  HelpCircle,
  Lightbulb,
  Layers,
  Sparkle,
  PackageCheck,
  Wallet
} from "lucide-react";
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from "react";

const ateliers = [
  {
    id: "formation-core",
    title: "1. Formation Core : Le Programme Complet IA",
    subtitle: "C'est notre offre \"Meilleure Valeur\" pour une autonomie totale.",
    price: "2 500 € HT",
    priceNote: "Tarif HT",
    format: "14 heures de formation intensive réparties sur 4 demi-journées.",
    content: "Maîtrise de la stack complète (Images, Contenus, Vidéo, Web).",
    included: "Supports pédagogiques, accès Drive illimité, suivi post-formation pendant 1 mois, et délivrance de l'attestation Qualiopi.",
    icon: GraduationCap,
    tag: "Best Value",
    presentation: {
      tagline: "Le socle incontournable pour transformer vos collaborateurs en professionnels augmentés par l'IA.",
      description: "Cette formation immersive de 14 heures a été spécialement conçue pour les équipes et les professionnels qui souhaitent dépasser le stade des simples questions/réponses sur ChatGPT pour intégrer une véritable chaîne de production IA dans leur quotidien. De la stratégie éditoriale à la création de maquettes web en passant par le graphisme haute définition, nous vous transmettons des protocoles opérationnels immédiatement rentables.",
      target: "Cadres dirigeants, consultants, communicants, créatifs, chefs de projet et indépendants souhaitant économiser 1 à 2 jours par semaine sur la production de leurs livrables.",
      keyPoints: [
        "Prompt engineering stratégique : techniques de contextualisation avancée, guidage multi-étapes et réduction drastique des hallucinations",
        "Studio graphique & branding : maîtriser les outils IA pour créer des visuels sur-mesure fidèles à votre charte",
        "Rédaction & synthèse décisionnelle : automatiser l'analyse de volumineux dossiers, la rédaction de propositions commerciales et de rapports d'expertise",
        "Audiovisuel & Prototypage web : génération de voix off réalistes, avatars vidéo et prototypage d'écrans web fonctionnels en quelques minutes"
      ],
      pedagogy: "80% de pratique sur vos propres fichiers et cas d'usage réels d'entreprise. Formation portée en partenariat avec l'école INATEC et certifiée Qualiopi (finançable jusqu'à 100% via OPCO).",
      deliverablesDetailed: "Pack de prompts maîtres prêts à l'emploi, guides pas-à-pas, accès Drive permanent aux ressources mises à jour et 1 mois de coaching d'application post-formation."
    }
  },
  {
    id: "agents-ia",
    title: "2. Option A : Agents IA – Automatisation Avancée",
    subtitle: "Idéal pour ceux qui souhaitent déléguer les tâches répétitives à des agents intelligents.",
    price: "500 € HT",
    priceNote: "Tarif HT",
    format: "1 demi-journée (3h30) dédiée.",
    deliverables: "Création de 3 agents personnalisés, mise en place de workflows automatisés (Zapier/Make) et intégration directe à vos outils (Slack/Notion).",
    icon: Zap,
    tag: "Expansion",
    presentation: {
      tagline: "Passez de l'outil conversationnel à une véritable force de travail numérique autonome active 24h/24.",
      description: "Un agent IA ne se contente pas de vous répondre : il surveille vos flux, raisonne en plusieurs étapes, prend des décisions cadrées et exécute des actions concrètes dans vos logiciels habituels. Cet atelier vous permet de concevoir et déployer votre propre armada d'agents pour automatiser vos tâches les plus chronophages.",
      target: "Responsables des opérations, équipes marketing/vente, services support et entrepreneurs débordés par la gestion manuelle des données et des flux d'information.",
      keyPoints: [
        "Architecture cognitive d'un agent autonome : définition du rôle, des règles strictes, de la mémoire contextuelle et des outils autorisés",
        "Interconnexion aux flux de votre entreprise : connexion directe avec Slack, Notion, Airtable, Google Drive ou votre CRM",
        "Orchestration d'automatisations intelligentes : chaînage fluide avec Make / Zapier et les API des grands modèles de langage",
        "Conception en direct de 3 agents sur-mesure adaptés à votre activité (ex : agent de veille stratégique, agent de qualification de leads, agent de compte-rendu)"
      ],
      pedagogy: "Atelier 100% 'Hands-on' : vous travaillez directement dans votre propre écosystème logiciel et repartez avec 3 agents actifs et opérationnels dès la fin de la séance.",
      deliverablesDetailed: "Scénarios Make/Zapier exportables, documentation technique pour vos équipes et fiches de prompt d'instruction pour chaque agent créé."
    }
  },
  {
    id: "app-nocode",
    title: "3. Option B : App No-Code – Outil Métier Sur-Mesure",
    subtitle: "Développez vos propres applications internes sans écrire une seule ligne de code.",
    price: "500 € HT",
    priceNote: "Tarif HT",
    format: "1 demi-journée (3h30) dédiée.",
    deliverables: "Une application métier déployée et fonctionnelle, intégration de l'IA (API Gemini/GPT) et formation de votre équipe à la maintenance de l'outil.",
    icon: Zap,
    tag: "Innovation",
    presentation: {
      tagline: "Créez en quelques heures l'application interne sur-mesure dont votre équipe rêve depuis des mois.",
      description: "Les logiciels standards du marché sont souvent trop rigides, trop complexes ou trop coûteux. Cet atelier vous initie aux meilleures plateformes no-code contemporaines dopées aux API d'intelligence artificielle pour concevoir une application web interne ergonomique, collaborative et parfaitement taillée pour vos méthodes de travail.",
      target: "Managers, chefs de projet, directeurs des opérations et indépendants ayant besoin d'un outil métier propriétaire sans faire appel à une ESN ou développer du code.",
      keyPoints: [
        "Design d'interface utilisateur (UI/UX) : structurer une interface claire, fluide et adaptée aux usages de vos équipes",
        "Intégration native des API d'IA : injecter les capacités de synthèse, de catégorisation ou d'analyse intelligente de Gemini ou GPT directement au cœur de l'outil",
        "Modélisation de données & sécurité : gestion des bases de données relationnelles visuelles, des filtres et des droits d'accès utilisateurs",
        "Déploiement en un clic : mise en production sur une URL sécurisée et prise en main pour administrer et faire grandir votre application"
      ],
      pedagogy: "Construction pas à pas de votre prototype fonctionnel en direct pendant l'atelier. Aucune compétence préalable en programmation n'est requise.",
      deliverablesDetailed: "Une application web opérationnelle hébergée, le transfert de propriété complet et une séance de passation pour rendre vos équipes entièrement autonomes."
    }
  },
  {
    id: "new-business",
    title: "4. New business MVP : De l'idée à la validation client",
    subtitle: "L'accompagnement opérationnel pour construire votre MVP, cibler vos clients idéaux, tester la traction avant d'investir et décider avec lucidité : Continuer, Pivoter ou Accélérer.",
    price: "200 € / mois",
    priceNote: "Programme intensif · 6 mois",
    format: "Accompagnement opérationnel sur 6 mois (3 à 4h de travail personnel par semaine).",
    content: "Méthodologie MVP en 6 étapes : Cadrer l'ICP (M1) · Proposition de valeur & Arbitrage (M2) · Construction du MVP (M3) · Pricing & Routine entrepreneuriale (M4) · Pitch partenaires & investisseurs (M5) · Décision data-driven Continuer / Pivoter / Accélérer (M6).",
    deliverables: "Le Kit MVP Complet : Fiche Profil ICP & Habitudes de dépenses, MVP opérationnel déployé, Grille de pricing testée, Pitch Deck investisseurs & partenaires, et Matrice décisionnelle Continuer / Pivoter / Accélérer.",
    included: "Mentorat opérationnel par Cyril Garnier & Léonie Egesipe, ateliers collectifs de studio New business MVP, revues individuelles régulières et accès continu aux ressources.",
    link: "/cohorte-fondatrice.html",
    linkText: "Déposer ma candidature",
    icon: Rocket,
    tag: "Nouveau • New business MVP",
    highlight: true,
    presentation: {
      tagline: "Testez votre offre sur le terrain avec de vrais clients avant d'engager des investissements lourds.",
      description: "Vous avez une idée d'entreprise, une nouvelle offre ou un projet innovant ? Le plus grand danger est de passer des mois dans votre coin à concevoir un produit sans savoir si un marché existe. Le programme New business MVP accompagne les porteurs de projets dans un format d'accompagnement hybride combinant le mentorat stratégique et opérationnel de Cyril Garnier et Léonie Egesipe. Vous apprenez à définir avec précision votre profil client idéal (ICP), analyser ses habitudes de dépenses actuelles, distinguer l'essentiel du superflu pour bâtir votre produit minimum viable (MVP), instaurer une routine entrepreneuriale rigoureuse, pitcher avec force auprès d'investisseurs ou partenaires, et piloter vos décisions stratégiques grâce aux données du marché : continuer, pivoter ou accélérer.",
      target: "Porteurs de projets, créateurs d'entreprise, consultants, solopreneurs et indépendants souhaitant confronter leur offre à de vrais clients, tester la viabilité commerciale de leur concept et minimiser les risques financiers avant d'investir.",
      keyPoints: [
        "Mois 1 — Cadrer le Marché & l'ICP : Définition chirurgicale du profil client idéal (ICP), cartographie des alternatives existantes et analyse détaillée des habitudes de dépenses actuelles du marché pour résoudre ce problème.",
        "Mois 2 — Proposition de Valeur & Arbitrage : Pourquoi vous choisir ? Élagage impitoyable de l'offre : distinguer le cœur d'usage indispensable du superflu pour bâtir un MVP ultra-focalisé et percutant.",
        "Mois 3 — Construction du MVP Opérationnel : Assemblage rapide de votre premier produit ou service testable et déploiement de votre présence digitale sans friction technique ni coûts superflus.",
        "Mois 4 — Tarification & Routine Entrepreneuriale : Modélisation tarifaire optimale, tests d'acceptabilité prix et structuration de vos rituels hebdomadaires de travail et de pilotage fondateur.",
        "Mois 5 — Pitch Partenaires & Investisseurs : Construction d'un pitch deck percutant et argumentaire commercial solidement appuyé sur vos premiers retours utilisateurs et données de traction concrètes.",
        "Mois 6 — Décision Data-Driven & Demo Day : Analyse des métriques d'usage réelles et activation du cadre décisionnel stratégique : Continuer, Pivoter ou Accélérer pour pérenniser votre activité."
      ],
      pedagogy: "Accompagnement intensif de 6 mois en binôme avec Cyril Garnier et Léonie Egesipe. Alternance de mentorat individuel, d'ateliers de confrontation terrain, de revues de livrables et de co-développement entre pairs.",
      deliverablesDetailed: "Le Pack New Business MVP : Cartographie ICP & Habitudes de dépenses, MVP opérationnel en ligne, Grille de tarification testée, Pitch deck partenaires & investisseurs, et Matrice d'arbitrage 'Continuer, Pivoter, Accélérer'.",
      toolBudgetNote: "À prévoir : néanmoins, il faut prévoir un portefeuille d'environ 50€ pour les outils d'IA nécessaires aux étapes pratiques."
    }
  }
];

const testimonials = [
  {
    quote: "C'était vraiment extraordinaire. Un grand merci pour cet enthousiasme à transmettre et les contenus si modernes. J'ai hâte de suivre une autre séance :)",
    author: "Shahrzad T",
    role: "Responsable Pédagogique"
  },
  {
    quote: "Toute la classe a beaucoup apprécié cette journée de travail : nous avons appris énormément de choses en peu de temps, et vos explications nous ont été très enrichissantes. (...) En espérant avoir le plaisir de vous revoir l'année prochaine ou au second semestre.",
    author: "SM",
    role: "Déléguée B2 PEM"
  },
  {
    quote: "Très objectivement ce cours était vraiment super, il était très intéressant, absolument pas ennuyant comme tous les cours de management et de communication que j'ai pu vivre auparavant. C'était vraiment un dialogue, qui nous permettait de rester très intéressés. Pour ma part c'est un sans faute !",
    author: "Participant PEM",
    role: "Étudiant en Management"
  },
  {
    quote: "Une réelle disponibilité et des échanges à chaque fois riches d'enseignements et qui me permettaient d'avancer. Très gentil et humain, vrais conseils entrepreneuriaux concrets, super vision de l'IA, réactivité incroyable !",
    author: "Mathilde T.",
    role: "Étudiante IÉSEG - The Indie Library"
  },
  {
    quote: "J’ai découvert comment l’IA peut améliorer mon travail et m’aider à être plus performante avec un temps réduit. J'ai réalisé que le monde des IA est immense, et plus accessible que ce que je pensais.",
    author: "Étudiante EURIDIS",
    role: ""
  }
];

export default function Ateliers() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [expandedAtelierId, setExpandedAtelierId] = useState<string | null>("formation-core");
  const [cohorteStatus, setCohorteStatus] = useState<{
    isSoldOut?: boolean;
    remainingPlaces?: number;
    currentPrice?: number;
  } | null>(null);

  const toggleAtelier = (id: string) => {
    setExpandedAtelierId(prev => prev === id ? null : id);
  };

  const scrollToAndOpenAtelier = (id: string) => {
    setExpandedAtelierId(id);
    const element = document.getElementById(`atelier-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    fetch('/api/cohorte-status')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data) setCohorteStatus(data);
      })
      .catch(() => {});
  }, []);

  // Lock scroll when video is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVideoOpen]);

  return (
    <div className="pt-32 pb-24">
      {/* Video Lightbox */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl h-auto max-h-[90vh] aspect-video md:aspect-[9/16] md:w-[450px] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-14 right-0 text-white bg-copper-orange rounded-full p-3 shadow-xl hover:scale-110 transition-transform z-[110]"
                onClick={() => setIsVideoOpen(false)}
                aria-label="Fermer la vidéo"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10">
                <video
                  src="https://res.cloudinary.com/dokzioyu4/video/upload/v1773762338/DraftResource_1763735958.541805_atgbsl.mov"
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 max-w-[1440px]">
        {/* Hero Section */}
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-copper-orange mb-6 block">
              Formations de Haute Précision
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 text-deep-blue leading-tight">
              Devenez une entreprise <span className="text-copper-orange">IA-native</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed mb-8">
              À l’heure où l’intelligence artificielle redéfinit les métiers du conseil et de la création, Alkymya s'associe à l'école <span className="text-deep-blue font-bold">INATEC</span> pour vous proposer un parcours de formation de haute précision. Notre objectif : transformer votre structure en une entreprise "IA-native" capable de produire plus vite, sans jamais compromettre l’excellence de votre signature.
            </p>
          </motion.div>
        </div>

        {/* Financement Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-deep-blue rounded-[3rem] p-10 md:p-16 mb-32 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <GraduationCap className="h-64 w-64 text-white" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-6">
              Une formation d'excellence, finançable.
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl">
              Parce que la montée en compétences ne doit pas être un frein financier, nous avons mis en place un cadre rigoureux pour vous partager notre expertise :
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-copper-orange" />
                </div>
                <h3 className="text-white font-black uppercase tracking-widest text-sm">Partenariat INATEC</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Votre formation est portée par un organisme de référence, garantissant une expertise pédagogique de pointe et un suivi administratif complet.
                </p>
              </div>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-copper-orange" />
                </div>
                <h3 className="text-white font-black uppercase tracking-widest text-sm">Certification Qualiopi</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Gage de qualité supérieure, cette certification d'État atteste de la conformité de nos processus pédagogiques et de l'efficacité de nos méthodes.
                </p>
              </div>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Euro className="h-6 w-6 text-copper-orange" />
                </div>
                <h3 className="text-white font-black uppercase tracking-widest text-sm">Prise en charge OPCO</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Grâce à ce cadre certifié, votre formation est finançable jusqu'à 100% par votre OPCO, selon votre budget de formation disponible.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Modules Section */}
        <div className="mb-24">
          {/* Bannière animée de promotion pour l'accompagnement New Business MVP */}
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 10px 30px -10px rgba(192, 103, 33, 0.2)",
                  "0 20px 40px -10px rgba(192, 103, 33, 0.4)",
                  "0 10px 30px -10px rgba(192, 103, 33, 0.2)"
                ] 
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-deep-blue via-[#1F4F6E] to-copper-orange p-1"
            >
              <div className="bg-deep-blue/95 rounded-[2.4rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
                <div className="flex items-center gap-5 text-center md:text-left">
                  <motion.div
                    animate={{ rotate: [0, -10, 10, -5, 5, 0], scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="h-16 w-16 rounded-2xl bg-copper-orange text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-copper-orange/30 mx-auto md:mx-0"
                  >
                    <Rocket className="h-8 w-8" />
                  </motion.div>
                  <div>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-copper-orange text-white text-[11px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                        <Sparkles className="h-3 w-3" /> Programme New Business MVP
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-bold">
                        Tarif : 200 € / mois · 6 mois
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-black text-white">
                      New business MVP : Validez votre offre auprès de vrais clients avant d'investir
                    </h3>
                    <p className="text-white/75 text-sm font-medium mt-1">
                      Programme opérationnel de 6 mois à 200 € / mois guidé par Cyril Garnier & Léonie Egesipe pour tester l'ICP, concevoir votre MVP et décider : Continuer, Pivoter ou Accélérer.
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0 flex items-center gap-3 w-full md:w-auto">
                  <motion.a
                    href="#atelier-new-business"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToAndOpenAtelier('new-business');
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full md:w-auto px-8 py-4 rounded-full bg-copper-orange text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-deep-blue transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Voir l'offre (200 €)</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>
                  <a
                    href="/cohorte-fondatrice.html"
                    className="hidden sm:inline-flex px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all items-center justify-center text-center"
                  >
                    Candidature directe
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="text-center mb-10">
            <h2 className="text-4xl font-heading font-black text-deep-blue mb-4">Parcours de Formation</h2>
            <p className="text-muted-foreground font-medium max-w-2xl mx-auto mb-6">
              Découvrez notre programme complet et nos options spécialisées pour une montée en compétences sur-mesure.
            </p>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-copper-orange bg-copper-orange/10 inline-block px-4 py-2 rounded-full">
              💡 Cliquez sur un atelier ci-dessous pour afficher sa présentation détaillée
            </p>
          </div>

          {/* Sélecteur rapide d'ateliers */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {ateliers.map((atelier) => {
              const isSelected = expandedAtelierId === atelier.id;
              return (
                <button
                  key={atelier.id}
                  onClick={() => scrollToAndOpenAtelier(atelier.id)}
                  className={`px-5 py-3 rounded-full text-xs md:text-sm font-bold transition-all flex items-center gap-2 border cursor-pointer ${
                    isSelected 
                      ? 'bg-deep-blue text-white border-deep-blue shadow-lg shadow-deep-blue/15 scale-105' 
                      : 'bg-white text-deep-blue/80 border-deep-blue/10 hover:border-copper-orange hover:text-copper-orange shadow-sm hover:scale-102'
                  }`}
                  aria-expanded={isSelected}
                >
                  <atelier.icon className={`h-4 w-4 ${isSelected ? 'text-copper-orange' : 'text-deep-blue/60'}`} />
                  <span>{atelier.title.split(':')[0]}</span>
                  {isSelected ? (
                    <ChevronUp className="h-4 w-4 text-copper-orange" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-deep-blue/40" />
                  )}
                </button>
              );
            })}
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            {ateliers.map((atelier, index) => {
              const isCohorte = atelier.highlight;
              const isExpanded = expandedAtelierId === atelier.id;
              
              const displayPrice = isCohorte 
                ? "200 € / mois"
                : atelier.price;

              const displayPriceNote = isCohorte
                ? "Programme complet · 6 mois"
                : atelier.priceNote || "Tarif HT";

              const displayTag = atelier.tag;

              const displayBadge = isCohorte
                ? "Accompagnement 6 mois"
                : "Formation certifiée";

              const displayLinkText = isCohorte
                ? "Déposer ma candidature (200 € / mois)"
                : (atelier.linkText || "Découvrir le programme");

              return (
              <Card 
                key={index} 
                id={`atelier-${atelier.id}`}
                className={`border-none bg-white shadow-xl shadow-deep-blue/5 rounded-[3rem] overflow-hidden transition-all duration-500 ${
                  isExpanded ? 'ring-2 ring-copper-orange shadow-2xl shadow-copper-orange/15' : atelier.highlight ? 'ring-1 ring-copper-orange/50 shadow-copper-orange/5' : 'hover:shadow-2xl'
                }`}
              >
                <div className="flex flex-col lg:flex-row">
                  <div 
                    onClick={() => toggleAtelier(atelier.id)}
                    className={`lg:w-1/4 flex items-center justify-center p-12 transition-colors duration-500 cursor-pointer ${
                      atelier.highlight || isExpanded || index === 0 ? 'bg-copper-orange text-white' : 'bg-copper-orange/5 text-copper-orange hover:bg-copper-orange hover:text-white'
                    }`}
                    title="Cliquer pour afficher la présentation de l'atelier"
                  >
                    <div className="text-center">
                      <atelier.icon className="h-20 w-20 mx-auto transition-transform duration-300 group-hover:scale-110" />
                      <span className="block mt-4 text-xs font-black uppercase tracking-widest opacity-90">
                        {isExpanded ? "Masquer" : "Découvrir"}
                      </span>
                    </div>
                  </div>
                  <div className="lg:w-3/4 p-10 md:p-14">
                    <div 
                      onClick={() => toggleAtelier(atelier.id)}
                      className="cursor-pointer"
                    >
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-copper-orange block">
                              {displayTag}
                            </span>
                            {atelier.highlight && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-copper-orange text-white">
                                <Sparkles className="h-3 w-3" /> {displayBadge}
                              </span>
                            )}
                          </div>
                          <h3 className="text-3xl md:text-4xl font-heading font-black text-deep-blue hover:text-copper-orange transition-colors">
                            {atelier.title}
                          </h3>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-black text-deep-blue">{displayPrice}</p>
                          <p className="text-xs font-bold text-copper-orange uppercase tracking-widest mt-1">{displayPriceNote}</p>
                        </div>
                      </div>

                      <p className="text-xl text-deep-blue/70 font-medium mb-8 italic border-l-4 border-copper-orange/30 pl-6">
                        {atelier.subtitle}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8 text-sm">
                        <div className="space-y-4">
                          <div>
                            <p className="font-black uppercase tracking-widest text-copper-orange mb-1">Format</p>
                            <p className="text-deep-blue font-bold leading-relaxed">{atelier.format}</p>
                          </div>
                          {atelier.content && (
                            <div>
                              <p className="font-black uppercase tracking-widest text-copper-orange mb-1">Contenu</p>
                              <p className="text-deep-blue font-bold leading-relaxed">{atelier.content}</p>
                            </div>
                          )}
                          {atelier.deliverables && (
                            <div>
                              <p className="font-black uppercase tracking-widest text-copper-orange mb-1">Livrables</p>
                              <p className="text-deep-blue font-bold leading-relaxed">{atelier.deliverables}</p>
                            </div>
                          )}
                        </div>
                        <div className="bg-deep-blue/5 p-6 rounded-[2rem] flex flex-col justify-between">
                          <div>
                            <p className="font-black uppercase tracking-widest text-deep-blue mb-2">
                              {atelier.included ? 'Inclus dans le programme' : 'Objectif Principal'}
                            </p>
                            <p className="text-deep-blue/80 font-medium leading-relaxed text-xs md:text-sm">
                              {atelier.included || atelier.deliverables}
                            </p>
                            {atelier.presentation.toolBudgetNote && (
                              <div className="mt-3 pt-3 border-t border-deep-blue/10 flex items-center gap-2 text-copper-orange text-xs font-semibold">
                                <Wallet className="h-3.5 w-3.5 flex-shrink-0" />
                                <span>* Prévoir un portefeuille de ~50 € pour les outils d'IA</span>
                              </div>
                            )}
                          </div>
                          {atelier.link && (
                            <div className="mt-4 pt-4 border-t border-deep-blue/10" onClick={(e) => e.stopPropagation()}>
                              <a
                                href={atelier.link}
                                className="inline-flex items-center justify-center gap-3 w-full px-6 py-3.5 bg-copper-orange text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-deep-blue transition-all shadow-md hover:shadow-lg group/btn"
                              >
                                <span>{displayLinkText}</span>
                                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bouton pour afficher/masquer la présentation */}
                    <div className="mt-8 pt-6 border-t border-deep-blue/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => toggleAtelier(atelier.id)}
                        className={`w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center justify-center gap-3 transition-all cursor-pointer ${
                          isExpanded
                            ? 'bg-deep-blue text-white shadow-md'
                            : 'bg-copper-orange/10 hover:bg-copper-orange text-copper-orange hover:text-white'
                        }`}
                        aria-expanded={isExpanded}
                      >
                        <BookOpen className="h-4 w-4" />
                        <span>{isExpanded ? "Masquer la présentation" : "Présentation de cet atelier"}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        {!atelier.link ? (
                          <a
                            href={`/contact?subject=${encodeURIComponent(`Demande d'information - ${atelier.title}`)}`}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-deep-blue text-white text-xs font-black uppercase tracking-wider hover:bg-copper-orange transition-all shadow-md"
                          >
                            <span>Demander un devis (OPCO)</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                        ) : (
                          <a
                            href={atelier.link}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-copper-orange text-white text-xs font-black uppercase tracking-wider hover:bg-deep-blue transition-all shadow-md"
                          >
                            <span>Postuler</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Volet interactif : Présentation détaillée de l'atelier */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-deep-blue/10 mt-8 pt-8 space-y-6">
                            {/* Bloc narratif principal */}
                            <div className="bg-copper-orange/5 p-6 md:p-8 rounded-3xl border border-copper-orange/20">
                              <div className="flex items-center gap-2 mb-3">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-copper-orange text-white text-[11px] font-black uppercase tracking-wider">
                                  <Sparkles className="h-3 w-3" /> Présentation de l'atelier
                                </span>
                                <span className="text-xs text-copper-orange font-bold uppercase tracking-wider">
                                  {atelier.format}
                                </span>
                              </div>
                              <h4 className="text-xl md:text-2xl font-heading font-black text-deep-blue mb-3">
                                {atelier.presentation.tagline}
                              </h4>
                              <p className="text-deep-blue/85 leading-relaxed text-base">
                                {atelier.presentation.description}
                              </p>
                            </div>

                            {/* Grille : À qui s'adresse cet atelier + Pédagogie */}
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="bg-white p-6 rounded-3xl border border-deep-blue/10 shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="h-10 w-10 rounded-2xl bg-deep-blue/5 flex items-center justify-center text-copper-orange flex-shrink-0">
                                    <Users className="h-5 w-5" />
                                  </div>
                                  <h5 className="font-heading font-black text-deep-blue text-sm uppercase tracking-wider">
                                    À qui s'adresse cet atelier ?
                                  </h5>
                                </div>
                                <p className="text-deep-blue/80 text-sm leading-relaxed">
                                  {atelier.presentation.target}
                                </p>
                              </div>

                              <div className="bg-white p-6 rounded-3xl border border-deep-blue/10 shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="h-10 w-10 rounded-2xl bg-deep-blue/5 flex items-center justify-center text-copper-orange flex-shrink-0">
                                    <Target className="h-5 w-5" />
                                  </div>
                                  <h5 className="font-heading font-black text-deep-blue text-sm uppercase tracking-wider">
                                    La méthode pédagogique
                                  </h5>
                                </div>
                                <p className="text-deep-blue/80 text-sm leading-relaxed">
                                  {atelier.presentation.pedagogy}
                                </p>
                              </div>
                            </div>

                            {/* Compétences concrètes */}
                            <div className="bg-deep-blue/5 p-6 md:p-8 rounded-3xl">
                              <h5 className="font-heading font-black text-deep-blue text-sm md:text-base uppercase tracking-wider mb-4 flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-copper-orange" />
                                Ce que vous allez concrètement maîtriser
                              </h5>
                              <div className="grid md:grid-cols-2 gap-4">
                                {atelier.presentation.keyPoints.map((point, ptIdx) => (
                                  <div key={ptIdx} className="flex items-start gap-3 bg-white/80 p-4 rounded-2xl border border-deep-blue/5 shadow-xs">
                                    <div className="h-5 w-5 rounded-full bg-copper-orange/20 text-copper-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <CheckCircle2 className="h-3.5 w-3.5 text-copper-orange" />
                                    </div>
                                    <p className="text-xs md:text-sm font-medium text-deep-blue leading-snug">
                                      {point}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Carte dédiée : Livrables remis à l'issue de la formation */}
                            <div className="bg-white p-6 md:p-8 rounded-3xl border-2 border-copper-orange/30 shadow-md">
                              <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-copper-orange/10 text-copper-orange flex items-center justify-center flex-shrink-0">
                                  <PackageCheck className="h-6 w-6" />
                                </div>
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-black uppercase tracking-widest text-copper-orange">
                                      Livrables remis à l'issue de la formation
                                    </span>
                                  </div>
                                  <p className="text-deep-blue font-bold text-base md:text-lg leading-snug">
                                    {atelier.presentation.deliverablesDetailed}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Note budget outils IA le cas échéant */}
                            {atelier.presentation.toolBudgetNote && (
                              <div className="bg-amber-500/10 border border-amber-500/30 p-4 md:p-5 rounded-2xl flex items-center gap-3 text-deep-blue">
                                <div className="h-8 w-8 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center flex-shrink-0 font-black">
                                  *
                                </div>
                                <p className="text-xs md:text-sm font-medium text-deep-blue/90">
                                  <span className="font-bold text-deep-blue">Note pratique :</span> Néanmoins, il faut prévoir un portefeuille d'environ 50€ pour les abonnements et crédits aux outils d'IA utilisés durant le programme.
                                </p>
                              </div>
                            )}

                            {/* Barre d'action finale */}
                            <div className="p-6 md:p-8 bg-deep-blue text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
                              <div>
                                <p className="text-xs font-black uppercase tracking-widest text-copper-orange mb-1">
                                  Prêt à passer à l'action ?
                                </p>
                                <p className="text-sm text-white/80 font-medium">
                                  {atelier.link ? "Postulez pour rejoindre la prochaine session." : "Échangez avec l'équipe Alkymya pour monter votre dossier de prise en charge."}
                                </p>
                              </div>

                              <div className="flex items-center gap-3 w-full sm:w-auto flex-shrink-0">
                                {atelier.link ? (
                                  <a
                                    href={atelier.link}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-copper-orange text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-deep-blue transition-all shadow-lg w-full sm:w-auto text-center"
                                  >
                                    <span>{displayLinkText}</span>
                                    <ArrowRight className="h-4 w-4" />
                                  </a>
                                ) : (
                                  <a
                                    href={`/contact?subject=${encodeURIComponent(`Inscription - ${atelier.title}`)}`}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-copper-orange text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-deep-blue transition-all shadow-lg w-full sm:w-auto text-center"
                                  >
                                    <span>Demander un devis</span>
                                    <ArrowRight className="h-4 w-4" />
                                  </a>
                                )}
                                <button
                                  type="button"
                                  onClick={() => toggleAtelier(atelier.id)}
                                  className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                                  title="Refermer la présentation"
                                >
                                  <ChevronUp className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </Card>
            )})}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-copper-orange/10 rounded-[2.5rem] text-center border border-copper-orange/20"
          >
            <p className="text-xl text-deep-blue font-bold">
              <span className="text-copper-orange">Le conseil Alkymya :</span> Pour une transformation radicale de votre entreprise, vous avez la possibilité de combiner le Programme Core avec nos Options spécialisées.
            </p>
          </motion.div>
        </div>

        {/* Approach Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-4xl font-heading font-black text-deep-blue mb-8">
              L'approche Alkymya : <span className="text-copper-orange">Apprendre par l'action</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Oubliez la théorie abstraite. Notre pédagogie repose sur le <span className="text-deep-blue font-bold italic">"Learning by Doing"</span> : 50% de la formation est dédiée à la pratique immédiate sur vos propres projets d'entreprise.
              </p>
              <p>
                Vous ne repartez pas seulement avec des connaissances, mais avec des livrables concrets et exploitables dès le premier jour.
              </p>
            </div>
            <div className="mt-10 p-6 bg-copper-orange/5 border-l-4 border-copper-orange rounded-r-2xl">
              <p className="text-sm font-bold text-copper-orange uppercase tracking-widest mb-1">Impact Immédiat</p>
              <p className="text-deep-blue font-medium italic">"Transformer l'intention en expertise opérationnelle."</p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="relative aspect-[9/16] w-full max-w-[320px] rounded-[3rem] overflow-hidden shadow-2xl bg-black group border-8 border-white/10 text-left outline-none cursor-zoom-in"
            >
              <video 
                src="https://res.cloudinary.com/dokzioyu4/video/upload/v1773762338/DraftResource_1763735958.541805_atgbsl.mov"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                autoPlay
                muted
                loop
                playsInline
              />
            </button>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-copper-orange mb-4 block">Retours d'expérience</span>
            <h2 className="text-4xl font-heading font-black text-deep-blue">Ce qu'ils en <span className="text-copper-orange">disent</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white border border-deep-blue/5 shadow-xl shadow-deep-blue/5 rounded-[2.5rem] flex flex-col h-full hover:border-copper-orange/30 transition-all duration-500"
              >
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-copper-orange/20 fill-copper-orange/10" />
                </div>
                <p className="text-deep-blue/80 font-medium italic leading-relaxed mb-8 flex-grow">
                  "{t.quote}"
                </p>
                <div className="pt-6 border-t border-deep-blue/5">
                  <p className="font-black text-deep-blue text-sm uppercase tracking-widest">{t.author}</p>
                  {t.role && <p className="text-xs font-bold text-copper-orange uppercase tracking-widest mt-1 opacity-70">{t.role}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white border border-deep-blue/5 rounded-[3rem] p-12 shadow-2xl">
          <h2 className="text-3xl font-heading font-black text-deep-blue mb-6">Prêt à transformer votre entreprise ?</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">Contactez-nous pour une étude personnalisée de votre budget de formation et de vos besoins opérationnels.</p>
          <a
            href="https://studio--studio-4311061048-923d4.us-central1.hosted.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-copper-orange text-white rounded-full font-black uppercase text-sm tracking-widest hover:bg-deep-blue transition-all shadow-xl"
          >
            Réserver votre formation
          </a>
        </div>
      </div>
    </div>
  );
}
