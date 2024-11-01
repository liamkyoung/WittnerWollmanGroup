"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvolvementEvents = void 0;
var admins_1 = require("../../access/admins");
var adminsOrPublished_1 = require("../../access/adminsOrPublished");
var populatePublishedAt_1 = require("../../hooks/populatePublishedAt");
exports.InvolvementEvents = {
    slug: 'involvementEvents',
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
            label: 'Event Name',
            required: true,
        },
        {
            name: 'description',
            label: 'Event Description',
            type: 'text',
            required: false,
        },
        {
            name: 'image',
            type: 'upload',
            label: 'Image',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'eventDate',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: 'dayOnly',
                    displayFormat: 'd MMM yyy',
                },
            },
        },
    ],
};
//# sourceMappingURL=index.js.map