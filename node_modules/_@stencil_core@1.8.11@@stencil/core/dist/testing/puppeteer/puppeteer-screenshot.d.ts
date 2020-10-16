import * as d from '../../declarations';
import * as pd from './puppeteer-declarations';
export declare function initPageScreenshot(page: pd.E2EPageInternal): void;
export declare function pageCompareScreenshot(page: pd.E2EPageInternal, env: d.E2EProcessEnv, desc: string, testPath: string, opts: d.ScreenshotOptions): Promise<d.ScreenshotDiff>;
