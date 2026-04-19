import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTABanner from '../components/CTABanner';
import Counter from '../components/Counter';

const Home = () => {
  const stats = [
    { label: 'Proyectos', value: 250, suffix: '+' },
    { label: 'Años', value: 20, suffix: '+' },
    { label: 'Satisfacción', value: 98, suffix: '%' },
  ];

  const servicePills = [
    'Drywall & Estructuras',
    'Melamina y Muebles',
    'Instalaciones Eléctricas',
    'Gasfitería y Saneamiento',
    'Proyectos Civiles',
    'Arquitectura Interior',
    'Campamentos',
    'Pintura'
  ];

  return (
    <div className="bg-navy-deep overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 hero-grid bg-navy-deep border-b border-accent/20">
        {/* Large watermark text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <span className="font-display text-[126rem] md:text-[20vw] text-accent/[0.03] tracking-widest leading-none uppercase">
            INFRIX
          </span>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-24 left-8 w-6 h-6 border-t border-l border-accent/30" />
        <div className="absolute top-24 right-8 w-6 h-6 border-t border-r border-accent/30" />
        <div className="absolute bottom-12 left-8 w-6 h-6 border-b border-l border-accent/30" />
        <div className="absolute bottom-12 right-8 w-6 h-6 border-b border-r border-accent/30" />

        {/* Left Vertical Bar */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-1 h-32 bg-accent hidden md:block" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 max-w-4xl"
          >
            <div className="inline-flex items-center space-x-3 border-l-2 border-accent pl-4 font-body">
              <span className="text-accent text-xs tracking-[4px] uppercase font-medium">
                Empresa de Construcción
              </span>
            </div>
            
            <h1 className="flex flex-col leading-none">
              <span className="font-display text-7xl md:text-9xl text-white">CONSTRUIMOS</span>
              <span className="font-display text-5xl md:text-7xl text-accent -mt-2">EL FUTURO</span>
            </h1>

            <p className="text-steel-light text-lg md:text-xl font-light font-body max-w-2xl leading-relaxed">
              Soluciones integrales de ingeniería y construcción industrial, comercial y residencial 
              con los más altos estándares de precisión técnica.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/proyectos" className="btn-primary">
                Ver Proyectos
              </Link>
              <Link to="/servicios" className="btn-ghost">
                Nuestros Servicios
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Right Stats with Counters */}
        <div className="absolute bottom-24 right-6 md:right-12 text-right hidden sm:block z-20">
          <div className="flex flex-col space-y-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <Counter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  className="font-display text-5xl md:text-6xl text-white leading-none" 
                  duration={2.5}
                />
                <span className="text-[10px] uppercase tracking-[4px] text-accent font-semibold mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="py-12 bg-navy border-y border-accent/10">
        <div className="overflow-x-auto whitespace-nowrap px-6 no-scrollbar">
          <div className="flex items-center space-x-6 min-w-max mx-auto">
            {servicePills.map((pill, idx) => (
              <Link
                key={idx}
                to="/servicios"
                className="px-6 py-2 border border-steel/20 text-[10px] uppercase tracking-widest text-steel-light hover:border-accent hover:text-white transition-all duration-300"
              >
                {pill}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nosotros Teaser */}
      <section className="section-padding py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <div>
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Nosotros</span>
              <h2 className="text-5xl text-white mt-4 font-display">LIDERAZGO EN <br/> <span className="text-accent">CONSTRUCCIÓN</span></h2>
            </div>
            <p className="text-steel-light leading-relaxed font-body font-light text-lg">
              INFRIX es una empresa peruana con amplia experiencia en el sector construcción, 
              especializada en brindar soluciones de ingeniería civil y electromecánica. 
              Nuestra trayectoria nos permite garantizar eficiencia y seguridad en cada obra.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {['Compromiso', 'Innovación', 'Seguridad', 'Excelencia'].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="text-xs uppercase tracking-widest font-medium text-white font-body">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Diagonal Pattern Panel with Counter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-navy-light p-12 aspect-square flex items-center justify-center diagonal-pattern industrial-border"
          >
            <div className="bg-accent w-32 h-32 flex flex-col items-center justify-center shadow-2xl">
               <Counter value={25} className="font-display text-5xl text-white leading-none" />
               <span className="font-display text-sm text-white tracking-[4px] uppercase border-t border-white/20 mt-2 pt-2">Años</span>
            </div>
            <div className="absolute bottom-8 right-8 text-right">
               <span className="block font-display text-xl text-white tracking-widest uppercase">Trayectoria</span>
               <span className="block text-[10px] text-steel-light tracking-widest uppercase mt-1">Sólida ingeniería</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proyectos Preview */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl text-white font-display">PROYECTOS <span className="text-accent">DESTACADOS</span></h2>
          </div>
          
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-6">
            <div className="relative group overflow-hidden bg-navy-deep industrial-border aspect-[16/10]">
              <div className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" 
                   style={{backgroundImage: 'url(https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg?auto=compress&cs=tinysrgb&w=1200)'}} />
              <div className="absolute inset-0 bg-navy-deep/40 group-hover:bg-navy-deep/20 transition-all" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block bg-accent text-[8px] font-semibold text-white px-2 py-1 uppercase tracking-widest mb-4 font-body">Industrial</span>
                <h3 className="font-display text-3xl text-white mb-2">Planta Callao II</h3>
                <p className="text-steel-silver text-xs font-light font-body mb-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                  Ampliación de estructuras metálicas y sistemas electromecánicos de máxima precisión.
                </p>
                <Link to="/proyectos" className="flex items-center text-accent text-[10px] uppercase font-bold tracking-widest font-body">
                  Ver portafolio →
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { title: 'Torre Miraflores', cat: 'Corporativo', img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800' },
                { title: 'Condominio Surco', cat: 'Residencial', img: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800' }
              ].map((proj, idx) => (
                <div key={idx} className="relative group overflow-hidden bg-navy-deep industrial-border flex-1">
                  <div className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" 
                       style={{backgroundImage: `url(${proj.img})`}} />
                  <div className="absolute inset-0 bg-navy-deep/50 group-hover:bg-navy-deep/30 transition-all" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block bg-accent text-[10px] font-semibold text-white px-2 py-1 uppercase tracking-widest mb-2 font-body">{proj.cat}</span>
                    <h3 className="font-display text-2xl text-white tracking-widest">{proj.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="¿LISTO PARA CONSTRUIR?"
        body="Ofrecemos soluciones de ingeniería con el más alto rigor técnico y eficiencia. Solicita tu cotización ahora."
        primaryLabel="Solicitar Cotización"
        primaryLink="/contacto"
        ghostLabel="Ver Servicios"
        ghostLink="/servicios"
      />
    </div>
  );
};

export default Home;
