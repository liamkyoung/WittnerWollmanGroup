import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_cta_type" AS ENUM('default', 'listing', 'agent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_archive_bg_color" AS ENUM('Default', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_archive_display_header" AS ENUM('yes', 'no');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_project_block_position" AS ENUM('left', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_project_block_bg_color" AS ENUM('white', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_stat_block_bg_color" AS ENUM('white', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_cta_type" AS ENUM('default', 'listing', 'agent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_archive_bg_color" AS ENUM('Default', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_archive_display_header" AS ENUM('yes', 'no');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_project_block_position" AS ENUM('left', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_project_block_bg_color" AS ENUM('white', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_stat_block_bg_color" AS ENUM('white', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_posts_blocks_cta_type" AS ENUM('default', 'listing', 'agent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_posts_blocks_archive_bg_color" AS ENUM('Default', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_posts_blocks_archive_display_header" AS ENUM('yes', 'no');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__posts_v_blocks_cta_type" AS ENUM('default', 'listing', 'agent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__posts_v_blocks_archive_bg_color" AS ENUM('Default', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__posts_v_blocks_archive_display_header" AS ENUM('yes', 'no');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_cta_type" AS ENUM('default', 'listing', 'agent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_archive_bg_color" AS ENUM('Default', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_archive_display_header" AS ENUM('yes', 'no');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_project_block_position" AS ENUM('left', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_project_block_bg_color" AS ENUM('white', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_stat_block_bg_color" AS ENUM('white', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_cta_type" AS ENUM('default', 'listing', 'agent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_archive_bg_color" AS ENUM('Default', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_archive_display_header" AS ENUM('yes', 'no');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_project_block_position" AS ENUM('left', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_project_block_bg_color" AS ENUM('white', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_stat_block_bg_color" AS ENUM('white', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_blocks_content_columns_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_blocks_media_block_position" AS ENUM('default', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_blocks_archive_populate_by" AS ENUM('collection', 'selection');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_blocks_archive_relation_to" AS ENUM('posts', 'projects', 'listings', 'teammates', 'involvementGroups', 'involvementEvents', 'testimonials', 'companies', 'services', 'communityResources');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_blocks_archive_bg_color" AS ENUM('Default', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_blocks_archive_display_header" AS ENUM('yes', 'no');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_blocks_project_block_position" AS ENUM('left', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_blocks_project_block_bg_color" AS ENUM('white', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_blocks_stat_block_bg_color" AS ENUM('white', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_blocks_content_columns_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_blocks_media_block_position" AS ENUM('default', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_blocks_archive_relation_to" AS ENUM('posts', 'projects', 'listings', 'teammates', 'involvementGroups', 'involvementEvents', 'testimonials', 'companies', 'services', 'communityResources');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_blocks_archive_bg_color" AS ENUM('Default', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_blocks_archive_display_header" AS ENUM('yes', 'no');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_blocks_project_block_position" AS ENUM('left', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_blocks_project_block_bg_color" AS ENUM('white', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_blocks_stat_block_bg_color" AS ENUM('white', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_services_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'default', 'fullscreen', 'projectHero');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_services_hero_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_services_hero_links_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_services_blocks_cta_type" AS ENUM('default', 'listing', 'agent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_services_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_services_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_services_blocks_content_columns_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_services_blocks_media_block_position" AS ENUM('default', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_services_blocks_archive_populate_by" AS ENUM('collection', 'selection');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_services_blocks_archive_relation_to" AS ENUM('posts', 'projects', 'listings', 'teammates', 'involvementGroups', 'involvementEvents', 'testimonials', 'companies', 'services', 'communityResources');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_services_blocks_archive_bg_color" AS ENUM('Default', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_services_blocks_archive_display_header" AS ENUM('yes', 'no');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_services_blocks_project_block_position" AS ENUM('left', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_services_blocks_project_block_bg_color" AS ENUM('white', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_services_blocks_stat_block_bg_color" AS ENUM('white', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__services_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'default', 'fullscreen', 'projectHero');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__services_v_version_hero_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__services_v_version_hero_links_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__services_v_blocks_cta_type" AS ENUM('default', 'listing', 'agent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__services_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__services_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__services_v_blocks_content_columns_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__services_v_blocks_media_block_position" AS ENUM('default', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__services_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__services_v_blocks_archive_relation_to" AS ENUM('posts', 'projects', 'listings', 'teammates', 'involvementGroups', 'involvementEvents', 'testimonials', 'companies', 'services', 'communityResources');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__services_v_blocks_archive_bg_color" AS ENUM('Default', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__services_v_blocks_archive_display_header" AS ENUM('yes', 'no');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__services_v_blocks_project_block_position" AS ENUM('left', 'right');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__services_v_blocks_project_block_bg_color" AS ENUM('white', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__services_v_blocks_stat_block_bg_color" AS ENUM('white', 'red');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TYPE "enum_pages_hero_type" ADD VALUE 'default';
ALTER TYPE "enum_pages_hero_type" ADD VALUE 'fullscreen';
ALTER TYPE "enum_pages_hero_type" ADD VALUE 'projectHero';
ALTER TYPE "enum__pages_v_version_hero_type" ADD VALUE 'default';
ALTER TYPE "enum__pages_v_version_hero_type" ADD VALUE 'fullscreen';
ALTER TYPE "enum__pages_v_version_hero_type" ADD VALUE 'projectHero';
ALTER TYPE "enum_posts_hero_type" ADD VALUE 'default';
ALTER TYPE "enum_posts_hero_type" ADD VALUE 'fullscreen';
ALTER TYPE "enum_posts_hero_type" ADD VALUE 'projectHero';
ALTER TYPE "enum__posts_v_version_hero_type" ADD VALUE 'default';
ALTER TYPE "enum__posts_v_version_hero_type" ADD VALUE 'fullscreen';
ALTER TYPE "enum__posts_v_version_hero_type" ADD VALUE 'projectHero';
CREATE TABLE IF NOT EXISTS "pages_blocks_project_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_project_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum_pages_blocks_project_block_position",
	"bgColor" "enum_pages_blocks_project_block_bg_color",
	"title" varchar,
	"location" varchar,
	"subheading" varchar,
	"description" varchar,
	"external_link" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_stats_and_video_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_stats_and_video_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"youtube_link" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_content_and_stats_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_content_and_stats_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"rich_text" jsonb,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_stat_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_stat_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"bgColor" "enum_pages_blocks_stat_block_bg_color",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_google_maps_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_project_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_project_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum__pages_v_blocks_project_block_position",
	"bgColor" "enum__pages_v_blocks_project_block_bg_color",
	"title" varchar,
	"location" varchar,
	"subheading" varchar,
	"description" varchar,
	"external_link" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_stats_and_video_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_stats_and_video_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"youtube_link" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content_and_stats_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content_and_stats_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"rich_text" jsonb,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_stat_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_stat_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"bgColor" "enum__pages_v_blocks_stat_block_bg_color",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_google_maps_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "projects_slider" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"caption" varchar
);

CREATE TABLE IF NOT EXISTS "projects_blocks_project_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar
);

CREATE TABLE IF NOT EXISTS "projects_blocks_project_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum_projects_blocks_project_block_position",
	"bgColor" "enum_projects_blocks_project_block_bg_color",
	"title" varchar,
	"location" varchar,
	"subheading" varchar,
	"description" varchar,
	"external_link" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "projects_blocks_stats_and_video_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar
);

CREATE TABLE IF NOT EXISTS "projects_blocks_stats_and_video_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"youtube_link" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "projects_blocks_stat_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar
);

CREATE TABLE IF NOT EXISTS "projects_blocks_stat_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"bgColor" "enum_projects_blocks_stat_block_bg_color",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_version_slider" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"caption" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_project_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_project_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum__projects_v_blocks_project_block_position",
	"bgColor" "enum__projects_v_blocks_project_block_bg_color",
	"title" varchar,
	"location" varchar,
	"subheading" varchar,
	"description" varchar,
	"external_link" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_stats_and_video_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_stats_and_video_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"youtube_link" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_stat_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_stat_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"bgColor" "enum__projects_v_blocks_stat_block_bg_color",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "listings_blocks_content_columns" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"size" "enum_listings_blocks_content_columns_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum_listings_blocks_content_columns_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_listings_blocks_content_columns_link_appearance"
);

CREATE TABLE IF NOT EXISTS "listings_blocks_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "listings_blocks_media_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum_listings_blocks_media_block_position",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "listings_blocks_archive" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"intro_content" jsonb,
	"populateBy" "enum_listings_blocks_archive_populate_by",
	"relationTo" "enum_listings_blocks_archive_relation_to",
	"limit" numeric,
	"populated_docs_total" numeric,
	"bgColor" "enum_listings_blocks_archive_bg_color",
	"displayHeader" "enum_listings_blocks_archive_display_header",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "listings_blocks_project_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar
);

CREATE TABLE IF NOT EXISTS "listings_blocks_project_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum_listings_blocks_project_block_position",
	"bgColor" "enum_listings_blocks_project_block_bg_color",
	"title" varchar,
	"location" varchar,
	"subheading" varchar,
	"description" varchar,
	"external_link" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "listings_blocks_stats_and_video_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar
);

CREATE TABLE IF NOT EXISTS "listings_blocks_stats_and_video_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"youtube_link" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "listings_blocks_stat_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar
);

CREATE TABLE IF NOT EXISTS "listings_blocks_stat_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"bgColor" "enum_listings_blocks_stat_block_bg_color",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_listings_v_blocks_content_columns" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"size" "enum__listings_v_blocks_content_columns_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum__listings_v_blocks_content_columns_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__listings_v_blocks_content_columns_link_appearance",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_listings_v_blocks_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_listings_v_blocks_media_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum__listings_v_blocks_media_block_position",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_listings_v_blocks_archive" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"intro_content" jsonb,
	"populateBy" "enum__listings_v_blocks_archive_populate_by",
	"relationTo" "enum__listings_v_blocks_archive_relation_to",
	"limit" numeric,
	"populated_docs_total" numeric,
	"bgColor" "enum__listings_v_blocks_archive_bg_color",
	"displayHeader" "enum__listings_v_blocks_archive_display_header",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_listings_v_blocks_project_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_listings_v_blocks_project_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum__listings_v_blocks_project_block_position",
	"bgColor" "enum__listings_v_blocks_project_block_bg_color",
	"title" varchar,
	"location" varchar,
	"subheading" varchar,
	"description" varchar,
	"external_link" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_listings_v_blocks_stats_and_video_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_listings_v_blocks_stats_and_video_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"youtube_link" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_listings_v_blocks_stat_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_listings_v_blocks_stat_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"bgColor" "enum__listings_v_blocks_stat_block_bg_color",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "services_hero_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "enum_services_hero_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_services_hero_links_link_appearance"
);

CREATE TABLE IF NOT EXISTS "services_blocks_cta" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"type" "enum_services_blocks_cta_type",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "services_blocks_content_columns" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"size" "enum_services_blocks_content_columns_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum_services_blocks_content_columns_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_services_blocks_content_columns_link_appearance"
);

CREATE TABLE IF NOT EXISTS "services_blocks_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "services_blocks_media_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum_services_blocks_media_block_position",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "services_blocks_archive" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"intro_content" jsonb,
	"populateBy" "enum_services_blocks_archive_populate_by",
	"relationTo" "enum_services_blocks_archive_relation_to",
	"limit" numeric,
	"populated_docs_total" numeric,
	"bgColor" "enum_services_blocks_archive_bg_color",
	"displayHeader" "enum_services_blocks_archive_display_header",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "services_blocks_project_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar
);

CREATE TABLE IF NOT EXISTS "services_blocks_project_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum_services_blocks_project_block_position",
	"bgColor" "enum_services_blocks_project_block_bg_color",
	"title" varchar,
	"location" varchar,
	"subheading" varchar,
	"description" varchar,
	"external_link" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "services_blocks_stats_and_video_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar
);

CREATE TABLE IF NOT EXISTS "services_blocks_stats_and_video_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"youtube_link" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "services_blocks_stat_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar
);

CREATE TABLE IF NOT EXISTS "services_blocks_stat_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"bgColor" "enum_services_blocks_stat_block_bg_color",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "services_blocks_content_and_stats_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar
);

CREATE TABLE IF NOT EXISTS "services_blocks_content_and_stats_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"rich_text" jsonb,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_version_hero_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"link_type" "enum__services_v_version_hero_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__services_v_version_hero_links_link_appearance",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_blocks_cta" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"type" "enum__services_v_blocks_cta_type",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_blocks_content_columns" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"size" "enum__services_v_blocks_content_columns_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum__services_v_blocks_content_columns_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__services_v_blocks_content_columns_link_appearance",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_blocks_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_blocks_media_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum__services_v_blocks_media_block_position",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_blocks_archive" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"intro_content" jsonb,
	"populateBy" "enum__services_v_blocks_archive_populate_by",
	"relationTo" "enum__services_v_blocks_archive_relation_to",
	"limit" numeric,
	"populated_docs_total" numeric,
	"bgColor" "enum__services_v_blocks_archive_bg_color",
	"displayHeader" "enum__services_v_blocks_archive_display_header",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_blocks_project_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_blocks_project_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum__services_v_blocks_project_block_position",
	"bgColor" "enum__services_v_blocks_project_block_bg_color",
	"title" varchar,
	"location" varchar,
	"subheading" varchar,
	"description" varchar,
	"external_link" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_blocks_stats_and_video_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_blocks_stats_and_video_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"youtube_link" varchar,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_blocks_stat_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_blocks_stat_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar,
	"bgColor" "enum__services_v_blocks_stat_block_bg_color",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_blocks_content_and_stats_block_facts" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"fact_stat" varchar,
	"fact_description" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_services_v_blocks_content_and_stats_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"rich_text" jsonb,
	"_uuid" varchar,
	"block_name" varchar
);

DROP TABLE "pages_blocks_cta_links";
DROP TABLE "_pages_v_blocks_cta_links";
DROP TABLE "posts_blocks_cta_links";
DROP TABLE "_posts_v_blocks_cta_links";
DROP TABLE "projects_hero_links";
DROP TABLE "projects_blocks_cta_links";
DROP TABLE "_projects_v_version_hero_links";
DROP TABLE "_projects_v_blocks_cta_links";
ALTER TABLE "pages_blocks_cta" ADD COLUMN "type" "enum_pages_blocks_cta_type";
ALTER TABLE "pages_blocks_archive" ADD COLUMN "bgColor" "enum_pages_blocks_archive_bg_color";
ALTER TABLE "pages_blocks_archive" ADD COLUMN "displayHeader" "enum_pages_blocks_archive_display_header";
ALTER TABLE "pages" ADD COLUMN "hero_header_text" varchar;
ALTER TABLE "_pages_v_blocks_cta" ADD COLUMN "type" "enum__pages_v_blocks_cta_type";
ALTER TABLE "_pages_v_blocks_archive" ADD COLUMN "bgColor" "enum__pages_v_blocks_archive_bg_color";
ALTER TABLE "_pages_v_blocks_archive" ADD COLUMN "displayHeader" "enum__pages_v_blocks_archive_display_header";
ALTER TABLE "_pages_v" ADD COLUMN "version_hero_header_text" varchar;
ALTER TABLE "posts_blocks_cta" ADD COLUMN "type" "enum_posts_blocks_cta_type";
ALTER TABLE "posts_blocks_archive" ADD COLUMN "bgColor" "enum_posts_blocks_archive_bg_color";
ALTER TABLE "posts_blocks_archive" ADD COLUMN "displayHeader" "enum_posts_blocks_archive_display_header";
ALTER TABLE "posts" ADD COLUMN "hero_header_text" varchar;
ALTER TABLE "_posts_v_blocks_cta" ADD COLUMN "type" "enum__posts_v_blocks_cta_type";
ALTER TABLE "_posts_v_blocks_archive" ADD COLUMN "bgColor" "enum__posts_v_blocks_archive_bg_color";
ALTER TABLE "_posts_v_blocks_archive" ADD COLUMN "displayHeader" "enum__posts_v_blocks_archive_display_header";
ALTER TABLE "_posts_v" ADD COLUMN "version_hero_header_text" varchar;
ALTER TABLE "projects_blocks_cta" ADD COLUMN "type" "enum_projects_blocks_cta_type";
ALTER TABLE "projects_blocks_archive" ADD COLUMN "bgColor" "enum_projects_blocks_archive_bg_color";
ALTER TABLE "projects_blocks_archive" ADD COLUMN "displayHeader" "enum_projects_blocks_archive_display_header";
ALTER TABLE "projects" ADD COLUMN "address" varchar;
ALTER TABLE "projects" ADD COLUMN "description" varchar;
ALTER TABLE "projects" ADD COLUMN "neighborhood" varchar;
ALTER TABLE "projects" ADD COLUMN "latitude" numeric;
ALTER TABLE "projects" ADD COLUMN "longitude" numeric;
ALTER TABLE "projects" ADD COLUMN "price" varchar;
ALTER TABLE "projects" ADD COLUMN "website" varchar;
ALTER TABLE "projects" ADD COLUMN "instagram" varchar;
ALTER TABLE "_projects_v_blocks_cta" ADD COLUMN "type" "enum__projects_v_blocks_cta_type";
ALTER TABLE "_projects_v_blocks_archive" ADD COLUMN "bgColor" "enum__projects_v_blocks_archive_bg_color";
ALTER TABLE "_projects_v_blocks_archive" ADD COLUMN "displayHeader" "enum__projects_v_blocks_archive_display_header";
ALTER TABLE "_projects_v" ADD COLUMN "version_address" varchar;
ALTER TABLE "_projects_v" ADD COLUMN "version_description" varchar;
ALTER TABLE "_projects_v" ADD COLUMN "version_neighborhood" varchar;
ALTER TABLE "_projects_v" ADD COLUMN "version_latitude" numeric;
ALTER TABLE "_projects_v" ADD COLUMN "version_longitude" numeric;
ALTER TABLE "_projects_v" ADD COLUMN "version_price" varchar;
ALTER TABLE "_projects_v" ADD COLUMN "version_website" varchar;
ALTER TABLE "_projects_v" ADD COLUMN "version_instagram" varchar;
ALTER TABLE "teammates" ADD COLUMN "profile_introduction" varchar;
ALTER TABLE "teammates_rels" ADD COLUMN "community_resources_id" integer;
ALTER TABLE "_teammates_v" ADD COLUMN "version_profile_introduction" varchar;
ALTER TABLE "_teammates_v_rels" ADD COLUMN "community_resources_id" integer;
ALTER TABLE "listings_rels" ADD COLUMN "teammates_id" integer;
ALTER TABLE "listings_rels" ADD COLUMN "pages_id" integer;
ALTER TABLE "listings_rels" ADD COLUMN "categories_id" integer;
ALTER TABLE "listings_rels" ADD COLUMN "posts_id" integer;
ALTER TABLE "listings_rels" ADD COLUMN "projects_id" integer;
ALTER TABLE "listings_rels" ADD COLUMN "listings_id" integer;
ALTER TABLE "listings_rels" ADD COLUMN "involvement_groups_id" integer;
ALTER TABLE "listings_rels" ADD COLUMN "involvement_events_id" integer;
ALTER TABLE "listings_rels" ADD COLUMN "testimonials_id" integer;
ALTER TABLE "listings_rels" ADD COLUMN "companies_id" integer;
ALTER TABLE "listings_rels" ADD COLUMN "services_id" integer;
ALTER TABLE "listings_rels" ADD COLUMN "community_resources_id" integer;
ALTER TABLE "_listings_v_rels" ADD COLUMN "teammates_id" integer;
ALTER TABLE "_listings_v_rels" ADD COLUMN "pages_id" integer;
ALTER TABLE "_listings_v_rels" ADD COLUMN "categories_id" integer;
ALTER TABLE "_listings_v_rels" ADD COLUMN "posts_id" integer;
ALTER TABLE "_listings_v_rels" ADD COLUMN "projects_id" integer;
ALTER TABLE "_listings_v_rels" ADD COLUMN "involvement_groups_id" integer;
ALTER TABLE "_listings_v_rels" ADD COLUMN "involvement_events_id" integer;
ALTER TABLE "_listings_v_rels" ADD COLUMN "testimonials_id" integer;
ALTER TABLE "_listings_v_rels" ADD COLUMN "companies_id" integer;
ALTER TABLE "_listings_v_rels" ADD COLUMN "services_id" integer;
ALTER TABLE "_listings_v_rels" ADD COLUMN "community_resources_id" integer;
ALTER TABLE "services" ADD COLUMN "short_description" varchar;
ALTER TABLE "services" ADD COLUMN "hero_type" "enum_services_hero_type";
ALTER TABLE "services" ADD COLUMN "hero_header_text" varchar;
ALTER TABLE "services" ADD COLUMN "hero_rich_text" jsonb;
ALTER TABLE "services_rels" ADD COLUMN "pages_id" integer;
ALTER TABLE "services_rels" ADD COLUMN "categories_id" integer;
ALTER TABLE "services_rels" ADD COLUMN "posts_id" integer;
ALTER TABLE "services_rels" ADD COLUMN "projects_id" integer;
ALTER TABLE "services_rels" ADD COLUMN "listings_id" integer;
ALTER TABLE "services_rels" ADD COLUMN "teammates_id" integer;
ALTER TABLE "services_rels" ADD COLUMN "involvement_groups_id" integer;
ALTER TABLE "services_rels" ADD COLUMN "involvement_events_id" integer;
ALTER TABLE "services_rels" ADD COLUMN "testimonials_id" integer;
ALTER TABLE "services_rels" ADD COLUMN "companies_id" integer;
ALTER TABLE "services_rels" ADD COLUMN "services_id" integer;
ALTER TABLE "services_rels" ADD COLUMN "community_resources_id" integer;
ALTER TABLE "_services_v" ADD COLUMN "version_short_description" varchar;
ALTER TABLE "_services_v" ADD COLUMN "version_hero_type" "enum__services_v_version_hero_type";
ALTER TABLE "_services_v" ADD COLUMN "version_hero_header_text" varchar;
ALTER TABLE "_services_v" ADD COLUMN "version_hero_rich_text" jsonb;
ALTER TABLE "_services_v_rels" ADD COLUMN "pages_id" integer;
ALTER TABLE "_services_v_rels" ADD COLUMN "categories_id" integer;
ALTER TABLE "_services_v_rels" ADD COLUMN "posts_id" integer;
ALTER TABLE "_services_v_rels" ADD COLUMN "projects_id" integer;
ALTER TABLE "_services_v_rels" ADD COLUMN "listings_id" integer;
ALTER TABLE "_services_v_rels" ADD COLUMN "teammates_id" integer;
ALTER TABLE "_services_v_rels" ADD COLUMN "involvement_groups_id" integer;
ALTER TABLE "_services_v_rels" ADD COLUMN "involvement_events_id" integer;
ALTER TABLE "_services_v_rels" ADD COLUMN "testimonials_id" integer;
ALTER TABLE "_services_v_rels" ADD COLUMN "companies_id" integer;
ALTER TABLE "_services_v_rels" ADD COLUMN "community_resources_id" integer;
ALTER TABLE "involvement_groups" ADD COLUMN "link_to_group_website" varchar;
ALTER TABLE "_involvement_groups_v" ADD COLUMN "version_link_to_group_website" varchar;
CREATE INDEX IF NOT EXISTS "pages_blocks_project_block_facts_order_idx" ON "pages_blocks_project_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_project_block_facts_parent_id_idx" ON "pages_blocks_project_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_project_block_order_idx" ON "pages_blocks_project_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_project_block_parent_id_idx" ON "pages_blocks_project_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_project_block_path_idx" ON "pages_blocks_project_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_stats_and_video_block_facts_order_idx" ON "pages_blocks_stats_and_video_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_stats_and_video_block_facts_parent_id_idx" ON "pages_blocks_stats_and_video_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_stats_and_video_block_order_idx" ON "pages_blocks_stats_and_video_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_stats_and_video_block_parent_id_idx" ON "pages_blocks_stats_and_video_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_stats_and_video_block_path_idx" ON "pages_blocks_stats_and_video_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_and_stats_block_facts_order_idx" ON "pages_blocks_content_and_stats_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_and_stats_block_facts_parent_id_idx" ON "pages_blocks_content_and_stats_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_and_stats_block_order_idx" ON "pages_blocks_content_and_stats_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_and_stats_block_parent_id_idx" ON "pages_blocks_content_and_stats_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_and_stats_block_path_idx" ON "pages_blocks_content_and_stats_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_stat_block_facts_order_idx" ON "pages_blocks_stat_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_stat_block_facts_parent_id_idx" ON "pages_blocks_stat_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_stat_block_order_idx" ON "pages_blocks_stat_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_stat_block_parent_id_idx" ON "pages_blocks_stat_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_stat_block_path_idx" ON "pages_blocks_stat_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_google_maps_block_order_idx" ON "pages_blocks_google_maps_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_google_maps_block_parent_id_idx" ON "pages_blocks_google_maps_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_google_maps_block_path_idx" ON "pages_blocks_google_maps_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_project_block_facts_order_idx" ON "_pages_v_blocks_project_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_project_block_facts_parent_id_idx" ON "_pages_v_blocks_project_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_project_block_order_idx" ON "_pages_v_blocks_project_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_project_block_parent_id_idx" ON "_pages_v_blocks_project_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_project_block_path_idx" ON "_pages_v_blocks_project_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_stats_and_video_block_facts_order_idx" ON "_pages_v_blocks_stats_and_video_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_stats_and_video_block_facts_parent_id_idx" ON "_pages_v_blocks_stats_and_video_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_stats_and_video_block_order_idx" ON "_pages_v_blocks_stats_and_video_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_stats_and_video_block_parent_id_idx" ON "_pages_v_blocks_stats_and_video_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_stats_and_video_block_path_idx" ON "_pages_v_blocks_stats_and_video_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_and_stats_block_facts_order_idx" ON "_pages_v_blocks_content_and_stats_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_and_stats_block_facts_parent_id_idx" ON "_pages_v_blocks_content_and_stats_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_and_stats_block_order_idx" ON "_pages_v_blocks_content_and_stats_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_and_stats_block_parent_id_idx" ON "_pages_v_blocks_content_and_stats_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_and_stats_block_path_idx" ON "_pages_v_blocks_content_and_stats_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_stat_block_facts_order_idx" ON "_pages_v_blocks_stat_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_stat_block_facts_parent_id_idx" ON "_pages_v_blocks_stat_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_stat_block_order_idx" ON "_pages_v_blocks_stat_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_stat_block_parent_id_idx" ON "_pages_v_blocks_stat_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_stat_block_path_idx" ON "_pages_v_blocks_stat_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_google_maps_block_order_idx" ON "_pages_v_blocks_google_maps_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_google_maps_block_parent_id_idx" ON "_pages_v_blocks_google_maps_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_google_maps_block_path_idx" ON "_pages_v_blocks_google_maps_block" ("_path");
CREATE INDEX IF NOT EXISTS "projects_slider_order_idx" ON "projects_slider" ("_order");
CREATE INDEX IF NOT EXISTS "projects_slider_parent_id_idx" ON "projects_slider" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_project_block_facts_order_idx" ON "projects_blocks_project_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_project_block_facts_parent_id_idx" ON "projects_blocks_project_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_project_block_order_idx" ON "projects_blocks_project_block" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_project_block_parent_id_idx" ON "projects_blocks_project_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_project_block_path_idx" ON "projects_blocks_project_block" ("_path");
CREATE INDEX IF NOT EXISTS "projects_blocks_stats_and_video_block_facts_order_idx" ON "projects_blocks_stats_and_video_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_stats_and_video_block_facts_parent_id_idx" ON "projects_blocks_stats_and_video_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_stats_and_video_block_order_idx" ON "projects_blocks_stats_and_video_block" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_stats_and_video_block_parent_id_idx" ON "projects_blocks_stats_and_video_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_stats_and_video_block_path_idx" ON "projects_blocks_stats_and_video_block" ("_path");
CREATE INDEX IF NOT EXISTS "projects_blocks_stat_block_facts_order_idx" ON "projects_blocks_stat_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_stat_block_facts_parent_id_idx" ON "projects_blocks_stat_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_stat_block_order_idx" ON "projects_blocks_stat_block" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_stat_block_parent_id_idx" ON "projects_blocks_stat_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_stat_block_path_idx" ON "projects_blocks_stat_block" ("_path");
CREATE INDEX IF NOT EXISTS "_projects_v_version_slider_order_idx" ON "_projects_v_version_slider" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_version_slider_parent_id_idx" ON "_projects_v_version_slider" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_project_block_facts_order_idx" ON "_projects_v_blocks_project_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_project_block_facts_parent_id_idx" ON "_projects_v_blocks_project_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_project_block_order_idx" ON "_projects_v_blocks_project_block" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_project_block_parent_id_idx" ON "_projects_v_blocks_project_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_project_block_path_idx" ON "_projects_v_blocks_project_block" ("_path");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_stats_and_video_block_facts_order_idx" ON "_projects_v_blocks_stats_and_video_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_stats_and_video_block_facts_parent_id_idx" ON "_projects_v_blocks_stats_and_video_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_stats_and_video_block_order_idx" ON "_projects_v_blocks_stats_and_video_block" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_stats_and_video_block_parent_id_idx" ON "_projects_v_blocks_stats_and_video_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_stats_and_video_block_path_idx" ON "_projects_v_blocks_stats_and_video_block" ("_path");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_stat_block_facts_order_idx" ON "_projects_v_blocks_stat_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_stat_block_facts_parent_id_idx" ON "_projects_v_blocks_stat_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_stat_block_order_idx" ON "_projects_v_blocks_stat_block" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_stat_block_parent_id_idx" ON "_projects_v_blocks_stat_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_stat_block_path_idx" ON "_projects_v_blocks_stat_block" ("_path");
CREATE INDEX IF NOT EXISTS "listings_blocks_content_columns_order_idx" ON "listings_blocks_content_columns" ("_order");
CREATE INDEX IF NOT EXISTS "listings_blocks_content_columns_parent_id_idx" ON "listings_blocks_content_columns" ("_parent_id");
CREATE INDEX IF NOT EXISTS "listings_blocks_content_order_idx" ON "listings_blocks_content" ("_order");
CREATE INDEX IF NOT EXISTS "listings_blocks_content_parent_id_idx" ON "listings_blocks_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "listings_blocks_content_path_idx" ON "listings_blocks_content" ("_path");
CREATE INDEX IF NOT EXISTS "listings_blocks_media_block_order_idx" ON "listings_blocks_media_block" ("_order");
CREATE INDEX IF NOT EXISTS "listings_blocks_media_block_parent_id_idx" ON "listings_blocks_media_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "listings_blocks_media_block_path_idx" ON "listings_blocks_media_block" ("_path");
CREATE INDEX IF NOT EXISTS "listings_blocks_archive_order_idx" ON "listings_blocks_archive" ("_order");
CREATE INDEX IF NOT EXISTS "listings_blocks_archive_parent_id_idx" ON "listings_blocks_archive" ("_parent_id");
CREATE INDEX IF NOT EXISTS "listings_blocks_archive_path_idx" ON "listings_blocks_archive" ("_path");
CREATE INDEX IF NOT EXISTS "listings_blocks_project_block_facts_order_idx" ON "listings_blocks_project_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "listings_blocks_project_block_facts_parent_id_idx" ON "listings_blocks_project_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "listings_blocks_project_block_order_idx" ON "listings_blocks_project_block" ("_order");
CREATE INDEX IF NOT EXISTS "listings_blocks_project_block_parent_id_idx" ON "listings_blocks_project_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "listings_blocks_project_block_path_idx" ON "listings_blocks_project_block" ("_path");
CREATE INDEX IF NOT EXISTS "listings_blocks_stats_and_video_block_facts_order_idx" ON "listings_blocks_stats_and_video_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "listings_blocks_stats_and_video_block_facts_parent_id_idx" ON "listings_blocks_stats_and_video_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "listings_blocks_stats_and_video_block_order_idx" ON "listings_blocks_stats_and_video_block" ("_order");
CREATE INDEX IF NOT EXISTS "listings_blocks_stats_and_video_block_parent_id_idx" ON "listings_blocks_stats_and_video_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "listings_blocks_stats_and_video_block_path_idx" ON "listings_blocks_stats_and_video_block" ("_path");
CREATE INDEX IF NOT EXISTS "listings_blocks_stat_block_facts_order_idx" ON "listings_blocks_stat_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "listings_blocks_stat_block_facts_parent_id_idx" ON "listings_blocks_stat_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "listings_blocks_stat_block_order_idx" ON "listings_blocks_stat_block" ("_order");
CREATE INDEX IF NOT EXISTS "listings_blocks_stat_block_parent_id_idx" ON "listings_blocks_stat_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "listings_blocks_stat_block_path_idx" ON "listings_blocks_stat_block" ("_path");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_content_columns_order_idx" ON "_listings_v_blocks_content_columns" ("_order");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_content_columns_parent_id_idx" ON "_listings_v_blocks_content_columns" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_content_order_idx" ON "_listings_v_blocks_content" ("_order");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_content_parent_id_idx" ON "_listings_v_blocks_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_content_path_idx" ON "_listings_v_blocks_content" ("_path");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_media_block_order_idx" ON "_listings_v_blocks_media_block" ("_order");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_media_block_parent_id_idx" ON "_listings_v_blocks_media_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_media_block_path_idx" ON "_listings_v_blocks_media_block" ("_path");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_archive_order_idx" ON "_listings_v_blocks_archive" ("_order");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_archive_parent_id_idx" ON "_listings_v_blocks_archive" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_archive_path_idx" ON "_listings_v_blocks_archive" ("_path");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_project_block_facts_order_idx" ON "_listings_v_blocks_project_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_project_block_facts_parent_id_idx" ON "_listings_v_blocks_project_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_project_block_order_idx" ON "_listings_v_blocks_project_block" ("_order");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_project_block_parent_id_idx" ON "_listings_v_blocks_project_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_project_block_path_idx" ON "_listings_v_blocks_project_block" ("_path");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_stats_and_video_block_facts_order_idx" ON "_listings_v_blocks_stats_and_video_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_stats_and_video_block_facts_parent_id_idx" ON "_listings_v_blocks_stats_and_video_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_stats_and_video_block_order_idx" ON "_listings_v_blocks_stats_and_video_block" ("_order");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_stats_and_video_block_parent_id_idx" ON "_listings_v_blocks_stats_and_video_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_stats_and_video_block_path_idx" ON "_listings_v_blocks_stats_and_video_block" ("_path");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_stat_block_facts_order_idx" ON "_listings_v_blocks_stat_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_stat_block_facts_parent_id_idx" ON "_listings_v_blocks_stat_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_stat_block_order_idx" ON "_listings_v_blocks_stat_block" ("_order");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_stat_block_parent_id_idx" ON "_listings_v_blocks_stat_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_listings_v_blocks_stat_block_path_idx" ON "_listings_v_blocks_stat_block" ("_path");
CREATE INDEX IF NOT EXISTS "services_hero_links_order_idx" ON "services_hero_links" ("_order");
CREATE INDEX IF NOT EXISTS "services_hero_links_parent_id_idx" ON "services_hero_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "services_blocks_cta_order_idx" ON "services_blocks_cta" ("_order");
CREATE INDEX IF NOT EXISTS "services_blocks_cta_parent_id_idx" ON "services_blocks_cta" ("_parent_id");
CREATE INDEX IF NOT EXISTS "services_blocks_cta_path_idx" ON "services_blocks_cta" ("_path");
CREATE INDEX IF NOT EXISTS "services_blocks_content_columns_order_idx" ON "services_blocks_content_columns" ("_order");
CREATE INDEX IF NOT EXISTS "services_blocks_content_columns_parent_id_idx" ON "services_blocks_content_columns" ("_parent_id");
CREATE INDEX IF NOT EXISTS "services_blocks_content_order_idx" ON "services_blocks_content" ("_order");
CREATE INDEX IF NOT EXISTS "services_blocks_content_parent_id_idx" ON "services_blocks_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "services_blocks_content_path_idx" ON "services_blocks_content" ("_path");
CREATE INDEX IF NOT EXISTS "services_blocks_media_block_order_idx" ON "services_blocks_media_block" ("_order");
CREATE INDEX IF NOT EXISTS "services_blocks_media_block_parent_id_idx" ON "services_blocks_media_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "services_blocks_media_block_path_idx" ON "services_blocks_media_block" ("_path");
CREATE INDEX IF NOT EXISTS "services_blocks_archive_order_idx" ON "services_blocks_archive" ("_order");
CREATE INDEX IF NOT EXISTS "services_blocks_archive_parent_id_idx" ON "services_blocks_archive" ("_parent_id");
CREATE INDEX IF NOT EXISTS "services_blocks_archive_path_idx" ON "services_blocks_archive" ("_path");
CREATE INDEX IF NOT EXISTS "services_blocks_project_block_facts_order_idx" ON "services_blocks_project_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "services_blocks_project_block_facts_parent_id_idx" ON "services_blocks_project_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "services_blocks_project_block_order_idx" ON "services_blocks_project_block" ("_order");
CREATE INDEX IF NOT EXISTS "services_blocks_project_block_parent_id_idx" ON "services_blocks_project_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "services_blocks_project_block_path_idx" ON "services_blocks_project_block" ("_path");
CREATE INDEX IF NOT EXISTS "services_blocks_stats_and_video_block_facts_order_idx" ON "services_blocks_stats_and_video_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "services_blocks_stats_and_video_block_facts_parent_id_idx" ON "services_blocks_stats_and_video_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "services_blocks_stats_and_video_block_order_idx" ON "services_blocks_stats_and_video_block" ("_order");
CREATE INDEX IF NOT EXISTS "services_blocks_stats_and_video_block_parent_id_idx" ON "services_blocks_stats_and_video_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "services_blocks_stats_and_video_block_path_idx" ON "services_blocks_stats_and_video_block" ("_path");
CREATE INDEX IF NOT EXISTS "services_blocks_stat_block_facts_order_idx" ON "services_blocks_stat_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "services_blocks_stat_block_facts_parent_id_idx" ON "services_blocks_stat_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "services_blocks_stat_block_order_idx" ON "services_blocks_stat_block" ("_order");
CREATE INDEX IF NOT EXISTS "services_blocks_stat_block_parent_id_idx" ON "services_blocks_stat_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "services_blocks_stat_block_path_idx" ON "services_blocks_stat_block" ("_path");
CREATE INDEX IF NOT EXISTS "services_blocks_content_and_stats_block_facts_order_idx" ON "services_blocks_content_and_stats_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "services_blocks_content_and_stats_block_facts_parent_id_idx" ON "services_blocks_content_and_stats_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "services_blocks_content_and_stats_block_order_idx" ON "services_blocks_content_and_stats_block" ("_order");
CREATE INDEX IF NOT EXISTS "services_blocks_content_and_stats_block_parent_id_idx" ON "services_blocks_content_and_stats_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "services_blocks_content_and_stats_block_path_idx" ON "services_blocks_content_and_stats_block" ("_path");
CREATE INDEX IF NOT EXISTS "_services_v_version_hero_links_order_idx" ON "_services_v_version_hero_links" ("_order");
CREATE INDEX IF NOT EXISTS "_services_v_version_hero_links_parent_id_idx" ON "_services_v_version_hero_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_cta_order_idx" ON "_services_v_blocks_cta" ("_order");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_cta_parent_id_idx" ON "_services_v_blocks_cta" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_cta_path_idx" ON "_services_v_blocks_cta" ("_path");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_content_columns_order_idx" ON "_services_v_blocks_content_columns" ("_order");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_content_columns_parent_id_idx" ON "_services_v_blocks_content_columns" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_content_order_idx" ON "_services_v_blocks_content" ("_order");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_content_parent_id_idx" ON "_services_v_blocks_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_content_path_idx" ON "_services_v_blocks_content" ("_path");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_media_block_order_idx" ON "_services_v_blocks_media_block" ("_order");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_media_block_parent_id_idx" ON "_services_v_blocks_media_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_media_block_path_idx" ON "_services_v_blocks_media_block" ("_path");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_archive_order_idx" ON "_services_v_blocks_archive" ("_order");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_archive_parent_id_idx" ON "_services_v_blocks_archive" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_archive_path_idx" ON "_services_v_blocks_archive" ("_path");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_project_block_facts_order_idx" ON "_services_v_blocks_project_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_project_block_facts_parent_id_idx" ON "_services_v_blocks_project_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_project_block_order_idx" ON "_services_v_blocks_project_block" ("_order");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_project_block_parent_id_idx" ON "_services_v_blocks_project_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_project_block_path_idx" ON "_services_v_blocks_project_block" ("_path");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_stats_and_video_block_facts_order_idx" ON "_services_v_blocks_stats_and_video_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_stats_and_video_block_facts_parent_id_idx" ON "_services_v_blocks_stats_and_video_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_stats_and_video_block_order_idx" ON "_services_v_blocks_stats_and_video_block" ("_order");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_stats_and_video_block_parent_id_idx" ON "_services_v_blocks_stats_and_video_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_stats_and_video_block_path_idx" ON "_services_v_blocks_stats_and_video_block" ("_path");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_stat_block_facts_order_idx" ON "_services_v_blocks_stat_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_stat_block_facts_parent_id_idx" ON "_services_v_blocks_stat_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_stat_block_order_idx" ON "_services_v_blocks_stat_block" ("_order");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_stat_block_parent_id_idx" ON "_services_v_blocks_stat_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_stat_block_path_idx" ON "_services_v_blocks_stat_block" ("_path");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_content_and_stats_block_facts_order_idx" ON "_services_v_blocks_content_and_stats_block_facts" ("_order");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_content_and_stats_block_facts_parent_id_idx" ON "_services_v_blocks_content_and_stats_block_facts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_content_and_stats_block_order_idx" ON "_services_v_blocks_content_and_stats_block" ("_order");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_content_and_stats_block_parent_id_idx" ON "_services_v_blocks_content_and_stats_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_services_v_blocks_content_and_stats_block_path_idx" ON "_services_v_blocks_content_and_stats_block" ("_path");
CREATE INDEX IF NOT EXISTS "teammates_slug_idx" ON "teammates" ("slug");
CREATE INDEX IF NOT EXISTS "_teammates_v_version_version_slug_idx" ON "_teammates_v" ("version_slug");
CREATE INDEX IF NOT EXISTS "listings_slug_idx" ON "listings" ("slug");
CREATE INDEX IF NOT EXISTS "_listings_v_version_version_slug_idx" ON "_listings_v" ("version_slug");
CREATE INDEX IF NOT EXISTS "services_slug_idx" ON "services" ("slug");
CREATE INDEX IF NOT EXISTS "_services_v_version_version_slug_idx" ON "_services_v" ("version_slug");
DO $$ BEGIN
 ALTER TABLE "teammates_rels" ADD CONSTRAINT "teammates_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_teammates_v_rels" ADD CONSTRAINT "_teammates_v_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_listings_fk" FOREIGN KEY ("listings_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_involvement_groups_fk" FOREIGN KEY ("involvement_groups_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_involvement_events_fk" FOREIGN KEY ("involvement_events_id") REFERENCES "involvement_events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "testimonials"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_companies_fk" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_involvement_groups_fk" FOREIGN KEY ("involvement_groups_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_involvement_events_fk" FOREIGN KEY ("involvement_events_id") REFERENCES "involvement_events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "testimonials"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_companies_fk" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_listings_fk" FOREIGN KEY ("listings_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_involvement_groups_fk" FOREIGN KEY ("involvement_groups_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_involvement_events_fk" FOREIGN KEY ("involvement_events_id") REFERENCES "involvement_events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "testimonials"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_companies_fk" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_listings_fk" FOREIGN KEY ("listings_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_teammates_fk" FOREIGN KEY ("teammates_id") REFERENCES "teammates"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_involvement_groups_fk" FOREIGN KEY ("involvement_groups_id") REFERENCES "involvement_groups"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_involvement_events_fk" FOREIGN KEY ("involvement_events_id") REFERENCES "involvement_events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "testimonials"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_companies_fk" FOREIGN KEY ("companies_id") REFERENCES "companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_community_resources_fk" FOREIGN KEY ("community_resources_id") REFERENCES "community_resources"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

ALTER TABLE "pages_blocks_cta" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "pages_blocks_cta" DROP COLUMN IF EXISTS "rich_text";
ALTER TABLE "_pages_v_blocks_cta" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "_pages_v_blocks_cta" DROP COLUMN IF EXISTS "rich_text";
ALTER TABLE "posts_blocks_cta" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "posts_blocks_cta" DROP COLUMN IF EXISTS "rich_text";
ALTER TABLE "_posts_v_blocks_cta" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "_posts_v_blocks_cta" DROP COLUMN IF EXISTS "rich_text";
ALTER TABLE "projects_blocks_cta" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "projects_blocks_cta" DROP COLUMN IF EXISTS "rich_text";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "hero_type";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "hero_rich_text";
ALTER TABLE "_projects_v_blocks_cta" DROP COLUMN IF EXISTS "invert_background";
ALTER TABLE "_projects_v_blocks_cta" DROP COLUMN IF EXISTS "rich_text";
ALTER TABLE "_projects_v" DROP COLUMN IF EXISTS "version_hero_type";
ALTER TABLE "_projects_v" DROP COLUMN IF EXISTS "version_hero_rich_text";
ALTER TABLE "services" DROP COLUMN IF EXISTS "icon_svg";
ALTER TABLE "services" DROP COLUMN IF EXISTS "description";
ALTER TABLE "_services_v" DROP COLUMN IF EXISTS "version_icon_svg";
ALTER TABLE "_services_v" DROP COLUMN IF EXISTS "version_description";
DO $$ BEGIN
 ALTER TABLE "pages_blocks_project_block_facts" ADD CONSTRAINT "pages_blocks_project_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_project_block" ADD CONSTRAINT "pages_blocks_project_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_stats_and_video_block_facts" ADD CONSTRAINT "pages_blocks_stats_and_video_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_stats_and_video_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_stats_and_video_block" ADD CONSTRAINT "pages_blocks_stats_and_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_content_and_stats_block_facts" ADD CONSTRAINT "pages_blocks_content_and_stats_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_content_and_stats_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_content_and_stats_block" ADD CONSTRAINT "pages_blocks_content_and_stats_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_stat_block_facts" ADD CONSTRAINT "pages_blocks_stat_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_stat_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_stat_block" ADD CONSTRAINT "pages_blocks_stat_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_google_maps_block" ADD CONSTRAINT "pages_blocks_google_maps_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_project_block_facts" ADD CONSTRAINT "_pages_v_blocks_project_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_project_block" ADD CONSTRAINT "_pages_v_blocks_project_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_stats_and_video_block_facts" ADD CONSTRAINT "_pages_v_blocks_stats_and_video_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_stats_and_video_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_stats_and_video_block" ADD CONSTRAINT "_pages_v_blocks_stats_and_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_content_and_stats_block_facts" ADD CONSTRAINT "_pages_v_blocks_content_and_stats_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_content_and_stats_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_content_and_stats_block" ADD CONSTRAINT "_pages_v_blocks_content_and_stats_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_stat_block_facts" ADD CONSTRAINT "_pages_v_blocks_stat_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_stat_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_stat_block" ADD CONSTRAINT "_pages_v_blocks_stat_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_google_maps_block" ADD CONSTRAINT "_pages_v_blocks_google_maps_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_slider" ADD CONSTRAINT "projects_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_project_block_facts" ADD CONSTRAINT "projects_blocks_project_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_project_block" ADD CONSTRAINT "projects_blocks_project_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_stats_and_video_block_facts" ADD CONSTRAINT "projects_blocks_stats_and_video_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects_blocks_stats_and_video_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_stats_and_video_block" ADD CONSTRAINT "projects_blocks_stats_and_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_stat_block_facts" ADD CONSTRAINT "projects_blocks_stat_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects_blocks_stat_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_stat_block" ADD CONSTRAINT "projects_blocks_stat_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_version_slider" ADD CONSTRAINT "_projects_v_version_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_project_block_facts" ADD CONSTRAINT "_projects_v_blocks_project_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_project_block" ADD CONSTRAINT "_projects_v_blocks_project_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_stats_and_video_block_facts" ADD CONSTRAINT "_projects_v_blocks_stats_and_video_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v_blocks_stats_and_video_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_stats_and_video_block" ADD CONSTRAINT "_projects_v_blocks_stats_and_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_stat_block_facts" ADD CONSTRAINT "_projects_v_blocks_stat_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v_blocks_stat_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_stat_block" ADD CONSTRAINT "_projects_v_blocks_stat_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_blocks_content_columns" ADD CONSTRAINT "listings_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "listings_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_blocks_content" ADD CONSTRAINT "listings_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_blocks_media_block" ADD CONSTRAINT "listings_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_blocks_archive" ADD CONSTRAINT "listings_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_blocks_project_block_facts" ADD CONSTRAINT "listings_blocks_project_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "listings_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_blocks_project_block" ADD CONSTRAINT "listings_blocks_project_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_blocks_stats_and_video_block_facts" ADD CONSTRAINT "listings_blocks_stats_and_video_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "listings_blocks_stats_and_video_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_blocks_stats_and_video_block" ADD CONSTRAINT "listings_blocks_stats_and_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_blocks_stat_block_facts" ADD CONSTRAINT "listings_blocks_stat_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "listings_blocks_stat_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_blocks_stat_block" ADD CONSTRAINT "listings_blocks_stat_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_blocks_content_columns" ADD CONSTRAINT "_listings_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_listings_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_blocks_content" ADD CONSTRAINT "_listings_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_listings_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_blocks_media_block" ADD CONSTRAINT "_listings_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_listings_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_blocks_archive" ADD CONSTRAINT "_listings_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_listings_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_blocks_project_block_facts" ADD CONSTRAINT "_listings_v_blocks_project_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_listings_v_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_blocks_project_block" ADD CONSTRAINT "_listings_v_blocks_project_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_listings_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_blocks_stats_and_video_block_facts" ADD CONSTRAINT "_listings_v_blocks_stats_and_video_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_listings_v_blocks_stats_and_video_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_blocks_stats_and_video_block" ADD CONSTRAINT "_listings_v_blocks_stats_and_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_listings_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_blocks_stat_block_facts" ADD CONSTRAINT "_listings_v_blocks_stat_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_listings_v_blocks_stat_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_blocks_stat_block" ADD CONSTRAINT "_listings_v_blocks_stat_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_listings_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_hero_links" ADD CONSTRAINT "services_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_cta" ADD CONSTRAINT "services_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_content_columns" ADD CONSTRAINT "services_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "services_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_content" ADD CONSTRAINT "services_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_media_block" ADD CONSTRAINT "services_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_archive" ADD CONSTRAINT "services_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_project_block_facts" ADD CONSTRAINT "services_blocks_project_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "services_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_project_block" ADD CONSTRAINT "services_blocks_project_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_stats_and_video_block_facts" ADD CONSTRAINT "services_blocks_stats_and_video_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "services_blocks_stats_and_video_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_stats_and_video_block" ADD CONSTRAINT "services_blocks_stats_and_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_stat_block_facts" ADD CONSTRAINT "services_blocks_stat_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "services_blocks_stat_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_stat_block" ADD CONSTRAINT "services_blocks_stat_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_content_and_stats_block_facts" ADD CONSTRAINT "services_blocks_content_and_stats_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "services_blocks_content_and_stats_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "services_blocks_content_and_stats_block" ADD CONSTRAINT "services_blocks_content_and_stats_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "services"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_version_hero_links" ADD CONSTRAINT "_services_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_services_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_cta" ADD CONSTRAINT "_services_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_services_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_content_columns" ADD CONSTRAINT "_services_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_services_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_content" ADD CONSTRAINT "_services_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_services_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_media_block" ADD CONSTRAINT "_services_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_services_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_archive" ADD CONSTRAINT "_services_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_services_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_project_block_facts" ADD CONSTRAINT "_services_v_blocks_project_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_services_v_blocks_project_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_project_block" ADD CONSTRAINT "_services_v_blocks_project_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_services_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_stats_and_video_block_facts" ADD CONSTRAINT "_services_v_blocks_stats_and_video_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_services_v_blocks_stats_and_video_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_stats_and_video_block" ADD CONSTRAINT "_services_v_blocks_stats_and_video_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_services_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_stat_block_facts" ADD CONSTRAINT "_services_v_blocks_stat_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_services_v_blocks_stat_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_stat_block" ADD CONSTRAINT "_services_v_blocks_stat_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_services_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_content_and_stats_block_facts" ADD CONSTRAINT "_services_v_blocks_content_and_stats_block_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_services_v_blocks_content_and_stats_block"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_services_v_blocks_content_and_stats_block" ADD CONSTRAINT "_services_v_blocks_content_and_stats_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_services_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_posts_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_posts_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__posts_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__posts_v_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_hero_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_hero_links_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_version_hero_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_version_hero_links_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_cta_links_link_appearance" AS ENUM('primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "pages_blocks_cta_links" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "enum_pages_blocks_cta_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_pages_blocks_cta_links_link_appearance"
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"link_type" "enum__pages_v_blocks_cta_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__pages_v_blocks_cta_links_link_appearance",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "posts_blocks_cta_links" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "enum_posts_blocks_cta_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_posts_blocks_cta_links_link_appearance"
);

CREATE TABLE IF NOT EXISTS "_posts_v_blocks_cta_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"link_type" "enum__posts_v_blocks_cta_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__posts_v_blocks_cta_links_link_appearance",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "projects_hero_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "enum_projects_hero_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_projects_hero_links_link_appearance"
);

CREATE TABLE IF NOT EXISTS "projects_blocks_cta_links" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "enum_projects_blocks_cta_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_projects_blocks_cta_links_link_appearance"
);

CREATE TABLE IF NOT EXISTS "_projects_v_version_hero_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"link_type" "enum__projects_v_version_hero_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__projects_v_version_hero_links_link_appearance",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_cta_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"link_type" "enum__projects_v_blocks_cta_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__projects_v_blocks_cta_links_link_appearance",
	"_uuid" varchar
);

DROP TABLE "pages_blocks_project_block_facts";
DROP TABLE "pages_blocks_project_block";
DROP TABLE "pages_blocks_stats_and_video_block_facts";
DROP TABLE "pages_blocks_stats_and_video_block";
DROP TABLE "pages_blocks_content_and_stats_block_facts";
DROP TABLE "pages_blocks_content_and_stats_block";
DROP TABLE "pages_blocks_stat_block_facts";
DROP TABLE "pages_blocks_stat_block";
DROP TABLE "pages_blocks_google_maps_block";
DROP TABLE "_pages_v_blocks_project_block_facts";
DROP TABLE "_pages_v_blocks_project_block";
DROP TABLE "_pages_v_blocks_stats_and_video_block_facts";
DROP TABLE "_pages_v_blocks_stats_and_video_block";
DROP TABLE "_pages_v_blocks_content_and_stats_block_facts";
DROP TABLE "_pages_v_blocks_content_and_stats_block";
DROP TABLE "_pages_v_blocks_stat_block_facts";
DROP TABLE "_pages_v_blocks_stat_block";
DROP TABLE "_pages_v_blocks_google_maps_block";
DROP TABLE "projects_slider";
DROP TABLE "projects_blocks_project_block_facts";
DROP TABLE "projects_blocks_project_block";
DROP TABLE "projects_blocks_stats_and_video_block_facts";
DROP TABLE "projects_blocks_stats_and_video_block";
DROP TABLE "projects_blocks_stat_block_facts";
DROP TABLE "projects_blocks_stat_block";
DROP TABLE "_projects_v_version_slider";
DROP TABLE "_projects_v_blocks_project_block_facts";
DROP TABLE "_projects_v_blocks_project_block";
DROP TABLE "_projects_v_blocks_stats_and_video_block_facts";
DROP TABLE "_projects_v_blocks_stats_and_video_block";
DROP TABLE "_projects_v_blocks_stat_block_facts";
DROP TABLE "_projects_v_blocks_stat_block";
DROP TABLE "listings_blocks_content_columns";
DROP TABLE "listings_blocks_content";
DROP TABLE "listings_blocks_media_block";
DROP TABLE "listings_blocks_archive";
DROP TABLE "listings_blocks_project_block_facts";
DROP TABLE "listings_blocks_project_block";
DROP TABLE "listings_blocks_stats_and_video_block_facts";
DROP TABLE "listings_blocks_stats_and_video_block";
DROP TABLE "listings_blocks_stat_block_facts";
DROP TABLE "listings_blocks_stat_block";
DROP TABLE "_listings_v_blocks_content_columns";
DROP TABLE "_listings_v_blocks_content";
DROP TABLE "_listings_v_blocks_media_block";
DROP TABLE "_listings_v_blocks_archive";
DROP TABLE "_listings_v_blocks_project_block_facts";
DROP TABLE "_listings_v_blocks_project_block";
DROP TABLE "_listings_v_blocks_stats_and_video_block_facts";
DROP TABLE "_listings_v_blocks_stats_and_video_block";
DROP TABLE "_listings_v_blocks_stat_block_facts";
DROP TABLE "_listings_v_blocks_stat_block";
DROP TABLE "services_hero_links";
DROP TABLE "services_blocks_cta";
DROP TABLE "services_blocks_content_columns";
DROP TABLE "services_blocks_content";
DROP TABLE "services_blocks_media_block";
DROP TABLE "services_blocks_archive";
DROP TABLE "services_blocks_project_block_facts";
DROP TABLE "services_blocks_project_block";
DROP TABLE "services_blocks_stats_and_video_block_facts";
DROP TABLE "services_blocks_stats_and_video_block";
DROP TABLE "services_blocks_stat_block_facts";
DROP TABLE "services_blocks_stat_block";
DROP TABLE "services_blocks_content_and_stats_block_facts";
DROP TABLE "services_blocks_content_and_stats_block";
DROP TABLE "_services_v_version_hero_links";
DROP TABLE "_services_v_blocks_cta";
DROP TABLE "_services_v_blocks_content_columns";
DROP TABLE "_services_v_blocks_content";
DROP TABLE "_services_v_blocks_media_block";
DROP TABLE "_services_v_blocks_archive";
DROP TABLE "_services_v_blocks_project_block_facts";
DROP TABLE "_services_v_blocks_project_block";
DROP TABLE "_services_v_blocks_stats_and_video_block_facts";
DROP TABLE "_services_v_blocks_stats_and_video_block";
DROP TABLE "_services_v_blocks_stat_block_facts";
DROP TABLE "_services_v_blocks_stat_block";
DROP TABLE "_services_v_blocks_content_and_stats_block_facts";
DROP TABLE "_services_v_blocks_content_and_stats_block";
ALTER TABLE "teammates_rels" DROP CONSTRAINT "teammates_rels_community_resources_fk";

ALTER TABLE "_teammates_v_rels" DROP CONSTRAINT "_teammates_v_rels_community_resources_fk";

ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_teammates_fk";

ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_pages_fk";

ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_categories_fk";

ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_posts_fk";

ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_projects_fk";

ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_listings_fk";

ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_involvement_groups_fk";

ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_involvement_events_fk";

ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_testimonials_fk";

ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_companies_fk";

ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_services_fk";

ALTER TABLE "listings_rels" DROP CONSTRAINT "listings_rels_community_resources_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_teammates_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_pages_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_categories_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_posts_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_projects_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_involvement_groups_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_involvement_events_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_testimonials_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_companies_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_services_fk";

ALTER TABLE "_listings_v_rels" DROP CONSTRAINT "_listings_v_rels_community_resources_fk";

ALTER TABLE "services_rels" DROP CONSTRAINT "services_rels_pages_fk";

ALTER TABLE "services_rels" DROP CONSTRAINT "services_rels_categories_fk";

ALTER TABLE "services_rels" DROP CONSTRAINT "services_rels_posts_fk";

ALTER TABLE "services_rels" DROP CONSTRAINT "services_rels_projects_fk";

ALTER TABLE "services_rels" DROP CONSTRAINT "services_rels_listings_fk";

ALTER TABLE "services_rels" DROP CONSTRAINT "services_rels_teammates_fk";

ALTER TABLE "services_rels" DROP CONSTRAINT "services_rels_involvement_groups_fk";

ALTER TABLE "services_rels" DROP CONSTRAINT "services_rels_involvement_events_fk";

ALTER TABLE "services_rels" DROP CONSTRAINT "services_rels_testimonials_fk";

ALTER TABLE "services_rels" DROP CONSTRAINT "services_rels_companies_fk";

ALTER TABLE "services_rels" DROP CONSTRAINT "services_rels_services_fk";

ALTER TABLE "services_rels" DROP CONSTRAINT "services_rels_community_resources_fk";

ALTER TABLE "_services_v_rels" DROP CONSTRAINT "_services_v_rels_pages_fk";

ALTER TABLE "_services_v_rels" DROP CONSTRAINT "_services_v_rels_categories_fk";

ALTER TABLE "_services_v_rels" DROP CONSTRAINT "_services_v_rels_posts_fk";

ALTER TABLE "_services_v_rels" DROP CONSTRAINT "_services_v_rels_projects_fk";

ALTER TABLE "_services_v_rels" DROP CONSTRAINT "_services_v_rels_listings_fk";

ALTER TABLE "_services_v_rels" DROP CONSTRAINT "_services_v_rels_teammates_fk";

ALTER TABLE "_services_v_rels" DROP CONSTRAINT "_services_v_rels_involvement_groups_fk";

ALTER TABLE "_services_v_rels" DROP CONSTRAINT "_services_v_rels_involvement_events_fk";

ALTER TABLE "_services_v_rels" DROP CONSTRAINT "_services_v_rels_testimonials_fk";

ALTER TABLE "_services_v_rels" DROP CONSTRAINT "_services_v_rels_companies_fk";

ALTER TABLE "_services_v_rels" DROP CONSTRAINT "_services_v_rels_community_resources_fk";

DROP INDEX IF EXISTS "teammates_slug_idx";
DROP INDEX IF EXISTS "_teammates_v_version_version_slug_idx";
DROP INDEX IF EXISTS "listings_slug_idx";
DROP INDEX IF EXISTS "_listings_v_version_version_slug_idx";
DROP INDEX IF EXISTS "services_slug_idx";
DROP INDEX IF EXISTS "_services_v_version_version_slug_idx";
ALTER TABLE "pages_blocks_cta" ADD COLUMN "invert_background" boolean;
ALTER TABLE "pages_blocks_cta" ADD COLUMN "rich_text" jsonb;
ALTER TABLE "_pages_v_blocks_cta" ADD COLUMN "invert_background" boolean;
ALTER TABLE "_pages_v_blocks_cta" ADD COLUMN "rich_text" jsonb;
ALTER TABLE "posts_blocks_cta" ADD COLUMN "invert_background" boolean;
ALTER TABLE "posts_blocks_cta" ADD COLUMN "rich_text" jsonb;
ALTER TABLE "_posts_v_blocks_cta" ADD COLUMN "invert_background" boolean;
ALTER TABLE "_posts_v_blocks_cta" ADD COLUMN "rich_text" jsonb;
ALTER TABLE "projects_blocks_cta" ADD COLUMN "invert_background" boolean;
ALTER TABLE "projects_blocks_cta" ADD COLUMN "rich_text" jsonb;
ALTER TABLE "projects" ADD COLUMN "hero_type" "enum_projects_hero_type";
ALTER TABLE "projects" ADD COLUMN "hero_rich_text" jsonb;
ALTER TABLE "_projects_v_blocks_cta" ADD COLUMN "invert_background" boolean;
ALTER TABLE "_projects_v_blocks_cta" ADD COLUMN "rich_text" jsonb;
ALTER TABLE "_projects_v" ADD COLUMN "version_hero_type" "enum__projects_v_version_hero_type";
ALTER TABLE "_projects_v" ADD COLUMN "version_hero_rich_text" jsonb;
ALTER TABLE "services" ADD COLUMN "icon_svg" varchar;
ALTER TABLE "services" ADD COLUMN "description" varchar;
ALTER TABLE "_services_v" ADD COLUMN "version_icon_svg" varchar;
ALTER TABLE "_services_v" ADD COLUMN "version_description" varchar;
CREATE INDEX IF NOT EXISTS "pages_blocks_cta_links_order_idx" ON "pages_blocks_cta_links" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_cta_links_parent_id_idx" ON "pages_blocks_cta_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_links_order_idx" ON "_pages_v_blocks_cta_links" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_links_parent_id_idx" ON "_pages_v_blocks_cta_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "posts_blocks_cta_links_order_idx" ON "posts_blocks_cta_links" ("_order");
CREATE INDEX IF NOT EXISTS "posts_blocks_cta_links_parent_id_idx" ON "posts_blocks_cta_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_cta_links_order_idx" ON "_posts_v_blocks_cta_links" ("_order");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_cta_links_parent_id_idx" ON "_posts_v_blocks_cta_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_hero_links_order_idx" ON "projects_hero_links" ("_order");
CREATE INDEX IF NOT EXISTS "projects_hero_links_parent_id_idx" ON "projects_hero_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_cta_links_order_idx" ON "projects_blocks_cta_links" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_cta_links_parent_id_idx" ON "projects_blocks_cta_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_version_hero_links_order_idx" ON "_projects_v_version_hero_links" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_version_hero_links_parent_id_idx" ON "_projects_v_version_hero_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_cta_links_order_idx" ON "_projects_v_blocks_cta_links" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_cta_links_parent_id_idx" ON "_projects_v_blocks_cta_links" ("_parent_id");
ALTER TABLE "pages_blocks_cta" DROP COLUMN IF EXISTS "type";
ALTER TABLE "pages_blocks_archive" DROP COLUMN IF EXISTS "bgColor";
ALTER TABLE "pages_blocks_archive" DROP COLUMN IF EXISTS "displayHeader";
ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_header_text";
ALTER TABLE "_pages_v_blocks_cta" DROP COLUMN IF EXISTS "type";
ALTER TABLE "_pages_v_blocks_archive" DROP COLUMN IF EXISTS "bgColor";
ALTER TABLE "_pages_v_blocks_archive" DROP COLUMN IF EXISTS "displayHeader";
ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_header_text";
ALTER TABLE "posts_blocks_cta" DROP COLUMN IF EXISTS "type";
ALTER TABLE "posts_blocks_archive" DROP COLUMN IF EXISTS "bgColor";
ALTER TABLE "posts_blocks_archive" DROP COLUMN IF EXISTS "displayHeader";
ALTER TABLE "posts" DROP COLUMN IF EXISTS "hero_header_text";
ALTER TABLE "_posts_v_blocks_cta" DROP COLUMN IF EXISTS "type";
ALTER TABLE "_posts_v_blocks_archive" DROP COLUMN IF EXISTS "bgColor";
ALTER TABLE "_posts_v_blocks_archive" DROP COLUMN IF EXISTS "displayHeader";
ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "version_hero_header_text";
ALTER TABLE "projects_blocks_cta" DROP COLUMN IF EXISTS "type";
ALTER TABLE "projects_blocks_archive" DROP COLUMN IF EXISTS "bgColor";
ALTER TABLE "projects_blocks_archive" DROP COLUMN IF EXISTS "displayHeader";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "address";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "description";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "neighborhood";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "latitude";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "longitude";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "price";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "website";
ALTER TABLE "projects" DROP COLUMN IF EXISTS "instagram";
ALTER TABLE "_projects_v_blocks_cta" DROP COLUMN IF EXISTS "type";
ALTER TABLE "_projects_v_blocks_archive" DROP COLUMN IF EXISTS "bgColor";
ALTER TABLE "_projects_v_blocks_archive" DROP COLUMN IF EXISTS "displayHeader";
ALTER TABLE "_projects_v" DROP COLUMN IF EXISTS "version_address";
ALTER TABLE "_projects_v" DROP COLUMN IF EXISTS "version_description";
ALTER TABLE "_projects_v" DROP COLUMN IF EXISTS "version_neighborhood";
ALTER TABLE "_projects_v" DROP COLUMN IF EXISTS "version_latitude";
ALTER TABLE "_projects_v" DROP COLUMN IF EXISTS "version_longitude";
ALTER TABLE "_projects_v" DROP COLUMN IF EXISTS "version_price";
ALTER TABLE "_projects_v" DROP COLUMN IF EXISTS "version_website";
ALTER TABLE "_projects_v" DROP COLUMN IF EXISTS "version_instagram";
ALTER TABLE "teammates" DROP COLUMN IF EXISTS "profile_introduction";
ALTER TABLE "teammates_rels" DROP COLUMN IF EXISTS "community_resources_id";
ALTER TABLE "_teammates_v" DROP COLUMN IF EXISTS "version_profile_introduction";
ALTER TABLE "_teammates_v_rels" DROP COLUMN IF EXISTS "community_resources_id";
ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "teammates_id";
ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "pages_id";
ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "categories_id";
ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "posts_id";
ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "projects_id";
ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "listings_id";
ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "involvement_groups_id";
ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "involvement_events_id";
ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "testimonials_id";
ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "companies_id";
ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "services_id";
ALTER TABLE "listings_rels" DROP COLUMN IF EXISTS "community_resources_id";
ALTER TABLE "_listings_v_rels" DROP COLUMN IF EXISTS "teammates_id";
ALTER TABLE "_listings_v_rels" DROP COLUMN IF EXISTS "pages_id";
ALTER TABLE "_listings_v_rels" DROP COLUMN IF EXISTS "categories_id";
ALTER TABLE "_listings_v_rels" DROP COLUMN IF EXISTS "posts_id";
ALTER TABLE "_listings_v_rels" DROP COLUMN IF EXISTS "projects_id";
ALTER TABLE "_listings_v_rels" DROP COLUMN IF EXISTS "involvement_groups_id";
ALTER TABLE "_listings_v_rels" DROP COLUMN IF EXISTS "involvement_events_id";
ALTER TABLE "_listings_v_rels" DROP COLUMN IF EXISTS "testimonials_id";
ALTER TABLE "_listings_v_rels" DROP COLUMN IF EXISTS "companies_id";
ALTER TABLE "_listings_v_rels" DROP COLUMN IF EXISTS "services_id";
ALTER TABLE "_listings_v_rels" DROP COLUMN IF EXISTS "community_resources_id";
ALTER TABLE "services" DROP COLUMN IF EXISTS "short_description";
ALTER TABLE "services" DROP COLUMN IF EXISTS "hero_type";
ALTER TABLE "services" DROP COLUMN IF EXISTS "hero_header_text";
ALTER TABLE "services" DROP COLUMN IF EXISTS "hero_rich_text";
ALTER TABLE "services_rels" DROP COLUMN IF EXISTS "pages_id";
ALTER TABLE "services_rels" DROP COLUMN IF EXISTS "categories_id";
ALTER TABLE "services_rels" DROP COLUMN IF EXISTS "posts_id";
ALTER TABLE "services_rels" DROP COLUMN IF EXISTS "projects_id";
ALTER TABLE "services_rels" DROP COLUMN IF EXISTS "listings_id";
ALTER TABLE "services_rels" DROP COLUMN IF EXISTS "teammates_id";
ALTER TABLE "services_rels" DROP COLUMN IF EXISTS "involvement_groups_id";
ALTER TABLE "services_rels" DROP COLUMN IF EXISTS "involvement_events_id";
ALTER TABLE "services_rels" DROP COLUMN IF EXISTS "testimonials_id";
ALTER TABLE "services_rels" DROP COLUMN IF EXISTS "companies_id";
ALTER TABLE "services_rels" DROP COLUMN IF EXISTS "services_id";
ALTER TABLE "services_rels" DROP COLUMN IF EXISTS "community_resources_id";
ALTER TABLE "_services_v" DROP COLUMN IF EXISTS "version_short_description";
ALTER TABLE "_services_v" DROP COLUMN IF EXISTS "version_hero_type";
ALTER TABLE "_services_v" DROP COLUMN IF EXISTS "version_hero_header_text";
ALTER TABLE "_services_v" DROP COLUMN IF EXISTS "version_hero_rich_text";
ALTER TABLE "_services_v_rels" DROP COLUMN IF EXISTS "pages_id";
ALTER TABLE "_services_v_rels" DROP COLUMN IF EXISTS "categories_id";
ALTER TABLE "_services_v_rels" DROP COLUMN IF EXISTS "posts_id";
ALTER TABLE "_services_v_rels" DROP COLUMN IF EXISTS "projects_id";
ALTER TABLE "_services_v_rels" DROP COLUMN IF EXISTS "listings_id";
ALTER TABLE "_services_v_rels" DROP COLUMN IF EXISTS "teammates_id";
ALTER TABLE "_services_v_rels" DROP COLUMN IF EXISTS "involvement_groups_id";
ALTER TABLE "_services_v_rels" DROP COLUMN IF EXISTS "involvement_events_id";
ALTER TABLE "_services_v_rels" DROP COLUMN IF EXISTS "testimonials_id";
ALTER TABLE "_services_v_rels" DROP COLUMN IF EXISTS "companies_id";
ALTER TABLE "_services_v_rels" DROP COLUMN IF EXISTS "community_resources_id";
ALTER TABLE "involvement_groups" DROP COLUMN IF EXISTS "link_to_group_website";
ALTER TABLE "_involvement_groups_v" DROP COLUMN IF EXISTS "version_link_to_group_website";
DO $$ BEGIN
 ALTER TABLE "pages_blocks_cta_links" ADD CONSTRAINT "pages_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_cta_links" ADD CONSTRAINT "_pages_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_blocks_cta_links" ADD CONSTRAINT "posts_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_blocks_cta_links" ADD CONSTRAINT "_posts_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_posts_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_hero_links" ADD CONSTRAINT "projects_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_cta_links" ADD CONSTRAINT "projects_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_version_hero_links" ADD CONSTRAINT "_projects_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_cta_links" ADD CONSTRAINT "_projects_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};
