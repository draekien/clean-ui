import { ThemeUIStyleObject } from '@theme-ui/css';
import { Direction } from '../../types/layouts';

export const listContainerCss: ThemeUIStyleObject = {
  padding: 0,
  margin: 0,
};

export const descriptionTitleCss: ThemeUIStyleObject = {
  variant: 'text.subtitle',
  paddingBottom: 'sm',
};

export const listItemCss = (direction: Direction): ThemeUIStyleObject => {
  const css: ThemeUIStyleObject = {
    padding: 0,
    margin: 0,
    display: 'inline-flex',
    variant: 'text.body',
  };

  if (direction === 'column') {
    css.display = 'flex';
  }

  return css;
};

export const orderedListItemCss = (direction: Direction): ThemeUIStyleObject => {
  const css: ThemeUIStyleObject = {
    padding: 0,
    margin: 0,
    display: 'inline-flex',
    variant: 'text.body',
  };

  if (direction === 'column') {
    css.display = 'flex';
  }

  return css;
};

export const orderedListItemIndexCss: ThemeUIStyleObject = {
  width: '4em',
  variant: 'text.mono',
  textAlign: 'center',
};

export const orderedListItemContentCss: ThemeUIStyleObject = {
  flexGrow: 1,
};
