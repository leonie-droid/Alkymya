import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { cloudinaryUrl, cloudinarySrcSet } from '../utils/cloudinary';

export default function Home() {
  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Formation IA en entreprise en Île-de-France — Alkymya"
        description="Alkymya, studio IA et organisme de formation : ateliers pratiques OPCO via nos partenaires certifiés Qualiopi, agents IA et accompagnement dirigeants."
        canonicalPath="/"
        ogImage="https://alkymya.co/og-image.jpg"
        type="LocalBusiness"
      />

      <Hero />
      
      {/* Visual Showcase Section */}
      <section className="max-w-[1100px] mx-auto py-10 px-6">
        <figure className="bg-white rounded-[12px] overflow-hidden shadow-[0_2px_16px_rgba(31,79,110,0.08)] p-3 sm:p-4">
          <img
            src={cloudinaryUrl("https://res.cloudinary.com/dokzioyu4/image/upload/v1794758649/duo_office_bifqwq.jpg", 1200)}
            srcSet={cloudinarySrcSet("https://res.cloudinary.com/dokzioyu4/image/upload/v1794758649/duo_office_bifqwq.jpg")}
            sizes="(max-width: 768px) 100vw, 1100px"
            width={1200}
            height={675}
            loading="lazy"
            alt="Cyril Garnier et Léonie Egesipe, co-fondateurs d'Alkymya — formation IA en entreprise et accompagnement intelligence artificielle"
            className="w-full h-auto object-cover rounded-[8px]"
            referrerPolicy="no-referrer"
          />
          <figcaption className="pt-3.5 pb-1 px-2 text-center text-[0.92rem] text-[#4a6a80] font-normal leading-relaxed">
            <strong className="font-medium text-[#1F4F6E]">Cyril Garnier et Léonie Egesipe</strong>, co-fondateurs d'Alkymya — le binôme qui accompagne vos équipes sur le terrain.
          </figcaption>
        </figure>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />
      
      {/* Notre Impact Section */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Résultats prouvés &amp; satisfaction
        </p>
        <h2 className="text-[1.8rem] sm:text-[2rem] font-light mb-3 text-[#1F4F6E]">
          Impact de notre agence IA <strong className="font-medium text-[#1F4F6E]">sur le terrain</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-12 font-normal">
          Des résultats mesurés en accompagnement intelligence artificielle, création d'agents IA sur mesure et stratégie SEO et GEO auprès de nos clients et apprenants.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "99,3%", label: "des participants recommandent nos ateliers", highlight: "Recommandation" },
            { value: "175", label: "apprenants accompagnés et évalués en 2024-2025", highlight: "Apprenants formés" },
            { value: "+1,6 pts", label: "de progression moyenne sur les compétences IA", highlight: "Progression compétences" },
            { value: "90,9%", label: "se sentent plus performants dès le premier mois", highlight: "Performance directe" }
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-[12px] p-7 shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 text-center flex flex-col justify-between"
            >
              <div>
                <h3 className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-[#02ADAB] block mb-2">
                  {stat.highlight}
                </h3>
                <div className="text-[2.2rem] sm:text-[2.5rem] font-light text-[#C06721] mb-2 leading-none">
                  {stat.value}
                </div>
              </div>
              <p className="text-[0.9rem] text-[#5a7a90] font-normal leading-[1.6]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* CE QUE VOUS REPARTEZ AVEC & NOS TROIS FORMATS */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Livrables &amp; Formats Opérationnels
        </p>
        <h2 className="text-[1.8rem] sm:text-[2rem] font-light mb-3 text-[#1F4F6E]">
          Ce que vous repartez avec <strong className="font-medium text-[#1F4F6E]">et nos trois formats</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[680px] leading-[1.7] mb-12 font-normal">
          Alkymya, studio IA et organisme de formation, privilégie 80 % de mise en pratique. Vos équipes repartent avec des agents IA connectés, une application web interne, une bibliothèque de prompts maîtres et une grille de conformité AI Act.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-10">
          <div className="bg-white rounded-[12px] p-7 shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col justify-between">
            <div>
              <span className="inline-block text-[0.72rem] font-medium tracking-[0.1em] uppercase py-1 px-2.5 rounded-[4px] mb-3 bg-[rgba(2,173,171,0.12)] text-[#037971]">
                Format 1 · 14 heures
              </span>
              <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-2">
                Formation Core IA (OPCO via partenaires Qualiopi)
              </h3>
              <p className="text-[0.94rem] text-[#5a7a90] leading-[1.6] mb-4 font-normal">
                Quatre demi-journées en présentiel en Île-de-France ou en classe virtuelle. Vos équipes maîtrisent prompt engineering avancé, rédaction, création visuelle et synthèse documentaire, finançables jusqu'à 100 % OPCO via nos partenaires certifiés Qualiopi.
              </p>
            </div>
            <Link to="/ateliers" className="text-[0.88rem] font-medium text-[#02ADAB] hover:text-[#037971] inline-flex items-center gap-1.5">
              <span>Voir le programme Core IA</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white rounded-[12px] p-7 shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col justify-between">
            <div>
              <span className="inline-block text-[0.72rem] font-medium tracking-[0.1em] uppercase py-1 px-2.5 rounded-[4px] mb-3 bg-[rgba(192,103,33,0.12)] text-[#C06721]">
                Format 2 · 3h30 intensif
              </span>
              <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-2">
                Ateliers Agents IA &amp; App No-Code
              </h3>
              <p className="text-[0.94rem] text-[#5a7a90] leading-[1.6] mb-4 font-normal">
                Une demi-journée ciblée pour repartir avec 3 agents intelligents autonomes reliés à Slack, Notion ou votre CRM, ou une application web interne interconnectée à Gemini et GPT sans écrire une ligne de code.
              </p>
            </div>
            <Link to="/ateliers" className="text-[0.88rem] font-medium text-[#02ADAB] hover:text-[#037971] inline-flex items-center gap-1.5">
              <span>Découvrir les ateliers pratiques</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white rounded-[12px] p-7 shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col justify-between">
            <div>
              <span className="inline-block text-[0.72rem] font-medium tracking-[0.1em] uppercase py-1 px-2.5 rounded-[4px] mb-3 bg-[rgba(31,79,110,0.1)] text-[#1F4F6E]">
                Format 3 · 6 mois
              </span>
              <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-2">
                New Business MVP &amp; Preuves terrain
              </h3>
              <p className="text-[0.94rem] text-[#5a7a90] leading-[1.6] mb-4 font-normal">
                Accompagnement en binôme par Cyril Garnier et Léonie Egesipe (200 € / mois) pour structurer votre offre, tester votre marché auprès de vrais clients et consulter nos preuves SEO/GEO en production.
              </p>
            </div>
            <Link to="/oeuvres" className="text-[0.88rem] font-medium text-[#02ADAB] hover:text-[#037971] inline-flex items-center gap-1.5">
              <span>Voir nos 3 études de cas TheLittle</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-[12px] p-6 sm:p-7 shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#02ADAB] shrink-0 mt-0.5" />
            <p className="text-[0.95rem] text-[#4a6a80] leading-[1.6]">
              <strong className="font-medium text-[#1F4F6E]">Preuves vérifiables :</strong> nos méthodes propulsent nos propres médias éditoriaux (thelittle77.fr, thelittle75.fr, thelittle83.fr — jusqu'à 275k vues/mois sur Facebook et cités dans Google AI Overviews).
            </p>
          </div>
          <Link to="/oeuvres" className="text-sm font-medium text-[#C06721] hover:underline shrink-0">
            Explorer les cas clients →
          </Link>
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* Signature Copper CTA Banner */}
      <div className="bg-[#C06721] text-white text-center py-[70px] px-10">
        <h2 className="text-[2rem] font-light mb-3.5 text-white">
          Parlons de votre projet <strong className="font-medium text-white">d'accompagnement intelligence artificielle</strong>
        </h2>
        <p className="text-[1.05rem] text-white/80 max-w-[540px] mx-auto mb-8 leading-[1.7] font-light">
          Studio création IA, création d'agents IA sur mesure ou stratégie SEO et GEO (visibilité Google AI) : concevons le parcours adapté à vos objectifs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/ateliers"
            className="inline-block bg-white text-[#C06721] text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
          >
            Découvrir nos ateliers →
          </Link>
          <Link
            to="/contact"
            className="inline-block bg-white/10 hover:bg-white/20 text-white text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 border border-white/25"
          >
            Contacter un alchimiste
          </Link>
        </div>
      </div>
    </div>
  );
}
