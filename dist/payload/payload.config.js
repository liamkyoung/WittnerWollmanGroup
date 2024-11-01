"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bundler_webpack_1 = require("@payloadcms/bundler-webpack");
var db_postgres_1 = require("@payloadcms/db-postgres");
var plugin_nested_docs_1 = __importDefault(require("@payloadcms/plugin-nested-docs"));
var plugin_redirects_1 = __importDefault(require("@payloadcms/plugin-redirects"));
var plugin_seo_1 = __importDefault(require("@payloadcms/plugin-seo"));
var richtext_slate_1 = require("@payloadcms/richtext-slate");
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
var config_1 = require("payload/config");
var Categories_1 = __importDefault(require("./collections/Categories"));
var Comments_1 = __importDefault(require("./collections/Comments"));
var CommunityResources_1 = require("./collections/CommunityResources");
var Companies_1 = require("./collections/Companies");
var InvolvementEvents_1 = require("./collections/InvolvementEvents");
var InvolvementGroups_1 = require("./collections/InvolvementGroups");
// Custom Collections
var Listings_1 = require("./collections/Listings");
var Media_1 = require("./collections/Media");
var Pages_1 = require("./collections/Pages");
var Posts_1 = require("./collections/Posts");
var Projects_1 = require("./collections/Projects");
var Services_1 = require("./collections/Services");
var Teammates_1 = require("./collections/Teammates");
var Testimonials_1 = require("./collections/Testimonials");
var Users_1 = __importDefault(require("./collections/Users"));
var BeforeDashboard_1 = __importDefault(require("./components/BeforeDashboard"));
var BeforeLogin_1 = __importDefault(require("./components/BeforeLogin"));
var sendEmail_1 = require("./endpoints/sendEmail");
var sendListingEmail_1 = require("./endpoints/sendListingEmail");
var signUpNewsletter_1 = require("./endpoints/signUpNewsletter");
// import { seed } from './endpoints/seed'
var Footer_1 = require("./globals/Footer");
var Header_1 = require("./globals/Header");
var Settings_1 = require("./globals/Settings");
var generateTitle = function () {
    return 'Wittner Wollman Group';
};
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../../.env'),
});
exports.default = (0, config_1.buildConfig)({
    admin: {
        user: Users_1.default.slug,
        bundler: (0, bundler_webpack_1.webpackBundler)(),
        components: {
            // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
            // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
            beforeLogin: [BeforeLogin_1.default],
            // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
            // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
            beforeDashboard: [BeforeDashboard_1.default],
        },
        webpack: function (config) { return (__assign(__assign({}, config), { resolve: __assign(__assign({}, config.resolve), { alias: __assign(__assign({}, config.resolve.alias), { dotenv: path_1.default.resolve(__dirname, './dotenv.js') }) }) })); },
    },
    editor: (0, richtext_slate_1.slateEditor)({}),
    db: (0, db_postgres_1.postgresAdapter)({
        pool: {
            connectionString: process.env.DATABASE_URI,
        },
    }),
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    collections: [
        Pages_1.Pages,
        Posts_1.Posts,
        Projects_1.Projects,
        Media_1.Media,
        Categories_1.default,
        Users_1.default,
        Comments_1.default,
        Teammates_1.Teammates,
        Listings_1.Listings,
        Testimonials_1.Testimonials,
        Services_1.Services,
        Companies_1.Companies,
        InvolvementEvents_1.InvolvementEvents,
        InvolvementGroups_1.InvolvementGroups,
        CommunityResources_1.CommunityResources,
    ],
    globals: [Settings_1.Settings, Header_1.Header, Footer_1.Footer],
    typescript: {
        outputFile: path_1.default.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path_1.default.resolve(__dirname, 'generated-schema.graphql'),
    },
    cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
    csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
    endpoints: [
        // The seed endpoint is used to populate the database with some example data
        // You should delete this endpoint before deploying your site to production
        {
            path: '/sendEmail',
            method: 'post',
            handler: sendEmail_1.sendEmail,
        },
        {
            path: '/signUpNewsletter',
            method: 'post',
            handler: signUpNewsletter_1.signUpNewsletter,
        },
        {
            path: '/sendListingEmail',
            method: 'post',
            handler: sendListingEmail_1.sendListingEmail,
        },
    ],
    plugins: [
        (0, plugin_redirects_1.default)({
            collections: ['pages', 'posts'],
        }),
        (0, plugin_nested_docs_1.default)({
            collections: ['categories'],
        }),
        (0, plugin_seo_1.default)({
            collections: ['pages', 'posts', 'projects', 'listings', 'teammates', 'services'],
            generateTitle: generateTitle,
            uploadsCollection: 'media',
            tabbedUI: true,
        }),
    ],
});
//# sourceMappingURL=payload.config.js.map