/** @jsxImportSource theme-ui */
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

/** The props for the Scrollabel component
 *  @see Scrollable
 */
export interface ScrollableProps {
  maxHeight?: string | number;
}

/**
 * A pre-styled wrapper for react-custom-scrollbars-2
 * @param props the props required by the Scrollable component
 * @see Scrollbars from react-custom-scrollbars-2
 * @returns the scrollable component
 */
export const Scrollable: React.FC<ScrollableProps> = ({ maxHeight, children }) => {
  return (
    <Scrollbars style={{ width: '100%' }} autoHeight autoHeightMax={maxHeight}>
      {children}
    </Scrollbars>
  );
};
