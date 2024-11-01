'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_google_maps_1 = require("@vis.gl/react-google-maps");
function AddressSearch(params) {
    // useMapsLibrary loads the geocoding library, it might initially return `null`
    // if the library hasn't been loaded. Once loaded, it will return the library
    // object as it would be returned by `await google.maps.importLibrary()`
    var geocodingLib = (0, react_google_maps_1.useMapsLibrary)('geocoding');
    var geocoder = (0, react_1.useMemo)(function () { return geocodingLib && new geocodingLib.Geocoder(); }, [geocodingLib]);
    (0, react_1.useEffect)(function () {
        if (!geocoder)
            return;
        if (!params.addyQueryString)
            return;
        geocoder
            .geocode({ address: params.addyQueryString, region: 'US' })
            .catch(function (err) { return null; }) // Ignore No Result Errors.
            .then(function (res) { return params.setAddyList(res); });
    }, [geocoder, params.addyQueryString]); // eslint-disable-line react-hooks/exhaustive-deps
    return null;
}
exports.default = AddressSearch;
//# sourceMappingURL=AddressSearch.js.map