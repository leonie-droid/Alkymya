import { motion } from "motion/react";
import { Users, Rocket, Heart, Lightbulb, ArrowRight, Mail } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion & Éthique",
    description: "Nous croyons en une technologie au service de l'humain, guidée par une éthique forte et une passion pour la création."
  },
  {
    icon: Lightbulb,
    title: "Innovation Continue",
    description: "L'IA évolue chaque jour. Nous explorons sans cesse les nouvelles frontières pour rester à la pointe de l'industrie."
  },
  {
    icon: Users,
    title: "Intelligence Collective",
    description: "Alkymya est un espace de partage. Nous encourageons les synergies entre talents, alchimistes et visionnaires."
  }
];

export default function JoinUs() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 text-deep-blue flex flex-wrap items-center gap-x-6">
              Rejoignez 
              <img 
                src="https://res.cloudinary.com/dokzioyu4/image/upload/v1758096132/logo_secondaire_bleu_hzudxi.png" 
                alt="Alkymya" 
                className="h-16 md:h-24 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </h1>
            <p className="text-xl text-muted-foreground font-normal leading-relaxed">
              Vous êtes passionné par l'IA générative, l'art numérique ou la transformation des organisations ? 
              Alkymya est constamment à la recherche de talents audacieux pour co-créer le futur.
            </p>
          </motion.div>
        </div>

        {/* Values section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white/50 backdrop-blur-sm rounded-[2.5rem] border border-deep-blue/5 shadow-xl"
            >
              <div className="p-4 bg-copper-orange/10 rounded-2xl w-fit mb-6">
                <value.icon className="h-8 w-8 text-copper-orange" />
              </div>
              <h3 className="text-2xl font-heading font-black text-deep-blue mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* AssessFirst Quiz Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 bg-white border border-deep-blue/5 rounded-[3rem] shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
              <Rocket className="h-64 w-64 text-copper-orange" />
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-copper-orange mb-6 block">
                Première Étape
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-deep-blue mb-8 leading-tight">
                Révélez votre <span className="text-copper-orange">potentiel</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                Pour mieux vous connaître et comprendre vos aspirations, nous vous invitons à passer notre quiz de personnalité AssessFirst. C'est la porte d'entrée pour toute collaboration chez Alkymya.
              </p>
              
              <a
                href="https://welcome.assessfirst.com/register/personal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-deep-blue text-white rounded-full font-black uppercase text-sm tracking-widest hover:bg-copper-orange transition-all shadow-xl group/btn"
              >
                Passer le quiz <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Spontaneous Application */}
        <div className="relative bg-deep-blue rounded-[3rem] p-12 md:p-24 overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-copper-orange/20 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-8">
              Candidature Spontanée
            </h2>
            <p className="text-white/70 text-xl mb-12">
              Votre profil ne correspond pas aux offres actuelles mais vous pensez pouvoir apporter votre pierre à l'édifice ? 
              Nous sommes toujours curieux de rencontrer des esprits brillants.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="mailto:cyril@alkymya.co,leonie@alkymya.co"
                className="px-12 py-5 bg-copper-orange text-white rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-copper-orange transition-all shadow-2xl flex items-center gap-3"
              >
                <Mail className="h-5 w-5" /> Écrivez-nous
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
