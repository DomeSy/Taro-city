import * as d from '../../declarations';
export declare function outputApp(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, _webComponentsModule: string): Promise<void>;
export declare function generateNativeApp(config: d.Config, compilerCtx: d.CompilerCtx, cmps: d.ComponentCompilerMeta[]): Promise<void>;
export declare const MIN_FOR_LAZY_LOAD = 6;
