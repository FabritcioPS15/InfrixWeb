-- Ejecutar en el SQL Editor de Supabase (Dashboard > SQL)
-- Extiende el esquema para multi-empresa y panel admin

create table if not exists public.empresas (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  nombre text not null,
  created_at timestamptz not null default now()
);

insert into public.empresas (slug, nombre) values
  ('infrix', 'INFRIX'),
  ('intallpa', 'INTALLPA'),
  ('modiru', 'MODIRU')
on conflict (slug) do nothing;

alter table public.postulaciones
  add column if not exists empresa_id uuid references public.empresas(id);

update public.postulaciones
set empresa_id = (select id from public.empresas where slug = 'infrix')
where empresa_id is null;

alter table public.postulaciones
  alter column empresa_id set not null;

alter table public.empresas enable row level security;

create policy "Lectura pública de empresas"
  on public.empresas
  for select
  to anon, authenticated
  using (true);

create policy "Admins pueden leer postulaciones"
  on public.postulaciones
  for select
  to authenticated
  using (true);

create policy "Admins pueden leer CVs"
  on storage.objects
  for select
  to authenticated
  using (bucket_id = 'cvs');
