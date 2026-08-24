import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { GRUPO_NOMBRE } from '../../data/empresas';

export default function AdminLoginPage() {
  const { session, loading, signIn, configured } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!loading && session) {
    return <Navigate to="/admin/postulaciones" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await signIn(email, password);
    } catch {
      setError('Credenciales incorrectas. Verifique su correo y contraseña.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full bg-white border border-gray-200 p-4 text-infrix-navy text-sm focus:border-infrix-orange outline-none transition-colors rounded-none placeholder:text-gray-400 font-body';

  return (
    <div className="min-h-screen bg-infrix-navy flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 diagonal-pattern opacity-10" />

      <div className="relative z-10 w-full max-w-md bg-white p-10 shadow-2xl border border-gray-100">
        <div className="text-center mb-10 space-y-2">
          <p className="text-[10px] uppercase tracking-[4px] text-infrix-orange font-display font-bold">
            {GRUPO_NOMBRE}
          </p>
          <h1 className="text-2xl text-infrix-navy font-display font-extrabold uppercase tracking-widest">
            Acceso Admin
          </h1>
          <p className="text-gray-500 text-sm font-body">
            Gestión centralizada de postulaciones y CVs
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!configured && (
            <div className="bg-amber-50 border border-amber-300 p-4 text-center">
              <p className="text-amber-800 text-sm font-bold font-display uppercase tracking-wider mb-1">⚠ Supabase no configurado</p>
              <p className="text-amber-700 text-xs font-body">
                Cree un archivo <code className="text-infrix-orange font-bold">.env</code> con las variables <code className="text-infrix-orange">VITE_SUPABASE_URL</code> y <code className="text-infrix-orange">VITE_SUPABASE_ANON_KEY</code>.
              </p>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[3px] text-gray-500 font-bold font-display">
              Correo
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@empresa.com"
              className={inputClass}
              disabled={!configured}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[3px] text-gray-500 font-bold font-display">
              Contraseña
            </label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={inputClass}
              disabled={!configured}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm font-body text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !configured}
            className="btn-primary w-full py-5 text-sm tracking-[4px] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'INGRESANDO...' : 'INGRESAR'}
          </button>
        </form>

        <div className="mt-8 bg-gray-50 border border-gray-100 p-5">
          <p className="text-[10px] uppercase tracking-[3px] text-gray-400 font-display font-bold mb-3">
            Acceso de ejemplo
          </p>
          <div className="space-y-2 text-sm font-body">
            <div className="flex items-center justify-between gap-4">
              <span className="text-gray-500">Correo</span>
              <code className="text-infrix-navy font-bold">admin@infrix.com</code>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-gray-500">Contraseña</span>
              <code className="text-infrix-navy font-bold">Infrix2026!</code>
            </div>
          </div>
          <p className="text-[11px] text-gray-400 font-body mt-3 leading-relaxed">
            Cree este usuario ejecutando el script <code className="text-infrix-orange">supabase/crear-admin-usuario.sql</code> en el SQL Editor de Supabase.
          </p>
        </div>
      </div>
    </div>
  );
}
