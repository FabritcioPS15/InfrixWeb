import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import Counter from '../components/Counter';
import CTABanner from '../components/CTABanner';

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
    <div className="bg-navy-deep">
      <PageHero 
        title="QUIÉNES SOMOS" 
        subtitle="Identidad" 
        watermark="NOSOTROS"
      />

      {/* Story Section */}
      <section className="section-padding py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl text-white font-display tracking-widest leading-none">
                 TRADICIÓN E <span className="text-accent">INNOVACIÓN</span>
              </h2>
              <div className="w-12 h-1 bg-accent" />
            </div>
            <p className="text-steel-light text-lg font-body font-light leading-relaxed">
               En INFRIX, entendemos que la construcción es el cimiento del progreso. 
               Desde nuestra fundación, nos hemos dedicado a transformar desafíos técnicos en 
               infraestructuras sólidas, fusionando la experiencia tradicional con las 
               últimas metodologías digitales.
            </p>
            <p className="text-steel text-sm font-body font-light leading-relaxed">
               Nuestra misión es proporcionar soluciones de ingeniería que excedan las expectativas de nuestros clientes, 
               priorizando siempre la seguridad, la puntualidad y la eficiencia presupuestaria.
            </p>
          </div>
          <div className="relative">
             <div className="bg-navy-light aspect-video flex items-center justify-center industrial-border diagonal-pattern">
                <span className="text-accent/20 font-display text-4xl tracking-widest">INGENIERIA DE DETALLE</span>
             </div>
             <div className="absolute -bottom-6 -right-6 bg-accent p-8 hidden md:block shadow-2xl">
                <p className="text-white font-display text-2xl tracking-widest">LIMA - PERÚ</p>
             </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-navy py-24 px-6 md:px-12 lg:px-24 border-y border-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-accent/20 border border-accent/20">
            {values.map((v, i) => (
              <div key={i} className="bg-navy p-10 space-y-6 hover:bg-navy-light transition-colors duration-300">
                <h3 className="text-accent font-display text-xl tracking-widest">{v.title}</h3>
                <p className="text-steel-light text-xs font-body font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Badge with Counter */}
      <section className="py-24 px-6 bg-navy-deep">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-navy-light p-16 md:p-24 border border-accent/20 relative overflow-hidden text-center diagonal-pattern w-full max-w-2xl"
          >
             <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="flex flex-col items-center">
                  <Counter 
                    value={25} 
                    className="text-8xl md:text-[150px] text-accent font-display leading-none italic"
                  />
                  <span className="text-2xl text-white font-display tracking-[10px] uppercase -mt-4">
                    Años
                  </span>
                </div>
                <div className="w-24 h-px bg-accent/40" />
                <p className="text-white/80 font-body font-medium uppercase tracking-[4px] text-xs">
                  Proyectando el futuro industrial
                </p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
              <h2 className="text-4xl text-white font-display">NUESTRO <span className="text-accent">EQUIPO</span></h2>
              <div className="w-12 h-1 bg-accent mx-auto mt-6" />
           </div>
           <div className="grid md:grid-cols-3 gap-12">
              {team.map((m, i) => (
                <div key={i} className="flex flex-col items-center space-y-6 group">
                   <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center text-3xl font-display text-accent border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-xl">
                      {m.initials}
                   </div>
                   <div className="text-center">
                      <h4 className="text-white font-display text-xl tracking-widest">{m.name}</h4>
                      <p className="text-accent text-[10px] uppercase tracking-widest font-bold mt-2 font-body">{m.role}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-navy-light py-24 px-6 border-t border-accent/10">
        <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl text-white font-display mb-16 text-center tracking-widest">MÉTODOS Y HITOS</h2>
           <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={i} className="flex space-x-12 group">
                   <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-accent rotate-45" />
                      {i !== milestones.length - 1 && <div className="w-px h-full bg-accent/20 mt-4" />}
                   </div>
                   <div className="pb-12">
                      <span className="font-display text-3xl text-accent leading-none block">{m.year}</span>
                      <p className="text-steel-light mt-3 text-sm font-body font-light leading-relaxed">{m.text}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
