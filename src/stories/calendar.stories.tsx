import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Calendar } from '../components/calendar/calendar';
import { CalendarProps } from '../components/calendar/calendar';

export default {
  title: 'Components/Calendar',
  component: Calendar,
} as Meta;

const Template: Story<CalendarProps> = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {};

const getYesterday = () => {
  const now = new Date();
  now.setDate(now.getDate() - 1);
  return now;
};

const getSevenDaysInFuture = () => {
  const now = new Date();
  now.setDate(now.getDate() + 7);
  return now;
};

export const Restricted = Template.bind({});
Restricted.args = {
  min: getYesterday(),
  max: getSevenDaysInFuture(),
};
