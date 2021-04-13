import React from 'react';
import { themedRender } from '../../helpers/testHelpers';
import { Icon } from './icon';

describe('Icon Component', () => {
  it('Should match snapshot', () => {
    const { container } = themedRender(<Icon name="accessibility" />);

    expect(container).toMatchSnapshot();
  });
});
