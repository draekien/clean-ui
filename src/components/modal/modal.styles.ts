import { ThemeUIStyleObject } from '@theme-ui/css';

export const modalContainerCss: ThemeUIStyleObject = {
  zIndex: 'modal',
};

export const modalWrapperCss: ThemeUIStyleObject = {
  opacity: 0,
  transition: 'all 300ms ease-in-out',
  zIndex: 'modal',
};

export const modalWrapperTransitionCss: any = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};
