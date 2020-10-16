import * as d from '../../declarations';
declare type OutputTargetEmptiable = d.OutputTargetDist | d.OutputTargetWww | d.OutputTargetDistLazyLoader | d.OutputTargetDistSelfContained | d.OutputTargetDistModule | d.OutputTargetHydrate;
export declare function isEmptable(o: d.OutputTarget): o is OutputTargetEmptiable;
export declare function emptyOutputTargets(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx): Promise<void>;
export declare function emptyDir(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, dir: string): Promise<void>;
export {};
