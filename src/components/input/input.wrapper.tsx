/** @jsxImportSource theme-ui */
import React from 'react';
import { useColorMode } from '@theme-ui/color-modes';
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
  const [colorMode] = useColorMode();
  const { color } = useStatusColors(colorMode === 'dark', variant);

  return (
    <div sx={styles.inputWrapperCss(fullWidth)} {...rest}>
      <InputLabel inputId={inputId} label={label} required={required} />
      {children}
      {helpText && <small sx={styles.helpTextCss(color)}>{helpText}</small>}
    </div>
  );
};
