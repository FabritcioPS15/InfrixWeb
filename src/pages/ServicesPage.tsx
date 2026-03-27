import { ArrowRight, Zap, Hammer, Droplet, FileText, Wrench, CheckCircle2, Home, Building2, Paintbrush } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import PageTransition from '../components/PageTransition';
import Counter from '../components/Counter';

const services = [
  {
    id: 1,
    slug: 'drywall-estructuras',
    name: 'Drywall & Estructuras',
    icon: Hammer,
    description: 'Construcción y diseño de estructuras en drywall para espacios modernos con acabados de primera calidad.',
    details: [
      'Tabiquería drywall de alta calidad',
      'Cielos rasos suspendidos modulares',
      'Estructuras de acero galvanizado',
      'Aislamiento acústico y térmico',
    ],
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    slug: 'melamina-muebles',
    name: 'Melamina y Muebles',
    icon: FileText,
    description: 'Diseño y fabricación de muebles personalizados en melamina, adaptados a espacios específicos.',
    details: [
      'Diseño personalizado de muebles',
      'Melamina de primera calidad',
      'Closets y espacios organizados',
      'Muebles de cocina a medida',
    ],
    image: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    slug: 'instalaciones-electricas',
    name: 'Instalaciones Eléctricas',
    icon: Zap,
    description: 'Servicios completos de instalaciones eléctricas residenciales y comerciales con estándares de seguridad.',
    details: [
      'Diseño eléctrico profesional',
      'Instalaciones residenciales',
      'Sistemas comerciales e industriales',
      'Automatización inteligente',
    ],
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    slug: 'gasfiteria-saneamiento',
    name: 'Gasfitería y Saneamiento',
    icon: Droplet,
    description: 'Instalación y mantenimiento de sistemas de gasfitería y saneamiento con garantía y profesionalismo.',
    details: [
      'Instalaciones de agua potable',
      'Sistemas de desagüe',
      'Tuberías de gas licuado',
      'Reparaciones y mantenimiento',
    ],
    image: 'https://images.pexels.com/photos/3476059/pexels-photo-3476059.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    slug: 'proyectos-civiles-electromecanicos',
    name: 'Proyectos Civiles y Electromecánicos',
    icon: Wrench,
    description: 'Proyectos civiles y electromecánicos con ingeniería especializada y calidad garantizada.',
    details: [
      'Diseño y cálculo estructural',
      'Excavaciones y fundaciones',
      'Construcción de estructuras',
      'Sistemas electromecánicos',
    ],
    image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    slug: 'acabados-arquitectura-interior',
    name: 'Acabados & Arquitectura Interior',
    icon: Home,
    description: 'Diseño y desarrollo de espacios interiores, incorporando acabados de calidad y soluciones creativas.',
    details: [
      'Acabados premium',
      'Diseño de interiores',
      'Revestimientos modernos',
      'Optimización de espacios',
    ],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 7,
    slug: 'campamentos-mineros-industriales',
    name: 'Campamentos Mineros e Industriales',
    icon: Building2,
    description: 'Soluciones modulares para campamentos mineros e industriales, enfocadas en seguridad y eficiencia.',
    details: [
      'Módulos habitacionales',
      'Infraestructura minera',
      'Logística de campamentos',
      'Instalaciones industriales',
    ],
    image: 'https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 8,
    slug: 'pintura-revestimiento',
    name: 'Pintura & Revestimiento',
    icon: Paintbrush,
    description: 'Pintura y recubrimientos de alto desempeño con durabilidad y acabados de precisión.',
    details: [
      'Pintura industrial y decorativa',
      'Recubrimientos epóxicos',
      'Tratamiento de superficies',
      'Acabados de larga duración',
    ],
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200',
  },
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white pb-24">
        <PageBanner 
          title="Nuestros Servicios" 
          breadcrumbs={[
            { label: 'Inicio', href: '/' },
            { label: 'Servicios', href: '/servicios' }
          ]}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Global Intro Style Standardized */}
          <div className="pt-24 mb-20">
            <h2 className="text-[#003B5C] text-xs font-bold tracking-[0.3em] uppercase mb-6 flex items-center">
              <span className="w-10 h-[2px] bg-[#0F8ACB] mr-4"></span>
              Excelencia en Servicios
            </h2>
            <p className="text-gray-400 text-2xl md:text-3xl font-light max-w-4xl leading-snug">
              Proveer de <span className="text-[#003B5C] font-semibold italic">soluciones integrales</span> con la máxima precisión técnica es el pilar de nuestra propuesta de valor.
            </p>
            <div className="flex flex-wrap gap-12 mt-12 border-t border-gray-100 pt-12">
              <div className="text-left">
                <span className="block text-4xl font-black text-[#003B5C]">
                  <Counter value={500} suffix="+" />
                </span>
                <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Proyectos Completados</span>
              </div>
              <div className="text-left">
                <span className="block text-4xl font-black text-[#003B5C]">
                  <Counter value={10} suffix="+" />
                </span>
                <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Años de Trayectoria</span>
              </div>
              <div className="text-left">
                <span className="block text-4xl font-black text-[#003B5C]">
                  <Counter value={100} suffix="%" />
                </span>
                <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Satisfacción Total</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative h-[500px] w-full bg-gray-900 rounded-[32px] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[#0F8ACB]/20"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-[#0F8ACB]/50 origin-bottom-right scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-90 z-0" />

                  <div className="absolute inset-0 p-10 flex flex-col justify-end z-20 text-white">
                    <div className="mb-6 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                      <Icon className="text-white" size={48} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl font-black mb-4 transition-transform duration-500 group-hover:-translate-y-2 leading-tight">
                      {service.name}
                    </h3>

                    <div className="max-h-0 group-hover:max-h-[300px] opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-700 ease-in-out">
                      <p className="text-white/90 text-sm mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-xs text-white/80 font-medium">
                            <CheckCircle2 className="mr-3 text-white" size={16} />
                            {detail}
                          </li>
                        ))}
                      </ul>

                      <div className="flex gap-4">
                        <Link
                          to={`/servicios/${service.slug}`}
                          className="flex-1 inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-4 py-3 rounded-2xl text-xs font-bold transition-all duration-300"
                        >
                          Conoce más
                        </Link>
                        <Link
                          to={`/contacto?service=${service.slug}`}
                          className="flex-1 inline-flex items-center justify-center bg-[#0F8ACB] hover:bg-[#0F8ACB]/90 text-white px-4 py-3 rounded-2xl text-xs font-bold transition-all duration-300 shadow-xl"
                        >
                          Cotizar
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-24 relative rounded-[40px] overflow-hidden bg-[#003B5C] p-12 md:p-16 text-white shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
            <div className="relative z-10 md:flex items-center justify-between gap-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-black mb-6">¿Preparado para iniciar tu obra?</h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  Ofrecemos soluciones integrales con ingeniería de detalle y máxima seguridad. Solicita una cotización hoy mismo.
                </p>
              </div>
              <Link
                to="/contacto?service=cotizacion-general"
                className="mt-8 md:mt-0 inline-flex items-center bg-[#0F8ACB] hover:bg-[#0F8ACB]/90 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300 shadow-xl hover:shadow-[#0F8ACB]/40 whitespace-nowrap"
              >
                Solicitar Cotización
                <ArrowRight className="ml-3" size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
