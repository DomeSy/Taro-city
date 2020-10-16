'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../mock-doc');
var platform = require('./platform.js');
var runtime = require('../runtime');



Object.keys(runtime).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return runtime[k];
		}
	});
});
exports.Build = platform.Build;
exports.Context = platform.Context;
exports.consoleDevError = platform.consoleDevError;
exports.consoleDevInfo = platform.consoleDevInfo;
exports.consoleDevWarn = platform.consoleDevWarn;
exports.consoleError = platform.consoleError;
exports.cssVarShim = platform.cssVarShim;
exports.doc = platform.doc;
exports.flushAll = platform.flushAll;
exports.flushLoadModule = platform.flushLoadModule;
exports.flushQueue = platform.flushQueue;
exports.flushTicks = platform.flushTicks;
exports.getHostRef = platform.getHostRef;
exports.isMemberInElement = platform.isMemberInElement;
exports.loadModule = platform.loadModule;
exports.nextTick = platform.nextTick;
exports.patchDynamicImport = platform.patchDynamicImport;
exports.plt = platform.plt;
exports.readTask = platform.readTask;
exports.registerComponents = platform.registerComponents;
exports.registerContext = platform.registerContext;
exports.registerHost = platform.registerHost;
exports.registerInstance = platform.registerInstance;
exports.registerModule = platform.registerModule;
exports.resetPlatform = platform.resetPlatform;
exports.resetTaskQueue = platform.resetTaskQueue;
exports.startAutoApplyChanges = platform.startAutoApplyChanges;
exports.stopAutoApplyChanges = platform.stopAutoApplyChanges;
exports.styles = platform.styles;
exports.supportsConstructibleStylesheets = platform.supportsConstructibleStylesheets;
exports.supportsListenerOptions = platform.supportsListenerOptions;
exports.supportsShadowDom = platform.supportsShadowDom;
exports.win = platform.win;
exports.writeTask = platform.writeTask;
