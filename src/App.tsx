import { useEffect } from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

import DrywallPage from './pages/services/DrywallPage';
import MelaminaPage from './pages/services/MelaminaPage';
import ElectricasPage from './pages/services/ElectricasPage';
import GasfiteriaPage from './pages/services/GasfiteriaPage';
import CivilesPage from './pages/services/CivilesPage';
import AcabadosPage from './pages/services/AcabadosPage';
import CampamentosPage from './pages/services/CampamentosPage';
import PinturaPage from './pages/services/PinturaPage';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/servicios/drywall-estructuras" element={<DrywallPage />} />
            <Route path="/servicios/melamina-muebles" element={<MelaminaPage />} />
            <Route path="/servicios/instalaciones-electricas" element={<ElectricasPage />} />
            <Route path="/servicios/gasfiteria-saneamiento" element={<GasfiteriaPage />} />
            <Route path="/servicios/proyectos-civiles-electromecanicos" element={<CivilesPage />} />
            <Route path="/servicios/acabados-arquitectura-interior" element={<AcabadosPage />} />
            <Route path="/servicios/campamentos-mineros-industriales" element={<CampamentosPage />} />
            <Route path="/servicios/pintura-revestimiento" element={<PinturaPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
