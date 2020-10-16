import * as d from '../../declarations';
import { Plugin } from 'rollup';
export declare function hasGlobalScriptPaths(config: d.Config, compilerCtx: d.CompilerCtx): boolean;
export declare function globalScriptsPlugin(config: d.Config, compilerCtx: d.CompilerCtx): Plugin;
