import * as d from '../../declarations';
export declare function getComponentStylesCache(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, cmp: d.ComponentCompilerMeta, styleMeta: d.StyleCompiler, commentOriginalSelector: boolean): Promise<d.StyleCompiler>;
export declare function isChangedStyleEntryFile(buildCtx: d.BuildCtx, styleMeta: d.StyleCompiler): boolean;
export declare function setComponentStylesCache(compilerCtx: d.CompilerCtx, cmp: d.ComponentCompilerMeta, styleMeta: d.StyleCompiler): void;
export declare function updateLastStyleComponetInputs(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx): Promise<void>;
