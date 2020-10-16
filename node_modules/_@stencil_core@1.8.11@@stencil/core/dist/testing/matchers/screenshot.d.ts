import * as d from '../../declarations';
export declare function toMatchScreenshot(compare: d.ScreenshotDiff, opts?: d.MatchScreenshotOptions): {
    message: () => string;
    pass: boolean;
};
