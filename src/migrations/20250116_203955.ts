import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TYPE "enum_listings_listing_type" ADD VALUE 'forSaleLease';
ALTER TYPE "enum__listings_v_version_listing_type" ADD VALUE 'forSaleLease';`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
// Migration code
};
