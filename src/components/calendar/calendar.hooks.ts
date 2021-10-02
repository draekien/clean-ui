import { CalendarSelectMode, Day, FocusedDate, StartOfWeek } from './calendar';
import {
  getLastDate,
  resetHours,
  resetHoursInDateArray,
  sortDates,
} from './calendar.utils';

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
  month: month || (selected.length && getLastDate(selected)) || new Date(),
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

export const mapVariantToSelectionAction = (
  variant: CalendarSelectMode
): ActiveDatesReducerActionType => {
  switch (variant) {
    case 'Multiple':
      return 'SELECT_MULTIPLE';
    case 'Range':
      return 'SELECT_RANGE';
    case 'Single':
      return 'SELECT_SINGLE';
  }
};

type ActiveDatesReducerActionType =
  | 'SELECT_SINGLE'
  | 'SELECT_MULTIPLE'
  | 'SELECT_RANGE'
  | 'HOVER'
  | 'CHANGE_MONTH';

interface ActiveDatesReducerAction {
  type: ActiveDatesReducerActionType;
  value: Date;
}

export const activeDatesReducer = (
  state: ActiveDates,
  action: ActiveDatesReducerAction
) => {
  switch (action.type) {
    case 'SELECT_SINGLE':
      return {
        ...state,
        selected: state.selected[0] === action.value ? [] : [action.value],
      };
    case 'SELECT_MULTIPLE': {
      const newDates = [...state.selected];
      const index = newDates.findIndex((date) => +date === +action.value);

      if (index > -1) newDates.splice(index, 1);
      else newDates.push(action.value);

      return { ...state, selected: sortDates(newDates) };
    }
    case 'SELECT_RANGE': {
      return state.focused === 'start_date'
        ? {
            ...state,
            selected: [action.value],
            focused: 'end_date' as FocusedDate,
          }
        : {
            ...state,
            selected: sortDates([...state.selected, action.value]),
            focused: 'start_date' as FocusedDate,
          };
    }
    case 'HOVER':
      return {
        ...state,
        hovered: action.value,
      };
    case 'CHANGE_MONTH':
      return {
        ...state,
        month: action.value,
      };
  }
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
