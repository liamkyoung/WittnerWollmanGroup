import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_teammates_strengths" AS ENUM('Residential Real Estate', 'Commercial Real Estate');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_teammates_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__teammates_v_version_strengths" AS ENUM('Residential Real Estate', 'Commercial Real Estate');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__teammates_v_version_status" AS ENUM('draft', 'published');
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

ALTER TYPE "enum_pages_blocks_archive_relation_to" ADD VALUE 'teammates';
ALTER TYPE "enum_pages_blocks_archive_relation_to" ADD VALUE 'involvementGroups';
ALTER TYPE "enum__pages_v_blocks_archive_relation_to" ADD VALUE 'teammates';
ALTER TYPE "enum__pages_v_blocks_archive_relation_to" ADD VALUE 'involvementGroups';
ALTER TYPE "enum_posts_blocks_archive_relation_to" ADD VALUE 'teammates';
ALTER TYPE "enum_posts_blocks_archive_relation_to" ADD VALUE 'involvementGroups';
ALTER TYPE "enum__posts_v_blocks_archive_relation_to" ADD VALUE 'teammates';
ALTER TYPE "enum__posts_v_blocks_archive_relation_to" ADD VALUE 'involvementGroups';
ALTER TYPE "enum_projects_blocks_archive_relation_to" ADD VALUE 'teammates';
ALTER TYPE "enum_projects_blocks_archive_relation_to" ADD VALUE 'involvementGroups';
ALTER TYPE "enum__projects_v_blocks_archive_relation_to" ADD VALUE 'teammates';
ALTER TYPE "enum__projects_v_blocks_archive_relation_to" ADD VALUE 'involvementGroups';
CREATE TABLE IF NOT EXISTS "_projects_v_version_gallery" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "teammates_strengths" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_teammates_strengths",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "teammates" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"bio" varchar,
	"years_of_experience" numeric,
	"phone_number" varchar,
	"email" varchar,
	"slug" varchar,
	"instagram" varchar,
	"facebook" varchar,
	"linkedin" varchar,
	"meta_title" varchar,
	"meta_description" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_teammates_status"
);

CREATE TABLE IF NOT EXISTS "teammates_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"media_id" integer,
	"categories_id" integer
);

CREATE TABLE IF NOT EXISTS "_teammates_v_version_strengths" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum__teammates_v_version_strengths",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "_teammates_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_title" varchar,
	"version_bio" varchar,
	"version_years_of_experience" numeric,
	"version_phone_number" varchar,
	"version_email" varchar,
	"version_slug" varchar,
	"version_instagram" varchar,
	"version_facebook" varchar,
	"version_linkedin" varchar,
	"version_meta_title" varchar,
	"version_meta_description" varchar,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__teammates_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_teammates_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"teammates_id" integer,
	"media_id" integer,
	"categories_id" integer
);

CREATE TABLE IF NOT EXISTS "involvement_groups" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"slug" varchar,
	"bio" varchar,
	"meta_title" varchar,
	"meta_description" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_involvement_groups_status"
);

CREATE TABLE IF NOT EXISTS "involvement_groups_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"categories_id" integer,
	"media_id" integer
);

CREATE TABLE IF NOT EXISTS "_involvement_groups_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_title" varchar,
	"version_slug" varchar,
	"version_bio" varchar,
	"version_meta_title" varchar,
	"version_meta_description" varchar,
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
	"categories_id" integer,
	"media_id" integer
);

DROP TABLE "team_member_strengths";
DROP TABLE "team_member";
ALTER TABLE "team_member_rels" RENAME TO "projects_gallery";
ALTER TABLE "listings" RENAME COLUMN "name" TO "title";
ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_team_member_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_team_member_fk";

ALTER TABLE "projects_gallery" DROP CONSTRAINT "team_member_rels_parent_fk";

ALTER TABLE "projects_gallery" DROP CONSTRAINT "team_member_rels_media_fk";

DROP INDEX IF EXISTS "team_member_rels_order_idx";
DROP INDEX IF EXISTS "team_member_rels_parent_idx";
DROP INDEX IF EXISTS "team_member_rels_path_idx";
ALTER TABLE "projects_gallery" ALTER COLUMN "id" SET DATA TYPE varchar;
ALTER TABLE "pages_rels" ADD COLUMN "teammates_id" integer;
ALTER TABLE "pages_rels" ADD COLUMN "involvement_groups_id" integer;
ALTER TABLE "_pages_v_rels" ADD COLUMN "teammates_id" integer;
ALTER TABLE "_pages_v_rels" ADD COLUMN "involvement_groups_id" integer;
ALTER TABLE "posts_rels" ADD COLUMN "teammates_id" integer;
ALTER TABLE "posts_rels" ADD COLUMN "involvement_groups_id" integer;
ALTER TABLE "_posts_v_rels" ADD COLUMN "teammates_id" integer;
ALTER TABLE "_posts_v_rels" ADD COLUMN "involvement_groups_id" integer;
ALTER TABLE "projects" ADD COLUMN "address" varchar;
ALTER TABLE "projects" ADD COLUMN "website" varchar;
ALTER TABLE "projects" ADD COLUMN "instagram" varchar;
ALTER TABLE "projects_rels" ADD COLUMN "teammates_id" integer;
ALTER TABLE "projects_rels" ADD COLUMN "involvement_groups_id" integer;
ALTER TABLE "_projects_v" ADD COLUMN "version_address" varchar;
ALTER TABLE "_projects_v" ADD COLUMN "version_website" varchar;
ALTER TABLE "_projects_v" ADD COLUMN "version_instagram" varchar;
ALTER TABLE "_projects_v_rels" ADD COLUMN "teammates_id" integer;
ALTER TABLE "_projects_v_rels" ADD COLUMN "involvement_groups_id" integer;
ALTER TABLE "listings" ADD COLUMN "address" varchar;
ALTER TABLE "listings" ADD COLUMN "meta_title" varchar;
ALTER TABLE "listings" ADD COLUMN "meta_description" varchar;
ALTER TABLE "listings_rels" ADD COLUMN "categories_id" integer;
ALTER TABLE "_listings_v" ADD COLUMN "version_title" varchar;
ALTER TABLE "_listings_v" ADD COLUMN "version_address" varchar;
ALTER TABLE "_listings_v" ADD COLUMN "version_meta_title" varchar;
ALTER TABLE "_listings_v" ADD COLUMN "version_meta_description" varchar;
ALTER TABLE "_listings_v_rels" ADD COLUMN "categories_id" integer;
ALTER TABLE "projects_gallery" ADD COLUMN "_order" integer NOT NULL;
ALTER TABLE "projects_gallery" ADD COLUMN "_parent_id" integer NOT NULL;
CREATE INDEX IF NOT EXISTS "_projects_v_version_gallery_order_idx" ON "_projects_v_version_gallery" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_version_gallery_parent_id_idx" ON "_projects_v_version_gallery" ("_parent_id");
CREATE INDEX IF NOT EXISTS "teammates_strengths_order_idx" ON "teammates_strengths" ("order");
CREATE INDEX IF NOT EXISTS "teammates_strengths_parent_idx" ON "teammates_strengths" ("parent_id");
CREATE INDEX IF NOT EXISTS "teammates_created_at_idx" ON "teammates" ("created_at");
CREATE INDEX IF NOT EXISTS "teammates__status_idx" ON "teammates" ("_status");
CREATE INDEX IF NOT EXISTS "teammates_rels_order_idx" ON "teammates_rels" ("order");
CREATE INDEX IF NOT EXISTS "teammates_rels_parent_idx" ON "teammates_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "teammates_rels_path_idx" ON "teammates_rels" ("path");
CREATE INDEX IF NOT EXISTS "_teammates_v_version_strengths_order_idx" ON "_teammates_v_version_strengths" ("order");
CREATE INDEX IF NOT EXISTS "_teammates_v_version_strengths_parent_idx" ON "_teammates_v_version_strengths" ("parent_id");
CREATE INDEX IF NOT EXISTS "_teammates_v_version_version_created_at_idx" ON "_teammates_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_teammates_v_version_version__status_idx" ON "_teammates_v" ("version__status");
CREATE INDEX IF NOT EXISTS "_teammates_v_created_at_idx" ON "_teammates_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_teammates_v_updated_at_idx" ON "_teammates_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_teammates_v_latest_idx" ON "_teammates_v" ("latest");
CREATE INDEX IF NOT EXISTS "_teammates_v_rels_order_idx" ON "_teammates_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_teammates_v_rels_parent_idx" ON "_teammates_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_teammates_v_rels_path_idx" ON "_teammates_v_rels" ("path");
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
CREATE INDEX IF NOT EXISTS "projects_gallery_order_idx" ON "projects_gallery" ("_order");
CREATE INDEX IF NOT EXISTS "projects_gallery_parent_id_idx" ON "projects_gallery" ("_parent_id");
DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_involvement_groups_fk" FOREIGN KEY ("involvement_groups_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_involvement_groups_fk" FOREIGN KEY ("involvement_groups_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_involvement_groups_fk" FOREIGN KEY ("involvement_groups_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_involvement_groups_fk" FOREIGN KEY ("involvement_groups_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_involvement_groups_fk" FOREIGN KEY ("involvement_groups_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_involvement_groups_fk" FOREIGN KEY ("involvement_groups_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

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
 ALTER TABLE "projects_gallery" ADD CONSTRAINT "projects_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "team_member_id";
ALTER TABLE "_listings_v" DROP COLUMN IF EXISTS "version_name";
ALTER TABLE "_listings_v_rels" DROP COLUMN IF EXISTS "team_member_id";
ALTER TABLE "projects_gallery" DROP COLUMN IF EXISTS "order";
ALTER TABLE "projects_gallery" DROP COLUMN IF EXISTS "parent_id";
ALTER TABLE "projects_gallery" DROP COLUMN IF EXISTS "path";
ALTER TABLE "projects_gallery" DROP COLUMN IF EXISTS "media_id";
DO $$ BEGIN
 ALTER TABLE "_projects_v_version_gallery" ADD CONSTRAINT "_projects_v_version_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "teammates_strengths" ADD CONSTRAINT "teammates_strengths_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "teammates_rels" ADD CONSTRAINT "teammates_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "teammates_rels" ADD CONSTRAINT "teammates_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "teammates_rels" ADD CONSTRAINT "teammates_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_teammates_v_version_strengths" ADD CONSTRAINT "_teammates_v_version_strengths_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_teammates_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_teammates_v_rels" ADD CONSTRAINT "_teammates_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_teammates_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_teammates_v_rels" ADD CONSTRAINT "_teammates_v_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_teammates_v_rels" ADD CONSTRAINT "_teammates_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_teammates_v_rels" ADD CONSTRAINT "_teammates_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "involvement_groups_rels" ADD CONSTRAINT "involvement_groups_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "involvement_groups_rels" ADD CONSTRAINT "involvement_groups_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
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
 ALTER TABLE "_involvement_groups_v_rels" ADD CONSTRAINT "_involvement_groups_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_involvement_groups_v_rels" ADD CONSTRAINT "_involvement_groups_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_team_member_strengths" AS ENUM('Residential Real Estate', 'Commercial Real Estate');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "team_member_strengths" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_team_member_strengths",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "team_member" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"bio" varchar NOT NULL,
	"years_of_experience" numeric NOT NULL,
	"phone_number" varchar NOT NULL,
	"email" varchar NOT NULL,
	"slug" varchar,
	"instagram" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "team_member_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"media_id" integer
);

DROP TABLE "projects_gallery";
DROP TABLE "_projects_v_version_gallery";
DROP TABLE "teammates_strengths";
DROP TABLE "teammates";
DROP TABLE "teammates_rels";
DROP TABLE "_teammates_v_version_strengths";
DROP TABLE "_teammates_v";
DROP TABLE "_teammates_v_rels";
DROP TABLE "involvement_groups";
DROP TABLE "involvement_groups_rels";
DROP TABLE "_involvement_groups_v";
DROP TABLE "_involvement_groups_v_rels";
ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_teammates_fk";

ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_involvement_groups_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_teammates_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_involvement_groups_fk";

ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_teammates_fk";

ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_involvement_groups_fk";

ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_teammates_fk";

ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_involvement_groups_fk";

ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_teammates_fk";

ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_involvement_groups_fk";

ALTER TABLE "_projects_v_rels" DROP CONSTRAINT "_projects_v_rels_teammates_fk";

ALTER TABLE "_projects_v_rels" DROP CONSTRAINT "_projects_v_rels_involvement_groups_fk";

ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_categories_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_categories_fk";

ALTER TABLE "listings" ADD COLUMN "name" varchar;
ALTER TABLE "listings_rels" ADD COLUMN "team_member_id" integer;
ALTER TABLE "_listings_v" ADD COLUMN "version_name" varchar;
ALTER TABLE "_listings_v_rels" ADD COLUMN "team_member_id" integer;
CREATE INDEX IF NOT EXISTS "team_member_strengths_order_idx" ON "team_member_strengths" ("order");
CREATE INDEX IF NOT EXISTS "team_member_strengths_parent_idx" ON "team_member_strengths" ("parent_id");
CREATE INDEX IF NOT EXISTS "team_member_created_at_idx" ON "team_member" ("created_at");
CREATE INDEX IF NOT EXISTS "team_member_rels_order_idx" ON "team_member_rels" ("order");
CREATE INDEX IF NOT EXISTS "team_member_rels_parent_idx" ON "team_member_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "team_member_rels_path_idx" ON "team_member_rels" ("path");
DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_team_member_fk" FOREIGN KEY ("team_member_id") REFERENCES "team_member"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_team_member_fk" FOREIGN KEY ("team_member_id") REFERENCES "team_member"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "teammates_id";
ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "involvement_groups_id";
ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "teammates_id";
ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "involvement_groups_id";
ALTER TABLE "posts_rels" DROP COLUMN IF EXISTS "teammates_id";
ALTER TABLE "posts_rels" DROP COLUMN IF EXISTS "involvement_groups_id";
ALTER TABLE "_posts_v_rels" DROP COLUMN IF EXISTS "teammates_id";
ALTER TABLE "_posts_v_rels" DROP COLUMN IF EXISTS "involvement_groups_id";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "address";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "website";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "instagram";
ALTER TABLE "projects_rels" DROP COLUMN IF EXISTS "teammates_id";
ALTER TABLE "projects_rels" DROP COLUMN IF EXISTS "involvement_groups_id";
ALTER TABLE "_projects_v" DROP COLUMN IF EXISTS "version_address";
ALTER TABLE "_projects_v" DROP COLUMN IF EXISTS "version_website";
ALTER TABLE "_projects_v" DROP COLUMN IF EXISTS "version_instagram";
ALTER TABLE "_projects_v_rels" DROP COLUMN IF EXISTS "teammates_id";
ALTER TABLE "_projects_v_rels" DROP COLUMN IF EXISTS "involvement_groups_id";
ALTER TABLE "listings" DROP COLUMN IF EXISTS "title";
ALTER TABLE "listings" DROP COLUMN IF EXISTS "address";
ALTER TABLE "listings" DROP COLUMN IF EXISTS "meta_title";
ALTER TABLE "listings" DROP COLUMN IF EXISTS "meta_description";
ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "categories_id";
ALTER TABLE "_listings_v" DROP COLUMN IF EXISTS "version_title";
ALTER TABLE "_listings_v" DROP COLUMN IF EXISTS "version_address";
ALTER TABLE "_listings_v" DROP COLUMN IF EXISTS "version_meta_title";
ALTER TABLE "_listings_v" DROP COLUMN IF EXISTS "version_meta_description";
ALTER TABLE "_listings_v_rels" DROP COLUMN IF EXISTS "categories_id";
DO $$ BEGIN
 ALTER TABLE "team_member_strengths" ADD CONSTRAINT "team_member_strengths_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "team_member"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "team_member_rels" ADD CONSTRAINT "team_member_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "team_member"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "team_member_rels" ADD CONSTRAINT "team_member_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};
