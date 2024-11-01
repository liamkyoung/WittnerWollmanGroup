"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallToAction = void 0;
exports.CallToAction = {
    slug: 'cta',
    labels: {
        singular: 'Call to Action',
        plural: 'Calls to Action',
    },
    fields: [
        {
            name: 'type',
            type: 'select',
            defaultValue: 'default',
            options: [
                {
                    value: 'default',
                    label: 'Default CTA',
                },
                {
                    value: 'listing',
                    label: 'Listing CTA',
                },
                {
                    value: 'agent',
                    label: 'Agent CTA',
                },
            ],
        },
    ],
};
//# sourceMappingURL=index.js.map