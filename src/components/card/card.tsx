/** @jsxImportSource theme-ui */
import React from 'react';
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
  fullWidth = false,
  backgroundColor = 'background-lighter',
  variant = 'medium',
  feature = false,
  noShadow = false,
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
        fullWidth,
        backgroundColor,
        variant,
        feature,
        noShadow,
      })}>
      {header && <div sx={cardHeaderCss(variant)}>{header}</div>}
      {children && <div>{children}</div>}
      {footer && <div sx={cardFooterCss(variant)}>{footer}</div>}
    </div>
  );
};
