import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { ExternalLink, Handshake } from 'lucide-react';

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
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1762337100/Logo_SNCF_becplr.png"
  },
  {
    name: "INATEC",
    logo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1773845453/LOGO_INATEC_blanc-6942adc4b64b0_cmflee.png"
  }
];

export default function Partenaires() {
  return (
    <div className="min-h-screen py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-green/10 text-deep-green mb-6">
            <Handshake className="h-4 w-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Nos Alliances</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-deep-blue mb-6">
            Nos <span className="text-deep-green">Partenaires</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ils nous font confiance et nous accompagnent dans notre mission de transformation.
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
