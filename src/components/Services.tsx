import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Hammer, Home, Zap, Droplet, Wrench, Paintbrush, Building2 } from 'lucide-react';

const allServices = [
  {
    title: 'Drywall & Estructuras',
    description: 'Construcción y diseño de estructuras en drywall para espacios modernos con acabados de primera calidad.',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Hammer,
    slug: 'drywall-estructuras'
  },
  {
    title: 'Melamina y Muebles',
    description: 'Diseño y fabricación de muebles personalizados en melamina, adaptados a espacios específicos.',
    image: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Home,
    slug: 'melamina-muebles'
  },
  {
    title: 'Instalaciones Eléctricas',
    description: 'Servicios completos de instalaciones eléctricas residenciales y comerciales con estándares de seguridad.',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Zap,
    slug: 'instalaciones-electricas'
  },
  {
    title: 'Gasfitería y Saneamiento',
    description: 'Instalación y mantenimiento de sistemas de gasfitería y saneamiento con garantía y profesionalismo.',
    image: 'https://images.pexels.com/photos/3476059/pexels-photo-3476059.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Droplet,
    slug: 'gasfiteria-saneamiento'
  },
  {
    title: 'Proyectos Civiles y Electromecánicos',
    description: 'Proyectos civiles y electromecánicos con ingeniería especializada y calidad garantizada.',
    image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Wrench,
    slug: 'proyectos-civiles-electromecanicos'
  },
  {
    title: 'Acabados & Arquitectura Interior',
    description: 'Diseño y desarrollo de espacios interiores, incorporando acabados de calidad y soluciones creativas.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Paintbrush,
    slug: 'acabados-arquitectura-interior'
  },
  {
    title: 'Campamentos Mineros e Industriales',
    description: 'Soluciones modulares para campamentos mineros e industriales, enfocadas en seguridad y eficiencia.',
    image: 'https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Building2,
    slug: 'campamentos-mineros-industriales'
  },
  {
    title: 'Pintura & Revestimiento',
    description: 'Pintura y recubrimientos de alto desempeño con durabilidad y acabados de precisión.',
    image: 'https://images.pexels.com/photos/7218398/pexels-photo-7218398.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Paintbrush,
    slug: 'pintura-revestimiento'
  }
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const scrollTo = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 320 + 24; // width + gap
      scrollContainerRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      {/* Geometric background decoration */}
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#00AEEF]/5 -rotate-12 transform -translate-y-1/2 hidden lg:block">
        <div className="absolute inset-0 border-[40px] border-[#00AEEF]/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 relative">
          <div className="flex items-center mb-4">
            <div className="w-1.5 h-12 bg-[#00AEEF] mr-4"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#003B5C]">
              Servicios de construcción,<br className="hidden md:block" /> remodelación y mantenimiento
            </h2>
          </div>
          <p className="text-[#00AEEF] font-semibold text-lg ml-6">
            Somos un equipo comprometido a sacar adelante tu proyecto.
          </p>
        </div>

        <div className="relative group/nav">
          {/* Manual Controls - Arrows */}
          <button 
            onClick={slideLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-400 hover:text-[#00AEEF] transition-all opacity-0 group-hover/nav:opacity-100 hidden md:flex active:scale-95"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            onClick={slideRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-400 hover:text-[#00AEEF] transition-all opacity-0 group-hover/nav:opacity-100 hidden md:flex active:scale-95"
          >
            <ChevronRight size={28} />
          </button>

          {/* Carousel container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 hide-scrollbar cursor-grab active:cursor-grabbing"
            onScroll={(e) => {
              const el = e.currentTarget;
              const idx = Math.round(el.scrollLeft / (320 + 24));
              if (idx !== currentIndex) setCurrentIndex(idx);
            }}
          >
            {allServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className="group flex-none w-[280px] md:w-[320px] h-[480px] snap-start relative rounded-[40px] overflow-hidden shadow-2xl transition-all duration-300 transform-gpu"
                >
                  {/* Background Image */}
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Overlay for all states */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 group-hover:from-black/95 transition-all duration-500"></div>
                  
                  {/* Concent Container */}
                  <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center">
                    
                    {/* Icon - initially invisible and translated */}
                    <div className="mb-6 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <Icon className="text-white" size={64} strokeWidth={1} />
                    </div>
                    
                    {/* Title - always visible, but transitions position maybe? 
                        Let's keep it centered but maybe it moves up slightly.
                    */}
                    <h3 className="text-white font-extrabold text-2xl mb-4 leading-tight group-hover:mb-4 transition-all duration-500">
                      {service.title}
                    </h3>
                    
                    {/* Description - initially invisible/translated */}
                    <p className="text-gray-300 text-sm mb-10 line-clamp-4 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-200">
                      {service.description}
                    </p>
                    
                    {/* Button - initially invisible/translated */}
                    <div className="opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500 delay-300 w-full">
                      <Link
                        to={`/servicios/${service.slug}`}
                        className="inline-flex items-center justify-center w-full bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/20 px-6 py-4 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
                      >
                        Conoce más de este servicio
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center space-x-3 mt-4">
          {allServices.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                currentIndex === index 
                ? 'bg-[#003B5C] w-12' 
                : 'bg-gray-200 hover:bg-gray-300 w-2.5'
              }`}
            />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
