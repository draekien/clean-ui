/** @jsxImportSource theme-ui */
import React from 'react';
import { Toast } from './toast';
import { ToastConsumer } from './toast.consumer';
import { toastContainerCss } from './toast.styles';

export type ToastPosition = 'top' | 'bottom' | 'right';
export interface ToastContainerProps {
  position?: ToastPosition;
  offset?: string | number | string[] | number[];
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  position = 'right',
  offset,
  ...rest
}) => (
  <ToastConsumer>
    {(context) => (
      <div
        id="clean_ui_toast_container"
        sx={toastContainerCss({ position, offset })}
        {...rest}>
        {context.toasts.map((toast) => (
          <Toast key={toast.key} openFrom={position} {...toast} />
        ))}
      </div>
    )}
  </ToastConsumer>
);
