import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  HardHat, 
  PenTool, 
  Zap, 
  Trophy, 
  Users, 
  Building2,
  Droplets,
  Hammer,
  Layout,
  Mountain,
  Paintbrush,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Counter from '../components/Counter';
import { services as allServices } from '../data/services';

const Home = () => {
  const [startIndex, setStartIndex] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate 3 by 3
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setStartIndex((prev) => (prev + 1) % allServices.length);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextServices = () => {
    setStartIndex((prev) => (prev + 1) % allServices.length);
  };

  const prevServices = () => {
    setStartIndex((prev) => (prev - 1 + allServices.length) % allServices.length);
  };

  // Get current 3 services (wrapping around)
  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(allServices[(startIndex + i) % allServices.length]);
    }
    return visible;
  };

  const stats = [
    { label: 'Completados', value: 2, suffix: 'k+', icon: <Building2 size={28} /> },
    { label: 'Miembros', value: 3, suffix: 'k+', icon: <Users size={28} /> },
    { label: 'Clientes Felices', value: 1.9, suffix: 'k+', icon: <CheckCircle2 size={28} /> },
    { label: 'Premios', value: 1, suffix: 'k+', icon: <Trophy size={28} /> }
  ];

  const projects = [
    {
      title: 'Construcción General',
      img: '/assets/konta/konta_project_construction_1776979709246.png',
      category: 'Industrial'
    },
    {
      title: 'Arquitectura',
      img: '/assets/konta/konta_project_architecture_1776979728586.png',
      category: 'Corporativo'
    },
    {
      title: 'Diseño de Interiores',
      img: '/assets/konta/konta_project_interior_1776979743858.png',
      category: 'Comercial'
    }
  ];

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'drywall-estructuras': return <Layout size={32} />;
      case 'melamina-muebles': return <Hammer size={32} />;
      case 'instalaciones-electricas': return <Zap size={32} />;
      case 'gasfiteria-saneamiento': return <Droplets size={32} />;
      case 'proyectos-civiles-electromecanicos': return <HardHat size={32} />;
      case 'acabados-arquitectura-interior': return <PenTool size={32} />;
      case 'campamentos-mineros-industriales': return <Mountain size={32} />;
      case 'pintura-revestimiento': return <Paintbrush size={32} />;
      default: return <Building2 size={32} />;
    }
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[500px] md:min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/konta/konta_hero_bg_1776979543548.png" 
            alt="Sitio de Construcción" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-infrix-navy/70 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h5 className="text-infrix-orange font-display font-bold uppercase tracking-[2px] md:tracking-[4px] mb-4 text-xs md:text-base">
              Construyendo Excelencia
            </h5>
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white leading-[1.1] mb-8 uppercase">
              CONSTRUCCIÓN DE CALIDAD, <br />
              <span className="text-infrix-orange">IMPRESIONES DURADERAS</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contacto" 
                className="bg-infrix-orange text-white px-8 md:px-10 py-4 md:py-5 font-display font-bold uppercase tracking-widest hover:bg-white hover:text-infrix-navy transition-all duration-300 shadow-xl shadow-infrix-orange/20 text-center text-xs md:text-sm"
              >
                Cotizar Ahora
              </Link>
              <Link 
                to="/servicios" 
                className="border-2 border-white text-white px-8 md:px-10 py-4 md:py-5 font-display font-bold uppercase tracking-widest hover:bg-white hover:text-infrix-navy transition-all duration-300 text-center text-xs md:text-sm"
              >
                Ver Servicios
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3-by-3 Oscillating Services Section */}
      <section className="py-16 md:py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h5 className="text-infrix-orange font-display font-bold uppercase tracking-[3px] text-xs md:text-base">Especialidades</h5>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-infrix-navy uppercase leading-tight">
                NUESTROS SERVICIOS <span className="text-infrix-orange">PREMIUM</span>
              </h2>
            </div>
            <div className="flex space-x-2 md:space-x-4">
              <button 
                onClick={prevServices}
                className="p-4 border border-gray-100 hover:bg-infrix-orange hover:text-white transition-all shadow-lg"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextServices}
                className="p-4 border border-gray-100 hover:bg-infrix-orange hover:text-white transition-all shadow-lg"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="popLayout">
              {getVisibleServices().map((service, idx) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="bg-white p-6 md:p-10 border border-gray-100 hover:border-infrix-orange transition-all duration-700 group shadow-lg shadow-gray-200/20 flex flex-col h-full relative overflow-hidden hover:bg-infrix-navy"
                >
                  {/* Background Image that appears on hover */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                      src={service.images.hero} 
                      alt={service.name}
                      className="w-full h-full object-cover opacity-0 group-hover:opacity-20 group-hover:scale-110 grayscale transition-all duration-1000"
                    />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="text-infrix-orange mb-8 group-hover:scale-110 transition-transform duration-500">
                      {getServiceIcon(service.slug)}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-infrix-navy mb-4 uppercase tracking-wider group-hover:text-white transition-colors duration-500">
                      {service.name}
                    </h3>
                    <p className="text-gray-500 font-body text-sm mb-8 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-500">
                      {service.description}
                    </p>
                    <div className="mt-auto pt-6 border-t border-gray-50 group-hover:border-white/10 transition-colors duration-500">
                      <Link 
                        to={`/servicios/${service.slug}`} 
                        className="inline-flex items-center text-infrix-navy font-display font-bold text-[10px] tracking-widest uppercase group-hover:text-infrix-orange transition-colors"
                      >
                        Leer Más <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <div className="mt-12 md:mt-16 text-center">
             <Link 
               to="/servicios" 
               className="bg-infrix-orange hover:bg-infrix-navy text-white px-8 md:px-12 py-4 md:py-5 font-display font-bold uppercase tracking-[2px] transition-all duration-300 shadow-xl shadow-infrix-orange/20 inline-block text-xs md:text-sm"
             >
               Ver Todos los Servicios
             </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-32 bg-gray-50 overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 p-4 bg-white shadow-2xl border border-gray-100">
              <img 
                src="/assets/konta/konta_architect_1776979668450.png" 
                alt="Arquitecto Profesional" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-infrix-navy p-6 md:p-12 z-20 shadow-2xl">
              <div className="flex flex-col items-center text-white">
                <Counter 
                  value={10} 
                  className="text-4xl md:text-7xl font-display font-extrabold leading-none italic text-infrix-orange"
                />
                <span className="text-[8px] md:text-[10px] uppercase tracking-[2px] md:tracking-[4px] font-bold mt-2 md:mt-4 text-white/60 text-center">Años de Liderazgo</span>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-64 h-64 diagonal-pattern opacity-10 z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h5 className="text-infrix-orange font-display font-bold uppercase tracking-[3px]">Nuestra Trayectoria</h5>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold text-infrix-navy leading-tight uppercase">
                INGENIERÍA QUE <span className="text-infrix-orange">TRANSFORMA</span> EL PAÍS
              </h2>
              <div className="w-16 h-1 bg-infrix-orange" />
            </div>
            <p className="text-gray-600 font-body text-xl leading-relaxed font-normal">
              Con una década de excelencia técnica, hemos consolidado nuestra presencia en los proyectos más exigentes del Perú, fusionando innovación digital con construcción tradicional.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                'Staff de Ingenieros CIP',
                'Certificación ISO 9001',
                'Metodología BIM 4D',
                'Seguridad Integral SST'
              ].map((benefit, i) => (
                <div key={i} className="flex items-center space-x-4 group">
                  <div className="bg-infrix-orange/10 p-2 group-hover:bg-infrix-orange transition-colors">
                    <CheckCircle2 className="text-infrix-orange group-hover:text-white" size={20} />
                  </div>
                  <span className="font-display font-bold text-infrix-navy uppercase tracking-widest text-[11px]">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="pt-6 flex justify-center md:justify-start">
              <Link 
                to="/nosotros" 
                className="bg-infrix-navy text-white px-8 md:px-12 py-4 md:py-5 font-display font-bold uppercase tracking-[2px] hover:bg-infrix-orange transition-all duration-300 shadow-xl shadow-infrix-navy/20 inline-block text-xs md:text-sm text-center"
              >
                Conoce Nuestra Historia
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-24 bg-infrix-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 diagonal-pattern opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-16 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="text-infrix-orange/60">{stat.icon}</div>
              <Counter 
                value={stat.value} 
                suffix={stat.suffix} 
                className="text-6xl md:text-7xl font-display font-extrabold text-white tracking-tighter"
              />
              <span className="text-[10px] uppercase tracking-[4px] text-infrix-orange font-bold">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 md:py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <h5 className="text-infrix-orange font-display font-bold uppercase tracking-[3px]">Hitos</h5>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold text-infrix-navy uppercase">PROYECTOS QUE <span className="text-infrix-orange">INSPIRAN</span></h2>
              <div className="w-16 h-1 bg-infrix-orange" />
            </div>
            <Link to="/proyectos" className="group text-infrix-navy font-display font-bold text-xs tracking-widest uppercase hover:text-infrix-orange transition-colors flex items-center">
              Explorar Portafolio Completo <ArrowRight size={20} className="ml-3 group-hover:translate-x-3 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[300px] md:h-[600px] overflow-hidden cursor-pointer bg-infrix-navy shadow-2xl"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-infrix-navy via-infrix-navy/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full transform md:translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-infrix-orange text-[10px] md:text-xs font-bold uppercase tracking-widest block mb-2 md:mb-4 border-l-2 border-infrix-orange pl-3">{project.category}</span>
                  <h3 className="text-xl md:text-3xl font-display font-extrabold text-white mb-2 md:mb-6 uppercase tracking-wider">{project.title}</h3>
                  <div className="w-0 h-1 bg-infrix-orange group-hover:w-full transition-all duration-700"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-infrix-orange py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white uppercase leading-tight mb-6">
              ¿LISTO PARA LLEVAR TU <br/> <span className="text-infrix-navy">PROYECTO AL SIGUIENTE NIVEL?</span>
            </h2>
            <p className="text-white/90 font-body text-lg font-medium tracking-wide">
              Contáctanos hoy mismo para una asesoría técnica especializada y descubre por qué somos la elección número uno en ingeniería de detalle.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              to="/contacto" 
              className="bg-infrix-navy text-white px-12 py-5 font-display font-bold uppercase tracking-widest hover:bg-white hover:text-infrix-navy transition-all duration-300 shadow-2xl"
            >
              Contactar Ahora
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full diagonal-pattern opacity-10 rotate-12" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </section>
    </div>
  );
};

export default Home;
