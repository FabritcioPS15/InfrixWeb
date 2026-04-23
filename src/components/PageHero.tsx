import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  watermark?: string;
}

const PageHero = ({
  title,
  subtitle,
  watermark = "INFRIX"
}: PageHeroProps) => {
  return (
    <section className="relative h-[45vh] flex items-center bg-infrix-navy overflow-hidden hero-grid border-b border-infrix-orange/20">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="font-display text-[12rem] md:text-[20vw] text-infrix-orange/[0.03] tracking-widest leading-none uppercase">
          {watermark}
        </span>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-infrix-orange/30" />
      <div className="absolute top-8 right-8 w-6 h-6 border-t border-r border-infrix-orange/30" />
      <div className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-infrix-orange/30" />
      <div className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-infrix-orange/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {subtitle && (
            <span className="text-infrix-orange text-[10px] tracking-[3px] uppercase mb-4 block font-bold">
              {subtitle}
            </span>
          )}
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-display font-extrabold leading-[1] uppercase">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? 'text-infrix-orange' : 'text-white'}>
                {word}{' '}
              </span>
            ))}
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
