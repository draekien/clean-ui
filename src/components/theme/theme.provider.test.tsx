import { render } from '@testing-library/react';
import React from 'react';
import { CleanUi } from './theme.provider';

describe('Theme Provider', () => {
  it('Should merge themes', () => {
    const theme = {
      space: { xl: '5rem' },
      __proto__: 'something bad',
      constructor: 'something worse',
    };
    const { container } = render(
      <CleanUi theme={theme}>
        <div />
      </CleanUi>
    );

    expect(container).toMatchSnapshot();
  });
});
