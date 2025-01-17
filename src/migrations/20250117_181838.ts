import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "teammates" DROP COLUMN IF EXISTS "bio";
ALTER TABLE "_teammates_v" DROP COLUMN IF EXISTS "version_bio";`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "teammates" ADD COLUMN "bio" varchar;
ALTER TABLE "_teammates_v" ADD COLUMN "version_bio" varchar;`);

};
