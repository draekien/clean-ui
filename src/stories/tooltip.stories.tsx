import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Tooltip, TooltipProps } from '../components/tooltip/tooltip';
import { Text } from '../components/text/text';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

export const Default = () => (
  <Tooltip text="Hey look I'm a tooltip! Use me to show some helpful text.">
    <Text>Hover over me to see something neat</Text>
  </Tooltip>
);

const Template: Story<TooltipProps> = (args) => (
  <Tooltip {...args}>
    <Text>I can be positioned manually by setting the 'direction' prop</Text>
  </Tooltip>
);

export const Positioned = Template.bind({});
Positioned.args = {
  text: "Try me out by changing the 'direction' control",
  direction: 'top',
};
