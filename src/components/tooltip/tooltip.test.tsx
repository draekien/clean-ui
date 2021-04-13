import React from 'react';
import { themedRender } from '../../helpers/testHelpers';
import { Tooltip } from './tooltip';

const Element = () => <div id="test" style={{ width: '100px', height: '100px' }} />;

describe('Tooltip Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('Should match snapshot', () => {
    const { container } = themedRender(
      <Tooltip text="tooltip">
        <Element />
      </Tooltip>
    );

    expect(container).toMatchSnapshot();
    expect(container.querySelectorAll('div').length).toEqual(2);
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
});
