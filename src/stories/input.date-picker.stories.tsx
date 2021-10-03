import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DatePickerInput, DatePickerInputProps } from '..';

export default {
  title: 'Patterns/Inputs/Date Picker',
  component: DatePickerInput,
} as Meta;

const Template: Story<DatePickerInputProps> = (args) => <DatePickerInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'DatePicker Input',
  inputId: 'date-picker-input',
  helpText: 'Enter a date or select one from the calendar',
};
