import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  Sparkles,
  BookOpen,
  Image as ImageIcon,
  Zap
} from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Oeuvres() {
  return (
    <div className="min-h-screen py-32 px-4 bg-background text-foreground selection:bg-copper-orange selection:text-white">
      <div className="container mx-auto px-4 max-w-[1240px]">
        {/* Header Hero */}
        <header className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-copper-orange/10 border border-copper-orange/30 text-copper-orange text-xs font-black uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Carnets de Terrain &amp; Démonstration Réelle
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-deep-blue leading-tight mb-8">
              Trois carnets de terrain, <span className="text-copper-orange">trois sites mesurés</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              Trois sites, trois territoires, une seule manière de travailler. Ce ne sont pas des références clientes : ce sont mes propres carnets, en Seine-et-Marne, à Paris et dans le Var. Je les ai construits pour être mesurés, et je publie les chiffres — y compris ceux qui ne sont pas terminés.
            </p>
            <div className="inline-block p-4 px-8 rounded-2xl bg-gradient-to-r from-deep-blue/5 via-copper-orange/10 to-deep-blue/5 border border-copper-orange/30 shadow-sm">
              <p className="text-base md:text-lg font-heading font-black text-deep-blue">
                Au total : <span className="text-copper-orange">387 pages</span>, <span className="text-copper-orange">804 photographies distinctes</span>, <span className="text-copper-orange">279 198 mots</span>.
              </p>
            </div>
          </motion.div>
        </header>

        {/* SECTION 1 : thelittle77.fr */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <Card className="rounded-[2.5rem] bg-white border border-deep-blue/10 shadow-xl overflow-hidden hover:border-copper-orange/30 transition-all">
            <div className="p-8 md:p-12 bg-gradient-to-br from-[#1F4F6E] via-[#16384e] to-[#0d2230] text-white">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-copper-orange/20 border border-copper-orange/40 text-copper-orange font-black text-xs uppercase tracking-wider">
                  Seine-et-Marne · Neuf bassins
                </span>
                <span className="text-xs text-white/60 font-medium">Carnet territorial</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-2">
                thelittle77.fr — la Seine-et-Marne, en neuf bassins
              </h2>
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl">
                Un carnet de voyage territorial. Neuf grands bassins éditoriaux, du Grand Morin à la Bassée, avec pour chacun un dossier, des lieux, des récits et un agenda.
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-sm font-bold">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-copper-orange" />
                  <strong className="text-white text-base">216</strong> pages
                </span>
                <span className="text-white/40">·</span>
                <span className="flex items-center gap-2">
                  <strong className="text-white text-base">149 392</strong> mots
                </span>
                <span className="text-white/40">·</span>
                <span className="flex items-center gap-2">
                  <strong className="text-white text-base">607</strong> photographies distinctes
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12 space-y-6">
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-deep-blue font-bold">Ce qui a été fait :</strong> le site servait auparavant une seule page vide à tous les moteurs — chaque adresse renvoyait le même HTML sans contenu. Le pré-rendu a été mis en place, puis les neuf dossiers territoriaux écrits, puis les images optimisées : le logo est passé de 1,28 Mo à 2,6 Ko et la page d'accueil de 1,4 Mo à environ 120 Ko. Un fichier de contexte de 40,7 Ko décrit aujourd'hui les neuf territoires aux modèles de langage.
                </p>
                <div className="p-6 rounded-2xl bg-amber-500/10 border-l-4 border-amber-500 text-deep-blue/90 font-medium">
                  Le 9 novembre 2026, le site est <strong className="font-black text-deep-blue">premier résultat</strong> sur « photos de ciels et paysages en Seine-et-Marne ». Il est absent des dix premiers sur « randonnée Seine-et-Marne sans voiture » : c'est l'intention d'un concurrent, et je le dis parce que c'est vrai.
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://thelittle77.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-deep-blue hover:bg-copper-orange text-white font-heading font-black text-xs uppercase tracking-widest transition-all shadow-md group"
                >
                  <span>Visiter thelittle77.fr</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <span className="text-xs text-muted-foreground italic font-medium">
                  Mesures vérifiées et constatées le 9 novembre 2026
                </span>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* SECTION 2 : thelittle75.fr */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <Card className="rounded-[2.5rem] bg-white border border-deep-blue/10 shadow-xl overflow-hidden hover:border-copper-orange/30 transition-all">
            <div className="p-8 md:p-12 bg-gradient-to-br from-[#1F4F6E] via-[#16384e] to-[#0d2230] text-white">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-copper-orange/20 border border-copper-orange/40 text-copper-orange font-black text-xs uppercase tracking-wider">
                  Paris · Onze récits
                </span>
                <span className="text-xs text-white/60 font-medium">Revue parisienne</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-2">
                thelittle75.fr — Paris, en onze récits
              </h2>
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl">
                Une revue parisienne : onze grands récits, une carte des vingt arrondissements avec une fiche par arrondissement, un index patrimonial, un agenda culturel et une photothèque.
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-sm font-bold">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-copper-orange" />
                  <strong className="text-white text-base">39</strong> pages
                </span>
                <span className="text-white/40">·</span>
                <span className="flex items-center gap-2">
                  <strong className="text-white text-base">27 839</strong> mots
                </span>
                <span className="text-white/40">·</span>
                <span className="flex items-center gap-2">
                  <strong className="text-white text-base">53</strong> photographies distinctes
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12 space-y-6">
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-deep-blue font-bold">Ce qui a été fait :</strong> le site a été construit sans pré-rendu, puis corrigé. En deux jours, on est passé d'une page de HTML unique sur vingt-cinq à trente-huit pages sur trente-huit, chacune avec son titre, son fil d'Ariane et ses données structurées. Ensuite les images : même site, mêmes photos, <strong className="text-deep-blue font-bold">2 166 Ko par page avant, 200 Ko après, soit −91 %</strong> — rien n'a été retiré.
                </p>
                <div className="p-6 rounded-2xl bg-amber-500/10 border-l-4 border-amber-500 text-deep-blue/90 font-medium">
                  Le 9 novembre 2026, le site est <strong className="font-black text-deep-blue">deuxième résultat</strong> sur « chronique Belleville Paris récit », derrière un théâtre. Trente-neuf pages bien tenues se placent devant des sites dix fois plus gros.
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://thelittle75.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-deep-blue hover:bg-copper-orange text-white font-heading font-black text-xs uppercase tracking-widest transition-all shadow-md group"
                >
                  <span>Visiter thelittle75.fr</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <span className="text-xs text-muted-foreground italic font-medium">
                  Mesures vérifiées et constatées le 9 novembre 2026
                </span>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* SECTION 3 : thelittle83.fr */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <Card className="rounded-[2.5rem] bg-white border border-deep-blue/10 shadow-xl overflow-hidden hover:border-copper-orange/30 transition-all">
            <div className="p-8 md:p-12 bg-gradient-to-br from-[#1F4F6E] via-[#16384e] to-[#0d2230] text-white">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-copper-orange/20 border border-copper-orange/40 text-copper-orange font-black text-xs uppercase tracking-wider">
                  Var · Bilingue FR / EN
                </span>
                <span className="text-xs text-white/60 font-medium">Carnet naturaliste</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-2">
                thelittle83.fr — le Var, oiseaux et paysages
              </h2>
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl">
                Un carnet naturaliste et photographique : cinquante et une fiches d'espèces par langue, huit spots d'observation, une galerie de paysages. Une règle éditoriale assumée — aucune capture, aucun appâtage, cent pour cent des photographies prises sur le terrain.
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-sm font-bold">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-copper-orange" />
                  <strong className="text-white text-base">132</strong> pages en deux langues
                </span>
                <span className="text-white/40">·</span>
                <span className="flex items-center gap-2">
                  <strong className="text-white text-base">101 967</strong> mots
                </span>
                <span className="text-white/40">·</span>
                <span className="flex items-center gap-2">
                  <strong className="text-white text-base">144</strong> photographies distinctes
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12 space-y-6">
              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-deep-blue font-bold">Ce qui a été fait :</strong> mis en ligne le 8 novembre 2026, le site est bilingue français-anglais dès le premier jour, avec 396 déclarations de correspondance entre les deux versions. Les 1 466 emplacements d'image sont tous optimisés et dimensionnés. Le fichier de contexte destiné aux modèles de langage est daté et décrit la démarche de prise de vue.
                </p>
                <div className="p-6 rounded-2xl bg-amber-500/10 border-l-4 border-amber-500 text-deep-blue/90 font-medium">
                  C'est le site qui a le moins coûté à mettre au niveau : il a été construit sur le socle corrigé des deux premiers.
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://thelittle83.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-deep-blue hover:bg-copper-orange text-white font-heading font-black text-xs uppercase tracking-widest transition-all shadow-md group"
                >
                  <span>Visiter thelittle83.fr</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <span className="text-xs text-muted-foreground italic font-medium">
                  Mesures vérifiées et constatées le 9 novembre 2026
                </span>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* SECTION 4 : Les trois, côte à côte (Tableau comparatif) */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-deep-blue/10 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-copper-orange/15 text-copper-orange flex items-center justify-center font-black">
                <Layers className="w-5 h-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-black text-deep-blue">
                Les trois, côte à côte
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-deep-blue/10">
                    <th className="py-4 px-6 text-xs font-black uppercase tracking-wider text-muted-foreground">Métrique</th>
                    <th className="py-4 px-6 text-sm font-black text-deep-blue font-heading bg-deep-blue/5 rounded-t-xl">thelittle77</th>
                    <th className="py-4 px-6 text-sm font-black text-deep-blue font-heading">thelittle75</th>
                    <th className="py-4 px-6 text-sm font-black text-deep-blue font-heading bg-deep-blue/5 rounded-t-xl">thelittle83</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-deep-blue/5 text-sm">
                  <tr>
                    <td className="py-4 px-6 font-bold text-deep-blue">Pages</td>
                    <td className="py-4 px-6 font-black text-copper-orange bg-deep-blue/5 text-base">216</td>
                    <td className="py-4 px-6 font-black text-deep-blue text-base">39</td>
                    <td className="py-4 px-6 font-black text-copper-orange bg-deep-blue/5 text-base">132</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-deep-blue">Photographies distinctes</td>
                    <td className="py-4 px-6 font-bold text-deep-blue bg-deep-blue/5">607</td>
                    <td className="py-4 px-6 font-bold text-deep-blue">53</td>
                    <td className="py-4 px-6 font-bold text-deep-blue bg-deep-blue/5">144</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-deep-blue">Mots</td>
                    <td className="py-4 px-6 font-bold text-deep-blue bg-deep-blue/5">149 392</td>
                    <td className="py-4 px-6 font-bold text-deep-blue">27 839</td>
                    <td className="py-4 px-6 font-bold text-deep-blue bg-deep-blue/5">101 967</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-deep-blue">Langues</td>
                    <td className="py-4 px-6 font-medium text-muted-foreground bg-deep-blue/5">français</td>
                    <td className="py-4 px-6 font-medium text-muted-foreground">français</td>
                    <td className="py-4 px-6 font-medium text-muted-foreground bg-deep-blue/5">français, anglais</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-xs text-muted-foreground italic leading-relaxed">
              * Mesures du 9 novembre 2026. Les notes internes qui accompagnent ces sites ne mesurent pas une position dans Google : elles notent la solidité d'un site sur dix critères. Une seule position compte, et elle se vérifie requête par requête.
            </p>
          </div>
        </motion.section>

        {/* SECTION 5 : Ce que ces trois sites m'ont appris */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-copper-orange mb-2 block">
              Enseignements de Terrain
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-deep-blue">
              Ce que ces trois sites m'ont appris
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] bg-white border border-deep-blue/10 shadow-lg hover:shadow-xl transition-all flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-copper-orange/15 text-copper-orange flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-black text-deep-blue mb-4">
                Le pré-rendu vaut trente points à lui seul.
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                Sur thelittle75, la note interne est passée de 45 à 77 en deux jours, une fois le bon correctif identifié. Aucun autre chantier n'a ce rendement.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white border border-deep-blue/10 shadow-lg hover:shadow-xl transition-all flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-copper-orange/15 text-copper-orange flex items-center justify-center mb-6">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-black text-deep-blue mb-4">
                Les images pèsent plus lourd que le contenu.
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                −91 % de poids par page sans retirer une seule photo. C'est le gain le plus rapide à obtenir et le plus visible pour un visiteur.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white border border-deep-blue/10 shadow-lg hover:shadow-xl transition-all flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-copper-orange/15 text-copper-orange flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-black text-deep-blue mb-4">
                Le volume ne fait rien tout seul.
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                thelittle77 totalise 149 392 mots, dont soixante-trois récits de fond ; quatre-vingt-dix pages de lieux attendent encore leur texte. Un site de trente-neuf pages soignées se place devant un site de deux cent seize pages mal tenues.
              </p>
            </div>
          </div>
        </motion.section>

        {/* SECTION 6 : Et pour votre projet & CTA */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-[#1F4F6E] via-[#16384e] to-[#0d2230] text-white shadow-2xl border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-copper-orange/15 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-copper-orange/20 border border-copper-orange/40 text-copper-orange text-xs font-black uppercase tracking-widest mb-6">
              Méthode Appliquée
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6">
              Et pour votre projet
            </h2>
            
            <div className="space-y-4 text-white/90 text-base md:text-lg leading-relaxed mb-10 font-normal">
              <p>
                Ces trois sites ont été construits avec la même séquence : mesurer, corriger ce qui bloque l'accès, écrire, mesurer à nouveau. Six semaines séparent le premier audit de thelittle77 de son état actuel ; deux jours ont suffi à thelittle75 pour passer de 45 à 77.
              </p>
              <p>
                C'est cette séquence que nous proposons dans l'accompagnement <strong className="text-white font-bold">NewBusiness MVP</strong>, appliquée non plus à un site mais à votre offre : un client idéal documenté, une proposition de valeur écrite, un produit en ligne, un prix testé auprès de vraies personnes, une décision prise sur des faits. Six mois, une séance d'une heure par semaine, un livrable par mois.
              </p>
            </div>

            <Link
              to="/newbusiness/"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-copper-orange hover:bg-white hover:text-deep-blue text-white font-heading font-black text-base md:text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              <span>Lire comment se déroule l'accompagnement</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
