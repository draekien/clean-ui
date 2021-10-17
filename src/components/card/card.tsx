// eslint-disable-next-line tsdoc/syntax
/** @jsxImportSource theme-ui */
import React from 'react';
import { Scrollable } from '../..';
import {
  cardContainerCss,
  CardContainerCssProps,
  cardFooterCss,
  cardHeaderCss,
} from './card.styles';

export interface CardProps extends CardContainerCssProps {
  /** element to render in a dedicated header div */
  header?: React.ReactNode;
  /** element to render in a dedicated footer div */
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  width = '20em',
  maxHeight = '',
  fullWidth = false,
  backgroundColor = 'background-lighter',
  borderColor = 'border',
  variant = 'medium',
  feature = false,
  noShadow = false,
  noPadding = false,
  header,
  footer,
  children,
  ...rest
}) => {
  return (
    <div
      {...rest}
      sx={cardContainerCss({
        width,
        maxHeight,
        fullWidth,
        backgroundColor,
        borderColor,
        variant,
        feature,
        noShadow,
        noPadding,
      })}>
      <Scrollable maxHeight={maxHeight}>
        {header && <div sx={cardHeaderCss(variant)}>{header}</div>}
        {children && <div>{children}</div>}
        {footer && <div sx={cardFooterCss(variant)}>{footer}</div>}
      </Scrollable>
    </div>
  );
};
