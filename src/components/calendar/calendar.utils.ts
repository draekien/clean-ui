import { Day, Month, StartOfWeek } from './calendar';

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

export const isDateSelected = (date: Date, selected: Date[]) => {
  return (
    selected.some((selectedDate) => date.toISOString() === selectedDate.toISOString()) ||
    false
  );
};

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

export const getDateStrings = (dates?: Date[]) =>
  dates
    ? dates.map((d) => [d.getDate(), d.getMonth(), d.getFullYear()].join()).join()
    : '';

export const addOrRemoveSelectedDate = (date: Date, dates: Date[]) => {
  const newDates = [...dates];
  const index = newDates.findIndex((newDate) => +newDate === +date);
  if (index > -1) newDates.splice(index, 1);
  else newDates.push(date);
  return sortDates(newDates);
};

export const getDaysOfTheMonth = (date: Date, startOfWeek: StartOfWeek) => {
  const getFirstDateOfMonth = () => new Date(date.getFullYear(), date.getMonth(), 1);
  const getLastDateOfMonth = () => new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const getFirstDayOfMonth = () => {
    let firstDayOfMonth = getFirstDateOfMonth().getDay();
    if (startOfWeek === 'Monday') firstDayOfMonth -= 1;
    if (firstDayOfMonth === -1) firstDayOfMonth = 6;
    return firstDayOfMonth;
  };

  const getLastDayOfMonth = () => {
    let lastDayOfMonth = getLastDateOfMonth().getDay();
    if (startOfWeek === 'Monday') lastDayOfMonth -= 1;
    if (lastDayOfMonth === -1) lastDayOfMonth = 6;
    return lastDayOfMonth;
  };

  const days: Date[] = [];

  for (let i = getFirstDayOfMonth(); i > 0; i--) {
    const newDate = getFirstDateOfMonth();
    newDate.setDate(newDate.getDate() - i);
    days.push(resetHours(newDate));
  }

  for (
    let i = getFirstDateOfMonth();
    i <= getLastDateOfMonth();
    i.setDate(i.getDate() + 1)
  ) {
    days.push(resetHours(new Date(i)));
  }

  for (let i = 1; i <= 6 - getLastDayOfMonth(); i++) {
    const newDate = getLastDateOfMonth();
    newDate.setDate(newDate.getDate() + i);
    days.push(resetHours(newDate));
  }

  return days;
};

export const getDaysOfTheWeek = (start: StartOfWeek) => {
  const daysOfTheWeek: Day[] = [
    { longLabel: 'Monday', shortLabel: 'M' },
    { longLabel: 'Tuesday', shortLabel: 'T' },
    { longLabel: 'Wednesday', shortLabel: 'W' },
    { longLabel: 'Thursday', shortLabel: 'T' },
    { longLabel: 'Friday', shortLabel: 'F' },
    { longLabel: 'Saturday', shortLabel: 'S' },
  ];

  const sunday: Day = { longLabel: 'Sunday', shortLabel: 'S' };

  if (start === 'Sunday') return [sunday, ...daysOfTheWeek];

  daysOfTheWeek.push(sunday);
  return daysOfTheWeek;
};
