import * as d from '../../declarations';
export declare function validatePackageJson(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx): Promise<void>;
export declare function validatePackageFiles(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, outputTarget: d.OutputTargetDistCollection): Promise<void>;
export declare function validateMain(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, outputTarget: d.OutputTargetDistCollection): void;
export declare function validateModule(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, outputTarget: d.OutputTargetDistCollection): void;
export declare function validateTypes(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, outputTarget: d.OutputTargetDistTypes): Promise<void>;
export declare function validateCollection(config: d.Config, compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx, outputTarget: d.OutputTargetDistCollection): void;
export declare function validateBrowser(compilerCtx: d.CompilerCtx, buildCtx: d.BuildCtx): void;
export declare function getRecommendedTypesPath(config: d.Config, outputTarget: d.OutputTargetDistTypes): string;
