"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvolvementGroups = void 0;
var admins_1 = require("../../access/admins");
var adminsOrPublished_1 = require("../../access/adminsOrPublished");
var populatePublishedAt_1 = require("../../hooks/populatePublishedAt");
exports.InvolvementGroups = {
    slug: 'involvementGroups',
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
            name: 'title',
            label: 'Group Name',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            label: 'Group Description',
            type: 'text',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            label: 'Image',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'linkToGroupWebsite',
            type: 'text',
            label: 'Link To Group',
            required: false,
        },
    ],
};
//# sourceMappingURL=index.js.map