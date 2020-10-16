import * as d from '../declarations';
import * as puppeteer from 'puppeteer';
export declare class Testing implements d.Testing {
    isValid: boolean;
    compiler: d.Compiler;
    config: d.Config;
    devServer: d.DevServer;
    puppeteerBrowser: puppeteer.Browser;
    constructor(config: d.Config);
    runTests(): Promise<boolean>;
    destroy(): Promise<void>;
}
