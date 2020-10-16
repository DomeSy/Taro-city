import * as d from '../../../declarations';
import ts from 'typescript';
export declare const convertStaticToMeta: (config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, typeChecker: ts.TypeChecker, collection: d.CollectionCompilerMeta, transformOpts: d.TransformOptions) => ts.TransformerFactory<ts.SourceFile>;
