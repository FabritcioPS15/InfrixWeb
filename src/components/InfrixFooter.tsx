import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function InfrixFooter() {
  return (
    <footer className="bg-infrix-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src="/assets/Infrixlogo.png" 
                alt="INFRIX Logo" 
                className="h-20 md:h-28 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-gray-400 font-body text-sm leading-relaxed">
              Líderes en el sector construcción con innovación, calidad y un compromiso inquebrantable con la excelencia. Construyendo el futuro, proyecto a proyecto.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-infrix-orange transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-infrix-orange transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-infrix-orange transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-infrix-orange transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-10">
            <h4 className="text-lg font-display font-bold mb-8 uppercase tracking-widest text-white">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-infrix-orange transition-colors text-sm font-medium">Inicio</Link></li>
              <li><Link to="/nosotros" className="text-gray-400 hover:text-infrix-orange transition-colors text-sm font-medium">Nosotros</Link></li>
              <li><Link to="/servicios" className="text-gray-400 hover:text-infrix-orange transition-colors text-sm font-medium">Servicios</Link></li>
              <li><Link to="/proyectos" className="text-gray-400 hover:text-infrix-orange transition-colors text-sm font-medium">Proyectos</Link></li>
              <li><Link to="/contacto" className="text-gray-400 hover:text-infrix-orange transition-colors text-sm font-medium">Contacto</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-bold mb-8 uppercase tracking-widest text-white">Servicios</h4>
            <ul className="space-y-4">
              <li><Link to="/servicios" className="text-gray-400 hover:text-infrix-orange transition-colors text-sm font-medium">Construcción General</Link></li>
              <li><Link to="/servicios" className="text-gray-400 hover:text-infrix-orange transition-colors text-sm font-medium">Ingeniería Industrial</Link></li>
              <li><Link to="/servicios" className="text-gray-400 hover:text-infrix-orange transition-colors text-sm font-medium">Tecnología Inteligente</Link></li>
              <li><Link to="/servicios" className="text-gray-400 hover:text-infrix-orange transition-colors text-sm font-medium">Diseño de Interiores</Link></li>
              <li><Link to="/servicios" className="text-gray-400 hover:text-infrix-orange transition-colors text-sm font-medium">Arquitectura</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold mb-8 uppercase tracking-widest text-white">Contacto</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-infrix-orange shrink-0 mt-1" size={20} />
                <span className="text-gray-400 text-sm leading-relaxed">Av. Industrial 123, Distrito de Ingeniería, Lima, Perú</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-infrix-orange shrink-0" size={20} />
                <span className="text-gray-400 text-sm">+51 987 654 321</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-infrix-orange shrink-0" size={20} />
                <span className="text-gray-400 text-sm">contacto@infrix.pe</span>
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
