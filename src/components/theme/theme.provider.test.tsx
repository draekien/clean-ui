import { render } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from './theme.provider';

describe('Theme Provider', () => {
  it('Should merge themes', () => {
    const theme = {
      space: { xl: '5rem' },
      __proto__: 'something bad',
      constructor: 'something worse',
    };
    const { container } = render(
      <ThemeProvider theme={theme}>
        <div />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
