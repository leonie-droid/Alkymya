import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  Target, 
  Layers, 
  DollarSign, 
  Presentation, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Users, 
  ShieldCheck, 
  Sparkles,
  Wallet,
  Send,
  Loader2,
  Calendar,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const steps = [
  {
    month: "Mois 1",
    title: "Cadrer l'ICP & Habitudes de dépenses",
    subtitle: "Qui paie vraiment et pourquoi ?",
    description: "Cartographie chirurgicale de votre profil client idéal (B2B ou B2C). Analyse des budgets existants et des solutions alternatives déjà payées pour s'insérer dans un flux financier prouvé plutôt que d'espérer un comportement nouveau.",
    icon: Target,
    deliverables: ["Fiche Profil Client Idéal (ICP)", "Cartographie des arbitrages budgétaires", "Scénario d'interview terrain"]
  },
  {
    month: "Mois 2",
    title: "Proposition de Valeur & Arbitrage",
    subtitle: "Distinguer le cœur indispensable du superflu",
    description: "Élagage impitoyable de l'offre : identification de la valeur unique immédiate et suppression drastique des fonctionnalités accessoires pour bâtir un MVP concentré, percutant et testable en quelques semaines.",
    icon: Layers,
    deliverables: ["Matrice valeur / complexité", "Offre minimale testable", "Argumentaire de proposition de valeur"]
  },
  {
    month: "Mois 3",
    title: "Construction du MVP Opérationnel",
    subtitle: "Votre premier produit testable en ligne",
    description: "Assemblage rapide de votre vitrine ou prototype opérationnel avec les outils digitaux et IA modernes, sans coûts de développement superflus ni engagement contractuel lourd.",
    icon: Rocket,
    deliverables: ["MVP digital en ligne", "Parcours client fonctionnel", "Mécanique de capture de leads"]
  },
  {
    month: "Mois 4",
    title: "Tarification & Routine Entrepreneuriale",
    subtitle: "Modélisation tarifaire & rituels de pilotage",
    description: "Définition du modèle de revenus, tests d'élasticité prix sur le terrain et ancrage des rituels hebdomadaires de travail pour maintenir le cap et la discipline d'exécution sans dispersion.",
    icon: DollarSign,
    deliverables: ["Grille tarifaire validée", "Tableau de suivi d'activité", "Routines hebdomadaires formalisées"]
  },
  {
    month: "Mois 5",
    title: "Pitch Partenaires & Investisseurs",
    subtitle: "L'art de convaincre avec des données de terrain",
    description: "Conception d'un pitch deck percutant et d'un discours commercial appuyé sur vos premiers retours utilisateurs réels et preuves de traction concrètes.",
    icon: Presentation,
    deliverables: ["Pitch deck investisseurs & partenaires (10 slides)", "Fiche one-pager synthétique", "Script de pitch oral 3 minutes"]
  },
  {
    month: "Mois 6",
    title: "Décision Data-Driven & Demo Day",
    subtitle: "Continuer, Pivoter ou Accélérer",
    description: "Analyse des métriques d'usage réelles et activation du cadre décisionnel stratégique pour arbitrer avec lucidité : pérenniser, ajuster l'axe ou accélérer les investissements commerciaux.",
    icon: Compass,
    deliverables: ["Boussole décisionnelle (Continuer / Pivoter / Accélérer)", "Bilan de traction chiffré", "Présentation finale Demo Day"]
  }
];

export default function NewBusiness() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    activity: '',
    stage: 'lancement',
    blocker: '',
    availability: '3-4h',
    motivation: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/candidature-cohorte', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de la soumission');
      }

      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Une erreur est survenue lors de l\'envoi de votre candidature.');
    }
  };

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Programme New Business MVP | Alkymya"
        description="L'accompagnement opérationnel de 6 mois pour concevoir votre MVP, tester votre offre auprès de vrais clients avant d'investir, et piloter votre trajectoire grâce à la boussole Continuer, Pivoter ou Accélérer."
      />

      {/* HERO SECTION DESIGN SYSTEM */}
      <header className="bg-[#1F4F6E] text-white py-20 px-6 sm:px-10 text-center relative overflow-hidden">
        <div className="max-w-[740px] mx-auto relative z-10">
          <p className="text-[0.85rem] tracking-[0.15em] uppercase text-[#02ADAB] mb-4 font-normal">
            Programme New Business MVP • 6 Mois d'Accompagnement
          </p>

          <h1 className="font-light text-[2.4rem] sm:text-[2.6rem] leading-[1.2] mb-5 text-white">
            New Business MVP —<br />
            <strong className="font-medium text-white">De l'idée à la validation client.</strong>
          </h1>

          <p className="text-[1.05rem] sm:text-[1.1rem] text-white/75 max-w-[640px] mx-auto leading-[1.7] font-light mb-8">
            L'accompagnement opérationnel sur 6 mois pour concevoir votre MVP, tester votre offre auprès de vrais clients avant d'investir, et arbitrer avec lucidité grâce à la boussole : <span className="text-white font-medium">Continuer, Pivoter ou Accélérer</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-normal text-white/90 mb-8">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-[6px] border border-white/15">
              <Clock className="w-4 h-4 text-[#02ADAB]" />
              <span>6 mois intensifs (3 à 4h / sem.)</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-[6px] border border-white/15">
              <Users className="w-4 h-4 text-[#02ADAB]" />
              <span>Mentorat en binôme d'experts</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-[6px] border border-white/15">
              <ShieldCheck className="w-4 h-4 text-[#C06721]" />
              <span>Tarif transparent : 200 € / mois</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#candidature"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#C06721] text-white font-medium text-sm rounded-[8px] hover:bg-[#a85517] transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>Déposer ma candidature</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/ateliers"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 text-white font-medium text-sm rounded-[8px] border border-white/25 hover:bg-white/20 transition-all flex items-center justify-center"
            >
              Voir tous les ateliers IA
            </Link>
          </div>

          {/* Stats Ribbon */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">6 Mois</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Feuille de route pas à pas</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">2 Mentors</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Binôme senior dédié</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-white mb-0.5">200 €/m</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Sans engagement ultérieur</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-light text-[#02ADAB] mb-0.5">1 Demo Day</div>
              <div className="text-xs text-white/70 font-normal uppercase tracking-wider">Pitch investisseurs &amp; clients</div>
            </div>
          </div>
        </div>
      </header>

      {/* CURRICULUM 6 MOIS */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Méthodologie Opérationnelle
        </p>
        <h2 className="text-[1.8rem] sm:text-[2rem] font-light mb-3 text-[#1F4F6E]">
          La feuille de route pas à pas <strong className="font-medium text-[#1F4F6E]">sur 6 mois</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-12 font-normal">
          Un processus structuré pour tester sur le terrain, confronter les retours réels et éviter le piège classique du développement en vase clos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.month} className="rounded-[12px] shadow-[0_2px_16px_rgba(31,79,110,0.08)] hover:shadow-[0_8px_32px_rgba(31,79,110,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between p-7 bg-white">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-[4px] bg-[#f4f6f9] text-[#1F4F6E] text-xs font-medium uppercase tracking-wider">
                      {step.month}
                    </span>
                    <div className="w-10 h-10 rounded-[8px] bg-[#02ADAB]/15 flex items-center justify-center text-[#02ADAB]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-[1.1rem] font-medium text-[#1F4F6E] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs font-medium text-[#C06721] uppercase tracking-wide mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-[0.92rem] text-[#5a7a90] leading-[1.6] mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[rgba(31,79,110,0.08)]">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#1F4F6E] mb-2">
                    Livrables clés :
                  </p>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#5a7a90]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#02ADAB] shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* KIT DE LANCEMENT */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <div className="rounded-[12px] bg-white p-8 md:p-12 shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
          <div className="mb-10">
            <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
              Pack Prêt à l'Emploi
            </p>
            <h2 className="text-[1.8rem] sm:text-[2rem] font-light text-[#1F4F6E]">
              Ce que vous obtenez <strong className="font-medium text-[#1F4F6E]">à l'issue des 6 mois</strong>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Profil Client Idéal (ICP)", desc: "Cartographie complète de vos clients cibles, budgets réels et arbitrages d'achat." },
              { title: "MVP Opérationnel en Ligne", desc: "Votre produit ou offre déployée et accessible immédiatement pour capter des intentions d'achat." },
              { title: "Grille Tarifaire Testée", desc: "Une tarification confrontée au marché avec arguments de négociation éprouvés." },
              { title: "Pitch Deck Investisseurs", desc: "Support visuel synthétique de 10 slides avec métriques de traction concrètes." },
              { title: "Boussole Décisionnelle", desc: "Matrice stratégique pour savoir avec certitude quand continuer, pivoter ou accélérer." },
              { title: "Routine Entrepreneuriale", desc: "Rituels de travail hebdomadaires pour continuer à exécuter efficacement sans dispersion." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#f4f6f9] p-6 rounded-[8px] flex items-start gap-4">
                <div className="w-8 h-8 rounded-[6px] bg-[#02ADAB]/15 text-[#037971] flex items-center justify-center font-medium shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-medium text-[#1F4F6E] text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-[#5a7a90] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* VOS MENTORS */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Encadrement d'Excellence
        </p>
        <h2 className="text-[1.8rem] sm:text-[2rem] font-light mb-3 text-[#1F4F6E]">
          Vos mentors <strong className="font-medium text-[#1F4F6E]">en binôme</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-10 font-normal">
          Bénéficiez de la double expertise de nos formateurs seniors durant tout le parcours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src="https://res.cloudinary.com/dokzioyu4/image/upload/v1758192982/66cffcd8-15f1-415f-b423-9f428d63e22f_gqjd53.png"
              alt="Cyril Garnier"
              className="w-24 h-24 rounded-[10px] object-cover shrink-0 border border-[rgba(31,79,110,0.12)]"
            />
            <div>
              <h3 className="text-[1.2rem] font-medium text-[#1F4F6E]">Cyril Garnier</h3>
              <p className="text-xs font-medium text-[#C06721] uppercase tracking-wider mb-3">
                Expert Stratégie &amp; Innovation IA
              </p>
              <p className="text-[0.9rem] text-[#5a7a90] leading-[1.6] font-normal">
                Consultant et enseignant certifié dans les grandes écoles. Cyril pilote l'alignement stratégique, la viabilité économique des modèles d'affaires et la conduite du changement par l'IA.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src="https://res.cloudinary.com/dokzioyu4/image/upload/v1758192982/c4f25b29-1634-44bf-a6d1-41f2378fbb4d_j10d8m.png"
              alt="Léonie Egesipe"
              className="w-24 h-24 rounded-[10px] object-cover shrink-0 border border-[rgba(31,79,110,0.12)]"
            />
            <div>
              <h3 className="text-[1.2rem] font-medium text-[#1F4F6E]">Léonie Egesipe</h3>
              <p className="text-xs font-medium text-[#C06721] uppercase tracking-wider mb-3">
                Directrice Artistique &amp; Création IA
              </p>
              <p className="text-[0.9rem] text-[#5a7a90] leading-[1.6] font-normal">
                Experte en identité visuelle, scénarisation et outils génératifs. Léonie apporte une exigence esthétique et ergonomique essentielle pour rendre votre MVP captivant et crédible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFS & TRANSPARENCE — SECTION SOMBRE #1F4F6E */}
      <div className="bg-[#1F4F6E] text-white py-[70px]">
        <section className="max-w-[1100px] mx-auto px-6 text-center">
          <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
            Tarif Unique &amp; Transparent
          </p>
          <h2 className="text-[2rem] font-light text-white mb-4">
            <strong className="font-medium text-white">200 € / mois</strong> sur 6 mois
          </h2>
          <p className="text-white/75 text-[1.05rem] max-w-[600px] mx-auto mb-8 leading-[1.7] font-light">
            Un accompagnement complet et sans mauvaise surprise. Aucun engagement au-delà des 6 mois, aucun frais caché.
          </p>

          <div className="bg-white/[0.07] p-6 sm:p-8 rounded-[12px] border border-white/10 max-w-xl mx-auto text-left space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#02ADAB] shrink-0" />
              <span>Mentorat direct bimensuel par Cyril Garnier &amp; Léonie Egesipe</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#02ADAB] shrink-0" />
              <span>Accès continu aux ressources, canevas et sessions de revue asynchrones</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#C06721] shrink-0" />
              <span>Coût total de l'accompagnement : 1 200 € HT (échelonné à 200 € / mois)</span>
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center gap-2.5 text-xs text-[#02ADAB] font-medium">
              <Wallet className="w-4 h-4 shrink-0" />
              <span>Prévoir un budget de 50€ à 150€ pour les abonnements et crédits d'outils d'IA utiles aux étapes pratiques.</span>
            </div>
          </div>
        </section>
      </div>

      {/* QUESTIONS & RÉPONSES */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
          Cadre Opérationnel &amp; Démarche
        </p>
        <h2 className="text-[1.8rem] sm:text-[2rem] font-light mb-3 text-[#1F4F6E]">
          Tout savoir sur <strong className="font-medium text-[#1F4F6E]">New Business MVP</strong>
        </h2>
        <p className="text-[1.05rem] text-[#4a6a80] max-w-[640px] leading-[1.7] mb-12 font-normal">
          Cinq questions fondamentales pour évaluer l'adéquation de votre projet avec notre accompagnement.
        </p>

        <div className="space-y-5">
          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
            <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-[8px] bg-[#02ADAB]/15 text-[#02ADAB] text-sm font-medium flex items-center justify-center shrink-0">1</span>
              À qui s'adresse l'offre New Business MVP ?
            </h3>
            <div className="space-y-3 text-[#5a7a90] leading-[1.65] text-[0.95rem]">
              <p>
                Ce programme s'adresse aux créateurs d'entreprise, consultants indépendants en phase de lancement, repreneurs, intrapreneurs et professionnels porteurs d'un projet innovant qui refusent de s'enfermer dans l'effet tunnel du développement solitaire.
              </p>
              <ul className="space-y-1.5 pl-4 border-l-2 border-[#02ADAB]/40 text-[#4a6a80] text-sm">
                <li>• <strong className="font-medium text-[#1F4F6E]">Solopreneurs et indépendants :</strong> passer du statut de prestataire à la vente d'une offre packagée et testée.</li>
                <li>• <strong className="font-medium text-[#1F4F6E]">Fondateurs de projets :</strong> confronter immédiatement leur hypothèse au terrain et signer leurs premiers clients payants.</li>
                <li>• <strong className="font-medium text-[#1F4F6E]">Professionnels en reconversion :</strong> acquérir une routine entrepreneuriale rigoureuse guidée par des mentors chevronnés.</li>
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
            <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-[8px] bg-[#02ADAB]/15 text-[#02ADAB] text-sm font-medium flex items-center justify-center shrink-0">2</span>
              Ce qui vous est concrètement livré mois après mois
            </h3>
            <div className="space-y-3 text-[#5a7a90] leading-[1.65] text-[0.95rem]">
              <p>
                New Business MVP est un parcours jalonné d'actifs tangibles. Vous ne repartez pas avec de vagues conseils théoriques, mais avec des livrables opérationnels :
              </p>
              <ul className="space-y-1.5 pl-4 border-l-2 border-[#02ADAB]/40 text-[#4a6a80] text-sm">
                <li>• <strong className="font-medium text-[#1F4F6E]">Mois 1 — Fiche Client Idéal (ICP) :</strong> cartographie chirurgicale des budgets existants et scénario d'interviews terrain.</li>
                <li>• <strong className="font-medium text-[#1F4F6E]">Mois 2 — Proposition de Valeur :</strong> matrice valeur/complexité et élagage du superflu.</li>
                <li>• <strong className="font-medium text-[#1F4F6E]">Mois 3 — MVP Opérationnel :</strong> vitrine ou produit fonctionnel déployé avec capture de prospects.</li>
                <li>• <strong className="font-medium text-[#1F4F6E]">Mois 4 — Grille Tarifaire &amp; Rituels :</strong> modélisation du modèle de revenus et routines de pilotage.</li>
                <li>• <strong className="font-medium text-[#1F4F6E]">Mois 5 — Pitch Deck Partenaires (10 slides) :</strong> présentation percutante appuyée sur vos preuves de traction.</li>
                <li>• <strong className="font-medium text-[#1F4F6E]">Mois 6 — Boussole Stratégique &amp; Demo Day :</strong> arbitrage lucide entre Continuer, Pivoter ou Accélérer.</li>
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
            <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-[8px] bg-[#02ADAB]/15 text-[#02ADAB] text-sm font-medium flex items-center justify-center shrink-0">3</span>
              Comment se déroule concrètement l'accompagnement sur 6 mois ?
            </h3>
            <div className="space-y-3 text-[#5a7a90] leading-[1.65] text-[0.95rem]">
              <p>
                L'accompagnement associe deux rendez-vous mensuels stratégiques en visioconférence avec Cyril Garnier et Léonie Egesipe, complétés par des rituels hebdomadaires de suivi asynchrone pour ne jamais laisser un blocage s'installer.
              </p>
              <p>
                Chaque mois est dédié à un palier clair. Entre les sessions, vous appliquez des protocoles d'action guidés sur le terrain. L'effort personnel attendu est de 3 à 4 heures par semaine en plus de vos rendez-vous, ce qui permet de concilier parfaitement le programme avec votre activité professionnelle existante.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
            <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-[8px] bg-[#02ADAB]/15 text-[#02ADAB] text-sm font-medium flex items-center justify-center shrink-0">4</span>
              Ce que la méthode change pour la viabilité de votre projet
            </h3>
            <div className="space-y-3 text-[#5a7a90] leading-[1.65] text-[0.95rem]">
              <p>
                Le risque numéro un de tout projet entrepreneurial n'est pas technique, c'est de construire quelque chose dont personne ne veut au prix fixé. En vous forçant à confronter votre offre à de vrais prospects dès le premier mois, nous supprimons le risque de l'illusion.
              </p>
              <p>
                Notre tarification est totalement transparente et accessible : 200 € / mois pendant 6 mois (soit un coût global de 1 200 € HT sans aucun engagement contractuel au-delà). Vous préservez votre trésorerie et financez votre accélération sur la base de premiers revenus avérés.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
            <h3 className="text-[1.15rem] font-medium text-[#1F4F6E] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-[8px] bg-[#02ADAB]/15 text-[#02ADAB] text-sm font-medium flex items-center justify-center shrink-0">5</span>
              Preuves de terrain, références et mentors engagés
            </h3>
            <div className="space-y-3 text-[#5a7a90] leading-[1.65] text-[0.95rem]">
              <p>
                Le programme s'appuie sur plus de 15 années d'expérience accumulées par Cyril Garnier, ancien directeur général de SNCF Développement où il a supervisé la création de milliers d'emplois et accompagné des centaines de projets vers la viabilité commerciale.
              </p>
              <p>
                Le binôme est renforcé par Léonie Egesipe, directrice artistique et spécialiste de l'ergonomie numérique, garantissant que chaque livrable produit bénéficie d'un niveau d'exécution visuelle et d'expérience utilisateur digne des meilleurs standards du marché.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* FORMULAIRE DE CANDIDATURE */}
      <section className="max-w-[820px] mx-auto py-[70px] px-6" id="candidature">
        <div className="mb-10">
          <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#02ADAB] mb-2.5 font-medium">
            Formulaire de Candidature
          </p>
          <h2 className="text-[1.8rem] sm:text-[2rem] font-light mb-3 text-[#1F4F6E]">
            Postuler au programme <strong className="font-medium text-[#1F4F6E]">New Business MVP</strong>
          </h2>
          <p className="text-[1.05rem] text-[#4a6a80] leading-[1.7] font-normal">
            Répondez à ces quelques questions pour nous permettre d'analyser l'adéquation de votre projet avec le programme.
          </p>
        </div>

        {status === 'success' ? (
          <div className="p-8 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] border border-[#02ADAB]/30 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#02ADAB]/15 text-[#02ADAB] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-medium text-[#1F4F6E]">
              Candidature bien reçue !
            </h3>
            <p className="text-[#5a7a90] text-sm max-w-md mx-auto">
              Merci pour votre démarche. Cyril Garnier et Léonie Egesipe étudieront votre dossier sous 48h et reviendront vers vous pour un échange de qualification.
            </p>
            <div className="pt-4">
              <Link to="/ateliers" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#02ADAB] hover:text-[#037971] transition-colors">
                <span>Découvrir nos autres ateliers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-[12px] shadow-[0_2px_16px_rgba(31,79,110,0.08)] space-y-6">
            {status === 'error' && (
              <div className="p-4 rounded-[8px] bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#1F4F6E] mb-2">
                  Prénom *
                </label>
                <input
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="Votre prénom"
                  className="w-full h-12 px-4 rounded-[8px] border border-[rgba(31,79,110,0.18)] bg-[#f4f6f9] text-sm font-normal focus:outline-none focus:ring-2 focus:ring-[#02ADAB] focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#1F4F6E] mb-2">
                  Nom *
                </label>
                <input
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Votre nom"
                  className="w-full h-12 px-4 rounded-[8px] border border-[rgba(31,79,110,0.18)] bg-[#f4f6f9] text-sm font-normal focus:outline-none focus:ring-2 focus:ring-[#02ADAB] focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-[#1F4F6E] mb-2">
                Email professionnel *
              </label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="votre.email@domaine.com"
                className="w-full h-12 px-4 rounded-[8px] border border-[rgba(31,79,110,0.18)] bg-[#f4f6f9] text-sm font-normal focus:outline-none focus:ring-2 focus:ring-[#02ADAB] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-[#1F4F6E] mb-2">
                Activité actuelle ou projet envisagé *
              </label>
              <input
                required
                value={formData.activity}
                onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                placeholder="Ex : Consultant indépendant, artisan, porteur de projet tech..."
                className="w-full h-12 px-4 rounded-[8px] border border-[rgba(31,79,110,0.18)] bg-[#f4f6f9] text-sm font-normal focus:outline-none focus:ring-2 focus:ring-[#02ADAB] focus:bg-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#1F4F6E] mb-2">
                  Stade de votre projet
                </label>
                <select
                  value={formData.stage}
                  onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                  className="w-full h-12 px-3 rounded-[8px] border border-[rgba(31,79,110,0.18)] bg-[#f4f6f9] text-sm font-normal focus:outline-none focus:ring-2 focus:ring-[#02ADAB] focus:bg-white"
                >
                  <option value="idee">Stade Idée / Réflexion</option>
                  <option value="lancement">Phase de Lancement / MVP</option>
                  <option value="premiers-clients">Premiers clients / Pivot</option>
                  <option value="acceleration">Activité installée à réinventer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#1F4F6E] mb-2">
                  Temps disponible par semaine
                </label>
                <select
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  className="w-full h-12 px-3 rounded-[8px] border border-[rgba(31,79,110,0.18)] bg-[#f4f6f9] text-sm font-normal focus:outline-none focus:ring-2 focus:ring-[#02ADAB] focus:bg-white"
                >
                  <option value="3-4h">3 à 4 heures / semaine</option>
                  <option value="5-8h">5 à 8 heures / semaine</option>
                  <option value="10h+">Plus de 10 heures / semaine</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-[#1F4F6E] mb-2">
                Votre principal obstacle actuel
              </label>
              <input
                value={formData.blocker}
                onChange={(e) => setFormData({ ...formData, blocker: e.target.value })}
                placeholder="Ex : Identifier mon ICP, fixer mon prix, créer un premier MVP sans coder..."
                className="w-full h-12 px-4 rounded-[8px] border border-[rgba(31,79,110,0.18)] bg-[#f4f6f9] text-sm font-normal focus:outline-none focus:ring-2 focus:ring-[#02ADAB] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-[#1F4F6E] mb-2">
                Votre motivation &amp; attentes pour ce programme
              </label>
              <textarea
                rows={4}
                value={formData.motivation}
                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                placeholder="Expliquez en quelques phrases pourquoi ce programme résonne avec vos objectifs actuels..."
                className="w-full p-4 rounded-[8px] border border-[rgba(31,79,110,0.18)] bg-[#f4f6f9] text-sm font-normal focus:outline-none focus:ring-2 focus:ring-[#02ADAB] focus:bg-white resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full h-13 rounded-[8px] bg-[#C06721] text-white font-medium text-sm tracking-[0.04em] hover:bg-[#a85517] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Traitement de votre candidature...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Envoyer ma candidature (200 € / mois)</span>
                </>
              )}
            </button>
          </form>
        )}
      </section>

      {/* SÉPARATEUR */}
      <hr className="border-none border-t border-[rgba(31,79,110,0.1)] mx-6 max-w-[1100px] md:mx-auto" />

      {/* CTA FINAL — Exact Maquette Orange #C06721 */}
      <div className="bg-[#C06721] text-white text-center py-[70px] px-10">
        <p className="text-[0.75rem] tracking-[0.18em] uppercase text-white/80 mb-2.5 font-medium">
          Une question avant de postuler ?
        </p>
        <h2 className="text-[2rem] font-light mb-3.5 text-white">
          Échangez directement <strong className="font-medium text-white">avec Cyril ou Léonie</strong>
        </h2>
        <p className="text-[1.05rem] text-white/85 max-w-[540px] mx-auto mb-8 leading-[1.7] font-light">
          Nous répondons avec franchise sur la pertinence de votre projet par rapport à la méthode avant toute démarche contractuelle.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#C06721] text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
          >
            <span>Poser une question</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#candidature"
            className="inline-block bg-white/10 hover:bg-white/20 text-white text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 border border-white/25"
          >
            Candidater directement
          </a>
        </div>
      </div>
    </div>
  );
}
