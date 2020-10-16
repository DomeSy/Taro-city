"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
var helpers_1 = require("./helpers");
var config_read_error_1 = require("./errors/config-read-error");
function resolveConfig(filePath) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var json, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fs_extra_1.default.readJson(filePath)];
                case 1:
                    json = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = _b.sent();
                    throw new config_read_error_1.ConfigReadError(filePath);
                case 3:
                    if (json.bundlerOptions == null) {
                        throw new Error("Missing 'bundlerOptions' in config.");
                    }
                    return [2 /*return*/, {
                            bundlerOptions: tslib_1.__assign(tslib_1.__assign({}, json.bundlerOptions), { entryFile: json.bundlerOptions.entryFile != null ? helpers_1.resolvePath(json.bundlerOptions.entryFile) : undefined, outFile: json.bundlerOptions.outFile != null ? helpers_1.resolvePath(json.bundlerOptions.outFile) : undefined, rootDir: json.bundlerOptions.rootDir != null ? helpers_1.resolvePath(json.bundlerOptions.rootDir) : undefined })
                        }];
            }
        });
    });
}
exports.resolveConfig = resolveConfig;
