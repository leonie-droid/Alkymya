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
        answer: "Alkymya propose une expertise complète pour transformer votre organisation avec l'IA, structurée autour de trois piliers : Explorer (formations sur-mesure et acculturation), Transformer (prototypage rapide, agents IA et intégration no-code), et Partager (conseil stratégique, mentorat et transmission)."
      },
      {
        question: "Qu'est-ce que le programme \"Formation Core IA\" (Best Value) ?",
        answer: "La Formation Core est notre programme complet de 14h réparties sur 4 demi-journées pour maîtriser la stack IA (prompt engineering avancé, studio graphique & branding, rédaction stratégique, synthèse décisionnelle et prototypage audiovisuel). Elle est certifiée Qualiopi via notre partenaire INATEC et finançable jusqu'à 100% par votre OPCO."
      },
      {
        question: "En quoi consistent les options \"Agents IA\" et \"App No-Code\" ?",
        answer: "Ce sont deux ateliers intensifs de 3h30 (500 € HT chacun) : l'Option A permet de concevoir et déployer 3 agents intelligents autonomes interconnectés à vos outils (Slack, Notion, CRM via Make/Zapier) ; l'Option B permet de concevoir une application web interne sur-mesure dopée aux API d'IA (Gemini/GPT) sans écrire de code."
      },
      {
        question: "Qu'est-ce que l'offre \"New business MVP\" (studio new business) ?",
        answer: (
          <div className="space-y-3">
            <p>
              Le programme <strong>New business MVP</strong> est un accompagnement opérationnel de 6 mois conçu pour permettre aux porteurs de projets, créateurs d'entreprise et indépendants de tester et valider leur offre auprès de vrais clients avant d'engager des investissements lourds.
            </p>
            <p>
              Guidé en binôme par <strong>Cyril Garnier</strong> et <strong>Léonie Egesipe</strong>, ce parcours pas à pas vous permet de :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-deep-blue/85">
              <li>Définir avec précision votre <strong>profil client idéal (ICP)</strong> et ses habitudes réelles de dépenses.</li>
              <li>Distinguer l'essentiel du superflu pour bâtir un <strong>MVP (produit minimum viable)</strong> percutant.</li>
              <li>Mettre en place un <strong>pricing optimal</strong> et structurer votre <strong>routine entrepreneuriale</strong>.</li>
              <li>Construire un <strong>pitch convaincant pour investisseurs et partenaires</strong> fondé sur des retours terrain concrets.</li>
              <li>Piloter vos décisions stratégiques grâce au cadre <strong>« Continuer, Pivoter ou Accélérer »</strong>.</li>
            </ul>
            <p>
              Tarif : <strong>200 € / mois</strong> pendant 6 mois, avec mentorat direct en binôme par <strong>Cyril Garnier</strong> et <strong>Léonie Egesipe</strong>.
            </p>
            <p className="text-sm bg-copper-orange/10 p-3 rounded-xl text-deep-blue font-medium">
              * Note pratique : il convient de prévoir un portefeuille d'environ 50 € à 150 € pour les abonnements et crédits aux outils d'IA utilisés durant les ateliers pratiques.
            </p>
          </div>
        )
      },
      {
        question: "Les formations Alkymya sont-elles finançables par un OPCO ?",
        answer: "Oui ! Portée en partenariat avec l'école INATEC et disposant de la certification d'État Qualiopi, votre formation chez Alkymya est finançable jusqu'à 100% par votre OPCO, selon vos droits et votre budget de formation disponible."
      },
      {
        question: "Quels établissements et entreprises font confiance à Alkymya ?",
        answer: "Alkymya collabore avec des établissements prestigieux (HETIC, Ynov, IÉSEG, CFA Itis, Paris École de Management, etc.) et de nombreuses entreprises et institutions (SNCF, Fondation GRDF, Morning, Sealester, INATEC, Objectif Alternance)."
      },
      {
        question: "Qu'est-ce que le projet Métropolia ?",
        answer: "Métropolia est un projet pédagogique et créatif sous la forme d'une dystopie cyberpunk. C'est une série narrative créée avec l'IA qui suit un personnage nommé LEONIE & LEONIA, explorant une dualité mystérieuse inspirée par l'univers de Fritz Lang, visible sur notre chaîne YouTube."
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
        answer: (
          <span>
            L'Analyseur de CV est un outil IA gratuit pour optimiser votre CV et maximiser vos chances de décrocher le poste de vos rêves. Pour aller plus loin avec un accompagnement sur-mesure en recrutement et alternance, découvrez les programmes de notre Alchimiste <strong>Kendra Martine</strong> sur son site <a href="https://www.objectifalternance.fr/" target="_blank" rel="noopener noreferrer" className="text-copper-orange font-bold hover:underline">Objectif Alternance</a>.
          </span>
        )
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
    <div className="border-b border-[rgba(31,79,110,0.08)] last:border-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left group cursor-pointer"
      >
        <span className="text-[1.05rem] sm:text-[1.12rem] font-medium text-[#1F4F6E] group-hover:text-[#02ADAB] transition-colors pr-8">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0 transition-all ${isOpen ? 'bg-[#C06721] text-white' : 'bg-[#f4f6f9] text-[#1F4F6E]'}`}>
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pb-5 text-[0.95rem] text-[#5a7a90] leading-[1.65] font-normal">
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
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO type="FAQPage" faqData={flattenedFaq} />

      {/* HERO SECTION */}
      <header className="bg-[#1F4F6E] text-white py-20 px-6 sm:px-10 text-center relative overflow-hidden">
        <div className="max-w-[700px] mx-auto relative z-10">
          <p className="text-[0.85rem] tracking-[0.15em] uppercase text-[#02ADAB] mb-4 font-normal">
            Foire aux Questions · Alkymya
          </p>
          <h1 className="font-light text-[2.4rem] sm:text-[2.6rem] leading-[1.2] mb-5 text-white">
            Toutes vos questions sur<br />
            <strong className="font-medium text-white">nos expertises &amp; formations.</strong>
          </h1>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-white/75 max-w-[620px] mx-auto leading-[1.7] font-light mb-8">
            Formations certifiées Qualiopi, financements OPCO, accompagnement New Business MVP et outils libres : retrouvez ici les réponses directes et pragmatiques à vos questions.
          </p>

          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">4</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Thématiques majeures</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">100%</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Transparence &amp; Clarté</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">Qualiopi</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Conformité OPCO</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">&lt; 24h</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Assistance par mail</div>
            </div>
          </div>
        </div>
      </header>

      {/* ACCORDÉONS FAQ */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <div className="space-y-12">
          {faqCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className="relative">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-10 h-10 rounded-[8px] bg-[rgba(2,173,171,0.1)] flex items-center justify-center text-[#02ADAB]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-[1.4rem] sm:text-[1.6rem] font-light text-[#1F4F6E]">
                    <strong className="font-medium">{category.title}</strong>
                  </h2>
                </div>
                
                <div className="bg-white rounded-[12px] p-6 sm:p-8 shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
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
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* CTA FINAL : BANNIÈRE ORANGE #C06721 */}
      <div className="bg-[#C06721] text-white text-center py-[70px] px-10">
        <h2 className="text-[2rem] font-light mb-3.5 text-white">
          Vous n'avez pas trouvé <strong className="font-medium text-white">votre réponse ?</strong>
        </h2>
        <p className="text-[1.05rem] text-white/80 max-w-[540px] mx-auto mb-8 leading-[1.7] font-light">
          Contactez-nous directement. Nous prenons le temps d'étudier votre cas spécifique et de vous orienter vers la solution la plus adaptée.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="inline-block bg-white text-[#C06721] text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
          >
            Poser ma question à l'équipe →
          </a>
          <a
            href="mailto:contact@alkymya.co"
            className="inline-block bg-white/10 hover:bg-white/20 text-white text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 border border-white/25"
          >
            Écrire par email
          </a>
        </div>
      </div>
    </div>
  );
}
