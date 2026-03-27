import { Facebook, Linkedin, Navigation, Mail, Phone, Clock, MessageCircle, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-infrix-black border-t border-infrix-blue-bright/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-0">
            <Link to="/" className="flex flex-col items-start space-y-3 mb-4">
              <img src="/assets/InfrixPng.png" alt="INFRIX Logo" className="h-32 w-auto object-contain" />
            </Link>

            <ul className="space-y-4 pt-4">
              <li className="flex items-start space-x-3 text-white text-sm">
                <Phone size={16} className="text-infrix-blue-bright mt-0.5 flex-shrink-0" />
                <span>+51 933 499 243</span>
              </li>
              <li className="flex items-start space-x-3 text-white text-sm">
                <Mail size={16} className="text-infrix-blue-bright mt-0.5 flex-shrink-0" />
                <span>info@infrix.pe</span>
              </li>
              <li className="flex items-start space-x-3 text-white text-sm">
                <Navigation size={16} className="text-infrix-blue-bright mt-0.5 flex-shrink-0" />
                <span className="leading-snug">Av. Principal 123, oficina 405,<br />Miraflores, Lima.</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Servicios destacados */}
          <div>
            <h3 className="text-infrix-blue-bright font-bold mb-6 text-lg">Servicios destacados</h3>
            <ul className="space-y-3">
              {[
                { name: 'Drywall & Estructuras', href: '/servicios/drywall-estructuras' },
                { name: 'Melamina y Muebles', href: '/servicios/melamina-muebles' },
                { name: 'Instalaciones Eléctricas', href: '/servicios/instalaciones-electricas' },
                { name: 'Gasfitería y Saneamiento', href: '/servicios/gasfiteria-saneamiento' },
                { name: 'Proyectos Civiles y Electromecánicos', href: '/servicios/proyectos-civiles-electromecanicos' },
                { name: 'Acabados & Arquitectura Interior', href: '/servicios/acabados-arquitectura-interior' },
                { name: 'Campamentos Mineros e Industriales', href: '/servicios/campamentos-mineros-industriales' },
                { name: 'Pintura & Revestimiento', href: '/servicios/pintura-revestimiento' }
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="group flex items-start text-white hover:text-infrix-blue-bright transition-colors duration-200 text-sm"
                  >
                    <span className="mr-2 text-white group-hover:text-infrix-blue-bright font-bold">&gt;</span>
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Servicios adicionales */}
          <div>
            <h3 className="text-infrix-blue-bright font-bold mb-6 text-lg">Servicios adicionales</h3>
            <ul className="space-y-3">
              {[
                { name: 'Remodelaciones en Lima', href: '/servicios/drywall-estructuras' },
                { name: 'Remodelación de baños', href: '/servicios/gasfiteria-saneamiento' },
                { name: 'Mobiliario de cocinas', href: '/servicios/melamina-muebles' },
                { name: 'Remodelación de interiores', href: '/servicios/acabados-arquitectura-interior' },
                { name: 'Remodelación de negocios', href: '/servicios/proyectos-civiles-electromecanicos' },
                { name: 'Mantenimiento preventivo', href: '/contacto' }
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="group flex items-start text-white hover:text-infrix-blue-bright transition-colors duration-200 text-sm"
                  >
                    <span className="mr-2 text-white group-hover:text-infrix-blue-bright font-bold">&gt;</span>
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Horario, Socials & CTA */}
          <div>
            <h3 className="text-infrix-blue-bright font-bold mb-6 text-lg">Horario de Atención</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-2 text-white text-sm">
                <Clock size={16} className="text-infrix-blue-bright mt-0.5 flex-shrink-0" />
                <span>Lunes - Viernes: 8:00 am - 6:00 pm</span>
              </li>
              <li className="flex items-start space-x-2 text-white text-sm">
                <Clock size={16} className="text-infrix-blue-bright mt-0.5 flex-shrink-0" />
                <span>Sábados: 8:00 am - 2:00 pm</span>
              </li>
            </ul>

            <h3 className="text-infrix-blue-bright font-bold mb-4 text-lg">Síguenos en:</h3>
            <div className="flex space-x-3 mb-8">
              <a href="#" className="w-8 h-8 bg-infrix-blue-bright hover:bg-white hover:text-infrix-blue text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-sm">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-infrix-blue-bright hover:bg-white hover:text-infrix-blue text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-sm">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-infrix-blue-bright hover:bg-white hover:text-infrix-blue text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-sm">
                <Instagram size={16} />
              </a>
              <a href="https://wa.me/51933499243" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-infrix-blue-bright hover:bg-white hover:text-infrix-blue text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-sm">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
            </div>

            <Link
              to="/contacto"
              className="inline-flex w-full sm:w-auto items-center justify-center space-x-2 bg-[#ff5722] hover:bg-[#e64a19] text-white px-6 py-3 rounded text-sm font-bold transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle size={18} />
              <span>Cotiza tu servicio aquí</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-infrix-black border-t border-[#111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-infrix-light text-center md:text-left">
            © Copyright {currentYear} - INFRIX PERÚ
          </p>
          <p className="text-infrix-light mt-3 md:mt-0 text-center md:text-right">
            Desarrollado por: <span className="font-bold text-white">Sparktree Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
