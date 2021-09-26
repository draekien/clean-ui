import React, { useState } from 'react';
import {
  Toast,
  ToastProps,
  ToastPosition,
  ToastContextProps,
  ToastProvider,
  ToastContainer,
  ToastConsumer,
} from '../components/toast/toast';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../components/button/button';
import { Text } from '../components/text/text';

export default {
  title: 'Components/Toast',
  component: Toast,
} as Meta;

const Template: Story<ToastProps> = (args) => <Toast {...args} />;

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  title: "Here's some information",
  message: 'I have onClick and onClose handlers',
  onClick: action('clicked!'),
  onClose: action('closed!'),
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  title: 'Success',
  message: 'I will automatically close after 6.5 seconds',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  title: 'Uh oh',
  message: 'I will be here forever',
  duration: 0,
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  title: '#$%!@',
  message: "Looks like something didn't go so well",
};

export const ApiUsage = () => {
  const [position, setPosition] = useState<ToastPosition>('right');

  return (
    <ToastProvider>
      <ToastContainer position={position} />
      <ToastConsumer>
        {(context) => (
          <>
            <Text>Toast Container Positions</Text>
            <div style={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
              <Button onClick={() => setPosition('top')}>Top</Button>
              <Button onClick={() => setPosition('right')}>Right</Button>
              <Button onClick={() => setPosition('bottom')}>Bottom</Button>
            </div>
            <Text>Actions</Text>
            <div style={{ display: 'flex', gap: '1em' }}>
              <Button onClick={() => open(context)}>Open</Button>
              <Button onClick={() => success(context)}>Success</Button>
              <Button onClick={() => error(context)}>Error</Button>
              <Button onClick={() => warning(context)}>Warning</Button>
              <Button onClick={() => closeAll(context)}>Close All</Button>
              <Button onClick={() => openToClose(context)}>Open (to close)</Button>
              <Button onClick={() => close(context)}>Close</Button>
            </div>
          </>
        )}
      </ToastConsumer>
    </ToastProvider>
  );
};

let count = 0;
let toClose: number | null = null;

const open = (toast: ToastContextProps) => {
  toast.open({
    title: 'Default Toast',
    message: 'I am a default toast opened using "toast.open({...})"',
  });
};

const openToClose = (toast: ToastContextProps) => {
  if (toClose === null) {
    toClose = count;
    toast.open({
      title: 'Default Toast',
      message: 'I am a default toast opened using "toast.open({...});".',
      duration: 0,
      key: count,
    });
    count++;
  }
};

const success = (toast: ToastContextProps) => {
  toast.success({
    title: 'Success Toast',
    message: 'I am a success toast opened using "toast.success({...});".',
  });
};

const error = (toast: ToastContextProps) => {
  toast.error({
    title: 'Error Toast',
    message: 'I am an error toast opened using "toast.error({...});".',
  });
};

const warning = (toast: ToastContextProps) => {
  toast.warning({
    title: 'Warning Toast',
    message: 'I am an warning toast opened using "toast.warning({...});".',
  });
};

const close = (toast: ToastContextProps) => {
  toast.close(toClose);
  toClose = null;
};

const closeAll = (toast: ToastContextProps) => {
  toast.closeAll();
};
