// eslint-disable-next-line tsdoc/syntax
/** @jsxImportSource theme-ui */
import React from 'react';
import { DirectionProps, ListData } from './list';
import { listContainerCss, listItemCss } from './list.styles';

export interface UnorderedListProps extends DirectionProps {
  data: ListData;
}

export const UnorderedList: React.FC<UnorderedListProps> = ({
  data,
  direction = 'column',
}) => {
  return (
    <ul sx={listContainerCss}>
      {data.rows.map((row, index) => (
        <li key={index} sx={listItemCss(direction)}>
          {row}
        </li>
      ))}
    </ul>
  );
};
