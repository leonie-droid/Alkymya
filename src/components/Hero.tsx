import { motion } from 'motion/react';

const pillars = [
  { 
    name: 'Explorer', 
    description: "Formations sur-mesure et ateliers pratiques pour démystifier l'IA et explorer son potentiel pour votre activité.",
    points: [
      "Formations grandes écoles & entreprises",
      "Ateliers pratiques \"IA pour les pros\"",
      "Approche pédagogique moderne",
      "Veille et inspiration IA"
    ]
  },
  { 
    name: 'Partager', 
    description: "Conseil stratégique et mentorat pour intégrer l'IA, développer les talents et partager la transformation de vos équipes.",
    points: [
      "Recrutement et évaluation de talents",
      "Programme de mentorat personnalisé",
      "Développement des compétences IA",
      "Conduite du changement"
    ]
  },
  { 
    name: 'Transformer', 
    description: "Du conseil à la réalisation. Nous vous aidons à passer de l'idée au prototype fonctionnel en intégrant l'IA au cœur de vos processus.",
    points: [
      "Advisory pour startup et scale-up",
      "Ateliers de prototypage rapide",
      "Stratégie d'intégration de l'IA",
      "Transformation digitale sur-mesure"
    ]
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-deep-green/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-copper-orange/10 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-6xl md:text-8xl font-heading font-black tracking-tighter mb-8 leading-tight text-deep-blue">
          L'art de la <span className="text-copper-orange">transformation</span> IA.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-normal leading-relaxed">
          Alkymya fusionne créativité et expertise technologique pour partager la Génération IA vers l'excellence.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mt-12">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col p-10 rounded-[2.5rem] bg-white shadow-xl shadow-deep-blue/5 border border-deep-blue/5 hover:border-copper-orange/30 transition-all group"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-copper-orange mb-6 text-center">
              Pillier {index + 1}
            </span>
            <h3 className="text-3xl font-heading font-black mb-6 text-deep-blue text-center">{pillar.name}</h3>
            <p className="text-base text-muted-foreground leading-relaxed font-medium mb-8 text-center px-2">
              {pillar.description}
            </p>
            <ul className="space-y-4 mt-auto">
              {pillar.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-bold text-deep-blue/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-copper-orange mt-1.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-16"
      >
        <div className="w-px h-24 bg-gradient-to-b from-copper-orange to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
