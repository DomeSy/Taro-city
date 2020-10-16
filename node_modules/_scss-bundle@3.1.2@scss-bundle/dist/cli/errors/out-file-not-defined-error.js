"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_error_1 = require("./base-error");
var OutFileNotDefinedError = /** @class */ (function (_super) {
    tslib_1.__extends(OutFileNotDefinedError, _super);
    function OutFileNotDefinedError() {
        return _super.call(this, "\"outFile\" is not defined.") || this;
    }
    return OutFileNotDefinedError;
}(base_error_1.BaseError));
exports.OutFileNotDefinedError = OutFileNotDefinedError;
