import React from 'react';
import { themedRender } from '../../helpers/testHelpers';
import { Overlay } from './overlay';

describe('Overlay component', () => {
  it('should match snapshot', () => {
    const { container } = themedRender(<Overlay>test</Overlay>);

    expect(container).toMatchSnapshot();
  });
});
