/** @jsxImportSource theme-ui */
import React from 'react';
import * as styles from './button.styles';
import { Spinner } from '../spinner/spinner';
import { Icon } from '../icon/icon';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'gradient';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** the button variant
   * @default 'primary'
   */
  variant?: ButtonVariant;
  /** the button size
   * @default 'medium'
   */
  size?: ButtonSize;
  icon?: string;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  showContentWhileLoading?: boolean;
  active?: boolean;
  feature?: boolean;
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
    iconPosition,
    children,
    ...rest
  } = props;

  const renderSpacedIcon = (renderPosition: 'left' | 'right') => {
    if (!icon || loading || renderPosition !== iconPosition) return null;

    return (
      <span sx={styles.iconWrapperCss(renderPosition, !!children)}>
        <Icon name={icon} size="small" />
      </span>
    );
  };

  const renderSpacedSpinner = (renderPosition: 'left' | 'right') => {
    if (
      !loading ||
      (renderPosition !== iconPosition && iconPosition !== undefined) ||
      (iconPosition === undefined && renderPosition === 'left')
    )
      return null;

    return (
      <span sx={styles.iconWrapperCss(renderPosition, !!showContentWhileLoading)}>
        <Spinner variant="spiral" size="small" />
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
      })}
      disabled={isDisabledOrLoading}
      {...rest}>
      <ButtonContent />
    </button>
  );
};
