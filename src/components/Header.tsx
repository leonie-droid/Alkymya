import { useState } from 'react';
import { Menu, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '../../components/ui/sheet';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import Logo from './Logo';

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Génération IA', href: '/ia' },
  { name: 'Nos œuvres', href: '/oeuvres' },
  { name: 'Nos alchimistes', href: '/alchimistes' },
  { name: 'Nos ateliers', href: '/ateliers' },
  { name: 'Nos ressources', href: '/ressources' },
  { name: 'Nos partenaires', href: '/partenaires' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="max-w-[1600px] mx-auto flex h-20 items-center justify-between px-6 lg:px-10 relative">
        {/* Left column: Logo */}
        <div className="flex-none z-10">
          <Link to="/" className="flex items-center">
            <Logo className="h-8 md:h-10" />
          </Link>
        </div>

        {/* Center column: Navigation, widely spaced */}
        <nav className="hidden md:flex items-center justify-center gap-3 lg:gap-6 xl:gap-10 mx-auto px-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-[10px] lg:text-[11px] xl:text-[12px] uppercase tracking-wide xl:tracking-widest font-bold transition-all hover:text-accent relative group py-2 whitespace-nowrap",
                location.pathname === item.href ? "text-accent" : "text-muted-foreground"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute bottom-0 left-0 h-0.5 bg-accent transition-all group-hover:w-full",
                location.pathname === item.href ? "w-full" : "w-0"
              )} />
            </Link>
          ))}
        </nav>

        {/* Right column: Socials or Menu */}
        <div className="flex-none flex items-center gap-4 z-10 min-w-[40px] justify-end">
          <div className="hidden lg:flex items-center gap-4 text-muted-foreground border-l border-border pl-6 ml-2">
            <Instagram className="h-4 w-4 hover:text-accent cursor-pointer transition-colors" />
            <Linkedin className="h-4 w-4 hover:text-accent cursor-pointer transition-colors" />
          </div>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
                <nav className="flex flex-col gap-8 mt-12">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-2xl font-heading font-bold hover:text-accent transition-colors",
                        location.pathname === item.href ? "text-accent" : "text-primary"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex gap-4 mt-8">
                    <Instagram className="h-6 w-6 text-muted-foreground hover:text-accent cursor-pointer" />
                    <Facebook className="h-6 w-6 text-muted-foreground hover:text-accent cursor-pointer" />
                    <Linkedin className="h-6 w-6 text-muted-foreground hover:text-accent cursor-pointer" />
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
