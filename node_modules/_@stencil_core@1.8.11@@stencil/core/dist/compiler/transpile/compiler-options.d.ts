import * as d from '../../declarations';
import ts from 'typescript';
export declare function getUserCompilerOptions(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx): Promise<any>;
export declare const DEFAULT_COMPILER_OPTIONS: ts.CompilerOptions;
