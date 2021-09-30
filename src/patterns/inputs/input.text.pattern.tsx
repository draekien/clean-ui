/** @jsxImportSource theme-ui */
import React from 'react';
import { InputWrapper } from '../../components/input/input.wrapper';
import { Input, InputProps } from '../../components/input/input';

export interface TextInputProps extends InputProps {
  /** label text to display above the input */
  label: string;
  /** help text to display under the input */
  helpText?: string;
  /** should the input take up the full width of the parent container? */
  fullWidth?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  inputId,
  icon,
  helpText,
  variant,
  value,
  fullWidth = false,
  onChange,
  required,
  ...rest
}) => {
  return (
    <InputWrapper
      inputId={inputId}
      label={label}
      helpText={helpText}
      variant={variant}
      required={required}
      fullWidth={fullWidth}>
      <Input
        inputId={inputId}
        icon={icon}
        variant={variant}
        value={value}
        onChange={onChange}
        required={required}
        type="text"
        {...rest}
      />
    </InputWrapper>
  );
};
