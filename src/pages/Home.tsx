import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Home() {
  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Alkymya | L'art de la transformation IA"
        description="Alkymya fusionne créativité sensible et expertise technologique pour propulser les organisations et la Génération IA vers l'excellence. Ateliers, formation, conseil et créations numériques."
      />

      <Hero />
      
      {/* Visual Showcase Section */}
      <section className="max-w-[1100px] mx-auto py-10 px-6">
        <div className="bg-white rounded-[12px] overflow-hidden shadow-[0_2px_16px_rgba(31,79,110,0.08)] p-3 sm:p-4">
          <img 
            src="https://res.cloudinary.com/dokzioyu4/image/upload/v1780154614/DuAFdcjz_bo9gcq.png" 
            alt="Alkymya Visual Showcase" 
            className="w-full h-auto object-cover rounded-[8px]"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />
      
      {/* Notre Impact Section */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Résultats prouvés &amp; satisfaction
        </p>
        <h2 className="text-[1.8rem] sm:text-[2rem] font-light mb-3 text-[#1F4F6E]">
          Notre impact <strong className="font-medium text-[#1F4F6E]">sur le terrain</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-12 font-normal">
          Des résultats mesurés et une adhésion exceptionnelle auprès de nos apprenants et clients (étude 2024-2025).
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "99,3%", label: "des participants recommandent nos ateliers", highlight: "Recommandation" },
            { value: "175", label: "apprenants accompagnés et certifiés en 2024-2025", highlight: "Apprenants certifiés" },
            { value: "+1,6 pts", label: "de progression moyenne sur les compétences IA", highlight: "Progression compétences" },
            { value: "90,9%", label: "se sentent plus performants dès le premier mois", highlight: "Performance directe" }
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-[12px] p-7 shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 text-center flex flex-col justify-between"
            >
              <div>
                <span className="text-[0.72rem] font-medium tracking-[0.1em] uppercase text-[#02ADAB] block mb-2">
                  {stat.highlight}
                </span>
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

      {/* Signature Copper CTA Banner */}
      <div className="bg-[#C06721] text-white text-center py-[70px] px-10">
        <h2 className="text-[2rem] font-light mb-3.5 text-white">
          Parlons de vos enjeux <strong className="font-medium text-white">et formons vos équipes</strong>
        </h2>
        <p className="text-[1.05rem] text-white/80 max-w-[540px] mx-auto mb-8 leading-[1.7] font-light">
          Atelier d'initiation, acculturation d'un département, ou accompagnement New Business MVP : nous concevons le parcours adapté à vos objectifs.
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
