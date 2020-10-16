import * as d from '../declarations';
export declare function shuffleArray(array: any[]): any[];
export declare function expectFiles(fs: d.InMemoryFileSystem, filePaths: string[]): void;
export declare function doNotExpectFiles(fs: d.InMemoryFileSystem, filePaths: string[]): void;
export declare function wroteFile(r: d.BuildResults, p: string): boolean;
