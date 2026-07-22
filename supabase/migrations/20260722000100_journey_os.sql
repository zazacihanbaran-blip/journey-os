create extension if not exists pgcrypto;

create table if not exists public.user_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.feed_sources (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  label text not null check (char_length(label) between 1 and 120),
  kind text not null check (kind in ('rss','news','youtube','social','academic','finance')),
  url text not null check (url ~ '^https://'),
  enabled boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.saved_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  external_id text,
  item jsonb not null,
  note text not null default '',
  created_at timestamptz not null default now(),
  unique (user_id, external_id)
);

create table if not exists public.research_schedules (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(title) between 5 and 180),
  topic text not null default '',
  frequency text not null check (frequency in ('hourly','daily','weekly')),
  delivery_time time,
  channel text not null default 'Uygulama',
  settings jsonb not null default '{}'::jsonb,
  enabled boolean not null default true,
  next_run timestamptz not null default now(),
  last_run timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.research_reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  schedule_id uuid references public.research_schedules(id) on delete set null,
  title text not null,
  items jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.user_state enable row level security;
alter table public.feed_sources enable row level security;
alter table public.saved_items enable row level security;
alter table public.research_schedules enable row level security;
alter table public.research_reports enable row level security;

create policy "own state" on public.user_state for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "own sources" on public.feed_sources for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "own saved items" on public.saved_items for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "own schedules" on public.research_schedules for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "own reports" on public.research_reports for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create index if not exists feed_sources_user_id_idx on public.feed_sources(user_id);
create index if not exists saved_items_user_id_idx on public.saved_items(user_id, created_at desc);
create index if not exists research_schedules_due_idx on public.research_schedules(enabled, next_run);
create index if not exists research_reports_user_id_idx on public.research_reports(user_id, created_at desc);
