/** @jsxImportSource theme-ui */
import React from 'react';
import { Text } from '../text/text';
import { labelContainerCss } from './input.styles';
import { Label } from '../label/label';
import { colors } from '../theme/theme.colors';

export interface InputLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  inputId: string;
  label: string;
  required?: boolean;
  color?: keyof typeof colors;
}

export const InputLabel: React.FC<InputLabelProps> = ({
  inputId,
  label,
  required,
  color = 'text-muted',
}) => {
  return (
    <div sx={labelContainerCss}>
      <Label htmlFor={inputId} color={color}>
        {label}
      </Label>
      {required && (
        <Text as="span" color="warning-400" variant="small">
          required
        </Text>
      )}
    </div>
  );
};
