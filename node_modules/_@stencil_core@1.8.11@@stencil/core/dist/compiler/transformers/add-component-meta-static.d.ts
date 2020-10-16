import * as d from '../../declarations';
import ts from 'typescript';
export declare const addComponentMetaStatic: (cmpNode: ts.ClassDeclaration, cmpMeta: d.ComponentCompilerMeta) => ts.ClassDeclaration;
export declare const getPublicCompilerMeta: (cmpMeta: d.ComponentCompilerMeta) => d.ComponentCompilerMeta;
