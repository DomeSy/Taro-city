import * as d from '../../../declarations';
import ts from 'typescript';
export declare const transformToLazyComponentText: (compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, transformOpts: d.TransformOptions, cmp: d.ComponentCompilerMeta, inputText: string) => string;
export declare const lazyComponentTransform: (compilerCtx: d.CompilerCtx, transformOpts: d.TransformOptions) => ts.TransformerFactory<ts.SourceFile>;
