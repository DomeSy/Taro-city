"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var loglevel_1 = tslib_1.__importDefault(require("loglevel"));
var loglevel_plugin_prefix_1 = tslib_1.__importDefault(require("loglevel-plugin-prefix"));
var colors = {
    trace: chalk_1.default.white,
    debug: chalk_1.default.white,
    info: chalk_1.default.green,
    warn: chalk_1.default.yellow,
    error: chalk_1.default.red
};
var levels = {
    trace: "trce",
    debug: "dbug",
    info: "info",
    warn: "warn",
    error: "erro"
};
loglevel_plugin_prefix_1.default.reg(loglevel_1.default);
loglevel_1.default.enableAll();
loglevel_plugin_prefix_1.default.apply(loglevel_1.default, {
    format: function (level, _, timestamp) {
        return chalk_1.default.gray("[" + timestamp + "]") + " " + colors[level.toLowerCase()](levels[level.toLowerCase()] + ":");
    }
});
function appyMultilineText(logger) {
    var originalFactory = logger.methodFactory;
    logger.methodFactory = function (methodName, logLevel, loggerName) {
        var rawMethod = originalFactory(methodName, logLevel, loggerName);
        return function (message) {
            String(message)
                .split("\n")
                .forEach(function (x) { return rawMethod(x); });
        };
    };
    logger.setLevel(logger.getLevel());
    return logger;
}
exports.Log = appyMultilineText(loglevel_1.default);
