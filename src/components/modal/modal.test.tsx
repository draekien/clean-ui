import React from 'react';
import { themedRender } from '../../helpers/testHelpers';
import { Modal } from './modal';

describe('Modal component', () => {
  it('should match snapshot', () => {
    const { container } = themedRender(<Modal>test</Modal>);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when fullPage is true', () => {
    const { container } = themedRender(<Modal fullPage>test</Modal>);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when visible is true', () => {
    const { container } = themedRender(<Modal visible>test</Modal>);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when showCloseButton is true', () => {
    const { container } = themedRender(<Modal showCloseButton>test</Modal>);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when feature is true', () => {
    const { container } = themedRender(<Modal feature>test</Modal>);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when noPadding is true', () => {
    const { container } = themedRender(<Modal noPadding>test</Modal>);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when width is set', () => {
    const { container } = themedRender(<Modal width="40em">test</Modal>);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with header and footer', () => {
    const { container } = themedRender(
      <Modal header="header" footer="footer">
        test
      </Modal>
    );

    expect(container).toMatchSnapshot();
  });
});
