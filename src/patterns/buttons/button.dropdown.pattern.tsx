/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Transition } from 'react-transition-group';
import { Button, Card, Input, List, Scrollable, Text } from '../..';

export interface DropdownData {
  rows: string[];
}

export interface DropdownButtonProps {
  value: string;
  items: DropdownData;
  width?: string | number | string[] | number[];
  maxHeight?: string | number;
  fullWidth?: boolean;
  enableSearch?: boolean;
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
  maxHeight = '',
  fullWidth,
  enableSearch,
  onChange,
}) => {
  const [selected, setSelected] = useState(value);
  const [searchValue, setSearchValue] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [data, setData] = useState<DropdownData>(items);

  const handleItemClicked = (value: string) => {
    setSelected(value);
    setIsDropdownOpen(false);

    onChange && onChange(value);
  };

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value && value.length !== 0) {
      setData({
        rows: items.rows.filter((r) => r.toLowerCase().includes(value.toLowerCase())),
      });
      return;
    }

    setData(items);
  };

  const handleOutsideClicked = () => {
    setIsDropdownOpen(false);
  };

  const toggleOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const searchInput = enableSearch && (
    <div sx={{ padding: 'xs' }}>
      <Input
        inputId="dropdown-button-search-input"
        icon="search"
        value={searchValue}
        onChange={handleSearchValueChange}
        role="search"
      />
    </div>
  );

  const visibleData = {
    rows: data.rows.map((item, index) => (
      <Button
        key={index}
        variant="text"
        onClick={() => handleItemClicked(item)}
        active={selected.toLowerCase() === item.toLowerCase()}
        fullWidth>
        <Text textAlign="left" fullWidth>
          {item}
        </Text>
      </Button>
    )),
  };

  const noContent = (
    <div sx={{ paddingTop: 'xs', paddingBottom: 'sm' }}>
      <Text textAlign="center" fullWidth>
        😞 No items found
      </Text>
    </div>
  );

  const list = (
    <div sx={{ padding: 'xs', paddingTop: 0 }}>
      <List data={visibleData} />
    </div>
  );

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
            {selected || value}
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
              <Card variant="small" fullWidth noPadding>
                {searchInput}
                <Scrollable maxHeight={maxHeight}>
                  {data.rows.length > 0 ? list : noContent}
                </Scrollable>
              </Card>
            </div>
          )}
        </Transition>
      </div>
    </OutsideClickHandler>
  );
};
