import { motion } from 'framer-motion';

const features = [
  {
    title: 'ISO 9001',
    description: 'Gestión de calidad certificada para garantizar la excelencia operativa.',
  },
  {
    title: 'Metodología BIM',
    description: 'Optimización de procesos mediante modelado digital avanzado.',
  },
  {
    title: 'Equipo Experto',
    description: 'Ingenieros especializados con trayectoria internacional.',
  },
  {
    title: 'Sostenibilidad',
    description: 'Prácticas eco-eficientes y altos estándares en seguridad industrial.',
  },
];

export default function About() {
  return (
    <section id="nosotros" className="section-padding bg-[var(--navy-section)] relative overflow-hidden">
      {/* Decorative Diagonal Pattern Background for section */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, var(--blue-accent), var(--blue-accent) 1px, transparent 1px, transparent 10px)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <div>
              <span className="text-[var(--blue-accent)] font-semibold uppercase tracking-[5px] text-xs">
                Sobre Nosotros
              </span>
              <h2 className="text-5xl md:text-6xl text-white mt-4 display-font">
                LIDERANDO LA <span className="text-[var(--blue-accent)]">INGENIERÍA</span>
              </h2>
              <div className="vertical-accent h-16 mt-6"></div>
            </div>

            <p className="text-[var(--gray-text)] text-lg leading-relaxed">
              Infrix nace con el propósito de elevar los estándares de la construcción en el Perú. 
              Nuestra filosofía se basa en la honestidad, la innovación tecnológica y el cumplimiento 
              riguroso de los plazos de entrega.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-[var(--blue-accent)] rotate-45" />
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest-2">{feature.title}</h4>
                  </div>
                  <p className="text-[var(--gray-muted)] text-sm leading-snug">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Dark Panel / Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[var(--navy-deepest)] p-12 lg:p-24 border border-white/5 relative overflow-hidden">
              {/* Diagonal Line Pattern */}
              <div 
                className="absolute inset-0 opacity-[0.05]" 
                style={{
                  backgroundImage: 'repeating-linear-gradient(-45deg, #fff, #fff 1px, transparent 1px, transparent 20px)'
                }}
              ></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6">
                <div className="flex flex-col items-center">
                  <span className="text-9xl md:text-[150px] text-[var(--blue-accent)] display-font leading-none italic">
                    25
                  </span>
                  <span className="text-2xl text-white display-font tracking-[8px] uppercase -mt-4">
                    Años
                  </span>
                </div>
                <div className="thin-divider !bg-[var(--blue-accent)]/30 w-1/2 mx-auto" />
                <p className="text-white/80 font-medium uppercase tracking-[3px] text-sm">
                  De excelencia en construcción industrial
                </p>
              </div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 border-l border-b border-[var(--blue-accent)]/50" />
            <div className="absolute -top-8 -right-8 w-24 h-24 border-r border-t border-[var(--blue-accent)]/50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
