import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: Breadcrumb[];
}

export default function PageBanner({ title, breadcrumbs }: PageBannerProps) {
  return (
    <div className="relative bg-[#003B5C] h-[180px] md:h-[220px] mt-20 overflow-hidden flex flex-col justify-center border-b-[6px] border-[#0F8ACB]">
      {/* Mesh Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }}></div>

      {/* Decorative architectural/tech silhouette (subtle) */}
      <div className="absolute top-0 right-0 bottom-0 w-1/3 z-0 opacity-20 pointer-events-none hidden md:block">
        <svg viewBox="0 0 400 300" className="w-full h-full text-white fill-current">
          <path d="M400 300V0H250L300 100L200 200L150 300H400Z" />
          <path d="M100 300L250 150L300 300H100Z" opacity="0.5" />
        </svg>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003B5C] via-[#003B5C]/80 to-transparent z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 pb-10">
        {/* Breadcrumb - Placed at the very top */}
        <div className="w-full mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 text-xs md:text-sm">
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={index} className="inline-flex items-center">
                    {index > 0 && <ChevronRight size={14} className="text-white/40 mx-1" />}
                    {item.href && !isLast ? (
                      <Link 
                        to={item.href} 
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-[#0F8ACB] font-semibold tracking-widest">
                        {item.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>

        {/* Title Section */}
        <div className="flex items-center">
          <div className="w-2 h-10 md:h-14 bg-[#0F8ACB] mr-6"></div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
