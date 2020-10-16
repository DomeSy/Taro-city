import * as d from '../../declarations';
export declare function crawlAnchorsForNextUrls(prerenderConfig: d.PrerenderConfig, diagnostics: d.Diagnostic[], baseUrl: URL, currentUrl: URL, parsedAnchors: d.HydrateAnchorElement[]): string[];
export declare function standardNormalizeHref(prerenderConfig: d.PrerenderConfig, diagnostics: d.Diagnostic[], url: URL): string;
