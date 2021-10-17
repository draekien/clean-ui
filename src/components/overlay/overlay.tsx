// eslint-disable-next-line tsdoc/syntax
/** @jsxImportSource theme-ui */
import React from 'react';
import { overlayCss } from './overlay.styles';

export const Overlay: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => (
  <div sx={overlayCss} {...rest}>
    {children}
  </div>
);
