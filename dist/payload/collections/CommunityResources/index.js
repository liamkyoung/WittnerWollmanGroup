"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityResources = void 0;
var admins_1 = require("../../access/admins");
var adminsOrPublished_1 = require("../../access/adminsOrPublished");
var populatePublishedAt_1 = require("../../hooks/populatePublishedAt");
exports.CommunityResources = {
    slug: 'communityResources',
    admin: {
        useAsTitle: 'title',
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
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'address',
            type: 'text',
            label: 'Address',
            required: true,
        },
        {
            name: 'description',
            type: 'text',
            label: 'Description',
            required: true,
        },
        {
            name: 'categories',
            type: 'relationship',
            relationTo: 'categories',
            admin: {
                position: 'sidebar',
            },
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            label: 'Image',
            relationTo: 'media',
            required: true,
        },
    ],
};
//# sourceMappingURL=index.js.map