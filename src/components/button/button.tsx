/** @jsxImportSource theme-ui */
import { ButtonHTMLAttributes, FC, SyntheticEvent } from 'react';
import * as styles from './button.styles';
import { useDynamicIcon } from './button.fx';
import { ButtonIcon } from './button.icon';
import { ButtonSpinner } from './button.spinner';
import { ButtonVariant } from './button.types';
import { SpinnerVariant } from '../spinner/spinner';
import { Size } from '../../types/layouts';

/** The props required to render a button component. */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** the type of button to render
   * @defaultValue 'primary'
   */
  variant?: ButtonVariant;
  /** the size of the rendered button
   * @defaultValue 'medium'
   */
  size?: Size;
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
  onClick?: (e: SyntheticEvent<HTMLButtonElement, MouseEvent>) => any;
}

export const Button: FC<ButtonProps> = ({
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
      <ButtonSpinner
        variant={spinnerVariant}
        size={iconSize}
        loading={loading}
        position="left"
        renderPosition={iconPosition}
        showContentWhileLoading={showContentWhileLoading}
      />
      <ButtonIcon
        name={icon}
        size={iconSize}
        position="left"
        renderPosition={iconPosition}
        loading={loading}
        buttonHasChildren={!!children}
      />
      {(!loading || showContentWhileLoading) && children}
      <ButtonIcon
        name={icon}
        size={iconSize}
        position="right"
        renderPosition={iconPosition}
        loading={loading}
        buttonHasChildren={!!children}
      />
      <ButtonSpinner
        variant={spinnerVariant}
        size={iconSize}
        loading={loading}
        position="right"
        renderPosition={iconPosition}
        showContentWhileLoading={showContentWhileLoading}
      />
    </button>
  );
};
