import React from 'react';
import { themedRender } from '../../helpers/testHelpers';
import { SelectInput } from './input.select.pattern';

const rows = [
  'Travis Willingham',
  'Laura Bailey',
  'Ashleigh Johnson',
  'Sam Riegal',
  'Matthew Mercer',
  'Marisha Ray',
  "Liam O'Brian",
  'Talisen Jaffe',
  'Percival Fredrickstein von Musel Klossowski de Rolo III',
];

describe('The select input pattern', () => {
  it('Should match snapshot when mode is single', () => {
    const { container } = themedRender(
      <SelectInput
        inputId="test"
        value="Travis Willingham"
        items={{ rows }}
        label="test"
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('Should match snapshot when mode is multiple', () => {
    const { container } = themedRender(
      <SelectInput
        inputId="test"
        value="Travis Willingham"
        items={{ rows }}
        label="test"
        multiple
      />
    );

    expect(container).toMatchSnapshot();
  });
});
