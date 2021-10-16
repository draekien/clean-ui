/** @jsxImportSource theme-ui */
import React, { useState, useEffect, createRef } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Transition } from 'react-transition-group';
import { ThemeUIStyleObject } from 'theme-ui';
import { Button, Calendar, Card, StartOfWeek } from '../..';
import { HorizontalAlignment } from '../../types/layouts';
import { TextInput, TextInputProps } from './input.text.pattern';

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
  if (!date || typeof date.getTime !== 'function') return '__/__/____';

  return date.toLocaleDateString();
};

const getCleanString = (value: string) => {
  if (!value || typeof value !== 'string') return '';
  return value.replace(/\s|_/g, '').replace(/^\/|\/$|\/\//g, '');
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

export interface DateRangePickerInputProps extends Omit<TextInputProps, 'onChange'> {
  startOfWeek?: StartOfWeek;
  initialMonth?: Date;
  dateFrom?: Date;
  dateTo?: Date;
  calendarPosition?: HorizontalAlignment;
  onChange?: (
    e?: React.ChangeEvent<HTMLInputElement>,
    strVal?: string,
    dateVal?: Date[]
  ) => void;
}

export const DateRangePickerInput: React.FC<DateRangePickerInputProps> = ({
  startOfWeek,
  initialMonth,
  dateFrom,
  dateTo,
  calendarPosition = 'left',
  onChange,
  ...rest
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [chosenDates, setChosenDates] = useState<Date[]>([]);

  useEffect(() => {
    const dates: Date[] = [];
    const dateFromStr = getMaskedDateString(dateFrom);
    const dateToStr = getMaskedDateString(dateTo);

    if (dateFrom) {
      dates[0] = dateFrom;
    }

    if (dateTo) {
      dates.push(dateTo);
    }

    setChosenDates(dates);
    setInputValue(`${dateFromStr} - ${dateToStr}`);
  }, [dateFrom, dateTo]);

  const handleCalendarClicked = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleOutsideClicked = () => {
    setIsCalendarOpen(false);
  };

  let textInputRef = createRef<HTMLInputElement>();

  const handleCalendarDateChange = (selectedDates: Date[]) => {
    let strValue = '';

    if (selectedDates.length === 2) {
      strValue = `${getMaskedDateString(selectedDates[0])} - ${getMaskedDateString(
        selectedDates[1]
      )}`;
    } else if (selectedDates.length === 1) {
      strValue = getMaskedDateString(selectedDates[0]);
    } else {
      strValue = '';
    }

    setChosenDates(selectedDates);
    setInputValue(strValue);

    if (!textInputRef) {
      textInputRef = createRef<HTMLInputElement>();
    }

    if (textInputRef.current && selectedDates.length === 2) {
      fireInputChange(textInputRef.current, strValue);
    }
  };

  const handleInputDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    const dateStrs = value.split(' - ');

    const dateFrom = getDateFromString(dateStrs[0]);
    const dateTo = getDateFromString(dateStrs[1]);

    const validDateFrom = dateFrom?.toLocaleDateString();
    const validDateTo = dateTo?.toLocaleDateString();

    const strValue = `${validDateFrom || dateStrs[0] || ''} - ${
      validDateTo || dateStrs[1] || ''
    }`;

    const dates: Date[] = [];

    if (dateFrom) {
      dates[0] = dateFrom;
    }

    if (dateTo) {
      dates.push(dateTo);
    }

    setChosenDates(dates);
    setInputValue(strValue);

    onChange && onChange(e, getCleanString(strValue), dates || undefined);
  };

  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClicked}>
      <div sx={{ position: 'relative' }}>
        <TextInput
          {...rest}
          ref={textInputRef}
          mask="99/99/9999 - 99/99/9999"
          maskPlaceholder="_"
          value={inputValue}
          onChange={handleInputDateChange}
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
                    value={chosenDates}
                    initialMonth={initialMonth}
                    onDateChange={handleCalendarDateChange}
                    startOfWeek={startOfWeek}
                    variant="Range"
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
