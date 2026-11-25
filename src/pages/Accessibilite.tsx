import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Keyboard, Eye, FileText, Mail, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const Accessibilite: React.FC = () => {
  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Déclaration d'accessibilité RGAA & WCAG | Alkymya"
        description="Déclaration d'accessibilité numérique d'Alkymya (alkymya.co) : engagements RGAA et WCAG AA, navigation clavier, skip link, contrastes et contact dédié."
        keywords="déclaration d'accessibilité RGAA, WCAG AA, accessibilité numérique Alkymya, lien d'évitement, navigation clavier"
        canonicalPath="/accessibilite"
        ogImage="https://alkymya.co/og-mentions.jpg"
        type="WebPage"
      />

      {/* HERO SECTION */}
      <header className="bg-[#1F4F6E] text-white py-20 px-6 sm:px-10 text-center relative overflow-hidden">
        <div className="max-w-[740px] mx-auto relative z-10">
          <p className="text-[0.85rem] tracking-[0.15em] uppercase text-[#02ADAB] mb-4 font-normal">
            Accessibilité Numérique · Référentiel RGAA &amp; WCAG 2.1 AA
          </p>
          <h1 className="font-light text-[2.4rem] sm:text-[2.6rem] leading-[1.2] mb-5 text-white">
            Déclaration d'accessibilité <strong className="font-medium text-white">RGAA &amp; WCAG</strong>
          </h1>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-white/75 max-w-[640px] mx-auto leading-[1.7] font-light mb-6">
            Engagement d'Alkymya (CYRIL GARNIER CONSULTING) pour un web lisible, navigable au clavier et accessible à tous les publics, en ligne avec les bonnes pratiques RGAA et WCAG 2.1 niveau AA.
          </p>
          <span className="inline-block bg-white/10 text-white/85 text-xs font-medium uppercase tracking-wider px-3.5 py-1.5 rounded-[4px]">
            Déclaration établie le 25 novembre 2026
          </span>
        </div>
      </header>

      {/* CONTENU PRINCIPAL */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6 space-y-10">
        {/* 1. Cadre & engagement */}
        <div className="p-7 sm:p-10 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] space-y-4">
          <div className="flex items-center gap-3 text-[#1F4F6E]">
            <div className="w-10 h-10 rounded-[8px] bg-[rgba(2,173,171,0.1)] text-[#02ADAB] flex items-center justify-center shrink-0">
              <Eye className="w-5 h-5" />
            </div>
            <h2 className="text-[1.35rem] font-medium text-[#1F4F6E]">
              1. Engagement d'accessibilité et périmètre
            </h2>
          </div>
          <p className="text-[0.95rem] text-[#5a7a90] leading-[1.7]">
            <strong className="text-[#1F4F6E] font-medium">Alkymya (CYRIL GARNIER CONSULTING)</strong> s'engage volontairement à rendre son site <strong className="text-[#1F4F6E] font-medium">https://alkymya.co/</strong> accessible conformément aux principes du Référentiel Général d'Amélioration de l'Accessibilité (RGAA) et aux directives internationales WCAG 2.1 niveau AA.
          </p>
          <p className="text-[0.95rem] text-[#5a7a90] leading-[1.7]">
            Bien qu'en tant qu'entreprise privée sous le seuil réglementaire de 250 millions d'euros de chiffre d'affaires l'obligation légale de publication d'un schéma pluriannuel ne s'applique pas au même titre qu'aux organismes publics, Alkymya applique les standards d'accessibilité numérique comme pilier d'exigence pédagogique et éditoriale.
          </p>
        </div>

        {/* 2. Mesures mises en œuvre */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="p-7 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] space-y-4">
            <div className="flex items-center gap-3 text-[#1F4F6E]">
              <div className="w-10 h-10 rounded-[8px] bg-[rgba(3,121,113,0.1)] text-[#037971] flex items-center justify-center shrink-0">
                <Keyboard className="w-5 h-5" />
              </div>
              <h2 className="text-[1.25rem] font-medium text-[#1F4F6E]">2. Navigation clavier &amp; structure</h2>
            </div>
            <ul className="space-y-2.5 text-[0.93rem] text-[#5a7a90]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#037971] shrink-0 mt-1" />
                <span><strong className="text-[#1F4F6E] font-medium">Lien d'évitement (Skip Link)</strong> présent dès l'ouverture du document HTML vers <code className="bg-[#f4f6f9] px-1 rounded text-xs text-[#1F4F6E]">#main-content</code>, visible à la prise de focus clavier.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#037971] shrink-0 mt-1" />
                <span><strong className="text-[#1F4F6E] font-medium">Balises sémantiques HTML5</strong> (<code className="bg-[#f4f6f9] px-1 rounded text-xs text-[#1F4F6E]">&lt;header&gt;</code>, <code className="bg-[#f4f6f9] px-1 rounded text-xs text-[#1F4F6E]">&lt;nav&gt;</code>, <code className="bg-[#f4f6f9] px-1 rounded text-xs text-[#1F4F6E]">&lt;main&gt;</code>, <code className="bg-[#f4f6f9] px-1 rounded text-xs text-[#1F4F6E]">&lt;article&gt;</code>, <code className="bg-[#f4f6f9] px-1 rounded text-xs text-[#1F4F6E]">&lt;footer&gt;</code>) et hiérarchie unique d'un seul <code className="bg-[#f4f6f9] px-1 rounded text-xs text-[#1F4F6E]">&lt;h1&gt;</code> par page.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#037971] shrink-0 mt-1" />
                <span><strong className="text-[#1F4F6E] font-medium">Contrôles interactifs ARIA</strong> : menus, modale RGPD et accordéons FAQ pilotables au clavier avec attributs d'état explicites.</span>
              </li>
            </ul>
          </div>

          <div className="p-7 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] space-y-4">
            <div className="flex items-center gap-3 text-[#1F4F6E]">
              <div className="w-10 h-10 rounded-[8px] bg-[rgba(192,103,33,0.12)] text-[#C06721] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-[1.25rem] font-medium text-[#1F4F6E]">3. Médias, contrastes &amp; contenus</h2>
            </div>
            <ul className="space-y-2.5 text-[0.93rem] text-[#5a7a90]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#037971] shrink-0 mt-1" />
                <span><strong className="text-[#1F4F6E] font-medium">Attributs alt</strong> descriptifs renseignés sur l'ensemble des photographies, logos partenaires et illustrations éditoriales.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#037971] shrink-0 mt-1" />
                <span><strong className="text-[#1F4F6E] font-medium">Contrastes vérifiés</strong> entre la typographie principale (<code className="bg-[#f4f6f9] px-1 rounded text-xs text-[#1F4F6E]">#1F4F6E</code>) et les fonds clairs (<code className="bg-[#f4f6f9] px-1 rounded text-xs text-[#1F4F6E]">#FFFFFF</code> / <code className="bg-[#f4f6f9] px-1 rounded text-xs text-[#1F4F6E]">#F4F6F9</code>).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#037971] shrink-0 mt-1" />
                <span><strong className="text-[#1F4F6E] font-medium">Documents PDF &amp; études</strong> doublés par des pages HTML structurées avec tableaux natifs lisibles par les lecteurs d'écran.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Retour d'information & Voies de recours */}
        <div className="p-7 sm:p-10 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] space-y-5">
          <h2 className="text-[1.35rem] font-medium text-[#1F4F6E]">
            4. Signaler un défaut d'accessibilité &amp; voies de recours
          </h2>
          <p className="text-[0.95rem] text-[#5a7a90] leading-[1.7]">
            Si vous ne parvenez pas à accéder à un contenu, un formulaire ou un document PDF sur <strong className="text-[#1F4F6E] font-medium">alkymya.co</strong>, vous pouvez contacter notre équipe afin d'être orienté vers une alternative accessible ou obtenir le contenu dans un format adapté :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-[0.93rem] text-[#5a7a90]">
            <div className="p-5 rounded-[8px] bg-[#f4f6f9] space-y-2">
              <p className="font-medium text-[#1F4F6E]">Contact accessibilité Alkymya</p>
              <p>
                Email :{' '}
                <a href="mailto:cyril@alkymya.co" className="text-[#037971] font-medium underline">
                  cyril@alkymya.co
                </a>
              </p>
              <p>
                Téléphone :{' '}
                <a href="tel:+33643649777" className="text-[#037971] font-medium underline">
                  06 43 64 97 77
                </a>
              </p>
              <p>Délai de réponse habituel : sous 48 heures ouvrées.</p>
            </div>
            <div className="p-5 rounded-[8px] bg-[#f4f6f9] space-y-2">
              <p className="font-medium text-[#1F4F6E]">Voies de recours (Défenseur des droits)</p>
              <p>
                En cas d'absence de réponse satisfaisante après signalement, vous pouvez saisir le Défenseur des droits :
              </p>
              <p>
                Courrier : Défenseur des droits, Libre réponse 71120, 75342 Paris CEDEX 07 — ou via le formulaire en ligne sur <span className="text-[#1F4F6E]">defenseurdesdroits.fr</span>.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[rgba(31,79,110,0.08)] flex flex-wrap gap-6 text-sm font-medium">
            <Link to="/politique-confidentialite/" className="text-[#037971] hover:underline inline-flex items-center gap-1">
              <span>Politique de confidentialité &amp; cookies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/mentions-legales/" className="text-[#037971] hover:underline inline-flex items-center gap-1">
              <span>Mentions légales</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact/" className="text-[#037971] hover:underline inline-flex items-center gap-1">
              <span>Formulaire de contact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL ORANGE #C06721 */}
      <div className="bg-[#C06721] text-white text-center py-[70px] px-10">
        <h2 className="text-[2rem] font-light mb-3.5 text-white">
          Besoin d'une <strong className="font-medium text-white">adaptation spécifique ?</strong>
        </h2>
        <p className="text-[1.05rem] text-white/85 max-w-[520px] mx-auto mb-8 leading-[1.7] font-light">
          Nos formations et supports pédagogiques peuvent être adaptés aux besoins spécifiques de vos équipes et apprenants.
        </p>
        <Link
          to="/contact/"
          className="inline-flex items-center gap-2 bg-white text-[#C06721] text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
        >
          <Mail className="w-4 h-4" />
          <span>Contacter l'équipe Alkymya</span>
        </Link>
      </div>
    </div>
  );
};

export default Accessibilite;
