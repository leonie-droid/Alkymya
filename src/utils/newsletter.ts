/**
 * Newsletter Utility Functions for Alkymya
 */

export interface SubscribeParams {
  email: string;
  firstName?: string;
  lastName?: string;
  source?: string;
}

export interface SubscribeResult {
  success: boolean;
  message: string;
  audienceId?: string;
  alreadySubscribed?: boolean;
}

export function openNewsletterModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('alkymya_open_newsletter'));
  }
}

export async function subscribeToNewsletter(params: SubscribeParams): Promise<SubscribeResult> {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!params.email || !emailRegex.test(params.email.trim())) {
    return {
      success: false,
      message: 'Veuillez saisir une adresse email valide.'
    };
  }

  try {
    const res = await fetch('/api/newsletter-subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: params.email.trim(),
        firstName: params.firstName?.trim() || '',
        lastName: params.lastName?.trim() || '',
        source: params.source || 'website',
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: data.error || data.message || 'Une erreur est survenue lors de l\'inscription.'
      };
    }

    return {
      success: true,
      message: data.message || 'Merci ! Votre inscription à notre lettre d\'information est confirmée.',
      audienceId: data.audienceId,
      alreadySubscribed: data.alreadySubscribed,
    };
  } catch (err: any) {
    console.error('Newsletter subscription error:', err);
    return {
      success: false,
      message: 'Impossible de contacter le serveur. Veuillez réessayer ultérieurement.'
    };
  }
}
