import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Award, Users, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Home() {
  return (
    <div className="bg-[#FAF9F7] text-[#1F4F6E] min-h-screen selection:bg-copper-orange selection:text-white">
      <SEO
        title="Alkymya | L'art de la transformation IA"
        description="Alkymya fusionne créativité sensible et expertise technologique pour propulser les organisations et la Génération IA vers l'excellence. Ateliers, formation, conseil et créations numériques."
      />

      <Hero />
      
      {/* Visual Showcase Section */}
      <section className="py-12 max-w-4xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full overflow-hidden rounded-3xl shadow-[0_12px_40px_rgba(31,79,110,0.1)] border border-[#1F4F6E]/10 bg-white p-2 sm:p-3"
        >
          <img 
            src="https://res.cloudinary.com/dokzioyu4/image/upload/v1780154614/DuAFdcjz_bo9gcq.png" 
            alt="Alkymya Visual Showcase" 
            className="w-full h-auto object-cover rounded-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>
      
      {/* Notre Impact Section */}
      <section className="py-24 max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#02ADAB] mb-2 block">
            Résultats Prouvés &amp; Satisfaction
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1F4F6E] mb-4">
            Notre Impact sur le terrain
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Des résultats mesurés et une adhésion exceptionnelle auprès de nos apprenants et clients <span className="text-copper-orange font-semibold">(étude 2024-2025)</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "99,3%", label: "des participants recommandent nos ateliers" },
            { value: "175", label: "apprenants accompagnés et certifiés en 2024-2025" },
            { value: "+1,6 pts", label: "de progression moyenne sur les compétences IA" },
            { value: "90,9%", label: "se sentent plus performants dès le premier mois" }
          ].map((stat, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white shadow-[0_4px_24px_rgba(31,79,110,0.06)] hover:shadow-[0_12px_36px_rgba(31,79,110,0.12)] border border-[#1F4F6E]/10 text-center transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-copper-orange mb-3">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Copper CTA Banner */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 mb-20">
        <div className="bg-[#C06721] text-white rounded-3xl p-8 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
              Prêt à explorer votre alchimie IA ?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Parlons de vos enjeux et formons vos équipes
            </h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              Atelier d'initiation, acculturation d'un département, ou accompagnement New Business MVP : nous concevons le parcours adapté à vos objectifs.
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
                Contacter un alchimiste
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
