"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helper = void 0;
const fs = require("fs-extra");
const chalk = require("chalk");
const chokidar = require("chokidar");
const debug_1 = require("debug");
const constants = require("./constants");
const utils = require("./utils");
const npm = require("./npm");
const babelRegister_1 = require("./babelRegister");
exports.helper = Object.assign(Object.assign(Object.assign({}, constants), utils), { npm,
    createBabelRegister: babelRegister_1.default,
    fs,
    chalk,
    chokidar,
    createDebug: debug_1.default });
exports.default = exports.helper;
