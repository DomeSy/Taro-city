import ts from 'typescript';
export declare const updateStencilCoreImports: (updatedCoreImportPath: string) => ts.TransformerFactory<ts.SourceFile>;
export declare const updateStencilCoreImport: (importNode: ts.ImportDeclaration, updatedCoreImportPath: string) => ts.ImportDeclaration;
