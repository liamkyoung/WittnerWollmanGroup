"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectBlock = void 0;
var invertBackground_1 = require("../../fields/invertBackground");
exports.ProjectBlock = {
    slug: 'projectBlock',
    fields: [
        invertBackground_1.invertBackground,
        {
            name: 'position',
            type: 'select',
            defaultValue: 'left',
            options: [
                {
                    label: 'Left Image',
                    value: 'left',
                },
                {
                    label: 'Right Image',
                    value: 'right',
                },
            ],
        },
        {
            name: 'bgColor',
            label: 'BackgrondColor',
            type: 'select',
            defaultValue: 'white',
            options: [
                {
                    label: 'White',
                    value: 'white',
                },
                {
                    label: 'Red',
                    value: 'red',
                },
            ],
        },
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'location',
            label: 'Neighborhood or Address',
            type: 'text',
            required: false,
        },
        {
            name: 'subheading',
            label: 'Subheading',
            type: 'text',
            required: false,
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
            maxRows: 3,
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
            name: 'media',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'externalLink',
            label: 'External Link',
            type: 'text',
            required: false,
        },
    ],
};
//# sourceMappingURL=index.js.map