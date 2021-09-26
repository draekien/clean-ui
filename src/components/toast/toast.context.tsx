import { createContext, useContext } from 'react';
import { ToastProps } from './toast';

export interface ToastContextProps {
  toasts: ToastProps[];
  open: Function;
  close: Function;
  closeAll: Function;
  success: Function;
  error: Function;
  warning: Function;
  info: Function;
}

export const ToastContext = createContext<ToastContextProps>({
  toasts: [],
  open: () => {},
  close: () => {},
  closeAll: () => {},
  success: () => {},
  error: () => {},
  warning: () => {},
  info: () => {},
});

export const useToastContext = () => useContext(ToastContext);
