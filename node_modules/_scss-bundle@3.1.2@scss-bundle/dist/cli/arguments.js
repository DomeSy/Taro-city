"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
function resolveArguments(cmd, argv) {
    var parsedArguments = cmd
        .option("-c, --config <path>", "configuration file location", helpers_1.resolvePath)
        .option("-p, --project <path>", "project location where 'node_modules' folder is located", helpers_1.resolvePath)
        .option("-e, --entryFile <path>", "bundle entry file location", helpers_1.resolvePath)
        .option("-o, --outFile <path>", "bundle output location", helpers_1.resolvePath)
        .option("--rootDir <path>", "specifies the root directory of input files", helpers_1.resolvePath)
        .option("-w, --watch [boolean]", "watch files for changes. Works with \"rootDir\"", helpers_1.resolveBoolean)
        .option("--ignoreImports <list>", "ignore resolving import content by matching a regular expression", helpers_1.resolveList)
        .option("--includePaths <list>", "include paths for resolving imports", helpers_1.resolveList)
        .option("--dedupeGlobs <list>", "files that will be emitted in a bundle once", helpers_1.resolveList)
        .option("--logLevel <level>", "console log level", helpers_1.resolveLogLevelKey)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .parse(argv);
    var config = parsedArguments.config, project = parsedArguments.project, entryFile = parsedArguments.entryFile, ignoreImports = parsedArguments.ignoreImports, includePaths = parsedArguments.includePaths, outFile = parsedArguments.outFile, rootDir = parsedArguments.rootDir, watch = parsedArguments.watch, logLevel = parsedArguments.logLevel, dedupeGlobs = parsedArguments.dedupeGlobs;
    return {
        config: config,
        project: project,
        entryFile: entryFile,
        ignoreImports: ignoreImports,
        includePaths: includePaths,
        outFile: outFile,
        rootDir: rootDir,
        watch: watch,
        logLevel: logLevel,
        dedupeGlobs: dedupeGlobs
    };
}
exports.resolveArguments = resolveArguments;
