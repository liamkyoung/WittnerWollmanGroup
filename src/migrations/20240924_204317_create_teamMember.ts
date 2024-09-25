import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
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

CREATE INDEX IF NOT EXISTS "team_strengths_order_idx" ON "team_strengths" ("order");
CREATE INDEX IF NOT EXISTS "team_strengths_parent_idx" ON "team_strengths" ("parent_id");
CREATE INDEX IF NOT EXISTS "team_created_at_idx" ON "team" ("created_at");
CREATE INDEX IF NOT EXISTS "team_rels_order_idx" ON "team_rels" ("order");
CREATE INDEX IF NOT EXISTS "team_rels_parent_idx" ON "team_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "team_rels_path_idx" ON "team_rels" ("path");
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

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "team_strengths";
DROP TABLE "team";
DROP TABLE "team_rels";`);

};
