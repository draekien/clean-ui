import React from 'react';
import { Tag } from './tag';
import { themedRender } from '../../helpers/testHelpers';

describe('Tag component', () => {
  it('should match snapshot', () => {
    const { container } = themedRender(<Tag value="tag" onClose={() => {}} />);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when onClose is undefined', () => {
    const { container } = themedRender(<Tag value="tag" />);

    expect(container).toMatchSnapshot();
  });
});
