import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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
    description: "Il voit l'IA comme un outil efficace pour gagner du temps dans ses études ou son travail."
  },
  {
    id: 3,
    name: "Les apprentis connectés",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1768238011/video-1768236910262_pzw9nj.mp4",
    description: "Les 16-20 ans, hyper-connectés, usage scolaire prioritaire et aide aux devoirs."
  },
  {
    id: 4,
    name: "Designers & Créatifs",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1768238866/video-1768238148239_lkwjxh.mp4",
    description: "Professionnels de l'image qui voient l'IA comme un superpouvoir démultipliant leur talent."
  },
  {
    id: 5,
    name: "Les observateurs prudents",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1768238879/video-1768238755932_iadxpi.mp4",
    description: "Méfiance ou désintérêt. Position d'attente face aux promesses de l'IA."
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
    <div className="min-h-screen py-24 px-4 bg-background">
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
                className="absolute -top-14 right-0 text-white bg-accent rounded-full p-3 shadow-xl hover:scale-110 transition-transform z-[110]"
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
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          {/* Removed Etude 2025 badge */}
          
          <div className="space-y-12">
            <h1 className="text-5xl md:text-8xl font-heading font-black text-deep-blue leading-tight selection:bg-accent selection:text-white">
              Génération <span className="text-accent">IA</span>
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-accent/10 bg-white"
              >
                <img 
                  src="https://res.cloudinary.com/dokzioyu4/image/upload/v1777491204/Capture_GENERATION_IA_lrxvdx.png" 
                  alt="Génération IA Illustration" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <div className="space-y-6 text-lg text-muted-foreground font-normal leading-relaxed text-left">
                <p>
                  L'étude <span className="text-deep-blue font-bold">Génération IA</span> repose sur une approche empirique menée par <span className="text-deep-blue font-bold">Alkymya</span> pour analyser l'évolution des usages de l'IA générative dans l'enseignement supérieur.
                </p>
                <p>
                  Sa méthodologie s'articule autour de trois piliers :
                </p>
                <div className="space-y-4 pl-4 border-l-2 border-accent/20">
                  <p>
                    <span className="text-deep-blue font-bold uppercase text-xs tracking-wider block mb-1">Collecte de données terrain</span>
                    Enquêtes directes réalisées entre 2024 et 2025 auprès de 320 à 387 répondants (étudiants et enseignants) issus d'écoles comme l'IESEG, HETIC, ISCOM ou Ynov.
                  </p>
                  <p>
                    <span className="text-deep-blue font-bold uppercase text-xs tracking-wider block mb-1">Analyse comportementale par Personas</span>
                    Segmentation des utilisateurs en 5 profils types (Explorateurs, Pragmatiques, Apprentis, Créatifs, Observateurs) pour refléter la diversité des usages et des niveaux de maîtrise.
                  </p>
                  <p>
                    <span className="text-deep-blue font-bold uppercase text-xs tracking-wider block mb-1">Approche hybride et pédagogique</span>
                    Combinaison de statistiques quantitatives et de retours qualitatifs (verbatims) pour identifier les outils de référence, les besoins en fiabilité et l'impact sur les compétences futures.
                  </p>
                </div>
                <p className="text-deep-blue font-medium italic">
                  Cette méthode permet de transformer des observations de terrain en recommandations stratégiques pour adapter les cursus à la révolution de l'IA.
                </p>
              </div>
            </div>

            {/* Study section - Reorganized into rows */}
            <div className="space-y-8 pt-16">
              {/* Row 1: Audios (Side by side) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card className="p-8 h-full rounded-[2.5rem] bg-accent/5 border-2 border-dashed border-accent/20 relative overflow-hidden group">
                    <div className="relative z-10 space-y-4">
                      <div>
                        <h4 className="text-2xl font-heading font-black text-deep-blue leading-tight mb-1">Génération IA 2025 : 5 Personas</h4>
                        <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">Audios de synthèse</p>
                      </div>
                      <audio 
                        controls 
                        className="w-full h-10 rounded-full"
                        src="https://res.cloudinary.com/dokzioyu4/video/upload/v1777492353/audio-1762320210342_qdmbjp_x0cnml.mp3"
                      />
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Card className="p-8 h-full rounded-[2.5rem] bg-muted/30 border-2 border-dashed border-accent/20 relative overflow-hidden group">
                    <div className="relative z-10 space-y-4">
                      <div>
                        <h4 className="text-2xl font-heading font-black text-deep-blue leading-tight mb-1">Étude Génération IA 2024</h4>
                        <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">Audios d'analyse</p>
                      </div>
                      <audio 
                        controls 
                        className="w-full h-10 rounded-full"
                        src="https://res.cloudinary.com/dokzioyu4/video/upload/v1777492141/4a3a2fb2-5f2e-467f-a9c9-75867d11d184_uw4iwp.mp3"
                      />
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* Row 2: PDFs (Side by side) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.a
                  href="https://res.cloudinary.com/dokzioyu4/image/upload/v1777491668/Generation_IA-2024-V1_Mars_2025_2_cxtaeh_ygnyce.pdf"
                  download="Synthese_Generation_IA_2024.pdf"
                  className="block"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Card className="p-10 h-full rounded-[3.5rem] bg-deep-blue text-white shadow-2xl relative overflow-hidden group border-none cursor-pointer hover:ring-4 hover:ring-accent/30 transition-all">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 blur-[100px] -mr-24 -mt-24 group-hover:bg-accent/40 transition-colors" />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                        <FileText className="h-7 w-7 text-accent" />
                      </div>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Synthèse 2024</span>
                        <Download className="h-5 w-5 text-accent/50 group-hover:text-accent transition-colors" />
                      </div>
                      <h3 className="text-3xl font-heading font-black mb-8 leading-tight">Génération IA 2024 : L'Enquête</h3>
                      <p className="text-base text-white/70 mb-8 font-normal leading-relaxed">
                        Analyse approfondie de l’utilisation de l’IA générative : tendances, outils, besoins et enjeux critiques.
                      </p>
                      <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mt-auto group-hover:translate-x-2 transition-transform">
                        Télécharger la synthèse →
                      </span>
                    </div>
                  </Card>
                </motion.a>

                <motion.a
                  href="https://res.cloudinary.com/dokzioyu4/image/upload/v1777491985/generation_ia_2025_personas_20251105051526_qvl18j_1_jjn9s4.pdf"
                  download="Generation_IA_2025.pdf"
                  className="block"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <Card className="p-10 h-full rounded-[3.5rem] bg-white border-2 border-accent/20 shadow-xl hover:shadow-2xl transition-all group cursor-pointer hover:border-accent flex flex-col">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all">
                      <Download className="h-7 w-7 text-accent group-hover:text-white" />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Génération IA 2025</span>
                      <Download className="h-5 w-5 text-accent/50" />
                    </div>
                    <h3 className="text-3xl font-heading font-black mb-8 leading-tight text-deep-blue">Les Personas de l'IA</h3>
                    <p className="text-base text-muted-foreground mb-8 font-normal leading-relaxed">
                      Segmentation des utilisateurs en 5 profils types pour refléter la diversité des usages et des niveaux de maîtrise.
                    </p>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mt-auto group-hover:translate-x-2 transition-transform">
                      Télécharger les personas →
                    </span>
                  </Card>
                </motion.a>
              </div>

              {/* Row 3: Engage (Full width or centered) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="max-w-4xl mx-auto w-full pt-8"
              >
                <Card className="p-12 rounded-[3rem] bg-accent text-white shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group border-none">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-[120px] -mr-32 -mt-32 group-hover:bg-white/30 transition-colors" />
                  <div className="relative z-10 flex flex-col items-center gap-8 text-center">
                    <div className="max-w-2xl mx-auto">
                      <h4 className="text-3xl md:text-4xl font-heading font-black text-white leading-tight mb-4 text-center">Étude Génération IA 2026</h4>
                      <p className="text-base md:text-lg text-white/90 font-normal leading-relaxed text-center">
                        Découvrez et téléchargez notre nouveau rapport complet sur l'impact futur, les usages et l'évolution de l'intelligence artificielle générative pour 2026.
                      </p>
                    </div>
                    <Button 
                      className="px-12 py-8 rounded-full bg-deep-blue hover:bg-white hover:text-deep-blue font-black transition-all border-none text-xl shadow-2xl"
                      size="lg"
                      onClick={() => window.open('https://res.cloudinary.com/dokzioyu4/image/upload/v1780148789/rapport-generation-ia-2026_v10_20260528_tymyph.pdf', '_blank')}
                    >
                      Télécharger le rapport →
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Personas Section */}
        <section className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-black text-deep-blue mb-6">
              Les <span className="text-accent">Personas</span> de l'IA
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez comment différents profils interagissent avec l'intelligence artificielle au quotidien.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personas.map((persona, index) => (
              <motion.div
                key={persona.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button 
                  onClick={() => setSelectedVideo(persona.url)}
                  className="rounded-[2rem] overflow-hidden border-accent/10 hover:shadow-2xl transition-all duration-500 group text-left outline-none cursor-zoom-in"
                >
                  <div className="aspect-[9/16] relative bg-black">
                    <video 
                      src={persona.url} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-deep-blue mb-2 group-hover:text-accent transition-colors">
                      {persona.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      {persona.description}
                    </p>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Button 
              size="lg" 
              className="rounded-full bg-accent hover:bg-deep-blue text-white px-10 py-7 text-xl font-black shadow-2xl hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://capitalllm.netlify.app/', '_blank')}
            >
              Quel persona je suis ?
            </Button>
          </motion.div>
        </section>

        {/* Structured Questions & Answers Section (Consigne 15: 600-900 mots) */}
        <section className="mt-32 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 rounded-full bg-copper-orange/10 border border-copper-orange/30 text-copper-orange text-xs font-black uppercase tracking-widest inline-block mb-4">
              Méthode &amp; Usages Opérationnels
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-deep-blue">
              Comprendre le <span className="text-copper-orange">Générateur d'Idées IA</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-base md:text-lg">
              Cinq réponses concrètes pour transformer une intuition technologique en valeur métier mesurable.
            </p>
          </div>

          <div className="space-y-8">
            {/* Question 1: À qui s'adresse l'offre */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-deep-blue/10 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-heading font-black text-deep-blue mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-copper-orange/15 text-copper-orange text-sm font-black flex items-center justify-center shrink-0">1</span>
                À qui s'adresse le Générateur d'Idées IA Alkymya ?
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                <p>
                  Cette suite d'outils d'idéation s'adresse en priorité aux dirigeants d'entreprise, directeurs de l'innovation, chefs de produit, consultants en stratégie et étudiants des grandes écoles qui souhaitent dépasser les simples requêtes génériques pour éprouver de vraies hypothèses de marché.
                </p>
                <p>
                  Que vous soyez en phase de cadrage d'un nouveau produit numérique, à la recherche de personas clients documentés ou en quête de cas d'usage opérationnels pour vos équipes métiers, le Générateur IA offre un cadre interactif rigoureux, sans jargon superflu et immédiatement mobilisable :
                </p>
                <ul className="space-y-2 pl-4 border-l-2 border-copper-orange/40 text-deep-blue/90 font-medium text-sm">
                  <li>• <strong>Dirigeants et entrepreneurs :</strong> tester l'appétence d'un segment de marché et identifier les fonctionnalités indispensables avant tout investissement.</li>
                  <li>• <strong>Responsables marketing et produit :</strong> simuler des réactions utilisateurs et formaliser des personas comportementaux nuancés.</li>
                  <li>• <strong>Formateurs et enseignants :</strong> illustrer en direct auprès d'apprenants la puissance de l'ingénierie de prompt contextualisée.</li>
                </ul>
              </div>
            </div>

            {/* Question 2: Ce qui est livré */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-deep-blue/10 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-heading font-black text-deep-blue mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-copper-orange/15 text-copper-orange text-sm font-black flex items-center justify-center shrink-0">2</span>
                Que livre concrètement cette suite de démonstrateurs ?
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                <p>
                  Le Générateur IA n'est pas un concept théorique : c'est un ensemble d'applications concrètes connectées aux modèles de langage les plus avancés du marché (Google Gemini et OpenAI GPT), calibrés avec nos propres bibliothèques de contraintes métiers.
                </p>
                <p>
                  En naviguant dans l'outil, vous accédez à des livrables exploitables immédiatement pour nourrir vos réunions stratégiques ou vos dossiers de cadrage :
                </p>
                <ul className="space-y-2 pl-4 border-l-2 border-copper-orange/40 text-deep-blue/90 font-medium text-sm">
                  <li>• <strong>Simulateur de personas interactif :</strong> cinq profils types d'usagers de l'IA (explorateur engagé, usager pragmatique, apprentis connectés, designers créatifs, observateurs prudents) avec scénarios vidéo et fiches de comportement.</li>
                  <li>• <strong>Moteurs de prompts avancés :</strong> formulaires guidés pour générer des propositions de valeur, des matrices de risques et des scripts de pitch.</li>
                  <li>• <strong>Rapport prospectif téléchargeable :</strong> accès direct à notre étude exclusive « Génération IA 2026 » analysant les mutations technologiques et organisationnelles à venir.</li>
                  <li>• <strong>Quiz d'auto-évaluation :</strong> outil de diagnostic interactif pour situer la maturité IA de vos collaborateurs et de vos processus.</li>
                </ul>
              </div>
            </div>

            {/* Question 3: Comment ça se passe */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-deep-blue/10 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-heading font-black text-deep-blue mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-copper-orange/15 text-copper-orange text-sm font-black flex items-center justify-center shrink-0">3</span>
                Comment se déroule l'expérimentation d'un cas d'usage ?
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                <p>
                  L'utilisation du Générateur IA suit une méthodologie en trois étapes éprouvée lors de nos interventions en entreprise : observation, confrontation et synthèse opérationnelle.
                </p>
                <p>
                  Vous commencez par choisir une problématique métier précise (par exemple la qualification automatisée de prospects ou la génération de synthèses documentaires). L'outil sollicite alors des agents spécialisés qui confrontent votre idée à des contraintes réalistes de budget, de conformité RGPD et d'adoption utilisateur. En moins de dix minutes, vous obtenez une vue panoramique des forces et des angles morts de votre initiative.
                </p>
              </div>
            </div>

            {/* Question 4: Ce que ça change */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-deep-blue/10 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-heading font-black text-deep-blue mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-copper-orange/15 text-copper-orange text-sm font-black flex items-center justify-center shrink-0">4</span>
                Ce que change l'idéation assistée par IA dans votre organisation
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                <p>
                  Dans la plupart des organisations, passer de l'idée au premier cadrage demande entre trois et six semaines de réunions préparatoires. Grâce à l'ingénierie de prompt contextualisée développée par Alkymya, ce délai est ramené à quelques heures.
                </p>
                <p>
                  Ce gain de temps ne se fait jamais au détriment de la rigueur : l'intelligence artificielle est paramétrée pour agir comme un contradicteur exigeant, qui pointe les failles du modèle économique plutôt que de valider passivement des hypothèses complaisantes. Vos équipes abordent ensuite leurs ateliers de prototypage avec une vision lucide et argumentée.
                </p>
              </div>
            </div>

            {/* Question 5: Preuves et références */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-deep-blue/10 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-heading font-black text-deep-blue mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-copper-orange/15 text-copper-orange text-sm font-black flex items-center justify-center shrink-0">5</span>
                Preuves de terrain et retours d'expérience vérifiables
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
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
    </div>
  );
}
