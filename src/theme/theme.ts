import { Theme as ThemeUiTheme } from '@theme-ui/css';
import { colors } from './theme.colors';
import { layouts } from './theme.layouts';
import { styles } from './theme.styles';
import { typography } from './theme.typography';
import { variants } from './theme.variants';

export type Theme = Partial<{}>;

export const CleanUiTheme: ThemeUiTheme = {
  useCustomProperties: false,
  useBorderBox: true,
  useRootStyles: true,
  useLocalStorage: true,
  breakpoints: ['40em', '56em', '64em'],
  colors,
  styles,
  ...variants,
  ...layouts,
  ...typography,
};
