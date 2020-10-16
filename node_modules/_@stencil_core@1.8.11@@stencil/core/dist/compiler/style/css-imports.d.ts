import * as d from '../../declarations';
export declare function parseCssImports(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, srcFilePath: string, resolvedFilePath: string, styleText: string, styleDocs?: d.StyleDoc[]): Promise<string>;
export declare function getCssImports(config: d.Config, buildCtx: d.BuildCtx, filePath: string, styleText: string): d.CssImportData[];
export declare function isCssNodeModule(url: string): boolean;
export declare function resolveCssNodeModule(config: d.Config, diagnostics: d.Diagnostic[], filePath: string, cssImportData: d.CssImportData): void;
export declare function isLocalCssImport(srcImport: string): boolean;
export declare function replaceNodeModuleUrl(config: d.Config, baseCssFilePath: string, moduleId: string, nodeModulePath: string, url: string): string;
export declare function getModuleId(orgImport: string): string;
export declare function replaceImportDeclarations(styleText: string, cssImports: d.CssImportData[], isCssEntry: boolean): string;
