import * as d from '../../declarations';
import ts from 'typescript';
export declare const updateComponentClass: (transformOpts: d.TransformOptions, classNode: ts.ClassDeclaration, heritageClauses: ts.NodeArray<ts.HeritageClause> | ts.HeritageClause[], members: ts.ClassElement[]) => ts.VariableStatement | ts.ClassDeclaration;
