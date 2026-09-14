import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, ShieldCheck, Check, X, Settings2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  getStoredCookieConsent,
  saveCookieConsent,
  CookiePreferences,
} from '../utils/cookieConsent';

export default function CookieBanner() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [consent, setConsent] = useState<CookiePreferences | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const stored = getStoredCookieConsent();
    setConsent(stored);
    if (!stored) {
      setShowBanner(true);
      setAnalyticsEnabled(true); // Default toggle in modal to recommended
    } else {
      setAnalyticsEnabled(stored.analytics);
    }
    setHasLoaded(true);

    const handleOpenModal = () => {
      setShowModal(true);
      setShowBanner(false);
    };

    window.addEventListener('alkymya_open_cookie_preferences', handleOpenModal);
    return () => {
      window.removeEventListener('alkymya_open_cookie_preferences', handleOpenModal);
    };
  }, []);

  const handleAcceptAll = () => {
    const saved = saveCookieConsent({ analytics: true });
    setConsent(saved);
    setAnalyticsEnabled(true);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleRefuseAll = () => {
    const saved = saveCookieConsent({ analytics: false });
    setConsent(saved);
    setAnalyticsEnabled(false);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSaveCustom = () => {
    const saved = saveCookieConsent({ analytics: analyticsEnabled });
    setConsent(saved);
    setShowBanner(false);
    setShowModal(false);
  };

  if (!hasLoaded) return null;

  return (
    <>
      {/* Floating button to reopen settings anytime (CNIL requirement) */}
      {!showBanner && !showModal && (
        <motion.button
          id="btn-reopen-cookie-settings"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowModal(true)}
          className="fixed bottom-4 left-4 z-40 flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 text-deep-blue text-xs font-semibold shadow-lg shadow-black/10 border border-border/80 hover:border-accent hover:text-accent backdrop-blur-md transition-all duration-300 group"
          title="Gérer vos préférences de cookies (RGPD)"
          aria-label="Gérer vos préférences de cookies"
        >
          <div className="w-5 h-5 rounded-full bg-deep-green/10 text-deep-green group-hover:bg-accent/15 group-hover:text-accent flex items-center justify-center transition-colors">
            <Cookie className="w-3.5 h-3.5" />
          </div>
          <span className="hidden sm:inline">Cookies & Confidentialité</span>
        </motion.button>
      )}

      {/* Main Cookie Banner (bottom banner) */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            id="alkymya-cookie-banner"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-xl z-50"
          >
            <div className="rounded-3xl bg-white/95 border border-deep-blue/15 p-6 md:p-7 shadow-2xl shadow-deep-blue/15 backdrop-blur-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-deep-green/10 text-deep-green flex items-center justify-center shrink-0 mt-0.5">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading font-black text-lg text-deep-blue">
                      Respect de votre vie privée
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-deep-green/10 text-deep-green">
                      RGPD
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Alkymya utilise des traceurs techniques indispensables au fonctionnement du site et, avec votre accord, des cookies de mesure d'audience (<strong className="text-deep-blue">Google Analytics</strong>) pour mesurer l'intérêt porté à nos ateliers et optimiser nos contenus.
                  </p>
                </div>
              </div>

              <div className="text-xs text-slate-500 mb-5 pl-14">
                Vous pouvez accepter, refuser ou personnaliser vos choix à tout moment. Consultez nos{' '}
                <Link
                  to="/mentions-legales"
                  className="underline text-deep-blue hover:text-accent transition-colors font-medium"
                >
                  mentions légales et politique de confidentialité
                </Link>.
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:justify-end">
                <button
                  id="btn-cookie-customize"
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 hover:border-deep-blue/40 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all text-center flex items-center justify-center gap-2"
                >
                  <Settings2 className="w-3.5 h-3.5" />
                  <span>Personnaliser</span>
                </button>

                <button
                  id="btn-cookie-refuse-all"
                  type="button"
                  onClick={handleRefuseAll}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-600 text-xs font-bold hover:bg-slate-100 transition-all text-center"
                >
                  Continuer sans accepter
                </button>

                <button
                  id="btn-cookie-accept-all"
                  type="button"
                  onClick={handleAcceptAll}
                  className="px-5 py-2.5 rounded-xl bg-deep-blue hover:bg-deep-blue/90 text-white text-xs font-bold shadow-md shadow-deep-blue/20 transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Tout accepter</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences / Customization Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              id="alkymya-cookie-modal"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-deep-green/10 text-deep-green flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-xl text-deep-blue">
                      Préférences de cookies
                    </h3>
                    <p className="text-xs text-slate-500">
                      Gérez vos choix en matière de cookies et respect de la vie privée
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 text-sm">
                <p className="text-slate-600 leading-relaxed">
                  Conformément aux recommandations de la CNIL et au RGPD, nous vous donnons le plein contrôle sur le dépôt des cookies. Vos choix sont conservés pendant 6 mois et peuvent être modifiés à tout moment.
                </p>

                {/* Category 1: Essential cookies */}
                <div className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-deep-blue">Cookies techniques nécessaires</h4>
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded-md bg-slate-200 text-slate-700">
                        Obligatoire
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Indispensables à la navigation, à la sécurité du site et à la mémorisation de vos consentements. Ils ne peuvent pas être désactivés.
                    </p>
                  </div>
                  <div className="shrink-0 pt-1">
                    <span className="text-xs font-bold text-deep-green bg-deep-green/10 px-2.5 py-1 rounded-full">
                      Toujours actif
                    </span>
                  </div>
                </div>

                {/* Category 2: Analytics cookies (Google Analytics) */}
                <div className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors flex items-start justify-between gap-4">
                  <div className="space-y-1.5 pr-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-deep-blue">Mesure d'audience (Google Analytics)</h4>
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded-md bg-accent/10 text-accent">
                        G-87HJ0K59JX
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Ces cookies nous aident à comprendre comment les visiteurs interagissent avec nos contenus, quelles formations et oeuvres sont les plus consultées, et à détecter d'éventuels bugs.
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Les adresses IP sont anonymisées. Aucune donnée personnelle n'est revendue à des tiers.
                    </p>
                  </div>

                  {/* Switch Toggle */}
                  <div className="shrink-0 pt-1">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={analyticsEnabled}
                        onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-deep-green"></div>
                    </label>
                  </div>
                </div>

                <div className="text-xs text-slate-500 pt-2 flex items-center justify-between border-t border-slate-100">
                  <span>Fournisseur d'analyse : Google LLC</span>
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-deep-blue hover:text-accent transition-colors font-medium"
                  >
                    <span>Règles de confidentialité Google</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleRefuseAll}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 text-xs font-bold transition-colors"
                >
                  Tout refuser
                </button>

                <div className="w-full sm:w-auto flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-deep-blue/20 hover:bg-deep-blue/5 text-deep-blue text-xs font-bold transition-colors"
                  >
                    Tout accepter
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveCustom}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-deep-green hover:bg-deep-green/90 text-white text-xs font-bold shadow-md shadow-deep-green/20 transition-all"
                  >
                    Enregistrer mes préférences
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
