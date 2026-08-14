-- Ejecutar en el SQL Editor de Supabase (Dashboard > SQL > New query)
-- Crea el usuario administrador de ejemplo con correo ya confirmado.
-- Acceso mostrado en la pantalla de login (/admin/login):
--   Correo:      admin@infrix.com
--   Contraseña:  Infrix2026!

insert into auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
)
select
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'admin@infrix.com',
  extensions.crypt('Infrix2026!', extensions.gen_salt('bf')),
  now(),
  '{"provider":"email","providers":["email"]}',
  '{}',
  now(),
  now(),
  '',
  '',
  '',
  ''
where not exists (
  select 1 from auth.users where email = 'admin@infrix.com'
);

-- Verificar que el usuario quedó creado
select id, email, created_at
from auth.users
where email = 'admin@infrix.com';
