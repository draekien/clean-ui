/** @jsxImportSource theme-ui */
import React from 'react';
import { Text } from '../text/text';
import { labelContainerCss, labelCss } from './input.styles';

export interface InputLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  inputId: string;
  label: string;
  required?: boolean;
}

export const InputLabel: React.FC<InputLabelProps> = ({ inputId, label, required }) => {
  return (
    <div sx={labelContainerCss}>
      <label sx={labelCss} htmlFor={inputId}>
        {label}
      </label>
      {required && (
        <Text as="span" color="warning-400" variant="small">
          required
        </Text>
      )}
    </div>
  );
};
