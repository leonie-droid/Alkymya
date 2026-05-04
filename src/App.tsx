import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Oeuvres from './pages/Oeuvres';
import Ateliers from './pages/Ateliers';
import Ressources from './pages/Ressources';
import GenerateurIA from './pages/GenerateurIA';
import Alchimistes from './pages/Alchimistes';
import Partenaires from './pages/Partenaires';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import JoinUs from './pages/JoinUs';
import { SEO } from './components/SEO';

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
      <div className="min-h-screen flex flex-col selection:bg-accent selection:text-white">
        <SEO type="LocalBusiness" />
        <SEO type="EducationalOrganization" />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ia" element={<GenerateurIA />} />
            <Route path="/oeuvres" element={<Oeuvres />} />
            <Route path="/alchimistes" element={<Alchimistes />} />
            <Route path="/ateliers" element={<Ateliers />} />
            <Route path="/ressources" element={<Ressources />} />
            <Route path="/partenaires" element={<Partenaires />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/rejoindre" element={<JoinUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
