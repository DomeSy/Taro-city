"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var BaseError = /** @class */ (function (_super) {
    tslib_1.__extends(BaseError, _super);
    function BaseError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseError.prototype.toString = function () {
        return this.message;
    };
    return BaseError;
}(Error));
exports.BaseError = BaseError;
