"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentAndStatsBlock = void 0;
var richText_1 = __importDefault(require("../../fields/richText"));
exports.ContentAndStatsBlock = {
    slug: 'contentAndStatsBlock',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        (0, richText_1.default)(),
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
                    label: 'Fact Metric (Number, Percentage, Etc.)',
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
    ],
};
//# sourceMappingURL=index.js.map