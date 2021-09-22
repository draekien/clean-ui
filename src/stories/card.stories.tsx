import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Card, CardProps } from '../components/card/card';
import { Text } from '../components/text/text';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => (
  <div style={{ width: '40em', display: 'flex', justifyContent: 'center' }}>
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: <Text>A card is just a container you can put stuff into.</Text>,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: <Text>You can make me take up the full width of the parent container.</Text>,
  fullWidth: true,
};

export const FullyPopulated = Template.bind({});
FullyPopulated.args = {
  children: <Text>You can give me a header and a footer.</Text>,
  header: <Text variant="h4">I'm a card!</Text>,
  footer: <Text variant="small">this is something that's really important</Text>,
};

export const Featured = Template.bind({});
Featured.args = {
  children: (
    <Text color="b-000">You can make me stand out if you use the 'feature' prop.</Text>
  ),
  header: (
    <Text color="b-000" variant="h4">
      Oooh fancy ✨
    </Text>
  ),
  footer: (
    <Text color="b-000" variant="small">
      Am I not beautiful?
    </Text>
  ),
  feature: true,
};
