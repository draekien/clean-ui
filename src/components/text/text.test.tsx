import React from 'react';
import { Text } from './text';
import { themedRender } from '../../helpers/testHelpers';
import { HorizontalAlignment } from '../../types/alignments';

describe('Text Component', () => {
  it('Should match snapshot', () => {
    const { container } = themedRender(<Text>Hero</Text>);

    expect(container).toMatchSnapshot();
  });

  it('Should render as block when fullwidth prop is true', () => {
    const { container } = themedRender(<Text fullWidth>Text</Text>);

    const styles = window.getComputedStyle(container.firstChild as Element);
    expect(styles.display).toBe('block');
  });

  it('Should render as inline-block when fullwidth prop is false', () => {
    const { container } = themedRender(<Text data-testid="text">Text</Text>);

    const styles = window.getComputedStyle(container.firstChild as Element);
    expect(styles.display).toBe('inline-block');
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

  it('Should truncate text when the truncate flag is true', () => {
    const { container } = themedRender(
      <Text truncate>Some really long text that requires truncating</Text>
    );

    const styles = window.getComputedStyle(container.firstChild as Element);
    expect(styles.overflow).toBe('hidden');
    expect(styles.textOverflow).toBe('ellipsis');
    expect(styles.whiteSpace).toBe('nowrap');
    expect(styles.maxWidth).toBe('100%');
  });

  const alignments: HorizontalAlignment[] = ['left', 'center', 'right'];

  alignments.map((textAlign) => {
    it(`Should align text ${textAlign} when textAlign is ${textAlign}`, () => {
      const { container } = themedRender(<Text textAlign={textAlign}>Text</Text>);

      const styles = window.getComputedStyle(container.firstChild as Element);
      expect(styles.textAlign).toBe(textAlign);
    });
  });
});
