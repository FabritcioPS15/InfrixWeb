import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const ringVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--navy-deepest)] grid-pattern pt-20"
    >
      {/* Concentric Rings Decoration */}
      <div className="absolute top-1/2 -right-24 -translate-y-1/2 hidden lg:block pointer-events-none">
        <motion.div
          variants={ringVariants}
          initial="hidden"
          animate="visible"
          className="concentric-rings"
        >
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Vertical Bar */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 120 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="vertical-accent"
            />
          </div>

          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-8"
          >
            <motion.div variants={itemVariants} className="flex flex-col space-y-2">
              <span className="text-[var(--blue-accent)] font-semibold uppercase tracking-[5px] text-xs">
                Empresa de Construcción
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white">
                CONSTRUIMOS <br />
                <span className="text-[var(--blue-accent)]">EL FUTURO</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[var(--gray-text)] text-lg max-w-xl leading-relaxed"
            >
              Líderes en ingeniería y construcción comercial, industrial y residencial en el Perú. 
              Transformamos visiones en infraestructuras sólidas con los más altos estándares de calidad.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a href="#proyectos" className="btn-primary">
                Ver Proyectos
              </a>
              <a href="#servicios" className="btn-ghost">
                Servicios
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Right Stats */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 right-6 md:right-12 lg:right-24 flex flex-col items-end space-y-8 text-right bg-[var(--navy-deepest)]/80 backdrop-blur-sm p-4 hidden md:flex"
      >
        <div className="flex flex-col">
          <span className="text-4xl text-white display-font">250+</span>
          <span className="text-[10px] uppercase tracking-widest-3 text-[var(--gray-muted)] font-semibold">
            Proyectos Completados
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl text-white display-font">20+</span>
          <span className="text-[10px] uppercase tracking-widest-3 text-[var(--gray-muted)] font-semibold">
            Años de Experiencia
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl text-white display-font">98%</span>
          <span className="text-[10px] uppercase tracking-widest-3 text-[var(--gray-muted)] font-semibold">
            Satisfacción del Cliente
          </span>
        </div>
      </motion.div>
    </section>
  );
}
