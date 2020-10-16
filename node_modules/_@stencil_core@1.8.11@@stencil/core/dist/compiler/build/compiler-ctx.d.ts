import * as d from '../../declarations';
import { BuildEvents } from '../events';
/**
 * The CompilerCtx is a persistent object that's reused throughout
 * all builds and rebuilds. The data within this object is used
 * for in-memory caching, and can be reset, but the object itself
 * is always the same.
 */
export declare class CompilerContext implements d.CompilerCtx {
    activeBuildId: number;
    activeFilesAdded: string[];
    activeFilesDeleted: string[];
    activeFilesUpdated: string[];
    activeDirsAdded: string[];
    activeDirsDeleted: string[];
    cache: d.Cache;
    cachedStyleMeta: Map<string, d.StyleCompiler>;
    collections: d.CollectionCompilerMeta[];
    compilerOptions: any;
    events: BuildEvents;
    fs: d.InMemoryFileSystem;
    fsWatcher: d.FsWatcher;
    hasFsWatcherEvents: boolean;
    hasLoggedServerUrl: boolean;
    hasSuccessfulBuild: boolean;
    isActivelyBuilding: boolean;
    lastBuildResults: d.BuildResults;
    lastBuildStyles: Map<string, string>;
    lastComponentStyleInput: Map<string, string>;
    moduleMap: d.ModuleMap;
    nodeMap: WeakMap<object, any>;
    resolvedCollections: Set<string>;
    rollupCacheHydrate: any;
    rollupCacheLazy: any;
    rollupCacheNative: any;
    rootTsFiles: string[];
    tsService: d.TsService;
    cachedGlobalStyle: string;
    styleModeNames: Set<string>;
    constructor(config: d.Config);
    reset(): void;
}
export declare const getModule: (config: d.Config, compilerCtx: d.CompilerCtx, sourceFilePath: string) => d.Module;
export declare const resetModule: (moduleFile: d.Module) => void;
