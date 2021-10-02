import { Day, FocusedDate, StartOfWeek } from './calendar';
import { resetHours, resetHoursInDateArray, sortDates } from './calendar.utils';

interface ActiveDates {
  selected: Date[];
  hovered?: Date;
  focused: FocusedDate;
  month: Date;
}

export const initActiveDates = ({
  selected,
  hovered,
  focused,
  month,
}: ActiveDates): ActiveDates => ({
  selected: (selected.length && resetHoursInDateArray(sortDates(selected))) || [],
  month,
  hovered,
  focused,
});

export const useWeeks = (start: StartOfWeek) => {
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

export const useMonth = (date: Date, startOfWeek: StartOfWeek) => {
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

  const daysOfTheMonth: Date[] = [];

  for (let i = getFirstDayOfMonth(); i > 0; i--) {
    const newDate = getFirstDateOfMonth();
    newDate.setDate(newDate.getDate() - i);
    daysOfTheMonth.push(resetHours(newDate));
  }

  for (
    let i = getFirstDateOfMonth();
    i <= getLastDateOfMonth();
    i.setDate(i.getDate() + 1)
  ) {
    daysOfTheMonth.push(resetHours(new Date(i)));
  }

  for (let i = 1; i <= 6 - getLastDayOfMonth(); i++) {
    const newDate = getLastDateOfMonth();
    newDate.setDate(newDate.getDate() + i);
    daysOfTheMonth.push(resetHours(newDate));
  }

  return daysOfTheMonth;
};
