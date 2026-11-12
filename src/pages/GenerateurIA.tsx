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
    <div className="bg-[#FAF9F7] text-[#1F4F6E] min-h-screen pt-28 pb-20 selection:bg-copper-orange selection:text-white">
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
                className="absolute -top-14 right-0 text-white bg-copper-orange rounded-full p-3 shadow-xl hover:scale-110 transition-transform z-[110]"
                onClick={() => setSelectedVideo(null)}
                aria-label="Fermer la vidéo"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10">
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

      {/* Hero Section — Maquette Signature Deep Blue */}
      <section className="bg-gradient-to-b from-[#1F4F6E] via-[#163c54] to-[#122e40] text-white py-20 px-6 sm:px-12 md:py-28 text-center relative overflow-hidden mb-16">
        {/* Micro-dot grid pattern & glow blur */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#02ADAB_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#02ADAB]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-copper-orange/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#02ADAB] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Étude Empirique & Démonstrateurs Métiers</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-light text-white mb-6 tracking-tight leading-tight">
            Génération IA &amp; <strong className="font-semibold text-white underline decoration-[#02ADAB] decoration-2 underline-offset-8">démonstrateurs interactifs</strong>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-12">
            Comprendre l'adoption réelle de l'IA générative dans l'enseignement supérieur et les entreprises à travers nos enquêtes terrain, nos personas vidéo et nos prototypes opérationnels.
          </p>

          {/* Stats Ribbon */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-semibold text-white">5 Personas</div>
              <div className="text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">Vidéos documentées</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-semibold text-[#02ADAB]">380+</div>
              <div className="text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">Répondants terrain</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-semibold text-copper-orange">3 Rapports</div>
              <div className="text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">2024, 2025, 2026</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-semibold text-white">100% Open</div>
              <div className="text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">Téléchargement libre</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 space-y-24">

        {/* Intro Grid : Illustration + Piliers méthodologiques */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(31,79,110,0.08)] border border-[#1F4F6E]/10 bg-white p-2"
          >
            <img 
              src="https://res.cloudinary.com/dokzioyu4/image/upload/v1777491204/Capture_GENERATION_IA_lrxvdx.png" 
              alt="Génération IA Illustration" 
              className="w-full h-auto object-cover rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="lg:col-span-7 space-y-6 text-slate-700 font-normal leading-relaxed text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#02ADAB] mb-2 block">
                Méthodologie Scientifique &amp; Empirique
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1F4F6E]">
                L'enquête de référence sur les usages réels de l'IA
              </h2>
            </div>

            <p className="text-base md:text-lg">
              L'étude <strong className="text-[#1F4F6E]">Génération IA</strong> repose sur une approche empirique menée par <strong className="text-[#1F4F6E]">Alkymya</strong> pour analyser en profondeur l'évolution des usages de l'IA générative dans l'enseignement supérieur et le monde professionnel.
            </p>

            <div className="space-y-4 pl-4 border-l-2 border-[#02ADAB]/30">
              <div>
                <span className="text-[#1F4F6E] font-bold uppercase text-xs tracking-wider block mb-1">
                  1. Collecte de données terrain
                </span>
                <p className="text-sm text-slate-600">
                  Enquêtes directes menées auprès de 320 à 387 répondants (étudiants et enseignants) issus d'écoles comme l'IESEG, HETIC, ISCOM ou Ynov.
                </p>
              </div>
              <div>
                <span className="text-[#1F4F6E] font-bold uppercase text-xs tracking-wider block mb-1">
                  2. Analyse comportementale par Personas
                </span>
                <p className="text-sm text-slate-600">
                  Segmentation des utilisateurs en 5 profils types (Explorateurs, Pragmatiques, Apprentis, Créatifs, Observateurs) pour refléter la diversité des usages et des niveaux de maturité.
                </p>
              </div>
              <div>
                <span className="text-[#1F4F6E] font-bold uppercase text-xs tracking-wider block mb-1">
                  3. Approche hybride et prospective
                </span>
                <p className="text-sm text-slate-600">
                  Combinaison de métriques quantitatives et de verbatims qualitatifs pour identifier les freins éthiques, les gains de productivité réels et les besoins d'encadrement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Audios & Rapports Téléchargeables */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#02ADAB] mb-2 block">
              Ressources &amp; Synthèses
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1F4F6E]">
              Écoutez les synthèses &amp; téléchargez les études
            </h2>
          </div>

          {/* Row 1: Audios (Side by side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-[#1F4F6E]/10 shadow-[0_4px_24px_rgba(31,79,110,0.06)] flex flex-col justify-between">
              <div className="mb-4">
                <div className="flex items-center gap-2 text-[#02ADAB] mb-2">
                  <Headphones className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Audio de Synthèse • 2025</span>
                </div>
                <h4 className="text-xl font-heading font-bold text-[#1F4F6E] mb-2">
                  Génération IA 2025 : Les 5 Personas décryptés
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Présentation audio commentée des cinq profils types d'usagers de l'intelligence artificielle et de leurs motivations.
                </p>
              </div>
              <audio 
                controls 
                className="w-full h-10 rounded-lg mt-2"
                src="https://res.cloudinary.com/dokzioyu4/video/upload/v1777492353/audio-1762320210342_qdmbjp_x0cnml.mp3"
              />
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#1F4F6E]/10 shadow-[0_4px_24px_rgba(31,79,110,0.06)] flex flex-col justify-between">
              <div className="mb-4">
                <div className="flex items-center gap-2 text-copper-orange mb-2">
                  <Headphones className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Audio d'Analyse • 2024</span>
                </div>
                <h4 className="text-xl font-heading font-bold text-[#1F4F6E] mb-2">
                  Étude Génération IA 2024 : L'Enquête Initiale
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Restitution audio des conclusions de notre première grande enquête menée auprès des étudiants des grandes écoles.
                </p>
              </div>
              <audio 
                controls 
                className="w-full h-10 rounded-lg mt-2"
                src="https://res.cloudinary.com/dokzioyu4/video/upload/v1777492141/4a3a2fb2-5f2e-467f-a9c9-75867d11d184_uw4iwp.mp3"
              />
            </div>
          </div>

          {/* Row 2: PDFs (Side by side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://res.cloudinary.com/dokzioyu4/image/upload/v1777491668/Generation_IA-2024-V1_Mars_2025_2_cxtaeh_ygnyce.pdf"
              download="Synthese_Generation_IA_2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 rounded-2xl bg-gradient-to-br from-[#1F4F6E] to-[#122e40] text-white shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#02ADAB]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#02ADAB]">PDF • Synthèse 2024</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3 text-white">Génération IA 2024 : L'Enquête</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                Analyse approfondie de l’utilisation de l’IA générative : tendances, outils de prédilection, besoins de formation et enjeux critiques.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#02ADAB] group-hover:translate-x-2 transition-transform">
                <span>Télécharger la synthèse</span>
                <Download className="w-4 h-4" />
              </div>
            </a>

            <a
              href="https://res.cloudinary.com/dokzioyu4/image/upload/v1777491985/generation_ia_2025_personas_20251105051526_qvl18j_1_jjn9s4.pdf"
              download="Generation_IA_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 rounded-2xl bg-white border border-[#1F4F6E]/10 shadow-[0_4px_24px_rgba(31,79,110,0.06)] hover:shadow-xl hover:border-[#02ADAB]/40 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-copper-orange/10 flex items-center justify-center">
                  <Download className="w-6 h-6 text-copper-orange" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-copper-orange">PDF • Personas 2025</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3 text-[#1F4F6E]">Les Personas de l'IA (2025)</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Segmentation détaillée des 5 profils types d'usagers pour adapter vos cursus et stratégies d'entreprise aux pratiques effectives.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-copper-orange group-hover:translate-x-2 transition-transform">
                <span>Télécharger les personas</span>
                <Download className="w-4 h-4" />
              </div>
            </a>
          </div>

          {/* Row 3: Rapport 2026 */}
          <div className="p-8 md:p-12 rounded-3xl bg-[#C06721] text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
                Exclusivité 2026
              </span>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
                Rapport Prospectif : Génération IA 2026
              </h3>
              <p className="text-white/90 text-base leading-relaxed">
                Découvrez et téléchargez notre nouveau rapport complet sur l'impact futur, l'évolution des compétences et les mutations de l'IA générative en entreprise pour 2026.
              </p>
              <div className="pt-2">
                <a
                  href="https://res.cloudinary.com/dokzioyu4/image/upload/v1780148789/rapport-generation-ia-2026_v10_20260528_tymyph.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#C06721] font-bold text-sm uppercase tracking-wider rounded-full hover:bg-slate-100 transition-all shadow-md"
                >
                  <span>Télécharger le rapport 2026</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Personas Section with Videos */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#02ADAB] mb-2 block">
              Vidéos &amp; Comportements
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1F4F6E] mb-4">
              Les 5 Personas de l'IA en vidéo
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Cliquez sur un profil pour visionner son scénario vidéo et décrypter son rapport quotidien à l'IA.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {personas.map((persona) => (
              <div
                key={persona.id}
                onClick={() => setSelectedVideo(persona.url)}
                className="group rounded-2xl overflow-hidden bg-white border border-[#1F4F6E]/10 shadow-[0_4px_24px_rgba(31,79,110,0.06)] hover:shadow-[0_12px_36px_rgba(31,79,110,0.12)] hover:border-[#02ADAB]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="aspect-[9/16] relative bg-black overflow-hidden">
                  <video 
                    src={persona.url} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-copper-orange transition-all">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-heading font-bold text-[#1F4F6E] group-hover:text-copper-orange transition-colors mb-2">
                      {persona.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed italic">
                      "{persona.description}"
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#1F4F6E]/10 flex items-center justify-between text-[11px] font-bold text-[#02ADAB]">
                    <span>Voir la vidéo</span>
                    <Play className="w-3 h-3 fill-current" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Test Persona CTA */}
          <div className="mt-14 text-center">
            <a
              href="https://capitalllm.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1F4F6E] hover:bg-[#163c54] text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <span>Faire le test : Quel persona IA êtes-vous ?</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Structured Questions & Answers */}
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#02ADAB] mb-2 block">
              Méthode &amp; Usages Opérationnels
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1F4F6E]">
              Comprendre le <span className="text-copper-orange">Générateur d'Idées IA</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-base">
              Cinq réponses concrètes pour transformer une intuition technologique en valeur métier mesurable.
            </p>
          </div>

          <div className="space-y-6">
            {/* Question 1 */}
            <div className="p-8 rounded-2xl bg-white border border-[#1F4F6E]/10 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-[#1F4F6E] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-copper-orange/15 text-copper-orange text-sm font-bold flex items-center justify-center shrink-0">1</span>
                À qui s'adresse le Générateur d'Idées IA Alkymya ?
              </h3>
              <div className="space-y-3 text-slate-600 leading-relaxed text-sm">
                <p>
                  Cette suite d'outils d'idéation s'adresse en priorité aux dirigeants d'entreprise, directeurs de l'innovation, chefs de produit, consultants en stratégie et étudiants des grandes écoles qui souhaitent dépasser les simples requêtes génériques pour éprouver de vraies hypothèses de marché.
                </p>
                <ul className="space-y-1.5 pl-4 border-l-2 border-copper-orange/40 text-slate-700 font-medium text-xs">
                  <li>• <strong>Dirigeants et entrepreneurs :</strong> tester l'appétence d'un segment de marché et identifier les fonctionnalités indispensables avant tout investissement.</li>
                  <li>• <strong>Responsables marketing et produit :</strong> simuler des réactions utilisateurs et formaliser des personas comportementaux nuancés.</li>
                  <li>• <strong>Formateurs et enseignants :</strong> illustrer en direct auprès d'apprenants la puissance de l'ingénierie de prompt contextualisée.</li>
                </ul>
              </div>
            </div>

            {/* Question 2 */}
            <div className="p-8 rounded-2xl bg-white border border-[#1F4F6E]/10 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-[#1F4F6E] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-copper-orange/15 text-copper-orange text-sm font-bold flex items-center justify-center shrink-0">2</span>
                Que livre concrètement cette suite de démonstrateurs ?
              </h3>
              <div className="space-y-3 text-slate-600 leading-relaxed text-sm">
                <p>
                  Le Générateur IA n'est pas un concept abstrait : c'est un ensemble d'applications concrètes connectées aux modèles de langage de pointe (Google Gemini et OpenAI), calibrés avec nos propres bibliothèques de contraintes métiers.
                </p>
                <ul className="space-y-1.5 pl-4 border-l-2 border-copper-orange/40 text-slate-700 font-medium text-xs">
                  <li>• <strong>Simulateur de personas interactif :</strong> cinq profils types d'usagers de l'IA avec scénarios vidéo et fiches de comportement.</li>
                  <li>• <strong>Moteurs de prompts avancés :</strong> formulaires guidés pour générer des propositions de valeur et des matrices d'arbitrage.</li>
                  <li>• <strong>Rapports prospectifs téléchargeables :</strong> accès libre à nos études 2024, 2025 et 2026.</li>
                  <li>• <strong>Quiz d'auto-évaluation :</strong> diagnostic interactif pour situer la maturité IA de vos équipes.</li>
                </ul>
              </div>
            </div>

            {/* Question 3 */}
            <div className="p-8 rounded-2xl bg-white border border-[#1F4F6E]/10 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-[#1F4F6E] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-copper-orange/15 text-copper-orange text-sm font-bold flex items-center justify-center shrink-0">3</span>
                Comment se déroule l'expérimentation d'un cas d'usage ?
              </h3>
              <div className="space-y-3 text-slate-600 leading-relaxed text-sm">
                <p>
                  L'utilisation du Générateur IA suit une méthodologie en trois étapes éprouvée lors de nos interventions en entreprise : observation, confrontation et synthèse opérationnelle.
                </p>
                <p>
                  Vous choisissez une problématique métier précise (par exemple la qualification automatisée de prospects ou la synthèse documentaire). L'outil sollicite alors des agents spécialisés qui confrontent votre idée à des contraintes réalistes de budget, de conformité RGPD et d'adoption utilisateur. En moins de dix minutes, vous obtenez une vue panoramique des forces et des angles morts de votre initiative.
                </p>
              </div>
            </div>

            {/* Question 4 */}
            <div className="p-8 rounded-2xl bg-white border border-[#1F4F6E]/10 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-[#1F4F6E] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-copper-orange/15 text-copper-orange text-sm font-bold flex items-center justify-center shrink-0">4</span>
                Ce que change l'idéation assistée par IA dans votre organisation
              </h3>
              <div className="space-y-3 text-slate-600 leading-relaxed text-sm">
                <p>
                  Dans la plupart des organisations, passer de l'idée au premier cadrage demande entre trois et six semaines de réunions préparatoires. Grâce à l'ingénierie de prompt contextualisée développée par Alkymya, ce délai est ramené à quelques heures.
                </p>
                <p>
                  Ce gain de temps ne se fait jamais au détriment de la rigueur : l'intelligence artificielle est paramétrée pour agir comme un contradicteur exigeant, qui pointe les failles du modèle économique plutôt que de valider passivement des hypothèses complaisantes.
                </p>
              </div>
            </div>

            {/* Question 5 */}
            <div className="p-8 rounded-2xl bg-white border border-[#1F4F6E]/10 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-[#1F4F6E] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-copper-orange/15 text-copper-orange text-sm font-bold flex items-center justify-center shrink-0">5</span>
                Preuves de terrain et retours d'expérience vérifiables
              </h3>
              <div className="space-y-3 text-slate-600 leading-relaxed text-sm">
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

      </div>

      {/* Signature Copper CTA Banner */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 mt-24">
        <div className="bg-[#C06721] text-white rounded-3xl p-8 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
              Passez de l'observation à l'action
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Testez vos cas d'usage lors d'un atelier pratique
            </h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              Nos ateliers d'une journée permettent à vos équipes de s'approprier ces outils, de créer leurs propres personas et de prototyper leurs premiers cas d'usage métiers.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/ateliers"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#C06721] font-bold text-sm uppercase tracking-wider rounded-full hover:bg-slate-100 transition-all shadow-md inline-flex items-center justify-center gap-2"
              >
                <span>Découvrir nos ateliers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-white text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white/10 transition-all"
              >
                Organiser une session sur-mesure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
