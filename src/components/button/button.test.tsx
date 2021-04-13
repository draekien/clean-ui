import React from 'react';
import { hexToRgb, themedRender } from '../../helpers/testHelpers';
import { colors } from '../theme/theme.colors';
import { layouts } from '../theme/theme.layouts';
import { Button } from './button';

describe('Button Component', () => {
  it('Should match snapshot', () => {
    const { container } = themedRender(<Button>Button</Button>);

    expect(container).toMatchSnapshot();
  });

  it('Should render with correct styles when variant is primary', () => {
    const { container } = themedRender(<Button>Button</Button>);

    const styles = window.getComputedStyle(container.querySelector('button') as Element);
    expect(styles.display).toBe('inline-flex');
    expect(styles.backgroundColor).toBe(hexToRgb(colors['p-400']));
    expect(styles.borderColor).toBe(colors['p-400'].toLowerCase());
    expect(styles.color).toBe(hexToRgb(colors['b-000']));
  });

  it('Should render with correct styles when variant is secondary', () => {
    const { container } = themedRender(<Button variant="secondary">Button</Button>);

    const styles = window.getComputedStyle(container.querySelector('button') as Element);
    expect(styles.display).toBe('inline-flex');
    expect(styles.backgroundColor).toBe(hexToRgb(colors['s-400']));
    expect(styles.borderColor).toBe(colors['s-400'].toLowerCase());
    expect(styles.color).toBe(hexToRgb(colors['b-000']));
  });

  it('Should render with correct styles when variant is outline', () => {
    const { container } = themedRender(<Button variant="outline">Button</Button>);

    const styles = window.getComputedStyle(container.querySelector('button') as Element);
    expect(styles.display).toBe('inline-flex');
    expect(styles.backgroundColor).toBe('transparent');
    expect(styles.color).toBe(hexToRgb(colors['p-400']));
  });

  it('Should render with correct styles when variant is gradient', () => {
    const { container } = themedRender(<Button variant="gradient">Button</Button>);

    const styles = window.getComputedStyle(container.querySelector('button') as Element);
    expect(styles.display).toBe('inline-flex');
    expect(styles.backgroundSize).toBe('200% auto');
    expect(styles.color).toBe(hexToRgb(colors['b-000']));
  });

  it('Should render with correct styles when disabled prop is true', () => {
    const { container } = themedRender(<Button disabled>Button</Button>);

    const styles = window.getComputedStyle(container.querySelector('button') as Element);
    expect(styles.display).toBe('inline-flex');
    expect(styles.cursor).toBe('not-allowed');
    expect(styles.backgroundColor).toBe(hexToRgb(colors['b-200']));
    expect(styles.color).toBe(hexToRgb(colors['b-300']));
  });

  it('Should render with correct styles when fullWidth prop is true', () => {
    const { container } = themedRender(<Button fullWidth>Button</Button>);

    const styles = window.getComputedStyle(container.querySelector('button') as Element);
    expect(styles.display).toBe('flex');
  });

  it('Should render with correct styles when feature prop is true', () => {
    const { container } = themedRender(<Button feature>Button</Button>);

    const styles = window.getComputedStyle(container.querySelector('button') as Element);
    expect(styles.display).toBe('inline-flex');
    expect(styles.textTransform).toBe('uppercase');
    expect(styles.letterSpacing).toBe('0.5rem');
    expect(styles.backgroundSize).toBe('200% auto');
  });

  it('Should render with correct styles with size is small', () => {
    const { container } = themedRender(<Button size="small">Button</Button>);

    const styles = window.getComputedStyle(container.querySelector('button') as Element);
    expect(styles.paddingLeft).toBe(layouts.space.md);
    expect(styles.paddingRight).toBe(layouts.space.md);
  });

  it('Should render with correct styles with size is medium', () => {
    const { container } = themedRender(<Button size="medium">Button</Button>);

    const styles = window.getComputedStyle(container.querySelector('button') as Element);
    expect(styles.paddingLeft).toBe(layouts.space.xl);
    expect(styles.paddingRight).toBe(layouts.space.xl);
  });

  it('Should render with correct styles with size is large', () => {
    const { container } = themedRender(<Button size="large">Button</Button>);

    const styles = window.getComputedStyle(container.querySelector('button') as Element);
    expect(styles.paddingLeft).toBe(layouts.space.xxl);
    expect(styles.paddingRight).toBe(layouts.space.xxl);
  });

  it('Should render with correct styles when active prop is true', () => {
    const { container } = themedRender(<Button active>Button</Button>);

    const styles = window.getComputedStyle(container.querySelector('button') as Element);
    expect(styles.backgroundColor).toBe(hexToRgb(colors['p-200']));
  });
});
