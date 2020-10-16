"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function matchAll(text, regex) {
    var matches = [];
    var match;
    while ((match = regex.exec(text))) {
        matches.push(match);
    }
    return matches;
}
exports.matchAll = matchAll;
