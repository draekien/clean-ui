// eslint-disable-next-line tsdoc/syntax
/** @jsxImportSource theme-ui */
import React from 'react';
import { Size } from '../../types/layouts';

export interface CheckboxProps {
  size?: Size;
  checked?: boolean;
  disabled?: boolean;
  onClick?: (checked?: boolean) => void;
}

const getScale = (size: Size) => {
  switch (size) {
    case 'small':
      return {
        box: '1.25rem',
        checkmark: {
          height: '0.5rem',
          width: '0.125rem',
          top: 'calc(50% - 0.4rem)',
          left: 'calc(50% - 0.125rem)',
        },
      };
    case 'large':
      return {
        box: '2rem',
        checkmark: {
          height: '0.75rem',
          width: '0.25rem',
          top: 'calc(50% - 0.5rem)',
          left: 'calc(50% - 0.25rem)',
        },
      };
    default:
      return {
        box: '1.5rem',
        checkmark: {
          height: '0.75rem',
          width: '0.25rem',
          top: 'calc(50% - 0.5rem)',
          left: 'calc(50% - 0.25rem)',
        },
      };
  }
};

export const Checkbox: React.FC<CheckboxProps> = ({
  size = 'medium',
  checked,
  disabled,
  onClick,
}) => {
  const handleClick = () => {
    onClick && onClick(!checked);
  };

  const { box, checkmark } = getScale(size);

  return (
    <button
      sx={{
        display: 'inline-block',
        height: box,
        width: box,
        position: 'relative',
        transition: 'all 100ms',
        borderRadius: 'sm',
        border: '2px solid',
        borderColor: 'border',
        backgroundColor: checked ? 'p-400' : 'background',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ':after': {
          top: checkmark.top,
          left: checkmark.left,
          content: '""',
          position: 'absolute',
          transition: 'all 100ms',
          opacity: checked ? 1 : 0,
          height: checkmark.height,
          width: checkmark.width,
          border: 'solid white',
          borderWidth: '0 3px 3px 0',
          transform: 'rotate(45deg)',
        },
        ':hover:not(:disabled), :focus': {
          backgroundColor: checked ? 'p-300' : 'background-lighter',
        },
      }}
      onClick={handleClick}
      disabled={disabled}
    />
  );
};
