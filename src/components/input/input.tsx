// eslint-disable-next-line tsdoc/syntax
/** @jsxImportSource theme-ui */
import { useColorMode } from '@theme-ui/color-modes';
import React, { InputHTMLAttributes, forwardRef } from 'react';
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
  maskPlaceholder?: string;
  addon?: React.ReactNode;
}

export const Input: React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<HTMLInputElement>
> = forwardRef(
  (
    {
      inputId,
      icon,
      variant,
      value,
      onChange,
      required,
      mask,
      maskPlaceholder,
      onMouseDown,
      onBlur,
      onFocus,
      onPaste,
      addon,
      disabled = false,
      readOnly = false,
      ...rest
    },
    ref
  ) => {
    const [colorMode] = useColorMode();
    const { color, hoverColor, focusColor, resetColors } = useStatusColors(variant);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      resetColors();
      onFocus && onFocus(e);
    };

    if (mask && (!rest.type || rest.type === 'text')) {
      return (
        <div sx={styles.inputContainerCss}>
          <InputMask
            mask={mask}
            maskPlaceholder={maskPlaceholder}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onMouseDown={onMouseDown}
            onBlur={onBlur}
            onPaste={onPaste}
            disabled={disabled}
            required={required}
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
              ref={ref}
              id={inputId}
              required={required}
              {...rest}
            />
          </InputMask>
          {icon && <Icon name={icon} />}
          {addon && <div sx={styles.inputAddonContainerCss}>{addon}</div>}
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
        {addon && <div sx={styles.inputAddonContainerCss}>{addon}</div>}
      </div>
    );
  }
);

export * from './input.wrapper';
