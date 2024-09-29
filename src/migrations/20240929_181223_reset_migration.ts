import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-postgres'
import { sql } from 'drizzle-orm'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DO $$ BEGIN
 CREATE TYPE "enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_hero_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_hero_links_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

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
 CREATE TYPE "enum_pages_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_content_columns_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_media_block_position" AS ENUM('default', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_archive_populate_by" AS ENUM('collection', 'selection');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_blocks_archive_relation_to" AS ENUM('posts', 'projects', 'listings');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_pages_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_hero_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_hero_links_link_appearance" AS ENUM('default', 'primary', 'secondary');
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
 CREATE TYPE "enum__pages_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_content_columns_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_media_block_position" AS ENUM('default', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_blocks_archive_relation_to" AS ENUM('posts', 'projects', 'listings');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__pages_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_posts_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_posts_hero_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_posts_hero_links_link_appearance" AS ENUM('default', 'primary', 'secondary');
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
 CREATE TYPE "enum_posts_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_posts_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_posts_blocks_content_columns_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_posts_blocks_media_block_position" AS ENUM('default', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_posts_blocks_archive_populate_by" AS ENUM('collection', 'selection');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_posts_blocks_archive_relation_to" AS ENUM('posts', 'projects', 'listings');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_posts_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__posts_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__posts_v_version_hero_links_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__posts_v_version_hero_links_link_appearance" AS ENUM('default', 'primary', 'secondary');
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
 CREATE TYPE "enum__posts_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__posts_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__posts_v_blocks_content_columns_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__posts_v_blocks_media_block_position" AS ENUM('default', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__posts_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__posts_v_blocks_archive_relation_to" AS ENUM('posts', 'projects', 'listings');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__posts_v_version_status" AS ENUM('draft', 'published');
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
 CREATE TYPE "enum_projects_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_content_columns_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_media_block_position" AS ENUM('default', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_archive_populate_by" AS ENUM('collection', 'selection');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_blocks_archive_relation_to" AS ENUM('posts', 'projects', 'listings');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_projects_status" AS ENUM('draft', 'published');
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

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_content_columns_link_appearance" AS ENUM('default', 'primary', 'secondary');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_media_block_position" AS ENUM('default', 'fullscreen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_blocks_archive_relation_to" AS ENUM('posts', 'projects', 'listings');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__projects_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_users_roles" AS ENUM('admin', 'user');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_comments_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__comments_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_team_member_strengths" AS ENUM('Residential Real Estate', 'Commercial Real Estate');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_property_type" AS ENUM('shoppingCenter', 'bizOpportunity', 'multiFamily', 'office', 'mixedUse');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_zoning_type" AS ENUM('C', 'r', 'i');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_tenancy_type" AS ENUM('singleTenant', 'multiTenant');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_listings_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_version_property_type" AS ENUM('shoppingCenter', 'bizOpportunity', 'multiFamily', 'office', 'mixedUse');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_version_zoning_type" AS ENUM('C', 'r', 'i');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_version_tenancy_type" AS ENUM('singleTenant', 'multiTenant');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum__listings_v_version_status" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_redirects_to_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_footer_nav_items_link_type" AS ENUM('reference', 'custom');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "pages_hero_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "enum_pages_hero_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_pages_hero_links_link_appearance"
);

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

CREATE TABLE IF NOT EXISTS "pages_blocks_cta" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"rich_text" jsonb,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_content_columns" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"size" "enum_pages_blocks_content_columns_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum_pages_blocks_content_columns_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_pages_blocks_content_columns_link_appearance"
);

CREATE TABLE IF NOT EXISTS "pages_blocks_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_media_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum_pages_blocks_media_block_position",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages_blocks_archive" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"intro_content" jsonb,
	"populateBy" "enum_pages_blocks_archive_populate_by",
	"relationTo" "enum_pages_blocks_archive_relation_to",
	"limit" numeric,
	"populated_docs_total" numeric,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "pages" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"published_at" timestamp(3) with time zone,
	"hero_type" "enum_pages_hero_type",
	"hero_rich_text" jsonb,
	"slug" varchar,
	"meta_title" varchar,
	"meta_description" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_pages_status"
);

CREATE TABLE IF NOT EXISTS "pages_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer,
	"media_id" integer,
	"categories_id" integer,
	"posts_id" integer,
	"projects_id" integer,
	"listings_id" integer
);

CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"link_type" "enum__pages_v_version_hero_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__pages_v_version_hero_links_link_appearance",
	"_uuid" varchar
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

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"rich_text" jsonb,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content_columns" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"size" "enum__pages_v_blocks_content_columns_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum__pages_v_blocks_content_columns_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__pages_v_blocks_content_columns_link_appearance",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_media_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum__pages_v_blocks_media_block_position",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v_blocks_archive" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"intro_content" jsonb,
	"populateBy" "enum__pages_v_blocks_archive_populate_by",
	"relationTo" "enum__pages_v_blocks_archive_relation_to",
	"limit" numeric,
	"populated_docs_total" numeric,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_pages_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_title" varchar,
	"version_published_at" timestamp(3) with time zone,
	"version_hero_type" "enum__pages_v_version_hero_type",
	"version_hero_rich_text" jsonb,
	"version_slug" varchar,
	"version_meta_title" varchar,
	"version_meta_description" varchar,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__pages_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer,
	"media_id" integer,
	"categories_id" integer,
	"posts_id" integer,
	"projects_id" integer,
	"listings_id" integer
);

CREATE TABLE IF NOT EXISTS "posts_populated_authors" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar
);

CREATE TABLE IF NOT EXISTS "posts_hero_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "enum_posts_hero_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_posts_hero_links_link_appearance"
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

CREATE TABLE IF NOT EXISTS "posts_blocks_cta" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"rich_text" jsonb,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "posts_blocks_content_columns" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"size" "enum_posts_blocks_content_columns_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum_posts_blocks_content_columns_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_posts_blocks_content_columns_link_appearance"
);

CREATE TABLE IF NOT EXISTS "posts_blocks_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "posts_blocks_media_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum_posts_blocks_media_block_position",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "posts_blocks_archive" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"intro_content" jsonb,
	"populateBy" "enum_posts_blocks_archive_populate_by",
	"relationTo" "enum_posts_blocks_archive_relation_to",
	"limit" numeric,
	"populated_docs_total" numeric,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"published_at" timestamp(3) with time zone,
	"hero_type" "enum_posts_hero_type",
	"hero_rich_text" jsonb,
	"enable_premium_content" boolean,
	"slug" varchar,
	"meta_title" varchar,
	"meta_description" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_posts_status"
);

CREATE TABLE IF NOT EXISTS "posts_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"categories_id" integer,
	"users_id" integer,
	"pages_id" integer,
	"media_id" integer,
	"posts_id" integer,
	"projects_id" integer,
	"listings_id" integer
);

CREATE TABLE IF NOT EXISTS "_posts_v_version_populated_authors" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"_uuid" varchar,
	"name" varchar
);

CREATE TABLE IF NOT EXISTS "_posts_v_version_hero_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"link_type" "enum__posts_v_version_hero_links_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__posts_v_version_hero_links_link_appearance",
	"_uuid" varchar
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

CREATE TABLE IF NOT EXISTS "_posts_v_blocks_cta" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"rich_text" jsonb,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_posts_v_blocks_content_columns" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"size" "enum__posts_v_blocks_content_columns_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum__posts_v_blocks_content_columns_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__posts_v_blocks_content_columns_link_appearance",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_posts_v_blocks_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_posts_v_blocks_media_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum__posts_v_blocks_media_block_position",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_posts_v_blocks_archive" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"intro_content" jsonb,
	"populateBy" "enum__posts_v_blocks_archive_populate_by",
	"relationTo" "enum__posts_v_blocks_archive_relation_to",
	"limit" numeric,
	"populated_docs_total" numeric,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_posts_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_title" varchar,
	"version_published_at" timestamp(3) with time zone,
	"version_hero_type" "enum__posts_v_version_hero_type",
	"version_hero_rich_text" jsonb,
	"version_enable_premium_content" boolean,
	"version_slug" varchar,
	"version_meta_title" varchar,
	"version_meta_description" varchar,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__posts_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_posts_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"posts_id" integer,
	"categories_id" integer,
	"users_id" integer,
	"pages_id" integer,
	"media_id" integer,
	"projects_id" integer,
	"listings_id" integer
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

CREATE TABLE IF NOT EXISTS "projects_blocks_cta" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"rich_text" jsonb,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "projects_blocks_content_columns" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"size" "enum_projects_blocks_content_columns_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum_projects_blocks_content_columns_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum_projects_blocks_content_columns_link_appearance"
);

CREATE TABLE IF NOT EXISTS "projects_blocks_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "projects_blocks_media_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum_projects_blocks_media_block_position",
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "projects_blocks_archive" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"intro_content" jsonb,
	"populateBy" "enum_projects_blocks_archive_populate_by",
	"relationTo" "enum_projects_blocks_archive_relation_to",
	"limit" numeric,
	"populated_docs_total" numeric,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"published_at" timestamp(3) with time zone,
	"hero_type" "enum_projects_hero_type",
	"hero_rich_text" jsonb,
	"slug" varchar,
	"meta_title" varchar,
	"meta_description" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_projects_status"
);

CREATE TABLE IF NOT EXISTS "projects_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"categories_id" integer,
	"pages_id" integer,
	"media_id" integer,
	"posts_id" integer,
	"projects_id" integer,
	"listings_id" integer
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

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_cta" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"rich_text" jsonb,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_content_columns" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"size" "enum__projects_v_blocks_content_columns_size",
	"rich_text" jsonb,
	"enable_link" boolean,
	"link_type" "enum__projects_v_blocks_content_columns_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar,
	"link_appearance" "enum__projects_v_blocks_content_columns_link_appearance",
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_content" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_media_block" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"invert_background" boolean,
	"position" "enum__projects_v_blocks_media_block_position",
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v_blocks_archive" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"_path" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"intro_content" jsonb,
	"populateBy" "enum__projects_v_blocks_archive_populate_by",
	"relationTo" "enum__projects_v_blocks_archive_relation_to",
	"limit" numeric,
	"populated_docs_total" numeric,
	"_uuid" varchar,
	"block_name" varchar
);

CREATE TABLE IF NOT EXISTS "_projects_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_title" varchar,
	"version_published_at" timestamp(3) with time zone,
	"version_hero_type" "enum__projects_v_version_hero_type",
	"version_hero_rich_text" jsonb,
	"version_slug" varchar,
	"version_meta_title" varchar,
	"version_meta_description" varchar,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__projects_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_projects_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"projects_id" integer,
	"categories_id" integer,
	"pages_id" integer,
	"media_id" integer,
	"posts_id" integer,
	"listings_id" integer
);

CREATE TABLE IF NOT EXISTS "media" (
	"id" serial PRIMARY KEY NOT NULL,
	"alt" varchar NOT NULL,
	"caption" jsonb,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
	"focal_x" numeric,
	"focal_y" numeric
);

CREATE TABLE IF NOT EXISTS "categories_breadcrumbs" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"url" varchar,
	"label" varchar
);

CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "categories_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"categories_id" integer
);

CREATE TABLE IF NOT EXISTS "users_roles" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_users_roles",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"email" varchar NOT NULL,
	"reset_password_token" varchar,
	"reset_password_expiration" timestamp(3) with time zone,
	"salt" varchar,
	"hash" varchar,
	"login_attempts" numeric,
	"lock_until" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"populated_user_name" varchar,
	"comment" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_comments_status"
);

CREATE TABLE IF NOT EXISTS "comments_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"users_id" integer,
	"posts_id" integer
);

CREATE TABLE IF NOT EXISTS "_comments_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_populated_user_name" varchar,
	"version_comment" varchar,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__comments_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_comments_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"comments_id" integer,
	"users_id" integer,
	"posts_id" integer
);

CREATE TABLE IF NOT EXISTS "team_member_strengths" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_team_member_strengths",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "team_member" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"bio" varchar NOT NULL,
	"years_of_experience" numeric NOT NULL,
	"phone_number" varchar NOT NULL,
	"email" varchar NOT NULL,
	"slug" varchar,
	"instagram" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "team_member_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"media_id" integer
);

CREATE TABLE IF NOT EXISTS "listings_property_type" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum_listings_property_type",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "listings_image_gallery" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"alt_text" varchar,
	"caption" varchar
);

CREATE TABLE IF NOT EXISTS "listings" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar,
	"slug" varchar,
	"address" varchar,
	"street_address" varchar,
	"neighborhood" varchar,
	"city" varchar,
	"zip_code" varchar,
	"county" varchar,
	"state" varchar,
	"latitude" numeric,
	"longitude" numeric,
	"price" numeric,
	"sq_ft" numeric,
	"sq_ft_land" numeric,
	"bed_count" numeric,
	"bathroom_count" numeric,
	"overview" varchar,
	"area_overview" varchar,
	"zoningType" "enum_listings_zoning_type",
	"tenancyType" "enum_listings_tenancy_type",
	"year_built" numeric,
	"occupancy" numeric,
	"meta_title" varchar,
	"meta_description" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"_status" "enum_listings_status"
);

CREATE TABLE IF NOT EXISTS "listings_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"categories_id" integer,
	"media_id" integer,
	"team_member_id" integer
);

CREATE TABLE IF NOT EXISTS "_listings_v_version_property_type" (
	"order" integer NOT NULL,
	"parent_id" integer NOT NULL,
	"value" "enum__listings_v_version_property_type",
	"id" serial PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "_listings_v_version_image_gallery" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"alt_text" varchar,
	"caption" varchar,
	"_uuid" varchar
);

CREATE TABLE IF NOT EXISTS "_listings_v" (
	"id" serial PRIMARY KEY NOT NULL,
	"version_title" varchar,
	"version_slug" varchar,
	"version_address" varchar,
	"version_street_address" varchar,
	"version_neighborhood" varchar,
	"version_city" varchar,
	"version_zip_code" varchar,
	"version_county" varchar,
	"version_state" varchar,
	"version_latitude" numeric,
	"version_longitude" numeric,
	"version_price" numeric,
	"version_sq_ft" numeric,
	"version_sq_ft_land" numeric,
	"version_bed_count" numeric,
	"version_bathroom_count" numeric,
	"version_overview" varchar,
	"version_area_overview" varchar,
	"version_zoningType" "enum__listings_v_version_zoning_type",
	"version_tenancyType" "enum__listings_v_version_tenancy_type",
	"version_year_built" numeric,
	"version_occupancy" numeric,
	"version_meta_title" varchar,
	"version_meta_description" varchar,
	"version_updated_at" timestamp(3) with time zone,
	"version_created_at" timestamp(3) with time zone,
	"version__status" "enum__listings_v_version_status",
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"latest" boolean
);

CREATE TABLE IF NOT EXISTS "_listings_v_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"listings_id" integer,
	"categories_id" integer,
	"media_id" integer,
	"team_member_id" integer
);

CREATE TABLE IF NOT EXISTS "redirects" (
	"id" serial PRIMARY KEY NOT NULL,
	"from" varchar NOT NULL,
	"to_type" "enum_redirects_to_type",
	"to_url" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "redirects_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer,
	"posts_id" integer
);

CREATE TABLE IF NOT EXISTS "payload_preferences" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar,
	"value" jsonb,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"users_id" integer
);

CREATE TABLE IF NOT EXISTS "payload_migrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"batch" numeric,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "settings" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "settings_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer
);

CREATE TABLE IF NOT EXISTS "header_nav_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "enum_header_nav_items_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "header" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "header_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer
);

CREATE TABLE IF NOT EXISTS "footer_nav_items" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"link_type" "enum_footer_nav_items_link_type",
	"link_new_tab" boolean,
	"link_url" varchar,
	"link_label" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "footer" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "footer_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"pages_id" integer
);

CREATE INDEX IF NOT EXISTS "pages_hero_links_order_idx" ON "pages_hero_links" ("_order");
CREATE INDEX IF NOT EXISTS "pages_hero_links_parent_id_idx" ON "pages_hero_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_cta_links_order_idx" ON "pages_blocks_cta_links" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_cta_links_parent_id_idx" ON "pages_blocks_cta_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_cta_order_idx" ON "pages_blocks_cta" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_cta_path_idx" ON "pages_blocks_cta" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_columns_order_idx" ON "pages_blocks_content_columns" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_columns_parent_id_idx" ON "pages_blocks_content_columns" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_order_idx" ON "pages_blocks_content" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_content_path_idx" ON "pages_blocks_content" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_order_idx" ON "pages_blocks_media_block" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_parent_id_idx" ON "pages_blocks_media_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_path_idx" ON "pages_blocks_media_block" ("_path");
CREATE INDEX IF NOT EXISTS "pages_blocks_archive_order_idx" ON "pages_blocks_archive" ("_order");
CREATE INDEX IF NOT EXISTS "pages_blocks_archive_parent_id_idx" ON "pages_blocks_archive" ("_parent_id");
CREATE INDEX IF NOT EXISTS "pages_blocks_archive_path_idx" ON "pages_blocks_archive" ("_path");
CREATE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" ("slug");
CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" ("created_at");
CREATE INDEX IF NOT EXISTS "pages__status_idx" ON "pages" ("_status");
CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" ("order");
CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" ("path");
CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_links_order_idx" ON "_pages_v_version_hero_links" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_links_parent_id_idx" ON "_pages_v_version_hero_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_links_order_idx" ON "_pages_v_blocks_cta_links" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_links_parent_id_idx" ON "_pages_v_blocks_cta_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_columns_order_idx" ON "_pages_v_blocks_content_columns" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_columns_parent_id_idx" ON "_pages_v_blocks_content_columns" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_order_idx" ON "_pages_v_blocks_media_block" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_parent_id_idx" ON "_pages_v_blocks_media_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_media_block_path_idx" ON "_pages_v_blocks_media_block" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_archive_order_idx" ON "_pages_v_blocks_archive" ("_order");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_archive_parent_id_idx" ON "_pages_v_blocks_archive" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_blocks_archive_path_idx" ON "_pages_v_blocks_archive" ("_path");
CREATE INDEX IF NOT EXISTS "_pages_v_version_version_slug_idx" ON "_pages_v" ("version_slug");
CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_pages_v_version_version__status_idx" ON "_pages_v" ("version__status");
CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" ("latest");
CREATE INDEX IF NOT EXISTS "_pages_v_rels_order_idx" ON "_pages_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_pages_v_rels_parent_idx" ON "_pages_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_pages_v_rels_path_idx" ON "_pages_v_rels" ("path");
CREATE INDEX IF NOT EXISTS "posts_populated_authors_order_idx" ON "posts_populated_authors" ("_order");
CREATE INDEX IF NOT EXISTS "posts_populated_authors_parent_id_idx" ON "posts_populated_authors" ("_parent_id");
CREATE INDEX IF NOT EXISTS "posts_hero_links_order_idx" ON "posts_hero_links" ("_order");
CREATE INDEX IF NOT EXISTS "posts_hero_links_parent_id_idx" ON "posts_hero_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "posts_blocks_cta_links_order_idx" ON "posts_blocks_cta_links" ("_order");
CREATE INDEX IF NOT EXISTS "posts_blocks_cta_links_parent_id_idx" ON "posts_blocks_cta_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "posts_blocks_cta_order_idx" ON "posts_blocks_cta" ("_order");
CREATE INDEX IF NOT EXISTS "posts_blocks_cta_parent_id_idx" ON "posts_blocks_cta" ("_parent_id");
CREATE INDEX IF NOT EXISTS "posts_blocks_cta_path_idx" ON "posts_blocks_cta" ("_path");
CREATE INDEX IF NOT EXISTS "posts_blocks_content_columns_order_idx" ON "posts_blocks_content_columns" ("_order");
CREATE INDEX IF NOT EXISTS "posts_blocks_content_columns_parent_id_idx" ON "posts_blocks_content_columns" ("_parent_id");
CREATE INDEX IF NOT EXISTS "posts_blocks_content_order_idx" ON "posts_blocks_content" ("_order");
CREATE INDEX IF NOT EXISTS "posts_blocks_content_parent_id_idx" ON "posts_blocks_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "posts_blocks_content_path_idx" ON "posts_blocks_content" ("_path");
CREATE INDEX IF NOT EXISTS "posts_blocks_media_block_order_idx" ON "posts_blocks_media_block" ("_order");
CREATE INDEX IF NOT EXISTS "posts_blocks_media_block_parent_id_idx" ON "posts_blocks_media_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "posts_blocks_media_block_path_idx" ON "posts_blocks_media_block" ("_path");
CREATE INDEX IF NOT EXISTS "posts_blocks_archive_order_idx" ON "posts_blocks_archive" ("_order");
CREATE INDEX IF NOT EXISTS "posts_blocks_archive_parent_id_idx" ON "posts_blocks_archive" ("_parent_id");
CREATE INDEX IF NOT EXISTS "posts_blocks_archive_path_idx" ON "posts_blocks_archive" ("_path");
CREATE INDEX IF NOT EXISTS "posts_slug_idx" ON "posts" ("slug");
CREATE INDEX IF NOT EXISTS "posts_created_at_idx" ON "posts" ("created_at");
CREATE INDEX IF NOT EXISTS "posts__status_idx" ON "posts" ("_status");
CREATE INDEX IF NOT EXISTS "posts_rels_order_idx" ON "posts_rels" ("order");
CREATE INDEX IF NOT EXISTS "posts_rels_parent_idx" ON "posts_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "posts_rels_path_idx" ON "posts_rels" ("path");
CREATE INDEX IF NOT EXISTS "_posts_v_version_populated_authors_order_idx" ON "_posts_v_version_populated_authors" ("_order");
CREATE INDEX IF NOT EXISTS "_posts_v_version_populated_authors_parent_id_idx" ON "_posts_v_version_populated_authors" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_posts_v_version_hero_links_order_idx" ON "_posts_v_version_hero_links" ("_order");
CREATE INDEX IF NOT EXISTS "_posts_v_version_hero_links_parent_id_idx" ON "_posts_v_version_hero_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_cta_links_order_idx" ON "_posts_v_blocks_cta_links" ("_order");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_cta_links_parent_id_idx" ON "_posts_v_blocks_cta_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_cta_order_idx" ON "_posts_v_blocks_cta" ("_order");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_cta_parent_id_idx" ON "_posts_v_blocks_cta" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_cta_path_idx" ON "_posts_v_blocks_cta" ("_path");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_content_columns_order_idx" ON "_posts_v_blocks_content_columns" ("_order");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_content_columns_parent_id_idx" ON "_posts_v_blocks_content_columns" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_content_order_idx" ON "_posts_v_blocks_content" ("_order");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_content_parent_id_idx" ON "_posts_v_blocks_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_content_path_idx" ON "_posts_v_blocks_content" ("_path");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_media_block_order_idx" ON "_posts_v_blocks_media_block" ("_order");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_media_block_parent_id_idx" ON "_posts_v_blocks_media_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_media_block_path_idx" ON "_posts_v_blocks_media_block" ("_path");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_archive_order_idx" ON "_posts_v_blocks_archive" ("_order");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_archive_parent_id_idx" ON "_posts_v_blocks_archive" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_posts_v_blocks_archive_path_idx" ON "_posts_v_blocks_archive" ("_path");
CREATE INDEX IF NOT EXISTS "_posts_v_version_version_slug_idx" ON "_posts_v" ("version_slug");
CREATE INDEX IF NOT EXISTS "_posts_v_version_version_created_at_idx" ON "_posts_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_posts_v_version_version__status_idx" ON "_posts_v" ("version__status");
CREATE INDEX IF NOT EXISTS "_posts_v_created_at_idx" ON "_posts_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_posts_v_updated_at_idx" ON "_posts_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_posts_v_latest_idx" ON "_posts_v" ("latest");
CREATE INDEX IF NOT EXISTS "_posts_v_rels_order_idx" ON "_posts_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_posts_v_rels_parent_idx" ON "_posts_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_posts_v_rels_path_idx" ON "_posts_v_rels" ("path");
CREATE INDEX IF NOT EXISTS "projects_hero_links_order_idx" ON "projects_hero_links" ("_order");
CREATE INDEX IF NOT EXISTS "projects_hero_links_parent_id_idx" ON "projects_hero_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_cta_links_order_idx" ON "projects_blocks_cta_links" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_cta_links_parent_id_idx" ON "projects_blocks_cta_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_cta_order_idx" ON "projects_blocks_cta" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_cta_parent_id_idx" ON "projects_blocks_cta" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_cta_path_idx" ON "projects_blocks_cta" ("_path");
CREATE INDEX IF NOT EXISTS "projects_blocks_content_columns_order_idx" ON "projects_blocks_content_columns" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_content_columns_parent_id_idx" ON "projects_blocks_content_columns" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_content_order_idx" ON "projects_blocks_content" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_content_parent_id_idx" ON "projects_blocks_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_content_path_idx" ON "projects_blocks_content" ("_path");
CREATE INDEX IF NOT EXISTS "projects_blocks_media_block_order_idx" ON "projects_blocks_media_block" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_media_block_parent_id_idx" ON "projects_blocks_media_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_media_block_path_idx" ON "projects_blocks_media_block" ("_path");
CREATE INDEX IF NOT EXISTS "projects_blocks_archive_order_idx" ON "projects_blocks_archive" ("_order");
CREATE INDEX IF NOT EXISTS "projects_blocks_archive_parent_id_idx" ON "projects_blocks_archive" ("_parent_id");
CREATE INDEX IF NOT EXISTS "projects_blocks_archive_path_idx" ON "projects_blocks_archive" ("_path");
CREATE INDEX IF NOT EXISTS "projects_slug_idx" ON "projects" ("slug");
CREATE INDEX IF NOT EXISTS "projects_created_at_idx" ON "projects" ("created_at");
CREATE INDEX IF NOT EXISTS "projects__status_idx" ON "projects" ("_status");
CREATE INDEX IF NOT EXISTS "projects_rels_order_idx" ON "projects_rels" ("order");
CREATE INDEX IF NOT EXISTS "projects_rels_parent_idx" ON "projects_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "projects_rels_path_idx" ON "projects_rels" ("path");
CREATE INDEX IF NOT EXISTS "_projects_v_version_hero_links_order_idx" ON "_projects_v_version_hero_links" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_version_hero_links_parent_id_idx" ON "_projects_v_version_hero_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_cta_links_order_idx" ON "_projects_v_blocks_cta_links" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_cta_links_parent_id_idx" ON "_projects_v_blocks_cta_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_cta_order_idx" ON "_projects_v_blocks_cta" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_cta_parent_id_idx" ON "_projects_v_blocks_cta" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_cta_path_idx" ON "_projects_v_blocks_cta" ("_path");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_content_columns_order_idx" ON "_projects_v_blocks_content_columns" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_content_columns_parent_id_idx" ON "_projects_v_blocks_content_columns" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_content_order_idx" ON "_projects_v_blocks_content" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_content_parent_id_idx" ON "_projects_v_blocks_content" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_content_path_idx" ON "_projects_v_blocks_content" ("_path");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_media_block_order_idx" ON "_projects_v_blocks_media_block" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_media_block_parent_id_idx" ON "_projects_v_blocks_media_block" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_media_block_path_idx" ON "_projects_v_blocks_media_block" ("_path");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_archive_order_idx" ON "_projects_v_blocks_archive" ("_order");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_archive_parent_id_idx" ON "_projects_v_blocks_archive" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_blocks_archive_path_idx" ON "_projects_v_blocks_archive" ("_path");
CREATE INDEX IF NOT EXISTS "_projects_v_version_version_slug_idx" ON "_projects_v" ("version_slug");
CREATE INDEX IF NOT EXISTS "_projects_v_version_version_created_at_idx" ON "_projects_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_projects_v_version_version__status_idx" ON "_projects_v" ("version__status");
CREATE INDEX IF NOT EXISTS "_projects_v_created_at_idx" ON "_projects_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_projects_v_updated_at_idx" ON "_projects_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_projects_v_latest_idx" ON "_projects_v" ("latest");
CREATE INDEX IF NOT EXISTS "_projects_v_rels_order_idx" ON "_projects_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_projects_v_rels_parent_idx" ON "_projects_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_projects_v_rels_path_idx" ON "_projects_v_rels" ("path");
CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" ("filename");
CREATE INDEX IF NOT EXISTS "categories_breadcrumbs_order_idx" ON "categories_breadcrumbs" ("_order");
CREATE INDEX IF NOT EXISTS "categories_breadcrumbs_parent_id_idx" ON "categories_breadcrumbs" ("_parent_id");
CREATE INDEX IF NOT EXISTS "categories_created_at_idx" ON "categories" ("created_at");
CREATE INDEX IF NOT EXISTS "categories_rels_order_idx" ON "categories_rels" ("order");
CREATE INDEX IF NOT EXISTS "categories_rels_parent_idx" ON "categories_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "categories_rels_path_idx" ON "categories_rels" ("path");
CREATE INDEX IF NOT EXISTS "users_roles_order_idx" ON "users_roles" ("order");
CREATE INDEX IF NOT EXISTS "users_roles_parent_idx" ON "users_roles" ("parent_id");
CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" ("email");
CREATE INDEX IF NOT EXISTS "comments_created_at_idx" ON "comments" ("created_at");
CREATE INDEX IF NOT EXISTS "comments__status_idx" ON "comments" ("_status");
CREATE INDEX IF NOT EXISTS "comments_rels_order_idx" ON "comments_rels" ("order");
CREATE INDEX IF NOT EXISTS "comments_rels_parent_idx" ON "comments_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "comments_rels_path_idx" ON "comments_rels" ("path");
CREATE INDEX IF NOT EXISTS "_comments_v_version_version_created_at_idx" ON "_comments_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_comments_v_version_version__status_idx" ON "_comments_v" ("version__status");
CREATE INDEX IF NOT EXISTS "_comments_v_created_at_idx" ON "_comments_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_comments_v_updated_at_idx" ON "_comments_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_comments_v_latest_idx" ON "_comments_v" ("latest");
CREATE INDEX IF NOT EXISTS "_comments_v_rels_order_idx" ON "_comments_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_comments_v_rels_parent_idx" ON "_comments_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_comments_v_rels_path_idx" ON "_comments_v_rels" ("path");
CREATE INDEX IF NOT EXISTS "team_member_strengths_order_idx" ON "team_member_strengths" ("order");
CREATE INDEX IF NOT EXISTS "team_member_strengths_parent_idx" ON "team_member_strengths" ("parent_id");
CREATE INDEX IF NOT EXISTS "team_member_created_at_idx" ON "team_member" ("created_at");
CREATE INDEX IF NOT EXISTS "team_member_rels_order_idx" ON "team_member_rels" ("order");
CREATE INDEX IF NOT EXISTS "team_member_rels_parent_idx" ON "team_member_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "team_member_rels_path_idx" ON "team_member_rels" ("path");
CREATE INDEX IF NOT EXISTS "listings_property_type_order_idx" ON "listings_property_type" ("order");
CREATE INDEX IF NOT EXISTS "listings_property_type_parent_idx" ON "listings_property_type" ("parent_id");
CREATE INDEX IF NOT EXISTS "listings_image_gallery_order_idx" ON "listings_image_gallery" ("_order");
CREATE INDEX IF NOT EXISTS "listings_image_gallery_parent_id_idx" ON "listings_image_gallery" ("_parent_id");
CREATE INDEX IF NOT EXISTS "listings_created_at_idx" ON "listings" ("created_at");
CREATE INDEX IF NOT EXISTS "listings__status_idx" ON "listings" ("_status");
CREATE INDEX IF NOT EXISTS "listings_rels_order_idx" ON "listings_rels" ("order");
CREATE INDEX IF NOT EXISTS "listings_rels_parent_idx" ON "listings_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "listings_rels_path_idx" ON "listings_rels" ("path");
CREATE INDEX IF NOT EXISTS "_listings_v_version_property_type_order_idx" ON "_listings_v_version_property_type" ("order");
CREATE INDEX IF NOT EXISTS "_listings_v_version_property_type_parent_idx" ON "_listings_v_version_property_type" ("parent_id");
CREATE INDEX IF NOT EXISTS "_listings_v_version_image_gallery_order_idx" ON "_listings_v_version_image_gallery" ("_order");
CREATE INDEX IF NOT EXISTS "_listings_v_version_image_gallery_parent_id_idx" ON "_listings_v_version_image_gallery" ("_parent_id");
CREATE INDEX IF NOT EXISTS "_listings_v_version_version_created_at_idx" ON "_listings_v" ("version_created_at");
CREATE INDEX IF NOT EXISTS "_listings_v_version_version__status_idx" ON "_listings_v" ("version__status");
CREATE INDEX IF NOT EXISTS "_listings_v_created_at_idx" ON "_listings_v" ("created_at");
CREATE INDEX IF NOT EXISTS "_listings_v_updated_at_idx" ON "_listings_v" ("updated_at");
CREATE INDEX IF NOT EXISTS "_listings_v_latest_idx" ON "_listings_v" ("latest");
CREATE INDEX IF NOT EXISTS "_listings_v_rels_order_idx" ON "_listings_v_rels" ("order");
CREATE INDEX IF NOT EXISTS "_listings_v_rels_parent_idx" ON "_listings_v_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "_listings_v_rels_path_idx" ON "_listings_v_rels" ("path");
CREATE INDEX IF NOT EXISTS "redirects_from_idx" ON "redirects" ("from");
CREATE INDEX IF NOT EXISTS "redirects_created_at_idx" ON "redirects" ("created_at");
CREATE INDEX IF NOT EXISTS "redirects_rels_order_idx" ON "redirects_rels" ("order");
CREATE INDEX IF NOT EXISTS "redirects_rels_parent_idx" ON "redirects_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "redirects_rels_path_idx" ON "redirects_rels" ("path");
CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" ("key");
CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" ("created_at");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" ("order");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" ("path");
CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" ("created_at");
CREATE INDEX IF NOT EXISTS "settings_rels_order_idx" ON "settings_rels" ("order");
CREATE INDEX IF NOT EXISTS "settings_rels_parent_idx" ON "settings_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "settings_rels_path_idx" ON "settings_rels" ("path");
CREATE INDEX IF NOT EXISTS "header_nav_items_order_idx" ON "header_nav_items" ("_order");
CREATE INDEX IF NOT EXISTS "header_nav_items_parent_id_idx" ON "header_nav_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "header_rels_order_idx" ON "header_rels" ("order");
CREATE INDEX IF NOT EXISTS "header_rels_parent_idx" ON "header_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "header_rels_path_idx" ON "header_rels" ("path");
CREATE INDEX IF NOT EXISTS "footer_nav_items_order_idx" ON "footer_nav_items" ("_order");
CREATE INDEX IF NOT EXISTS "footer_nav_items_parent_id_idx" ON "footer_nav_items" ("_parent_id");
CREATE INDEX IF NOT EXISTS "footer_rels_order_idx" ON "footer_rels" ("order");
CREATE INDEX IF NOT EXISTS "footer_rels_parent_idx" ON "footer_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "footer_rels_path_idx" ON "footer_rels" ("path");
DO $$ BEGIN
 ALTER TABLE "pages_hero_links" ADD CONSTRAINT "pages_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_cta_links" ADD CONSTRAINT "pages_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_content_columns" ADD CONSTRAINT "pages_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_blocks_archive" ADD CONSTRAINT "pages_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_listings_fk" FOREIGN KEY ("listings_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_version_hero_links" ADD CONSTRAINT "_pages_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_cta_links" ADD CONSTRAINT "_pages_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_content_columns" ADD CONSTRAINT "_pages_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_blocks_archive" ADD CONSTRAINT "_pages_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_pages_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_listings_fk" FOREIGN KEY ("listings_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_populated_authors" ADD CONSTRAINT "posts_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_hero_links" ADD CONSTRAINT "posts_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_blocks_cta_links" ADD CONSTRAINT "posts_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_blocks_cta" ADD CONSTRAINT "posts_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_blocks_content_columns" ADD CONSTRAINT "posts_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_blocks_content" ADD CONSTRAINT "posts_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_blocks_media_block" ADD CONSTRAINT "posts_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_blocks_archive" ADD CONSTRAINT "posts_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_listings_fk" FOREIGN KEY ("listings_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_version_populated_authors" ADD CONSTRAINT "_posts_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_posts_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_version_hero_links" ADD CONSTRAINT "_posts_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_posts_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_blocks_cta_links" ADD CONSTRAINT "_posts_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_posts_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_blocks_cta" ADD CONSTRAINT "_posts_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_posts_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_blocks_content_columns" ADD CONSTRAINT "_posts_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_posts_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_blocks_content" ADD CONSTRAINT "_posts_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_posts_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_blocks_media_block" ADD CONSTRAINT "_posts_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_posts_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_blocks_archive" ADD CONSTRAINT "_posts_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_posts_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_posts_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_listings_fk" FOREIGN KEY ("listings_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
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
 ALTER TABLE "projects_blocks_cta" ADD CONSTRAINT "projects_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_content_columns" ADD CONSTRAINT "projects_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_content" ADD CONSTRAINT "projects_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_media_block" ADD CONSTRAINT "projects_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_blocks_archive" ADD CONSTRAINT "projects_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "projects_rels" ADD CONSTRAINT "projects_rels_listings_fk" FOREIGN KEY ("listings_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
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

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_cta" ADD CONSTRAINT "_projects_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_content_columns" ADD CONSTRAINT "_projects_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_content" ADD CONSTRAINT "_projects_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_media_block" ADD CONSTRAINT "_projects_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_blocks_archive" ADD CONSTRAINT "_projects_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_projects_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_projects_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_projects_v_rels" ADD CONSTRAINT "_projects_v_rels_listings_fk" FOREIGN KEY ("listings_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "categories_rels" ADD CONSTRAINT "categories_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "categories_rels" ADD CONSTRAINT "categories_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "users_roles" ADD CONSTRAINT "users_roles_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "comments_rels" ADD CONSTRAINT "comments_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "comments"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "comments_rels" ADD CONSTRAINT "comments_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "comments_rels" ADD CONSTRAINT "comments_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_comments_v_rels" ADD CONSTRAINT "_comments_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_comments_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_comments_v_rels" ADD CONSTRAINT "_comments_v_rels_comments_fk" FOREIGN KEY ("comments_id") REFERENCES "comments"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_comments_v_rels" ADD CONSTRAINT "_comments_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_comments_v_rels" ADD CONSTRAINT "_comments_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "team_member_strengths" ADD CONSTRAINT "team_member_strengths_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "team_member"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "team_member_rels" ADD CONSTRAINT "team_member_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "team_member"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "team_member_rels" ADD CONSTRAINT "team_member_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_property_type" ADD CONSTRAINT "listings_property_type_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_image_gallery" ADD CONSTRAINT "listings_image_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "listings_rels" ADD CONSTRAINT "listings_rels_team_member_fk" FOREIGN KEY ("team_member_id") REFERENCES "team_member"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_version_property_type" ADD CONSTRAINT "_listings_v_version_property_type_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_listings_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_version_image_gallery" ADD CONSTRAINT "_listings_v_version_image_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "_listings_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "_listings_v"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_listings_fk" FOREIGN KEY ("listings_id") REFERENCES "listings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "media"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "_listings_v_rels" ADD CONSTRAINT "_listings_v_rels_team_member_fk" FOREIGN KEY ("team_member_id") REFERENCES "team_member"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "redirects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "settings_rels" ADD CONSTRAINT "settings_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "settings"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "settings_rels" ADD CONSTRAINT "settings_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "header"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "header"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "footer_nav_items" ADD CONSTRAINT "footer_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "footer"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "footer"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "pages"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`);

};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`

DROP TABLE "pages_hero_links";
DROP TABLE "pages_blocks_cta_links";
DROP TABLE "pages_blocks_cta";
DROP TABLE "pages_blocks_content_columns";
DROP TABLE "pages_blocks_content";
DROP TABLE "pages_blocks_media_block";
DROP TABLE "pages_blocks_archive";
DROP TABLE "pages";
DROP TABLE "pages_rels";
DROP TABLE "_pages_v_version_hero_links";
DROP TABLE "_pages_v_blocks_cta_links";
DROP TABLE "_pages_v_blocks_cta";
DROP TABLE "_pages_v_blocks_content_columns";
DROP TABLE "_pages_v_blocks_content";
DROP TABLE "_pages_v_blocks_media_block";
DROP TABLE "_pages_v_blocks_archive";
DROP TABLE "_pages_v";
DROP TABLE "_pages_v_rels";
DROP TABLE "posts_populated_authors";
DROP TABLE "posts_hero_links";
DROP TABLE "posts_blocks_cta_links";
DROP TABLE "posts_blocks_cta";
DROP TABLE "posts_blocks_content_columns";
DROP TABLE "posts_blocks_content";
DROP TABLE "posts_blocks_media_block";
DROP TABLE "posts_blocks_archive";
DROP TABLE "posts";
DROP TABLE "posts_rels";
DROP TABLE "_posts_v_version_populated_authors";
DROP TABLE "_posts_v_version_hero_links";
DROP TABLE "_posts_v_blocks_cta_links";
DROP TABLE "_posts_v_blocks_cta";
DROP TABLE "_posts_v_blocks_content_columns";
DROP TABLE "_posts_v_blocks_content";
DROP TABLE "_posts_v_blocks_media_block";
DROP TABLE "_posts_v_blocks_archive";
DROP TABLE "_posts_v";
DROP TABLE "_posts_v_rels";
DROP TABLE "projects_hero_links";
DROP TABLE "projects_blocks_cta_links";
DROP TABLE "projects_blocks_cta";
DROP TABLE "projects_blocks_content_columns";
DROP TABLE "projects_blocks_content";
DROP TABLE "projects_blocks_media_block";
DROP TABLE "projects_blocks_archive";
DROP TABLE "projects";
DROP TABLE "projects_rels";
DROP TABLE "_projects_v_version_hero_links";
DROP TABLE "_projects_v_blocks_cta_links";
DROP TABLE "_projects_v_blocks_cta";
DROP TABLE "_projects_v_blocks_content_columns";
DROP TABLE "_projects_v_blocks_content";
DROP TABLE "_projects_v_blocks_media_block";
DROP TABLE "_projects_v_blocks_archive";
DROP TABLE "_projects_v";
DROP TABLE "_projects_v_rels";
DROP TABLE "media";
DROP TABLE "categories_breadcrumbs";
DROP TABLE "categories";
DROP TABLE "categories_rels";
DROP TABLE "users_roles";
DROP TABLE "users";
DROP TABLE "comments";
DROP TABLE "comments_rels";
DROP TABLE "_comments_v";
DROP TABLE "_comments_v_rels";
DROP TABLE "team_member_strengths";
DROP TABLE "team_member";
DROP TABLE "team_member_rels";
DROP TABLE "listings_property_type";
DROP TABLE "listings_image_gallery";
DROP TABLE "listings";
DROP TABLE "listings_rels";
DROP TABLE "_listings_v_version_property_type";
DROP TABLE "_listings_v_version_image_gallery";
DROP TABLE "_listings_v";
DROP TABLE "_listings_v_rels";
DROP TABLE "redirects";
DROP TABLE "redirects_rels";
DROP TABLE "payload_preferences";
DROP TABLE "payload_preferences_rels";
DROP TABLE "payload_migrations";
DROP TABLE "settings";
DROP TABLE "settings_rels";
DROP TABLE "header_nav_items";
DROP TABLE "header";
DROP TABLE "header_rels";
DROP TABLE "footer_nav_items";
DROP TABLE "footer";
DROP TABLE "footer_rels";`);

};
