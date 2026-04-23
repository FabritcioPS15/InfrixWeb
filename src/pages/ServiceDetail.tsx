import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { motion } from 'framer-motion';

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find((s) => s.slug === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-4xl text-infrix-navy mb-4 font-extrabold uppercase">SERVICIO NO ENCONTRADO</h1>
          <Link to="/servicios" className="text-infrix-orange underline font-bold uppercase tracking-widest text-xs">Ver todos los servicios</Link>
        </div>
      </div>
    );
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, name: string) => {
    const parent = e.currentTarget.parentElement;
    if (parent) {
      const placeholder = document.createElement('div');
      placeholder.className = 'w-full h-full bg-gray-100 flex items-center justify-center text-infrix-orange/20 font-display text-2xl p-4 text-center border border-gray-200';
      placeholder.innerText = name.toUpperCase();
      parent.replaceChild(placeholder, e.currentTarget);
    }
  };

  const relatedServices = services.filter((s) => service.relatedServices.includes(s.slug));

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-infrix-navy">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={service.images.hero} 
            alt={service.name}
            className="w-full h-full object-cover opacity-30 grayscale"
            onError={(e) => handleImageError(e, service.name)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-infrix-navy via-infrix-navy/80 to-transparent" />
        </div>

        {/* Left Vertical Bar */}
        <div className="absolute left-0 top-0 w-1 bg-infrix-orange h-full hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 py-20 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-gray-400 text-xs tracking-[4px] uppercase mb-12 font-display font-bold">
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>/</span>
              <Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link>
              <span>/</span>
              <span className="text-infrix-orange">{service.name}</span>
            </nav>

            <span className="text-infrix-orange text-xs tracking-[4px] uppercase border-l-2 border-infrix-orange pl-3 mb-6 block font-bold">
              Especialidad Técnica
            </span>

            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wide text-white font-extrabold leading-[0.9] mb-8 uppercase">
              {service.name}
            </h1>

            <p className="text-gray-300 font-body font-normal text-xl md:text-2xl mt-4 max-w-xl leading-relaxed italic">
              "{service.tagline}"
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-x-12 gap-y-6 mt-16 pt-12 border-t border-white/10">
              {service.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-4xl text-infrix-orange font-bold uppercase">{stat.value}</span>
                  <span className="text-gray-400 text-[10px] tracking-[3px] uppercase mt-1 font-bold font-display">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Large Faded Number */}
        <div className="absolute right-8 bottom-0 select-none pointer-events-none hidden lg:block">
           <span className="font-display text-[20rem] text-white/5 font-extrabold leading-none">
             {service.id}
           </span>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full diagonal-pattern opacity-10"></div>
      </section>

      {/* 2. Overview Section */}
      <section className="bg-white py-24 px-6 md:px-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-20">
          <div className="space-y-6">
            <span className="text-infrix-orange text-[10px] tracking-[4px] uppercase font-bold font-display">Descripción del servicio</span>
            <h2 className="font-display text-5xl text-infrix-navy font-extrabold uppercase leading-tight">SOLUCIONES CON <br/> <span className="text-infrix-orange">MÁXIMO RIGOR</span></h2>
            <p className="text-gray-600 font-body font-normal leading-relaxed text-lg">
              {service.description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12 py-10">
              {service.bullets.map((bullet, i) => (
                <div key={i} className="flex space-x-4 group">
                  <div className="w-1 h-full bg-infrix-orange group-hover:bg-infrix-navy transition-colors flex-shrink-0" />
                  <span className="text-infrix-navy font-display text-lg font-bold tracking-widest leading-snug uppercase">{bullet}</span>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* 3. Image Gallery Section */}
      <section className="bg-gray-50 py-0 border-y border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
          {service.images.gallery.map((img, i) => (
            <div key={i} className="aspect-video relative group overflow-hidden bg-white">
              <img 
                src={img} 
                alt={`${service.name} ${i + 1}`}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-700"
                onError={(e) => handleImageError(e, `Proyecto ${i + 1}`)}
              />
              <div className="absolute inset-0 bg-infrix-navy/10 group-hover:bg-transparent transition-all pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="bg-white py-24 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
             <span className="text-infrix-orange text-[10px] tracking-[4px] uppercase font-bold mb-4 block font-display">Metodología INFRIX</span>
             <h2 className="font-display text-5xl md:text-6xl text-infrix-navy font-extrabold uppercase">PROCESO DE <span className="text-infrix-orange">TRABAJO</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, i) => (
              <div key={i} className="bg-gray-50 p-10 relative group border border-gray-100 hover:bg-infrix-navy hover:text-white transition-all duration-500 h-full shadow-lg">
                <span className="font-display text-6xl text-infrix-orange font-extrabold mb-6 block group-hover:scale-110 transition-transform origin-left italic">
                  {step.step}
                </span>
                <h3 className="font-display text-2xl text-infrix-navy group-hover:text-white mb-4 tracking-widest font-bold uppercase">{step.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-300 text-sm font-body font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Related Services Section */}
      <section className="bg-gray-50 py-24 px-6 md:px-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
             <h2 className="font-display text-4xl text-infrix-navy font-extrabold uppercase tracking-widest leading-none">SERVICIOS <span className="text-infrix-orange">RELACIONADOS</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {relatedServices.map((related, i) => (
              <Link 
                key={i} 
                to={`/servicios/${related.slug}`}
                className="group bg-white border border-gray-100 p-12 hover:border-infrix-orange/40 transition-all flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-6">
                  <span className="text-infrix-orange font-display text-4xl font-extrabold opacity-20 group-hover:opacity-100 transition-opacity">
                    {related.id}
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-display text-3xl text-infrix-navy font-bold uppercase tracking-widest group-hover:text-infrix-orange transition-colors">{related.name}</h3>
                    <p className="text-gray-500 text-sm font-body font-normal line-clamp-2 italic">
                      "{related.tagline}"
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex items-center text-infrix-orange text-xs font-bold uppercase tracking-[4px] group-hover:translate-x-4 transition-transform font-display">
                  Ver especificaciones <span className="ml-3">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <div className="bg-white py-12 px-6 border-t border-gray-100 text-center">
         <Link 
            to="/contacto" 
            className="btn-primary inline-block px-12 py-5 shadow-2xl"
          >
            SOLICITAR COTIZACIÓN DE {service.name.toUpperCase()}
          </Link>
      </div>
    </div>
  );
}
