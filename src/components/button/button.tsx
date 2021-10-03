/** @jsxImportSource theme-ui */
import React from 'react';
import * as styles from './button.styles';
import { Spinner, SpinnerVariant } from '../spinner/spinner';
import { Icon } from '../icon/icon';
import { Size } from '../../types/layouts';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'gradient' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** the type of button to render
   * @default 'primary'
   */
  variant?: ButtonVariant;
  /** the size of the rendered button
   * @default 'medium'
   */
  size?: ButtonSize;
  /** the name of the material icon to render */
  icon?: string;
  iconSize?: Size;
  /** the position of the icon in the button */
  iconPosition?: 'left' | 'right';
  /** should the button render as disabled?
   * @default false
   */
  disabled?: boolean;
  /** should the button take up the full width of the parent container?
   * @default false
   */
  fullWidth?: boolean;
  /** should the button render as loading?
   * @default false
   */
  loading?: boolean;
  /** should the button render content while in the loading state?
   * @default false
   */
  showContentWhileLoading?: boolean;
  /** should the button render in the active state?
   * @default false
   */
  active?: boolean;
  /** should the button render in the featured state?
   * @default false
   */
  feature?: boolean;
  /** the spinner variant to use when loading
   * @default 'spiral'
   */
  spinnerVariant?: SpinnerVariant;
  /** should the button be rendered as a circle?
   *  this only works when there is no button text.
   *  @default 'false'
   */
  circle?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) => any;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    variant = 'primary',
    size = 'medium',
    disabled = false,
    fullWidth = false,
    loading = false,
    active = false,
    feature = false,
    showContentWhileLoading = false,
    icon,
    iconSize = 'small',
    iconPosition,
    children,
    spinnerVariant = 'spiral',
    circle = false,
    ...rest
  } = props;

  const renderSpacedIcon = (renderPosition: 'left' | 'right') => {
    if (!icon || loading || renderPosition !== iconPosition) return null;

    return (
      <span sx={styles.iconWrapperCss(renderPosition, !!children)}>
        <Icon name={icon} size={iconSize} />
      </span>
    );
  };

  const renderSpacedSpinner = (renderPosition: 'left' | 'right') => {
    if (
      !loading ||
      (renderPosition !== iconPosition && iconPosition) ||
      (!iconPosition && renderPosition === 'left')
    )
      return null;

    return (
      <span sx={styles.iconWrapperCss(renderPosition, !!showContentWhileLoading)}>
        <Spinner variant={spinnerVariant} size={iconSize} />
      </span>
    );
  };

  const ButtonContent = () => {
    const shouldRenderChildren = !loading || showContentWhileLoading;

    return (
      <>
        {renderSpacedSpinner('left')}
        {renderSpacedIcon('left')}
        <span>{shouldRenderChildren && children}</span>
        {renderSpacedIcon('right')}
        {renderSpacedSpinner('right')}
      </>
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
        circle,
      })}
      disabled={isDisabledOrLoading}
      {...rest}>
      <ButtonContent />
    </button>
  );
};
