import * as d from '../../../declarations';
import ts from 'typescript';
export declare const transformToNativeComponentText: (compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, cmp: d.ComponentCompilerMeta, inputJsText: string) => string;
export declare const nativeComponentTransform: (compilerCtx: d.CompilerCtx, transformOpts: d.TransformOptions) => ts.TransformerFactory<ts.SourceFile>;
