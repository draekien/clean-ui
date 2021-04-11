/** @jsxImportSource theme-ui */
import React from 'react';
import { Text as ThemeUiText } from 'theme-ui';
import { colors } from '../theme/theme.colors';
import * as styles from './text.styles';

export type TextVariant =
  | 'hero'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'subtitle'
  | 'body'
  | 'eyebrow'
  | 'small'
  | 'mono';

export interface TextProps {
  /** The type of DOM element to render
   * @default 'div'
   */
  as?: React.ElementType<any>;
  /** The text variant
   * @default 'body'
   */
  variant?: TextVariant;
  /** The color of the text
   * @default 'text'
   */
  color?: keyof typeof colors;
  /** The text to render */
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  as,
  variant = 'body',
  color = 'text',
  children,
}) => {
  return (
    <ThemeUiText as={as} sx={styles.textCss({ variant, color })}>
      {children}
    </ThemeUiText>
  );
};
