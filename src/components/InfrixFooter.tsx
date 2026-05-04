import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function InfrixFooter() {
  return (
    <footer className="bg-infrix-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 items-start">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src="/assets/Infrixlogo.png" 
                alt="INFRIX Logo" 
                className="h-16 md:h-20 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-gray-400 font-body text-sm leading-relaxed">
              Líderes en el sector construcción con innovación, calidad y excelencia. Construyendo el futuro proyecto a proyecto.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-infrix-orange transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-infrix-orange transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-10 uppercase tracking-widest text-white relative inline-block h-8 items-center">
              Enlaces
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-infrix-orange"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Inicio', path: '/' },
                { name: 'Servicios', path: '/servicios' },
                { name: 'Contacto', path: '/contacto' }
              ].map((link) => (
                <li key={link.path} className="overflow-hidden">
                  <Link 
                    to={link.path} 
                    className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide"
                  >
                    <span className="mr-0 w-0 opacity-0 group-hover:mr-3 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-infrix-orange font-bold">
                      →
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Centered Title over 2 columns */}
          <div className="lg:col-span-2">
            <div className="text-center md:text-left lg:text-center w-full mb-10">
              <h4 className="text-lg font-display font-bold uppercase tracking-widest text-white relative inline-block h-8 items-center">
                Servicios
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-infrix-orange"></span>
              </h4>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
              {[
                { name: 'Drywall & Estructuras', slug: 'drywall-estructuras' },
                { name: 'Melamina y Muebles', slug: 'melamina-muebles' },
                { name: 'Instalaciones Eléctricas', slug: 'instalaciones-electricas' },
                { name: 'Gasfitería y Saneamiento', slug: 'gasfiteria-saneamiento' },
                { name: 'Proyectos Civiles y Electromecánicos', slug: 'proyectos-civiles-electromecanicos' },
                { name: 'Acabados & Arquitectura Interior', slug: 'acabados-arquitectura-interior' },
                { name: 'Campamentos Mineros e Industriales', slug: 'campamentos-mineros-industriales' },
                { name: 'Pintura & Revestimiento', slug: 'pintura-revestimiento' }
              ].map((service) => (
                <li key={service.slug} className="overflow-hidden">
                  <Link 
                    to={`/servicios/${service.slug}`} 
                    className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide"
                  >
                    <span className="mr-0 w-0 opacity-0 group-hover:mr-3 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-infrix-orange font-bold">
                      →
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold mb-10 uppercase tracking-widest text-white relative inline-block h-8 items-center">
              Contacto
              <span className="absolute -bottom-2 right-0 w-8 h-0.5 bg-infrix-orange"></span>
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-infrix-orange shrink-0 mt-1" size={20} />
                <span className="text-gray-400 text-sm leading-relaxed">Lima, Perú</span>
              </li>
              <li className="overflow-hidden">
                <a href="tel:+51981270849" className="group flex items-center space-x-4 text-gray-400 hover:text-white transition-all duration-300">
                  <Phone className="text-infrix-orange shrink-0" size={20} />
                  <div className="flex items-center">
                    <span className="mr-0 w-0 opacity-0 group-hover:mr-2 group-hover:w-3 group-hover:opacity-100 transition-all duration-300 text-infrix-orange font-bold text-xs">→</span>
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">+51 981 270 849</span>
                  </div>
                </a>
              </li>
              <li className="overflow-hidden">
                <a href="mailto:cotizaciones@kythubx.com" className="group flex items-center space-x-4 text-gray-400 hover:text-white transition-all duration-300">
                  <Mail className="text-infrix-orange shrink-0" size={20} />
                  <div className="flex items-center">
                    <span className="mr-0 w-0 opacity-0 group-hover:mr-2 group-hover:w-3 group-hover:opacity-100 transition-all duration-300 text-infrix-orange font-bold text-xs">→</span>
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">cotizaciones@kythubx.com</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs font-body">
            &copy; {new Date().getFullYear()} INFRIX Construcción. Todos los derechos reservados.
          </p>
          <div className="flex space-x-8 text-xs text-gray-500 font-body uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
