import * as d from '../declarations';
export declare class TestingLogger implements d.Logger {
    enable: boolean;
    level: string;
    info(...msg: any[]): void;
    warn(...msg: any[]): void;
    error(...msg: any[]): void;
    debug(...msg: any[]): void;
    color(_msg: string, _color: 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'gray'): void;
    red(msg: string): string;
    green(msg: string): string;
    yellow(msg: string): string;
    blue(msg: string): string;
    magenta(msg: string): string;
    cyan(msg: string): string;
    gray(msg: string): string;
    bold(msg: string): string;
    dim(msg: string): string;
    createTimeSpan(_startMsg: string, _debug?: boolean): d.LoggerTimeSpan;
    printDiagnostics(_diagnostics: d.Diagnostic[]): void;
    buildLogFilePath: string;
    writeLogs(_: boolean): void;
}
