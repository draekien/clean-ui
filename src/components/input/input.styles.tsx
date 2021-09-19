import { ThemeUIStyleObject } from '@theme-ui/css';

export const inputContainerCss = (fullWidth: boolean): ThemeUIStyleObject => ({
  display: 'flex',
  flexFlow: 'column',
  width: fullWidth ? '100%' : 'auto',
});

export const labelCss: ThemeUIStyleObject = {
  variant: 'text.eyebrow',
  color: 'b-300',
};

export const inputWrapperCss: ThemeUIStyleObject = {
  position: 'relative',
  mt: 'xs',
  '> i': {
    position: 'absolute',
    left: 0,
    p: 'xs',
    border: '1px solid transparent',
    color: 'b-200',
  },
};

export const inputCss = (
  icon: boolean,
  variantColor: string,
  variantHoverColor: string
): ThemeUIStyleObject => ({
  py: 'xs',
  px: 'sm',
  pl: icon ? 'xxl' : 'sm',
  pr: 'lg',
  width: '100%',
  variant: 'text.body',
  color: 'b-500',
  borderRadius: 'sm',
  outline: 'none',
  border: '1px solid',
  borderColor: variantColor,
  transition: 'all 300ms',
  ':hover': {
    borderColor: variantHoverColor,
  },
  ':focus': {
    borderColor: 'b-500',
  },
});

export const helpTextCss = (variantColor: string): ThemeUIStyleObject => ({
  variant: 'text.small',
  color: variantColor,
});
