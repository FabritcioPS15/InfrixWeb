import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import { services } from '../data/services';

/* Icons mapping for the grid view */
const serviceIcons: Record<string, JSX.Element> = {
  'drywall-estructuras': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12H44M4 24H44M4 36H44" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 4V44M24 4V44M36 4V44" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </svg>
  ),
  'melamina-muebles': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 8H40V40H8V8Z" stroke="#4a8fd4" strokeWidth="2" />
      <path d="M8 24H40M24 24V40" stroke="#4a8fd4" strokeWidth="2" />
      <circle cx="16" cy="32" r="1.5" fill="#4a8fd4" />
      <circle cx="32" cy="32" r="1.5" fill="#4a8fd4" />
    </svg>
  ),
  'instalaciones-electricas': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4V12M24 36V44M12 24H4M44 24H36" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 10L32 16M16 32L10 38M38 38L32 32M16 16L10 10" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="24" r="6" stroke="#4a8fd4" strokeWidth="2" />
    </svg>
  ),
  'gasfiteria-saneamiento': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12V36M12 24H36V12" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 40C30 40 34 34 34 30C34 26 32 24 30 24C28 24 26 26 26 30C26 34 30 40 30 40Z" stroke="#4a8fd4" strokeWidth="2" />
    </svg>
  ),
  'proyectos-civiles-electromecanicos': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 44H44L24 12L4 44Z" stroke="#4a8fd4" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 28H34" stroke="#4a8fd4" strokeWidth="2" />
      <path d="M24 12V44" stroke="#4a8fd4" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
  ),
  'acabados-arquitectura-interior': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12L24 4L44 12L24 20L4 12Z" stroke="#4a8fd4" strokeWidth="2" strokeLinejoin="round" />
      <path d="M4 24L24 16L44 24L24 32L4 24Z" stroke="#4a8fd4" strokeWidth="2" strokeLinejoin="round" opacity="0.6" />
      <path d="M4 36L24 28L44 36L24 44L4 36Z" stroke="#4a8fd4" strokeWidth="2" strokeLinejoin="round" opacity="0.3" />
    </svg>
  ),
  'campamentos-mineros-industriales': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 36L24 12L42 36H6Z" stroke="#4a8fd4" strokeWidth="2" strokeLinejoin="round" />
      <path d="M18 36V28H30V36" stroke="#4a8fd4" strokeWidth="2" />
    </svg>
  ),
  'pintura-revestimiento': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8H36V20C36 26.6274 30.6274 32 24 32C17.3726 32 12 26.6274 12 20V8Z" stroke="#4a8fd4" strokeWidth="2" />
      <path d="M24 32V44" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 44H30" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 14H36" stroke="#4a8fd4" strokeWidth="2" opacity="0.5" />
    </svg>
  ),
};

export default function ServiciosPage() {
  return (
    <div className="bg-navy-deep">
      <PageHero 
        title="NUESTROS SERVICIOS" 
        subtitle="Especialidades" 
        watermark="SERVICIOS"
      />

      {/* Grid of 8 services */}
      <section className="bg-accent/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-px">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-navy p-12 md:p-16 lg:p-20 relative group overflow-hidden transition-all duration-500 hover:bg-navy-light"
            >
              <span className="absolute top-8 right-8 font-display text-8xl text-white opacity-[0.03] select-none group-hover:opacity-[0.05] transition-opacity">
                {service.id}
              </span>

              <div className="relative z-10 flex flex-col space-y-8 h-full">
                <div className="text-accent flex items-center justify-between">
                  {serviceIcons[service.slug] || (
                    <div className="w-12 h-12 bg-accent/20 rounded-none" />
                  )}
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl text-white font-display tracking-widest leading-tight">
                      {service.name}
                    </h3>
                    <p className="text-steel-light text-[10px] uppercase tracking-[3px] font-bold font-body italic opacity-60">
                      "{service.tagline}"
                    </p>
                  </div>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-3">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-accent/60 flex-shrink-0 rounded-none rotate-45" />
                        <span className="text-steel-light text-sm font-body font-light leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6">
                    <Link 
                      to={`/servicios/${service.slug}`}
                      className="inline-flex items-center text-accent text-xs font-bold uppercase tracking-[4px] hover:translate-x-3 transition-transform duration-300"
                    >
                      Ver detalle técnica <span className="ml-3">→</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
