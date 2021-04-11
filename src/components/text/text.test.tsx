import React from 'react';
import { Text } from './text';
import { themedRender } from '../../config/testHelpers';

describe('Text Component', () => {
  it('Should match snapshot', () => {
    const { container } = themedRender(<Text>Hero</Text>);

    expect(container).toMatchSnapshot();
  });

  it('Should render with Hero font styles when variant prop is hero', () => {
    const { container } = themedRender(<Text variant="hero">Hero</Text>);

    const styles = window.getComputedStyle(container.firstChild as Element);
    expect(styles.fontSize).toBe('6rem');
    expect(styles.fontWeight).toBe('700');
  });

  it('Should render with Primary color when color prop is primary', () => {
    const { container } = themedRender(<Text color="primary">Primary Color</Text>);

    const styles = window.getComputedStyle(container.firstChild as Element);
    expect(styles.color).toBe('rgb(239, 128, 47)');
  });
});
