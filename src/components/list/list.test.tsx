import React from 'react';
import { List, ListData, ListVariant } from './list';
import { themedRender } from '../../helpers/testHelpers';
import { Direction } from '../../types/layouts';

describe('List Component', () => {
  const variants: ListVariant[] = ['description', 'ordered', 'unordered'];
  const directions: Direction[] = ['column', 'row'];
  const data: ListData = {
    label: 'Critical Role Cast Members',
    rows: [
      'Travis Willingham',
      'Laura Bailey',
      'Ashleigh Johnson',
      'Sam Riegal',
      'Matthew Mercer',
      'Marisha Ray',
      "Liam O'Brian",
      'Talisen Jaffe',
    ],
  };

  variants.forEach((variant) => {
    it(`${variant} should match snapshot`, () => {
      const { container } = themedRender(<List variant={variant} data={data} />);

      expect(container).toMatchSnapshot();
    });
  });

  directions.forEach((direction) => {
    variants.forEach((variant) => {
      it(`${variant} renders correctly for the ${direction} direction`, () => {
        const { container } = themedRender(
          <List variant={variant} data={data} direction={direction} />
        );

        let query: string;

        switch (variant) {
          case 'description':
            query = 'dd';
            break;
          default:
            query = 'li';
            break;
        }

        const styles = window.getComputedStyle(container.querySelector(query) as Element);
        if (direction === 'column') {
          expect(styles.display).toBe('flex');
        } else {
          expect(styles.display).toBe('inline-flex');
        }
      });
    });
  });
});
