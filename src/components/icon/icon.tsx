/** @jsxImportSource theme-ui */
import React from 'react';
import { Size } from '../../types/layouts';
import { colors } from '../theme/theme.colors';
import * as styles from './icon.styles';

export type IconVariant = 'filled' | 'outlined' | 'round' | 'two-tone' | 'sharp';

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  /** the name of the material-icon */
  name: string;
  /** the material icon variant
   * @default 'filled'
   */
  variant?: IconVariant;
  /** the icon size
   * @default 'medium'
   */
  size?: Size;
  /** the color of the icon */
  color?: keyof typeof colors;
}

const getIconClassName = (variant?: IconVariant): string => {
  switch (variant) {
    case 'outlined':
    case 'round':
    case 'sharp':
    case 'two-tone':
      return `material-icons-${variant}`;
    default:
      return 'material-icons';
  }
};

export const Icon: React.FC<IconProps> = (props: IconProps) => {
  const { name, color, size = 'medium', variant = 'filled', className, ...rest } = props;

  return (
    <i
      sx={styles.iconCss({ size, color })}
      className={`${getIconClassName(variant)} ${className || ''}`}
      {...rest}>
      {name}
    </i>
  );
};
