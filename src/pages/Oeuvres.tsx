import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Maximize2, 
  X, 
  ArrowRight,
  ExternalLink,
  Camera,
  Layers,
  Palette
} from 'lucide-react';
import { Link } from 'react-router-dom';
import WorksCarousel from '../components/WorksCarousel';
import NewsletterButton from '../components/NewsletterButton';

interface Artwork {
  id: string;
  title: string;
  category: string;
  image: string;
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
    : artworks.filter(a => a.category === activeCategory);

  return (
    <div className="bg-[#FAF9F7] text-[#1F4F6E] min-h-screen pt-28 pb-20 selection:bg-copper-orange selection:text-white">
      {/* HERO SECTION BLEU FONCÉ AVEC TEXTE EN BLANC NET */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1F4F6E] via-[#163c54] to-[#122e40] text-white py-20 px-6 sm:px-12 md:py-28 text-center">
        {/* Glow & texture subtile */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#02ADAB_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#02ADAB]/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#02ADAB] text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Galerie &amp; Créations Visuelles · Alkymya</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-tight leading-[1.15] mb-6">
            <span className="text-white block font-light">
              Nos œuvres &amp;
            </span>
            <strong className="font-semibold text-white underline decoration-[#02ADAB] decoration-2 underline-offset-8">
              créations de terrain.
            </strong>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-normal mb-10">
            Une traversée visuelle où la photographie de terrain authentique et l'audace de l'intelligence artificielle générative dialoguent. Découvrez nos séries artistiques et nos médias documentaires.
          </p>

          {/* Sélecteur de vue (Segmented Switcher) */}
          <div className="inline-flex p-1.5 rounded-2xl bg-black/25 backdrop-blur-md border border-white/15 max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
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
              <strong className="font-semibold text-[#02ADAB]">5</strong>
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Œuvres &amp; Séries</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">
              <strong className="font-semibold text-white">2</strong>
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Territoires documentés</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">
              <strong className="font-semibold text-[#C06721]">100%</strong>
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Authenticité &amp; Synthèse</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-light text-white font-mono">
              <strong className="font-semibold text-[#02ADAB]">HD</strong>
            </div>
            <div className="text-xs text-white/60 uppercase tracking-wider mt-1">Fidélité chromatique</div>
          </div>
        </div>
      </section>

      {/* GRILLE DES ŒUVRES */}
      <section className="max-w-[1200px] mx-auto py-16 px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#02ADAB] uppercase tracking-[0.2em] mb-2">
              <span>Collection Alkymya</span>
              <span aria-hidden="true">·</span>
              <span>{filteredArtworks.length} créations affichées</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-[#1F4F6E] leading-tight">
              L'alliance de l'artisanat du regard <strong className="font-semibold">et de l'IA</strong>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5a7a90] max-w-md leading-relaxed">
            Chaque image est cliquable pour une immersion plein écran haute définition avec sa notice artistique et ses détails de réalisation.
          </p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredArtworks.map((art) => (
              <motion.article
                key={art.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedArtwork(art)}
                className="group bg-white rounded-2xl border border-[#1F4F6E]/10 shadow-[0_4px_24px_rgba(31,79,110,0.06)] hover:shadow-[0_12px_36px_rgba(31,79,110,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Visual Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F4F6E]/80 via-[#1F4F6E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-[#1F4F6E] font-bold text-xs uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-3.5 h-3.5 text-[#02ADAB]" />
                      Agrandir l'œuvre
                    </span>
                  </div>

                  {art.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1F4F6E]/85 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/20">
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
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C06721] block mb-1.5">
                      {art.category}
                    </span>
                    <h3 className="text-xl font-semibold text-[#1F4F6E] group-hover:text-[#C06721] transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#5a7a90] leading-relaxed line-clamp-3">
                      {art.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1F4F6E]/8 flex items-center justify-between text-xs text-[#5a7a90]">
                    <span className="truncate pr-2 italic">{art.technique}</span>
                    <div className="w-8 h-8 rounded-full bg-[#C06721]/10 text-[#C06721] flex items-center justify-center shrink-0 group-hover:bg-[#C06721] group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Featured Showcase Carousel */}
        <div className="mb-20 pt-8 border-t border-[#1F4F6E]/10">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C06721] mb-2 block">
              Sélection Immersion
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#1F4F6E]">
              Créations en <strong className="font-semibold">Mouvement</strong>
            </h2>
          </div>
          <WorksCarousel />
        </div>
      </section>

      {/* CTA FINAL : BANNIÈRE TERRACOTTA / CUIVRE */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 mb-8">
        <div className="bg-[#C06721] text-white rounded-3xl p-8 sm:p-14 text-center shadow-xl">
          <div className="max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 block mb-3">
              Direction Artistique &amp; Commandes
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 leading-snug">
              Un projet artistique ou <strong className="font-semibold text-white">une commande visuelle ?</strong>
            </h2>
            <p className="text-base text-white/90 leading-relaxed mb-8 font-normal">
              Nous concevons des séries visuelles, des univers graphiques et des œuvres augmentées par l'IA pour les créateurs, écoles et entreprises engagées.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact?subject=Commande%20Artistique%20Visuelle"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#C06721] hover:bg-[#1F4F6E] hover:text-white font-semibold text-sm transition-all duration-200 shadow-md"
              >
                Prendre contact avec nous →
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
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl rounded-3xl bg-white overflow-hidden shadow-2xl z-10 my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedArtwork(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
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
                      <span className="px-3 py-1 rounded-full bg-[#C06721]/15 text-[#C06721] text-xs font-bold uppercase tracking-wider">
                        {selectedArtwork.category}
                      </span>
                      <span className="text-xs text-[#7a9ab0] font-semibold">
                        {selectedArtwork.year}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold text-[#1F4F6E] leading-snug">
                      {selectedArtwork.title}
                    </h3>

                    <p className="text-sm text-[#5a7a90] leading-relaxed">
                      {selectedArtwork.description}
                    </p>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                      <div>
                        <span className="font-bold text-[#1F4F6E] block">Technique :</span>
                        <span className="text-[#5a7a90]">{selectedArtwork.technique}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#1F4F6E]/10 flex items-center justify-between gap-3">
                    {selectedArtwork.externalLink ? (
                      <a
                        href={selectedArtwork.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F4F6E] hover:bg-[#02ADAB] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                      >
                        <span>Visiter le média</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F4F6E] hover:bg-[#C06721] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                      >
                        <span>Demander des infos</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}

                    <button
                      type="button"
                      onClick={() => setSelectedArtwork(null)}
                      className="text-xs text-[#5a7a90] hover:text-[#1F4F6E] font-bold uppercase tracking-wider transition-colors cursor-pointer"
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
