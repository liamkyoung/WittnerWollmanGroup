import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

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
 CREATE TYPE "enum_testimonials_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__testimonials_v_version_status" AS ENUM('draft', 'published');
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
 CREATE TYPE "enum_community_resources_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__community_resources_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TYPE "enum_pages_blocks_archive_relation_to" ADD VALUE 'involvementEvents';
ALTER TYPE "enum_pages_blocks_archive_relation_to" ADD VALUE 'testimonials';
ALTER TYPE "enum_pages_blocks_archive_relation_to" ADD VALUE 'companies';
ALTER TYPE "enum_pages_blocks_archive_relation_to" ADD VALUE 'services';
ALTER TYPE "enum_pages_blocks_archive_relation_to" ADD VALUE 'communityResources';
ALTER TYPE "enum__pages_v_blocks_archive_relation_to" ADD VALUE 'involvementEvents';
ALTER TYPE "enum__pages_v_blocks_archive_relation_to" ADD VALUE 'testimonials';
ALTER TYPE "enum__pages_v_blocks_archive_relation_to" ADD VALUE 'companies';
ALTER TYPE "enum__pages_v_blocks_archive_relation_to" ADD VALUE 'services';
ALTER TYPE "enum__pages_v_blocks_archive_relation_to" ADD VALUE 'communityResources';
ALTER TYPE "enum_posts_blocks_archive_relation_to" ADD VALUE 'involvementEvents';
ALTER TYPE "enum_posts_blocks_archive_relation_to" ADD VALUE 'testimonials';
ALTER TYPE "enum_posts_blocks_archive_relation_to" ADD VALUE 'companies';
ALTER TYPE "enum_posts_blocks_archive_relation_to" ADD VALUE 'services';
ALTER TYPE "enum_posts_blocks_archive_relation_to" ADD VALUE 'communityResources';
ALTER TYPE "enum__posts_v_blocks_archive_relation_to" ADD VALUE 'involvementEvents';
ALTER TYPE "enum__posts_v_blocks_archive_relation_to" ADD VALUE 'testimonials';
ALTER TYPE "enum__posts_v_blocks_archive_relation_to" ADD VALUE 'companies';
ALTER TYPE "enum__posts_v_blocks_archive_relation_to" ADD VALUE 'services';
ALTER TYPE "enum__posts_v_blocks_archive_relation_to" ADD VALUE 'communityResources';
ALTER TYPE "enum_projects_blocks_archive_relation_to" ADD VALUE 'involvementEvents';
ALTER TYPE "enum_projects_blocks_archive_relation_to" ADD VALUE 'testimonials';
ALTER TYPE "enum_projects_blocks_archive_relation_to" ADD VALUE 'companies';
ALTER TYPE "enum_projects_blocks_archive_relation_to" ADD VALUE 'services';
ALTER TYPE "enum_projects_blocks_archive_relation_to" ADD VALUE 'communityResources';
ALTER TYPE "enum__projects_v_blocks_archive_relation_to" ADD VALUE 'involvementEvents';
ALTER TYPE "enum__projects_v_blocks_archive_relation_to" ADD VALUE 'testimonials';
ALTER TYPE "enum__projects_v_blocks_archive_relation_to" ADD VALUE 'companies';
ALTER TYPE "enum__projects_v_blocks_archive_relation_to" ADD VALUE 'services';
ALTER TYPE "enum__projects_v_blocks_archive_relation_to" ADD VALUE 'communityResources';
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

CREATE TABLE IF NOT EXISTS "testimonials" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"quote" varchar,
	"job_title" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_testimonials_status"
);

CREATE TABLE IF NOT EXISTS "testimonials_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"media_id" integer
);

CREATE TABLE IF NOT EXISTS "_testimonials_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_title" varchar,
	"version_quote" varchar,
	"version_job_title" varchar,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__testimonials_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_testimonials_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"testimonials_id" integer,
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

ALTER TABLE "involvement_groups" RENAME COLUMN "bio" TO "description";
ALTER TABLE "_involvement_groups_v" RENAME COLUMN "version_bio" TO "version_description";
ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_categories_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_categories_fk";

ALTER TABLE "teammates_rels" DROP CONSTRAINT "teammates_rels_categories_fk";

ALTER TABLE "_teammates_v_rels" DROP CONSTRAINT "_teammates_v_rels_categories_fk";

ALTER TABLE "involvement_groups_rels" DROP CONSTRAINT "involvement_groups_rels_categories_fk";

ALTER TABLE "_involvement_groups_v_rels" DROP CONSTRAINT "_involvement_groups_v_rels_categories_fk";

ALTER TABLE "pages_rels" ADD COLUMN "involvement_events_id" integer;
ALTER TABLE "pages_rels" ADD COLUMN "testimonials_id" integer;
ALTER TABLE "pages_rels" ADD COLUMN "companies_id" integer;
ALTER TABLE "pages_rels" ADD COLUMN "services_id" integer;
ALTER TABLE "pages_rels" ADD COLUMN "community_resources_id" integer;
ALTER TABLE "_pages_v_rels" ADD COLUMN "involvement_events_id" integer;
ALTER TABLE "_pages_v_rels" ADD COLUMN "testimonials_id" integer;
ALTER TABLE "_pages_v_rels" ADD COLUMN "companies_id" integer;
ALTER TABLE "_pages_v_rels" ADD COLUMN "services_id" integer;
ALTER TABLE "_pages_v_rels" ADD COLUMN "community_resources_id" integer;
ALTER TABLE "posts_rels" ADD COLUMN "involvement_events_id" integer;
ALTER TABLE "posts_rels" ADD COLUMN "testimonials_id" integer;
ALTER TABLE "posts_rels" ADD COLUMN "companies_id" integer;
ALTER TABLE "posts_rels" ADD COLUMN "services_id" integer;
ALTER TABLE "posts_rels" ADD COLUMN "community_resources_id" integer;
ALTER TABLE "_posts_v_rels" ADD COLUMN "involvement_events_id" integer;
ALTER TABLE "_posts_v_rels" ADD COLUMN "testimonials_id" integer;
ALTER TABLE "_posts_v_rels" ADD COLUMN "companies_id" integer;
ALTER TABLE "_posts_v_rels" ADD COLUMN "services_id" integer;
ALTER TABLE "_posts_v_rels" ADD COLUMN "community_resources_id" integer;
ALTER TABLE "projects_rels" ADD COLUMN "involvement_events_id" integer;
ALTER TABLE "projects_rels" ADD COLUMN "testimonials_id" integer;
ALTER TABLE "projects_rels" ADD COLUMN "companies_id" integer;
ALTER TABLE "projects_rels" ADD COLUMN "services_id" integer;
ALTER TABLE "projects_rels" ADD COLUMN "community_resources_id" integer;
ALTER TABLE "_projects_v_rels" ADD COLUMN "involvement_events_id" integer;
ALTER TABLE "_projects_v_rels" ADD COLUMN "testimonials_id" integer;
ALTER TABLE "_projects_v_rels" ADD COLUMN "companies_id" integer;
ALTER TABLE "_projects_v_rels" ADD COLUMN "services_id" integer;
ALTER TABLE "_projects_v_rels" ADD COLUMN "community_resources_id" integer;
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
CREATE INDEX IF NOT EXISTS "testimonials_created_at_idx" ON "testimonials" ("created_at");
CREATE INDEX IF NOT EXISTS "testimonials__status_idx" ON "testimonials" ("_status");
CREATE INDEX IF NOT EXISTS "testimonials_rels_order_idx" ON "testimonials_rels" ("order");
CREATE INDEX IF NOT EXISTS "testimonials_rels_parent_idx" ON "testimonials_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "testimonials_rels_path_idx" ON "testimonials_rels" ("path");
CREATE INDEX IF NOT EXISTS "_testimonials_v_version_version_created_at_idx" ON "_testimonials_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_testimonials_v_version_version__status_idx" ON "_testimonials_v" ("version__status");
CREATE INDEX IF NOT EXISTS "_testimonials_v_created_at_idx" ON "_testimonials_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_testimonials_v_updated_at_idx" ON "_testimonials_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_testimonials_v_latest_idx" ON "_testimonials_v" ("latest");
CREATE INDEX IF NOT EXISTS "_testimonials_v_rels_order_idx" ON "_testimonials_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_testimonials_v_rels_parent_idx" ON "_testimonials_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_testimonials_v_rels_path_idx" ON "_testimonials_v_rels" ("path");
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
DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_involvement_events_fk" FOREIGN KEY ("involvement_events_id") REFERENCES "involvement_events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "testimonials"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_companies_fk" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_involvement_events_fk" FOREIGN KEY ("involvement_events_id") REFERENCES "involvement_events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "testimonials"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_companies_fk" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_involvement_events_fk" FOREIGN KEY ("involvement_events_id") REFERENCES "involvement_events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "testimonials"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_companies_fk" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_involvement_events_fk" FOREIGN KEY ("involvement_events_id") REFERENCES "involvement_events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "testimonials"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_companies_fk" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_involvement_events_fk" FOREIGN KEY ("involvement_events_id") REFERENCES "involvement_events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "testimonials"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_companies_fk" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_involvement_events_fk" FOREIGN KEY ("involvement_events_id") REFERENCES "involvement_events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "testimonials"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_companies_fk" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "categories_id";
ALTER TABLE "_listings_v_rels" DROP COLUMN IF EXISTS "categories_id";
ALTER TABLE "teammates_rels" DROP COLUMN IF EXISTS "categories_id";
ALTER TABLE "_teammates_v_rels" DROP COLUMN IF EXISTS "categories_id";
ALTER TABLE "involvement_groups" DROP COLUMN IF EXISTS "slug";
ALTER TABLE "involvement_groups" DROP COLUMN IF EXISTS "meta_title";
ALTER TABLE "involvement_groups" DROP COLUMN IF EXISTS "meta_description";
ALTER TABLE "involvement_groups_rels" DROP COLUMN IF EXISTS "categories_id";
ALTER TABLE "_involvement_groups_v" DROP COLUMN IF EXISTS "version_slug";
ALTER TABLE "_involvement_groups_v" DROP COLUMN IF EXISTS "version_meta_title";
ALTER TABLE "_involvement_groups_v" DROP COLUMN IF EXISTS "version_meta_description";
ALTER TABLE "_involvement_groups_v_rels" DROP COLUMN IF EXISTS "categories_id";
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
 ALTER TABLE "testimonials_rels" ADD CONSTRAINT "testimonials_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "testimonials"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "testimonials_rels" ADD CONSTRAINT "testimonials_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_testimonials_v_rels" ADD CONSTRAINT "_testimonials_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_testimonials_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_testimonials_v_rels" ADD CONSTRAINT "_testimonials_v_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "testimonials"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_testimonials_v_rels" ADD CONSTRAINT "_testimonials_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
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

DROP TABLE "involvement_events";
DROP TABLE "involvement_events_rels";
DROP TABLE "_involvement_events_v";
DROP TABLE "_involvement_events_v_rels";
DROP TABLE "testimonials";
DROP TABLE "testimonials_rels";
DROP TABLE "_testimonials_v";
DROP TABLE "_testimonials_v_rels";
DROP TABLE "companies";
DROP TABLE "companies_rels";
DROP TABLE "_companies_v";
DROP TABLE "_companies_v_rels";
DROP TABLE "services";
DROP TABLE "services_rels";
DROP TABLE "_services_v";
DROP TABLE "_services_v_rels";
DROP TABLE "community_resources";
DROP TABLE "community_resources_rels";
DROP TABLE "_community_resources_v";
DROP TABLE "_community_resources_v_rels";
ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_involvement_events_fk";

ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_testimonials_fk";

ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_companies_fk";

ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_services_fk";

ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_community_resources_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_involvement_events_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_testimonials_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_companies_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_services_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_community_resources_fk";

ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_involvement_events_fk";

ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_testimonials_fk";

ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_companies_fk";

ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_services_fk";

ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_community_resources_fk";

ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_involvement_events_fk";

ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_testimonials_fk";

ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_companies_fk";

ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_services_fk";

ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_community_resources_fk";

ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_involvement_events_fk";

ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_testimonials_fk";

ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_companies_fk";

ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_services_fk";

ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_community_resources_fk";

ALTER TABLE "_projects_v_rels" DROP CONSTRAINT "_projects_v_rels_involvement_events_fk";

ALTER TABLE "_projects_v_rels" DROP CONSTRAINT "_projects_v_rels_testimonials_fk";

ALTER TABLE "_projects_v_rels" DROP CONSTRAINT "_projects_v_rels_companies_fk";

ALTER TABLE "_projects_v_rels" DROP CONSTRAINT "_projects_v_rels_services_fk";

ALTER TABLE "_projects_v_rels" DROP CONSTRAINT "_projects_v_rels_community_resources_fk";

ALTER TABLE "listings_rels" ADD COLUMN "categories_id" integer;
ALTER TABLE "_listings_v_rels" ADD COLUMN "categories_id" integer;
ALTER TABLE "teammates_rels" ADD COLUMN "categories_id" integer;
ALTER TABLE "_teammates_v_rels" ADD COLUMN "categories_id" integer;
ALTER TABLE "involvement_groups" ADD COLUMN "slug" varchar;
ALTER TABLE "involvement_groups" ADD COLUMN "bio" varchar;
ALTER TABLE "involvement_groups" ADD COLUMN "meta_title" varchar;
ALTER TABLE "involvement_groups" ADD COLUMN "meta_description" varchar;
ALTER TABLE "involvement_groups_rels" ADD COLUMN "categories_id" integer;
ALTER TABLE "_involvement_groups_v" ADD COLUMN "version_slug" varchar;
ALTER TABLE "_involvement_groups_v" ADD COLUMN "version_bio" varchar;
ALTER TABLE "_involvement_groups_v" ADD COLUMN "version_meta_title" varchar;
ALTER TABLE "_involvement_groups_v" ADD COLUMN "version_meta_description" varchar;
ALTER TABLE "_involvement_groups_v_rels" ADD COLUMN "categories_id" integer;
DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "teammates_rels" ADD CONSTRAINT "teammates_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_teammates_v_rels" ADD CONSTRAINT "_teammates_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "involvement_groups_rels" ADD CONSTRAINT "involvement_groups_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_involvement_groups_v_rels" ADD CONSTRAINT "_involvement_groups_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "involvement_events_id";
ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "testimonials_id";
ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "companies_id";
ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "services_id";
ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "community_resources_id";
ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "involvement_events_id";
ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "testimonials_id";
ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "companies_id";
ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "services_id";
ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "community_resources_id";
ALTER TABLE "posts_rels" DROP COLUMN IF EXISTS "involvement_events_id";
ALTER TABLE "posts_rels" DROP COLUMN IF EXISTS "testimonials_id";
ALTER TABLE "posts_rels" DROP COLUMN IF EXISTS "companies_id";
ALTER TABLE "posts_rels" DROP COLUMN IF EXISTS "services_id";
ALTER TABLE "posts_rels" DROP COLUMN IF EXISTS "community_resources_id";
ALTER TABLE "_posts_v_rels" DROP COLUMN IF EXISTS "involvement_events_id";
ALTER TABLE "_posts_v_rels" DROP COLUMN IF EXISTS "testimonials_id";
ALTER TABLE "_posts_v_rels" DROP COLUMN IF EXISTS "companies_id";
ALTER TABLE "_posts_v_rels" DROP COLUMN IF EXISTS "services_id";
ALTER TABLE "_posts_v_rels" DROP COLUMN IF EXISTS "community_resources_id";
ALTER TABLE "projects_rels" DROP COLUMN IF EXISTS "involvement_events_id";
ALTER TABLE "projects_rels" DROP COLUMN IF EXISTS "testimonials_id";
ALTER TABLE "projects_rels" DROP COLUMN IF EXISTS "companies_id";
ALTER TABLE "projects_rels" DROP COLUMN IF EXISTS "services_id";
ALTER TABLE "projects_rels" DROP COLUMN IF EXISTS "community_resources_id";
ALTER TABLE "_projects_v_rels" DROP COLUMN IF EXISTS "involvement_events_id";
ALTER TABLE "_projects_v_rels" DROP COLUMN IF EXISTS "testimonials_id";
ALTER TABLE "_projects_v_rels" DROP COLUMN IF EXISTS "companies_id";
ALTER TABLE "_projects_v_rels" DROP COLUMN IF EXISTS "services_id";
ALTER TABLE "_projects_v_rels" DROP COLUMN IF EXISTS "community_resources_id";
ALTER TABLE "involvement_groups" DROP COLUMN IF EXISTS "description";
ALTER TABLE "_involvement_groups_v" DROP COLUMN IF EXISTS "version_description";`);

};
