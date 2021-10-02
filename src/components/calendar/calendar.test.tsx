import React from 'react';
import { themedRender } from '../../helpers/testHelpers';
import { Calendar } from './calendar';

describe('Calendar component', () => {
  it('should match snapshot', () => {
    const { container } = themedRender(<Calendar value={[new Date(2021, 1, 1)]} />);

    expect(container).toMatchSnapshot();
  });

  it('should render the specified month', () => {
    const { container } = themedRender(<Calendar initialMonth={new Date(2021, 2, 1)} />);

    expect(container.innerHTML).toContain('March');
  });
});
