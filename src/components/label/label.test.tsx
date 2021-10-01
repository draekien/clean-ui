import React from 'react';
import { themedRender } from '../../helpers/testHelpers';
import { Label } from './label';

describe('Label component', () => {
  it('should match snapshot', () => {
    const { container } = themedRender(<Label htmlFor="myId">My label</Label>);

    expect(container).toMatchSnapshot();
  });
});
