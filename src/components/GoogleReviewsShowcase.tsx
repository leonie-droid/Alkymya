import React, { useState } from 'react';
import { Star, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useGoogleReviews } from '../hooks/useGoogleReviews';
import { OFFICIAL_ATELIER_RECOMMENDATION } from '../data/reviews';

interface GoogleReviewsShowcaseProps {
  variant?: 'dark' | 'light';
  kicker?: string;
  headingPrefix?: string;
  headingStrong?: string;
  className?: string;
}

export const GoogleReviewsShowcase: React.FC<GoogleReviewsShowcaseProps> = ({
  variant = 'light',
  kicker = 'Avis clients vérifiés · Google Business Profile',
  headingPrefix = 'Une satisfaction notée',
  headingStrong = '5,0 / 5 sur Google',
  className = '',
}) => {
  const { reviews, rating, totalReviewCount, googleMapsUri, source } = useGoogleReviews();
  const [showAll, setShowAll] = useState(false);

  const visibleCountDefault = 3;
  const hasMoreReviews = reviews.length > visibleCountDefault;
  const visibleReviews = showAll ? reviews : reviews.slice(0, visibleCountDefault);
  const formattedRating = rating.toFixed(1).replace('.', ',');

  if (variant === 'dark') {
    return (
      <div
        className={`rounded-[12px] bg-[#1F4F6E] text-white shadow-[0_6px_24px_rgba(31,79,110,0.14)] p-7 sm:p-9 flex flex-col justify-between gap-6 ${className}`}
      >
        {/* En-tête notation Google */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 pb-5 border-b border-white/15">
          <div>
            <p className="text-[0.72rem] font-medium tracking-[0.14em] uppercase text-[#02ADAB] mb-2">
              {kicker}
            </p>
            <h3 className="text-[1.45rem] sm:text-[1.65rem] font-light text-white leading-tight [text-wrap:balance]">
              {headingPrefix} <strong className="font-medium">{headingStrong}</strong>
            </h3>
          </div>

          <div className="flex sm:flex-col items-baseline sm:items-end justify-between gap-2 shrink-0">
            <div className="flex items-baseline gap-1.5 tabular-nums">
              <span className="text-[2.35rem] leading-none font-light text-white">{formattedRating}</span>
              <span className="text-sm text-white/70">/ 5</span>
            </div>
            <div className="flex flex-col sm:items-end gap-1">
              <div
                className="flex items-center gap-0.5 text-[#fbbf24]"
                aria-label={`Note vérifiée de ${formattedRating} étoiles sur 5`}
              >
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="text-xs text-white/80 tabular-nums whitespace-nowrap">
                {totalReviewCount} avis Google · {OFFICIAL_ATELIER_RECOMMENDATION} ateliers
              </p>
            </div>
          </div>
        </div>

        {/* 3 avis visibles par défaut + expansion */}
        <div className="divide-y divide-white/12">
          {visibleReviews.map((review) => (
            <article key={review.id} className="py-4 first:pt-0 last:pb-0">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex flex-wrap items-center gap-2 text-xs text-white/80">
                  {review.authorUri ? (
                    <a
                      href={review.authorUri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white hover:text-[#02ADAB] underline underline-offset-2 transition-colors"
                    >
                      {review.author}
                    </a>
                  ) : (
                    <span className="font-medium text-white">{review.author}</span>
                  )}
                  <span aria-hidden="true">·</span>
                  <span>{review.context}</span>
                </div>
                <div className="flex items-center gap-0.5 text-[#fbbf24] shrink-0" aria-label={`${review.rating} sur 5`}>
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <blockquote className="text-[0.94rem] leading-[1.65] font-normal tracking-[0.01em] text-white/90">
                « {review.quote} »
              </blockquote>
            </article>
          ))}
        </div>

        {/* Barre d'actions & attribution Google */}
        <div className="pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4">
            {hasMoreReviews && (
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                aria-expanded={showAll}
                className="min-h-[40px] px-4 py-2 rounded-[8px] bg-white/12 hover:bg-white/20 text-white text-xs sm:text-sm font-medium inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02ADAB]"
              >
                <span>
                  {showAll
                    ? 'Réduire à 3 avis'
                    : `Afficher les ${reviews.length} avis disponibles`}
                </span>
                {showAll ? (
                  <ChevronUp className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                )}
              </button>
            )}

            <a
              href={googleMapsUri}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-white/85 hover:text-white inline-flex items-center gap-1.5 underline underline-offset-4 decoration-white/30 transition-colors"
            >
              <span>
                {source === 'google_places'
                  ? `Avis issus de Google · Voir les ${totalReviewCount} avis`
                  : `Voir les ${totalReviewCount} avis sur Google Maps`}
              </span>
              <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>

          <a
            href={googleMapsUri}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[40px] px-5 py-2.5 rounded-[8px] bg-[#C06721] hover:bg-[#a85517] text-white text-sm font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Laisser un avis sur Google</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* En-tête éditorial + notation vérifiée */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[rgba(31,79,110,0.1)]">
        <div>
          <p className="text-[0.75rem] tracking-[0.18em] uppercase text-[#037971] mb-2 font-medium">
            {kicker}
          </p>
          <h2 className="text-[1.75rem] sm:text-[2rem] font-light text-[#1F4F6E] leading-tight [text-wrap:balance]">
            {headingPrefix} <strong className="font-medium text-[#1F4F6E]">{headingStrong}</strong>
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-[2rem] leading-none font-light text-[#1F4F6E] tabular-nums">
              {formattedRating}
              <span className="text-sm text-[#5a7a90]">/5</span>
            </span>
            <div>
              <div
                className="flex items-center gap-0.5 text-[#C06721]"
                aria-label={`Note vérifiée de ${formattedRating} étoiles sur 5`}
              >
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="text-xs text-[#5a7a90] tabular-nums mt-0.5">
                {totalReviewCount} avis Google · {OFFICIAL_ATELIER_RECOMMENDATION} recommandation
              </p>
            </div>
          </div>

          <a
            href={googleMapsUri}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[40px] px-4 py-2 rounded-[8px] bg-[#1F4F6E] hover:bg-[#02ADAB] text-white text-xs sm:text-sm font-medium inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02ADAB]"
          >
            <span>Laisser un avis Google</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Grille 3 colonnes par défaut + expansion */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {visibleReviews.map((review) => (
          <article
            key={review.id}
            className="rounded-[12px] bg-white border border-[rgba(31,79,110,0.08)] shadow-[0_2px_16px_rgba(31,79,110,0.06)] p-6 flex flex-col justify-between gap-5"
          >
            <div>
              <div
                className="flex items-center gap-0.5 text-[#C06721] mb-3"
                aria-label={`${review.rating} étoiles sur 5`}
              >
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-[0.94rem] text-[#1F4F6E] leading-[1.68] font-normal">
                « {review.quote} »
              </blockquote>
            </div>

            <footer className="pt-4 border-t border-[rgba(31,79,110,0.08)] flex flex-wrap items-center gap-1.5 text-xs text-[#5a7a90]">
              {review.authorUri ? (
                <a
                  href={review.authorUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#1F4F6E] hover:text-[#037971] underline underline-offset-2"
                >
                  {review.author}
                </a>
              ) : (
                <span className="font-medium text-[#1F4F6E]">{review.author}</span>
              )}
              <span aria-hidden="true">·</span>
              <span>{review.context}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#037971] font-medium">Avis Google 5/5</span>
            </footer>
          </article>
        ))}
      </div>

      {/* Contrôle d'expansion et lien vers la fiche Google complète */}
      <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {hasMoreReviews && (
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              className="min-h-[40px] px-5 py-2.5 rounded-[8px] border border-[rgba(31,79,110,0.18)] bg-white hover:border-[#02ADAB] text-[#1F4F6E] text-sm font-medium inline-flex items-center gap-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02ADAB]"
            >
              <span>
                {showAll
                  ? 'Réduire à 3 avis'
                  : `Afficher tous les avis disponibles (${reviews.length})`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4" aria-hidden="true" />
              ) : (
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
          )}
          <span className="text-xs text-[#5a7a90] tabular-nums">
            {visibleReviews.length} avis affichés sur {totalReviewCount} avis vérifiés Google
            {source === 'google_places' ? ' · Avis issus de Google' : ''}
          </span>
        </div>

        <a
          href={googleMapsUri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[#037971] hover:text-[#1F4F6E] inline-flex items-center gap-1.5 underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
        >
          <span>Consulter les {totalReviewCount} avis sur Google Maps</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};
