/** @jsxImportSource theme-ui */
import React from 'react';
import { Text as ThemeUiText } from 'theme-ui';
import { colors } from '../theme/theme.colors';
import { textVariants } from '../theme/theme.variants';
import { HorizontalAlignment } from '../../types/alignments';
import * as styles from './text.styles';

export interface TextProps {
  /** The type of DOM element to render
   * @default 'div'
   */
  as?: React.ElementType<any>;
  /** The text variant
   * @default 'body'
   */
  variant?: keyof typeof textVariants;
  /** The color of the text
   * @default 'text'
   */
  color?: keyof typeof colors;
  /** The text to render */
  children: React.ReactNode;
  /** horizontal alignment of the text
   * @default 'left'
   */
  textAlign?: HorizontalAlignment;
  /** should text take up the full width of the parent container */
  fullWidth?: boolean;
  /** should text be truncated instead of overflow */
  truncate?: boolean;
}

export const Text: React.FC<TextProps> = ({
  as,
  children,
  variant = 'body',
  color = 'text',
  textAlign = 'left',
  truncate = false,
  fullWidth = false,
}) => {
  return (
    <ThemeUiText
      as={as}
      sx={styles.textCss({ variant, color, textAlign, truncate, fullWidth })}>
      {children}
    </ThemeUiText>
  );
};
