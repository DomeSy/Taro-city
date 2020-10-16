import * as d from '../../declarations';
export declare function generateLazyLoadedApp(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, outputTargets: d.OutputTargetDistLazy[]): Promise<void>;
export declare function canSkipLazyBuild(buildCtx: d.BuildCtx): boolean;
