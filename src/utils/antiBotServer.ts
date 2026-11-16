import type { Request } from 'express';
import { computeAntiBotSignature } from './antiBotToken';

export interface BotCheckResult {
  isBot: boolean;
  reason?: string;
  validationError?: string;
}

const VALID_FORM_TYPES = new Set([
  'contact',
  'newbusiness',
  'newsletter_footer',
  'newsletter_modal',
]);

const SCRAPER_UA_REGEX =
  /^(curl|wget|python-requests|python-urllib|aiohttp|httpx|scrapy|libwww-perl|httpclient|go-http-client|java\/|php\/|mechanize|phantomjs)/i;

const BBCODE_OR_HTML_LINK_REGEX = /(\[url\s*=|\[\/url\]|\[link\s*=|<\s*a\s+href\s*=)/i;
const URL_REGEX = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;
const CRLF_REGEX = /[\r\n]/;

/**
 * Escapes HTML special characters before interpolating user data into email templates.
 */
export function escapeHtml(input: unknown): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function looksLikeGibberishName(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  // Long token without spaces and no accented/normal spacing or heavy mixed-case random string
  const tokens = trimmed.split(/\s+/);
  for (const token of tokens) {
    if (token.length >= 24 && !token.includes('-')) {
      return true;
    }
    // 10+ consecutive consonants in Latin alphabet
    if (/[bcdfghjklmnpqrstvwxz]{10,}/i.test(token)) {
      return true;
    }
  }
  return false;
}

/**
 * Multi-layer invisible anti-bot verification for form POST endpoints:
 * 1. Obvious script User-Agent rejection
 * 2. Honeypot field check
 * 3. JS execution signature & minimum human fill-time check (>= 1.5s)
 * 4. Client interaction signal check
 * 5. Semantic anti-spam heuristics & header injection checks
 */
export function evaluateAntiBotSubmission(
  req: Request,
  options: {
    expectedFormTypes: string[];
    textFieldsToScan?: string[];
    nameFields?: string[];
    singleLineFields?: string[];
  }
): BotCheckResult {
  const body = (req.body || {}) as Record<string, unknown>;

  // 1. Obvious CLI / scraper User-Agent
  const userAgent = String(req.headers['user-agent'] || '').trim();
  if (userAgent && SCRAPER_UA_REGEX.test(userAgent)) {
    return { isBot: true, reason: `scraper_ua:${userAgent.slice(0, 40)}` };
  }

  // 2. Honeypot trap (must stay completely empty)
  if (typeof body.website === 'string' && body.website.trim().length > 0) {
    return { isBot: true, reason: 'honeypot_filled' };
  }

  // 3. JS execution signature & form type verification
  const loadedAt = typeof body._loadedAt === 'number' ? body._loadedAt : Number(body._loadedAt);
  const formType = typeof body._formType === 'string' ? body._formType : '';
  const botToken = typeof body._botToken === 'string' ? body._botToken : '';

  if (
    !Number.isFinite(loadedAt) ||
    !VALID_FORM_TYPES.has(formType) ||
    !options.expectedFormTypes.includes(formType)
  ) {
    return { isBot: true, reason: 'missing_or_invalid_form_metadata' };
  }

  const expectedSignature = computeAntiBotSignature(loadedAt, formType);
  if (botToken !== expectedSignature) {
    return { isBot: true, reason: 'invalid_js_signature' };
  }

  // 4. Time-to-submit check (humans take >= 1.5s; allow slight clock skew up to 5s forward, max 7 days old)
  const elapsedMs = Date.now() - loadedAt;
  if (elapsedMs < 1500) {
    return { isBot: true, reason: `submitted_too_fast:${elapsedMs}ms` };
  }
  if (elapsedMs > 7 * 24 * 60 * 60 * 1000) {
    return { isBot: true, reason: 'stale_form_token' };
  }

  // 5. Real browser interaction check
  if (body._interacted !== true) {
    return { isBot: true, reason: 'no_user_interaction' };
  }

  // 6. Header injection guard on single-line fields
  for (const field of options.singleLineFields || []) {
    const val = body[field];
    if (typeof val === 'string' && CRLF_REGEX.test(val)) {
      return {
        isBot: false,
        validationError: 'Caractères non autorisés dans le formulaire.',
      };
    }
  }

  // 7. Name field sanity checks (no URLs, no gibberish bot hashes)
  for (const field of options.nameFields || []) {
    const val = body[field];
    if (typeof val === 'string' && val.trim()) {
      if (URL_REGEX.test(val)) {
        URL_REGEX.lastIndex = 0;
        return { isBot: true, reason: `url_in_name_field:${field}` };
      }
      URL_REGEX.lastIndex = 0;
      if (looksLikeGibberishName(val)) {
        return { isBot: true, reason: `gibberish_name:${field}` };
      }
    }
  }

  // 8. Semantic spam heuristics on free-text fields
  for (const field of options.textFieldsToScan || []) {
    const val = body[field];
    if (typeof val === 'string' && val.trim()) {
      if (BBCODE_OR_HTML_LINK_REGEX.test(val)) {
        return { isBot: true, reason: `bbcode_or_html_link:${field}` };
      }
      const urlMatches = val.match(URL_REGEX);
      if (urlMatches && urlMatches.length >= 3) {
        return { isBot: true, reason: `excessive_urls:${field}:${urlMatches.length}` };
      }
    }
  }

  return { isBot: false };
}
