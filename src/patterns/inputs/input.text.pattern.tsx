// eslint-disable-next-line tsdoc/syntax
/** @jsxImportSource theme-ui */
import React, { forwardRef } from 'react';
import { InputWrapper } from '../../components/input/input.wrapper';
import { Input, InputProps } from '../../components/input/input';

export interface TextInputProps extends InputProps {
  /** label text to display above the input */
  label: string;
  /** help text to display under the input */
  helpText?: string;
  /** should the input take up the full width of the parent container? */
  fullWidth?: boolean;
  value?: string;
}

export const TextInput: React.ForwardRefExoticComponent<
  TextInputProps & React.RefAttributes<HTMLInputElement>
> = forwardRef(
  (
    {
      label,
      inputId,
      icon,
      helpText,
      variant,
      value,
      fullWidth = false,
      onChange,
      required,
      mask,
      ...rest
    },
    ref
  ) => {
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
          mask={mask}
          ref={ref}
          {...rest}
        />
      </InputWrapper>
    );
  }
);
