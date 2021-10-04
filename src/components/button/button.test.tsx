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

  describe('Button Variants', () => {
    it('Should render with correct styles when variant is primary', () => {
      const { container } = themedRender(<Button>Button</Button>);

      const styles = window.getComputedStyle(
        container.querySelector('button') as Element
      );
      expect(styles.display).toBe('inline-flex');
      expect(styles.backgroundColor).toBe(hexToRgb(colors['p-400']));
      expect(styles.borderColor).toBe(colors['p-400'].toLowerCase());
      expect(styles.color).toBe(hexToRgb(colors['b-000']));
    });

    it('Should render with correct styles when variant is secondary', () => {
      const { container } = themedRender(<Button variant="secondary">Button</Button>);

      const styles = window.getComputedStyle(
        container.querySelector('button') as Element
      );
      expect(styles.display).toBe('inline-flex');
      expect(styles.backgroundColor).toBe(hexToRgb(colors['s-400']));
      expect(styles.borderColor).toBe(colors['s-400'].toLowerCase());
      expect(styles.color).toBe(hexToRgb(colors['b-000']));
    });

    it('Should render with correct styles when variant is outline', () => {
      const { container } = themedRender(<Button variant="outline">Button</Button>);

      const styles = window.getComputedStyle(
        container.querySelector('button') as Element
      );
      expect(styles.display).toBe('inline-flex');
      expect(styles.backgroundColor).toBe('rgba(0, 0, 0, 0)');
      expect(styles.color).toBe(hexToRgb(colors['p-400']));
    });

    it('Should render with correct styles when variant is gradient', () => {
      const { container } = themedRender(<Button variant="gradient">Button</Button>);

      const styles = window.getComputedStyle(
        container.querySelector('button') as Element
      );
      expect(styles.display).toBe('inline-flex');
      expect(styles.backgroundSize).toBe('200% auto');
      expect(styles.color).toBe(hexToRgb(colors['b-000']));
    });

    it('Should render with correct styles when variant is gradient and button is disabled', () => {
      const { container } = themedRender(
        <Button variant="gradient" disabled>
          Button
        </Button>
      );

      const styles = window.getComputedStyle(
        container.querySelector('button') as Element
      );
      expect(styles.display).toBe('inline-flex');
      expect(styles.backgroundSize).toBe('200% auto');
      expect(styles.color).toBe(hexToRgb(colors['b-000']));
    });

    it('Should render with centered background for active gradient button', () => {
      const { container } = themedRender(
        <Button variant="gradient" active>
          Button
        </Button>
      );

      const styles = window.getComputedStyle(
        container.querySelector('button') as Element
      );
      expect(styles.backgroundPosition).toBe('center');
    });
  });

  describe('Button flags', () => {
    it('Should render with correct styles when disabled prop is true', () => {
      const { container } = themedRender(<Button disabled>Button</Button>);

      const styles = window.getComputedStyle(
        container.querySelector('button') as Element
      );
      expect(styles.display).toBe('inline-flex');
      expect(styles.cursor).toBe('not-allowed');
      expect(styles.backgroundColor).toBe(hexToRgb(colors['b-200']));
      expect(styles.color).toBe(hexToRgb(colors['b-300']));
    });

    it('Should render with correct styles when fullWidth prop is true', () => {
      const { container } = themedRender(<Button fullWidth>Button</Button>);

      const styles = window.getComputedStyle(
        container.querySelector('button') as Element
      );
      expect(styles.display).toBe('flex');
    });

    it('Should render with correct styles when feature prop is true', () => {
      const { container } = themedRender(<Button feature>Button</Button>);

      const styles = window.getComputedStyle(
        container.querySelector('button') as Element
      );
      expect(styles.display).toBe('inline-flex');
      expect(styles.textTransform).toBe('uppercase');
      expect(styles.letterSpacing).toBe('0.5rem');
      expect(styles.backgroundSize).toBe('200% auto');
    });

    it('Should render with correct styles when active prop is true', () => {
      const { container } = themedRender(<Button active>Button</Button>);

      const styles = window.getComputedStyle(
        container.querySelector('button') as Element
      );
      expect(styles.backgroundColor).toBe(hexToRgb(colors['p-200']));
    });

    it('Should render as a circle when circle prop is true and button is icon only', () => {
      const { container } = themedRender(<Button icon="done" circle />);

      const styles = window.getComputedStyle(
        container.querySelector('button') as Element
      );
      expect(styles.borderRadius).toBe('999px');
    });

    it('Should render with the correct styles when variant is a link', () => {
      const { container } = themedRender(<Button variant="link">Link</Button>);

      const styles = window.getComputedStyle(
        container.querySelector('button') as Element
      );
      expect(styles.background).toBe('transparent');
      expect(styles.color).toBe(hexToRgb(colors.primary));
    });

    it('Should render with the correct styles when variant is a text', () => {
      const { container } = themedRender(<Button variant="text">Text</Button>);

      const styles = window.getComputedStyle(
        container.querySelector('button') as Element
      );
      expect(styles.background).toBe('transparent');
      expect(styles.color).toBe(hexToRgb(colors.primary));
    });
  });

  describe('Button Sizes', () => {
    describe('Icon only', () => {
      it('Should render with correct styles with size is small', () => {
        const { container } = themedRender(<Button size="small" icon="done" />);

        const styles = window.getComputedStyle(
          container.querySelector('button') as Element
        );
        expect(styles.padding).toBe('0.25rem');
      });

      it('Should render with correct styles with size is medium', () => {
        const { container } = themedRender(<Button size="medium" icon="done" />);

        const styles = window.getComputedStyle(
          container.querySelector('button') as Element
        );
        expect(styles.padding).toBe('0.5rem');
      });

      it('Should render with correct styles with size is large', () => {
        const { container } = themedRender(<Button size="large" icon="done" />);

        const styles = window.getComputedStyle(
          container.querySelector('button') as Element
        );
        expect(styles.padding).toBe('0.75rem');
      });
    });

    describe('Has text', () => {
      it('Should render with correct styles with size is small', () => {
        const { container } = themedRender(<Button size="small">Button</Button>);

        const styles = window.getComputedStyle(
          container.querySelector('button') as Element
        );
        expect(styles.paddingLeft).toBe(layouts.space.md);
        expect(styles.paddingRight).toBe(layouts.space.md);
      });

      it('Should render with correct styles with size is medium', () => {
        const { container } = themedRender(<Button size="medium">Button</Button>);

        const styles = window.getComputedStyle(
          container.querySelector('button') as Element
        );
        expect(styles.paddingLeft).toBe(layouts.space.xl);
        expect(styles.paddingRight).toBe(layouts.space.xl);
      });

      it('Should render with correct styles with size is large', () => {
        const { container } = themedRender(<Button size="large">Button</Button>);

        const styles = window.getComputedStyle(
          container.querySelector('button') as Element
        );
        expect(styles.paddingLeft).toBe(layouts.space.xxl);
        expect(styles.paddingRight).toBe(layouts.space.xxl);
      });
    });
  });

  describe('Button with icon', () => {
    ['left' as const, 'right' as const].forEach((pos) => {
      it(`Should render small button correctly for icon ${pos}`, () => {
        const { container } = themedRender(
          <Button size="small" icon="done" iconPosition={pos}>
            Button
          </Button>
        );

        const styles = window.getComputedStyle(
          container.querySelector('button') as Element
        );

        if (pos === 'left') {
          expect(styles.paddingLeft).toBe(layouts.space.xs);
          expect(styles.paddingRight).toBe(layouts.space.sm);
        } else {
          expect(styles.paddingLeft).toBe(layouts.space.sm);
          expect(styles.paddingRight).toBe(layouts.space.xs);
        }
      });

      it(`Should render medium button correctly for icon ${pos}`, () => {
        const { container } = themedRender(
          <Button size="medium" icon="done" iconPosition={pos}>
            Button
          </Button>
        );

        const styles = window.getComputedStyle(
          container.querySelector('button') as Element
        );

        if (pos === 'left') {
          expect(styles.paddingLeft).toBe(layouts.space.sm);
          expect(styles.paddingRight).toBe(layouts.space.md);
        } else {
          expect(styles.paddingLeft).toBe(layouts.space.md);
          expect(styles.paddingRight).toBe(layouts.space.sm);
        }
      });

      it(`Should render large button correctly for icon ${pos}`, () => {
        const { container } = themedRender(
          <Button size="large" icon="done" iconPosition={pos}>
            Button
          </Button>
        );

        const styles = window.getComputedStyle(
          container.querySelector('button') as Element
        );

        if (pos === 'left') {
          expect(styles.paddingLeft).toBe(layouts.space.md);
          expect(styles.paddingRight).toBe(layouts.space.lg);
        } else {
          expect(styles.paddingLeft).toBe(layouts.space.lg);
          expect(styles.paddingRight).toBe(layouts.space.md);
        }
      });
    });
  });
});
