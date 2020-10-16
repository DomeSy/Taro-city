import * as d from '../../../declarations';
export declare class MarkdownTable {
    private rows;
    addHeader(data: string[]): void;
    addRow(data: string[], isHeader?: boolean): void;
    toMarkdown(): string[];
}
export declare function getEventDetailType(eventType: d.JsDoc): string;
export declare function getMemberDocumentation(jsDoc: d.JsDoc): string;
export declare function getPlatform(jsDoc: d.JsDoc): string;
export declare function getMemberType(jsDoc: d.JsDoc): string;
export declare function getMethodParameters({ parameters }: d.JsDoc): d.JsonDocMethodParameter[];
export declare function getMethodReturns({ returns }: d.JsDoc): d.JsonDocsMethodReturn;
