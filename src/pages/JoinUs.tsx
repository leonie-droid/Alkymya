import React from 'react';
import { motion } from 'motion/react';
import { Users, Rocket, Heart, Lightbulb, ArrowRight, Mail, Sparkles, CheckCircle2, Compass, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const values = [
  {
    icon: Heart,
    title: "Passion, Éthique & Conformité IA Act",
    description: "Nous croyons en une technologie au service de l'humain, guidée par une éthique rigoureuse et la conformité IA Act pour des œuvres durables."
  },
  {
    icon: Lightbulb,
    title: "Studio Création IA & Veille Continue",
    description: "L'IA évolue chaque semaine. Notre studio création IA explore sans cesse de nouveaux modèles, stratégies SEO et GEO et agents IA sur mesure."
  },
  {
    icon: Users,
    title: "Experts IA France & Intelligence Collective",
    description: "Alkymya est un espace d'hybridation des savoirs où experts IA France, formateurs Qualiopi, artistes numériques et développeurs co-créent."
  }
];

export default function JoinUs() {
  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Rejoindre l'Agence IA Alkymya | Experts IA France"
        description="Rejoignez notre studio création IA et agence IA : formateurs Qualiopi, créateurs d'agents IA sur mesure et experts IA France engagés."
        keywords="agence IA, experts IA France, studio création IA, création d'agents IA sur mesure, devis formation IA Qualiopi"
        canonicalPath="/rejoindre"
        type="WebPage"
      />

      {/* HERO SECTION DESIGN SYSTEM */}
      <header className="bg-[#1F4F6E] text-white py-20 px-6 sm:px-10 text-center relative overflow-hidden">
        <div className="max-w-[700px] mx-auto relative z-10">
          <p className="text-[0.85rem] tracking-[0.15em] uppercase text-[#02ADAB] mb-4 font-normal">
            Agence IA &amp; Studio Création IA · Recrutement
          </p>

          <h1 className="font-light text-[2.4rem] sm:text-[2.6rem] leading-[1.2] mb-5 text-white">
            Rejoignez notre agence IA &amp;<br />
            <strong className="font-medium text-white">experts IA France.</strong>
          </h1>

          <p className="text-[1.05rem] sm:text-[1.1rem] text-white/75 max-w-[600px] mx-auto leading-[1.7] font-light mb-8">
            Notre studio création IA et agence IA recrute des experts IA France, formateurs Qualiopi et concepteurs d'agents IA sur mesure pour accélérer l'accompagnement intelligence artificielle.
          </p>

          {/* Stats Ribbon */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">10+</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Alchimistes actifs</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">100%</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Liberté &amp; autonomie</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">Hybride</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Conseil &amp; création</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">1 Mission</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">L'IA pour l'humain</div>
            </div>
          </div>
        </div>
      </header>

      {/* VALUES SECTION */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Notre ADN
        </p>
        <h2 className="text-[1.8rem] sm:text-[2rem] font-light mb-3 text-[#1F4F6E]">
          L'ADN de notre <strong className="font-medium text-[#1F4F6E]">studio création IA</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-12 font-normal">
          Nos missions d'accompagnement intelligence artificielle et de stratégie SEO et GEO s'appuient sur une rigueur opérationnelle et une liberté d'expérimentation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="p-8 bg-white rounded-[12px] shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-[#02ADAB]/15 rounded-[10px] flex items-center justify-center text-[#02ADAB] mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-3">{value.title}</h3>
                <p className="text-[0.95rem] text-[#5a7a90] leading-[1.6] font-normal">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* ASSESSFIRST & CANDIDATURE */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6 space-y-10">
        {/* AssessFirst Quiz Section */}
        <div className="p-8 md:p-12 bg-white rounded-[12px] shadow-[0_2px_16px_rgba(31,79,110,0.08)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Rocket className="w-64 h-64 text-[#1F4F6E]" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-5">
            <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] font-medium">
              Première Étape
            </p>
            <h2 className="text-[1.8rem] sm:text-[2rem] font-light text-[#1F4F6E] leading-tight">
              Révélez votre profil <strong className="font-medium text-[#1F4F6E]">d'expert IA France</strong>
            </h2>
            <p className="text-[1rem] text-[#5a7a90] leading-[1.7] font-normal">
              Pour mieux vous connaître et comprendre vos aspirations profondes, nous vous invitons à passer notre quiz de personnalité AssessFirst. C'est la porte d'entrée privilégiée pour initier toute collaboration avec notre collectif.
            </p>
            <div className="pt-2">
              <a
                href="https://welcome.assessfirst.com/register/personal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#1F4F6E] text-white rounded-[8px] font-medium text-sm tracking-[0.03em] hover:bg-[#02ADAB] transition-all shadow-sm group"
              >
                <span>Passer le test AssessFirst</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Spontaneous Application */}
        <div className="rounded-[12px] bg-[#1F4F6E] text-white p-8 md:p-12 text-center relative overflow-hidden shadow-[0_2px_16px_rgba(31,79,110,0.12)]">
          <div className="max-w-2xl mx-auto space-y-5">
            <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] font-medium">
              Candidature Spontanée
            </p>
            <h2 className="text-[1.8rem] sm:text-[2rem] font-light text-white">
              Votre expertise IA <strong className="font-medium text-white">est unique ?</strong>
            </h2>
            <p className="text-white/75 text-[1rem] leading-[1.7] font-light">
              Votre profil ne correspond pas aux offres actuelles mais vous pensez pouvoir apporter votre pierre à l'édifice ? Nous sommes constamment curieux de rencontrer des esprits brillants et créatifs.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C06721] hover:bg-[#a85517] text-white rounded-[8px] font-medium text-sm tracking-[0.03em] transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Nous contacter directement</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* CTA FINAL — Exact Maquette Orange #C06721 */}
      <div className="bg-[#C06721] text-white text-center py-[70px] px-10">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-white/80 mb-2.5 font-medium">
          Découvrir nos réalisations
        </p>
        <h2 className="text-[2rem] font-light mb-3.5 text-white">
          Explorez notre studio création IA <strong className="font-medium text-white">&amp; nos œuvres</strong>
        </h2>
        <p className="text-[1.05rem] text-white/85 max-w-[540px] mx-auto mb-8 leading-[1.7] font-light">
          Consultez nos œuvres numériques générées par IA et nos guides méthodologiques pour vous imprégner de notre démarche.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/oeuvres"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#C06721] text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
          >
            <span>Voir nos œuvres</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/ressources"
            className="inline-block bg-white/10 hover:bg-white/20 text-white text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 border border-white/25"
          >
            Consulter les ressources
          </Link>
        </div>
      </div>
    </div>
  );
}
