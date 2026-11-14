import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Play,
  Quote,
  X,
  Youtube
} from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { alchimistes } from '../data/alchimistes';
import { SEO } from '../components/SEO';

export default function AlchimisteDetail() {
  const { id } = useParams<{ id: string }>();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const person = alchimistes.find((a) => a.id === id);

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  const handleWorkClick = (e: React.MouseEvent, url: string, label: string) => {
    if (label.toLowerCase().includes('vidéo') || url.endsWith('.mov') || url.endsWith('.mp4')) {
      e.preventDefault();
      setSelectedVideo(url);
    }
  };

  if (!person) {
    return (
      <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] flex items-center justify-center px-6 py-24">
        <div className="bg-white rounded-[12px] p-10 max-w-md w-full text-center shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
          <h1 className="text-2xl font-medium text-[#1F4F6E] mb-3">Profil introuvable</h1>
          <p className="text-sm text-[#5a7a90] mb-6 leading-relaxed">
            Ce profil d'alchimiste n'existe pas ou a été déplacé.
          </p>
          <Link
            to="/alchimistes"
            className="inline-flex items-center gap-2 bg-[#1F4F6E] hover:bg-[#02ADAB] text-white text-sm font-medium py-3 px-6 rounded-[8px] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour aux Alchimistes</span>
          </Link>
        </div>
      </div>
    );
  }

  const otherAlchimistes = alchimistes.filter((a) => a.id !== person.id);
  const seoTitle = `${person.name} — Expert IA France | Alkymya`.slice(0, 60);
  const seoDescription = `${person.name}, ${person.role} chez Alkymya. ${person.bio}`.slice(0, 152).trim() + '...';

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonicalPath={`/alchimistes/${person.id}`}
        ogImage={person.image}
        type="ProfilePage"
      />

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl h-auto max-h-[90vh] aspect-video md:aspect-[9/16] md:w-[450px] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute -top-14 right-0 text-white bg-[#C06721] rounded-full p-3 shadow-xl hover:scale-110 transition-transform z-[110] cursor-pointer"
                onClick={() => setSelectedVideo(null)}
                aria-label="Fermer la vidéo"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="w-full h-full rounded-[12px] overflow-hidden shadow-2xl bg-black border border-white/10">
                <video
                  src={selectedVideo}
                  aria-label={`Démonstration vidéo de ${person.name}`}
                  title={person.name}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* HERO PROFILE */}
      <header className="bg-[#1F4F6E] text-white py-14 sm:py-20 px-6">
        <div className="max-w-[1000px] mx-auto">
          <Link
            to="/alchimistes"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#02ADAB] hover:text-white transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour aux Alchimistes</span>
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="w-48 sm:w-56 aspect-[4/5] rounded-[12px] overflow-hidden border border-white/15 shadow-lg shrink-0 bg-[#163b52]">
              <img
                src={person.image}
                alt={`${person.name} — ${person.role}, expert IA France Alkymya`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-[0.8rem] tracking-[0.16em] uppercase text-[#02ADAB] mb-2.5 font-medium">
                {person.kicker}
              </p>
              <h1 className="font-light text-[2.2rem] sm:text-[2.7rem] leading-[1.15] mb-3 text-white">
                <strong className="font-medium text-white">{person.name}</strong>
              </h1>
              <p className="text-[1rem] sm:text-[1.1rem] text-white/80 font-light mb-6">
                {person.role}
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                {person.website && (
                  <a
                    href={person.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-[8px] bg-[#C06721] hover:bg-[#a85517] text-white text-xs font-medium transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>{person.websiteLabel}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {person.socials.linkedin && (
                  <a
                    href={person.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-[8px] bg-white/10 hover:bg-[#02ADAB] text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {person.socials.instagram && (
                  <a
                    href={person.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-[8px] bg-white/10 hover:bg-[#02ADAB] text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {person.socials.tiktok && (
                  <a
                    href={person.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-[8px] bg-white/10 hover:bg-[#02ADAB] text-white transition-colors"
                    aria-label="TikTok"
                  >
                    <FaTiktok size={16} />
                  </a>
                )}
                {person.socials.youtube && (
                  <a
                    href={person.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-[8px] bg-white/10 hover:bg-[#02ADAB] text-white transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                )}
                {person.socials.mail && (
                  <a
                    href={`mailto:${person.socials.mail}`}
                    className="p-2.5 rounded-[8px] bg-white/10 hover:bg-[#02ADAB] text-white transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENU PRÉSENTATION & LIENS */}
      <section className="max-w-[1000px] mx-auto py-[60px] px-6 space-y-10">
        {/* Présentation détaillée */}
        <div className="bg-white rounded-[12px] p-8 sm:p-10 shadow-[0_2px_16px_rgba(31,79,110,0.08)] space-y-6">
          <div>
            <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2 font-medium">
              Présentation
            </p>
            <h2 className="text-[1.6rem] sm:text-[1.8rem] font-light text-[#1F4F6E]">
              Parcours &amp; expertise <strong className="font-medium">d'alchimiste</strong>
            </h2>
          </div>

          <div className="space-y-4 text-[1rem] text-[#4a6a80] leading-[1.75] font-normal">
            <p>{person.bio}</p>
            <p>{person.details}</p>
          </div>

          {person.quote && (
            <blockquote className="bg-[#f4f8fb] border-l-3 border-[#02ADAB] rounded-r-[8px] p-5 flex items-start gap-3">
              <Quote className="w-5 h-5 text-[#02ADAB] shrink-0 mt-0.5" />
              <p className="text-[0.98rem] text-[#1F4F6E] italic leading-[1.65] font-normal">
                « {person.quote} »
              </p>
            </blockquote>
          )}
        </div>

        {/* Liens & Œuvres */}
        {person.works && person.works.length > 0 && (
          <div className="bg-white rounded-[12px] p-8 sm:p-10 shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
            <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2 font-medium">
              Réalisations &amp; Liens
            </p>
            <h2 className="text-[1.5rem] sm:text-[1.7rem] font-light text-[#1F4F6E] mb-6">
              Œuvres et liens de <strong className="font-medium">{person.name}</strong>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {person.works.map((work, idx) => {
                const isVideo =
                  work.label.toLowerCase().includes('vidéo') ||
                  work.url.endsWith('.mov') ||
                  work.url.endsWith('.mp4');
                return (
                  <a
                    key={idx}
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleWorkClick(e, work.url, work.label)}
                    className="flex items-center justify-between p-4 rounded-[8px] bg-[#f4f6f9] border border-[rgba(31,79,110,0.08)] hover:border-[#02ADAB] hover:bg-[#f0f8f8] transition-all group"
                  >
                    <span className="text-sm font-medium text-[#1F4F6E] group-hover:text-[#037971] transition-colors pr-3">
                      {work.label}
                    </span>
                    {isVideo ? (
                      <Play className="w-4 h-4 text-[#C06721] shrink-0 fill-current" />
                    ) : (
                      <ExternalLink className="w-4 h-4 text-[#02ADAB] shrink-0" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* Autres Alchimistes */}
        <div>
          <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2 font-medium">
            Le Collectif
          </p>
          <h2 className="text-[1.4rem] font-light text-[#1F4F6E] mb-5">
            Découvrir les autres <strong className="font-medium">Alchimistes</strong>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherAlchimistes.map((other) => (
              <Link
                key={other.id}
                to={`/alchimistes/${other.id}`}
                className="bg-white rounded-[12px] p-4 shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_24px_rgba(31,79,110,0.14)] hover:-translate-y-0.5 transition-all flex items-center gap-3.5 group"
              >
                <img
                  src={other.image}
                  alt={other.name}
                  className="w-12 h-12 rounded-[8px] object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-medium text-[#1F4F6E] group-hover:text-[#C06721] transition-colors truncate">
                    {other.name}
                  </h3>
                  <p className="text-xs text-[#5a7a90] truncate">{other.kicker}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#02ADAB] shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL ORANGE #C06721 */}
      <div className="bg-[#C06721] text-white text-center py-[70px] px-10">
        <h2 className="text-[2rem] font-light mb-3.5 text-white">
          Échangez avec <strong className="font-medium text-white">{person.name}</strong> et l'équipe Alkymya
        </h2>
        <p className="text-[1.05rem] text-white/85 max-w-[520px] mx-auto mb-8 leading-[1.7] font-light">
          Un projet de formation Qualiopi, d'atelier pratique ou d'accompagnement ? Contactez directement notre collectif.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-block bg-white text-[#C06721] text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
          >
            Contacter l'équipe →
          </Link>
          <Link
            to="/alchimistes"
            className="inline-block bg-white/10 hover:bg-white/20 text-white text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 border border-white/25"
          >
            Tous les Alchimistes
          </Link>
        </div>
      </div>
    </div>
  );
}
