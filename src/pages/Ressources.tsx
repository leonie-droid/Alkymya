import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { Volume2, VolumeX, Maximize2 } from 'lucide-react';

const categories = ["Toutes", "Nos Analyseurs", "Nos études", "Business Game", "Agents"];

const resources = [
  {
    id: 1,
    title: "Analyseur de photo",
    category: "Nos Analyseurs",
    description: "Analyseur de photo vous permet d'explorer, de retoucher et de métamorphoser vos images en un instant.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1773761166/46b26247d1084cb39b354fe4c9842b29_aszzay_f48sjs.mov",
    appUrl: "https://analyseurdephoto.alkymya.co/",
    type: "video"
  },
  {
    id: 2,
    title: "Analyseur de CV",
    category: "Nos Analyseurs",
    description: "Outil IA gratuit pour optimiser votre CV et maximiser vos chances de décrocher le poste de vos rêves.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1773762096/c599dc6cd0ef4e6196a739c87b2cb773_gxn0lj.mov",
    appUrl: "https://analysercvpro.alkymya.co/",
    type: "video"
  },
  {
    id: 3,
    title: "Analyseur de mémoire",
    category: "Nos Analyseurs",
    description: "Outil puissant pour analyser en profondeur les mémoires et thèses. (Bientôt en version payante)",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1776374160/bac00848173641fd882d43dc3b970835_jtyspz.mov",
    appUrl: "https://analyseurdememoire.alkymya.co/",
    type: "video"
  },
  {
    id: 6,
    title: "Génération IA 2026",
    category: "Nos études",
    description: "Notre tout nouveau rapport complet sur l'impact futur, les usages et l'évolution de l'intelligence artificielle générative pour 2026.",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1780148789/rapport-generation-ia-2026_v10_20260528_tymyph.pdf",
    type: "pdf"
  },
  {
    id: 7,
    title: "Génération IA 2025",
    category: "Nos études",
    description: "Une segmentation approfondie en 5 profils types (personas) pour refléter la diversité des usages et des niveaux de maîtrise de l'IA générative.",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1777491985/generation_ia_2025_personas_20251105051526_qvl18j_1_jjn9s4.pdf",
    type: "pdf"
  },
  {
    id: 8,
    title: "Génération IA 2024",
    category: "Nos études",
    description: "Une analyse empirique détaillée sur l'introduction et l'usage des outils d'intelligence artificielle auprès de centaines d'étudiants de l'enseignement supérieur.",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1777491668/Generation_IA-2024-V1_Mars_2025_2_cxtaeh_ygnyce.pdf",
    type: "pdf"
  },
  {
    id: 4,
    title: "NoNo BanaBa",
    category: "Business Game",
    description: "Au travers de la marque fashion de la Gen Z, explorez la data, le web-marketing et les business modèles...",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1777905236/Vide%CC%81o_publicitaire_e%CC%81lectro_pop_cre%CC%81e%CC%81e_oydyo3_xxtwtb.mp4",
    appUrl: "https://nonobanaba.netlify.app/",
    type: "video"
  },
  {
    id: 5,
    title: "SODA",
    category: "Agents",
    description: "SODA est une IA spécialisée conçue pour l'accompagnement et l'analyse stratégique. Découvrez notre agent super-intelligent.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1779116439/f_ea_e_f_f_a_f_a_e_cbe_f_cmp__gxlwhw.mp4",
    appUrl: "https://www.genspark.ai/agents?type=custom_super_agent&agent_id=20503058-4b49-40f7-b277-b38c21724a41",
    type: "video"
  }
];

export default function Ressources() {
  const [activeCategory, setActiveCategory] = useState("Toutes");
  const [selectedResource, setSelectedResource] = useState<{url: string, type: string} | null>(null);

  // Lock scroll when video or app is open
  useEffect(() => {
    if (selectedResource) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedResource]);

  const [unmutedIds, setUnmutedIds] = useState<Set<number>>(new Set());

  const toggleMute = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setUnmutedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredResources = activeCategory === "Toutes" 
    ? resources 
    : resources.filter(res => res.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-12 pb-24"
    >
      <AnimatePresence>
        {selectedResource && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedResource(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={cn(
                "relative w-full max-w-4xl h-auto max-h-[90vh] flex flex-col items-center justify-center",
                selectedResource.type === "video" ? "aspect-video md:aspect-[9/16] md:w-[450px]" : "h-[85vh] md:h-[90vh] max-w-6xl"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-14 right-0 text-white bg-copper-orange rounded-full p-3 shadow-xl hover:scale-110 transition-transform z-[110]"
                onClick={() => setSelectedResource(null)}
                aria-label="Fermer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10">
                {selectedResource.type === "video" ? (
                  <video
                    src={selectedResource.url}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <iframe
                    src={selectedResource.url}
                    className="w-full h-full bg-white"
                    title="Business Game App"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="max-w-4xl mb-16 pt-12">
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
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12"
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
                <div 
                  className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl bg-black mb-6 shadow-xl transition-transform duration-500 group-hover:-translate-y-2 border-8 border-white/5 ring-1 ring-deep-blue/5 text-left outline-none cursor-pointer"
                  onClick={() => {
                    if (item.type === 'pdf') {
                      window.open(item.url, '_blank');
                    } else {
                      setSelectedResource({ url: item.url, type: item.type || 'video' });
                    }
                  }}
                >
                  {item.type === 'pdf' ? (
                    <div className="w-full h-full bg-deep-blue flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 blur-[100px] -mr-24 -mt-24 group-hover:bg-accent/45 transition-colors" />
                      <div className="w-20 h-20 rounded-2xl bg-accent/25 flex items-center justify-center mb-6 relative z-10 transition-transform duration-500 group-hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                      </div>
                      <span className="text-white text-3xl font-heading font-black mb-3 relative z-10 block leading-tight">{item.title}</span>
                      <span className="text-accent text-[10px] font-black uppercase tracking-[0.25em] relative z-10">Lancer l'étude (.pdf) →</span>
                    </div>
                  ) : item.type === 'app' ? (
                    <div className="w-full h-full bg-deep-blue flex flex-col items-center justify-center p-8 text-center">
                      <div className="w-20 h-20 rounded-2xl bg-turquoise/20 flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-turquoise"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                      </div>
                      <span className="text-white text-xl font-bold font-heading mb-2">Application Interactive</span>
                      <span className="text-turquoise text-sm font-medium">Lancer le Business Game</span>
                    </div>
                  ) : (
                    <>
                      <video 
                        src={item.url} 
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 pointer-events-none"
                        autoPlay
                        muted={!unmutedIds.has(item.id)}
                        loop
                        playsInline
                      />
                      {/* Audio Toggle */}
                      <button
                        onClick={(e) => toggleMute(e, item.id)}
                        className="absolute bottom-4 left-4 z-20 bg-black/40 backdrop-blur-md text-white p-2.5 rounded-full border border-white/10 hover:bg-copper-orange transition-all duration-300 opacity-0 group-hover:opacity-100"
                        title={unmutedIds.has(item.id) ? "Couper le son" : "Activer le son"}
                      >
                        {unmutedIds.has(item.id) ? (
                          <Volume2 className="w-5 h-5" />
                        ) : (
                          <VolumeX className="w-5 h-5" />
                        )}
                      </button>
                      
                      {/* Zoom Indicator */}
                      <div className="absolute bottom-4 right-4 z-20 bg-white/10 backdrop-blur-md text-white p-2.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 pb-16">
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
                  <div className="space-y-4">
                    <p className="text-base text-muted-foreground leading-relaxed font-medium italic border-l-2 border-copper-orange/30 pl-4">
                      "{item.description}"
                    </p>
                    {item.type === 'pdf' ? (
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-black text-copper-orange hover:text-deep-blue transition-colors group/link"
                      >
                        Télécharger le rapport (PDF)
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="ml-2 transition-transform group-hover/link:translate-x-1"
                        >
                          <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                        </svg>
                      </a>
                    ) : item.appUrl && (
                      <a 
                        href={item.appUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-black text-copper-orange hover:text-deep-blue transition-colors group/link"
                      >
                        Lancer l'application
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="ml-2 transition-transform group-hover/link:translate-x-1"
                        >
                          <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
