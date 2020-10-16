import * as d from '../../../declarations';
export declare const parseCollectionManifest: (config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, collectionName: string, collectionDir: string, collectionJsonStr: string) => d.CollectionCompilerMeta;
export declare const parseCollectionDependencies: (collectionManifest: d.CollectionManifest) => string[];
export declare const parseGlobal: (config: d.Config, compilerCtx: d.CompilerCtx, collectionDir: string, collectionManifest: d.CollectionManifest) => d.Module;
export declare const parseBundles: (collectionManifest: d.CollectionManifest) => {
    components: string[];
}[];
