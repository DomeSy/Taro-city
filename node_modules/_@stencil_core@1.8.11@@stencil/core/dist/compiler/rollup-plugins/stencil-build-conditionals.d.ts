import * as d from '../../declarations';
export declare function stencilBuildConditionalsPlugin(build: d.Build, namespace: string): {
    resolveId(id: string): {
        id: string;
    };
    load(id: string): string;
};
