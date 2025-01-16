import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "listings" ADD COLUMN "year_rennovated" numeric;
ALTER TABLE "_listings_v" ADD COLUMN "version_year_rennovated" numeric;`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "listings" DROP COLUMN IF EXISTS "year_rennovated";
ALTER TABLE "_listings_v" DROP COLUMN IF EXISTS "version_year_rennovated";`);

};
