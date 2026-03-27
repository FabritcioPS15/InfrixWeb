import { Award, Users, Target, Shield } from 'lucide-react';
import Counter from './Counter';

const values = [
  {
    icon: Award,
    title: 'Calidad',
    description: 'Compromiso con la excelencia en cada proyecto que realizamos.',
  },
  {
    icon: Users,
    title: 'Equipo Profesional',
    description: 'Personal altamente capacitado y con experiencia comprobada.',
  },
  {
    icon: Target,
    title: 'Precisión',
    description: 'Cumplimiento de plazos y especificaciones técnicas exactas.',
  },
  {
    icon: Shield,
    title: 'Seguridad',
    description: 'Protocolos rigurosos para garantizar la seguridad integral.',
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-infrix-blue-bright text-sm font-semibold tracking-widest uppercase">
              Sobre Nosotros
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-infrix-dark leading-tight">
              Líderes en
              <span className="block text-infrix-blue-bright mt-2">Ingeniería y Construcción</span>
            </h2>
            <div className="mt-6 space-y-4 text-infrix-gray leading-relaxed">
              <p>
                INFRIX es una empresa peruana especializada en brindar soluciones integrales de ingeniería y construcción, con más de 10 años de experiencia en el mercado nacional.
              </p>
              <p>
                Nuestro compromiso es entregar proyectos de la más alta calidad, cumpliendo con los estándares internacionales y superando las expectativas de nuestros clientes.
              </p>
              <p>
                Contamos con un equipo multidisciplinario de ingenieros, arquitectos y técnicos especializados que trabajan con tecnología de punta y metodologías probadas.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-infrix-light border border-infrix-blue/30 rounded-lg p-6">
                <div className="text-3xl font-bold text-infrix-blue-bright">
                  <Counter value={500} suffix="+" />
                </div>
                <div className="text-infrix-gray text-sm mt-2">Proyectos Ejecutados</div>
              </div>
              <div className="bg-infrix-light border border-infrix-blue/30 rounded-lg p-6">
                <div className="text-3xl font-bold text-infrix-blue-bright">
                  <Counter value={100} suffix="%" />
                </div>
                <div className="text-infrix-gray text-sm mt-2">Clientes Satisfechos</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-infrix-light border border-infrix-gray/30 rounded-lg p-6 hover:border-infrix-blue-bright/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-infrix-blue/20 rounded-lg flex items-center justify-center">
                      <Icon className="text-infrix-blue-bright" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-infrix-dark mb-2">{value.title}</h3>
                    <p className="text-infrix-gray text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
