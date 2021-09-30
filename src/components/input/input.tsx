/** @jsxImportSource theme-ui */
import { useColorMode } from '@theme-ui/color-modes';
import React, { InputHTMLAttributes } from 'react';
import InputMask from 'react-input-mask';
import { useStatusColors } from '../../hooks/useStatusColors';
import { StatusVariant } from '../../types/variants';
import { Icon } from '../icon/icon';

import * as styles from './input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** the id of the input element */
  inputId: string;
  /** a material icon name for displaying an icon inside the input */
  icon?: string;
  /** the input variant to render, 'info' is not supported */
  variant?: StatusVariant;
  /** the react input mask to apply to the input. Only works with the default input type
   *  @see https://github.com/sanniassin/react-input-mask
   */
  mask?: string;
}

export const Input: React.FC<InputProps> = ({
  inputId,
  icon,
  variant,
  value,
  onChange,
  required,
  mask,
  onMouseDown,
  onBlur,
  onFocus,
  disabled = false,
  readOnly = false,
  ...rest
}) => {
  const [colorMode] = useColorMode();
  const { color, hoverColor, focusColor, resetColors } = useStatusColors(
    colorMode === 'dark',
    variant
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    resetColors();
    onFocus && onFocus(e);
  };

  if (mask && !rest.type) {
    return (
      <div sx={styles.inputContainerCss}>
        <InputMask
          mask={mask}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onMouseDown={onMouseDown}
          onBlur={onBlur}
          disabled={disabled}
          readOnly={readOnly}>
          <input
            sx={styles.inputCss(
              !!icon,
              color,
              hoverColor,
              focusColor,
              colorMode === 'dark',
              disabled || readOnly
            )}
            id={inputId}
            required={required}
            {...rest}
          />
        </InputMask>
        {icon && <Icon name={icon} />}
      </div>
    );
  }

  return (
    <div sx={styles.inputContainerCss}>
      <input
        sx={styles.inputCss(
          !!icon,
          color,
          hoverColor,
          focusColor,
          colorMode === 'dark',
          disabled || readOnly
        )}
        id={inputId}
        value={value}
        onChange={handleChange}
        required={required}
        onFocus={handleFocus}
        onMouseDown={onMouseDown}
        onBlur={onBlur}
        disabled={disabled}
        readOnly={readOnly}
        {...rest}
      />
      {icon && <Icon name={icon} />}
    </div>
  );
};

export * from './input.wrapper';
