"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsAndVideoBlock = void 0;
exports.StatsAndVideoBlock = {
    slug: 'statsAndVideoBlock',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'text',
            required: true,
        },
        {
            name: 'facts',
            type: 'array',
            label: 'Project Facts',
            minRows: 1,
            maxRows: 4,
            interfaceName: 'FactsList',
            labels: {
                singular: 'Fact',
                plural: 'Facts',
            },
            fields: [
                // required
                {
                    name: 'factStat',
                    label: 'Fact Number',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'factDescription',
                    label: 'Descriptor of Fact',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'youtubeLink',
            type: 'text',
            label: 'YouTube Link',
            required: true,
        },
        {
            name: 'bgImage',
            type: 'upload',
            relationTo: 'media',
            label: 'Background Image',
        },
    ],
};
//# sourceMappingURL=index.js.map