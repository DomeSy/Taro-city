import * as d from '../../declarations';
export declare function updateStencilTypesImports(path: d.Path, typesDir: string, dtsFilePath: string, dtsContent: string): string;
export declare function copyStencilCoreDts(config: d.Config, compilerCtx: d.CompilerCtx): Promise<d.FsWriteResults[]>;
