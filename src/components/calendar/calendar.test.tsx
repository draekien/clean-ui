import { findByTestId, findByText, fireEvent } from '@testing-library/dom';
import React from 'react';
import { themedRender } from '../../helpers/testHelpers';
import { Calendar } from './calendar';

describe('Calendar component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should match snapshot', () => {
    const { container } = themedRender(<Calendar value={[new Date(2021, 1, 1)]} />);

    expect(container).toMatchSnapshot();
  });

  it('should render the specified month', () => {
    const { container } = themedRender(<Calendar initialMonth={new Date(2021, 2, 1)} />);

    expect(container.innerHTML).toContain('March');
  });

  it('should fire onMonthChangedEvent when prev month clicked', async () => {
    const handleMonthChanged = jest.fn();
    const { container } = themedRender(
      <Calendar initialMonth={new Date(2021, 2, 1)} onMonthChange={handleMonthChanged} />
    );

    const prevMonthBtn = await findByText(container, 'chevron_left');

    fireEvent.click(prevMonthBtn);

    const calendarLabel = await findByText(container, 'February 2021');

    expect(calendarLabel).toBeTruthy();
    expect(handleMonthChanged).toBeCalledTimes(1);
  });

  it('should fire onMonthChangedEvent when next month clicked', async () => {
    const handleMonthChanged = jest.fn();
    const { container } = themedRender(
      <Calendar initialMonth={new Date(2021, 2, 1)} onMonthChange={handleMonthChanged} />
    );

    const prevMonthBtn = await findByText(container, 'chevron_right');

    fireEvent.click(prevMonthBtn);

    const calendarLabel = await findByText(container, 'April 2021');

    expect(calendarLabel).toBeTruthy();
    expect(handleMonthChanged).toBeCalledTimes(1);
  });

  it('should fire date changed event when date is clicked', async () => {
    const handleDateChanged = jest.fn();
    const { container } = themedRender(
      <Calendar initialMonth={new Date(2021, 2, 1)} onDateChange={handleDateChanged} />
    );

    const day15 = await findByText(container, '15');

    fireEvent.click(day15);
    expect(handleDateChanged).toBeCalledTimes(1);
  });

  it('should fire month change event when unfocused date is clicked', async () => {
    const handleMonthChanged = jest.fn();
    const { container } = themedRender(
      <Calendar initialMonth={new Date(2021, 2, 1)} onMonthChange={handleMonthChanged} />
    );

    const unfocusedDay = await findByTestId(container, '0-0');
    fireEvent.click(unfocusedDay);
    expect(handleMonthChanged).toBeCalledTimes(1);
  });
});
