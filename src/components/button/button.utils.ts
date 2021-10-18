import { Size } from '../../types/layouts';
import {
  primaryColors,
  secondaryColors,
  outlineColors,
  textColors,
  gradientColors,
} from './button.constants';
import {
  ButtonVariant,
  ButtonColorDefinitions,
  ButtonAddonPosition,
  ButtonPadding,
} from './button.types';

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

/**
 * Gets the padding settings for the button when there is an icon.
 * @param size - the size of the button.
 * @param position - the position of the button addon.
 * @returns the button padding.
 */
export const getButtonWithIconPadding = (
  size: Size,
  position: ButtonAddonPosition
): ButtonPadding => {
  if (position === 'left') {
    switch (size) {
      case 'small':
        return {
          pl: 'xs',
          pr: 'sm',
        };
      case 'medium':
        return {
          pl: 'sm',
          pr: 'md',
        };
      default:
        return {
          pl: 'md',
          pr: 'lg',
        };
    }
  }

  switch (size) {
    case 'small':
      return {
        pl: 'sm',
        pr: 'xs',
      };
    case 'medium':
      return {
        pl: 'md',
        pr: 'sm',
      };
    default:
      return {
        pl: 'lg',
        pr: 'md',
      };
  }
};

/**
 * Gets the padding settings for the button.
 * @param size - the size of the button.
 * @param hasText - does the button have text.
 * @returns the button's padding.
 */
export const getButtonPadding = (size: Size, hasText: boolean): ButtonPadding => {
  if (hasText) {
    switch (size) {
      case 'small':
        return {
          px: 'md',
          py: 'xxs',
        };
      case 'large':
        return {
          px: 'xxl',
          py: 'xs',
        };
      default:
        return {
          px: 'xl',
          py: 'xxs',
        };
    }
  }

  switch (size) {
    case 'small':
      return {
        px: 'xxs',
        py: 'xxs',
      };
    case 'large':
      return {
        px: 'sm',
        py: 'sm',
      };
    default:
      return {
        px: 'xs',
        py: 'xs',
      };
  }
};
