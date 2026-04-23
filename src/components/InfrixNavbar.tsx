import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';

export default function InfrixNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-white py-2 px-6 border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] font-body text-gray-600">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-infrix-orange" />
              <span>+51 987 654 321</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-infrix-orange" />
              <span>contacto@infrix.pe</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={14} className="text-infrix-orange" />
            <span>Lun - Sáb: 8:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-md py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/assets/Infrixlogo.png" 
              alt="INFRIX Logo" 
              className="h-12 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-[2px] font-display font-bold transition-colors duration-300 ${
                      isActive ? 'text-infrix-orange' : 'text-infrix-navy hover:text-infrix-orange'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <Link 
              to="/contacto" 
              className="bg-infrix-orange text-white px-8 py-3 text-[11px] tracking-[2px] font-display font-bold uppercase hover:bg-infrix-navy transition-all duration-300 shadow-lg shadow-infrix-orange/20"
            >
              Cotizar Proyecto
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-infrix-navy p-2" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 transition-all duration-300 ease-in-out shadow-xl ${
            isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <div className="px-6 py-8 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name}
                to={link.path} 
                onClick={() => setIsOpen(false)} 
                className="text-sm uppercase tracking-widest font-display font-bold text-infrix-navy"
              >
                {link.name}
              </NavLink>
            ))}
            
            <Link
              to="/contacto"
              onClick={() => setIsOpen(false)}
              className="bg-infrix-orange text-white text-center py-4 font-display font-bold uppercase tracking-widest"
            >
              Cotizar Proyecto
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
