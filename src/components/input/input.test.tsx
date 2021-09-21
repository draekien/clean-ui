import React from 'react';
import { themedRender } from '../../helpers/testHelpers';
import { StatusVariant } from '../../types/variants';
import { colors } from '../theme/theme.colors';
import { Input } from './input';

describe('Input Component', () => {
  it('Should match snapshot', () => {
    const { container } = themedRender(<Input inputId="test" label="test" />);

    expect(container).toMatchSnapshot();
  });

  const variants: StatusVariant[] = ['info', 'error', 'warning', 'success'];
  variants.forEach((variant) => {
    it(`Should render with correct styles when variant is ${variant}`, () => {
      const { container } = themedRender(
        <Input inputId="test" label="test" variant={variant} />
      );

      const styles = window.getComputedStyle(container.querySelector('input') as Element);
      expect(styles.borderColor).toBe(colors[`${variant}-300`]);
    });
  });
});
