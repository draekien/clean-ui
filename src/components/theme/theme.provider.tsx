/** @jsxImportSource theme-ui */
import React, { useEffect } from 'react';
import { ThemeProvider as ThemeUiProvider } from 'theme-ui';
import { CleanUiTheme, Theme } from './theme';

export interface CleanUiProps {
  theme?: Partial<Theme>;
  children: React.ReactNode;
}

const mergeThemes = (target: any, source: any) => {
  Object.keys(source).forEach((key) => {
    if (key === '__proto__' || key === 'constructor') return;

    if (source[key] && typeof source[key] === 'object') {
      mergeThemes((target[key] = target[key] || {}), source[key]);
      return;
    }

    target[key] = source[key];
  });
};

const addThemeFonts = () => {
  const fonts: { [key: string]: string } = {
    text:
      'https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;400;500;600;700&family=Fira+Code&display=swap',
    icons:
      'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp',
  };

  const preconnectLink = document.createElement('link');
  preconnectLink.rel = 'preconnect';
  preconnectLink.href = 'https://fonts.gstatic.com';
  document.head.appendChild(preconnectLink);

  Object.keys(fonts).forEach((key) => {
    const linkExists = document.getElementById(key);

    if (!linkExists) {
      const link = document.createElement('link');
      link.id = key;
      link.rel = 'stylesheet';
      link.href = fonts[key];
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  });
};

export const CleanUi = ({ theme, children }: CleanUiProps) => {
  const newTheme = JSON.parse(JSON.stringify(CleanUiTheme));

  if (theme) mergeThemes(newTheme, theme);

  useEffect(() => {
    addThemeFonts();
  }, []);

  return <ThemeUiProvider theme={newTheme}>{children}</ThemeUiProvider>;
};
