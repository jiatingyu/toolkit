import Dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
export declare const format: (date: Date | string | number, layout?: string) => string;
export declare const diff: (date1: Date | string | number, date2: Date | string | number) => duration.Duration;
export { Dayjs };
