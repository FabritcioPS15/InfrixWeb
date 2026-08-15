import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Users, ArrowRight, Calendar, Briefcase } from 'lucide-react';
import { fetchPostulaciones } from '../../lib/postulaciones';
import { EMPRESAS } from '../../data/empresas';
import type { Postulacion } from '../../types/postulacion';

function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat('es-PE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(new Date(dateStr));
}

export default function AdminDashboardPage() {
  const [postulaciones, setPostulaciones] = useState<Postulacion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPostulaciones()
      .then(setPostulaciones)
      .catch((err) => setError(err instanceof Error ? err.message : 'Error al cargar'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-infrix-navy font-display text-sm uppercase tracking-widest">
          Cargando dashboard...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 p-8 text-center">
        <p className="text-red-600 font-body">{error}</p>
      </div>
    );
  }

  const recientes = postulaciones.slice(0, 6);

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl text-infrix-navy font-display font-extrabold uppercase tracking-widest">
          Dashboard
        </h2>
        <p className="text-gray-500 font-body mt-2">
          Resumen de postulaciones del grupo {EMPRESAS[0]?.grupo ?? 'KREA & TERRA HUB'}.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Link
          to="/admin/postulaciones"
          className="bg-infrix-navy text-white p-6 border shadow-lg hover:bg-infrix-navy/95 transition-colors"
        >
          <p className="text-[10px] uppercase tracking-widest text-infrix-orange font-display font-bold">
            Total CVs
          </p>
          <p className="text-4xl font-display font-extrabold mt-2">{postulaciones.length}</p>
        </Link>

        {EMPRESAS.map((empresa) => {
          const count = postulaciones.filter((p) => p.empresas?.slug === empresa.slug).length;
          return (
            <Link
              key={empresa.slug}
              to={`/admin/postulaciones/${empresa.slug}`}
              className="bg-white p-6 border border-gray-100 shadow-lg hover:border-infrix-orange/40 transition-colors"
            >
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-display font-bold flex items-center gap-2">
                <span className="w-2 h-2" style={{ backgroundColor: empresa.accent }} />
                {empresa.nombre}
              </p>
              <p className="text-4xl font-display font-extrabold mt-2" style={{ color: empresa.accent }}>
                {count}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="bg-white border border-gray-100 shadow-lg">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <FileText className="text-infrix-orange" size={18} />
            <h3 className="font-display text-lg font-bold text-infrix-navy uppercase tracking-widest">
              Últimas postulaciones
            </h3>
          </div>
          <Link
            to="/admin/postulaciones"
            className="flex items-center gap-2 text-infrix-orange text-xs font-display font-bold uppercase tracking-widest hover:text-infrix-navy transition-colors"
          >
            Ver todas
            <ArrowRight size={14} />
          </Link>
        </div>

        {recientes.length === 0 ? (
          <div className="p-16 text-center">
            <Users className="mx-auto text-gray-300 mb-4" size={48} />
            <p className="text-gray-500 font-body">Aún no hay postulaciones registradas.</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-100">
            {recientes.map((p) => (
              <li key={p.id}>
                <Link
                  to="/admin/postulaciones"
                  className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-5 hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <p className="font-display font-bold text-infrix-navy uppercase tracking-wide">
                      {p.nombre} {p.apellidos}
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-500 font-body mt-1">
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={13} className="text-infrix-orange" />
                        {p.profesion}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-infrix-orange" />
                        {formatDate(p.created_at)}
                      </span>
                    </div>
                  </div>
                  {p.empresas && (
                    <span
                      className="inline-flex items-center px-3 py-1 text-[10px] font-display font-bold uppercase tracking-widest text-white shrink-0"
                      style={{ backgroundColor: EMPRESAS.find((e) => e.slug === p.empresas?.slug)?.accent ?? '#1B3A5C' }}
                    >
                      {p.empresas.nombre}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
