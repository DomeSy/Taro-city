import * as d from '../../declarations';
export declare function outputModule(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx): Promise<void>;
export declare function generateModuleWebComponents(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, outputTargets: d.OutputTargetDistModule[]): Promise<void>;
export declare function bundleNativeModule(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, build: d.Build, externalRuntime: boolean): Promise<d.RollupResult[]>;
