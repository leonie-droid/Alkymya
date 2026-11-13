import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, FileText, Download, Play, X, ArrowRight, ExternalLink, Headphones, BarChart3, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const personas = [
  {
    id: 1,
    name: "L'explorateur Engagé",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1768237966/video-1768232584944_v4wvfs.mp4",
    description: "Passionné de technologie, il utilise quotidiennement plusieurs outils IA et n'hésite pas à investir dans des versions premium."
  },
  {
    id: 2,
    name: "L'usager Pragmatique",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1768237991/video-1768236440371_ygvlj0.mp4",
    description: "Il voit l'IA comme un outil efficace pour gagner du temps dans ses études ou son travail au quotidien."
  },
  {
    id: 3,
    name: "Les apprentis connectés",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1768238011/video-1768236910262_pzw9nj.mp4",
    description: "Les 16-20 ans, hyper-connectés, usage scolaire prioritaire, recherche documentaire et aide aux devoirs."
  },
  {
    id: 4,
    name: "Designers & Créatifs",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1768238866/video-1768238148239_lkwjxh.mp4",
    description: "Professionnels de l'image et du design qui voient l'IA comme un superpouvoir démultipliant leur inventivité."
  },
  {
    id: 5,
    name: "Les observateurs prudents",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1768238879/video-1768238755932_iadxpi.mp4",
    description: "Méfiance ou désintérêt assumé. Position d'attente critique face aux promesses de l'intelligence artificielle."
  }
];

export default function GenerateurIA() {
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);

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

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Génération IA & Démonstrateurs | Alkymya"
        description="Étude empirique et démonstrateurs d'IA générative : 5 personas d'utilisateurs en vidéo, synthèses audio, rapports d'enquêtes 2024-2026 à télécharger."
      />

      {/* Video Modal */}
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

      {/* HERO SECTION DESIGN SYSTEM */}
      <header className="bg-[#1F4F6E] text-white py-20 px-6 sm:px-10 text-center relative overflow-hidden">
        <div className="max-w-[700px] mx-auto relative z-10">
          <p className="text-[0.85rem] tracking-[0.15em] uppercase text-[#02ADAB] mb-4 font-normal">
            Étude Empirique &amp; Démonstrateurs Métiers
          </p>

          <h1 className="font-light text-[2.4rem] sm:text-[2.6rem] leading-[1.2] mb-5 text-white">
            Génération IA &amp;<br />
            <strong className="font-medium text-white">démonstrateurs interactifs.</strong>
          </h1>

          <p className="text-[1.05rem] sm:text-[1.1rem] text-white/75 max-w-[620px] mx-auto leading-[1.7] font-light mb-8">
            Comprendre l'adoption réelle de l'IA générative dans l'enseignement supérieur et les entreprises à travers nos enquêtes terrain, nos personas vidéo et nos prototypes opérationnels.
          </p>

          {/* Stats Ribbon */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">5 Personas</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Vidéos documentées</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">380+</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Répondants terrain</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">3 Rapports</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">2024, 2025, 2026</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">100% Open</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Téléchargement libre</div>
            </div>
          </div>
        </div>
      </header>

      {/* MÉTHODOLOGIE SCIENTIFIQUE */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-[12px] overflow-hidden shadow-[0_2px_16px_rgba(31,79,110,0.08)] bg-white p-2"
          >
            <img 
              src="https://res.cloudinary.com/dokzioyu4/image/upload/v1777491204/Capture_GENERATION_IA_lrxvdx.png" 
              alt="Génération IA Illustration" 
              className="w-full h-auto object-cover rounded-[8px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="lg:col-span-7 space-y-6 text-[#4a6a80] font-normal leading-[1.7] text-left">
            <div>
              <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
                Méthodologie Scientifique &amp; Empirique
              </p>
              <h2 className="text-[1.8rem] sm:text-[2rem] font-light text-[#1F4F6E]">
                L'enquête de référence sur <strong className="font-medium text-[#1F4F6E]">les usages réels de l'IA</strong>
              </h2>
            </div>

            <p className="text-[1rem]">
              L'étude <strong className="font-medium text-[#1F4F6E]">Génération IA</strong> repose sur une approche empirique menée par <strong className="font-medium text-[#1F4F6E]">Alkymya</strong> pour analyser en profondeur l'évolution des usages de l'IA générative dans l'enseignement supérieur et le monde professionnel.
            </p>

            <div className="space-y-4 pl-4 border-l-2 border-[#02ADAB]/40">
              <div>
                <span className="text-[#1F4F6E] font-medium uppercase text-xs tracking-wider block mb-1">
                  1. Collecte de données terrain
                </span>
                <p className="text-[0.92rem] text-[#5a7a90]">
                  Enquêtes directes menées auprès de 320 à 387 répondants (étudiants et enseignants) issus d'écoles comme l'IESEG, HETIC, ISCOM ou Ynov.
                </p>
              </div>
              <div>
                <span className="text-[#1F4F6E] font-medium uppercase text-xs tracking-wider block mb-1">
                  2. Analyse comportementale par Personas
                </span>
                <p className="text-[0.92rem] text-[#5a7a90]">
                  Segmentation des utilisateurs en 5 profils types (Explorateurs, Pragmatiques, Apprentis, Créatifs, Observateurs) pour refléter la diversité des usages et des niveaux de maturité.
                </p>
              </div>
              <div>
                <span className="text-[#1F4F6E] font-medium uppercase text-xs tracking-wider block mb-1">
                  3. Approche hybride et prospective
                </span>
                <p className="text-[0.92rem] text-[#5a7a90]">
                  Combinaison de métriques quantitatives et de verbatims qualitatifs pour identifier les freins éthiques, les gains de productivité réels et les besoins d'encadrement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* AUDIOS & RAPPORTS TÉLÉCHARGEABLES */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6 space-y-8">
        <div>
          <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
            Ressources &amp; Synthèses
          </p>
          <h2 className="text-[1.8rem] sm:text-[2rem] font-light mb-3 text-[#1F4F6E]">
            Écoutez les synthèses <strong className="font-medium text-[#1F4F6E]">&amp; téléchargez les études</strong>
          </h2>
        </div>

        {/* Row 1: Audios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col justify-between">
            <div className="mb-4">
              <div className="flex items-center gap-2 text-[#02ADAB] mb-2">
                <Headphones className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Audio de Synthèse • 2025</span>
              </div>
              <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-2">
                Génération IA 2025 : Les 5 Personas décryptés
              </h3>
              <p className="text-[0.9rem] text-[#5a7a90] leading-[1.6]">
                Présentation audio commentée des cinq profils types d'usagers de l'intelligence artificielle et de leurs motivations.
              </p>
            </div>
            <audio 
              controls 
              className="w-full h-10 rounded-[8px] mt-2"
              src="https://res.cloudinary.com/dokzioyu4/video/upload/v1777492353/audio-1762320210342_qdmbjp_x0cnml.mp3"
            />
          </div>

          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col justify-between">
            <div className="mb-4">
              <div className="flex items-center gap-2 text-[#C06721] mb-2">
                <Headphones className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Audio d'Analyse • 2024</span>
              </div>
              <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-2">
                Étude Génération IA 2024 : L'Enquête Initiale
              </h3>
              <p className="text-[0.9rem] text-[#5a7a90] leading-[1.6]">
                Restitution audio des conclusions de notre première grande enquête menée auprès des étudiants des grandes écoles.
              </p>
            </div>
            <audio 
              controls 
              className="w-full h-10 rounded-[8px] mt-2"
              src="https://res.cloudinary.com/dokzioyu4/video/upload/v1777492141/4a3a2fb2-5f2e-467f-a9c9-75867d11d184_uw4iwp.mp3"
            />
          </div>
        </div>

        {/* Row 2: PDFs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <a
            href="https://res.cloudinary.com/dokzioyu4/image/upload/v1777491668/Generation_IA-2024-V1_Mars_2025_2_cxtaeh_ygnyce.pdf"
            download="Synthese_Generation_IA_2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-8 rounded-[12px] bg-[#1F4F6E] text-white shadow-[0_2px_16px_rgba(31,79,110,0.12)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.2)] hover:-translate-y-1 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-11 h-11 rounded-[10px] bg-[rgba(2,173,171,0.2)] flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#02ADAB]" />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-[#02ADAB]">PDF • Synthèse 2024</span>
            </div>
            <h3 className="text-[1.25rem] font-medium mb-3 text-white">Génération IA 2024 : L'Enquête</h3>
            <p className="text-[0.92rem] text-white/75 leading-[1.6] mb-6 font-light">
              Analyse approfondie de l’utilisation de l’IA générative : tendances, outils de prédilection, besoins de formation et enjeux critiques.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#02ADAB] group-hover:translate-x-1 transition-transform">
              <span>Télécharger la synthèse</span>
              <Download className="w-4 h-4" />
            </div>
          </a>

          <a
            href="https://res.cloudinary.com/dokzioyu4/image/upload/v1777491985/generation_ia_2025_personas_20251105051526_qvl18j_1_jjn9s4.pdf"
            download="Generation_IA_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-11 h-11 rounded-[10px] bg-[#02ADAB]/15 flex items-center justify-center">
                <Download className="w-5 h-5 text-[#02ADAB]" />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-[#C06721]">PDF • Personas 2025</span>
            </div>
            <h3 className="text-[1.25rem] font-medium mb-3 text-[#1F4F6E]">Les Personas de l'IA (2025)</h3>
            <p className="text-[0.92rem] text-[#5a7a90] leading-[1.6] mb-6 font-normal">
              Segmentation détaillée des 5 profils types d'usagers pour adapter vos cursus et stratégies d'entreprise aux pratiques effectives.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#02ADAB] group-hover:translate-x-1 transition-transform">
              <span>Télécharger les personas</span>
              <Download className="w-4 h-4" />
            </div>
          </a>
        </div>

        {/* Row 3: Rapport 2026 */}
        <div className="p-8 md:p-12 rounded-[12px] bg-[#C06721] text-white shadow-[0_2px_16px_rgba(31,79,110,0.12)] text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 rounded-[4px] bg-white/15 text-white text-xs font-medium uppercase tracking-wider">
              Exclusivité 2026
            </span>
            <h3 className="text-[1.8rem] sm:text-[2rem] font-light text-white">
              Rapport Prospectif : <strong className="font-medium text-white">Génération IA 2026</strong>
            </h3>
            <p className="text-white/85 text-[1rem] leading-[1.7] font-light">
              Découvrez et téléchargez notre nouveau rapport complet sur l'impact futur, l'évolution des compétences et les mutations de l'IA générative en entreprise pour 2026.
            </p>
            <div className="pt-2">
              <a
                href="https://res.cloudinary.com/dokzioyu4/image/upload/v1780148789/rapport-generation-ia-2026_v10_20260528_tymyph.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#C06721] font-medium text-sm rounded-[8px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all"
              >
                <span>Télécharger le rapport 2026</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* 5 PERSONAS EN VIDÉO */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Vidéos &amp; Comportements
        </p>
        <h2 className="text-[1.8rem] sm:text-[2rem] font-light mb-3 text-[#1F4F6E]">
          Les 5 Personas de l'IA <strong className="font-medium text-[#1F4F6E]">en vidéo</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-12 font-normal">
          Cliquez sur un profil pour visionner son scénario vidéo et décrypter son rapport quotidien à l'IA.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {personas.map((persona) => (
            <div
              key={persona.id}
              onClick={() => setSelectedVideo(persona.url)}
              className="group rounded-[12px] overflow-hidden bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="aspect-[9/16] relative bg-black overflow-hidden">
                <video 
                  src={persona.url} 
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity pointer-events-none"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#C06721] transition-all">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[0.98rem] font-medium text-[#1F4F6E] group-hover:text-[#C06721] transition-colors mb-2">
                    {persona.name}
                  </h3>
                  <p className="text-xs text-[#5a7a90] leading-relaxed italic">
                    « {persona.description} »
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[rgba(31,79,110,0.08)] flex items-center justify-between text-[11px] font-medium text-[#02ADAB]">
                  <span>Voir la vidéo</span>
                  <Play className="w-3 h-3 fill-current" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Test Persona CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://capitalllm.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#1F4F6E] hover:bg-[#02ADAB] text-white font-medium text-sm rounded-[8px] shadow-sm transition-all"
          >
            <span>Faire le test : Quel persona IA êtes-vous ?</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* STRUCTURED QUESTIONS & ANSWERS */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Méthode &amp; Usages Opérationnels
        </p>
        <h2 className="text-[1.8rem] sm:text-[2rem] font-light mb-3 text-[#1F4F6E]">
          Comprendre le <strong className="font-medium text-[#1F4F6E]">Générateur d'Idées IA</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-12 font-normal">
          Cinq réponses concrètes pour transformer une intuition technologique en valeur métier mesurable.
        </p>

        <div className="space-y-5">
          {/* Question 1 */}
          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
            <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-[8px] bg-[#02ADAB]/15 text-[#02ADAB] text-sm font-medium flex items-center justify-center shrink-0">1</span>
              À qui s'adresse le Générateur d'Idées IA Alkymya ?
            </h3>
            <div className="space-y-3 text-[#5a7a90] leading-[1.65] text-[0.95rem]">
              <p>
                Cette suite d'outils d'idéation s'adresse en priorité aux dirigeants d'entreprise, directeurs de l'innovation, chefs de produit, consultants en stratégie et étudiants des grandes écoles qui souhaitent dépasser les simples requêtes génériques pour éprouver de vraies hypothèses de marché.
              </p>
              <ul className="space-y-1.5 pl-4 border-l-2 border-[#02ADAB]/40 text-[#4a6a80] text-sm">
                <li>• <strong className="font-medium text-[#1F4F6E]">Dirigeants et entrepreneurs :</strong> tester l'appétence d'un segment de marché et identifier les fonctionnalités indispensables avant tout investissement.</li>
                <li>• <strong className="font-medium text-[#1F4F6E]">Responsables marketing et produit :</strong> simuler des réactions utilisateurs et formaliser des personas comportementaux nuancés.</li>
                <li>• <strong className="font-medium text-[#1F4F6E]">Formateurs et enseignants :</strong> illustrer en direct auprès d'apprenants la puissance de l'ingénierie de prompt contextualisée.</li>
              </ul>
            </div>
          </div>

          {/* Question 2 */}
          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
            <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-[8px] bg-[#02ADAB]/15 text-[#02ADAB] text-sm font-medium flex items-center justify-center shrink-0">2</span>
              Que livre concrètement cette suite de démonstrateurs ?
            </h3>
            <div className="space-y-3 text-[#5a7a90] leading-[1.65] text-[0.95rem]">
              <p>
                Le Générateur IA n'est pas un concept abstrait : c'est un ensemble d'applications concrètes connectées aux modèles de langage de pointe (Google Gemini et OpenAI), calibrés avec nos propres bibliothèques de contraintes métiers.
              </p>
              <ul className="space-y-1.5 pl-4 border-l-2 border-[#02ADAB]/40 text-[#4a6a80] text-sm">
                <li>• <strong className="font-medium text-[#1F4F6E]">Simulateur de personas interactif :</strong> cinq profils types d'usagers de l'IA avec scénarios vidéo et fiches de comportement.</li>
                <li>• <strong className="font-medium text-[#1F4F6E]">Moteurs de prompts avancés :</strong> formulaires guidés pour générer des propositions de valeur et des matrices d'arbitrage.</li>
                <li>• <strong className="font-medium text-[#1F4F6E]">Rapports prospectifs téléchargeables :</strong> accès libre à nos études 2024, 2025 et 2026.</li>
                <li>• <strong className="font-medium text-[#1F4F6E]">Quiz d'auto-évaluation :</strong> diagnostic interactif pour situer la maturité IA de vos équipes.</li>
              </ul>
            </div>
          </div>

          {/* Question 3 */}
          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
            <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-[8px] bg-[#02ADAB]/15 text-[#02ADAB] text-sm font-medium flex items-center justify-center shrink-0">3</span>
              Comment se déroule l'expérimentation d'un cas d'usage ?
            </h3>
            <div className="space-y-3 text-[#5a7a90] leading-[1.65] text-[0.95rem]">
              <p>
                L'utilisation du Générateur IA suit une méthodologie en trois étapes éprouvée lors de nos interventions en entreprise : observation, confrontation et synthèse opérationnelle.
              </p>
              <p>
                Vous choisissez une problématique métier précise (par exemple la qualification automatisée de prospects ou la synthèse documentaire). L'outil sollicite alors des agents spécialisés qui confrontent votre idée à des contraintes réalistes de budget, de conformité RGPD et d'adoption utilisateur. En moins de dix minutes, vous obtenez une vue panoramique des forces et des angles morts de votre initiative.
              </p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
            <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-[8px] bg-[#02ADAB]/15 text-[#02ADAB] text-sm font-medium flex items-center justify-center shrink-0">4</span>
              Ce que change l'idéation assistée par IA dans votre organisation
            </h3>
            <div className="space-y-3 text-[#5a7a90] leading-[1.65] text-[0.95rem]">
              <p>
                Dans la plupart des organisations, passer de l'idée au premier cadrage demande entre trois et six semaines de réunions préparatoires. Grâce à l'ingénierie de prompt contextualisée développée par Alkymya, ce délai est ramené à quelques heures.
              </p>
              <p>
                Ce gain de temps ne se fait jamais au détriment de la rigueur : l'intelligence artificielle est paramétrée pour agir comme un contradicteur exigeant, qui pointe les failles du modèle économique plutôt que de valider passivement des hypothèses complaisantes.
              </p>
            </div>
          </div>

          {/* Question 5 */}
          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
            <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-[8px] bg-[#02ADAB]/15 text-[#02ADAB] text-sm font-medium flex items-center justify-center shrink-0">5</span>
              Preuves de terrain et retours d'expérience vérifiables
            </h3>
            <div className="space-y-3 text-[#5a7a90] leading-[1.65] text-[0.95rem]">
              <p>
                Les démonstrateurs présentés sur cette page ont été testés et enrichis auprès de plus de 450 professionnels et étudiants issus d'écoles reconnues comme HETIC, Ynov Campus, IÉSEG et CFA Itis.
              </p>
              <p>
                Sur nos médias de territoire comme TheLittle77, l'agent d'analyse de marché adossé à cette technologie a produit plus de 400 simulations de personas documentés en moins de dix minutes, permettant de calibrer la ligne éditoriale sans mobiliser des semaines d'enquêtes terrain préalables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* CTA FINAL — Exact Maquette Orange #C06721 */}
      <div className="bg-[#C06721] text-white text-center py-[70px] px-10">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-white/80 mb-2.5 font-medium">
          Passez de l'observation à l'action
        </p>
        <h2 className="text-[2rem] font-light mb-3.5 text-white">
          Testez vos cas d'usage <strong className="font-medium text-white">lors d'un atelier pratique</strong>
        </h2>
        <p className="text-[1.05rem] text-white/85 max-w-[560px] mx-auto mb-8 leading-[1.7] font-light">
          Nos ateliers d'une journée permettent à vos équipes de s'approprier ces outils, de créer leurs propres personas et de prototyper leurs premiers cas d'usage métiers.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/ateliers"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#C06721] text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
          >
            <span>Découvrir nos ateliers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-block bg-white/10 hover:bg-white/20 text-white text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 border border-white/25"
          >
            Organiser une session sur-mesure
          </Link>
        </div>
      </div>
    </div>
  );
}
