import { getSupabase } from './supabase';
import { getCurrentEmpresaSlug } from '../data/empresas';
import type { Postulacion } from '../types/postulacion';

export type PostulacionFormData = {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  ciudad: string;
  profesion: string;
  mensaje: string;
};

const CV_BUCKET = 'cvs';

const ACCEPTED_CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const MAX_CV_SIZE_BYTES = 1 * 1024 * 1024;

function validateCvFile(cvFile: File): void {
  if (!ACCEPTED_CV_TYPES.includes(cvFile.type)) {
    throw new Error('Formato no válido. Solo se aceptan archivos PDF, DOC o DOCX.');
  }

  if (cvFile.size > MAX_CV_SIZE_BYTES) {
    throw new Error('El archivo supera el límite de 1 MB. Comprima o reduzca su currículum.');
  }
}

async function getEmpresaIdBySlug(slug: string): Promise<string> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('empresas')
    .select('id')
    .eq('slug', slug)
    .single();

  if (error || !data) {
    throw new Error('No se pudo identificar la empresa. Contacte al administrador.');
  }

  return data.id;
}

export async function submitPostulacion(formData: PostulacionFormData, cvFile: File): Promise<void> {
  validateCvFile(cvFile);

  const supabase = getSupabase();
  const empresaId = await getEmpresaIdBySlug(getCurrentEmpresaSlug());

  const extension = cvFile.name.split('.').pop()?.toLowerCase() ?? 'pdf';
  const filePath = `${getCurrentEmpresaSlug()}/${Date.now()}-${crypto.randomUUID()}.${extension}`;

  const { error: uploadError } = await supabase.storage
    .from(CV_BUCKET)
    .upload(filePath, cvFile, {
      contentType: cvFile.type,
      upsert: false
    });

  if (uploadError) {
    throw new Error('No se pudo subir el currículum. Intente nuevamente.');
  }

  const { error: insertError } = await supabase.from('postulaciones').insert({
    nombre: formData.nombre.trim(),
    apellidos: formData.apellidos.trim(),
    email: formData.email.trim(),
    telefono: formData.telefono.trim(),
    ciudad: formData.ciudad.trim(),
    profesion: formData.profesion.trim(),
    mensaje: formData.mensaje.trim() || null,
    cv_path: filePath,
    empresa_id: empresaId
  });

  if (insertError) {
    await supabase.storage.from(CV_BUCKET).remove([filePath]);
    throw new Error('No se pudo registrar la postulación. Intente nuevamente.');
  }
}

export async function fetchPostulaciones(): Promise<Postulacion[]> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('postulaciones')
    .select('*, empresas(slug, nombre)')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error('No se pudieron cargar las postulaciones.');
  }

  return (data ?? []) as Postulacion[];
}

export async function getCvSignedUrl(cvPath: string): Promise<string> {
  const supabase = getSupabase();
  const { data, error } = await supabase.storage
    .from(CV_BUCKET)
    .createSignedUrl(cvPath, 3600);

  if (error || !data?.signedUrl) {
    throw new Error('No se pudo obtener el enlace del CV.');
  }

  return data.signedUrl;
}
