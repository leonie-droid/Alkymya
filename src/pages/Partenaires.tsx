import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { ExternalLink, Handshake, GraduationCap, ArrowUpRight } from 'lucide-react';

const partenaires = [
  {
    name: "Hetic",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785816/logo-hetic_fnt2zy.png"
  },
  {
    name: "Ynov",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785824/ynov-campus_logo_e1ma2q.png"
  },
  {
    name: "IESEG",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785830/IESEG_logo_zzx1aa.jpg"
  },
  {
    name: "CFA Itis",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785836/CFA_ITIS_logo_vetgdg.webp"
  },
  {
    name: "Paris école de management",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1760635542/logo_paris_ecole_de_management_vs3hwl.jpg"
  },
  {
    name: "Fondation GRDF",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759925019/logo-fondation-grdf_wx9kpo.png"
  },
  {
    name: "EURIDIS",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785888/EURIDIS_logo_rjpc9a.webp"
  },
  {
    name: "ISCOM",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785896/ISCOM_logo_vrvwbp.webp"
  },
  {
    name: "SEALESTER",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1759785904/SEALESTER_logo_iyccmi.webp"
  },
  {
    name: "La fondation Flamenca",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1760702243/Logo_fondation_Flamenca_vprft5.png"
  },
  {
    name: "Azimuto",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1760702297/Logo_Azimuto_iqqqce.webp"
  },
  {
    name: "La Ressourcerie Gaillarde",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1760702361/Logo_Ressourcerie_Gaillarde_nndpbj.png"
  },
  {
    name: "SNCF",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1777819108/t%C3%A9l%C3%A9chargement_16_j060qu.jpg"
  },
  {
    name: "INATEC",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1777818451/WhatsApp_Image_2026-02-27_at_15.38.53_utvfxs.jpg"
  },
  {
    name: "Morning",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1779185919/Logo_Morning_sma32y.png"
  }
];

export default function Partenaires() {
  return (
    <div className="min-h-screen py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-green/10 text-deep-green mb-6">
            <Handshake className="h-4 w-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Alliances & Synergies</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-deep-blue mb-6">
            Notre Réseau de <span className="text-deep-green">Partenaires</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des collaborations stratégiques et des alliances académiques pour catalyser l'innovation et former les talents de demain.
          </p>
        </motion.div>

        {/* Partenaire Formation Officiel - En vedette au-dessus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] border border-copper-orange/20 bg-gradient-to-br from-white via-white/90 to-copper-orange/5 p-8 md:p-12 lg:p-14 shadow-xl shadow-copper-orange/5 backdrop-blur-md">
            {/* Background subtle decorative glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-copper-orange/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-deep-green/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Colonne Logo */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <a
                  href="https://www.objectifalternance.fr/accueil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full max-w-md p-8 md:p-10 rounded-[2rem] bg-white border border-border/60 shadow-lg shadow-black/5 hover:shadow-2xl hover:border-copper-orange/40 hover:-translate-y-1 transition-all duration-500 text-center"
                  title="Visiter le site officiel d'Objectif Alternance"
                >
                  <div className="h-32 md:h-40 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/dokzioyu4/image/upload/v1788507182/logo_objectif_code_u3otua.png"
                      alt="Logo Objectif Alternance"
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-copper-orange transition-colors">
                    <span>Partenaire Formation</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              </div>

              {/* Colonne Contenu : Texte d'accroche en face du logo + Lien du site en dessous */}
              <div className="lg:col-span-7 flex flex-col items-start justify-center space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-copper-orange/15 text-copper-orange border border-copper-orange/30">
                  <GraduationCap className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Partenaire Formation & Insertion</span>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-deep-blue tracking-tight mb-2">
                    Objectif Alternance
                  </h2>
                  <p className="text-sm md:text-base font-semibold text-copper-orange">
                    Le tremplin sur-mesure entre talents émergents et entreprises d'avenir
                  </p>
                </div>

                {/* Texte d'accroche personnalisé */}
                <p className="text-base md:text-lg text-slate-700 leading-relaxed font-normal">
                  Spécialiste de référence dans le recrutement d'alternants et l'accompagnement des profils en reconversion, Objectif Alternance facilite la rencontre entre les nouveaux talents et les entreprises en plein essor. Grâce à un coaching humain exigeant et des ateliers ancrés dans la réalité du terrain, notre alliance dote chaque candidat d'une maîtrise concrète des outils d'intelligence artificielle pour propulser leur employabilité dès le premier jour.
                </p>

                {/* Lien de redirection vers le site Objectif Alternance */}
                <div className="pt-2 w-full sm:w-auto">
                  <a
                    href="https://www.objectifalternance.fr/accueil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-copper-orange hover:bg-copper-orange/90 text-white font-bold text-sm md:text-base shadow-lg shadow-copper-orange/25 hover:shadow-xl hover:shadow-copper-orange/35 hover:-translate-y-0.5 transition-all duration-300 group"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-black text-deep-blue mb-4">
            Nos <span className="text-deep-green">Partenaires</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Les entreprises et institutions qui partagent notre vision et collaborent avec Alkymya.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-10">
          {partenaires.map((partenaire, index) => (
            <motion.div
              key={partenaire.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="group aspect-square p-6 rounded-[2.5rem] border-border/40 bg-white/40 backdrop-blur-sm hover:bg-white hover:shadow-2xl hover:shadow-deep-green/10 transition-all duration-500 flex flex-col items-center justify-center gap-4 text-center">
                <div className="relative w-full h-24 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110">
                  <img
                    src={partenaire.logo}
                    alt={partenaire.name}
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-deep-blue/40 group-hover:text-deep-green transition-colors duration-500">
                  {partenaire.name}
                </h3>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
