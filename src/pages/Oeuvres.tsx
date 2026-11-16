import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  Search, 
  PenTool, 
  Mail, 
  ArrowRight, 
  ExternalLink, 
  Maximize2, 
  X, 
  Clock, 
  UserCheck, 
  Camera, 
  Film,
  Play,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { cloudinaryUrl, cloudinarySrcSet } from '../utils/cloudinary';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  title: string;
  caption?: string;
}

interface Album {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  description: string;
  badge: string;
  badgeBg: string;
  resultGradient: string;
  resultText: string;
  mediaList: MediaItem[];
}

const albumsData: Album[] = [
  {
    id: 'projets-photo-video',
    title: 'Direction artistique photo vidéo IA Alkymya — Cyril Garnier et Léonie Egesipe',
    category: 'Direction Artistique Photo Vidéo IA',
    coverImage: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1767128574/kk25As37_y8rw27.png',
    description: "Direction artistique augmentée conçue en binôme par Cyril Garnier et Léonie Egesipe. Recherche plastique associant composition photographique, maîtrise de la lumière et prompt engineering chirurgical.",
    badge: 'Studio',
    badgeBg: 'rgba(71,56,83,0.9)',
    resultGradient: 'linear-gradient(135deg, #473853 0%, #6a4a7a 100%)',
    resultText: 'Album Alkymya · 7 créations visuelles haute définition',
    mediaList: [
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1767128574/kk25As37_y8rw27.png',
        title: 'Alkymya Vision #01 — Composition chromatique & géométrie lumineuse',
        caption: "Exploration fondatrice de la direction artistique augmentée d'Alkymya : un dialogue organique entre clair-obscur cinématique, équilibre géométrique des volumes et synthèse générative haute définition."
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1767128268/n0DtTbCd_n4wyfq.png',
        title: 'Alkymya Vision #02 — Matières brutes & grain argentique',
        caption: "Étude de texture et de matière photographique où le prompt crafting chirurgical restitue la patine tactile et le micro-contraste des tirages argentiques traditionnels."
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1767127553/MVpvT2RW_s1n5ul.png',
        title: 'Alkymya Vision #03 — Drapé algorithmique & fluidité textile',
        caption: "Recherche plastique sur la fluidité des étoffes et la réfraction de la lumière studio, incarnant la rencontre entre haute couture conceptuelle et modélisation par intelligence artificielle."
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1767127109/ya7Z8TI3_iaygii.png',
        title: 'Alkymya Vision #04 — Profil sculptural & ombres portées',
        caption: "Sculpture visuelle par l'ombre et la lumière : ce portrait cinématique explore la silhouette et le modelé facial sous un éclairage zénithal rigoureusement calibré."
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1767127394/kXMN69tr_iskmoq.png',
        title: 'Alkymya Vision #05 — Scénographie numérique & abstraction',
        caption: "Immersion dans une scénographie spatiale contemporaine où la géométrie pure et les jeux de reflets transcendent la simple image pour ouvrir une narration visuelle spéculative."
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1767126747/8YHpK93A_c1xlyq.png',
        title: 'Alkymya Vision #06 — Épure minérale & palette signature',
        caption: "Recherche chromatique minimaliste reposant sur les tons chauds et la signature esthétique d'Alkymya, affirmant l'IA comme prolongement du geste d'auteur."
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1767007589/WhatsApp_Image_2025-12-13_at_19.07.53_beeekx.jpg',
        title: 'Alkymya Vision #07 — Instant décisif & matière de terrain',
        caption: "Photographie d'origine capturée sur le terrain, point de départ documentaire et argentique nourrissant les flux de travail génératifs du binôme créatif."
      }
    ]
  },
  {
    id: 'metropolia',
    title: 'Métropolia — direction artistique photo vidéo IA & narration générative',
    category: 'Direction Artistique Photo Vidéo IA',
    coverImage: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1770044606/4333e2ce-3ca9-43ca-9498-5149956f55a8_pzltlj.jpg',
    description: "Projet narratif explorant la métropole futuriste et la condition urbaine à travers l'IA générative et la matière photographique réelle. Une esthétique cyberpunk poétique entre documentaire et anticipation.",
    badge: 'Narration',
    badgeBg: 'rgba(192,103,33,0.9)',
    resultGradient: 'linear-gradient(135deg, #1a1a2e 0%, #2a2a4e 100%)',
    resultText: 'Album Métropolia · 7 œuvres de la série urbaine & dystopique',
    mediaList: [
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1770044606/4333e2ce-3ca9-43ca-9498-5149956f55a8_pzltlj.jpg',
        title: 'Métropolia #01 — Vertiges d\'acier & verticalité cyberpunk',
        caption: "Panorama de la mégapole dense : une immersion architecturale où les canyons de béton et les néons atmosphériques traduisent la tension entre gigantisme urbain et solitude contemporaine."
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1770044606/d54d1975-3bf2-43bf-83da-c03d78f7ab96_f0jcm2.jpg',
        title: 'Métropolia #02 — Nocturne cyberpunk & flux de données',
        caption: "Nocturne futuriste capturant la circulation lumineuse et les autoroutes suspendues, symbolisant le pouls algorithmique et les trajectoires invisibles de la métropole connectée."
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1770044606/1e9ba31e-8c38-48c3-ab3c-26b3337a305d_ynksne.jpg',
        title: 'Métropolia #03 — Perspectives cinématiques & architecture brute',
        caption: "Composition géométrique rigoureuse explorant les lignes de fuite et les reflets pluvieux au sol, inspirée par la photographie documentaire d'avant-garde et le cinéma d'anticipation."
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1770044606/IMG_2742_yfl8fu.jpg',
        title: 'Métropolia #04 — Passages secrets & interstices urbains',
        caption: "Cadrage intimiste dans les ruelles dérobées de la ville haute, documentant les contrastes d'échelle humaine au cœur des infrastructures monumentales."
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1770044606/fcecdf84-531c-4531-85bd-405b0c861c7d_tpdkpz.jpg',
        title: 'Métropolia #05 — Brume industrielle & horizon crépusculaire',
        caption: "Atmosphère crépusculaire et fumées industrielles : une étude chromatique des teintes de cuivre et d'argent sur l'horizon déchiqueté de la cité industrielle."
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1770044605/etudiante_tbrydi.jpg',
        title: 'Métropolia #06 — Silhouette citadine & errance narrative',
        caption: "Portrait en situation urbaine incarnant le personnage central de la fiction Métropolia, observant l'effervescence de la métropole avec recul et introspection poétique."
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1770044605/IMG_2525_jsdqwk.jpg',
        title: 'Métropolia #07 — Réalité brute & texture urbaine originelle',
        caption: "Photographie documentaire de terrain non altérée, capturant la patine des murs et la lumière naturelle qui constituent l'ADN référentiel du monde virtuel de Métropolia."
      }
    ]
  },
  {
    id: 'portraits-figures',
    title: 'Portraits et figures historiques — direction artistique IA & sérigraphie',
    category: 'Direction Artistique Photo Vidéo IA',
    coverImage: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1772112521/e23iKTwc_u35aql.png',
    description: "Hommage graphique vibrant aux grandes figures émancipatrices et culturelles, mêlant prompt crafting chirurgical, sérigraphie contemporaine et palettes chromatiques intenses.",
    badge: 'Série IA',
    badgeBg: 'rgba(2,173,171,0.9)',
    resultGradient: 'linear-gradient(135deg, #1F4F6E 0%, #122e40 100%)',
    resultText: 'Album Portraits & Figures · 6 hommages historiques d\'exception',
    mediaList: [
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1772112521/e23iKTwc_u35aql.png',
        title: 'Angela Davis — Voix militante, courage civique & liberté',
        caption: "Hommage photographique et sérigraphique à Angela Davis dans l'enceinte judiciaire : composition puissante où le poing levé, l'afro emblématique et la rigueur du cadrage réaffirment l'intégrité de la lutte pour les droits civiques."
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1772112521/d9eRiVt6_pmcd6l.png',
        title: 'Joséphine Baker — Résistance, engagement patriotique & audace',
        caption: "Joséphine Baker immortalisée en uniforme militaire devant le Château des Milandes : célébration de l'héroïne de la Résistance française, conjuguant panache artistique, bravoure politique et grâce historique."
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1772112521/jnya8Go8_e6eczn.png',
        title: 'Katherine Johnson — Génie mathématique, conquête spatiale & précision orbitale',
        caption: "Portrait de Katherine Johnson devant son tableau de calculs de trajectoires orbitales pour la NASA : hommage au génie analytique d'une pionnière afro-américaine qui a ouvert les portes de l'espace à l'humanité."
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1772112521/ucGK9H1u_xjx5t7.png',
        title: 'Rosa Parks — Dignité inébranlable, résistance pacifique & égalité des droits',
        caption: "Rosa Parks assise avec dignité dans le bus de Montgomery : scène historique fondatrice réinterprétée avec un réalisme photographique saisissant, capturant le calme souverain d'un acte de désobéissance civique universel."
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1772112520/moVD6Z2d_pm4jnx.png',
        title: 'New York 70s — Émancipation culturelle, énergie urbaine & style rétro',
        caption: "Célébration vibrante de la culture soul et funk dans les rues new-yorkaises des années 1970 : manteau à col de fourrure, pantalon flare et fierté assumée dans un décor d'automobiles et d'immeubles emblématiques."
      },
      {
        type: 'image',
        url: 'https://res.cloudinary.com/dokzioyu4/image/upload/v1772112520/grq2NVff_rcr9vi.png',
        title: 'Shirley Chisholm — Pionnière politique, leadership & Maison Blanche',
        caption: "Shirley Chisholm, première femme afro-américaine élue au Congrès et candidate présidentielle, drapée entre deux drapeaux américains devant la Maison Blanche : une force scénique incarnant la devise Unbought and Unbossed."
      }
    ]
  }
];

const sodaAgentMedia: Album = {
  id: 'soda-agent',
  title: "SODA — Agent IA autonome d'analyse de marché",
  category: 'Agents IA autonomes',
  coverImage: '',
  description: "SODA est une IA spécialisée conçue pour l'accompagnement, l'analyse stratégique et la simulation d'entretiens clients.",
  badge: 'Agent IA',
  badgeBg: 'rgba(2,173,171,0.9)',
  resultGradient: 'linear-gradient(135deg, #037971 0%, #02ADAB 100%)',
  resultText: '400 réponses synthétiques · <10 minutes',
  mediaList: [
    {
      type: 'video',
      url: 'https://res.cloudinary.com/dokzioyu4/video/upload/v1779116439/f_ea_e_f_f_a_f_a_e_cbe_f_cmp__gxlwhw.mp4',
      title: "SODA — Démonstration de l'agent IA autonome d'analyse de marché",
      caption: "SODA est une IA spécialisée conçue pour l'accompagnement, l'analyse stratégique et la simulation de centaines d'entretiens clients afin de valider une hypothèse en moins de dix minutes."
    }
  ]
};

export default function Oeuvres() {
  const [activeAlbum, setActiveAlbum] = useState<Album | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);

  const openAlbum = (album: Album, startIndex: number = 0) => {
    setActiveAlbum(album);
    setActiveMediaIndex(startIndex);
  };

  const closeAlbum = () => {
    setActiveAlbum(null);
  };

  const nextMedia = () => {
    if (!activeAlbum) return;
    setActiveMediaIndex((prev) => (prev + 1) % activeAlbum.mediaList.length);
  };

  const prevMedia = () => {
    if (!activeAlbum) return;
    setActiveMediaIndex((prev) => (prev - 1 + activeAlbum.mediaList.length) % activeAlbum.mediaList.length);
  };

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Études de cas SEO, IA & création éditoriale — Alkymya"
        description="Trois études de cas mesurées (thelittle77, 75 et 83), agents IA autonomes en production et direction artistique IA par Alkymya en France."
        canonicalPath="/oeuvres"
        ogImage="https://alkymya.co/og-oeuvres.jpg"
        type="CollectionPage"
      />

      {/* HERO — Exact Maquette */}
      <header className="bg-[#1F4F6E] text-white py-20 px-6 sm:px-10 text-center relative overflow-hidden">
        <div className="max-w-[700px] mx-auto relative z-10">
          <p className="text-[0.85rem] tracking-[0.15em] uppercase text-[#02ADAB] mb-4 font-normal">
            Nos réalisations · Studio création IA &amp; référencement naturel Google
          </p>
          <h1 className="font-light text-[2.4rem] sm:text-[2.6rem] leading-[1.2] mb-5 text-white">
            Création site éditorial &amp; agents IA.<br />
            <strong className="font-medium text-white">Visibilité AI Overviews &amp; résultats réels.</strong>
          </h1>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-white/75 max-w-[600px] mx-auto leading-[1.7] font-light">
            Création site éditorial, référencement naturel Google, visibilité AI Overviews, agents IA autonomes en production, veille SEO IA et direction artistique photo vidéo IA vérifiables.
          </p>
        </div>
      </header>

      {/* SITES ÉDITORIAUX : Ordre exact : TheLittle77 -> TheLittle75 -> TheLittle83 */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Création site éditorial &amp; référencement naturel Google
        </p>
        <h2 className="text-[1.8rem] font-light mb-3 text-[#1F4F6E]">
          Création de sites éditoriaux optimisés <strong className="font-medium text-[#1F4F6E]">Google &amp; visibilité AI Overviews</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-12 font-normal">
          Chaque création site éditorial est un laboratoire en production : référencement naturel Google, visibilité AI Overviews et veille SEO IA mesurés avant déploiement client.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {/* 1. TheLittle77.fr */}
          <article className="bg-white rounded-[12px] overflow-hidden shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col lg:grid lg:grid-rows-subgrid lg:row-span-7 lg:gap-y-0">
            <div className="h-[180px] bg-[#1a3a50] relative overflow-hidden flex items-center justify-center group">
              <img
                src={cloudinaryUrl("https://res.cloudinary.com/dokzioyu4/image/upload/v1788941703/PHOTO-2026-09-08-06-54-57_ynrbkt.jpg", 1000)}
                srcSet={cloudinarySrcSet("https://res.cloudinary.com/dokzioyu4/image/upload/v1788941703/PHOTO-2026-09-08-06-54-57_ynrbkt.jpg")}
                sizes="(max-width: 768px) 100vw, 33vw"
                width={600}
                height={360}
                alt="Ciel de Seine-et-Marne — création site éditorial thelittle77.fr et référencement naturel Google"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-3.5 left-3.5 bg-[rgba(2,173,171,0.9)] text-white text-[0.72rem] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-[4px] shadow-sm">
                Référence
              </span>
              <span className="absolute bottom-3.5 right-3.5 bg-black/50 text-white text-[0.78rem] px-2.5 py-1 rounded-[4px] backdrop-blur-[4px]">
                thelittle77.fr
              </span>
            </div>

            <h3 className="px-6 pt-6 pb-1.5 text-[1.1rem] font-medium text-[#1F4F6E]">
              thelittle77.fr — Création site éditorial &amp; SEO Seine-et-Marne
            </h3>

            <p className="px-6 pb-5 text-[0.95rem] text-[#5a7a90] leading-[1.6] font-normal">
              Nature, patrimoine et vie locale en 77. Neuf bassins éditoriaux, des lieux documentés et une audience qui grandit sans publicité.
            </p>

            <div className="px-6 pb-3.5 flex gap-2 flex-wrap content-start">
              <span className="inline-flex items-center gap-1.5 text-[0.78rem] bg-[#f0f7ff] text-[#1F4F6E] px-2.5 py-1 rounded-[4px] font-medium">
                <Clock className="w-3 h-3 text-[#02ADAB]" /> Construit en 3 mois
              </span>
              <span className="inline-flex items-center gap-1.5 text-[0.78rem] bg-[#f0f7ff] text-[#1F4F6E] px-2.5 py-1 rounded-[4px] font-normal">
                <UserCheck className="w-3 h-3 text-[#02ADAB]" /> Créateur : Cyril Garnier
              </span>
            </div>

            <div className="px-6 pb-5 grid grid-cols-3 gap-2.5 items-start">
              <div className="text-center bg-[#f4f8fb] rounded-[8px] py-2.5 px-1.5">
                <span className="text-[1.25rem] font-medium text-[#1F4F6E] block leading-none mb-1">216</span>
                <span className="text-[0.7rem] text-[#7a9ab0] uppercase tracking-[0.08em] font-normal">URLs</span>
              </div>
              <div className="text-center bg-[#f4f8fb] rounded-[8px] py-2.5 px-1.5">
                <span className="text-[1.25rem] font-medium text-[#1F4F6E] block leading-none mb-1">149 392</span>
                <span className="text-[0.7rem] text-[#7a9ab0] uppercase tracking-[0.08em] font-normal">mots</span>
              </div>
              <div className="text-center bg-[#f4f8fb] rounded-[8px] py-2.5 px-1.5">
                <span className="text-[1.25rem] font-medium text-[#1F4F6E] block leading-none mb-1">652</span>
                <span className="text-[0.7rem] text-[#7a9ab0] uppercase tracking-[0.08em] font-normal">images</span>
              </div>
            </div>

            <div className="px-6 pb-6 flex">
              <div className="w-full bg-gradient-to-br from-[#037971] to-[#02ADAB] rounded-[8px] p-3 sm:px-4 text-white text-[0.9rem] leading-[1.5] font-normal shadow-sm flex flex-col justify-center">
                <p>
                  <strong className="font-medium text-white">1ère page Google</strong> et <strong className="font-medium text-white">275k vues/mois sur Facebook</strong> sans publicité.<br />
                  <strong className="font-medium text-white">Position 7</strong> sur "Moulin de Belle-Assise" — devant Wikipedia.<br />
                  Cité par Google AI comme référence naturaliste régionale, aux côtés de la LPO.
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0 mt-auto lg:mt-0">
              <a 
                href="https://thelittle77.fr" 
                className="inline-flex items-center gap-1.5 text-[#02ADAB] hover:text-[#037971] text-[0.88rem] font-medium tracking-[0.03em] no-underline transition-colors group" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>Visiter le site</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </article>

          {/* 2. TheLittle75.fr */}
          <article className="bg-white rounded-[12px] overflow-hidden shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col lg:grid lg:grid-rows-subgrid lg:row-span-7 lg:gap-y-0">
            <div className="h-[180px] bg-[#2a2a4a] relative overflow-hidden flex items-center justify-center group">
              <img
                src={cloudinaryUrl("https://res.cloudinary.com/dokzioyu4/image/upload/v1788941670/Logo_thelittle75.fr_d1tmes.jpg", 1000)}
                srcSet={cloudinarySrcSet("https://res.cloudinary.com/dokzioyu4/image/upload/v1788941670/Logo_thelittle75.fr_d1tmes.jpg")}
                sizes="(max-width: 768px) 100vw, 33vw"
                width={600}
                height={360}
                loading="lazy"
                alt="Paris — création site éditorial thelittle75.fr et stratégie référencement naturel Google"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-3.5 left-3.5 bg-[rgba(2,173,171,0.9)] text-white text-[0.72rem] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-[4px] shadow-sm">
                En croissance
              </span>
              <span className="absolute bottom-3.5 right-3.5 bg-black/50 text-white text-[0.78rem] px-2.5 py-1 rounded-[4px] backdrop-blur-[4px]">
                thelittle75.fr
              </span>
            </div>

            <h3 className="px-6 pt-6 pb-1.5 text-[1.1rem] font-medium text-[#1F4F6E]">
              thelittle75.fr — Création site éditorial Paris &amp; veille SEO IA
            </h3>

            <p className="px-6 pb-5 text-[0.95rem] text-[#5a7a90] leading-[1.6] font-normal">
              Récits, patrimoine et portraits de quartiers. Onze chroniques de fond, une carte interactive et un index patrimonial complet.
            </p>

            <div className="px-6 pb-3.5 flex gap-2 flex-wrap content-start">
              <span className="inline-flex items-center gap-1.5 text-[0.78rem] bg-[#f0f7ff] text-[#1F4F6E] px-2.5 py-1 rounded-[4px] font-medium">
                <Clock className="w-3 h-3 text-[#02ADAB]" /> Construit en 2 mois
              </span>
              <span className="inline-flex items-center gap-1.5 text-[0.78rem] bg-[#f0f7ff] text-[#1F4F6E] px-2.5 py-1 rounded-[4px] font-normal">
                <UserCheck className="w-3 h-3 text-[#02ADAB]" /> Créateur : Egesipe Léonie
              </span>
            </div>

            <div className="px-6 pb-5 grid grid-cols-3 gap-2.5 items-start">
              <div className="text-center bg-[#f4f8fb] rounded-[8px] py-2.5 px-1.5">
                <span className="text-[1.25rem] font-medium text-[#1F4F6E] block leading-none mb-1">39</span>
                <span className="text-[0.7rem] text-[#7a9ab0] uppercase tracking-[0.08em] font-normal">URLs</span>
              </div>
              <div className="text-center bg-[#f4f8fb] rounded-[8px] py-2.5 px-1.5">
                <span className="text-[1.25rem] font-medium text-[#1F4F6E] block leading-none mb-1">27 839</span>
                <span className="text-[0.7rem] text-[#7a9ab0] uppercase tracking-[0.08em] font-normal">mots</span>
              </div>
              <div className="text-center bg-[#f4f8fb] rounded-[8px] py-2.5 px-1.5">
                <span className="text-[1.25rem] font-medium text-[#1F4F6E] block leading-none mb-1">53</span>
                <span className="text-[0.7rem] text-[#7a9ab0] uppercase tracking-[0.08em] font-normal">images</span>
              </div>
            </div>

            <div className="px-6 pb-6 flex">
              <div className="w-full bg-gradient-to-br from-[#037971] to-[#02ADAB] rounded-[8px] p-3 sm:px-4 text-white text-[0.9rem] leading-[1.5] font-normal shadow-sm flex flex-col justify-center">
                <p>
                  <strong className="font-medium text-white">2ème résultat Google</strong> sur "chronique Belleville Paris récit".<br />
                  39 pages structurées (−91 % poids images) devant des médias dix fois plus gros.<br />
                  Score SEO passé de 45 à 77 en 48h après correction technique.
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0 mt-auto lg:mt-0">
              <a 
                href="https://thelittle75.fr" 
                className="inline-flex items-center gap-1.5 text-[#02ADAB] hover:text-[#037971] text-[0.88rem] font-medium tracking-[0.03em] no-underline transition-colors group" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>Visiter le site</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </article>

          {/* 3. TheLittle83.fr (avec photo spécifique demandée par l'utilisateur) */}
          <article className="bg-white rounded-[12px] overflow-hidden shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col lg:grid lg:grid-rows-subgrid lg:row-span-7 lg:gap-y-0">
            <div className="h-[180px] bg-[#2a4a3a] relative overflow-hidden flex items-center justify-center group p-4">
              <img
                src={cloudinaryUrl("https://res.cloudinary.com/dyooqwryq/image/upload/v1794124042/thelittle83-logo_op3yvm.svg", 600)}
                srcSet={cloudinarySrcSet("https://res.cloudinary.com/dyooqwryq/image/upload/v1794124042/thelittle83-logo_op3yvm.svg")}
                sizes="(max-width: 768px) 100vw, 33vw"
                width={600}
                height={360}
                loading="lazy"
                alt="Logo thelittle83.fr — atlas naturaliste du Var optimisé visibilité AI Overviews et Google AI"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-3.5 left-3.5 bg-[rgba(2,173,171,0.9)] text-white text-[0.72rem] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-[4px] shadow-sm">
                Nouveau
              </span>
              <span className="absolute bottom-3.5 right-3.5 bg-black/50 text-white text-[0.78rem] px-2.5 py-1 rounded-[4px] backdrop-blur-[4px]">
                thelittle83.fr
              </span>
            </div>

            <h3 className="px-6 pt-6 pb-1.5 text-[1.1rem] font-medium text-[#1F4F6E]">
              thelittle83.fr — Atlas naturaliste Var &amp; visibilité AI Overviews
            </h3>

            <p className="px-6 pb-5 text-[0.95rem] text-[#5a7a90] leading-[1.6] font-normal">
              Oiseaux et paysages du Var. Fiches espèces bilingues, spots d'observation et galerie terrain, sans compromis sur l'authenticité.
            </p>

            <div className="px-6 pb-3.5 flex gap-2 flex-wrap content-start">
              <span className="inline-flex items-center gap-1.5 text-[0.78rem] bg-[#f0f7ff] text-[#1F4F6E] px-2.5 py-1 rounded-[4px] font-medium">
                <Clock className="w-3 h-3 text-[#02ADAB]" /> Construit en 24h
              </span>
              <span className="inline-flex items-center gap-1.5 text-[0.78rem] bg-[#f0f7ff] text-[#1F4F6E] px-2.5 py-1 rounded-[4px] font-normal">
                <UserCheck className="w-3 h-3 text-[#02ADAB]" /> Créateur : Cyril Garnier
              </span>
            </div>

            <div className="px-6 pb-5 grid grid-cols-3 gap-2.5 items-start">
              <div className="text-center bg-[#f4f8fb] rounded-[8px] py-2.5 px-1.5">
                <span className="text-[1.25rem] font-medium text-[#1F4F6E] block leading-none mb-1">132</span>
                <span className="text-[0.7rem] text-[#7a9ab0] uppercase tracking-[0.08em] font-normal">URLs</span>
              </div>
              <div className="text-center bg-[#f4f8fb] rounded-[8px] py-2.5 px-1.5">
                <span className="text-[1.25rem] font-medium text-[#1F4F6E] block leading-none mb-1">101 967</span>
                <span className="text-[0.7rem] text-[#7a9ab0] uppercase tracking-[0.08em] font-normal">mots</span>
              </div>
              <div className="text-center bg-[#f4f8fb] rounded-[8px] py-2.5 px-1.5">
                <span className="text-[1.25rem] font-medium text-[#1F4F6E] block leading-none mb-1">514</span>
                <span className="text-[0.7rem] text-[#7a9ab0] uppercase tracking-[0.08em] font-normal">images</span>
              </div>
            </div>

            <div className="px-6 pb-6 flex">
              <div className="w-full bg-gradient-to-br from-[#037971] to-[#02ADAB] rounded-[8px] p-3 sm:px-4 text-white text-[0.9rem] leading-[1.5] font-normal shadow-sm flex flex-col justify-center">
                <p>
                  <strong className="font-medium text-white">Lancé le 8 nov. 2026.</strong> Bilingue et référencé par Google AI en moins d'une heure.<br />
                  <strong className="font-medium text-white">1er résultat image</strong> sur "aigrette garzette Hyères" dès le lendemain.<br />
                  Aucune publicité. Aucun backlink acheté.
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0 mt-auto lg:mt-0">
              <a 
                href="https://thelittle83.fr" 
                className="inline-flex items-center gap-1.5 text-[#02ADAB] hover:text-[#037971] text-[0.88rem] font-medium tracking-[0.03em] no-underline transition-colors group" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>Visiter le site</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </article>

        </div>

        {/* TABLEAU COMPARATIF DES 3 ÉTUDES DE CAS MESURÉES */}
        <div className="mt-14 bg-white rounded-[12px] p-7 sm:p-9 shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
          <div className="mb-6">
            <p className="text-[0.72rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2 font-medium">
              Preuves mesurées en production · Relevé du 12 nov. 2026
            </p>
            <h3 className="text-[1.45rem] font-light text-[#1F4F6E]">
              Synthèse comparative des <strong className="font-medium">trois études de cas TheLittle</strong>
            </h3>
            <p className="text-[0.95rem] text-[#5a7a90] leading-[1.65] mt-2 max-w-[780px]">
              Ces trois sites éditoriaux servent de banc d'essai permanent à l'agence Alkymya : ils démontrent qu'une architecture sémantique rigoureuse, couplée à nos agents IA éditoriaux et de veille SEO/GEO, génère une autorité organique vérifiable sans achat d'espace publicitaire ni netlinking artificiel.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-[rgba(31,79,110,0.12)] text-[#1F4F6E] text-xs uppercase tracking-wider">
                  <th className="py-3 pr-4 font-medium">Site &amp; Créateur</th>
                  <th className="py-3 px-4 font-medium">Délai</th>
                  <th className="py-3 px-4 font-medium">URLs indexables</th>
                  <th className="py-3 px-4 font-medium">Mots publiés</th>
                  <th className="py-3 px-4 font-medium">Images</th>
                  <th className="py-3 pl-4 font-medium">Audience, Google &amp; AI Overviews</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(31,79,110,0.08)] text-[#4a6a80]">
                <tr>
                  <td className="py-3.5 pr-4 font-medium text-[#1F4F6E]">
                    thelittle77.fr <span className="block text-xs font-normal text-[#7a9ab0]">Cyril Garnier</span>
                  </td>
                  <td className="py-3.5 px-4">3 mois</td>
                  <td className="py-3.5 px-4 font-medium text-[#1F4F6E]">216 URL</td>
                  <td className="py-3.5 px-4 font-medium text-[#1F4F6E]">149 392</td>
                  <td className="py-3.5 px-4 font-medium text-[#1F4F6E]">652</td>
                  <td className="py-3.5 pl-4">275k vues/mois sur Facebook, Position 7 devant Wikipedia, 93 citations AI Overviews</td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-medium text-[#1F4F6E]">
                    thelittle75.fr <span className="block text-xs font-normal text-[#7a9ab0]">Léonie Egesipe</span>
                  </td>
                  <td className="py-3.5 px-4">2 mois</td>
                  <td className="py-3.5 px-4 font-medium text-[#1F4F6E]">39 URL</td>
                  <td className="py-3.5 px-4 font-medium text-[#1F4F6E]">27 839</td>
                  <td className="py-3.5 px-4 font-medium text-[#1F4F6E]">53</td>
                  <td className="py-3.5 pl-4">Top 2 Google sur "chronique Belleville Paris récit", score SEO 45 → 77 en 48h</td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-medium text-[#1F4F6E]">
                    thelittle83.fr <span className="block text-xs font-normal text-[#7a9ab0]">Cyril Garnier</span>
                  </td>
                  <td className="py-3.5 px-4">24 heures</td>
                  <td className="py-3.5 px-4 font-medium text-[#1F4F6E]">132 URL</td>
                  <td className="py-3.5 px-4 font-medium text-[#1F4F6E]">101 967</td>
                  <td className="py-3.5 px-4 font-medium text-[#1F4F6E]">514</td>
                  <td className="py-3.5 pl-4">Indexé par Google AI en &lt;1h, 1er résultat image dès J+1 sans backlink</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* BLOC DE TRANSITION VERS NEW BUSINESS MVP */}
          <div className="mt-7 p-6 rounded-[10px] bg-[#f4f8fb] border border-[rgba(2,173,171,0.2)] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-[660px]">
              <p className="text-xs uppercase tracking-[0.14em] text-[#037971] font-medium mb-1.5">
                De la vitrine éditoriale au lancement commercial
              </p>
              <h4 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-1.5">
                La même méthode appliquée à votre offre dans New Business MVP
              </h4>
              <p className="text-[0.9rem] text-[#5a7a90] leading-[1.6]">
                Ces 387 URLs et plus de 279 000 mots publiés en conditions réelles nourrissent directement l'accompagnement de 6 mois pour dirigeants et indépendants : vous validez votre marché, votre site MVP et votre visibilité Google AI avant d'investir lourdement.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/newbusiness"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[8px] bg-[#1F4F6E] hover:bg-[#02ADAB] text-white text-sm font-medium transition-colors"
              >
                <span>Découvrir New Business MVP</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ateliers"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[8px] bg-white border border-[rgba(31,79,110,0.18)] hover:border-[#02ADAB] text-[#1F4F6E] text-sm font-medium transition-colors"
              >
                <span>Ateliers SEO &amp; Agents IA</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* AGENTS IA — Section Sombre #1F4F6E */}
      <div className="bg-[#1F4F6E] text-white py-[70px]">
        <section className="max-w-[1100px] mx-auto px-6">
          <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
            Agents IA autonomes en production &amp; veille SEO IA
          </p>
          <h2 className="text-[1.8rem] font-light mb-3 text-white">
            Quatre agents IA autonomes <strong className="font-medium text-white">en production chaque semaine</strong>
          </h2>
          <p className="text-[1.05rem] text-white/70 max-w-[640px] leading-[1.7] mb-12 font-normal">
            Ces agents IA autonomes en production orchestrent notre veille SEO IA, le suivi de visibilité AI Overviews et la création site éditorial en continu.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* Agent 1 : Analyse de marché (SODA) */}
            <div className="bg-white/[0.07] border border-white/10 rounded-[10px] p-6 hover:bg-white/[0.12] transition-colors duration-200 flex flex-col lg:grid lg:grid-rows-subgrid lg:row-span-5 lg:gap-y-0">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-[rgba(2,173,171,0.2)] flex items-center justify-center text-[#02ADAB] mb-4">
                <BarChart3 className="w-5 h-5 text-[#02ADAB]" />
              </div>
              <h3 className="text-[1rem] font-medium text-white mb-2">
                Agent IA analyse de marché — SODA
              </h3>
              <p className="text-[0.9rem] text-white/65 leading-[1.6] mb-3 font-normal">
                IA spécialisée pour l'analyse stratégique et la simulation d'entretiens clients. Valide une hypothèse en 10 minutes, pas en 3 mois.
              </p>
              <div className="text-[0.85rem] text-[#02ADAB] font-medium self-start">
                400 réponses synthétiques · &lt;10 minutes
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 self-end w-full">
                <button
                  type="button"
                  onClick={() => openAlbum(sodaAgentMedia, 0)}
                  className="inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-white hover:text-[#02ADAB] transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 text-[#02ADAB] fill-current" />
                  <span>Démo vidéo</span>
                </button>
                <a
                  href="https://www.genspark.ai/agents?type=custom_super_agent&agent_id=20503058-4b49-40f7-b277-b38c21724a41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[0.82rem] font-medium text-[#02ADAB] hover:text-white transition-colors"
                >
                  <span>Tester SODA</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Agent 2 : Veille SEO & IA */}
            <div className="bg-white/[0.07] border border-white/10 rounded-[10px] p-6 hover:bg-white/[0.12] transition-colors duration-200 flex flex-col lg:grid lg:grid-rows-subgrid lg:row-span-5 lg:gap-y-0">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-[rgba(2,173,171,0.2)] flex items-center justify-center text-[#02ADAB] mb-4">
                <Search className="w-5 h-5 text-[#02ADAB]" />
              </div>
              <h3 className="text-[1rem] font-medium text-white mb-2">
                Agent de veille SEO IA &amp; AI Overviews
              </h3>
              <p className="text-[0.9rem] text-white/65 leading-[1.6] mb-3 font-normal">
                Surveille le référencement naturel Google et vos citations en visibilité AI Overviews. Les deux leviers se pilotent avec précision.
              </p>
              <div className="text-[0.85rem] text-[#02ADAB] font-medium self-start">
                93 apparitions AI Overviews · TheLittle77
              </div>
              <div className="hidden lg:block" aria-hidden="true" />
            </div>

            {/* Agent 3 : Création de contenus */}
            <div className="bg-white/[0.07] border border-white/10 rounded-[10px] p-6 hover:bg-white/[0.12] transition-colors duration-200 flex flex-col lg:grid lg:grid-rows-subgrid lg:row-span-5 lg:gap-y-0">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-[rgba(2,173,171,0.2)] flex items-center justify-center text-[#02ADAB] mb-4">
                <PenTool className="w-5 h-5 text-[#02ADAB]" />
              </div>
              <h3 className="text-[1rem] font-medium text-white mb-2">
                Agent IA de création site éditorial
              </h3>
              <p className="text-[0.9rem] text-white/65 leading-[1.6] mb-3 font-normal">
                Produit des briefs, chroniques et scripts selon vos contraintes éditoriales. Il accélère le rythme, votre expertise terrain reste.
              </p>
              <div className="text-[0.85rem] text-[#02ADAB] font-medium self-start">
                En production sur les 3 sites TheLittle
              </div>
              <div className="hidden lg:block" aria-hidden="true" />
            </div>

            {/* Agent 4 : Newsletter */}
            <div className="bg-white/[0.07] border border-white/10 rounded-[10px] p-6 hover:bg-white/[0.12] transition-colors duration-200 flex flex-col lg:grid lg:grid-rows-subgrid lg:row-span-5 lg:gap-y-0">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-[rgba(2,173,171,0.2)] flex items-center justify-center text-[#02ADAB] mb-4">
                <Mail className="w-5 h-5 text-[#02ADAB]" />
              </div>
              <h3 className="text-[1rem] font-medium text-white mb-2">
                Agent IA autonome de newsletter
              </h3>
              <p className="text-[0.9rem] text-white/65 leading-[1.6] mb-3 font-normal">
                Gère le cycle complet : inscription, envoi et suivi des ouvertures. Un pipeline autonome qui fonctionne sans intervention manuelle.
              </p>
              <div className="text-[0.85rem] text-[#02ADAB] font-medium self-start">
                Pipeline live · TheLittle77 · nov. 2026
              </div>
              <div className="hidden lg:block" aria-hidden="true" />
            </div>

          </div>
        </section>
      </div>

      {/* CRÉATION ARTISTIQUE : Avec redirections vers les albums photos/vidéos */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Direction artistique photo vidéo IA
        </p>
        <h2 className="text-[1.8rem] font-light mb-3 text-[#1F4F6E]">
          Direction artistique photo vidéo IA : <strong className="font-medium text-[#1F4F6E]">l'outil ne remplace pas l'œil</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-12 font-normal">
          Projets de direction artistique photo vidéo IA et narration générative. L'expertise humaine reste centrale — cliquez sur un projet pour ouvrir son album complet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {albumsData.map((album) => (
            <article 
              key={album.id}
              className="bg-white rounded-[12px] overflow-hidden shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div 
                  onClick={() => openAlbum(album, 0)}
                  className="h-[180px] bg-[#1F4F6E] relative overflow-hidden flex items-center justify-center group cursor-pointer"
                >
                  <img
                    src={cloudinaryUrl(album.coverImage, 800)}
                    srcSet={cloudinarySrcSet(album.coverImage)}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    width={600}
                    height={360}
                    loading="lazy"
                    alt={`${album.title} — direction artistique photo vidéo IA Alkymya`}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span 
                    className="absolute top-3.5 left-3.5 text-white text-[0.72rem] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-[4px] shadow-sm"
                    style={{ background: album.badgeBg }}
                  >
                    {album.badge}
                  </span>
                  <div className="absolute inset-0 bg-[#1F4F6E]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#1F4F6E] font-medium text-xs shadow-md">
                      <ImageIcon className="w-3.5 h-3.5 text-[#02ADAB]" /> Ouvrir l'album photo ({album.mediaList.length})
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-[1.1rem] font-medium text-[#1F4F6E] mb-1.5">
                    {album.title}
                  </h3>
                  <p className="text-[0.95rem] text-[#5a7a90] leading-[1.6] mb-5 font-normal">
                    {album.description}
                  </p>

                  <div 
                    className="rounded-[8px] p-3 sm:px-4 text-white text-[0.88rem] leading-[1.5] font-normal shadow-sm mb-4"
                    style={{ background: album.resultGradient }}
                  >
                    {album.resultText}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <button
                  type="button"
                  onClick={() => openAlbum(album, 0)}
                  className="w-full py-2.5 px-4 rounded-[6px] bg-[#1F4F6E] hover:bg-[#02ADAB] text-white text-xs font-medium uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Consulter l'album photo &amp; vidéo ({album.mediaList.length})</span>
                  <span>→</span>
                </button>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* CTA FINAL — Exact Maquette Orange #C06721 */}
      <div className="bg-[#C06721] text-white text-center py-[70px] px-10">
        <h2 className="text-[2rem] font-light mb-3.5 text-white">
          Lancez votre création site éditorial <strong className="font-medium text-white">ou vos agents IA</strong>
        </h2>
        <p className="text-[1.05rem] text-white/80 max-w-[480px] mx-auto mb-8 leading-[1.7] font-light">
          Référencement naturel Google, visibilité AI Overviews ou direction artistique photo vidéo IA : chaque projet démarre par un échange concret.
        </p>
        <Link
          to="/ateliers"
          className="inline-block bg-white text-[#C06721] text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
        >
          Découvrir nos ateliers →
        </Link>
      </div>

      {/* ALBUM PHOTO & VIDÉO MODAL VIEWER */}
      <AnimatePresence>
        {activeAlbum && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAlbum}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl rounded-[12px] bg-white overflow-hidden shadow-2xl z-10 my-6 max-h-[92vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header de l'album */}
              <div className="p-4 sm:p-5 px-6 bg-[#1F4F6E] text-white flex items-center justify-between border-b border-white/10 shrink-0">
                <div className="min-w-0 pr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[0.7rem] uppercase tracking-wider font-medium text-[#02ADAB] bg-white/10 px-2 py-0.5 rounded-[3px]">
                      {activeAlbum.category}
                    </span>
                    <span className="text-xs text-white/60">
                      {activeMediaIndex + 1} / {activeAlbum.mediaList.length}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-white truncate">
                    {activeAlbum.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={closeAlbum}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Fermer l'album"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Zone principale : Affichage Média actif */}
              <div className="relative bg-black flex-1 min-h-[320px] sm:min-h-[460px] flex items-center justify-center overflow-hidden">
                {activeAlbum.mediaList[activeMediaIndex].type === 'video' ? (
                  <video
                    key={activeAlbum.mediaList[activeMediaIndex].url}
                    src={activeAlbum.mediaList[activeMediaIndex].url}
                    aria-label={`${activeAlbum.mediaList[activeMediaIndex].title} — direction artistique photo vidéo IA Alkymya`}
                    title={`${activeAlbum.mediaList[activeMediaIndex].title} — direction artistique photo vidéo IA`}
                    className="max-h-[60vh] w-auto max-w-full object-contain"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <img
                    key={activeAlbum.mediaList[activeMediaIndex].url}
                    src={cloudinaryUrl(activeAlbum.mediaList[activeMediaIndex].url, 1200)}
                    srcSet={cloudinarySrcSet(activeAlbum.mediaList[activeMediaIndex].url)}
                    sizes="90vw"
                    width={1200}
                    height={900}
                    alt={`${activeAlbum.mediaList[activeMediaIndex].title} — direction artistique photo vidéo IA Alkymya`}
                    className="max-h-[60vh] w-auto max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                )}

                {/* Bouton Précédent */}
                {activeAlbum.mediaList.length > 1 && (
                  <button
                    type="button"
                    onClick={prevMedia}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer z-10 backdrop-blur-xs"
                    aria-label="Média précédent"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}

                {/* Bouton Suivant */}
                {activeAlbum.mediaList.length > 1 && (
                  <button
                    type="button"
                    onClick={nextMedia}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer z-10 backdrop-blur-xs"
                    aria-label="Média suivant"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}
              </div>

              {/* Légende du média actif */}
              <div className="p-4 sm:p-5 px-6 bg-[#f4f6f9] border-t border-[rgba(31,79,110,0.08)] flex flex-col sm:flex-row sm:items-start justify-between gap-4 text-xs">
                <div className="max-w-3xl">
                  <h4 className="font-medium text-[#1F4F6E] text-sm sm:text-base mb-1">
                    {activeAlbum.mediaList[activeMediaIndex].title}
                  </h4>
                  {activeAlbum.mediaList[activeMediaIndex].caption && (
                    <p className="text-[#4a6a80] text-[0.85rem] sm:text-[0.9rem] leading-[1.65] font-normal">
                      {activeAlbum.mediaList[activeMediaIndex].caption}
                    </p>
                  )}
                </div>
                <div className="text-[11px] text-[#7a9ab0] shrink-0 font-medium bg-white/80 border border-[rgba(31,79,110,0.08)] px-2.5 py-1 rounded-[4px] self-start">
                  {activeAlbum.mediaList[activeMediaIndex].type === 'video' ? 'Vidéo MP4/MOV' : 'Photographie HD'}
                </div>
              </div>

              {/* Carrousel de vignettes (Thumbnails) */}
              <div className="p-3 bg-white border-t border-[rgba(31,79,110,0.08)] flex gap-2 overflow-x-auto shrink-0">
                {activeAlbum.mediaList.map((media, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveMediaIndex(idx)}
                    className={`relative w-16 h-12 rounded-[4px] overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeMediaIndex === idx 
                        ? 'border-[#02ADAB] scale-105 shadow-sm' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    {media.type === 'video' ? (
                      <div className="w-full h-full bg-[#1F4F6E] flex items-center justify-center text-white">
                        <Play className="w-4 h-4 fill-current text-[#02ADAB]" />
                      </div>
                    ) : (
                      <img
                        src={cloudinaryUrl(media.url, 300)}
                        width={64}
                        height={48}
                        loading="lazy"
                        alt={media.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
