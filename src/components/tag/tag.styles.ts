import { alpha } from '@theme-ui/color';
import { ThemeUIStyleObject } from '@theme-ui/css';
import { Theme } from '../..';

export const tagContainerCss: ThemeUIStyleObject = {
  paddingY: 'xxs',
  backgroundColor: 'background-lighter',
  display: 'inline-flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: 'xs',
};

export const tagCss: ThemeUIStyleObject = {
  paddingX: 'xs',
};

export const closeButtonCss: ThemeUIStyleObject = {
  background: 'none',
  outline: 'none',
  border: 'none',
  paddingLeft: 'xxs',
  borderLeft: '1px solid',
  borderLeftColor: (t: Theme) => alpha('b-400', 0.25)(t),
  cursor: 'pointer',
  color: 'text',
  transition: 'all 100ms',
  ':hover': {
    color: 'error-300',
  },
  ':focus': {
    color: 'error-300',
  },
  ':active': {
    color: 'error-400',
  },
};
