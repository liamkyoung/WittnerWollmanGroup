import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "listings" ADD COLUMN "parking_description" varchar;
ALTER TABLE "_listings_v" ADD COLUMN "version_parking_description" varchar;
ALTER TABLE "listings" DROP COLUMN IF EXISTS "parking_spots";
ALTER TABLE "_listings_v" DROP COLUMN IF EXISTS "version_parking_spots";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "listings" ADD COLUMN "parking_spots" numeric;
ALTER TABLE "_listings_v" ADD COLUMN "version_parking_spots" numeric;
ALTER TABLE "listings" DROP COLUMN IF EXISTS "parking_description";
ALTER TABLE "_listings_v" DROP COLUMN IF EXISTS "version_parking_description";`);

};
