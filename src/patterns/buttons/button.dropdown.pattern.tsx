/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Transition } from 'react-transition-group';
import { Button, Card, List, ListData, Text } from '../..';

export interface DropdownData {
  rows: string[];
}

export interface DropdownButtonProps {
  value: string;
  items: DropdownData;
  width?: string | number | string[] | number[];
  maxHeight?: string | number | string[] | number[];
  fullWidth?: boolean;
  onChange?: (selected: string) => void;
}

const dropdownTransitions: any = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: {
    opacity: 0,
    height: '0 !important',
    overflow: 'hidden',
  },
  exited: {
    opacity: 0,
    height: '0 !important',
    overflow: 'hidden',
  },
};

export const DropdownButton: React.FC<DropdownButtonProps> = ({
  value,
  items,
  width = '10rem',
  maxHeight,
  fullWidth,
  onChange,
}) => {
  const [selected, setSelected] = useState(value);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleItemClicked = (value: string) => {
    setSelected(value);
    setIsDropdownOpen(false);

    onChange && onChange(value);
  };

  const handleOutsideClicked = () => {
    setIsDropdownOpen(false);
  };

  const toggleOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const data: ListData = {
    rows: items.rows.map((item, index) => (
      <Button
        key={index}
        variant="text"
        onClick={() => handleItemClicked(item)}
        fullWidth>
        <Text textAlign="left" fullWidth>
          {item}
        </Text>
      </Button>
    )),
  };

  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClicked}>
      <div
        sx={{
          width: fullWidth ? '100%' : width,
          position: 'relative',
        }}>
        <Button
          icon={isDropdownOpen ? 'expand_less' : 'expand_more'}
          iconPosition="right"
          variant="link"
          onClick={toggleOpen}
          fullWidth>
          <Text textAlign="left" fullWidth>
            {selected}
          </Text>
        </Button>
        <Transition appear in={isDropdownOpen} timeout={0} unmountOnExit>
          {(state) => (
            <div
              sx={{
                left: 0,
                right: 0,
                position: 'absolute',
                transition: 'all 100ms',
                zIndex: 'dropdown',
                ...dropdownTransitions[state],
              }}>
              <Card maxHeight={maxHeight} variant="small" fullWidth>
                <List data={data} />
              </Card>
            </div>
          )}
        </Transition>
      </div>
    </OutsideClickHandler>
  );
};
