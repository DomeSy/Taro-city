import * as d from '../declarations';
export declare class TestingFs implements d.FileSystem {
    data: Map<string, Data>;
    diskWrites: number;
    diskReads: number;
    access(itemPath: string): Promise<void>;
    copyFile(srcPath: string, destPath: string): Promise<void>;
    existsSync(filePath: string): boolean;
    createReadStream(_filePath: string): any;
    mkdir(dirPath: string): Promise<void>;
    mkdirSync(dirPath: string): void;
    readdir(dirPath: string): Promise<string[]>;
    readdirSync(dirPath: string): string[];
    readFile(filePath: string): Promise<string>;
    readFileSync(filePath: string): string;
    rmdir(dirPath: string): Promise<void>;
    stat(itemPath: string): Promise<d.FsStats>;
    statSync(itemPath: string): d.FsStats;
    unlink(filePath: string): Promise<void>;
    writeFile(filePath: string, content: string): Promise<void>;
    writeFileSync(filePath: string, content: string): void;
    writeFiles(files: {
        [filePath: string]: string;
    }): Promise<void[]>;
}
interface Data {
    isFile: boolean;
    isDirectory: boolean;
    content?: string;
}
export {};
