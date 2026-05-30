import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { cn } from '../../lib/utils';

const categories = ["Toutes", "Les chemins interdits", "Culture pop", "Les princesses", "Léonia"];

const works = [
  {
    id: 1,
    name: "Angela Davis",
    category: "Les chemins interdits",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1772112521/e23iKTwc_u35aql.png",
    description: "Angela Davis est une figure emblématique de la lutte contre le racisme, le patriarcat et le système carcéral, devenue une icône mondiale de la résistance politique et de la justice sociale."
  },
  {
    id: 2,
    name: "Shirley Chisholm",
    category: "Les chemins interdits",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1772112520/grq2NVff_rcr9vi.png",
    description: "Shirley Chisholm fut la première femme noire élue au Congrès et la première à briguer l'investiture présidentielle, restant une icône de l'indépendance."
  },
  {
    id: 3,
    name: "Joséphine Baker",
    category: "Les chemins interdits",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1772112521/d9eRiVt6_pmcd6l.png",
    description: "Joséphine Baker fut une militante humaniste infatigable et la première femme noire à entrer au Panthéon. Icône mondiale du music-hall, espionne et héroïne de la Résistance française."
  },
  {
    id: 4,
    name: "Rosa Parks",
    category: "Les chemins interdits",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1772112521/ucGK9H1u_xjx5t7.png",
    description: "Rosa Parks est devenue un symbole mondial des droits civiques en refusant de céder sa place à un passager blanc dans un bus, déclenchant ainsi le célèbre boycott de Montgomery."
  },
  {
    id: 5,
    name: "Katherine Johnson",
    category: "Les chemins interdits",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1772112521/jnya8Go8_e6eczn.png",
    description: "Katherine Johnson a calculé les trajectoires cruciales pour les premières missions spatiales américaines et le succès historique de l'alunissage d'Apollo 11."
  },
  {
    id: 6,
    name: "Cicely Tyson",
    category: "Les chemins interdits",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1772112520/moVD6Z2d_pm4jnx.png",
    description: "Cicely Tyson a transformé la représentation des femmes noires à l'écran en refusant les rôles stéréotypés au profit de personnages empreints de force et de dignité."
  },
  {
    id: 7,
    name: "Chapeau melon et bottes de cuir",
    category: "Culture pop",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1772111909/giJ307Jk_hcidx5.png",
    description: "Chapeau melon et bottes de cuir met en scène le duo chic John Steed et Emma Peel dans une mission d'espionnage excentrique pour contrer une menace climatique mondiale."
  },
  {
    id: 8,
    name: "La Fée Clochette",
    category: "Culture pop",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1767127109/ya7Z8TI3_iaygii.png",
    description: "La Fée Clochette est devenue un icône mondiale du merveilleux, célèbre pour sa poussière magique qui permet de s'envoler vers le Pays Imaginaire."
  },
  {
    id: 9,
    name: "300",
    category: "Culture pop",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1767127394/kXMN69tr_iskmoq.png",
    description: "300 dépeint le combat héroïque du roi Léonidas et de ses soldats spartiates résistant jusqu'à la mort face à l'immense armée perse lors de la bataille des Thermopyles."
  },
  {
    id: 10,
    name: "Le Wakanda",
    category: "Culture pop",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1767127553/MVpvT2RW_s1n5ul.png",
    description: "Le Wakanda prospère grâce au précieux vibranium, mêlant traditions ancestrales et futurisme sous la protection de son souverain, le Black Panther."
  },
  {
    id: 11,
    name: "Harry Potter",
    category: "Culture pop",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1767128268/n0DtTbCd_n4wyfq.png",
    description: "Harry Potter a triomphé du mage noir Voldemort pour sauver le monde de la magie tout en découvrant la force de l'amitié et du sacrifice."
  },
  {
    id: 12,
    name: "Kill Bill",
    category: "Culture pop",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1767010924/WhatsApp_Image_2025-12-10_at_19.10.09_btr5iu.jpg",
    description: "Kill Bill suit la quête sanglante de « La Mariée » pour éliminer ses anciens complices et leur chef, Bill, après avoir survécu à une tentative d'assassinat."
  },
  {
    id: 13,
    name: "La Grenouille et le Nénuphar",
    category: "Les princesses",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/c_fill,g_auto,w_900,h_1600/v1780150189/Grenouille_sur_n_nuphar_v2_mdqmh4.png",
    description: "Un instant magique et suspendu au cœur de l'étang, où le fantastique rencontre la délicatesse de la nature."
  },
  {
    id: 14,
    name: "La Princesse du Château",
    category: "Les princesses",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/c_fill,g_auto,w_900,h_1600/v1780149343/Princesse_ch_teau_A_vn3qdo.png",
    description: "Une silhouette royale contemplant l'immensité de son empire depuis les remparts d'un royaume oublié."
  },
  {
    id: 15,
    name: "Splendeur Lunaire",
    category: "Les princesses",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/c_fill,g_auto,w_900,h_1600/v1780149314/1NnfFRMx_hv8wpz.png",
    description: "Un portrait empreint de mystère et d'élégance, mêlant la noblesse d'une souveraine à la pureté de la nuit."
  },
  {
    id: 16,
    name: "L'Éclat d'Ambre",
    category: "Les princesses",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/c_fill,g_auto,w_900,h_1600/v1780149268/Kkz4vEfu_g7eoxy.png",
    description: "La parure étincelante et d'or d'une reine de légende, illuminant son destin grandiose."
  },
  {
    id: 17,
    name: "Le Songe Floral",
    category: "Les princesses",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/c_fill,g_auto,w_900,h_1600/v1780149266/Ek3zYa7Q_tydsr1.png",
    description: "Une union délicate entre la grâce féminine et la beauté éphémère d'une éclosion printanière."
  },
  {
    id: 18,
    name: "La Reine Sylvestre",
    category: "Les princesses",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/c_fill,g_auto,w_900,h_1600/v1780149210/fNqSTVBm_tgtklu.jpg",
    description: "Un secret murmuré au fond des bois, mariant la majesté sauvage de la nature à la douceur d'un songe."
  },
  {
    id: 19,
    name: "Rêverie",
    category: "Léonia",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1770044605/IMG_2525_jsdqwk.jpg",
    description: "Une métamorphose magique entre ombre et lumière, sublimant l'expression d'un instant suspendu."
  },
  {
    id: 20,
    name: "L'Étudiante",
    category: "Léonia",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1770044605/etudiante_tbrydi.jpg",
    description: "Un regard vif tourné vers l'avenir, où l'éclat de la jeunesse s'accorde à la contemplation créative."
  },
  {
    id: 21,
    name: "Douce Clarté",
    category: "Léonia",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1770044606/4333e2ce-3ca9-43ca-9498-5149956f55a8_pzltlj.jpg",
    description: "La délicatesse d'un portrait épuré, révélant la grâce naturelle à travers le prisme de l'alchimie moderne."
  },
  {
    id: 22,
    name: "Silhouette Dorée",
    category: "Léonia",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/c_fill,g_auto,w_900,h_1600/v1770044606/d54d1975-3bf2-43bf-83da-c03d78f7ab96_f0jcm2.jpg",
    description: "Des teintes chaudes et enveloppantes créant un équilibre parfait entre modernité et classicisme pictural."
  },
  {
    id: 23,
    name: "Regard Captivant",
    category: "Léonia",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1770044606/IMG_2742_yfl8fu.jpg",
    description: "Une présence intense magnifiée par la subtilité des textures et des contrastes alchimiques."
  },
  {
    id: 24,
    name: "Sérénité",
    category: "Léonia",
    type: "image",
    url: "https://res.cloudinary.com/dokzioyu4/image/upload/v1770044606/1e9ba31e-8c38-48c3-ab3c-26b3337a305d_ynksne.jpg",
    description: "Un instant d'harmonie intemporelle où le portrait photographique fusionne avec l'art de l'IA générative."
  }
];

export default function Oeuvres() {
  const [activeCategory, setActiveCategory] = useState("Toutes");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Lock scroll when video is open
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

  const filteredWorks = activeCategory === "Toutes" 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-12 pb-24"
    >
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
        <div className="max-w-4xl mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 text-deep-blue">Nos Œuvres</h1>
          <div className="space-y-6 text-xl text-muted-foreground font-normal leading-relaxed">
            <p>
              Nos œuvres naissent d'une rencontre entre la photographie réelle et la puissance de l'intelligence artificielle.
            </p>
            <p>
              Le processus est une alchimie moderne : chaque création débute par une capture photographique authentique, qui sert de base à une métamorphose numérique. Grâce à l'IA, nous transcendons les limites du réel pour sculpter des textures inédites, réinventer les décors et sublimer chaque détail.
            </p>
            <p>
              Le résultat est une œuvre unique, où l'émotion humaine rencontre l'infini technologique.
            </p>
          </div>
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

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <div 
                  className={cn(
                    "relative aspect-[9/16] overflow-hidden rounded-3xl bg-muted mb-6 shadow-xl transition-transform duration-500 group-hover:-translate-y-2",
                    work.type === 'video' && "cursor-zoom-in"
                  )}
                  onClick={() => work.type === 'video' && setSelectedVideo(work.url)}
                >
                  {work.type === 'video' ? (
                    <video 
                      src={work.url} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img 
                      src={work.url} 
                      alt={work.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 pointer-events-none">
                    <span className="text-turquoise text-xs font-bold tracking-widest uppercase mb-2">
                      {work.category}
                    </span>
                    <h3 className="text-2xl text-white font-heading font-bold">
                      {work.name}
                    </h3>
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="text-xl font-heading font-bold text-deep-blue mb-3 group-hover:text-copper-orange transition-colors">
                    {work.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-normal italic border-l-2 border-copper-orange/30 pl-4">
                    {work.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Creators and Model Section */}
        <div className="mt-24 border-t border-deep-blue/10 pt-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-black text-deep-blue mb-8">Nos créateurs et le modèle</h2>
            <div className="grid md:grid-cols-2 gap-12 text-balance">
              <div className="space-y-4">
                <p className="text-lg text-deep-blue font-medium leading-relaxed">
                  Le projet est né de la rencontre entre deux talents : <Link to="/alchimistes#cyril-garnier" className="text-copper-orange hover:underline">Cyril Garnier</Link>, créateur de mondes numériques, et Léonie Egesipe, dont le visage et le mouvement inspirent chaque composition.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-copper-orange/20 pl-6">
                  Le processus créatif est une danse technologique : Cyril utilise des techniques d'IA avancées pour sublimer les portraits de Léonie, créant ainsi des pièces uniques et intemporelles. Bienvenue dans une galerie où la réalité est réinventée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
