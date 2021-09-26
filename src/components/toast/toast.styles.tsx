import { ThemeUIStyleObject } from '@theme-ui/css';
import { keyframes } from '@emotion/react';
import { StatusVariant } from '../../types/variants';
import { ToastContainerProps, ToastPosition } from './toast.container';

const slideLeft = keyframes`
0% {
  transform: translateX(100%);
}
100% {
  transform: translateX(0%);
}`;

const slideUp = keyframes`
0% {
  transform: translateY(200%);
}
100% {
  transform: translateY(0%);
}`;

const slideDown = keyframes`
0% {
  transform: translateY(-200%);
}
100% {
  transform: translateY(0%);
}
`;

export interface ToastCssProps {
  variant: StatusVariant;
  clickable?: boolean;
  position?: ToastPosition;
}

export const toastContainerCss = ({
  position,
  offset,
}: ToastContainerProps): ThemeUIStyleObject => {
  const css: ThemeUIStyleObject = {
    position: 'fixed',
    display: 'flex',
    flexFlow: 'column',
    zIndex: 'toast',
    pointerEvents: 'none',
    right: 'calc(50% - 11rem)',
  };

  switch (position) {
    case 'bottom':
      css.bottom = offset || 0;
      css.top = 0;
      css.justifyContent = 'flex-end';
      break;
    case 'top':
      css.top = offset || 0;
      css.bottom = 0;
      break;
    default:
      css.right = 0;
      css.top = offset || 0;
      css.bottom = 0;
      break;
  }

  return css;
};

export const toastWrapperCss = ({
  variant,
  clickable,
  position,
}: ToastCssProps): ThemeUIStyleObject => {
  const css: ThemeUIStyleObject = {
    backgroundColor: `${variant}-000`,
    borderLeft: '4px solid',
    borderLeftColor: `${variant}-400`,
    borderRadius: 'md',
    boxShadow: 'sm',
    margin: '1rem',
    opacity: 0,
    pointerEvents: 'all',
    position: 'relative',
    transition: 'all 300ms',
    width: '20rem',
    zIndex: 'toast',
  };

  if (clickable) {
    css.cursor = 'pointer';
  }

  switch (position) {
    case 'top':
      css.top = 0;
      css.animation = `${slideDown} 700ms`;
      break;
    case 'bottom':
      css.bottom = 0;
      css.animation = `${slideUp} 700ms`;
      break;
    default:
      css.right = 0;
      css.animation = `${slideLeft} 700ms`;
  }

  return css;
};

export const toastWrapperTransitions: any = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: {
    opacity: 0,
    height: '0 !important',
    overflow: 'hidden',
  },
  exited: {
    opacity: 0,
    height: '0 !important',
    overflow: 'hidden',
  },
};

export const toastVariantIconCss: ThemeUIStyleObject = {
  margin: 'md',
  position: 'absolute',
};

export const toastTitleCss = ({ variant }: ToastCssProps): ThemeUIStyleObject => ({
  color: `${variant}-400`,
  minHeight: '2rem',
  pt: 'md',
  pr: 'xxl',
  pb: 0,
  pl: '3.5rem',
  variant: 'text.subtitle',
});

export const toastMessageCss = ({ variant }: ToastCssProps): ThemeUIStyleObject => ({
  minHeight: '2rem',
  p: '0 2.5rem 1rem 3.5rem',
  pt: 'xs',
  variant: 'text.small',
  color: `${variant}-300`,
});

export const toastCloseIconCss: ThemeUIStyleObject = {
  position: 'absolute',
  right: 'sm',
  top: 'sm',
  cursor: 'pointer',
  color: 'b-600',
};
