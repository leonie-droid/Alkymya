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
  Loader2
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Link } from 'react-router-dom';

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
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden border-b border-border/40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-copper-orange/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-copper-orange/15 border border-copper-orange/30 text-copper-orange text-xs font-black uppercase tracking-widest mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Programme New Business MVP • 6 Mois</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-deep-blue tracking-tight mb-8 leading-[1.1]">
            New Business MVP — De l'idée à la validation client
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground font-normal max-w-3xl mx-auto mb-10 leading-relaxed">
            L'accompagnement opérationnel de 6 mois pour concevoir votre MVP, tester votre offre auprès de vrais clients avant d'investir, et piloter votre trajectoire grâce à la boussole : <strong className="text-deep-blue font-bold">Continuer, Pivoter ou Accélérer</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm font-bold text-deep-blue mb-12">
            <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-border shadow-sm">
              <Clock className="w-4 h-4 text-copper-orange" />
              <span>6 mois intensifs (3 à 4h / sem.)</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-border shadow-sm">
              <Users className="w-4 h-4 text-copper-orange" />
              <span>Mentorat en binôme d'experts</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-border shadow-sm">
              <ShieldCheck className="w-4 h-4 text-copper-orange" />
              <span>Tarif transparent : 200 € / mois</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#candidature"
              className="w-full sm:w-auto px-8 py-4 bg-copper-orange text-white font-black text-xs uppercase tracking-widest rounded-full hover:bg-deep-blue transition-all shadow-xl hover:shadow-copper-orange/20 flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>Déposer ma candidature</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/ateliers"
              className="w-full sm:w-auto px-8 py-4 bg-white text-deep-blue font-black text-xs uppercase tracking-widest rounded-full border border-border hover:bg-slate-50 transition-all flex items-center justify-center"
            >
              Voir tous les ateliers IA
            </Link>
          </div>
        </div>
      </section>

      {/* Curriculum 6 Mois */}
      <section className="py-20 px-4 max-w-6xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-copper-orange">
            Méthodologie Opérationnelle
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-deep-blue mt-3 mb-6">
            La feuille de route pas à pas sur 6 mois
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Un processus structuré pour tester sur le terrain, confronter les retours réels et éviter le piège classique du développement en vase clos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.month} className="rounded-3xl border-border/60 hover:border-copper-orange/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-6 bg-white">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-deep-blue/5 text-deep-blue text-xs font-black uppercase tracking-wider">
                      {step.month}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-copper-orange/10 flex items-center justify-center text-copper-orange">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-black text-deep-blue mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs font-bold text-copper-orange uppercase tracking-wide mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-[11px] font-black uppercase tracking-wider text-deep-blue mb-2">
                    Livrables clés :
                  </p>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-copper-orange shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Kit de Lancement */}
      <section className="py-16 px-4 bg-slate-50 border-y border-border/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-copper-orange">
              Pack Prêt à l'Emploi
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-deep-blue mt-2 mb-4">
              Ce que vous obtenez à l'issue des 6 mois
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
              <div key={idx} className="bg-white p-6 rounded-2xl border border-border/70 shadow-sm flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-copper-orange/15 text-copper-orange flex items-center justify-center font-black shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-heading font-black text-deep-blue text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vos Mentors */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-copper-orange">
            Encadrement d'Excellence
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-deep-blue mt-2 mb-4">
            Vos mentors en binôme
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Bénéficiez de la double expertise de nos formateurs seniors durant tout le parcours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-border/70 shadow-lg flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src="https://res.cloudinary.com/dokzioyu4/image/upload/v1758192982/66cffcd8-15f1-415f-b423-9f428d63e22f_gqjd53.png"
              alt="Cyril Garnier"
              className="w-24 h-24 rounded-2xl object-cover shrink-0 border-2 border-copper-orange/30 shadow-md"
            />
            <div>
              <h3 className="text-2xl font-heading font-black text-deep-blue">Cyril Garnier</h3>
              <p className="text-xs font-bold text-copper-orange uppercase tracking-wider mb-3">
                Expert Stratégie & Innovation IA
              </p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Consultant et enseignant certifié dans les grandes écoles. Cyril pilote l'alignement stratégique, la viabilité économique des modèles d'affaires et la conduite du changement par l'IA.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-border/70 shadow-lg flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src="https://res.cloudinary.com/dokzioyu4/image/upload/v1758192982/c4f25b29-1634-44bf-a6d1-41f2378fbb4d_j10d8m.png"
              alt="Léonie Egesipe"
              className="w-24 h-24 rounded-2xl object-cover shrink-0 border-2 border-copper-orange/30 shadow-md"
            />
            <div>
              <h3 className="text-2xl font-heading font-black text-deep-blue">Léonie Egesipe</h3>
              <p className="text-xs font-bold text-copper-orange uppercase tracking-wider mb-3">
                Directrice Artistique & Création IA
              </p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Experte en identité visuelle, scénarisation et outils génératifs. Léonie apporte une exigence esthétique et ergonomique essentielle pour rendre votre MVP captivant et crédible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs & Transparence */}
      <section className="py-16 px-4 bg-deep-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-copper-orange">
            Tarif Unique & Transparent
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black mt-3 mb-6">
            200 € / mois sur 6 mois
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Un accompagnement complet et sans mauvaise surprise. Aucun engagement au-delà des 6 mois, aucun frais caché.
          </p>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 max-w-xl mx-auto mb-10 text-left space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-copper-orange shrink-0" />
              <span>Mentorat direct hebdomadaire par Cyril Garnier & Léonie Egesipe</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-copper-orange shrink-0" />
              <span>Accès continu aux ressources, canevas et sessions de revue de projet</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-copper-orange shrink-0" />
              <span>Coût total de l'accompagnement : 1 200 € (échelonné à 200 € / mois)</span>
            </div>
            <div className="pt-3 border-t border-white/15 flex items-center gap-2.5 text-xs text-copper-orange font-bold">
              <Wallet className="w-4 h-4 shrink-0" />
              <span>Note pratique : prévoir un portefeuille d'environ 50€ à 150€ pour les abonnements et crédits d'outils d'IA utiles aux étapes pratiques.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de Candidature */}
      <section className="py-20 px-4 max-w-3xl mx-auto w-full" id="candidature">
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-copper-orange">
            Formulaire de Candidature
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-deep-blue mt-2 mb-3">
            Postuler au programme New Business MVP
          </h2>
          <p className="text-muted-foreground text-sm">
            Répondez à ces quelques questions pour nous permettre d'analyser l'adéquation de votre projet avec le programme.
          </p>
        </div>

        {status === 'success' ? (
          <div className="p-8 rounded-3xl bg-green-500/10 border-2 border-green-500/30 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-green-500/20 text-green-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-heading font-black text-deep-blue">
              Candidature bien reçue !
            </h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Merci pour votre démarche. Cyril Garnier et Léonie Egesipe étudieront votre dossier sous 48h et reviendront vers vous pour un échange de qualification.
            </p>
            <div className="pt-4">
              <Link to="/ateliers" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-copper-orange hover:text-deep-blue transition-colors">
                <span>Découvrir nos autres ateliers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-border shadow-xl space-y-6">
            {status === 'error' && (
              <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-deep-blue mb-2">
                  Prénom *
                </label>
                <input
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="Votre prénom"
                  className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-deep-blue mb-2">
                  Nom *
                </label>
                <input
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Votre nom"
                  className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-deep-blue mb-2">
                Email professionnel *
              </label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="votre.email@domaine.com"
                className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-deep-blue mb-2">
                Activité actuelle ou projet envisagé *
              </label>
              <input
                required
                value={formData.activity}
                onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                placeholder="Ex : Consultant indépendant, artisan, porteur de projet tech..."
                className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-deep-blue mb-2">
                  Stade de votre projet
                </label>
                <select
                  value={formData.stage}
                  onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                  className="w-full h-12 px-3 rounded-xl border border-input bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="idee">Stade Idée / Réflexion</option>
                  <option value="lancement">Phase de Lancement / MVP</option>
                  <option value="premiers-clients">Premiers clients / Pivot</option>
                  <option value="acceleration">Activité installée à réinventer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-deep-blue mb-2">
                  Temps disponible par semaine
                </label>
                <select
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  className="w-full h-12 px-3 rounded-xl border border-input bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="3-4h">3 à 4 heures / semaine</option>
                  <option value="5-8h">5 à 8 heures / semaine</option>
                  <option value="10h+">Plus de 10 heures / semaine</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-deep-blue mb-2">
                Votre principal obstacle actuel
              </label>
              <input
                value={formData.blocker}
                onChange={(e) => setFormData({ ...formData, blocker: e.target.value })}
                placeholder="Ex : Identifier mon ICP, fixer mon prix, créer un premier MVP sans coder..."
                className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-deep-blue mb-2">
                Votre motivation & attentes pour ce programme
              </label>
              <textarea
                rows={4}
                value={formData.motivation}
                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                placeholder="Expliquez en quelques phrases pourquoi ce programme résonne avec vos objectifs actuels..."
                className="w-full p-4 rounded-2xl border border-input bg-background text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring resize-y"
              />
            </div>

            <Button
              type="submit"
              disabled={status === 'loading'}
              className="w-full h-14 rounded-full bg-copper-orange text-white font-black text-xs uppercase tracking-widest hover:bg-deep-blue transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
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
            </Button>
          </form>
        )}
      </section>
    </div>
  );
}
