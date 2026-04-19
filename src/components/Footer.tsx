import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-accent/10 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Logo Left */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Link to="/" className="block">
            <img 
              src="/assets/InfrixPng.png" 
              alt="INFRIX Logo" 
              className="h-16 w-auto object-contain brightness-0 invert" 
            />
          </Link>
          <span className="text-[10px] uppercase tracking-widest text-steel-light">
            Ingeniería de precisión
          </span>
        </div>

        {/* Copyright Center */}
        <div className="text-center">
          <p className="text-[10px] text-steel uppercase tracking-widest-2">
            © {currentYear} INFRIX CONSTRUCKT S.A.C. TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>

        {/* Links Right */}
        <div className="flex items-center space-x-8">
          <Link
            to="/nosotros"
            className="text-[10px] uppercase tracking-widest text-steel-light hover:text-accent transition-colors"
          >
            Nosotros
          </Link>
          <Link
            to="/servicios"
            className="text-[10px] uppercase tracking-widest text-steel-light hover:text-accent transition-colors"
          >
            Servicios
          </Link>
          <Link
            to="/contacto"
            className="text-[10px] uppercase tracking-widest text-steel-light hover:text-accent transition-colors"
          >
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
