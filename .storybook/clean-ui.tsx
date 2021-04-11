/** @jsxImportSource theme-ui */
import React, { useEffect } from 'react';
import { create } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import { useColorMode } from 'theme-ui';
import { ThemeProvider } from '../src/components/theme/theme.provider';

export const cleanUiStorybookTheme = create({ base: 'light' });

const ThemeChanger = () => {
  const isDarkMode = useDarkMode();
  const [, setColorMode] = useColorMode();

  useEffect(() => {
    setColorMode(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return <div />;
};

export const themeDecorator = (storyFn: any) => {
  return (
    <ThemeProvider>
      <ThemeChanger />
      {storyFn()}
    </ThemeProvider>
  );
};
