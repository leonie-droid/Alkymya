import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  type?:
    | 'WebPage'
    | 'FAQPage'
    | 'LocalBusiness'
    | 'EducationalOrganization'
    | 'CollectionPage'
    | 'Course'
    | 'AboutPage'
    | 'ContactPage'
    | 'WebApplication'
    | 'EducationalOccupationalProgram'
    | 'ProfilePage'
    | 'Article';
  faqData?: Array<{ question: string; answer: string }>;
  structuredData?: Record<string, any>;
  noIndex?: boolean;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  if (!href) return;
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalPath,
  ogImage,
  type = 'WebPage',
  faqData,
  structuredData,
  noIndex = false,
}) => {
  useEffect(() => {
    upsertMeta(
      'name',
      'robots',
      noIndex
        ? 'noindex, follow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );
    if (title) {
      document.title = title;
      upsertMeta('property', 'og:title', title);
      upsertMeta('name', 'twitter:title', title);
    }
    if (description) {
      upsertMeta('name', 'description', description);
      upsertMeta('property', 'og:description', description);
      upsertMeta('name', 'twitter:description', description);
    }
    if (keywords) {
      upsertMeta('name', 'keywords', keywords);
    }
    if (ogImage) {
      upsertMeta('property', 'og:image', ogImage);
      upsertMeta('property', 'og:image:secure_url', ogImage);
      upsertMeta('name', 'twitter:image', ogImage);
      const imgAlt = title || 'Alkymya — Agence IA & Studio Création IA en France';
      upsertMeta('property', 'og:image:alt', imgAlt);
      upsertMeta('name', 'twitter:image:alt', imgAlt);
    }
    if (canonicalPath || title) {
      const origin = 'https://alkymya.co';
      const path =
        canonicalPath !== undefined
          ? canonicalPath === '/'
            ? '/'
            : `${canonicalPath.replace(/\/$/, '')}/`
          : typeof window !== 'undefined'
          ? window.location.pathname
          : '/';
      const fullUrl = `${origin}${path}`;
      upsertCanonical(fullUrl);
      upsertMeta('property', 'og:url', fullUrl);
      upsertMeta('name', 'twitter:url', fullUrl);
    }
  }, [title, description, keywords, canonicalPath, ogImage, noIndex]);

  const alkymyaKnowsAbout = [
    "Intelligence Artificielle Générative",
    "Création d'Agents IA Sur Mesure",
    "Stratégie SEO et GEO Google AI",
    "Formation IA Entreprise OPCO",
    "Audit Capital IA",
    "RAG Local et Souveraineté des Données",
    "Conformité IA Act et RGPD"
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "Alkymya",
    "legalName": "CYRIL GARNIER CONSULTING",
    "alternateName": ["Alkymya.co", "Studio Alkymya"],
    "image": "https://alkymya.co/og-image.jpg",
    "logo": "https://res.cloudinary.com/dokzioyu4/image/upload/f_auto,q_auto,w_600,c_limit/v1758096912/logo_principal_bleu_gbnyuu.png",
    "@id": "https://alkymya.co/#organization",
    "url": "https://alkymya.co/",
    "description": "Alkymya, studio d'expertise et de création IA en France : accompagnement intelligence artificielle, création d'agents IA sur mesure, stratégie SEO et GEO Google AI et formations OPCO via nos organismes partenaires certifiés Qualiopi.",
    "knowsAbout": alkymyaKnowsAbout,
    "founder": {
      "@type": "Person",
      "@id": "https://alkymya.co/#cyril-garnier",
      "name": "Cyril Garnier",
      "url": "https://cyrilgarnier.fr/",
      "sameAs": [
        "https://cyrilgarnier.fr/",
        "https://www.linkedin.com/in/cyril-garnier-89697b1/"
      ]
    },
    "telephone": "+33643649777",
    "email": "cyril@alkymya.co",
    "vatID": "FR82842403669",
    "taxID": "842403669",
    "sameAs": [
      "https://www.linkedin.com/company/alkymya/",
      "https://www.youtube.com/@alkymya",
      "https://www.instagram.com/alkymya.co/",
      "https://cyrilgarnier.fr/",
      "https://www.facebook.com/cyril.garnier.969"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2 rue Sacha Guitry",
      "postalCode": "77330",
      "addressLocality": "Ozoir-la-Ferrière",
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Seine-et-Marne" },
      { "@type": "AdministrativeArea", "name": "Île-de-France" },
      { "@type": "Country", "name": "France" }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.7667,
      "longitude": 2.6833
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:30"
      }
    ]
  };

  const educationalOrgSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Alkymya",
    "legalName": "CYRIL GARNIER CONSULTING",
    "alternateName": ["Alkymya.co", "Studio Alkymya"],
    "description": "Alkymya, studio d'expertise et de création IA en France : atelier IA pratique, création d'agents IA, accompagnement dirigeants et formations finançables OPCO via nos organismes partenaires certifiés Qualiopi.",
    "knowsAbout": alkymyaKnowsAbout,
    "url": "https://alkymya.co/",
    "telephone": "+33643649777",
    "email": "cyril@alkymya.co",
    "vatID": "FR82842403669",
    "taxID": "842403669",
    "founder": {
      "@id": "https://alkymya.co/#cyril-garnier"
    },
    "sameAs": [
      "https://www.linkedin.com/company/alkymya/",
      "https://www.youtube.com/@alkymya",
      "https://www.instagram.com/alkymya.co/",
      "https://cyrilgarnier.fr/",
      "https://www.facebook.com/cyril.garnier.969"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2 rue Sacha Guitry",
      "postalCode": "77330",
      "addressLocality": "Ozoir-la-Ferrière",
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    }
  };

  const faqSchema = faqData
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    : null;

  const pageUrl = canonicalPath
    ? `https://alkymya.co${canonicalPath === '/' ? '/' : `${canonicalPath.replace(/\/$/, '')}/`}`
    : 'https://alkymya.co/';

  return (
    <>
      {type === 'LocalBusiness' && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      )}
      {type === 'EducationalOrganization' && (
        <script type="application/ld+json">
          {JSON.stringify(educationalOrgSchema)}
        </script>
      )}
      {type === 'FAQPage' && faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      {structuredData ? (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      ) : (
        (title || description) && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": type === 'LocalBusiness' || type === 'EducationalOrganization' ? 'WebPage' : type,
              "name": title || "Agence IA & Studio Création IA | Alkymya",
              "description": description || "Agence IA et studio création IA : accompagnement intelligence artificielle, création d'agents IA sur mesure, stratégie SEO et GEO.",
              "url": pageUrl,
              "inLanguage": "fr-FR",
              "publisher": {
                "@type": "Organization",
                "name": "Alkymya",
                "url": "https://alkymya.co/"
              }
            })}
          </script>
        )
      )}
    </>
  );
};
