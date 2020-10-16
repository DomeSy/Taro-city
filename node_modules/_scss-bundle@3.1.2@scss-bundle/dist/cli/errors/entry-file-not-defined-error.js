"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_error_1 = require("./base-error");
var EntryFileNotDefinedError = /** @class */ (function (_super) {
    tslib_1.__extends(EntryFileNotDefinedError, _super);
    function EntryFileNotDefinedError() {
        return _super.call(this, "\"entryFile\" is not defined.") || this;
    }
    return EntryFileNotDefinedError;
}(base_error_1.BaseError));
exports.EntryFileNotDefinedError = EntryFileNotDefinedError;
