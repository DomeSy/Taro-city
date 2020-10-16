"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var os_1 = tslib_1.__importDefault(require("os"));
var pretty_bytes_1 = tslib_1.__importDefault(require("pretty-bytes"));
function countSavedBytesByDeduping(bundleResult, fileRegistry) {
    var savedBytes = 0;
    var content = fileRegistry[bundleResult.filePath];
    if (bundleResult.deduped === true && content != null) {
        savedBytes = content.length;
    }
    if (bundleResult.imports != null && bundleResult.imports.length > 0) {
        for (var _i = 0, _a = bundleResult.imports; _i < _a.length; _i++) {
            var importResult = _a[_i];
            savedBytes += countSavedBytesByDeduping(importResult, fileRegistry);
        }
    }
    return savedBytes;
}
function renderBundleInfo(bundleResult, fileRegistry) {
    return [
        "Bundle info:",
        "Total size       : " + (bundleResult.bundledContent == null ? "undefined" : pretty_bytes_1.default(bundleResult.bundledContent.length)),
        "Saved by deduping: " + pretty_bytes_1.default(countSavedBytesByDeduping(bundleResult, fileRegistry))
    ].join(os_1.default.EOL);
}
exports.renderBundleInfo = renderBundleInfo;
