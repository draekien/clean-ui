import React, { useEffect, useState } from 'react';

export type Direction = 'auto' | 'top' | 'right' | 'bottom' | 'left';
export type Position = 'top' | 'right' | 'bottom' | 'left' | null;

export interface useAutoPositionProps {
  /** the direction to position the element
   * @defaultValue 'auto'
   */
  direction: Direction;
  /** the element to position around */
  element: React.RefObject<HTMLDivElement>;
  /** the element to apply the directional placement */
  directionalElement: React.RefObject<HTMLDivElement>;
  /** is the directional element visible */
  visible: boolean;
  /** size of the directional element
   * @defaultValue 12
   */
  margin?: number;
}

export const useAutoPosition: (props: useAutoPositionProps) => Position = ({
  direction,
  element,
  directionalElement,
  visible,
  margin = 12,
}) => {
  const [position, setPosition] = useState<Position>(null);

  useEffect(() => {
    if (direction !== 'auto') {
      setPosition(direction);
      return;
    }

    if (!directionalElement.current || !element.current || direction !== 'auto') return;

    const ttRect = directionalElement.current.getBoundingClientRect();
    const elRect = element.current.getBoundingClientRect();

    let finalPosition: Position;

    const fitsOnTop = ttRect.height + margin < elRect.top;
    const fitsOnBottom =
      ttRect.height + margin < document.documentElement.clientHeight - elRect.bottom;
    const topLeftFitsOnScreen =
      fitsOnTop && (ttRect.width - elRect.width) / 2 < elRect.left;
    const bottomLeftFitsOnScreen =
      fitsOnBottom && (ttRect.width - elRect.width) / 2 < elRect.left;
    const topRightFitsOnScreen =
      fitsOnTop &&
      (ttRect.width - elRect.width) / 2 <
        document.documentElement.clientWidth - elRect.right;
    const bottomRightFitsOnScreen =
      fitsOnBottom &&
      (ttRect.width - elRect.width) / 2 <
        document.documentElement.clientWidth - elRect.right;

    if (topLeftFitsOnScreen && topRightFitsOnScreen) {
      finalPosition = 'top';
    } else if (bottomLeftFitsOnScreen && bottomRightFitsOnScreen) {
      finalPosition = 'bottom';
    } else if (topLeftFitsOnScreen && bottomLeftFitsOnScreen) {
      finalPosition = 'left';
    } else if (topRightFitsOnScreen && bottomRightFitsOnScreen) {
      finalPosition = 'right';
    } else {
      finalPosition = 'bottom';
    }

    setPosition(finalPosition);
  }, [visible, direction]);

  return position;
};
