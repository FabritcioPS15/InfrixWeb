import { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '../data/services';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close dropdown when location changes or clicking outside
  useEffect(() => {
    setIsServicesOpen(false);
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Nosotros', path: '/nosotros' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-deep/90 backdrop-blur-md border-b border-accent/10">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/assets/InfrixPng.png" 
            alt="INFRIX Logo" 
            className="h-14 md:h-16 w-auto object-contain brightness-0 invert transition-all duration-300 hover:scale-105" 
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex items-center space-x-10">
            {/* Inicio Link */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xs uppercase tracking-[3px] transition-colors duration-300 ${
                  isActive ? 'text-accent' : 'text-steel-light hover:text-white'
                }`
              }
            >
              Inicio
            </NavLink>

            {/* Services Dropdown Trigger */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              ref={dropdownRef}
            >
              <button 
                className={`flex items-center space-x-2 text-xs uppercase tracking-[3px] transition-colors duration-300 ${
                  location.pathname.startsWith('/servicios') ? 'text-accent' : 'text-steel-light hover:text-white'
                }`}
              >
                <span>Servicios</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full -left-4 w-72 pt-4 transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="bg-navy-light border border-accent/20 p-4 shadow-2xl backdrop-blur-xl">
                  <div className="grid gap-2">
                    <Link 
                      to="/servicios" 
                      className="text-[10px] uppercase tracking-[2px] font-bold text-accent mb-2 pb-2 border-b border-accent/10 hover:translate-x-1 transition-transform"
                    >
                      Ver todos
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/servicios/${service.slug}`}
                        className="text-[10px] uppercase tracking-[2px] text-steel-light hover:text-white hover:bg-accent/10 p-2 transition-all block"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Other Static Links */}
            <NavLink
              to="/proyectos"
              className={({ isActive }) =>
                `text-xs uppercase tracking-[3px] transition-colors duration-300 ${
                  isActive ? 'text-accent' : 'text-steel-light hover:text-white'
                }`
              }
            >
              Proyectos
            </NavLink>
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                `text-xs uppercase tracking-[3px] transition-colors duration-300 ${
                  isActive ? 'text-accent' : 'text-steel-light hover:text-white'
                }`
              }
            >
              Nosotros
            </NavLink>
          </div>

          <Link to="/contacto" className="btn-primary py-3 px-8 text-[11px] tracking-[4px]">
            Cotizar
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white p-2" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-navy-deep border-b border-accent/10 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="px-6 py-8 flex flex-col space-y-6 max-h-[80vh] overflow-y-auto">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest text-steel-light">
            Inicio
          </NavLink>
          
          {/* Mobile Services Accordion */}
          <div className="space-y-4">
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between w-full text-sm uppercase tracking-widest text-steel-light"
            >
              <span>Servicios</span>
              <ChevronDown size={18} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isServicesOpen && (
              <div className="pl-4 flex flex-col space-y-4 border-l border-accent/20">
                <Link to="/servicios" onClick={() => setIsOpen(false)} className="text-xs uppercase tracking-widest text-accent font-bold">
                  Ver todos
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/servicios/${service.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="text-xs uppercase tracking-widest text-steel-light"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/proyectos" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest text-steel-light">
            Proyectos
          </NavLink>
          <NavLink to="/nosotros" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest text-steel-light">
            Nosotros
          </NavLink>
          
          <Link
            to="/contacto"
            onClick={() => setIsOpen(false)}
            className="btn-primary text-center py-4"
          >
            Cotizar proyecto
          </Link>
        </div>
      </div>
    </nav>
  );
}
