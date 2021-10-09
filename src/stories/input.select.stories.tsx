import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SelectInput, SelectInputProps } from '..';

export default {
  title: 'Patterns/Inputs/Select',
  component: SelectInput,
} as Meta;

const Template: Story<SelectInputProps> = (args) => (
  <div style={{ width: '20rem', height: '20rem' }}>
    <SelectInput {...args} />
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
  inputId: 'select',
  label: 'Critical Role Cast Members',
  helpText: 'Select an item from the list',
  fullWidth: false,
  items: {
    rows: rows,
  },
};

export const Searcheable = Template.bind({});
Searcheable.args = {
  inputId: 'select',
  label: 'Critical Role Cast Members',
  helpText: 'Select an item from the list',
  fullWidth: false,
  items: {
    rows: rows,
  },
  enableSearch: true,
};

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  inputId: 'select',
  label: 'Critical Role Cast Members',
  helpText: 'Select an item from the list',
  fullWidth: false,
  items: {
    rows: rows,
  },
  enableSearch: true,
  multiple: true,
};
