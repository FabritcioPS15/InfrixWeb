-- Ejecutar en el SQL Editor de Supabase (Dashboard > SQL)

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

create table if not exists public.postulaciones (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  apellidos text not null,
  email text not null,
  telefono text not null,
  ciudad text not null,
  profesion text not null,
  mensaje text,
  cv_path text not null,
  empresa_id uuid not null references public.empresas(id),
  created_at timestamptz not null default now()
);

alter table public.empresas enable row level security;
alter table public.postulaciones enable row level security;

create policy "Lectura pública de empresas"
  on public.empresas
  for select
  to anon, authenticated
  using (true);

create policy "Permitir inserción anónima de postulaciones"
  on public.postulaciones
  for insert
  to anon
  with check (true);

create policy "Admins pueden leer postulaciones"
  on public.postulaciones
  for select
  to authenticated
  using (true);

insert into storage.buckets (id, name, public)
values ('cvs', 'cvs', false)
on conflict (id) do nothing;

create policy "Permitir subida anónima de CVs"
  on storage.objects
  for insert
  to anon
  with check (bucket_id = 'cvs');

create policy "Admins pueden leer CVs"
  on storage.objects
  for select
  to authenticated
  using (bucket_id = 'cvs');
