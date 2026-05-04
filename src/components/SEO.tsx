import React from 'react';

interface SEOProps {
  type?: 'WebPage' | 'FAQPage' | 'LocalBusiness' | 'EducationalOrganization';
  faqData?: Array<{ question: string; answer: string }>;
}

export const SEO: React.FC<SEOProps> = ({ type = 'WebPage', faqData }) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Alkymya",
    "image": "https://res.cloudinary.com/dokzioyu4/image/upload/v1758096912/logo_principal_bleu_gbnyuu.png",
    "@id": "https://alkymya.co",
    "url": "https://alkymya.co",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Ozoir-la-Ferrière",
      "postalCode": "77330",
      "addressRegion": "Seine-et-Marne",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.7667,
      "longitude": 2.6833
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const educationalOrgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Alkymya",
    "description": "Expert enseignant en Intelligence Artificielle et Innovation Pédagogique pour les Grandes Écoles.",
    "url": "https://alkymya.co",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ozoir-la-Ferrière",
      "addressRegion": "Seine-et-Marne"
    }
  };

  const faqSchema = faqData ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

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
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Alkymya - Créateurs d'avenir par l'IA",
          "description": "Studio d'innovation spécialisé dans l'IA, l'agentification et la formation en Seine-et-Marne.",
          "publisher": {
            "@type": "Organization",
            "name": "Alkymya"
          }
        })}
      </script>
    </>
  );
};
