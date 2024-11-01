"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Companies = void 0;
var admins_1 = require("../../access/admins");
var adminsOrPublished_1 = require("../../access/adminsOrPublished");
var populatePublishedAt_1 = require("../../hooks/populatePublishedAt");
exports.Companies = {
    slug: 'companies',
    admin: {
        useAsTitle: 'name',
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
            name: 'name',
            label: 'Company Name',
            type: 'text',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            label: 'Company Image',
            relationTo: 'media',
            required: true,
        },
    ],
};
//# sourceMappingURL=index.js.map