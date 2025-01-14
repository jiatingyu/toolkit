import dayjs, { Dayjs } from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import duration from 'dayjs/plugin/duration'
dayjs.extend(calendar)
dayjs.extend(duration)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
const DATE_FORMAT = 'YYYY-MM-DD'

export function formatToDateTime(
  date: dayjs.Dayjs | Date | string | number | undefined = undefined,
  format = DATE_TIME_FORMAT,
): string {
  return dayjs(date).format(format)
}

export function formatToDate(
  date: Date | Dayjs | string | number | undefined = undefined,
  format = DATE_FORMAT,
): string {
  return dayjs(date).format(format)
}

/** 获取减去后的时间，输入数量和单位 */
export function subtractDate(
  num: number,
  unit: 'hour' | 'minute' | 'second' | 'day' | 'month' | 'year' = 'day',
) {
  return dayjs().subtract(num, unit)
}

/** 计算两个日期中间的差值 */
export const diff = (
  date1: Date | string | number,
  date2: Date | string | number,
) => {
  const x = dayjs(date1)
  const y = dayjs(date2)
  return dayjs.duration(x.diff(y))
}

export { dayjs }
