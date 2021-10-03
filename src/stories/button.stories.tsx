import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../components/button/button';
import { Text as TextComponent } from '../components/text/text';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  children: 'Button',
};

export const Gradient = Template.bind({});
Gradient.args = {
  variant: 'gradient',
  children: 'Button',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  children: 'Button',
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  children: 'Link',
};

export const FullWidth = () => (
  <div style={{ width: '20rem' }}>
    <div style={{ marginBottom: '1rem' }}>
      <TextComponent as="p" fullWidth>
        The full width prop makes it so that the button will take up the full width of the
        parent container.
      </TextComponent>
    </div>
    <Button fullWidth>Button</Button>
  </div>
);

export const Featured = () => (
  <div style={{ width: '20rem' }}>
    <div style={{ marginBottom: '1rem' }}>
      <TextComponent as="p" fullWidth>
        The feature button overrides the size prop to 'large' and the variant prop to
        'gradient'. The text is also transformed to 'uppercase' and the letter spacing is
        modified. All other props work as per usual.
      </TextComponent>
    </div>
    <Button feature>Feature</Button>
  </div>
);

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Button',
  icon: 'accessibility',
  iconPosition: 'left',
};
