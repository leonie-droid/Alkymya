export interface CookiePreferences {
  necessary: boolean; // Always true
  analytics: boolean; // Google Analytics G-87HJ0K59JX
  updatedAt?: string;
}

const STORAGE_KEY = 'alkymya_cookie_consent';

export function getStoredCookieConsent(): CookiePreferences | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      updatedAt: parsed.updatedAt,
    };
  } catch {
    return null;
  }
}

export function applyGtagConsent(analyticsGranted: boolean) {
  if (typeof window === 'undefined') return;
  const anyWindow = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof anyWindow.gtag === 'function') {
    anyWindow.gtag('consent', 'update', {
      analytics_storage: analyticsGranted ? 'granted' : 'denied',
    });
  }
}

export function saveCookieConsent(preferences: { analytics: boolean }): CookiePreferences {
  const fullPrefs: CookiePreferences = {
    necessary: true,
    analytics: preferences.analytics,
    updatedAt: new Date().toISOString(),
  };

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fullPrefs));
    } catch {
      // ignore local storage errors
    }

    applyGtagConsent(fullPrefs.analytics);

    // Notify components
    window.dispatchEvent(
      new CustomEvent('alkymya_cookie_consent_changed', { detail: fullPrefs })
    );
  }

  return fullPrefs;
}

export function openCookiePreferencesModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('alkymya_open_cookie_preferences'));
  }
}
