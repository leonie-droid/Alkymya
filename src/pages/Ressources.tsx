import { motion } from 'motion/react';

const analyseurs = [
  {
    title: "Analyseur de photo",
    description: "Analyseur de photo vous permet d'explorer, de retoucher et de métamorphoser vos images en un instant.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1773761166/46b26247d1084cb39b354fe4c9842b29_aszzay_f48sjs.mov"
  },
  {
    title: "Analyseur de CV",
    description: "Analyseur de CV, avec cet outil analyser et modifier votre CV.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1773762096/c599dc6cd0ef4e6196a739c87b2cb773_gxn0lj.mov"
  },
  {
    title: "Analyseur de mémoire",
    description: "Analyseur de mémoire, parfait pour analyser tout le contenu d'un mémoire.",
    url: "https://res.cloudinary.com/dokzioyu4/video/upload/v1776374160/bac00848173641fd882d43dc3b970835_jtyspz.mov"
  }
];

export default function Ressources() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20 text-center md:text-left mx-auto md:mx-0">
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-8">Nos Ressources</h1>
          <p className="text-xl text-muted-foreground font-normal leading-relaxed">
            Nos outils d'analyse intelligente pour optimiser vos contenus et explorer vos médias sous un nouvel angle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {analyseurs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-black shadow-xl mb-6 relative border border-border/50">
                <video 
                  src={item.url} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                  controls
                  muted
                  loop
                  playsInline
                />
              </div>
              <div className="px-2">
                <h3 className="text-xl font-heading font-bold text-deep-blue mb-3 group-hover:text-turquoise transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-normal italic">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
