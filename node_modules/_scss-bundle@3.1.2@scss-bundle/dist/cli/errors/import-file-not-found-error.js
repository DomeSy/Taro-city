"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var os_1 = tslib_1.__importDefault(require("os"));
var base_error_1 = require("./base-error");
var ImportFileNotFoundError = /** @class */ (function (_super) {
    tslib_1.__extends(ImportFileNotFoundError, _super);
    function ImportFileNotFoundError(filePath) {
        return _super.call(this, "Import file was not found:" + os_1.default.EOL + filePath) || this;
    }
    return ImportFileNotFoundError;
}(base_error_1.BaseError));
exports.ImportFileNotFoundError = ImportFileNotFoundError;
