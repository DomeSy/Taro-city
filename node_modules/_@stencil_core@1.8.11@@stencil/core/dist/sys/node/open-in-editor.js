(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var osHomeDir = __webpack_require__(11)();
var path = __webpack_require__(3);

module.exports = {
  number: function(value, fallback) {
    return isNaN(value) ? fallback : value;
  },
  quote: function(value, escapeQuotes) {
    value = String(value)
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\"');

    return escapeQuotes ?
      '\\"' + value + '\\"' :
      '"' + value + '"';
  },
  extractFilename: function(filename) {
    var parts = filename.match(/^(.+?)((?::\d+){0,4})$/);
    var segment = parts[2].split(':').slice(1);

    return {
      filename: parts[1],
      line: parseInt(segment[0] || 0, 10),
      column: parseInt(segment[1] || 0, 10)
    };
  },
  fail: function(msg) {
    console.error(String(msg).trimRight());
    process.exit(2);
  },
  atHomeDir: function(filename) {
    return path.join(osHomeDir, filename);
  },
  any: function(promises, err) {
    return new Promise(function(resolve, reject) {
      Promise.all(promises.map(function(item) {
        if (item && typeof item.then == 'function') {
          return item.then(
            resolve,    // any success resolves the main promise immediately
            function() { /* ignore any reject */ }
          );
        }

        return item;
      })).then(function(results) {
        reject(err);
      }, reject);
    });
  },
  append: function(str, appendix) {
    return String(str).replace(/\s*$/, (str ? ' ' : '') + appendix);
  },
  assign: function(dest, src) {
    for (var key in src) {
      if (Object.prototype.hasOwnProperty.call(src, key)) {
        dest[key] = src[key];
      }
    }

    return dest;
  }
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var exec = __webpack_require__(6).exec;
var number = __webpack_require__(0).number;
var quote = __webpack_require__(0).quote;
var extractFilename = __webpack_require__(0).extractFilename;
var append = __webpack_require__(0).append;

function makeArguments(filename, settings) {
  var info = extractFilename(filename);
  var pattern = settings.pattern || '';
  var values = {
    projectPath: process.env.PROJECT_PATH || process.PWD || process.cwd(),
    line: info.line + number(settings.line, 1),
    column: info.column + number(settings.column, 1)
  };

  if (!/\{filename\}/.test(pattern)) {
    pattern = append(pattern, '{filename}:{line}:{column}');
  }

  return pattern
    .replace(
      new RegExp('\\{(' + Object.keys(values).join('|') + ')\\}', 'g'),
      function(m, name) {
        return values[name];
      }
    )
    // replace `{filename}` and adjoined right string for quoted filename,
    // since filename can have spaces
    //
    //   {filename} --line 1 --column 2
    //   => "filename" --line 1 --column 2
    //
    //   {filename}:1:2
    //   => "filename:1:2"
    //
    .replace(/\{filename\}(\S*)/, function(m, rest) {
      return quote(info.filename + rest, settings.escapeQuotes);
    });
}

function open(cmd, filename, settings) {
  return new Promise(function(resolve, reject) {
    var args;

    settings = settings || {};
    args = makeArguments(filename, settings);
    cmd = settings.patternOnly ? args : append(quote(cmd), args);

    exec(cmd, function(err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

module.exports = open;
module.exports.factory = function(cmd, settings) {
  return function openInEditor(filename) {
    return open(cmd, filename, settings);
  };
};

module.exports.detectAndOpenFactory = function(detect, settings) {
  return function openInEditor(filename) {
    return detect().then(function(cmd) {
      open(cmd, filename, settings);
    });
  };
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var check = __webpack_require__(14);
var any = __webpack_require__(0).any;

function detect(name, commands, args, locations) {
  function run(task) {
    return this(task, name, args);
  }

  locations = locations[process.platform] || [];

  return any(
    [].concat(
      commands.map(run, check.command),
      locations.map(run, check.path)
    ),
    'Not detected'
  );
}

module.exports = detect;
module.exports.lazy = function(name, commands, args, locations) {
  var memo;

  return function() {
    if (!memo) {
      memo = detect(name, commands, args, locations);
    }

    return memo;
  };
};
module.exports.platformSupport = function(platforms, editor, resolveValue) {
  return function() {
    // we use only system parts so we haven't to check anything except os
    if (platforms.indexOf(process.platform) !== -1) {
      return Promise.resolve(resolveValue);
    }

    return Promise.reject('"Open in ' + editor + '" does not implemented for your platform (' + process.platform + ')');
  };
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(7);
var path = __webpack_require__(3);
var lazyDetect = __webpack_require__(2).lazy;

var settings = {
  pattern: '{projectPath} --line {line} {filename}'
};

var winDirs = (function() {
  var jetbrainsFolder = 'c:/Program Files (x86)/JetBrains/';

  if (!fs.existsSync(jetbrainsFolder)) {
    return [];
  }

  return fs.readdirSync(jetbrainsFolder)
    .map(function(name) {
      return path.join(jetbrainsFolder, name);
    })
    .filter(function(path) {
      return fs.statSync(path).isDirectory();
    });
})();

module.exports = function(config) {
  var detect = lazyDetect(config.name, [], '', {
    darwin: [
      '/Applications/' + config.appFolder + '.app/Contents/MacOS/' + config.executable
    ],
    win32: winDirs.map(function(dir) {
      return dir + '/bin/' + config.executable + '.exe';
    })
  });
  var open = __webpack_require__(1).detectAndOpenFactory(detect, settings);

  return {
    settings: settings,
    detect: detect,
    open: open
  };
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  atom: __webpack_require__(13),
  code: __webpack_require__(15),
  sublime: __webpack_require__(16),
  webstorm: __webpack_require__(17),
  phpstorm: __webpack_require__(18),
  idea14ce: __webpack_require__(19),
  vim: __webpack_require__(20),
  visualstudio: __webpack_require__(21),
  emacs: __webpack_require__(22)
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var osascript = function(script) {
  return 'osascript -e \'' + script + '\'';
};

var terminal = function(cmd) {
  return 'tell application "Terminal" to do script "' + cmd + '"';
};

var runInTerminal = function(cmd) {
  return osascript(terminal('cd {projectPath}; ' + cmd));
};

module.exports = runInTerminal;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


exports.openInEditor = __webpack_require__(10);

exports.editors = __webpack_require__(5);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var extractFilename = __webpack_require__(0).extractFilename;
var number = __webpack_require__(0).number;
var assign = __webpack_require__(0).assign;
var editors = __webpack_require__(5);
var openFactory = __webpack_require__(1).factory;

module.exports = {
  configure: function(options, cb) {
    options = options || {};
    cb = cb || function() {};

    var sourceLineOffset = number(options.line, 1);
    var sourceColumnOffset = number(options.column, 1);
    var editor = options.editor;
    var cmd = options.cmd;
    var open;

    if (!cmd && !editor) {
      if (editors.hasOwnProperty(process.env.OPEN_FILE)) {
        editor = process.env.OPEN_FILE;
      } else {
        cmd = process.env.OPEN_FILE ||
              process.env.VISUAL ||
              process.env.EDITOR;
      }
    }

    // if editor option is set then fail on wrong value
    if (editor && !editors.hasOwnProperty(editor)) {
      cb('Wrong value for `editor` option: ' + editor);
      return;
    }

    if (cmd) {
      var settings = {};

      // use editor settings as base
      if (editors.hasOwnProperty(editor)) {
        assign(settings, editors[editor].settings);
      }

      open = openFactory(cmd, assign(settings, options));
    } else {
      if (!editor) {
        cb('Editor is not specified');
        return;
      }

      open = editors[editor].open;
    }

    return {
      open: function(filename) {
        if (!filename) {
          return Promise.reject('File is not specified');
        }

        var info = extractFilename(filename);

        return open([
          info.filename,
          Math.max(info.line - sourceLineOffset, 0),
          Math.max(info.column - sourceColumnOffset, 0)
        ].join(':'));
      }
    };
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var os = __webpack_require__(12);

function homedir() {
	var env = process.env;
	var home = env.HOME;
	var user = env.LOGNAME || env.USER || env.LNAME || env.USERNAME;

	if (process.platform === 'win32') {
		return env.USERPROFILE || env.HOMEDRIVE + env.HOMEPATH || home || null;
	}

	if (process.platform === 'darwin') {
		return home || (user ? '/Users/' + user : null);
	}

	if (process.platform === 'linux') {
		return home || (process.getuid() === 0 ? '/root' : (user ? '/home/' + user : null));
	}

	return home || null;
}

module.exports = typeof os.homedir === 'function' ? os.homedir : homedir;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var atHomeDir = __webpack_require__(0).atHomeDir;

var settings = {
  pattern: '{filename}:{line}:{column}'
};

var detect = __webpack_require__(2).lazy('Atom Editor', ['atom'], '-h', {
  darwin: [
    '/Applications/Atom.app/Contents/Resources/app/atom.sh'
  ],
  win32: [
    atHomeDir('AppData/Local/atom/bin/atom.cmd')
  ]
});

var open = __webpack_require__(1).detectAndOpenFactory(detect, settings);

module.exports = {
  settings: settings,
  detect: detect,
  open: open
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var exec = __webpack_require__(6).exec;
var fs = __webpack_require__(7);
var quote = __webpack_require__(0).quote;

function checkCommand(cmd, name, args) {
  if (!args) {
    return Promise.reject('No args to check command: ' + cmd);
  }

  return new Promise(function(resolve, reject) {
    exec(cmd + ' ' + args, function(err, output) {
      if (err || output.indexOf(name) !== 0) {
        reject(err);
      } else {
        resolve(cmd);
      }
    });
  });
}

function checkPath(path, name) {
  if (!fs.existsSync(path)) {
    return Promise.reject('Path does not exist: ' + path);
  }

  return Promise.resolve(path);
}

module.exports = {
  command: checkCommand,
  path: checkPath
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var atHomeDir = __webpack_require__(0).atHomeDir;

var settings = {
  pattern: '-r -g {filename}:{line}:{column}'
};

var detect = __webpack_require__(2).lazy('Visual Studio Code', ['code'], '-h', {
  darwin: [
    '/Applications/Visual Studio Code.app/Contents/MacOS/Electron'
  ],
  win32: [
    'C:/Program Files/Microsoft VS Code/bin/code.cmd',
    'C:/Program Files (x86)/Microsoft VS Code/bin/code.cmd',
    atHomeDir('AppData/Local/Code/bin/code.cmd')
  ]
});

var open = __webpack_require__(1).detectAndOpenFactory(detect, settings);

module.exports = {
  settings: settings,
  detect: detect,
  open: open
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var settings = {
  pattern: '{filename}:{line}:{column}'
};

var detect = __webpack_require__(2).lazy('Sublime Text', ['subl'], '-h', {
  darwin: [
    '/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl'
  ],
  win32: [
    'C:/Program Files/Sublime Text/subl.exe',
    'C:/Program Files/Sublime Text 2/subl.exe',
    'C:/Program Files/Sublime Text 3/subl.exe',
    'C:/Program Files (x86)/Sublime Text/subl.exe',
    'C:/Program Files (x86)/Sublime Text 2/subl.exe',
    'C:/Program Files (x86)/Sublime Text 3/subl.exe'
  ]
});

var open = __webpack_require__(1).detectAndOpenFactory(detect, settings);

module.exports = {
  settings: settings,
  detect: detect,
  open: open
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var jetbrainsEditor = __webpack_require__(4);

module.exports = jetbrainsEditor({
  name: 'WebStorm IDE',
  appFolder: 'WebStorm',
  executable: 'webstorm'
});


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var jetbrainsEditor = __webpack_require__(4);

module.exports = jetbrainsEditor({
  name: 'PhpStorm IDE',
  appFolder: 'PhpStorm',
  executable: 'phpstorm'
});


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var jetbrainsEditor = __webpack_require__(4);

module.exports = jetbrainsEditor({
  name: 'IDEA 14 CE',
  appFolder: 'IntelliJ IDEA 14 CE',
  executable: 'idea'
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var runInTerminal = __webpack_require__(8);

var settings = {
  patternOnly: true,
  escapeQuotes: true,
  pattern: runInTerminal('vim {filename} \\"+call cursor({line}, {column})\\"')
};

var detect = __webpack_require__(2).platformSupport(['darwin'], 'vim');
var open = __webpack_require__(1).detectAndOpenFactory(detect, settings);

module.exports = {
  settings: settings,
  detect: detect,
  open: open
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(3);
var helperPath = path.resolve(__dirname, 'visualstudio.vbs');

var settings = {
  pattern: '{filename} {line} {column}'
};

var detect = __webpack_require__(2).platformSupport(['win32'], 'Visual Studio', helperPath);
var open = __webpack_require__(1).detectAndOpenFactory(detect, settings);

module.exports = {
  settings: settings,
  detect: detect,
  open: open
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var runInTerminal = __webpack_require__(8);

var settings = {
  patternOnly: true,
  escapeQuotes: true,
  pattern: runInTerminal('emacs --no-splash \\"+{line}:{column}\\" {filename}')
};

var detect = __webpack_require__(2).platformSupport(['darwin'], 'vim');
var open = __webpack_require__(1).detectAndOpenFactory(detect, settings);

module.exports = {
  settings: settings,
  detect: detect,
  open: open
};


/***/ })
/******/ ])));