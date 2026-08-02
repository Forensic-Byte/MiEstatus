/*
# Allow null designation_end_date in status_reminders

1. Modified Tables
- `status_reminders`
- `designation_end_date` changed from NOT NULL to nullable, because some TPS designations are "terminated — currently in effect" with no end date.

2. Security
- No changes to RLS policies.
*/

ALTER TABLE status_reminders ALTER COLUMN designation_end_date DROP NOT NULL;
