"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listings = void 0;
var slug_1 = require("../../../payload/fields/slug");
var admins_1 = require("../../access/admins");
var adminsOrPublished_1 = require("../../access/adminsOrPublished");
var ArchiveBlock_1 = require("../../blocks/ArchiveBlock");
var Content_1 = require("../../blocks/Content");
var MediaBlock_1 = require("../../blocks/MediaBlock");
var ProjectBlock_1 = require("../../blocks/ProjectBlock");
var StatBlock_1 = require("../../blocks/StatBlock");
var StatsAndVideoBlock_1 = require("../../blocks/StatsAndVideoBlock");
var AdminAddressSearch_1 = __importDefault(require("../../customComponents/AdminAddressSearch"));
var populatePublishedAt_1 = require("../../hooks/populatePublishedAt");
// import AdminAddressSearch from '../../../components/custom/GoogleMap/AdminAddressSearch'
var revalidateListing_1 = require("./hooks/revalidateListing");
exports.Listings = {
    slug: 'listings',
    admin: {
        useAsTitle: 'title',
        preview: function (doc) {
            return "".concat(process.env.PAYLOAD_PUBLIC_SERVER_URL, "/next/preview?url=").concat(encodeURIComponent("".concat(process.env.PAYLOAD_PUBLIC_SERVER_URL, "/listings/").concat(doc === null || doc === void 0 ? void 0 : doc.slug)), "&secret=").concat(process.env.PAYLOAD_PUBLIC_DRAFT_SECRET);
        },
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
        afterChange: [revalidateListing_1.revalidateListing],
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
                            name: 'streetAddress',
                            label: 'Street',
                            type: 'text',
                            required: true,
                            admin: { hidden: true },
                            // Able to get from map
                        },
                        {
                            name: 'neighborhood',
                            label: 'Neighborhood',
                            type: 'text',
                            admin: { hidden: true },
                            // Able to get from map
                        },
                        {
                            name: 'city',
                            label: 'City',
                            type: 'text',
                            required: true,
                            admin: { hidden: true },
                            // Able to get from map
                        },
                        {
                            name: 'zipCode',
                            label: 'Zip Code',
                            type: 'text',
                            required: true,
                            admin: { hidden: true },
                            // Able to get from map
                        },
                        {
                            name: 'county',
                            label: 'County',
                            type: 'text',
                            required: true,
                            admin: { hidden: true },
                            // Able to get from map
                        },
                        {
                            name: 'state',
                            label: 'State',
                            type: 'text',
                            required: true,
                            admin: { hidden: true },
                            // Able to get from map
                        },
                        {
                            name: 'latitude',
                            label: 'Latitude',
                            type: 'number',
                            required: true,
                            admin: {
                                hidden: true,
                            },
                            // Able to get from map
                        },
                        {
                            name: 'longitude',
                            label: 'Longitude',
                            type: 'number',
                            required: true,
                            admin: {
                                hidden: true,
                            },
                            // Able to get from map
                        },
                        {
                            name: 'price',
                            label: 'Listing Price (USD)',
                            type: 'number',
                            required: true,
                            validate: function (value) {
                                if (value < 1) {
                                    return 'Value must be greater than or equal to 1';
                                }
                                return true;
                            },
                        },
                        {
                            name: 'agents',
                            label: 'Agent(s) on Listing',
                            type: 'relationship',
                            relationTo: 'teammates',
                            hasMany: true,
                        },
                    ],
                },
                {
                    label: 'Images',
                    fields: [
                        {
                            name: 'coverImage',
                            label: 'Cover Image',
                            type: 'upload',
                            relationTo: 'media',
                            required: true,
                        },
                        {
                            name: 'imageGallery',
                            label: 'Additional Images',
                            type: 'array',
                            fields: [
                                {
                                    name: 'image',
                                    label: 'Image',
                                    type: 'upload',
                                    relationTo: 'media', // Replace 'media' with the slug of your media collection
                                },
                                {
                                    name: 'altText',
                                    label: 'Alt Text',
                                    type: 'text',
                                    required: true,
                                },
                                {
                                    name: 'caption',
                                    label: 'Caption',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Features',
                    fields: [
                        {
                            name: 'propertyType',
                            label: 'Property Type',
                            type: 'select',
                            hasMany: true,
                            options: [
                                {
                                    label: 'Shopping Center',
                                    value: 'shoppingCenter',
                                },
                                {
                                    label: 'Business Opportunity',
                                    value: 'bizOpportunity',
                                },
                                {
                                    label: 'Multi-Family',
                                    value: 'multiFamily',
                                },
                                {
                                    label: 'Office',
                                    value: 'office',
                                },
                                {
                                    label: 'Mixed Use',
                                    value: 'mixedUse',
                                },
                            ],
                        },
                        {
                            name: 'sqFt',
                            label: 'Square Footage',
                            type: 'number',
                            required: true,
                        },
                        {
                            name: 'sqFtLand',
                            label: 'Land Size (Sq Ft)',
                            type: 'number',
                        },
                        {
                            name: 'bedCount',
                            label: 'Beds',
                            type: 'number',
                        },
                        {
                            name: 'bathroomCount',
                            label: 'Bathrooms',
                            type: 'number',
                        },
                        {
                            name: 'overview',
                            label: 'Property Overview',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'areaOverview',
                            label: 'Area Overview',
                            type: 'text',
                        },
                        {
                            name: 'zoningType',
                            label: 'Zone',
                            type: 'select',
                            options: [
                                {
                                    label: 'Commercial',
                                    value: 'C',
                                },
                                {
                                    label: 'Residential',
                                    value: 'r',
                                },
                                {
                                    label: 'Industrial',
                                    value: 'i',
                                },
                            ],
                        },
                        {
                            name: 'tenancyType',
                            label: 'Tenancy Type',
                            type: 'select',
                            options: [
                                {
                                    label: 'Single Tenant',
                                    value: 'singleTenant',
                                },
                                {
                                    label: 'Multi-Tenant',
                                    value: 'multiTenant',
                                },
                            ],
                        },
                        {
                            name: 'yearBuilt',
                            label: 'Year Built',
                            type: 'number',
                            validate: function (value) {
                                if (value < 1492) {
                                    return 'Value must be greater than or equal to 1492';
                                }
                                return true;
                            },
                        },
                        {
                            name: 'occupancy',
                            label: '% Occupied',
                            type: 'number',
                            validate: function (value) {
                                if (value < 0) {
                                    return 'Value must be greater than or equal to 0';
                                }
                                if (value > 100) {
                                    return 'Value must be less than or equal to 100';
                                }
                                return true;
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
                            blocks: [Content_1.Content, MediaBlock_1.MediaBlock, ArchiveBlock_1.Archive, ProjectBlock_1.ProjectBlock, StatsAndVideoBlock_1.StatsAndVideoBlock, StatBlock_1.StatBlock],
                        },
                    ],
                },
            ],
        },
        (0, slug_1.slugField)(),
    ],
};
//# sourceMappingURL=index.js.map