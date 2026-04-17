import { Instagram, Facebook, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="reseaux" className="bg-primary text-primary-foreground pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <Link to="/" className="mb-8 block">
              <Logo className="h-16" variant="white" />
            </Link>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-8 font-normal italic">
              "Explorer la beauté, partager la conscience, transformer le futur."
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Linkedin className="h-6 w-6" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Mail className="h-6 w-6" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold mb-8 opacity-50">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/ia" className="hover:text-accent transition-colors text-lg font-heading font-bold">Génération IA</Link></li>
              <li><Link to="/oeuvres" className="hover:text-accent transition-colors text-lg font-heading font-bold">Nos œuvres</Link></li>
              <li><Link to="/alchimistes" className="hover:text-accent transition-colors text-lg font-heading font-bold">Nos alchimistes</Link></li>
              <li><Link to="/ateliers" className="hover:text-accent transition-colors text-lg font-heading font-bold">Nos ateliers</Link></li>
              <li><Link to="/ressources" className="hover:text-accent transition-colors text-lg font-heading font-bold">Nos ressources</Link></li>
              <li><Link to="/partenaires" className="hover:text-accent transition-colors text-lg font-heading font-bold">Nos partenaires</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors text-lg font-heading font-bold">Contact</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-start md:items-end justify-between">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollToTop}
              className="rounded-full border-primary-foreground/20 hover:bg-accent hover:border-accent text-primary-foreground bg-transparent"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
            <div className="mt-8 md:mt-0 text-left md:text-right">
              <h4 className="text-sm uppercase tracking-[0.2em] font-bold mb-4 opacity-50">Engagement</h4>
              <p className="text-xs text-primary-foreground/60 leading-relaxed max-w-[200px]">
                <Logo className="h-[1.2em]" variant="white" /> s'engage pour une empreinte numérique minimale et une éthique de production responsable.
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/10 mb-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-primary-foreground/40 font-bold">
          <p>© 2024 <Logo className="h-[1.2em]" variant="white" />. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary-foreground transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Politique de Confidentialité</a>
          </div>
          <p>Design & Code par <Logo className="h-[1.2em]" variant="white" /> Studio</p>
        </div>
      </div>
    </footer>
  );
}
