export type EmpresaSlug = 'infrix' | 'intallpa' | 'modiru';

export type Empresa = {
  slug: EmpresaSlug;
  nombre: string;
  grupo: string;
  accent: string;
};

export const GRUPO_NOMBRE = 'KREA & TERRA HUB';

export const EMPRESAS: Empresa[] = [
  { slug: 'infrix', nombre: 'INFRIX', grupo: GRUPO_NOMBRE, accent: '#DB6820' },
  { slug: 'intallpa', nombre: 'INTALLPA', grupo: GRUPO_NOMBRE, accent: '#2D6A4F' },
  { slug: 'modiru', nombre: 'MODIRU', grupo: GRUPO_NOMBRE, accent: '#1B3A5C' }
];

export const DEFAULT_EMPRESA_SLUG: EmpresaSlug = 'infrix';

export function getEmpresaBySlug(slug: string): Empresa | undefined {
  return EMPRESAS.find((e) => e.slug === slug);
}

export function getCurrentEmpresaSlug(): EmpresaSlug {
  const slug = import.meta.env.VITE_EMPRESA_SLUG as EmpresaSlug | undefined;
  return slug && getEmpresaBySlug(slug) ? slug : DEFAULT_EMPRESA_SLUG;
}
