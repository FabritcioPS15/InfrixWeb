import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Centro Comercial Plaza Norte',
    category: 'Retail',
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Instalaciones eléctricas y acabados interiores',
  },
  {
    title: 'Complejo Residencial Las Palmeras',
    category: 'Residencial',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Drywall y gasfitería integral',
  },
  {
    title: 'Oficinas Corporativas San Isidro',
    category: 'Corporativo',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Mobiliario y sistemas electromecánicos',
  },
  {
    title: 'Planta Industrial Callao',
    category: 'Industrial',
    image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Estructuras metálicas y obra civil',
  },
  {
    title: 'Hotel Boutique Miraflores',
    category: 'Hospitalidad',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Acabados arquitectónicos premium',
  },
  {
    title: 'Centro Educativo Villa El Salvador',
    category: 'Educación',
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Instalaciones completas y estructuras',
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-infrix-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-infrix-blue-bright text-sm font-semibold tracking-widest uppercase">
            Nuestros Proyectos
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-infrix-dark">
            Experiencia Comprobada en
            <span className="block text-infrix-blue-bright mt-2">Proyectos de Alto Nivel</span>
          </h2>
          <p className="mt-6 text-infrix-gray text-lg max-w-3xl mx-auto leading-relaxed">
            Hemos participado en proyectos de diversos sectores, siempre manteniendo nuestro compromiso con la calidad y excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden border border-infrix-gray/30 hover:border-infrix-blue-bright/50 transition-all duration-300 hover:shadow-xl hover:shadow-infrix-blue-bright/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-infrix-blue-bright text-white text-xs font-semibold px-3 py-1.5 rounded">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-infrix-dark mb-2 group-hover:text-infrix-blue-bright transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-infrix-gray text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <button className="flex items-center text-infrix-blue-bright hover:text-infrix-dark text-sm font-semibold transition-colors duration-200">
                  Ver detalles
                  <ExternalLink size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
