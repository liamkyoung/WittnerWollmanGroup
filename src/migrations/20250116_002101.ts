import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "public"."enum_listings_payment_frequency" AS ENUM('oneTime', 'dollarPerSqPerYear', 'monthly', 'yearly');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__listings_v_version_payment_frequency" AS ENUM('oneTime', 'dollarPerSqPerYear', 'monthly', 'yearly');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "listings" ADD COLUMN "paymentFrequency" "enum_listings_payment_frequency";
ALTER TABLE "_listings_v" ADD COLUMN "version_paymentFrequency" "enum__listings_v_version_payment_frequency";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "listings" DROP COLUMN IF EXISTS "paymentFrequency";
ALTER TABLE "_listings_v" DROP COLUMN IF EXISTS "version_paymentFrequency";`);

};
