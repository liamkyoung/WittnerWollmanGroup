import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_project_block_subheading_type" AS ENUM('none', 'text', 'location');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_project_block_subheading_type" AS ENUM('none', 'text', 'location');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_project_block_subheading_type" AS ENUM('none', 'text', 'location');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_project_block_subheading_type" AS ENUM('none', 'text', 'location');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_blocks_project_block_subheading_type" AS ENUM('none', 'text', 'location');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_blocks_project_block_subheading_type" AS ENUM('none', 'text', 'location');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_services_blocks_project_block_subheading_type" AS ENUM('none', 'text', 'location');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__services_v_blocks_project_block_subheading_type" AS ENUM('none', 'text', 'location');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TYPE "enum_listings_tenancy_type" ADD VALUE 'Single Tenant';
ALTER TYPE "enum_listings_tenancy_type" ADD VALUE 'Multi-Tenant';
ALTER TYPE "enum__listings_v_version_tenancy_type" ADD VALUE 'Single Tenant';
ALTER TYPE "enum__listings_v_version_tenancy_type" ADD VALUE 'Multi-Tenant';
DROP TABLE "comments";
DROP TABLE "comments_rels";
DROP TABLE "_comments_v";
DROP TABLE "_comments_v_rels";
ALTER TABLE "pages_blocks_project_block" RENAME COLUMN "external_link" TO "link";
ALTER TABLE "_pages_v_blocks_project_block" RENAME COLUMN "external_link" TO "link";
ALTER TABLE "projects_blocks_project_block" RENAME COLUMN "external_link" TO "link";
ALTER TABLE "_projects_v_blocks_project_block" RENAME COLUMN "external_link" TO "link";
ALTER TABLE "listings_blocks_project_block" RENAME COLUMN "external_link" TO "link";
ALTER TABLE "_listings_v_blocks_project_block" RENAME COLUMN "external_link" TO "link";
ALTER TABLE "services_blocks_project_block" RENAME COLUMN "external_link" TO "link";
ALTER TABLE "_services_v_blocks_project_block" RENAME COLUMN "external_link" TO "link";
ALTER TABLE "pages_blocks_project_block" ADD COLUMN "subheadingType" "enum_pages_blocks_project_block_subheading_type";
ALTER TABLE "_pages_v_blocks_project_block" ADD COLUMN "subheadingType" "enum__pages_v_blocks_project_block_subheading_type";
ALTER TABLE "projects_blocks_project_block" ADD COLUMN "subheadingType" "enum_projects_blocks_project_block_subheading_type";
ALTER TABLE "_projects_v_blocks_project_block" ADD COLUMN "subheadingType" "enum__projects_v_blocks_project_block_subheading_type";
ALTER TABLE "listings_blocks_project_block" ADD COLUMN "subheadingType" "enum_listings_blocks_project_block_subheading_type";
ALTER TABLE "_listings_v_blocks_project_block" ADD COLUMN "subheadingType" "enum__listings_v_blocks_project_block_subheading_type";
ALTER TABLE "services_blocks_project_block" ADD COLUMN "subheadingType" "enum_services_blocks_project_block_subheading_type";
ALTER TABLE "_services_v_blocks_project_block" ADD COLUMN "subheadingType" "enum__services_v_blocks_project_block_subheading_type";
ALTER TABLE "pages_blocks_media_block" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "pages_blocks_project_block" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "pages_blocks_project_block" DROP COLUMN IF EXISTS "location";
ALTER TABLE "_pages_v_blocks_media_block" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "_pages_v_blocks_project_block" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "_pages_v_blocks_project_block" DROP COLUMN IF EXISTS "location";
ALTER TABLE "posts_blocks_media_block" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "_posts_v_blocks_media_block" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "projects_blocks_media_block" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "projects_blocks_project_block" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "projects_blocks_project_block" DROP COLUMN IF EXISTS "location";
ALTER TABLE "_projects_v_blocks_media_block" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "_projects_v_blocks_project_block" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "_projects_v_blocks_project_block" DROP COLUMN IF EXISTS "location";
ALTER TABLE "listings_blocks_media_block" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "listings_blocks_project_block" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "listings_blocks_project_block" DROP COLUMN IF EXISTS "location";
ALTER TABLE "_listings_v_blocks_media_block" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "_listings_v_blocks_project_block" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "_listings_v_blocks_project_block" DROP COLUMN IF EXISTS "location";
ALTER TABLE "services_blocks_media_block" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "services_blocks_project_block" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "services_blocks_project_block" DROP COLUMN IF EXISTS "location";
ALTER TABLE "_services_v_blocks_media_block" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "_services_v_blocks_project_block" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "_services_v_blocks_project_block" DROP COLUMN IF EXISTS "location";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_comments_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__comments_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TYPE "enum_listings_tenancy_type" ADD VALUE 'singleTenant';
ALTER TYPE "enum_listings_tenancy_type" ADD VALUE 'multiTenant';
ALTER TYPE "enum__listings_v_version_tenancy_type" ADD VALUE 'singleTenant';
ALTER TYPE "enum__listings_v_version_tenancy_type" ADD VALUE 'multiTenant';
CREATE TABLE IF NOT EXISTS "comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"populated_user_name" varchar,
	"comment" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_comments_status"
);

CREATE TABLE IF NOT EXISTS "comments_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"users_id" integer,
	"posts_id" integer
);

CREATE TABLE IF NOT EXISTS "_comments_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_populated_user_name" varchar,
	"version_comment" varchar,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__comments_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_comments_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"comments_id" integer,
	"users_id" integer,
	"posts_id" integer
);

ALTER TABLE "pages_blocks_media_block" ADD COLUMN "invert_background" boolean;
ALTER TABLE "pages_blocks_project_block" ADD COLUMN "invert_background" boolean;
ALTER TABLE "pages_blocks_project_block" ADD COLUMN "location" varchar;
ALTER TABLE "pages_blocks_project_block" ADD COLUMN "external_link" varchar;
ALTER TABLE "_pages_v_blocks_media_block" ADD COLUMN "invert_background" boolean;
ALTER TABLE "_pages_v_blocks_project_block" ADD COLUMN "invert_background" boolean;
ALTER TABLE "_pages_v_blocks_project_block" ADD COLUMN "location" varchar;
ALTER TABLE "_pages_v_blocks_project_block" ADD COLUMN "external_link" varchar;
ALTER TABLE "posts_blocks_media_block" ADD COLUMN "invert_background" boolean;
ALTER TABLE "_posts_v_blocks_media_block" ADD COLUMN "invert_background" boolean;
ALTER TABLE "projects_blocks_media_block" ADD COLUMN "invert_background" boolean;
ALTER TABLE "projects_blocks_project_block" ADD COLUMN "invert_background" boolean;
ALTER TABLE "projects_blocks_project_block" ADD COLUMN "location" varchar;
ALTER TABLE "projects_blocks_project_block" ADD COLUMN "external_link" varchar;
ALTER TABLE "_projects_v_blocks_media_block" ADD COLUMN "invert_background" boolean;
ALTER TABLE "_projects_v_blocks_project_block" ADD COLUMN "invert_background" boolean;
ALTER TABLE "_projects_v_blocks_project_block" ADD COLUMN "location" varchar;
ALTER TABLE "_projects_v_blocks_project_block" ADD COLUMN "external_link" varchar;
ALTER TABLE "listings_blocks_media_block" ADD COLUMN "invert_background" boolean;
ALTER TABLE "listings_blocks_project_block" ADD COLUMN "invert_background" boolean;
ALTER TABLE "listings_blocks_project_block" ADD COLUMN "location" varchar;
ALTER TABLE "listings_blocks_project_block" ADD COLUMN "external_link" varchar;
ALTER TABLE "_listings_v_blocks_media_block" ADD COLUMN "invert_background" boolean;
ALTER TABLE "_listings_v_blocks_project_block" ADD COLUMN "invert_background" boolean;
ALTER TABLE "_listings_v_blocks_project_block" ADD COLUMN "location" varchar;
ALTER TABLE "_listings_v_blocks_project_block" ADD COLUMN "external_link" varchar;
ALTER TABLE "services_blocks_media_block" ADD COLUMN "invert_background" boolean;
ALTER TABLE "services_blocks_project_block" ADD COLUMN "invert_background" boolean;
ALTER TABLE "services_blocks_project_block" ADD COLUMN "location" varchar;
ALTER TABLE "services_blocks_project_block" ADD COLUMN "external_link" varchar;
ALTER TABLE "_services_v_blocks_media_block" ADD COLUMN "invert_background" boolean;
ALTER TABLE "_services_v_blocks_project_block" ADD COLUMN "invert_background" boolean;
ALTER TABLE "_services_v_blocks_project_block" ADD COLUMN "location" varchar;
ALTER TABLE "_services_v_blocks_project_block" ADD COLUMN "external_link" varchar;
CREATE INDEX IF NOT EXISTS "comments_created_at_idx" ON "comments" ("created_at");
CREATE INDEX IF NOT EXISTS "comments__status_idx" ON "comments" ("_status");
CREATE INDEX IF NOT EXISTS "comments_rels_order_idx" ON "comments_rels" ("order");
CREATE INDEX IF NOT EXISTS "comments_rels_parent_idx" ON "comments_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "comments_rels_path_idx" ON "comments_rels" ("path");
CREATE INDEX IF NOT EXISTS "_comments_v_version_version_created_at_idx" ON "_comments_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_comments_v_version_version__status_idx" ON "_comments_v" ("version__status");
CREATE INDEX IF NOT EXISTS "_comments_v_created_at_idx" ON "_comments_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_comments_v_updated_at_idx" ON "_comments_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_comments_v_latest_idx" ON "_comments_v" ("latest");
CREATE INDEX IF NOT EXISTS "_comments_v_rels_order_idx" ON "_comments_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_comments_v_rels_parent_idx" ON "_comments_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_comments_v_rels_path_idx" ON "_comments_v_rels" ("path");
ALTER TABLE "pages_blocks_project_block" DROP COLUMN IF EXISTS "subheadingType";
ALTER TABLE "pages_blocks_project_block" DROP COLUMN IF EXISTS "link";
ALTER TABLE "_pages_v_blocks_project_block" DROP COLUMN IF EXISTS "subheadingType";
ALTER TABLE "_pages_v_blocks_project_block" DROP COLUMN IF EXISTS "link";
ALTER TABLE "projects_blocks_project_block" DROP COLUMN IF EXISTS "subheadingType";
ALTER TABLE "projects_blocks_project_block" DROP COLUMN IF EXISTS "link";
ALTER TABLE "_projects_v_blocks_project_block" DROP COLUMN IF EXISTS "subheadingType";
ALTER TABLE "_projects_v_blocks_project_block" DROP COLUMN IF EXISTS "link";
ALTER TABLE "listings_blocks_project_block" DROP COLUMN IF EXISTS "subheadingType";
ALTER TABLE "listings_blocks_project_block" DROP COLUMN IF EXISTS "link";
ALTER TABLE "_listings_v_blocks_project_block" DROP COLUMN IF EXISTS "subheadingType";
ALTER TABLE "_listings_v_blocks_project_block" DROP COLUMN IF EXISTS "link";
ALTER TABLE "services_blocks_project_block" DROP COLUMN IF EXISTS "subheadingType";
ALTER TABLE "services_blocks_project_block" DROP COLUMN IF EXISTS "link";
ALTER TABLE "_services_v_blocks_project_block" DROP COLUMN IF EXISTS "subheadingType";
ALTER TABLE "_services_v_blocks_project_block" DROP COLUMN IF EXISTS "link";
DO $$ BEGIN
 ALTER TABLE "comments_rels" ADD CONSTRAINT "comments_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "comments"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "comments_rels" ADD CONSTRAINT "comments_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "comments_rels" ADD CONSTRAINT "comments_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_comments_v_rels" ADD CONSTRAINT "_comments_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_comments_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_comments_v_rels" ADD CONSTRAINT "_comments_v_rels_comments_fk" FOREIGN KEY ("comments_id") REFERENCES "comments"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_comments_v_rels" ADD CONSTRAINT "_comments_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_comments_v_rels" ADD CONSTRAINT "_comments_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};
