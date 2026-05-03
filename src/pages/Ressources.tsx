import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

const categories = ["Toutes", "Nos Analyseurs"];

const resources = [
  {
    id: 1,
    title: "Analyseur de photo",
    category: "Nos Analyseurs",
    description: "Analyseur de photo vous permet d'explorer, de retoucher et de métamorphoser vos images en un instant.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1773761166/46b26247d1084cb39b354fe4c9842b29_aszzay_f48sjs.mov"
  },
  {
    id: 2,
    title: "Analyseur de CV",
    category: "Nos Analyseurs",
    description: "Analyseur de CV, avec cet outil analyser et modifier votre CV.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1773762096/c599dc6cd0ef4e6196a739c87b2cb773_gxn0lj.mov"
  },
  {
    id: 3,
    title: "Analyseur de mémoire",
    category: "Nos Analyseurs",
    description: "Analyseur de mémoire, parfait pour analyser tout le contenu d'un mémoire.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1776374160/bac00848173641fd882d43dc3b970835_jtyspz.mov"
  }
];

export default function Ressources() {
  const [activeCategory, setActiveCategory] = useState("Toutes");

  const filteredResources = activeCategory === "Toutes" 
    ? resources 
    : resources.filter(res => res.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-12 pb-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-copper-orange mb-6 block">
              Bibliothèque Alkymya
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 text-deep-blue leading-tight">
              Nos <span className="text-copper-orange">Ressources</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              Bienvenue dans notre espace dédié au partage et à l'expérimentation. Chez Alkymya, nous croyons que la puissance de l'Intelligence Artificielle réside dans ses applications concrètes et sa capacité à simplifier notre quotidien professionnel.
            </p>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 border",
                activeCategory === category 
                  ? "bg-deep-blue text-white border-deep-blue shadow-lg" 
                  : "bg-transparent text-deep-blue border-deep-blue/20 hover:border-deep-blue"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* resources Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredResources.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <div className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-black mb-6 shadow-xl transition-transform duration-500 group-hover:-translate-y-2 border-8 border-white/5 ring-1 ring-deep-blue/5">
                  <video 
                    src={item.url} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                    controls
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 pointer-events-none">
                    <span className="text-turquoise text-xs font-bold tracking-widest uppercase mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-2xl text-white font-heading font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="text-2xl font-heading font-black text-deep-blue mb-3 group-hover:text-copper-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed font-medium italic border-l-2 border-copper-orange/30 pl-4">
                    "{item.description}"
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
