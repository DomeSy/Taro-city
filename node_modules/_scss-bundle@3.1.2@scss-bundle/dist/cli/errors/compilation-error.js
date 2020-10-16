"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var os_1 = tslib_1.__importDefault(require("os"));
var base_error_1 = require("./base-error");
var CompilationError = /** @class */ (function (_super) {
    tslib_1.__extends(CompilationError, _super);
    function CompilationError(styleError) {
        return _super.call(this, "There is an error in your styles:" + os_1.default.EOL + styleError) || this;
    }
    return CompilationError;
}(base_error_1.BaseError));
exports.CompilationError = CompilationError;
