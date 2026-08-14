import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, X, Briefcase, Users, Award } from 'lucide-react';
import PageHero from '../components/PageHero';
import { isSupabaseConfigured } from '../lib/supabase';
import { submitPostulacion } from '../lib/postulaciones';

const ACCEPTED_CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const MAX_CV_SIZE_MB = 1;

const benefits = [
  {
    icon: <Briefcase size={20} />,
    title: 'Proyectos de Escala',
    desc: 'Participa en obras industriales, mineras y comerciales de alto impacto.'
  },
  {
    icon: <Users size={20} />,
    title: 'Equipo Multidisciplinario',
    desc: 'Trabaja junto a profesionales senior con metodología BIM y estándares ISO.'
  },
  {
    icon: <Award size={20} />,
    title: 'Crecimiento Profesional',
    desc: 'Oportunidades de desarrollo, capacitación continua y estabilidad laboral.'
  }
];

export default function TrabajaConNosotrosPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    ciudad: '',
    profesion: '',
    mensaje: ''
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateAndSetCv = (file: File | null) => {
    if (!file) return;

    if (!ACCEPTED_CV_TYPES.includes(file.type)) {
      setCvError('Formato no válido. Solo se aceptan archivos PDF, DOC o DOCX.');
      setCvFile(null);
      return;
    }

    if (file.size > MAX_CV_SIZE_MB * 1024 * 1024) {
      setCvError(`El archivo supera el límite de ${MAX_CV_SIZE_MB} MB.`);
      setCvFile(null);
      return;
    }

    setCvError('');
    setCvFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateAndSetCv(e.target.files?.[0] ?? null);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    validateAndSetCv(e.dataTransfer.files?.[0] ?? null);
  };

  const removeCv = () => {
    setCvFile(null);
    setCvError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!cvFile) {
      setCvError('Debe adjuntar su currículum para continuar.');
      return;
    }

    if (!isSupabaseConfigured()) {
      setSubmitError('El servicio de postulaciones no está configurado. Contacte al administrador.');
      return;
    }

    setIsSubmitting(true);

    try {
      await submitPostulacion(formData, cvFile);
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Ocurrió un error al enviar la postulación.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      ciudad: '',
      profesion: '',
      mensaje: ''
    });
    setCvFile(null);
    setCvError('');
    setSubmitError('');
    setSubmitted(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const inputClass =
    'w-full bg-gray-50 border border-gray-200 p-5 text-infrix-navy text-sm focus:border-infrix-orange outline-none transition-colors rounded-none placeholder:text-gray-400 font-body';
  const labelClass = 'text-[10px] uppercase tracking-[3px] text-gray-500 font-bold font-display';

  return (
    <div className="bg-white min-h-screen">
      <PageHero
        title="ÚNETE AL EQUIPO"
        subtitle="Trabaja con Nosotros"
        watermark="CARRERAS"
      />

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gray-50 p-12 border border-gray-100 text-center space-y-8 shadow-2xl relative overflow-hidden"
              >
                <div className="w-20 h-20 bg-infrix-orange/10 text-infrix-orange rounded-full flex items-center justify-center mx-auto mb-4 border border-infrix-orange/20 shadow-xl relative z-10">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="space-y-4 relative z-10">
                  <h3 className="text-4xl text-infrix-navy font-display font-extrabold tracking-widest leading-none">
                    POSTULACIÓN ENVIADA
                  </h3>
                  <p className="text-gray-600 font-body font-normal text-lg">
                    Hemos recibido su información. Nuestro equipo de recursos humanos revisará su perfil y se comunicará con usted si su experiencia coincide con nuestras vacantes.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="text-infrix-orange uppercase text-[10px] font-bold tracking-[4px] border-b-2 border-infrix-orange/30 hover:border-infrix-orange transition-all pb-1 relative z-10"
                >
                  Enviar otra postulación
                </button>
                <div className="absolute top-0 right-0 w-full h-full diagonal-pattern opacity-5" />
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 bg-white p-10 border border-gray-100 shadow-2xl">
                <div className="space-y-2 pb-2 border-b border-gray-100">
                  <h3 className="text-xl text-infrix-navy font-display font-bold uppercase tracking-widest">
                    Datos Personales
                  </h3>
                  <p className="text-gray-500 text-sm font-body">
                    Complete sus datos y adjunte su currículum vitae para postular.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className={labelClass}>Nombres</label>
                    <input
                      required
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ingrese sus nombres"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className={labelClass}>Apellidos</label>
                    <input
                      required
                      type="text"
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleChange}
                      placeholder="Ingrese sus apellidos"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className={labelClass}>Correo Electrónico</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className={labelClass}>Teléfono</label>
                    <input
                      required
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+51"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className={labelClass}>Ciudad</label>
                    <input
                      required
                      type="text"
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleChange}
                      placeholder="Ej. Lima, Arequipa..."
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className={labelClass}>Profesión</label>
                    <input
                      required
                      type="text"
                      name="profesion"
                      value={formData.profesion}
                      onChange={handleChange}
                      placeholder="Ej. Ingeniero Civil, Arquitecto..."
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className={labelClass}>Currículum Vitae</label>
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed p-8 text-center cursor-pointer transition-colors ${
                      cvError
                        ? 'border-red-300 bg-red-50'
                        : cvFile
                          ? 'border-infrix-orange/50 bg-infrix-orange/5'
                          : 'border-gray-200 bg-gray-50 hover:border-infrix-orange/40'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {cvFile ? (
                      <div className="flex items-center justify-center gap-4">
                        <FileText className="text-infrix-orange shrink-0" size={32} />
                        <div className="text-left">
                          <p className="text-infrix-navy font-body font-bold text-sm">{cvFile.name}</p>
                          <p className="text-gray-400 text-xs font-body">
                            {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeCv();
                          }}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="Eliminar archivo"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <Upload className="mx-auto text-infrix-orange" size={36} />
                        <div>
                          <p className="text-infrix-navy font-display font-bold text-sm uppercase tracking-widest">
                            Arrastre su CV aquí o haga clic para seleccionar
                          </p>
                          <p className="text-gray-400 text-xs font-body mt-2">
                            PDF, DOC o DOCX — Máximo {MAX_CV_SIZE_MB} MB
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {cvError && (
                    <p className="text-red-500 text-xs font-body">{cvError}</p>
                  )}
                </div>

                <div className="space-y-3">
                  <label className={labelClass}>Mensaje Adicional (Opcional)</label>
                  <textarea
                    rows={4}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntenos brevemente sobre su experiencia o disponibilidad..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {submitError && (
                  <p className="text-red-500 text-sm font-body text-center">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-6 text-sm tracking-[5px] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'ENVIANDO...' : 'ENVIAR POSTULACIÓN'}
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="bg-infrix-navy p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-display font-extrabold uppercase tracking-widest">
                  ¿Por qué <span className="text-infrix-orange">INFRIX</span>?
                </h3>
                <p className="text-gray-300 font-body text-sm leading-relaxed">
                  Buscamos talento apasionado por la construcción de calidad. Si comparte nuestros valores de precisión, integridad e innovación, queremos conocerle.
                </p>
              </div>
              <div className="absolute inset-0 diagonal-pattern opacity-10" />
            </div>

            <div className="grid sm:grid-cols-1 gap-6">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-6 bg-white p-8 border border-gray-100 hover:border-infrix-orange/30 transition-all group shadow-lg"
                >
                  <div className="text-infrix-orange group-hover:scale-110 transition-transform shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <span className="block text-infrix-navy text-base font-body font-bold mb-1">
                      {benefit.title}
                    </span>
                    <span className="text-gray-500 text-sm font-body leading-relaxed">
                      {benefit.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-[10px] uppercase tracking-[0.6em] font-display font-bold">
          CONSTRUYENDO CARRERAS • INFRIX CONSTRUCCIÓN
        </p>
      </section>
    </div>
  );
}
