import { alpha } from '@theme-ui/color';
import { ThemeUIStyleObject } from '@theme-ui/css';
import { Theme } from 'theme-ui';

export const inputContainerCss = (fullWidth: boolean): ThemeUIStyleObject => ({
  display: 'flex',
  flexFlow: 'column',
  width: fullWidth ? '100%' : 'auto',
});

export const labelCss: ThemeUIStyleObject = {
  variant: 'text.eyebrow',
  color: 'text-muted',
};

export const inputWrapperCss: ThemeUIStyleObject = {
  position: 'relative',
  mt: 'xs',
  '> i': {
    position: 'absolute',
    left: 0,
    p: 'xs',
    border: '1px solid transparent',
    color: 'b-400',
  },
};

export const inputCss = (
  icon: boolean,
  variantColor: string,
  variantHoverColor: string,
  variantFocusColor: string,
  isDarkMode: boolean
): ThemeUIStyleObject => ({
  py: 'xs',
  px: 'sm',
  pl: icon ? 'xxl' : 'sm',
  pr: 'lg',
  width: '100%',
  variant: 'text.body',
  color: 'text',
  backgroundColor: (t: Theme) => `${alpha('muted', isDarkMode ? 0.7 : 0.3)(t)}`,
  borderRadius: 'sm',
  outline: 'none',
  border: '2px solid',
  borderColor: variantColor,
  transition: 'all 300ms',
  ':hover': {
    borderColor: variantHoverColor,
  },
  ':focus': {
    borderColor: variantFocusColor,
  },
});

export const helpTextCss = (variantColor: string): ThemeUIStyleObject => ({
  variant: 'text.small',
  color: variantColor,
});
