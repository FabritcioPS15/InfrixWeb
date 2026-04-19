import { motion } from 'framer-motion';

const projects = [
  {
    id: 'large',
    title: 'Torre Corporativa Miraflores',
    location: 'Lima, Perú',
    image: 'https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Oficinas',
  },
  {
    id: 'small-1',
    title: 'Viaducto Huascarán',
    location: 'Áncash, Perú',
    image: 'https://images.pexels.com/photos/3406000/pexels-photo-3406000.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Infraestructura',
  },
  {
    id: 'small-2',
    title: 'Condominio Casuarinas 360',
    location: 'Santiago de Surco, Perú',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Residencial',
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="section-padding bg-[var(--navy-deepest)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="flex-1">
            <span className="text-[var(--blue-accent)] font-semibold uppercase tracking-[5px] text-xs">
              Portafolio
            </span>
            <h2 className="text-5xl md:text-6xl text-white mt-4">
              PROYECTOS <span className="text-white/20">EMBLEMÁTICOS</span>
            </h2>
            <div className="vertical-accent h-16 mt-6 ml-0"></div>
          </div>
          <div className="flex-1 max-w-md">
            <p className="text-[var(--gray-text)] text-sm leading-relaxed">
              Nuestra ingeniería ha dejado huella en los proyectos más desafiantes del país, 
              garantizando precisión técnica y eficiencia operativa.
            </p>
          </div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid md:grid-cols-2 gap-6 h-[800px]">
          {/* Large Card spanning 2 rows on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-full overflow-hidden group border border-white/5"
          >
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deepest)] via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-0 left-0 p-8 flex flex-col space-y-2">
              <span className="text-[var(--blue-accent)] text-xs font-semibold uppercase tracking-widest-2">
                {projects[0].category}
              </span>
              <h3 className="text-3xl md:text-4xl text-white display-font tracking-wider">
                {projects[0].title}
              </h3>
              <p className="text-[var(--gray-muted)] text-sm font-medium">{projects[0].location}</p>
            </div>
            
            <div className="absolute top-8 right-8 border border-white/20 px-4 py-2 text-white/50 text-xs uppercase tracking-widest-3">
              01 / 2024
            </div>
          </motion.div>

          {/* Right column with two smaller cards */}
          <div className="flex flex-col gap-6 h-full">
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex-1 overflow-hidden group border border-white/5"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deepest)] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 p-6 flex flex-col space-y-1">
                  <span className="text-[var(--blue-accent)] text-[10px] font-semibold uppercase tracking-widest-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl text-white display-font">
                    {project.title}
                  </h3>
                  <p className="text-[var(--gray-muted)] text-xs">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
