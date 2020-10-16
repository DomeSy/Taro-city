"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var sass_1 = tslib_1.__importDefault(require("sass"));
var compilation_error_1 = require("../errors/compilation-error");
function sassImporter(projectPath) {
    return function (url, _prev, done) {
        if (url[0] === "~") {
            var filePath = path_1.default.resolve(projectPath, "node_modules", url.substr(1));
            done({
                file: filePath
            });
        }
        else {
            done({ file: url });
        }
    };
}
function renderScss(projectPath, includePaths, content) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    sass_1.default.render({
                        data: content,
                        importer: projectPath != null ? sassImporter(projectPath) : undefined,
                        includePaths: includePaths
                    }, function (error, result) {
                        if (error != null) {
                            reject(new compilation_error_1.CompilationError(error.message + " on line (" + error.line + ", " + error.column + ")"));
                        }
                        resolve(result);
                    });
                })];
        });
    });
}
exports.renderScss = renderScss;
