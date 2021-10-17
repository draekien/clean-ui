import { Theme } from '@theme-ui/css';
import { colors } from '../components/theme/theme.colors';

export type Color = keyof typeof colors;
export type ComputedColor = (t: Theme) => string;
