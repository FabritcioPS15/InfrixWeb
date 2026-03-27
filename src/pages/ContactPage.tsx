import { Mail, Phone, MapPin, Send, Clock, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import PageTransition from '../components/PageTransition';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, [serviceParam]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias! Hemos recibido tu solicitud. Un especialista se pondrá en contacto contigo pronto.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 pb-24">
        <PageBanner 
          title="Contacto & Cotizaciones" 
          breadcrumbs={[
            { label: 'Inicio', href: '/' },
            { label: 'Contacto', href: '/contacto' }
          ]}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Global Intro Style Standardized */}
          <div className="pt-24 mb-20">
            <h2 className="text-[#003B5C] text-xs font-bold tracking-[0.3em] uppercase mb-6 flex items-center">
              <span className="w-10 h-[2px] bg-[#0F8ACB] mr-4"></span>
              Contacto Corporativo
            </h2>
            <p className="text-gray-400 text-2xl md:text-3xl font-light max-w-4xl leading-snug">
              Inicia la materialización de tu proyecto con una <span className="text-[#003B5C] font-semibold italic">gestión integral</span> y asesoría técnica especializada.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Form Section */}
            <div className="lg:col-span-7 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
              <div className="p-8 md:p-12">
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-[#003B5C] mb-4">Solicita tu Cotización</h2>
                  <p className="text-gray-500 font-medium">Completa el formulario y nuestro equipo de ingeniería te contactará en menos de 24 horas.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-[#003B5C] uppercase tracking-wider ml-1">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ej. Juan Pérez"
                        className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 text-gray-700 focus:outline-none focus:border-[#0F8ACB] focus:bg-white transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-[#003B5C] uppercase tracking-wider ml-1">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+51 999 000 000"
                        className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 text-gray-700 focus:outline-none focus:border-[#0F8ACB] focus:bg-white transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-[#003B5C] uppercase tracking-wider ml-1">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="correo@empresa.com"
                      className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 text-gray-700 focus:outline-none focus:border-[#0F8ACB] focus:bg-white transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-bold text-[#003B5C] uppercase tracking-wider ml-1">
                      Servicio Requerido
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 text-gray-700 focus:outline-none focus:border-[#0F8ACB] focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="drywall-estructuras">Drywall & Estructuras</option>
                      <option value="melamina-muebles">Melamina y Muebles</option>
                      <option value="instalaciones-electricas">Instalaciones Eléctricas</option>
                      <option value="gasfiteria-saneamiento">Gasfitería y Saneamiento</option>
                      <option value="proyectos-civiles-electromecanicos">Proyectos Civiles y Electromecánicos</option>
                      <option value="acabados-arquitectura-interior">Acabados & Arquitectura Interior</option>
                      <option value="campamentos-mineros-industriales">Campamentos Mineros e Industriales</option>
                      <option value="pintura-revestimiento">Pintura & Revestimiento</option>
                      <option value="cotizacion-general">Consulta General / Otros</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-[#003B5C] uppercase tracking-wider ml-1">
                      Detalles del Proyecto
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Cuéntanos sobre las dimensiones, ubicación y requerimientos específicos..."
                      className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 text-gray-700 focus:outline-none focus:border-[#0F8ACB] focus:bg-white transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#003B5C] hover:bg-[#0F8ACB] text-white py-5 rounded-2xl font-black text-lg transition-all duration-500 shadow-xl flex items-center justify-center group uppercase tracking-widest mt-4"
                  >
                    Enviar Solicitud
                    <Send size={22} className="ml-3 transform group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500" />
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Info Section */}
            <div className="lg:col-span-5 space-y-8">
              {/* Contact Card */}
              <div className="bg-[#003B5C] rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl"></div>
                
                <h3 className="text-2xl font-black mb-8 relative z-10">Información Directa</h3>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="text-[#0F8ACB]" size={24} />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Llámanos</p>
                      <p className="text-lg font-bold">+51 933 499 243</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="text-[#0F8ACB]" size={24} />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Escríbenos</p>
                      <p className="text-lg font-bold">info@infrix.pe</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="text-[#0F8ACB]" size={24} />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Visítanos</p>
                      <p className="text-lg font-bold">Av. Principal 123, Miraflores<br/>Lima, Perú</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Clock className="text-[#0F8ACB]" size={24} />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Horario</p>
                      <p className="text-lg font-bold">Lun - Vie: 8am - 6pm<br/>Sáb: 8am - 2pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Card */}
              <div className="bg-white rounded-[40px] p-10 border border-gray-100 shadow-xl space-y-6">
                <div className="flex items-center gap-4 text-[#003B5C]">
                  <ShieldCheck size={32} className="text-[#0F8ACB]" />
                  <h4 className="text-xl font-black">Garantía INFRIX</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Todos nuestros proyectos cuentan con respaldo técnico y materiales certificados. Nuestra metodología asegura el cumplimiento estricto de los plazos y estándares de seguridad.
                </p>
                <div className="pt-4 flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-bold text-[#003B5C]">+500 Clientes Confían en Nosotros</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
