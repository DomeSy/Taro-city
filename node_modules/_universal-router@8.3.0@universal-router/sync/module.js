/*! Universal Router | MIT License | https://www.kriasoft.com/universal-router/ */

import pathToRegexp from 'path-to-regexp';

var hasOwnProperty = Object.prototype.hasOwnProperty;
var cache = new Map();

function decodeParam(val) {
  try {
    return decodeURIComponent(val);
  } catch (err) {
    return val;
  }
}

function matchPath(route, pathname, parentKeys, parentParams) {
  var end = !route.children;
  var cacheKey = (route.path || '') + "|" + end;
  var regexp = cache.get(cacheKey);

  if (!regexp) {
    var keys = [];
    regexp = {
      keys: keys,
      pattern: pathToRegexp(route.path || '', keys, {
        end: end
      })
    };
    cache.set(cacheKey, regexp);
  }

  var m = regexp.pattern.exec(pathname);

  if (!m) {
    return null;
  }

  var path = m[0];
  var params = Object.assign({}, parentParams);

  for (var i = 1; i < m.length; i++) {
    var key = regexp.keys[i - 1];
    var prop = key.name;
    var value = m[i];

    if (value !== undefined || !hasOwnProperty.call(params, prop)) {
      if (key.repeat) {
        params[prop] = value ? value.split(key.delimiter).map(decodeParam) : [];
      } else {
        params[prop] = value ? decodeParam(value) : value;
      }
    }
  }

  return {
    path: !end && path.charAt(path.length - 1) === '/' ? path.substr(1) : path,
    keys: parentKeys.concat(regexp.keys),
    params: params
  };
}

function matchRoute(route, baseUrl, pathname, parentKeys, parentParams) {
  var match;
  var childMatches;
  var childIndex = 0;
  return {
    next: function next(routeToSkip) {
      if (route === routeToSkip) {
        return {
          done: true
        };
      }

      if (!match) {
        match = matchPath(route, pathname, parentKeys, parentParams);

        if (match) {
          return {
            done: false,
            value: {
              route: route,
              baseUrl: baseUrl,
              path: match.path,
              keys: match.keys,
              params: match.params
            }
          };
        }
      }

      if (match && route.children) {
        while (childIndex < route.children.length) {
          if (!childMatches) {
            var childRoute = route.children[childIndex];
            childRoute.parent = route;
            childMatches = matchRoute(childRoute, baseUrl + match.path, pathname.substr(match.path.length), match.keys, match.params);
          }

          var childMatch = childMatches.next(routeToSkip);

          if (!childMatch.done) {
            return {
              done: false,
              value: childMatch.value
            };
          }

          childMatches = null;
          childIndex++;
        }
      }

      return {
        done: true
      };
    }
  };
}

function resolveRoute(context, params) {
  if (typeof context.route.action === 'function') {
    return context.route.action(context, params);
  }

  return undefined;
}

function isChildRoute(parentRoute, childRoute) {
  var route = childRoute;

  while (route) {
    route = route.parent;

    if (route === parentRoute) {
      return true;
    }
  }

  return false;
}

var UniversalRouterSync = function () {
  function UniversalRouterSync(routes, options) {
    if (options === void 0) {
      options = {};
    }

    if (!routes || typeof routes !== 'object') {
      throw new TypeError('Invalid routes');
    }

    this.baseUrl = options.baseUrl || '';
    this.errorHandler = options.errorHandler;
    this.resolveRoute = options.resolveRoute || resolveRoute;
    this.context = Object.assign({
      router: this
    }, options.context);
    this.root = Array.isArray(routes) ? {
      path: '',
      children: routes,
      parent: null
    } : routes;
    this.root.parent = null;
  }

  var _proto = UniversalRouterSync.prototype;

  _proto.resolve = function resolve(pathnameOrContext) {
    var context = Object.assign({}, this.context, {}, typeof pathnameOrContext === 'string' ? {
      pathname: pathnameOrContext
    } : pathnameOrContext);
    var match = matchRoute(this.root, this.baseUrl, context.pathname.substr(this.baseUrl.length), [], null);
    var resolve = this.resolveRoute;
    var matches = null;
    var nextMatches = null;
    var currentContext = context;

    function next(resume, parent, prevResult) {
      if (parent === void 0) {
        parent = matches.value.route;
      }

      var routeToSkip = prevResult === null && !matches.done && matches.value.route;
      matches = nextMatches || match.next(routeToSkip);
      nextMatches = null;

      if (!resume) {
        if (matches.done || !isChildRoute(parent, matches.value.route)) {
          nextMatches = matches;
          return null;
        }
      }

      if (matches.done) {
        var error = new Error('Route not found');
        error.status = 404;
        throw error;
      }

      currentContext = Object.assign({}, context, {}, matches.value);
      var result = resolve(currentContext, matches.value.params);

      if (result !== null && result !== undefined) {
        return result;
      }

      return next(resume, parent, result);
    }

    context.next = next;

    try {
      return next(true, this.root);
    } catch (error) {
      if (this.errorHandler) {
        return this.errorHandler(error, currentContext);
      }

      throw error;
    }
  };

  return UniversalRouterSync;
}();

UniversalRouterSync.pathToRegexp = pathToRegexp;

export default UniversalRouterSync;
//# sourceMappingURL=module.js.map
