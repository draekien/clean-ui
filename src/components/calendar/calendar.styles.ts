import { Theme, ThemeUIStyleObject } from 'theme-ui';
import { alpha } from '@theme-ui/color';

interface CalendarDayCssProps {
  isSelected: boolean;
  isWithinSelectedRange: boolean;
  isWithinHoverRange: boolean;
  isDisabled: boolean;
  isAnotherMonth?: boolean;
}
export const calendarDayCss = (props: CalendarDayCssProps): ThemeUIStyleObject => {
  const css: ThemeUIStyleObject = {
    border: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    variant: 'text.small',
    transition: 'all 300ms',
    width: '100%',
    height: '2em',
  };

  if (!props.isDisabled) {
    css.cursor = 'pointer';
    css[':hover'] = {
      backgroundColor: 'p-200',
    };
  }

  if (props.isSelected) {
    css.backgroundColor = (t: Theme) => `${alpha('p-400', 0.75)(t)}`;
    css.color = 'b-600';
  } else if (props.isWithinSelectedRange || props.isWithinHoverRange) {
    css.backgroundColor = (t: Theme) => `${alpha('p-400', 0.35)(t)}`;
    css.color = 'b-600';
  } else if (props.isDisabled) {
    css.cursor = 'not-allowed';
    css.color = 'b-300';
    css.backgroundColor = (t: Theme) => `${alpha('b-200', 0.25)(t)}`;
  } else {
    css.color = props.isAnotherMonth ? 'b-300' : 'b-600';
    css.backgroundColor = (t: Theme) =>
      `${props.isAnotherMonth ? alpha('p-000', 0.25)(t) : alpha('p-100', 0.5)(t)}`;
  }

  return css;
};

export const calendarContainerCss: ThemeUIStyleObject = {
  display: 'inline-block',
  width: '17rem',
};

export const calendarHeaderCss: ThemeUIStyleObject = {
  flexFlow: 'row nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingY: 'sm',
};

export const calendarDayLabelContainerCss: ThemeUIStyleObject = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  justifyContent: 'space-around',
  textAlign: 'center',
  color: 'text',
  paddingBottom: 'sm',
};

export const calendarDayLabelCss: ThemeUIStyleObject = {
  display: 'inline-block',
  cursor: 'default',
  variant: 'text.small',
};

export const calenderDaysContainerCss: ThemeUIStyleObject = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  placeItems: 'center',
  gridGap: 0,
  backgroundColor: 'b-000',
};
