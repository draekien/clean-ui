import { alpha } from '@theme-ui/color';
import { ThemeUIStyleObject } from '@theme-ui/css';
import { Theme } from 'theme-ui';

export const inputWrapperCss = (fullWidth: boolean): ThemeUIStyleObject => ({
  display: 'flex',
  flexFlow: 'column',
  width: fullWidth ? '100%' : 'auto',
});

export const labelContainerCss: ThemeUIStyleObject = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
};

export const labelCss: ThemeUIStyleObject = {
  variant: 'text.eyebrow',
  color: 'text-muted',
};

export const inputContainerCss: ThemeUIStyleObject = {
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
  color: string,
  hoverColor: string,
  focusColor: string,
  isDarkMode: boolean,
  disabled: boolean
): ThemeUIStyleObject => {
  const css: ThemeUIStyleObject = {
    py: 'xs',
    px: 'sm',
    pl: icon ? 'xxl' : 'sm',
    pr: 'lg',
    width: '100%',
    variant: 'text.body',
    color: 'text',
    backgroundColor: (t: Theme) => `${alpha('muted', isDarkMode ? 0.7 : 0.2)(t)}`,
    borderRadius: 'sm',
    outline: 'none',
    border: '2px solid',
    borderColor: color,
    transition: 'all 300ms',
  };

  if (disabled) {
    css.cursor = 'not-allowed';
    css.borderColor = isDarkMode ? 'b-600' : 'b-200';
    css.color = 'b-400';
  }

  if (!disabled) {
    css[':hover'] = {
      borderColor: hoverColor,
    };
    css[':focus'] = {
      borderColor: focusColor,
    };
  }

  return css;
};

export const helpTextCss = (variantColor: string): ThemeUIStyleObject => ({
  variant: 'text.small',
  color: variantColor,
});
