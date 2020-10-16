import * as d from '../../declarations';
/**
 * Mainly used as the typescript preprocessor for unit tests
 */
export declare const transpileModule: (config: d.Config, input: string, transformOpts: d.TransformOptions, sourceFilePath?: string) => d.TranspileResults;
