import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { LogOut, FileText, LayoutDashboard, ExternalLink } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { GRUPO_NOMBRE, EMPRESAS } from '../../data/empresas';

export default function AdminLayout() {
  const { signOut } = useAuth();
  const location = useLocation();

  const isEmpresaActive = (slug: string) =>
    location.pathname === `/admin/postulaciones/${slug}`;

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-widest font-display font-bold transition-colors ${
      isActive
        ? 'bg-infrix-orange text-white'
        : 'text-gray-300 hover:bg-white/5 hover:text-white'
    }`;

  return (
    <div className="min-h-screen bg-gray-100 font-body flex">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-infrix-navy text-white flex flex-col sticky top-0 h-screen">
        <div className="px-6 py-6 border-b border-white/10">
          <p className="text-[10px] uppercase tracking-[4px] text-infrix-orange font-display font-bold">
            {GRUPO_NOMBRE}
          </p>
          <h1 className="font-display text-lg font-extrabold uppercase tracking-widest mt-1">
            Panel Admin
          </h1>
        </div>

        <nav className="flex-1 py-6 space-y-1 overflow-y-auto">
          <NavLink to="/admin" end className={navLinkClass}>
            <LayoutDashboard size={16} />
            Dashboard
          </NavLink>

          <NavLink to="/admin/postulaciones" end className={navLinkClass}>
            <FileText size={16} />
            CVs Recibidos
          </NavLink>

          <div className="px-4 pt-5 pb-1">
            <p className="text-[9px] uppercase tracking-[3px] text-gray-500 font-display font-bold">
              Por empresa
            </p>
          </div>

          {EMPRESAS.map((empresa) => (
            <Link
              key={empresa.slug}
              to={`/admin/postulaciones/${empresa.slug}`}
              className={`flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-widest font-display font-bold transition-colors ${
                isEmpresaActive(empresa.slug)
                  ? 'bg-infrix-orange text-white'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span
                className="w-2.5 h-2.5 shrink-0"
                style={{ backgroundColor: empresa.accent }}
              />
              {empresa.nombre}
            </Link>
          ))}
        </nav>

        <div className="px-4 py-4 border-t border-white/10 space-y-1">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-widest font-display font-bold text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
          >
            <ExternalLink size={16} />
            Ver sitio
          </a>
          <button
            onClick={() => signOut()}
            className="w-full flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-widest font-display font-bold text-gray-300 hover:bg-red-500/20 hover:text-red-300 transition-colors"
          >
            <LogOut size={16} />
            Salir
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
