import React from 'react';
import { hexToRgb, themedRender } from '../../helpers/testHelpers';
import { abbreviate } from '../../utils/size-converter.util';
import { layouts } from '../theme/theme.layouts';
import { Size } from '../../types/layouts';
import { Card } from './card';
import { colors } from '../theme/theme.colors';

describe('Card Component', () => {
  it('Should match snapshot', () => {
    const { container } = themedRender(<Card>Card</Card>);

    expect(container).toMatchSnapshot();
  });

  it('Should render header and footer when provided', () => {
    const { container } = themedRender(
      <Card header="header" footer="footer">
        Card
      </Card>
    );

    expect(container.innerHTML).toContain('header');
    expect(container.innerHTML).toContain('footer');
  });

  it('Should render with full width when full width prop is true', () => {
    const { container } = themedRender(<Card fullWidth>Card</Card>);

    const styles = window.getComputedStyle(container.querySelector('div') as Element);
    expect(styles.display).toBe('flex');
    expect(styles.width).toBe('100%');
  });

  it('Should render with feature styles when feature prop is true', () => {
    const { container } = themedRender(<Card feature>Card</Card>);

    const styles = window.getComputedStyle(container.querySelector('div') as Element);
    expect(styles.backgroundSize).toBe('200% auto');
  });

  const sizes: Size[] = ['small', 'medium', 'large'];

  sizes.forEach((size) => {
    it(`Should render ${size} variant correctly`, () => {
      const { container } = themedRender(<Card variant={size}>Card</Card>);

      const styles = window.getComputedStyle(container.querySelector('div') as Element);
      expect(styles.padding).toBe(layouts.space[abbreviate(size)]);
      expect(styles.borderRadius).toBe(layouts.radii[abbreviate(size)]);
    });
  });

  it('Should render with provided width', () => {
    const { container } = themedRender(<Card width="20em">Card</Card>);

    const styles = window.getComputedStyle(container.querySelector('div') as Element);
    expect(styles.width).toBe('20em');
  });

  it('Should render with provided background color', () => {
    const { container } = themedRender(<Card backgroundColor="primary">Card</Card>);

    const styles = window.getComputedStyle(container.querySelector('div') as Element);
    expect(styles.backgroundColor).toBe(hexToRgb(colors.primary));
  });

  it('Should render with border when noShadow is true', () => {
    const { container } = themedRender(<Card noShadow>Card</Card>);

    const styles = window.getComputedStyle(container.querySelector('div') as Element);
    expect(styles.boxShadow).toBe('none');
    expect(styles.border).toBe('1px solid');
    expect(styles.borderColor).toBe('#b1b1b1');
  });

  it('Should render with the correct border color', () => {
    const { container } = themedRender(
      <Card borderColor="primary" noShadow>
        Card
      </Card>
    );

    const styles = window.getComputedStyle(container.querySelector('div') as Element);
    expect(styles.borderColor).toBe('#ef802f');
  });
});
