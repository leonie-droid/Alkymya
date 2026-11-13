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
    title: 'Projet photos et vidéo Alkymya — Cyril Garnier et Léonie Egesipe',
    category: 'Direction Artistique & Studio',
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
    title: 'Métropolia — narration visuelle générative',
    category: 'Narration Urbaine',
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
    title: 'Portraits et figures historiques',
    category: 'Art Génératif & Sérigraphie',
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
        title="Nos Œuvres & Réalisations — Alkymya"
        description="Ce que nous construisons. Et ce que ça donne vraiment. Médias locaux TheLittle77, TheLittle75, TheLittle83, agents IA en production et albums de création artistique."
      />

      {/* HERO — Exact Maquette */}
      <header className="bg-[#1F4F6E] text-white py-20 px-6 sm:px-10 text-center relative overflow-hidden">
        <div className="max-w-[700px] mx-auto relative z-10">
          <p className="text-[0.85rem] tracking-[0.15em] uppercase text-[#02ADAB] mb-4 font-normal">
            Nos réalisations
          </p>
          <h1 className="font-light text-[2.4rem] sm:text-[2.6rem] leading-[1.2] mb-5 text-white">
            Ce que nous construisons.<br />
            <strong className="font-medium text-white">Et ce que ça donne vraiment.</strong>
          </h1>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-white/75 max-w-[600px] mx-auto leading-[1.7] font-light">
            Pas de cas clients anonymisés, pas de promesses floues. Des projets réels, des chiffres datés, des résultats vérifiables.
          </p>
        </div>
      </header>

      {/* SITES ÉDITORIAUX : Ordre exact : TheLittle77 -> TheLittle75 -> TheLittle83 */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Sites éditoriaux
        </p>
        <h2 className="text-[1.8rem] font-light mb-3 text-[#1F4F6E]">
          Trois médias locaux construits <strong className="font-medium text-[#1F4F6E]">de zéro</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-12 font-normal">
          Chacun de ces sites est un laboratoire en production : indexé, mesuré, et preuve que la méthode fonctionne avant de la proposer à nos clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {/* 1. TheLittle77.fr */}
          <article className="bg-white rounded-[12px] overflow-hidden shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="h-[180px] bg-[#1a3a50] relative overflow-hidden flex items-center justify-center group">
                <img
                  src="https://res.cloudinary.com/dokzioyu4/image/upload/v1788941703/PHOTO-2026-09-08-06-54-57_ynrbkt.jpg"
                  alt="Seine-et-Marne — carnet de territoire (thelittle77.fr)"
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

              <div className="p-6">
                <h3 className="text-[1.1rem] font-medium text-[#1F4F6E] mb-1.5">
                  Seine-et-Marne — carnet de territoire
                </h3>
                <p className="text-[0.95rem] text-[#5a7a90] leading-[1.6] mb-5 font-normal">
                  Nature, patrimoine et vie locale en 77. Neuf bassins éditoriaux, des centaines de lieux documentés, une audience qui grandit sans publicité.
                </p>

                <div className="flex gap-2 mb-3.5 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 text-[0.78rem] bg-[#f0f7ff] text-[#1F4F6E] px-2.5 py-1 rounded-[4px] font-medium">
                    <Clock className="w-3 h-3 text-[#02ADAB]" /> Construit en 3 mois
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[0.78rem] bg-[#f0f7ff] text-[#1F4F6E] px-2.5 py-1 rounded-[4px] font-normal">
                    <UserCheck className="w-3 h-3 text-[#02ADAB]" /> Rédaction : Cyril Garnier
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2.5 mb-5">
                  <div className="text-center bg-[#f4f8fb] rounded-[8px] py-2.5 px-1.5">
                    <span className="text-[1.3rem] font-medium text-[#1F4F6E] block leading-none mb-1">+200</span>
                    <span className="text-[0.7rem] text-[#7a9ab0] uppercase tracking-[0.08em] font-normal">pages</span>
                  </div>
                  <div className="text-center bg-[#f4f8fb] rounded-[8px] py-2.5 px-1.5">
                    <span className="text-[1.3rem] font-medium text-[#1F4F6E] block leading-none mb-1">600</span>
                    <span className="text-[0.7rem] text-[#7a9ab0] uppercase tracking-[0.08em] font-normal">photos</span>
                  </div>
                  <div className="text-center bg-[#f4f8fb] rounded-[8px] py-2.5 px-1.5">
                    <span className="text-[1.3rem] font-medium text-[#1F4F6E] block leading-none mb-1">275k</span>
                    <span className="text-[0.7rem] text-[#7a9ab0] uppercase tracking-[0.08em] font-normal">vues/mois</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#037971] to-[#02ADAB] rounded-[8px] p-3 sm:px-4 text-white text-[0.9rem] leading-[1.5] mb-4 font-normal shadow-sm">
                  <strong className="font-medium text-white">1ère page Google</strong> sur "photos de ciels et paysages en Seine-et-Marne".<br />
                  <strong className="font-medium text-white">Position 7</strong> sur "Moulin de Belle-Assise" — devant Wikipedia.<br />
                  Cité par Google AI comme référence naturaliste régionale, aux côtés de la LPO.
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0">
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
          <article className="bg-white rounded-[12px] overflow-hidden shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="h-[180px] bg-[#2a2a4a] relative overflow-hidden flex items-center justify-center group">
                <img
                  src="https://res.cloudinary.com/dokzioyu4/image/upload/v1788941670/Logo_thelittle75.fr_d1tmes.jpg"
                  alt="Paris — revue des vingt arrondissements (thelittle75.fr)"
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

              <div className="p-6">
                <h3 className="text-[1.1rem] font-medium text-[#1F4F6E] mb-1.5">
                  Paris — revue des vingt arrondissements
                </h3>
                <p className="text-[0.95rem] text-[#5a7a90] leading-[1.6] mb-5 font-normal">
                  Récits, patrimoine et portraits de quartiers. Onze chroniques de fond, une carte interactive, un index patrimonial complet.
                </p>

                <div className="flex gap-2 mb-3.5 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 text-[0.78rem] bg-[#f0f7ff] text-[#1F4F6E] px-2.5 py-1 rounded-[4px] font-medium">
                    <Clock className="w-3 h-3 text-[#02ADAB]" /> Construit en 2 mois
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[0.78rem] bg-[#f0f7ff] text-[#1F4F6E] px-2.5 py-1 rounded-[4px] font-normal">
                    <UserCheck className="w-3 h-3 text-[#02ADAB]" /> Rédaction : Léonie Egesipe
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2.5 mb-5">
                  <div className="text-center bg-[#f4f8fb] rounded-[8px] py-2.5 px-1.5">
                    <span className="text-[1.3rem] font-medium text-[#1F4F6E] block leading-none mb-1">39</span>
                    <span className="text-[0.7rem] text-[#7a9ab0] uppercase tracking-[0.08em] font-normal">pages</span>
                  </div>
                  <div className="text-center bg-[#f4f8fb] rounded-[8px] py-2.5 px-1.5">
                    <span className="text-[1.3rem] font-medium text-[#1F4F6E] block leading-none mb-1">−91%</span>
                    <span className="text-[0.7rem] text-[#7a9ab0] uppercase tracking-[0.08em] font-normal">poids img</span>
                  </div>
                  <div className="text-center bg-[#f4f8fb] rounded-[8px] py-2.5 px-1.5">
                    <span className="text-[1.3rem] font-medium text-[#1F4F6E] block leading-none mb-1">Top 2</span>
                    <span className="text-[0.7rem] text-[#7a9ab0] uppercase tracking-[0.08em] font-normal">Google</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#037971] to-[#02ADAB] rounded-[8px] p-3 sm:px-4 text-white text-[0.9rem] leading-[1.5] mb-4 font-normal shadow-sm">
                  <strong className="font-medium text-white">2ème résultat Google</strong> sur "chronique Belleville Paris récit".<br />
                  39 pages bien tenues devant des sites dix fois plus gros.<br />
                  Score SEO passé de 45 à 77 en 48h après correction technique.
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0">
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
          <article className="bg-white rounded-[12px] overflow-hidden shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="h-[180px] bg-[#2a4a3a] relative overflow-hidden flex items-center justify-center group p-4">
                <img
                  src="https://res.cloudinary.com/dyooqwryq/image/upload/v1794124042/thelittle83-logo_op3yvm.svg"
                  alt="Var — atlas naturaliste bilingue (thelittle83.fr)"
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

              <div className="p-6">
                <h3 className="text-[1.1rem] font-medium text-[#1F4F6E] mb-1.5">
                  Var — atlas naturaliste bilingue
                </h3>
                <p className="text-[0.95rem] text-[#5a7a90] leading-[1.6] mb-5 font-normal">
                  Oiseaux et paysages du Var. Fiches espèces en français et anglais, spots d'observation, galerie photographique terrain. Zéro compromis sur l'authenticité.
                </p>

                <div className="flex gap-2 mb-3.5 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 text-[0.78rem] bg-[#f0f7ff] text-[#1F4F6E] px-2.5 py-1 rounded-[4px] font-medium">
                    <Clock className="w-3 h-3 text-[#02ADAB]" /> Construit en 24h
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[0.78rem] bg-[#f0f7ff] text-[#1F4F6E] px-2.5 py-1 rounded-[4px] font-normal">
                    <UserCheck className="w-3 h-3 text-[#02ADAB]" /> Rédaction : Cyril Garnier
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2.5 mb-5">
                  <div className="text-center bg-[#f4f8fb] rounded-[8px] py-2.5 px-1.5">
                    <span className="text-[1.3rem] font-medium text-[#1F4F6E] block leading-none mb-1">130</span>
                    <span className="text-[0.7rem] text-[#7a9ab0] uppercase tracking-[0.08em] font-normal">pages</span>
                  </div>
                  <div className="text-center bg-[#f4f8fb] rounded-[8px] py-2.5 px-1.5">
                    <span className="text-[1.3rem] font-medium text-[#1F4F6E] block leading-none mb-1">×2</span>
                    <span className="text-[0.7rem] text-[#7a9ab0] uppercase tracking-[0.08em] font-normal">langues</span>
                  </div>
                  <div className="text-center bg-[#f4f8fb] rounded-[8px] py-2.5 px-1.5">
                    <span className="text-[1.3rem] font-medium text-[#1F4F6E] block leading-none mb-1">&lt;1h</span>
                    <span className="text-[0.7rem] text-[#7a9ab0] uppercase tracking-[0.08em] font-normal">indexé IA</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#037971] to-[#02ADAB] rounded-[8px] p-3 sm:px-4 text-white text-[0.9rem] leading-[1.5] mb-4 font-normal shadow-sm">
                  <strong className="font-medium text-white">Lancé le 8 nov. 2026.</strong> Référencé par Google AI en moins d'une heure.<br />
                  <strong className="font-medium text-white">1er résultat image</strong> sur "aigrette garzette Hyères" dès le lendemain.<br />
                  Aucune publicité. Aucun backlink acheté.
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0">
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
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* AGENTS IA — Section Sombre #1F4F6E */}
      <div className="bg-[#1F4F6E] text-white py-[70px]">
        <section className="max-w-[1100px] mx-auto px-6">
          <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
            Agents IA
          </p>
          <h2 className="text-[1.8rem] font-light mb-3 text-white">
            Quatre collaborateurs <strong className="font-medium text-white">qui ne dorment pas</strong>
          </h2>
          <p className="text-[1.05rem] text-white/70 max-w-[640px] leading-[1.7] mb-12 font-normal">
            Ces agents ne sont pas des expériences. Ils sont en production — ils ont servi à construire les sites que vous venez de voir, et ils tournent chaque semaine.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* Agent 1 : Analyse de marché */}
            <div className="bg-white/[0.07] border border-white/10 rounded-[10px] p-6 hover:bg-white/[0.12] transition-colors duration-200">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-[rgba(2,173,171,0.2)] flex items-center justify-center text-[#02ADAB] mb-4">
                <BarChart3 className="w-5 h-5 text-[#02ADAB]" />
              </div>
              <h3 className="text-[1rem] font-medium text-white mb-2">
                Analyse de marché
              </h3>
              <p className="text-[0.9rem] text-white/65 leading-[1.6] mb-3 font-normal">
                Simule des centaines d'entretiens avec vos clients potentiels. Valide ou invalide une hypothèse en dix minutes, pas en trois mois.
              </p>
              <div className="text-[0.85rem] text-[#02ADAB] font-medium">
                400 réponses synthétiques · &lt;10 minutes
              </div>
            </div>

            {/* Agent 2 : Veille SEO & IA */}
            <div className="bg-white/[0.07] border border-white/10 rounded-[10px] p-6 hover:bg-white/[0.12] transition-colors duration-200">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-[rgba(2,173,171,0.2)] flex items-center justify-center text-[#02ADAB] mb-4">
                <Search className="w-5 h-5 text-[#02ADAB]" />
              </div>
              <h3 className="text-[1rem] font-medium text-white mb-2">
                Veille SEO &amp; IA
              </h3>
              <p className="text-[0.9rem] text-white/65 leading-[1.6] mb-3 font-normal">
                Surveille vos positions sur Google et vos apparitions dans les réponses des IA génératives. Les deux ne se pilotent pas de la même façon.
              </p>
              <div className="text-[0.85rem] text-[#02ADAB] font-medium">
                93 apparitions AI Overviews en 3 mois · TheLittle77
              </div>
            </div>

            {/* Agent 3 : Création de contenus */}
            <div className="bg-white/[0.07] border border-white/10 rounded-[10px] p-6 hover:bg-white/[0.12] transition-colors duration-200">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-[rgba(2,173,171,0.2)] flex items-center justify-center text-[#02ADAB] mb-4">
                <PenTool className="w-5 h-5 text-[#02ADAB]" />
              </div>
              <h3 className="text-[1rem] font-medium text-white mb-2">
                Création de contenus
              </h3>
              <p className="text-[0.9rem] text-white/65 leading-[1.6] mb-3 font-normal">
                Produit des briefs, des chroniques, des scripts à partir d'une contrainte éditoriale. Il accélère, vous validez. L'expertise terrain reste la vôtre.
              </p>
              <div className="text-[0.85rem] text-[#02ADAB] font-medium">
                En production sur les 3 TheLittle
              </div>
            </div>

            {/* Agent 4 : Newsletter */}
            <div className="bg-white/[0.07] border border-white/10 rounded-[10px] p-6 hover:bg-white/[0.12] transition-colors duration-200">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-[rgba(2,173,171,0.2)] flex items-center justify-center text-[#02ADAB] mb-4">
                <Mail className="w-5 h-5 text-[#02ADAB]" />
              </div>
              <h3 className="text-[1rem] font-medium text-white mb-2">
                Newsletter
              </h3>
              <p className="text-[0.9rem] text-white/65 leading-[1.6] mb-3 font-normal">
                Gère le cycle complet : inscription, envoi, suivi des ouvertures. Un pipeline, pas un outil ponctuel. Fonctionne sans intervention manuelle.
              </p>
              <div className="text-[0.85rem] text-[#02ADAB] font-medium">
                Pipeline live · TheLittle77 · depuis nov. 2026
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* CRÉATION ARTISTIQUE : Avec redirections vers les albums photos/vidéos */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Création artistique
        </p>
        <h2 className="text-[1.8rem] font-light mb-3 text-[#1F4F6E]">
          L'IA comme outil de direction, <strong className="font-medium text-[#1F4F6E]">pas de remplacement</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-12 font-normal">
          Projets photo, vidéo et narration générative. L'expertise et le regard restent humains — l'IA accélère la mise en forme et ouvre de nouveaux territoires visuels. Cliquez sur un projet pour ouvrir son album complet.
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
                    src={album.coverImage}
                    alt={album.title}
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
          Créez <strong className="font-medium text-white">votre propre œuvre</strong>
        </h2>
        <p className="text-[1.05rem] text-white/80 max-w-[480px] mx-auto mb-8 leading-[1.7] font-light">
          Chacun de ces projets a commencé par une conversation. Le vôtre aussi peut démarrer aujourd'hui.
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
                    className="max-h-[60vh] w-auto max-w-full object-contain"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <img
                    key={activeAlbum.mediaList[activeMediaIndex].url}
                    src={activeAlbum.mediaList[activeMediaIndex].url}
                    alt={activeAlbum.mediaList[activeMediaIndex].title}
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
                        src={media.url}
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
