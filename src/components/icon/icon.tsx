// eslint-disable-next-line tsdoc/syntax
/** @jsxImportSource theme-ui */
import React from 'react';
import { Size } from '../../types/layouts';
import { colors } from '../theme/theme.colors';
import { Tooltip } from '../tooltip/tooltip';
import * as styles from './icon.styles';

export type IconVariant = 'filled' | 'outlined' | 'round' | 'two-tone' | 'sharp';

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  /** the name of the material-icon */
  name: string;
  /** the material icon variant
   * @defaultValue 'filled'
   */
  variant?: IconVariant;
  /** the icon size
   * @defaultValue 'medium'
   */
  size?: Size;
  /** the color of the icon */
  color?: keyof typeof colors;
  /** the tooltip text to display on the icon */
  tooltip?: string;
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
  const {
    name,
    color,
    size = 'medium',
    variant = 'filled',
    className,
    tooltip,
    ...rest
  } = props;

  const icon = (
    <i
      sx={styles.iconCss({ size, color })}
      className={`${getIconClassName(variant)} ${className || ''}`}
      {...rest}>
      {name}
    </i>
  );

  if (tooltip) {
    return <Tooltip text={tooltip}>{icon}</Tooltip>;
  }

  return icon;
};
