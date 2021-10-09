/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import {
  DropdownButton,
  DropdownButtonProps,
  InputWrapper,
  InputWrapperProps,
} from '../..';

export interface SelectInputProps
  extends DropdownButtonProps,
    Omit<InputWrapperProps, 'onChange'> {}

export const SelectInput: React.FC<SelectInputProps> = ({
  value,
  items,
  maxHeight,
  fullWidth,
  onChange,
  inputId,
  label,
  helpText,
  variant,
  required,
  enableSearch,
}) => {
  const [selected, setSelected] = useState(value);

  const handleChange = (value: string) => {
    setSelected(value);

    onChange && onChange(value);
  };

  return (
    <InputWrapper
      inputId={inputId}
      label={label}
      helpText={helpText}
      variant={variant}
      required={required}
      fullWidth={fullWidth}>
      <div sx={{ marginTop: 'xs' }}>
        <DropdownButton
          value={selected}
          items={items}
          maxHeight={maxHeight}
          onChange={handleChange}
          enableSearch={enableSearch}
          fullWidth
        />
        <select value={selected} hidden />
      </div>
    </InputWrapper>
  );
};
