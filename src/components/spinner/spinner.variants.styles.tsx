import { ThemeUIStyleObject } from 'theme-ui';
import { keyframes } from '@emotion/react';
import { mapSizeToRem, SpinnerVariantProps } from './spinner.variants';

const rotation = keyframes`0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}`;

export const donutSpinnerCss = ({ size }: SpinnerVariantProps): ThemeUIStyleObject => {
  const css: ThemeUIStyleObject = {
    width: mapSizeToRem(size),
    height: mapSizeToRem(size),
    border: '0.25rem solid',
    borderColor: 'muted',
    borderBottomColor: 'primary',
    borderRadius: 'max',
    display: 'inline-flex',
    animation: `${rotation} 1s linear infinite`,
  };

  return css;
};

const spiral = keyframes`50% { transform: scale(1) translate(-50%, -50%)}`;

export const spiralSpinnerCss = ({ size }: SpinnerVariantProps): ThemeUIStyleObject => {
  const sizeInRem = mapSizeToRem(size);

  const css: ThemeUIStyleObject = {
    width: sizeInRem,
    height: sizeInRem,
    display: 'inline-flex',
    margin: '1rem auto',
    position: 'relative',
    color: 'muted',
    animation: `${rotation} 1s linear infinite`,
    '::before, ::after': {
      content: '""',
      position: 'absolute',
      width: '50%',
      height: '50%',
      top: '50%',
      left: '50%',
      transform: 'scale(0.5) translate(0,0)',
      backgroundColor: 'secondary',
      borderRadius: 'max',
      animation: `${spiral} 1s infinite ease-in-out`,
    },
    '::before': {
      backgroundColor: 'primary',
      transform: `scale(0.5) translate(-${sizeInRem}, -${sizeInRem})`,
    },
  };

  return css;
};

export const barsAndDotsContainerCss: ThemeUIStyleObject = {
  display: 'inline-flex',
  '> div:nth-of-type(1)': {
    animationDelay: '0',
    marginLeft: '0',
  },
  '> div:nth-of-type(2)': {
    animationDelay: '0.09s',
  },
  '> div:nth-of-type(3)': {
    animationDelay: '0.18s',
  },
};

const loadingBars = keyframes`
0% {
  transform: scale(1);
}

20% {
  transform: scale(1, 2);
}

40% {
  transform: scale(1);
}`;

export const barsSpinnerCss = ({ size }: SpinnerVariantProps): ThemeUIStyleObject => {
  const css: any = {
    animation: `${loadingBars} 1s ease-in-out infinite`,
    backgroundColor: 'primary',
    borderRadius: 'sm',
    display: 'inline-flex',
  };

  if (size === 'small') {
    css.height = '0.75rem';
    css.width = '0.125rem';
    css.ml = '0.125rem';
  } else if (size === 'medium') {
    css.height = '1.25rem';
    css.width = '0.25rem';
    css.ml = '0.25rem';
  } else {
    css.height = '1.75rem';
    css.width = '0.375rem';
    css.ml = '0.375rem';
  }

  return css;
};

const loadingDots = keyframes`
0% {
  transform: translateY(0);
}

20% {
  transform: translateY(-75%);
}

40% {
  transform: translateY(0);
}`;

export const dotsSpinnerCss = ({ size }: SpinnerVariantProps): ThemeUIStyleObject => {
  const css: any = {
    animation: `${loadingDots} 1s ease-in-out infinite`,
    backgroundColor: 'primary',
    display: 'inline-flex',
    borderRadius: 'max',
    ':nth-of-type(1)': { backgroundColor: 'p-400' },
    ':nth-of-type(2)': { backgroundColor: 'p-300' },
    ':nth-of-type(3)': { backgroundColor: 'p-200' },
  };

  if (size === 'small') {
    css.height = '0.25rem';
    css.width = '0.25rem';
    css.ml = '0.125rem';
  } else if (size === 'medium') {
    css.height = '0.5rem';
    css.width = '0.5rem';
    css.ml = '0.25rem';
  } else {
    css.height = '0.75rem';
    css.width = '0.75rem';
    css.ml = '0.375rem';
  }

  return css;
};
