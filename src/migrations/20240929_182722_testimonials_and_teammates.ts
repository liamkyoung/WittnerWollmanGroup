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
 CREATE TYPE "enum_testimonials_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__testimonials_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

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

ALTER TABLE "team_member_strengths" RENAME TO "teammates_strengths";
ALTER TABLE "team_member" RENAME TO "teammates";
ALTER TABLE "team_member_rels" RENAME TO "teammates_rels";
ALTER TABLE "listings_rels" RENAME COLUMN "team_member_id" TO "teammates_id";
ALTER TABLE "_listings_v_rels" RENAME COLUMN "team_member_id" TO "teammates_id";
ALTER TABLE "teammates" RENAME COLUMN "name" TO "title";
ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_team_member_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_team_member_fk";

ALTER TABLE "teammates_strengths" DROP CONSTRAINT "team_member_strengths_parent_fk";

ALTER TABLE "teammates_rels" DROP CONSTRAINT "team_member_rels_parent_fk";

ALTER TABLE "teammates_rels" DROP CONSTRAINT "team_member_rels_media_fk";

DROP INDEX IF EXISTS "team_member_strengths_order_idx";
DROP INDEX IF EXISTS "team_member_strengths_parent_idx";
DROP INDEX IF EXISTS "team_member_created_at_idx";
DROP INDEX IF EXISTS "team_member_rels_order_idx";
DROP INDEX IF EXISTS "team_member_rels_parent_idx";
DROP INDEX IF EXISTS "team_member_rels_path_idx";
ALTER TABLE "teammates_strengths" ALTER COLUMN "value" SET DATA TYPE enum_teammates_strengths;
ALTER TABLE "teammates" ALTER COLUMN "bio" DROP NOT NULL;
ALTER TABLE "teammates" ALTER COLUMN "years_of_experience" DROP NOT NULL;
ALTER TABLE "teammates" ALTER COLUMN "phone_number" DROP NOT NULL;
ALTER TABLE "teammates" ALTER COLUMN "email" DROP NOT NULL;
ALTER TABLE "teammates" ALTER COLUMN "title" DROP NOT NULL;
ALTER TABLE "teammates" ADD COLUMN "facebook" varchar;
ALTER TABLE "teammates" ADD COLUMN "linkedin" varchar;
ALTER TABLE "teammates" ADD COLUMN "meta_title" varchar;
ALTER TABLE "teammates" ADD COLUMN "meta_description" varchar;
ALTER TABLE "teammates" ADD COLUMN "_status" "enum_teammates_status";
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
CREATE INDEX IF NOT EXISTS "teammates_strengths_order_idx" ON "teammates_strengths" ("order");
CREATE INDEX IF NOT EXISTS "teammates_strengths_parent_idx" ON "teammates_strengths" ("parent_id");
CREATE INDEX IF NOT EXISTS "teammates_created_at_idx" ON "teammates" ("created_at");
CREATE INDEX IF NOT EXISTS "teammates__status_idx" ON "teammates" ("_status");
CREATE INDEX IF NOT EXISTS "teammates_rels_order_idx" ON "teammates_rels" ("order");
CREATE INDEX IF NOT EXISTS "teammates_rels_parent_idx" ON "teammates_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "teammates_rels_path_idx" ON "teammates_rels" ("path");
DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
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

DROP TABLE "teammates_strengths";
DROP TABLE "teammates";
DROP TABLE "teammates_rels";
DROP TABLE "_teammates_v_version_strengths";
DROP TABLE "_teammates_v";
DROP TABLE "_teammates_v_rels";
DROP TABLE "testimonials";
DROP TABLE "testimonials_rels";
DROP TABLE "_testimonials_v";
DROP TABLE "_testimonials_v_rels";
ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_teammates_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_teammates_fk";

ALTER TABLE "listings_rels" ADD COLUMN "team_member_id" integer;
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

ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "teammates_id";
ALTER TABLE "_listings_v_rels" DROP COLUMN IF EXISTS "teammates_id";
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
