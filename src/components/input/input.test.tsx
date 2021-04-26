import React from 'react';
import { themedRender } from '../../helpers/testHelpers';
import { Input } from './input';

describe('Input Component', () => {
  it('Should match snapshot', () => {
    const { container } = themedRender(<Input id="test" label="test" />);

    expect(container).toMatchSnapshot();
  });
});
