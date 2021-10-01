/** @jsxImportSource theme-ui */
import React from 'react';
import { labelCss } from './label.styles';

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
}

export const Label: React.FC<LabelProps> = (props) => <label sx={labelCss} {...props} />;
