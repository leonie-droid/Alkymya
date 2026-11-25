import { motion } from "motion/react";
import {
  Plus,
  Minus,
  HelpCircle,
  BookOpen,
  Wrench,
  BarChart,
  Users,
  Zap,
  Mail,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { GoogleReviewsShowcase } from "../components/GoogleReviewsShowcase";
import { faqCategories, allFaqItems, FAQIconKey, FAQItemData } from "../data/faq";

const iconMap: Record<FAQIconKey, typeof HelpCircle> = {
  help: HelpCircle,
  book: BookOpen,
  wrench: Wrench,
  chart: BarChart,
  users: Users,
  zap: Zap,
  mail: Mail
};

function FAQItem({
  item,
  indexId,
  isOpen,
  onClick
}: {
  item: FAQItemData;
  indexId: string;
  isOpen: boolean;
  onClick: () => void;
  key?: string;
}) {
  return (
    <div id={item.id} className="border-b border-[rgba(31,79,110,0.08)] last:border-0">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`${indexId}-panel`}
        className="w-full py-5 flex items-center justify-between text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#02ADAB] rounded-[6px]"
      >
        <span className="text-[1.05rem] sm:text-[1.12rem] font-medium text-[#1F4F6E] group-hover:text-[#02ADAB] transition-colors pr-8">
          {item.question}
        </span>
        <div
          className={`w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0 transition-all ${
            isOpen ? "bg-[#C06721] text-white" : "bg-[#f4f6f9] text-[#1F4F6E]"
          }`}
        >
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </div>
      </button>
      <motion.div
        id={`${indexId}-panel`}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pb-5 text-[0.95rem] text-[#4a6a80] leading-[1.68] font-normal space-y-3">
          {item.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          {item.bullets && item.bullets.length > 0 && (
            <ul className="list-disc pl-5 space-y-1.5 text-[0.93rem] text-[#35566c]">
              {item.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          )}
          {item.note && (
            <p className="text-sm bg-[#C06721]/10 px-4 py-3 rounded-[8px] text-[#1F4F6E] font-medium">
              {item.note}
            </p>
          )}
          {item.links && item.links.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-1">
              {item.links.map((lnk) =>
                lnk.external ? (
                  <a
                    key={lnk.href}
                    href={lnk.href}
                    target={lnk.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={lnk.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C06721] hover:underline"
                  >
                    <span>{lnk.label}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    key={lnk.href}
                    to={lnk.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#037971] hover:text-[#C06721] transition-colors"
                  >
                    <span>{lnk.label}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  const [openStates, setOpenStates] = useState<{ [key: string]: number | null }>({});

  const flattenedFaq = useMemo(() => {
    return allFaqItems.map((item) => ({
      question: item.question,
      answer: item.plainAnswer
    }));
  }, []);

  const toggleItem = (categoryTitle: string, index: number) => {
    setOpenStates((prev) => ({
      ...prev,
      [categoryTitle]: prev[categoryTitle] === index ? null : index
    }));
  };

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="FAQ Alkymya | Formations IA, Agents, SEO/GEO & OPCO"
        description="Questions fréquentes Alkymya : formations IA en entreprise (Seine-et-Marne, Paris), agents sur mesure, SEO Google AI, financement OPCO et avis."
        keywords="FAQ Alkymya studio IA, formation IA générative pour entreprise, formation intelligence artificielle Seine-et-Marne, expert IA générative Paris, atelier IA finançable OPCO, stratégie SEO Google AI, créer agents IA sur mesure, avis formations Alkymya"
        canonicalPath="/faq"
        ogImage="https://alkymya.co/og-faq.jpg"
        type="FAQPage"
        faqData={flattenedFaq}
      />

      {/* HERO SECTION */}
      <header className="bg-[#1F4F6E] text-white py-20 px-6 sm:px-10 text-center relative overflow-hidden">
        <div className="max-w-[740px] mx-auto relative z-10">
          <p className="text-[0.85rem] tracking-[0.15em] uppercase text-[#02ADAB] mb-4 font-normal">
            Foire Aux Questions · Transparence &amp; Pédagogie
          </p>
          <h1 className="font-light text-[2.2rem] sm:text-[2.6rem] leading-[1.2] mb-5 text-white">
            Questions fréquentes.<br />
            <strong className="font-medium text-white">Vos réponses claires.</strong>
          </h1>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-white/75 max-w-[640px] mx-auto leading-[1.7] font-light mb-8">
            Toutes les réponses sur le studio Alkymya (Seine-et-Marne, Paris &amp; France), nos formations IA en entreprise finançables OPCO via partenaires Qualiopi, la création d'agents sur mesure, la stratégie SEO/GEO Google AI et nos avis clients.
          </p>

          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5 tabular-nums">
                {allFaqItems.length}
              </div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Réponses détaillées</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5 tabular-nums">99,3 %</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Recommandation</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">OPCO</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Via partenaires Qualiopi</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5 tabular-nums">&lt; 24h</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Réponse directe</div>
            </div>
          </div>
        </div>
      </header>

      {/* ACCORDÉONS FAQ */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <div className="space-y-12">
          {faqCategories.map((category) => {
            const Icon = iconMap[category.icon] || HelpCircle;
            return (
              <div key={category.title} className="relative">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-10 h-10 rounded-[8px] bg-[rgba(2,173,171,0.1)] flex items-center justify-center text-[#02ADAB]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-[1.4rem] sm:text-[1.6rem] font-light text-[#1F4F6E]">
                    <strong className="font-medium">{category.title}</strong>
                  </h2>
                </div>

                <div className="bg-white rounded-[12px] p-6 sm:p-8 shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
                  {category.items.map((item, index) => (
                    <FAQItem
                      key={item.id}
                      item={item}
                      indexId={item.id}
                      isOpen={openStates[category.title] === index}
                      onClick={() => toggleItem(category.title, index)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* SECTION DÉDIÉE : AVIS CLIENTS VÉRIFIÉS GOOGLE */}
      <section id="avis-clients" className="max-w-[1100px] mx-auto py-[70px] px-6">
        <GoogleReviewsShowcase
          variant="light"
          kicker="Avis clients vérifiés · Fiche Google Business Profile"
          headingPrefix="Ce que disent nos clients et"
          headingStrong="étudiants accompagnés"
        />
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* CTA FINAL : BANNIÈRE ORANGE #C06721 */}
      <div className="bg-[#C06721] text-white text-center py-[70px] px-10">
        <h2 className="text-[2rem] font-light mb-3.5 text-white">
          Vous avez une <strong className="font-medium text-white">question spécifique ?</strong>
        </h2>
        <p className="text-[1.05rem] text-white/85 max-w-[540px] mx-auto mb-8 leading-[1.7] font-light">
          Échangez directement avec Cyril Garnier (diagnostic 20 min) pour cadrer votre formation IA OPCO, vos agents sur mesure ou votre visibilité SEO/GEO.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact/"
            className="inline-block bg-white text-[#C06721] text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
          >
            Contacter l'équipe →
          </Link>
          <a
            href="mailto:cyril@alkymya.co"
            className="inline-block bg-white/10 hover:bg-white/20 text-white text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 border border-white/25"
          >
            Écrire à cyril@alkymya.co
          </a>
        </div>
      </div>
    </div>
  );
}
