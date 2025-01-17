import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "public"."enum_posts_blocks_project_block_subheading_type" AS ENUM('none', 'text', 'location');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum_posts_blocks_project_block_position" AS ENUM('left', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum_posts_blocks_project_block_bg_color" AS ENUM('white', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum_posts_blocks_project_block_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum_posts_blocks_project_block_links_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__posts_v_blocks_project_block_subheading_type" AS ENUM('none', 'text', 'location');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__posts_v_blocks_project_block_position" AS ENUM('left', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__posts_v_blocks_project_block_bg_color" AS ENUM('white', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__posts_v_blocks_project_block_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__posts_v_blocks_project_block_links_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "posts_blocks_project_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar
);

CREATE TABLE IF NOT EXISTS "posts_blocks_project_block_links" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "enum_posts_blocks_project_block_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_posts_blocks_project_block_links_link_appearance"
);

CREATE TABLE IF NOT EXISTS "posts_blocks_project_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"subheadingType" "enum_posts_blocks_project_block_subheading_type",
	"subheading" varchar,
	"description" varchar,
	"position" "enum_posts_blocks_project_block_position",
	"bgColor" "enum_posts_blocks_project_block_bg_color",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_posts_v_blocks_project_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_posts_v_blocks_project_block_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"link_type" "enum__posts_v_blocks_project_block_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__posts_v_blocks_project_block_links_link_appearance",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_posts_v_blocks_project_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"subheadingType" "enum__posts_v_blocks_project_block_subheading_type",
	"subheading" varchar,
	"description" varchar,
	"position" "enum__posts_v_blocks_project_block_position",
	"bgColor" "enum__posts_v_blocks_project_block_bg_color",
	"_uuid" varchar,
	"block_name" varchar
);

DO $$ BEGIN
 ALTER TABLE "posts_blocks_project_block_facts" ADD CONSTRAINT "posts_blocks_project_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_blocks_project_block_links" ADD CONSTRAINT "posts_blocks_project_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_blocks_project_block" ADD CONSTRAINT "posts_blocks_project_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_blocks_project_block_facts" ADD CONSTRAINT "_posts_v_blocks_project_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_blocks_project_block_links" ADD CONSTRAINT "_posts_v_blocks_project_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_blocks_project_block" ADD CONSTRAINT "_posts_v_blocks_project_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE INDEX IF NOT EXISTS "posts_blocks_project_block_facts_order_idx" ON "posts_blocks_project_block_facts" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "posts_blocks_project_block_facts_parent_id_idx" ON "posts_blocks_project_block_facts" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "posts_blocks_project_block_links_order_idx" ON "posts_blocks_project_block_links" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "posts_blocks_project_block_links_parent_id_idx" ON "posts_blocks_project_block_links" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "posts_blocks_project_block_order_idx" ON "posts_blocks_project_block" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "posts_blocks_project_block_parent_id_idx" ON "posts_blocks_project_block" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "posts_blocks_project_block_path_idx" ON "posts_blocks_project_block" USING btree ("_path");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_project_block_facts_order_idx" ON "_posts_v_blocks_project_block_facts" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_project_block_facts_parent_id_idx" ON "_posts_v_blocks_project_block_facts" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_project_block_links_order_idx" ON "_posts_v_blocks_project_block_links" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_project_block_links_parent_id_idx" ON "_posts_v_blocks_project_block_links" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_project_block_order_idx" ON "_posts_v_blocks_project_block" USING btree ("_order");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_project_block_parent_id_idx" ON "_posts_v_blocks_project_block" USING btree ("_parent_id");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_project_block_path_idx" ON "_posts_v_blocks_project_block" USING btree ("_path");`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "posts_blocks_project_block_facts";
DROP TABLE "posts_blocks_project_block_links";
DROP TABLE "posts_blocks_project_block";
DROP TABLE "_posts_v_blocks_project_block_facts";
DROP TABLE "_posts_v_blocks_project_block_links";
DROP TABLE "_posts_v_blocks_project_block";`);

};
