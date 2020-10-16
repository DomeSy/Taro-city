"use strict";

exports.__esModule = true;
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _csso = _interopRequireDefault(require("csso"));

var _RawSource = _interopRequireDefault(require("webpack-sources/lib/RawSource"));

var _SourceMapSource = _interopRequireDefault(require("webpack-sources/lib/SourceMapSource"));

var _sourceMap = require("source-map");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const filterDefault = file => file.endsWith('.css');

const createRegexpFilter = regex => str => regex.test(str);

const isFilterType = inst => typeof inst === 'function' || inst instanceof RegExp;

const getOutputAssetFilename = postfix => file => {
  const parsed = _path.default.parse(file);

  parsed.ext = `.${postfix}${parsed.ext}`;
  parsed.base = `${parsed.name}${parsed.ext}`;
  return _path.default.format(parsed);
};
/*
    New webpack 4 API,
    for webpack 2-3 compatibility used .plugin('...', cb)
 */


const unCamelCase = str => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

const pluginCompatibility = (caller, hook, tapAction, cb) => caller.hooks ? caller.hooks[hook][tapAction]('csso-webpack-plugin', cb) : caller.plugin(unCamelCase(hook), cb);

class CssoWebpackPlugin {
  constructor(opts, filter) {
    this.options = opts;
    this.filter = filter;
    this.pluginOutputPostfix = null;

    if (isFilterType(opts) && filter === undefined) {
      this.filter = opts;
      this.options = undefined;
    }

    if (this.filter === undefined) {
      this.filter = filterDefault;
    }

    if (this.filter instanceof RegExp) {
      this.filter = createRegexpFilter(this.filter);
    }

    if (typeof this.filter !== 'function') {
      throw new Error('filter should be one of these types: function, regexp, undefined');
    }

    const _ref = this.options || {},
          {
      pluginOutputPostfix
    } = _ref,
          options = _objectWithoutPropertiesLoose(_ref, ["pluginOutputPostfix"]);

    if (pluginOutputPostfix) {
      this.pluginOutputPostfix = typeof pluginOutputPostfix === 'function' ? pluginOutputPostfix : getOutputAssetFilename(pluginOutputPostfix);
    }

    this.options = options;
  }

  apply(compiler) {
    pluginCompatibility(compiler, 'compilation', 'tap', compilation => {
      const options = this.options;
      const {
        pluginOutputPostfix
      } = this;

      const doChunks = async chunks => Promise.all(chunks.map(chunk => Promise.all(chunk.files.map(async file => {
        try {
          if (!this.filter(file)) {
            return;
          }

          let source;
          let sourceMap;
          const asset = compilation.assets[file];

          if (asset.sourceAndMap) {
            const sourceAndMap = asset.sourceAndMap();
            sourceMap = sourceAndMap.map;
            source = sourceAndMap.source;
          } else {
            sourceMap = asset.map();
            source = asset.source();
          }

          if (Buffer.isBuffer(source)) {
            source = source.toString('utf-8');
          }

          if (options.sourceMap !== undefined) {
            compilation.warnings.push(new Error('CssoWebpackPlugin: ' + '“sourceMap” option is DEPRECATED. ' + 'Use webpack “devtool” instead.\n\tFor more info about the usage see ' + 'https://github.com/zoobestik/csso-webpack-plugin/releases/tag/v1.0.0-beta.8'));
          }

          let fileOutput = file;

          if (pluginOutputPostfix) {
            fileOutput = pluginOutputPostfix(file);
          }

          let {
            css,
            map
          } = _csso.default.minify(source, Object.assign({}, options, {
            filename: fileOutput,
            sourceMap: Boolean(compiler.options.devtool)
          }));

          if (map && sourceMap) {
            const consumerMap = await new _sourceMap.SourceMapConsumer(sourceMap);
            map.applySourceMap(consumerMap, fileOutput);
          }

          if (!map) {
            map = sourceMap;
          }

          compilation.assets[fileOutput] = map ? new _SourceMapSource.default(css, fileOutput, map.toJSON ? map.toJSON() : map) : new _RawSource.default(css);
        } catch (err) {
          const prefix = `${file} from CssoWebpackPlugin\n`;
          const {
            message,
            parseError,
            stack
          } = err;
          let error = `${message} ${stack}`;

          if (parseError) {
            error = `${message} [${file}:${parseError.line}:${parseError.column}]`;
          }

          compilation.errors.push(new Error(`${prefix}${error}`));
        }
      }))));

      pluginCompatibility(compilation, 'optimizeChunkAssets', 'tapAsync', (chunks, done) => {
        doChunks(chunks)
        /*  it's important not to pass any args inside `done`
            NOT: .then(done), ONLY: .then(() => done()) */
        .then(() => done());
      });
    });
  }

}

exports.default = CssoWebpackPlugin;