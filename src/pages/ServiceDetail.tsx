import { useParams, Link } from 'react-router-dom';
import { services, Service } from '../data/services';
import CTABanner from '../components/CTABanner';
import { motion } from 'framer-motion';

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find((s) => s.slug === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-navy-deep flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-4xl text-white mb-4">SERVICIO NO ENCONTRADO</h1>
          <Link to="/servicios" className="text-accent underline">Ver todos los servicios</Link>
        </div>
      </div>
    );
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, name: string) => {
    const parent = e.currentTarget.parentElement;
    if (parent) {
      const placeholder = document.createElement('div');
      placeholder.className = 'w-full h-full bg-navy-light flex items-center justify-center text-accent/20 font-display text-2xl p-4 text-center border border-accent/10';
      placeholder.innerText = name.toUpperCase();
      parent.replaceChild(placeholder, e.currentTarget);
    }
  };

  const relatedServices = services.filter((s) => service.relatedServices.includes(s.slug));

  return (
    <div className="bg-navy-deep min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden hero-grid">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={service.images.hero} 
            alt={service.name}
            className="w-full h-full object-cover opacity-20 grayscale"
            onError={(e) => handleImageError(e, service.name)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
        </div>

        {/* Left Vertical Bar */}
        <div className="absolute left-0 top-0 w-1 bg-accent h-full hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-steel text-xs tracking-[4px] uppercase mb-12">
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>/</span>
              <Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link>
              <span>/</span>
              <span className="text-accent">{service.name}</span>
            </nav>

            <span className="text-accent text-xs tracking-[4px] uppercase border-l-2 border-accent pl-3 mb-6 block font-medium">
              Especialidad Técnica
            </span>

            <h1 className="font-display text-7xl md:text-9xl tracking-wide text-offwhite leading-[0.8] mb-8">
              {service.name}
            </h1>

            <p className="text-steel-light font-body font-light text-xl md:text-2xl mt-4 max-w-xl leading-relaxed italic">
              "{service.tagline}"
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-x-12 gap-y-6 mt-16 pt-12 border-t border-accent/20">
              {service.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-4xl text-accent">{stat.value}</span>
                  <span className="text-steel text-[10px] tracking-[3px] uppercase mt-1 font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Large Faded Number */}
        <div className="absolute right-8 bottom-0 select-none pointer-events-none hidden lg:block">
           <span className="font-display text-[20rem] text-accent/5 leading-none">
             {service.id}
           </span>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="bg-navy py-24 px-6 md:px-16 border-y border-accent/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-20">
          <div className="space-y-6">
            <span className="text-accent text-[10px] tracking-[4px] uppercase font-bold">Descripción del servicio</span>
            <h2 className="font-display text-5xl text-offwhite leading-tight">SOLUCIONES CON <br/> <span className="text-accent">MÁXIMO RIGOR</span></h2>
            <p className="text-steel-light font-body font-light leading-relaxed text-lg">
              {service.description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12 py-10">
              {service.bullets.map((bullet, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="w-1 h-full bg-accent flex-shrink-0" />
                  <span className="text-offwhite font-display text-lg tracking-widest leading-snug uppercase">{bullet}</span>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* 3. Image Gallery Section */}
      <section className="bg-navy-light py-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-accent/10">
          {service.images.gallery.map((img, i) => (
            <div key={i} className="aspect-video relative group overflow-hidden bg-navy">
              <img 
                src={img} 
                alt={`${service.name} ${i + 1}`}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-700"
                onError={(e) => handleImageError(e, `Proyecto ${i + 1}`)}
              />
              <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-all pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="bg-navy-deep py-24 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
             <span className="text-accent text-[10px] tracking-[4px] uppercase font-bold mb-4 block">Metodología Infrix</span>
             <h2 className="font-display text-5xl md:text-6xl text-offwhite">PROCESO DE <span className="text-accent">TRABAJO</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-accent/10">
            {service.process.map((step, i) => (
              <div key={i} className="bg-navy p-10 relative group border-accent/5 hover:bg-navy-light transition-all h-full">
                <span className="font-display text-6xl text-accent mb-6 block group-hover:scale-110 transition-transform origin-left">
                  {step.step}
                </span>
                <h3 className="font-display text-2xl text-offwhite mb-4 tracking-widest">{step.title}</h3>
                <p className="text-steel-light text-sm font-body font-light leading-relaxed">
                  {step.desc}
                </p>
                {/* Connector line for desktop */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-[1px] bg-accent/20 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Related Services Section */}
      <section className="bg-navy py-24 px-6 md:px-16 border-t border-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
             <h2 className="font-display text-4xl text-offwhite tracking-widest leading-none">SERVICIOS <span className="text-accent">RELACIONADOS</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {relatedServices.map((related, i) => (
              <Link 
                key={i} 
                to={`/servicios/${related.slug}`}
                className="group bg-navy-light border border-accent/5 p-12 hover:border-accent/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <span className="text-accent font-display text-4xl opacity-20 group-hover:opacity-100 transition-opacity">
                    {related.id}
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-display text-3xl text-offwhite tracking-widest">{related.name}</h3>
                    <p className="text-steel-light text-sm font-body font-light line-clamp-2 italic">
                      "{related.tagline}"
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex items-center text-accent text-xs font-bold uppercase tracking-[4px] group-hover:translate-x-4 transition-transform">
                  Ver especificaciones <span className="ml-3">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <CTABanner
        tag="¿Necesitas este servicio?"
        title={`COTIZA TU PROYECTO DE ${service.name.toUpperCase()}`}
        body="Nuestro equipo técnico está listo para evaluar tu proyecto sin costo y ofrecerte una solución de ingeniería a medida."
        primaryLabel="Solicitar Cotización"
        primaryLink="/contacto"
        ghostLabel="Ver todos los servicios"
        ghostLink="/servicios"
      />
    </div>
  );
}
