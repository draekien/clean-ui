import React from 'react';
import { Meta, Story } from '@storybook/react';
import { List, ListProps } from '../components/list/list';
import { Card } from '../components/card/card';

export default {
  title: 'Components/List',
  component: List,
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;
const rows = [
  'Travis Willingham',
  'Laura Bailey',
  'Ashleigh Johnson',
  'Sam Riegal',
  'Matthew Mercer',
  'Marisha Ray',
  "Liam O'Brian",
  'Talisen Jaffe',
];

export const Default = Template.bind({});
Default.args = {
  data: {
    label: 'Critical Role Cast Members',
    rows: rows,
  },
};

export const ComponentRows = Template.bind({});
ComponentRows.args = {
  data: {
    label: <div>Critical Role Cast Members</div>,
    rows: rows.map((row, index) => (
      <div key={index} style={{ paddingBottom: '0.5em' }}>
        <Card variant="small" noShadow>
          {row}
        </Card>
      </div>
    )),
  },
};
