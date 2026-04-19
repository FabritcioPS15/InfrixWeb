import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '../components/PageHero';
import Counter from '../components/Counter';
import CTABanner from '../components/CTABanner';

const categories = ['Todos', 'Comercial', 'Vial', 'Residencial', 'Industrial', 'Minero'];

const allProjects = [
  {
    id: 1,
    name: 'Centro Comercial Miraflores',
    category: 'Comercial',
    location: 'Lima, Perú',
    description: 'Construcción integral de estructura metálica y acabados de lujo.',
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    name: 'Viaducto Panamericana Norte',
    category: 'Vial',
    location: 'Trujillo, Perú',
    description: 'Obras de infraestructura vial y pavimentación industrial de alto tránsito.',
    image: 'https://images.pexels.com/photos/3406000/pexels-photo-3406000.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    name: 'Condominio El Golf',
    category: 'Residencial',
    location: 'San Isidro, Perú',
    description: 'Proyecto multifamiliar con sistemas avanzados de gasfitería y electricidad.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    name: 'Planta Industrial Huachipa',
    category: 'Industrial',
    location: 'Lima, Perú',
    description: 'Montaje electromecánico y estructuras para planta de procesamiento de alimentos.',
    image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 5,
    name: 'Campamento Mina Antamina',
    category: 'Minero',
    location: 'Huaraz, Perú',
    description: 'Instalación de módulos habitacionales y servicios básicos en zona remota.',
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 6,
    name: 'Sede Corporativa San Borja',
    category: 'Comercial',
    location: 'Lima, Perú',
    description: 'Refacción y remodelación de oficinas administrativas clase A.',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function ProyectosPage() {
  const [filter, setFilter] = useState('Todos');

  const filteredProjects = filter === 'Todos' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <div className="bg-navy-deep min-h-screen">
      <PageHero 
        title="PROYECTOS DESTACADOS" 
        subtitle="Portafolio" 
        watermark="PROYECTOS"
      />

      {/* Filter Bar */}
      <section className="bg-navy border-b border-accent/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-[10px] uppercase tracking-[3px] transition-all duration-300 border ${
                filter === cat 
                  ? 'bg-accent border-accent text-white font-bold' 
                  : 'border-steel/20 text-steel-light hover:border-accent hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-accent/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-accent/10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-navy overflow-hidden group relative h-[500px]"
              >
                <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 bg-cover bg-center" 
                     style={{backgroundImage: `url(${project.image})`}} />
                <div className="absolute inset-0 bg-navy-deep/60 group-hover:bg-navy-deep/40 transition-all" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end space-y-4">
                  <span className="inline-block self-start text-[8px] uppercase tracking-widest bg-accent px-3 py-1 font-bold font-body">
                    {project.category}
                  </span>
                  <h3 className="text-3xl text-white font-display tracking-widest leading-none">
                    {project.name}
                  </h3>
                  <div className="space-y-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-accent text-[10px] tracking-widest uppercase font-bold font-body">{project.location}</p>
                    <p className="text-steel-silver text-xs font-body font-light leading-relaxed">
                      {project.description}
                    </p>
                    <button className="pt-4 text-white text-[10px] uppercase tracking-widest flex items-center hover:text-accent transition-colors font-body font-bold">
                      Detalle de Obra <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Bar with Counter */}
      <section className="bg-navy-light py-24 px-6 border-t border-accent/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: 250, label: 'Proyectos Entregados', suffix: '' },
              { val: 15, label: 'MM Horas sin Accidentes', suffix: 'M' },
              { val: 45, label: 'Ingenieros Especialistas', suffix: '' },
              { val: 12, label: 'Regiones del Perú', suffix: '' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Counter 
                  value={stat.val} 
                  suffix={stat.suffix}
                  className="text-5xl md:text-6xl text-white font-display tracking-widest"
                />
                <span className="text-[10px] uppercase tracking-[4px] text-accent font-semibold leading-relaxed">
                  {stat.label}
                </span>
              </div>
            ))}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
