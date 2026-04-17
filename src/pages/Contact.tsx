import { motion } from 'motion/react';
import { Mail, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';

const contacts = [
  {
    name: "Cyril Garnier",
    email: "cyril@alkymya.co",
    photo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758811810/23-IMG_2569_1_ayyspn.jpg",
    instagram: "https://www.instagram.com/cyrilgarnierconsulting?igsh=NXVma21qdjFxM3Fp",
    linkedin: "https://www.linkedin.com/in/cyril-garnier-89697b1/"
  },
  {
    name: "Léonie Egesipe",
    email: "leonie@alkymya.co",
    photo: "https://res.cloudinary.com/dokzioyu4/image/upload/v1758110454/725879fe-afa3-4afa-a900-229030c002de_1_xoep2v.png",
    instagram: "https://www.instagram.com/alkymya_leonie?igsh=YnRicG01NDBka3lx",
    linkedin: "https://www.linkedin.com/in/l%C3%A9onie-egesipe-96a283291/"
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-turquoise/10 text-turquoise mb-6">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm font-medium uppercase tracking-widest">Prendre contact</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-deep-blue mb-8">
            L'Équipe <span className="text-turquoise">Alkymya</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-normal">
            Rencontrez les visages derrière la transformation. Nous sommes là pour répondre à vos questions et explorer de nouvelles synergies créatives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group relative overflow-hidden rounded-[3rem] border-border/50 bg-white/50 backdrop-blur-sm hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all duration-700 h-full">
                <div className="relative aspect-[4/4] overflow-hidden">
                  <img 
                    src={contact.photo} 
                    alt={contact.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="p-10 flex flex-col items-center text-center">
                  <h3 className="text-3xl font-heading font-black text-deep-blue mb-2 group-hover:text-turquoise transition-colors duration-300">
                    {contact.name}
                  </h3>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-lg text-muted-foreground hover:text-deep-blue flex items-center gap-2 mb-8 transition-colors font-medium"
                  >
                    <Mail className="h-4 w-4 text-turquoise" />
                    {contact.email}
                  </a>
                  
                  <div className="flex gap-4">
                    <a 
                      href={contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-deep-blue hover:bg-turquoise hover:text-white hover:border-turquoise transition-all duration-300"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-deep-blue hover:bg-deep-blue hover:text-white hover:border-deep-blue transition-all duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Decorative background element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-turquoise/5 rounded-full blur-3xl group-hover:bg-turquoise/10 transition-colors" />
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-32 text-center"
        >
          <p className="text-sm uppercase tracking-[0.4em] font-bold text-muted-foreground/50 italic">
            "Chaque rencontre est une opportunité de transmutation."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
