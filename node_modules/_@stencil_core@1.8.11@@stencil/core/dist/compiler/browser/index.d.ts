import path from 'path';
export { compile } from './compile';
export { getMinifyScriptOptions } from './compile-options';
export { path };
export { stencilRollupPlugin as rollupPlugin } from '../rollup-plugins/stencil-public-plugin';
export declare const version = "0.0.0-stencil-dev";
export declare const dependencies: {
    name: string;
    version: string;
    url: string;
}[];
