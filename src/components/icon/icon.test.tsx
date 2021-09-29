import React from 'react';
import { themedRender } from '../../helpers/testHelpers';
import { Icon, IconVariant } from './icon';

describe('Icon Component', () => {
  const iconVariants: IconVariant[] = [
    'filled',
    'outlined',
    'round',
    'sharp',
    'two-tone',
  ];

  describe('Icon variants', () => {
    iconVariants.forEach((variant) => {
      it(`${variant} should match snapshot`, () => {
        const { container } = themedRender(
          <Icon variant={variant} name="accessibility" />
        );

        expect(container).toMatchSnapshot();
      });

      it(`${variant} should have correct classname`, () => {
        const { container } = themedRender(
          <Icon variant={variant} name="accessibility" />
        );

        const icon = container.querySelector('i') as Element;
        if (variant === 'filled') {
          expect(icon.className).toContain('material-icons');
        } else {
          expect(icon.className).toContain(`material-icons-${variant}`);
        }
      });
    });
  });

  describe('Icon with tooltip', () => {
    it('Should render with tooltip component', () => {
      const { container } = themedRender(<Icon name="accessibility" tooltip="tooltip" />);

      expect(container).toMatchSnapshot();
      expect(container.innerHTML).toContain('Tooltip');
    });
  });
});
