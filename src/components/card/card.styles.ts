import { Theme, ThemeUIStyleObject } from '@theme-ui/css';
import { alpha } from '@theme-ui/color';
import { Size } from '../../types/layouts';
import { abbreviate } from '../../utils/size-converter.util';
import { colors } from '../theme/theme.colors';

export interface CardContainerCssProps {
  /** should the card take up the full width of the parent container?
   *  @default false
   */
  fullWidth?: boolean;
  /** the width of the card. This is overriden if fullWidth is true
   *  @default '20em'
   */
  width?: string | number | string[] | number[];
  maxHeight?: string | number;
  /** the background color of the card
   *  @default 'background-lighter'
   */
  backgroundColor?: keyof typeof colors;
  /** the border color of the card
   *  @default 'border'
   */
  borderColor?: keyof typeof colors;
  /** the layout variants of the card. This determins the amount of
   *  padding, box shadow, and border radius on the card
   *  @default 'medium'
   */
  variant?: Size;
  /** should the card be rendered with a gradient background?
   *  @default false
   */
  feature?: boolean;
  /** should the card render without a dropshadow? */
  noShadow?: boolean;
  /** should the card render without padding? */
  noPadding?: boolean;
}

export const cardContainerCss = ({
  fullWidth,
  width,
  maxHeight,
  backgroundColor,
  borderColor,
  variant,
  feature,
  noShadow,
  noPadding,
}: CardContainerCssProps): ThemeUIStyleObject => {
  const size = abbreviate(variant || 'medium');
  const css: ThemeUIStyleObject = {
    display: fullWidth ? 'flex' : 'inline-flex',
    flexFlow: 'column',
    width: fullWidth ? '100%' : width,
    maxHeight: !maxHeight ? 'initial' : maxHeight,
    boxShadow: noShadow ? 'none' : size,
    padding: size,
    borderRadius: size,
  };

  if (feature) {
    css.background = (t: Theme) =>
      `linear-gradient(to right, ${alpha('p-400', 1)(t)} 0%, ${alpha(
        's-400',
        1
      )(t)} 51%, ${alpha('p-400', 1)(t)} 100%)`;
    css.color = 'b-000';
    css.backgroundSize = '200% auto';
  } else {
    css.backgroundColor = backgroundColor;
  }

  if (noShadow) {
    css.border = '1px solid';
    css.borderColor = borderColor;
  }

  if (noPadding) {
    css.padding = 0;
  }

  return css;
};

export const cardHeaderCss = (variant: Size): ThemeUIStyleObject => {
  const size = abbreviate(variant);
  const css: ThemeUIStyleObject = {
    pb: size,
  };

  return css;
};

export const cardFooterCss = (variant: Size): ThemeUIStyleObject => {
  const size = abbreviate(variant);
  const css: ThemeUIStyleObject = {
    pt: size,
  };

  return css;
};
