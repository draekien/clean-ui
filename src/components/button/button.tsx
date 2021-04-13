/** @jsxImportSource theme-ui */
import React from 'react';
import * as styles from './button.styles';

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
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
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
    children,
    ...rest
  } = props;

  const ButtonContent = () => {
    const shouldRenderChildren = !loading;

    return <span>{shouldRenderChildren && children}</span>;
  };

  const isDisabledOrLoading = disabled || loading;

  return (
    <button
      sx={styles.buttonCss({
        variant,
        size,
        disabled,
        fullWidth,
        loading,
        active,
        feature,
      })}
      disabled={isDisabledOrLoading}
      {...rest}>
      <ButtonContent />
    </button>
  );
};
