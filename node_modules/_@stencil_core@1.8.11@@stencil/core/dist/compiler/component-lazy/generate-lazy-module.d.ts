import * as d from '../../declarations';
export declare function generateLazyModules(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, destinations: string[], rollupResults: d.RollupResult[], sourceTarget: d.SourceTarget, isBrowserBuild: boolean, sufix: string): Promise<d.BundleModule[]>;
export declare function sortBundleModules(a: d.BundleModule, b: d.BundleModule): 1 | 0 | -1;
export declare function sortBundleComponents(a: d.ComponentCompilerMeta, b: d.ComponentCompilerMeta): 1 | 0 | -1;
