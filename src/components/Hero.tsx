import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Counter from './Counter';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-infrix-black overflow-hidden pt-20">
      {/* Restored Dark Background with Image Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-[#003B5C]/20 to-black"></div>
      
      <div
        className="absolute inset-0 opacity-30 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Content */}
          <div className="space-y-8 md:space-y-12 text-center lg:text-left">
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start">
               <span className="w-8 md:w-12 h-[2px] bg-[#0F8ACB] mr-4"></span>
               <span className="text-white/60 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">
                 Ingeniería de Precisión
               </span>
            </motion.div>

            <div className="space-y-4 md:space-y-6">
              <motion.h1 
                variants={itemVariants} 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] lg:leading-[0.9] uppercase tracking-tighter"
              >
                Construimos<br className="hidden sm:block"/> el <span className="text-[#0F8ACB]">Futuro</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants} 
                className="text-white/40 text-lg md:text-xl lg:text-2xl font-light max-w-xl mx-auto lg:ml-0 leading-relaxed px-4 lg:px-0"
              >
                Soluciones integrales de construcción para los sectores <span className="text-white font-semibold italic">minero, industrial y comercial</span> del Perú.
              </motion.p>
            </div>

            {/* Stats showing up on mobile too, but centered */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-x-4 gap-y-6 py-8 border-y lg:border-y-0 lg:border-t border-white/10 lg:pt-12">
              {[
                '10+ años de trayectoria',
                'Estándares NFPA y NEC',
                'Certificación ISO 9001',
                'Soporte Técnico 24/7'
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start space-x-2 text-[9px] font-black text-white/50 uppercase tracking-widest text-center lg:text-left">
                  <div className="w-1.5 h-1.5 bg-[#0F8ACB] rounded-full shrink-0"></div>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4 items-center justify-center lg:justify-start">
              <Link
                to="/contacto"
                className="group w-full sm:w-auto inline-flex items-center justify-center bg-[#0F8ACB] hover:bg-white hover:text-[#003B5C] text-white px-8 md:px-12 py-5 md:py-6 text-xs md:text-sm font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl hover:shadow-[#0F8ACB]/30 active:scale-95"
              >
                Solicitar Cotización
                <ArrowRight className="ml-4 transform group-hover:translate-x-2 transition-transform duration-500" size={20} />
              </Link>
              <Link
                to="/proyectos"
                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/10 hover:border-[#0F8ACB] text-white hover:text-white px-8 md:px-12 py-5 md:py-6 text-xs md:text-sm font-black uppercase tracking-[0.2em] transition-all duration-500 backdrop-blur-sm"
              >
                Portafolio
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Geometric Architecture composition - Adjusted for Mobile Visibility */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" as const, delay: 0.4 } }
            }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative aspect-square sm:aspect-video lg:aspect-square w-full max-w-lg mx-auto">
               {/* Main Geometric Frame */}
               <div className="absolute top-0 right-0 w-[90%] h-[90%] border border-white/10 p-2 md:p-4">
                  <div className="w-full h-full overflow-hidden relative">
                    <img 
                       src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                       alt="Arquitectura Interior"
                       className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
               </div>
               
               {/* Floating Info Box - Visible on all screens, adjusted size */}
               <div className="absolute bottom-5 left-0 md:bottom-10 bg-white p-6 md:p-12 shadow-2xl z-10 transition-transform duration-500 hover:-translate-y-2">
                  <div className="text-[#003B5C] text-3xl md:text-5xl font-black leading-none mb-1 md:mb-2">
                    <Counter value={500} suffix="+" />
                  </div>
                  <div className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#0F8ACB] mb-3 md:mb-6">Proyectos Ejecutados</div>
                  <div className="w-8 md:w-12 h-[2px] md:h-[3px] bg-[#003B5C]"></div>
               </div>

               {/* Geometric Shapes - Only on desktop */}
               <div className="absolute -top-6 -right-6 w-16 md:w-32 h-16 md:h-32 border-[1px] border-[#0F8ACB] opacity-50 z-0 hidden sm:block"></div>
            </div>

            {/* Sector Tags - Better positioning for mobile */}
            <div className="absolute top-10 -right-4 lg:-right-10 flex flex-col gap-2 md:gap-4 scale-75 md:scale-100 origin-right">
               {['Minería', 'Industria', 'Residencial'].map((sector, i) => (
                 <div key={i} className="bg-black/40 backdrop-blur-lg px-4 md:px-8 py-2 md:py-4 border-l-4 border-[#0F8ACB] border-r border-t border-b border-white/10">
                    <span className="text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest">{sector}</span>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative vertical line */}
      <div className="absolute left-[50%] top-0 w-[1px] h-full bg-white/5 hidden lg:block"></div>
    </section>
  );
}
