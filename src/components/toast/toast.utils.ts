import { StatusVariant } from '../../types/variants';
import { colors } from '../theme/theme.colors';

export const iconMap: { [key in StatusVariant]: string } = {
  info: 'info',
  success: 'check_circle',
  warning: 'warning',
  error: 'error',
};

export const iconColorMap: { [key in StatusVariant]: keyof typeof colors } = {
  info: 'info-400',
  success: 'success-400',
  warning: 'warning-400',
  error: 'error-400',
};
