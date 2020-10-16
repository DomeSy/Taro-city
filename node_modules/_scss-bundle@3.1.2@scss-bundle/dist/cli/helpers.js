"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var constants_1 = require("./constants");
function resolveBoolean(value) {
    if (value === "true") {
        return true;
    }
    else if (value === "false") {
        return false;
    }
    return undefined;
}
exports.resolveBoolean = resolveBoolean;
function resolveList(value) {
    return value.split(",");
}
exports.resolveList = resolveList;
function resolvePath(value) {
    return path_1.default.resolve(path_1.default.normalize(value));
}
exports.resolvePath = resolvePath;
function resolveLogLevelKey(value) {
    return Object.keys(constants_1.LogLevel).find(function (x) { return x.toLowerCase() === value.toLowerCase(); });
}
exports.resolveLogLevelKey = resolveLogLevelKey;
function mergeObjects(a, b) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var result = a;
    for (var _i = 0, _a = Object.keys(b); _i < _a.length; _i++) {
        var key = _a[_i];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var value = b[key];
        if (value == null) {
            continue;
        }
        result[key] = value;
    }
    return result;
}
exports.mergeObjects = mergeObjects;
