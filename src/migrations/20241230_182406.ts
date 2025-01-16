import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "public"."enum_pages_hero_gradient" AS ENUM('none', 'red', 'white');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__pages_v_version_hero_gradient" AS ENUM('none', 'red', 'white');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum_posts_hero_gradient" AS ENUM('none', 'red', 'white');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__posts_v_version_hero_gradient" AS ENUM('none', 'red', 'white');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum_services_hero_gradient" AS ENUM('none', 'red', 'white');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "public"."enum__services_v_version_hero_gradient" AS ENUM('none', 'red', 'white');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages" ADD COLUMN "hero_gradient" "enum_pages_hero_gradient";
ALTER TABLE "_pages_v" ADD COLUMN "version_hero_gradient" "enum__pages_v_version_hero_gradient";
ALTER TABLE "posts" ADD COLUMN "hero_gradient" "enum_posts_hero_gradient";
ALTER TABLE "_posts_v" ADD COLUMN "version_hero_gradient" "enum__posts_v_version_hero_gradient";
ALTER TABLE "services" ADD COLUMN "hero_gradient" "enum_services_hero_gradient";
ALTER TABLE "_services_v" ADD COLUMN "version_hero_gradient" "enum__services_v_version_hero_gradient";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_gradient";
ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_gradient";
ALTER TABLE "posts" DROP COLUMN IF EXISTS "hero_gradient";
ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "version_hero_gradient";
ALTER TABLE "services" DROP COLUMN IF EXISTS "hero_gradient";
ALTER TABLE "_services_v" DROP COLUMN IF EXISTS "version_hero_gradient";`);

};
