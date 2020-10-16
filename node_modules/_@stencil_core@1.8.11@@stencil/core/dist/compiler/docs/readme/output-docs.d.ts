import * as d from '../../../declarations';
export declare function generateReadme(config: d.Config, compilerCtx: d.CompilerCtx, readmeOutputs: d.OutputTargetDocsReadme[], docsData: d.JsonDocsComponent, cmps: d.JsonDocsComponent[]): Promise<void>;
export declare function generateMarkdown(config: d.Config, userContent: string, cmp: d.JsonDocsComponent, cmps: d.JsonDocsComponent[], footer: string): string;
