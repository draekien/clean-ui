import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextInput, TextInputProps } from '../patterns/inputs/input.text.pattern';

export default {
  title: 'Patterns/Inputs/Text',
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => (
  <div style={{ width: '40rem', display: 'flex', justifyContent: 'center' }}>
    <TextInput {...args} />
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

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Email',
  inputId: 'email',
  helpText: 'john@example.com',
  icon: 'mail',
  type: 'email',
  disabled: true,
};
