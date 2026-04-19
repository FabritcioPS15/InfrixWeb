import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

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

export default function Contacto() {
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
    { icon: <Phone size={20} />, label: 'Teléfono', value: '+51 (01) 499-243' },
    { icon: <Mail size={20} />, label: 'Email', value: 'contacto@infrix.pe' },
    { icon: <MapPin size={20} />, label: 'Oficina', value: 'Av. Juan de Arona 151, San Isidro' },
    { icon: <Clock size={20} />, label: 'Horario', value: 'Lun - Vie: 8:00 - 18:00' }
  ];

  return (
    <div className="bg-navy-deep min-h-screen">
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
                className="bg-navy p-12 border border-accent/20 text-center space-y-8 diagonal-pattern industrial-border"
              >
                <div className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-4 border border-accent/30 shadow-xl">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl text-white font-display tracking-widest leading-none">SOLICITUD RECIBIDA</h3>
                  <p className="text-steel-light font-body font-light text-lg">
                    Gracias por contactarnos. Un especialista técnico se comunicará con usted en menos de 24 horas.
                  </p>
                </div>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-accent uppercase text-[10px] font-bold tracking-[4px] border-b border-accent/30 hover:border-accent transition-all pb-1"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[3px] text-steel font-bold font-body">Nombre Completo</label>
                    <input 
                      required
                      type="text" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ingrese su nombre"
                      className="w-full bg-navy border border-steel/20 p-5 text-white text-sm focus:border-accent outline-none transition-colors rounded-none placeholder:text-steel/40"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[3px] text-steel font-bold font-body">Empresa</label>
                    <input 
                      type="text" 
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de su organización"
                      className="w-full bg-navy border border-steel/20 p-5 text-white text-sm focus:border-accent outline-none transition-colors rounded-none placeholder:text-steel/40"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[3px] text-steel font-bold font-body">Número Telefónico</label>
                    <input 
                      required
                      type="tel" 
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+51"
                      className="w-full bg-navy border border-steel/20 p-5 text-white text-sm focus:border-accent outline-none transition-colors rounded-none placeholder:text-steel/40"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[3px] text-steel font-bold font-body">Especialidad de Interés</label>
                    <select 
                      name="servicio"
                      required
                      value={formData.servicio}
                      onChange={handleChange}
                      className="w-full bg-navy border border-steel/20 p-5 text-white text-sm focus:border-accent outline-none transition-colors rounded-none appearance-none"
                    >
                      <option value="" disabled>Seleccione una opción</option>
                      {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[3px] text-steel font-bold font-body">Descripción del Proyecto</label>
                  <textarea 
                    rows={6}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntenos sobre los requerimientos técnicos de su obra..."
                    className="w-full bg-navy border border-steel/20 p-5 text-white text-sm focus:border-accent outline-none transition-colors rounded-none resize-none placeholder:text-steel/40"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full py-6 text-sm tracking-[5px]">
                  PROCESAR SOLICITUD
                </button>
              </form>
            )}
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start space-x-6 bg-navy p-8 border border-accent/5 hover:border-accent/20 transition-all group">
                  <div className="text-accent group-hover:scale-110 transition-transform">{info.icon}</div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-[3px] text-steel font-bold mb-2 font-body">{info.label}</span>
                    <span className="text-white text-base font-body font-light">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="h-80 bg-navy-light industrial-border diagonal-pattern flex items-center justify-center grayscale text-center p-8 relative overflow-hidden">
              <div className="relative z-10 text-accent opacity-60 space-y-4">
                 <MapPin className="mx-auto" size={40} />
                 <div className="space-y-1">
                    <span className="block font-display text-xl tracking-widest uppercase">VER UBICACIÓN</span>
                    <span className="block text-[9px] text-steel font-bold uppercase tracking-[4px]">Sede Central San Isidro</span>
                 </div>
              </div>
              <div className="absolute inset-0 bg-accent/5" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-navy border-t border-accent/10 text-center">
         <p className="text-steel text-[10px] uppercase tracking-[0.6em] font-body opacity-60">PRECISIÓN EN CADA DETALLE • INFRIX CONSTRUCKT</p>
      </section>
    </div>
  );
}
