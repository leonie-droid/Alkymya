import React from 'react';
import { motion } from 'motion/react';
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
  return (
    <div className="min-h-screen py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-8">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-widest">Étude 2024</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-8">
              <h1 className="text-5xl md:text-8xl font-heading font-black text-deep-blue leading-tight selection:bg-accent selection:text-white">
                Génération <span className="text-accent">IA</span>
              </h1>
              
              <div className="space-y-6 text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed text-left border-l-4 border-accent/20 pl-8">
                <p>
                  Ils ne sont pas simplement nés avec le digital : la <span className="text-deep-blue font-bold">Génération IA</span>, c’est celle qui grandit avec ChatGPT, qui apprivoise le pouvoir des intelligences artificielles au quotidien.
                </p>
                <p>
                  Mon étude le montre : ces jeunes font de l’IA leur nouvel outil, avec talent et inventivité. Mais derrière les superpouvoirs, il y a aussi le vertige — risque de perte d’emplois, transformation des métiers, et nécessité de se réinventer en continu.
                </p>
                <p>
                  Les accompagner, c’est essentiel : leur donner les clés pour rester humains, développer leur esprit critique et construire leur propre trajectoire dans un monde où tout s’accélère.
                </p>
                <p>
                  C’est aux entreprises, aussi, d’inventer de nouvelles stratégies, de créer du lien et de miser sur les talents de cette génération frontalière du futur.
                </p>
                <p className="text-deep-blue font-medium italic">
                  Chez Alkymya, j’aide les organisations et les jeunes à inventer ensemble un monde où l’IA est un levier, pas juste un défi.
                </p>
              </div>
            </div>

            {/* Study PDF Card */}
            <div className="lg:col-span-4 mt-8 lg:mt-0 flex flex-col gap-6">
              <motion.a
                href="#"
                download="Synthese_Generation_IA_2025.pdf"
                className="block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="p-8 rounded-[3rem] bg-deep-blue text-white shadow-2xl relative overflow-hidden group border-none cursor-pointer hover:ring-4 hover:ring-accent/30 transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl -mr-16 -mt-16 group-hover:bg-accent/40 transition-colors" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                      <FileText className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Synthèse 2025</span>
                      <Download className="h-4 w-4 text-accent/50 group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="text-2xl font-heading font-black mb-6 leading-tight">Génération IA 2025 : L'Enquête</h3>
                    <p className="text-sm text-white/70 mb-4 font-normal leading-relaxed">
                      Analyse approfondie de l’utilisation de l’IA générative : tendances, outils, besoins et enjeux critiques. (387 répondants)
                    </p>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mt-auto group-hover:translate-x-2 transition-transform">
                      Télécharger la synthèse →
                    </span>
                  </div>
                </Card>
              </motion.a>

              <motion.a
                href="#"
                download="Generation_IA_2025_Full.pdf"
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="p-6 rounded-[2.5rem] bg-white border-2 border-accent/20 shadow-xl hover:shadow-2xl transition-all group cursor-pointer hover:border-accent">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                      <Download className="h-7 w-7 text-accent group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-black text-deep-blue uppercase tracking-wider">Document PDF</p>
                      <p className="text-xs text-muted-foreground font-medium">Génération_IA_2025.pdf</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-full group-hover:bg-accent group-hover:text-white text-accent transition-colors"
                    >
                      <Download className="h-5 w-5" />
                    </Button>
                  </div>
                </Card>
              </motion.a>
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
                <Card className="rounded-[2rem] overflow-hidden border-accent/10 hover:shadow-2xl transition-all duration-500 group">
                  <div className="aspect-[9/16] relative bg-black">
                    <video 
                      src={persona.url} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      controls
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
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
