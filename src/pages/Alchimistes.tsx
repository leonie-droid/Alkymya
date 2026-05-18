import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Instagram, Twitter, ExternalLink, Zap, Youtube, ChevronDown } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { Card } from '@/components/ui/card';

const alchimistes = [
  {
    name: "Cyril Garnier",
    role: "Directeur Associé",
    bio: "Expert reconnu de l'accompagnement entrepreneurial, Cyril Garnier occupe aujourd'hui le poste de Directeur Associé chez Alkymya. Fort d'une expérience marquante à la tête de SNCF Développement, où il a soutenu la création de milliers d'emplois, il met désormais son savoir-faire au service de l'innovation de rupture. Au sein d'Alkymya, il agit comme un architecte de la croissance, spécialisé dans la transformation d'idées complexes en succès commerciaux concrets.",
    details: "Son rôle consiste à sécuriser le \"Go-to-Market\" des projets et à structurer des modèles économiques robustes, faisant de lui un pont stratégique entre l'agilité des startups et la puissance des grands groupes. En résumé, Cyril Garnier est un accélérateur de business qui transforme l'innovation théorique en réalité industrielle et économique.",
    image: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758192982/66cffcd8-15f1-415f-b423-9f428d63e22f_gqjd53.png",
    socials: { linkedin: "https://www.linkedin.com/in/cyril-garnier-89697b1/", instagram: "https://www.instagram.com/alkymya_cyril", tiktok: "https://www.tiktok.com/@cyrilgarnierphoto", youtube: "https://www.youtube.com/@cyrilgarnier9475", mail: "cyril@alkymya.co" },
    works: [
      { label: "Doctrine IAG : Dialogue sur la Stratégie Cachée", url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1777500626/La_Doctrine_IAG___Dialogue_sur_la_Strate%CC%81gie_Cache%CC%81e_de_l_E%CC%80re_Trump_zwxlqi_vlfkkw.pdf" },
      { label: "Quiz Maturité IA Entreprise", url: "https://maturiteia.alkymya.co/" },
      { label: "Analyseur de CV", url: "https://analysercvpro.alkymya.co/" },
      { label: "Analyseur de mémoire Pro", url: "https://analyseurdememoire.alkymya.co/" },
      { label: "Analyseur de photo", url: "https://analyseurdephoto.alkymya.co/" },
      { label: "Analyseur de site web", url: "https://analyseurdesiteweb.alkymya.co/" },
      { label: "Business Game: NoNo BanaBa", url: "https://nonobanaba.netlify.app/" },
      { label: "Soda l'agent pédagogique", url: "https://www.genspark.ai/agents?type=custom_super_agent&agent_id=20503058-4b49-40f7-b277-b38c21724a41" },
      { label: "Mon quizz IA", url: "https://quiz.alkymya.co/" },
    ]
  },
  {
    name: "Olivier Dion",
    role: "Fondateur de Onecub & Expert Data",
    bio: "Pionnier des Espaces de Données et expert en gouvernance numérique, le fondateur de Onecub est une figure centrale de la conformité réglementaire européenne. Entrepreneur engagé (notamment via Themy-x), il accompagne la transformation digitale de secteurs stratégiques comme la mobilité, l'énergie et l'agriculture en bâtissant des Data Spaces souverains.",
    details: "Expert auprès des instances de régulation et intervenant régulier pour la Commission Européenne, GAIA-X ou encore le gouvernement coréen, il contribue activement à définir les standards mondiaux de la donnée à travers ses publications et ses conférences internationales.",
    image: "https://res.cloudinary.com/dokzioyu4/image/upload/v1760374889/Photo_Olivier_Dion_reve_dk2c5e.png",
    socials: { linkedin: "https://www.linkedin.com/in/olivierdion/", instagram: "", mail: "" },
    works: [
      { label: "Lab Postal 2017", url: "https://www.youtube.com/watch?v=bubawgP2gU0" },
      { label: "TEDxLaBaule", url: "https://www.youtube.com/watch?v=u6Eh26k6O8U" },
      { label: "MyData Online 2020", url: "https://online2020.mydata.org/presenter/olivier-dion/" },
      { label: "IGF / GDPR", url: "https://dig.watch/event/14th-internet-governance-forum/gdpr-after-more-one-year-how-make-it-happen" },
      { label: "Data de confiance", url: "https://www.thedigitalnewdeal.org/wp-content/uploads/DND_DATA-DE-CONFIANCE.pdf" },
    ]
  },
  {
    name: "Léonie Egesipe",
    role: "Chef de Projet Digital",
    bio: "Etudiante en chef de Projet Digital. Au sein d’Alkymya, Léonie occupe un rôle central dans le déploiement opérationnel des stratégies d’innovation. En binôme étroit avec Cyril Garnier, elle assure la direction des projets numériques, transformant les visions stratégiques du studio en dispositifs digitaux concrets et performants.",
    details: "À la fois organisatrice et stratège, elle pilote la présence numérique d'Alkymya et optimise les outils de communication pour renforcer l'influence du studio. Sa mission est double : garantir une rigueur de pilotage irréprochable et apporter une agilité digitale indispensable pour partager avec les porteurs de projets leur transformation.",
    image: "https://res.cloudinary.com/dokzioyu4/image/upload/v1762252984/725879fe-afa3-4afa-a900-229030c002de_1_xoep2v.png",
    socials: { instagram: "https://www.instagram.com/alkymya_leonie?igsh=YnRicG01NDBka3lx", linkedin: "https://www.linkedin.com/in/l%C3%A9onie-egesipe-96a283291/", mail: "leonie@alkymya.co" },
    works: [
      { label: "Vidéo analyseur de photo", url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1773761166/46b26247d1084cb39b354fe4c9842b29_aszzay_f48sjs.mov" },
      { label: "Vidéo analyseur de cv", url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1773762096/c599dc6cd0ef4e6196a739c87b2cb773_gxn0lj.mov" },
      { label: "Vidéo analyseur de mémoire", url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1776374160/bac00848173641fd882d43dc3b970835_jtyspz.mov" },
    ]
  }
];

const WorksAccordion = ({ works, handleWorkClick }: { works: any[], handleWorkClick: (e: React.MouseEvent, url: string, label: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="pt-6 mt-auto border-t border-deep-blue/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full group/btn py-2"
      >
        <div className="flex items-center gap-2">
          <Zap className={`h-4 w-4 transition-colors duration-300 ${isOpen ? 'text-copper-orange' : 'text-deep-blue/30'}`} />
          <h3 className="text-xs font-black uppercase tracking-widest text-deep-blue group-hover/btn:text-copper-orange transition-colors">
            Leurs Œuvres
          </h3>
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
    <div className="min-h-screen py-32 px-4 bg-background">
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
                className="absolute -top-14 right-0 text-white bg-copper-orange rounded-full p-3 shadow-xl hover:scale-110 transition-transform z-[110]"
                onClick={() => setSelectedVideo(null)}
                aria-label="Fermer la vidéo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10">
                <video
                  src={selectedVideo}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="container mx-auto px-4 max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-black text-deep-blue mb-8">
            Nos <span className="text-copper-orange">Alchimistes</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Rencontrez les esprits créatifs qui font battre le cœur d'Alkymya. Des visionnaires passionnés par la transformation et l'innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {alchimistes.map((person, index) => (
            <motion.div
              key={person.name}
              id={person.name === "Cyril Garnier" ? "cyril-garnier" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              <Card className="group flex flex-col h-full overflow-hidden border-none shadow-2xl transition-all duration-500 rounded-[2.5rem] bg-white/70 backdrop-blur-md hover:shadow-copper-orange/10 border border-white/20">
                {/* Profile Header: Image & Role */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/90 via-deep-blue/20 to-transparent p-8 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {person.socials.instagram && (
                        <a href={person.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-copper-orange text-white backdrop-blur-md transition-all">
                          <Instagram className="h-4 w-4" />
                        </a>
                      )}
                      {person.socials.tiktok && (
                        <a href={person.socials.tiktok} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-copper-orange text-white backdrop-blur-md transition-all">
                          <FaTiktok size={16} />
                        </a>
                      )}
                      {"youtube" in person.socials && person.socials.youtube && (
                        <a href={person.socials.youtube as string} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-copper-orange text-white backdrop-blur-md transition-all">
                          <Youtube className="h-4 w-4" />
                        </a>
                      )}
                      {person.socials.linkedin && (
                        <a href={person.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-copper-orange text-white backdrop-blur-md transition-all">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {person.socials.mail && (
                        <a href={`mailto:${person.socials.mail}`} className="p-2 rounded-full bg-white/10 hover:bg-copper-orange text-white backdrop-blur-md transition-all">
                          <Mail className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-copper-orange font-black uppercase tracking-[0.2em] text-xs mb-2">L'Alchimiste</p>
                    <h2 className="text-3xl font-heading font-black text-white">{person.name}</h2>
                  </div>
                </div>
                
                {/* Profile Content */}
                <div className="p-8 flex flex-col flex-grow space-y-6">
                  <div>
                    <p className="text-sm font-bold text-deep-blue/60 uppercase tracking-widest mb-3">{person.role}</p>
                    <p className="text-base leading-relaxed text-muted-foreground font-medium">
                      {person.bio}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground/80 italic border-l-2 border-copper-orange/30 pl-4 py-1">
                    {person.details}
                  </p>

                  {/* Lab Works / Portfolio section */}
                  {'works' in person && person.works && (
                    <WorksAccordion works={person.works} handleWorkClick={handleWorkClick} />
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 p-12 rounded-[3rem] bg-deep-blue text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)]" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 relative z-10 text-white">
            Envie de devenir un alchimiste ?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 relative z-10">
            Nous sommes toujours à la recherche de nouveaux talents, pour les transformer en fidèle alchimistes d'Alkymya.
          </p>
          <Link to="/rejoindre" className="inline-block px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-bold transition-all transform hover:scale-105 relative z-10">
            Nous rejoindre
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
