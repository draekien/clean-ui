import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from '../components/checkbox/checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
};
