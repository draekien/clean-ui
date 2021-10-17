/** @jsxImportSource theme-ui */
import { FC } from 'react';
import { Size } from '../../types/layouts';
import { Spinner, SpinnerVariant } from '../spinner/spinner';
import { iconWrapperCss } from './button.styles';
import { ButtonAddonPosition } from './button.types';

/** The props required to render the button's spinner. */
export interface ButtonSpinnerProps {
  /**
   * The spinner variant to render.
   * @remarks
   * See {@link SpinnerVariant} for more details.
   * @defaultValue `'spiral'`
   */
  variant?: SpinnerVariant;
  /**
   * The size of the spinner to render.
   * @remarks
   * See {@link Size} for more details.
   * @defaultValue `'small'`
   */
  size?: Size;
  /**
   * Is the button in a loading state?
   * @remarks
   * The spinner will only render if loading is `true`
   */
  loading?: boolean;
  /**
   * The position of the spinner on the button.
   * @remarks
   * See {@link ButtonAddonPosition} for more details.
   */
  position?: ButtonAddonPosition;
  /**
   * The requested render position of the spinner on the button.
   * The spinner will only be rendered when this value matches the `position` property.
   * @remarks
   * See {@link ButtonAddonPosition} for more details.
   */
  renderPosition?: ButtonAddonPosition;
  /**
   * Does the button show content when loading?
   */
  showContentWhileLoading?: boolean;
}

/**
 * Renders a button's spinner.
 * @param props - the {@link ButtonSpinnerProps}
 * @returns A button spinner component.
 */
export const ButtonSpinner: FC<ButtonSpinnerProps> = ({
  variant = 'spiral',
  size = 'small',
  loading,
  position,
  renderPosition,
  showContentWhileLoading,
}) => {
  if (!loading) return null;
  if (renderPosition !== position) return null;
  if (!renderPosition) return null;

  return (
    <span sx={iconWrapperCss(renderPosition, !!showContentWhileLoading)}>
      <Spinner variant={variant} size={size} />
    </span>
  );
};
