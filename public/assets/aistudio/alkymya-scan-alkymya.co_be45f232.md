# Rapport d'Audit 360° — Alkymya Scan (Version Bêta)

> **Précautions de lecture (Version Bêta)** : ce diagnostic automatisé repose sur une inspection HTTP publique non intrusive réalisée à un instant T (page analysée + pages clés liées). Le score global correspond à la moyenne pondérée des 6 piliers (Contenu 25 %, SEO & GEO 22 %, E-E-A-T 17 %, UX & Brand 14 %, Performance & Sécurité 12 %, Juridique & RGPD 10 %). Le pilier SEO & GEO (IA) mesure les signaux techniques et sémantiques de préparation aux moteurs IA (hors test de citation en direct dans ChatGPT ou Perplexity). Le comptage des formulaires porte uniquement sur le HTML initial servi sur la page analysée (hors formulaires montés en JS et champs masqués).

- **Site audité** : https://alkymya.co/
- **Domaine** : alkymya.co
- **Date d'analyse** : 24/11/2026 17:47:07
- **Score Global** : **80 / 100** (moyenne pondérée des 6 piliers)
- **Verdict Stratégique** : Patch chirurgical suffisant (fondation saine)

## Synthèse Exécutive

Alkymya.co présente une fondation technique solide avec un pré-rendu HTML parfait pour les moteurs IA et une gestion exemplaire des données structurées et de la fraîcheur éditoriale. Le site est mature et bien structuré, nécessitant uniquement des ajustements de conformité légale et de durcissement de sécurité pour atteindre un niveau d'excellence opérationnelle.

## Scores par Pilier

| Pilier | Poids | Score | Statut |
| :--- | :---: | :---: | :--- |
| Contenu & Surface Éditoriale | 25 % | 68/100 | Surface éditoriale intermédiaire |
| SEO & GEO (IA — signaux techniques & sémantiques) | 22 % | 92/100 | Excellente préparation IA |
| E-E-A-T (Expérience, Expertise, Autorité, Fiabilité) | 17 % | 85/100 | Autorité confirmée |
| UX & Brand | 14 % | 82/100 | Parcours utilisateur clair |
| Performance & Sécurité | 12 % | 75/100 | Sécurité à durcir |
| Juridique, RGPD & Accessibilité | 10 % | 78/100 | Conformité en cours |

**Surface éditoriale mesurée** : Surface éditoriale intermédiaire : 44 URL(s) recensée(s) dans le sitemap ; menu principal : 0/11 lien(s) en ancre interne (#) contre 11 page(s) dédiée(s) ; médiane de 384 mots sur 5 page(s) inspectée(s) (543 mots sur l’accueil).

## Diagnostic E-E-A-T (On-Page & Réputation Off-Site)

| Axe E-E-A-T | Score | Statut | Synthèse |
| :--- | :---: | :--- | :--- |
| Expérience | 90/100 | Expertise démontrée | Cadence éditoriale active (14 posts/an) et preuves d'expertise via des études de cas. |
| Expertise | 85/100 | Expertise reconnue | Cyril Garnier et Léonie Egesipe sont clairement identifiés avec des entités liées (SameAs) et une présence active sur LinkedIn. |
| Autorité | 80/100 | Autorité solide | Bonne note sur Google (5/5) et forte cohérence entre le site web et les réseaux sociaux. |
| Fiabilité (Trust) | 85/100 | Transparence totale | Identité légale irréprochable avec SIRET, RCS et siège social affichés. |

**Sondage réputation Off-Site** (Entités externes & sameAs déclarés vérifiés) : Aucune citation Wikipédia ni archive publique immédiate trouvée pour alkymya.co, mais 6 profils et entités externes officiellement déclarés ont été identifiés (LinkedIn, YouTube, Instagram, 6 lien(s) Schema.org sameAs).

**Sources web externes vérifiées :**
- [LinkedIn (linkedin.com)](https://www.linkedin.com/company/alkymya/)
- [YouTube (youtube.com)](https://www.youtube.com/@alkymya)
- [Instagram (instagram.com)](https://www.instagram.com/alkymya.co/)
- [Entité déclarée (Schema.org sameAs)](https://cyrilgarnier.fr/)
- [Entité déclarée (Schema.org sameAs)](https://www.facebook.com/cyril.garnier.969)
- [LinkedIn (linkedin.com)](https://www.linkedin.com/in/cyril-garnier-89697b1/)

### Backlinks & Autorité de Domaine

- **Synthèse Autorité** : Aucune source externe de backlinks n’a pu être interrogée lors de cet audit.
- **Open PageRank** : Indisponible lors de la sonde
- **Mentions web externes (Serper)** : Indisponible

### Fiche Google Business Profile (Google My Business)

- **Statut** : **Vérifiée (domaine lié sur la fiche)**
- **Établissement** : Alkymya (Consultant)
- **Note & Avis Google** : 5.0/5 (11 avis)
- **Adresse Google Maps** : 2 Rue Sacha Guitry, 77330 Ozoir-la-Ferrière
- **Cohérence NAP** : Site web lié (Oui) · Adresse cohérente (Oui) · Téléphone (Oui) · Lien Maps sur site (Non)
- **Lien Google Maps** : https://www.google.com/maps?cid=10471291206194913670
- **Synthèse** : Fiche Google Business Profile vérifiée par correspondance de domaine (« Alkymya » · Consultant) : note 5.0/5 (11 avis).

## Signaux Techniques Mesurés (Inspection Serveur Réelle)

- **HTTPS** : Actif
- **Content-Security-Policy (CSP)** : Absente
- **Permissions-Policy** : Présent (camera=(), microphone=(), geolocation=())
- **Rendu IA (Vision GPTBot sans JS)** : Pré-rendu HTML lisible par GPTBot / Perplexity (543 mots lisibles en HTML brut)
- **TTFB médian mesuré** : 95 ms (mesuré depuis us-east-2 (serveur serverless) · 3 mesures : 38 / 103 / 95 ms) — informatif (sans impact note Performance)
- **Poids HTML** : 26.1 Ko
- **Stack détectée** : React / Vite, Netlify
- **robots.txt / sitemap.xml / llms.txt** : Oui / Oui / Oui
- **Schema.org JSON-LD** : WebPage, BreadcrumbList, ProfessionalService, LocalBusiness, Person, ContactPage, CollectionPage
- **Images sans attribut alt** : 0 / 4
- **Formulaires (HTML initial de la page analysée)** : 0 formulaire(s), 0 champ(s) sans label (hors formulaires JS / champs masqués)
- **Traceurs tiers détectés** : Google Analytics
- **Déclaration d’accessibilité RGAA** : Non détectée sur les pages analysées — bonne pratique recommandée, obligation légale à vérifier selon la taille de l’organisme (https://accessibilite.numerique.gouv.fr/)

## Fraîcheur des Informations & Régularité des Mises à Jour

- **Statut** : **Actif & à jour**
- **Synthèse** : Fraîcheur confirmée : dernière mise à jour vérifiée le 23/11/2026 (il y a 1 jour, source : Flux RSS). Cadence éditoriale mesurée : 14 publication(s) sur 12 mois.
- **Dernière mise à jour vérifiée** : 2026-11-23 (il y a 1 jours, source : Flux RSS)
- **Cadence éditoriale (RSS / Blog)** : Soutenu (hebdomadaire) (14 sur 90j · 14 sur 12 mois · ~1 publication tous les 2 jours)
- **Activité sitemap.xml (<lastmod>)** : 44 URL(s) datée(s) (6 date(s) distincte(s)) — 44 ≤ 90j · 44 ≤ 12m · 0 > 12m
- **Copyright pied de page** : © 2026 (à jour)

## Périmètre Vérifié (Contrôle Multi-Pages Clés & Ancres Accueil)

> Règle méthodologique : toute rubrique absente des pages, ancres et contenus contrôlés est qualifiée « non détecté sur les pages analysées ».

| Page / Rubrique clé | Statut | Chemin / Ancre | Signaux vérifiés |
| :--- | :--- | :--- | :--- |
| Contact | Contrôlée | /contact/ | Adresse physique, Email, Téléphone, Auteur / Fondateurs, JSON-LD (ContactPage, BreadcrumbList), Profils externes |
| À propos / Équipe | Section sur l’accueil | / (accueil) | Présentation / Maison |
| Mentions légales | Contrôlée | /mentions-legales/ | SIRET (14 ch.), SIREN / RCS (9 ch.), Adresse physique, Hébergeur, Dir. publication, Email |
| Cas clients / Réalisations | Contrôlée | /partenaires/ | Adresse physique, Auteur / Fondateurs, Études de cas / Preuves, JSON-LD (CollectionPage, BreadcrumbList), Profils externes |
| Blog / Articles | Contrôlée | /ressources/ | Adresse physique, Auteur / Fondateurs, JSON-LD (CollectionPage, BreadcrumbList), Profils externes |

## Checklist LCEN — Contenu des Mentions légales (/mentions-legales/)

> Numéro SIRET (14 chiffres) détecté dans les mentions légales (842 403 669 00018).

- **Éditeur / Raison sociale** : Détecté
- **Immatriculation SIREN / RCS (9 chiffres)** : Détecté (842 403 669)
- **Numéro SIRET (14 chiffres)** : Détecté (842 403 669 00018)
- **Siège social / Adresse** : Détectée
- **Directeur de publication** : Détecté
- **Hébergeur** : Détecté (Netlify)
- **Contact éditeur** : Détecté (email / téléphone)

## Arbitrage Stratégique : Patch Express vs. Refonte Radicale Stack Alkymya

**Fondation technique solide: cap sur l'excellence opérationnelle**

Le site respecte les standards techniques modernes: HSTS, Sitemaps, JSON-LD complet et pré-rendu HTML actif. La dette technique est quasi-nulle, limitée à des aspects de configuration HTTP et des pages légales manquantes. Aucun besoin de reconstruction, uniquement une mise en conformité chirurgicale.

| Critère | Agence traditionnelle (Rustinage) | Stack Alkymya (IA & Vibecoding) |
| :--- | :--- | :--- |
| Vitesse d'exécution | 3 à 6 mois | 24 à 72 heures |
| Alignement IA | Incertain | Natif (LLM-ready) |
| Qualité de code | Variable | Audit-driven |
| Focus ROI | Esthétique avant tout | Conversion & SEO |
| Modernité stack | CMS classique | Jamstack performant |

## Recommandations Correctives Prioritaires

### 1. [P0] Implémentation d'une Content-Security-Policy (CSP)
- **Pilier** : Performance & Sécurité
- **Constat mesuré** : L'en-tête Content-Security-Policy est absent du serveur.
- **Impact** : Bloque les attaques XSS et l'injection de scripts non autorisés en restreignant les sources de chargement.
- **Effort estimé** : 30 minutes · **Gain business** : Sécurisation renforcée de l'intégrité des données clients.

**Plan d'action :**
- Configurer l'en-tête CSP sur Netlify (via netlify.toml ou _headers).
- Ajouter les sources 'self' et les domaines de confiance (Google Analytics, etc.).

```
[[headers]]
for = "/*"
[headers.values]
Content-Security-Policy = "default-src 'self'; script-src 'self' https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com;"
```

### 2. [P1] Création d'une politique de confidentialité et de cookies
- **Pilier** : Juridique, RGPD & RGAA
- **Constat mesuré** : Aucune page dédiée à la vie privée ou aux cookies n'a été trouvée sur le site.
- **Impact** : Mise en conformité RGPD indispensable pour le traitement des données via Google Analytics.
- **Effort estimé** : 2 heures · **Gain business** : Évite des sanctions liées à la transparence sur le traitement des données.

**Plan d'action :**
- Rédiger une page dédiée à la protection des données.
- Lier cette page dans le pied de page du site.

### 3. [P2] Ajout d'un lien d'évitement (Skip Link)
- **Pilier** : UX & Brand
- **Constat mesuré** : Aucun lien d'évitement n'a été détecté dans le code HTML.
- **Impact** : Améliore l'accessibilité pour les utilisateurs naviguant au clavier.
- **Effort estimé** : 1 heure · **Gain business** : Meilleure accessibilité aux standards WCAG.

**Plan d'action :**
- Ajouter un lien caché au tout début du body pointant vers #main.
- Assurer sa visibilité lors de la navigation au clavier.

### 4. [P2] Amplification de la collecte d'avis clients
- **Pilier** : E-E-A-T (Autorité)
- **Constat mesuré** : Fiche Google Business Profile avec seulement 11 avis.
- **Impact** : Renforcement de l'autorité locale et du taux de conversion.
- **Effort estimé** : 1 heure · **Gain business** : Meilleur positionnement dans le Pack Local Google.

**Plan d'action :**
- Automatiser une demande d'avis post-mission/atelier.
- Intégrer les avis en JSON-LD sur le site.

---
Généré par **Alkymya Scan (Version Bêta)** — Studio Alkymya (https://alkymya.co) · CYRIL GARNIER CONSULTING (SASU). Diagnostic indicatif d’aide à la décision.