"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Services = void 0;
var slug_1 = require("../../../payload/fields/slug");
var admins_1 = require("../../access/admins");
var adminsOrPublished_1 = require("../../access/adminsOrPublished");
var ArchiveBlock_1 = require("../../blocks/ArchiveBlock");
var CallToAction_1 = require("../../blocks/CallToAction");
var Content_1 = require("../../blocks/Content");
var ContentAndStatsBlock_1 = require("../../blocks/ContentAndStatsBlock");
var MediaBlock_1 = require("../../blocks/MediaBlock");
var ProjectBlock_1 = require("../../blocks/ProjectBlock");
var StatBlock_1 = require("../../blocks/StatBlock");
var StatsAndVideoBlock_1 = require("../../blocks/StatsAndVideoBlock");
var hero_1 = require("../../fields/hero");
var populatePublishedAt_1 = require("../../hooks/populatePublishedAt");
exports.Services = {
    slug: 'services',
    admin: {
        useAsTitle: 'title',
        // preview: doc => {
        //   return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(
        //     `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/listings/${doc?.slug}`,
        //   )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
        // },
    },
    versions: {
        drafts: true,
    },
    access: {
        read: adminsOrPublished_1.adminsOrPublished,
        update: admins_1.admins,
        create: admins_1.admins,
        delete: admins_1.admins,
    },
    hooks: {
        beforeChange: [populatePublishedAt_1.populatePublishedAt],
        // afterChange: [revalidateListing],
        // afterRead: [populateArchiveBlock], // FIX FOR LATER TO SHOW DIFFERENT
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Overview',
                    fields: [
                        {
                            name: 'title',
                            label: 'Service Name',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'shortDescription',
                            label: 'Short Description',
                            type: 'textarea',
                            required: true,
                        },
                    ],
                },
                {
                    label: 'Hero',
                    fields: [hero_1.hero],
                },
                {
                    label: 'Content',
                    fields: [
                        {
                            name: 'layout',
                            type: 'blocks',
                            required: true,
                            blocks: [
                                CallToAction_1.CallToAction,
                                Content_1.Content,
                                MediaBlock_1.MediaBlock,
                                ArchiveBlock_1.Archive,
                                ProjectBlock_1.ProjectBlock,
                                StatsAndVideoBlock_1.StatsAndVideoBlock,
                                StatBlock_1.StatBlock,
                                ContentAndStatsBlock_1.ContentAndStatsBlock,
                            ],
                        },
                    ],
                },
            ],
        },
        (0, slug_1.slugField)(),
    ],
};
//# sourceMappingURL=index.js.map