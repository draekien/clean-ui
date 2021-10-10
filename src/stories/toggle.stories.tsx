import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Toggle, ToggleProps, Icon } from '..';

export default {
  title: 'Components/Toggle',
  component: Toggle,
} as Meta;

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  inputId: 'toggle',
  on: 'On',
  off: 'Off',
  checked: false,
  disabled: false,
};

export const Icons = Template.bind({});
Default.args = {
  inputId: 'toggle',
  on: <Icon name="light_mode" />,
  off: <Icon name="dark_mode" />,
  checked: false,
  disabled: false,
};
