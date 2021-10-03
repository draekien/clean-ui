import { Theme, ThemeUIStyleObject } from 'theme-ui';
import { alpha } from '@theme-ui/color';

interface CalendarDayCssProps {
  isDarkmode: boolean;
  isSelected: boolean;
  isWithinSelectedRange: boolean;
  isWithinHoverRange: boolean;
  isDisabled: boolean;
  isAnotherMonth?: boolean;
}

const getDayColors = (
  props: CalendarDayCssProps
): {
  backgroundColor: ((t: Theme) => string) | string;
  color: string;
} => {
  if (props.isDarkmode) {
    if (props.isSelected) {
      return {
        backgroundColor: 'b-200',
        color: 'b-700',
      };
    } else if (props.isWithinSelectedRange || props.isWithinHoverRange) {
      return {
        backgroundColor: 'b-300',
        color: 'b-600',
      };
    } else if (props.isDisabled) {
      return {
        backgroundColor: 'b-600',
        color: 'b-500',
      };
    } else {
      return {
        backgroundColor: props.isAnotherMonth ? 'b-600' : 'b-500',
        color: props.isAnotherMonth ? 'b-300' : 'b-100',
      };
    }
  }

  if (props.isSelected) {
    return {
      backgroundColor: (t: Theme) => `${alpha('p-400', 0.75)(t)}`,
      color: 'b-600',
    };
  } else if (props.isWithinSelectedRange || props.isWithinHoverRange) {
    return {
      backgroundColor: (t: Theme) => `${alpha('p-400', 0.35)(t)}`,
      color: 'b-600',
    };
  } else if (props.isDisabled) {
    return {
      backgroundColor: (t: Theme) => `${alpha('b-200', 0.25)(t)}`,
      color: 'b-300',
    };
  } else {
    return {
      backgroundColor: (t: Theme) =>
        `${props.isAnotherMonth ? alpha('p-000', 0.25)(t) : alpha('p-100', 0.5)(t)}`,
      color: props.isAnotherMonth ? 'b-300' : 'b-600',
    };
  }
};

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
      backgroundColor: props.isDarkmode ? 'b-400' : 'p-200',
    };
  } else {
    css.cursor = 'not-allowed';
  }

  const colors = getDayColors(props);

  css.backgroundColor = colors.backgroundColor;
  css.color = colors.color;

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
};
