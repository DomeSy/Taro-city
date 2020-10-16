import * as d from '../../declarations';
export declare function optimizeModule(config: d.Config, compilerCtx: d.CompilerCtx, sourceTarget: d.SourceTarget, isCore: boolean, input: string): Promise<{
    output: string;
    sourceMap?: any;
    diagnostics?: d.Diagnostic[];
}>;
export declare const getTerserOptions: (sourceTarget: d.SourceTarget, isDebug: boolean) => any;
