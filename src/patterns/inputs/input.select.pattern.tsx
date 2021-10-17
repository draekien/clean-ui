// eslint-disable-next-line tsdoc/syntax
/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import {
  DropdownButton,
  DropdownButtonProps,
  InputWrapper,
  InputWrapperProps,
  Tag,
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
  multiple,
  disabled,
}) => {
  const [selected, setSelected] = useState(
    value ? (Array.isArray(value) ? value : [value]) : []
  );

  const handleChange = (value: string) => {
    if (multiple) {
      if (selected.includes(value)) {
        setSelected(selected.filter((s) => s !== value));
      } else {
        setSelected([...selected, value]);
      }
    } else {
      setSelected([value]);
    }

    onChange && onChange(value);
  };

  const handleRemoveSelected = (value: string) => {
    setSelected(selected.filter((s) => s !== value));
  };

  return (
    <>
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
            multiple={multiple}
            variant={variant}
            disabled={disabled}
            fullWidth
          />
        </div>
      </InputWrapper>
      {multiple && selected.length > 0 && (
        <div
          sx={{
            paddingY: 'xxs',
            display: 'flex',
            flexFlow: 'row wrap',
            gap: 'xxs',
            width: '100%',
          }}>
          {selected.map((item, index) => (
            <Tag key={index} value={item} onClose={handleRemoveSelected} />
          ))}
        </div>
      )}
    </>
  );
};
