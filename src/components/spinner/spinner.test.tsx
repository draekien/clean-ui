import { ThemeUIStyleObject } from '@theme-ui/css';
import React from 'react';
import { themedRender } from '../../helpers/testHelpers';
import { Size } from '../../types/layouts';
import { SpinnerVariant, Spinner } from './spinner';
import { halfOfSizeInRem, setBarSize, setDotSize } from './spinner.variants.styles';

describe('Spinner Component', () => {
  const variants: SpinnerVariant[] = ['bars', 'donut', 'dots', 'spiral'];
  const sizes: Size[] = ['small', 'medium', 'large'];

  variants.forEach((variant) => {
    it(`${variant} variant should match snapshot`, () => {
      const { container } = themedRender(<Spinner variant={variant} />);

      expect(container).toMatchSnapshot();
    });
  });

  sizes.forEach((size) => {
    it(`${size} spinner should render with correct size`, () => {
      const { container } = themedRender(<Spinner size={size} />);

      const styles = window.getComputedStyle(container.querySelector('div') as Element);
      switch (size) {
        case 'small':
          expect(styles.height).toBe('1rem');
          expect(styles.width).toBe('1rem');
          break;
        case 'medium':
          expect(styles.height).toBe('2rem');
          expect(styles.width).toBe('2rem');
          break;
        default:
          expect(styles.height).toBe('3rem');
          expect(styles.width).toBe('3rem');
          break;
      }
    });
  });

  it('Should render with overlay when fullPage is true', () => {
    const { container } = themedRender(<Spinner fullPage />);

    const styles = window.getComputedStyle(container.querySelector('div') as Element);
    expect(container).toMatchSnapshot();
    expect(styles.position).toBe('fixed');
    expect(styles.top).toBe('0px');
    expect(styles.right).toBe('0px');
    expect(styles.bottom).toBe('0px');
    expect(styles.left).toBe('0px');
  });

  describe('Spiral spinner variant', () => {
    describe('Size halving', () => {
      sizes.forEach((size) => {
        it(`Returns the half of ${size}`, () => {
          const half = halfOfSizeInRem(size);

          switch (size) {
            case 'large':
              expect(half).toBe('1.5rem');
              break;
            case 'medium':
              expect(half).toBe('1rem');
              break;
            default:
              expect(half).toBe('0.5rem');
              break;
          }
        });
      });
    });
  });

  describe('Bars spinner variant', () => {
    describe('Bar sizes', () => {
      sizes.forEach((size) => {
        it(`Returns the correct css properties for ${size}`, () => {
          const css: ThemeUIStyleObject = {};
          const result: ThemeUIStyleObject = { ...setBarSize(css, size) };

          switch (size) {
            case 'small':
              expect(result.height).toBe('0.75rem');
              expect(result.width).toBe('0.125rem');
              expect(result.ml).toBe('0.125rem');
              break;
            case 'medium':
              expect(result.height).toBe('1.25rem');
              expect(result.width).toBe('0.25rem');
              expect(result.ml).toBe('0.25rem');
              break;
            default:
              expect(result.height).toBe('1.75rem');
              expect(result.width).toBe('0.375rem');
              expect(result.ml).toBe('0.375rem');
              break;
          }
        });
      });
    });
  });

  describe('Dot spinner variant', () => {
    describe('Dot sizes', () => {
      sizes.forEach((size) => {
        it(`Returns the correct css properties for ${size}`, () => {
          const css: ThemeUIStyleObject = {};
          const result: ThemeUIStyleObject = { ...setDotSize(css, size) };

          switch (size) {
            case 'small':
              expect(result.height).toBe('0.25rem');
              expect(result.width).toBe('0.25rem');
              expect(result.ml).toBe('0.125rem');
              break;
            case 'medium':
              expect(result.height).toBe('0.5rem');
              expect(result.width).toBe('0.5rem');
              expect(result.ml).toBe('0.25rem');
              break;
            default:
              expect(result.height).toBe('0.75rem');
              expect(result.width).toBe('0.75rem');
              expect(result.ml).toBe('0.375rem');
              break;
          }
        });
      });
    });
  });
});
