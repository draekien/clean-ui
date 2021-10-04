import React from 'react';
import { themedRender } from '../../helpers/testHelpers';
import { DropdownButton } from '../..';

describe('Dropdown button component', () => {
  it('should match snapshot', () => {
    const { container } = themedRender(
      <DropdownButton
        value="select"
        items={{
          rows: [
            'Travis Willingham',
            'Laura Bailey',
            'Ashleigh Johnson',
            'Sam Riegal',
            'Matthew Mercer',
            'Marisha Ray',
            "Liam O'Brian",
            'Talisen Jaffe',
            'Percival Fredrickstein von Musel Klossowski de Rolo III',
          ],
        }}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
