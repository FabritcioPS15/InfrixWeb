import { motion } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Edificación Comercial',
    description: 'Construcción y diseño de centros comerciales, oficinas y locales de alto impacto.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 44H44" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 44V8L28 4V44" stroke="#4a8fd4" strokeWidth="2" strokeLinejoin="round" />
        <path d="M28 20H40V44" stroke="#4a8fd4" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 16H22" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 24H22" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 32H22" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
        <path d="M34 28H36" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
        <path d="M34 36H36" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Infraestructura Vial',
    description: 'Desarrollo de complejos sistemas de transporte, carreteras y pavimentación industrial.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 40L14 8" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
        <path d="M34 8L44 40" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 12V16" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 24V28" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 36V40" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Vivienda Residencial',
    description: 'Proyectos multifamiliares y residencias de lujo con acabados de alta gama.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 22L24 6L44 22" stroke="#4a8fd4" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 20V42H40V20" stroke="#4a8fd4" strokeWidth="2" strokeLinejoin="round" />
        <path d="M18 42V28H30V42" stroke="#4a8fd4" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Consultoría y Diseño',
    description: 'Asesoría especializada en ingeniería, arquitectura y factibilidad de proyectos.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12H40" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 24H28" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 36H20" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
        <path d="M36 40L44 32L36 24" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Remodelación y Refacción',
    description: 'Mantenimiento preventivo y correctivo de estructuras industriales y comerciales.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 10L6 18L14 26" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34 10L42 18L34 26" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 40H28" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 32V40" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Gestión Industrial',
    description: 'Montaje de estructuras metálicas, calderería y mantenimiento industrial pesado.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="16" stroke="#4a8fd4" strokeWidth="2" />
        <path d="M24 16V24L30 30" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 24H8" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
        <path d="M40 24H44" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 4V8" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 40V44" stroke="#4a8fd4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-[var(--navy-section)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[var(--blue-accent)] font-semibold uppercase tracking-[5px] text-xs">
            Nuestras Soluciones
          </span>
          <h2 className="text-5xl md:text-6xl text-white mt-4">
            SERVICIOS <span className="text-white/20">ESPECIALIZADOS</span>
          </h2>
          <div className="vertical-accent h-16 mt-6 ml-0"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-navy group relative overflow-hidden border-white/5 border-[0.5px] hover:bg-[var(--navy-deepest)]"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-0 text-[var(--blue-accent)]">
                      {service.icon}
                    </div>
                    <span className="display-font text-white/5 text-4xl leading-none">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="text-2xl text-white mb-4 display-font tracking-wider">
                    {service.title}
                  </h3>
                  <p className="text-[var(--gray-text)] text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>
                
                {/* Hover border reveal */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--blue-accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
