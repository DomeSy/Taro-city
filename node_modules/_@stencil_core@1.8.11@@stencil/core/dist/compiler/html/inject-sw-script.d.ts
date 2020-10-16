import * as d from '../../declarations';
export declare function updateIndexHtmlServiceWorker(config: d.Config, buildCtx: d.BuildCtx, doc: Document, outputTarget: d.OutputTargetWww): Promise<void>;
export declare function injectRegisterServiceWorker(config: d.Config, buildCtx: d.BuildCtx, outputTarget: d.OutputTargetWww, doc: Document): Promise<void>;
export declare function injectUnregisterServiceWorker(doc: Document): void;
