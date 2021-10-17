/** @jsxImportSource theme-ui */
import React from 'react';
import { Text } from '../..';
import { colors } from '../theme/theme.colors';

export interface LabelProps
  extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'color'> {
  htmlFor: string;
  color?: keyof typeof colors;
}

export const Label: React.FC<LabelProps> = ({ color = 'text-muted', ...rest }) => {
  return (
    <label {...rest}>
      <Text variant="eyebrow" color={color}>
        {rest.children}
      </Text>
    </label>
  );
};
