import React from 'react';
import { themedRender } from '../../helpers/testHelpers';
import {
  Toast,
  ToastConsumer,
  ToastContainer,
  ToastProvider,
  ToastPosition,
} from './toast';

describe('Toast component', () => {
  it('Should match snapshot', () => {
    const { container } = themedRender(
      <ToastProvider>
        <ToastContainer />
        <ToastConsumer>
          {() => (
            <Toast
              title="toast"
              message="message"
              onClose={() => {}}
              onClick={() => {}}
            />
          )}
        </ToastConsumer>
      </ToastProvider>
    );

    expect(container).toMatchSnapshot();
  });

  describe('Toast container', () => {
    const toastPositions: ToastPosition[] = ['bottom', 'right', 'top'];
    toastPositions.forEach((position) => {
      it(`Should render in the correct position when position is ${position}`, () => {
        const { container } = themedRender(
          <ToastProvider>
            <ToastContainer position={position} offset="1rem" />
            <ToastConsumer>
              {() => (
                <Toast
                  title="toast"
                  message="message"
                  onClose={() => {}}
                  onClick={() => {}}
                />
              )}
            </ToastConsumer>
          </ToastProvider>
        );

        const styles = window.getComputedStyle(
          container.querySelector('#clean_ui_toast_container') as Element
        );
        switch (position) {
          case 'bottom':
            expect(styles.justifyContent).toBe('flex-end');
            expect(styles.right).not.toBe('0px');
            expect(styles.bottom).toBe('1rem');
            break;
          case 'top':
            expect(styles.bottom).toBe('0px');
            expect(styles.top).toBe('1rem');
            break;
          default:
            expect(styles.right).toBe('0px');
            expect(styles.top).toBe('1rem');
            expect(styles.bottom).toBe('0px');
            break;
        }
      });
    });
  });
});
