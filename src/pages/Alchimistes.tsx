import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Instagram, ExternalLink, Zap, Youtube, ChevronDown, Globe, ArrowRight } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { SEO } from '../components/SEO';
import { alchimistes } from '../data/alchimistes';
import { cloudinaryUrl, cloudinarySrcSet } from '../utils/cloudinary';

const nouveauxAlchimistes = [
  {
    name: "Alex Le Bloch Moan",
    role: "Nouvel Alchimiste",
    initials: "AL",
    url: "https://e-portfolio-alexleblochmoan-2026.netlify.app",
    description: "Concepteur et développeur de solutions innovantes et interactives."
  },
  {
    name: "Imane Zagour",
    role: "Nouvelle Alchimiste",
    initials: "IZ",
    url: "https://imanezagour.netlify.app/#hero",
    description: "Créatrice digitale spécialisée dans l'intégration et l'expérience utilisateur."
  },
  {
    name: "Inès Laghzou",
    role: "Nouvelle Alchimiste",
    initials: "IL",
    url: "https://e-portfolioines.netlify.app",
    description: "Experte en projets digitaux et en nouvelles technologies."
  },
  {
    name: "Laura Louit",
    role: "Nouvelle Alchimiste",
    initials: "LL",
    url: "https://laura-louit.netlify.app",
    description: "Pilote de projets innovants alliant design et technologie."
  },
  {
    name: "Nancy Ghanem",
    role: "Nouvelle Alchimiste",
    initials: "NG",
    url: "https://nancy-ghanem.vercel.app/#presentation",
    description: "Développeuse et intégratrice de dispositifs web modernes."
  },
  {
    name: "Apolline Bellaclas",
    role: "Nouvelle Alchimiste",
    initials: "AB",
    url: "https://e-portefolio.vercel.app",
    description: "Découvrez nos travaux, expérimentations et portfolios créatifs d'alchimie web."
  }
];

const WorksAccordion = ({ works, handleWorkClick }: { works: any[], handleWorkClick: (e: React.MouseEvent, url: string, label: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  if (!works || works.length === 0) return null;

  return (
    <div className="pt-6 mt-auto border-t border-deep-blue/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full group/btn py-2"
      >
        <div className="flex items-center gap-2">
          <Zap className={`h-4 w-4 transition-colors duration-300 ${isOpen ? 'text-copper-orange' : 'text-deep-blue/30'}`} />
          <span className="text-xs font-black uppercase tracking-widest text-deep-blue group-hover/btn:text-copper-orange transition-colors">
            Ses Œuvres
          </span>
        </div>
        <div className={`p-1 rounded-full transition-all duration-300 ${isOpen ? 'bg-copper-orange/10 text-copper-orange rotate-180' : 'bg-deep-blue/5 text-deep-blue/30'}`}>
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-2 pt-4 pb-2">
              {works.map((work, idx) => (
                <a
                  key={idx}
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleWorkClick(e, work.url, work.label)}
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-deep-blue/5 hover:border-copper-orange/30 hover:bg-copper-orange/5 transition-all group/link"
                >
                  <span className="text-xs font-bold text-deep-blue group-hover/link:text-copper-orange transition-colors line-clamp-1">{work.label}</span>
                  <ExternalLink className="h-3 w-3 text-deep-blue/30 group-hover/link:text-copper-orange transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AlchimisteCard: React.FC<{ person: any, index: number, handleWorkClick: (e: React.MouseEvent, url: string, label: string) => void }> = ({ person, index, handleWorkClick }) => {
  const anchorId = person.anchor ? person.anchor.replace('#', '') : (person.id || undefined);

  return (
    <motion.div
      key={person.name}
      id={anchorId}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex flex-col h-full scroll-mt-28"
    >
      <div className="group flex flex-col h-full overflow-hidden rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200">
        {/* Profile Header: Clickable Image & Name -> /alchimistes/:id */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Link
            to={`/alchimistes/${person.id}`}
            className="block w-full h-full relative"
            aria-label={`Découvrir le profil de ${person.name}`}
          >
            <img
              src={cloudinaryUrl(person.image, 800)}
              srcSet={cloudinarySrcSet(person.image)}
              sizes="(max-width: 768px) 100vw, 33vw"
              width={600}
              height={750}
              loading={index === 0 ? undefined : 'lazy'}
              alt={`${person.name} — ${person.role}, expert IA France agence Alkymya`}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/90 via-deep-blue/20 to-transparent p-8 flex flex-col justify-end">
              <p className="text-copper-orange font-black uppercase tracking-[0.2em] text-xs mb-2">L'Alchimiste</p>
              <h3 className="text-3xl font-heading font-black text-white group-hover:text-[#02ADAB] transition-colors">{person.name}</h3>
            </div>
          </Link>

          <div className="absolute top-6 left-6 right-6 z-10 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {person.socials?.instagram && (
              <a href={person.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1F4F6E]/80 hover:bg-copper-orange text-white backdrop-blur-md transition-all" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            )}
            {person.socials?.tiktok && (
              <a href={person.socials.tiktok} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1F4F6E]/80 hover:bg-copper-orange text-white backdrop-blur-md transition-all" aria-label="TikTok">
                <FaTiktok size={16} />
              </a>
            )}
            {"youtube" in (person.socials || {}) && person.socials?.youtube && (
              <a href={person.socials.youtube as string} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1F4F6E]/80 hover:bg-copper-orange text-white backdrop-blur-md transition-all" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            )}
            {person.socials?.linkedin && (
              <a href={person.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1F4F6E]/80 hover:bg-copper-orange text-white backdrop-blur-md transition-all" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {(person.website || person.socials?.website) && (
              <a
                href={(person.website || person.socials?.website) as string}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#1F4F6E]/80 hover:bg-copper-orange text-white backdrop-blur-md transition-all"
                title={person.websiteLabel || "Site web officiel"}
                aria-label="Site web"
              >
                <Globe className="h-4 w-4" />
              </a>
            )}
            {person.socials?.mail && (
              <a href={`mailto:${person.socials.mail}`} className="p-2 rounded-full bg-[#1F4F6E]/80 hover:bg-copper-orange text-white backdrop-blur-md transition-all" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Profile Content: Role, link to mini-page & URLs below profile */}
        <div className="p-7 flex flex-col flex-grow space-y-5">
          <div>
            <p className="text-sm font-bold text-deep-blue/60 uppercase tracking-widest mb-3">{person.role}</p>
            <Link
              to={`/alchimistes/${person.id}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#02ADAB] hover:text-[#037971] transition-colors"
            >
              <span>Découvrir sa présentation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Website direct CTA banner */}
          {person.website && (
            <a
              href={person.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full p-3.5 rounded-2xl bg-gradient-to-r from-copper-orange/15 via-copper-orange/5 to-transparent border border-copper-orange/30 hover:border-copper-orange hover:bg-copper-orange text-deep-blue hover:text-white transition-all duration-300 group/site shadow-sm mt-auto"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-copper-orange/20 text-copper-orange group-hover/site:bg-white/20 group-hover/site:text-white transition-colors">
                  {person.websiteIcon === 'linkedin' ? <Linkedin className="w-4 h-4" /> : <Globe className="w-4 h-4" />}
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-black uppercase tracking-wider text-copper-orange group-hover/site:text-white block">
                    {person.websiteTag || "Site officiel"}
                  </span>
                  <span className="text-xs font-bold font-heading line-clamp-1">
                    {person.websiteLabel || person.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 opacity-60 group-hover/site:opacity-100 group-hover/site:translate-x-0.5 transition-all shrink-0 ml-2" />
            </a>
          )}

          {/* Lab Works / Portfolio section */}
          {person.works && person.works.length > 0 && (
            <div className="mt-auto">
              <WorksAccordion works={person.works} handleWorkClick={handleWorkClick} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Alchimistes() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Lock scroll when video is open
  React.useEffect(() => {
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

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Experts IA France & Fondateurs Agence IA | Alkymya"
        description="Experts IA France : Cyril Garnier, Léonie Egesipe, Véronique Landereau et Mariana Didier Laurent. Accompagnement IA dirigeants et indépendants."
        keywords="experts IA France, accompagnement IA dirigeants et indépendants, agence IA, studio création IA, formation IA OPCO"
        canonicalPath="/alchimistes"
        ogImage="https://res.cloudinary.com/dokzioyu4/image/upload/v1758192982/66cffcd8-15f1-415f-b423-9f428d63e22f_gqjd53.png"
        type="AboutPage"
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10">
                <video
                  src={selectedVideo}
                  aria-label="Démonstration vidéo réalisée par les experts IA Alkymya"
                  title="Démonstration vidéo Alkymya"
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

      {/* HERO SECTION DESIGN SYSTEM */}
      <header className="bg-[#1F4F6E] text-white py-20 px-6 sm:px-10 text-center relative overflow-hidden">
        <div className="max-w-[700px] mx-auto relative z-10">
          <p className="text-[0.85rem] tracking-[0.15em] uppercase text-[#02ADAB] mb-4 font-normal">
            Experts IA France · Agence IA Alkymya
          </p>
          <h1 className="font-light text-[2.4rem] sm:text-[2.6rem] leading-[1.2] mb-5 text-white">
            Experts IA France &amp; fondateurs<br />
            <strong className="font-medium text-white">de l'agence Alkymya.</strong>
          </h1>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-white/75 max-w-[620px] mx-auto leading-[1.7] font-light mb-8">
            Notre studio création IA réunit des experts IA France engagés dans l'accompagnement IA dirigeants et indépendants, la stratégie SEO et GEO, la direction artistique générative, la santé et les services à la personne.
          </p>

          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">{alchimistes.length}</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Alchimistes &amp; Associés</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">6</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Nouveaux Talents</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">100%</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Terrain &amp; Pratique</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">20+ ans</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Expérience cumulée</div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION DU COLLECTIF PRINCIPAL */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Gouvernance &amp; Fondateurs
        </p>
        <h2 className="text-[1.8rem] sm:text-[2rem] font-light mb-3 text-[#1F4F6E]">
          Accompagnement IA dirigeants <strong className="font-medium text-[#1F4F6E]">&amp; experts de terrain</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-12 font-normal">
          Chaque alchimiste de notre agence IA apporte un regard affûté pour l'accompagnement IA dirigeants et indépendants, la direction artistique et les ateliers pratiques en entreprise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {alchimistes.map((person, index) => (
            <AlchimisteCard 
              key={person.name} 
              person={person} 
              index={index} 
              handleWorkClick={handleWorkClick} 
            />
          ))}
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* Section Nos Nouveaux Alchimistes */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Transmission &amp; Nouvelle Génération
        </p>
        <h2 className="text-[1.8rem] sm:text-[2rem] font-light mb-3 text-[#1F4F6E]">
          Nos 6 nouveaux talents <strong className="font-medium text-[#1F4F6E]">du studio création IA</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-12 font-normal">
          Découvrez les e-portfolios et les projets innovants réalisés par notre nouvelle vague d'alchimistes formés et accompagnés par Alkymya.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nouveauxAlchimistes.map((nouveau, index) => (
            <div
              key={nouveau.name}
              className="bg-white rounded-[12px] p-7 shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-[8px] bg-[rgba(192,103,33,0.12)] text-[#C06721] flex items-center justify-center font-medium text-sm">
                    {nouveau.initials}
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] font-medium text-[#1F4F6E] leading-snug">
                      {nouveau.name}
                    </h3>
                    <p className="text-[0.75rem] text-[#7a9ab0] uppercase tracking-wider font-normal">{nouveau.role}</p>
                  </div>
                </div>

                <p className="text-[0.9rem] text-[#5a7a90] leading-[1.6] mb-6">
                  {nouveau.description}
                </p>
              </div>

              <a
                href={nouveau.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-[#02ADAB] hover:text-[#037971] transition-colors self-start mt-auto"
              >
                <span>Consulter l'e-portfolio</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* CTA FINAL : BANNIÈRE ORANGE #C06721 */}
      <div className="bg-[#C06721] text-white text-center py-[70px] px-10">
        <h2 className="text-[2rem] font-light mb-3.5 text-white">
          Rejoignez nos experts <strong className="font-medium text-white">de l'agence IA Alkymya</strong>
        </h2>
        <p className="text-[1.05rem] text-white/80 max-w-[500px] mx-auto mb-8 leading-[1.7] font-light">
          Nous sommes constamment en quête de nouveaux talents, d'experts métiers et de créateurs pour co-développer nos projets d'innovation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/rejoindre"
            className="inline-block bg-white text-[#C06721] text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
          >
            Postuler pour nous rejoindre →
          </Link>
          <Link
            to="/contact?subject=Rejoindre%20le%20collectif%20Alkymya"
            className="inline-block bg-white/10 hover:bg-white/20 text-white text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 border border-white/25"
          >
            Écrire au collectif
          </Link>
        </div>
      </div>
    </div>
  );
}
