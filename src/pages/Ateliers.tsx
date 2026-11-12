import React, { useState } from 'react';
import { 
  Archive, 
  Cpu, 
  Rocket, 
  Layers, 
  Calendar, 
  Target, 
  User, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export default function Ateliers() {
  const [activeTab, setActiveTab] = useState<'individuels' | 'collectifs'>('individuels');

  const scrollToSection = (id: 'individuels' | 'collectifs') => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -140;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Nos Ateliers — Alkymya"
        description="Vous repartez avec quelque chose de réel. Pas de slides théoriques. Ateliers individuels et formations d'équipe certifiées Qualiopi finançables OPCO."
      />

      {/* HERO — Exact Maquette */}
      <header className="bg-[#1F4F6E] text-white py-20 px-6 sm:px-10 text-center relative overflow-hidden">
        <div className="max-w-[700px] mx-auto relative z-10">
          <p className="text-[0.85rem] tracking-[0.15em] uppercase text-[#02ADAB] mb-4 font-normal">
            Nos ateliers
          </p>
          <h1 className="font-light text-[2.4rem] sm:text-[2.6rem] leading-[1.2] mb-5 text-white">
            Vous repartez avec <strong className="font-medium text-white">quelque chose de réel.</strong>
          </h1>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-white/75 max-w-[620px] mx-auto leading-[1.7] font-light">
            Pas de slides théoriques. Pas de certificat inutile. À la fin de chaque atelier, vous avez un outil, un site, un agent — ou une offre — qui fonctionne.
          </p>
        </div>
      </header>

      {/* NAV STICKY ATELIERS */}
      <nav className="bg-white border-b border-[rgba(31,79,110,0.1)] flex justify-center sticky top-20 z-40 shadow-xs">
        <button
          type="button"
          onClick={() => scrollToSection('individuels')}
          className={`py-[18px] px-7 text-[0.9rem] font-medium no-underline border-b-3 transition-colors cursor-pointer ${
            activeTab === 'individuels'
              ? 'text-[#1F4F6E] border-b-[#02ADAB]'
              : 'text-[#5a7a90] border-b-transparent hover:text-[#1F4F6E]'
          }`}
        >
          Ateliers individuels
        </button>
        <button
          type="button"
          onClick={() => scrollToSection('collectifs')}
          className={`py-[18px] px-7 text-[0.9rem] font-medium no-underline border-b-3 transition-colors cursor-pointer ${
            activeTab === 'collectifs'
              ? 'text-[#1F4F6E] border-b-[#02ADAB]'
              : 'text-[#5a7a90] border-b-transparent hover:text-[#1F4F6E]'
          }`}
        >
          Formation collective
        </button>
      </nav>

      {/* ATELIERS INDIVIDUELS */}
      <section id="individuels" className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Ateliers individuels
        </p>
        <h2 className="text-[1.9rem] font-light mb-3.5 text-[#1F4F6E] leading-tight">
          Trois parcours,<br />
          <strong className="font-medium text-[#1F4F6E]">un livrable concret à chaque fois</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-12 font-normal">
          Ces ateliers s'adressent aux indépendants, créateurs et dirigeants qui veulent construire quelque chose de personnel — pas former une équipe. On travaille ensemble, sur votre projet, à votre rythme.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

          {/* Atelier 1 : Assets dormants */}
          <div className="bg-white rounded-[12px] overflow-hidden shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="p-7 pb-5 border-b border-[rgba(31,79,110,0.07)]">
                <div className="w-10 h-10 rounded-[8px] bg-[rgba(192,103,33,0.1)] flex items-center justify-center text-[#C06721] mb-3.5">
                  <Archive className="w-5 h-5 text-[#C06721]" />
                </div>
                <span className="inline-block text-[0.72rem] font-medium tracking-[0.1em] uppercase py-1 px-2.5 rounded-[4px] mb-3 bg-[rgba(192,103,33,0.12)] text-[#C06721]">
                  Nouveau
                </span>
                <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-2">
                  Vos archives en ligne
                </h3>
                <p className="text-[1rem] text-[#C06721] font-normal leading-[1.4] mb-0">
                  Transformez vos photos, vidéos ou écrits dormants en un site qui attire une audience.
                </p>
              </div>

              <div className="p-6 sm:p-7 pb-4">
                <p className="text-[0.95rem] text-[#5a7a90] leading-[1.7] mb-5 font-normal">
                  Vous avez des centaines d'œuvres, de photos, d'archives — et personne ne les voit. En 3 séances, on construit ensemble un site éditorial structuré, indexé par Google et les IA génératives, qui donne une seconde vie à votre contenu.
                </p>

                <div className="flex flex-col gap-2 mb-5">
                  <div className="flex gap-2.5 items-start text-[0.88rem]">
                    <Calendar className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                    <span className="text-[#4a6a80] leading-[1.5]">3 séances de 2h + accompagnement async</span>
                  </div>
                  <div className="flex gap-2.5 items-start text-[0.88rem]">
                    <Target className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                    <span className="text-[#4a6a80] leading-[1.5]">Site live, référencé, avec vos propres contenus</span>
                  </div>
                  <div className="flex gap-2.5 items-start text-[0.88rem]">
                    <User className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                    <span className="text-[#4a6a80] leading-[1.5]">Photographes, artistes, auteurs, collectionneurs</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#f0f8f8] to-[#e8f4f4] border-l-3 border-[#02ADAB] rounded-r-[6px] p-3 text-[0.88rem] text-[#1F4F6E] leading-[1.5] mb-4">
                  <strong className="font-medium text-[#1F4F6E]">Exemple réel :</strong> TheLittle83 — 600 photos de terrain transformées en atlas naturalist bilingue, référencé par Google AI en moins d'une heure après mise en ligne. Construit en 24h.
                </div>
              </div>
            </div>

            <div className="p-5 sm:px-7 border-t border-[rgba(31,79,110,0.07)]">
              <div className="text-[1.4rem] font-medium text-[#1F4F6E] mb-1">1 500 € HT</div>
              <div className="text-[0.8rem] text-[#7a9ab0] mb-4">Financement OPCO possible selon statut</div>
              <Link
                to="/contact"
                className="block text-center bg-[#1F4F6E] hover:bg-[#02ADAB] text-white py-3 px-5 rounded-[8px] text-[0.9rem] font-medium no-underline transition-colors"
              >
                Prendre contact →
              </Link>
            </div>
          </div>

          {/* Atelier 2 : Construire son outil IA */}
          <div className="bg-white rounded-[12px] overflow-hidden shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="p-7 pb-5 border-b border-[rgba(31,79,110,0.07)]">
                <div className="w-10 h-10 rounded-[8px] bg-[rgba(3,121,113,0.1)] flex items-center justify-center text-[#037971] mb-3.5">
                  <Cpu className="w-5 h-5 text-[#037971]" />
                </div>
                <span className="inline-block text-[0.72rem] font-medium tracking-[0.1em] uppercase py-1 px-2.5 rounded-[4px] mb-3 bg-[rgba(3,121,113,0.12)] text-[#037971]">
                  Signature
                </span>
                <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-2">
                  Construire son outil IA
                </h3>
                <p className="text-[1rem] text-[#C06721] font-normal leading-[1.4] mb-0">
                  Un système expert, un agent ou une mini-app — conçu pour votre métier, par vous.
                </p>
              </div>

              <div className="p-6 sm:p-7 pb-4">
                <p className="text-[0.95rem] text-[#5a7a90] leading-[1.7] mb-5 font-normal">
                  Vous avez une expertise, des règles métier, des connaissances que vous voulez rendre accessibles ou automatiser. On conçoit ensemble l'architecture, on construit l'outil, et vous repartez autonome — capable de le faire évoluer seul.
                </p>

                <div className="flex flex-col gap-2 mb-5">
                  <div className="flex gap-2.5 items-start text-[0.88rem]">
                    <Calendar className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                    <span className="text-[#4a6a80] leading-[1.5]">4 à 6 séances de 2h selon complexité</span>
                  </div>
                  <div className="flex gap-2.5 items-start text-[0.88rem]">
                    <Target className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                    <span className="text-[#4a6a80] leading-[1.5]">Outil fonctionnel + documentation + autonomie</span>
                  </div>
                  <div className="flex gap-2.5 items-start text-[0.88rem]">
                    <User className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                    <span className="text-[#4a6a80] leading-[1.5]">Thérapeutes, coachs, consultants, experts métier</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#f0f8f8] to-[#e8f4f4] border-l-3 border-[#02ADAB] rounded-r-[6px] p-3 text-[0.88rem] text-[#1F4F6E] leading-[1.5] mb-4">
                  <strong className="font-medium text-[#1F4F6E]">Exemple réel :</strong> Système expert aidants familiaux — moteur de règles métier + base de connaissances + interface conversationnelle. Véronique Landreau, fondatrice AvecLouise.
                </div>
              </div>
            </div>

            <div className="p-5 sm:px-7 border-t border-[rgba(31,79,110,0.07)]">
              <div className="text-[1.4rem] font-medium text-[#1F4F6E] mb-1">Sur devis</div>
              <div className="text-[0.8rem] text-[#7a9ab0] mb-4">À partir de 2 000 € HT selon périmètre</div>
              <Link
                to="/contact"
                className="block text-center bg-[#1F4F6E] hover:bg-[#02ADAB] text-white py-3 px-5 rounded-[8px] text-[0.9rem] font-medium no-underline transition-colors"
              >
                Discutons de votre projet →
              </Link>
            </div>
          </div>

          {/* Atelier 3 : New Business MVP */}
          <div className="bg-white rounded-[12px] overflow-hidden shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="p-7 pb-5 border-b border-[rgba(31,79,110,0.07)]">
                <div className="w-10 h-10 rounded-[8px] bg-[rgba(3,121,113,0.1)] flex items-center justify-center text-[#037971] mb-3.5">
                  <Rocket className="w-5 h-5 text-[#037971]" />
                </div>
                <span className="inline-block text-[0.72rem] font-medium tracking-[0.1em] uppercase py-1 px-2.5 rounded-[4px] mb-3 bg-[rgba(3,121,113,0.12)] text-[#037971]">
                  Programme long
                </span>
                <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-2">
                  New Business MVP
                </h3>
                <p className="text-[1rem] text-[#C06721] font-normal leading-[1.4] mb-0">
                  De l'idée à la première vente — en 6 mois, avec l'IA comme accélérateur.
                </p>
              </div>

              <div className="p-6 sm:p-7 pb-4">
                <p className="text-[0.95rem] text-[#5a7a90] leading-[1.7] mb-5 font-normal">
                  Un accompagnement mensuel pour structurer votre offre, tester votre marché en quelques jours (pas en 3 mois), et passer à l'action. Chaque séance produit un livrable concret : persona validé, landing page live, premier client contacté.
                </p>

                <div className="flex flex-col gap-2 mb-5">
                  <div className="flex gap-2.5 items-start text-[0.88rem]">
                    <Calendar className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                    <span className="text-[#4a6a80] leading-[1.5]">1 séance/mois × 6 mois + suivi async</span>
                  </div>
                  <div className="flex gap-2.5 items-start text-[0.88rem]">
                    <Target className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                    <span className="text-[#4a6a80] leading-[1.5]">Offre structurée, marché validé, premiers clients</span>
                  </div>
                  <div className="flex gap-2.5 items-start text-[0.88rem]">
                    <User className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                    <span className="text-[#4a6a80] leading-[1.5]">Indépendants, dirigeants qui lancent une nouvelle activité</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#f0f8f8] to-[#e8f4f4] border-l-3 border-[#02ADAB] rounded-r-[6px] p-3 text-[0.88rem] text-[#1F4F6E] leading-[1.5] mb-4">
                  <strong className="font-medium text-[#1F4F6E]">L'IA change tout ici :</strong> ce qui prenait 6 mois de terrain se fait en quelques jours d'analyse marché. Vous prenez des décisions sur des faits, pas des intuitions.
                </div>
              </div>
            </div>

            <div className="p-5 sm:px-7 border-t border-[rgba(31,79,110,0.07)]">
              <div className="text-[1.4rem] font-medium text-[#1F4F6E] mb-1">500 € HT / mois</div>
              <div className="text-[0.8rem] text-[#7a9ab0] mb-4">Engagement 6 mois · soit 3 000 € HT</div>
              <Link
                to="/newbusiness"
                className="block text-center bg-[#1F4F6E] hover:bg-[#02ADAB] text-white py-3 px-5 rounded-[8px] text-[0.9rem] font-medium no-underline transition-colors"
              >
                Voir le programme →
              </Link>
            </div>
          </div>

          {/* Atelier 4 : Capital IA */}
          <div className="bg-white rounded-[12px] overflow-hidden shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="p-7 pb-5 border-b border-[rgba(31,79,110,0.07)]">
                <div className="w-10 h-10 rounded-[8px] bg-[rgba(31,79,110,0.1)] flex items-center justify-center text-[#1F4F6E] mb-3.5">
                  <Layers className="w-5 h-5 text-[#1F4F6E]" />
                </div>
                <span className="inline-block text-[0.72rem] font-medium tracking-[0.1em] uppercase py-1 px-2.5 rounded-[4px] mb-3 bg-[rgba(31,79,110,0.1)] text-[#1F4F6E]">
                  Diagnostic
                </span>
                <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-2">
                  Construire son Capital IA
                </h3>
                <p className="text-[1rem] text-[#C06721] font-normal leading-[1.4] mb-0">
                  Auditez vos données, choisissez vos outils, identifiez les 3 processus à transformer en priorité.
                </p>
              </div>

              <div className="p-6 sm:p-7 pb-4">
                <p className="text-[0.95rem] text-[#5a7a90] leading-[1.7] mb-5 font-normal">
                  Une journée pour faire l'état des lieux de votre potentiel IA : données disponibles, processus automatisables, outils adaptés à votre taille et votre secteur. Vous repartez avec une feuille de route 6-12 mois — et les priorités clairement arbitrées.
                </p>

                <div className="flex flex-col gap-2 mb-5">
                  <div className="flex gap-2.5 items-start text-[0.88rem]">
                    <Calendar className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                    <span className="text-[#4a6a80] leading-[1.5]">1 journée d'audit + restitution écrite</span>
                  </div>
                  <div className="flex gap-2.5 items-start text-[0.88rem]">
                    <Target className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                    <span className="text-[#4a6a80] leading-[1.5]">Feuille de route IA priorisée + choix technologiques</span>
                  </div>
                  <div className="flex gap-2.5 items-start text-[0.88rem]">
                    <User className="w-4 h-4 text-[#02ADAB] shrink-0 mt-0.5" />
                    <span className="text-[#4a6a80] leading-[1.5]">Dirigeants PME, DSI, cabinets de conseil</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#f0f8f8] to-[#e8f4f4] border-l-3 border-[#02ADAB] rounded-r-[6px] p-3 text-[0.88rem] text-[#1F4F6E] leading-[1.5] mb-4">
                  <strong className="font-medium text-[#1F4F6E]">Ce qui change tout :</strong> l'analyse de marché et le benchmark concurrentiel sont faits avant la journée — vous arrivez avec les faits, pas les intuitions.
                </div>
              </div>
            </div>

            <div className="p-5 sm:px-7 border-t border-[rgba(31,79,110,0.07)]">
              <div className="text-[1.4rem] font-medium text-[#1F4F6E] mb-1">3 000 – 5 000 € HT</div>
              <div className="text-[0.8rem] text-[#7a9ab0] mb-4">Selon périmètre et taille de l'organisation</div>
              <Link
                to="/contact"
                className="block text-center bg-[#1F4F6E] hover:bg-[#02ADAB] text-white py-3 px-5 rounded-[8px] text-[0.9rem] font-medium no-underline transition-colors"
              >
                Demander un audit →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* FORMATION COLLECTIVE */}
      <div className="bg-white py-[70px]" id="collectifs">
        <div className="max-w-[1100px] mx-auto px-6">
          <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
            Formation collective
          </p>
          <h2 className="text-[1.9rem] font-light mb-3.5 text-[#1F4F6E] leading-tight">
            Pour les équipes qui veulent <strong className="font-medium text-[#1F4F6E]">passer à l'action</strong>
          </h2>
          <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-12 font-normal">
            Formation certifiée Qualiopi, finançable OPCO jusqu'à 100%. 80% de pratique, 20% de méthode. Vos équipes repartent avec des outils branchés sur leurs vraies tâches.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Colonne gauche : Chiffres & Preuves */}
            <div>
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-[#f4f8fb] rounded-[10px] p-5">
                  <div className="text-[1.5rem] font-medium text-[#1F4F6E] leading-none mb-1">99,3%</div>
                  <div className="text-[0.82rem] text-[#7a9ab0] leading-snug">de participants recommandent nos ateliers</div>
                </div>
                <div className="bg-[#f4f8fb] rounded-[10px] p-5">
                  <div className="text-[1.5rem] font-medium text-[#1F4F6E] leading-none mb-1">175+</div>
                  <div className="text-[0.82rem] text-[#7a9ab0] leading-snug">professionnels formés</div>
                </div>
                <div className="bg-[#f4f8fb] rounded-[10px] p-5">
                  <div className="text-[1.5rem] font-medium text-[#1F4F6E] leading-none mb-1">1-2j</div>
                  <div className="text-[0.82rem] text-[#7a9ab0] leading-snug">économisés par semaine en moyenne</div>
                </div>
                <div className="bg-[#f4f8fb] rounded-[10px] p-5">
                  <div className="text-[1.5rem] font-medium text-[#1F4F6E] leading-none mb-1">100%</div>
                  <div className="text-[0.82rem] text-[#7a9ab0] leading-snug">financement OPCO possible</div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-[rgba(3,121,113,0.1)] text-[#037971] py-2.5 px-4 rounded-[8px] text-[0.88rem] font-medium mb-6">
                <CheckCircle2 className="w-4 h-4 text-[#037971] shrink-0" />
                <span>Certification Qualiopi · Financement OPCO jusqu'à 100%</span>
              </div>

              <p className="text-[0.9rem] text-[#7a9ab0] leading-[1.6]">
                HETIC, Ynov, l'IÉSEG, le CFA Itis nous confient régulièrement leurs promotions. Nos formations s'adaptent à vos locaux, à distance ou en mode hybride.
              </p>
            </div>

            {/* Colonne droite : Modules & Devis */}
            <div>
              <ul className="list-none flex flex-col gap-3 mb-7 p-0">
                <li className="flex gap-3.5 items-start bg-[#f9fbfc] rounded-[8px] p-3.5 sm:p-4">
                  <span className="bg-[#1F4F6E] text-white rounded-[6px] text-[0.72rem] font-medium py-1 px-2 whitespace-nowrap shrink-0">
                    Core · 14h
                  </span>
                  <div>
                    <div className="text-[0.95rem] font-medium text-[#1F4F6E]">Formation Core IA</div>
                    <div className="text-[0.85rem] text-[#7a9ab0] leading-[1.5] mt-0.5">
                      Prompts maîtres, workflows IA, outils opérationnels. Le socle indispensable — praticable dès le lendemain.
                    </div>
                  </div>
                </li>

                <li className="flex gap-3.5 items-start bg-[#f9fbfc] rounded-[8px] p-3.5 sm:p-4">
                  <span className="bg-[#1F4F6E] text-white rounded-[6px] text-[0.72rem] font-medium py-1 px-2 whitespace-nowrap shrink-0">
                    Option A · 3h30
                  </span>
                  <div>
                    <div className="text-[0.95rem] font-medium text-[#1F4F6E]">Agents IA</div>
                    <div className="text-[0.85rem] text-[#7a9ab0] leading-[1.5] mt-0.5">
                      3 agents autonomes déployés et connectés à vos outils (Slack, Notion, CRM) avant la fin de la séance.
                    </div>
                  </div>
                </li>

                <li className="flex gap-3.5 items-start bg-[#f9fbfc] rounded-[8px] p-3.5 sm:p-4">
                  <span className="bg-[#1F4F6E] text-white rounded-[6px] text-[0.72rem] font-medium py-1 px-2 whitespace-nowrap shrink-0">
                    Option B · 3h30
                  </span>
                  <div>
                    <div className="text-[0.95rem] font-medium text-[#1F4F6E]">App No-Code</div>
                    <div className="text-[0.85rem] text-[#7a9ab0] leading-[1.5] mt-0.5">
                      Une application web interne déployée sur URL sécurisée, interconnectée à Gemini ou GPT.
                    </div>
                  </div>
                </li>

                <li className="flex gap-3.5 items-start bg-[#f9fbfc] rounded-[8px] p-3.5 sm:p-4">
                  <span className="bg-[#1F4F6E] text-white rounded-[6px] text-[0.72rem] font-medium py-1 px-2 whitespace-nowrap shrink-0">
                    Option C · 3h30
                  </span>
                  <div>
                    <div className="text-[0.95rem] font-medium text-[#1F4F6E]">Éthique &amp; IA Act</div>
                    <div className="text-[0.85rem] text-[#7a9ab0] leading-[1.5] mt-0.5">
                      Conformité réglementaire, classification des risques, sécurisation des données d'entreprise.
                    </div>
                  </div>
                </li>
              </ul>

              <Link
                to="/contact"
                className="block text-center no-underline bg-[#1F4F6E] hover:bg-[#02ADAB] text-white py-3.5 px-6 rounded-[8px] font-medium text-[0.95rem] transition-colors"
              >
                Demander un devis →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA FINAL — Exact Maquette Orange #C06721 */}
      <div className="bg-[#C06721] text-white text-center py-[70px] px-10">
        <h2 className="text-[2rem] font-light mb-3.5 text-white">
          Pas sûr de quel atelier <strong className="font-medium text-white">vous convient ?</strong>
        </h2>
        <p className="text-[1.05rem] text-white/80 max-w-[480px] mx-auto mb-8 leading-[1.7] font-light">
          On fait un point de 30 minutes ensemble. Vous repartez avec une recommandation claire — même si ce n'est pas chez nous.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-[#C06721] text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
        >
          Prendre rendez-vous →
        </Link>
      </div>
    </div>
  );
}
