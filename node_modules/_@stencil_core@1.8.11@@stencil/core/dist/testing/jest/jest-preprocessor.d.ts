export declare const jestPreprocessor: {
    process(sourceText: string, filePath: string, jestConfig: {
        rootDir: string;
    }): string;
    getCompilerOptions(rootDir: string): any;
    getCacheKey(code: string, filePath: string, jestConfigStr: string, transformOptions: {
        instrument: boolean;
        rootDir: string;
    }): string;
};
