import * as d from '../../../declarations';
export declare function usageToMarkdown(usages: d.JsonDocsUsage): string[];
export declare function mergeUsages(usages: d.JsonDocsUsage): {
    name: string;
    text: string;
}[];
