export declare function setupMockFetch(global: any): void;
export declare function mockFetchReset(): void;
export declare const mockFetch: {
    json(data: any, url?: MockRequestInput): void;
    text(data: string, url?: MockRequestInput): void;
    response(rsp: MockResponse, url?: MockRequestInput): void;
    reject(rsp?: MockResponse, url?: MockRequestInput): void;
    reset: typeof mockFetchReset;
};
export declare class MockHeaders {
    values: Map<string, string>;
    constructor(values?: string[][]);
    serialize(): string[][];
    append(key: string, value: string): void;
    delete(key: string): void;
    get(key: string): string;
    has(key: string): boolean;
    set(key: string, value: string): void;
}
export interface MockRequest {
    headers?: MockHeaders;
    method?: string;
    referrer?: string;
    url?: string;
}
export interface MockResponse {
    headers?: MockHeaders;
    ok?: boolean;
    status?: number;
    statusText?: string;
    type?: string;
    url?: string;
    json?(): Promise<any>;
    text?(): Promise<string>;
}
export interface MockedResponseData {
    input: MockRequestInput;
    textStr: string;
    jsonStr: string;
    headers: string[][];
    status: number;
    statusText: string;
    type: string;
    reject: boolean;
}
export declare type MockRequestInput = MockRequest | string;
