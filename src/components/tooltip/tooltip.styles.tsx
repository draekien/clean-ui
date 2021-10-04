import { ThemeUIStyleObject } from 'theme-ui';
import { Position } from '../../hooks/useAutoPosition';

export const tooltipContainerCss: ThemeUIStyleObject = {
  display: 'inline-block',
  position: 'relative',
  width: '100%',
};

export const tooltipCss = (position: Position): ThemeUIStyleObject => {
  const css: any = {
    position: 'absolute',
    px: 'sm',
    py: 'xs',
    color: 'info-400',
    textAlign: 'center',
    backgroundColor: 'info-000',
    borderRadius: 'sm',
    variant: 'text.small',
    width: 'max-content',
    maxWidth: '20rem',
    visibility: 'hidden',
    zIndex: 'toast',
  };

  if (position === 'top') {
    css.marginBottom = '0.5rem';
    css.bottom = '100%';
    css.left = '50%';
    css.transform = 'translateX(-50%)';
    css.visibility = 'visible';
  }

  if (position === 'right') {
    css.marginLeft = '0.5rem';
    css.left = '100%';
    css.top = '50%';
    css.transform = 'translateY(-50%)';
    css.visibility = 'visible';
  }

  if (position === 'bottom') {
    css.marginTop = '0.5rem';
    css.top = '100%';
    css.left = '50%';
    css.transform = 'translateX(-50%)';
    css.visibility = 'visible';
  }

  if (position === 'left') {
    css.marginRight = '0.5rem';
    css.right = '100%';
    css.top = '50%';
    css.transform = 'translateY(-50%)';
    css.visibility = 'visible';
  }

  return css;
};

export const tooltipArrowCss = (position: Position): ThemeUIStyleObject => {
  const css: any = {
    position: 'absolute',
    width: 0,
    height: 0,
    borderColor: 'transparent',
    borderStyle: 'solid',
    zIndex: 'toast',
  };

  if (position === 'top') {
    css.left = '50%';
    css.bottom = '-0.25rem';
    css.marginLeft = '-0.25rem';
    css.borderWidth = '0.25rem 0.25rem 0';
    css.borderTopColor = 'info-000';
  }

  if (position === 'right') {
    css.top = '50%';
    css.right = '100%';
    css.marginTop = '-0.25rem';
    css.borderWidth = '0.25rem 0.25rem 0.25rem 0';
    css.borderRightColor = 'info-000';
  }

  if (position === 'bottom') {
    css.left = '50%';
    css.top = '-0.25rem';
    css.marginLeft = '-0.25rem';
    css.borderWidth = '0 0.25rem 0.25rem';
    css.borderBottomColor = 'info-000';
  }

  if (position === 'left') {
    css.top = '50%';
    css.left = '100%';
    css.marginTop = '-0.25rem';
    css.borderWidth = '0.25rem 0 0.25rem 0.25rem';
    css.borderLeftColor = 'info-000';
  }

  return css;
};
