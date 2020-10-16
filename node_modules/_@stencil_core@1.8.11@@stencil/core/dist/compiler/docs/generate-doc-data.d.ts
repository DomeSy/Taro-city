import * as d from '../../declarations';
export declare function generateDocData(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx): Promise<d.JsonDocs>;
export declare function getNameText(name: string, tags: d.JsonDocsTag[]): string[][];
