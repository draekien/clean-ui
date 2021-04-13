import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Icon, IconProps } from '../components/icon/icon';

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  name: 'accessibility',
};
