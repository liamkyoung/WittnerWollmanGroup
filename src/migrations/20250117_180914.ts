import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "teammates" ADD COLUMN "bio_paragraph" jsonb;
ALTER TABLE "_teammates_v" ADD COLUMN "version_bio_paragraph" jsonb;`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "teammates" DROP COLUMN IF EXISTS "bio_paragraph";
ALTER TABLE "_teammates_v" DROP COLUMN IF EXISTS "version_bio_paragraph";`);

};
