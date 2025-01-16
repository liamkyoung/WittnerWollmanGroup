import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "teammates_strengths";
DROP TABLE "_teammates_v_version_strengths";
ALTER TABLE "teammates" ADD COLUMN "strengths" varchar;
ALTER TABLE "_teammates_v" ADD COLUMN "version_strengths" varchar;`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "public"."enum_teammates_strengths" AS ENUM('Residential Real Estate', 'Commercial Real Estate');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__teammates_v_version_strengths" AS ENUM('Residential Real Estate', 'Commercial Real Estate');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "teammates_strengths" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_teammates_strengths",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "_teammates_v_version_strengths" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum__teammates_v_version_strengths",
	"id" serial PRIMARY KEY NOT NULL
);

DO $$ BEGIN
 ALTER TABLE "teammates_strengths" ADD CONSTRAINT "teammates_strengths_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_teammates_v_version_strengths" ADD CONSTRAINT "_teammates_v_version_strengths_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_teammates_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE INDEX IF NOT EXISTS "teammates_strengths_order_idx" ON "teammates_strengths" USING btree ("order");
CREATE INDEX IF NOT EXISTS "teammates_strengths_parent_idx" ON "teammates_strengths" USING btree ("parent_id");
CREATE INDEX IF NOT EXISTS "_teammates_v_version_strengths_order_idx" ON "_teammates_v_version_strengths" USING btree ("order");
CREATE INDEX IF NOT EXISTS "_teammates_v_version_strengths_parent_idx" ON "_teammates_v_version_strengths" USING btree ("parent_id");
ALTER TABLE "teammates" DROP COLUMN IF EXISTS "strengths";
ALTER TABLE "_teammates_v" DROP COLUMN IF EXISTS "version_strengths";`);

};
