import { useEffect, useState } from 'react';
import {
  BASE_VERIFIED_REVIEWS,
  GOOGLE_MAPS_URL,
  OFFICIAL_GOOGLE_RATING,
  OFFICIAL_GOOGLE_REVIEW_COUNT,
  VerifiedReview,
  mergeAndDeduplicateReviews,
} from '../data/reviews';

export interface GoogleReviewsState {
  reviews: VerifiedReview[];
  rating: number;
  totalReviewCount: number;
  googleMapsUri: string;
  source: 'fallback' | 'google_places';
  isLoading: boolean;
}

interface CachedPayload {
  reviews: VerifiedReview[];
  rating: number;
  totalReviewCount: number;
  googleMapsUri: string;
  source: 'fallback' | 'google_places';
}

let clientMemoryCache: CachedPayload | null = null;
let inflightRequest: Promise<CachedPayload | null> | null = null;

async function fetchGoogleReviewsOnce(): Promise<CachedPayload | null> {
  if (clientMemoryCache) {
    return clientMemoryCache;
  }
  if (inflightRequest) {
    return inflightRequest;
  }

  inflightRequest = (async () => {
    try {
      const response = await fetch('/api/google-reviews', {
        method: 'GET',
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) return null;

      const data = await response.json();
      const apiReviews: VerifiedReview[] = Array.isArray(data?.reviews)
        ? data.reviews
            .filter((r: any) => typeof r?.quote === 'string' && r.quote.trim().length > 0)
            .map((r: any, idx: number) => ({
              id: typeof r.id === 'string' ? r.id : `places-${idx}`,
              author: typeof r.author === 'string' && r.author.trim() ? r.author.trim() : 'Client Google',
              context:
                typeof r.context === 'string' && r.context.trim()
                  ? r.context.trim()
                  : 'Avis Google vérifié',
              rating: typeof r.rating === 'number' ? r.rating : 5,
              quote: r.quote.trim(),
              source: 'google_places' as const,
              authorUri: typeof r.authorUri === 'string' ? r.authorUri : undefined,
              reviewUri: typeof r.reviewUri === 'string' ? r.reviewUri : undefined,
            }))
        : [];

      const merged = mergeAndDeduplicateReviews(BASE_VERIFIED_REVIEWS, apiReviews);
      const payload: CachedPayload = {
        reviews: merged,
        rating:
          typeof data?.rating === 'number' && data.rating > 0
            ? data.rating
            : OFFICIAL_GOOGLE_RATING,
        totalReviewCount:
          typeof data?.userRatingCount === 'number' && data.userRatingCount > 0
            ? Math.max(data.userRatingCount, OFFICIAL_GOOGLE_REVIEW_COUNT)
            : OFFICIAL_GOOGLE_REVIEW_COUNT,
        googleMapsUri:
          typeof data?.googleMapsUri === 'string' && data.googleMapsUri.startsWith('http')
            ? data.googleMapsUri
            : GOOGLE_MAPS_URL,
        source: data?.source === 'google_places' ? 'google_places' : 'fallback',
      };

      clientMemoryCache = payload;
      return payload;
    } catch {
      return null;
    } finally {
      inflightRequest = null;
    }
  })();

  return inflightRequest;
}

export function useGoogleReviews(): GoogleReviewsState {
  const [state, setState] = useState<GoogleReviewsState>(() => {
    if (clientMemoryCache) {
      return { ...clientMemoryCache, isLoading: false };
    }
    return {
      reviews: BASE_VERIFIED_REVIEWS,
      rating: OFFICIAL_GOOGLE_RATING,
      totalReviewCount: OFFICIAL_GOOGLE_REVIEW_COUNT,
      googleMapsUri: GOOGLE_MAPS_URL,
      source: 'fallback',
      isLoading: true,
    };
  });

  useEffect(() => {
    if (clientMemoryCache) return;
    let active = true;

    fetchGoogleReviewsOnce().then((payload) => {
      if (!active) return;
      if (payload) {
        setState({ ...payload, isLoading: false });
      } else {
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return state;
}
