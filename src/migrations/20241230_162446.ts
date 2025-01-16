import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "listings" ADD COLUMN "zillow_link" varchar;
ALTER TABLE "_listings_v" ADD COLUMN "version_zillow_link" varchar;`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "listings" DROP COLUMN IF EXISTS "zillow_link";
ALTER TABLE "_listings_v" DROP COLUMN IF EXISTS "version_zillow_link";`);

};
