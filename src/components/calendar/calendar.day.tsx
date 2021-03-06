/** @jsxImportSource theme-ui */
import React from 'react';
import { calendarDayCss } from './calendar.styles';

export interface CalendarDayProps {
  id: string;
  date: Date;
  colorMode: string;
  hoverable: boolean;
  selectable: boolean;
  selected: boolean;
  disabled: boolean;
  unfocused: boolean;
  onClick: (date: Date, isUnfocused: boolean) => void;
  onMouseEnter: (date: Date) => void;
}

export const CalendarDay: React.FC<CalendarDayProps> = ({
  id,
  date,
  colorMode,
  hoverable,
  selectable,
  selected,
  disabled,
  unfocused,
  onClick,
  onMouseEnter,
}) => {
  const handleClicked = () => {
    !disabled && onClick(date, unfocused);
  };

  const handleHovered = () => {
    !disabled && onMouseEnter(date);
  };

  return (
    <span
      id={id}
      data-testid={id}
      onClick={handleClicked}
      onMouseEnter={handleHovered}
      sx={calendarDayCss({
        isSelected: selected,
        isWithinSelectedRange: selectable,
        isWithinHoverRange: hoverable,
        isDisabled: disabled,
        isAnotherMonth: unfocused,
        isDarkmode: colorMode === 'dark',
      })}>
      {date.getDate()}
    </span>
  );
};
