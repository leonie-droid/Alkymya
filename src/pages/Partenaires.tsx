import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Handshake, GraduationCap, ArrowUpRight, Building2, Sparkles, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const partenaires = [
  {
    name: "Hetic",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785816/logo-hetic_fnt2zy.png",
    category: "Grande École"
  },
  {
    name: "Ynov",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785824/ynov-campus_logo_e1ma2q.png",
    category: "Campus Tech"
  },
  {
    name: "IESEG",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785830/IESEG_logo_zzx1aa.jpg",
    category: "Grande École de Management"
  },
  {
    name: "CFA Itis",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785836/CFA_ITIS_logo_vetgdg.webp",
    category: "Formation & Alternance"
  },
  {
    name: "Paris école de management",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1760635542/logo_paris_ecole_de_management_vs3hwl.jpg",
    category: "Management & Stratégie"
  },
  {
    name: "Fondation GRDF",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759925019/logo-fondation-grdf_wx9kpo.png",
    category: "Fondation Entreprise"
  },
  {
    name: "EURIDIS",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785888/EURIDIS_logo_rjpc9a.webp",
    category: "Business School"
  },
  {
    name: "ISCOM",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785896/ISCOM_logo_vrvwbp.webp",
    category: "Communication & Marque"
  },
  {
    name: "SEALESTER",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785904/SEALESTER_logo_iyccmi.webp",
    category: "Innovation Industrielle"
  },
  {
    name: "La fondation Flamenca",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1760702243/Logo_fondation_Flamenca_vprft5.png",
    category: "Culture & Transmission"
  },
  {
    name: "Azimuto",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1760702297/Logo_Azimuto_iqqqce.webp",
    category: "Accompagnement Stratégique"
  },
  {
    name: "La Ressourcerie Gaillarde",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1760702361/Logo_Ressourcerie_Gaillarde_nndpbj.png",
    category: "Économie Circulaire"
  },
  {
    name: "SNCF",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1777819108/t%C3%A9l%C3%A9chargement_16_j060qu.jpg",
    category: "Mobilité & Développement"
  },
  {
    name: "INATEC",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1777818451/WhatsApp_Image_2026-02-27_at_15.38.53_utvfxs.jpg",
    category: "Expertise Pédagogique"
  },
  {
    name: "Morning",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1779185919/Logo_Morning_sma32y.png",
    category: "Espaces & Écosystème"
  }
];

export default function Partenaires() {
  return (
    <div className="bg-[#FAF9F7] text-[#1F4F6E] min-h-screen pt-28 pb-20 selection:bg-copper-orange selection:text-white">
      <SEO
        title="Nos Partenaires & Alliances Stratégiques | Alkymya"
        description="Découvrez les universités, grandes écoles, fondations et entreprises qui collaborent avec Alkymya pour former les talents de demain et propulser l'IA générative."
      />

      {/* Hero Section — Maquette Signature Deep Blue */}
      <section className="bg-gradient-to-b from-[#1F4F6E] via-[#163c54] to-[#122e40] text-white py-20 px-6 sm:px-12 md:py-28 text-center relative overflow-hidden mb-16">
        {/* Micro-dot grid pattern & glow blur */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#02ADAB_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#02ADAB]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-copper-orange/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#02ADAB] text-xs font-bold uppercase tracking-wider mb-6">
            <Handshake className="w-4 h-4" />
            <span>Alliances Stratégiques & Écosystème</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-light text-white mb-6 tracking-tight leading-tight">
            Nos partenaires &amp; <strong className="font-semibold text-white underline decoration-[#02ADAB] decoration-2 underline-offset-8">synergies d'avenir</strong>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-12">
            Grandes écoles, universités, fondations d'entreprise et acteurs de l'écosystème : nous unissons nos expertises pour catalyser l'innovation responsable et former les talents à l'IA générative.
          </p>

          {/* Stats / Highlights Ribbon */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-semibold text-white">15+</div>
              <div className="text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">Partenaires actifs</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-semibold text-[#02ADAB]">8+</div>
              <div className="text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">Grandes Écoles</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-semibold text-copper-orange">450+</div>
              <div className="text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">Talents formés</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-heading font-semibold text-white">100%</div>
              <div className="text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">Ancrage terrain</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 space-y-20">

        {/* Partenaire Formation Officiel - En vedette */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-copper-orange/20 bg-white p-8 md:p-12 lg:p-14 shadow-[0_8px_32px_rgba(31,79,110,0.08)]">
            {/* Background subtle decorative glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-copper-orange/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#02ADAB]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Colonne Logo */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <a
                  href="https://www.objectifalternance.fr/accueil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full max-w-md p-8 md:p-10 rounded-2xl bg-[#FAF9F7] border border-[#1F4F6E]/10 shadow-sm hover:shadow-xl hover:border-copper-orange/40 hover:-translate-y-1 transition-all duration-300 text-center"
                  title="Visiter le site officiel d'Objectif Alternance"
                >
                  <div className="h-32 md:h-40 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/dokzioyu4/image/upload/v1788507182/logo_objectif_code_u3otua.png"
                      alt="Logo Objectif Alternance"
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#1F4F6E]/10 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1F4F6E]/60 group-hover:text-copper-orange transition-colors">
                    <span>Partenaire Formation Officiel</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              </div>

              {/* Colonne Contenu */}
              <div className="lg:col-span-7 flex flex-col items-start justify-center space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper-orange/15 text-copper-orange border border-copper-orange/30">
                  <GraduationCap className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Partenaire Formation &amp; Insertion</span>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-[#1F4F6E] tracking-tight mb-2">
                    Objectif Alternance
                  </h2>
                  <p className="text-sm md:text-base font-semibold text-copper-orange">
                    Le tremplin sur-mesure entre talents émergents et entreprises d'avenir
                  </p>
                </div>

                <p className="text-base md:text-lg text-slate-700 leading-relaxed font-normal">
                  Spécialiste de référence dans le recrutement d'alternants et l'accompagnement des profils en reconversion, Objectif Alternance facilite la rencontre entre les nouveaux talents et les entreprises en plein essor. Grâce à un coaching humain exigeant et des ateliers ancrés dans la réalité du terrain, notre alliance dote chaque candidat d'une maîtrise concrète des outils d'intelligence artificielle pour propulser leur employabilité dès le premier jour.
                </p>

                <div className="pt-2 w-full sm:w-auto">
                  <a
                    href="https://www.objectifalternance.fr/accueil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-copper-orange hover:bg-[#a85517] text-white font-bold text-sm md:text-base shadow-lg shadow-copper-orange/25 hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <span>Découvrir Objectif Alternance</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Nos Partenaires */}
        <div>
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#02ADAB] mb-2 block">
              Réseau Académique &amp; Économique
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1F4F6E] mb-4">
              Ils nous font confiance &amp; co-construisent avec nous
            </h2>
            <p className="text-base text-slate-600 max-w-xl mx-auto">
              Grandes écoles, universités, entreprises et institutions qui partagent la vision d'une IA créative et responsable.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {partenaires.map((partenaire, index) => (
              <motion.div
                key={partenaire.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <div className="group h-full p-6 rounded-2xl border border-[#1F4F6E]/10 bg-white hover:border-[#02ADAB]/40 hover:shadow-[0_12px_32px_rgba(31,79,110,0.12)] transition-all duration-300 flex flex-col items-center justify-between text-center min-h-[190px]">
                  <div className="w-full flex-1 flex items-center justify-center py-4">
                    <img
                      src={partenaire.logo}
                      alt={partenaire.name}
                      className="max-w-[130px] max-h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="w-full pt-3 border-t border-[#1F4F6E]/5">
                    <h3 className="text-xs font-bold text-[#1F4F6E] group-hover:text-copper-orange transition-colors truncate">
                      {partenaire.name}
                    </h3>
                    <p className="text-[10px] text-slate-500 truncate mt-0.5">
                      {partenaire.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trois piliers de collaboration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-8 rounded-2xl bg-white border border-[#1F4F6E]/10 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#02ADAB]/10 text-[#02ADAB] flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-heading font-bold text-[#1F4F6E] mb-3">Enseignement Supérieur</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Modules certifiants, masterclasses et jurys d'innovation dans les écoles de commerce, de design et d'ingénieurs.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#1F4F6E]/10 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-copper-orange/10 text-copper-orange flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-heading font-bold text-[#1F4F6E] mb-3">Entreprises &amp; Fondations</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Acculturation des équipes métiers, prototypage de cas d'usage IA et programmes de mécénat de compétences.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#1F4F6E]/10 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#1F4F6E]/10 text-[#1F4F6E] flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-heading font-bold text-[#1F4F6E] mb-3">Recherche &amp; Territoires</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Études empiriques sur les usages (Génération IA 2024-2026) et déploiement de solutions d'IA locale ancrées dans les territoires.
            </p>
          </div>
        </div>

      </div>

      {/* Signature Copper CTA Banner */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-8 mt-20">
        <div className="bg-[#C06721] text-white rounded-3xl p-8 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
              Nouvelles Alliances
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
              Bâtissons ensemble votre prochain programme IA
            </h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              Vous êtes une école, une université, une entreprise ou une institution ? Échangeons sur les synergies possibles pour former vos apprenants ou accélérer vos équipes.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#C06721] font-bold text-sm uppercase tracking-wider rounded-full hover:bg-slate-100 transition-all shadow-md inline-flex items-center justify-center gap-2"
              >
                <span>Devenir partenaire</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ateliers"
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-white text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-white/10 transition-all"
              >
                Découvrir nos ateliers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
