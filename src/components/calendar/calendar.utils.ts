import { Month } from './calendar';

export const months: Month[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const subtractMonth = (date: Date) => {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() - 1);
  return newDate;
};

export const addMonth = (date: Date) => {
  const newDate = new Date(date);
  newDate.setMonth(date.getMonth() + 1);
  return newDate;
};

export const getMonth = (date: Date) => months[date.getMonth()];

export const resetHours = (date: Date) => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

export const resetHoursInDateArray = (dates: Date[]) => {
  const newDates: Date[] = [];
  dates.forEach((date) => newDates.push(resetHours(date)));
  return newDates;
};

export const isDateSelected = (date: Date, selected: Date[]) =>
  selected.some((selectedDate) => date.toISOString() === selectedDate.toISOString()) ||
  false;

export const isDateInSelectedRange = (date: Date, selected: Date[]) =>
  (selected[0] && date >= selected[0] && selected[1] && date <= selected[1]) || false;

export const isDateInHoverRange = (date: Date, selected: Date[], hovered?: Date) => {
  if (selected[0] && hovered) {
    return hovered > selected[0]
      ? date >= selected[0] && date <= hovered
      : date >= hovered && date <= selected[0];
  }
  return false;
};

export const isDateDisabled = (date: Date, min?: Date, max?: Date) =>
  (min && date < resetHours(min)) || (max && date > resetHours(max)) || false;

export const sortDates = (dates: Date[]) =>
  dates.sort((a, b) => a.getTime() - b.getTime());

export const getLastDate = (dates: Date[]) => sortDates([...dates])[dates.length - 1];
