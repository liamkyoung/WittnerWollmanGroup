import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "pages" ADD COLUMN "hero_centered_text" boolean;
ALTER TABLE "_pages_v" ADD COLUMN "version_hero_centered_text" boolean;
ALTER TABLE "posts" ADD COLUMN "hero_centered_text" boolean;
ALTER TABLE "_posts_v" ADD COLUMN "version_hero_centered_text" boolean;
ALTER TABLE "services" ADD COLUMN "hero_centered_text" boolean;
ALTER TABLE "_services_v" ADD COLUMN "version_hero_centered_text" boolean;`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_centered_text";
ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_centered_text";
ALTER TABLE "posts" DROP COLUMN IF EXISTS "hero_centered_text";
ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "version_hero_centered_text";
ALTER TABLE "services" DROP COLUMN IF EXISTS "hero_centered_text";
ALTER TABLE "_services_v" DROP COLUMN IF EXISTS "version_hero_centered_text";`);

};
