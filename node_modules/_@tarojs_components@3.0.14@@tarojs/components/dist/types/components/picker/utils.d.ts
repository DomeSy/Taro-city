export declare const hoursRange: string[];
export declare const minutesRange: string[];
/**
 * 校验传入的 value 是否合法
 */
export declare function verifyValue(value: number, range: any[]): boolean;
/**
 * 检验传入的 time value 是否合法
 */
export declare function verifyTime(value: string): boolean;
/**
 * 比较时间
 * return t1 <= t2
 */
export declare function compareTime(t1: string, t2: string): boolean;
/**
 * 校验日期合法性，返回合法性和日期数组
 */
export declare function verifyDate(dateStr: string): false | Date;
export declare function formatValue(value: number | number[] | string): string | number | string[];
/**
 * 获取年份区间数组
 */
export declare function getYearRange(start: number, end: number): number[];
/**
 * 获取月份区间数组
 */
export declare function getMonthRange(start: Date, end: Date, year: number): number[];
/**
 * 获取日期区间数组
 */
export declare function getDayRange(start: Date, end: Date, year: number, month: number): number[];
