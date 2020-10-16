import * as d from '../../../declarations';
export declare function generateJsonDocs(config: d.Config, compilerCtx: d.CompilerCtx, docsData: d.JsonDocs, outputTargets: d.OutputTarget[]): Promise<void>;
export declare function writeDocsOutput(compilerCtx: d.CompilerCtx, jsonOutput: d.OutputTargetDocsJson, jsonContent: string, typesContent: string): Promise<[d.FsWriteResults, any]>;
