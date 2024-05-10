import { date } from "quasar";

export const getRangeDate = (start, end) => {
  return (date) => {
    const _date = new Date(date).getTime();
    const _start = new Date(start).getTime();
    const _end = new Date(end).getTime();
    if (start && end) return _date >= _start && _date <= _end;
    if (start) return _date >= _start;
    if (end) return _date <= _end;
    return true;
  };
};

export const formatDate = (time, formatString = "YYYY/MM/DD") => {
  return date.formatDate(time, formatString);
};
