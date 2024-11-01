"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateTime = void 0;
function formatDateTime(dateTime) {
    // Convert the input to a Date object if it's a string
    var dateObj = typeof dateTime === 'string' ? new Date(dateTime) : dateTime;
    // Ensure the input is a valid date
    if (!dateObj || isNaN(dateObj.getTime())) {
        return '';
    }
    // Extract date components
    var year = dateObj.getFullYear();
    var month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    var day = String(dateObj.getDate()).padStart(2, '0');
    // Extract time components
    var hours = dateObj.getHours();
    var minutes = String(dateObj.getMinutes()).padStart(2, '0');
    var ampm = hours >= 12 ? 'PM' : 'AM';
    // Convert 24-hour to 12-hour format
    hours = hours % 12 || 12; // Convert 0 (midnight) to 12
    // Format the date and time
    return "".concat(month, "/").concat(day, "/").concat(year, " ").concat(hours, ":").concat(minutes, " ").concat(ampm);
}
exports.formatDateTime = formatDateTime;
//# sourceMappingURL=formatDateTime.js.map