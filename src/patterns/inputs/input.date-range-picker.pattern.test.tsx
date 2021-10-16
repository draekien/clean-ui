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
});
