import * as d from '../../declarations';
export declare function computeUsedComponents(config: d.Config, defaultBundles: d.ComponentCompilerMeta[][], allCmps: d.ComponentCompilerMeta[]): Set<string>;
export declare function generateComponentBundles(config: d.Config, buildCtx: d.BuildCtx): d.ComponentCompilerMeta[][];
