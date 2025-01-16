import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "public"."enum_listings_listing_type" AS ENUM('forSale', 'lease');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__listings_v_version_listing_type" AS ENUM('forSale', 'lease');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "listings" ADD COLUMN "listingType" "enum_listings_listing_type";
ALTER TABLE "_listings_v" ADD COLUMN "version_listingType" "enum__listings_v_version_listing_type";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "listings" DROP COLUMN IF EXISTS "listingType";
ALTER TABLE "_listings_v" DROP COLUMN IF EXISTS "version_listingType";`);

};
