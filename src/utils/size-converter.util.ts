import { Size } from '../types/layouts';

export const abbreviate = (size: Size) => {
  switch (size) {
    case 'small':
      return 'sm';
    case 'medium':
      return 'md';
    case 'large':
      return 'lg';
  }
};
