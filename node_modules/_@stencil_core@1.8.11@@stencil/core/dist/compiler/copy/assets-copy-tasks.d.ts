import * as d from '../../declarations';
export declare function getComponentAssetsCopyTasks(config: d.Config, buildCtx: d.BuildCtx, dest: string, collectionsPath: boolean): Required<d.CopyTask>[];
export declare function canSkipAssetsCopy(config: d.Config, compilerCtx: d.CompilerCtx, entryModules: d.EntryModule[], filesChanged: string[]): boolean;
