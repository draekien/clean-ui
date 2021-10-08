import { ThemeUIStyleObject } from 'theme-ui';
import { Size } from '../../types/layouts';
import { colors } from '../theme/theme.colors';

export interface IconCssProps {
  size: Size;
  color?: keyof typeof colors;
}

export const iconCss = ({ size, color }: IconCssProps): ThemeUIStyleObject => {
  const css: any = {
    verticalAlign: 'middle',
    color: color || 'inherit',
  };

  switch (size) {
    case 'small':
      css.fontSize = '1rem !important';
      break;
    case 'medium':
      css.fontSize = '1.5rem !important';
      break;
    case 'large':
      css.fontSize = '2rem !important';
      break;
  }

  return css;
};
