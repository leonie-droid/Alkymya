import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cookie, Settings2, Database, Clock, Lock, FileText, Mail } from 'lucide-react';
import { openCookiePreferencesModal } from '../utils/cookieConsent';
import { SEO } from '../components/SEO';

const PolitiqueConfidentialite: React.FC = () => {
  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title="Politique de confidentialité & cookies RGPD | Alkymya"
        description="Politique de confidentialité d'Alkymya (CYRIL GARNIER CONSULTING) : données personnelles, Google Analytics Consent Mode v2, conservation et droits RGPD."
        keywords="politique de confidentialité Alkymya, RGPD, gestion des cookies, Google Analytics Consent Mode v2, CNIL"
        canonicalPath="/politique-confidentialite"
        ogImage="https://alkymya.co/og-mentions.jpg"
        type="WebPage"
      />

      {/* HERO SECTION */}
      <header className="bg-[#1F4F6E] text-white py-20 px-6 sm:px-10 text-center relative overflow-hidden">
        <div className="max-w-[740px] mx-auto relative z-10">
          <p className="text-[0.85rem] tracking-[0.15em] uppercase text-[#02ADAB] mb-4 font-normal">
            Protection des Données &amp; Conformité RGPD / CNIL
          </p>
          <h1 className="font-light text-[2.4rem] sm:text-[2.6rem] leading-[1.2] mb-5 text-white">
            Politique de confidentialité &amp;<br />
            <strong className="font-medium text-white">gestion des cookies</strong>
          </h1>
          <p className="text-[1.05rem] sm:text-[1.1rem] text-white/75 max-w-[640px] mx-auto leading-[1.7] font-light mb-6">
            Transparence complète sur les données collectées sur alkymya.co, nos bases légales, nos durées de conservation, le paramétrage de Google Analytics Consent Mode v2 et vos droits RGPD.
          </p>
          <span className="inline-block bg-white/10 text-white/85 text-xs font-medium uppercase tracking-wider px-3.5 py-1.5 rounded-[4px]">
            Mise à jour : 25 novembre 2026
          </span>
        </div>
      </header>

      {/* CONTENU PRINCIPAL */}
      <section className="max-w-[1100px] mx-auto py-[70px] px-6 space-y-10">
        {/* 1. Responsable de traitement */}
        <div className="p-7 sm:p-10 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] space-y-4">
          <div className="flex items-center gap-3 text-[#1F4F6E]">
            <div className="w-10 h-10 rounded-[8px] bg-[rgba(2,173,171,0.1)] text-[#02ADAB] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-[1.35rem] font-medium text-[#1F4F6E]">
              1. Responsable du traitement des données
            </h2>
          </div>
          <p className="text-[0.95rem] text-[#5a7a90] leading-[1.7]">
            Le responsable des traitements effectués sur le site <strong className="text-[#1F4F6E] font-medium">https://alkymya.co/</strong> est la société <strong className="text-[#1F4F6E] font-medium">CYRIL GARNIER CONSULTING</strong> (SASU au capital de 1 500 €, RCS 842 403 669 Melun, SIRET 842 403 669 00018), représentée par son Président <strong className="text-[#1F4F6E] font-medium">Cyril Garnier</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-[0.92rem] text-[#5a7a90]">
            <div className="p-4 rounded-[8px] bg-[#f4f6f9]">
              <p className="font-medium text-[#1F4F6E] mb-1">Adresse postale</p>
              <p>2 rue Sacha Guitry, 77330 Ozoir-la-Ferrière, Seine-et-Marne, France</p>
            </div>
            <div className="p-4 rounded-[8px] bg-[#f4f6f9]">
              <p className="font-medium text-[#1F4F6E] mb-1">Contact DPO / RGPD</p>
              <p>
                Email :{' '}
                <a href="mailto:cyril@alkymya.co" className="text-[#037971] font-medium underline">
                  cyril@alkymya.co
                </a>{' '}
                • Tél :{' '}
                <a href="tel:+33643649777" className="text-[#037971] font-medium underline">
                  06 43 64 97 77
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* 2. Finalités, données collectées et bases légales */}
        <div className="p-7 sm:p-10 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] space-y-5">
          <div className="flex items-center gap-3 text-[#1F4F6E]">
            <div className="w-10 h-10 rounded-[8px] bg-[rgba(31,79,110,0.08)] text-[#1F4F6E] flex items-center justify-center shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <h2 className="text-[1.35rem] font-medium text-[#1F4F6E]">
              2. Données collectées, finalités et bases légales
            </h2>
          </div>
          <p className="text-[0.95rem] text-[#5a7a90] leading-[1.7]">
            Alkymya applique le principe de minimisation des données : seules les informations strictement nécessaires à votre demande ou à votre inscription sont collectées.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[0.9rem]">
              <thead>
                <tr className="bg-[#1F4F6E] text-white">
                  <th className="p-3.5 font-medium border border-[#cbd5e1]">Traitement / Service</th>
                  <th className="p-3.5 font-medium border border-[#cbd5e1]">Données traitées</th>
                  <th className="p-3.5 font-medium border border-[#cbd5e1]">Finalité &amp; Base légale</th>
                  <th className="p-3.5 font-medium border border-[#cbd5e1]">Conservation</th>
                </tr>
              </thead>
              <tbody className="text-[#334155]">
                <tr className="bg-white">
                  <td className="p-3.5 border border-[#e2e8f0] font-medium text-[#1F4F6E]">Formulaire de contact (/contact/)</td>
                  <td className="p-3.5 border border-[#e2e8f0]">Prénom, nom, email professionnel, sujet et message</td>
                  <td className="p-3.5 border border-[#e2e8f0]">Répondre à votre demande de devis ou d'information (mesures précontractuelles / intérêt légitime)</td>
                  <td className="p-3.5 border border-[#e2e8f0]">3 ans après le dernier échange</td>
                </tr>
                <tr className="bg-[#f8fafc]">
                  <td className="p-3.5 border border-[#e2e8f0] font-medium text-[#1F4F6E]">Candidature New Business MVP</td>
                  <td className="p-3.5 border border-[#e2e8f0]">Identité, email, activité, stade du projet, blocage et motivation</td>
                  <td className="p-3.5 border border-[#e2e8f0]">Étude de candidature au programme d'accompagnement sur 6 mois (mesures précontractuelles)</td>
                  <td className="p-3.5 border border-[#e2e8f0]">3 ans (ou durée contractuelle si retenu)</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3.5 border border-[#e2e8f0] font-medium text-[#1F4F6E]">Lettre d'information (Newsletter)</td>
                  <td className="p-3.5 border border-[#e2e8f0]">Adresse email (prénom et nom facultatifs)</td>
                  <td className="p-3.5 border border-[#e2e8f0]">Envoi de la veille IA et retours d'expérience (consentement explicite, retrait en un clic)</td>
                  <td className="p-3.5 border border-[#e2e8f0]">Jusqu'à la désinscription</td>
                </tr>
                <tr className="bg-[#f8fafc]">
                  <td className="p-3.5 border border-[#e2e8f0] font-medium text-[#1F4F6E]">Mesure d'audience (Google Analytics)</td>
                  <td className="p-3.5 border border-[#e2e8f0]">Pages consultées, provenance et identifiant technique anonymisé (IP anonymisée)</td>
                  <td className="p-3.5 border border-[#e2e8f0]">Statistiques de consultation activées uniquement avec votre accord (consentement préalable)</td>
                  <td className="p-3.5 border border-[#e2e8f0]">6 mois pour le choix de consentement</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3.5 border border-[#e2e8f0] font-medium text-[#1F4F6E]">Analyseurs IA gratuits (Photo, CV, Mémoire, Alkymya Scan)</td>
                  <td className="p-3.5 border border-[#e2e8f0]">Contenu soumis lors de l'analyse ponctuelle</td>
                  <td className="p-3.5 border border-[#e2e8f0]">Restitution immédiate du diagnostic sans constitution de CVthèque ni revente commerciale</td>
                  <td className="p-3.5 border border-[#e2e8f0]">Traitement à la volée</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Cookies & Consent Mode v2 */}
        <div className="p-7 sm:p-10 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[rgba(31,79,110,0.08)] pb-6">
            <div className="flex items-center gap-3 text-[#1F4F6E]">
              <div className="w-11 h-11 rounded-[8px] bg-[rgba(192,103,33,0.12)] text-[#C06721] flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-[1.35rem] font-medium text-[#1F4F6E]">
                  3. Politique relative aux cookies &amp; Consent Mode v2
                </h2>
                <p className="text-xs text-[#5a7a90]">
                  Google Analytics ID : G-87HJ0K59JX · Refus par défaut (analytics_storage: denied)
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={openCookiePreferencesModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#1F4F6E] hover:bg-[#02ADAB] text-white text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Settings2 className="w-4 h-4" />
              <span>Modifier mes préférences cookies</span>
            </button>
          </div>

          <div className="space-y-4 text-[#5a7a90] text-[0.95rem] leading-[1.7]">
            <p>
              Lors de votre première visite sur alkymya.co, un bandeau vous permet d'accepter, de refuser ou de personnaliser le dépôt des cookies non essentiels. Par défaut, le mode <strong className="text-[#1F4F6E] font-medium">Google Consent Mode v2</strong> bloque tout stockage analytique (<code className="bg-[#f4f6f9] px-1.5 py-0.5 rounded text-xs text-[#1F4F6E]">analytics_storage: denied</code>, <code className="bg-[#f4f6f9] px-1.5 py-0.5 rounded text-xs text-[#1F4F6E]">ad_storage: denied</code>) tant que vous n'avez pas exprimé un consentement positif.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-[8px] bg-[#f4f6f9] space-y-1.5">
                <p className="font-medium text-[#1F4F6E] text-sm">Traceurs techniques strictement nécessaires</p>
                <p className="text-xs text-[#5a7a90] leading-relaxed">
                  Clé <code className="text-[#1F4F6E]">alkymya_cookie_consent</code> enregistrée dans le stockage local du navigateur pendant 6 mois afin de mémoriser votre choix de consentement conformément aux lignes directrices de la CNIL. Exemptés de consentement.
                </p>
              </div>
              <div className="p-4 rounded-[8px] bg-[#f4f6f9] space-y-1.5">
                <p className="font-medium text-[#1F4F6E] text-sm">Cookies de mesure d'audience (Google Analytics 4)</p>
                <p className="text-xs text-[#5a7a90] leading-relaxed">
                  Soumis à votre accord explicite, avec anonymisation systématique de l'adresse IP (<code className="text-[#1F4F6E]">anonymize_ip: true</code>) et désactivation complète du ciblage publicitaire (<code className="text-[#1F4F6E]">ad_personalization: denied</code>).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Sous-traitants & Transferts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="p-7 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] space-y-4">
            <div className="flex items-center gap-3 text-[#1F4F6E]">
              <div className="w-10 h-10 rounded-[8px] bg-[rgba(3,121,113,0.1)] text-[#037971] flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-[1.25rem] font-medium text-[#1F4F6E]">4. Destinataires &amp; sous-traitants</h2>
            </div>
            <p className="text-[0.94rem] text-[#5a7a90] leading-[1.7]">
              Vos données ne sont jamais vendues, louées ou cédées à des tiers commerciaux. Seuls nos prestataires techniques strictement habilités y accèdent pour assurer le service :
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[0.92rem] text-[#5a7a90]">
              <li><strong className="text-[#1F4F6E] font-medium">Netlify, Inc.</strong> : hébergement statique et exécution des fonctions serveur sécurisées en HTTPS.</li>
              <li><strong className="text-[#1F4F6E] font-medium">Resend</strong> : acheminement des emails de contact, candidatures et lettre d'information.</li>
              <li><strong className="text-[#1F4F6E] font-medium">Google LLC</strong> : mesure d'audience anonymisée uniquement en cas de consentement explicite.</li>
            </ul>
          </div>

          <div className="p-7 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] space-y-4">
            <div className="flex items-center gap-3 text-[#1F4F6E]">
              <div className="w-10 h-10 rounded-[8px] bg-[rgba(192,103,33,0.12)] text-[#C06721] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <h2 className="text-[1.25rem] font-medium text-[#1F4F6E]">5. Vos droits RGPD &amp; recours CNIL</h2>
            </div>
            <p className="text-[0.94rem] text-[#5a7a90] leading-[1.7]">
              Conformément aux articles 15 à 22 du RGPD et à la loi Informatique et Libertés, vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données.
            </p>
            <p className="text-[0.94rem] text-[#5a7a90] leading-[1.7]">
              Pour exercer vos droits, écrivez à{' '}
              <a href="mailto:cyril@alkymya.co" className="text-[#037971] font-medium underline">
                cyril@alkymya.co
              </a>{' '}
              (réponse sous 30 jours maximum). En cas de difficulté persistante, vous pouvez introduire une réclamation auprès de la{' '}
              <strong className="text-[#1F4F6E] font-medium">CNIL</strong> (3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — <span className="text-[#1F4F6E]">cnil.fr</span>).
            </p>
          </div>
        </div>

        {/* Liens complémentaires */}
        <div className="p-6 rounded-[12px] bg-white shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#5a7a90]">
            <FileText className="w-4 h-4 text-[#02ADAB]" />
            <span>Documents associés :</span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <Link to="/mentions-legales/" className="text-[#037971] hover:underline">
              Mentions légales →
            </Link>
            <Link to="/accessibilite/" className="text-[#037971] hover:underline">
              Déclaration d'accessibilité RGAA →
            </Link>
            <Link to="/contact/" className="text-[#037971] hover:underline">
              Exercer mes droits (Contact) →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL ORANGE #C06721 */}
      <div className="bg-[#C06721] text-white text-center py-[70px] px-10">
        <h2 className="text-[2rem] font-light mb-3.5 text-white">
          Une question sur <strong className="font-medium text-white">vos données personnelles ?</strong>
        </h2>
        <p className="text-[1.05rem] text-white/85 max-w-[520px] mx-auto mb-8 leading-[1.7] font-light">
          Contactez directement Cyril Garnier pour toute demande d'accès, de rectification ou de suppression.
        </p>
        <a
          href="mailto:cyril@alkymya.co"
          className="inline-flex items-center gap-2 bg-white text-[#C06721] text-[0.95rem] font-medium py-3.5 px-8 rounded-[8px] no-underline tracking-[0.04em] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
        >
          <Mail className="w-4 h-4" />
          <span>Écrire à cyril@alkymya.co</span>
        </a>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
