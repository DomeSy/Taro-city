"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var os_1 = tslib_1.__importDefault(require("os"));
var base_error_1 = require("./base-error");
var EntryFileNotFoundError = /** @class */ (function (_super) {
    tslib_1.__extends(EntryFileNotFoundError, _super);
    function EntryFileNotFoundError(filePath) {
        return _super.call(this, "Entry file was not found:" + os_1.default.EOL + filePath) || this;
    }
    return EntryFileNotFoundError;
}(base_error_1.BaseError));
exports.EntryFileNotFoundError = EntryFileNotFoundError;
