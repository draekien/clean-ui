/** @jsxImportSource theme-ui */
import { Flex } from '@theme-ui/components';
import React from 'react';
import { Button } from '../button/button';
import { Tooltip } from '../tooltip/tooltip';
import { CalendarDay } from './calendar.day';
import { useCalendar } from './calendar.hooks';
import { Text } from '../text/text';

import * as styles from './calendar.styles';
import {
  addMonth,
  addOrRemoveSelectedDate,
  getDaysOfTheMonth,
  getDaysOfTheWeek,
  getLastDate,
  getMonth,
  isDateDisabled,
  isDateInHoverRange,
  isDateInSelectedRange,
  isDateSelected,
  resetHoursInDateArray,
  sortDates,
  subtractMonth,
} from './calendar.utils';
import { useColorMode } from '@theme-ui/color-modes';

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
   *  @default 'Sunday'
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
  startOfWeek = 'Sunday',
  onDateChange,
  onMonthChange,
}) => {
  const [colorMode] = useColorMode();

  const {
    selected,
    hovered,
    focused,
    month,
    setSelected,
    setHovered,
    setFocused,
    setMonth,
  } = useCalendar({
    value: (value.length && resetHoursInDateArray(sortDates(value))) || [],
    hovered: undefined,
    focused: 'start_date',
    month: initialMonth || (value.length && getLastDate(value)) || new Date(),
    variant,
  });

  const handleOnMonthChanged = (newMonth: Date) => {
    onMonthChange && onMonthChange(newMonth);
  };

  const handleDateSelected = (newDate: Date) => {
    let dates: Date[];

    switch (variant) {
      case 'Single':
        dates = value[0] === newDate ? [] : [newDate];
        break;
      case 'Multiple':
        dates = addOrRemoveSelectedDate(newDate, selected);
        break;
      case 'Range':
        if (focused === 'start_date') {
          dates = [newDate];
          setFocused('end_date');
        } else {
          dates = sortDates([...selected, newDate]);
          setFocused('start_date');
        }
        break;
    }

    setSelected(dates);
    onDateChange && onDateChange(dates, newDate);
  };

  const handleOnPrevMonth = () => {
    const previousMonth = subtractMonth(month);
    setMonth(previousMonth);
    handleOnMonthChanged(previousMonth);
  };

  const handleOnNextMonth = () => {
    const nextMonth = addMonth(month);
    setMonth(nextMonth);
    handleOnMonthChanged(nextMonth);
  };

  const handleDayClicked = (date: Date, isUnfocused: boolean) => {
    handleDateSelected(date);

    if (isUnfocused) {
      setMonth(date);
      handleOnMonthChanged(date);
    }
  };

  const handleDayHovered = (date: Date) => {
    if (!hovered || date.toISOString() !== hovered.toISOString()) {
      setHovered(date);
    }
  };

  const isSelected = (date: Date) => isDateSelected(date, selected);
  const isSelectable = (date: Date) =>
    variant === 'Range' && isDateInSelectedRange(date, selected);
  const isHoverable = (date: Date) =>
    focused === 'end_date' && isDateInHoverRange(date, selected, hovered);
  const isDisabled = (date: Date) =>
    (variant === 'Multiple' && selected.length >= selectLimit && !isSelected(date)) ||
    isDateDisabled(date, min, max);
  const isUnfocused = (date: Date) => date.getMonth() !== month.getMonth();

  return (
    <div sx={styles.calendarContainerCss}>
      <Flex sx={styles.calendarHeaderCss}>
        <Button
          onClick={handleOnPrevMonth}
          icon="chevron_left"
          iconPosition="left"
          variant="text"
        />
        <Text as="span" variant="subtitle">
          {getMonth(month)} {month.getFullYear()}
        </Text>
        <Button
          onClick={handleOnNextMonth}
          icon="chevron_right"
          iconPosition="right"
          variant="text"
        />
      </Flex>
      <div sx={styles.calendarDayLabelContainerCss}>
        {getDaysOfTheWeek(startOfWeek).map((day) => (
          <Tooltip key={day.longLabel} text={day.longLabel}>
            <span sx={styles.calendarDayLabelCss}>{day.shortLabel}</span>
          </Tooltip>
        ))}
      </div>
      <div sx={styles.calenderDaysContainerCss}>
        {getDaysOfTheMonth(month, startOfWeek).map((day, index) => (
          <CalendarDay
            key={`${day.toString()}-${index}`}
            id={`${day.toString()}-${index}`}
            date={day}
            colorMode={colorMode}
            selected={isSelected(day)}
            selectable={isSelectable(day)}
            hoverable={isHoverable(day)}
            disabled={isDisabled(day)}
            unfocused={isUnfocused(day)}
            onClick={handleDayClicked}
            onMouseEnter={handleDayHovered}
          />
        ))}
      </div>
    </div>
  );
};
