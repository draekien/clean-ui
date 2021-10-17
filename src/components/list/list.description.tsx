// eslint-disable-next-line tsdoc/syntax
/** @jsxImportSource theme-ui */
import React, { Fragment } from 'react';
import { DirectionProps, ListData } from './list';
import { descriptionTitleCss, listContainerCss, listItemCss } from './list.styles';

export interface DescriptionListProps extends DirectionProps {
  data: ListData[];
}
export const DescriptionList: React.FC<DescriptionListProps> = ({
  data,
  direction = 'column',
}) => {
  return (
    <dl sx={listContainerCss}>
      {data.map(({ label, rows }, i) => {
        return (
          <Fragment key={i}>
            <dt sx={descriptionTitleCss}>{label}</dt>
            {rows.map((row, j) => (
              <dd key={`${i}-${j}`} sx={listItemCss(direction)}>
                {row}
              </dd>
            ))}
          </Fragment>
        );
      })}
    </dl>
  );
};
