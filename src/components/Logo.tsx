import { cn } from "@/lib/utils";
import { cloudinaryUrl } from "../utils/cloudinary";

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export default function Logo({ className, variant = 'default' }: LogoProps) {
  return (
    <img 
      src={cloudinaryUrl("https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png", 600)} 
      alt="Alkymya, studio IA et organisme de formation à Ozoir-la-Ferrière" 
      width={150}
      height={38}
      className={cn(
        "inline-block h-[1em] w-auto align-middle",
        variant === 'white' && "brightness-0 invert",
        className
      )}
      referrerPolicy="no-referrer"
    />
  );
}
