import type { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`

ALTER TYPE "enum_pages_blocks_archive_relation_to" ADD VALUE 'teammates';
ALTER TYPE "enum_pages_blocks_archive_relation_to" ADD VALUE 'involvementGroups';
ALTER TYPE "enum_pages_blocks_archive_relation_to" ADD VALUE 'involvementEvents';
ALTER TYPE "enum_pages_blocks_archive_relation_to" ADD VALUE 'testimonials';
ALTER TYPE "enum_pages_blocks_archive_relation_to" ADD VALUE 'companies';
ALTER TYPE "enum_pages_blocks_archive_relation_to" ADD VALUE 'services';
ALTER TYPE "enum_pages_blocks_archive_relation_to" ADD VALUE 'communityResources';
ALTER TYPE "enum__pages_v_blocks_archive_relation_to" ADD VALUE 'teammates';
ALTER TYPE "enum__pages_v_blocks_archive_relation_to" ADD VALUE 'involvementGroups';
ALTER TYPE "enum__pages_v_blocks_archive_relation_to" ADD VALUE 'involvementEvents';
ALTER TYPE "enum__pages_v_blocks_archive_relation_to" ADD VALUE 'testimonials';
ALTER TYPE "enum__pages_v_blocks_archive_relation_to" ADD VALUE 'companies';
ALTER TYPE "enum__pages_v_blocks_archive_relation_to" ADD VALUE 'services';
ALTER TYPE "enum__pages_v_blocks_archive_relation_to" ADD VALUE 'communityResources';
ALTER TYPE "enum_posts_blocks_archive_relation_to" ADD VALUE 'teammates';
ALTER TYPE "enum_posts_blocks_archive_relation_to" ADD VALUE 'involvementGroups';
ALTER TYPE "enum_posts_blocks_archive_relation_to" ADD VALUE 'involvementEvents';
ALTER TYPE "enum_posts_blocks_archive_relation_to" ADD VALUE 'testimonials';
ALTER TYPE "enum_posts_blocks_archive_relation_to" ADD VALUE 'companies';
ALTER TYPE "enum_posts_blocks_archive_relation_to" ADD VALUE 'services';
ALTER TYPE "enum_posts_blocks_archive_relation_to" ADD VALUE 'communityResources';
ALTER TYPE "enum__posts_v_blocks_archive_relation_to" ADD VALUE 'teammates';
ALTER TYPE "enum__posts_v_blocks_archive_relation_to" ADD VALUE 'involvementGroups';
ALTER TYPE "enum__posts_v_blocks_archive_relation_to" ADD VALUE 'involvementEvents';
ALTER TYPE "enum__posts_v_blocks_archive_relation_to" ADD VALUE 'testimonials';
ALTER TYPE "enum__posts_v_blocks_archive_relation_to" ADD VALUE 'companies';
ALTER TYPE "enum__posts_v_blocks_archive_relation_to" ADD VALUE 'services';
ALTER TYPE "enum__posts_v_blocks_archive_relation_to" ADD VALUE 'communityResources';
ALTER TYPE "enum_projects_blocks_archive_relation_to" ADD VALUE 'teammates';
ALTER TYPE "enum_projects_blocks_archive_relation_to" ADD VALUE 'involvementGroups';
ALTER TYPE "enum_projects_blocks_archive_relation_to" ADD VALUE 'involvementEvents';
ALTER TYPE "enum_projects_blocks_archive_relation_to" ADD VALUE 'testimonials';
ALTER TYPE "enum_projects_blocks_archive_relation_to" ADD VALUE 'companies';
ALTER TYPE "enum_projects_blocks_archive_relation_to" ADD VALUE 'services';
ALTER TYPE "enum_projects_blocks_archive_relation_to" ADD VALUE 'communityResources';
ALTER TYPE "enum__projects_v_blocks_archive_relation_to" ADD VALUE 'teammates';
ALTER TYPE "enum__projects_v_blocks_archive_relation_to" ADD VALUE 'involvementGroups';
ALTER TYPE "enum__projects_v_blocks_archive_relation_to" ADD VALUE 'involvementEvents';
ALTER TYPE "enum__projects_v_blocks_archive_relation_to" ADD VALUE 'testimonials';
ALTER TYPE "enum__projects_v_blocks_archive_relation_to" ADD VALUE 'companies';
ALTER TYPE "enum__projects_v_blocks_archive_relation_to" ADD VALUE 'services';
ALTER TYPE "enum__projects_v_blocks_archive_relation_to" ADD VALUE 'communityResources';
ALTER TABLE "pages_rels" ADD COLUMN "teammates_id" integer;
ALTER TABLE "pages_rels" ADD COLUMN "involvement_groups_id" integer;
ALTER TABLE "pages_rels" ADD COLUMN "involvement_events_id" integer;
ALTER TABLE "pages_rels" ADD COLUMN "testimonials_id" integer;
ALTER TABLE "pages_rels" ADD COLUMN "companies_id" integer;
ALTER TABLE "pages_rels" ADD COLUMN "services_id" integer;
ALTER TABLE "pages_rels" ADD COLUMN "community_resources_id" integer;
ALTER TABLE "_pages_v_rels" ADD COLUMN "teammates_id" integer;
ALTER TABLE "_pages_v_rels" ADD COLUMN "involvement_groups_id" integer;
ALTER TABLE "_pages_v_rels" ADD COLUMN "involvement_events_id" integer;
ALTER TABLE "_pages_v_rels" ADD COLUMN "testimonials_id" integer;
ALTER TABLE "_pages_v_rels" ADD COLUMN "companies_id" integer;
ALTER TABLE "_pages_v_rels" ADD COLUMN "services_id" integer;
ALTER TABLE "_pages_v_rels" ADD COLUMN "community_resources_id" integer;
ALTER TABLE "posts_rels" ADD COLUMN "teammates_id" integer;
ALTER TABLE "posts_rels" ADD COLUMN "involvement_groups_id" integer;
ALTER TABLE "posts_rels" ADD COLUMN "involvement_events_id" integer;
ALTER TABLE "posts_rels" ADD COLUMN "testimonials_id" integer;
ALTER TABLE "posts_rels" ADD COLUMN "companies_id" integer;
ALTER TABLE "posts_rels" ADD COLUMN "services_id" integer;
ALTER TABLE "posts_rels" ADD COLUMN "community_resources_id" integer;
ALTER TABLE "_posts_v_rels" ADD COLUMN "teammates_id" integer;
ALTER TABLE "_posts_v_rels" ADD COLUMN "involvement_groups_id" integer;
ALTER TABLE "_posts_v_rels" ADD COLUMN "involvement_events_id" integer;
ALTER TABLE "_posts_v_rels" ADD COLUMN "testimonials_id" integer;
ALTER TABLE "_posts_v_rels" ADD COLUMN "companies_id" integer;
ALTER TABLE "_posts_v_rels" ADD COLUMN "services_id" integer;
ALTER TABLE "_posts_v_rels" ADD COLUMN "community_resources_id" integer;
ALTER TABLE "projects_rels" ADD COLUMN "teammates_id" integer;
ALTER TABLE "projects_rels" ADD COLUMN "involvement_groups_id" integer;
ALTER TABLE "projects_rels" ADD COLUMN "involvement_events_id" integer;
ALTER TABLE "projects_rels" ADD COLUMN "testimonials_id" integer;
ALTER TABLE "projects_rels" ADD COLUMN "companies_id" integer;
ALTER TABLE "projects_rels" ADD COLUMN "services_id" integer;
ALTER TABLE "projects_rels" ADD COLUMN "community_resources_id" integer;
ALTER TABLE "_projects_v_rels" ADD COLUMN "teammates_id" integer;
ALTER TABLE "_projects_v_rels" ADD COLUMN "involvement_groups_id" integer;
ALTER TABLE "_projects_v_rels" ADD COLUMN "involvement_events_id" integer;
ALTER TABLE "_projects_v_rels" ADD COLUMN "testimonials_id" integer;
ALTER TABLE "_projects_v_rels" ADD COLUMN "companies_id" integer;
ALTER TABLE "_projects_v_rels" ADD COLUMN "services_id" integer;
ALTER TABLE "_projects_v_rels" ADD COLUMN "community_resources_id" integer;
DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_involvement_groups_fk" FOREIGN KEY ("involvement_groups_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_involvement_events_fk" FOREIGN KEY ("involvement_events_id") REFERENCES "involvement_events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "testimonials"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_companies_fk" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_involvement_groups_fk" FOREIGN KEY ("involvement_groups_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_involvement_events_fk" FOREIGN KEY ("involvement_events_id") REFERENCES "involvement_events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "testimonials"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_companies_fk" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_involvement_groups_fk" FOREIGN KEY ("involvement_groups_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_involvement_events_fk" FOREIGN KEY ("involvement_events_id") REFERENCES "involvement_events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "testimonials"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_companies_fk" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_involvement_groups_fk" FOREIGN KEY ("involvement_groups_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_involvement_events_fk" FOREIGN KEY ("involvement_events_id") REFERENCES "involvement_events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "testimonials"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_companies_fk" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_involvement_groups_fk" FOREIGN KEY ("involvement_groups_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_involvement_events_fk" FOREIGN KEY ("involvement_events_id") REFERENCES "involvement_events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "testimonials"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_companies_fk" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_involvement_groups_fk" FOREIGN KEY ("involvement_groups_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_involvement_events_fk" FOREIGN KEY ("involvement_events_id") REFERENCES "involvement_events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "testimonials"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_companies_fk" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  await payload.db.drizzle.execute(sql`

ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_teammates_fk";

ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_involvement_groups_fk";

ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_involvement_events_fk";

ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_testimonials_fk";

ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_companies_fk";

ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_services_fk";

ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_community_resources_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_teammates_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_involvement_groups_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_involvement_events_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_testimonials_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_companies_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_services_fk";

ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_community_resources_fk";

ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_teammates_fk";

ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_involvement_groups_fk";

ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_involvement_events_fk";

ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_testimonials_fk";

ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_companies_fk";

ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_services_fk";

ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_community_resources_fk";

ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_teammates_fk";

ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_involvement_groups_fk";

ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_involvement_events_fk";

ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_testimonials_fk";

ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_companies_fk";

ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_services_fk";

ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_community_resources_fk";

ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_teammates_fk";

ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_involvement_groups_fk";

ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_involvement_events_fk";

ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_testimonials_fk";

ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_companies_fk";

ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_services_fk";

ALTER TABLE "projects_rels" DROP CONSTRAINT "projects_rels_community_resources_fk";

ALTER TABLE "_projects_v_rels" DROP CONSTRAINT "_projects_v_rels_teammates_fk";

ALTER TABLE "_projects_v_rels" DROP CONSTRAINT "_projects_v_rels_involvement_groups_fk";

ALTER TABLE "_projects_v_rels" DROP CONSTRAINT "_projects_v_rels_involvement_events_fk";

ALTER TABLE "_projects_v_rels" DROP CONSTRAINT "_projects_v_rels_testimonials_fk";

ALTER TABLE "_projects_v_rels" DROP CONSTRAINT "_projects_v_rels_companies_fk";

ALTER TABLE "_projects_v_rels" DROP CONSTRAINT "_projects_v_rels_services_fk";

ALTER TABLE "_projects_v_rels" DROP CONSTRAINT "_projects_v_rels_community_resources_fk";

ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "teammates_id";
ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "involvement_groups_id";
ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "involvement_events_id";
ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "testimonials_id";
ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "companies_id";
ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "services_id";
ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "community_resources_id";
ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "teammates_id";
ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "involvement_groups_id";
ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "involvement_events_id";
ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "testimonials_id";
ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "companies_id";
ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "services_id";
ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "community_resources_id";
ALTER TABLE "posts_rels" DROP COLUMN IF EXISTS "teammates_id";
ALTER TABLE "posts_rels" DROP COLUMN IF EXISTS "involvement_groups_id";
ALTER TABLE "posts_rels" DROP COLUMN IF EXISTS "involvement_events_id";
ALTER TABLE "posts_rels" DROP COLUMN IF EXISTS "testimonials_id";
ALTER TABLE "posts_rels" DROP COLUMN IF EXISTS "companies_id";
ALTER TABLE "posts_rels" DROP COLUMN IF EXISTS "services_id";
ALTER TABLE "posts_rels" DROP COLUMN IF EXISTS "community_resources_id";
ALTER TABLE "_posts_v_rels" DROP COLUMN IF EXISTS "teammates_id";
ALTER TABLE "_posts_v_rels" DROP COLUMN IF EXISTS "involvement_groups_id";
ALTER TABLE "_posts_v_rels" DROP COLUMN IF EXISTS "involvement_events_id";
ALTER TABLE "_posts_v_rels" DROP COLUMN IF EXISTS "testimonials_id";
ALTER TABLE "_posts_v_rels" DROP COLUMN IF EXISTS "companies_id";
ALTER TABLE "_posts_v_rels" DROP COLUMN IF EXISTS "services_id";
ALTER TABLE "_posts_v_rels" DROP COLUMN IF EXISTS "community_resources_id";
ALTER TABLE "projects_rels" DROP COLUMN IF EXISTS "teammates_id";
ALTER TABLE "projects_rels" DROP COLUMN IF EXISTS "involvement_groups_id";
ALTER TABLE "projects_rels" DROP COLUMN IF EXISTS "involvement_events_id";
ALTER TABLE "projects_rels" DROP COLUMN IF EXISTS "testimonials_id";
ALTER TABLE "projects_rels" DROP COLUMN IF EXISTS "companies_id";
ALTER TABLE "projects_rels" DROP COLUMN IF EXISTS "services_id";
ALTER TABLE "projects_rels" DROP COLUMN IF EXISTS "community_resources_id";
ALTER TABLE "_projects_v_rels" DROP COLUMN IF EXISTS "teammates_id";
ALTER TABLE "_projects_v_rels" DROP COLUMN IF EXISTS "involvement_groups_id";
ALTER TABLE "_projects_v_rels" DROP COLUMN IF EXISTS "involvement_events_id";
ALTER TABLE "_projects_v_rels" DROP COLUMN IF EXISTS "testimonials_id";
ALTER TABLE "_projects_v_rels" DROP COLUMN IF EXISTS "companies_id";
ALTER TABLE "_projects_v_rels" DROP COLUMN IF EXISTS "services_id";
ALTER TABLE "_projects_v_rels" DROP COLUMN IF EXISTS "community_resources_id";`)
}
