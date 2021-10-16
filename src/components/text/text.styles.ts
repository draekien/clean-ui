import { ThemeUIStyleObject } from 'theme-ui';
import { HorizontalAlignment } from '../../types/layouts';
import { colors } from '../theme/theme.colors';
import { textVariants } from '../theme/theme.variants';

export interface textCssProps {
  variant: keyof typeof textVariants;
  color: keyof typeof colors | 'inherit' | 'initial';
  textAlign: HorizontalAlignment;
  fullWidth: boolean;
  truncate: boolean;
}

export const textCss = ({
  variant,
  color,
  textAlign,
  truncate,
  fullWidth,
}: textCssProps): ThemeUIStyleObject => {
  const css: any = {
    variant: `text.${variant}`,
    color: color,
    display: fullWidth ? 'block' : 'inline-block',
    textAlign: textAlign,
    transition: 'all 300ms',
  };

  if (truncate) {
    css.overflow = 'hidden';
    css.textOverflow = 'ellipsis';
    css.whiteSpace = 'nowrap';
    css.display = 'inline-block';
    css.maxWidth = '100%';
  }

  return css;
};
