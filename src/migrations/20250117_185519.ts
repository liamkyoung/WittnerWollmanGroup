import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

ALTER TYPE "enum_pages_blocks_media_block_position" ADD VALUE 'left';
ALTER TYPE "enum_pages_blocks_media_block_position" ADD VALUE 'right';
ALTER TYPE "enum__pages_v_blocks_media_block_position" ADD VALUE 'left';
ALTER TYPE "enum__pages_v_blocks_media_block_position" ADD VALUE 'right';
ALTER TYPE "enum_posts_blocks_media_block_position" ADD VALUE 'left';
ALTER TYPE "enum_posts_blocks_media_block_position" ADD VALUE 'right';
ALTER TYPE "enum__posts_v_blocks_media_block_position" ADD VALUE 'left';
ALTER TYPE "enum__posts_v_blocks_media_block_position" ADD VALUE 'right';
ALTER TYPE "enum_projects_blocks_media_block_position" ADD VALUE 'left';
ALTER TYPE "enum_projects_blocks_media_block_position" ADD VALUE 'right';
ALTER TYPE "enum__projects_v_blocks_media_block_position" ADD VALUE 'left';
ALTER TYPE "enum__projects_v_blocks_media_block_position" ADD VALUE 'right';
ALTER TYPE "enum_listings_blocks_media_block_position" ADD VALUE 'left';
ALTER TYPE "enum_listings_blocks_media_block_position" ADD VALUE 'right';
ALTER TYPE "enum__listings_v_blocks_media_block_position" ADD VALUE 'left';
ALTER TYPE "enum__listings_v_blocks_media_block_position" ADD VALUE 'right';
ALTER TYPE "enum_services_blocks_media_block_position" ADD VALUE 'left';
ALTER TYPE "enum_services_blocks_media_block_position" ADD VALUE 'right';
ALTER TYPE "enum__services_v_blocks_media_block_position" ADD VALUE 'left';
ALTER TYPE "enum__services_v_blocks_media_block_position" ADD VALUE 'right';`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
// Migration code
};
