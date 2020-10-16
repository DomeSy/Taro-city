"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNpmPkg = exports.getNpmPkgSync = exports.callPluginSync = exports.callPlugin = exports.installNpmPkg = exports.resolveNpmSync = exports.resolveNpm = exports.taroPluginPrefix = void 0;
const resolvePath = require("resolve");
const spawn = require("cross-spawn");
const chalk = require("chalk");
const Util = require("./utils");
const PEERS = /UNMET PEER DEPENDENCY ([a-z\-0-9.]+)@(.+)/gm;
const npmCached = {};
const erroneous = [];
const defaultInstallOptions = {
    dev: false,
    peerDependencies: true
};
exports.taroPluginPrefix = '@tarojs/plugin-';
function resolveNpm(pluginName, root) {
    if (!npmCached[pluginName]) {
        return new Promise((resolve, reject) => {
            resolvePath(`${pluginName}`, { basedir: root }, (err, res) => {
                if (err) {
                    return reject(err);
                }
                npmCached[pluginName] = res;
                resolve(res);
            });
        });
    }
    return Promise.resolve(npmCached[pluginName]);
}
exports.resolveNpm = resolveNpm;
function resolveNpmSync(pluginName, root) {
    try {
        if (!npmCached[pluginName]) {
            const res = resolvePath.sync(pluginName, { basedir: root });
            return res;
        }
        return npmCached[pluginName];
    }
    catch (err) {
        if (err.code === 'MODULE_NOT_FOUND') {
            console.log(chalk.cyan(`缺少npm包${pluginName}，开始安装...`));
            const installOptions = {
                dev: false
            };
            if (pluginName.indexOf(exports.taroPluginPrefix) >= 0) {
                installOptions.dev = true;
            }
            installNpmPkg(pluginName, installOptions);
            return resolveNpmSync(pluginName, root);
        }
        return '';
    }
}
exports.resolveNpmSync = resolveNpmSync;
function installNpmPkg(pkgList, options) {
    if (!pkgList) {
        return;
    }
    if (!Array.isArray(pkgList)) {
        pkgList = [pkgList];
    }
    pkgList = pkgList.filter(dep => {
        return erroneous.indexOf(dep) === -1;
    });
    if (!pkgList.length) {
        return;
    }
    options = Object.assign({}, defaultInstallOptions, options);
    let installer = '';
    let args = [];
    if (Util.shouldUseYarn()) {
        installer = 'yarn';
    }
    else if (Util.shouldUseCnpm()) {
        installer = 'cnpm';
    }
    else {
        installer = 'npm';
    }
    if (Util.shouldUseYarn()) {
        args = ['add'].concat(pkgList).filter(Boolean);
        args.push('--silent', '--no-progress');
        if (options.dev) {
            args.push('-D');
        }
    }
    else {
        args = ['install'].concat(pkgList).filter(Boolean);
        args.push('--silent', '--no-progress');
        if (options.dev) {
            args.push('--save-dev');
        }
        else {
            args.push('--save');
        }
    }
    const output = spawn.sync(installer, args, {
        stdio: ['ignore', 'pipe', 'inherit']
    });
    if (output.status) {
        pkgList.forEach(dep => {
            erroneous.push(dep);
        });
    }
    let matches = null;
    const peers = [];
    while ((matches = PEERS.exec(output.stdout))) {
        const pkg = matches[1];
        const version = matches[2];
        if (version.match(' ')) {
            peers.push(pkg);
        }
        else {
            peers.push(`${pkg}@${version}`);
        }
    }
    if (options.peerDependencies && peers.length) {
        console.info('正在安装 peerDependencies...');
        installNpmPkg(peers, options);
    }
    return output;
}
exports.installNpmPkg = installNpmPkg;
exports.callPlugin = (pluginName, content, file, config, root) => __awaiter(void 0, void 0, void 0, function* () {
    const pluginFn = yield getNpmPkg(`${exports.taroPluginPrefix}${pluginName}`, root);
    return pluginFn(content, file, config);
});
exports.callPluginSync = (pluginName, content, file, config, root) => {
    const pluginFn = getNpmPkgSync(`${exports.taroPluginPrefix}${pluginName}`, root);
    return pluginFn(content, file, config);
};
function getNpmPkgSync(npmName, root) {
    const npmPath = resolveNpmSync(npmName, root);
    const npmFn = require(npmPath);
    return npmFn;
}
exports.getNpmPkgSync = getNpmPkgSync;
function getNpmPkg(npmName, root) {
    return __awaiter(this, void 0, void 0, function* () {
        let npmPath;
        try {
            npmPath = resolveNpmSync(npmName, root);
        }
        catch (err) {
            if (err.code === 'MODULE_NOT_FOUND') {
                console.log(chalk.cyan(`缺少npm包${npmName}，开始安装...`));
                const installOptions = {
                    dev: false
                };
                if (npmName.indexOf(exports.taroPluginPrefix) >= 0) {
                    installOptions.dev = true;
                }
                installNpmPkg(npmName, installOptions);
                npmPath = yield resolveNpm(npmName, root);
            }
        }
        const npmFn = require(npmPath);
        return npmFn;
    });
}
exports.getNpmPkg = getNpmPkg;
