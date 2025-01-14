import dayjs, { Dayjs } from 'dayjs';
import duration from 'dayjs/plugin/duration';
export declare function formatToDateTime(date?: dayjs.Dayjs | Date | string | number | undefined, format?: string): string;
export declare function formatToDate(date?: Date | Dayjs | string | number | undefined, format?: string): string;
/** 获取减去后的时间，输入数量和单位 */
export declare function subtractDate(num: number, unit?: 'hour' | 'minute' | 'second' | 'day' | 'month' | 'year'): dayjs.Dayjs;
/** 计算两个日期中间的差值 */
export declare const diff: (date1: Date | string | number, date2: Date | string | number) => duration.Duration;
export { dayjs };
