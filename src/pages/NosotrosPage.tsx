import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import Counter from '../components/Counter';

const values = [
  { title: 'ISO 9001', desc: 'Certificación internacional que garantiza la calidad en todos nuestros procesos constructivos.' },
  { title: 'Metodología BIM', desc: 'Modelado de información para la construcción que optimiza recursos y reduce interferencias.' },
  { title: 'Equipo Senior', desc: 'Profesionales altamente capacitados con trayectoria comprobada en proyectos de gran envergadura.' },
  { title: 'Sostenibilidad', desc: 'Compromiso con el medio ambiente y la seguridad ocupacional en cada metro cuadrado.' }
];

const team = [
  { initials: 'FP', name: 'Ing. Fabio Peña', role: 'Gerente General' },
  { initials: 'RS', name: 'Arq. Ricardo S.', role: 'Director de Proyectos' },
  { initials: 'MC', name: 'Ing. Maria C.', role: 'Jefa de Calidad' }
];

const milestones = [
  { year: '2014', text: 'Fundación de INFRIX en Lima, Perú.' },
  { year: '2017', text: 'Primer megaproyecto industrial en el Callao.' },
  { year: '2019', text: 'Certificación ISO 9001 y adopción de tecnología BIM.' },
  { year: '2021', text: 'Ampliación de servicios a minería y energía.' },
  { year: '2024', text: 'Consolidación como líderes en ingeniería de precisión.' }
];

export default function NosotrosPage() {
  return (
    <div className="bg-white">
      <PageHero 
        title="QUIÉNES SOMOS" 
        subtitle="Identidad" 
        watermark="NOSOTROS"
      />

      {/* Story Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl text-infrix-navy font-display font-extrabold tracking-widest leading-none">
                 TRADICIÓN E <span className="text-infrix-orange">INNOVACIÓN</span>
              </h2>
              <div className="w-12 h-1 bg-infrix-orange" />
            </div>
            <p className="text-gray-600 text-lg font-body font-normal leading-relaxed">
               En INFRIX, entendemos que la construcción es el cimiento del progreso. 
               Desde nuestra fundación, nos hemos dedicado a transformar desafíos técnicos en 
               infraestructuras sólidas, fusionando la experiencia tradicional con las 
               últimas metodologías digitales.
            </p>
            <p className="text-gray-500 text-sm font-body font-normal leading-relaxed">
               Nuestra misión es proporcionar soluciones de ingeniería que excedan las expectativas de nuestros clientes, 
               priorizando siempre la seguridad, la puntualidad y la eficiencia presupuestaria.
            </p>
          </div>
          <div className="relative">
             <div className="bg-gray-50 aspect-video flex items-center justify-center industrial-border diagonal-pattern border-2 border-gray-100">
                <span className="text-infrix-orange/20 font-display text-4xl font-bold tracking-widest">INGENIERÍA DE DETALLE</span>
             </div>
             <div className="absolute -bottom-6 -right-6 bg-infrix-orange p-8 hidden md:block shadow-2xl">
                <p className="text-white font-display text-2xl font-bold tracking-widest">LIMA - PERÚ</p>
             </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 shadow-xl">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-10 space-y-6 hover:bg-gray-50 transition-colors duration-300 group">
                <h3 className="text-infrix-navy font-display text-xl font-bold tracking-widest group-hover:text-infrix-orange transition-colors">{v.title}</h3>
                <p className="text-gray-500 text-xs font-body font-normal leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Badge with Counter */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-infrix-navy p-16 md:p-24 border border-infrix-orange/20 relative overflow-hidden text-center diagonal-pattern w-full max-w-2xl shadow-2xl"
          >
             <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="flex flex-col items-center">
                  <Counter 
                    value={10} 
                    className="text-8xl md:text-[150px] text-infrix-orange font-display font-extrabold leading-none italic"
                  />
                  <span className="text-2xl text-white font-display font-bold tracking-[10px] uppercase -mt-4">
                    Años
                  </span>
                </div>
                <div className="w-24 h-px bg-infrix-orange/40" />
                <p className="text-white/80 font-body font-bold uppercase tracking-[4px] text-xs">
                  Proyectando el futuro industrial
                </p>
             </div>
             <div className="absolute top-0 left-0 w-full h-full diagonal-pattern opacity-5"></div>
          </motion.div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-24 px-6 md:px-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
              <h2 className="text-4xl text-infrix-navy font-display font-extrabold uppercase">NUESTRO <span className="text-infrix-orange">EQUIPO</span></h2>
              <div className="w-12 h-1 bg-infrix-orange mx-auto mt-6" />
           </div>
           <div className="grid md:grid-cols-3 gap-12">
              {team.map((m, i) => (
                <div key={i} className="flex flex-col items-center space-y-6 group">
                   <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-3xl font-display font-bold text-infrix-navy border-2 border-gray-100 group-hover:border-infrix-orange group-hover:text-infrix-orange transition-all duration-500 shadow-lg">
                      {m.initials}
                   </div>
                   <div className="text-center">
                      <h4 className="text-infrix-navy font-display font-bold text-xl tracking-widest">{m.name}</h4>
                      <p className="text-infrix-orange text-[10px] uppercase tracking-widest font-bold mt-2 font-body">{m.role}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl text-infrix-navy font-display font-extrabold mb-16 text-center tracking-widest uppercase">MÉTODOS Y HITOS</h2>
           <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={i} className="flex space-x-12 group">
                   <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-infrix-orange rotate-45" />
                      {i !== milestones.length - 1 && <div className="w-px h-full bg-gray-200 mt-4" />}
                   </div>
                   <div className="pb-12">
                      <span className="font-display font-extrabold text-3xl text-infrix-orange leading-none block">{m.year}</span>
                      <p className="text-gray-600 mt-3 text-sm font-body font-normal leading-relaxed">{m.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
