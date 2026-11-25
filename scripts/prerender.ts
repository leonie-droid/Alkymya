import fs from 'node:fs';
import path from 'node:path';
import { routes, RouteData } from '../src/data/routes';
import { alchimistes, AlchimisteProfile } from '../src/data/alchimistes';
import { INTERVIEW_GEMINI_4_PDF_URL, etudeGemini4Data } from '../src/data/etudeGemini4';
import { studiesList } from '../src/data/etudes';
import { analyseursList } from '../src/data/analyseurs';
import { allFaqItems } from '../src/data/faq';
import {
  partnerCategories,
  allPartners,
  partnerDetails,
  cmiSystemesData,
  cpme77Data,
  euridisFormationData,
  iesegFormationData,
  morningData
} from '../src/data/partenaires';
import { cloudinaryUrl, cloudinarySrcSet } from '../src/utils/cloudinary';
import {
  BASE_VERIFIED_REVIEWS,
  GOOGLE_MAPS_URL,
  OFFICIAL_ATELIER_RECOMMENDATION,
  OFFICIAL_GOOGLE_RATING,
  OFFICIAL_GOOGLE_REVIEW_COUNT,
} from '../src/data/reviews';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getPartnerCategorySlugFromPath(routePath: string): string | null {
  const parts = routePath.split('/').filter(Boolean);
  if (parts[0] === 'partenaires' && parts.length === 2) return parts[1];
  return null;
}

function getPartnerDetailFromPath(routePath: string) {
  const parts = routePath.split('/').filter(Boolean);
  if (parts[0] === 'partenaires' && parts.length === 3) {
    const detail = partnerDetails[parts[2]];
    if (detail && detail.categorySlug === parts[1]) return detail;
  }
  return undefined;
}

function buildBreadcrumbHtml(route: RouteData): string {
  const crumbs: Array<{ label: string; href?: string }> = [{ label: 'Accueil', href: '/' }];

  if (route.path.startsWith('/alchimistes/')) {
    crumbs.push({ label: 'Nos Alchimistes', href: '/alchimistes/' });
    crumbs.push({ label: breadcrumbNames[route.path] || route.h1 });
  } else if (route.path.startsWith('/partenaires/')) {
    crumbs.push({ label: 'Nos Partenaires', href: '/partenaires/' });
    const parts = route.path.split('/').filter(Boolean);
    const catMeta = partnerCategories.find((c) => c.slug === parts[1]);
    if (parts.length === 2) {
      crumbs.push({ label: catMeta?.name || breadcrumbNames[route.path] || route.h1 });
    } else if (parts.length === 3) {
      crumbs.push({ label: catMeta?.name || parts[1], href: `/partenaires/${parts[1]}/` });
      crumbs.push({ label: breadcrumbNames[route.path] || route.h1 });
    }
  } else if (route.path === '/ressources/etudes') {
    crumbs.push({ label: 'Nos Ressources', href: '/ressources/' });
    crumbs.push({ label: 'Nos études' });
  } else if (route.path.startsWith('/ressources/etudes/')) {
    crumbs.push({ label: 'Nos Ressources', href: '/ressources/' });
    crumbs.push({ label: 'Nos études', href: '/ressources/etudes/' });
    crumbs.push({ label: breadcrumbNames[route.path] || route.h1 });
  } else if (route.path === '/ressources/analyseurs') {
    crumbs.push({ label: 'Nos Ressources', href: '/ressources/' });
    crumbs.push({ label: 'Nos Analyseurs' });
  } else if (route.path.startsWith('/ressources/analyseurs/')) {
    crumbs.push({ label: 'Nos Ressources', href: '/ressources/' });
    crumbs.push({ label: 'Nos Analyseurs', href: '/ressources/analyseurs/' });
    crumbs.push({ label: breadcrumbNames[route.path] || route.h1 });
  } else if (route.path === '/ressources/business-game') {
    crumbs.push({ label: 'Nos Ressources', href: '/ressources/' });
    crumbs.push({ label: 'Business Game NoNo BanaBa' });
  } else {
    return '';
  }

  return `
        <nav aria-label="Fil d'Ariane" style="max-width: 900px; margin: 0 auto 1.5rem auto; font-size: 0.875rem; color: #475569; text-align: center;">
          ${crumbs
            .map((c, i) => {
              const sep = i > 0 ? '<span aria-hidden="true" style="margin: 0 0.5rem;">/</span>' : '';
              if (c.href) {
                return `${sep}<a href="${c.href}" style="color: #037971; text-decoration: none;">${escapeHtml(c.label)}</a>`;
              }
              return `${sep}<span aria-current="page" style="color: #1F4F6E; font-weight: 600;">${escapeHtml(c.label)}</span>`;
            })
            .join('')}
        </nav>`;
}

function generateStudyStaticHtml(routePath: string): string {
  const slug = routePath.replace('/ressources/etudes/', '').replace(/\/$/, '');
  if (slug === 'interview-gemini-4') {
    return `
        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 2rem 2.5rem; margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #1F4F6E; margin-top: 0;">${escapeHtml(etudeGemini4Data.title)}</h2>
          <p style="color: #334155;">${escapeHtml(etudeGemini4Data.intro)}</p>
          <p style="font-size: 0.9rem; color: #475569;">${escapeHtml(etudeGemini4Data.transparencyNote)}</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
            ${etudeGemini4Data.highlights
              .map(
                (h) => `
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1rem;">
                <div style="font-size: 1.5rem; font-weight: 800; color: #C06721;">${escapeHtml(h.value)}</div>
                <div style="font-size: 0.85rem; font-weight: 700; color: #1F4F6E; margin: 0.25rem 0;">${escapeHtml(h.label)}</div>
                <div style="font-size: 0.82rem; color: #475569;">${escapeHtml(h.detail)}</div>
              </div>`
              )
              .join('')}
          </div>
        </section>

        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 2rem 2.5rem; margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.35rem; font-weight: 800; color: #1F4F6E; margin-top: 0;">Les 4 temps forts du retour d'expérience terrain</h2>
          ${etudeGemini4Data.sections
            .map(
              (sec) => `
            <div style="margin-bottom: 1.5rem; padding-bottom: 1.25rem; border-bottom: 1px solid #e2e8f0;">
              <h3 style="font-size: 1.15rem; color: #1F4F6E; margin: 0 0 0.5rem 0;">${escapeHtml(sec.number)}. ${escapeHtml(sec.title)}</h3>
              <p style="color: #334155;">${escapeHtml(sec.summary)}</p>
              <ul style="padding-left: 1.5rem; color: #475569;">
                ${sec.keyPoints.map((kp) => `<li style="margin-bottom: 0.3rem;">${escapeHtml(kp)}</li>`).join('')}
              </ul>
              <blockquote style="margin: 0.75rem 0 0 0; padding-left: 1rem; border-left: 3px solid #02ADAB; color: #1F4F6E; font-style: italic;">« ${escapeHtml(sec.quote)} »</blockquote>
            </div>`
            )
            .join('')}
        </section>

        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 2rem 2.5rem; margin-bottom: 2.5rem; overflow-x: auto;">
          <h2 style="font-size: 1.35rem; font-weight: 800; color: #1F4F6E; margin-top: 0;">Gamme Gemini 4 &amp; Données de performance officielles (${escapeHtml(etudeGemini4Data.version)})</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem; text-align: left; margin-bottom: 2rem;">
            <thead>
              <tr style="background: #1F4F6E; color: #ffffff;">
                <th style="padding: 0.75rem 1rem; border: 1px solid #cbd5e1;">Modèle</th>
                <th style="padding: 0.75rem 1rem; border: 1px solid #cbd5e1;">Date de sortie</th>
                <th style="padding: 0.75rem 1rem; border: 1px solid #cbd5e1;">Positionnement</th>
                <th style="padding: 0.75rem 1rem; border: 1px solid #cbd5e1;">Spécifications &amp; tarifs API</th>
              </tr>
            </thead>
            <tbody>
              ${etudeGemini4Data.models
                .map(
                  (m, idx) => `
                <tr style="background: ${idx % 2 === 0 ? '#ffffff' : '#f8fafc'};">
                  <td style="padding: 0.75rem 1rem; border: 1px solid #e2e8f0; font-weight: 700; color: #1F4F6E;">${escapeHtml(m.model)}</td>
                  <td style="padding: 0.75rem 1rem; border: 1px solid #e2e8f0; color: #334155;">${escapeHtml(m.releaseDate)}</td>
                  <td style="padding: 0.75rem 1rem; border: 1px solid #e2e8f0; color: #334155;">${escapeHtml(m.positioning)}</td>
                  <td style="padding: 0.75rem 1rem; border: 1px solid #e2e8f0; color: #334155;">${escapeHtml(m.specsAndPricing)}</td>
                </tr>`
                )
                .join('')}
            </tbody>
          </table>

          <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem; text-align: left;">
            <thead>
              <tr style="background: #1F4F6E; color: #ffffff;">
                <th style="padding: 0.75rem 1rem; border: 1px solid #cbd5e1;">Indicateur</th>
                <th style="padding: 0.75rem 1rem; border: 1px solid #cbd5e1;">Résultat mesuré</th>
                <th style="padding: 0.75rem 1rem; border: 1px solid #cbd5e1;">Source</th>
              </tr>
            </thead>
            <tbody>
              ${etudeGemini4Data.benchmarks
                .map(
                  (b, idx) => `
                <tr style="background: ${idx % 2 === 0 ? '#ffffff' : '#f8fafc'};">
                  <td style="padding: 0.75rem 1rem; border: 1px solid #e2e8f0; font-weight: 700; color: #1F4F6E;">${escapeHtml(b.metric)}</td>
                  <td style="padding: 0.75rem 1rem; border: 1px solid #e2e8f0; color: #C06721; font-weight: 700;">${escapeHtml(b.result)}</td>
                  <td style="padding: 0.75rem 1rem; border: 1px solid #e2e8f0; color: #334155;">${escapeHtml(b.source)}</td>
                </tr>`
                )
                .join('')}
            </tbody>
          </table>

          <div style="margin-top: 1.5rem;">
            <a href="${etudeGemini4Data.pdfUrl}" target="_blank" rel="noopener noreferrer" download="Interview_Gemini_4_Cyril_Garnier_V9.pdf" style="display: inline-block; background: #C06721; color: #ffffff; font-weight: 700; text-decoration: none; padding: 0.85rem 1.5rem; border-radius: 0.5rem;">
              Télécharger l'étude complète Interview Gemini 4 (PDF · ${escapeHtml(etudeGemini4Data.version)}) →
            </a>
          </div>
        </section>`;
  }
  const study = studiesList.find((s) => s.slug === slug);
  if (!study) return '';

  return `
        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 2rem 2.5rem; margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #1F4F6E; margin-top: 0;">Question de recherche &amp; Protocole (${escapeHtml(study.period)})</h2>
          <p style="color: #334155;">${escapeHtml(study.researchQuestion)}</p>
          <p style="color: #475569;">${escapeHtml(study.methodSummary)}</p>
          <ul style="padding-left: 1.5rem; color: #334155;">
            ${study.methodBullets.map((b) => `<li style="margin-bottom: 0.4rem;">${escapeHtml(b)}</li>`).join('')}
          </ul>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
            ${study.quantifiedResults
              .map(
                (r) => `
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1rem;">
                <div style="font-size: 1.5rem; font-weight: 800; color: #C06721;">${escapeHtml(r.figure)}</div>
                <div style="font-size: 0.85rem; font-weight: 700; color: #1F4F6E; margin: 0.25rem 0;">${escapeHtml(r.label)}</div>
                <div style="font-size: 0.82rem; color: #475569;">${escapeHtml(r.explanation)}</div>
              </div>`
              )
              .join('')}
          </div>
        </section>

        ${study.tables
          .map(
            (table) => `
        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 2rem 2.5rem; margin-bottom: 2.5rem; overflow-x: auto;">
          <h2 style="font-size: 1.35rem; font-weight: 800; color: #1F4F6E; margin-top: 0;">${escapeHtml(table.caption)}</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem; text-align: left;">
            <thead>
              <tr style="background: #1F4F6E; color: #ffffff;">
                ${table.headers.map((h) => `<th style="padding: 0.75rem 1rem; border: 1px solid #cbd5e1;">${escapeHtml(h)}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${table.rows
                .map(
                  (row, idx) => `
                <tr style="background: ${idx % 2 === 0 ? '#ffffff' : '#f8fafc'};">
                  ${row.map((cell) => `<td style="padding: 0.75rem 1rem; border: 1px solid #e2e8f0; color: #334155;">${escapeHtml(cell)}</td>`).join('')}
                </tr>`
                )
                .join('')}
            </tbody>
          </table>
        </section>`
          )
          .join('')}

        <section style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 1.25rem; padding: 2rem 2.5rem; margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.35rem; font-weight: 800; color: #1F4F6E; margin-top: 0;">En clair, limites méthodologiques &amp; recommandation datée</h2>
          ${study.enClairBoxes
            .map(
              (box) => `
            <div style="background: #ffffff; border-left: 4px solid #02ADAB; padding: 1rem 1.25rem; margin-bottom: 1rem; border-radius: 0.5rem;">
              <strong style="color: #1F4F6E; display: block; margin-bottom: 0.25rem;">${escapeHtml(box.title)}</strong>
              <span style="color: #334155;">${escapeHtml(box.takeaway)}</span>
            </div>`
            )
            .join('')}
          <ul style="padding-left: 1.5rem; color: #475569; margin: 1rem 0;">
            ${study.limits.map((l) => `<li style="margin-bottom: 0.35rem;">${escapeHtml(l)}</li>`).join('')}
          </ul>
          <p style="font-size: 0.9rem; color: #C06721; font-weight: 700;">${escapeHtml(study.recommendationDate)}</p>
          <p style="color: #1F4F6E;">${escapeHtml(study.operationalRecommendation)}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.25rem;">
            <a href="${study.pdfUrl}" target="_blank" rel="noopener noreferrer" download="${escapeHtml(study.pdfFilename)}" style="display: inline-block; background: #C06721; color: #ffffff; font-weight: 700; text-decoration: none; padding: 0.85rem 1.5rem; border-radius: 0.5rem;">
              Télécharger ${escapeHtml(study.shortTitle)} (PDF · ${escapeHtml(study.version)}) →
            </a>
            ${
              study.audioUrl
                ? `<a href="${study.audioUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #1F4F6E; color: #ffffff; font-weight: 700; text-decoration: none; padding: 0.85rem 1.5rem; border-radius: 0.5rem;">
                    Écouter le podcast audio (${escapeHtml(study.audioDuration || 'Audio')}) →
                  </a>`
                : ''
            }
          </div>
        </section>`;
}

function generatePartnerStaticHtml(routePath: string): string {
  if (routePath === '/partenaires') {
    return `
        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 2rem 2.5rem; margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #1F4F6E; margin-top: 0;">Les 6 pôles de partenaires et leurs liens vérifiés</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
            ${partnerCategories
              .map(
                (cat) => `
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.25rem;">
                <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; color: #1F4F6E;">
                  <a href="/partenaires/${cat.slug}/" style="color: #1F4F6E; text-decoration: underline;">${escapeHtml(cat.name)}</a>
                </h3>
                <p style="margin: 0; font-size: 0.9rem; color: #475569;">${escapeHtml(cat.cardSummary)}</p>
              </div>`
              )
              .join('')}
          </div>
          <h3 style="margin-top: 2rem; font-size: 1.15rem; color: #1F4F6E;">Toutes les organisations liées</h3>
          <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.65rem; list-style: none; padding: 0;">
            ${allPartners
              .map(
                (p) => `
              <li>
                <a href="${escapeHtml(p.websiteUrl)}" target="_blank" rel="noopener noreferrer" style="color: #037971; font-weight: 600; text-decoration: underline;">${escapeHtml(p.name)}</a>
                <span style="color: #64748b; font-size: 0.85rem;"> — ${escapeHtml(p.relation)}</span>
              </li>`
              )
              .join('')}
          </ul>
        </section>`;
  }

  const catSlug = getPartnerCategorySlugFromPath(routePath);
  if (catSlug) {
    const partners = allPartners.filter((p) => p.categorySlug === catSlug);
    const catMeta = partnerCategories.find((c) => c.slug === catSlug);
    return `
        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 2rem 2.5rem; margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #1F4F6E; margin-top: 0;">${escapeHtml(catMeta?.name || 'Partenaires')} — Annuaire lié</h2>
          <div style="display: grid; gap: 1rem;">
            ${partners
              .map(
                (p) => `
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.25rem;">
                <h3 style="margin: 0 0 0.35rem 0; color: #1F4F6E;">${escapeHtml(p.name)} <span style="font-weight: 400; font-size: 0.9rem; color: #64748b;">(${escapeHtml(p.city)})</span></h3>
                <p style="margin: 0 0 0.75rem 0; color: #334155;">${escapeHtml(p.summary)}</p>
                <div style="display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.9rem;">
                  <a href="${escapeHtml(p.websiteUrl)}" target="_blank" rel="noopener noreferrer" style="color: #037971; font-weight: 700; text-decoration: underline;">Site officiel : ${escapeHtml(p.name)} →</a>
                  ${p.hasDetailPage ? `<a href="/partenaires/${p.categorySlug}/${p.slug}/" style="color: #C06721; font-weight: 700; text-decoration: underline;">Fiche partenariat ${escapeHtml(p.name)} →</a>` : ''}
                  ${p.alchimistePath ? `<a href="${p.alchimistePath}" style="color: #1F4F6E; font-weight: 600; text-decoration: underline;">Profil alchimiste associé</a>` : ''}
                </div>
              </div>`
              )
              .join('')}
          </div>
        </section>`;
  }

  const detail = getPartnerDetailFromPath(routePath);
  if (detail) {
    return `
        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 2rem 2.5rem; margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #1F4F6E; margin-top: 0;">Rôle de ${escapeHtml(detail.name)} aux côtés d'Alkymya</h2>
          <p style="color: #334155;">${escapeHtml(detail.roleSummary)}</p>
          <p style="margin-top: 1rem;">
            <a href="${escapeHtml(detail.ctaUrl)}" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #1F4F6E; color: #ffffff; font-weight: 700; text-decoration: none; padding: 0.75rem 1.25rem; border-radius: 0.5rem;">
              ${escapeHtml(detail.ctaLabel)} (${escapeHtml(detail.name)}) →
            </a>
          </p>
          <ul style="padding-left: 1.5rem; color: #334155; margin-top: 1.25rem;">
            ${detail.jointActions.map((a) => `<li style="margin-bottom: 0.4rem;"><strong>${escapeHtml(a.title)} :</strong> ${escapeHtml(a.detail)}</li>`).join('')}
          </ul>
          ${
            detail.videos && detail.videos.length > 0
              ? `<h3 style="margin-top: 1.5rem; color: #1F4F6E;">Les 5 capsules vidéo Alkymya x INATEC</h3>
                 <ul style="padding-left: 1.5rem; color: #334155;">
                   ${detail.videos.map((v) => `<li style="margin-bottom: 0.4rem;"><strong>${escapeHtml(v.title)} :</strong> ${escapeHtml(v.description)} (<a href="${escapeHtml(v.url)}" target="_blank" rel="noopener noreferrer" style="color: #037971;">Voir la capsule vidéo</a>)</li>`).join('')}
                 </ul>`
              : ''
          }
          ${
            detail.slug === 'euridis'
              ? `<div style="margin-top: 2rem; border-top: 1px solid #e2e8f0; padding-top: 1.5rem;">
                   <p style="font-weight: 700; color: #1F4F6E; margin: 0 0 0.35rem 0;">${escapeHtml(euridisFormationData.ruleStatement)} ${escapeHtml(euridisFormationData.coreThesis)}</p>
                   <p style="color: #334155;">${escapeHtml(euridisFormationData.introNote)}</p>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">${escapeHtml(euridisFormationData.day1.title)}</h3>
                   <p style="font-weight: 700; color: #1F4F6E; margin-bottom: 0.4rem;">${escapeHtml(euridisFormationData.day1.morningTitle)}</p>
                   <ul style="padding-left: 1.5rem; color: #334155;">
                     ${euridisFormationData.day1.morningItems.map((i) => `<li style="margin-bottom: 0.3rem;">${escapeHtml(i)}</li>`).join('')}
                   </ul>
                   <p style="font-weight: 700; color: #1F4F6E; margin: 0.75rem 0 0.25rem 0;">${escapeHtml(euridisFormationData.day1.afternoonTitle)}</p>
                   <p style="color: #334155;">${escapeHtml(euridisFormationData.day1.afternoonSummary)}</p>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">${escapeHtml(euridisFormationData.day2.title)}</h3>
                   <p style="color: #334155;">${escapeHtml(euridisFormationData.day2.intro)}</p>
                   <ol style="padding-left: 1.5rem; color: #334155;">
                     ${euridisFormationData.day2.steps.map((s) => `<li style="margin-bottom: 0.35rem;"><strong>${escapeHtml(s.title)} :</strong> ${escapeHtml(s.detail)}</li>`).join('')}
                   </ol>
                   <p style="color: #334155;">${escapeHtml(euridisFormationData.day2.synthesisNote)}</p>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">${escapeHtml(euridisFormationData.harness.title)}</h3>
                   <p style="color: #334155;">${escapeHtml(euridisFormationData.harness.intro)}</p>
                   <ul style="padding-left: 1.5rem; color: #334155;">
                     ${euridisFormationData.harness.components.map((c) => `<li style="margin-bottom: 0.3rem;"><strong>${escapeHtml(c.name)} :</strong> ${escapeHtml(c.detail)}</li>`).join('')}
                   </ul>
                   <p style="color: #334155;">${escapeHtml(euridisFormationData.harness.capitalIaLink)}</p>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">La stack de la formation</h3>
                   <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: left; margin-top: 0.5rem;">
                     <thead>
                       <tr style="background: #1F4F6E; color: #ffffff;">
                         <th style="padding: 0.65rem 0.9rem; border: 1px solid #cbd5e1;">Pôle</th>
                         <th style="padding: 0.65rem 0.9rem; border: 1px solid #cbd5e1;">Outils &amp; briques pratiqués</th>
                       </tr>
                     </thead>
                     <tbody>
                       ${euridisFormationData.stack
                         .map(
                           (row, idx) => `<tr style="background: ${idx % 2 === 0 ? '#ffffff' : '#f8fafc'};">
                             <td style="padding: 0.65rem 0.9rem; border: 1px solid #e2e8f0; font-weight: 700; color: #1F4F6E;">${escapeHtml(row.category)}</td>
                             <td style="padding: 0.65rem 0.9rem; border: 1px solid #e2e8f0; color: #334155;">${escapeHtml(row.tools)}</td>
                           </tr>`
                         )
                         .join('')}
                     </tbody>
                   </table>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">Ce que les étudiants emportent</h3>
                   <ul style="padding-left: 1.5rem; color: #334155;">
                     ${euridisFormationData.takeaways.map((t) => `<li style="margin-bottom: 0.3rem;">${escapeHtml(t)}</li>`).join('')}
                   </ul>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">Questions fréquentes</h3>
                   <dl style="color: #334155;">
                     ${euridisFormationData.faq.map((q) => `<dt style="font-weight: 700; color: #1F4F6E; margin-top: 0.6rem;">${escapeHtml(q.question)}</dt><dd style="margin: 0.2rem 0 0.5rem 0;">${escapeHtml(q.answer)}</dd>`).join('')}
                   </dl>
                   <p style="font-style: italic; color: #475569; margin-top: 1rem;">${escapeHtml(euridisFormationData.attribution)}</p>
                 </div>`
              : ''
          }
          ${
            detail.slug === 'ieseg'
              ? `<div style="margin-top: 2rem; border-top: 1px solid #e2e8f0; padding-top: 1.5rem;">
                   <p style="font-weight: 700; color: #1F4F6E; margin: 0 0 0.35rem 0;">${escapeHtml(iesegFormationData.conviction)}</p>
                   <p style="color: #334155;">${escapeHtml(iesegFormationData.intro)}</p>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">Quatre façons d'intervenir</h3>
                   <ol style="padding-left: 1.5rem; color: #334155;">
                     ${iesegFormationData.interventions
                       .map(
                         (item) => `<li style="margin-bottom: 0.65rem;">
                           <strong>${escapeHtml(item.title)} :</strong> ${escapeHtml(item.description)}
                           ${
                             item.bullets
                               ? `<ul style="padding-left: 1.25rem; margin-top: 0.35rem;">${item.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}</ul>`
                               : ''
                           }
                         </li>`
                       )
                       .join('')}
                   </ol>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">${escapeHtml(iesegFormationData.fieldObservation.title)}</h3>
                   <p style="font-weight: 700; color: #1F4F6E;">${escapeHtml(iesegFormationData.fieldObservation.leadStat)}</p>
                   <p style="color: #334155;">${escapeHtml(iesegFormationData.fieldObservation.summary)}</p>
                   <p style="color: #334155;">${escapeHtml(iesegFormationData.fieldObservation.finding)}</p>
                   <p style="font-style: italic; color: #475569;">${escapeHtml(iesegFormationData.fieldObservation.methodologyNote)}</p>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">${escapeHtml(iesegFormationData.soda.title)}</h3>
                   <p style="color: #334155;">${escapeHtml(iesegFormationData.soda.description)}</p>
                   <blockquote style="margin: 0.75rem 0; padding: 1rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; color: #1F4F6E; font-style: italic;">
                     « ${escapeHtml(iesegFormationData.soda.review.quote)} » — <strong>${escapeHtml(iesegFormationData.soda.review.author)}</strong> (${escapeHtml(iesegFormationData.soda.review.source)})
                   </blockquote>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">Ce qu'en disent les étudiants sur l'accompagnement</h3>
                   ${iesegFormationData.testimonials
                     .map(
                       (t) => `<blockquote style="margin: 0.75rem 0; padding: 1rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; color: #334155; font-style: italic;">
                         « ${escapeHtml(t.quote)} » — <strong style="color: #1F4F6E;">${escapeHtml(t.author)}</strong> (${escapeHtml(t.roleAndSource)})
                       </blockquote>`
                     )
                     .join('')}
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">Les mots-clés de l'accompagnement</h3>
                   <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: left; margin-top: 0.5rem;">
                     <thead>
                       <tr style="background: #1F4F6E; color: #ffffff;">
                         <th style="padding: 0.65rem 0.9rem; border: 1px solid #cbd5e1;">Axe</th>
                         <th style="padding: 0.65rem 0.9rem; border: 1px solid #cbd5e1;">Notions &amp; pratiques</th>
                       </tr>
                     </thead>
                     <tbody>
                       ${iesegFormationData.keywordGroups
                         .map(
                           (row, idx) => `<tr style="background: ${idx % 2 === 0 ? '#ffffff' : '#f8fafc'};">
                             <td style="padding: 0.65rem 0.9rem; border: 1px solid #e2e8f0; font-weight: 700; color: #1F4F6E;">${escapeHtml(row.category)}</td>
                             <td style="padding: 0.65rem 0.9rem; border: 1px solid #e2e8f0; color: #334155;">${escapeHtml(row.keywords)}</td>
                           </tr>`
                         )
                         .join('')}
                     </tbody>
                   </table>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">Questions fréquentes</h3>
                   <dl style="color: #334155;">
                     ${iesegFormationData.faq.map((q) => `<dt style="font-weight: 700; color: #1F4F6E; margin-top: 0.6rem;">${escapeHtml(q.question)}</dt><dd style="margin: 0.2rem 0 0.5rem 0;">${escapeHtml(q.answer)}</dd>`).join('')}
                   </dl>
                   <p style="font-style: italic; color: #475569; margin-top: 1rem;">${escapeHtml(iesegFormationData.attribution)}</p>
                 </div>`
              : detail.slug === 'cpme-77'
              ? `<div style="margin-top: 1.75rem; border-top: 1px solid #e2e8f0; padding-top: 1.5rem;">
                   <p style="font-weight: 700; color: #1F4F6E; margin: 0 0 0.35rem 0;">${escapeHtml(cpme77Data.conviction)}</p>
                   <p style="color: #334155;">${escapeHtml(cpme77Data.intro)}</p>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">${escapeHtml(cpme77Data.morningAi.heading)}</h3>
                   <p style="font-weight: 700; color: #037971; margin: 0.25rem 0;">${escapeHtml(cpme77Data.morningAi.dateAndTime)} — ${escapeHtml(cpme77Data.morningAi.speaker)}</p>
                   <p style="color: #334155;">${escapeHtml(cpme77Data.morningAi.summary)}</p>
                   <p style="font-weight: 700; color: #1F4F6E; margin-bottom: 0.4rem;">${escapeHtml(cpme77Data.morningAi.programmeIntro)}</p>
                   <ul style="padding-left: 1.5rem; color: #334155;">
                     ${cpme77Data.morningAi.programme.map((i) => `<li style="margin-bottom: 0.3rem;">${escapeHtml(i)}</li>`).join('')}
                   </ul>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">${escapeHtml(cpme77Data.morningCyber.heading)}</h3>
                   <p style="font-weight: 700; color: #C06721; margin: 0.25rem 0;">${escapeHtml(cpme77Data.morningCyber.dateAndTime)} — ${escapeHtml(cpme77Data.morningCyber.speaker)}</p>
                   <p style="color: #334155;">${escapeHtml(cpme77Data.morningCyber.summary)}</p>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">${escapeHtml(cpme77Data.whyCombine.heading)}</h3>
                   <p style="color: #334155;">${escapeHtml(cpme77Data.whyCombine.body)}</p>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">${escapeHtml(cpme77Data.tripartite.heading)}</h3>
                   <ul style="padding-left: 1.5rem; color: #334155;">
                     ${cpme77Data.tripartite.actors
                       .map(
                         (a) =>
                           `<li style="margin-bottom: 0.35rem;"><strong>${escapeHtml(a.name)}</strong> : ${escapeHtml(a.role)}${
                             a.url
                               ? ` (<a href="${escapeHtml(a.url)}" target="_blank" rel="noopener noreferrer" style="color: #037971;">${escapeHtml(a.url)}</a>)`
                               : ''
                           }</li>`
                       )
                       .join('')}
                   </ul>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">Les mots-clés de la matinée IA</h3>
                   <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: left; margin-top: 0.5rem;">
                     <thead>
                       <tr style="background: #1F4F6E; color: #ffffff;">
                         <th style="padding: 0.65rem 0.9rem; border: 1px solid #cbd5e1;">Axe</th>
                         <th style="padding: 0.65rem 0.9rem; border: 1px solid #cbd5e1;">Notions &amp; thèmes</th>
                       </tr>
                     </thead>
                     <tbody>
                       ${cpme77Data.keywordGroups
                         .map(
                           (row, idx) => `<tr style="background: ${idx % 2 === 0 ? '#ffffff' : '#f8fafc'};">
                             <td style="padding: 0.65rem 0.9rem; border: 1px solid #e2e8f0; font-weight: 700; color: #1F4F6E;">${escapeHtml(row.category)}</td>
                             <td style="padding: 0.65rem 0.9rem; border: 1px solid #e2e8f0; color: #334155;">${escapeHtml(row.keywords)}</td>
                           </tr>`
                         )
                         .join('')}
                     </tbody>
                   </table>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">Questions fréquentes</h3>
                   <dl style="color: #334155;">
                     ${cpme77Data.faq.map((q) => `<dt style="font-weight: 700; color: #1F4F6E; margin-top: 0.6rem;">${escapeHtml(q.question)}</dt><dd style="margin: 0.2rem 0 0.5rem 0;">${escapeHtml(q.answer)}</dd>`).join('')}
                   </dl>
                   <p style="font-style: italic; color: #475569; margin-top: 1rem;">${escapeHtml(cpme77Data.attribution)}</p>
                 </div>`
              : detail.slug === 'morning'
              ? `<div style="margin-top: 1.75rem; border-top: 1px solid #e2e8f0; padding-top: 1.5rem;">
                   <p style="color: #334155;">${escapeHtml(morningData.intro)}</p>
                   ${morningData.workshops
                     .map(
                       (ws) => `
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">${escapeHtml(ws.number)}, ${escapeHtml(ws.heading)}</h3>
                   <p style="font-weight: 700; color: #037971; margin: 0.25rem 0;">${escapeHtml(ws.dateAndTime)} — ${escapeHtml(ws.capacity)}</p>
                   <p style="color: #334155;">${escapeHtml(ws.detail)}</p>
                   <p style="color: #475569;"><strong>Retour :</strong> ${escapeHtml(ws.feedback)}</p>`
                     )
                     .join('')}
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">Pourquoi ce format ?</h3>
                   <ul style="padding-left: 1.5rem; color: #334155;">
                     ${morningData.whyFormat
                       .map(
                         (w) =>
                           `<li style="margin-bottom: 0.35rem;"><strong>${escapeHtml(w.audience)} :</strong> ${escapeHtml(w.benefit)}</li>`
                       )
                       .join('')}
                   </ul>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">Ce que couvre un atelier de découverte</h3>
                   <ul style="padding-left: 1.5rem; color: #334155;">
                     ${morningData.coveredTopics.map((t) => `<li style="margin-bottom: 0.3rem;">${escapeHtml(t)}</li>`).join('')}
                   </ul>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">Les mots-clés</h3>
                   <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: left; margin-top: 0.5rem;">
                     <thead>
                       <tr style="background: #1F4F6E; color: #ffffff;">
                         <th style="padding: 0.65rem 0.9rem; border: 1px solid #cbd5e1;">Axe</th>
                         <th style="padding: 0.65rem 0.9rem; border: 1px solid #cbd5e1;">Notions &amp; pratiques</th>
                       </tr>
                     </thead>
                     <tbody>
                       ${morningData.keywordGroups
                         .map(
                           (row, idx) => `<tr style="background: ${idx % 2 === 0 ? '#ffffff' : '#f8fafc'};">
                             <td style="padding: 0.65rem 0.9rem; border: 1px solid #e2e8f0; font-weight: 700; color: #1F4F6E;">${escapeHtml(row.category)}</td>
                             <td style="padding: 0.65rem 0.9rem; border: 1px solid #e2e8f0; color: #334155;">${escapeHtml(row.keywords)}</td>
                           </tr>`
                         )
                         .join('')}
                     </tbody>
                   </table>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">Questions fréquentes</h3>
                   <dl style="color: #334155;">
                     ${morningData.faq.map((q) => `<dt style="font-weight: 700; color: #1F4F6E; margin-top: 0.6rem;">${escapeHtml(q.question)}</dt><dd style="margin: 0.2rem 0 0.5rem 0;">${escapeHtml(q.answer)}</dd>`).join('')}
                   </dl>
                   <p style="font-style: italic; color: #475569; margin-top: 1rem;">${escapeHtml(morningData.attribution)}</p>
                 </div>`
              : detail.slug === 'cmi-systemes'
              ? `<div style="margin-top: 1.75rem; border-top: 1px solid #e2e8f0; padding-top: 1.5rem;">
                   <p style="color: #334155;">${escapeHtml(cmiSystemesData.identity.summary)}</p>
                   <p style="color: #334155;">${escapeHtml(cmiSystemesData.identity.collaboration)}</p>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">${escapeHtml(cmiSystemesData.whatTheyDo.title)}</h3>
                   <p style="color: #334155;">${escapeHtml(cmiSystemesData.whatTheyDo.subtitle)}</p>
                   <ul style="padding-left: 1.5rem; color: #334155;">
                     ${cmiSystemesData.whatTheyDo.services.map((s) => `<li style="margin-bottom: 0.3rem;">${escapeHtml(s)}</li>`).join('')}
                   </ul>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">${escapeHtml(cmiSystemesData.cyberAcademy.title)}</h3>
                   <p style="color: #334155;">${escapeHtml(cmiSystemesData.cyberAcademy.description)}</p>
                   <p style="font-weight: 700; color: #1F4F6E;">${escapeHtml(cmiSystemesData.cyberAcademy.qualiopiNote)}</p>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">${escapeHtml(cmiSystemesData.whyTogether.title)}</h3>
                   <p style="color: #334155;">${escapeHtml(cmiSystemesData.whyTogether.body)}</p>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">${escapeHtml(cmiSystemesData.jointWork.title)}</h3>
                   <ul style="padding-left: 1.5rem; color: #334155;">
                     ${cmiSystemesData.jointWork.items.map((i) => `<li style="margin-bottom: 0.35rem;"><strong>${escapeHtml(i.label)} :</strong> ${escapeHtml(i.detail)}</li>`).join('')}
                   </ul>
                   <p style="font-style: italic; color: #475569;">${escapeHtml(cmiSystemesData.jointWork.enrichmentNote)}</p>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">Les mots-clés</h3>
                   <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: left; margin-top: 0.5rem;">
                     <thead>
                       <tr style="background: #1F4F6E; color: #ffffff;">
                         <th style="padding: 0.65rem 0.9rem; border: 1px solid #cbd5e1;">Pôle</th>
                         <th style="padding: 0.65rem 0.9rem; border: 1px solid #cbd5e1;">Expertises &amp; champs d'intervention</th>
                       </tr>
                     </thead>
                     <tbody>
                       ${cmiSystemesData.keywordGroups
                         .map(
                           (row, idx) => `<tr style="background: ${idx % 2 === 0 ? '#ffffff' : '#f8fafc'};">
                             <td style="padding: 0.65rem 0.9rem; border: 1px solid #e2e8f0; font-weight: 700; color: #1F4F6E;">${escapeHtml(row.category)}</td>
                             <td style="padding: 0.65rem 0.9rem; border: 1px solid #e2e8f0; color: #334155;">${escapeHtml(row.keywords)}</td>
                           </tr>`
                         )
                         .join('')}
                     </tbody>
                   </table>
                   <h3 style="color: #1F4F6E; margin-top: 1.25rem;">Questions fréquentes</h3>
                   <dl style="color: #334155;">
                     ${cmiSystemesData.faq.map((q) => `<dt style="font-weight: 700; color: #1F4F6E; margin-top: 0.6rem;">${escapeHtml(q.question)}</dt><dd style="margin: 0.2rem 0 0.5rem 0;">${escapeHtml(q.answer)}</dd>`).join('')}
                   </dl>
                 </div>`
              : ''
          }
        </section>`;
  }

  return '';
}

function generateToolStaticHtml(routePath: string): string {
  if (routePath === '/ressources/business-game') {
    return `
        <div style="text-align: center; margin-bottom: 2rem;">
          <a href="https://nonobanaba.netlify.app/" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #C06721; color: #ffffff; font-weight: 700; text-decoration: none; padding: 0.9rem 1.6rem; border-radius: 0.5rem;">
            Accéder au Business Game NoNo BanaBa →
          </a>
        </div>`;
  }
  const slug = routePath.replace('/ressources/analyseurs/', '').replace(/\/$/, '');
  const tool = analyseursList.find((a) => a.slug === slug);
  if (!tool) return '';

  return `
        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 2rem 2.5rem; margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #1F4F6E; margin-top: 0;">${escapeHtml(tool.name)} — Mode d'emploi, limites et confidentialité</h2>
          <p style="color: #334155;">${escapeHtml(tool.whatItDoes)}</p>
          <p style="margin: 1rem 0;">
            <a href="${escapeHtml(tool.subdomain)}" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #02ADAB; color: #ffffff; font-weight: 700; text-decoration: none; padding: 0.85rem 1.5rem; border-radius: 0.5rem;">
              Ouvrir ${escapeHtml(tool.name)} (${escapeHtml(tool.subdomain.replace(/^https?:\/\//, '').replace(/\/$/, ''))}) →
            </a>
          </p>
          <h3 style="color: #1F4F6E;">Ce que cet outil ne fait pas</h3>
          <ul style="padding-left: 1.5rem; color: #475569;">
            ${tool.whatItDoesNotDo.map((l) => `<li style="margin-bottom: 0.35rem;">${escapeHtml(l)}</li>`).join('')}
          </ul>
          <p style="color: #334155; font-size: 0.95rem;"><strong>Confidentialité :</strong> ${escapeHtml(tool.privacy)}</p>
        </section>`;
}

function generateReviewsStaticHtml(routePath: string): string {
  if (!['/', '/ateliers', '/contact', '/faq'].includes(routePath)) return '';

  return `
        <section aria-labelledby="avis" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 2rem 2.5rem; margin-bottom: 2.5rem;">
          <p style="font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.14em; color: #037971; font-weight: 700; margin: 0 0 0.4rem 0;">
            Avis clients vérifiés · Google Business Profile
          </p>
          <h2 id="avis" style="font-size: 1.55rem; font-weight: 800; color: #1F4F6E; margin: 0 0 0.65rem 0;">
            Ce que disent nos clients — Note ${OFFICIAL_GOOGLE_RATING.toFixed(1).replace('.', ',')}/5 (${OFFICIAL_GOOGLE_REVIEW_COUNT} avis Google)
          </h2>
          <p style="color: #334155; margin: 0 0 1.25rem 0;">
            Score vérifié de <strong>${OFFICIAL_GOOGLE_RATING.toFixed(1).replace('.', ',')} / 5</strong> sur ${OFFICIAL_GOOGLE_REVIEW_COUNT} avis clients Google Business Profile et <strong>${escapeHtml(OFFICIAL_ATELIER_RECOMMENDATION)}</strong> de recommandation sur nos ateliers pratiques en entreprise et grande école.
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-bottom: 1.25rem;">
            ${BASE_VERIFIED_REVIEWS.map(
              (r) => `
            <article style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.25rem;">
              <div style="font-size: 0.85rem; font-weight: 700; color: #C06721; margin-bottom: 0.4rem;">★★★★★ 5/5</div>
              <blockquote style="margin: 0 0 0.75rem 0; color: #1e293b; font-size: 0.92rem; line-height: 1.6;">« ${escapeHtml(r.quote)} »</blockquote>
              <p style="margin: 0; font-size: 0.82rem; color: #475569;"><strong>${escapeHtml(r.author)}</strong> — ${escapeHtml(r.context)}</p>
            </article>`
            ).join('')}
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.9rem;">
            <a href="${GOOGLE_MAPS_URL}" target="_blank" rel="noopener noreferrer" style="color: #037971; font-weight: 700; text-decoration: underline;">Consulter les ${OFFICIAL_GOOGLE_REVIEW_COUNT} avis vérifiés sur Google Maps →</a>
            <a href="${GOOGLE_MAPS_URL}" target="_blank" rel="noopener noreferrer" style="color: #C06721; font-weight: 700; text-decoration: underline;">Laisser un avis post-mission sur Google →</a>
          </div>
        </section>`;
}

function generateHomeTeamStaticHtml(routePath: string): string {
  if (routePath !== '/') return '';
  return `
        <section aria-labelledby="equipe-studio" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 2rem 2.5rem; margin-bottom: 2.5rem;">
          <p style="font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.14em; color: #037971; font-weight: 700; margin: 0 0 0.4rem 0;">
            À propos · Studio &amp; Collectif d'Alchimistes
          </p>
          <h2 id="equipe-studio" style="font-size: 1.5rem; font-weight: 800; color: #1F4F6E; margin: 0 0 0.75rem 0;">
            Une équipe de praticiens dirigée par Cyril Garnier et Léonie Egesipe
          </h2>
          <p style="color: #334155; margin: 0 0 1rem 0;">
            Alkymya réunit six experts associés complémentaires en IA générative, direction artistique, gouvernance des données (GAIA-X / RGPD), santé et insertion professionnelle :
          </p>
          <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.75rem; list-style: none; padding: 0; margin: 0 0 1rem 0;">
            ${alchimistes
              .map(
                (person) => `
            <li style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.65rem; padding: 0.85rem 1rem;">
              <a href="/alchimistes/${person.id}/" style="color: #1F4F6E; font-weight: 700; text-decoration: underline;">${escapeHtml(person.name)}</a>
              <div style="font-size: 0.82rem; color: #475569; margin-top: 0.2rem;">${escapeHtml(person.role)}</div>
            </li>`
              )
              .join('')}
          </ul>
          <a href="/plan-du-site/" style="color: #037971; font-weight: 700; text-decoration: underline;">Explorer toutes les ${routes.length} pages du studio sur le Plan du site →</a>
        </section>`;
}

function generateHubDirectoryStaticHtml(routePath: string): string {
  if (routePath === '/alchimistes') {
    return `
        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 2rem 2.5rem; margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #1F4F6E; margin-top: 0;">Fiches complètes des 6 Alchimistes d'Alkymya</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
            ${alchimistes
              .map(
                (person) => `
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.25rem;">
              <h3 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">
                <a href="/alchimistes/${person.id}/" style="color: #1F4F6E; text-decoration: underline;">${escapeHtml(person.name)}</a>
              </h3>
              <p style="margin: 0 0 0.5rem 0; font-size: 0.84rem; color: #037971; font-weight: 700;">${escapeHtml(person.role)}</p>
              <p style="margin: 0; font-size: 0.88rem; color: #475569;">${escapeHtml(person.bio)}</p>
            </div>`
              )
              .join('')}
          </div>
        </section>`;
  }

  if (routePath === '/ressources/etudes') {
    return `
        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 2rem 2.5rem; margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #1F4F6E; margin-top: 0;">Accès direct aux 5 études &amp; publications HTML/PDF</h2>
          <ul style="display: grid; gap: 0.85rem; list-style: none; padding: 0; margin: 0;">
            ${studiesList
              .map(
                (s) => `
            <li style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1rem 1.25rem;">
              <a href="${s.path}" style="color: #1F4F6E; font-weight: 700; text-decoration: underline;">${escapeHtml(s.title)}</a>
              <p style="margin: 0.35rem 0 0 0; font-size: 0.88rem; color: #475569;">${escapeHtml(s.seoDescription)}</p>
            </li>`
              )
              .join('')}
            <li style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1rem 1.25rem;">
              <a href="/ressources/etudes/interview-gemini-4/" style="color: #1F4F6E; font-weight: 700; text-decoration: underline;">Interview Gemini 4 : Retour d'expérience d'un enseignant en IA (V9)</a>
              <p style="margin: 0.35rem 0 0 0; font-size: 0.88rem; color: #475569;">${escapeHtml(etudeGemini4Data.intro)}</p>
            </li>
          </ul>
        </section>`;
  }

  if (routePath === '/ressources/analyseurs') {
    return `
        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 2rem 2.5rem; margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #1F4F6E; margin-top: 0;">Les 4 analyseurs IA gratuits et leurs fiches dédiées</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
            ${analyseursList
              .map(
                (tool) => `
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.25rem;">
              <h3 style="margin: 0 0 0.35rem 0; font-size: 1.05rem;">
                <a href="${tool.path}" style="color: #1F4F6E; text-decoration: underline;">${escapeHtml(tool.name)}</a>
              </h3>
              <p style="margin: 0 0 0.6rem 0; font-size: 0.86rem; color: #475569;">${escapeHtml(tool.whatItDoes)}</p>
              <a href="${escapeHtml(tool.subdomain)}" target="_blank" rel="noopener noreferrer" style="color: #037971; font-size: 0.84rem; font-weight: 700;">Lancer l'outil →</a>
            </div>`
              )
              .join('')}
          </div>
        </section>`;
  }

  return '';
}

function generatePlanDuSiteStaticHtml(routePath: string): string {
  if (routePath !== '/plan-du-site') return '';

  const categories = [
    {
      heading: 'Pages principales, Offres & Conformité',
      items: routes.filter(
        (r) =>
          !r.path.startsWith('/alchimistes/') &&
          !r.path.startsWith('/partenaires/') &&
          !r.path.startsWith('/ressources/')
      ),
    },
    {
      heading: 'Études, Analyseurs & Business Game',
      items: routes.filter((r) => r.path.startsWith('/ressources/')),
    },
    {
      heading: 'Fiches Experts — Les Alchimistes',
      items: routes.filter((r) => r.path.startsWith('/alchimistes/')),
    },
    {
      heading: 'Écosystème Partenaires (Pôles & Fiches Dédiées)',
      items: routes.filter((r) => r.path.startsWith('/partenaires/')),
    },
  ];

  return `
        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 2rem 2.5rem; margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.5rem; font-weight: 800; color: #1F4F6E; margin-top: 0;">Index complet des ${routes.length} URLs canoniques alkymya.co</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            ${categories
              .map(
                (cat) => `
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.25rem;">
              <h3 style="margin: 0 0 0.75rem 0; font-size: 1.05rem; color: #1F4F6E;">${escapeHtml(cat.heading)} (${cat.items.length})</h3>
              <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 0.45rem;">
                ${cat.items
                  .map((item) => {
                    const href = item.path === '/' ? '/' : `${item.path}/`;
                    return `<li><a href="${href}" style="color: #037971; font-weight: 600; text-decoration: underline; font-size: 0.9rem;">${escapeHtml(item.title)}</a></li>`;
                  })
                  .join('')}
              </ul>
            </div>`
              )
              .join('')}
          </div>
        </section>`;
}

function generatePageBody(route: RouteData): string {
  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/ia/', label: 'Génération IA' },
    { href: '/oeuvres/', label: 'Nos Œuvres' },
    { href: '/alchimistes/', label: 'Nos Alchimistes' },
    { href: '/ateliers/', label: 'Nos Ateliers' },
    { href: '/ressources/', label: 'Nos Ressources' },
    { href: '/partenaires/', label: 'Nos Partenaires' },
    { href: '/rejoindre/', label: 'Nous Rejoindre' },
    { href: '/newbusiness/', label: 'New Business MVP' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/contact/', label: 'Contact' }
  ];

  const breadcrumbHtml = buildBreadcrumbHtml(route);
  const studyStaticHtml = route.path.startsWith('/ressources/etudes/')
    ? generateStudyStaticHtml(route.path)
    : '';
  const partnerStaticHtml = route.path === '/partenaires' || route.path.startsWith('/partenaires/')
    ? generatePartnerStaticHtml(route.path)
    : '';
  const toolStaticHtml = route.path.startsWith('/ressources/analyseurs/') || route.path === '/ressources/business-game'
    ? generateToolStaticHtml(route.path)
    : '';
  const hubStaticHtml = generateHubDirectoryStaticHtml(route.path);
  const planDuSiteStaticHtml = generatePlanDuSiteStaticHtml(route.path);
  const reviewsStaticHtml = generateReviewsStaticHtml(route.path);
  const homeTeamStaticHtml = generateHomeTeamStaticHtml(route.path);

  return `
    <style>
      .skip-link{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;z-index:100;}
      .skip-link:focus{position:fixed;top:1rem;left:1rem;width:auto;height:auto;overflow:visible;padding:0.75rem 1.25rem;background:#1F4F6E;color:#ffffff;font-weight:600;font-size:0.9rem;border-radius:0.5rem;text-decoration:none;box-shadow:0 6px 20px rgba(0,0,0,0.2);outline:2px solid #02ADAB;}
    </style>
    <a href="#main-content" class="skip-link">Aller au contenu principal</a>
    <header style="background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 1rem 1.5rem; position: sticky; top: 0; z-index: 50;">
      <div style="max-width: 1280px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <a href="/" aria-label="Accueil Alkymya" style="display: flex; align-items: center; text-decoration: none;">
          <img src="${cloudinaryUrl('https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png', 600)}" srcset="${cloudinarySrcSet('https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png', [300, 600])}" sizes="150px" alt="Alkymya, studio d'expertise et de création IA" width="150" height="38" style="height: 38px; width: auto;" />
        </a>
        <nav aria-label="Navigation principale" style="display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
          ${navItems.map(item => {
            const isCurrent =
              item.href === (route.path === '/' ? '/' : `${route.path}/`) ||
              (item.href === '/alchimistes/' && route.path.startsWith('/alchimistes/')) ||
              (item.href === '/ressources/' && route.path.startsWith('/ressources/')) ||
              (item.href === '/partenaires/' && route.path.startsWith('/partenaires/'));
            return `
            <a href="${item.href}" style="color: ${isCurrent ? '#d97706' : '#1e293b'}; text-decoration: none; padding: 0.25rem 0.5rem;">
              ${item.label}
            </a>
          `;
          }).join('')}
        </nav>
      </div>
    </header>

    <main id="main-content" tabindex="-1" style="max-width: 1200px; margin: 0 auto; padding: 3rem 1.5rem; font-family: system-ui, -apple-system, sans-serif; color: #1e293b; line-height: 1.6;">
      <article>
        ${breadcrumbHtml}
        <header style="text-align: center; max-width: 900px; margin: 0 auto 3.5rem auto;">
          <h1 style="font-size: 2.75rem; font-weight: 900; color: #1F4F6E; margin-bottom: 1.5rem; line-height: 1.2;">
            ${escapeHtml(route.h1)}
          </h1>
          <p style="font-size: 1.25rem; color: #475569; line-height: 1.6; margin: 0;">
            ${escapeHtml(route.content.leadParagraph)}
          </p>
          ${route.path === '/ressources/etudes/interview-gemini-4' ? `
          <div style="margin-top: 1.75rem;">
            <a href="${INTERVIEW_GEMINI_4_PDF_URL}" target="_blank" rel="noopener noreferrer" download="Interview_Gemini_4_Retour_experience_enseignant_IA_et_performances_V9.pdf" style="display: inline-block; background: #C06721; color: #ffffff; font-weight: 700; text-decoration: none; padding: 0.85rem 1.5rem; border-radius: 0.5rem;">
              Télécharger l'étude complète (PDF · V9) →
            </a>
          </div>
          ` : ''}
        </header>

        ${studyStaticHtml}
        ${partnerStaticHtml}
        ${toolStaticHtml}
        ${hubStaticHtml}
        ${planDuSiteStaticHtml}
        ${reviewsStaticHtml}
        ${homeTeamStaticHtml}

        <div style="display: grid; gap: 2.5rem; margin-bottom: 4rem;">
          ${route.content.sections.map(section => `
            <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 2rem 2.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
              <h2 style="font-size: 1.625rem; font-weight: 800; color: #1F4F6E; margin-top: 0; margin-bottom: 1rem;">
                ${escapeHtml(section.h2)}
              </h2>
              ${section.paragraphs.map(p => {
                const escaped = escapeHtml(p)
                  .replace(/06 43 64 97 77/g, '<a href="tel:+33643649777" style="color: #037971; text-decoration: underline;">06 43 64 97 77</a>')
                  .replace(/cyril@alkymya\.co/g, '<a href="mailto:cyril@alkymya.co" style="color: #037971; text-decoration: underline;">cyril@alkymya.co</a>');
                return `
                <p style="font-size: 1rem; color: #334155; margin-bottom: 1rem; line-height: 1.7;">
                  ${escaped}
                </p>
              `;
              }).join('')}
              ${section.listItems && section.listItems.length > 0 ? `
                <ul style="margin: 1.25rem 0 0.5rem 0; padding-left: 1.5rem; color: #334155; font-size: 0.95rem; line-height: 1.8;">
                  ${section.listItems.map(item => {
                    const escapedItem = escapeHtml(item)
                      .replace(/06 43 64 97 77/g, '<a href="tel:+33643649777" style="color: #037971; text-decoration: underline;">06 43 64 97 77</a>')
                      .replace(/cyril@alkymya\.co/g, '<a href="mailto:cyril@alkymya.co" style="color: #037971; text-decoration: underline;">cyril@alkymya.co</a>');
                    return `
                    <li style="margin-bottom: 0.5rem;">${escapedItem}</li>
                  `;
                  }).join('')}
                </ul>
              ` : ''}
            </section>
          `).join('')}
        </div>

        ${route.images && route.images.length > 0 ? `
        <section style="margin-bottom: 3rem;">
          <h2 style="font-size: 1.375rem; font-weight: 800; color: #1F4F6E; margin-top: 0; margin-bottom: 1.25rem;">
            Visuels &amp; réalisations illustrées
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem;">
            ${route.images.map((img, idx) => {
              const optimizedSrc = cloudinaryUrl(img.src, 1200);
              const srcset = cloudinarySrcSet(img.src);
              const srcsetAttr = srcset ? ` srcset="${srcset}" sizes="(max-width: 768px) 100vw, 480px"` : '';
              const lazyAttr = idx === 0 ? '' : ' loading="lazy"';
              return `
            <figure style="margin: 0; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 0.75rem; overflow: hidden;">
              <img src="${optimizedSrc}"${srcsetAttr} alt="${escapeHtml(img.alt)}" width="${img.width}" height="${img.height}"${lazyAttr} style="width: 100%; height: 180px; object-fit: cover; display: block;" />
              ${img.caption ? `<figcaption style="padding: 0.65rem 0.85rem; font-size: 0.82rem; color: #475569;">${escapeHtml(img.caption)}</figcaption>` : ''}
            </figure>`;
            }).join('')}
          </div>
        </section>
        ` : ''}

        <section style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 1.25rem; padding: 2rem 2.5rem; margin-bottom: 3rem;">
          <h2 style="font-size: 1.375rem; font-weight: 800; color: #1F4F6E; margin-top: 0; margin-bottom: 1rem;">
            Découvrir d'autres pages et ressources Alkymya
          </h2>
          <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
            ${route.content.internalLinks.map(link => `
              <li>
                <a href="${link.href}" style="display: block; padding: 0.75rem 1rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 0.75rem; color: #037971; font-weight: 700; text-decoration: none; font-size: 0.9rem;">
                  → ${escapeHtml(link.label)}
                </a>
              </li>
            `).join('')}
          </ul>
        </section>
      </article>
    </main>

    <footer style="background: #1F4F6E; color: #ffffff; padding: 3rem 1.5rem; margin-top: 4rem; font-family: system-ui, -apple-system, sans-serif;">
      <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: space-between; gap: 1.5rem; text-align: center;">
        <p style="margin: 0; font-size: 0.875rem; color: #cbd5e1;">
          © 2026 <strong>Alkymya.co</strong> — Marque de <strong>CYRIL GARNIER CONSULTING</strong> (SASU, 2 rue Sacha Guitry, 77330 Ozoir-la-Ferrière, France).
        </p>
        <nav aria-label="Liens de pied de page" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem; font-size: 0.8125rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">
          <a href="https://www.google.com/maps?cid=10471291206194913670" target="_blank" rel="noopener noreferrer" style="color: #02ADAB; text-decoration: none;">Google Maps &amp; Avis (5,0/5)</a>
          <a href="https://cyrilgarnier.fr/" target="_blank" rel="noopener noreferrer" style="color: #02ADAB; text-decoration: none;">Voir le site de Cyril Garnier →</a>
          <a href="/mentions-legales/" style="color: #cbd5e1; text-decoration: none;">Mentions Légales</a>
          <a href="/politique-confidentialite/" style="color: #cbd5e1; text-decoration: none;">Confidentialité &amp; Cookies</a>
          <a href="/accessibilite/" style="color: #cbd5e1; text-decoration: none;">Accessibilité RGAA</a>
          <a href="/plan-du-site/" style="color: #cbd5e1; text-decoration: none;">Plan du site</a>
          <a href="/newbusiness/" style="color: #cbd5e1; text-decoration: none;">New Business MVP</a>
          <a href="/faq/" style="color: #cbd5e1; text-decoration: none;">FAQ</a>
          <a href="/contact/" style="color: #cbd5e1; text-decoration: none;">Contact</a>
        </nav>
      </div>
    </footer>
  `.trim();
}

const breadcrumbNames: Record<string, string> = {
  '/': 'Accueil',
  '/ia': 'Génération IA',
  '/oeuvres': 'Nos Œuvres',
  '/alchimistes': 'Nos Alchimistes',
  '/ateliers': 'Nos Ateliers',
  '/ressources': 'Nos Ressources',
  '/ressources/etudes': 'Nos études',
  '/ressources/etudes/generation-ia-2026': 'Génération IA 2026',
  '/ressources/etudes/generation-ia-2025': 'Génération IA 2025',
  '/ressources/etudes/generation-ia-2024': 'Génération IA 2024',
  '/ressources/etudes/doctrine-iag': 'La Doctrine IAG',
  '/ressources/etudes/interview-gemini-4': 'Interview Gemini 4',
  '/ressources/analyseurs': 'Nos Analyseurs',
  '/ressources/analyseurs/analyseur-de-photo': 'Analyseur de photo',
  '/ressources/analyseurs/analyseur-de-cv': 'Analyseur de CV',
  '/ressources/analyseurs/analyseur-de-memoire': 'Analyseur de mémoire',
  '/ressources/analyseurs/analyseur-de-site-web': 'Analyseur de site web',
  '/ressources/business-game': 'Business Game NoNo BanaBa',
  '/partenaires': 'Nos Partenaires',
  '/partenaires/ecoles': 'Partenaires École',
  '/partenaires/ecoles/euridis': 'Euridis Business School',
  '/partenaires/ecoles/ieseg': 'IÉSEG School of Management',
  '/partenaires/insertion': 'Insertion & Alternance',
  '/partenaires/insertion/objectif-alternance': 'Objectif Alternance',
  '/partenaires/formations-certifiees': 'Formations Certifiées & OPCO',
  '/partenaires/formations-certifiees/inatec': 'INATEC',
  '/partenaires/lieux': 'Lieux & Coworking',
  '/partenaires/lieux/morning': 'Morning',
  '/partenaires/entreprises': 'Entreprises & Fondations',
  '/partenaires/entreprises/cmi-systemes': 'CMI Systèmes',
  '/partenaires/entreprises/cpme-77': 'CPME 77',
  '/partenaires/outils': 'Outils & Technologies',
  '/partenaires/outils/awa-cloud': 'AWACLOUD',
  '/partenaires/outils/onecub': 'Onecub',
  '/contact': 'Contact',
  '/faq': 'FAQ',
  '/rejoindre': 'Nous Rejoindre',
  '/newbusiness': 'New Business MVP',
  '/mentions-legales': 'Mentions Légales',
  '/politique-confidentialite': 'Politique de confidentialité',
  '/accessibilite': 'Accessibilité RGAA',
  '/plan-du-site': 'Plan du site',
  ...Object.fromEntries(alchimistes.map(person => [`/alchimistes/${person.id}`, person.name]))
};

function getPersonSchemaId(person: AlchimisteProfile): string {
  if (person.id === 'cyril-garnier') return 'https://alkymya.co/#cyril-garnier';
  if (person.id === 'leonie-egesipe') return 'https://alkymya.co/#leonie-egesipe';
  return `https://alkymya.co/alchimistes/#${person.id}`;
}

function buildPersonNode(person: AlchimisteProfile, profileUrlOverride?: string): Record<string, any> {
  const canonicalProfileUrl = profileUrlOverride || `https://alkymya.co/alchimistes/${person.id}/`;
  const sameAs = Array.from(
    new Set(
      [
        person.website,
        person.socials.linkedin,
        person.socials.instagram,
        person.socials.tiktok,
        person.socials.youtube
      ].filter((u): u is string => Boolean(u && u.trim()))
    )
  );

  const node: Record<string, any> = {
    "@type": "Person",
    "@id": getPersonSchemaId(person),
    "name": person.name,
    "jobTitle": person.role,
    "description": person.bio,
    "url": canonicalProfileUrl,
    "mainEntityOfPage": {
      "@type": "ProfilePage",
      "@id": `${canonicalProfileUrl}#webpage`
    },
    "image": cloudinaryUrl(person.image, 600),
    "worksFor": {
      "@id": "https://alkymya.co/#organization"
    },
    "knowsAbout": person.knowsAbout
  };

  if (person.alumniOf) {
    node.alumniOf = {
      "@type": "EducationalOrganization",
      "name": person.alumniOf
    };
  }

  if (person.homeLocation) {
    node.homeLocation = {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": person.homeLocation.city,
        "addressCountry": person.homeLocation.country
      }
    };
  }

  if (sameAs.length > 0) {
    node.sameAs = sameAs;
  }

  return node;
}

function buildBreadcrumbItems(route: RouteData, canonicalUrl: string) {
  if (route.path === '/') {
    return [{ "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://alkymya.co/" }];
  }
  if (route.path.startsWith('/alchimistes/')) {
    return [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://alkymya.co/" },
      { "@type": "ListItem", "position": 2, "name": "Nos Alchimistes", "item": "https://alkymya.co/alchimistes/" },
      { "@type": "ListItem", "position": 3, "name": breadcrumbNames[route.path] || route.h1, "item": canonicalUrl }
    ];
  }
  if (route.path.startsWith('/partenaires/')) {
    const parts = route.path.split('/').filter(Boolean);
    const catMeta = partnerCategories.find((c) => c.slug === parts[1]);
    if (parts.length === 2) {
      return [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://alkymya.co/" },
        { "@type": "ListItem", "position": 2, "name": "Nos Partenaires", "item": "https://alkymya.co/partenaires/" },
        { "@type": "ListItem", "position": 3, "name": catMeta?.name || breadcrumbNames[route.path] || route.h1, "item": canonicalUrl }
      ];
    }
    return [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://alkymya.co/" },
      { "@type": "ListItem", "position": 2, "name": "Nos Partenaires", "item": "https://alkymya.co/partenaires/" },
      { "@type": "ListItem", "position": 3, "name": catMeta?.name || parts[1], "item": `https://alkymya.co/partenaires/${parts[1]}/` },
      { "@type": "ListItem", "position": 4, "name": breadcrumbNames[route.path] || route.h1, "item": canonicalUrl }
    ];
  }
  if (route.path.startsWith('/ressources/etudes/')) {
    return [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://alkymya.co/" },
      { "@type": "ListItem", "position": 2, "name": "Nos Ressources", "item": "https://alkymya.co/ressources/" },
      { "@type": "ListItem", "position": 3, "name": "Nos études", "item": "https://alkymya.co/ressources/etudes/" },
      { "@type": "ListItem", "position": 4, "name": breadcrumbNames[route.path] || route.h1, "item": canonicalUrl }
    ];
  }
  if (route.path.startsWith('/ressources/analyseurs/')) {
    return [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://alkymya.co/" },
      { "@type": "ListItem", "position": 2, "name": "Nos Ressources", "item": "https://alkymya.co/ressources/" },
      { "@type": "ListItem", "position": 3, "name": "Nos Analyseurs", "item": "https://alkymya.co/ressources/analyseurs/" },
      { "@type": "ListItem", "position": 4, "name": breadcrumbNames[route.path] || route.h1, "item": canonicalUrl }
    ];
  }
  if (route.path.startsWith('/ressources/')) {
    return [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://alkymya.co/" },
      { "@type": "ListItem", "position": 2, "name": "Nos Ressources", "item": "https://alkymya.co/ressources/" },
      { "@type": "ListItem", "position": 3, "name": breadcrumbNames[route.path] || route.h1, "item": canonicalUrl }
    ];
  }
  return [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://alkymya.co/" },
    { "@type": "ListItem", "position": 2, "name": breadcrumbNames[route.path] || route.h1, "item": canonicalUrl }
  ];
}

function buildJsonLd(route: RouteData, canonicalUrl: string) {
  const partnerCategorySlug = getPartnerCategorySlugFromPath(route.path);
  const partnerDetail = getPartnerDetailFromPath(route.path);

  // 1. Déterminer le type précis du document WebPage
  let webpageType = 'WebPage';
  if (route.path === '/faq') webpageType = 'FAQPage';
  else if (route.path === '/alchimistes') webpageType = 'AboutPage';
  else if (route.path.startsWith('/alchimistes/')) webpageType = 'ProfilePage';
  else if (route.path === '/contact') webpageType = 'ContactPage';
  else if (
    route.path === '/oeuvres' ||
    route.path === '/ressources' ||
    route.path === '/ressources/etudes' ||
    route.path === '/ressources/analyseurs' ||
    route.path === '/partenaires' ||
    Boolean(partnerCategorySlug)
  ) {
    webpageType = 'CollectionPage';
  }

  const isLeonieGraphNodeIncluded =
    route.path === '/alchimistes' || route.path === '/alchimistes/leonie-egesipe';

  const webpageNode: Record<string, any> = {
    "@type": webpageType,
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": route.title,
    "headline": route.h1,
    "description": route.description,
    "inLanguage": "fr-FR",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://alkymya.co/#website",
      "url": "https://alkymya.co/",
      "name": "Alkymya",
      "description": "Studio d'innovation, d'expertise et de création en Intelligence Artificielle générative."
    },
    "publisher": {
      "@id": "https://alkymya.co/#organization"
    },
    "about": {
      "@id": "https://alkymya.co/#organization"
    },
    "author": [
      {
        "@id": "https://alkymya.co/#cyril-garnier"
      },
      isLeonieGraphNodeIncluded
        ? { "@id": "https://alkymya.co/#leonie-egesipe" }
        : {
            "@type": "Person",
            "@id": "https://alkymya.co/#leonie-egesipe",
            "name": "Léonie Egesipe",
            "url": "https://alkymya.co/alchimistes/leonie-egesipe/"
          }
    ],
    "breadcrumb": {
      "@id": `${canonicalUrl}#breadcrumb`
    }
  };

  // Si FAQPage, injecter les questions/réponses enrichies depuis la source partagée src/data/faq.ts
  if (route.path === '/faq') {
    webpageNode.mainEntity = allFaqItems.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.plainAnswer
      }
    }));
  }

  // 2. Fil d'Ariane (BreadcrumbList)
  const breadcrumbNode: Record<string, any> = {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    "itemListElement": buildBreadcrumbItems(route, canonicalUrl)
  };

  // 3. Fiche Organization enrichie (LocalBusiness + ProfessionalService)
  const organizationNode: Record<string, any> = {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": "https://alkymya.co/#organization",
    "name": "Alkymya",
    "legalName": "CYRIL GARNIER CONSULTING",
    "alternateName": ["Alkymya.co", "Studio Alkymya"],
    "url": "https://alkymya.co/",
    "logo": cloudinaryUrl("https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png", 600),
    "image": "https://alkymya.co/og-image.jpg",
    "description": "Alkymya, studio d'expertise et de création IA en France : accompagnement intelligence artificielle, création d'agents IA sur mesure, stratégie SEO et GEO Google AI et formations finançables OPCO via nos organismes partenaires certifiés Qualiopi.",
    "knowsAbout": [
      "Intelligence Artificielle Générative",
      "Création d'Agents IA Sur Mesure",
      "Stratégie SEO et GEO Google AI",
      "Formation IA Entreprise OPCO",
      "Audit Capital IA",
      "RAG Local et Souveraineté des Données",
      "Conformité IA Act et RGPD"
    ],
    "founder": {
      "@id": "https://alkymya.co/#cyril-garnier"
    },
    "telephone": "+33643649777",
    "email": "cyril@alkymya.co",
    "vatID": "FR82842403669",
    "taxID": "842403669",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2 rue Sacha Guitry",
      "postalCode": "77330",
      "addressLocality": "Ozoir-la-Ferrière",
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.7667,
      "longitude": 2.6833
    },
    "hasMap": "https://www.google.com/maps?cid=10471291206194913670",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "11",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Seine-et-Marne" },
      { "@type": "AdministrativeArea", "name": "Île-de-France" },
      { "@type": "Country", "name": "France" }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/alkymya/",
      "https://www.youtube.com/@alkymya",
      "https://www.instagram.com/alkymya.co/",
      "https://cyrilgarnier.fr/",
      "https://www.facebook.com/cyril.garnier.969"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:30"
      }
    ]
  };

  // Entité fondateur Cyril Garnier présente sur toutes les pages pour résoudre founder.@id
  const cyrilGarnierNode: Record<string, any> = {
    "@type": "Person",
    "@id": "https://alkymya.co/#cyril-garnier",
    "name": "Cyril Garnier",
    "jobTitle": "Directeur Associé & Fondateur Alkymya",
    "url": "https://cyrilgarnier.fr/",
    "image": cloudinaryUrl("https://res.cloudinary.com/dokzioyu4/image/upload/v1758192982/66cffcd8-15f1-415f-b423-9f428d63e22f_gqjd53.png", 600),
    "worksFor": {
      "@id": "https://alkymya.co/#organization"
    },
    "sameAs": [
      "https://www.linkedin.com/in/cyril-garnier-89697b1/",
      "https://cyrilgarnier.fr/"
    ]
  };

  const graphNodes: any[] = [webpageNode, breadcrumbNode, organizationNode, cyrilGarnierNode];

  // Nœuds ImageObject d'auteur / originaux pour indexation médias & E-E-A-T
  const routeVisuals =
    route.images && route.images.length > 0
      ? route.images.map((img) => ({
          contentUrl: cloudinaryUrl(img.src, 1200),
          width: img.width,
          height: img.height,
          caption: img.caption || img.alt,
          name: img.alt,
        }))
      : [
          {
            contentUrl: route.ogImage,
            width: 1200,
            height: 630,
            caption: route.description,
            name: route.title,
          },
        ];

  routeVisuals.forEach((vis, idx) => {
    const imgId = `${canonicalUrl}#image-${idx + 1}`;
    if (idx === 0) {
      webpageNode.primaryImageOfPage = { "@id": imgId };
    }
    graphNodes.push({
      "@type": "ImageObject",
      "@id": imgId,
      "url": vis.contentUrl,
      "contentUrl": vis.contentUrl,
      "width": vis.width,
      "height": vis.height,
      "name": vis.name,
      "caption": vis.caption,
      "creditText": "Alkymya — Cyril Garnier & Léonie Egesipe",
      "license": "https://alkymya.co/mentions-legales/",
      "acquireLicensePage": "https://alkymya.co/contact/",
      "author": { "@id": "https://alkymya.co/#cyril-garnier" },
      "creator": { "@id": "https://alkymya.co/#organization" },
      "copyrightHolder": { "@id": "https://alkymya.co/#organization" },
    });
  });

  // Avis clients vérifiés Schema.org Review sur les pages clés de conversion & confiance
  if (['/', '/ateliers', '/contact', '/faq'].includes(route.path)) {
    organizationNode.review = BASE_VERIFIED_REVIEWS.map((r) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": r.author,
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": String(r.rating),
        "bestRating": "5",
        "worstRating": "1",
      },
      "reviewBody": r.quote,
    }));
  }

  // 4. Schéma Course spécifique pour /ateliers/ avec hasCourseInstance
  if (route.path === '/ateliers') {
    graphNodes.push({
      "@type": "Course",
      "@id": "https://alkymya.co/ateliers/#course-ia",
      "name": "Formations & Ateliers Pratiques en Intelligence Artificielle Générative",
      "description": "Formations opérationnelles et ateliers pratiques en IA générative, création d'agents autonomes, prompt engineering et conformité européenne de l'IA Act en France (éligibles OPCO via nos partenaires certifiés Qualiopi).",
      "provider": {
        "@id": "https://alkymya.co/#organization"
      },
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "name": "Formation Core IA (14h - 4 demi-journées)",
          "description": "Programme intensif éligible OPCO via nos partenaires certifiés Qualiopi (tels qu'INATEC) pour maîtriser la stack d'IA générative et de prompt engineering.",
          "courseMode": ["blended", "onsite", "online"],
          "courseWorkload": "PT14H",
          "instructor": [
            { "@type": "Person", "name": "Cyril Garnier" },
            { "@type": "Person", "name": "Léonie Egesipe" }
          ]
        },
        {
          "@type": "CourseInstance",
          "name": "Option A : Création & Déploiement d'Agents IA",
          "description": "Atelier pratique de 3h30 pour concevoir et déployer 3 agents intelligents autonomes connectés à vos outils métiers.",
          "courseMode": ["blended", "onsite", "online"],
          "courseWorkload": "PT3H30M",
          "instructor": [
            { "@type": "Person", "name": "Cyril Garnier" }
          ]
        },
        {
          "@type": "CourseInstance",
          "name": "Option B : Application Web Interne Dopée à l'IA",
          "description": "Atelier pratique de 3h30 pour concevoir une application web interne sans code connectée aux modèles d'IA générative.",
          "courseMode": ["blended", "onsite", "online"],
          "courseWorkload": "PT3H30M",
          "instructor": [
            { "@type": "Person", "name": "Cyril Garnier" }
          ]
        }
      ]
    });
  }

  // 5. Schéma Person complet pour /alchimistes/ et chaque fiche individuelle /alchimistes/<id>/
  if (route.path === '/alchimistes') {
    webpageNode.mainEntity = {
      "@type": "ItemList",
      "name": "Les Alchimistes d'Alkymya",
      "numberOfItems": alchimistes.length,
      "itemListElement": alchimistes.map((person, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": person.name,
        "url": `https://alkymya.co/alchimistes/${person.id}/`
      }))
    };

    for (const person of alchimistes) {
      if (person.id === 'cyril-garnier') {
        const cyrilIdx = graphNodes.indexOf(cyrilGarnierNode);
        if (cyrilIdx !== -1) {
          graphNodes[cyrilIdx] = buildPersonNode(person, 'https://alkymya.co/alchimistes/cyril-garnier/');
        }
      } else {
        graphNodes.push(buildPersonNode(person));
      }
    }
  } else if (route.path.startsWith('/alchimistes/')) {
    const slug = route.path.replace('/alchimistes/', '').replace(/\/$/, '');
    const person = alchimistes.find(p => p.id === slug);
    if (person) {
      const personId = getPersonSchemaId(person);
      webpageNode.mainEntity = { "@id": personId };
      webpageNode.about = { "@id": personId };
      if (person.id === 'cyril-garnier') {
        const cyrilIdx = graphNodes.indexOf(cyrilGarnierNode);
        if (cyrilIdx !== -1) {
          graphNodes[cyrilIdx] = buildPersonNode(person, canonicalUrl);
        }
      } else {
        graphNodes.push(buildPersonNode(person, canonicalUrl));
      }
    }
  }

  // 6. Schéma EducationalOccupationalProgram pour /newbusiness/
  if (route.path === '/newbusiness') {
    graphNodes.push({
      "@type": "EducationalOccupationalProgram",
      "@id": "https://alkymya.co/newbusiness/#program",
      "name": "Programme New Business MVP — De l'idée à la validation client",
      "description": "Accompagnement opérationnel de 6 mois pour concevoir votre MVP, tester votre offre auprès de vrais clients avant d'investir et décider avec lucidité : Continuer, Pivoter ou Accélérer.",
      "provider": {
        "@id": "https://alkymya.co/#organization"
      },
      "timeToComplete": "P6M",
      "offers": {
        "@type": "Offer",
        "price": "1200",
        "priceCurrency": "EUR",
        "description": "200 € / mois sur 6 mois"
      }
    });
  }

  // 7. Hubs ItemList (CollectionPage) pour Partenaires & Ressources
  if (route.path === '/partenaires') {
    webpageNode.mainEntity = {
      "@type": "ItemList",
      "name": "Catégories de partenaires Alkymya",
      "numberOfItems": partnerCategories.length,
      "itemListElement": partnerCategories.map((cat, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": cat.name,
        "url": `https://alkymya.co/partenaires/${cat.slug}/`
      }))
    };
  } else if (partnerCategorySlug) {
    const partnersInCat = allPartners.filter((p) => p.categorySlug === partnerCategorySlug);
    const catMeta = partnerCategories.find((c) => c.slug === partnerCategorySlug);
    webpageNode.mainEntity = {
      "@type": "ItemList",
      "name": catMeta?.name || route.h1,
      "numberOfItems": partnersInCat.length,
      "itemListElement": partnersInCat.map((p, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": p.name,
        "url": p.hasDetailPage ? `https://alkymya.co/partenaires/${p.categorySlug}/${p.slug}/` : p.websiteUrl
      }))
    };
  } else if (route.path === '/ressources') {
    webpageNode.mainEntity = {
      "@type": "ItemList",
      "name": "Pôles de ressources Alkymya",
      "numberOfItems": 4,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Nos études", "url": "https://alkymya.co/ressources/etudes/" },
        { "@type": "ListItem", "position": 2, "name": "Nos Analyseurs", "url": "https://alkymya.co/ressources/analyseurs/" },
        { "@type": "ListItem", "position": 3, "name": "Business Game NoNo BanaBa", "url": "https://alkymya.co/ressources/business-game/" },
        { "@type": "ListItem", "position": 4, "name": "Outils & Technologies partenaires", "url": "https://alkymya.co/partenaires/outils/" }
      ]
    };
  } else if (route.path === '/ressources/etudes') {
    webpageNode.mainEntity = {
      "@type": "ItemList",
      "name": "Études et publications Alkymya",
      "numberOfItems": 5,
      "itemListElement": [
        ...studiesList.map((s, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": s.title,
          "url": `https://alkymya.co${s.path}`
        })),
        {
          "@type": "ListItem",
          "position": studiesList.length + 1,
          "name": "Interview Gemini 4 : Retour d'expérience d'un enseignant en IA",
          "url": "https://alkymya.co/ressources/etudes/interview-gemini-4/"
        }
      ]
    };
  } else if (route.path === '/ressources/analyseurs') {
    webpageNode.mainEntity = {
      "@type": "ItemList",
      "name": "Analyseurs IA gratuits Alkymya",
      "numberOfItems": analyseursList.length,
      "itemListElement": analyseursList.map((tool, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": tool.name,
        "url": `https://alkymya.co${tool.path}`
      }))
    };
  }

  // 8. Fiche partenaire : WebPage + Organization partenaire (jamais LocalBusiness ni adresse Alkymya) + FAQPage si FAQ visible
  if (partnerDetail) {
    const partnerEntry = allPartners.find((p) => p.slug === partnerDetail.slug);
    const partnerNodeId = `${canonicalUrl}#partner`;
    webpageNode.mainEntity = { "@id": partnerNodeId };
    webpageNode.about = { "@id": partnerNodeId };
    graphNodes.push({
      "@type": "Organization",
      "@id": partnerNodeId,
      "name": partnerDetail.name,
      "url": partnerEntry?.websiteUrl || partnerDetail.ctaUrl,
      ...(partnerEntry?.sameAs && partnerEntry.sameAs.length > 0 ? { "sameAs": partnerEntry.sameAs } : {})
    });

    const partnerFaqItems =
      partnerDetail.slug === 'euridis'
        ? euridisFormationData.faq
        : partnerDetail.slug === 'ieseg'
        ? iesegFormationData.faq
        : partnerDetail.slug === 'cpme-77'
        ? cpme77Data.faq
        : partnerDetail.slug === 'morning'
        ? morningData.faq
        : partnerDetail.slug === 'cmi-systemes'
        ? cmiSystemesData.faq
        : [];

    if (partnerFaqItems.length > 0) {
      graphNodes.push({
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": partnerFaqItems.map((q) => ({
          "@type": "Question",
          "name": q.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": q.answer
          }
        }))
      });
    }
  }

  // 8b. Schéma WebApplication pour /ia/ (Générateur IA & Observatoire)
  if (route.path === '/ia') {
    const webAppId = 'https://alkymya.co/ia/#webapp';
    webpageNode.mainEntity = { "@id": webAppId };
    graphNodes.push({
      "@type": "WebApplication",
      "@id": webAppId,
      "name": "Génération IA & Simulateur de Personas Alkymya",
      "description": route.description,
      "url": canonicalUrl,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Web",
      "inLanguage": "fr-FR",
      "provider": { "@id": "https://alkymya.co/#organization" }
    });
  }

  // 9. Études (/ressources/etudes/*) : Article + Dataset
  if (route.path === '/ressources/etudes/interview-gemini-4') {
    const articleId = `${canonicalUrl}#article`;
    webpageNode.mainEntity = { "@id": articleId };
    graphNodes.push({
      "@type": ["Article", "Dataset"],
      "@id": articleId,
      "name": route.h1,
      "headline": route.h1,
      "description": route.description,
      "image": route.ogImage,
      "datePublished": "2026-11-20",
      "dateModified": "2026-11-20",
      "inLanguage": "fr-FR",
      "author": { "@id": "https://alkymya.co/#cyril-garnier" },
      "publisher": { "@id": "https://alkymya.co/#organization" },
      "mainEntityOfPage": { "@id": `${canonicalUrl}#webpage` },
      "distribution": {
        "@type": "DataDownload",
        "contentUrl": INTERVIEW_GEMINI_4_PDF_URL,
        "encodingFormat": "application/pdf",
        "name": "Interview Gemini 4 : Retour d'expérience d'un enseignant en IA et données de performance V9.pdf"
      }
    });
  } else if (route.path.startsWith('/ressources/etudes/')) {
    const slug = route.path.replace('/ressources/etudes/', '').replace(/\/$/, '');
    const study = studiesList.find((s) => s.slug === slug);
    if (study) {
      const articleId = `${canonicalUrl}#dataset`;
      webpageNode.mainEntity = { "@id": articleId };
      graphNodes.push({
        "@type": ["Article", "Dataset"],
        "@id": articleId,
        "name": study.title,
        "headline": study.h1,
        "description": study.seoDescription,
        "datePublished": study.datePublished,
        "dateModified": study.dateModified,
        "temporalCoverage": study.period,
        "inLanguage": "fr-FR",
        "author": { "@id": "https://alkymya.co/#cyril-garnier" },
        "publisher": { "@id": "https://alkymya.co/#organization" },
        "mainEntityOfPage": { "@id": `${canonicalUrl}#webpage` },
        "distribution": {
          "@type": "DataDownload",
          "contentUrl": study.pdfUrl,
          "encodingFormat": "application/pdf",
          "name": study.pdfFilename
        }
      });
    }
  }

  // 10. Outils (/ressources/analyseurs/* et /ressources/business-game) : SoftwareApplication (0 €)
  if (route.path.startsWith('/ressources/analyseurs/')) {
    const slug = route.path.replace('/ressources/analyseurs/', '').replace(/\/$/, '');
    const tool = analyseursList.find((t) => t.slug === slug);
    if (tool) {
      const appId = `${canonicalUrl}#software`;
      webpageNode.mainEntity = { "@id": appId };
      graphNodes.push({
        "@type": "SoftwareApplication",
        "@id": appId,
        "name": tool.name,
        "description": tool.seoDescription,
        "url": tool.subdomain,
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web",
        "inLanguage": "fr-FR",
        "provider": { "@id": "https://alkymya.co/#organization" },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "EUR"
        }
      });
    }
  } else if (route.path === '/ressources/business-game') {
    const appId = `${canonicalUrl}#software`;
    webpageNode.mainEntity = { "@id": appId };
    graphNodes.push({
      "@type": "SoftwareApplication",
      "@id": appId,
      "name": "NoNo BanaBa — Business Game",
      "description": route.description,
      "url": "https://nonobanaba.netlify.app/",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Web",
      "inLanguage": "fr-FR",
      "provider": { "@id": "https://alkymya.co/#organization" },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR"
      }
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graphNodes
  };
}

function generateRedirectHtml(targetUrl: string, title: string): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=${targetUrl}">
  <script>window.location.replace('${targetUrl}');</script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="robots" content="noindex, follow">
  <link rel="canonical" href="https://alkymya.co${targetUrl}">
</head>
<body style="font-family: system-ui, sans-serif; text-align: center; padding: 3rem; color: #1e293b;">
  <p>Redirection vers <a href="${targetUrl}">New Business MVP</a>...</p>
</body>
</html>`;
}

function generateSitemapXml(allRoutes: RouteData[]): string {
  const today = new Date().toISOString().split('T')[0];
  const urlEntries = allRoutes.map(r => {
    const loc = `https://alkymya.co${r.path === '/' ? '/' : `${r.path}/`}`;
    const priority = r.path === '/' ? '1.0' : (r.path === '/newbusiness' || r.path === '/ateliers' ? '0.9' : '0.8');
    const changefreq = r.path === '/' ? 'daily' : (r.path === '/newbusiness' || r.path === '/ateliers' || r.path === '/ressources' ? 'weekly' : 'monthly');

    const images: { loc: string; title: string }[] = [
      { loc: r.ogImage, title: `${r.title} — Alkymya` }
    ];

    if (r.images && r.images.length > 0) {
      for (const img of r.images) {
        images.push({
          loc: cloudinaryUrl(img.src, 1200),
          title: img.caption || img.alt
        });
      }
    }

    const imageXml = images.map(img => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${escapeHtml(img.title)}</image:title>
    </image:image>`).join('\n');

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${r.lastmod || today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${imageXml}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;
}

async function prerender() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error(`[prerender] Erreur : ${templatePath} introuvable. Exécutez "vite build" d'abord.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf-8');
  console.log(`[prerender] Template de base chargé (${baseHtml.length} octets).`);

  // 1. Pré-rendre chacune des routes canoniques
  for (const route of routes) {
    const canonicalUrl = route.path === '/' 
      ? 'https://alkymya.co/' 
      : `https://alkymya.co${route.path}/`;

    const jsonLd = buildJsonLd(route, canonicalUrl);
    const bodyHtml = generatePageBody(route);

    let html = baseHtml;

    // Remplacer <title>
    html = html.replace(/<title>.*?<\/title>/is, `<title>${escapeHtml(route.title)}</title>`);

    // Remplacer / injecter <meta name="description">
    if (html.includes('<meta name="description"')) {
      html = html.replace(
        /<meta\s+name="description"\s+content=".*?"\s*\/?>/is,
        `<meta name="description" content="${escapeHtml(route.description)}" />`
      );
    } else {
      html = html.replace('</head>', `  <meta name="description" content="${escapeHtml(route.description)}" />\n</head>`);
    }

    // Remplacer / injecter <link rel="canonical"> (avec slash final obligatoire)
    if (html.includes('<link rel="canonical"')) {
      html = html.replace(
        /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/is,
        `<link rel="canonical" href="${canonicalUrl}" />`
      );
    } else {
      html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`);
    }

    // Balises Meta Robots, Open Graph & Twitter Cards 1200x630
    const metaTags = `
    <!-- Robots Directive for Google Discover & Rich Snippets -->
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

    <!-- Sitemap & RSS Feed Discovery -->
    <link rel="sitemap" type="application/xml" title="Sitemap XML" href="https://alkymya.co/sitemap.xml" />
    <link rel="alternate" type="application/rss+xml" title="Flux RSS Alkymya" href="https://alkymya.co/rss.xml" />

    <!-- Open Graph / Facebook / LinkedIn (1200x630) -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${escapeHtml(route.ogTitle || route.title)}" />
    <meta property="og:description" content="${escapeHtml(route.ogDescription || route.description)}" />
    <meta property="og:image" content="${route.ogImage}" />
    <meta property="og:image:secure_url" content="${route.ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:alt" content="Alkymya — Agence IA & Studio Création IA en France" />
    <meta property="og:site_name" content="Alkymya" />
    <meta property="og:locale" content="fr_FR" />

    <!-- Twitter Cards (summary_large_image) -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonicalUrl}" />
    <meta name="twitter:title" content="${escapeHtml(route.ogTitle || route.title)}" />
    <meta name="twitter:description" content="${escapeHtml(route.ogDescription || route.description)}" />
    <meta name="twitter:image" content="${route.ogImage}" />
    <meta name="twitter:image:alt" content="Alkymya — Agence IA & Studio Création IA en France" />

    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
    </script>
`;

    // Nettoyer les balises robots, og:, twitter:, sitemap, rss et json-ld existantes pour éviter les doublons
    html = html
      .replace(/<script\s+type="application\/ld\+json">.*?<\/script>/gis, '')
      .replace(/<link\s+rel="sitemap"[^>]*>/gi, '')
      .replace(/<link\s+rel="alternate"\s+type="application\/rss\+xml"[^>]*>/gi, '')
      .replace(/<meta\s+name="google-site-verification"[^>]*>/gi, '')
      .replace(/<meta\s+name="robots"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:title"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:description"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:url"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:image[^"]*"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:type"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:site_name"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:locale"[^>]*>/gi, '')
      .replace(/<meta\s+name="twitter:card"[^>]*>/gi, '')
      .replace(/<meta\s+name="twitter:title"[^>]*>/gi, '')
      .replace(/<meta\s+name="twitter:description"[^>]*>/gi, '')
      .replace(/<meta\s+name="twitter:image[^"]*"[^>]*>/gi, '')
      .replace(/<meta\s+name="twitter:url"[^>]*>/gi, '');

    html = html.replace('</head>', `${metaTags}\n</head>`);

    // Remplacer <div id="root"></div> par le contenu statique riche
    html = html.replace(
      /<div id="root"><\/div>/is,
      `<div id="root">${bodyHtml}</div>`
    );

    // Déterminer le dossier de sortie
    let targetDir = distDir;
    if (route.path !== '/') {
      const cleanPath = route.path.replace(/^\//, '');
      targetDir = path.join(distDir, cleanPath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
    }

    const targetFile = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetFile, html, 'utf-8');
    console.log(`[prerender] Route générée : ${route.path} -> ${path.relative(process.cwd(), targetFile)} (${html.length} octets)`);
  }

  // 2. Générer les redirections 301 statiques vers /newbusiness/
  const redirectHtml = generateRedirectHtml('/newbusiness/', 'Redirection — New Business MVP | Alkymya');

  // /new-business.html
  fs.writeFileSync(path.join(distDir, 'new-business.html'), redirectHtml, 'utf-8');
  // /new-business/index.html
  const newBusinessAliasDir = path.join(distDir, 'new-business');
  if (!fs.existsSync(newBusinessAliasDir)) fs.mkdirSync(newBusinessAliasDir, { recursive: true });
  fs.writeFileSync(path.join(newBusinessAliasDir, 'index.html'), redirectHtml, 'utf-8');

  // /cohorte-fondatrice.html
  fs.writeFileSync(path.join(distDir, 'cohorte-fondatrice.html'), redirectHtml, 'utf-8');
  // /cohorte-fondatrice/index.html
  const cohorteAliasDir = path.join(distDir, 'cohorte-fondatrice');
  if (!fs.existsSync(cohorteAliasDir)) fs.mkdirSync(cohorteAliasDir, { recursive: true });
  fs.writeFileSync(path.join(cohorteAliasDir, 'index.html'), redirectHtml, 'utf-8');

  // /cohorte/index.html
  const cohorteShortDir = path.join(distDir, 'cohorte');
  if (!fs.existsSync(cohorteShortDir)) fs.mkdirSync(cohorteShortDir, { recursive: true });
  fs.writeFileSync(path.join(cohorteShortDir, 'index.html'), redirectHtml, 'utf-8');

  console.log(`[prerender] Redirections 301 statiques créées pour new-business et cohorte-fondatrice.`);

  // 3. Générer le sitemap.xml avec toutes les URLs canoniques et slash final
  const sitemapXml = generateSitemapXml(routes);
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log(`[prerender] Sitemap XML généré avec ${routes.length} URLs canoniques (dist/sitemap.xml & public/sitemap.xml).`);

  // 4. Copier 404.html et _redirects vers dist/
  const public404 = path.join(process.cwd(), 'public', '404.html');
  if (fs.existsSync(public404)) {
    fs.copyFileSync(public404, path.join(distDir, '404.html'));
    console.log(`[prerender] Page 404 copiée dans dist/404.html.`);
  }

  const publicRedirects = path.join(process.cwd(), 'public', '_redirects');
  if (fs.existsSync(publicRedirects)) {
    fs.copyFileSync(publicRedirects, path.join(distDir, '_redirects'));
    console.log(`[prerender] Fichier _redirects copié dans dist/_redirects.`);
  }

  const publicHeaders = path.join(process.cwd(), 'public', '_headers');
  if (fs.existsSync(publicHeaders)) {
    fs.copyFileSync(publicHeaders, path.join(distDir, '_headers'));
    console.log(`[prerender] Fichier _headers copié dans dist/_headers.`);
  }

  for (const llmsFile of ['llms.txt', 'llm.txt', 'llms-full.txt', 'robots.txt', 'alkymya-indexnow-2026.txt']) {
    const srcLlms = path.join(process.cwd(), 'public', llmsFile);
    if (fs.existsSync(srcLlms)) {
      fs.copyFileSync(srcLlms, path.join(distDir, llmsFile));
      console.log(`[prerender] Fichier ${llmsFile} copié dans dist/${llmsFile}.`);
    }
  }

  // Copier rss.xml et schema.org.json
  const publicRss = path.join(process.cwd(), 'public', 'rss.xml');
  if (fs.existsSync(publicRss)) {
    fs.copyFileSync(publicRss, path.join(distDir, 'rss.xml'));
    console.log(`[prerender] Flux RSS copié dans dist/rss.xml.`);
  }

  const publicSchema = path.join(process.cwd(), 'public', 'schema.org.json');
  if (fs.existsSync(publicSchema)) {
    fs.copyFileSync(publicSchema, path.join(distDir, 'schema.org.json'));
    console.log(`[prerender] Schéma JSON-LD copié dans dist/schema.org.json.`);
  }

  // Copier l'ensemble des images og-*.jpg vers dist/
  const publicDir = path.join(process.cwd(), 'public');
  if (fs.existsSync(publicDir)) {
    const ogFiles = fs.readdirSync(publicDir).filter(f => f.startsWith('og-') && (f.endsWith('.jpg') || f.endsWith('.png')));
    for (const f of ogFiles) {
      fs.copyFileSync(path.join(publicDir, f), path.join(distDir, f));
      console.log(`[prerender] Image ${f} copiée dans dist/${f}.`);
    }
  }

  console.log(`[prerender] Succès complet du build SEO !`);
}

prerender().catch(err => {
  console.error('[prerender] Erreur fatale durant le pré-rendu :', err);
  process.exit(1);
});
