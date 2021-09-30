/** @jsxImportSource theme-ui */
import { useColorMode } from '@theme-ui/color-modes';
import React, { InputHTMLAttributes } from 'react';
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
  /** on change event handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

export const Input: React.FC<InputProps> = ({
  inputId,
  icon,
  variant,
  value,
  onChange,
  required,
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

  return (
    <div sx={styles.inputContainerCss}>
      <input
        sx={styles.inputCss(!!icon, color, hoverColor, focusColor, colorMode === 'dark')}
        onFocus={resetColors}
        id={inputId}
        value={value}
        onChange={handleChange}
        required={required}
        {...rest}
      />
      {icon && <Icon name={icon} />}
    </div>
  );
};

export * from './input.wrapper';
