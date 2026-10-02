import fs from 'node:fs';
import path from 'node:path';
import { routes, RouteData } from '../src/data/routes';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
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

  return `
    <header style="background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 1rem 1.5rem; position: sticky; top: 0; z-index: 50;">
      <div style="max-width: 1280px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <a href="/" aria-label="Accueil Alkymya" style="display: flex; align-items: center; text-decoration: none;">
          <img src="https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png" alt="Alkymya - Studio d'Innovation IA" width="150" height="38" style="height: 38px; width: auto;" />
        </a>
        <nav aria-label="Navigation principale" style="display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
          ${navItems.map(item => `
            <a href="${item.href}" style="color: ${item.href === (route.path === '/' ? '/' : `${route.path}/`) ? '#d97706' : '#1e293b'}; text-decoration: none; padding: 0.25rem 0.5rem;">
              ${item.label}
            </a>
          `).join('')}
        </nav>
      </div>
    </header>

    <main id="main-content" style="max-width: 1200px; margin: 0 auto; padding: 3rem 1.5rem; font-family: system-ui, -apple-system, sans-serif; color: #1e293b; line-height: 1.6;">
      <article>
        <header style="text-align: center; max-width: 900px; margin: 0 auto 3.5rem auto;">
          <h1 style="font-size: 2.75rem; font-weight: 900; color: #1F4F6E; margin-bottom: 1.5rem; line-height: 1.2;">
            ${escapeHtml(route.h1)}
          </h1>
          <p style="font-size: 1.25rem; color: #475569; line-height: 1.6; margin: 0;">
            ${escapeHtml(route.content.leadParagraph)}
          </p>
        </header>

        <div style="display: grid; gap: 2.5rem; margin-bottom: 4rem;">
          ${route.content.sections.map(section => `
            <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.25rem; padding: 2rem 2.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
              <h2 style="font-size: 1.625rem; font-weight: 800; color: #1F4F6E; margin-top: 0; margin-bottom: 1rem;">
                ${escapeHtml(section.h2)}
              </h2>
              ${section.paragraphs.map(p => `
                <p style="font-size: 1rem; color: #334155; margin-bottom: 1rem; line-height: 1.7;">
                  ${escapeHtml(p)}
                </p>
              `).join('')}
              ${section.listItems && section.listItems.length > 0 ? `
                <ul style="margin: 1.25rem 0 0.5rem 0; padding-left: 1.5rem; color: #334155; font-size: 0.95rem; line-height: 1.8;">
                  ${section.listItems.map(item => `
                    <li style="margin-bottom: 0.5rem;">${escapeHtml(item)}</li>
                  `).join('')}
                </ul>
              ` : ''}
            </section>
          `).join('')}
        </div>

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
          © 2026 <strong>Alkymya.co</strong> — Studio d'innovation et formations en Intelligence Artificielle générative. Ozoir-la-Ferrière, Seine-et-Marne (77), France.
        </p>
        <nav aria-label="Liens de pied de page" style="display: flex; gap: 1.5rem; font-size: 0.8125rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">
          <a href="/mentions-legales/" style="color: #cbd5e1; text-decoration: none;">Mentions Légales</a>
          <a href="/newbusiness/" style="color: #cbd5e1; text-decoration: none;">New Business MVP</a>
          <a href="/faq/" style="color: #cbd5e1; text-decoration: none;">FAQ</a>
          <a href="/contact/" style="color: #cbd5e1; text-decoration: none;">Contact</a>
        </nav>
      </div>
    </footer>
  `.trim();
}

function buildJsonLd(route: RouteData, canonicalUrl: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": route.schemaType,
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
          "description": "Studio d'innovation et organisme de formation en Intelligence Artificielle générative."
        }
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://alkymya.co/#organization",
        "name": "Alkymya",
        "url": "https://alkymya.co/",
        "logo": "https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png",
        "image": "https://alkymya.co/og-image.jpg",
        "description": "Studio d'innovation et organisme de formation certifié Qualiopi en IA.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ozoir-la-Ferrière",
          "postalCode": "77330",
          "addressRegion": "Seine-et-Marne",
          "addressCountry": "FR"
        }
      }
    ]
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
  const urlEntries = allRoutes.map(r => {
    const loc = `https://alkymya.co${r.path === '/' ? '/' : `${r.path}/`}`;
    const priority = r.path === '/' ? '1.0' : (r.path === '/newbusiness' || r.path === '/ateliers' ? '0.9' : '0.8');
    const changefreq = r.path === '/' ? 'daily' : (r.path === '/newbusiness' || r.path === '/ateliers' || r.path === '/ressources' ? 'weekly' : 'monthly');
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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

  // 1. Pré-rendre chacune des 12 routes canoniques
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

    // Balises Open Graph & Twitter Cards 1200x630
    const metaTags = `
    <!-- Open Graph / Facebook / LinkedIn (1200x630) -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${escapeHtml(route.title)}" />
    <meta property="og:description" content="${escapeHtml(route.description)}" />
    <meta property="og:image" content="${route.ogImage}" />
    <meta property="og:image:secure_url" content="${route.ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:alt" content="Alkymya — Studio d'Innovation & Formations IA" />
    <meta property="og:site_name" content="Alkymya" />
    <meta property="og:locale" content="fr_FR" />

    <!-- Twitter Cards (summary_large_image) -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonicalUrl}" />
    <meta name="twitter:title" content="${escapeHtml(route.title)}" />
    <meta name="twitter:description" content="${escapeHtml(route.description)}" />
    <meta name="twitter:image" content="${route.ogImage}" />
    <meta name="twitter:image:alt" content="Alkymya — Studio d'Innovation & Formations IA" />

    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
    </script>
`;

    // Nettoyer les balises og:, twitter: et json-ld existantes pour éviter les doublons
    html = html
      .replace(/<script\s+type="application\/ld\+json">.*?<\/script>/gis, '')
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

  // 3. Générer le sitemap.xml avec les 12 URL canoniques et slash final
  const sitemapXml = generateSitemapXml(routes);
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log(`[prerender] Sitemap XML généré avec les 12 URL canoniques (dist/sitemap.xml & public/sitemap.xml).`);

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

  // Copier également l'image og-image.jpg dans dist si elle existe
  const publicOgImage = path.join(process.cwd(), 'public', 'og-image.jpg');
  if (fs.existsSync(publicOgImage)) {
    fs.copyFileSync(publicOgImage, path.join(distDir, 'og-image.jpg'));
    console.log(`[prerender] Image 1200x630 copiée dans dist/og-image.jpg.`);
  }

  console.log(`[prerender] Succès complet du build SEO !`);
}

prerender().catch(err => {
  console.error('[prerender] Erreur fatale durant le pré-rendu :', err);
  process.exit(1);
});
