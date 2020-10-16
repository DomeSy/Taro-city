import * as d from '../../declarations';
export declare const createCompiler: () => {
    resolveId(importee: string, importer: string): d.ResolvedStencilData;
    getLoadPath(filePath: string): string;
    transform(code: string, filePath: string, opts?: d.CompileOptions): Promise<{
        code: string;
        map: any;
        diagnostics: d.Diagnostic[];
    }>;
    writeBuild(): void;
    reset: () => void;
    getResolvedData: (id: string) => d.ResolvedStencilData;
    setResolvedData: (id: string, r: d.ResolvedStencilData) => Map<string, d.ResolvedStencilData>;
};
