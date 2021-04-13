import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../components/button/button';
import { Text } from '../components/text/text';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const FullWidth = () => (
  <div style={{ width: '20rem' }}>
    <div style={{ marginBottom: '1rem' }}>
      <Text as="p" fullWidth>
        The full width prop makes it so that the button will take up the full width of the
        parent container.
      </Text>
    </div>
    <Button fullWidth>Button</Button>
  </div>
);

export const Featured = () => (
  <div style={{ width: '20rem' }}>
    <div style={{ marginBottom: '1rem' }}>
      <Text as="p" fullWidth>
        The feature button overrides the size prop to 'large' and the variant prop to
        'gradidnt'. The text is also transformed to 'uppercase' and the letter spacing is
        modified. All other props work as per usual.
      </Text>
    </div>
    <Button feature>Feature</Button>
  </div>
);
