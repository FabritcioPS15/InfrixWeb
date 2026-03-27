import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../../components/PageBanner';
import PageTransition from '../../components/PageTransition';

export default function PinturaPage() {
  const details = [
    'Pintura industrial de alto tráfico',
    'Recubrimientos epóxicos para pisos',
    'Pintura decorativa especializada',
    'Tratamiento de superficies metálicas',
    'Acabados en látex y esmaltes',
    'Aplicación técnica certificada',
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white pb-32">
        <PageBanner 
          title="Pintura & Revestimiento" 
          breadcrumbs={[
            { label: 'Inicio', href: '/' },
            { label: 'Servicios', href: '/servicios' },
            { label: 'Pintura', href: '/servicios/pintura-revestimiento' }
          ]}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Standardized Intro */}
          <div className="pt-24 mb-20">
            <h2 className="text-[#003B5C] text-xs font-bold tracking-[0.3em] uppercase mb-6 flex items-center">
              <span className="w-10 h-[2px] bg-[#0F8ACB] mr-4"></span>
              Recubrimientos Técnicos
            </h2>
            <p className="text-gray-400 text-2xl md:text-3xl font-light max-w-4xl leading-snug">
              Soluciones de <span className="text-[#003B5C] font-semibold italic">alto desempeño</span> y acabados de precisión para la protección y estética de superficies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-black text-[#003B5C] mb-8 uppercase tracking-tight leading-tight">
                Protección y Estética Duradera
              </h3>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                Utilizamos sistemas de recubrimiento industrial y decorativo con materiales de última generación. Garantizamos una aplicación técnica que asegura durabilidad y un acabado impecable en cada metro cuadrado.
              </p>
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                {details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#0F8ACB] shrink-0 mt-1" size={18} />
                    <span className="text-[#003B5C] text-sm font-bold uppercase tracking-tight">{detail}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contacto?service=pintura-revestimiento"
                className="inline-flex items-center bg-[#003B5C] hover:bg-[#0F8ACB] text-white px-10 py-5 text-xs font-black uppercase tracking-[0.2em] transition-all shadow-xl"
              >
                Solicitar Cotización <ArrowRight className="ml-3" size={18} />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-square bg-gray-100 overflow-hidden shadow-2xl relative group rounded-[40px]">
                <img 
                   src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?q=80&w=1200&auto=format&fit=crop" 
                  alt="Pintura Industrial" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

