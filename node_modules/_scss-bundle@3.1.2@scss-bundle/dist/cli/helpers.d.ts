export declare function resolveBoolean(value: string): boolean | undefined;
export declare function resolveList(value: string): string[] | undefined;
export declare function resolvePath(value: string): string;
export declare function resolveLogLevelKey(value: string): string | undefined;
export declare function mergeObjects<TAObject extends object, TBObject extends object>(a: TAObject, b: TBObject): TAObject & TBObject;
