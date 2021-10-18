import { Color, ComputedColor, Spacing } from '../../types/styles';

/** The two different positions the addons can be rendered at. */
export type ButtonAddonPosition = 'left' | 'right';

/** The different button variants that can be rendered. */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'gradient'
  | 'text'
  | 'link';

/** A button color definition. */
export interface ColorDefinitions {
  /** The content color. */
  content?: ComputedColor | Color;
  /** The border color. */
  border?: ComputedColor | Color;
  /** The background color. */
  background?: ComputedColor | Color;
}

/** The colors of the button. */
export interface ButtonColorDefinitions {
  /** The colors for the default state of the button. */
  normal: ColorDefinitions;
  /** The colors for the hovered state of the button. */
  hover?: ColorDefinitions;
  /** The colors for the active state of the button. */
  active?: ColorDefinitions;
}

/** The padding of the button. */
export interface ButtonPadding {
  /** The left padding. */
  pl?: Spacing;
  /** The right padding. */
  pr?: Spacing;
  /** The horizontal padding. */
  px?: Spacing;
  /** The vertical padding. */
  py?: Spacing;
}
