import { useEffect, useState } from 'react';
import { StatusVariant } from '../types/variants';

export const useStatusColors = (isDarkMode: boolean, variant?: StatusVariant) => {
  const [color, setColor] = useState('b-300');
  const [hoverColor, setHoverColor] = useState('b-400');
  const [focusColor, setFocusColor] = useState('b-500');

  useEffect(() => {
    switch (variant) {
      case 'success':
      case 'warning':
      case 'error':
      case 'info':
        setColor(`${variant}-${saturation}`);
        setHoverColor(`${variant}-${hoverSaturation}`);
        break;
      default:
        resetColors();
        break;
    }
  }, [variant, isDarkMode]);

  const resetColors = () => {
    setColor(`b-${saturation}`);
    setHoverColor(`b-${hoverSaturation}`);
    setFocusColor(`b-${focusSaturation}`);
  };

  const saturation = isDarkMode ? '400' : '300';
  const hoverSaturation = isDarkMode ? '300' : '400';
  const focusSaturation = isDarkMode ? '200' : '500';

  return {
    color,
    hoverColor,
    focusColor,
    setColor,
    setHoverColor,
    setFocusColor,
    resetColors,
  };
};
