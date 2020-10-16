import * as d from '../../declarations';
export declare function getBuildFeatures(cmps: d.ComponentCompilerMeta[]): d.BuildFeatures;
export declare function updateComponentBuildConditionals(moduleMap: d.ModuleMap, cmps: d.ComponentCompilerMeta[]): void;
export declare function updateBuildConditionals(config: d.Config, b: d.Build): void;
export declare const BUILD: d.Build;
export declare const NAMESPACE = "app";
