import React from 'react';
import { themedRender } from '../../helpers/testHelpers';
import { TextInput } from './input.text.pattern';

describe('Text input pattern', () => {
  it('should match snapshot', () => {
    const { container } = themedRender(<TextInput inputId="text" label="text" />);

    expect(container).toMatchSnapshot();
  });
});
