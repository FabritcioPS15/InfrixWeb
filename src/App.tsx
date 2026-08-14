import { useEffect } from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import InfrixNavbar from './components/InfrixNavbar';
import InfrixFooter from './components/InfrixFooter';
import Home from './pages/Home';
import ServiciosPage from './pages/ServiciosPage';
import ContactoPage from './pages/ContactoPage';
import TrabajaConNosotrosPage from './pages/TrabajaConNosotrosPage';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import ServiceDetail from './pages/ServiceDetail';
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminLayout from './components/admin/AdminLayout';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminPostulacionesPage from './pages/admin/AdminPostulacionesPage';

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-infrix-orange selection:text-white font-body">
      <InfrixNavbar />
      <main className="flex-grow">{children}</main>
      <InfrixFooter />
      <FloatingWhatsApp />
    </div>
  );
}

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
      <Routes>
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/postulaciones" replace />} />
            <Route path="postulaciones" element={<AdminPostulacionesPage />} />
          </Route>
        </Route>

        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/servicios" element={<PublicLayout><ServiciosPage /></PublicLayout>} />
        <Route path="/contacto" element={<PublicLayout><ContactoPage /></PublicLayout>} />
        <Route path="/trabaja-con-nosotros" element={<PublicLayout><TrabajaConNosotrosPage /></PublicLayout>} />
        <Route path="/servicios/:serviceId" element={<PublicLayout><ServiceDetail /></PublicLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
