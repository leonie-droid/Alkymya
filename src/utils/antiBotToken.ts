/**
 * Shared Anti-Bot Token & Types (isomorphic: runs in both browser and Node/serverless)
 */

export type ProtectedFormType =
  | 'contact'
  | 'newbusiness'
  | 'newsletter_footer'
  | 'newsletter_modal';

export interface AntiBotPayload {
  website?: string;
  _loadedAt?: number;
  _botToken?: string;
  _interacted?: boolean;
  _formType?: ProtectedFormType;
}

const ANTIBOT_SALT = 'alkymya-shield-2026-v1';

/**
 * Generates a lightweight deterministic signature proving client-side JS execution
 * for a given render timestamp and form identifier.
 */
export function computeAntiBotSignature(loadedAt: number, formType: string): string {
  const input = `${loadedAt}:${formType}:${ANTIBOT_SALT}`;
  let h1 = 0x811c9dc5;
  let h2 = 0x9e3779b9;

  for (let i = 0; i < input.length; i++) {
    const code = input.charCodeAt(i);
    h1 ^= code;
    h1 = Math.imul(h1, 0x01000193);
    h2 ^= (code << (i % 7)) | (code >>> (8 - (i % 7)));
    h2 = Math.imul(h2, 0x85ebca6b);
  }

  return `${(h1 >>> 0).toString(36)}-${(h2 >>> 0).toString(36)}`;
}
