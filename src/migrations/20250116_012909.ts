import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "public"."enum_listings_property_types" AS ENUM('singleFamily', 'multiFamily', 'townhouse', 'condo', 'co-op', 'apt', 'mobileHome', 'vacationHome', 'seniorLivingHome', 'shoppingCenter', 'bizOpportunity', 'office', 'retail', 'industrial', 'mixedUse', 'hotel', 'motel', 'restaurant', 'healthcareFacility', 'storageUnit', 'vacantLand', 'agriculturalLand', 'timberland', 'ranchLand', 'recreationalLand', 'developmentLand', 'religion', 'school', 'university', 'governmentBuilding', 'cemetery', 'airport', 'utility', 'reit', 'rentalProperty', 'fixAndFlip');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__listings_v_version_property_types" AS ENUM('singleFamily', 'multiFamily', 'townhouse', 'condo', 'co-op', 'apt', 'mobileHome', 'vacationHome', 'seniorLivingHome', 'shoppingCenter', 'bizOpportunity', 'office', 'retail', 'industrial', 'mixedUse', 'hotel', 'motel', 'restaurant', 'healthcareFacility', 'storageUnit', 'vacantLand', 'agriculturalLand', 'timberland', 'ranchLand', 'recreationalLand', 'developmentLand', 'religion', 'school', 'university', 'governmentBuilding', 'cemetery', 'airport', 'utility', 'reit', 'rentalProperty', 'fixAndFlip');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "listings" ADD COLUMN "propertyTypes" "enum_listings_property_types";
ALTER TABLE "_listings_v" ADD COLUMN "version_propertyTypes" "enum__listings_v_version_property_types";
ALTER TABLE "listings" DROP COLUMN IF EXISTS "propertyType";
ALTER TABLE "_listings_v" DROP COLUMN IF EXISTS "version_propertyType";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "public"."enum_listings_property_type" AS ENUM('singleFamily', 'multiFamily', 'townhouse', 'condo', 'co-op', 'apt', 'apt', 'mobileHome', 'vacationHome', 'seniorLivingHome', 'shoppingCenter', 'bizOpportunity', 'office', 'retail', 'industrial', 'mixedUse', 'hotel', 'motel', 'restaurant', 'healthcareFacility', 'storageUnit', 'vacantLand', 'agriculturalLand', 'timberland', 'ranchLand', 'recreationalLand', 'developmentLand', 'religion', 'school', 'university', 'governmentBuilding', 'cemetery', 'airport', 'utility', 'reit', 'rentalProperty', 'fixAndFlip');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__listings_v_version_property_type" AS ENUM('singleFamily', 'multiFamily', 'townhouse', 'condo', 'co-op', 'apt', 'apt', 'mobileHome', 'vacationHome', 'seniorLivingHome', 'shoppingCenter', 'bizOpportunity', 'office', 'retail', 'industrial', 'mixedUse', 'hotel', 'motel', 'restaurant', 'healthcareFacility', 'storageUnit', 'vacantLand', 'agriculturalLand', 'timberland', 'ranchLand', 'recreationalLand', 'developmentLand', 'religion', 'school', 'university', 'governmentBuilding', 'cemetery', 'airport', 'utility', 'reit', 'rentalProperty', 'fixAndFlip');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "listings" ADD COLUMN "propertyType" "enum_listings_property_type";
ALTER TABLE "_listings_v" ADD COLUMN "version_propertyType" "enum__listings_v_version_property_type";
ALTER TABLE "listings" DROP COLUMN IF EXISTS "propertyTypes";
ALTER TABLE "_listings_v" DROP COLUMN IF EXISTS "version_propertyTypes";`);

};
