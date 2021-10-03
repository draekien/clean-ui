import React from 'react';
import { DatePickerInput } from './input.date-picker.pattern';
import { themedRender } from '../../helpers/testHelpers';
import { findByText, fireEvent } from '@testing-library/dom';

describe('Datepicker pattern', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should match snapshot', () => {
    const { container } = themedRender(
      <DatePickerInput inputId="picker" label="datepicker" />
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when all props are populated', () => {
    const handleChange = jest.fn();
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    const { container } = themedRender(
      <DatePickerInput
        inputId="picker"
        label="datepicker"
        helpText="datepicker help"
        startOfWeek="Monday"
        initialMonth={new Date(2020, 1, 1)}
        calendarPosition="center"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value="01/02/2020"
      />
    );

    const input = container.querySelector('input') as Element;
    fireEvent.change(input, {
      target: { value: '02/02/2020' },
    });

    fireEvent.focus(input, { bubbles: true });
    fireEvent.blur(input);

    expect(container).toMatchSnapshot();
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should open calendar when button is clicked', async () => {
    const { container } = themedRender(
      <DatePickerInput
        inputId="picker"
        label="picker"
        selectedDate={new Date(2020, 1, 1)}
      />
    );

    const button = container.querySelector('button') as Element;

    fireEvent.click(button);

    const calendarLabel = await findByText(container, 'February 2020');
    expect(calendarLabel).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
