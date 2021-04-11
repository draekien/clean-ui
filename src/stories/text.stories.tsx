import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Text, TextProps } from '..';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hi! I'm the text component",
};
