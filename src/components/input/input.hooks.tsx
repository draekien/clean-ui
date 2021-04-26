import { useEffect, useState } from 'react';
import { StatusVariant } from '../../types/variants';

export const useVariantColor = (variant?: StatusVariant) => {
  const [variantColor, setVariantColor] = useState('b-300');
  const [variantHoverColor, setVariantHoverColor] = useState('b-400');

  useEffect(() => {
    switch (variant) {
      case 'success':
        setVariantColor('success-400');
        setVariantHoverColor('success-000');
        break;
      case 'warning':
        setVariantColor('warning-400');
        setVariantHoverColor('warning-000');
        break;
      case 'error':
        setVariantColor('error-400');
        setVariantHoverColor('error-000');
        break;
      default:
        setVariantColor('b-300');
        setVariantHoverColor('b-400');
        break;
    }
  }, [variant]);

  return { variantColor, variantHoverColor, setVariantColor };
};
