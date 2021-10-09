import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DropdownButton,
  DropdownButtonProps,
} from '../patterns/buttons/button.dropdown.pattern';

export default {
  title: 'Patterns/Buttons/Dropdown',
  component: DropdownButton,
} as Meta;

const Template: Story<DropdownButtonProps> = ({ value, multiple, onChange, ...rest }) => {
  const [selected, setSelected] = useState(
    value ? (Array.isArray(value) ? value : [value]) : []
  );

  const handleChange = (value: string) => {
    if (multiple) {
      if (selected.includes(value)) {
        setSelected(selected.filter((s) => s !== value));
      } else {
        setSelected([...selected, value]);
      }
    } else {
      setSelected([value]);
    }

    onChange && onChange(value);
  };

  return (
    <div style={{ width: '20rem' }}>
      <DropdownButton
        value={selected}
        onChange={handleChange}
        multiple={multiple}
        {...rest}
      />
    </div>
  );
};

const rows = [
  'Travis Willingham',
  'Laura Bailey',
  'Ashleigh Johnson',
  'Sam Riegal',
  'Matthew Mercer',
  'Marisha Ray',
  "Liam O'Brian",
  'Talisen Jaffe',
  'Percival Fredrickstein von Musel Klossowski de Rolo III',
];

export const Default = Template.bind({});
Default.args = {
  value: 'Select',
  items: {
    label: 'Critical Role Cast Members',
    rows: rows,
  },
};

export const WithMaxHeight = Template.bind({});
WithMaxHeight.args = {
  items: {
    label: 'Critical Role Cast Members',
    rows: rows,
  },
  maxHeight: '10rem',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  items: {
    label: 'Critical Role Cast Members',
    rows: rows,
  },
  fullWidth: true,
};

const searchRows = [
  ...rows,
  "Vex'halia",
  "Vax'ildan",
  'Scanlan Shorthalt',
  'Grog Strongjaw',
  'Pike Trickfoot',
];

export const Searcheable = Template.bind({});
Searcheable.args = {
  items: {
    label: 'Critical Role Cast Members',
    rows: searchRows,
  },
  maxHeight: '20rem',
  enableSearch: true,
};

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  items: {
    label: 'Critical Role Cast Members',
    rows: searchRows,
  },
  maxHeight: '20rem',
  enableSearch: true,
  multiple: true,
};
