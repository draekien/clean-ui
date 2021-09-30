import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InputWrapper, InputWrapperProps } from '../components/input/input.wrapper';

export default {
  title: 'Components/Input Wrapper',
  component: InputWrapper,
} as Meta;

const Template: Story<InputWrapperProps> = (args) => (
  <div style={{ width: '40rem', display: 'flex', justifyContent: 'center' }}>
    <InputWrapper {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  inputId: 'wrapper',
  label: 'I am an input wrapper',
  helpText: 'Use me to add the label and help text to your custom inputs',
  children: <input placeholder="I'm a standard html input" />,
};

export const Required = Template.bind({});
Required.args = {
  inputId: 'required',
  label: 'Something important',
  required: 'true',
  helpText: 'You can use the required prop to make me stand out',
  children: <input required />,
};

export const Variants = Template.bind({});
Variants.args = {
  inputId: 'variants',
  label: 'Variants',
  helpText: 'I change colors based on the variant you specify',
  variant: 'success',
  children: <input />,
};
