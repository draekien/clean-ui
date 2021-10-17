import React from 'react';
import { Checkbox } from './checkbox';
import { themedRender } from '../../helpers/testHelpers';

describe('Checkbox component', () => {
  it('should match snapshot', () => {
    const { container } = themedRender(<Checkbox />);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when checked', () => {
    const { container } = themedRender(<Checkbox checked />);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when disabled', () => {
    const { container } = themedRender(<Checkbox disabled />);

    expect(container).toMatchSnapshot();
  });
});
