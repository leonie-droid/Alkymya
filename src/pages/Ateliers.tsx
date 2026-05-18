import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, ShieldCheck, Euro, GraduationCap, ArrowRight, Quote, X } from "lucide-react";
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from "react";

const ateliers = [
  {
    title: "1. Formation Core : Le Programme Complet IA",
    subtitle: "C'est notre offre \"Meilleure Valeur\" pour une autonomie totale.",
    price: "2 500 € HT",
    format: "14 heures de formation intensive réparties sur 4 demi-journées.",
    content: "Maîtrise de la stack complète (Images, Contenus, Vidéo, Web).",
    included: "Supports pédagogiques, accès Drive illimité, suivi post-formation pendant 1 mois, et délivrance de l'attestation Qualiopi.",
    icon: GraduationCap,
    tag: "Best Value"
  },
  {
    title: "2. Option A : Agents IA – Automatisation Avancée",
    subtitle: "Idéal pour ceux qui souhaitent déléguer les tâches répétitives à des agents intelligents.",
    price: "500 € HT",
    format: "1 demi-journée (3h30) dédiée.",
    deliverables: "Création de 3 agents personnalisés, mise en place de workflows automatisés (Zapier/Make) et intégration directe à vos outils (Slack/Notion).",
    icon: Zap,
    tag: "Expansion"
  },
  {
    title: "3. Option B : App No-Code – Outil Métier Sur-Mesure",
    subtitle: "Développez vos propres applications internes sans écrire une seule ligne de code.",
    price: "500 € HT",
    format: "1 demi-journée (3h30) dédiée.",
    deliverables: "Une application métier déployée et fonctionnelle, intégration de l'IA (API Gemini/GPT) et formation de votre équipe à la maintenance de l'outil.",
    icon: Zap,
    tag: "Innovation"
  }
];

const testimonials = [
  {
    quote: "C'était vraiment extraordinaire. Un grand merci pour cet enthousiasme à transmettre et les contenus si modernes. J'ai hâte de suivre une autre séance :)",
    author: "Shahrzad T",
    role: "Responsable Pédagogique"
  },
  {
    quote: "Toute la classe a beaucoup apprécié cette journée de travail : nous avons appris énormément de choses en peu de temps, et vos explications nous ont été très enrichissantes. (...) En espérant avoir le plaisir de vous revoir l'année prochaine ou au second semestre.",
    author: "SM",
    role: "Déléguée B2 PEM"
  },
  {
    quote: "Très objectivement ce cours était vraiment super, il était très intéressant, absolument pas ennuyant comme tous les cours de management et de communication que j'ai pu vivre auparavant. C'était vraiment un dialogue, qui nous permettait de rester très intéressés. Pour ma part c'est un sans faute !",
    author: "Participant PEM",
    role: "Étudiant en Management"
  },
  {
    quote: "Une réelle disponibilité et des échanges à chaque fois riches d'enseignements et qui me permettaient d'avancer. Très gentil et humain, vrais conseils entrepreneuriaux concrets, super vision de l'IA, réactivité incroyable !",
    author: "Mathilde T.",
    role: "Étudiante IÉSEG - The Indie Library"
  },
  {
    quote: "J’ai découvert comment l’IA peut améliorer mon travail et m’aider à être plus performante avec un temps réduit. J'ai réalisé que le monde des IA est immense, et plus accessible que ce que je pensais.",
    author: "Étudiante EURIDIS",
    role: ""
  }
];

export default function Ateliers() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Lock scroll when video is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVideoOpen]);

  return (
    <div className="pt-32 pb-24">
      {/* Video Lightbox */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl h-auto max-h-[90vh] aspect-video md:aspect-[9/16] md:w-[450px] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-14 right-0 text-white bg-copper-orange rounded-full p-3 shadow-xl hover:scale-110 transition-transform z-[110]"
                onClick={() => setIsVideoOpen(false)}
                aria-label="Fermer la vidéo"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10">
                <video
                  src="https://res.cloudinary.com/dokzioyu4/video/upload/v1773762338/DraftResource_1763735958.541805_atgbsl.mov"
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 max-w-[1440px]">
        {/* Hero Section */}
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-copper-orange mb-6 block">
              Formations de Haute Précision
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 text-deep-blue leading-tight">
              Devenez une agence <span className="text-copper-orange">IA-native</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed mb-8">
              À l’heure où l’intelligence artificielle redéfinit les métiers du conseil et de la création, Alkymya s'associe à l'école <span className="text-deep-blue font-bold">INATEC</span> pour vous proposer un parcours de formation de haute précision. Notre objectif : transformer votre structure en une agence "IA-native" capable de produire plus vite, sans jamais compromettre l’excellence de votre signature.
            </p>
          </motion.div>
        </div>

        {/* Financement Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-deep-blue rounded-[3rem] p-10 md:p-16 mb-32 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <GraduationCap className="h-64 w-64 text-white" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-6">
              Une formation d'excellence, 100% financée.
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl">
              Parce que la montée en compétences ne doit pas être un frein financier, nous avons mis en place un cadre rigoureux pour vous partager notre expertise :
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-copper-orange" />
                </div>
                <h3 className="text-white font-black uppercase tracking-widest text-sm">Partenariat INATEC</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Votre formation est portée par un organisme de référence, garantissant une expertise pédagogique de pointe et un suivi administratif complet.
                </p>
              </div>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-copper-orange" />
                </div>
                <h3 className="text-white font-black uppercase tracking-widest text-sm">Certification Qualiopi</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Gage de qualité supérieure, cette certification d'État atteste de la conformité de nos processus pédagogiques et de l'efficacité de nos méthodes.
                </p>
              </div>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Euro className="h-6 w-6 text-copper-orange" />
                </div>
                <h3 className="text-white font-black uppercase tracking-widest text-sm">Prise en charge OPCO</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Grâce à ce cadre certifié, votre formation peut être prise en charge jusqu'à 100% par votre OPCO, selon votre budget de formation disponible.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Modules Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-black text-deep-blue mb-4">Parcours de Formation</h2>
            <p className="text-muted-foreground font-medium max-w-2xl mx-auto">Découvrez notre programme complet et nos options spécialisées pour une montée en compétences sur-mesure.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            {ateliers.map((atelier, index) => (
              <Card key={index} className={`border-none bg-white shadow-xl shadow-deep-blue/5 rounded-[3rem] overflow-hidden group hover:shadow-2xl transition-all duration-500 ${index === 0 ? 'ring-2 ring-copper-orange/20' : ''}`}>
                <div className="flex flex-col lg:flex-row">
                  <div className={`lg:w-1/4 flex items-center justify-center p-12 transition-colors duration-500 ${index === 0 ? 'bg-copper-orange text-white' : 'bg-copper-orange/5 text-copper-orange group-hover:bg-copper-orange group-hover:text-white'}`}>
                    <atelier.icon className="h-20 w-20" />
                  </div>
                  <div className="lg:w-3/4 p-10 md:p-16">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                      <div>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-copper-orange mb-2 block">
                          {atelier.tag}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-heading font-black text-deep-blue">{atelier.title}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-black text-deep-blue">{atelier.price}</p>
                        <p className="text-xs font-bold text-copper-orange uppercase tracking-widest mt-1">Tarif HT</p>
                      </div>
                    </div>

                    <p className="text-xl text-deep-blue/70 font-medium mb-12 italic border-l-4 border-copper-orange/30 pl-6">
                      {atelier.subtitle}
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 text-sm">
                      <div className="space-y-6">
                        <div>
                          <p className="font-black uppercase tracking-widest text-copper-orange mb-3">Format</p>
                          <p className="text-deep-blue font-bold leading-relaxed">{atelier.format}</p>
                        </div>
                        {atelier.content && (
                          <div>
                            <p className="font-black uppercase tracking-widest text-copper-orange mb-3">Contenu</p>
                            <p className="text-deep-blue font-bold leading-relaxed">{atelier.content}</p>
                          </div>
                        )}
                        {atelier.deliverables && (
                          <div>
                            <p className="font-black uppercase tracking-widest text-copper-orange mb-3">Livrables</p>
                            <p className="text-deep-blue font-bold leading-relaxed">{atelier.deliverables}</p>
                          </div>
                        )}
                      </div>
                      <div className="bg-deep-blue/5 p-8 rounded-[2rem]">
                        <p className="font-black uppercase tracking-widest text-deep-blue mb-4">
                          {atelier.included ? 'Inclus dans le programme' : 'Objectif Principal'}
                        </p>
                        <p className="text-deep-blue/80 font-medium leading-relaxed">
                          {atelier.included || atelier.deliverables}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-copper-orange/10 rounded-[2.5rem] text-center border border-copper-orange/20"
          >
            <p className="text-xl text-deep-blue font-bold">
              <span className="text-copper-orange">Le conseil Alkymya :</span> Pour une transformation radicale de votre agence, vous avez la possibilité de combiner le Programme Core avec nos Options spécialisées.
            </p>
          </motion.div>
        </div>

        {/* Approach Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-4xl font-heading font-black text-deep-blue mb-8">
              L'approche Alkymya : <span className="text-copper-orange">Apprendre par l'action</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Oubliez la théorie abstraite. Notre pédagogie repose sur le <span className="text-deep-blue font-bold italic">"Learning by Doing"</span> : 50% de la formation est dédiée à la pratique immédiate sur vos propres projets d'agence.
              </p>
              <p>
                Vous ne repartez pas seulement avec des connaissances, mais avec des livrables concrets et exploitables dès le premier jour.
              </p>
            </div>
            <div className="mt-10 p-6 bg-copper-orange/5 border-l-4 border-copper-orange rounded-r-2xl">
              <p className="text-sm font-bold text-copper-orange uppercase tracking-widest mb-1">Impact Immédiat</p>
              <p className="text-deep-blue font-medium italic">"Transformer l'intention en expertise opérationnelle."</p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="relative aspect-[9/16] w-full max-w-[320px] rounded-[3rem] overflow-hidden shadow-2xl bg-black group border-8 border-white/10 text-left outline-none cursor-zoom-in"
            >
              <video 
                src="https://res.cloudinary.com/dokzioyu4/video/upload/v1773762338/DraftResource_1763735958.541805_atgbsl.mov"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                autoPlay
                muted
                loop
                playsInline
              />
            </button>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-copper-orange mb-4 block">Retours d'expérience</span>
            <h2 className="text-4xl font-heading font-black text-deep-blue">Ce qu'ils en <span className="text-copper-orange">disent</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white border border-deep-blue/5 shadow-xl shadow-deep-blue/5 rounded-[2.5rem] flex flex-col h-full hover:border-copper-orange/30 transition-all duration-500"
              >
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-copper-orange/20 fill-copper-orange/10" />
                </div>
                <p className="text-deep-blue/80 font-medium italic leading-relaxed mb-8 flex-grow">
                  "{t.quote}"
                </p>
                <div className="pt-6 border-t border-deep-blue/5">
                  <p className="font-black text-deep-blue text-sm uppercase tracking-widest">{t.author}</p>
                  {t.role && <p className="text-xs font-bold text-copper-orange uppercase tracking-widest mt-1 opacity-70">{t.role}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white border border-deep-blue/5 rounded-[3rem] p-12 shadow-2xl">
          <h2 className="text-3xl font-heading font-black text-deep-blue mb-6">Prêt à transformer votre entreprise ?</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">Contactez-nous pour une étude personnalisée de votre budget de formation et de vos besoins opérationnels.</p>
          <a
            href="https://studio--studio-4311061048-923d4.us-central1.hosted.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-copper-orange text-white rounded-full font-black uppercase text-sm tracking-widest hover:bg-deep-blue transition-all shadow-xl"
          >
            Réserver votre formation
          </a>
        </div>
      </div>
    </div>
  );
}
