import * as d from '../../../declarations';
import ts from 'typescript';
export declare const parseImport: (config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, moduleFile: d.Module, dirPath: string, importNode: ts.ImportDeclaration) => ts.ImportDeclaration;
