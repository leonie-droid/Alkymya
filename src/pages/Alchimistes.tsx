import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Card } from '@/components/ui/card';

const alchimistes = [
  {
    name: "Cyril Garnier",
    role: "Expert en Transformation",
    bio: "Visionnaire et stratège, Cyril guide Alkymya vers des sommets d'innovation et de partage.",
    image: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758192982/66cffcd8-15f1-415f-b423-9f428d63e22f_gqjd53.png",
    socials: { linkedin: "https://www.linkedin.com/in/cyril-garnier-89697b1/", instagram: "", mail: "" }
  },
  {
    name: "Olivier Dion",
    role: "L'Alchimiste du Rêve",
    bio: "Artiste du mouvement et de la vision, Olivier transforme les concepts en expériences immersives uniques.",
    image: "https://res.cloudinary.com/dokzioyu4/image/upload/v1760374889/Photo_Olivier_Dion_reve_dk2c5e.png",
    socials: { linkedin: "", instagram: "", mail: "" }
  },
  {
    name: "Léonie Egesipe",
    role: "Créatrice de Synergies",
    bio: "À l'intersection de l'art et de l'humain, Léonie tisse les liens qui font la force de notre communauté.",
    image: "https://res.cloudinary.com/dokzioyu4/image/upload/v1762252984/725879fe-afa3-4afa-a900-229030c002de_1_xoep2v.png",
    socials: { instagram: "https://www.instagram.com/alkymya_leonie?igsh=YnRicG01NDBka3lx", linkedin: "https://www.linkedin.com/in/l%C3%A9onie-egesipe-96a283291/", mail: "" }
  }
];

export default function Alchimistes() {
  return (
    <div className="min-h-screen py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-black text-deep-blue mb-6">
            Nos <span className="text-turquoise">Alchimistes</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rencontrez les esprits créatifs qui font battre le cœur d'Alkymya. Des visionnaires passionnés par la transformation et l'innovation artistique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {alchimistes.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 pb-8">
                    <div className="flex gap-4">
                      {person.socials.instagram && (
                        <a href={person.socials.instagram} className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all">
                          <Instagram className="h-5 w-5" />
                        </a>
                      )}
                      {person.socials.linkedin && (
                        <a href={person.socials.linkedin} className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {person.socials.mail && (
                        <a href={`mailto:${person.socials.mail}`} className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all">
                          <Mail className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-heading font-bold text-deep-blue">{person.name}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 p-12 rounded-[3rem] bg-deep-blue text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)]" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 relative z-10">
            Envie de rejoindre le labo ?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 relative z-10">
            Nous sommes toujours à la recherche de nouveaux talents, d'artistes engagés et d'artisans de la transformation.
          </p>
          <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-bold transition-all transform hover:scale-105 relative z-10">
            Collaborer avec nous
          </button>
        </motion.div>
      </div>
    </div>
  );
}
