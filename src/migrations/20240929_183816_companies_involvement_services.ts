import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_services_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__services_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_companies_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__companies_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_involvement_events_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__involvement_events_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_involvement_groups_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__involvement_groups_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_community_resources_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__community_resources_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "services" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"slug" varchar,
	"icon_svg" varchar,
	"description" varchar,
	"meta_title" varchar,
	"meta_description" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_services_status"
);

CREATE TABLE IF NOT EXISTS "services_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"media_id" integer
);

CREATE TABLE IF NOT EXISTS "_services_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_title" varchar,
	"version_slug" varchar,
	"version_icon_svg" varchar,
	"version_description" varchar,
	"version_meta_title" varchar,
	"version_meta_description" varchar,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__services_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_services_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"services_id" integer,
	"media_id" integer
);

CREATE TABLE IF NOT EXISTS "companies" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_companies_status"
);

CREATE TABLE IF NOT EXISTS "companies_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"media_id" integer
);

CREATE TABLE IF NOT EXISTS "_companies_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_name" varchar,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__companies_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_companies_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"companies_id" integer,
	"media_id" integer
);

CREATE TABLE IF NOT EXISTS "involvement_events" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"event_date" timestamp(3) with time zone,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_involvement_events_status"
);

CREATE TABLE IF NOT EXISTS "involvement_events_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"media_id" integer
);

CREATE TABLE IF NOT EXISTS "_involvement_events_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_title" varchar,
	"version_description" varchar,
	"version_event_date" timestamp(3) with time zone,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__involvement_events_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_involvement_events_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"involvement_events_id" integer,
	"media_id" integer
);

CREATE TABLE IF NOT EXISTS "involvement_groups" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_involvement_groups_status"
);

CREATE TABLE IF NOT EXISTS "involvement_groups_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"media_id" integer
);

CREATE TABLE IF NOT EXISTS "_involvement_groups_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_title" varchar,
	"version_description" varchar,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__involvement_groups_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_involvement_groups_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"involvement_groups_id" integer,
	"media_id" integer
);

CREATE TABLE IF NOT EXISTS "community_resources" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"address" varchar,
	"description" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_community_resources_status"
);

CREATE TABLE IF NOT EXISTS "community_resources_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"categories_id" integer,
	"media_id" integer
);

CREATE TABLE IF NOT EXISTS "_community_resources_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_title" varchar,
	"version_address" varchar,
	"version_description" varchar,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__community_resources_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_community_resources_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"community_resources_id" integer,
	"categories_id" integer,
	"media_id" integer
);

ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_categories_fk";

ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_teammates_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_categories_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_teammates_fk";

CREATE INDEX IF NOT EXISTS "services_created_at_idx" ON "services" ("created_at");
CREATE INDEX IF NOT EXISTS "services__status_idx" ON "services" ("_status");
CREATE INDEX IF NOT EXISTS "services_rels_order_idx" ON "services_rels" ("order");
CREATE INDEX IF NOT EXISTS "services_rels_parent_idx" ON "services_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "services_rels_path_idx" ON "services_rels" ("path");
CREATE INDEX IF NOT EXISTS "_services_v_version_version_created_at_idx" ON "_services_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_services_v_version_version__status_idx" ON "_services_v" ("version__status");
CREATE INDEX IF NOT EXISTS "_services_v_created_at_idx" ON "_services_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_services_v_updated_at_idx" ON "_services_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_services_v_latest_idx" ON "_services_v" ("latest");
CREATE INDEX IF NOT EXISTS "_services_v_rels_order_idx" ON "_services_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_services_v_rels_parent_idx" ON "_services_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_services_v_rels_path_idx" ON "_services_v_rels" ("path");
CREATE INDEX IF NOT EXISTS "companies_created_at_idx" ON "companies" ("created_at");
CREATE INDEX IF NOT EXISTS "companies__status_idx" ON "companies" ("_status");
CREATE INDEX IF NOT EXISTS "companies_rels_order_idx" ON "companies_rels" ("order");
CREATE INDEX IF NOT EXISTS "companies_rels_parent_idx" ON "companies_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "companies_rels_path_idx" ON "companies_rels" ("path");
CREATE INDEX IF NOT EXISTS "_companies_v_version_version_created_at_idx" ON "_companies_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_companies_v_version_version__status_idx" ON "_companies_v" ("version__status");
CREATE INDEX IF NOT EXISTS "_companies_v_created_at_idx" ON "_companies_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_companies_v_updated_at_idx" ON "_companies_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_companies_v_latest_idx" ON "_companies_v" ("latest");
CREATE INDEX IF NOT EXISTS "_companies_v_rels_order_idx" ON "_companies_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_companies_v_rels_parent_idx" ON "_companies_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_companies_v_rels_path_idx" ON "_companies_v_rels" ("path");
CREATE INDEX IF NOT EXISTS "involvement_events_created_at_idx" ON "involvement_events" ("created_at");
CREATE INDEX IF NOT EXISTS "involvement_events__status_idx" ON "involvement_events" ("_status");
CREATE INDEX IF NOT EXISTS "involvement_events_rels_order_idx" ON "involvement_events_rels" ("order");
CREATE INDEX IF NOT EXISTS "involvement_events_rels_parent_idx" ON "involvement_events_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "involvement_events_rels_path_idx" ON "involvement_events_rels" ("path");
CREATE INDEX IF NOT EXISTS "_involvement_events_v_version_version_created_at_idx" ON "_involvement_events_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_involvement_events_v_version_version__status_idx" ON "_involvement_events_v" ("version__status");
CREATE INDEX IF NOT EXISTS "_involvement_events_v_created_at_idx" ON "_involvement_events_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_involvement_events_v_updated_at_idx" ON "_involvement_events_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_involvement_events_v_latest_idx" ON "_involvement_events_v" ("latest");
CREATE INDEX IF NOT EXISTS "_involvement_events_v_rels_order_idx" ON "_involvement_events_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_involvement_events_v_rels_parent_idx" ON "_involvement_events_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_involvement_events_v_rels_path_idx" ON "_involvement_events_v_rels" ("path");
CREATE INDEX IF NOT EXISTS "involvement_groups_created_at_idx" ON "involvement_groups" ("created_at");
CREATE INDEX IF NOT EXISTS "involvement_groups__status_idx" ON "involvement_groups" ("_status");
CREATE INDEX IF NOT EXISTS "involvement_groups_rels_order_idx" ON "involvement_groups_rels" ("order");
CREATE INDEX IF NOT EXISTS "involvement_groups_rels_parent_idx" ON "involvement_groups_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "involvement_groups_rels_path_idx" ON "involvement_groups_rels" ("path");
CREATE INDEX IF NOT EXISTS "_involvement_groups_v_version_version_created_at_idx" ON "_involvement_groups_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_involvement_groups_v_version_version__status_idx" ON "_involvement_groups_v" ("version__status");
CREATE INDEX IF NOT EXISTS "_involvement_groups_v_created_at_idx" ON "_involvement_groups_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_involvement_groups_v_updated_at_idx" ON "_involvement_groups_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_involvement_groups_v_latest_idx" ON "_involvement_groups_v" ("latest");
CREATE INDEX IF NOT EXISTS "_involvement_groups_v_rels_order_idx" ON "_involvement_groups_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_involvement_groups_v_rels_parent_idx" ON "_involvement_groups_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_involvement_groups_v_rels_path_idx" ON "_involvement_groups_v_rels" ("path");
CREATE INDEX IF NOT EXISTS "community_resources_created_at_idx" ON "community_resources" ("created_at");
CREATE INDEX IF NOT EXISTS "community_resources__status_idx" ON "community_resources" ("_status");
CREATE INDEX IF NOT EXISTS "community_resources_rels_order_idx" ON "community_resources_rels" ("order");
CREATE INDEX IF NOT EXISTS "community_resources_rels_parent_idx" ON "community_resources_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "community_resources_rels_path_idx" ON "community_resources_rels" ("path");
CREATE INDEX IF NOT EXISTS "_community_resources_v_version_version_created_at_idx" ON "_community_resources_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_community_resources_v_version_version__status_idx" ON "_community_resources_v" ("version__status");
CREATE INDEX IF NOT EXISTS "_community_resources_v_created_at_idx" ON "_community_resources_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_community_resources_v_updated_at_idx" ON "_community_resources_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_community_resources_v_latest_idx" ON "_community_resources_v" ("latest");
CREATE INDEX IF NOT EXISTS "_community_resources_v_rels_order_idx" ON "_community_resources_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_community_resources_v_rels_parent_idx" ON "_community_resources_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_community_resources_v_rels_path_idx" ON "_community_resources_v_rels" ("path");
ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "categories_id";
ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "teammates_id";
ALTER TABLE "_listings_v_rels" DROP COLUMN IF EXISTS "categories_id";
ALTER TABLE "_listings_v_rels" DROP COLUMN IF EXISTS "teammates_id";
DO $$ BEGIN
 ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_services_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "companies_rels" ADD CONSTRAINT "companies_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "companies_rels" ADD CONSTRAINT "companies_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_companies_v_rels" ADD CONSTRAINT "_companies_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_companies_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_companies_v_rels" ADD CONSTRAINT "_companies_v_rels_companies_fk" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_companies_v_rels" ADD CONSTRAINT "_companies_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "involvement_events_rels" ADD CONSTRAINT "involvement_events_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "involvement_events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "involvement_events_rels" ADD CONSTRAINT "involvement_events_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_involvement_events_v_rels" ADD CONSTRAINT "_involvement_events_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_involvement_events_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_involvement_events_v_rels" ADD CONSTRAINT "_involvement_events_v_rels_involvement_events_fk" FOREIGN KEY ("involvement_events_id") REFERENCES "involvement_events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_involvement_events_v_rels" ADD CONSTRAINT "_involvement_events_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "involvement_groups_rels" ADD CONSTRAINT "involvement_groups_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "involvement_groups_rels" ADD CONSTRAINT "involvement_groups_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_involvement_groups_v_rels" ADD CONSTRAINT "_involvement_groups_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_involvement_groups_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_involvement_groups_v_rels" ADD CONSTRAINT "_involvement_groups_v_rels_involvement_groups_fk" FOREIGN KEY ("involvement_groups_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_involvement_groups_v_rels" ADD CONSTRAINT "_involvement_groups_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "community_resources_rels" ADD CONSTRAINT "community_resources_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "community_resources_rels" ADD CONSTRAINT "community_resources_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "community_resources_rels" ADD CONSTRAINT "community_resources_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_community_resources_v_rels" ADD CONSTRAINT "_community_resources_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_community_resources_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_community_resources_v_rels" ADD CONSTRAINT "_community_resources_v_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_community_resources_v_rels" ADD CONSTRAINT "_community_resources_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_community_resources_v_rels" ADD CONSTRAINT "_community_resources_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "services";
DROP TABLE "services_rels";
DROP TABLE "_services_v";
DROP TABLE "_services_v_rels";
DROP TABLE "companies";
DROP TABLE "companies_rels";
DROP TABLE "_companies_v";
DROP TABLE "_companies_v_rels";
DROP TABLE "involvement_events";
DROP TABLE "involvement_events_rels";
DROP TABLE "_involvement_events_v";
DROP TABLE "_involvement_events_v_rels";
DROP TABLE "involvement_groups";
DROP TABLE "involvement_groups_rels";
DROP TABLE "_involvement_groups_v";
DROP TABLE "_involvement_groups_v_rels";
DROP TABLE "community_resources";
DROP TABLE "community_resources_rels";
DROP TABLE "_community_resources_v";
DROP TABLE "_community_resources_v_rels";
ALTER TABLE "listings_rels" ADD COLUMN "categories_id" integer;
ALTER TABLE "listings_rels" ADD COLUMN "teammates_id" integer;
ALTER TABLE "_listings_v_rels" ADD COLUMN "categories_id" integer;
ALTER TABLE "_listings_v_rels" ADD COLUMN "teammates_id" integer;
DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};
