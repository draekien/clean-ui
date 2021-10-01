import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Label, LabelProps } from '../components/label/label';

export default {
  title: 'Components/Label',
  component: Label,
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  htmlFor: 'myContent',
  children: 'label',
};
