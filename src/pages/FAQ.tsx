import { motion } from "motion/react";
import { Plus, Minus, HelpCircle, BookOpen, Wrench, BarChart, Users, Zap, Mail } from "lucide-react";
import { useState, ReactNode, useMemo } from "react";
import { SEO } from "../components/SEO";

interface FAQData {
  question: string;
  answer: string | ReactNode;
}

interface FAQCategory {
  title: string;
  icon: any;
  items: FAQData[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "Comprendre la Génération IA",
    icon: HelpCircle,
    items: [
      {
        question: "Qu'est-ce que la Génération IA ?",
        answer: (
          <div className="space-y-4">
            <p>La Génération IA désigne les jeunes professionnels qui grandissent avec ChatGPT et apprivoisent le pouvoir des intelligences artificielles au quotidien. Contrairement aux générations précédentes qui ont dû s'adapter au digital, cette génération intègre naturellement l'IA dans leur flux de travail et leurs études.</p>
            <p className="font-bold text-deep-blue">Les caractéristiques de la Génération IA :</p>
            <p>Notre étude Alkymya 2024 le montre : ces jeunes font de l'IA leur nouvel outil, avec talent et inventivité. Ils développent trois compétences distinctives :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-bold">Adoption native :</span> Ils utilisent spontanément les outils d'IA générative (ChatGPT, Midjourney, Claude) dans leurs projets académiques et professionnels.</li>
              <li><span className="font-bold">Compétences hybrides :</span> Ils combinent maîtrise technique (prompt engineering) et esprit critique (vérification des sources).</li>
              <li><span className="font-bold">Vision pragmatique :</span> Pour eux, l'IA n'est ni une menace ni une magie, mais un levier de productivité à maîtriser.</li>
            </ul>
            <p className="font-bold text-deep-blue">Les défis à relever :</p>
            <p>Mais derrière les superpouvoirs, il y a aussi le vertige : risque de perte d'emplois, transformation des métiers, et nécessité de se réinventer en continu. Partager avec eux, c'est essentiel : leur donner les clés pour rester humains, développer leur esprit critique et construire leur propre trajectoire dans un monde où tout s'accélère.</p>
            <p><a href="/ia" className="text-copper-orange hover:underline">En savoir plus : Consultez notre Étude Génération IA 2024 pour approfondir.</a></p>
          </div>
        )
      },
      {
        question: "Qu'est-ce que l'Étude Génération IA 2024 d'Alkymya ?",
        answer: (
          <div className="space-y-4">
            <p>L'Étude Génération IA 2024 est un rapport complet sur les comportements, attentes et compétences des jeunes face à l'intelligence artificielle, réalisé par Alkymya.</p>
            <p className="font-bold text-deep-blue">Contenu de l'étude :</p>
            <p>Cette recherche analyse en profondeur comment la nouvelle génération utilise l'IA au quotidien, les défis qu'elle rencontre, et les transformations des métiers à venir. Elle s'adresse particulièrement aux :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Professionnels RH et DRH : pour comprendre les attentes des futurs talents.</li>
              <li>Responsables formation : pour adapter les programmes pédagogiques.</li>
              <li>Managers : pour mieux encadrer cette nouvelle génération.</li>
            </ul>
            <p className="italic">Nous préparons actuellement l'Étude Génération IA 2026. Vous pouvez contribuer en participant à l'étude.</p>
          </div>
        )
      },
      {
        question: "Pourquoi les entreprises doivent-elles s'intéresser à la Génération IA ?",
        answer: (
          <div className="space-y-4">
            <p>C'est aux entreprises d'inventer de nouvelles stratégies, de créer du lien et de miser sur les talents de cette génération frontalière du futur.</p>
            <p className="font-bold text-deep-blue">Trois raisons stratégiques :</p>
            <ul className="list-decimal pl-5 space-y-2">
              <li><span className="font-bold">Transformation des compétences :</span> La Génération IA possède déjà des compétences que vos équipes actuelles devront acquérir rapidement. Les former aujourd'hui, c'est préparer votre organisation aux mutations de demain.</li>
              <li><span className="font-bold">Nouvelles attentes professionnelles :</span> Cette génération recherche des environnements de travail qui intègrent l'IA de manière éthique et productive. Comprendre leurs attentes permet d'améliorer votre attractivité employeur.</li>
              <li><span className="font-bold">Innovation accélérée :</span> En maîtrisant l'IA dès leur formation, ces jeunes talents peuvent devenir des catalyseurs d'innovation dans vos équipes, à condition de leur donner le bon cadre.</li>
            </ul>
            <p><span className="font-bold">Notre approche chez Alkymya :</span> Nous aidons les organisations et les jeunes à inventer ensemble un monde où l'IA est un levier, pas juste un défi. Notre mission de partage passe par trois piliers : Explorer, Transformer, Partager.</p>
          </div>
        )
      }
    ]
  },
  {
    title: "Nos Formations et Ateliers",
    icon: BookOpen,
    items: [
      {
        question: "Quels types de formations propose Alkymya ?",
        answer: "Alkymya propose une expertise complète pour transformer votre organisation avec l'IA, structurée autour de trois piliers : Explorer (formations sur-mesure), Transformer (prototypage et intégration de l'IA), et Partager (conseil stratégique et mentorat)."
      },
      {
        question: "Qu'est-ce que l'atelier \"Ateliers d'Innovation IA\" ?",
        answer: "Les Ateliers d'Innovation IA sont des sprints intensifs de 2 jours pour transformer vos idées en prototypes fonctionnels grâce à l'IA générative."
      },
      {
        question: "En quoi consiste la formation \"L'IA pour les Pros\" ?",
        answer: "\"L'IA pour les Pros\" est une formation 100% opérationnelle pour gagner en productivité avec les versions professionnelles des outils d'IA."
      },
      {
        question: "Qu'est-ce que le projet Métropolia ?",
        answer: "Métropolia est un projet pédagogique et créatif sous la forme d'une dystopie cyberpunk. C'est une série narrative qui suit un personnage nommé LEONIE & LEONIA, explorant une dualité mystérieuse, inspirée par l'univers de Fritz Lang. Le projet est visible sur YouTube."
      },
      {
        question: "Quels établissements font confiance à Alkymya ?",
        answer: "Alkymya collabore avec les plus grandes écoles françaises (HEC Paris, ESCP, emlyon, IÉSEG, HETIC, etc.) et des entreprises innovantes."
      }
    ]
  },
  {
    title: "Outils Gratuits Alkymya",
    icon: Wrench,
    items: [
      {
        question: "Qu'est-ce que le Quiz Maturité IA Entreprise ?",
        answer: "C'est un outil de diagnostic stratégique qui permet aux entreprises d'évaluer leur niveau d'adoption de l'IA. Il aide à identifier les opportunités, les freins et à définir une feuille de route pour une transformation numérique réussie."
      },
      {
        question: "Qu'est-ce que l'Analyseur de CV d'Alkymya ?",
        answer: "L'Analyseur de CV est un outil IA gratuit pour optimiser votre CV et maximiser vos chances de décrocher le poste de vos rêves."
      },
      {
        question: "Qu'est-ce que le Business Game 'NoNo BanaBa' ?",
        answer: "C'est un business game pédagogique où vous explorez la data, le web-marketing et les business modèles à travers une marque de mode fictive pour la Gen Z. C'est un excellent outil pour appliquer des concepts théoriques de manière ludique."
      },
      {
        question: "À quoi sert 'Soda, l'agent IA pédagogique' ?",
        answer: "Soda est un agent IA qui agit comme un véritable coach pour vous aider dans vos projets d'analyse de marché, d'innovation produit ou service. C'est un outil puissant pour les étudiants et entrepreneurs, qui nécessite un compte Genspark pour être utilisé."
      },
      {
        question: "Existe-t-il une boutique de goodies Alkymya ?",
        answer: (
          <p>
            Oui ! Vous pouvez retrouver nos t-shirts, mugs et accessoires exclusifs sur notre boutique en ligne : <a href="https://shop.alkymya.co/" target="_blank" rel="noopener noreferrer" className="text-copper-orange hover:underline">https://shop.alkymya.co/</a>. C'est le meilleur moyen d'afficher votre appartenance à la communauté des alchimistes de l'IA.
          </p>
        )
      },
      {
        question: "Où trouver des tutoriels et formations gratuites sur l'IA ?",
        answer: "La Chaîne YouTube Alkymya propose des tutoriels, formations et analyses sur l'IA, l'innovation et la transformation digitale."
      }
    ]
  },
  {
    title: "Résultats et Impact",
    icon: BarChart,
    items: [
      {
        question: "Quels sont les résultats concrets des formations Alkymya ?",
        answer: "Nos chiffres clés : 99,3% des participants recommandent nos formations, 175 apprenants accompagnés en 2024-2025, 90,9% se sentent plus performants après la formation."
      }
    ]
  },
  {
    title: "L'Équipe Alkymya",
    icon: Users,
    items: [
      {
        question: "Qui est Cyril Garnier, fondateur d'Alkymya ?",
        answer: "Cyril Garnier est le fondateur d'Alkymya, expert en IA et innovation avec une quadruple expertise : enseignant en grandes écoles, advisory de startups, spécialiste IA, et photographe."
      }
    ]
  },
  {
    title: "Quiz IA",
    icon: Zap,
    items: [
      {
        question: "Qu'est-ce qu'une IA Générative ?",
        answer: "C'est une IA capable de créer du contenu original (texte, image, son). L'IA générative, comme GPT ou Midjourney, ne se contente pas d'analyser des données, elle en produit de nouvelles."
      },
      {
        question: "Qu'est-ce que le 'prompt engineering' ?",
        answer: "C'est l'art de formuler des instructions précises pour une IA afin d'obtenir le meilleur résultat. C'est une compétence clé pour interagir efficacement avec les IA génératives."
      },
      {
        question: "Quand ChatGPT a-t-il été lancé ?",
        answer: "ChatGPT a été lancé par OpenAI le 30 novembre 2022. Cette date est souvent considérée comme le point de départ de l'adoption massive de l'IA générative par le grand public."
      },
      {
        question: "À quoi sert un 'token' dans un modèle de langage (LLM) ?",
        answer: "Un token représente un morceau de texte (un mot, un caractère ou un sous-mot) que l'IA traite. La taille de la 'fenêtre de contexte' d'une IA est mesurée en tokens, ce qui limite la quantité d'information qu'elle peut gérer en une fois."
      },
      {
        question: "Qu'est-ce qu'une 'hallucination' pour une IA ?",
        answer: "C'est lorsque l'IA invente une information qui semble plausible mais qui est fausse ou non vérifiée. C'est un point de vigilance majeur qui impose une vérification humaine."
      },
      {
        question: "Que signifie l'acronyme LLM ?",
        answer: "LLM signifie Large Language Model (Grand Modèle de Langage). Il s'agit d'une catégorie d'IA entraînée sur d'immenses quantités de texte pour comprendre et générer du langage naturel (ex: GPT-4, Claude 3)."
      }
    ]
  },
  {
    title: "Nous Contacter",
    icon: Mail,
    items: [
      {
        question: "Comment contacter Alkymya pour une formation ou un projet ?",
        answer: "Pour toute demande, le plus simple est de remplir notre formulaire de contact ou d'envoyer un email à cyril@alkymya.co."
      },
      {
        question: "Alkymya propose-t-il des formations à distance ?",
        answer: "Nous privilégions les formats présentiels interactifs, mais nous proposons aussi des ressources en ligne et pouvons étudier des formats hybrides."
      }
    ]
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string | ReactNode, isOpen: boolean, onClick: () => void, key?: any }) {
  return (
    <div className="border-b border-deep-blue/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-xl font-heading font-black text-deep-blue group-hover:text-copper-orange transition-colors pr-8">
          {question}
        </span>
        <div className={`p-2 rounded-full flex-shrink-0 transition-all ${isOpen ? 'bg-copper-orange text-white' : 'bg-muted text-deep-blue'}`}>
          {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pb-6 text-lg text-muted-foreground leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  const [openStates, setOpenStates] = useState<{ [key: string]: number | null }>({});

  const flattenedFaq = useMemo(() => {
    return faqCategories.flatMap(cat => 
      cat.items.map(item => ({
        question: item.question,
        answer: typeof item.answer === 'string' ? item.answer : 'Consultez notre FAQ pour plus de détails.'
      }))
    );
  }, []);

  const toggleItem = (categoryTitle: string, index: number) => {
    setOpenStates(prev => ({
      ...prev,
      [categoryTitle]: prev[categoryTitle] === index ? null : index
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24"
    >
      <SEO type="FAQPage" faqData={flattenedFaq} />
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="max-w-4xl mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 text-deep-blue">
            Toutes vos questions sur <span className="text-copper-orange">Alkymya</span>
          </h1>
          <p className="text-xl text-muted-foreground font-normal leading-relaxed">
            Découvrez comment Alkymya partage avec la Génération IA le chemin vers l'excellence : formations, outils gratuits, et expertise en intelligence artificielle pour grandes écoles et entreprises.
          </p>
        </div>

        <div className="space-y-12">
          {faqCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-copper-orange/10 rounded-2xl">
                    <Icon className="h-8 w-8 text-copper-orange" />
                  </div>
                  <h2 className="text-3xl font-heading font-black text-deep-blue">{category.title}</h2>
                </div>
                
                <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-deep-blue/5 shadow-2xl shadow-deep-blue/5">
                  {category.items.map((item, index) => (
                    <FAQItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openStates[category.title] === index}
                      onClick={() => toggleItem(category.title, index)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center bg-deep-blue rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-copper-orange/20 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-heading font-black text-white mb-6">
              Vous n'avez pas trouvé votre réponse ?
            </h3>
            <p className="text-white/70 text-lg mb-12">
              Contactez-nous directement, nous serons ravis de vous aider.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="/contact"
                className="px-12 py-5 bg-copper-orange text-white rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-copper-orange transition-all shadow-xl"
              >
                Parlons-en
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
