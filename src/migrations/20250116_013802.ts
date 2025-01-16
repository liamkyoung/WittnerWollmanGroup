import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "listings" RENAME COLUMN "year_rennovated" TO "year_renovated";
ALTER TABLE "_listings_v" RENAME COLUMN "version_year_rennovated" TO "version_year_renovated";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "listings" RENAME COLUMN "year_renovated" TO "year_rennovated";
ALTER TABLE "_listings_v" RENAME COLUMN "version_year_renovated" TO "version_year_rennovated";`);

};
