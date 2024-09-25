import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_listings_property_type" AS ENUM('shoppingCenter', 'bizOpportunity', 'multiFamily', 'office', 'mixedUse');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_zoning_type" AS ENUM('C', 'r', 'i');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_tenancy_type" AS ENUM('singleTenant', 'multiTenant');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_version_property_type" AS ENUM('shoppingCenter', 'bizOpportunity', 'multiFamily', 'office', 'mixedUse');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_version_zoning_type" AS ENUM('C', 'r', 'i');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_version_tenancy_type" AS ENUM('singleTenant', 'multiTenant');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "listings_property_type" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_listings_property_type",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "listings_image_gallery" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"alt_text" varchar,
	"caption" varchar
);

CREATE TABLE IF NOT EXISTS "listings" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"slug" varchar,
	"street_address" varchar,
	"neighborhood" varchar,
	"city" varchar,
	"zip_code" varchar,
	"county" varchar,
	"state" varchar,
	"latitude" numeric,
	"longitude" numeric,
	"price" numeric,
	"sq_ft" numeric,
	"sq_ft_land" numeric,
	"bed_count" numeric,
	"bathroom_count" numeric,
	"overview" varchar,
	"area_overview" varchar,
	"zoningType" "enum_listings_zoning_type",
	"tenancyType" "enum_listings_tenancy_type",
	"year_built" numeric,
	"occupancy" numeric,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_listings_status"
);

CREATE TABLE IF NOT EXISTS "listings_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"media_id" integer,
	"team_id" integer
);

CREATE TABLE IF NOT EXISTS "_listings_v_version_property_type" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum__listings_v_version_property_type",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "_listings_v_version_image_gallery" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"alt_text" varchar,
	"caption" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_listings_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_name" varchar,
	"version_slug" varchar,
	"version_street_address" varchar,
	"version_neighborhood" varchar,
	"version_city" varchar,
	"version_zip_code" varchar,
	"version_county" varchar,
	"version_state" varchar,
	"version_latitude" numeric,
	"version_longitude" numeric,
	"version_price" numeric,
	"version_sq_ft" numeric,
	"version_sq_ft_land" numeric,
	"version_bed_count" numeric,
	"version_bathroom_count" numeric,
	"version_overview" varchar,
	"version_area_overview" varchar,
	"version_zoningType" "enum__listings_v_version_zoning_type",
	"version_tenancyType" "enum__listings_v_version_tenancy_type",
	"version_year_built" numeric,
	"version_occupancy" numeric,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__listings_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_listings_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"listings_id" integer,
	"media_id" integer,
	"team_id" integer
);

CREATE INDEX IF NOT EXISTS "listings_property_type_order_idx" ON "listings_property_type" ("order");
CREATE INDEX IF NOT EXISTS "listings_property_type_parent_idx" ON "listings_property_type" ("parent_id");
CREATE INDEX IF NOT EXISTS "listings_image_gallery_order_idx" ON "listings_image_gallery" ("_order");
CREATE INDEX IF NOT EXISTS "listings_image_gallery_parent_id_idx" ON "listings_image_gallery" ("_parent_id");
CREATE INDEX IF NOT EXISTS "listings_created_at_idx" ON "listings" ("created_at");
CREATE INDEX IF NOT EXISTS "listings__status_idx" ON "listings" ("_status");
CREATE INDEX IF NOT EXISTS "listings_rels_order_idx" ON "listings_rels" ("order");
CREATE INDEX IF NOT EXISTS "listings_rels_parent_idx" ON "listings_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "listings_rels_path_idx" ON "listings_rels" ("path");
CREATE INDEX IF NOT EXISTS "_listings_v_version_property_type_order_idx" ON "_listings_v_version_property_type" ("order");
CREATE INDEX IF NOT EXISTS "_listings_v_version_property_type_parent_idx" ON "_listings_v_version_property_type" ("parent_id");
CREATE INDEX IF NOT EXISTS "_listings_v_version_image_gallery_order_idx" ON "_listings_v_version_image_gallery" ("_order");
CREATE INDEX IF NOT EXISTS "_listings_v_version_image_gallery_parent_id_idx" ON "_listings_v_version_image_gallery" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_listings_v_version_version_created_at_idx" ON "_listings_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_listings_v_version_version__status_idx" ON "_listings_v" ("version__status");
CREATE INDEX IF NOT EXISTS "_listings_v_created_at_idx" ON "_listings_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_listings_v_updated_at_idx" ON "_listings_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_listings_v_latest_idx" ON "_listings_v" ("latest");
CREATE INDEX IF NOT EXISTS "_listings_v_rels_order_idx" ON "_listings_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_listings_v_rels_parent_idx" ON "_listings_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_listings_v_rels_path_idx" ON "_listings_v_rels" ("path");
DO $$ BEGIN
 ALTER TABLE "listings_property_type" ADD CONSTRAINT "listings_property_type_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_image_gallery" ADD CONSTRAINT "listings_image_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_team_fk" FOREIGN KEY ("team_id") REFERENCES "team"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_version_property_type" ADD CONSTRAINT "_listings_v_version_property_type_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_listings_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_version_image_gallery" ADD CONSTRAINT "_listings_v_version_image_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_listings_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_listings_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_listings_fk" FOREIGN KEY ("listings_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_team_fk" FOREIGN KEY ("team_id") REFERENCES "team"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "listings_property_type";
DROP TABLE "listings_image_gallery";
DROP TABLE "listings";
DROP TABLE "listings_rels";
DROP TABLE "_listings_v_version_property_type";
DROP TABLE "_listings_v_version_image_gallery";
DROP TABLE "_listings_v";
DROP TABLE "_listings_v_rels";`);

};
