-- Run this SQL in Supabase > SQL Editor.
-- These policies allow ONLY logged-in users to access the madrasa tables.
-- Do not use the service_role/secret key in the website.

alter table public.students enable row level security;
alter table public.attendance enable row level security;
alter table public.results enable row level security;

create policy "authenticated users can read students"
on public.students for select to authenticated using (true);
create policy "authenticated users can insert students"
on public.students for insert to authenticated with check (true);
create policy "authenticated users can update students"
on public.students for update to authenticated using (true) with check (true);
create policy "authenticated users can delete students"
on public.students for delete to authenticated using (true);

create policy "authenticated users can read attendance"
on public.attendance for select to authenticated using (true);
create policy "authenticated users can insert attendance"
on public.attendance for insert to authenticated with check (true);
create policy "authenticated users can update attendance"
on public.attendance for update to authenticated using (true) with check (true);

create policy "authenticated users can read results"
on public.results for select to authenticated using (true);
create policy "authenticated users can insert results"
on public.results for insert to authenticated with check (true);
create policy "authenticated users can update results"
on public.results for update to authenticated using (true) with check (true);
create policy "authenticated users can delete results"
on public.results for delete to authenticated using (true);

create unique index if not exists attendance_student_date_unique
on public.attendance(student_id, date);

alter table public.attendance
add constraint attendance_student_fk
foreign key (student_id) references public.students(id) on delete cascade;

alter table public.results
add constraint results_student_fk
foreign key (student_id) references public.students(id) on delete cascade;
