import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Tag, TagProps } from '../components/tag/tag';

export default {
  title: 'Components/Tag',
  component: Tag,
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'tag',
};

export const Permanent = Template.bind({});
Permanent.args = {
  value: "You can't remove me",
  onClose: null,
};

const exampleTagValues = ['one', 'two', 'three'];

export const RemoveTagExample = () => {
  const [tags, setTags] = useState(exampleTagValues);

  const handleClose = (value: string) => {
    const newTags = [...tags].filter((t) => t !== value);
    setTags(newTags);
  };

  return (
    <div style={{ display: 'flex', gap: '0.25rem' }}>
      {tags.map((tag, index) => (
        <Tag key={index} value={tag} onClose={handleClose} />
      ))}
    </div>
  );
};
