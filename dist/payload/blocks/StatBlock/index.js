"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatBlock = void 0;
exports.StatBlock = {
    slug: 'statBlock',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: false,
        },
        {
            name: 'description',
            type: 'text',
            required: false,
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
    ],
};
//# sourceMappingURL=index.js.map