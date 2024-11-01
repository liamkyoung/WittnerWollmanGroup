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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTemplate = void 0;
var React = __importStar(require("react"));
var EmailTemplate = function (_a) {
    var firstName = _a.firstName, lastName = _a.lastName, email = _a.email, phoneNumber = _a.phoneNumber, message = _a.message;
    return (React.createElement("div", null,
        React.createElement("h1", null, "New Message from wittnerwollman.com:"),
        React.createElement("h2", null,
            "Name: ",
            firstName,
            " ",
            lastName),
        React.createElement("div", null,
            React.createElement("h2", null, "Contact Information"),
            React.createElement("p", null,
                "Email Address: ",
                email),
            React.createElement("p", null,
                "Phone Number: ",
                phoneNumber)),
        React.createElement("div", null,
            firstName,
            " ",
            lastName,
            "' message:",
            React.createElement("p", null, message))));
};
exports.EmailTemplate = EmailTemplate;
//# sourceMappingURL=basicEmail.js.map