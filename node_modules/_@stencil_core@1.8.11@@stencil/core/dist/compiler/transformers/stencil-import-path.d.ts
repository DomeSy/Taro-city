import * as d from '../../declarations';
export declare const createStencilImportPath: (type: d.StencilDataType, tagName: string, encapsulation: string, modeName: string, importPath: string) => string;
export declare const parseStencilImportPath: (importee: string, importer: string) => d.ResolvedStencilData;
