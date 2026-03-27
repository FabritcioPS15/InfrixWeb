import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-infrix-blue-bright text-sm font-semibold tracking-widest uppercase">
            Contacto
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-infrix-dark">
            Hablemos de tu
            <span className="block text-infrix-blue-bright mt-2">Próximo Proyecto</span>
          </h2>
          <p className="mt-6 text-infrix-gray text-lg max-w-3xl mx-auto leading-relaxed">
            Estamos listos para convertir tus ideas en realidad. Contáctanos y recibe una cotización personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-infrix-blue/20 rounded-lg flex items-center justify-center group-hover:bg-infrix-blue-bright/20 transition-colors duration-300">
                  <Phone className="text-infrix-blue-bright" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-infrix-dark mb-2">Teléfono</h3>
                <p className="text-infrix-gray">+51 999 888 777</p>
                <p className="text-infrix-gray">+51 (01) 234 5678</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-infrix-blue/20 rounded-lg flex items-center justify-center group-hover:bg-infrix-blue-bright/20 transition-colors duration-300">
                  <Mail className="text-infrix-blue-bright" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-infrix-dark mb-2">Email</h3>
                <p className="text-infrix-gray">contacto@infrix.pe</p>
                <p className="text-infrix-gray">proyectos@infrix.pe</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-infrix-blue/20 rounded-lg flex items-center justify-center group-hover:bg-infrix-blue-bright/20 transition-colors duration-300">
                  <MapPin className="text-infrix-blue-bright" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-infrix-dark mb-2">Ubicación</h3>
                <p className="text-infrix-gray">Av. Los Constructores 456</p>
                <p className="text-infrix-gray">San Isidro, Lima - Perú</p>
              </div>
            </div>

            <div className="bg-infrix-light border border-infrix-blue/30 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-bold text-infrix-dark mb-4">Horario de Atención</h3>
              <div className="space-y-2 text-infrix-gray">
                <p className="flex justify-between">
                  <span>Lunes a Viernes:</span>
                  <span className="text-infrix-dark">8:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="text-infrix-dark">9:00 AM - 1:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="text-infrix-dark">Cerrado</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-infrix-light border border-infrix-gray/30 rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-infrix-dark mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white border border-infrix-gray/30 rounded px-4 py-3 text-infrix-dark placeholder-infrix-gray focus:outline-none focus:border-infrix-blue-bright transition-colors duration-200"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-infrix-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white border border-infrix-gray/30 rounded px-4 py-3 text-infrix-dark placeholder-infrix-gray focus:outline-none focus:border-infrix-blue-bright transition-colors duration-200"
                  placeholder="juan@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-infrix-dark mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-white border border-infrix-gray/30 rounded px-4 py-3 text-infrix-dark placeholder-infrix-gray focus:outline-none focus:border-infrix-blue-bright transition-colors duration-200"
                  placeholder="+51 999 888 777"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-infrix-dark mb-2">
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  className="w-full bg-white border border-infrix-gray/30 rounded px-4 py-3 text-infrix-dark focus:outline-none focus:border-infrix-blue-bright transition-colors duration-200"
                >
                  <option>Seleccione un servicio</option>
                  <option>Drywall & Estructuras</option>
                  <option>Melamina y Muebles</option>
                  <option>Instalaciones Eléctricas</option>
                  <option>Gasfitería y Saneamiento</option>
                  <option>Proyectos Civiles y Electromecánicos</option>
                  <option>Acabados & Arquitectura</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-infrix-dark mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white border border-infrix-gray/30 rounded px-4 py-3 text-infrix-dark placeholder-infrix-gray focus:outline-none focus:border-infrix-blue-bright transition-colors duration-200 resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-infrix-blue-bright hover:bg-infrix-blue text-white px-8 py-4 rounded-sm text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-infrix-blue-bright/50 flex items-center justify-center"
              >
                Enviar Mensaje
                <Send size={20} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
