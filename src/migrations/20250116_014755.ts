import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "listings" ADD COLUMN "virtual_tour_link" varchar;
ALTER TABLE "_listings_v" ADD COLUMN "version_virtual_tour_link" varchar;`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "listings" DROP COLUMN IF EXISTS "virtual_tour_link";
ALTER TABLE "_listings_v" DROP COLUMN IF EXISTS "version_virtual_tour_link";`);

};
