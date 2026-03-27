import { CheckCircle2 } from 'lucide-react';
import Counter from './Counter';

export default function Experience() {
  const benefits = [
    'Más de 10 años de experiencia transformando espacios',
    'Mejoramos la distribución y funcionalidad de tu inmueble',
    'Aumentamos el valor comercial de tu propiedad',
    'Facilitamos la ejecución de obras seguras y eficientes',
    'Elevamos la calidad de vida de quienes lo habitan',
  ];

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Image */}
        <div 
          className="h-96 lg:h-auto min-h-[400px] w-full bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        >
          {/* Overlapping Stats Card on Image */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-8 text-center p-8 backdrop-blur-md bg-white/10 border border-white/20">
              <div className="space-y-1">
                <div className="text-4xl font-black text-white">
                  <Counter value={500} suffix="+" />
                </div>
                <div className="text-[10px] font-bold text-[#0F8ACB] uppercase tracking-widest">Proyectos</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-white">
                  <Counter value={100} suffix="%" />
                </div>
                <div className="text-[10px] font-bold text-[#0F8ACB] uppercase tracking-widest">Satisfechos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content block */}
        <div className="bg-[#003B5C] flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-20 lg:py-24">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">
            <Counter value={10} suffix="+" /> Años de Experiencia
          </h2>
          <p className="text-white/60 text-lg mb-12 leading-relaxed max-w-xl font-light italic">
            Combinamos creatividad, materiales de alta calidad y soluciones funcionales para garantizar espacios estéticos, cómodos y duraderos en todo el territorio nacional.
          </p>

          <div className="space-y-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle2 size={24} className="text-[#0F8ACB] flex-shrink-0 mt-0.5" />
                <span className="text-white font-bold uppercase text-xs tracking-wider">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
