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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
