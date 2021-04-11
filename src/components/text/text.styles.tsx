import { ThemeUIStyleObject } from 'theme-ui';
import { colors } from '../../theme/theme.colors';
import { TextVariant } from './text';

export interface textCssProps {
  variant: TextVariant;
  color: keyof typeof colors;
}

export const textCss = (props: textCssProps): ThemeUIStyleObject => {
  const css: any = {
    variant: `text.${props.variant}`,
    color: props.color,
  };

  return css;
};
