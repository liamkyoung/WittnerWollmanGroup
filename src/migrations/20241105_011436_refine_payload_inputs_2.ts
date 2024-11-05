import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TYPE "enum_pages_blocks_archive_bg_color" ADD VALUE 'default';
ALTER TYPE "enum__pages_v_blocks_archive_bg_color" ADD VALUE 'default';
ALTER TYPE "enum_posts_blocks_archive_bg_color" ADD VALUE 'default';
ALTER TYPE "enum__posts_v_blocks_archive_bg_color" ADD VALUE 'default';
ALTER TYPE "enum_projects_blocks_archive_bg_color" ADD VALUE 'default';
ALTER TYPE "enum__projects_v_blocks_archive_bg_color" ADD VALUE 'default';
ALTER TYPE "enum_listings_blocks_archive_bg_color" ADD VALUE 'default';
ALTER TYPE "enum__listings_v_blocks_archive_bg_color" ADD VALUE 'default';
ALTER TYPE "enum_services_blocks_archive_bg_color" ADD VALUE 'default';
ALTER TYPE "enum__services_v_blocks_archive_bg_color" ADD VALUE 'default';
CREATE TABLE IF NOT EXISTS "pages_blocks_project_block_links" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link" varchar,
	"button_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_project_block_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"link" varchar,
	"button_name" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "projects_blocks_project_block_links" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link" varchar,
	"button_name" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_project_block_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"link" varchar,
	"button_name" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "listings_blocks_project_block_links" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link" varchar,
	"button_name" varchar
);

CREATE TABLE IF NOT EXISTS "_listings_v_blocks_project_block_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"link" varchar,
	"button_name" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "services_blocks_project_block_links" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link" varchar,
	"button_name" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_blocks_project_block_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"link" varchar,
	"button_name" varchar,
	"_uuid" varchar
);

CREATE INDEX IF NOT EXISTS "pages_blocks_project_block_links_order_idx" ON "pages_blocks_project_block_links" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_project_block_links_parent_id_idx" ON "pages_blocks_project_block_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_project_block_links_order_idx" ON "_pages_v_blocks_project_block_links" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_project_block_links_parent_id_idx" ON "_pages_v_blocks_project_block_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_project_block_links_order_idx" ON "projects_blocks_project_block_links" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_project_block_links_parent_id_idx" ON "projects_blocks_project_block_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_project_block_links_order_idx" ON "_projects_v_blocks_project_block_links" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_project_block_links_parent_id_idx" ON "_projects_v_blocks_project_block_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "listings_blocks_project_block_links_order_idx" ON "listings_blocks_project_block_links" ("_order");
CREATE INDEX IF NOT EXISTS "listings_blocks_project_block_links_parent_id_idx" ON "listings_blocks_project_block_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_project_block_links_order_idx" ON "_listings_v_blocks_project_block_links" ("_order");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_project_block_links_parent_id_idx" ON "_listings_v_blocks_project_block_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "services_blocks_project_block_links_order_idx" ON "services_blocks_project_block_links" ("_order");
CREATE INDEX IF NOT EXISTS "services_blocks_project_block_links_parent_id_idx" ON "services_blocks_project_block_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_project_block_links_order_idx" ON "_services_v_blocks_project_block_links" ("_order");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_project_block_links_parent_id_idx" ON "_services_v_blocks_project_block_links" ("_parent_id");
ALTER TABLE "pages_blocks_cta" DROP COLUMN IF EXISTS "type";
ALTER TABLE "pages_blocks_project_block" DROP COLUMN IF EXISTS "link";
ALTER TABLE "_pages_v_blocks_cta" DROP COLUMN IF EXISTS "type";
ALTER TABLE "_pages_v_blocks_project_block" DROP COLUMN IF EXISTS "link";
ALTER TABLE "posts_blocks_cta" DROP COLUMN IF EXISTS "type";
ALTER TABLE "_posts_v_blocks_cta" DROP COLUMN IF EXISTS "type";
ALTER TABLE "projects_blocks_cta" DROP COLUMN IF EXISTS "type";
ALTER TABLE "projects_blocks_project_block" DROP COLUMN IF EXISTS "link";
ALTER TABLE "_projects_v_blocks_cta" DROP COLUMN IF EXISTS "type";
ALTER TABLE "_projects_v_blocks_project_block" DROP COLUMN IF EXISTS "link";
ALTER TABLE "listings_blocks_project_block" DROP COLUMN IF EXISTS "link";
ALTER TABLE "_listings_v_blocks_project_block" DROP COLUMN IF EXISTS "link";
ALTER TABLE "services_blocks_cta" DROP COLUMN IF EXISTS "type";
ALTER TABLE "services_blocks_project_block" DROP COLUMN IF EXISTS "link";
ALTER TABLE "_services_v_blocks_cta" DROP COLUMN IF EXISTS "type";
ALTER TABLE "_services_v_blocks_project_block" DROP COLUMN IF EXISTS "link";
DO $$ BEGIN
 ALTER TABLE "pages_blocks_project_block_links" ADD CONSTRAINT "pages_blocks_project_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_project_block_links" ADD CONSTRAINT "_pages_v_blocks_project_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_project_block_links" ADD CONSTRAINT "projects_blocks_project_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_project_block_links" ADD CONSTRAINT "_projects_v_blocks_project_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_blocks_project_block_links" ADD CONSTRAINT "listings_blocks_project_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "listings_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_blocks_project_block_links" ADD CONSTRAINT "_listings_v_blocks_project_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_listings_v_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_project_block_links" ADD CONSTRAINT "services_blocks_project_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "services_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_project_block_links" ADD CONSTRAINT "_services_v_blocks_project_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_services_v_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_cta_type" AS ENUM('default', 'listing', 'agent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_cta_type" AS ENUM('default', 'listing', 'agent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_posts_blocks_cta_type" AS ENUM('default', 'listing', 'agent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__posts_v_blocks_cta_type" AS ENUM('default', 'listing', 'agent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_cta_type" AS ENUM('default', 'listing', 'agent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_cta_type" AS ENUM('default', 'listing', 'agent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_services_blocks_cta_type" AS ENUM('default', 'listing', 'agent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__services_v_blocks_cta_type" AS ENUM('default', 'listing', 'agent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TYPE "enum_pages_blocks_archive_bg_color" ADD VALUE 'Default';
ALTER TYPE "enum__pages_v_blocks_archive_bg_color" ADD VALUE 'Default';
ALTER TYPE "enum_posts_blocks_archive_bg_color" ADD VALUE 'Default';
ALTER TYPE "enum__posts_v_blocks_archive_bg_color" ADD VALUE 'Default';
ALTER TYPE "enum_projects_blocks_archive_bg_color" ADD VALUE 'Default';
ALTER TYPE "enum__projects_v_blocks_archive_bg_color" ADD VALUE 'Default';
ALTER TYPE "enum_listings_blocks_archive_bg_color" ADD VALUE 'Default';
ALTER TYPE "enum__listings_v_blocks_archive_bg_color" ADD VALUE 'Default';
ALTER TYPE "enum_services_blocks_archive_bg_color" ADD VALUE 'Default';
ALTER TYPE "enum__services_v_blocks_archive_bg_color" ADD VALUE 'Default';
DROP TABLE "pages_blocks_project_block_links";
DROP TABLE "_pages_v_blocks_project_block_links";
DROP TABLE "projects_blocks_project_block_links";
DROP TABLE "_projects_v_blocks_project_block_links";
DROP TABLE "listings_blocks_project_block_links";
DROP TABLE "_listings_v_blocks_project_block_links";
DROP TABLE "services_blocks_project_block_links";
DROP TABLE "_services_v_blocks_project_block_links";
ALTER TABLE "pages_blocks_cta" ADD COLUMN "type" "enum_pages_blocks_cta_type";
ALTER TABLE "pages_blocks_project_block" ADD COLUMN "link" varchar;
ALTER TABLE "_pages_v_blocks_cta" ADD COLUMN "type" "enum__pages_v_blocks_cta_type";
ALTER TABLE "_pages_v_blocks_project_block" ADD COLUMN "link" varchar;
ALTER TABLE "posts_blocks_cta" ADD COLUMN "type" "enum_posts_blocks_cta_type";
ALTER TABLE "_posts_v_blocks_cta" ADD COLUMN "type" "enum__posts_v_blocks_cta_type";
ALTER TABLE "projects_blocks_cta" ADD COLUMN "type" "enum_projects_blocks_cta_type";
ALTER TABLE "projects_blocks_project_block" ADD COLUMN "link" varchar;
ALTER TABLE "_projects_v_blocks_cta" ADD COLUMN "type" "enum__projects_v_blocks_cta_type";
ALTER TABLE "_projects_v_blocks_project_block" ADD COLUMN "link" varchar;
ALTER TABLE "listings_blocks_project_block" ADD COLUMN "link" varchar;
ALTER TABLE "_listings_v_blocks_project_block" ADD COLUMN "link" varchar;
ALTER TABLE "services_blocks_cta" ADD COLUMN "type" "enum_services_blocks_cta_type";
ALTER TABLE "services_blocks_project_block" ADD COLUMN "link" varchar;
ALTER TABLE "_services_v_blocks_cta" ADD COLUMN "type" "enum__services_v_blocks_cta_type";
ALTER TABLE "_services_v_blocks_project_block" ADD COLUMN "link" varchar;`);

};
