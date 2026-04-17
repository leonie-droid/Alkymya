import Hero from '../components/Hero';
import Logo from '../components/Logo';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Une approche holistique de la création</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Chez <Logo className="h-[1.2em]" />, nous croyons que l'art est un catalyseur de changement. Chaque œuvre, chaque atelier et chaque ressource est conçu pour nourrir votre créativité tout en respectant notre environnement.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/oeuvres" className="inline-flex items-center gap-2 text-accent font-medium hover:underline">
                Découvrir nos œuvres <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/ateliers" className="inline-flex items-center gap-2 text-accent font-medium hover:underline">
                Participer à un atelier <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
