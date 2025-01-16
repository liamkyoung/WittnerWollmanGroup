import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "teammates" ADD COLUMN "office_number" varchar;
ALTER TABLE "_teammates_v" ADD COLUMN "version_office_number" varchar;`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "teammates" DROP COLUMN IF EXISTS "office_number";
ALTER TABLE "_teammates_v" DROP COLUMN IF EXISTS "version_office_number";`);

};
