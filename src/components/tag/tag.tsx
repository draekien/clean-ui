/** @jsxImportSource theme-ui */
import React from 'react';
import { Icon } from '../icon/icon';
import { Text } from '../text/text';
import { tagCss, tagContainerCss, closeButtonCss } from './tag.styles';

export interface TagProps {
  value: string;
  onClose?: (value: string) => void;
}

export const Tag: React.FC<TagProps> = ({ value, onClose }) => {
  const handleClose = () => {
    onClose && onClose(value);
  };

  return (
    <span sx={tagContainerCss}>
      <span sx={tagCss}>
        <Text variant="eyebrow">{value}</Text>
      </span>
      {!!onClose && (
        <button sx={closeButtonCss} onClick={handleClose}>
          <Icon name="close" size="small" />
        </button>
      )}
    </span>
  );
};
