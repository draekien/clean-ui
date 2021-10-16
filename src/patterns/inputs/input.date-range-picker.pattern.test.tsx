import React from 'react';
import { DateRangePickerInput } from '../..';
import { themedRender } from '../../helpers/testHelpers';

describe('Date range picker pattern', () => {
  it('should match snapshot', () => {
    const { container } = themedRender(
      <DateRangePickerInput label="Dates" inputId="dates" />
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when dates are populated', () => {
    const { container } = themedRender(
      <DateRangePickerInput
        label="Dates"
        inputId="dates"
        dateFrom={new Date(2021, 1, 1)}
        dateTo={new Date(2021, 1, 2)}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
