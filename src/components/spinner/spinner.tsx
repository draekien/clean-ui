/** @jsxImportSource theme-ui */
import React from 'react';
import { Size } from '../../types/layouts';
import { SpinnerVariants } from './spinner.variants';
import { Overlay } from '../overlay/overlay';

export type SpinnerVariant = 'donut' | 'dots' | 'bars' | 'spiral';

export interface SpinnerProps {
  /** the type of spinner to render
   * @default 'donut'
   */
  variant?: SpinnerVariant;
  /** the size of the spinner to render
   * @default 'medium'
   */
  size?: Size;
  /** should the spinner take up the whole page?
   * @default false
   */
  fullPage?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({
  variant = 'donut',
  size = 'medium',
  fullPage = false,
}) => {
  const Spinner = () => {
    if (variant === 'spiral') {
      return <SpinnerVariants.Spiral size={size} />;
    }

    if (variant === 'bars') {
      return <SpinnerVariants.Bars size={size} />;
    }

    if (variant === 'dots') {
      return <SpinnerVariants.Dots size={size} />;
    }

    // default to donut
    return <SpinnerVariants.Donut size={size} />;
  };

  return fullPage ? (
    <Overlay>
      <Spinner />
    </Overlay>
  ) : (
    <Spinner />
  );
};
