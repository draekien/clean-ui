/** @jsxImportSource theme-ui */
import React, { createRef, useEffect, useState } from 'react';
import { Direction, Position, useAutoPosition } from '../../hooks/useAutoPosition';
import * as styles from './tooltip.styles';

const MARGIN = 12;
const DELAY = 300;

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  text: React.ReactNode;
  children: React.ReactNode;
  direction?: Direction;
}

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  direction = 'auto',
}) => {
  const fixedDirection = direction !== 'auto' ? direction : null;
  const [tooltipPosition, setTooltipPosition] = useState<Position>(fixedDirection);
  const [visible, setVisible] = useState(false);

  const element = createRef<HTMLDivElement>();
  const directionalElement = createRef<HTMLDivElement>();

  const position = useAutoPosition({
    direction,
    element,
    directionalElement,
    margin: MARGIN,
    visible,
  });

  useEffect(() => {
    setTooltipPosition(position);
  }, [position, visible, direction]);

  let timer: ReturnType<typeof setTimeout>;

  const handleOnFocus = () => {
    timer = setTimeout(() => {
      setVisible(true);
    }, DELAY);
  };

  const handleOnBlur = () => {
    clearTimeout(timer);
    setVisible(false);

    !fixedDirection && setTooltipPosition(null);
  };

  const handleOnMouseEnter = () => {
    timer = setTimeout(() => {
      setVisible(true);
    }, DELAY);
  };

  const handleOnMouseLeave = () => {
    clearTimeout(timer);
    setVisible(false);

    !fixedDirection && setTooltipPosition(null);
  };

  const handleOnMouseDown = () => {
    if (visible) {
      clearTimeout(timer);
      setVisible(false);

      !fixedDirection && setTooltipPosition(null);
      return;
    }

    setVisible(true);
  };

  return (
    <div
      ref={element}
      sx={styles.tooltipContainerCss}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onMouseDown={handleOnMouseDown}>
      {visible && (
        <div ref={directionalElement} sx={styles.tooltipCss(tooltipPosition)}>
          <div sx={styles.tooltipArrowCss(tooltipPosition)} />
          {text}
        </div>
      )}
      {children}
    </div>
  );
};
