import { Theme } from '@theme-ui/css';
import { colors } from '../components/theme/theme.colors';
import { layouts } from '../components/theme/theme.layouts';

/**
 * The colors defined in the theme.
 * @remarks
 * See {@link colors} for more details.
 */
export type Color = keyof typeof colors;
/** The color computed from the theme. */
export type ComputedColor = (t: Theme) => string;
/**
 * The spacings defined in the theme.
 * @remarks
 * See {@link layouts.space} for more details.
 */
export type Spacing = keyof typeof layouts.space;
/**
 * The radii defined in the theme.
 * @remarks
 * See {@link layouts.radii} for more details.
 */
export type Radii = keyof typeof layouts.radii;
/**
 * The shadows defined in the theme.
 * @remarks
 * See {@link layouts.shadows} for more details.
 */
export type Shadows = keyof typeof layouts.shadows;
/**
 * The zIndices defined in the theme.
 * @remarks
 * See {@link layouts.zIndices} for more details.
 */
export type ZIndex = keyof typeof layouts.zIndices;
