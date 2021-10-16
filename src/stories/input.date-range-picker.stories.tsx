import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DateRangePickerInput,
  DateRangePickerInputProps,
} from '../patterns/inputs/input.date-range-picker.pattern';

export default {
  title: 'Patterns/Inputs/Date Range Picker',
  component: DateRangePickerInput,
} as Meta;

const Template: Story<DateRangePickerInputProps> = (args) => (
  <DateRangePickerInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'DateRangePicker Input',
  inputId: 'date-range-picker-input',
  helpText: 'Enter a date range or select a range from the calendar',
  dateFrom: new Date(2021, 1, 1),
  dateTo: new Date(2021, 1, 5),
};
