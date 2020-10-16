import * as d from '../../declarations';
import ts from 'typescript';
export declare const getScriptTarget: () => ts.ScriptTarget;
export declare const isMemberPrivate: (member: ts.ClassElement) => boolean;
export declare const convertValueToLiteral: (val: any, refs?: WeakSet<any>) => ts.Identifier | ts.StringLiteral | ts.ObjectLiteralExpression | ts.ArrayLiteralExpression;
export declare const createStaticGetter: (propName: string, returnExpression: ts.Expression) => ts.GetAccessorDeclaration;
export declare const removeDecorators: (node: ts.Node, decoratorNames: Set<string>) => void;
export declare const getStaticValue: (staticMembers: ts.ClassElement[], staticName: string) => any;
export declare const arrayLiteralToArray: (arr: ts.ArrayLiteralExpression) => any[];
export declare const objectLiteralToObjectMap: (objectLiteral: ts.ObjectLiteralExpression) => ObjectMap;
export declare class ObjectMap {
    [key: string]: ts.Expression | ObjectMap;
}
export declare const getAttributeTypeInfo: (baseNode: ts.Node, sourceFile: ts.SourceFile) => d.ComponentCompilerTypeReferences;
export declare const validateReferences: (config: d.Config, diagnostics: d.Diagnostic[], references: d.ComponentCompilerTypeReferences, node: ts.Node) => void;
export declare const resolveType: (checker: ts.TypeChecker, type: ts.Type) => string;
export declare const typeToString: (checker: ts.TypeChecker, type: ts.Type) => string;
export declare const parseDocsType: (checker: ts.TypeChecker, type: ts.Type, parts: Set<string>) => void;
export declare const getModuleFromSourceFile: (compilerCtx: d.CompilerCtx, tsSourceFile: ts.SourceFile) => d.Module;
export declare const getComponentMeta: (compilerCtx: d.CompilerCtx, tsSourceFile: ts.SourceFile, node: ts.ClassDeclaration) => d.ComponentCompilerMeta;
export declare const getComponentTagName: (staticMembers: ts.ClassElement[]) => string;
export declare const isStaticGetter: (member: ts.ClassElement) => boolean;
export declare const serializeSymbol: (checker: ts.TypeChecker, symbol: ts.Symbol) => d.CompilerJsDoc;
export declare const serializeDocsSymbol: (checker: ts.TypeChecker, symbol: ts.Symbol) => string;
export declare const isInternal: (jsDocs: d.CompilerJsDoc) => boolean;
export declare const isMethod: (member: ts.ClassElement, methodName: string) => member is ts.MethodDeclaration;
export declare const isAsyncFn: (typeChecker: ts.TypeChecker, methodDeclaration: ts.MethodDeclaration) => boolean;
export interface ConvertIdentifier {
    __identifier: boolean;
    __escapedText: string;
}
