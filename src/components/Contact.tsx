import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contacto" className="relative section-padding bg-[var(--navy-deepest)] overflow-hidden">
      {/* Watermark Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-black text-white/[0.02] tracking-[0.2em] display-font uppercase">
          INFRIX
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-8"
        >
          <div>
            <span className="text-[var(--blue-accent)] font-semibold uppercase tracking-[5px] text-xs">
              Contacto
            </span>
            <h2 className="text-5xl md:text-7xl text-white mt-4 display-font">
              HAGAMOS <br /> <span className="text-[var(--blue-accent)]">REALIDAD</span> TU PROYECTO
            </h2>
            <div className="vertical-accent h-16 mt-8 mx-auto" />
          </div>

          <p className="text-[var(--gray-text)] text-xl leading-relaxed">
            Estamos listos para asesorarte en tu próxima obra. Solicita una cotización 
            personalizada y descubre por qué somos el socio estratégico ideal.
          </p>

          <div className="flex flex-col items-center space-y-6 pt-8">
            <a
              href="https://wa.me/519XXXXXXXX" // Update with real number if available
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xl px-12 py-5"
            >
              Cotizar Ahora
            </a>
            <a
              href="mailto:contacto@infrix.pe"
              className="text-white/60 hover:text-[var(--blue-accent)] transition-colors duration-300 font-medium tracking-widest-2 uppercase text-xs"
            >
              contacto@infrix.pe
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
