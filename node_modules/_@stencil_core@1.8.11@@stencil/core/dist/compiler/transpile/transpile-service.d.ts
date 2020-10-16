import * as d from '../../declarations';
export declare const transpileService: (config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx) => Promise<boolean>;
export declare const isFileIncludePath: (config: d.Config, readPath: string) => boolean;
