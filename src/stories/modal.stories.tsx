import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps, Text } from '..';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  fullPage: false,
  visible: true,
  width: '40em',
  header: <Text variant="h4">I'm a default modal</Text>,
  footer: (
    <Text variant="small">I send on close events when you click outside me 😊</Text>
  ),
  children: (
    <Text>
      I have some text, but you can put any component here! You will need to manage my
      visibility in the component that consumes me.
    </Text>
  ),
};

export const FullPage = Template.bind({});
FullPage.args = {
  fullPage: true,
  visible: true,
  width: '40em',
  header: <Text variant="h4">I'm a full page modal</Text>,
  footer: (
    <Text variant="small">I send on close events when you click outside me 😊</Text>
  ),
  children: (
    <Text>
      I will cover up all the content on the page with a semi-transparent overlay
    </Text>
  ),
};

export const Feature = Template.bind({});
Feature.args = {
  fullPage: true,
  visible: true,
  feature: true,
  width: '40em',
  header: (
    <Text variant="h4" color="b-000">
      I'm a super fancy modal
    </Text>
  ),
  footer: (
    <Text variant="small" color="b-000">
      I send on close events when you click outside me 😊
    </Text>
  ),
  children: (
    <Text color="b-000">
      Use me if you really want to catch someone's attention! And remember to set any text
      colors to b-000 so it's visible 😁
    </Text>
  ),
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  fullPage: true,
  visible: true,
  showCloseButton: true,
  width: '40em',
  header: <Text variant="h4">Modal with a close button</Text>,
  footer: <Text variant="small">footer</Text>,
  children: (
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eum velit
      voluptates voluptas aliquam sapiente quam tenetur optio praesentium ut libero fugiat
      quod doloribus quis, voluptatibus eius veritatis et dolor.
    </Text>
  ),
};
