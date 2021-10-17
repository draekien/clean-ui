/** @jsxImportSource theme-ui */
import React from 'react';
import { Direction } from '../../types/layouts';
import { DescriptionList } from './list.description';
import { OrderedList } from './list.ordered';
import { UnorderedList } from './list.unordered';

export type ListVariant = 'ordered' | 'unordered' | 'description';
export interface ListData {
  label?: React.ReactNode;
  rows: React.ReactNode[];
}

export interface DirectionProps {
  direction?: Direction;
}

export interface ListProps extends DirectionProps {
  /** the type of list to render
   *  @defaultValue 'unordered'
   */
  variant?: ListVariant;
  data: ListData | ListData[];
}

export const List: React.FC<ListProps> = ({
  variant = 'unordered',
  direction = 'column',
  data,
}) => {
  switch (variant) {
    case 'description':
      return (
        <DescriptionList
          data={Array.isArray(data) ? data : [data]}
          direction={direction}
        />
      );
    case 'ordered':
      return (
        <OrderedList data={Array.isArray(data) ? data[0] : data} direction={direction} />
      );
    default:
      return (
        <UnorderedList
          data={Array.isArray(data) ? data[0] : data}
          direction={direction}
        />
      );
  }
};

export * from './list.description';
export * from './list.ordered';
export * from './list.unordered';
