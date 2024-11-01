"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatSocialMediaHandle = void 0;
var formatSocialMediaHandle = function (_a) {
    var value = _a.value;
    if (!value)
        return value; // If the field is empty, return as is.
    if (value.startsWith('@')) {
        return value; // If the username already starts with '@', return as is.
    }
    return "@".concat(value); // Prepend '@' to the username.
};
exports.formatSocialMediaHandle = formatSocialMediaHandle;
//# sourceMappingURL=formatSocialMediaHandle.js.map