import * as d from '../../declarations';
export declare function scopeComponentCss(config: d.Config, buildCtx: d.BuildCtx, cmp: d.ComponentCompilerMeta, mode: string, cssText: string, commentOriginalSelector: boolean): Promise<string>;
export declare const getScopeId: (tagName: string, mode?: string) => string;
