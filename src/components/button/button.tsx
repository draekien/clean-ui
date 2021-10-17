// eslint-disable-next-line tsdoc/syntax
/** @jsxImportSource theme-ui */
import React from 'react';
import * as styles from './button.styles';
import { useDynamicIcon } from './button.fx';
import { Spinner, SpinnerVariant } from '../spinner/spinner';
import { Icon } from '../icon/icon';
import { Size } from '../../types/layouts';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'gradient'
  | 'text'
  | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** the type of button to render
   * @defaultValue 'primary'
   */
  variant?: ButtonVariant;
  /** the size of the rendered button
   * @defaultValue 'medium'
   */
  size?: ButtonSize;
  /** the name of the material icon to render */
  icon?: string;
  iconSize?: Size;
  /** the position of the icon in the button */
  iconPosition?: 'left' | 'right';
  /** should the button render as disabled?
   * @defaultValue false
   */
  disabled?: boolean;
  /** should the button take up the full width of the parent container?
   * @defaultValue false
   */
  fullWidth?: boolean;
  /** should the button render as loading?
   * @defaultValue false
   */
  loading?: boolean;
  /** should the button render content while in the loading state?
   * @defaultValue false
   */
  showContentWhileLoading?: boolean;
  /** should the button render in the active state?
   * @defaultValue false
   */
  active?: boolean;
  /** should the button render in the featured state?
   * @defaultValue false
   */
  feature?: boolean;
  /** the spinner variant to use when loading
   * @defaultValue 'spiral'
   */
  spinnerVariant?: SpinnerVariant;
  /** should the button be rendered as a circle?
   *  this only works when there is no button text.
   *  @defaultValue 'false'
   */
  circle?: boolean;
  onClick?: (e: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) => any;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  loading = false,
  active = false,
  feature = false,
  showContentWhileLoading = false,
  iconSize = 'small',
  iconPosition,
  children,
  spinnerVariant = 'spiral',
  circle = false,
  ...rest
}: ButtonProps) => {
  const { icon } = useDynamicIcon(rest.icon);

  const renderSpacedIcon = (renderPosition: 'left' | 'right') => {
    if (!icon) return null;
    if (loading) return null;
    if (renderPosition !== iconPosition) return null;

    return (
      <span sx={styles.iconWrapperCss(renderPosition, !!children)}>
        <Icon name={icon} size={iconSize} />
      </span>
    );
  };

  const renderSpacedSpinner = (renderPosition: 'left' | 'right') => {
    if (!loading) return null;
    if (renderPosition !== iconPosition && iconPosition) return null;
    if (!iconPosition && renderPosition === 'left') return null;

    return (
      <span sx={styles.iconWrapperCss(renderPosition, !!showContentWhileLoading)}>
        <Spinner variant={spinnerVariant} size={iconSize} />
      </span>
    );
  };

  const isDisabledOrLoading = disabled || loading;

  return (
    <button
      sx={styles.buttonCss({
        variant,
        size,
        disabled: isDisabledOrLoading,
        fullWidth,
        loading,
        active,
        feature,
        showContentWhileLoading,
        iconPosition,
        hasText: !!children,
        hasIcon: !!icon,
        circle,
      })}
      disabled={isDisabledOrLoading}
      {...rest}>
      {renderSpacedSpinner('left')}
      {renderSpacedIcon('left')}
      {(!loading || showContentWhileLoading) && children}
      {renderSpacedIcon('right')}
      {renderSpacedSpinner('right')}
    </button>
  );
};
