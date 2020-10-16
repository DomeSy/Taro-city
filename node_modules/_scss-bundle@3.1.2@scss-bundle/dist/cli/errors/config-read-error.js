"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var os_1 = tslib_1.__importDefault(require("os"));
var base_error_1 = require("./base-error");
var ConfigReadError = /** @class */ (function (_super) {
    tslib_1.__extends(ConfigReadError, _super);
    function ConfigReadError(configPath) {
        return _super.call(this, "Failed to read config (maybe it's missing?):" + os_1.default.EOL + configPath) || this;
    }
    return ConfigReadError;
}(base_error_1.BaseError));
exports.ConfigReadError = ConfigReadError;
