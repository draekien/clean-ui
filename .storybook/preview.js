import { themeDecorator } from './clean-ui';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  darkMode: {},
};
export const decorators = [themeDecorator];
