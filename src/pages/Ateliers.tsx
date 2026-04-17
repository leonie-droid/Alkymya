import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Leaf, Users, BookOpen, Calendar } from "lucide-react";
import { motion } from 'motion/react';

const ateliers = [
  {
    title: "Alchimie des Couleurs",
    description: "Apprenez à créer vos propres pigments naturels à partir de plantes et de minéraux locaux.",
    icon: Leaf,
    tag: "Naturel",
    price: "75€",
    duration: "3h"
  },
  {
    title: "Atelier Sculpture Éco",
    description: "Utilisez des matériaux de récupération pour donner vie à des formes organiques uniques.",
    icon: Users,
    tag: "Collaboratif",
    price: "90€",
    duration: "4h"
  },
  {
    title: "Design Régénératif",
    description: "Une introduction aux principes du design qui redonnent plus qu'ils ne prennent à la terre.",
    icon: BookOpen,
    tag: "Théorie",
    price: "60€",
    duration: "2h"
  },
  {
    title: "Céramique Durable",
    description: "Façonnage manuel et cuisson basse température pour une empreinte réduite.",
    icon: Leaf,
    tag: "Artisanat",
    price: "120€",
    duration: "5h"
  }
];

export default function Ateliers() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-8">Nos Ateliers</h1>
          <p className="text-xl text-muted-foreground font-normal leading-relaxed">
            Découvrez l'ambiance de nos ateliers partagés et le processus de transformation créative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ateliers.map((atelier, index) => (
            <Card key={index} className="border border-border/50 bg-white/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-deep-blue flex items-center justify-center p-12 group-hover:bg-deep-green text-white transition-colors duration-500">
                  <atelier.icon className="h-16 w-16" />
                </div>
                <div className="md:w-2/3 p-8">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-copper-orange font-bold">
                        {atelier.tag}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {atelier.duration}
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-heading font-bold mb-2 text-deep-blue group-hover:text-deep-green transition-colors">{atelier.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-muted-foreground mb-6 font-normal">
                      {atelier.description}
                    </CardDescription>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-heading font-bold text-bordeaux">{atelier.price}</span>
                      <Button className="rounded-full bg-deep-blue hover:bg-deep-green font-bold">Réserver</Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Video Recap Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-deep-blue mb-4">L'Experience en Mouvement</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Découvrez l'ambiance de nos ateliers partagés et le processus de transformation créative.
            </p>
          </div>
          
          <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-[3rem] overflow-hidden shadow-2xl bg-black border border-border/50 group">
            <video 
              src="https://res.cloudinary.com/dokzioyu4/video/upload/v1773762338/DraftResource_1763735958.541805_atgbsl.mov"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              controls
              muted
              loop
              playsInline
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/20 to-transparent pointer-events-none" />
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-8 py-4 px-10 rounded-full bg-white/50 backdrop-blur-sm border border-border/50 shadow-sm">
              <div className="text-center">
                <p className="text-sm font-bold text-deep-blue uppercase tracking-widest">Ateliers</p>
                <p className="text-xs text-muted-foreground">Epinay sur Seine</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <p className="text-sm font-bold text-deep-blue uppercase tracking-widest">Partage</p>
                <p className="text-xs text-muted-foreground">Arts & Transformation</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
