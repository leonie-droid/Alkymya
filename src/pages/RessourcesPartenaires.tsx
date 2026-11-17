import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Cpu,
  Database,
  ExternalLink,
  Eye,
  FileCode2,
  FileText,
  FolderOpen,
  Layers,
  Lock,
  Mail,
  NotebookPen,
  PenTool,
  Scissors,
  Search,
  ServerOff,
  Sparkles
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { resourceCategories } from '../data/ressources';
import { cloudinaryUrl } from '../utils/cloudinary';

const AWACLOUD_LOGO_URL =
  'https://res.cloudinary.com/dokzioyu4/image/upload/v1794917700/images_24_vt8z75.jpg';
const AWACLOUD_SITE_URL = 'https://awacloud.com/';

const partnerCards = [
  {
    slug: 'awa-cloud',
    name: 'AWACLOUD',
    logo: AWACLOUD_LOGO_URL,
    websiteUrl: AWACLOUD_SITE_URL,
    description:
      "Bibliothèques et logiciels français qui lisent, convertissent et produisent vos documents, sans envoyer un fichier à l'extérieur.",
    statusLabel: 'Partenaire technologique · Voir la page →',
    available: true,
    icon: FileText
  }
];

function CategoryNavBar({ activeSlug }: { activeSlug: string }) {
  return (
    <nav
      aria-label="Catégories de ressources"
      className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 rounded-[10px] bg-white/10 border border-white/15 max-w-full"
    >
      <Link
        to="/ressources"
        className="px-3.5 py-2 rounded-[6px] text-xs font-medium transition-all whitespace-nowrap text-white/75 hover:text-white hover:bg-white/10"
      >
        Toutes
      </Link>
      {resourceCategories.map((cat) => (
        <Link
          key={cat.slug}
          to={`/ressources/${cat.slug}`}
          className={`px-3.5 py-2 rounded-[6px] text-xs font-medium transition-all whitespace-nowrap ${
            activeSlug === cat.slug
              ? 'bg-white text-[#1F4F6E] shadow-sm'
              : 'text-white/75 hover:text-white hover:bg-white/10'
          }`}
        >
          {cat.name}
        </Link>
      ))}
    </nav>
  );
}

function AwaCloudDetailView() {
  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="AWACLOUD : Documents & RAG Local | Partenaires Alkymya"
        description="Partenaire technologique AWACLOUD : bibliothèques et logiciels français pour convertir PDF, Word et Excel en Markdown localement sans fuite de données."
        keywords="AWACLOUD, AWA Convert, AWA Viewer, AWA Notepad, AWA Writer, Markdown RAG local, souveraineté IA France, Alkymya partenaire"
        canonicalPath="/ressources/partenaires/awa-cloud"
        ogImage="https://res.cloudinary.com/dokzioyu4/image/upload/v1788941703/PHOTO-2026-09-08-06-54-57_ynrbkt.jpg"
        type="WebPage"
      />

      {/* HERO AWACLOUD */}
      <header className="bg-gradient-to-br from-[#1F4F6E] to-[#0d3550] text-white py-4 sm:py-5 px-6 sm:px-8">
        <div className="max-w-[1040px] mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <nav
              aria-label="Fil d'Ariane"
              className="text-xs text-[#9fb8cc] flex flex-wrap items-center gap-1.5"
            >
              <Link to="/ressources" className="text-[#02ADAB] hover:underline">
                Ressources
              </Link>
              <span>›</span>
              <Link to="/ressources/partenaires" className="text-[#02ADAB] hover:underline">
                Nos partenaires
              </Link>
              <span>›</span>
              <span className="text-white/90">AWACLOUD</span>
            </nav>

            <div className="inline-flex items-center gap-1.5 bg-[rgba(2,173,171,0.18)] text-[#02ADAB] px-2.5 py-0.5 rounded-[5px] text-[10px] font-medium tracking-[0.06em] uppercase">
              <Cpu className="w-3 h-3" />
              <span>Partenaire technologique</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-6">
            <div className="min-w-0 flex-1 flex items-start gap-3.5 sm:gap-4">
              <a
                href={AWACLOUD_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Visiter le site officiel awacloud.com"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-[10px] bg-white p-1.5 shadow-sm shrink-0 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform"
              >
                <img
                  src={cloudinaryUrl(AWACLOUD_LOGO_URL, 300)}
                  width={64}
                  height={64}
                  alt="Logo AWACLOUD"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </a>
              <div className="min-w-0">
                <h1 className="font-light text-[1.35rem] sm:text-[1.55rem] lg:text-[1.65rem] leading-[1.2] mb-1.5 text-white">
                  AWACLOUD : vos documents, lisibles par l'IA,{' '}
                  <strong className="font-medium text-white">sans quitter votre ordinateur</strong>
                </h1>

                <p className="text-[0.84rem] sm:text-[0.88rem] text-white/85 max-w-[650px] leading-[1.45] font-light">
                  Un éditeur français (fondé en 2016) qui publie des bibliothèques pour lire, convertir, signer et vérifier vos fichiers Word, Excel, PowerPoint, PDF et OpenDocument. Tout se passe localement : aucun fichier envoyé.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-col xl:flex-row items-start lg:items-end xl:items-center gap-2 shrink-0">
              <a
                href="https://awacloud.com/fr/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#C06721] hover:bg-[#a85517] text-white px-4 py-2 rounded-[7px] font-medium text-xs sm:text-[13px] transition-colors shadow-sm whitespace-nowrap"
              >
                <span>Essayer les applications gratuites</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={AWACLOUD_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-transparent hover:bg-white/10 text-white border border-white/45 px-4 py-2 rounded-[7px] font-medium text-xs sm:text-[13px] transition-colors whitespace-nowrap"
              >
                <span>Découvrir awacloud.com</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* POURQUOI NOUS L'AVONS CHOISI */}
      <section className="max-w-[1040px] mx-auto py-14 px-6">
        <h2 className="text-[1.5rem] sm:text-[1.65rem] font-medium text-[#1F4F6E] mb-2">
          Pourquoi nous l'avons choisi
        </h2>
        <p className="text-[#5a7a90] mb-8 max-w-[700px] leading-[1.65]">
          Une IA ne lit bien que du texte structuré. Vos documents arrivent en PDF, Word, PowerPoint : il faut les convertir, et le faire sans exposer vos données.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white border border-[#e2e8f0] rounded-[12px] p-6 shadow-[0_2px_12px_rgba(31,79,110,0.05)]">
            <div className="w-10 h-10 rounded-[8px] bg-[#02ADAB]/12 text-[#037971] flex items-center justify-center mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-[1.08rem] font-medium text-[#1F4F6E] mb-2">
              Confidentiel par conception
            </h3>
            <p className="text-[0.93rem] text-[#475569] leading-[1.6]">
              Le traitement se fait sur vos machines. Rien n'est envoyé à AWA ni à un tiers.
            </p>
          </div>

          <div className="bg-white border border-[#e2e8f0] rounded-[12px] p-6 shadow-[0_2px_12px_rgba(31,79,110,0.05)]">
            <div className="w-10 h-10 rounded-[8px] bg-[#1F4F6E]/10 text-[#1F4F6E] flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-[1.08rem] font-medium text-[#1F4F6E] mb-2">Souverain</h3>
            <p className="text-[0.93rem] text-[#475569] leading-[1.6]">
              Éditeur français. Code publié et vérifiable, sans dépendance externe à auditer.
            </p>
          </div>

          <div className="bg-white border border-[#e2e8f0] rounded-[12px] p-6 shadow-[0_2px_12px_rgba(31,79,110,0.05)]">
            <div className="w-10 h-10 rounded-[8px] bg-[#C06721]/12 text-[#C06721] flex items-center justify-center mb-4">
              <ServerOff className="w-5 h-5" />
            </div>
            <h3 className="text-[1.08rem] font-medium text-[#1F4F6E] mb-2">
              Simple à intégrer
            </h3>
            <p className="text-[0.93rem] text-[#475569] leading-[1.6]">
              Une bibliothèque, pas une infrastructure : pas de serveur de conversion à installer.
            </p>
          </div>
        </div>
      </section>

      {/* LEURS LOGICIELS & BIBLIOTHÈQUES */}
      <section className="bg-white border-y border-[#e2e8f0] py-14 px-6">
        <div className="max-w-[1040px] mx-auto">
          <h2 className="text-[1.5rem] sm:text-[1.65rem] font-medium text-[#1F4F6E] mb-2">
            Leurs logiciels
          </h2>
          <p className="text-[#5a7a90] mb-8 max-w-[680px] leading-[1.65]">
            Applications gratuites qui tournent dans le navigateur et fonctionnent hors ligne, sur un socle technologique souverain.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-[8px] bg-[#02ADAB]/12 text-[#037971] flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-[1.08rem] font-medium text-[#1F4F6E] mb-2">AWA Viewer</h3>
                <p className="text-[0.93rem] text-[#475569] leading-[1.6] mb-4">
                  Ouvre et lit PDF, Word, Excel, PowerPoint, OpenDocument et Markdown. Indique ce que la vue n'affiche pas.
                </p>
              </div>
              <a
                href="https://viewer.awacloud.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#037971] hover:text-[#C06721] transition-colors"
              >
                <span>Ouvrir</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-[8px] bg-[#02ADAB]/12 text-[#037971] flex items-center justify-center mb-4">
                  <NotebookPen className="w-5 h-5" />
                </div>
                <h3 className="text-[1.08rem] font-medium text-[#1F4F6E] mb-2">AWA Notepad</h3>
                <p className="text-[0.93rem] text-[#475569] leading-[1.6] mb-4">
                  Éditeur de texte brut, avec encodages, recherche et remplacement. Un bloc-notes qui reste un bloc-notes.
                </p>
              </div>
              <a
                href="https://notepad.awacloud.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#037971] hover:text-[#C06721] transition-colors"
              >
                <span>Ouvrir</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-[8px] bg-[#02ADAB]/12 text-[#037971] flex items-center justify-center mb-4">
                  <PenTool className="w-5 h-5" />
                </div>
                <h3 className="text-[1.08rem] font-medium text-[#1F4F6E] mb-2">
                  AWA Writer <span className="text-xs font-normal text-[#64748b]">(bêta)</span>
                </h3>
                <p className="text-[0.93rem] text-[#475569] leading-[1.6] mb-4">
                  Traitement de texte pour documents DOCX et ODT. Bêta : gardez une copie de vos fichiers importants.
                </p>
              </div>
              <a
                href="https://writer.awacloud.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#037971] hover:text-[#C06721] transition-colors"
              >
                <span>Ouvrir</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-[8px] bg-[#02ADAB]/12 text-[#037971] flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-[1.08rem] font-medium text-[#1F4F6E] mb-2">AwaForge</h3>
                <p className="text-[0.93rem] text-[#475569] leading-[1.6] mb-4">
                  Un socle de technologies web open source et souveraines.
                </p>
              </div>
              <a
                href={AWACLOUD_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#037971] hover:text-[#C06721] transition-colors"
              >
                <span>Découvrir</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <h3 className="text-[1.2rem] font-medium text-[#1F4F6E] mt-10 mb-4">
            Pour les développeurs : les bibliothèques
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white border border-[#e2e8f0] rounded-[12px] p-6">
              <div className="flex items-center gap-2.5 mb-2">
                <FileCode2 className="w-5 h-5 text-[#037971]" />
                <h4 className="text-[1.05rem] font-medium text-[#1F4F6E]">AWA Convert</h4>
              </div>
              <p className="text-[0.93rem] text-[#475569] leading-[1.6]">
                Transforme Word, OpenDocument, Excel, PowerPoint et PDF en Markdown structuré, pour les pipelines IA et RAG.
              </p>
            </div>

            <div className="bg-white border border-[#e2e8f0] rounded-[12px] p-6">
              <div className="flex items-center gap-2.5 mb-2">
                <FileText className="w-5 h-5 text-[#037971]" />
                <h4 className="text-[1.05rem] font-medium text-[#1F4F6E]">AWA PDF</h4>
              </div>
              <p className="text-[0.93rem] text-[#475569] leading-[1.6]">
                Produit des PDF, contrôle l'accessibilité (PDF/UA) et signe (PAdES), dans le navigateur.
              </p>
            </div>

            <div className="bg-white border border-[#e2e8f0] rounded-[12px] p-6">
              <div className="flex items-center gap-2.5 mb-2">
                <Layers className="w-5 h-5 text-[#037971]" />
                <h4 className="text-[1.05rem] font-medium text-[#1F4F6E]">AWA Office</h4>
              </div>
              <p className="text-[0.93rem] text-[#475569] leading-[1.6]">
                Lit et écrit les six formats bureautiques, sans LibreOffice ni serveur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOKENS ET RAG */}
      <section className="max-w-[1040px] mx-auto py-14 px-6">
        <h2 className="text-[1.5rem] sm:text-[1.65rem] font-medium text-[#1F4F6E] mb-2">
          Tokens et RAG : ce que la conversion change vraiment
        </h2>
        <p className="text-[#5a7a90] mb-8 max-w-[700px] leading-[1.65]">
          Une IA facture et raisonne au « token ». Plus un document est lourd ou mal structuré, plus il coûte cher et plus l'IA se trompe. Voici ce que nous avons mesuré.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white border border-[#e2e8f0] rounded-[12px] p-6">
            <h3 className="text-[1.08rem] font-medium text-[#1F4F6E] mb-2">Notre mesure</h3>
            <p className="text-[0.92rem] text-[#475569] mb-3">
              Rapport de 39 pages (PDF, 773 Ko) :
            </p>
            <table className="w-full text-[0.88rem] border-collapse">
              <tbody>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="py-2 text-[#475569]">PDF d'origine</td>
                  <td className="py-2 text-right font-medium text-[#1F4F6E]">773 Ko (binaire)</td>
                </tr>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="py-2 text-[#475569]">Texte brut extrait</td>
                  <td className="py-2 text-right font-medium text-[#1F4F6E]">77 794 caractères</td>
                </tr>
                <tr>
                  <td className="py-2 text-[#475569]">Markdown AWA structuré</td>
                  <td className="py-2 text-right font-medium text-[#037971]">
                    86 187 car. · 309 blocs
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-[#64748b] mt-3">
              Conversion en moins d'une seconde, en local.
            </p>
          </div>

          <div className="bg-white border border-[#e2e8f0] rounded-[12px] p-6">
            <h3 className="text-[1.08rem] font-medium text-[#1F4F6E] mb-2">Ce que ça veut dire</h3>
            <p className="text-[0.93rem] text-[#475569] leading-[1.65]">
              Face à une simple extraction de texte, le Markdown n'est pas plus court. Son intérêt est ailleurs : il rend lisibles les formats que l'IA lit mal (PDF, PowerPoint, Word) et il <strong className="font-medium text-[#1F4F6E]">garde la structure</strong> : titres, sections, tableaux.
            </p>
          </div>

          <div className="bg-white border border-[#e2e8f0] rounded-[12px] p-6">
            <h3 className="text-[1.08rem] font-medium text-[#1F4F6E] mb-2">
              Là où l'économie se fait
            </h3>
            <p className="text-[0.93rem] text-[#475569] leading-[1.65]">
              Une fois le document structuré, l'IA n'a plus besoin de le lire en entier. On ne lui transmet que les sections utiles : environ 1 000 à 3 000 tokens pour une question précise, contre 25 000 pour le rapport complet.
            </p>
          </div>
        </div>

        <h3 className="text-[1.2rem] font-medium text-[#1F4F6E] mt-10 mb-4">
          Dans un pipeline RAG
        </h3>

        <div className="flex flex-col md:flex-row items-stretch gap-3">
          {[
            { icon: FileText, title: '1. Convertir', sub: 'AWA Convert → Markdown' },
            { icon: Scissors, title: '2. Découper', sub: 'par titres, pas au hasard' },
            { icon: Database, title: '3. Indexer', sub: 'base vectorielle' },
            { icon: Search, title: '4. Retrouver', sub: '2 à 5 passages' },
            { icon: Sparkles, title: '5. Répondre', sub: "l'IA cite sa source" }
          ].map((step, idx, arr) => {
            const StepIcon = step.icon;
            return (
              <React.Fragment key={step.title}>
                <div className="flex-1 bg-[#f0f9f8] border border-[#02ADAB]/25 rounded-[10px] p-4 text-center flex flex-col items-center justify-center">
                  <StepIcon className="w-5 h-5 text-[#037971] mb-2" />
                  <div className="font-medium text-sm text-[#1F4F6E]">{step.title}</div>
                  <div className="text-xs text-[#475569] mt-0.5">{step.sub}</div>
                </div>
                {idx < arr.length - 1 && (
                  <div className="hidden md:flex items-center justify-center text-[#037971]">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <p className="text-[0.95rem] text-[#5a7a90] mt-5 max-w-[780px] leading-[1.65]">
          Le découpage par section est la vraie valeur : un passage retrouvé garde son titre et son contexte, donc l'IA répond mieux et on peut vérifier d'où vient la réponse. Limite connue : les tableurs très denses (XLSX) ne gagnent rien à la conversion.
        </p>
      </section>

      {/* LES USAGES AVEC ALKYMYA */}
      <section className="max-w-[1040px] mx-auto pb-14 px-6">
        <h2 className="text-[1.5rem] sm:text-[1.65rem] font-medium text-[#1F4F6E] mb-2">
          Les usages avec Alkymya
        </h2>
        <p className="text-[#5a7a90] mb-8 max-w-[680px] leading-[1.65]">
          Comment nous l'utilisons concrètement, et comment vos équipes peuvent le faire.
        </p>

        <div className="flex flex-col md:flex-row items-stretch gap-3 mb-8">
          {[
            { icon: FileText, title: 'Vos documents', sub: 'PDF, Word, PPT, Excel' },
            { icon: FileCode2, title: 'AWA Convert', sub: 'Markdown propre, en local' },
            { icon: Sparkles, title: 'Votre IA', sub: 'lit, résume, interroge' },
            { icon: CheckCircle2, title: 'Livrables', sub: 'DOCX, PDF, ODT' }
          ].map((step, idx, arr) => {
            const StepIcon = step.icon;
            return (
              <React.Fragment key={step.title}>
                <div className="flex-1 bg-[#f0f9f8] border border-[#02ADAB]/25 rounded-[10px] p-4 text-center flex flex-col items-center justify-center">
                  <StepIcon className="w-5 h-5 text-[#037971] mb-2" />
                  <div className="font-medium text-sm text-[#1F4F6E]">{step.title}</div>
                  <div className="text-xs text-[#475569] mt-0.5">{step.sub}</div>
                </div>
                {idx < arr.length - 1 && (
                  <div className="hidden md:flex items-center justify-center text-[#037971]">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white border border-[#e2e8f0] rounded-[12px] p-6">
            <h3 className="text-[1.08rem] font-medium text-[#1F4F6E] mb-2">Chez Alkymya</h3>
            <p className="text-[0.93rem] text-[#475569] leading-[1.6]">
              Nous convertissons nos sources avant de les confier à l'IA, puis nous ne lisons que les passages utiles.
            </p>
          </div>

          <div className="bg-white border border-[#e2e8f0] rounded-[12px] p-6">
            <h3 className="text-[1.08rem] font-medium text-[#1F4F6E] mb-2">En entreprise</h3>
            <p className="text-[0.93rem] text-[#475569] leading-[1.6]">
              Alimenter un assistant interne avec vos procédures, contrats ou rapports, sans les envoyer à un service tiers.
            </p>
          </div>

          <div className="bg-white border border-[#e2e8f0] rounded-[12px] p-6">
            <h3 className="text-[1.08rem] font-medium text-[#1F4F6E] mb-2">En formation</h3>
            <p className="text-[0.93rem] text-[#475569] leading-[1.6]">
              Un cas concret pour comprendre le rôle des outils dans un agent IA, et choisir des briques souveraines.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-[1040px] mx-auto pb-14 px-6">
        <div className="bg-[#1F4F6E] text-white rounded-[16px] p-7 sm:p-8 text-center shadow-[0_8px_30px_rgba(31,79,110,0.16)]">
          <h2 className="text-[1.5rem] sm:text-[1.7rem] font-light text-white mb-2">
            Un projet de <strong className="font-medium text-white">documents et d'IA ?</strong>
          </h2>
          <p className="text-[0.95rem] text-white/80 max-w-[540px] mx-auto mb-5 leading-[1.6]">
            Parlons de votre cas : quels documents, quelle confidentialité, quel résultat attendu.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:cyril@alkymya.co"
              className="inline-flex items-center gap-2 bg-[#C06721] hover:bg-[#a85517] text-white px-6 py-3 rounded-[8px] font-medium text-sm transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Prendre rendez-vous</span>
            </a>
            <Link
              to="/ressources/partenaires"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-5 py-3 rounded-[8px] font-medium text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour aux partenaires</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function RessourcesPartenaires() {
  const { partnerSlug } = useParams<{ partnerSlug?: string }>();

  if (partnerSlug === 'awa-cloud' || partnerSlug === 'awacloud') {
    return <AwaCloudDetailView />;
  }

  if (partnerSlug) {
    return (
      <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] flex items-center justify-center px-6 py-24">
        <div className="bg-white rounded-[12px] p-10 max-w-md w-full text-center shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
          <h1 className="text-2xl font-medium text-[#1F4F6E] mb-3">Partenaire introuvable</h1>
          <p className="text-sm text-[#5a7a90] mb-6 leading-relaxed">
            Cette fiche partenaire n'est pas encore publiée ou a été déplacée.
          </p>
          <Link
            to="/ressources/partenaires"
            className="inline-flex items-center gap-2 bg-[#1F4F6E] hover:bg-[#02ADAB] text-white text-sm font-medium py-3 px-6 rounded-[8px] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à Nos partenaires</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Nos Partenaires IA & Technologie | Ressources Alkymya"
        description="Découvrez AWACLOUD, le partenaire technologique recommandé par Alkymya : bibliothèques et logiciels français pour convertir vos documents localement."
        keywords="partenaires IA France, AWACLOUD, Markdown RAG local, souveraineté documentaire, ressources partenaires Alkymya"
        canonicalPath="/ressources/partenaires"
        ogImage="https://res.cloudinary.com/dokzioyu4/image/upload/v1788941703/PHOTO-2026-09-08-06-54-57_ynrbkt.jpg"
        type="CollectionPage"
      />

      {/* HERO HUB PARTENAIRES (MAQUETTE VUE 1) */}
      <header className="bg-gradient-to-br from-[#1F4F6E] to-[#0d3550] text-white py-6 sm:py-7 px-6 sm:px-8 text-center">
        <div className="max-w-[820px] mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-2">
            <Link
              to="/ressources"
              className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/80 hover:text-[#02ADAB] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Toutes les ressources</span>
            </Link>
            <span className="text-white/30">·</span>
            <p className="inline-block text-[0.75rem] tracking-[0.12em] uppercase text-[#02ADAB] bg-[rgba(2,173,171,0.16)] px-2.5 py-0.5 rounded-[5px] font-medium">
              Ressources · Partenaires
            </p>
          </div>

          <h1 className="font-light text-[1.5rem] sm:text-[1.75rem] leading-[1.2] mb-2 text-white">
            Les outils et acteurs avec lesquels{' '}
            <strong className="font-medium text-white">nous travaillons</strong>
          </h1>

          <p className="text-[0.88rem] sm:text-[0.92rem] text-white/80 max-w-[640px] mx-auto leading-[1.5] font-light mb-4">
            Nous ne recommandons que ce que nous utilisons nous-mêmes. Chaque partenaire est présenté avec son rôle réel dans nos projets et nos formations.
          </p>

          <CategoryNavBar activeSlug="partenaires" />
        </div>
      </header>

      {/* GRILLE DES PARTENAIRES */}
      <section className="max-w-[1040px] mx-auto py-14 px-6">
        <h2 className="text-[1.5rem] sm:text-[1.65rem] font-medium text-[#1F4F6E] mb-2">
          Notre partenaire technologique
        </h2>
        <p className="text-[#5a7a90] mb-8 max-w-[680px] leading-[1.65]">
          Un outil choisi pour sa fiabilité, sa souveraineté et son utilité concrète.
        </p>

        <div className="grid grid-cols-1 max-w-[460px] gap-6">
          {partnerCards.map((partner) => {
            const Icon = partner.icon;

            if (partner.available) {
              return (
                <div
                  key={partner.slug}
                  className="group bg-white border border-[#e2e8f0] border-t-4 border-t-[#037971] rounded-[12px] p-6 shadow-[0_2px_12px_rgba(31,79,110,0.06)] hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(31,79,110,0.12)] transition-all duration-200 flex flex-col justify-between text-left"
                >
                  <Link
                    to={`/ressources/partenaires/${partner.slug}`}
                    className="block"
                  >
                    <div className="w-24 h-14 rounded-[8px] bg-[#f8fafc] border border-[#e2e8f0] p-2 flex items-center justify-center mb-4 overflow-hidden">
                      <img
                        src={cloudinaryUrl(partner.logo, 400)}
                        width={96}
                        height={56}
                        loading="lazy"
                        alt={`Logo ${partner.name}`}
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] group-hover:text-[#C06721] transition-colors mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-[0.93rem] text-[#475569] leading-[1.6]">
                      {partner.description}
                    </p>
                  </Link>
                  <div className="pt-4 mt-5 border-t border-[#e2e8f0] flex flex-wrap items-center justify-between gap-2.5">
                    <Link
                      to={`/ressources/partenaires/${partner.slug}`}
                      className="inline-block text-xs font-medium px-3 py-1.5 rounded-[6px] bg-[#e6f4f3] text-[#037971] hover:bg-[#037971] hover:text-white transition-colors"
                    >
                      {partner.statusLabel}
                    </Link>
                    <a
                      href={partner.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1F4F6E] hover:text-[#C06721] transition-colors"
                    >
                      <span>awacloud.com</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={partner.slug}
                className="bg-white/80 border border-[#e2e8f0] border-t-4 border-t-[#cbd5e1] rounded-[12px] p-6 opacity-70 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="w-11 h-11 rounded-[8px] bg-[#f1f5f9] text-[#64748b] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-[0.93rem] text-[#475569] leading-[1.6]">
                    {partner.description}
                  </p>
                </div>
                <div className="pt-4 mt-5">
                  <span className="inline-block text-xs font-medium px-3 py-1.5 rounded-[6px] bg-[#f1f5f9] text-[#64748b]">
                    {partner.statusLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lien vers les autres catégories */}
        <div className="mt-16 pt-10 border-t border-[rgba(31,79,110,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-[#4a6a80]">
            <FolderOpen className="w-4 h-4 text-[#02ADAB]" />
            <span>Vous cherchez nos analyseurs IA, études ou capsules vidéo ?</span>
          </div>
          <Link
            to="/ressources"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#02ADAB] hover:text-[#C06721] transition-colors"
          >
            <span>Voir toutes les catégories de ressources</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
