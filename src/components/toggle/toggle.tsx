/** @jsxImportSource theme-ui */
import React, { forwardRef, useState, useEffect } from 'react';
import { Label } from '../label/label';
import { toggleContainerCss, toggleCss } from './toggle.styles';

export interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onClick'> {
  inputId: string;
  on?: React.ReactNode;
  off?: React.ReactNode;
  onClick?: (checked: boolean) => void;
}

export const Toggle: React.ForwardRefExoticComponent<
  ToggleProps & React.RefAttributes<HTMLInputElement>
> = forwardRef(({ ref, on, off, inputId, disabled, onClick, ...rest }) => {
  const [checked, setChecked] = useState(rest.checked);

  useEffect(() => {
    setChecked(rest.checked);
  }, [rest.checked]);

  const handleClick = () => {
    onClick && onClick(!checked);
    setChecked(!checked);
  };

  return (
    <div>
      <input
        {...rest}
        ref={ref}
        id={inputId}
        name={inputId}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        hidden
      />
      <Label htmlFor={inputId}>
        <div sx={toggleContainerCss}>
          <span>{off}</span>
          <button
            sx={toggleCss({ checked, disabled })}
            onClick={handleClick}
            disabled={disabled}
          />
          <span>{on}</span>
        </div>
      </Label>
    </div>
  );
});
