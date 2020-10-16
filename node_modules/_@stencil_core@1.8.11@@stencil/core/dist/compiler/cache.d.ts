import * as d from '../declarations';
export declare class Cache implements d.Cache {
    private config;
    private cacheFs;
    private failed;
    private skip;
    private sys;
    private path;
    private logger;
    constructor(config: d.Config, cacheFs: d.InMemoryFileSystem);
    initCacheDir(): Promise<void>;
    get(key: string): Promise<string>;
    put(key: string, value: string): Promise<boolean>;
    has(key: string): Promise<boolean>;
    createKey(domain: string, ...args: any[]): Promise<string>;
    commit(): Promise<void>;
    clear(): void;
    clearExpiredCache(): Promise<void>;
    clearDiskCache(): Promise<void>;
    private getCacheFilePath;
    getMemoryStats(): string;
}
