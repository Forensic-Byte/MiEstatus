/*
# Create status_reminders table (single-tenant, no auth)

1. New Tables
- `status_reminders`
- `id` (uuid, primary key)
- `email` (text, not null) — the email address to notify
- `country` (text, not null) — the user's selected country
- `reminder_type` (text, not null) — either 'notify' (re-registration opening soon) or 'remind' (status still current, remind later)
- `designation_end_date` (date, not null) — the TPS designation end date for the country at time of signup
- `created_at` (timestamptz, default now)

2. Security
- Enable RLS on `status_reminders`.
- Single-tenant no-auth app: allow anon + authenticated CRUD because the data is intentionally public/shared (no sign-in screen exists).
*/

CREATE TABLE IF NOT EXISTS status_reminders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  country text NOT NULL,
  reminder_type text NOT NULL CHECK (reminder_type IN ('notify', 'remind')),
  designation_end_date date NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE status_reminders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_status_reminders" ON status_reminders;
CREATE POLICY "anon_select_status_reminders" ON status_reminders FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_status_reminders" ON status_reminders;
CREATE POLICY "anon_insert_status_reminders" ON status_reminders FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_status_reminders" ON status_reminders;
CREATE POLICY "anon_update_status_reminders" ON status_reminders FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_status_reminders" ON status_reminders;
CREATE POLICY "anon_delete_status_reminders" ON status_reminders FOR DELETE
TO anon, authenticated USING (true);
