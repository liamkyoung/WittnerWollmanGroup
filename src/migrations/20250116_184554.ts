import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "listings" ADD COLUMN "full_description" jsonb;
ALTER TABLE "_listings_v" ADD COLUMN "version_full_description" jsonb;`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "listings" DROP COLUMN IF EXISTS "full_description";
ALTER TABLE "_listings_v" DROP COLUMN IF EXISTS "version_full_description";`);

};
