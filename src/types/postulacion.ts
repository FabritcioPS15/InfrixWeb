export type Postulacion = {
  id: string;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  ciudad: string;
  profesion: string;
  mensaje: string | null;
  cv_path: string;
  created_at: string;
  empresa_id: string;
  empresas: {
    slug: string;
    nombre: string;
  } | null;
};
