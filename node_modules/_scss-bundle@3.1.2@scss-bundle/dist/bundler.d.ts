import { BundleResult, FileRegistry } from "./contracts";
export declare class Bundler {
    private fileRegistry;
    private readonly projectDirectory?;
    private usedImports;
    private importsByFile;
    constructor(fileRegistry?: FileRegistry, projectDirectory?: string | undefined);
    bundle(file: string, dedupeGlobs?: string[], includePaths?: string[], ignoredImports?: string[]): Promise<BundleResult>;
    private isExtensionExists;
    private _bundle;
    private replaceLastOccurance;
    private removeImportsFromComments;
    private resolveImport;
    private globFilesOrEmpty;
}
