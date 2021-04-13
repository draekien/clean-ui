import React from 'react';
import { themedRender } from '../../helpers/testHelpers';
import { SpinnerVariant, Spinner } from './spinner';

describe('Spinner Component', () => {
  const variants: SpinnerVariant[] = ['bars', 'donut', 'dots', 'spiral'];

  variants.map((variant) => {
    it(`${variant} variant should match snapshot`, () => {
      const { container } = themedRender(<Spinner variant={variant} />);

      expect(container).toMatchSnapshot();
    });
  });
});
