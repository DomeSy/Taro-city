import * as d from '../../declarations';
export declare const getCompileOptions: (input: d.CompileOptions, filePath: string) => d.CompileOptions;
export declare const getTransformOptions: (compilerOpts: d.CompileOptions) => d.TransformOptions;
export declare const getCompilerConfig: () => d.Config;
export declare const getMinifyScriptOptions: (opts?: d.CompileScriptMinifyOptions) => {
    options: any;
    minifier: {
        name: string;
        version: string;
        url: string;
    };
};
