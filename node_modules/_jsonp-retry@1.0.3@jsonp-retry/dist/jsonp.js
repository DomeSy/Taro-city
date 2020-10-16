!function(global, factory) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = factory() : 'function' == typeof define && define.amd ? define(factory) : global.jsonp = factory();
}(this, function() {
    'use strict';
    function toObject(val) {
        if (null === val || void 0 === val) throw new TypeError('Object.assign cannot be called with null or undefined');
        return Object(val);
    }
    function serializeParams(params) {
        if (!params) return ''; else return Object.keys(params).map(function(item) {
            return item + '=' + enc(params[item]);
        }).join('&');
    }
    function isFunction(fn) {
        return 'function' == typeof fn;
    }
    function getUrlQueryParamByName(url, name) {
        if (!url) url = window.location.href;
        name = name.replace(/[[]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        var results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return ''; else return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    function updateQueryStringParamByName(url, name, value) {
        var re = new RegExp('([?&])' + name + '=.*?(&|$)', 'i');
        var separator = -1 !== url.indexOf('?') ? '&' : '?';
        if (url.match(re)) return url.replace(re, '$1' + name + '=' + value + '$2'); else return url + separator + name + '=' + value;
    }
    function jsonp$1(url, opts, cb) {
        if (isFunction(url)) {
            cb = url;
            opts = {};
        } else if (url && 'object' === (void 0 === url ? 'undefined' : _typeof(url))) {
            cb = opts;
            opts = url || {};
            url = opts.url;
        }
        if (isFunction(opts)) {
            cb = opts;
            opts = {};
        }
        if (!opts) opts = {};
        opts = objectAssign$1({}, defaultConfig, opts);
        url = url || opts.url;
        cb = cb || noop;
        if (url && 'string' == typeof url) {
            var urlWithParams = generateJsonpUrlWithParams(url, opts.params);
            var datafromStore = getDataFromStore({
                useStore: opts.useStore,
                storeKey: urlWithParams,
                storeCheck: opts.storeCheck,
                storeCheckKey: opts.storeCheckKey,
                storeSign: opts.storeSign,
                dataCheck: opts.dataCheck
            });
            if (!datafromStore) {
                opts.originalUrl = urlWithParams;
                if (!jsonp$1.promiseClose && canUsePromise) return new Promise(function(resolve, reject) {
                    fetchData(urlWithParams, opts, function(err, data) {
                        if (err) {
                            cb(err);
                            return reject(err);
                        }
                        cb(null, data);
                        resolve(data);
                    });
                });
                fetchData(urlWithParams, opts, cb);
            } else {
                cb(null, datafromStore);
                if (!jsonp$1.promiseClose && canUsePromise) return new Promise(function(resolve) {
                    return resolve(datafromStore);
                });
            }
        } else {
            cb(new Error('Param url is needed!'));
            if (!jsonp$1.promiseClose && canUsePromise) return new Promise(function(resolve, reject) {
                return reject(new Error('Param url is needed!'));
            });
        }
    }
    function generateJsonpUrlWithParams(url, params) {
        params = 'string' == typeof params ? params : serializeParams(params);
        url += (~url.indexOf('?') ? '&' : '?') + params;
        url = url.replace('?&', '?');
        return url;
    }
    function fetchData(url, opts, cb) {
        function cleanup(funcId) {
            if (script.parentNode) script.parentNode.removeChild(script);
            win[funcId] = noop;
            clearTimeout(win['timer_' + funcId]);
        }
        var originalUrl = opts.originalUrl;
        var charset = opts.charset;
        var jsonpUrlQueryParam = getUrlQueryParamByName(url, opts.jsonp);
        var funcId = ('?' === jsonpUrlQueryParam ? !1 : jsonpUrlQueryParam) || opts.name || '__jsonp' + timestamp++;
        var gotoBackupInfo = arguments[3] || null;
        if (jsonpUrlQueryParam) {
            if ('?' === jsonpUrlQueryParam) url = updateQueryStringParamByName(url, opts.jsonp, encodeC(funcId));
        } else url += ('&' === url.split('').pop() ? '' : '&') + opts.jsonp + '=' + encodeC(funcId);
        if (!opts.cache) url += ('&' === url.split('').pop() ? '' : '&') + '_=' + new Date().getTime();
        clearTimeout(win['timer_' + funcId]);
        var prevFunc = win[funcId];
        win[funcId] = function(data) {
            prevFunc && prevFunc(data);
            cleanup(funcId);
            if (gotoBackupInfo) data.__$$backupCall = gotoBackupInfo;
            if (opts.dataCheck) {
                if (!1 !== opts.dataCheck(data)) {
                    setDataToStore({
                        useStore: opts.useStore,
                        storeKey: originalUrl,
                        data: data
                    });
                    return cb(null, data);
                }
                if (!1 === fallback(originalUrl, opts, cb)) cb(new Error('Data check error, and no fallback'));
            } else {
                setDataToStore({
                    useStore: opts.useStore,
                    storeKey: originalUrl,
                    data: data
                });
                cb(null, data);
            }
        };
        var script = appendScriptTagToHead({
            url: url,
            charset: charset
        });
        var timeout = null != opts.timeout ? opts.timeout : TIMEOUT_CONST;
        win['timer_' + funcId] = setTimeout(function() {
            cleanup(funcId);
            if ('number' == typeof opts.retryTimes && opts.retryTimes > 0) {
                opts.retryTimes--;
                return fetchData(originalUrl, opts, cb);
            }
            if (!1 === fallback(originalUrl, opts, cb)) return cb(new Error('Timeout and no data return'));
        }, timeout);
    }
    function storeCheckFn(storeData, storeCheckKey, storeSign) {
        if (storeData && storeCheckKey && storeSign) return storeData[storeCheckKey] && storeData[storeCheckKey] === storeSign; else return !1;
    }
    function getDataFromStore(_ref) {
        var useStore = _ref.useStore, storeKey = _ref.storeKey, storeCheck = _ref.storeCheck, storeCheckKey = _ref.storeCheckKey, storeSign = _ref.storeSign, dataCheck = _ref.dataCheck;
        useStore = useStore ? store.enabled : !1;
        if (useStore) {
            var storeData = store.get(storeKey);
            storeCheck = storeCheck || storeCheckFn;
            if (storeCheck(storeData, storeCheckKey, storeSign)) if (!dataCheck || storeData && dataCheck && !1 !== dataCheck(storeData)) return storeData;
        }
        return null;
    }
    function getDataFromStoreWithoutCheck(_ref2) {
        var useStore = _ref2.useStore, storeKey = _ref2.storeKey, dataCheck = _ref2.dataCheck;
        useStore = useStore ? store.enabled : !1;
        if (useStore) {
            var storeData = store.get(storeKey);
            if (!dataCheck || storeData && dataCheck && !1 !== dataCheck(storeData)) return storeData;
        }
        return null;
    }
    function setDataToStore(_ref3) {
        var useStore = _ref3.useStore, storeKey = _ref3.storeKey, data = _ref3.data;
        useStore = useStore ? store.enabled : !1;
        if (useStore) store.set(storeKey, data);
    }
    function fallback(url, opts, cb) {
        var backup = opts.backup;
        var backupWithParams = void 0;
        if (backup) if ('string' == typeof backup) {
            delete opts.backup;
            backupWithParams = generateJsonpUrlWithParams(backup, opts.params);
            return fetchData(backupWithParams, opts, cb, {
                backup: backup
            });
        } else if (Array.isArray(backup)) if (backup.length) {
            var backupUrl = backup.shift();
            backupWithParams = generateJsonpUrlWithParams(backupUrl, opts.params);
            return fetchData(backupWithParams, opts, cb, {
                backup: backupUrl
            });
        }
        var dataFromStoreWithoutCheck = getDataFromStoreWithoutCheck({
            useStore: opts.useStore,
            storeKey: url,
            dataCheck: opts.dataCheck
        });
        if (dataFromStoreWithoutCheck) {
            cb(null, dataFromStoreWithoutCheck);
            return !0;
        }
        return !1;
    }
    function appendScriptTagToHead(_ref4) {
        var url = _ref4.url, charset = _ref4.charset;
        if (doc) {
            var script = doc.createElement('script');
            script.type = 'text/javascript';
            if (charset) script.charset = charset;
            script.src = url;
            head.appendChild(script);
            return script;
        }
    }
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    var objectAssign$1 = function() {
        try {
            if (!Object.assign) return !1;
            var test1 = new String('abc');
            test1[5] = 'de';
            if ('5' === Object.getOwnPropertyNames(test1)[0]) return !1;
            var test2 = {};
            for (var i = 0; i < 10; i++) test2['_' + String.fromCharCode(i)] = i;
            var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
                return test2[n];
            });
            if ('0123456789' !== order2.join('')) return !1;
            var test3 = {};
            'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
                test3[letter] = letter;
            });
            if ('abcdefghijklmnopqrst' !== Object.keys(Object.assign({}, test3)).join('')) return !1; else return !0;
        } catch (err) {
            return !1;
        }
    }() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
            from = Object(arguments[s]);
            for (var key in from) if (hasOwnProperty.call(from, key)) to[key] = from[key];
            if (getOwnPropertySymbols) {
                symbols = getOwnPropertySymbols(from);
                for (var i = 0; i < symbols.length; i++) if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
            }
        }
        return to;
    };
    var enc = encodeURIComponent;
    var win$1 = 'undefined' != typeof window ? window : global;
    var storage = win$1["localStorage"];
    var store = {
        disabled: !1,
        set: function(key, val) {
            if (void 0 === val) return store.remove(key);
            storage.setItem(key, store.serialize(val));
            return val;
        },
        get: function(key, defaultVal) {
            var val = store.deserialize(storage.getItem(key));
            return void 0 === val ? defaultVal : val;
        },
        remove: function(key) {
            storage.removeItem(key);
        },
        clear: function() {
            storage.clear();
        },
        has: function(key) {
            return void 0 !== store.get(key);
        },
        forEach: function(callback) {
            for (var i = 0; i < storage.length; i++) {
                var key = storage.key(i);
                callback(key, store.get(key));
            }
        },
        getAll: function() {
            var ret = {};
            store.forEach(function(key, val) {
                ret[key] = val;
            });
            return ret;
        },
        serialize: function(value) {
            return JSON.stringify(value);
        },
        deserialize: function(value) {
            if ('string' == typeof value) try {
                return JSON.parse(value);
            } catch (err) {
                return value || void 0;
            }
        }
    };
    try {
        store.set("__store__", "__store__");
        if ("__store__" !== store.get("__store__")) store.disabled = !0;
        store.remove("__store__");
    } catch (err) {
        store.disabled = !0;
    }
    store.enabled = !store.disabled;
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var win = 'undefined' != typeof window ? window : global;
    var canUsePromise = function() {
        return 'Promise' in win && _typeof(isFunction(Promise));
    }();
    var noop = function() {};
    var encodeC = encodeURIComponent;
    var doc = win.document;
    var head = doc ? doc.head || doc.getElementsByTagName('head')[0] : null;
    var TIMEOUT_CONST = 2e3;
    var defaultConfig = {
        timeout: TIMEOUT_CONST,
        retryTimes: 2,
        backup: null,
        params: {},
        jsonp: 'callback',
        name: null,
        cache: !1,
        useStore: !1,
        storeCheck: null,
        storeSign: null,
        storeCheckKey: null,
        dataCheck: null,
        charset: 'UTF-8'
    };
    var timestamp = new Date().getTime();
    return jsonp$1;
});
//# sourceMappingURL=jsonp.js.map