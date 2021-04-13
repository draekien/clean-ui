import { Theme, ThemeUIStyleObject } from 'theme-ui';
import { alpha } from '@theme-ui/color';

export const overlayCss: ThemeUIStyleObject = {
  position: 'fixed',
  display: 'flex',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: (t: Theme) => `${alpha('muted', 0.5)(t)}`,
  zIndex: 'overlay',
  alignItems: 'center',
  justifyContent: 'center',
};
