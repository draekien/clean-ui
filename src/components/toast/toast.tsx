// eslint-disable-next-line tsdoc/syntax
/** @jsxImportSource theme-ui */
import React, { useState, useEffect, SyntheticEvent, MouseEventHandler } from 'react';
import { ToastPosition } from './toast.container';
import { StatusVariant } from '../../types/variants';
import { Transition } from 'react-transition-group';
import { Icon } from '../icon/icon';
import { iconColorMap, iconMap } from './toast.utils';
import {
  toastCloseIconCss,
  toastMessageCss,
  toastTitleCss,
  toastVariantIconCss,
  toastWrapperCss,
  toastWrapperTransitions,
} from './toast.styles';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  key?: string;
  title?: string;
  message?: string;
  openFrom?: ToastPosition;
  variant?: StatusVariant;
  duration?: number;
  open?: boolean;
  onClose?: (e: SyntheticEvent<HTMLDivElement, Event> | undefined) => any;
  onClick?: (e: SyntheticEvent) => any;
}

export const Toast: React.FC<ToastProps> = ({
  title,
  message,
  openFrom = 'right',
  variant = 'success',
  duration = 6.5,
  open = true,
  onClose,
  onClick,
  ...rest
}) => {
  const [openState, setOpenState] = useState(open);
  const [openTime, setOpenTime] = useState(Date.now());

  let timer: number;
  let toastElement: HTMLDivElement | null;

  useEffect(() => {
    if (toastElement) toastElement.style.height = toastElement.scrollHeight + 'px';
  }, [message]);

  useEffect(() => {
    setOpenState(open);
  }, [open]);

  const handleClose: MouseEventHandler<HTMLDivElement> = (e) => {
    clearTimeout(timer);
    setOpenState(false);
    onClose && onClose(e);
  };

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    onClick && onClick(e);
  };

  const setTimer = (isMouseLeave = false) => {
    if (isMouseLeave) setOpenTime(Date.now());

    if (duration) {
      const durationMs = duration * 1000;
      const elapsed = Date.now() - openTime;
      const timeout = durationMs - elapsed;
      timer = setTimeout(handleClose, timeout);
    }
  };

  return (
    <Transition appear in={openState} timeout={300} unmountOnExit>
      {(state) => (
        <div
          ref={(el) => (toastElement = el)}
          sx={{
            ...toastWrapperCss({ variant, clickable: !!onClick, position: openFrom }),
            ...toastWrapperTransitions[state],
          }}
          onClick={handleClick}
          onMouseEnter={() => clearTimeout(timer)}
          onMouseLeave={() => setTimer(true)}
          {...rest}>
          <Icon
            sx={toastVariantIconCss}
            name={iconMap[variant]}
            color={iconColorMap[variant]}
          />
          <div sx={toastTitleCss({ variant })}>{title}</div>
          <div sx={toastMessageCss({ variant })}>{message}</div>
          <Icon sx={toastCloseIconCss} name="close" onClick={handleClose} size="small" />
        </div>
      )}
    </Transition>
  );
};

Toast.displayName = 'Toast';

export * from './toast.consumer';
export * from './toast.provider';
export * from './toast.context';
export * from './toast.container';
