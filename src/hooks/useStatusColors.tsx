import { useColorMode } from '@theme-ui/color-modes';
import { useEffect, useState } from 'react';
import { colors } from '../components/theme/theme.colors';
import { StatusVariant } from '../types/variants';

export interface DefaultColorOverride {
  defaultColor?: keyof typeof colors;
  defaultHover?: keyof typeof colors;
  defaultFocus?: keyof typeof colors;
}

export const useStatusColors = (
  variant?: StatusVariant,
  override?: DefaultColorOverride
) => {
  const [colorMode] = useColorMode();
  const [color, setColor] = useState(override?.defaultColor || 'b-300');
  const [hoverColor, setHoverColor] = useState(override?.defaultHover || 'b-400');
  const [focusColor, setFocusColor] = useState(override?.defaultFocus || 'b-500');

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
  }, [variant, colorMode]);

  const resetColors = () => {
    setColor(`b-${saturation}`);
    setHoverColor(`b-${hoverSaturation}`);
    setFocusColor(`b-${focusSaturation}`);
  };

  const isDarkMode = colorMode === 'dark';

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
