/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Transition } from 'react-transition-group';
import { Button, Card, Input, List, Scrollable, Text } from '../..';
import { useStatusColors } from '../../hooks/useStatusColors';
import { StatusVariant } from '../../types/variants';

export interface DropdownData {
  rows: string[];
}

export interface DropdownButtonProps {
  value: string | string[];
  items: DropdownData;
  width?: string | number | string[] | number[];
  maxHeight?: string | number;
  fullWidth?: boolean;
  enableSearch?: boolean;
  multiple?: boolean;
  variant?: StatusVariant;
  disabled?: boolean;
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
  multiple,
  variant,
  disabled,
  onChange,
}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [data, setData] = useState<DropdownData>(items);
  const { color, hoverColor, focusColor, resetColors } = useStatusColors(variant);

  const handleItemClicked = (value: string) => {
    if (!multiple) {
      setIsDropdownOpen(false);
    }

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
    resetColors();
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
        active={value.includes(item)}
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

  const getText = () => {
    if (!value || value.length === 0) return 'Select';

    if (multiple && value.length > 0)
      return `${value.length} ${value.length === 1 ? 'item' : 'items'}`;

    return `${value}`;
  };

  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClicked}>
      <div
        sx={{
          width: fullWidth ? '100%' : width,
          position: 'relative',
          border: '2px solid',
          borderColor: disabled ? 'muted' : color,
          borderRadius: 'sm',
          transition: 'all 300ms',
          ':hover': {
            borderColor: !disabled && hoverColor,
          },
          ':focus': {
            borderColor: !disabled && focusColor,
          },
        }}>
        <Button
          icon={isDropdownOpen ? 'expand_less' : 'expand_more'}
          iconPosition="right"
          variant="text"
          size="large"
          onClick={toggleOpen}
          disabled={disabled}
          fullWidth>
          <Text textAlign="left" color={disabled ? 'inherit' : 'text'} fullWidth truncate>
            {getText()}
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
