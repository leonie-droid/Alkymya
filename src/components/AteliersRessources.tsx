import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, BookOpen, Users } from "lucide-react";

const ateliers = [
  {
    title: "Alchimie des Couleurs",
    description: "Apprenez à créer vos propres pigments naturels à partir de plantes et de minéraux locaux.",
    icon: Leaf,
    tag: "Naturel"
  },
  {
    title: "Atelier Sculpture Éco",
    description: "Utilisez des matériaux de récupération pour donner vie à des formes organiques uniques.",
    icon: Users,
    tag: "Collaboratif"
  },
  {
    title: "Design Régénératif",
    description: "Une introduction aux principes du design qui redonnent plus qu'ils ne prennent à la terre.",
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
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Ateliers Section */}
        <div id="ateliers" className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Nos ateliers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Des moments de partage et d'apprentissage pour transformer notre regard sur le monde et notre manière de créer.
              </p>
            </div>
            <Button variant="link" className="text-accent p-0 h-auto font-medium group">
              Voir tous les ateliers <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {ateliers.map((atelier, index) => (
              <Card key={index} className="border-none shadow-none bg-transparent group cursor-pointer">
                <CardHeader className="p-0 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                    <atelier.icon className="h-8 w-8" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-2 block">
                    {atelier.tag}
                  </span>
                  <CardTitle className="text-2xl font-serif group-hover:text-accent transition-colors">
                    {atelier.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-muted-foreground leading-relaxed text-base">
                    {atelier.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ressources Section */}
        <div id="ressources">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Nos ressources</h2>
              <p className="text-muted-foreground leading-relaxed">
                Des outils et des connaissances partagés pour accompagner votre propre transformation vers une pratique plus éthique.
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
