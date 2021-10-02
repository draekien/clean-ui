/** @jsxImportSource theme-ui */
import React, { useState, useEffect, createRef } from 'react';
import { Calendar, Card, StartOfWeek, TextInput } from '../..';
import { Transition } from 'react-transition-group';
import OutsideClickHandler from 'react-outside-click-handler';
import { TextInputProps } from './input.text.pattern';
import { HorizontalAlignment } from '../../types/layouts';

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

const getMaskedDateString = (date?: Date) => {
  if (!date || typeof date.getTime !== 'function') return '';

  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return `${day}/${month}/${date.getFullYear()}`;
};

const isValidDateInstance = (date?: Date) => {
  return date instanceof Date && !isNaN(date.getTime());
};

const getCleanString = (value: string) => {
  if (!value || typeof value !== 'string') return '';
  return value.replace(/\s|-/g, '').replace(/^\/|\/$|\/\//g, '');
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
    return new Date(numberValues[2], numberValues[1] - 1, numberValues[0]);
  } catch (error) {
    return null;
  }
};

const fireInputChange = (element: HTMLInputElement, value: string) => {
  const valueSetter = Object.getOwnPropertyDescriptor(element, 'value')?.set;
  const prototype = Object.getPrototypeOf(element);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value')?.set;

  if (valueSetter && prototypeValueSetter && valueSetter !== prototypeValueSetter)
    prototypeValueSetter.call(element, value);
  else if (valueSetter) valueSetter.call(element, value);

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
  onChange,
  onFocus,
  value = '',
  initialMonth,
  startOfWeek = 'Sunday',
  selectedDate,
  calendarPosition = 'left',
  ...rest
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [inputValue, setInputValue] = useState(
    selectedDate ? getMaskedDateString(selectedDate) : value
  );
  const [chosenDate, setChosenDate] = useState<Date | null>(getDateFromString(value));

  useEffect(() => {
    setInputValue(value);
    setChosenDate(getDateFromString(value));
  }, [value]);

  useEffect(() => {
    setChosenDate(selectedDate || null);
    if (isValidDateInstance(selectedDate)) {
      setInputValue(getMaskedDateString(selectedDate));
    }
  }, [selectedDate]);

  const textInputRef = createRef<HTMLInputElement>();

  const handleFocused = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsCalendarOpen(true);
    onFocus && onFocus(e);
  };

  const handleOutsideClicked = () => {
    setIsCalendarOpen(false);
  };

  const handleCalendarDateChange = (selectedDates: Date[], newDate: Date) => {
    const date = newDate;
    const maskedDate = getMaskedDateString(date);

    console.log('updating input', maskedDate, date);
    setInputValue(maskedDate);
    setChosenDate(date);

    if (textInputRef.current) {
      fireInputChange(textInputRef.current, maskedDate);
    }
  };

  const handleInputDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    const dateValue = getDateFromString(value);

    setChosenDate(dateValue);
    setInputValue(value);

    onChange && onChange(e, getCleanString(value), dateValue || undefined);
  };

  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClicked}>
      <div
        sx={{
          position: 'relative',
        }}>
        <TextInput
          ref={textInputRef}
          mask="99/99/9999"
          maskPlaceholder="-"
          icon="calendar_today"
          value={inputValue}
          onFocus={handleFocused}
          onChange={handleInputDateChange}
          {...rest}
        />
        <Transition appear in={isCalendarOpen} timeout={100}>
          {(state) => (
            <div
              sx={{
                opacity: 0,
                position: 'absolute',
                transition: 'all 100ms',
                zIndex: 'dropdown',
                left: calendarPosition === 'left' && 0,
                right: calendarPosition === 'right' && 0,
                ...calendarTransitions[state],
              }}>
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
