import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Text, TextProps } from '..';
import { Tooltip } from '../components/tooltip/tooltip';

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
  <div>
    <Text variant="subtitle">
      Here is a preview of all the text variants available in this library:
    </Text>
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
  </div>
);

export const TextAlignments = () => (
  <div style={{ width: '20rem' }}>
    <Text textAlign="left" fullWidth>
      Left aligned
    </Text>
    <Text textAlign="center" fullWidth>
      Center aligned
    </Text>
    <Text textAlign="right" fullWidth>
      Right aligned
    </Text>
  </div>
);

export const Truncated = () => (
  <div style={{ width: '20rem' }}>
    <Text variant="subtitle">
      The text below has the truncate flag set to `true`. It has also been wrapped inside
      a 'Tooltip' component.
    </Text>
    <div style={{ width: '5rem', marginTop: '1rem' }}>
      <Tooltip
        text="I'm some really long text that needs to be truncated"
        direction="bottom">
        <Text truncate>I'm some really long text that needs to be truncated</Text>
      </Tooltip>
    </div>
  </div>
);
