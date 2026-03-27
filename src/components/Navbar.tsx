import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    {
      name: 'Servicios',
      href: '/servicios',
      isDropdown: true,
      subLinks: [
        { name: 'Drywall & Estructuras', href: '/servicios/drywall-estructuras' },
        { name: 'Melamina y Muebles', href: '/servicios/melamina-muebles' },
        { name: 'Instalaciones Eléctricas', href: '/servicios/instalaciones-electricas' },
        { name: 'Gasfitería y Saneamiento', href: '/servicios/gasfiteria-saneamiento' },
        { name: 'Proyectos Civiles y Electromecánicos', href: '/servicios/proyectos-civiles-electromecanicos' },
        { name: 'Acabados & Arquitectura Interior', href: '/servicios/acabados-arquitectura-interior' },
        { name: 'Campamentos Mineros e Industriales', href: '/servicios/campamentos-mineros-industriales' },
        { name: 'Pintura & Revestimiento', href: '/servicios/pintura-revestimiento' },
      ]
    },
    { name: 'Proyectos', href: '/proyectos' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${isScrolled || location.pathname !== '/'
        ? 'bg-black/95 backdrop-blur-2xl shadow-2xl'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/assets/InfrixPng.png" alt="INFRIX Logo" className="h-20 w-auto object-contain" />
              <div className="flex flex-col">
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                >
                  {link.isDropdown ? (
                    <div
                      className={`flex items-center space-x-1 text-base font-medium tracking-wide transition-colors duration-200 py-2 relative cursor-pointer ${isActive(link.href) || location.pathname.startsWith('/servicios')
                        ? 'text-infrix-blue-bright after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-infrix-blue-bright after:content-[\'\']'
                        : 'text-white hover:text-infrix-blue-bright'
                        }`}
                    >
                      <Link to={link.href} onClick={(e) => e.stopPropagation()}>
                        {link.name}
                      </Link>
                      <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={`text-base font-medium tracking-wide transition-colors duration-200 py-2 relative block ${isActive(link.href)
                        ? 'text-infrix-blue-bright after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-infrix-blue-bright after:content-[\'\']'
                        : 'text-white hover:text-infrix-blue-bright'
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {link.isDropdown && link.subLinks && (
                    <div
                      className="hidden group-hover:block absolute left-0 top-full pt-1 w-64 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    >
                      <div className="rounded-xl shadow-2xl bg-[#010101]/95 backdrop-blur-2xl ring-1 ring-white/10 overflow-hidden border border-white/5" role="menu" aria-orientation="vertical">
                        <div className="py-2">
                          {link.subLinks.map((sublink) => (
                            <Link
                              key={sublink.name}
                              to={sublink.href}
                              className="block px-5 py-3 text-sm text-white/90 font-medium hover:bg-infrix-blue-bright hover:text-white transition-all duration-200"
                              role="menuitem"
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contacto"
                className="flex items-center space-x-2 bg-infrix-blue-bright hover:bg-infrix-blue text-white px-6 py-2.5 rounded-sm text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-infrix-blue-bright/50"
              >
                <span>Cotizar Proyecto</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-infrix-blue-bright transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#010101]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded transition-all duration-200 ${isActive(link.href)
                  ? 'text-infrix-blue-bright bg-white/10'
                  : 'text-white hover:text-infrix-blue-bright hover:bg-white/10'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 bg-infrix-blue-bright hover:bg-infrix-blue text-white px-4 py-3 rounded mt-4 font-medium transition-all duration-200"
            >
              <span>Cotizar Proyecto</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
