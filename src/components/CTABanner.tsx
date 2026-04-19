import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface CTABannerProps {
  tag?: string;
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryLink?: string;
  ghostLabel?: string;
  ghostLink?: string;
}

const CTABanner = ({
  tag = "Trabajemos juntos",
  title = "¿PREPARADO PARA INICIAR TU OBRA?",
  body = "Ofrecemos soluciones integrales con ingeniería de detalle y máxima seguridad. Solicita una cotización hoy mismo.",
  primaryLabel = "Solicitar Cotización",
  primaryLink = "/contacto",
  ghostLabel = "Contáctanos",
  ghostLink = "/contacto"
}: CTABannerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass = (delay: string) => 
    `transition-all duration-700 ${delay} ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`;

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-6 md:px-16 bg-navy-deep overflow-hidden hero-grid border-t border-b border-accent/20"
    >
      {/* Large watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="font-display text-[12rem] md:text-[16rem] text-accent/[0.03] tracking-widest leading-none">
          INFRIX
        </span>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-accent/30" />
      <div className="absolute top-8 right-8 w-6 h-6 border-t border-r border-accent/30" />
      <div className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-accent/30" />
      <div className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-accent/30" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Top vertical accent bar */}
        <div className={`w-px h-24 bg-accent/40 mb-8 transition-all duration-1000 ${isVisible ? 'scale-y-100' : 'scale-y-0'} origin-top`} />

        <span className={animationClass('delay-0')}>
          <span className="text-accent text-xs tracking-[4px] uppercase font-body font-medium mb-6 block">
            {tag}
          </span>
        </span>

        <h2 className={`font-display text-5xl md:text-6xl lg:text-7xl tracking-wide text-offwhite leading-none mb-8 ${animationClass('delay-[150ms]')}`}>
          {title}
        </h2>

        {/* Divider line */}
        <div className={`w-16 h-0.5 bg-accent my-8 ${animationClass('delay-[250ms]')}`} />

        <p className={`text-steel-light font-body font-light text-lg leading-relaxed max-w-xl mb-10 ${animationClass('delay-[350ms]')}`}>
          {body}
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-10 w-full sm:w-auto ${animationClass('delay-[500ms]')}`}>
          <Link 
            to={primaryLink} 
            className="bg-accent hover:bg-accent-dark text-white px-10 py-4 text-sm tracking-[3px] uppercase font-semibold transition-all duration-300 text-center"
          >
            {primaryLabel}
          </Link>
          {ghostLabel && ghostLink && (
            <Link 
              to={ghostLink} 
              className="border border-steel/40 hover:border-accent text-steel-light hover:text-accent px-10 py-4 text-sm tracking-[3px] uppercase font-medium transition-all duration-300 text-center"
            >
              {ghostLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
