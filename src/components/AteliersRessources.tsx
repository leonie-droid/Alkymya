import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, BookOpen, Users, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const ateliers = [
  {
    title: "Alchimie des Couleurs",
    description: "Apprenez à créer vos propres pigments naturels à partir de plantes et de minéraux locaux.",
    fullDescription: "Cet atelier vous immerge dans les techniques ancestrales d'extraction tinctoriale végétale et minérale. Vous apprenez à broyer, décanter et lier des pigments issus de ressources locales durables, pour obtenir une palette vibrante sans aucun additif chimique toxique.",
    target: "Artistes, designers, enseignants et curieux de la matière vivante.",
    keyTakeaway: "Création de votre propre nuancier d'encres et peintures écologiques prêtes à l'emploi.",
    icon: Leaf,
    tag: "Naturel"
  },
  {
    title: "Atelier Sculpture Éco",
    description: "Utilisez des matériaux de récupération pour donner vie à des formes organiques uniques.",
    fullDescription: "Repenser le déchet comme un gisement de formes et de textures. Cet atelier collaboratif vous initie au façonnage, à l'assemblage et à l'équilibrage de matériaux recyclés industriels ou naturels pour concevoir des volumes expressifs et poétiques.",
    target: "Collectifs, passionnés d'arts plastiques et créateurs engagés dans le réemploi.",
    keyTakeaway: "Une œuvre sculpturale co-créée et la maîtrise des techniques d'assemblage réversible.",
    icon: Users,
    tag: "Collaboratif"
  },
  {
    title: "Design Régénératif",
    description: "Une introduction aux principes du design qui redonnent plus qu'ils ne prennent à la terre.",
    fullDescription: "Dépasser la simple neutralité carbone pour concevoir des artefacts, des services et des espaces qui restaurent activement la biodiversité et les liens sociaux. Une méthode rigoureuse croisant biomimétisme, analyse du cycle de vie et prospective créative.",
    target: "Designers industriels, architectes, urbanistes et directeurs de l'innovation.",
    keyTakeaway: "Une grille méthodologique d'évaluation régénérative applicable à vos futurs projets.",
    icon: BookOpen,
    tag: "Théorie"
  }
];

const ressources = [
  {
    title: "Guide de l'Artiste Responsable",
    description: "Un manuel complet pour réduire l'empreinte carbone de votre pratique artistique.",
    date: "Mars 2024"
  },
  {
    title: "Répertoire des Pigments",
    description: "Une base de données open-source des sources de couleurs naturelles en Europe.",
    date: "Février 2024"
  }
];

export default function AteliersRessources() {
  const [activeAtelier, setActiveAtelier] = useState<number | null>(null);

  const toggleAtelier = (index: number) => {
    setActiveAtelier(prev => prev === index ? null : index);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Ateliers Section */}
        <div id="ateliers" className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Nos ateliers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Des moments de partage et d'apprentissage pour transformer notre regard sur le monde et notre manière de créer.
              </p>
              <p className="text-xs font-bold uppercase tracking-wider text-accent mt-3">
                💡 Cliquez sur un atelier pour afficher sa présentation détaillée
              </p>
            </div>
            <Link to="/ateliers">
              <Button variant="link" className="text-accent p-0 h-auto font-medium group">
                Voir tous les ateliers <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ateliers.map((atelier, index) => {
              const isSelected = activeAtelier === index;
              return (
                <Card 
                  key={index} 
                  onClick={() => toggleAtelier(index)}
                  className={`border border-border/60 bg-white/60 backdrop-blur-sm p-6 rounded-3xl transition-all duration-300 cursor-pointer ${
                    isSelected ? 'ring-2 ring-accent shadow-xl bg-white' : 'hover:shadow-lg hover:border-accent/40'
                  }`}
                >
                  <CardHeader className="p-0 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-4 text-accent transition-colors duration-300">
                      <atelier.icon className="h-7 w-7" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-1 block">
                      {atelier.tag}
                    </span>
                    <CardTitle className="text-2xl font-serif text-deep-blue">
                      {atelier.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-muted-foreground leading-relaxed text-sm mb-4">
                      {atelier.description}
                    </CardDescription>

                    <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs font-bold text-accent">
                      <span>{isSelected ? "Masquer les détails" : "En savoir plus"}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`} />
                    </div>

                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-4 pt-4 border-t border-accent/20 space-y-3 text-xs"
                        >
                          <p className="text-deep-blue/80 leading-relaxed">
                            {atelier.fullDescription}
                          </p>
                          <div className="bg-secondary/50 p-3 rounded-xl">
                            <span className="font-bold text-deep-blue block mb-1">Public :</span>
                            <span className="text-muted-foreground">{atelier.target}</span>
                          </div>
                          <div className="flex items-start gap-2 text-accent font-medium">
                            <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" />
                            <span>{atelier.keyTakeaway}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Ressources Section */}
        <div id="ressources">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Nos ressources</h2>
              <p className="text-muted-foreground leading-relaxed">
                Des outils et des connaissances partagés pour partager votre propre transformation vers une pratique plus éthique.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ressources.map((ressource, index) => (
              <div key={index} className="p-10 rounded-3xl bg-muted/50 border border-border/50 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs text-muted-foreground font-medium">{ressource.date}</span>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-accent transition-colors">
                  {ressource.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {ressource.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
