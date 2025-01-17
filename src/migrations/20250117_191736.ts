import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "pages_blocks_media_block" DROP COLUMN IF EXISTS "position";
ALTER TABLE "_pages_v_blocks_media_block" DROP COLUMN IF EXISTS "position";
ALTER TABLE "posts_blocks_media_block" DROP COLUMN IF EXISTS "position";
ALTER TABLE "_posts_v_blocks_media_block" DROP COLUMN IF EXISTS "position";
ALTER TABLE "projects_blocks_media_block" DROP COLUMN IF EXISTS "position";
ALTER TABLE "_projects_v_blocks_media_block" DROP COLUMN IF EXISTS "position";
ALTER TABLE "listings_blocks_media_block" DROP COLUMN IF EXISTS "position";
ALTER TABLE "_listings_v_blocks_media_block" DROP COLUMN IF EXISTS "position";
ALTER TABLE "services_blocks_media_block" DROP COLUMN IF EXISTS "position";
ALTER TABLE "_services_v_blocks_media_block" DROP COLUMN IF EXISTS "position";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "public"."enum_pages_blocks_media_block_position" AS ENUM('default', 'left', 'right', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__pages_v_blocks_media_block_position" AS ENUM('default', 'left', 'right', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum_posts_blocks_media_block_position" AS ENUM('default', 'left', 'right', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__posts_v_blocks_media_block_position" AS ENUM('default', 'left', 'right', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum_projects_blocks_media_block_position" AS ENUM('default', 'left', 'right', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__projects_v_blocks_media_block_position" AS ENUM('default', 'left', 'right', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum_listings_blocks_media_block_position" AS ENUM('default', 'left', 'right', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__listings_v_blocks_media_block_position" AS ENUM('default', 'left', 'right', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum_services_blocks_media_block_position" AS ENUM('default', 'left', 'right', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__services_v_blocks_media_block_position" AS ENUM('default', 'left', 'right', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages_blocks_media_block" ADD COLUMN "position" "enum_pages_blocks_media_block_position";
ALTER TABLE "_pages_v_blocks_media_block" ADD COLUMN "position" "enum__pages_v_blocks_media_block_position";
ALTER TABLE "posts_blocks_media_block" ADD COLUMN "position" "enum_posts_blocks_media_block_position";
ALTER TABLE "_posts_v_blocks_media_block" ADD COLUMN "position" "enum__posts_v_blocks_media_block_position";
ALTER TABLE "projects_blocks_media_block" ADD COLUMN "position" "enum_projects_blocks_media_block_position";
ALTER TABLE "_projects_v_blocks_media_block" ADD COLUMN "position" "enum__projects_v_blocks_media_block_position";
ALTER TABLE "listings_blocks_media_block" ADD COLUMN "position" "enum_listings_blocks_media_block_position";
ALTER TABLE "_listings_v_blocks_media_block" ADD COLUMN "position" "enum__listings_v_blocks_media_block_position";
ALTER TABLE "services_blocks_media_block" ADD COLUMN "position" "enum_services_blocks_media_block_position";
ALTER TABLE "_services_v_blocks_media_block" ADD COLUMN "position" "enum__services_v_blocks_media_block_position";`);

};
