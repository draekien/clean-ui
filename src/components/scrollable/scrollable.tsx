/** @jsxImportSource theme-ui */
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

export interface ScrollableProps {
  maxHeight?: string | number;
}

export const Scrollable: React.FC<ScrollableProps> = ({ maxHeight, children }) => {
  return (
    <Scrollbars style={{ width: '100%' }} autoHeight autoHeightMax={maxHeight}>
      {children}
    </Scrollbars>
  );
};
