/** @jsxImportSource theme-ui */
import React, { forwardRef, useState, useEffect } from 'react';
import { Label } from '../label/label';
import { toggleContainerCss, toggleCss } from './toggle.styles';

/**
 * The props for the Toggle component
 * @see Toggle
 */
export interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onClick'> {
  /** the ID of the toggle input. It will also be used as the input's name */
  inputId: string;
  /** the component to render in the 'on' position */
  on?: React.ReactNode;
  /** the component to render in the 'off' position */
  off?: React.ReactNode;
  /** an event handler to be called when the toggle is checked or unchecked */
  onClick?: (checked: boolean) => void;
}

/**
 * Renders a toggle component with the option to pass in a ref for the enclused input element.
 */
export const Toggle: React.ForwardRefExoticComponent<
  ToggleProps & React.RefAttributes<HTMLInputElement>
> = forwardRef(({ on, off, inputId, disabled, onClick, ...rest }, ref) => {
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
