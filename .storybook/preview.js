import { themeDecorator } from './clean-ui';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  darkMode: {},
};
export const decorators = [themeDecorator];
