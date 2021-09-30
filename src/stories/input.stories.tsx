import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Input, InputProps } from '../components/input/input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  inputId: 'default',
  placeholder: "I'm a basic input",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  inputId: 'withIcon',
  icon: 'mail',
  placeholder: 'I now have an icon',
};

export const Variants = Template.bind({});
Variants.args = {
  inputId: 'variants',
  variant: 'success',
  placeholder: 'My color changes',
};
