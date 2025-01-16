import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "involvement_groups" ADD COLUMN "highlight" varchar;
ALTER TABLE "_involvement_groups_v" ADD COLUMN "version_highlight" varchar;`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TABLE "involvement_groups" DROP COLUMN IF EXISTS "highlight";
ALTER TABLE "_involvement_groups_v" DROP COLUMN IF EXISTS "version_highlight";`);

};
