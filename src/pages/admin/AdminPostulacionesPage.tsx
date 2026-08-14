import { useEffect, useMemo, useState } from 'react';
import {
  Search,
  Download,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
  Building2,
  FileText,
  X
} from 'lucide-react';
import { fetchPostulaciones, getCvSignedUrl } from '../../lib/postulaciones';
import { EMPRESAS, getEmpresaBySlug } from '../../data/empresas';
import type { Postulacion } from '../../types/postulacion';

function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat('es-PE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(dateStr));
}

function EmpresaBadge({ slug, nombre }: { slug: string; nombre: string }) {
  const empresa = getEmpresaBySlug(slug);
  return (
    <span
      className="inline-flex items-center px-3 py-1 text-[10px] font-display font-bold uppercase tracking-widest text-white"
      style={{ backgroundColor: empresa?.accent ?? '#1B3A5C' }}
    >
      {nombre}
    </span>
  );
}

export default function AdminPostulacionesPage() {
  const [postulaciones, setPostulaciones] = useState<Postulacion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [empresaFilter, setEmpresaFilter] = useState('all');
  const [selected, setSelected] = useState<Postulacion | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  useEffect(() => {
    fetchPostulaciones()
      .then(setPostulaciones)
      .catch((err) => setError(err instanceof Error ? err.message : 'Error al cargar'))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return postulaciones.filter((p) => {
      const matchesEmpresa =
        empresaFilter === 'all' || p.empresas?.slug === empresaFilter;
      const matchesSearch =
        !term ||
        `${p.nombre} ${p.apellidos} ${p.email} ${p.profesion} ${p.ciudad}`
          .toLowerCase()
          .includes(term);
      return matchesEmpresa && matchesSearch;
    });
  }, [postulaciones, search, empresaFilter]);

  const stats = useMemo(() => {
    const counts: Record<string, number> = { all: postulaciones.length };
    EMPRESAS.forEach((e) => {
      counts[e.slug] = postulaciones.filter((p) => p.empresas?.slug === e.slug).length;
    });
    return counts;
  }, [postulaciones]);

  const handleDownload = async (postulacion: Postulacion) => {
    setDownloadingId(postulacion.id);
    try {
      const url = await getCvSignedUrl(postulacion.cv_path);
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Error al descargar el CV');
    } finally {
      setDownloadingId(null);
    }
  };

  const inputClass =
    'w-full bg-white border border-gray-200 p-4 text-infrix-navy text-sm focus:border-infrix-orange outline-none transition-colors rounded-none placeholder:text-gray-400 font-body';

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-infrix-navy font-display text-sm uppercase tracking-widest">
          Cargando postulaciones...
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

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl text-infrix-navy font-display font-extrabold uppercase tracking-widest">
          CVs <span className="text-infrix-orange">Recibidos</span>
        </h2>
        <p className="text-gray-500 font-body mt-2">
          Postulaciones de todas las empresas del grupo en un solo lugar.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 border border-gray-100 shadow-lg">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-display font-bold">Total</p>
          <p className="text-3xl font-display font-extrabold text-infrix-navy mt-2">{stats.all}</p>
        </div>
        {EMPRESAS.map((empresa) => (
          <div key={empresa.slug} className="bg-white p-6 border border-gray-100 shadow-lg">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-display font-bold">
              {empresa.nombre}
            </p>
            <p className="text-3xl font-display font-extrabold mt-2" style={{ color: empresa.accent }}>
              {stats[empresa.slug] ?? 0}
            </p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre, email, profesión..."
            className={`${inputClass} pl-12`}
          />
        </div>
        <select
          value={empresaFilter}
          onChange={(e) => setEmpresaFilter(e.target.value)}
          className={`${inputClass} appearance-none`}
        >
          <option value="all">Todas las empresas</option>
          {EMPRESAS.map((e) => (
            <option key={e.slug} value={e.slug}>{e.nombre}</option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white border border-gray-100 p-16 text-center shadow-lg">
          <FileText className="mx-auto text-gray-300 mb-4" size={48} />
          <p className="text-gray-500 font-body">No hay postulaciones que coincidan con los filtros.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-gray-100 shadow-lg p-6 hover:border-infrix-orange/30 transition-all cursor-pointer"
              onClick={() => setSelected(p)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-display font-bold text-infrix-navy uppercase tracking-wide">
                      {p.nombre} {p.apellidos}
                    </h3>
                    {p.empresas && (
                      <EmpresaBadge slug={p.empresas.slug} nombre={p.empresas.nombre} />
                    )}
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-500 font-body">
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={14} className="text-infrix-orange" />
                      {p.profesion}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-infrix-orange" />
                      {p.ciudad}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-infrix-orange" />
                      {formatDate(p.created_at)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(p);
                  }}
                  disabled={downloadingId === p.id}
                  className="flex items-center justify-center gap-2 bg-infrix-orange text-white px-6 py-3 text-[10px] font-display font-bold uppercase tracking-widest hover:bg-infrix-navy transition-colors disabled:opacity-60 shrink-0"
                >
                  <Download size={14} />
                  {downloadingId === p.id ? 'Abriendo...' : 'Ver CV'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-start justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-2xl font-display font-extrabold text-infrix-navy uppercase tracking-wide">
                    {selected.nombre} {selected.apellidos}
                  </h3>
                  {selected.empresas && (
                    <EmpresaBadge slug={selected.empresas.slug} nombre={selected.empresas.nombre} />
                  )}
                </div>
                <p className="text-gray-400 text-xs font-display uppercase tracking-widest">
                  Postulación recibida el {formatDate(selected.created_at)}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-400 hover:text-infrix-navy transition-colors p-1"
                aria-label="Cerrar"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Mail className="text-infrix-orange shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-display font-bold">Email</p>
                    <a href={`mailto:${selected.email}`} className="text-infrix-navy font-body font-bold hover:text-infrix-orange transition-colors">
                      {selected.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-infrix-orange shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-display font-bold">Teléfono</p>
                    <a href={`tel:${selected.telefono}`} className="text-infrix-navy font-body font-bold hover:text-infrix-orange transition-colors">
                      {selected.telefono}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-infrix-orange shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-display font-bold">Ciudad</p>
                    <p className="text-infrix-navy font-body font-bold">{selected.ciudad}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="text-infrix-orange shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-display font-bold">Profesión</p>
                    <p className="text-infrix-navy font-body font-bold">{selected.profesion}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:col-span-2">
                  <Building2 className="text-infrix-orange shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-display font-bold">Empresa destino</p>
                    <p className="text-infrix-navy font-body font-bold">{selected.empresas?.nombre ?? '—'}</p>
                  </div>
                </div>
              </div>

              {selected.mensaje && (
                <div className="bg-gray-50 p-6 border border-gray-100">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-display font-bold mb-2">
                    Mensaje adicional
                  </p>
                  <p className="text-gray-600 font-body leading-relaxed whitespace-pre-wrap">
                    {selected.mensaje}
                  </p>
                </div>
              )}

              <button
                onClick={() => handleDownload(selected)}
                disabled={downloadingId === selected.id}
                className="btn-primary w-full py-5 text-sm tracking-[4px] flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <Download size={16} />
                {downloadingId === selected.id ? 'ABRIENDO CV...' : 'DESCARGAR CURRÍCULUM'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
