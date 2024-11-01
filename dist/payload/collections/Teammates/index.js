"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teammates = void 0;
var slug_1 = require("../../../payload/fields/slug");
// import { formatSocialMediaHandle } from '../../../payload/hooks/formatSocialMediaHandle'
var admins_1 = require("../../access/admins");
var adminsOrPublished_1 = require("../../access/adminsOrPublished");
var populatePublishedAt_1 = require("../../hooks/populatePublishedAt");
var revalidateTeammate_1 = require("./hooks/revalidateTeammate");
exports.Teammates = {
    slug: 'teammates',
    admin: {
        useAsTitle: 'title',
        preview: function (doc) {
            return "".concat(process.env.PAYLOAD_PUBLIC_SERVER_URL, "/next/preview?url=").concat(encodeURIComponent("".concat(process.env.PAYLOAD_PUBLIC_SERVER_URL, "/teammates/").concat(doc === null || doc === void 0 ? void 0 : doc.slug)), "&secret=").concat(process.env.PAYLOAD_PUBLIC_DRAFT_SECRET);
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
        afterChange: [revalidateTeammate_1.revalidateTeammate],
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
                            label: 'Name',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'profilePic',
                            type: 'upload',
                            relationTo: 'media',
                            required: true,
                        },
                        {
                            name: 'profileIntroduction',
                            label: 'Profile Introduction',
                            type: 'textarea',
                            required: true,
                        },
                        {
                            name: 'bio',
                            type: 'textarea',
                            required: true,
                        },
                        {
                            name: 'strengths',
                            label: 'Specializtion',
                            type: 'select',
                            hasMany: true,
                            admin: {
                                isClearable: true,
                                isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
                            },
                            options: [
                                {
                                    label: 'Residential',
                                    value: 'Residential Real Estate',
                                },
                                {
                                    label: 'Commercial',
                                    value: 'Commercial Real Estate',
                                },
                            ],
                        },
                        {
                            name: 'yearsOfExperience',
                            type: 'number',
                            required: true,
                            admin: {
                                step: 1,
                            },
                        },
                        {
                            name: 'favoritePlaces',
                            label: 'Favorite Places',
                            type: 'relationship',
                            relationTo: 'communityResources',
                            hasMany: true,
                        },
                    ],
                },
                {
                    label: 'Socials',
                    fields: [
                        {
                            name: 'phoneNumber',
                            label: 'Phone Number',
                            type: 'text',
                            required: true,
                            validate: function (value) {
                                // Custom validation logic for phone number
                                var phoneRegex = /^\d{10}$/;
                                if (!phoneRegex.test(value)) {
                                    return 'Phone number must be exactly 10 digits';
                                }
                                return true;
                            },
                        },
                        {
                            name: 'email',
                            label: 'Contact Email',
                            type: 'email',
                            required: true,
                        },
                        {
                            name: 'instagram',
                            label: 'Instagram Username',
                            type: 'text',
                        },
                        {
                            name: 'Facebook',
                            label: 'Facebook Username',
                            type: 'text',
                        },
                        {
                            name: 'Linkedin',
                            label: 'Linkedin Username',
                            type: 'text',
                        },
                    ],
                },
            ],
        },
        (0, slug_1.slugField)(),
    ],
};
//# sourceMappingURL=index.js.map