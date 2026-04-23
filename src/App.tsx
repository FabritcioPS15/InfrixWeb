import { useEffect } from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InfrixNavbar from './components/InfrixNavbar';
import InfrixFooter from './components/InfrixFooter';
import Home from './pages/Home';
import ServiciosPage from './pages/ServiciosPage';
import ProyectosPage from './pages/ProyectosPage';
import NosotrosPage from './pages/NosotrosPage';
import ContactoPage from './pages/ContactoPage';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    (window as any).lenis = lenis;

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
      <div className="min-h-screen bg-white flex flex-col selection:bg-infrix-orange selection:text-white font-body">
        <InfrixNavbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/proyectos" element={<ProyectosPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/servicios/:serviceId" element={<ServiceDetail />} />
          </Routes>
        </main>
        <InfrixFooter />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
