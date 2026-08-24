import { Link as RouterLink } from 'react-router-dom';
import {
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Link as LinkIcon,
  Briefcase,
  MessageSquare
} from 'lucide-react';

export default function InfrixFooter() {
  return (
    <footer className="bg-infrix-navy text-white pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16 items-start">
          {/* Brand Column */}
          <div className="flex flex-col">
            <div className="relative h-16 lg:h-12 mb-0">
              <RouterLink to="/" className="absolute bottom-0 left-0 inline-block translate-y-2 lg:translate-y-10">
                <img
                  src="/assets/Infrixlogof.webp"
                  alt="INFRIX Logo"
                  className="h-16 md:h-24 lg:h-36 w-auto object-contain brightness-0 invert origin-bottom"
                />
              </RouterLink>
            </div>
            <div>
              <p className="text-gray-400 font-display text-[10px] font-bold uppercase tracking-widest leading-relaxed max-w-xs mt-4">
                Líderes en el sector construcción con innovación, calidad y excelencia. Construyendo el futuro proyecto a proyecto con integridad.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-4 uppercase tracking-widest text-white relative inline-block h-8 flex items-center">
              <LinkIcon className="text-infrix-orange mr-3" size={20} />
              Enlaces
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-infrix-orange"></span>
            </h4>
            <ul className="space-y-4 font-display">
              {[
                { name: 'Inicio', path: '/' },
                { name: 'Servicios', path: '/servicios' },
                { name: 'Contacto', path: '/contacto' },
                { name: 'Trabaja con Nosotros', path: '/trabaja-con-nosotros' },
                { name: 'Panel Admin', path: '/admin' }
              ].map((link) => (
                <li key={link.path} className="overflow-hidden">
                  <RouterLink
                    to={link.path}
                    className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 text-[10px] font-bold tracking-widest uppercase"
                  >
                    <span className="mr-0 w-0 opacity-0 group-hover:mr-3 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-infrix-orange">
                      →
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <div className="text-left w-full mb-4">
              <h4 className="text-lg font-display font-bold uppercase tracking-widest text-white relative inline-block h-8 flex items-center">
                <Briefcase className="text-infrix-orange mr-3" size={20} />
                Servicios
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-infrix-orange"></span>
              </h4>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 font-display">
              {[
                { name: 'Drywall & Estructuras', slug: 'drywall-estructuras' },
                { name: 'Instalaciones Eléctricas', slug: 'instalaciones-electricas' },
                { name: 'Gasfitería y Saneamiento', slug: 'gasfiteria-saneamiento' },
                { name: 'Proyectos Civiles y Electromecánicos', slug: 'proyectos-civiles-electromecanicos' },
                { name: 'Acabados & Arquitectura Interior', slug: 'acabados-arquitectura-interior' },
                { name: 'Campamentos Mineros e Industriales', slug: 'campamentos-mineros-industriales' },
                { name: 'Pintura & Revestimiento', slug: 'pintura-revestimiento' }
              ].map((service) => (
                <li key={service.slug} className="overflow-hidden">
                  <RouterLink
                    to={`/servicios/${service.slug}`}
                    className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 text-[10px] font-bold tracking-widest uppercase"
                  >
                    <span className="mr-0 w-0 opacity-0 group-hover:mr-3 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-infrix-orange">
                      →
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold mb-4 uppercase tracking-widest text-white relative inline-block h-8 flex items-center">
              <MessageSquare className="text-infrix-orange mr-3" size={20} />
              Contacto
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-infrix-orange"></span>
            </h4>
            <ul className="space-y-3 font-display">
              <li className="flex items-start space-x-2">
                <MapPin className="text-infrix-orange shrink-0 mt-1" size={18} />
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Lima, Perú</span>
              </li>
              <li className="overflow-hidden">
                <a href="tel:+51981270849" className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300">
                  <Phone className="text-infrix-orange shrink-0" size={18} />
                  <div className="flex items-center">
                    <span className="mr-0 w-0 opacity-0 group-hover:mr-2 group-hover:w-3 group-hover:opacity-100 transition-all duration-300 text-infrix-orange font-bold text-xs">→</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform duration-300">+51 981 270 849</span>
                  </div>
                </a>
              </li>
              <li className="overflow-hidden">
                <a href="mailto:cotizaciones@kythubx.com" className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300">
                  <Mail className="text-infrix-orange shrink-0" size={18} />
                  <div className="flex items-center">
                    <span className="mr-0 w-0 opacity-0 group-hover:mr-2 group-hover:w-3 group-hover:opacity-100 transition-all duration-300 text-infrix-orange font-bold text-xs">→</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform duration-300">cotizaciones@kythubx.com</span>
                  </div>
                </a>
              </li>
            </ul>

            {/* Social Media moved here */}
            <div className="flex items-center space-x-4 mt-10">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-infrix-orange transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-infrix-orange transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs font-body">
            &copy; {new Date().getFullYear()} INFRIX Construcción. Todos los derechos reservados.
          </p>
          <div className="flex space-x-8 text-xs text-gray-500 font-display uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
