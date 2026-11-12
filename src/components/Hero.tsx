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
      {/* Hero Section — Exact Maquette Deep Blue */}
      <header className="bg-[#1F4F6E] text-white py-20 px-6 sm:px-10 text-center relative overflow-hidden">
        <div className="max-w-[700px] mx-auto relative z-10">
          <p className="text-[0.85rem] tracking-[0.15em] uppercase text-[#02ADAB] mb-4 font-normal">
            Collectif d'Alchimistes IA · Création & Stratégie
          </p>
          <h1 className="font-light text-[2.4rem] sm:text-[2.6rem] leading-[1.2] mb-5 text-white">
            L'art de la transformation IA.<br />
            <strong className="font-medium text-white">Créativité sensible &amp; résultats concrets.</strong>
          </h1>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-white/75 max-w-[620px] mx-auto leading-[1.7] font-light mb-8">
            Alkymya fusionne créativité sensible et expertise technologique pour propulser les organisations et la Génération IA vers l'excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/ateliers"
              className="inline-block bg-[#C06721] hover:bg-[#a85517] text-white text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] shadow-md"
            >
              Explorer nos ateliers IA →
            </Link>
            <Link
              to="/oeuvres"
              className="inline-block bg-white/10 hover:bg-white/20 text-white text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 border border-white/25"
            >
              Découvrir nos œuvres
            </Link>
          </div>

          {/* Stats Ribbon */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">99,3%</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Recommandation</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">175+</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Apprenants évalués</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">15+</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Partenaires &amp; écoles</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">100%</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Sur-mesure &amp; terrain</div>
            </div>
          </div>
        </div>
      </header>

      {/* 3 Pillars Section */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium text-center">
          Notre méthode en 3 piliers
        </p>
        <h2 className="text-[1.8rem] sm:text-[2rem] font-light mb-3 text-[#1F4F6E] text-center">
          Explorer, Transformer, <strong className="font-medium text-[#1F4F6E]">Partager</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-12 font-normal text-center mx-auto">
          Une démarche pragmatique et humaine pour intégrer l'IA générative sans perdre votre singularité.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.name}
                className="bg-white rounded-[12px] overflow-hidden shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between p-7"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-[#02ADAB]">
                      Pilier 0{index + 1}
                    </span>
                    <div className="w-10 h-10 rounded-[8px] bg-[rgba(2,173,171,0.1)] flex items-center justify-center text-[#02ADAB]">
                      <Icon className="w-5 h-5 text-[#02ADAB]" />
                    </div>
                  </div>

                  <h3 className="text-[1.2rem] font-medium mb-2 text-[#1F4F6E]">{pillar.name}</h3>
                  <p className="text-[0.95rem] text-[#5a7a90] leading-[1.6] mb-5 font-normal">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2.5 mb-7">
                    {pillar.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[0.88rem] text-[#1F4F6E]/80 font-normal">
                        <CheckCircle2 className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={pillar.link}
                  className="inline-flex items-center justify-between pt-4 border-t border-[rgba(31,79,110,0.08)] text-[0.88rem] font-medium text-[#02ADAB] hover:text-[#037971] transition-colors group"
                >
                  <span>{pillar.linkText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
