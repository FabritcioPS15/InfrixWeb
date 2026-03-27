import { useState } from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import PageTransition from '../components/PageTransition';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'drywall-estructuras', name: 'Drywall' },
  { id: 'melamina-muebles', name: 'Melamina' },
  { id: 'instalaciones-electricas', name: 'Electricidad' },
  { id: 'gasfiteria-saneamiento', name: 'Gasfitería' },
  { id: 'proyectos-civiles-electromecanicos', name: 'Obras Civiles' },
  { id: 'acabados-arquitectura-interior', name: 'Acabados' },
  { id: 'campamentos-mineros-industriales', name: 'Campamentos' },
  { id: 'pintura-revestimiento', name: 'Pintura' },
];

const projects = [
  {
    id: 1,
    name: 'Centro Comercial Metropolitano',
    category: 'proyectos-civiles-electromecanicos',
    categoryName: 'Obras Civiles',
    description: 'Construcción integral de infraestructura comercial de alto tránsito.',
    location: 'Lima, Perú',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Residencial San Isidro',
    category: 'acabados-arquitectura-interior',
    categoryName: 'Acabados',
    description: 'Arquitectura interior y acabados premium para departamentos de lujo.',
    location: 'San Isidro',
    year: '2023',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 3,
    name: 'Campamento Minero Los Andes',
    category: 'campamentos-mineros-industriales',
    categoryName: 'Campamentos',
    description: 'Montaje de módulos habitacionales y servicios en zona minera.',
    location: 'Cajamarca',
    year: '2024',
    image: 'https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 4,
    name: 'Planta Industrial Norte',
    category: 'pintura-revestimiento',
    categoryName: 'Pintura',
    description: 'Recubrimiento epóxico de alta resistencia para pavimentos.',
    location: 'Piura',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Oficinas SkyTower',
    category: 'drywall-estructuras',
    categoryName: 'Drywall',
    description: 'Implementación de sistemas drywall de precisión para entornos corporativos.',
    location: 'Miraflores',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Modernización Eléctrica',
    category: 'instalaciones-electricas',
    categoryName: 'Electricidad',
    description: 'Renovación de tableros y sistemas de iluminación industrial.',
    location: 'Lima',
    year: '2022',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 7,
    name: 'Mobiliario Corporativo Premium',
    category: 'melamina-muebles',
    categoryName: 'Melamina',
    description: 'Fabricación de muebles a medida con diseño ergonómico.',
    location: 'Santiago de Surco',
    year: '2023',
    image: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 8,
    name: 'Red Hidráulica Plaza',
    category: 'gasfiteria-saneamiento',
    categoryName: 'Gasfitería',
    description: 'Instalación de sistemas sanitarios y redes de agua de alta presión.',
    location: 'Pueblo Libre',
    year: '2022',
    image: 'https://images.pexels.com/photos/3476059/pexels-photo-3476059.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 9,
    name: 'Mantenimiento Electromecánico Industrial',
    category: 'proyectos-civiles-electromecanicos',
    categoryName: 'Obras Civiles',
    description: 'Servicio preventivo y correctivo de sistemas críticos de planta.',
    location: 'Callao',
    year: '2023',
    image: 'https://images.pexels.com/photos/190417/pexels-photo-190417.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 10,
    name: 'Acabados Corporativos Torre Central',
    category: 'acabados-arquitectura-interior',
    categoryName: 'Acabados',
    description: 'Pisos técnicos y revestimientos acústicos para oficinas.',
    location: 'San Borja',
    year: '2024',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 11,
    name: 'Sistema Drywall en Auditorio',
    category: 'drywall-estructuras',
    categoryName: 'Drywall',
    description: 'Diseño de nubes acústicas y techos curvos en drywall.',
    location: 'La Molina',
    year: '2023',
    image: 'https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: 12,
    name: 'Remodelación Integral de Fachada',
    category: 'pintura-revestimiento',
    categoryName: 'Pintura',
    description: 'Aplicación de membrana elastomérica y pintura de alta durabilidad.',
    location: 'Surco',
    year: '2023',
    image: 'https://images.pexels.com/photos/7218397/pexels-photo-7218397.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <PageTransition>
      <div className="min-h-screen bg-white pb-32">
        <PageBanner 
          title="Portafolio de Proyectos" 
          breadcrumbs={[
            { label: 'Inicio', href: '/' },
            { label: 'Proyectos', href: '/proyectos' }
          ]}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Minimalist Intro */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-24 mb-20"
          >
            <h2 className="text-[#003B5C] text-xs font-bold tracking-[0.3em] uppercase mb-6 flex items-center">
              <span className="w-10 h-[2px] bg-[#0F8ACB] mr-4"></span>
              Excelencia Constructiva
            </h2>
            <p className="text-gray-400 text-2xl md:text-3xl font-light max-w-4xl leading-snug">
              Desarrollamos infraestructura con <span className="text-[#003B5C] font-semibold italic">precisión técnica</span> y un enfoque minimalista en la ejecución.
            </p>
          </motion.div>

          {/* Square Minimalist Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap border-b border-gray-100 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-5 text-xs font-bold uppercase tracking-widest transition-all relative ${
                  activeFilter === cat.id
                    ? 'text-[#003B5C]'
                    : 'text-gray-400 hover:text-[#003B5C]'
                }`}
              >
                {cat.name}
                {activeFilter === cat.id && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0F8ACB]"></div>
                )}
              </button>
            ))}
          </motion.div>

          {/* Square Minimalist Cards Grid */}
          <motion.div 
            key={activeFilter} // Re-animate on filter change
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-100 border border-gray-100 mb-32"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group bg-white relative aspect-square overflow-hidden flex flex-col"
              >
                {/* Image Section - Zoom & Grayscale to Color */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-[#003B5C]/60 transition-all duration-500"></div>
                </div>

                {/* Content Overlay - Always present but evolves on hover */}
                <div className="relative z-10 w-full h-full p-8 flex flex-col justify-end">
                  {/* Category - Always visible */}
                  <span className="text-[#0F8ACB] text-[10px] font-black uppercase tracking-[0.3em] mb-2 drop-shadow-sm">
                    {project.categoryName}
                  </span>
                  
                  {/* Title - Always visible, stable position */}
                  <h3 className="text-white text-xl md:text-2xl font-black mb-4 leading-tight drop-shadow-md group-hover:text-white transition-colors">
                    {project.name}
                  </h3>

                  {/* Hidden Details - Smooth Reveal */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
                    <div className="flex gap-4 text-white/70 text-[9px] font-bold uppercase tracking-widest mb-6">
                      <span className="flex items-center gap-1.5">
                         <MapPin size={10} className="text-[#0F8ACB]" />
                         {project.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                         <Calendar size={10} className="text-[#0F8ACB]" />
                         {project.year}
                      </span>
                    </div>
                    <Link
                      to={`/contacto?service=${project.category}`}
                      className="inline-flex items-center text-white font-black text-[10px] uppercase tracking-[0.2em] border-b border-[#0F8ACB] pb-1 hover:text-[#0F8ACB] transition-colors"
                    >
                      Ver Detalles
                      <ArrowRight size={14} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA - Square & Minimalist */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-32 border-t border-gray-100 pt-20"
          >
            <div className="md:flex items-center justify-between gap-16">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-black text-[#003B5C] mb-8 leading-tight uppercase tracking-tighter">
                  Comienza tu<br/>próxima obra
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                  Llevamos más de una década transformando planos profesionales en estructuras sólidas y funcionales.
                </p>
              </div>
              <Link
                to="/contacto"
                className="mt-12 md:mt-0 inline-flex items-center bg-[#003B5C] hover:bg-[#0F8ACB] text-white px-16 py-8 text-sm font-black uppercase tracking-[0.3em] transition-all duration-500 shadow-2xl active:scale-95"
              >
                Solicitar Cotización
                <ArrowRight size={20} className="ml-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
