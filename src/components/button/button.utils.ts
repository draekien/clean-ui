import {
  primaryColors,
  secondaryColors,
  outlineColors,
  textColors,
  gradientColors,
} from './button.constants';
import { ButtonVariant, ButtonColorDefinitions } from './button.types';

/**
 * Gets the color definitions for the specified button variant.
 * @param variant - the {@link ButtonVariant}
 * @returns The {@link ButtonColorDefinitions} for the specified variant
 */
export const getButtonColors = (variant: ButtonVariant): ButtonColorDefinitions => {
  switch (variant) {
    case 'secondary':
      return secondaryColors;
    case 'outline':
      return outlineColors;
    case 'text':
    case 'link':
      return textColors;
    case 'gradient':
      return gradientColors;
    default:
      return primaryColors;
  }
};
