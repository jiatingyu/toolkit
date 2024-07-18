import Dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import duration from "dayjs/plugin/duration";
Dayjs.extend(calendar);
Dayjs.extend(duration);

export const format = (
  date: Date | string | number,
  layout: string = "YYYY-MM-DD"
) => {
  return Dayjs(date).format(layout);
};


export const diff = (
  date1: Date | string | number,
  date2: Date | string | number,
) => {
  let x = Dayjs(date1)
  let y = Dayjs(date2)
  return  Dayjs.duration(x.diff(y))
};

export { Dayjs };
