import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Maximize2,
  ExternalLink,
  Headphones,
  Play,
  FileText,
  ArrowRight,
  ArrowLeft,
  X,
  FolderOpen,
  Volume2,
  VolumeX
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import NewsletterButton from '../components/NewsletterButton';
import { SEO } from '../components/SEO';
import { cloudinaryUrl } from '../utils/cloudinary';
import { resourceCategories, resources, ResourceItem } from '../data/ressources';

export default function Ressources() {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [unmutedIds, setUnmutedIds] = useState<Set<number>>(new Set());

  const activeCategoryObj = categorySlug
    ? resourceCategories.find((c) => c.slug === categorySlug)
    : undefined;

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
    setUnmutedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Fallback si le slug de catégorie demandé n'existe pas
  if (categorySlug && !activeCategoryObj) {
    return (
      <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] flex items-center justify-center px-6 py-24">
        <div className="bg-white rounded-[12px] p-10 max-w-md w-full text-center shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
          <h1 className="text-2xl font-medium text-[#1F4F6E] mb-3">Catégorie introuvable</h1>
          <p className="text-sm text-[#5a7a90] mb-6 leading-relaxed">
            Cette catégorie de ressources n'existe pas ou a été déplacée.
          </p>
          <Link
            to="/ressources"
            className="inline-flex items-center gap-2 bg-[#1F4F6E] hover:bg-[#02ADAB] text-white text-sm font-medium py-3 px-6 rounded-[8px] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à Nos Ressources</span>
          </Link>
        </div>
      </div>
    );
  }

  const filteredResources = activeCategoryObj
    ? resources.filter((r) => r.categorySlug === activeCategoryObj.slug)
    : resources;

  const otherCategories = activeCategoryObj
    ? resourceCategories.filter((c) => c.slug !== activeCategoryObj.slug)
    : [];

  const seoTitle = activeCategoryObj
    ? activeCategoryObj.seoTitle
    : "Ressources IA, Veille SEO & Outils Gratuits | Alkymya";
  const seoDescription = activeCategoryObj
    ? activeCategoryObj.seoDescription
    : "Veille SEO IA, analyseurs intelligents gratuits, études Génération IA et création site éditorial par l'agence IA et studio création IA Alkymya.";
  const seoKeywords = activeCategoryObj
    ? activeCategoryObj.keywords
    : "veille SEO IA, agence IA, studio création IA, création site éditorial, agents IA autonomes, stratégie SEO et GEO";
  const canonicalPath = activeCategoryObj
    ? `/ressources/${activeCategoryObj.slug}`
    : "/ressources";

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonicalPath={canonicalPath}
        ogImage="https://res.cloudinary.com/dokzioyu4/image/upload/v1788941703/PHOTO-2026-09-08-06-54-57_ynrbkt.jpg"
        type="CollectionPage"
      />

      {/* HERO SECTION DESIGN SYSTEM */}
      <header className="bg-[#1F4F6E] text-white py-20 px-6 sm:px-10 text-center relative overflow-hidden">
        <div className="max-w-[780px] mx-auto relative z-10">
          {activeCategoryObj && (
            <div className="mb-5">
              <Link
                to="/ressources"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-white/80 hover:text-[#02ADAB] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Toutes les ressources</span>
              </Link>
            </div>
          )}

          <p className="text-[0.85rem] tracking-[0.15em] uppercase text-[#02ADAB] mb-4 font-normal">
            {activeCategoryObj
              ? activeCategoryObj.eyebrow
              : "Veille SEO IA & Outils Libres · Studio Alkymya"}
          </p>

          <h1 className="font-light text-[2.4rem] sm:text-[2.6rem] leading-[1.2] mb-5 text-white">
            {activeCategoryObj ? (
              <>
                {activeCategoryObj.h1Lead}
                <br />
                <strong className="font-medium text-white">{activeCategoryObj.h1Accent}</strong>
              </>
            ) : (
              <>
                Ressources IA, veille SEO IA &amp;
                <br />
                <strong className="font-medium text-white">outils gratuits.</strong>
              </>
            )}
          </h1>

          <p className="text-[1.05rem] sm:text-[1.1rem] text-white/75 max-w-[640px] mx-auto leading-[1.7] font-light mb-8">
            {activeCategoryObj
              ? activeCategoryObj.description
              : "Bibliothèque ouverte de notre studio création IA : analyseurs gratuits, veille SEO IA, création site éditorial optimisé Google AI et démonstrations d'agents IA autonomes en production."}
          </p>

          {/* Navigation par page de catégorie */}
          <nav
            aria-label="Catégories de ressources"
            className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 rounded-[10px] bg-white/10 border border-white/15 max-w-full mb-10"
          >
            <Link
              to="/ressources"
              className={`px-3.5 py-2 rounded-[6px] text-xs font-medium transition-all whitespace-nowrap ${
                !activeCategoryObj
                  ? 'bg-white text-[#1F4F6E] shadow-sm'
                  : 'text-white/75 hover:text-white hover:bg-white/10'
              }`}
            >
              Toutes
            </Link>
            {resourceCategories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/ressources/${cat.slug}`}
                className={`px-3.5 py-2 rounded-[6px] text-xs font-medium transition-all whitespace-nowrap ${
                  activeCategoryObj?.slug === cat.slug
                    ? 'bg-white text-[#1F4F6E] shadow-sm'
                    : 'text-white/75 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </nav>

          {/* Chiffres clés intégrés */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">
                {filteredResources.length}
              </div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">
                {activeCategoryObj ? "Dans cette catégorie" : "Ressources en ligne"}
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">
                {resourceCategories.length}
              </div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">
                Pôles thématiques
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">100%</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">
                Accès libre &amp; ouvert
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">
                Vidéo &amp; PDF
              </div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">
                Formats interactifs
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CARTES CATÉGORIES (SUR LA PAGE HUB /ressources) */}
      {!activeCategoryObj && (
        <section className="max-w-[1100px] mx-auto pt-[60px] px-6">
          <div className="mb-8">
            <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2 font-medium">
              Explorer par thématique
            </p>
            <h2 className="text-[1.6rem] sm:text-[1.8rem] font-light text-[#1F4F6E]">
              Choisissez votre <strong className="font-medium text-[#1F4F6E]">catégorie de ressources</strong>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resourceCategories.map((cat, idx) => {
              const isPartenaires = cat.slug === 'partenaires';
              const count = isPartenaires
                ? 3
                : resources.filter((r) => r.categorySlug === cat.slug).length;
              const badgeText = isPartenaires
                ? `${count} partenaires`
                : `${count} ${count > 1 ? 'ressources' : 'ressource'}`;
              return (
                <Link
                  key={cat.slug}
                  to={`/ressources/${cat.slug}`}
                  className={`group bg-white rounded-[12px] p-6 shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between text-left border border-transparent hover:border-[#02ADAB]/30 ${
                    idx === resourceCategories.length - 1 ? 'sm:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-9 h-9 rounded-[8px] bg-[#02ADAB]/10 text-[#02ADAB] flex items-center justify-center">
                        <FolderOpen className="w-4 h-4" />
                      </span>
                      <span className="text-[11px] font-medium text-[#4a6a80] bg-[#f4f6f9] px-2.5 py-1 rounded-[4px]">
                        {badgeText}
                      </span>
                    </div>
                    <h3 className="text-[1.1rem] font-medium text-[#1F4F6E] group-hover:text-[#C06721] transition-colors mb-2">
                      {cat.name}
                    </h3>
                    <p className="text-[0.86rem] text-[#5a7a90] leading-[1.55] font-normal">
                      {cat.cardSummary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[rgba(31,79,110,0.08)] flex items-center justify-between text-xs font-medium text-[#02ADAB] group-hover:text-[#C06721] transition-colors">
                    <span>Ouvrir la page</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* GRILLE DES RESSOURCES */}
      <section className="max-w-[1100px] mx-auto py-[65px] px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
              {activeCategoryObj
                ? `${activeCategoryObj.name} · ${filteredResources.length} livrable${filteredResources.length > 1 ? 's' : ''} disponible${filteredResources.length > 1 ? 's' : ''}`
                : `Bibliothèque complète · ${filteredResources.length} livrables disponibles`}
            </p>
            <h2 className="text-[1.8rem] sm:text-[2rem] font-light text-[#1F4F6E]">
              {activeCategoryObj ? (
                <>
                  Ressources : <strong className="font-medium text-[#1F4F6E]">{activeCategoryObj.name}</strong>
                </>
              ) : (
                <>
                  Outils gratuits, veille SEO IA <strong className="font-medium text-[#1F4F6E]">&amp; création site éditorial</strong>
                </>
              )}
            </h2>
            <p className="text-[0.98rem] text-[#4a6a80] max-w-[680px] leading-[1.65] mt-2 font-normal">
              {activeCategoryObj
                ? activeCategoryObj.description
                : "Chaque ressource de ce hub est directement actionnable en autonomie ou en atelier : analyseurs intelligents gratuits, études empiriques Génération IA 2024-2026, business game pédagogique NoNo BanaBa et capsules pratiques conçues avec notre organisme partenaire certifié Qualiopi INATEC."}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <NewsletterButton variant="primary" size="sm" label="Suivre nos projets" />
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredResources.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group bg-white rounded-[12px] shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between overflow-hidden text-left"
              >
                {/* Media Container */}
                <div
                  className="relative aspect-[9/16] w-full overflow-hidden bg-[#1a3a50] cursor-pointer"
                  onClick={() => {
                    if (item.type === 'pdf') {
                      window.open(item.url, '_blank');
                    } else {
                      setSelectedResource(item);
                    }
                  }}
                >
                  {/* Expert Badge if present */}
                  {item.expert && (
                    <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2 bg-[#1F4F6E]/90 backdrop-blur-xs px-3 py-1.5 rounded-[6px] border border-white/15 shadow-sm pointer-events-none">
                      <img
                        src={cloudinaryUrl(item.expert.avatar, 200)}
                        width={40}
                        height={40}
                        loading="lazy"
                        alt={`${item.expert.name} — ${item.expert.role}, partenaire studio IA Alkymya`}
                        referrerPolicy="no-referrer"
                        className="w-5 h-5 rounded-full object-cover border border-[#C06721]"
                      />
                      <span className="text-[11px] font-medium text-white tracking-wide">
                        Avec {item.expert.name}
                      </span>
                    </div>
                  )}

                  {/* Type rendering */}
                  {item.type === 'pdf' ? (
                    <div className="w-full h-full bg-[#1F4F6E] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                      <div className="w-14 h-14 rounded-[10px] bg-[rgba(2,173,171,0.2)] flex items-center justify-center mb-5 text-[#02ADAB] transition-transform duration-300 group-hover:scale-105">
                        <FileText className="w-7 h-7" />
                      </div>
                      <span className="text-white text-xl font-medium mb-2 block leading-snug">
                        {item.title}
                      </span>
                      <span className="text-[#02ADAB] text-xs font-medium uppercase tracking-wider mt-2">
                        Consulter l'étude (.pdf) →
                      </span>
                      {item.audioUrl && (
                        <span className="inline-flex items-center gap-1.5 mt-4 text-[11px] font-medium uppercase tracking-wider text-white bg-[#C06721] px-3 py-1 rounded-[4px]">
                          <Headphones className="w-3.5 h-3.5" /> Audio / Podcast inclus
                        </span>
                      )}
                    </div>
                  ) : item.type === 'audio' ? (
                    <div className="w-full h-full bg-[#16384e] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                      <div className="w-14 h-14 rounded-[10px] bg-[#C06721]/25 border border-[#C06721]/30 flex items-center justify-center mb-5 text-[#C06721] transition-transform duration-300 group-hover:scale-105">
                        <Headphones className="w-7 h-7" />
                      </div>
                      <span className="text-[#02ADAB] text-[11px] font-medium uppercase tracking-[0.18em] mb-2">
                        Podcast • Dialogue Audio
                      </span>
                      <span className="text-white text-xl font-medium mb-4 block leading-snug">
                        {item.title}
                      </span>
                      <span className="inline-flex items-center gap-2 text-white bg-[#C06721] px-4 py-2 rounded-[6px] text-xs font-medium uppercase tracking-wider shadow-sm group-hover:bg-white group-hover:text-[#1F4F6E] transition-colors">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Écouter le podcast
                      </span>
                    </div>
                  ) : (
                    <>
                      <video
                        src={item.url}
                        aria-label={`Démonstration vidéo IA : ${item.title}`}
                        title={item.title}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                        autoPlay
                        muted={!unmutedIds.has(item.id)}
                        loop
                        playsInline
                      />
                      {/* Audio Toggle */}
                      <button
                        type="button"
                        onClick={(e) => toggleMute(e, item.id)}
                        className="absolute bottom-4 left-4 z-20 bg-black/55 text-white p-2.5 rounded-[8px] border border-white/15 hover:bg-[#C06721] transition-all duration-200 cursor-pointer"
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
                      <div className="absolute bottom-4 right-4 z-20 bg-white/15 text-white p-2.5 rounded-[8px] border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </>
                  )}

                  {/* Bottom title overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F4F6E]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                    <span className="text-[#02ADAB] text-xs font-medium tracking-wider uppercase mb-1">
                      {item.category}
                    </span>
                    <div className="text-lg text-white font-medium leading-snug">
                      {item.title}
                    </div>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <Link
                        to={`/ressources/${item.categorySlug}`}
                        className="text-[0.72rem] font-medium uppercase tracking-[0.1em] text-[#02ADAB] hover:text-[#C06721] transition-colors"
                      >
                        {item.category}
                      </Link>
                      {item.appUrl && (
                        <span className="text-[0.7rem] font-medium text-[#037971] bg-[#02ADAB]/10 px-2 py-0.5 rounded-[4px]">
                          En direct
                        </span>
                      )}
                    </div>

                    <h3 className="text-[1.1rem] font-medium text-[#1F4F6E] group-hover:text-[#C06721] transition-colors leading-snug mb-2">
                      {item.title}
                    </h3>

                    <p className="text-[0.92rem] text-[#5a7a90] leading-[1.6] font-normal">
                      {item.description}
                    </p>

                    {/* Expert card if present */}
                    {item.expert && (
                      <div className="mt-4 p-3.5 rounded-[8px] bg-[#f4f6f9] border border-[rgba(31,79,110,0.08)] space-y-2">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={cloudinaryUrl(item.expert.avatar, 200)}
                            width={40}
                            height={40}
                            loading="lazy"
                            alt={`${item.expert.name} — ${item.expert.role}, partenaire formation IA Alkymya`}
                            referrerPolicy="no-referrer"
                            className="w-9 h-9 rounded-full object-cover border border-[#C06721] shrink-0"
                          />
                          <div className="min-w-0">
                            <span className="text-[10px] font-medium uppercase text-[#C06721] block leading-none mb-0.5">
                              Partenaire Formation
                            </span>
                            <span className="text-xs font-medium text-[#1F4F6E] block truncate">
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

                  <div className="pt-4 border-t border-[rgba(31,79,110,0.08)] flex items-center justify-between gap-2">
                    {item.appUrl ? (
                      <a
                        href={item.appUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[0.88rem] font-medium text-[#02ADAB] hover:text-[#037971] transition-colors"
                      >
                        <span>Ouvrir l'application</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : item.type === 'pdf' ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[0.88rem] font-medium text-[#02ADAB] hover:text-[#037971] transition-colors"
                      >
                        <span>Télécharger le PDF</span>
                        <FileText className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedResource(item)}
                        className="inline-flex items-center gap-1.5 text-[0.88rem] font-medium text-[#02ADAB] hover:text-[#037971] transition-colors cursor-pointer"
                      >
                        <span>Voir la démonstration</span>
                        <Play className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <div className="w-8 h-8 rounded-[6px] bg-[#f4f6f9] text-[#1F4F6E] flex items-center justify-center shrink-0 group-hover:bg-[#C06721] group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Autres catégories sur les pages catégories dédiées */}
        {activeCategoryObj && otherCategories.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[rgba(31,79,110,0.1)]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-1.5 font-medium">
                  Continuer l'exploration
                </p>
                <h3 className="text-[1.4rem] font-light text-[#1F4F6E]">
                  Découvrir les <strong className="font-medium">autres catégories de ressources</strong>
                </h3>
              </div>
              <Link
                to="/ressources"
                className="text-xs font-medium uppercase tracking-wider text-[#02ADAB] hover:text-[#C06721] transition-colors"
              >
                Voir toutes les ressources →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherCategories.map((cat) => {
                const count = resources.filter((r) => r.categorySlug === cat.slug).length;
                return (
                  <Link
                    key={cat.slug}
                    to={`/ressources/${cat.slug}`}
                    className="group bg-white rounded-[12px] p-6 shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all flex flex-col justify-between text-left"
                  >
                    <div>
                      <span className="text-[11px] font-medium uppercase tracking-wider text-[#02ADAB] block mb-1.5">
                        {count} {count > 1 ? 'ressources' : 'ressource'}
                      </span>
                      <h4 className="text-[1.05rem] font-medium text-[#1F4F6E] group-hover:text-[#C06721] transition-colors mb-2">
                        {cat.name}
                      </h4>
                      <p className="text-[0.86rem] text-[#5a7a90] leading-[1.55]">
                        {cat.cardSummary}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-[rgba(31,79,110,0.08)] flex items-center justify-between text-xs font-medium text-[#02ADAB] group-hover:text-[#C06721]">
                      <span>Consulter la page</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Vue d'ensemble des pôles sur /ressources */}
        {!activeCategoryObj && (
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[12px] p-6 shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
              <h3 className="text-[1.05rem] font-medium text-[#1F4F6E] mb-2">
                1. Analyseurs IA gratuits en production
              </h3>
              <p className="text-[0.92rem] text-[#5a7a90] leading-[1.6]">
                Nos trois analyseurs (Photo, CV en partenariat avec Kendra Martine d'Objectif Alternance, et Mémoire académique) permettent de tester immédiatement l'apport concret des modèles génératifs sur des documents réels, sans barrière technique.
              </p>
            </div>
            <div className="bg-white rounded-[12px] p-6 shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
              <h3 className="text-[1.05rem] font-medium text-[#1F4F6E] mb-2">
                2. Études Génération IA &amp; Business Game
              </h3>
              <p className="text-[0.92rem] text-[#5a7a90] leading-[1.6]">
                Téléchargez librement nos enquêtes longitudinales (2024, 2025, 2026), la Doctrine IAG en PDF et podcast audio, ainsi que le jeu d'entreprise NoNo BanaBa utilisé dans nos interventions en grandes écoles et entreprises.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* CTA FINAL — Exact Maquette Orange #C06721 */}
      <div className="bg-[#C06721] text-white text-center py-[70px] px-10">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-white/80 mb-2.5 font-medium">
          Veille &amp; Nouveautés
        </p>
        <h2 className="text-[2rem] font-light mb-3.5 text-white">
          Accélérez votre <strong className="font-medium text-white">stratégie SEO, GEO &amp; IA</strong>
        </h2>
        <p className="text-[1.05rem] text-white/85 max-w-[520px] mx-auto mb-8 leading-[1.7] font-light">
          Nos alchimistes publient régulièrement de nouveaux agents, études et retours d'expérience. Rejoignez notre communauté pour ne rien manquer.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/ateliers"
            className="inline-block bg-white text-[#C06721] text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
          >
            Découvrir nos ateliers pratiques →
          </Link>
          <NewsletterButton
            variant="outline"
            size="md"
            label="Suivre nos projets"
            className="border-white/40 text-white hover:bg-white/10 rounded-[8px]"
          />
        </div>
      </div>

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

              <div className="w-full h-full rounded-[12px] overflow-hidden shadow-2xl bg-black border border-white/10">
                {selectedResource.type === "video" ? (
                  <video
                    src={selectedResource.url}
                    aria-label={`Démonstration vidéo complète : ${selectedResource.title}`}
                    title={selectedResource.title}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : selectedResource.type === "audio" ? (
                  <div className="p-8 md:p-12 bg-[#1F4F6E] text-white text-center flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-[12px] bg-[#C06721]/20 border border-[#C06721]/40 flex items-center justify-center mb-6 shadow-xl">
                      <Headphones className="w-10 h-10 text-[#C06721]" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#02ADAB] mb-2">
                      Podcast &amp; Dialogue Audio
                    </span>
                    <h3 className="text-2xl md:text-3xl font-light mb-3 text-white max-w-lg">
                      {selectedResource.title}
                    </h3>
                    <p className="text-sm text-white/75 max-w-md mb-6 leading-relaxed font-light">
                      {selectedResource.description}
                    </p>
                    <audio
                      src={selectedResource.url}
                      className="w-full max-w-md h-12 rounded-[8px] mb-6"
                      controls
                      autoPlay
                    />
                    {(selectedResource.pdfUrl || selectedResource.appUrl) && (
                      <a
                        href={selectedResource.pdfUrl || selectedResource.appUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#C06721] text-white text-xs font-medium uppercase tracking-wider hover:bg-white hover:text-[#1F4F6E] transition-colors shadow-lg"
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
                <div className="mt-4 w-full bg-[#1F4F6E] border border-white/15 rounded-[12px] p-4 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
                  <div className="flex items-center gap-3 text-left">
                    <img
                      src={cloudinaryUrl(selectedResource.expert.avatar, 200)}
                      width={48}
                      height={48}
                      loading="lazy"
                      alt={`${selectedResource.expert.name} — ${selectedResource.expert.role}`}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#C06721] shrink-0"
                    />
                    <div>
                      <span className="text-[10px] font-medium uppercase tracking-wider text-[#02ADAB] block">
                        Accompagnement Personnalisé
                      </span>
                      <div className="font-medium text-sm text-white">
                        {selectedResource.expert.name} — <span className="text-white/70 font-light text-xs">{selectedResource.expert.role}</span>
                      </div>
                      <p className="text-xs text-white/80 max-w-xl italic mt-0.5">
                        « {selectedResource.expert.hook} »
                      </p>
                    </div>
                  </div>
                  <a
                    href={selectedResource.expert.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-[8px] bg-[#C06721] text-white text-xs font-medium uppercase tracking-wider hover:bg-white hover:text-[#1F4F6E] transition-colors shadow-sm"
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
