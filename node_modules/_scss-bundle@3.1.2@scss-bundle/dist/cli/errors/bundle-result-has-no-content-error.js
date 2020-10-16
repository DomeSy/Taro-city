"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_error_1 = require("./base-error");
var BundleResultHasNoContentError = /** @class */ (function (_super) {
    tslib_1.__extends(BundleResultHasNoContentError, _super);
    function BundleResultHasNoContentError() {
        return _super.call(this, "Concatenation result has no content.") || this;
    }
    return BundleResultHasNoContentError;
}(base_error_1.BaseError));
exports.BundleResultHasNoContentError = BundleResultHasNoContentError;
