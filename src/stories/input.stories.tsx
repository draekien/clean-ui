import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Input, InputProps } from '../components/input/input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => (
  <div style={{ width: '40rem', display: 'flex', justifyContent: 'center' }}>
    <Input {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'First Name',
  inputId: 'firstName',
  helpText: 'Please enter your first name',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Email',
  inputId: 'email',
  helpText: 'john@example.com',
  icon: 'mail',
  type: 'email',
  required: true,
};
