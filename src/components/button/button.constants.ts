import { alpha } from '@theme-ui/color';
import { Theme } from '@theme-ui/css';
import { ButtonColorDefinitions } from './button.types';

/** The colors used in the primary button variant. */
export const primaryColors: ButtonColorDefinitions = {
  normal: {
    content: 'b-000',
    border: 'p-400',
    background: 'p-400',
  },
  hover: {
    border: 'p-300',
    background: 'p-300',
  },
  active: {
    border: 'p-200',
    background: 'p-200',
  },
};

/** The colors used in the secondary button variant. */
export const secondaryColors: ButtonColorDefinitions = {
  normal: {
    content: 'b-000',
    border: 's-400',
    background: 's-400',
  },
  hover: {
    border: 's-300',
    background: 's-300',
  },
  active: {
    border: 's-200',
    background: 's-200',
  },
};

/** The colors used in the outline button variant */
export const outlineColors: ButtonColorDefinitions = {
  normal: {
    content: 'p-400',
    border: 'p-400',
    background: 'transparent',
  },
  hover: {
    border: 'p-300',
    background: 'transparent',
  },
  active: {
    border: 'p-200',
    background: 'transparent',
  },
};

/** The colors used in the text and link button variants. */
export const textColors: ButtonColorDefinitions = {
  normal: {
    content: 'p-400',
    border: 'p-400',
  },
  hover: {
    content: 'p-300',
    border: 'p-300',
    background: (t: Theme) => `${alpha('b-200', 0.25)(t)}`,
  },
  active: {
    content: 'p-200',
    border: 'p-200',
    background: (t: Theme) => `${alpha('b-300', 0.25)(t)}`,
  },
};

/** The colors used in the gradient button variant. */
export const gradientColors: ButtonColorDefinitions = {
  normal: {
    content: 'b-000',
    border: 'transparent',
    background: (t: Theme) =>
      'linear-gradient(to right, ' +
      alpha('p-400', 1)(t) +
      ' 0%, ' +
      alpha('s-400', 1)(t) +
      ' 51%, ' +
      alpha('p-400', 1)(t) +
      ' 100%)',
  },
};
