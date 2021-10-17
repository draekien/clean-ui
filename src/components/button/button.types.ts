import { Color, ComputedColor } from '../../types/styles';

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

export interface ColorDefinitions {
  content?: ComputedColor | Color;
  border?: ComputedColor | Color;
  background?: ComputedColor | Color;
}

export interface ButtonColorDefinitions {
  normal: ColorDefinitions;
  hover?: ColorDefinitions;
  active?: ColorDefinitions;
}
