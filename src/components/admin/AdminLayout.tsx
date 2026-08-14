import { Outlet, Link, useLocation } from 'react-router-dom';
import { LogOut, FileText } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { GRUPO_NOMBRE } from '../../data/empresas';

export default function AdminLayout() {
  const { signOut } = useAuth();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 font-body">
      <header className="bg-infrix-navy text-white border-b border-infrix-orange/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[4px] text-infrix-orange font-display font-bold">
              {GRUPO_NOMBRE}
            </p>
            <h1 className="font-display text-xl font-extrabold uppercase tracking-widest">
              Panel de Postulaciones
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/admin/postulaciones"
              className={`flex items-center gap-2 text-xs uppercase tracking-widest font-display font-bold transition-colors ${
                location.pathname.includes('/postulaciones')
                  ? 'text-infrix-orange'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <FileText size={16} />
              CVs Recibidos
            </Link>
            <button
              onClick={() => signOut()}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-display font-bold text-gray-300 hover:text-white transition-colors"
            >
              <LogOut size={16} />
              Salir
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
