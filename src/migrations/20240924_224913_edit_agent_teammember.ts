import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_team_member_strengths" AS ENUM('Residential Real Estate', 'Commercial Real Estate');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TYPE "enum_pages_blocks_archive_relation_to" ADD VALUE 'listings';
ALTER TYPE "enum__pages_v_blocks_archive_relation_to" ADD VALUE 'listings';
ALTER TYPE "enum_posts_blocks_archive_relation_to" ADD VALUE 'listings';
ALTER TYPE "enum__posts_v_blocks_archive_relation_to" ADD VALUE 'listings';
ALTER TYPE "enum_projects_blocks_archive_relation_to" ADD VALUE 'listings';
ALTER TYPE "enum__projects_v_blocks_archive_relation_to" ADD VALUE 'listings';
ALTER TABLE "team_strengths" RENAME TO "team_member_strengths";
ALTER TABLE "team" RENAME TO "team_member";
ALTER TABLE "team_rels" RENAME TO "team_member_rels";
ALTER TABLE "listings_rels" RENAME COLUMN "team_id" TO "team_member_id";
ALTER TABLE "_listings_v_rels" RENAME COLUMN "team_id" TO "team_member_id";
ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_team_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_team_fk";

ALTER TABLE "team_member_strengths" DROP CONSTRAINT "team_strengths_parent_fk";

ALTER TABLE "team_member_rels" DROP CONSTRAINT "team_rels_parent_fk";

ALTER TABLE "team_member_rels" DROP CONSTRAINT "team_rels_media_fk";

DROP INDEX IF EXISTS "team_strengths_order_idx";
DROP INDEX IF EXISTS "team_strengths_parent_idx";
DROP INDEX IF EXISTS "team_created_at_idx";
DROP INDEX IF EXISTS "team_rels_order_idx";
DROP INDEX IF EXISTS "team_rels_parent_idx";
DROP INDEX IF EXISTS "team_rels_path_idx";
ALTER TABLE "team_member_strengths" ALTER COLUMN "value" SET DATA TYPE enum_team_member_strengths;
ALTER TABLE "pages_rels" ADD COLUMN "listings_id" integer;
ALTER TABLE "_pages_v_rels" ADD COLUMN "listings_id" integer;
ALTER TABLE "posts_rels" ADD COLUMN "listings_id" integer;
ALTER TABLE "_posts_v_rels" ADD COLUMN "listings_id" integer;
ALTER TABLE "projects_rels" ADD COLUMN "listings_id" integer;
ALTER TABLE "_projects_v_rels" ADD COLUMN "listings_id" integer;
CREATE INDEX IF NOT EXISTS "team_member_strengths_order_idx" ON "team_member_strengths" ("order");
CREATE INDEX IF NOT EXISTS "team_member_strengths_parent_idx" ON "team_member_strengths" ("parent_id");
CREATE INDEX IF NOT EXISTS "team_member_created_at_idx" ON "team_member" ("created_at");
CREATE INDEX IF NOT EXISTS "team_member_rels_order_idx" ON "team_member_rels" ("order");
CREATE INDEX IF NOT EXISTS "team_member_rels_parent_idx" ON "team_member_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "team_member_rels_path_idx" ON "team_member_rels" ("path");
DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_listings_fk" FOREIGN KEY ("listings_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_listings_fk" FOREIGN KEY ("listings_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_listings_fk" FOREIGN KEY ("listings_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_listings_fk" FOREIGN KEY ("listings_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_listings_fk" FOREIGN KEY ("listings_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_listings_fk" FOREIGN KEY ("listings_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

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

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_team_strengths" AS ENUM('Residential Real Estate', 'Commercial Real Estate');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "team_strengths" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_team_strengths",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "team" (
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

CREATE TABLE IF NOT EXISTS "team_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"media_id" integer
);

DROP TABLE "team_member_strengths";
DROP TABLE "team_member";
DROP TABLE "team_member_rels";
ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_listings_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_listings_fk";

ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_listings_fk";

ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_listings_fk";

ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_listings_fk";

ALTER TABLE "_projects_v_rels" DROP CONSTRAINT "_projects_v_rels_listings_fk";

ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_team_member_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_team_member_fk";

ALTER TABLE "listings_rels" ADD COLUMN "team_id" integer;
ALTER TABLE "_listings_v_rels" ADD COLUMN "team_id" integer;
CREATE INDEX IF NOT EXISTS "team_strengths_order_idx" ON "team_strengths" ("order");
CREATE INDEX IF NOT EXISTS "team_strengths_parent_idx" ON "team_strengths" ("parent_id");
CREATE INDEX IF NOT EXISTS "team_created_at_idx" ON "team" ("created_at");
CREATE INDEX IF NOT EXISTS "team_rels_order_idx" ON "team_rels" ("order");
CREATE INDEX IF NOT EXISTS "team_rels_parent_idx" ON "team_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "team_rels_path_idx" ON "team_rels" ("path");
DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_team_fk" FOREIGN KEY ("team_id") REFERENCES "team"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_team_fk" FOREIGN KEY ("team_id") REFERENCES "team"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "listings_id";
ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "listings_id";
ALTER TABLE "posts_rels" DROP COLUMN IF EXISTS "listings_id";
ALTER TABLE "_posts_v_rels" DROP COLUMN IF EXISTS "listings_id";
ALTER TABLE "projects_rels" DROP COLUMN IF EXISTS "listings_id";
ALTER TABLE "_projects_v_rels" DROP COLUMN IF EXISTS "listings_id";
ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "team_member_id";
ALTER TABLE "_listings_v_rels" DROP COLUMN IF EXISTS "team_member_id";
DO $$ BEGIN
 ALTER TABLE "team_strengths" ADD CONSTRAINT "team_strengths_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "team"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "team_rels" ADD CONSTRAINT "team_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "team"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "team_rels" ADD CONSTRAINT "team_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};
