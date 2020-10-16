"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var archy_1 = tslib_1.__importDefault(require("archy"));
var path_1 = tslib_1.__importDefault(require("path"));
function getArchyData(bundleResult, sourceDirectory) {
    if (sourceDirectory == null) {
        sourceDirectory = process.cwd();
    }
    var archyData = {
        label: path_1.default.relative(sourceDirectory, bundleResult.filePath)
    };
    if (!bundleResult.found) {
        archyData.label += " [NOT FOUND]";
    }
    if (bundleResult.deduped) {
        archyData.label += " [DEDUPED]";
    }
    if (bundleResult.ignored) {
        archyData.label += " [IGNORED]";
    }
    if (bundleResult.imports != null) {
        archyData.nodes = bundleResult.imports.map(function (x) {
            if (x != null) {
                return getArchyData(x, sourceDirectory);
            }
            return "";
        });
    }
    return archyData;
}
function renderArchy(bundleResult, sourceDirectory) {
    return archy_1.default(getArchyData(bundleResult, sourceDirectory));
}
exports.renderArchy = renderArchy;
