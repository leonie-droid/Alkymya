import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Oeuvres from './pages/Oeuvres';
import Ateliers from './pages/Ateliers';
import Ressources from './pages/Ressources';
import EtudesHub from './pages/EtudesHub';
import EtudeDetail from './pages/EtudeDetail';
import EtudeGemini4 from './pages/EtudeGemini4';
import AnalyseursHub from './pages/AnalyseursHub';
import AnalyseurDetail from './pages/AnalyseurDetail';
import BusinessGame from './pages/BusinessGame';
import GenerateurIA from './pages/GenerateurIA';
import Alchimistes from './pages/Alchimistes';
import AlchimisteDetail from './pages/AlchimisteDetail';
import Partenaires from './pages/Partenaires';
import PartenairesSubHub from './pages/PartenairesSubHub';
import PartenaireDetail from './pages/PartenaireDetail';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import JoinUs from './pages/JoinUs';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import Accessibilite from './pages/Accessibilite';
import PlanDuSite from './pages/PlanDuSite';
import NewBusiness from './pages/NewBusiness';
import { SEO } from './components/SEO';
import CookieBanner from './components/CookieBanner';
import { AnalyticsTracker } from './components/AnalyticsTracker';
import NewsletterModal from './components/NewsletterModal';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
       <ScrollToTop />
       <AnalyticsTracker />
       <div className="min-h-screen flex flex-col selection:bg-accent selection:text-white">
         <a
           href="#main-content"
           className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:rounded-lg focus:bg-[#1F4F6E] focus:text-white focus:font-medium focus:text-sm focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#02ADAB]"
         >
           Aller au contenu principal
         </a>
         <SEO type="LocalBusiness" />
         <Header />
         <main id="main-content" tabIndex={-1} className="flex-grow outline-none">
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/ia" element={<GenerateurIA />} />
             <Route path="/oeuvres" element={<Oeuvres />} />
             <Route path="/alchimistes" element={<Alchimistes />} />
             <Route path="/alchimistes/:id" element={<AlchimisteDetail />} />
             <Route path="/ateliers" element={<Ateliers />} />
             <Route path="/ressources" element={<Ressources />} />
             <Route path="/ressources/etudes" element={<EtudesHub />} />
             <Route path="/ressources/etudes/interview-gemini-4" element={<EtudeGemini4 />} />
             <Route path="/ressources/etudes/:studySlug" element={<EtudeDetail />} />
             <Route path="/ressources/analyseurs" element={<AnalyseursHub />} />
             <Route path="/ressources/analyseurs/:toolSlug" element={<AnalyseurDetail />} />
             <Route path="/ressources/business-game" element={<BusinessGame />} />
             {/* Redirections client des anciennes URLs Ressources */}
             <Route path="/ressources/partenaires" element={<Navigate to="/partenaires/outils/" replace />} />
             <Route path="/ressources/partenaires/awa-cloud" element={<Navigate to="/partenaires/outils/awa-cloud/" replace />} />
             <Route path="/ressources/nos-etudes" element={<Navigate to="/ressources/etudes/" replace />} />
             <Route path="/ressources/nos-etudes/interview-gemini-4" element={<Navigate to="/ressources/etudes/interview-gemini-4/" replace />} />
             <Route path="/ressources/nos-analyseurs" element={<Navigate to="/ressources/analyseurs/" replace />} />
             <Route path="/ressources/alkymya-x-inatec" element={<Navigate to="/partenaires/formations-certifiees/inatec/" replace />} />
             <Route path="/ressources/:categorySlug" element={<Navigate to="/ressources/" replace />} />
             {/* Architecture Partenaires */}
             <Route path="/partenaires" element={<Partenaires />} />
             <Route path="/partenaires/:categorySlug" element={<PartenairesSubHub />} />
             <Route path="/partenaires/:categorySlug/:partnerSlug" element={<PartenaireDetail />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/faq" element={<FAQ />} />
             <Route path="/rejoindre" element={<JoinUs />} />
             <Route path="/newbusiness" element={<NewBusiness />} />
             <Route path="/new-business" element={<Navigate to="/newbusiness/" replace />} />
             <Route path="/mentions-legales" element={<MentionsLegales />} />
             <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
             <Route path="/accessibilite" element={<Accessibilite />} />
             <Route path="/plan-du-site" element={<PlanDuSite />} />
           </Routes>
         </main>
         <Footer />
         <CookieBanner />
         <NewsletterModal />
       </div>
    </Router>
  );
}
