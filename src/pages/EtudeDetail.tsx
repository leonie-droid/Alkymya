import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Compass,
  Download,
  FileSpreadsheet,
  Headphones,
  Lightbulb,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { getStudyBySlug, StudyTable } from '../data/etudes';
import NewsletterButton from '../components/NewsletterButton';

function downloadCsvFromTables(filename: string, tables: StudyTable[]) {
  if (!tables.length) return;
  const lines: string[] = [];
  for (const tbl of tables) {
    lines.push(`"${tbl.caption.replace(/"/g, '""')}"`);
    lines.push(tbl.headers.map((h) => `"${h.replace(/"/g, '""')}"`).join(';'));
    for (const row of tbl.rows) {
      lines.push(row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(';'));
    }
    lines.push('');
  }
  const blob = new Blob(['\uFEFF' + lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function EtudeDetail() {
  const { studySlug } = useParams<{ studySlug: string }>();
  const study = studySlug ? getStudyBySlug(studySlug) : undefined;

  if (!study) {
    return (
      <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen flex items-center justify-center px-6 py-24">
        <div className="bg-white rounded-[12px] p-10 max-w-md w-full text-center shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
          <h1 className="text-2xl font-medium mb-3">Étude introuvable</h1>
          <p className="text-sm text-[#5a7a90] mb-6">
            Cette étude n'existe pas ou a été déplacée vers notre nouvelle rubrique Nos études.
          </p>
          <Link
            to="/ressources/etudes/"
            className="inline-flex items-center gap-2 bg-[#1F4F6E] hover:bg-[#02ADAB] text-white text-sm font-medium py-3 px-6 rounded-[8px] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voir toutes nos études</span>
          </Link>
        </div>
      </div>
    );
  }

  const canonicalUrl = `https://alkymya.co${study.path}`;
  const ogImage = 'https://alkymya.co/og-ressources.jpg';

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: study.seoTitle,
        headline: study.h1,
        description: study.seoDescription,
        inLanguage: 'fr-FR',
        isPartOf: { '@id': 'https://alkymya.co/#website' },
        mainEntity: { '@id': `${canonicalUrl}#article` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` }
      },
      {
        '@type': ['Article', 'Dataset'],
        '@id': `${canonicalUrl}#article`,
        name: study.title,
        headline: study.h1,
        description: study.lead,
        datePublished: study.datePublished,
        dateModified: study.dateModified,
        version: study.version,
        inLanguage: 'fr-FR',
        isAccessibleForFree: true,
        license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
        author: {
          '@type': 'Person',
          '@id': 'https://alkymya.co/#cyril-garnier',
          name: 'Cyril Garnier',
          url: 'https://alkymya.co/alchimistes/cyril-garnier/'
        },
        creator: {
          '@id': 'https://alkymya.co/#cyril-garnier'
        },
        publisher: {
          '@id': 'https://alkymya.co/#organization'
        },
        distribution: [
          {
            '@type': 'DataDownload',
            encodingFormat: 'application/pdf',
            contentUrl: study.pdfUrl,
            name: study.pdfFilename
          }
        ],
        mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://alkymya.co/' },
          { '@type': 'ListItem', position: 2, name: 'Nos Ressources', item: 'https://alkymya.co/ressources/' },
          { '@type': 'ListItem', position: 3, name: 'Nos études', item: 'https://alkymya.co/ressources/etudes/' },
          { '@type': 'ListItem', position: 4, name: study.shortTitle, item: canonicalUrl }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#f4f6f9] text-[#1F4F6E] min-h-screen font-['Roboto',sans-serif] selection:bg-[#C06721] selection:text-white">
      <SEO
        title={study.seoTitle}
        description={study.seoDescription}
        keywords={study.keywords}
        canonicalPath={study.path}
        ogImage={ogImage}
        type="Article"
        structuredData={structuredData}
      />

      {/* HERO ÉDITORIAL */}
      <header className="bg-[#1F4F6E] text-white py-16 sm:py-20 px-6 sm:px-10">
        <div className="max-w-[980px] mx-auto">
          <nav aria-label="Fil d'Ariane" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/75">
            <Link to="/" className="hover:text-[#02ADAB] transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link to="/ressources/" className="hover:text-[#02ADAB] transition-colors">
              Nos Ressources
            </Link>
            <span>/</span>
            <Link to="/ressources/etudes/" className="hover:text-[#02ADAB] transition-colors">
              Nos études
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{study.shortTitle}</span>
          </nav>

          <p className="text-[0.8rem] tracking-[0.16em] uppercase text-[#02ADAB] mb-3 font-medium">
            {study.eyebrow}
          </p>

          <h1 className="font-light text-[1.95rem] sm:text-[2.55rem] leading-[1.18] mb-4 text-white">
            {study.h1}
          </h1>

          <p className="text-[1.03rem] sm:text-[1.12rem] text-white/80 max-w-[800px] leading-[1.7] font-light mb-6">
            {study.lead}
          </p>

          {/* Bloc 8 métadonnées auteur/date en tête */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/80 mb-8">
            <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-[6px]">
              <UserCheck className="w-3.5 h-3.5 text-[#02ADAB]" />
              <span>Auteur : {study.author}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-[6px]">
              <Calendar className="w-3.5 h-3.5 text-[#02ADAB]" />
              <span>Période : {study.period} · {study.version}</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href={study.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download={study.pdfFilename}
              className="inline-flex items-center gap-2 bg-[#C06721] hover:bg-[#a85517] text-white text-sm font-medium py-3.5 px-6 rounded-[8px] transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger l’étude PDF</span>
            </a>

            {study.csvFilename && study.tables.length > 0 && (
              <button
                type="button"
                onClick={() => downloadCsvFromTables(study.csvFilename!, study.tables)}
                className="inline-flex items-center gap-2 bg-white/12 hover:bg-white/20 text-white text-sm font-medium py-3.5 px-5 rounded-[8px] border border-white/25 transition-colors cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Exporter les tableaux (CSV)</span>
              </button>
            )}

            <Link
              to="/ressources/etudes/"
              className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-[#02ADAB] transition-colors ml-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Toutes nos études</span>
            </Link>
          </div>
        </div>
      </header>

      {/* AUDIO PODCAST SI PRÉSENT (LA DOCTRINE IAG) */}
      {study.audioUrl && (
        <section className="max-w-[980px] mx-auto pt-10 px-6">
          <div className="bg-[#16384e] text-white rounded-[12px] p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-[460px]">
              <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#02ADAB]">
                <Headphones className="w-4 h-4" />
                <span>Podcast audio intégré · {study.audioDuration}</span>
              </div>
              <h2 className="text-[1.2rem] font-medium text-white">
                Écouter la synthèse audio de {study.shortTitle}
              </h2>
              <p className="text-xs text-white/75 leading-relaxed">
                Dialogue audio immersif résumant la thèse, les cinq piliers géopolitiques et les enjeux pour les dirigeants européens.
              </p>
            </div>
            <audio
              src={study.audioUrl}
              controls
              preload="metadata"
              className="w-full md:w-[420px] h-11 rounded-[8px]"
            />
          </div>
        </section>
      )}

      {/* BLOC 1 & 2 : QUESTION DE RECHERCHE & MÉTHODE */}
      <section className="max-w-[980px] mx-auto pt-12 pb-6 px-6 space-y-6">
        <div className="bg-white rounded-[12px] p-6 sm:p-8 shadow-[0_2px_16px_rgba(31,79,110,0.08)] border-l-4 border-l-[#02ADAB]">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#02ADAB] mb-2">
            <BookOpen className="w-4 h-4" />
            <span>1. La question posée</span>
          </div>
          <p className="text-[1.03rem] text-[#1F4F6E] leading-[1.7] font-normal">
            {study.researchQuestion}
          </p>
        </div>

        <div className="bg-white rounded-[12px] p-6 sm:p-8 shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
          <h2 className="text-[1.35rem] font-medium text-[#1F4F6E] mb-3">
            2. Méthode, échantillon et traitements
          </h2>
          <p className="text-[0.96rem] text-[#4a6a80] leading-[1.7] mb-4">{study.methodSummary}</p>
          <ul className="space-y-2">
            {study.methodBullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[0.92rem] text-[#4a6a80]">
                <CheckCircle2 className="w-4 h-4 text-[#02ADAB] shrink-0 mt-1" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BLOC 3 : 5 RÉSULTATS CHIFFRÉS + TABLEAUX HTML */}
      <section className="max-w-[980px] mx-auto py-6 px-6 space-y-8">
        <div>
          <h2 className="text-[1.5rem] sm:text-[1.7rem] font-light text-[#1F4F6E] mb-6">
            3. Les <strong className="font-medium">5 résultats chiffrés</strong> et tableaux de données
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {study.quantifiedResults.map((res) => (
              <div
                key={res.label}
                className="bg-white rounded-[12px] p-5 shadow-[0_2px_14px_rgba(31,79,110,0.07)] border-t-4 border-t-[#02ADAB]"
              >
                <div className="text-xl sm:text-2xl font-medium text-[#1F4F6E] mb-1">
                  {res.figure}
                </div>
                <div className="text-xs font-medium text-[#C06721] uppercase tracking-wide mb-2">
                  {res.label}
                </div>
                <p className="text-xs text-[#5a7a90] leading-relaxed">{res.explanation}</p>
              </div>
            ))}
          </div>
        </div>

        {study.tables.map((tbl) => (
          <div
            key={tbl.caption}
            className="bg-white rounded-[12px] shadow-[0_2px_16px_rgba(31,79,110,0.08)] overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-[rgba(31,79,110,0.08)] bg-[#f9fbfc]">
              <h3 className="text-[1.05rem] font-medium text-[#1F4F6E]">{tbl.caption}</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[rgba(31,79,110,0.1)] text-xs uppercase tracking-wider text-[#5a7a90] bg-[#f4f6f9]/60">
                    {tbl.headers.map((header) => (
                      <th key={header} className="py-3.5 px-5 font-medium">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgba(31,79,110,0.08)] text-[0.9rem]">
                  {tbl.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-[#f4f6f9]/50 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`py-3.5 px-5 ${
                            cIdx === 0 ? 'font-medium text-[#1F4F6E]' : 'text-[#4a6a80]'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>

      {/* BLOC 4 & 5 : EN CLAIR & LIMITES */}
      <section className="max-w-[980px] mx-auto py-6 px-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {study.enClairBoxes.map((box) => (
            <div
              key={box.title}
              className="bg-[#1F4F6E] text-white rounded-[12px] p-6 sm:p-7 shadow-sm"
            >
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#02ADAB] mb-2">
                <Lightbulb className="w-4 h-4" />
                <span>4. Lecture terrain</span>
              </div>
              <h3 className="text-[1.12rem] font-medium text-white mb-2">{box.title}</h3>
              <p className="text-[0.93rem] text-white/85 leading-[1.65]">{box.takeaway}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[12px] p-6 sm:p-8 shadow-[0_2px_14px_rgba(31,79,110,0.07)] border-l-4 border-l-[#C06721]">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#C06721] mb-2">
            <AlertTriangle className="w-4 h-4" />
            <span>5. Limites méthodologiques assumées</span>
          </div>
          <ul className="space-y-2 mt-3">
            {study.limits.map((lim) => (
              <li key={lim} className="text-[0.93rem] text-[#4a6a80] leading-[1.6] flex items-start gap-2">
                <span className="text-[#C06721] font-bold">•</span>
                <span>{lim}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BLOC 6, 7 & 8 : RECOMMANDATION DATÉE, EXPORTS & AUTEUR */}
      <section className="max-w-[980px] mx-auto pt-4 pb-16 px-6 space-y-6">
        <div className="bg-white rounded-[12px] p-6 sm:p-8 shadow-[0_2px_16px_rgba(31,79,110,0.08)]">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#037971] mb-2">
            <Compass className="w-4 h-4" />
            <span>6. Recommandation opérationnelle · {study.recommendationDate}</span>
          </div>
          <p className="text-[0.98rem] text-[#1F4F6E] leading-[1.7] mb-4">
            {study.operationalRecommendation}
          </p>

          <hr className="border-t border-[rgba(31,79,110,0.08)] my-5" />

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#02ADAB] shrink-0 mt-0.5" />
            <div className="text-xs text-[#5a7a90] leading-relaxed space-y-1">
              <p>
                <strong className="text-[#1F4F6E]">8. Auteur, date et transparence :</strong> {study.author} — Publié le {study.datePublished}, mis à jour le {study.dateModified}. {study.transparencyNote}
              </p>
              {study.coAuthors && <p>{study.coAuthors}</p>}
            </div>
          </div>
        </div>

        {/* Bloc 7 : Téléchargement PDF / CSV */}
        <div className="bg-white rounded-[12px] p-6 sm:p-8 shadow-[0_2px_16px_rgba(31,79,110,0.08)] flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-[#02ADAB] block mb-1">
              7. Exports complets (le document en bonus)
            </span>
            <h2 className="text-[1.3rem] font-medium text-[#1F4F6E]">
              Télécharger {study.shortTitle}
            </h2>
            <p className="text-sm text-[#5a7a90] mt-1">
              Accès direct sans formulaire au rapport original ({study.version}).
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={study.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download={study.pdfFilename}
              className="inline-flex items-center gap-2 bg-[#C06721] hover:bg-[#a85517] text-white text-sm font-medium py-3 px-6 rounded-[8px] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger le PDF</span>
            </a>
            {study.csvFilename && study.tables.length > 0 && (
              <button
                type="button"
                onClick={() => downloadCsvFromTables(study.csvFilename!, study.tables)}
                className="inline-flex items-center gap-2 bg-[#f4f6f9] hover:bg-[#e7ecf2] text-[#1F4F6E] text-sm font-medium py-3 px-5 rounded-[8px] transition-colors cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Télécharger CSV</span>
              </button>
            )}
          </div>
        </div>

        {/* Liens transverses */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {study.crossLinks.map((lnk) => (
            <Link
              key={lnk.href}
              to={lnk.href}
              className="flex items-center justify-between gap-2 p-4 rounded-[10px] bg-white shadow-[0_2px_10px_rgba(31,79,110,0.06)] text-sm font-medium text-[#1F4F6E] hover:text-[#C06721] transition-colors"
            >
              <span>{lnk.label}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      <div className="bg-[#C06721] text-white text-center py-14 px-8">
        <h2 className="text-[1.8rem] font-light mb-3 text-white">
          Transformer ces résultats en <strong className="font-medium">plan d’action</strong>
        </h2>
        <p className="text-[1rem] text-white/90 max-w-[540px] mx-auto mb-7 font-light">
          Présentez ces données à vos équipes pédagogiques ou dirigeantes lors d’une conférence ou d’un atelier pratique Alkymya.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact/"
            className="inline-flex items-center gap-2 bg-white text-[#C06721] text-sm font-medium py-3.5 px-7 rounded-[8px]"
          >
            <span>Contacter Cyril Garnier</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <NewsletterButton
            variant="outline"
            size="md"
            label="Recevoir les prochaines études"
            className="border-white/40 text-white hover:bg-white/10 rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
}
