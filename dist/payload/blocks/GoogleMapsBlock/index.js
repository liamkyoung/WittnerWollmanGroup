"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleMapsBlock = void 0;
exports.GoogleMapsBlock = {
    slug: 'googleMapsBlock',
    fields: [
        {
            name: 'locations',
            type: 'relationship',
            label: 'Locations',
            relationTo: 'projects',
            hasMany: true,
        },
    ],
};
//# sourceMappingURL=index.js.map