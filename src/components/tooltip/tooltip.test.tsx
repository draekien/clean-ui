import React from 'react';
import { themedRender } from '../../config/testHelpers';
import { Tooltip } from './tooltip';

describe('Tooltip Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('Should match snapshot', () => {
    const { container } = themedRender(<Tooltip text="tooltip">Tooltip</Tooltip>);

    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
});
