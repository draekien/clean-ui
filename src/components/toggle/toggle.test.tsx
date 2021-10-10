import React from 'react';
import { Toggle } from './toggle';
import { themedRender } from '../../helpers/testHelpers';

describe('Toggle component', () => {
  it('should match snapshot', () => {
    const { container } = themedRender(<Toggle inputId="toggle" on="on" off="off" />);

    expect(container).toMatchSnapshot();
  });
});
