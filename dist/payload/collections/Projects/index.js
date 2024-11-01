"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
var formatSocialMediaHandle_1 = require("../../../payload/hooks/formatSocialMediaHandle");
var admins_1 = require("../../access/admins");
var adminsOrPublished_1 = require("../../access/adminsOrPublished");
var ArchiveBlock_1 = require("../../blocks/ArchiveBlock");
var CallToAction_1 = require("../../blocks/CallToAction");
var Content_1 = require("../../blocks/Content");
var MediaBlock_1 = require("../../blocks/MediaBlock");
var ProjectBlock_1 = require("../../blocks/ProjectBlock");
var StatBlock_1 = require("../../blocks/StatBlock");
var StatsAndVideoBlock_1 = require("../../blocks/StatsAndVideoBlock");
var AdminAddressSearch_1 = __importDefault(require("../../customComponents/AdminAddressSearch"));
var slug_1 = require("../../fields/slug");
var populateArchiveBlock_1 = require("../../hooks/populateArchiveBlock");
var populatePublishedAt_1 = require("../../hooks/populatePublishedAt");
var revalidateProject_1 = require("./hooks/revalidateProject");
exports.Projects = {
    slug: 'projects',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'updatedAt'],
        preview: function (doc) {
            return "".concat(process.env.PAYLOAD_PUBLIC_SERVER_URL, "/next/preview?url=").concat(encodeURIComponent("".concat(process.env.PAYLOAD_PUBLIC_SERVER_URL, "/projects/").concat(doc === null || doc === void 0 ? void 0 : doc.slug)), "&secret=").concat(process.env.PAYLOAD_PUBLIC_DRAFT_SECRET);
        },
    },
    hooks: {
        beforeChange: [populatePublishedAt_1.populatePublishedAt],
        afterChange: [revalidateProject_1.revalidateProject],
        afterRead: [populateArchiveBlock_1.populateArchiveBlock],
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
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Overview',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'address',
                            label: 'Property Address',
                            type: 'text',
                            required: true,
                            admin: {
                                components: {
                                    Field: AdminAddressSearch_1.default,
                                },
                            },
                            // Able to get from map
                        },
                        {
                            name: 'description',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'neighborhood',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'latitude',
                            label: 'Latitude',
                            type: 'number',
                            admin: {
                                hidden: true,
                            },
                            // Able to get from map
                        },
                        {
                            name: 'longitude',
                            label: 'Longitude',
                            type: 'number',
                            admin: {
                                hidden: true,
                            },
                            // Able to get from map
                        },
                    ],
                },
                {
                    label: 'Features',
                    fields: [
                        {
                            name: 'price',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'agents',
                            label: 'Teammates on Project',
                            type: 'relationship',
                            relationTo: 'teammates',
                            hasMany: true,
                        },
                        {
                            name: 'slider',
                            type: 'array',
                            label: 'Image Slider',
                            minRows: 2,
                            maxRows: 10,
                            interfaceName: 'CardSlider',
                            labels: {
                                singular: 'Slide',
                                plural: 'Slides',
                            },
                            fields: [
                                // required
                                {
                                    name: 'title',
                                    type: 'text',
                                },
                                {
                                    name: 'image',
                                    type: 'upload',
                                    relationTo: 'media',
                                    required: true,
                                },
                                {
                                    name: 'caption',
                                    type: 'text',
                                },
                            ],
                            admin: {
                                components: {
                                    RowLabel: function (_a) {
                                        var data = _a.data, index = _a.index;
                                        return (data === null || data === void 0 ? void 0 : data.title) || "Slide ".concat(String(index).padStart(2, '0'));
                                    },
                                },
                            },
                        },
                    ],
                },
                {
                    label: 'Socials',
                    fields: [
                        {
                            name: 'website',
                            type: 'text',
                            required: false,
                        },
                        {
                            name: 'instagram',
                            label: 'Instagram Username',
                            type: 'text',
                            admin: {
                                position: 'sidebar',
                            },
                            hooks: {
                                beforeChange: [formatSocialMediaHandle_1.formatSocialMediaHandle],
                            },
                        },
                    ],
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
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: 'publishedAt',
            type: 'date',
            admin: {
                position: 'sidebar',
            },
        },
        (0, slug_1.slugField)(),
        {
            name: 'relatedProjects',
            type: 'relationship',
            relationTo: 'projects',
            hasMany: true,
            admin: {
                position: 'sidebar',
            },
            filterOptions: function (_a) {
                var id = _a.id;
                return {
                    id: {
                        not_in: [id],
                    },
                };
            },
        },
    ],
};
//# sourceMappingURL=index.js.map