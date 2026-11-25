export const GOOGLE_MAPS_URL = 'https://www.google.com/maps?cid=10471291206194913670';

export const OFFICIAL_GOOGLE_RATING = 5.0;
export const OFFICIAL_GOOGLE_REVIEW_COUNT = 11;
export const OFFICIAL_ATELIER_RECOMMENDATION = '99,3 %';

export interface VerifiedReview {
  id: string;
  author: string;
  context: string;
  rating: number;
  quote: string;
  source: 'verified_local' | 'google_places';
  authorUri?: string;
  reviewUri?: string;
}

export const BASE_VERIFIED_REVIEWS: VerifiedReview[] = [
  {
    id: 'local-augustine',
    author: 'Augustine',
    context: 'Ancienne étudiante IÉSEG · Commerce agentique',
    rating: 5,
    source: 'verified_local',
    quote:
      "Très contente d'avoir eu Cyril en professeur à l'IÉSEG puis en tuteur de mémoire (sur le commerce agentique). Il est très investi dans l'enseignement et possède une vraie maîtrise de l'IA. Sa passion est contagieuse et il est toujours au courant des dernières nouveautés. Ça a été une expérience d'accompagnement très riche, que je recommande.",
  },
  {
    id: 'local-melinda',
    author: 'Mélinda',
    context: 'Ancienne étudiante IÉSEG School of Management',
    rating: 5,
    source: 'verified_local',
    quote:
      "J'ai eu l'opportunité de suivre les cours de Cyril à l'IESEG School of Management et il a également été mon directeur de mémoire. Grâce à son expertise en intelligence artificielle, il sait rendre ces sujets accessibles et très concrets. Dans le cadre de mon mémoire, il m'a accompagnée dans la réflexion et le développement d'une application intégrant de l'IA. J'ai particulièrement apprécié sa pédagogie, sa vision stratégique et sa capacité à transmettre sa passion pour l'innovation. Je recommande vivement Alkymya.",
  },
  {
    id: 'local-noemie',
    author: 'Noémie',
    context: 'Utilisatrice accompagnement & agent SODA',
    rating: 5,
    source: 'verified_local',
    quote:
      "Je suis impressionnée par la qualité des réponses : l'outil ne se contente pas de répondre simplement à une question, mais il propose une analyse hyper structurée, approfondie et il re-challenge vraiment ce qu'on lui dit. Il apporte en plus de nouvelles idées/perspectives auxquelles je n'avais pas pensé, l'agent va au-delà de la question initiale et analyse vraiment les enjeux autour de la question ! Je le recommande vivement !",
  },
];

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

export function mergeAndDeduplicateReviews(
  localReviews: VerifiedReview[],
  apiReviews: VerifiedReview[],
): VerifiedReview[] {
  if (!apiReviews || apiReviews.length === 0) {
    return localReviews;
  }

  // Privilégier les avis live Google Places en tête, puis ajouter les avis locaux vérifiés distincts
  const merged: VerifiedReview[] = [];
  const seenAuthors = new Set<string>();
  const seenQuotePrefixes = new Set<string>();

  for (const review of [...apiReviews, ...localReviews]) {
    const cleanQuote = review.quote?.trim();
    if (!cleanQuote) continue;

    const firstNameNorm = normalizeText(review.author.split(/\s+/)[0] || review.author);
    const fullAuthorNorm = normalizeText(review.author);
    const quotePrefix = normalizeText(cleanQuote).slice(0, 48);

    const isDuplicateQuote = quotePrefix.length > 16 && seenQuotePrefixes.has(quotePrefix);
    const isDuplicateAuthor =
      (firstNameNorm.length >= 4 && seenAuthors.has(firstNameNorm)) ||
      seenAuthors.has(fullAuthorNorm);

    if (isDuplicateQuote || isDuplicateAuthor) {
      continue;
    }

    if (firstNameNorm.length >= 4) seenAuthors.add(firstNameNorm);
    if (fullAuthorNorm) seenAuthors.add(fullAuthorNorm);
    if (quotePrefix.length > 16) seenQuotePrefixes.add(quotePrefix);

    merged.push(review);
  }

  return merged.length > 0 ? merged : localReviews;
}
