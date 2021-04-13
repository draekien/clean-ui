import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Spinner, SpinnerProps } from '../components/spinner/spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  variant: 'donut',
  size: 'medium',
};

export const FullPage = Template.bind({});
FullPage.args = {
  variant: 'donut',
  size: 'medium',
  fullPage: true,
};
