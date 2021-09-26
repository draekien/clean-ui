import React from 'react';
import { themedRender } from '../../helpers/testHelpers';
import { Toast } from './toast';

describe('Toast component', () => {
  it('Should match snapshot', () => {
    const { container } = themedRender(
      <Toast title="toast" message="message" onClose={() => {}} onClick={() => {}} />
    );

    expect(container).toMatchSnapshot();
  });
});
