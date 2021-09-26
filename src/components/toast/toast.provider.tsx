import React, { useState } from 'react';
import { ToastProps } from './toast';
import { ToastContext, ToastContextProps } from './toast.context';

export interface ToastProviderProps {
  initialState?: ToastProps[];
  defaultProps?: ToastProps;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  initialState = [],
  defaultProps = [],
  children,
}) => {
  const [toasts, setToasts] = useState(initialState);

  let count = 0;
  const getKey = () => `${Date.now()}_${count++}`;

  const open = (props: ToastProps) => {
    const active = [...toasts];
    const newToast = Object.assign({}, defaultProps, props);

    if (!newToast.key) newToast.key = getKey();
    active.push(newToast);

    setToasts(active);
  };

  const close = (key: string) => {
    const active = [...toasts];

    active.forEach((toast, index) => {
      if (toast.key === key) active[index].open = false;
    });

    setToasts(active);
  };

  const closeAll = () => {
    const active = [...toasts];

    active.forEach((toast) => {
      toast.open = false;
    });

    setToasts(active);
  };

  const success = (props: ToastProps) => {
    open(Object.assign({}, props, { variant: 'success' }));
  };

  const warning = (props: ToastProps) => {
    open(Object.assign({}, props, { variant: 'warning' }));
  };

  const error = (props: ToastProps) => {
    open(Object.assign({}, props, { variant: 'error' }));
  };

  const info = (props: ToastProps) => {
    open(Object.assign({}, props, { variant: 'info' }));
  };

  const context: ToastContextProps = {
    toasts,
    open,
    close,
    closeAll,
    success,
    warning,
    error,
    info,
  };

  return <ToastContext.Provider value={context}>{children}</ToastContext.Provider>;
};
