import { useState, useEffect } from 'react';
import { CalendarSelectMode, FocusedDate } from './calendar';
import {
  getDateStrings,
  getLastDate,
  resetHoursInDateArray,
  sortDates,
} from './calendar.utils';

export interface UseCalendarProps {
  value: Date[];
  hovered?: Date;
  focused: FocusedDate;
  month: Date;
  variant: CalendarSelectMode;
}

export const useCalendar = (props: UseCalendarProps) => {
  const [selected, setSelected] = useState<Date[]>(props.value);
  const [hovered, setHovered] = useState<Date | undefined>(props.hovered);
  const [focused, setFocused] = useState<FocusedDate>(props.focused);
  const [month, setMonth] = useState<Date>(props.month);

  useEffect(() => {
    setSelected(
      (props.value.length && resetHoursInDateArray(sortDates(props.value))) || []
    );
    setMonth(
      props.month || (props.value.length && getLastDate(props.value)) || new Date()
    );

    if (props.variant === 'Range' && props.value.length) {
      setFocused(props.value.length === 1 ? 'end_date' : 'start_date');
    }
  }, [getDateStrings(props.value)]);

  return {
    selected,
    setSelected,
    hovered,
    setHovered,
    focused,
    setFocused,
    month,
    setMonth,
  };
};
