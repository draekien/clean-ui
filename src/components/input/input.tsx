/** @jsxImportSource theme-ui */
import React, { InputHTMLAttributes } from 'react';
import { StatusVariant } from '../../types/variants';
import { Icon } from '../icon/icon';
import { useVariantColor } from './input.hooks';
import * as styles from './input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: string;
  helpText?: string;
  variant?: StatusVariant;
  fullWidth?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

export const Input: React.FC<InputProps> = ({
  label,
  id,
  icon,
  helpText,
  variant,
  value,
  fullWidth = false,
  onChange,
  ...rest
}) => {
  const { variantColor, variantHoverColor, setVariantColor } = useVariantColor(variant);

  const resetVariantColor = () => setVariantColor('b-300');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };

  return (
    <div sx={styles.inputContainerCss(fullWidth)}>
      <label sx={styles.labelCss} htmlFor={id}>
        {label}
      </label>
      <div sx={styles.inputWrapperCss}>
        <input
          sx={styles.inputCss(!!icon, variantColor, variantHoverColor)}
          onFocus={resetVariantColor}
          id={id}
          value={value}
          onChange={handleChange}
          {...rest}
        />
        {icon && <Icon name={icon} />}
      </div>
      {helpText && <small sx={styles.helpTextCss(variantColor)}>{helpText}</small>}
    </div>
  );
};
