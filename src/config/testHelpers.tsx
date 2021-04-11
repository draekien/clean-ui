import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '../components/theme/theme.provider';

export const themedRender = (element: ReactNode) =>
  render(<ThemeProvider>{element}</ThemeProvider>);
