import * as d from '../../declarations';
export declare const generateBuildStats: (config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, buildResults: d.BuildResults) => Promise<void>;
export declare const generateStatsOutputTarget: (config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, buildResults: d.BuildResults, outputTarget: d.OutputTargetStats) => Promise<void>;
