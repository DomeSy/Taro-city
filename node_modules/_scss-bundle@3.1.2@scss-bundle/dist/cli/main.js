#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var commander_1 = tslib_1.__importDefault(require("commander"));
var fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
var path_1 = tslib_1.__importDefault(require("path"));
var lodash_debounce_1 = tslib_1.__importDefault(require("lodash.debounce"));
var chokidar_1 = tslib_1.__importDefault(require("chokidar"));
var arguments_1 = require("./arguments");
var constants_1 = require("./constants");
var config_1 = require("./config");
var logging_1 = require("./logging");
var bundler_1 = require("../bundler");
var entry_file_not_found_error_1 = require("./errors/entry-file-not-found-error");
var import_file_not_found_error_1 = require("./errors/import-file-not-found-error");
var bundle_result_has_no_content_error_1 = require("./errors/bundle-result-has-no-content-error");
var out_file_not_defined_error_1 = require("./errors/out-file-not-defined-error");
var entry_file_not_defined_error_1 = require("./errors/entry-file-not-defined-error");
var scss_1 = require("./utils/scss");
var bundle_info_1 = require("./utils/bundle-info");
var archy_1 = require("./utils/archy");
var helpers_1 = require("./helpers");
var PACKAGE_JSON_PATH = path_1.default.resolve(__dirname, "../../package.json");
function bundleResultForEach(bundleResult, cb) {
    cb(bundleResult);
    if (bundleResult.imports != null) {
        for (var _i = 0, _a = bundleResult.imports; _i < _a.length; _i++) {
            var bundleResultChild = _a[_i];
            bundleResultForEach(bundleResultChild, cb);
        }
    }
}
function build(project, config) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var fileRegistry, bundler, bundleResult;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (config.entryFile == null) {
                        throw new entry_file_not_defined_error_1.EntryFileNotDefinedError();
                    }
                    if (config.outFile == null) {
                        throw new out_file_not_defined_error_1.OutFileNotDefinedError();
                    }
                    fileRegistry = {};
                    bundler = new bundler_1.Bundler(fileRegistry, project);
                    return [4 /*yield*/, bundler.bundle(config.entryFile, config.dedupeGlobs, config.includePaths, config.ignoreImports)];
                case 1:
                    bundleResult = _a.sent();
                    if (!bundleResult.found) {
                        throw new entry_file_not_found_error_1.EntryFileNotFoundError(bundleResult.filePath);
                    }
                    bundleResultForEach(bundleResult, function (result) {
                        if (!result.found && result.tilde && project == null) {
                            logging_1.Log.warn("Found tilde import, but \"project\" was not specified.");
                            throw new import_file_not_found_error_1.ImportFileNotFoundError(result.filePath);
                        }
                    });
                    if (bundleResult.bundledContent == null) {
                        throw new bundle_result_has_no_content_error_1.BundleResultHasNoContentError();
                    }
                    return [4 /*yield*/, scss_1.renderScss(project, config.includePaths, bundleResult.bundledContent)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, fs_extra_1.default.mkdirp(path_1.default.dirname(config.outFile))];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, fs_extra_1.default.writeFile(config.outFile, bundleResult.bundledContent)];
                case 4:
                    _a.sent();
                    return [2 /*return*/, {
                            fileRegistry: fileRegistry,
                            bundleResult: bundleResult
                        }];
            }
        });
    });
}
function main(argv) {
    var _a, _b;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var packageJson, cliOptions, configLocation, stats, projectLocation, stats, config, jsonConfig, error_1, configLocationDir, resolvedLogLevel, logLevelKey, onFileChange, watchFolder, _c, fileRegistry, bundleResult, error_2;
        var _this = this;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, fs_extra_1.default.readJson(PACKAGE_JSON_PATH)];
                case 1:
                    packageJson = _d.sent();
                    cliOptions = arguments_1.resolveArguments(commander_1.default.version(packageJson.version, "-v, --version"), argv);
                    if (!(cliOptions.config != null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, fs_extra_1.default.stat(cliOptions.config)];
                case 2:
                    stats = _d.sent();
                    if (stats.isDirectory()) {
                        configLocation = path_1.default.resolve(cliOptions.config, constants_1.CONFIG_FILE_NAME);
                    }
                    else {
                        configLocation = cliOptions.config;
                    }
                    _d.label = 3;
                case 3:
                    if (!(cliOptions.project != null)) return [3 /*break*/, 5];
                    return [4 /*yield*/, fs_extra_1.default.stat(cliOptions.project)];
                case 4:
                    stats = _d.sent();
                    if (stats.isDirectory()) {
                        projectLocation = cliOptions.project;
                    }
                    else {
                        logging_1.Log.warn("[DEPRECATED]: Flag \"project\" pointing to the config file directly is deprecated. Provide a path to the directory where the project is.");
                        configLocation = cliOptions.project;
                        projectLocation = path_1.default.dirname(cliOptions.project);
                    }
                    _d.label = 5;
                case 5:
                    if (!(configLocation != null)) return [3 /*break*/, 10];
                    _d.label = 6;
                case 6:
                    _d.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, config_1.resolveConfig(configLocation)];
                case 7:
                    jsonConfig = _d.sent();
                    config = helpers_1.mergeObjects(jsonConfig.bundlerOptions, cliOptions);
                    return [3 /*break*/, 9];
                case 8:
                    error_1 = _d.sent();
                    logging_1.Log.error(error_1);
                    process.exit(1);
                    return [3 /*break*/, 9];
                case 9: return [3 /*break*/, 11];
                case 10:
                    config = cliOptions;
                    _d.label = 11;
                case 11:
                    // Resolve project location from config file.
                    if (projectLocation == null && configLocation != null) {
                        configLocationDir = path_1.default.dirname(configLocation);
                        projectLocation = path_1.default.resolve(configLocationDir, (_a = config.project, (_a !== null && _a !== void 0 ? _a : "./")));
                    }
                    if (config.logLevel != null) {
                        logLevelKey = helpers_1.resolveLogLevelKey(config.logLevel);
                        if (logLevelKey != null) {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            resolvedLogLevel = constants_1.LogLevel[logLevelKey];
                        }
                    }
                    logging_1.Log.setLevel(resolvedLogLevel == null ? constants_1.LogLevel.Info : resolvedLogLevel);
                    if (!config.watch) return [3 /*break*/, 12];
                    onFileChange = lodash_debounce_1.default(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    logging_1.Log.info("File changes detected.");
                                    return [4 /*yield*/, build(projectLocation, config)];
                                case 1:
                                    _a.sent();
                                    logging_1.Log.info("Waiting for changes...");
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    if (!config.rootDir) {
                        logging_1.Log.warn("rootDir property is missing in config, using current working directory: " + process.cwd());
                    }
                    watchFolder = (_b = config.rootDir, (_b !== null && _b !== void 0 ? _b : process.cwd()));
                    logging_1.Log.info("Waiting for changes...");
                    chokidar_1.default.watch(watchFolder).on("change", onFileChange);
                    return [3 /*break*/, 15];
                case 12:
                    _d.trys.push([12, 14, , 15]);
                    return [4 /*yield*/, build(projectLocation, config)];
                case 13:
                    _c = _d.sent(), fileRegistry = _c.fileRegistry, bundleResult = _c.bundleResult;
                    logging_1.Log.info("Imports tree:");
                    logging_1.Log.info(archy_1.renderArchy(bundleResult, projectLocation));
                    logging_1.Log.info(bundle_info_1.renderBundleInfo(bundleResult, fileRegistry));
                    return [3 /*break*/, 15];
                case 14:
                    error_2 = _d.sent();
                    logging_1.Log.error(error_2.message);
                    process.exit(1);
                    return [3 /*break*/, 15];
                case 15: return [2 /*return*/];
            }
        });
    });
}
main(process.argv);
