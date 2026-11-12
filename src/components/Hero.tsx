import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Compass, Rocket, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  { 
    name: 'Explorer', 
    icon: Compass,
    description: "Formations sur-mesure et ateliers pratiques pour démystifier l'IA et explorer son potentiel réel pour votre activité.",
    points: [
      "Formations grandes écoles & entreprises",
      "Ateliers pratiques « IA pour les pros »",
      "Approche pédagogique immersive",
      "Veille prospective et inspiration continue"
    ],
    link: "/ateliers",
    linkText: "Voir les ateliers"
  },
  { 
    name: 'Transformer', 
    icon: Rocket,
    description: "Du conseil à la réalisation. Nous vous aidons à passer de l'idée au prototype fonctionnel en intégrant l'IA au cœur de vos processus.",
    points: [
      "Advisory pour startups & entreprises",
      "Ateliers de prototypage rapide (MVP)",
      "Stratégie d'intégration de l'IA générative",
      "Transformation organisationnelle sur-mesure"
    ],
    link: "/new-business",
    linkText: "Programme MVP 6 mois"
  },
  { 
    name: 'Partager', 
    icon: Users,
    description: "Conseil stratégique et mentorat pour acculturer les équipes, développer les talents et diffuser les pratiques d'alchimie créative.",
    points: [
      "Mentorat personnalisé en binôme",
      "Recrutement et évaluation de talents IA",
      "Production d'œuvres numériques hybrides",
      "Partage d'études et de ressources libres"
    ],
    link: "/alchimistes",
    linkText: "Rencontrer l'équipe"
  },
];

export default function Hero() {
  return (
    <div>
      {/* Hero Section — Maquette Signature Deep Blue */}
      <section className="bg-gradient-to-b from-[#1F4F6E] via-[#163c54] to-[#122e40] text-white pt-32 pb-24 px-6 sm:px-12 text-center relative overflow-hidden">
        {/* Micro-dot grid pattern & glow blur */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#02ADAB_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#02ADAB]/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-copper-orange/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#02ADAB] text-xs font-bold uppercase tracking-wider mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Collectif d'Alchimistes IA • Création & Stratégie</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-light text-white mb-8 tracking-tight leading-[1.1]">
            L'art de la <strong className="font-semibold text-white underline decoration-[#02ADAB] decoration-2 underline-offset-8">transformation</strong> IA.
          </h1>

          <p className="text-white/80 text-lg sm:text-2xl max-w-2xl mx-auto font-normal leading-relaxed mb-12">
            Alkymya fusionne créativité sensible et expertise technologique pour propulser les organisations et la <span className="text-white font-semibold">Génération IA</span> vers l'excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/ateliers"
              className="w-full sm:w-auto px-8 py-4 bg-copper-orange text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#a85517] transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <span>Explorer nos ateliers IA</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/oeuvres"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-full border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center"
            >
              Découvrir nos œuvres
            </Link>
          </div>

          {/* Stats Ribbon */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-semibold text-white">99,3%</div>
              <div className="text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">Recommandation clients</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-semibold text-[#02ADAB]">175+</div>
              <div className="text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">Apprenants évalués</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-semibold text-copper-orange">15+</div>
              <div className="text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">Partenaires & écoles</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-semibold text-white">100%</div>
              <div className="text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">Sur-mesure & terrain</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section className="bg-[#FAF9F7] py-20 px-6 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#02ADAB] mb-2 block">
              Notre Méthode en 3 Piliers
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1F4F6E]">
              Explorer, Transformer, Partager
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-3">
              Une démarche pragmatique et humaine pour intégrer l'IA générative sans perdre votre singularité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.name}
                  className="flex flex-col p-8 rounded-2xl bg-white shadow-[0_4px_24px_rgba(31,79,110,0.06)] hover:shadow-[0_12px_36px_rgba(31,79,110,0.12)] border border-[#1F4F6E]/10 hover:border-copper-orange/30 transition-all duration-300 group justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-bold uppercase tracking-widest text-copper-orange">
                        Pilier 0{index + 1}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-copper-orange/10 flex items-center justify-center text-copper-orange">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-heading font-bold mb-3 text-[#1F4F6E]">{pillar.name}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      {pillar.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={pillar.link}
                    className="inline-flex items-center justify-between pt-4 border-t border-[#1F4F6E]/10 text-xs font-bold uppercase tracking-wider text-[#1F4F6E] group-hover:text-copper-orange transition-colors"
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
