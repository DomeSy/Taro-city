'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mockDoc = require('../mock-doc');
var runtime = require('../runtime');

const queuedTicks = [];
const queuedWriteTasks = [];
const queuedReadTasks = [];
const moduleLoaded = new Map();
const queuedLoadModules = [];
const caughtErrors = [];
const consoleError = (e) => {
    caughtErrors.push(e);
};
const consoleDevError = (...e) => {
    caughtErrors.push(new Error(e.join(', ')));
};
const consoleDevWarn = (..._) => { };
const consoleDevInfo = (..._) => { };
function resetTaskQueue() {
    queuedTicks.length = 0;
    queuedWriteTasks.length = 0;
    queuedReadTasks.length = 0;
    moduleLoaded.clear();
    queuedLoadModules.length = 0;
    caughtErrors.length = 0;
}
const nextTick = (cb) => {
    queuedTicks.push(cb);
};
function flushTicks() {
    return new Promise((resolve, reject) => {
        function drain() {
            try {
                if (queuedTicks.length > 0) {
                    const writeTasks = queuedTicks.slice();
                    queuedTicks.length = 0;
                    let cb;
                    while ((cb = writeTasks.shift())) {
                        cb(Date.now());
                    }
                }
                if (queuedTicks.length > 0) {
                    process.nextTick(drain);
                }
                else {
                    resolve();
                }
            }
            catch (e) {
                reject(`flushTicks: ${e}`);
            }
        }
        process.nextTick(drain);
    });
}
function writeTask(cb) {
    queuedWriteTasks.push(cb);
}
function readTask(cb) {
    queuedReadTasks.push(cb);
}
function flushQueue() {
    return new Promise((resolve, reject) => {
        async function drain() {
            try {
                if (queuedReadTasks.length > 0) {
                    const readTasks = queuedReadTasks.slice();
                    queuedReadTasks.length = 0;
                    let cb;
                    while ((cb = readTasks.shift())) {
                        const result = cb(Date.now());
                        if (result != null && typeof result.then === 'function') {
                            await result;
                        }
                    }
                }
                if (queuedWriteTasks.length > 0) {
                    const writeTasks = queuedWriteTasks.slice();
                    queuedWriteTasks.length = 0;
                    let cb;
                    while ((cb = writeTasks.shift())) {
                        const result = cb(Date.now());
                        if (result != null && typeof result.then === 'function') {
                            await result;
                        }
                    }
                }
                if ((queuedReadTasks.length + queuedWriteTasks.length) > 0) {
                    process.nextTick(drain);
                }
                else {
                    resolve();
                }
            }
            catch (e) {
                reject(`flushQueue: ${e}`);
            }
        }
        process.nextTick(drain);
    });
}
async function flushAll() {
    while ((queuedTicks.length +
        queuedLoadModules.length +
        queuedWriteTasks.length +
        queuedReadTasks.length) > 0) {
        await flushTicks();
        await flushLoadModule();
        await flushQueue();
    }
    if (caughtErrors.length > 0) {
        const err = caughtErrors[0];
        if (err == null) {
            throw new Error('Error!');
        }
        if (typeof err === 'string') {
            throw new Error(err);
        }
        throw err;
    }
    return new Promise(resolve => process.nextTick(resolve));
}
function loadModule(cmpMeta, _hostRef, _hmrVersionId) {
    return new Promise(resolve => {
        queuedLoadModules.push({
            bundleId: cmpMeta.$lazyBundleIds$,
            resolve: () => resolve(moduleLoaded.get(cmpMeta.$lazyBundleIds$))
        });
    });
}
function flushLoadModule(bundleId) {
    return new Promise((resolve, reject) => {
        try {
            process.nextTick(() => {
                if (bundleId != null) {
                    for (let i = 0; i < queuedLoadModules.length; i++) {
                        if (queuedLoadModules[i].bundleId === bundleId) {
                            queuedLoadModules[i].resolve();
                            queuedLoadModules.splice(i, 1);
                            i--;
                        }
                    }
                }
                else {
                    let queuedLoadModule;
                    while ((queuedLoadModule = queuedLoadModules.shift())) {
                        queuedLoadModule.resolve();
                    }
                }
                resolve();
            });
        }
        catch (e) {
            reject(`flushLoadModule: ${e}`);
        }
    });
}
function registerModule(bundleId, Cstr) {
    moduleLoaded.set(bundleId, Cstr);
}

const win = mockDoc.setupGlobal(global);
const doc = win.document;
const hostRefs = new Map();
const styles = new Map();
const cssVarShim = false;
const Build = {
    isDev: true,
    isBrowser: false
};
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (h) => h(),
    raf: (h) => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
};
const supportsShadowDom = true;
const supportsListenerOptions = true;
const supportsConstructibleStylesheets = false;
let isAutoApplyingChanges = false;
let autoApplyTimer = undefined;
function resetPlatform() {
    if (win && typeof win.close === 'function') {
        win.close();
    }
    hostRefs.clear();
    styles.clear();
    plt.$flags$ = 0;
    Object.keys(Context).forEach(key => delete Context[key]);
    if (plt.$orgLocNodes$ != null) {
        plt.$orgLocNodes$.clear();
        plt.$orgLocNodes$ = undefined;
    }
    win.location.href = plt.$resourcesUrl$ = `http://testing.stenciljs.com/`;
    resetTaskQueue();
    stopAutoApplyChanges();
    cstrs.clear();
}
function stopAutoApplyChanges() {
    isAutoApplyingChanges = false;
    if (autoApplyTimer) {
        clearTimeout(autoApplyTimer);
        autoApplyTimer = undefined;
    }
}
async function startAutoApplyChanges() {
    isAutoApplyingChanges = true;
    flushAll().then(() => {
        if (isAutoApplyingChanges) {
            autoApplyTimer = setTimeout(() => {
                startAutoApplyChanges();
            }, 100);
        }
    });
}
function registerContext(context) {
    if (context) {
        Object.assign(Context, context);
    }
}
const getHostRef = (elm) => {
    return hostRefs.get(elm);
};
const registerInstance = (lazyInstance, hostRef) => {
    if (lazyInstance == null || lazyInstance.constructor == null) {
        throw new Error(`Invalid component constructor`);
    }
    if (hostRef == null) {
        const Cstr = lazyInstance.constructor;
        const tagName = (Cstr.COMPILER_META && Cstr.COMPILER_META.tagName) ? Cstr.COMPILER_META.tagName : 'div';
        const elm = document.createElement(tagName);
        registerHost(elm);
        hostRef = getHostRef(elm);
    }
    hostRef.$lazyInstance$ = lazyInstance;
    return hostRefs.set(lazyInstance, hostRef);
};
const registerHost = (elm) => {
    const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $instanceValues$: new Map(),
        $renderCount$: 0
    };
    hostRef.$onInstancePromise$ = new Promise(r => hostRef.$onInstanceResolve$ = r);
    hostRef.$onReadyPromise$ = new Promise(r => hostRef.$onReadyResolve$ = r);
    elm['s-p'] = [];
    elm['s-rc'] = [];
    hostRefs.set(elm, hostRef);
};
const Context = {};
const cstrs = new Map();
const registerComponents = (Cstrs) => {
    Cstrs.forEach(Cstr => {
        cstrs.set(Cstr.COMPILER_META.tagName, Cstr);
    });
};
const isMemberInElement = (elm, memberName) => {
    if (elm != null) {
        if (memberName in elm) {
            return true;
        }
        const nodeName = elm.nodeName;
        if (nodeName) {
            const cstr = cstrs.get(nodeName.toLowerCase());
            if (cstr != null && cstr.COMPILER_META != null && cstr.COMPILER_META.properties != null) {
                return cstr.COMPILER_META.properties.some(p => p.name === memberName);
            }
        }
    }
    return false;
};
const patchDynamicImport = (_) => { return; };

Object.keys(runtime).forEach(function (k) {
    if (k !== 'default') Object.defineProperty(exports, k, {
        enumerable: true,
        get: function () {
            return runtime[k];
        }
    });
});
exports.Build = Build;
exports.Context = Context;
exports.consoleDevError = consoleDevError;
exports.consoleDevInfo = consoleDevInfo;
exports.consoleDevWarn = consoleDevWarn;
exports.consoleError = consoleError;
exports.cssVarShim = cssVarShim;
exports.doc = doc;
exports.flushAll = flushAll;
exports.flushLoadModule = flushLoadModule;
exports.flushQueue = flushQueue;
exports.flushTicks = flushTicks;
exports.getHostRef = getHostRef;
exports.isMemberInElement = isMemberInElement;
exports.loadModule = loadModule;
exports.nextTick = nextTick;
exports.patchDynamicImport = patchDynamicImport;
exports.plt = plt;
exports.readTask = readTask;
exports.registerComponents = registerComponents;
exports.registerContext = registerContext;
exports.registerHost = registerHost;
exports.registerInstance = registerInstance;
exports.registerModule = registerModule;
exports.resetPlatform = resetPlatform;
exports.resetTaskQueue = resetTaskQueue;
exports.startAutoApplyChanges = startAutoApplyChanges;
exports.stopAutoApplyChanges = stopAutoApplyChanges;
exports.styles = styles;
exports.supportsConstructibleStylesheets = supportsConstructibleStylesheets;
exports.supportsListenerOptions = supportsListenerOptions;
exports.supportsShadowDom = supportsShadowDom;
exports.win = win;
exports.writeTask = writeTask;
