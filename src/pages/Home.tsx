import Hero from '../components/Hero';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      <section className="pb-16 pt-4 max-w-3xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl border border-deep-blue/5 bg-white/50 backdrop-blur-md p-2 md:p-3"
        >
          <img 
            src="https://res.cloudinary.com/dokzioyu4/image/upload/v1780154614/DuAFdcjz_bo9gcq.png" 
            alt="Alkymya" 
            className="w-full h-auto object-cover rounded-[2rem]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>
      
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-black text-deep-blue mb-6">Notre Impact</h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
              Des résultats concrets et une satisfaction client exceptionnelle <span className="text-copper-orange font-bold">(étude 24-25)</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {[
                { value: "99,3%", label: "des participants recommandent nos formations" },
                { value: "175", label: "apprenants accompagnés et évalués en 2024-2025" },
                { value: "+1,6 pts", label: "d'amélioration continue en 12 mois" },
                { value: "90,9%", label: "se sentent plus performants après la formation" }
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white shadow-xl shadow-deep-blue/5 border border-deep-blue/5">
                  <div className="text-4xl font-heading font-black text-copper-orange mb-3">{stat.value}</div>
                  <p className="text-sm text-deep-blue/70 font-medium leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
