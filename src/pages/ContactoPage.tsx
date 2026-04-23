import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';

const servicesList = [
  'Drywall & Estructuras',
  'Melamina y Muebles',
  'Instalaciones Eléctricas',
  'Gasfitería y Saneamiento',
  'Proyectos Civiles',
  'Arquitectura Interior',
  'Campamentos',
  'Pintura'
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: <Phone size={20} />, label: 'Teléfono', value: '+51 987 654 321' },
    { icon: <Mail size={20} />, label: 'Email', value: 'contacto@infrix.pe' },
    { icon: <MapPin size={20} />, label: 'Oficina', value: 'Av. Industrial 123, Lima, Perú' },
    { icon: <Clock size={20} />, label: 'Horario', value: 'Lun - Sáb: 8:00 - 18:00' }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHero 
        title="HABLEMOS" 
        subtitle="Contacto" 
        watermark="CONTACTO"
      />

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          {/* Left: Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gray-50 p-12 border border-gray-100 text-center space-y-8 shadow-2xl relative overflow-hidden"
              >
                <div className="w-20 h-20 bg-infrix-orange/10 text-infrix-orange rounded-full flex items-center justify-center mx-auto mb-4 border border-infrix-orange/20 shadow-xl relative z-10">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="space-y-4 relative z-10">
                  <h3 className="text-4xl text-infrix-navy font-display font-extrabold tracking-widest leading-none">SOLICITUD RECIBIDA</h3>
                  <p className="text-gray-600 font-body font-normal text-lg">
                    Gracias por contactarnos. Un especialista técnico se comunicará con usted en menos de 24 horas.
                  </p>
                </div>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-infrix-orange uppercase text-[10px] font-bold tracking-[4px] border-b-2 border-infrix-orange/30 hover:border-infrix-orange transition-all pb-1 relative z-10"
                >
                  Enviar otro mensaje
                </button>
                <div className="absolute top-0 right-0 w-full h-full diagonal-pattern opacity-5"></div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 border border-gray-100 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[3px] text-gray-500 font-bold font-display">Nombre Completo</label>
                    <input 
                      required
                      type="text" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ingrese su nombre"
                      className="w-full bg-gray-50 border border-gray-200 p-5 text-infrix-navy text-sm focus:border-infrix-orange outline-none transition-colors rounded-none placeholder:text-gray-400 font-body"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[3px] text-gray-500 font-bold font-display">Empresa</label>
                    <input 
                      type="text" 
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de su organización"
                      className="w-full bg-gray-50 border border-gray-200 p-5 text-infrix-navy text-sm focus:border-infrix-orange outline-none transition-colors rounded-none placeholder:text-gray-400 font-body"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[3px] text-gray-500 font-bold font-display">Número Telefónico</label>
                    <input 
                      required
                      type="tel" 
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+51"
                      className="w-full bg-gray-50 border border-gray-200 p-5 text-infrix-navy text-sm focus:border-infrix-orange outline-none transition-colors rounded-none placeholder:text-gray-400 font-body"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[3px] text-gray-500 font-bold font-display">Especialidad de Interés</label>
                    <select 
                      name="servicio"
                      required
                      value={formData.servicio}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 p-5 text-infrix-navy text-sm focus:border-infrix-orange outline-none transition-colors rounded-none appearance-none font-body"
                    >
                      <option value="" disabled>Seleccione una opción</option>
                      {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[3px] text-gray-500 font-bold font-display">Descripción del Proyecto</label>
                  <textarea 
                    rows={6}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntenos sobre los requerimientos técnicos de su obra..."
                    className="w-full bg-gray-50 border border-gray-200 p-5 text-infrix-navy text-sm focus:border-infrix-orange outline-none transition-colors rounded-none resize-none placeholder:text-gray-400 font-body"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full py-6 text-sm tracking-[5px]">
                  PROCESAR SOLICITUD
                </button>
              </form>
            )}
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start space-x-6 bg-white p-8 border border-gray-100 hover:border-infrix-orange/30 transition-all group shadow-lg">
                  <div className="text-infrix-orange group-hover:scale-110 transition-transform">{info.icon}</div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-[3px] text-gray-400 font-bold mb-2 font-display">{info.label}</span>
                    <span className="text-infrix-navy text-base font-body font-bold">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="h-80 bg-infrix-navy relative overflow-hidden shadow-2xl flex items-center justify-center text-center p-8">
              <div className="relative z-10 text-white space-y-4">
                 <MapPin className="mx-auto text-infrix-orange" size={40} />
                 <div className="space-y-1">
                    <span className="block font-display text-xl font-bold tracking-widest uppercase">VER UBICACIÓN</span>
                    <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-[4px]">Sede Central Lima</span>
                 </div>
              </div>
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 diagonal-pattern opacity-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-t border-gray-100 text-center">
         <p className="text-gray-400 text-[10px] uppercase tracking-[0.6em] font-display font-bold">PRECISIÓN EN CADA DETALLE • INFRIX CONSTRUCCIÓN</p>
      </section>
    </div>
  );
}
