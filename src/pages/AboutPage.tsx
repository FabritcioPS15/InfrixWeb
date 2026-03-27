import { Award, Users, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import PageTransition from '../components/PageTransition';
import Counter from '../components/Counter';

const stats = [
  {
    icon: Award,
    label: 'Proyectos',
    value: '500+',
    detail: 'Trayectoria comprobada',
  },
  {
    icon: Users,
    label: 'Clientes',
    value: '100%',
    detail: 'Satisfacción garantizada',
  },
  {
    icon: TrendingUp,
    label: 'Experiencia',
    value: '10+',
    detail: 'Años en el mercado',
  },
  {
    icon: Zap,
    label: 'Servicios',
    value: '8',
    detail: 'Especialidades activas',
  },
];

const values = [
  {
    title: 'Excelencia Técnica',
    description: 'Compromiso con los más altos estándares de ingeniería y construcción.',
  },
  {
    title: 'Precisión Operativa',
    description: 'Enfoque riguroso en cada detalle para garantizar resultados exactos.',
  },
  {
    title: 'Integridad Corporativa',
    description: 'Transparencia total en nuestras relaciones y compromisos comerciales.',
  },
  {
    title: 'Innovación Constante',
    description: 'Uso de tecnologías de vanguardia para soluciones de infraestructura.',
  },
];

const team = [
  { role: 'Ingeniería Civil', description: 'Diseño estructural y gestión de obras de gran envergadura.' },
  { role: 'Sistemas Eléctricos', description: 'Especialistas en instalaciones críticas y automatización industrial.' },
  { role: 'Gestión de Proyectos', description: 'Supervisión experta y cumplimiento estricto de cronogramas.' },
  { role: 'Arquitectura Interior', description: 'Desarrollo de espacios funcionales con acabados de alta gama.' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white pb-32">
        <PageBanner 
          title="Nuestra Empresa" 
          breadcrumbs={[
            { label: 'Inicio', href: '/' },
            { label: 'Nosotros', href: '/nosotros' }
          ]}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Global Intro Style Standardized */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-24 mb-24"
          >
            <h2 className="text-[#003B5C] text-xs font-bold tracking-[0.3em] uppercase mb-6 flex items-center">
              <span className="w-10 h-[2px] bg-[#0F8ACB] mr-4"></span>
              Nuestra Trayectoria
            </h2>
            <p className="text-gray-400 text-2xl md:text-3xl font-light max-w-4xl leading-snug">
              INFRIX es una organización líder dedicada a la <span className="text-[#003B5C] font-semibold italic">transformación de espacios</span> mediante ingeniería de alto nivel y soluciones constructivas integrales.
            </p>
          </motion.div>

          {/* Stats Section - Square Minimalist */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-gray-100 border border-gray-100 mb-32"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="bg-white p-12 flex flex-col items-center text-center group hover:bg-[#003B5C] transition-colors duration-500"
                >
                  <Icon className="text-[#0F8ACB] mb-6 group-hover:text-white transition-colors" size={32} strokeWidth={1.5} />
                  <div className="text-4xl font-black text-[#003B5C] mb-2 group-hover:text-white transition-colors">
                    <Counter value={parseInt(stat.value)} suffix={stat.value.includes('+') ? '+' : (stat.value.includes('%') ? '%' : '')} />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-[#0F8ACB] transition-colors">{stat.label}</div>
                  <p className="mt-4 text-[10px] text-gray-400 font-bold uppercase group-hover:text-white/50 transition-colors">{stat.detail}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Core Values - Clean Grid */}
          <div className="grid lg:grid-cols-2 gap-24 mb-32 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-black text-[#003B5C] mb-12 uppercase tracking-tighter leading-none">
                Valores que<br/>definen nuestra<br/>identidad
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                Nuestra cultura organizacional se basa en principios sólidos que garantizan la confianza de nuestros socios estratégicos en cada fase del proyecto.
              </p>
            </motion.div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-12"
            >
              {values.map((value, idx) => (
                <motion.div key={idx} variants={itemVariants} className="space-y-4">
                  <h3 className="text-sm font-black text-[#003B5C] uppercase tracking-widest flex items-center">
                    <span className="text-[#0F8ACB] mr-3">0{idx + 1}.</span>
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Narrative Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-12 md:p-20 mb-32 overflow-hidden relative"
          >
             <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#0F8ACB]/5 translate-y-1/2 translate-x-1/2 rounded-full"></div>
            <div className="max-w-3xl relative z-10">
              <h3 className="text-2xl font-black text-[#003B5C] mb-8 uppercase tracking-tight">Especialización y Compromiso</h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Contamos con más de una década de experiencia operando en diversos sectores, desde el residencial hasta el industrial y minero. Nuestro equipo multidisciplinario está capacitado para abordar los desafíos logísticos y técnicos más exigentes de la región.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {['Certificación de Calidad', 'Seguridad Industrial', 'Cumplimiento de Plazos', 'Tecnología Moderna'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold text-[#003B5C] uppercase tracking-widest">
                    <CheckCircle2 size={18} className="text-[#0F8ACB]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Team Section - Square Minimalist */}
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#003B5C] text-xs font-bold tracking-[0.3em] uppercase mb-12 flex items-center"
          >
            <span className="w-10 h-[2px] bg-[#0F8ACB] mr-4"></span>
            Capacidad Técnica
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-gray-100 border border-gray-100 mb-32"
          >
            {team.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-white p-10 h-full flex flex-col justify-between group hover:bg-gray-50 transition-colors">
                <div>
                  <h4 className="text-[#003B5C] font-black text-lg mb-4 uppercase tracking-tight">{item.role}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-8 w-8 h-[2px] bg-gray-200 group-hover:w-full group-hover:bg-[#0F8ACB] transition-all duration-500"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Vision/Mission - Simplified */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-[1px] bg-gray-100 border border-gray-100"
          >
            <motion.div variants={itemVariants} className="bg-white p-16">
              <h3 className="text-2xl font-black text-[#003B5C] mb-6 uppercase tracking-tight">Nuestra Misión</h3>
              <p className="text-gray-500 leading-relaxed">
                Brindar soluciones integrales de ingeniería y construcción que impulsen el desarrollo de nuestros clientes, garantizando excelencia técnica y seguridad en cada obra.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white p-16">
              <h3 className="text-2xl font-black text-[#003B5C] mb-6 uppercase tracking-tight">Nuestra Visión</h3>
              <p className="text-gray-500 leading-relaxed">
                Posicionarnos como la empresa de referencia en el sector construcción a nivel nacional, reconocida por nuestra innovación, precisión y altos estándares de calidad.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
