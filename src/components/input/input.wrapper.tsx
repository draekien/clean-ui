// eslint-disable-next-line tsdoc/syntax
/** @jsxImportSource theme-ui */
import React from 'react';
import { InputLabel } from './input.label';
import { StatusVariant } from '../../types/variants';
import { useStatusColors } from '../../hooks/useStatusColors';

import * as styles from './input.styles';

export interface InputWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  inputId: string;
  label: string;
  helpText?: string;
  variant?: StatusVariant;
  required?: boolean;
  fullWidth?: boolean;
}

export const InputWrapper: React.FC<InputWrapperProps> = ({
  inputId,
  label,
  helpText,
  variant,
  required,
  fullWidth = false,
  children,
  ...rest
}) => {
  const { color, resetColors } = useStatusColors(variant);

  return (
    <div sx={styles.inputWrapperCss(fullWidth)} {...rest} onFocus={resetColors}>
      <InputLabel
        inputId={inputId}
        label={label}
        required={required}
        color={color === 'b-300' ? 'text-muted' : color}
      />
      {children}
      {helpText && <small sx={styles.helpTextCss(color)}>{helpText}</small>}
    </div>
  );
};
