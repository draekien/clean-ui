import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '../components/theme/theme.provider';

export const themedRender = (element: React.ReactNode) => {
  return render(<ThemeProvider>{element}</ThemeProvider>);
};

export const hexToRgb = (hex: string) => {
  hex = hex.replace(/[^0-9A-F]/gi, '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgb(${r}, ${g}, ${b})`;
};
