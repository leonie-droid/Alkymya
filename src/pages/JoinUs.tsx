import React from 'react';
import { motion } from 'motion/react';
import { Users, Rocket, Heart, Lightbulb, ArrowRight, Mail, Sparkles, CheckCircle2, Compass, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const values = [
  {
    icon: Heart,
    title: "Passion & Éthique",
    description: "Nous croyons en une technologie au service de l'humain, guidée par une éthique rigoureuse et une passion constante pour la création d'œuvres durables."
  },
  {
    icon: Lightbulb,
    title: "Innovation Continue",
    description: "L'IA évolue chaque semaine. Nous explorons sans cesse de nouveaux modèles et méthodologies pour rester à la pointe des pratiques opérationnelles."
  },
  {
    icon: Users,
    title: "Intelligence Collective",
    description: "Alkymya est un espace d'hybridation des savoirs. Nous encourageons les synergies entre consultants, artistes numériques, développeurs et étudiants."
  }
];

export default function JoinUs() {
  return (
    <div className="bg-[#FAF9F7] text-[#1F4F6E] min-h-screen pt-28 pb-20 selection:bg-copper-orange selection:text-white">
      <SEO
        title="Rejoindre le Collectif Alkymya | Alchimistes IA"
        description="Vous êtes passionné par l'IA générative, l'art numérique ou la transformation des organisations ? Rejoignez le collectif Alkymya et co-créez le futur."
      />

      {/* Hero Section — Maquette Signature Deep Blue */}
      <section className="bg-gradient-to-b from-[#1F4F6E] via-[#163c54] to-[#122e40] text-white py-20 px-6 sm:px-12 md:py-28 text-center relative overflow-hidden mb-16">
        {/* Micro-dot grid pattern & glow blur */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#02ADAB_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#02ADAB]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-copper-orange/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#02ADAB] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Recrutement & Talents Hybrides</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-light text-white mb-6 tracking-tight leading-tight">
            Rejoignez le collectif <strong className="font-semibold text-white underline decoration-[#02ADAB] decoration-2 underline-offset-8">Alkymya</strong>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-12">
            Vous êtes passionné par l'IA générative, l'art numérique ou la transformation des organisations ? Alkymya est constamment à la recherche de talents audacieux pour co-créer le futur.
          </p>

          {/* Stats Ribbon */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-semibold text-white">10+</div>
              <div className="text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">Alchimistes actifs</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-semibold text-[#02ADAB]">100%</div>
              <div className="text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">Liberté & autonomie</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-semibold text-copper-orange">Hybride</div>
              <div className="text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">Conseil & création</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-semibold text-white">1 Mission</div>
              <div className="text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">L'IA au service de l'humain</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 space-y-24">

        {/* Values Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#02ADAB] mb-2 block">
              Notre ADN
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1F4F6E] mb-4">
              Ce qui nous anime au quotidien
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              Nos projets s'appuient sur un équilibre subtil entre rigueur opérationnelle et liberté d'expérimentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-8 bg-white rounded-2xl border border-[#1F4F6E]/10 shadow-[0_4px_24px_rgba(31,79,110,0.06)] hover:shadow-[0_12px_36px_rgba(31,79,110,0.12)] hover:border-[#02ADAB]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-copper-orange/10 rounded-xl flex items-center justify-center text-copper-orange mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#1F4F6E] mb-3">{value.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* AssessFirst Quiz Section */}
        <div className="p-8 md:p-14 bg-white border border-[#1F4F6E]/10 rounded-3xl shadow-[0_8px_32px_rgba(31,79,110,0.08)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Rocket className="w-72 h-72 text-copper-orange" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-copper-orange/15 text-copper-orange text-xs font-bold uppercase tracking-wider">
              Première Étape
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1F4F6E] leading-tight">
              Révélez votre <span className="text-copper-orange">potentiel</span> d'alchimiste
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Pour mieux vous connaître et comprendre vos aspirations profondes, nous vous invitons à passer notre quiz de personnalité AssessFirst. C'est la porte d'entrée privilégiée pour initier toute collaboration avec notre collectif.
            </p>
            <div className="pt-2">
              <a
                href="https://welcome.assessfirst.com/register/personal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1F4F6E] text-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-copper-orange transition-all shadow-md group"
              >
                <span>Passer le test AssessFirst</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Spontaneous Application */}
        <div className="rounded-3xl bg-gradient-to-b from-[#1F4F6E] via-[#163c54] to-[#122e40] text-white p-8 md:p-14 text-center relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-[#02ADAB] text-xs font-bold uppercase tracking-wider">
              Candidature Spontanée
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
              Votre profil est unique ?
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Votre profil ne correspond pas aux offres actuelles mais vous pensez pouvoir apporter votre pierre à l'édifice ? Nous sommes constamment curieux de rencontrer des esprits brillants et créatifs.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-copper-orange hover:bg-[#a85517] text-white rounded-full font-bold uppercase text-xs tracking-widest transition-all shadow-lg"
              >
                <Mail className="w-4 h-4" />
                <span>Nous contacter directement</span>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Signature Copper CTA Banner */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 mt-24">
        <div className="bg-[#C06721] text-white rounded-3xl p-8 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
              Découvrir nos réalisations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Explorez nos créations et ressources
            </h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              Consultez nos œuvres numériques générées par IA et nos guides méthodologiques pour vous imprégner de notre démarche.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/oeuvres"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#C06721] font-bold text-sm uppercase tracking-wider rounded-full hover:bg-slate-100 transition-all shadow-md inline-flex items-center justify-center gap-2"
              >
                <span>Voir nos œuvres</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ressources"
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-white text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white/10 transition-all"
              >
                Consulter les ressources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
