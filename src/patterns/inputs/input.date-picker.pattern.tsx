/** @jsxImportSource theme-ui */
import React, { useState, useEffect, createRef } from 'react';
import { Button, Calendar, Card, StartOfWeek, TextInput } from '../..';
import { Transition } from 'react-transition-group';
import OutsideClickHandler from 'react-outside-click-handler';
import { TextInputProps } from './input.text.pattern';
import { HorizontalAlignment } from '../../types/layouts';
import { ThemeUIStyleObject } from '@theme-ui/css';

const calendarTransitions: any = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: {
    opacity: 0,
    height: '0 !important',
    overflow: 'hidden',
  },
  exited: {
    opacity: 0,
    height: '0 !important',
    overflow: 'hidden',
  },
};

const getHorizontalPosition = (alignment: HorizontalAlignment) => {
  const css: ThemeUIStyleObject = {};

  switch (alignment) {
    case 'left':
      css.left = 0;
      break;
    case 'right':
      css.right = 0;
      break;
    case 'center':
      css.left = 'calc(50% - 10em)';
      break;
  }

  return css;
};

const getMaskedDateString = (date?: Date) => {
  if (!date || typeof date.getTime !== 'function') return '';

  return date.toLocaleDateString();
};

const isValidDateInstance = (date?: Date) => {
  return date instanceof Date && !isNaN(date.getTime());
};

const getCleanString = (value: string) => {
  if (!value || typeof value !== 'string') return '';
  return value.replace(/\s|-/g, '').replace(/^\/|\/$|\/\//g, '');
};

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

const getDateFromString = (value?: string) => {
  if (!value || typeof value !== 'string') return null;
  const dateValues = getCleanString(value)
    .split('/')
    .filter((v) => v !== '' && v.length >= 'MM'.length);

  if (dateValues.length < 3) return null;
  if (dateValues[2].length < 4) return null;
  try {
    const numberValues = dateValues.map((v) => parseInt(v)); // [0] day, [1] month, [2] year
    let day = numberValues[0];
    let month = numberValues[1];
    const year = numberValues[2];
    if (month > 12) month = 12;

    const daysInMonth = getDaysInMonth(month, year);

    if (day > daysInMonth) day = daysInMonth;

    return new Date(year, month - 1, day);
  } catch (error) {
    return null;
  }
};

const fireInputChange = (element: HTMLInputElement, value: string) => {
  const valueSetter = Object.getOwnPropertyDescriptor(element, 'value')?.set;
  const prototype = Object.getPrototypeOf(element);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value')?.set;

  if (valueSetter && prototypeValueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value);
  } else if (valueSetter) {
    valueSetter.call(element, value);
  }

  element.dispatchEvent(new Event('input', { bubbles: true }));
};

export interface DatePickerInputProps extends Omit<TextInputProps, 'onChange'> {
  startOfWeek?: StartOfWeek;
  initialMonth?: Date;
  selectedDate?: Date;
  calendarPosition?: HorizontalAlignment;
  onChange?: (
    e?: React.ChangeEvent<HTMLInputElement>,
    strVal?: string,
    dateVal?: Date
  ) => void;
}

export const DatePickerInput: React.FC<DatePickerInputProps> = ({
  label,
  inputId,
  helpText,
  onChange,
  onFocus,
  onBlur,
  value = '',
  initialMonth,
  startOfWeek = 'Sunday',
  selectedDate,
  calendarPosition = 'left',
  ...rest
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [inputValue, setInputValue] = useState(
    selectedDate
      ? getMaskedDateString(selectedDate)
      : getDateFromString(value)?.toLocaleDateString() || value
  );
  const [chosenDate, setChosenDate] = useState<Date | null>(getDateFromString(value));

  useEffect(() => {
    setInputValue(getDateFromString(value)?.toLocaleDateString() || value);
    setChosenDate(getDateFromString(value));
  }, [value]);

  useEffect(() => {
    setChosenDate(selectedDate || null);
    if (selectedDate && isValidDateInstance(selectedDate)) {
      setInputValue(selectedDate.toLocaleDateString());
    }
  }, [selectedDate]);

  let textInputRef = createRef<HTMLInputElement>();

  const handleFocused = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsCalendarOpen(false);
    onFocus && onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsCalendarOpen(false);
    onBlur && onBlur(e);
  };

  const handleOutsideClicked = () => {
    setIsCalendarOpen(false);
  };

  const handleCalendarClicked = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleCalendarDateChange = (_selectedDates: Date[], newDate: Date) => {
    const date = newDate;
    const maskedDate = getMaskedDateString(date);
    const validDate = getDateFromString(maskedDate)?.toLocaleDateString();

    setInputValue(getDateFromString(validDate)?.toLocaleDateString() || maskedDate);
    setChosenDate(date);
    setIsCalendarOpen(false);

    textInputRef = createRef<HTMLInputElement>();
    if (textInputRef.current) {
      fireInputChange(textInputRef.current, maskedDate);
      textInputRef.current.focus();
    }
  };

  const handleInputDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    const dateValue = getDateFromString(value);

    const validDate = getDateFromString(value)?.toLocaleDateString();

    setChosenDate(dateValue);
    setInputValue(validDate || value);

    onChange && onChange(e, validDate || getCleanString(value), dateValue || undefined);
  };

  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClicked}>
      <div
        sx={{
          position: 'relative',
        }}>
        <TextInput
          {...rest}
          label={label}
          inputId={inputId}
          helpText={helpText}
          ref={textInputRef}
          mask="99/99/9999"
          maskPlaceholder="-"
          addon={
            <Button
              icon="calendar_today"
              iconSize="medium"
              variant="text"
              size="medium"
              iconPosition="left"
              onClick={handleCalendarClicked}
            />
          }
          value={inputValue}
          onFocus={handleFocused}
          onBlur={handleBlur}
          onChange={handleInputDateChange}
        />
        <Transition appear in={isCalendarOpen} timeout={0} unmountOnExit>
          {(state) => (
            <div
              sx={{
                position: 'absolute',
                transition: 'all 100ms',
                zIndex: 'dropdown',
                ...getHorizontalPosition(calendarPosition),
                ...calendarTransitions[state],
              }}
              data-testid="calendar-container">
              <Card>
                <div
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 'sm',
                  }}>
                  <Calendar
                    value={chosenDate ? [chosenDate] : undefined}
                    initialMonth={initialMonth}
                    onDateChange={handleCalendarDateChange}
                    startOfWeek={startOfWeek}
                    variant="Single"
                  />
                </div>
              </Card>
            </div>
          )}
        </Transition>
      </div>
    </OutsideClickHandler>
  );
};
