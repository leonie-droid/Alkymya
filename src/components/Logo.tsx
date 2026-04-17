import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export default function Logo({ className, variant = 'default' }: LogoProps) {
  return (
    <img 
      src="https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png" 
      alt="Alkymya" 
      className={cn(
        "inline-block h-[1em] w-auto align-middle",
        variant === 'white' && "brightness-0 invert",
        className
      )}
      referrerPolicy="no-referrer"
    />
  );
}
