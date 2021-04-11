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

export const Variants = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      alignItems: 'baseline',
      gap: '2rem',
    }}>
    <Text variant="hero">Hero</Text>
    <Text variant="h1">H1</Text>
    <Text variant="h2">H2</Text>
    <Text variant="h3">H3</Text>
    <Text variant="h4">H4</Text>
    <Text variant="subtitle">Subtitle</Text>
    <Text variant="body">Body</Text>
    <Text variant="mono">Monospace</Text>
    <Text variant="eyebrow">Eyebrow</Text>
    <Text variant="small">Small</Text>
  </div>
);
