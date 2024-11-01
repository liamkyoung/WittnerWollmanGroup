"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Testimonials = void 0;
var admins_1 = require("../../access/admins");
var adminsOrPublished_1 = require("../../access/adminsOrPublished");
var populatePublishedAt_1 = require("../../hooks/populatePublishedAt");
exports.Testimonials = {
    slug: 'testimonials',
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
            // Used as name
            name: 'title',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'quote',
            label: 'Quote',
            type: 'text',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            label: 'Headshot of Person',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'jobTitle',
            label: 'Job Title',
            type: 'text',
            required: true,
        },
    ],
};
//# sourceMappingURL=index.js.map