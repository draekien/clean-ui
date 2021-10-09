import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DropdownButton,
  DropdownButtonProps,
} from '../patterns/buttons/button.dropdown.pattern';

export default {
  title: 'Patterns/Buttons/Dropdown',
  component: DropdownButton,
} as Meta;

const Template: Story<DropdownButtonProps> = (args) => (
  <div style={{ width: '20rem' }}>
    <DropdownButton {...args} />
  </div>
);

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
  value: 'Select',
  items: {
    label: 'Critical Role Cast Members',
    rows: rows,
  },
  maxHeight: '10rem',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  value: 'Select',
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
  value: 'Select',
  items: {
    label: 'Critical Role Cast Members',
    rows: searchRows,
  },
  maxHeight: '20rem',
  enableSearch: true,
};
