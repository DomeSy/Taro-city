import * as d from '../../../declarations';
import ts from 'typescript';
export declare const updateLazyComponentClass: (transformOpts: d.TransformOptions, classNode: ts.ClassDeclaration, moduleFile: d.Module, cmp: d.ComponentCompilerMeta) => ts.VariableStatement | ts.ClassDeclaration;
