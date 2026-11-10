import React from 'react';
import { Mail } from 'lucide-react';
import { openNewsletterModal } from '../utils/newsletter';
import { cn } from '@/lib/utils';

interface NewsletterButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'header';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  showIcon?: boolean;
}

export default function NewsletterButton({
  className,
  variant = 'primary',
  size = 'md',
  label = "Suivre nos projets",
  showIcon = true,
}: NewsletterButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-heading font-black tracking-wider uppercase transition-all duration-300 rounded-full cursor-pointer";
  
  const sizeStyles = {
    sm: "text-[11px] px-3.5 py-1.5 gap-1.5",
    md: "text-xs px-5 py-2.5 gap-2 shadow-sm",
    lg: "text-sm px-7 py-3.5 gap-2.5 shadow-md hover:shadow-lg",
  };

  const variantStyles = {
    primary: "bg-copper-orange hover:bg-white hover:text-deep-blue text-white",
    secondary: "bg-deep-blue hover:bg-copper-orange text-white",
    outline: "border border-border bg-transparent hover:bg-muted text-foreground",
    ghost: "bg-transparent hover:bg-accent/10 text-accent",
    header: "bg-copper-orange/15 hover:bg-copper-orange text-copper-orange hover:text-white border border-copper-orange/30 text-[11px] px-3.5 py-1.5 rounded-full font-bold shadow-none",
  };

  return (
    <button
      type="button"
      onClick={openNewsletterModal}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      aria-label="Ouvrir le formulaire d'inscription à la newsletter Alkymya"
    >
      {showIcon && <Mail className={cn("transition-transform group-hover:scale-110", size === 'sm' ? "w-3 h-3" : "w-3.5 h-3.5")} />}
      <span>{label}</span>
    </button>
  );
}
