import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  ExternalLink, 
  Headphones, 
  Play, 
  FileText, 
  ArrowRight, 
  X,
  Bot,
  Video,
  BookOpen,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsletterButton from '../components/NewsletterButton';

interface ExpertInfo {
  name: string;
  role: string;
  avatar: string;
  hook: string;
  siteUrl: string;
  siteLabel: string;
}

interface ResourceItem {
  id: number;
  title: string;
  category: string;
  description: string;
  url: string;
  type: 'video' | 'pdf' | 'audio' | 'site' | 'app';
  appUrl?: string;
  audioUrl?: string;
  pdfUrl?: string;
  imageUrl?: string;
  expert?: ExpertInfo;
}

const categories = [
  "Toutes",
  "Nos Analyseurs",
  "Nos études",
  "Business Game",
  "Agents",
  "Alkymya x Inatec",
  "Nos sites"
];

const resources: ResourceItem[] = [
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
    type: "video",
    expert: {
      name: "Kendra Martine",
      role: "Fondatrice d'Objectif Alternance & Coach Emploi",
      avatar: "https://res.cloudinary.com/dokzioyu4/image/upload/v1788941994/0c39dd0a7f91200361816f2b88d68802_cwzov0.jpg",
      hook: "Boostez vos candidatures : associez l'optimisation IA de votre CV à un coaching humain sur-mesure pour décrocher l'alternance ou le poste fait pour vous.",
      siteUrl: "https://www.objectifalternance.fr/",
      siteLabel: "Découvrir Objectif Alternance"
    }
  },
  {
    id: 3,
    title: "Analyseur de mémoire",
    category: "Nos Analyseurs",
    description: "Outil puissant pour analyser en profondeur les mémoires et thèses d'étudiants et chercheurs.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1776374160/bac00848173641fd882d43dc3b970835_jtyspz.mov",
    appUrl: "https://analyseurdememoire.alkymya.co/",
    type: "video"
  },
  {
    id: 17,
    title: "La Doctrine IAG",
    category: "Nos études",
    description: "Dialogue sur la Stratégie Cachée de l'Ère Trump. Analyse prospective et décryptage approfondi des enjeux géopolitiques, technologiques et industriels de l'IAG.",
    url: "https://res.cloudinary.com/dyooqwryq/image/upload/v1762315350/La_Doctrine_IAG___Dialogue_sur_la_Strat%C3%A9gie_Cach%C3%A9e_de_l_%C3%88re_Trump_zwxlqi.pdf",
    audioUrl: "https://res.cloudinary.com/dyooqwryq/video/upload/v1762315917/merged_audio.19bea92d_cunpbi.mp3",
    type: "pdf"
  },
  {
    id: 18,
    title: "Podcast • La Doctrine IAG",
    category: "Nos études",
    description: "Dialogue et synthèse audio immersive : explorez en profondeur la thèse, les stratégies cachées et les implications de la Doctrine IAG sous l'ère Trump (5 min 43).",
    url: "https://res.cloudinary.com/dyooqwryq/video/upload/v1762315917/merged_audio.19bea92d_cunpbi.mp3",
    pdfUrl: "https://res.cloudinary.com/dyooqwryq/image/upload/v1762315350/La_Doctrine_IAG___Dialogue_sur_la_Strat%C3%A9gie_Cach%C3%A9e_de_l_%C3%88re_Trump_zwxlqi.pdf",
    type: "audio"
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
    description: "Au travers de la marque fashion de la Gen Z, explorez la data, le web-marketing et les business modèles contemporains.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1777905236/Vide%CC%81o_publicitaire_e%CC%81lectro_pop_cre%CC%81e%CC%81e_oydyo3_xxtwtb.mp4",
    appUrl: "https://nonobanaba.netlify.app/",
    type: "video"
  },
  {
    id: 5,
    title: "SODA",
    category: "Agents",
    description: "SODA est une IA spécialisée conçue pour l'accompagnement et l'analyse stratégique. Découvrez notre agent autonome.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1779116439/f_ea_e_f_f_a_f_a_e_cbe_f_cmp__gxlwhw.mp4",
    appUrl: "https://www.genspark.ai/agents?type=custom_super_agent&agent_id=20503058-4b49-40f7-b277-b38c21724a41",
    type: "video"
  },
  {
    id: 10,
    title: "Partenariat d'Avenir",
    category: "Alkymya x Inatec",
    description: "Découvrez l'introduction de notre collaboration avec Inatec, alliant excellence pédagogique et IA de pointe.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1780954428/reel_01_v2_3_zwqjnw.mp4",
    type: "video"
  },
  {
    id: 11,
    title: "Efficacité Augmentée",
    category: "Alkymya x Inatec",
    description: "Optimisation des processus et automatisation intelligente : plongez au cœur des métiers de demain.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1780954633/reel_02_p2_2_ggfpvz.mp4",
    type: "video"
  },
  {
    id: 12,
    title: "Synergie Créative",
    category: "Alkymya x Inatec",
    description: "Exploration de l'intégration créative des nouvelles technologies au sein des environnements collaboratifs.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1780954632/reel_03_v2_2_bms3f4.mp4",
    type: "video"
  },
  {
    id: 13,
    title: "Le Futur en Marche",
    category: "Alkymya x Inatec",
    description: "Comment transformer les défis organisationnels en opportunités grâce à la puissance des algorithmes génératifs.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1780954634/reel_01_p2_2_stdxyh.mp4",
    type: "video"
  },
  {
    id: 14,
    title: "Performance Digitale",
    category: "Alkymya x Inatec",
    description: "Visualisez la mise en œuvre concrète de nos solutions digitales de pointe et leur impact direct sur la performance.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1780954634/reel_04_v2_2_ozedom.mp4",
    type: "video"
  },
  {
    id: 15,
    title: "Thelittle77.fr",
    category: "Nos sites",
    description: "Le média et guide local de Seine-et-Marne (77), mettant en lumière les initiatives, commerces et innovations du territoire.",
    url: "https://thelittle77.fr/",
    appUrl: "https://thelittle77.fr/",
    imageUrl: "https://res.cloudinary.com/dokzioyu4/image/upload/v1788941703/PHOTO-2026-09-08-06-54-57_ynrbkt.jpg",
    type: "site"
  },
  {
    id: 16,
    title: "Thelittle75.fr",
    category: "Nos sites",
    description: "Le guide urbain et média digital de référence dédié aux actualités, adresses et pépites incontournables de Paris (75).",
    url: "https://thelittle75.fr/",
    appUrl: "https://thelittle75.fr/",
    imageUrl: "https://res.cloudinary.com/dokzioyu4/image/upload/v1788941670/Logo_thelittle75.fr_d1tmes.jpg",
    type: "site"
  }
];

export default function Ressources() {
  const [activeCategory, setActiveCategory] = useState("Toutes");
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [unmutedIds, setUnmutedIds] = useState<Set<number>>(new Set());

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
    : resources.filter(r => r.category === activeCategory);

  return (
    <div className="bg-[#FAF9F7] text-[#1F4F6E] min-h-screen pt-28 pb-20 selection:bg-copper-orange selection:text-white">
      {/* HERO SECTION EN BLEU FONCÉ AVEC TEXTE EN BLANC NET */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1F4F6E] via-[#163c54] to-[#122e40] text-white py-20 px-6 sm:px-12 md:py-28 text-center">
        {/* Glow & texture subtile */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#02ADAB_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#02ADAB]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#02ADAB] text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bibliothèque &amp; Outils Libres · Alkymya</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-tight leading-[1.15] mb-6">
            <span className="text-white block font-light">
              Nos ressources,
            </span>
            <strong className="font-semibold text-white underline decoration-[#02ADAB] decoration-2 underline-offset-8">
              analyses &amp; outils IA.
            </strong>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-normal mb-10">
            Bienvenue dans notre espace dédié au partage et à l'expérimentation. Accédez librement à nos analyseurs d'images et de CV, nos rapports prospectifs, nos podcasts et nos médias territoriaux.
          </p>

          {/* Sélecteur de vue (Segmented Switcher) */}
          <div className="inline-flex p-1.5 rounded-2xl bg-black/25 backdrop-blur-md border border-white/15 max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-white text-[#1F4F6E] shadow-md'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Chiffres clés intégrés */}
        <div className="max-w-4xl mx-auto mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">
              <strong className="font-semibold text-[#02ADAB]">16</strong>
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Ressources en ligne</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">
              <strong className="font-semibold text-white">4</strong>
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Analyseurs IA actifs</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">
              <strong className="font-semibold text-[#C06721]">100%</strong>
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Accès libre &amp; ouvert</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">
              <strong className="font-semibold text-[#02ADAB]">Vidéo &amp; PDF</strong>
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Formats interactifs</div>
          </div>
        </div>
      </section>

      {/* GRILLE DES RESSOURCES */}
      <section className="max-w-[1200px] mx-auto py-16 px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#02ADAB] uppercase tracking-[0.2em] mb-2">
              <span>Bibliothèque interactive</span>
              <span aria-hidden="true">·</span>
              <span>{filteredResources.length} livrables disponibles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-[#1F4F6E] leading-tight">
              Des outils concrets <strong className="font-semibold">pour tester et expérimenter</strong>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <NewsletterButton
              variant="primary"
              size="sm"
              label="Suivre nos projets"
            />
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredResources.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl border border-[#1F4F6E]/10 shadow-[0_4px_24px_rgba(31,79,110,0.06)] hover:shadow-[0_12px_36px_rgba(31,79,110,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden text-left"
              >
                {/* Media Container (Aspect 9/16 for Reels/Demos or rich cards) */}
                <div 
                  className="relative aspect-[9/16] w-full overflow-hidden bg-black cursor-pointer"
                  onClick={() => {
                    if (item.type === 'pdf') {
                      window.open(item.url, '_blank');
                    } else if (item.type === 'site') {
                      window.open(item.appUrl || item.url, '_blank');
                    } else {
                      setSelectedResource(item);
                    }
                  }}
                >
                  {/* Expert Badge if present */}
                  {item.expert && (
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#1F4F6E]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 shadow-md pointer-events-none">
                      <img 
                        src={item.expert.avatar} 
                        alt={item.expert.name} 
                        referrerPolicy="no-referrer"
                        className="w-5 h-5 rounded-full object-cover border border-[#C06721]" 
                      />
                      <span className="text-[11px] font-bold text-white tracking-wide">
                        Avec {item.expert.name}
                      </span>
                    </div>
                  )}

                  {/* Type rendering */}
                  {item.type === 'pdf' ? (
                    <div className="w-full h-full bg-gradient-to-br from-[#1F4F6E] via-[#16384e] to-[#0d2230] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                      <div className="w-16 h-16 rounded-2xl bg-[#02ADAB]/20 flex items-center justify-center mb-5 text-[#02ADAB] transition-transform duration-500 group-hover:scale-110">
                        <FileText className="w-8 h-8" />
                      </div>
                      <span className="text-white text-2xl font-semibold mb-2 block leading-snug">
                        {item.title}
                      </span>
                      <span className="text-[#02ADAB] text-xs font-bold uppercase tracking-wider mt-2">
                        Consulter l'étude (.pdf) →
                      </span>
                      {item.audioUrl && (
                        <span className="inline-flex items-center gap-1.5 mt-4 text-[10px] font-bold uppercase tracking-wider text-[#C06721] bg-[#C06721]/20 px-3 py-1 rounded-full border border-[#C06721]/30">
                          <Headphones className="w-3.5 h-3.5" /> Audio / Podcast inclus
                        </span>
                      )}
                    </div>
                  ) : item.type === 'audio' ? (
                    <div className="w-full h-full bg-gradient-to-br from-[#1F4F6E] via-[#0d1c31] to-black flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                      <div className="w-16 h-16 rounded-2xl bg-[#C06721]/25 border border-[#C06721]/30 flex items-center justify-center mb-5 text-[#C06721] transition-transform duration-500 group-hover:scale-110 shadow-lg">
                        <Headphones className="w-8 h-8" />
                      </div>
                      <span className="text-[#C06721] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                        Podcast • Dialogue Audio
                      </span>
                      <span className="text-white text-2xl font-semibold mb-4 block leading-snug">
                        {item.title}
                      </span>
                      <span className="inline-flex items-center gap-2 text-white bg-[#C06721] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-md group-hover:bg-white group-hover:text-[#1F4F6E] transition-colors">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Écouter le podcast
                      </span>
                    </div>
                  ) : item.type === 'site' ? (
                    <div className="w-full h-full relative bg-slate-900 flex items-center justify-center overflow-hidden">
                      <img 
                        src={item.imageUrl || item.url} 
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1F4F6E]/85 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                      <div className="absolute bottom-4 right-4 z-20 bg-[#1F4F6E]/80 backdrop-blur-md text-white p-2.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                  ) : (
                    <>
                      <video 
                        src={item.url} 
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                        autoPlay
                        muted={!unmutedIds.has(item.id)}
                        loop
                        playsInline
                      />
                      {/* Audio Toggle */}
                      <button
                        type="button"
                        onClick={(e) => toggleMute(e, item.id)}
                        className="absolute bottom-4 left-4 z-20 bg-black/50 backdrop-blur-md text-white p-2.5 rounded-full border border-white/15 hover:bg-[#C06721] transition-all duration-200 cursor-pointer"
                        title={unmutedIds.has(item.id) ? "Couper le son" : "Activer le son"}
                        aria-label="Contrôle audio"
                      >
                        {unmutedIds.has(item.id) ? (
                          <Volume2 className="w-4 h-4" />
                        ) : (
                          <VolumeX className="w-4 h-4" />
                        )}
                      </button>
                      
                      {/* Zoom Indicator */}
                      <div className="absolute bottom-4 right-4 z-20 bg-white/15 backdrop-blur-md text-white p-2.5 rounded-full border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </>
                  )}

                  {/* Bottom title overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F4F6E]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                    <span className="text-[#02ADAB] text-xs font-bold tracking-wider uppercase mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-xl text-white font-bold leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#C06721]">
                        {item.category}
                      </span>
                      {item.appUrl && (
                        <span className="text-[10px] font-bold text-[#02ADAB] bg-[#02ADAB]/10 px-2 py-0.5 rounded-md">
                          En direct
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-[#1F4F6E] group-hover:text-[#C06721] transition-colors leading-snug mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#5a7a90] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Expert card if present */}
                    {item.expert && (
                      <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-[#1F4F6E]/10 space-y-2">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={item.expert.avatar}
                            alt={item.expert.name}
                            referrerPolicy="no-referrer"
                            className="w-9 h-9 rounded-full object-cover border border-[#C06721] shrink-0"
                          />
                          <div className="min-w-0">
                            <span className="text-[10px] font-bold uppercase text-[#C06721] block leading-none mb-0.5">
                              Partenaire Formation
                            </span>
                            <span className="text-xs font-bold text-[#1F4F6E] block truncate">
                              {item.expert.name}
                            </span>
                          </div>
                        </div>
                        <p className="text-[11px] text-[#4a6a80] italic leading-snug">
                          « {item.expert.hook} »
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#1F4F6E]/8 flex items-center justify-between gap-2">
                    {item.appUrl ? (
                      <a
                        href={item.appUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F4F6E] hover:text-[#02ADAB] transition-colors"
                      >
                        <span>Ouvrir l'application</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : item.type === 'pdf' ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F4F6E] hover:text-[#02ADAB] transition-colors"
                      >
                        <span>Télécharger le PDF</span>
                        <FileText className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedResource(item)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F4F6E] hover:text-[#02ADAB] transition-colors cursor-pointer"
                      >
                        <span>Voir la démonstration</span>
                        <Play className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <div className="w-8 h-8 rounded-full bg-[#1F4F6E]/5 text-[#1F4F6E] flex items-center justify-center shrink-0 group-hover:bg-[#C06721] group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA FINAL : BANNIÈRE TERRACOTTA / CUIVRE */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 mb-8">
        <div className="bg-[#C06721] text-white rounded-3xl p-8 sm:p-14 text-center shadow-xl">
          <div className="max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 block mb-3">
              Veille &amp; Nouveautés
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 leading-snug">
              Envie d'explorer de <strong className="font-semibold text-white">nouveaux cas d'usage ?</strong>
            </h2>
            <p className="text-base text-white/90 leading-relaxed mb-8 font-normal">
              Nos alchimistes publient régulièrement de nouveaux agents, études et retours d'expérience. Rejoignez notre communauté pour ne rien manquer.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/ateliers"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#C06721] hover:bg-[#1F4F6E] hover:text-white font-semibold text-sm transition-all duration-200 shadow-md"
              >
                Découvrir nos ateliers pratiques →
              </Link>
              <NewsletterButton
                variant="outline"
                size="md"
                label="Suivre nos projets"
                className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video / Audio / App Modal */}
      <AnimatePresence>
        {selectedResource && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedResource(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`relative w-full max-w-4xl h-auto max-h-[90vh] flex flex-col items-center justify-center ${
                selectedResource.type === "video" 
                  ? "aspect-video md:aspect-[9/16] md:w-[450px]" 
                  : selectedResource.type === "audio" 
                  ? "max-w-xl" 
                  : "h-[85vh] md:h-[90vh] max-w-6xl"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute -top-14 right-0 text-white bg-[#C06721] rounded-full p-3 shadow-xl hover:scale-110 transition-transform z-[110] cursor-pointer"
                onClick={() => setSelectedResource(null)}
                aria-label="Fermer la vue"
              >
                <X className="w-5 h-5" />
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
                ) : selectedResource.type === "audio" ? (
                  <div className="p-8 md:p-12 bg-gradient-to-br from-[#0F1E36] via-[#1F4F6E] to-black text-white text-center flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#C06721]/20 border border-[#C06721]/40 flex items-center justify-center mb-6 shadow-xl">
                      <Headphones className="w-10 h-10 text-[#C06721]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C06721] mb-2">
                      Podcast &amp; Dialogue Audio
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white max-w-lg">
                      {selectedResource.title}
                    </h3>
                    <p className="text-sm text-white/75 max-w-md mb-6 leading-relaxed">
                      {selectedResource.description}
                    </p>
                    <audio
                      src={selectedResource.url}
                      className="w-full max-w-md h-12 rounded-full mb-6"
                      controls
                      autoPlay
                    />
                    {selectedResource.appUrl && (
                      <a
                        href={selectedResource.appUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C06721] text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#1F4F6E] transition-colors shadow-lg"
                      >
                        <FileText className="w-4 h-4" />
                        Consulter l'étude PDF associée
                      </a>
                    )}
                  </div>
                ) : (
                  <iframe
                    src={selectedResource.url}
                    className="w-full h-full bg-white"
                    title={selectedResource.title}
                  />
                )}
              </div>

              {selectedResource.expert && (
                <div className="mt-4 w-full bg-[#1F4F6E]/95 border border-white/15 rounded-2xl p-4 text-white flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md shadow-2xl">
                  <div className="flex items-center gap-3 text-left">
                    <img
                      src={selectedResource.expert.avatar}
                      alt={selectedResource.expert.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#C06721] shrink-0"
                    />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C06721] block">
                        Accompagnement Personnalisé
                      </span>
                      <h4 className="font-bold text-sm text-white">
                        {selectedResource.expert.name} — <span className="text-white/70 font-normal text-xs">{selectedResource.expert.role}</span>
                      </h4>
                      <p className="text-xs text-white/80 max-w-xl italic mt-0.5">
                        « {selectedResource.expert.hook} »
                      </p>
                    </div>
                  </div>
                  <a
                    href={selectedResource.expert.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#C06721] text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#1F4F6E] transition-colors shadow-lg"
                  >
                    <span>{selectedResource.expert.siteLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
