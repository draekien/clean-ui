/** @jsxImportSource theme-ui */
import { useColorMode } from '@theme-ui/color-modes';
import React, { InputHTMLAttributes } from 'react';
import { StatusVariant } from '../../types/variants';
import { Icon } from '../icon/icon';
import { useVariantColor } from './input.hooks';
import * as styles from './input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** the id of the input element */
  inputId: string;
  /** label text to display above the input */
  label: string;
  /** a material icon name for displaying an icon inside the input */
  icon?: string;
  /** help text to display under the input */
  helpText?: string;
  /** the input variant to render, 'info' is not supported */
  variant?: StatusVariant;
  /** should the input take up the full width of the parent container? */
  fullWidth?: boolean;
  /** on change event handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

export const Input: React.FC<InputProps> = ({
  label,
  inputId,
  icon,
  helpText,
  variant,
  value,
  fullWidth = false,
  onChange,
  ...rest
}) => {
  const [colorMode] = useColorMode();
  const {
    variantColor,
    variantHoverColor,
    variantFocusColor,
    resetVariantColor,
  } = useVariantColor(colorMode === 'dark', variant);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };

  return (
    <div sx={styles.inputContainerCss(fullWidth)}>
      <label sx={styles.labelCss} htmlFor={inputId}>
        {label}
      </label>
      <div sx={styles.inputWrapperCss}>
        <input
          sx={styles.inputCss(
            !!icon,
            variantColor,
            variantHoverColor,
            variantFocusColor,
            colorMode === 'dark'
          )}
          onFocus={resetVariantColor}
          id={inputId}
          value={value}
          onChange={handleChange}
          {...rest}
        />
        {icon && <Icon name={icon} />}
      </div>
      {helpText && <small sx={styles.helpTextCss(variantHoverColor)}>{helpText}</small>}
    </div>
  );
};
