import React from 'react';
import { Meta } from '@storybook/react';
import { colors } from '../components/theme/theme.colors';

export const Colors = () => (
  <div
    style={{
      display: 'flex',
      flexFlow: 'row wrap',
      width: '100%',
      gap: '0.5em',
      justifyContent: 'space-evenly',
    }}>
    {Object.keys(colors).map((key, index) => {
      if (key === 'modes') return null;

      return (
        <div
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexFlow: 'column',
          }}>
          <div style={{ height: '10em', width: '10em', backgroundColor: colors[key] }} />
          <div>{key}</div>
        </div>
      );
    })}
  </div>
);

export default {
  title: 'Theme/Colors',
  component: Colors,
} as Meta;
