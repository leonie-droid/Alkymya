import { useState } from 'react';
import { Menu, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '../../components/ui/sheet';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import Logo from './Logo';
import NewsletterButton from './NewsletterButton';

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Génération IA', href: '/ia' },
  { name: 'Nos œuvres', href: '/oeuvres' },
  { name: 'Nos alchimistes', href: '/alchimistes/' },
  { name: 'Nos ateliers', href: '/ateliers' },
  { name: 'Nos ressources', href: '/ressources' },
  { name: 'Nos partenaires', href: '/partenaires' },
  { name: 'Nous rejoindre', href: '/rejoindre' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="max-w-[1560px] mx-auto w-full flex h-20 items-center justify-between px-4 2xl:px-6 gap-2 xl:gap-3 2xl:gap-5">
        {/* Left: Logo */}
        <div className="shrink-0 z-10 flex items-center">
          <Link to="/" className="flex items-center">
            <Logo className="h-8 md:h-9 2xl:h-10" />
          </Link>
        </div>

        {/* Center: Navigation tabs centered & spaced to optimize available width */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-2 lg:gap-2.5 xl:gap-3 2xl:gap-5 min-w-0 px-1 xl:px-2">
          {navItems.map((item) => {
            const currentPath = location.pathname === '/' ? '/' : location.pathname.replace(/\/+$/, '');
            const itemPath = item.href === '/' ? '/' : item.href.replace(/\/+$/, '');
            const isActive =
              itemPath === '/'
                ? currentPath === '/'
                : currentPath === itemPath ||
                  currentPath.startsWith(`${itemPath}/`);

            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-[10px] lg:text-[11px] xl:text-[12px] uppercase tracking-normal 2xl:tracking-wider font-bold transition-all hover:text-accent relative group py-2 whitespace-nowrap",
                  isActive ? "text-accent" : "text-muted-foreground"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-accent transition-all group-hover:w-full",
                    isActive ? "w-full" : "w-0"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right: Newsletter button, Socials & Mobile Menu */}
        <div className="shrink-0 flex items-center gap-2.5 sm:gap-3 z-10 justify-end">
          <div className="hidden sm:flex items-center shrink-0">
            <NewsletterButton variant="header" size="sm" label="Newsletter" />
          </div>

          <div className="hidden xl:flex items-center gap-2.5 2xl:gap-3.5 text-muted-foreground border-l border-border pl-2.5 2xl:pl-3.5 shrink-0">
            <a
              href="https://www.instagram.com/alkymya_cyril"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Alkymya"
            >
              <Instagram className="h-4 w-4 hover:text-accent cursor-pointer transition-colors" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCon0sR5rVfTCuHOWG7LhAig"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Alkymya"
            >
              <Youtube className="h-4 w-4 hover:text-accent cursor-pointer transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/cyril-garnier-89697b1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Alkymya"
            >
              <Linkedin className="h-4 w-4 hover:text-accent cursor-pointer transition-colors" />
            </a>
          </div>

          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "text-primary"
                )}
                aria-label="Ouvrir le menu de navigation"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu principal</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
                <nav className="flex flex-col gap-6 mt-10">
                  <div className="pb-2">
                    <NewsletterButton 
                      variant="primary" 
                      size="md" 
                      label="Suivre nos projets" 
                      className="w-full justify-center shadow-md" 
                    />
                  </div>

                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-xl font-heading font-bold hover:text-accent transition-colors",
                        location.pathname === item.href ? "text-accent" : "text-primary"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="flex gap-4 mt-6 pt-6 border-t border-border">
                    <a href="https://www.instagram.com/alkymya_cyril" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-6 w-6 text-muted-foreground hover:text-accent cursor-pointer" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCon0sR5rVfTCuHOWG7LhAig" target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-6 w-6 text-muted-foreground hover:text-accent cursor-pointer" />
                    </a>
                    <a href="https://www.facebook.com/cyril.garnier.969" target="_blank" rel="noopener noreferrer" aria-label="Facebook Alkymya / Cyril Garnier">
                      <Facebook className="h-6 w-6 text-muted-foreground hover:text-accent cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/cyril-garnier-89697b1/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-6 w-6 text-muted-foreground hover:text-accent cursor-pointer" />
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
