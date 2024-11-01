'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_google_maps_1 = require("@vis.gl/react-google-maps");
var forms_1 = require("payload/components/forms");
var AddressSearch_1 = __importDefault(require("../../app/customComponents/GoogleMap/AddressSearch"));
var API_KEY = process.env.PAYLOAD_PUBLIC_GOOGLE_MAPS_KEY || process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
function AdminAddressSearch() {
    var _a = (0, react_1.useState)(null), addressList = _a[0], setAddressList = _a[1];
    var _b = (0, react_1.useState)(''), addressQuery = _b[0], setAddressQuery = _b[1];
    var _c = (0, react_1.useState)(''), debouncedInputValue = _c[0], setDebouncedInputValue = _c[1];
    var latitude = (0, forms_1.useFormFields)(function (_a) {
        var fields = _a[0], dispatch = _a[1];
        return fields.latitude;
    });
    var longitude = (0, forms_1.useFormFields)(function (_a) {
        var fields = _a[0], dispatch = _a[1];
        return fields.longitude;
    });
    var streetAddress = (0, forms_1.useFormFields)(function (_a) {
        var fields = _a[0], dispatch = _a[1];
        return fields.streetAddress;
    });
    var zip = (0, forms_1.useFormFields)(function (_a) {
        var fields = _a[0], dispatch = _a[1];
        return fields.zipCode;
    });
    var city = (0, forms_1.useFormFields)(function (_a) {
        var fields = _a[0], dispatch = _a[1];
        return fields.city;
    });
    var county = (0, forms_1.useFormFields)(function (_a) {
        var fields = _a[0], dispatch = _a[1];
        return fields.county;
    });
    var state = (0, forms_1.useFormFields)(function (_a) {
        var fields = _a[0], dispatch = _a[1];
        return fields.state;
    });
    var neighborhood = (0, forms_1.useFormFields)(function (_a) {
        var fields = _a[0], dispatch = _a[1];
        return fields.neighborhood;
    });
    var DEBOUNCE_MS = 500;
    var _d = (0, forms_1.useField)({ path: 'address' }), value = _d.value, setValue = _d.setValue;
    // DEBOUNCING
    (0, react_1.useEffect)(function () {
        var delayInputTimeoutId = setTimeout(function () {
            setDebouncedInputValue(addressQuery);
        }, DEBOUNCE_MS);
        return function () { return clearTimeout(delayInputTimeoutId); };
    }, [addressQuery, DEBOUNCE_MS]);
    function handleAddressSelected(address) {
        var _a, _b, _c, _d, _e, _f, _g;
        // console.log(address)
        setValue(address.formatted_address);
        latitude.value = address.geometry.location.lat();
        longitude.value = address.geometry.location.lng();
        var parts = address.address_components;
        var _streetNumber = (_a = parts.find(function (i) { return i.types.includes('street_number'); })) === null || _a === void 0 ? void 0 : _a.long_name;
        var _route = (_b = parts.find(function (i) { return i.types.includes('route'); })) === null || _b === void 0 ? void 0 : _b.long_name;
        var _neighborhood = (_c = parts.find(function (i) { return i.types.includes('neighborhood'); })) === null || _c === void 0 ? void 0 : _c.long_name;
        var _city = (_d = parts.find(function (i) { return i.types.includes('locality'); })) === null || _d === void 0 ? void 0 : _d.long_name;
        var _county = (_e = parts.find(function (i) { return i.types.includes('administrative_area_level_2'); })) === null || _e === void 0 ? void 0 : _e.long_name;
        var _state = (_f = parts.find(function (i) { return i.types.includes('administrative_area_level_1'); })) === null || _f === void 0 ? void 0 : _f.long_name;
        var _zip = (_g = parts.find(function (i) { return i.types.includes('postal_code'); })) === null || _g === void 0 ? void 0 : _g.long_name;
        if (_streetNumber && _route)
            streetAddress.value = "".concat(_streetNumber, " ").concat(_route); // TODO: Could be error prone
        if (_neighborhood)
            neighborhood.value = _neighborhood;
        if (_city)
            city.value = _city;
        if (_county)
            county.value = _county;
        if (_state)
            state.value = _state;
        if (_zip)
            zip.value = _zip;
    }
    function handleAddressDeSelected() {
        setValue(null);
        latitude.value = null;
        longitude.value = null;
        streetAddress.value = null;
        neighborhood.value = null;
        city.value = null;
        county.value = null;
        state.value = null;
        zip.value = null;
    }
    // console.log('API KEY: ', API_KEY)
    return (react_1.default.createElement(react_1.default.Fragment, null,
        value ? (react_1.default.createElement("p", { className: "", style: {
                fontWeight: 'bold',
                display: 'flex',
                gap: '1rem',
                fontSize: '1.5rem',
                alignItems: 'center',
            } },
            "Address Selected: ",
            value,
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", style: { width: '1.5rem', height: '1.5rem', color: 'red', cursor: 'pointer' }, onClick: function () { return handleAddressDeSelected(); } },
                react_1.default.createElement("path", { "fill-rule": "evenodd", d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z", "clip-rule": "evenodd" })))) : (react_1.default.createElement("p", { style: {
                fontWeight: 'bold',
                display: 'flex',
                gap: '1rem',
                fontSize: '1.5rem',
                alignItems: 'center',
            } }, "Search for an address below...")),
        react_1.default.createElement(react_google_maps_1.APIProvider, { apiKey: API_KEY },
            react_1.default.createElement("div", { style: { display: 'flex', flexDirection: 'column', marginBottom: '2rem' } },
                react_1.default.createElement("label", { htmlFor: 'Address' },
                    "Property Address ",
                    react_1.default.createElement("span", { style: { color: 'red' } }, "*")),
                react_1.default.createElement("input", { placeholder: "Address", onInput: function (e) {
                        setAddressQuery(e.target.value);
                    }, value: addressQuery, style: { padding: '1rem' } }),
                react_1.default.createElement(AddressSearch_1.default, { addyQueryString: debouncedInputValue, setAddyList: setAddressList }),
                addressList &&
                    addressList.results.map(function (r) { return (react_1.default.createElement("div", { className: "bg-gray-300 hover:bg-gray-200 rounded-md p-4 cursor-pointer", onClick: function () {
                            handleAddressSelected(r);
                        }, key: r.place_id },
                        react_1.default.createElement("p", null, r.formatted_address))); })))));
}
exports.default = AdminAddressSearch;
//# sourceMappingURL=AdminAddressSearch.js.map