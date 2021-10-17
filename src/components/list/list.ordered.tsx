/** @jsxImportSource theme-ui */
import React from 'react';
import { DirectionProps, ListData } from './list';
import {
  listContainerCss,
  orderedListItemContentCss,
  orderedListItemCss,
  orderedListItemIndexCss,
} from './list.styles';

export interface OrderedListProps extends DirectionProps {
  data: ListData;
}

export const OrderedList: React.FC<OrderedListProps> = ({
  data,
  direction = 'column',
}) => {
  return (
    <ol sx={listContainerCss}>
      {data.rows.map((row, index) => (
        <li key={index} sx={orderedListItemCss(direction)}>
          <div sx={orderedListItemIndexCss}>{`${index + 1}.`}</div>
          <div sx={orderedListItemContentCss}>{row}</div>
        </li>
      ))}
    </ol>
  );
};
