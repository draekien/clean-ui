import { useEffect, useState } from 'react';
import { StatusVariant } from '../../types/variants';

export const useVariantColor = (isDarkMode: boolean, variant?: StatusVariant) => {
  const [variantColor, setVariantColor] = useState('b-300');
  const [variantHoverColor, setVariantHoverColor] = useState('b-400');
  const [variantFocusColor, setVariantFocusColor] = useState('b-500');

  useEffect(() => {
    switch (variant) {
      case 'success':
      case 'warning':
      case 'error':
      case 'info':
        setVariantColor(`${variant}-${variantColorSaturation}`);
        setVariantHoverColor(`${variant}-${variantHoverColorSaturation}`);
        break;
      default:
        resetVariantColor();
        break;
    }
  }, [variant, isDarkMode]);

  const resetVariantColor = () => {
    setVariantColor(`b-${variantColorSaturation}`);
    setVariantHoverColor(`b-${variantHoverColorSaturation}`);
    setVariantFocusColor(`b-${variantFocusColorSaturation}`);
  };

  const variantColorSaturation = isDarkMode ? '400' : '300';
  const variantHoverColorSaturation = isDarkMode ? '300' : '400';
  const variantFocusColorSaturation = isDarkMode ? '200' : '500';

  return {
    variantColor,
    variantHoverColor,
    variantFocusColor,
    setVariantColor,
    setVariantHoverColor,
    setVariantFocusColor,
    resetVariantColor,
  };
};
