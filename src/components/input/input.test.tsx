import React from 'react';
import { hexToRgb, themedRender } from '../../helpers/testHelpers';
import { StatusVariant } from '../../types/variants';
import { colors } from '../theme/theme.colors';
import { Input, InputWrapper } from './input';

describe('Input Component', () => {
  it('Should match snapshot', () => {
    const { container } = themedRender(<Input inputId="test" />);

    expect(container).toMatchSnapshot();
  });

  const variants: StatusVariant[] = ['info', 'error', 'warning', 'success'];
  variants.forEach((variant) => {
    it(`Should render with correct styles when variant is ${variant}`, () => {
      const { container } = themedRender(<Input inputId="test" variant={variant} />);

      const styles = window.getComputedStyle(container.querySelector('input') as Element);
      expect(styles.borderColor).toBe(colors[`${variant}-300`]);
    });
  });
});

describe('Input Wrapper Component', () => {
  it('Should match snapshot', () => {
    const { container } = themedRender(
      <InputWrapper inputId="test" label="test">
        <Input inputId="test" />
      </InputWrapper>
    );

    expect(container).toMatchSnapshot();
  });

  const variants: StatusVariant[] = ['info', 'error', 'warning', 'success'];
  variants.forEach((variant) => {
    it(`Should render with correct styles when variant is ${variant}`, () => {
      const { container } = themedRender(
        <InputWrapper inputId="test" label="test" helpText="help" variant={variant}>
          <Input inputId="test" />
        </InputWrapper>
      );

      const styles = window.getComputedStyle(container.querySelector('small') as Element);
      expect(styles.color).toBe(hexToRgb(colors[`${variant}-300`]));
    });
  });
});
