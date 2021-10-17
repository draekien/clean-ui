// eslint-disable-next-line tsdoc/syntax
/** @jsxImportSource theme-ui */
import React from 'react';
import { Size } from '../../types/layouts';
import * as styles from './spinner.variants.styles';

export interface SpinnerVariantProps {
  size: Size;
}

export const mapSizeToRem = (size: Size) => {
  if (size === 'small') return '1rem';
  if (size === 'medium') return '2rem';
  return '3rem';
};

const spinnerId = 'clean_ui_spinner';

const Donut: React.FC<SpinnerVariantProps> = ({ size }) => {
  return <div id={spinnerId} sx={styles.donutSpinnerCss({ size })} />;
};

const Spiral: React.FC<SpinnerVariantProps> = ({ size }) => {
  return <div id={spinnerId} sx={styles.spiralSpinnerCss({ size })} />;
};

const Bars: React.FC<SpinnerVariantProps> = ({ size }) => {
  return (
    <div id={spinnerId} sx={styles.barsAndDotsContainerCss}>
      {[1, 2, 3].map((val) => (
        <div key={val} sx={styles.barsSpinnerCss({ size })} />
      ))}
    </div>
  );
};

const Dots: React.FC<SpinnerVariantProps> = ({ size }) => {
  return (
    <div id={spinnerId} sx={styles.barsAndDotsContainerCss}>
      {[1, 2, 3].map((val) => (
        <div key={val} sx={styles.dotsSpinnerCss({ size })} />
      ))}
    </div>
  );
};

export const SpinnerVariants = { Donut, Spiral, Bars, Dots };
