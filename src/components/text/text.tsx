/** @jsxImportSource theme-ui */
import React from 'react';
import { Text as ThemeUiText } from 'theme-ui';
import { colors } from '../theme/theme.colors';

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
   * @example 'p'
   */
  as?: React.ElementType<any>;
  /** The text variant
   * @default 'body'
   */
  variant?: TextVariant;
  /** @default 'text' */
  color?: keyof typeof colors;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  as,
  variant = 'body',
  color = 'text',
  children,
}) => {
  return (
    <ThemeUiText as={as} sx={{ variant: `text.${variant}`, color: color }}>
      {children}
    </ThemeUiText>
  );
};
