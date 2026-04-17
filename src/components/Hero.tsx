import { motion } from 'motion/react';
import Logo from './Logo';

const pillars = [
  { name: 'Explorer', description: 'Découvrir de nouveaux horizons artistiques et environnementaux.' },
  { name: 'Partager', description: 'Transmettre des savoirs et des émotions au sein de la communauté.' },
  { name: 'Transformer', description: 'Agir pour un futur durable à travers la création.' },
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
          L'art de la <span className="text-copper-orange">transformation</span> durable.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-normal leading-relaxed">
          <Logo className="h-[1.2em]" /> fusionne créativité et conscience environnementale pour explorer de nouvelles manières de vivre et de partager.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-12">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/50 border border-border/50 backdrop-blur-sm hover:border-accent/30 transition-all group"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 group-hover:text-deep-green transition-colors">
              Pillier {index + 1}
            </span>
            <h3 className="text-3xl font-heading font-bold mb-4 text-deep-blue">{pillar.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-normal">
              {pillar.description}
            </p>
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
