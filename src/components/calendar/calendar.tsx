/** @jsxImportSource theme-ui */
import { Flex } from '@theme-ui/components';
import React, { useReducer } from 'react';
import { Button } from '../button/button';
import { Tooltip } from '../tooltip/tooltip';
import {
  activeDatesReducer,
  initActiveDates,
  mapVariantToSelectionAction,
  useMonth,
  useWeeks,
} from './calendar.hooks';

import * as styles from './calendar.styles';
import {
  addMonth,
  getLastDate,
  getMonth,
  isDateDisabled,
  isDateInHoverRange,
  isDateInSelectedRange,
  isDateSelected,
  subtractMonth,
} from './calendar.utils';

export type StartOfWeek = 'Sunday' | 'Monday';
export type ShortDay = 'M' | 'T' | 'W' | 'F' | 'S';
export type CalendarSelectMode = 'Range' | 'Multiple' | 'Single';

export type FocusedDate = 'start_date' | 'end_date';
export type LongDay =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export interface Day {
  longLabel: LongDay;
  shortLabel: ShortDay;
}

export interface CalendarProps {
  /** an array of selected dates */
  value?: Date[];
  /** the minimum selectable date */
  min?: Date;
  /** the maximum selectable date */
  max?: Date;
  /** the initial month to display when the calendar is rendered for the first time */
  initialMonth?: Date;
  /**
   * the type of calendar to render
   * Range: a start and end date can be selected, with all dates in between highlighted
   * Multiple: a number of dates can be individually selected
   * Single: only one date can be selected
   * @default 'Single'
   */
  variant?: CalendarSelectMode;
  /** the maximum number of dates that can be selected
   *  @default 10
   */
  selectLimit?: number;
  /** the first day of the week
   *  @default 'Monday'
   */
  startOfWeek?: StartOfWeek;
  onDateChange?: (values: Date[], value: Date) => void;
  onMonthChange?: (month: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  value = [],
  min,
  max,
  initialMonth,
  variant = 'Single',
  selectLimit = 10,
  startOfWeek = 'Monday',
  onDateChange,
  onMonthChange,
}) => {
  const daysOfTheWeek = useWeeks(startOfWeek);
  const [{ selected, hovered, focused, month }, dispatch] = useReducer(
    activeDatesReducer,
    {
      selected: value,
      month: initialMonth || (value.length && getLastDate(value)) || new Date(),
      focused: 'start_date',
      hovered: undefined,
    },
    initActiveDates
  );
  const daysOfTheMonth = useMonth(
    month || initialMonth || (value.length && getLastDate(value)) || new Date(),
    startOfWeek
  );

  const handleOnMonthChanged = (newMonth: Date) => {
    onMonthChange && onMonthChange(newMonth);
  };

  const handleDateSelected = (newDate: Date) => {
    dispatch({ type: mapVariantToSelectionAction(variant), value: newDate });
    onDateChange && onDateChange(selected, newDate);
  };

  const handleOnPrevMonth = () => {
    const previousMonth = subtractMonth(month);
    dispatch({ type: 'CHANGE_MONTH', value: previousMonth });
    handleOnMonthChanged(previousMonth);
  };

  const handleOnNextMonth = () => {
    const nextMonth = addMonth(month);
    dispatch({ type: 'CHANGE_MONTH', value: nextMonth });
    handleOnMonthChanged(nextMonth);
  };

  const Day = ({ date }: { date: Date }) => {
    const isSelected = isDateSelected(date, selected);
    const isWithinSelectedRange =
      variant === 'Range' && isDateInSelectedRange(date, selected);
    const isWithinHoverRange =
      focused === 'end_date' && isDateInHoverRange(date, selected, hovered);
    const isDisabled =
      (variant === 'Multiple' && selected.length >= selectLimit && !isSelected) ||
      isDateDisabled(date, min, max);
    const isAnotherMonth = date.getMonth() !== month.getMonth();

    const handleDayClicked = () => {
      !isDisabled && handleDateSelected(date);

      if (isAnotherMonth && !isDisabled) {
        dispatch({ type: 'CHANGE_MONTH', value: date });
        handleOnMonthChanged(date);
      }
    };

    const handleDayHovered = () => {
      if (!isDisabled && (!hovered || date.toISOString() !== hovered.toISOString())) {
        dispatch({ type: 'HOVER', value: date });
      }
    };

    return (
      <span
        onClick={handleDayClicked}
        onMouseEnter={handleDayHovered}
        sx={styles.calendarDayCss({
          isSelected,
          isWithinSelectedRange,
          isWithinHoverRange,
          isDisabled,
          isAnotherMonth,
        })}>
        {date.getDate()}
      </span>
    );
  };

  return (
    <div sx={styles.calendarContainerCss}>
      <Flex sx={styles.calendarHeaderCss}>
        <Button
          onClick={handleOnPrevMonth}
          icon="chevron_left"
          iconPosition="left"
          variant="text"
        />
        <span>
          {getMonth(month)} {month.getFullYear()}
        </span>
        <Button
          onClick={handleOnNextMonth}
          icon="chevron_right"
          iconPosition="right"
          variant="text"
        />
      </Flex>
      <div sx={styles.calendarDayLabelContainerCss}>
        {daysOfTheWeek.map((day) => (
          <Tooltip key={day.longLabel} text={day.longLabel}>
            <span sx={styles.calendarDayLabelCss}>{day.shortLabel}</span>
          </Tooltip>
        ))}
      </div>
      <div sx={styles.calenderDaysContainerCss}>
        {daysOfTheMonth.map((day, index) => (
          <Day date={day} key={`${day.toString()}-${index}`} />
        ))}
      </div>
    </div>
  );
};
