import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Handshake, GraduationCap, ArrowUpRight, Building2, Sparkles, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const partenaires = [
  {
    name: "Hetic",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785816/logo-hetic_fnt2zy.png",
    category: "Grande École",
    outcome: "Ateliers intensifs d'IA générative et jurys de projets numériques pour former les futurs chefs de produit web."
  },
  {
    name: "Ynov",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785824/ynov-campus_logo_e1ma2q.png",
    category: "Campus Tech",
    outcome: "Modules de prompt engineering avancé, prototypage d'agents IA et hackathons appliqués aux métiers du digital."
  },
  {
    name: "IESEG",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785830/IESEG_logo_zzx1aa.jpg",
    category: "Grande École de Management",
    outcome: "Séminaires de stratégie business et intégration opérationnelle de l'IA pour les étudiants en management."
  },
  {
    name: "CFA Itis",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785836/CFA_ITIS_logo_vetgdg.webp",
    category: "Formation & Alternance",
    outcome: "Parcours pratiques dédiés aux apprentis pour déployer l'IA directement au service de leurs entreprises d'accueil."
  },
  {
    name: "Paris école de management",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1760635542/logo_paris_ecole_de_management_vs3hwl.jpg",
    category: "Management & Stratégie",
    outcome: "Cas pratiques d'entreprise et acculturation des apprenants aux nouveaux modèles économiques dopés à l'IA."
  },
  {
    name: "Fondation GRDF",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759925019/logo-fondation-grdf_wx9kpo.png",
    category: "Fondation Entreprise",
    outcome: "Accompagnement de projets à impact territorial et transmission des usages responsables de l'IA."
  },
  {
    name: "EURIDIS",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785888/EURIDIS_logo_rjpc9a.webp",
    category: "Business School",
    outcome: "Entraînement des forces commerciales B2B à la prospection augmentée et à l'analyse client par l'IA."
  },
  {
    name: "ISCOM",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785896/ISCOM_logo_vrvwbp.webp",
    category: "Communication & Marque",
    outcome: "Ateliers de direction artistique, création éditoriale et stratégie de marque assistée par IA générative."
  },
  {
    name: "SEALESTER",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785904/SEALESTER_logo_iyccmi.webp",
    category: "Innovation Industrielle",
    outcome: "Exploration d'outils de veille technologique et d'automatisation au service de l'innovation produit."
  },
  {
    name: "La fondation Flamenca",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1760702243/Logo_fondation_Flamenca_vprft5.png",
    category: "Culture & Transmission",
    outcome: "Valorisation de patrimoines artistiques et conception de récits culturels augmentés par l'IA."
  },
  {
    name: "Azimuto",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1760702297/Logo_Azimuto_iqqqce.webp",
    category: "Accompagnement Stratégique",
    outcome: "Outils de diagnostic et méthodes structurantes pour sécuriser la transformation numérique des dirigeants."
  },
  {
    name: "La Ressourcerie Gaillarde",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1760702361/Logo_Ressourcerie_Gaillarde_nndpbj.png",
    category: "Économie Circulaire",
    outcome: "Optimisation des flux d'information et communication locale grâce à des outils IA sobres et accessibles."
  },
  {
    name: "SNCF",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1777819108/t%C3%A9l%C3%A9chargement_16_j060qu.jpg",
    category: "Mobilité & Développement",
    outcome: "Co-construction de programmes entrepreneuriaux et appui au développement économique des territoires."
  },
  {
    name: "INATEC",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1777818451/WhatsApp_Image_2026-02-27_at_15.38.53_utvfxs.jpg",
    category: "Expertise Pédagogique",
    outcome: "Portage Qualiopi et ingénierie pédagogique permettant un financement OPCO jusqu'à 100 % des formations."
  },
  {
    name: "Morning",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1779185919/Logo_Morning_sma32y.png",
    category: "Espaces & Écosystème",
    outcome: "Accueil de nos ateliers pratiques en présentiel et rencontres d'entrepreneurs au cœur de l'Île-de-France."
  }
];

export default function Partenaires() {
  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Partenaires Formation IA & Grandes Écoles | Alkymya"
        description="Partenariats formation IA Alkymya : recrutement d'alternants avec Objectif Alternance, interventions en école (HETIC, Ynov, IÉSEG) et projets étudiants."
        keywords="agence IA, accompagnement intelligence artificielle, formation IA entreprise certifiée Qualiopi, experts IA France, studio création IA"
        canonicalPath="/partenaires"
        ogImage="https://res.cloudinary.com/dokzioyu4/image/upload/v1788507182/logo_objectif_code_u3otua.png"
        type="WebPage"
      />

      {/* HERO SECTION DESIGN SYSTEM */}
      <header className="bg-[#1F4F6E] text-white py-20 px-6 sm:px-10 text-center relative overflow-hidden">
        <div className="max-w-[700px] mx-auto relative z-10">
          <p className="text-[0.85rem] tracking-[0.15em] uppercase text-[#02ADAB] mb-4 font-normal">
            Agence IA &amp; Partenaires Formation Qualiopi
          </p>

          <h1 className="font-light text-[2.4rem] sm:text-[2.6rem] leading-[1.2] mb-5 text-white">
            Partenaires formation IA &amp;<br />
            <strong className="font-medium text-white">alliances d'agence IA.</strong>
          </h1>

          <p className="text-[1.05rem] sm:text-[1.1rem] text-white/75 max-w-[600px] mx-auto leading-[1.7] font-light mb-8">
            Notre agence IA et studio création IA collabore avec grandes écoles, fondations et acteurs de l'alternance pour déployer l'accompagnement intelligence artificielle et la formation IA entreprise certifiée Qualiopi.
          </p>

          {/* Stats Ribbon */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">15+</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Partenaires actifs</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">8+</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Grandes Écoles</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">450+</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Talents formés</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">100%</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Ancrage terrain</div>
            </div>
          </div>
        </div>
      </header>

      {/* PARTENAIRE FORMATION OFFICIEL */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Partenaire Formation &amp; Insertion
        </p>
        <h2 className="text-[1.8rem] sm:text-[2rem] font-light mb-3 text-[#1F4F6E]">
          Partenariat formation IA <strong className="font-medium text-[#1F4F6E]">et insertion en vedette</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-10 font-normal">
          Un accompagnement intelligence artificielle conjoint entre insertion professionnelle, alternance et atelier IA pratique certifié Qualiopi.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[12px] p-8 md:p-12 shadow-[0_2px_16px_rgba(31,79,110,0.08)] border border-[rgba(31,79,110,0.08)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Colonne Logo */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <a
                href="https://www.objectifalternance.fr/accueil"
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full max-w-md p-8 rounded-[12px] bg-[#f4f6f9] border border-[rgba(31,79,110,0.1)] hover:border-[#02ADAB] transition-all duration-200 text-center"
                title="Visiter le site officiel d'Objectif Alternance"
              >
                <div className="h-32 md:h-40 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dokzioyu4/image/upload/f_auto,q_auto,w_600,c_limit/v1788507182/logo_objectif_code_u3otua.png"
                    width={320}
                    height={160}
                    loading="lazy"
                    alt="Logo Objectif Alternance — partenaire formation IA entreprise certifiée Qualiopi et insertion avec Alkymya"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-4 pt-4 border-t border-[rgba(31,79,110,0.1)] flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-[#4a6a80] group-hover:text-[#02ADAB] transition-colors">
                  <span>Partenaire Formation Officiel</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>

            {/* Colonne Contenu */}
            <div className="lg:col-span-7 flex flex-col items-start justify-center space-y-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#02ADAB]/10 text-[#037971] text-xs font-medium uppercase tracking-wider">
                <GraduationCap className="h-4 w-4 text-[#02ADAB]" />
                <span>Partenaire Formation &amp; Insertion</span>
              </span>

              <div>
                <h3 className="text-[1.8rem] font-medium text-[#1F4F6E] tracking-tight mb-1.5">
                  Objectif Alternance
                </h3>
                <p className="text-[1rem] font-medium text-[#C06721]">
                  Le tremplin sur-mesure entre talents émergents et entreprises d'avenir
                </p>
              </div>

              <p className="text-[0.98rem] text-[#4a6a80] leading-[1.7] font-normal">
                Spécialiste de référence dans le recrutement d'alternants et l'accompagnement des profils en reconversion, Objectif Alternance facilite la rencontre entre les nouveaux talents et les entreprises en plein essor. Grâce à un coaching humain exigeant et des ateliers ancrés dans la réalité du terrain, notre alliance dote chaque candidat d'une maîtrise concrète des outils d'intelligence artificielle pour propulser leur employabilité dès le premier jour.
              </p>

              <div className="pt-2">
                <a
                  href="https://www.objectifalternance.fr/accueil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[8px] bg-[#C06721] hover:bg-[#a85517] text-white font-medium text-sm tracking-[0.03em] shadow-sm transition-all duration-150"
                >
                  <span>Découvrir Objectif Alternance</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* SECTION NOS PARTENAIRES */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Réseau Académique &amp; Économique
        </p>
        <h2 className="text-[1.8rem] sm:text-[2rem] font-light mb-3 text-[#1F4F6E]">
          Écoles &amp; entreprises partenaires <strong className="font-medium text-[#1F4F6E]">de notre agence IA</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-12 font-normal">
          Grandes écoles, universités, entreprises et institutions qui déploient nos ateliers IA pratiques et notre accompagnement intelligence artificielle.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partenaires.map((partenaire, index) => (
            <motion.div
              key={partenaire.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
            >
              <div className="group h-full p-5 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-between text-center min-h-[240px]">
                <div className="w-full flex-1 flex items-center justify-center py-3">
                  <img
                    src={partenaire.logo.replace('/image/upload/', '/image/upload/f_auto,q_auto,w_600,c_limit/')}
                    width={130}
                    height={64}
                    loading="lazy"
                    alt={`Logo ${partenaire.name} — ${partenaire.category}, partenaire agence IA Alkymya`}
                    className="max-w-[130px] max-h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="w-full pt-3 border-t border-[rgba(31,79,110,0.08)] space-y-1.5">
                  <h3 className="text-xs font-medium text-[#1F4F6E] group-hover:text-[#02ADAB] transition-colors truncate">
                    {partenaire.name}
                  </h3>
                  <p className="text-[11px] text-[#C06721] font-medium truncate">
                    {partenaire.category}
                  </p>
                  <p className="text-[11px] text-[#5a7a90] leading-[1.45] font-normal">
                    {partenaire.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* TROIS PILIERS DE COLLABORATION */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Piliers de collaboration
        </p>
        <h2 className="text-[1.8rem] sm:text-[2rem] font-light mb-10 text-[#1F4F6E]">
          Comment nos experts IA France <strong className="font-medium text-[#1F4F6E]">interviennent ensemble</strong>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
            <div className="w-12 h-12 rounded-[10px] bg-[#02ADAB]/15 text-[#02ADAB] flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-3">Enseignement Supérieur &amp; Atelier IA</h3>
            <p className="text-[0.95rem] text-[#5a7a90] leading-[1.6] font-normal">
              Modules certifiants, masterclasses et jurys d'innovation dans les écoles de commerce, de design et d'ingénieurs.
            </p>
          </div>

          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
            <div className="w-12 h-12 rounded-[10px] bg-[#02ADAB]/15 text-[#02ADAB] flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-3">Entreprises &amp; Formation IA Qualiopi</h3>
            <p className="text-[0.95rem] text-[#5a7a90] leading-[1.6] font-normal">
              Acculturation des équipes métiers, création d'agents IA sur mesure, prototypage et formation IA finançable OPCO.
            </p>
          </div>

          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
            <div className="w-12 h-12 rounded-[10px] bg-[#02ADAB]/15 text-[#02ADAB] flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-3">Création Site Éditorial &amp; Territoires</h3>
            <p className="text-[0.95rem] text-[#5a7a90] leading-[1.6] font-normal">
              Études empiriques sur les usages (Génération IA 2024-2026) et déploiement de médias optimisés en stratégie SEO et GEO.
            </p>
          </div>
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* CTA FINAL — Exact Maquette Orange #C06721 */}
      <div className="bg-[#C06721] text-white text-center py-[70px] px-10">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-white/80 mb-2.5 font-medium">
          Nouvelles Alliances
        </p>
        <h2 className="text-[2rem] font-light mb-3.5 text-white">
          Bâtissons votre <strong className="font-medium text-white">programme formation IA Qualiopi</strong>
        </h2>
        <p className="text-[1.05rem] text-white/85 max-w-[560px] mx-auto mb-8 leading-[1.7] font-light">
          Vous êtes une école, une université, une entreprise ou une institution ? Échangeons sur les synergies possibles pour former vos apprenants ou accélérer vos équipes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#C06721] text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
          >
            <span>Devenir partenaire</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/ateliers"
            className="inline-block bg-white/10 hover:bg-white/20 text-white text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 border border-white/25"
          >
            Découvrir nos ateliers
          </Link>
        </div>
      </div>
    </div>
  );
}
