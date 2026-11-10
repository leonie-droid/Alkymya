import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Maximize2, 
  X, 
  Palette, 
  Camera, 
  Layers, 
  ArrowRight,
  ExternalLink,
  Tag
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import WorksCarousel from '../components/WorksCarousel';
import NewsletterButton from '../components/NewsletterButton';

interface Artwork {
  id: string;
  title: string;
  category: string;
  image: string;
  thumbnail?: string;
  description: string;
  technique: string;
  year: string;
  badge?: string;
  externalLink?: string;
}

const categories = [
  "Toutes",
  "Créations IA",
  "Photographies de Terrain"
];

const artworks: Artwork[] = [
  {
    id: "angela-davis",
    title: "Angela Davis — Voix & Empreinte",
    category: "Créations IA",
    image: "https://res.cloudinary.com/dokzioyu4/image/upload/v1772112521/e23iKTwc_u35aql.png",
    description: "Hommage graphique vibrant à la figure émancipatrice d'Angela Davis. Dialogue entre prompt crafting de haute précision, textures organiques et esthétique sérigraphique contemporaine.",
    technique: "Synthèse IA générative & post-production chromatique",
    year: "2024",
    badge: "Création IA",
  },
  {
    id: "josephine-baker",
    title: "Joséphine Baker — L'Audace du Mouvement",
    category: "Créations IA",
    image: "https://res.cloudinary.com/dokzioyu4/image/upload/v1772112521/d9eRiVt6_pmcd6l.png",
    description: "Réinterprétation stylistique célébrant l'énergie scénique, l'engagement et la grâce intemporelle de Joséphine Baker à travers les palettes de l'IA générative.",
    technique: "Modèle de diffusion & colorimétrie augmentée",
    year: "2024",
    badge: "Création IA",
  },
  {
    id: "pop-culture",
    title: "Pop Culture & Métamorphose",
    category: "Créations IA",
    image: "https://res.cloudinary.com/dokzioyu4/image/upload/v1772111909/giJ307Jk_hcidx5.png",
    description: "Fusion d'icônes populaires et de matières sculptées. Une interrogation visuelle sur la persistance des symboles culturels à l'ère des flux algorithmiques.",
    technique: "Composition numérique assistée par IA",
    year: "2024",
    badge: "Création IA",
  },
  {
    id: "territoires-seine-et-marne",
    title: "Lumières du Grand Morin — Seine-et-Marne",
    category: "Photographies de Terrain",
    image: "https://res.cloudinary.com/dokzioyu4/image/upload/v1788941703/PHOTO-2026-09-08-06-54-57_ynrbkt.jpg",
    description: "Prise de vue authentique de terrain. Ciels changeants, brumes matinales et reflets capturés au fil des saisons sans artifice, dans le respect absolu du vivant.",
    technique: "Photographie numérique de terrain (thelittle77)",
    year: "2025",
    badge: "Terrain 77",
    externalLink: "https://thelittle77.fr/"
  },
  {
    id: "paris-chroniques",
    title: "Chroniques Urbaines — Paris Belleville & Ruelles",
    category: "Photographies de Terrain",
    image: "https://res.cloudinary.com/dokzioyu4/image/upload/v1788941670/Logo_thelittle75.fr_d1tmes.jpg",
    description: "Documenter Paris à hauteur de pas. Série patrimoniale et visuelle issue des vingt arrondissements de la capitale, entre architecture populaire et poésie de quartier.",
    technique: "Photographie documentaire & carnets urbains",
    year: "2025",
    badge: "Terrain 75",
    externalLink: "https://thelittle75.fr/"
  }
];

export default function Oeuvres() {
  const [activeCategory, setActiveCategory] = useState("Toutes");
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const filteredArtworks = activeCategory === "Toutes"
    ? artworks
    : artworks.filter(art => art.category === activeCategory);

  return (
    <div className="min-h-screen py-28 px-4 bg-background text-foreground selection:bg-copper-orange selection:text-white">
      <div className="container mx-auto px-4 max-w-[1360px]">
        {/* Header Hero */}
        <header className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-copper-orange/10 border border-copper-orange/30 text-copper-orange text-xs font-black uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Galerie &amp; Créations Visuelles
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-deep-blue leading-tight mb-6">
              Nos <span className="text-copper-orange">Œuvres</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal">
              Une traversée visuelle où la matière brute, la photographie de terrain et l'audace de l'intelligence artificielle se rencontrent. Découvrez nos réalisations, séries artistiques et carnets documentaires.
            </p>
          </motion.div>
        </header>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-heading font-black tracking-wider uppercase transition-all duration-300 border cursor-pointer",
                activeCategory === category
                  ? "bg-deep-blue text-white border-deep-blue shadow-lg scale-105"
                  : "bg-white text-deep-blue border-deep-blue/15 hover:border-copper-orange hover:text-copper-orange"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          <AnimatePresence mode="popLayout">
            {filteredArtworks.map((art) => (
              <motion.article
                key={art.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedArtwork(art)}
                className="group relative rounded-3xl overflow-hidden bg-white border border-deep-blue/10 shadow-lg hover:shadow-2xl hover:border-copper-orange/40 transition-all duration-500 flex flex-col cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-deep-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-deep-blue font-heading font-black text-xs uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-3.5 h-3.5" />
                      Agrandir l'œuvre
                    </span>
                  </div>

                  {/* Badge */}
                  {art.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-deep-blue/85 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-wider border border-white/20">
                      {art.badge}
                    </span>
                  )}

                  <span className="absolute bottom-4 right-4 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-white/90 text-[10px] font-bold">
                    {art.year}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-copper-orange block mb-2">
                      {art.category}
                    </span>
                    <h2 className="text-xl font-heading font-black text-deep-blue group-hover:text-copper-orange transition-colors line-clamp-1">
                      {art.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {art.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-deep-blue/5 flex items-center justify-between text-xs text-muted-foreground font-medium">
                    <span className="truncate pr-2 italic">{art.technique}</span>
                    <div className="w-8 h-8 rounded-full bg-copper-orange/10 text-copper-orange flex items-center justify-center flex-shrink-0 group-hover:bg-copper-orange group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Featured Showcase Carousel */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-copper-orange mb-2 block">
              Sélection Immersion
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-deep-blue">
              Créations en Mouvement
            </h2>
          </div>
          <WorksCarousel />
        </div>

        {/* Bottom Banner & CTA */}
        <section className="p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-[#1F4F6E] via-[#16384e] to-[#0d2230] text-white shadow-2xl relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-copper-orange/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-copper-orange/20 border border-copper-orange/40 text-copper-orange text-xs font-black uppercase tracking-widest">
              Rejoignez l'Expérience
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight">
              Un projet artistique ou une commande visuelle ?
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-normal">
              Nous concevons des séries visuelles, des univers graphiques et des œuvres augmentées par l'IA pour les créateurs, écoles et entreprises engagées.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-copper-orange hover:bg-white hover:text-deep-blue text-white font-heading font-black text-xs uppercase tracking-widest transition-all shadow-lg"
              >
                <span>Nous contacter</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <NewsletterButton
                variant="outline"
                size="md"
                label="Suivre nos projets"
                className="border-white/30 text-white hover:bg-white/10"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArtwork(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl rounded-3xl bg-white overflow-hidden shadow-2xl z-10 my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedArtwork(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors"
                aria-label="Fermer la vue détaillée"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
                {/* Visual */}
                <div className="md:col-span-7 bg-slate-900 flex items-center justify-center p-4 min-h-[300px] md:min-h-[500px]">
                  <img
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Details */}
                <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between space-y-6 bg-white">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-copper-orange/15 text-copper-orange text-xs font-black uppercase tracking-wider">
                        {selectedArtwork.category}
                      </span>
                      <span className="text-xs text-muted-foreground font-semibold">
                        {selectedArtwork.year}
                      </span>
                    </div>

                    <h3 className="text-2xl font-heading font-black text-deep-blue leading-snug">
                      {selectedArtwork.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedArtwork.description}
                    </p>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                      <div>
                        <span className="font-bold text-deep-blue block">Technique :</span>
                        <span className="text-muted-foreground">{selectedArtwork.technique}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                    {selectedArtwork.externalLink ? (
                      <a
                        href={selectedArtwork.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-deep-blue hover:bg-copper-orange text-white text-xs font-black uppercase tracking-wider transition-colors shadow-md"
                      >
                        <span>Visiter le projet</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-deep-blue hover:bg-copper-orange text-white text-xs font-black uppercase tracking-wider transition-colors shadow-md"
                      >
                        <span>Demander des informations</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}

                    <button
                      type="button"
                      onClick={() => setSelectedArtwork(null)}
                      className="text-xs text-muted-foreground hover:text-deep-blue font-bold uppercase tracking-wider transition-colors"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
