import { ButtonVariant } from './button.types';
import {
  getButtonColors,
  getButtonPadding,
  getButtonWithIconPadding,
} from './button.utils';
import { alpha } from '@theme-ui/color';
import { Theme, ThemeUIStyleObject } from '@theme-ui/css';
import { Size } from '../../types/layouts';

export interface ButtonCssProps {
  variant: ButtonVariant;
  size: Size;
  disabled: boolean;
  loading: boolean;
  fullWidth: boolean;
  active: boolean;
  feature: boolean;
  showContentWhileLoading: boolean;
  iconPosition?: 'left' | 'right';
  hasIcon?: boolean;
  hasText?: boolean;
  circle?: boolean;
}

export const buttonCss = (props: ButtonCssProps): ThemeUIStyleObject => {
  const css: ThemeUIStyleObject = {
    border: '1px solid',
    borderRadius: 'sm',
    boxShadow: 'md',
    cursor: 'pointer',
    variant: 'text.body',
    textAlign: 'center',
    textTransform: 'none',
    transition: 'all 300ms',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
  };

  if (props.fullWidth) {
    css.width = '100%';
    css.display = 'flex';

    if (props.variant === 'text' || props.variant === 'link') {
      css.justifyContent =
        props.iconPosition && props.hasIcon ? 'space-between' : 'flex-start';
    }
  }

  if (props.feature) {
    props.variant = 'gradient';
    props.size = 'large';

    css.textTransform = 'uppercase';
    css.letterSpacing = '0.5rem';
  }

  const { px, py } = getButtonPadding(props.size, !!props.hasText);

  css.px = px;
  css.py = py;

  if (!props.hasText && props.circle) {
    css.borderRadius = 'max';
  }

  if (
    (!props.loading || props.showContentWhileLoading) &&
    props.hasText &&
    props.iconPosition
  ) {
    const { pl, pr } = getButtonWithIconPadding(props.size, props.iconPosition);
    css.pl = pl;
    css.pr = pr;
  }

  const { normal, hover, active } = getButtonColors(props.variant);

  if (props.variant === 'gradient') {
    css.backgroundSize = '200% auto';
    css.border = '1px solid transparent';
    css.position = 'relative';
    css[':before'] = {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: -1,
      margin: -1,
      borderRadius: 'inherit',
      backgroundImage: normal.background,
    };
  }

  if (props.variant === 'text') {
    css.background = 'transparent';
    css.border = 'none';
    css.boxShadow = 'none';
    css.px = 'xxs';
    css.pl = 'xs';
    css.pr = 'xs';
  }

  if (props.variant === 'link') {
    css.background = 'transparent';
    css.border = 'none';
    css.boxShadow = 'none';
    css.position = 'relative';
    css.pl = 'xxs';
    css.pr = 'xxs';
    css[':before'] = {
      content: '""',
      position: 'absolute',
      backgroundColor: 'primary',
      height: 2,
      left: 0,
      right: 0,
      bottom: 0,
      transition: 'all 300ms',
    };
  }

  if (!props.disabled) {
    if (props.variant === 'outline') {
      css.backgroundColor = normal.background;
      css.color = normal.border;
      css.span = {
        color: normal.border,
        textShadow: 'text',
        transition: 'all 300ms',
      };
      css[':hover, :focus'] = {
        color: hover?.border,
        span: {
          color: hover?.border,
        },
      };
      css[':active'] = {
        color: active?.border,
        span: {
          color: active?.border,
        },
      };
    } else if (props.variant === 'gradient') {
      css.backgroundImage = normal.background;
      css.color = normal.content;
      css[':hover, :focus'] = {
        backgroundPosition: 'right center',
      };
      css[':active'] = {
        backgroundPosition: 'center',
      };
    } else if (props.variant === 'text') {
      css.color = normal.content;
      css[':hover, :focus'] = {
        backgroundColor: hover?.background,
        color: hover?.content,
      };
      css[':active'] = {
        backgroundColor: active?.background,
        color: active?.content,
      };
    } else if (props.variant === 'link') {
      css.color = normal.content;
      css[':hover, :focus'] = {
        backgroundColor: hover?.background,
        [':before']: {
          backgroundColor: hover?.content,
        },
      };
      css[':active'] = {
        backgroundColor: active?.background,
        [':before']: {
          backgroundColor: active?.content,
        },
      };
    } else {
      css.backgroundColor = normal.background;
      css.borderColor = normal.border;
      css.color = normal.content;
      css.span = {
        color: normal.content,
      };
      css[':hover, :focus'] = {
        backgroundColor: hover?.background,
        borderColor: hover?.border,
      };
      css[':active'] = {
        backgroundColor: active?.background,
        borderColor: active?.border,
      };
    }

    if (props.active && props.variant !== 'gradient') {
      css.backgroundColor = active?.background;
      css.borderColor = active?.background;
    } else if (props.active && props.variant === 'gradient') {
      css.backgroundPosition = 'center';
    }
  } else {
    css.cursor = 'not-allowed';
    css.boxShadow = 'disabled';
    if (props.variant === 'gradient') {
      css.backgroundImage = (t: Theme) =>
        `linear-gradient(to right, ${alpha('p-000', 1)(t)} 0%, ${alpha(
          's-000',
          1
        )(t)} 51%, ${alpha('p-000', 1)(t)} 100%)`;
      css.color = 'b-000';
    } else if (props.variant === 'text') {
      css.boxShadow = 'none';
      css.color = 'b-300';
    } else if (props.variant === 'link') {
      css.color = 'b-300';
      css.boxShadow = 'none';
      css[':before'] = {
        content: '""',
        position: 'absolute',
        backgroundColor: 'b-300',
        height: 2,
        left: 0,
        right: 0,
        bottom: 0,
        transition: 'all 300ms',
      };
    } else {
      css.backgroundColor = 'muted';
      css.borderColor = 'muted';
      css.color = 'b-300';
    }
  }

  return css;
};

export const iconWrapperCss = (
  position: 'left' | 'right',
  hasText: boolean
): ThemeUIStyleObject => {
  const css: any = {
    display: 'inline-flex',
    textDecoration: 'none',
  };

  if (hasText) {
    if (position === 'left') {
      css.marginRight = 'xs';
    } else {
      css.marginLeft = 'xs';
    }
  } else {
    css['i'] = {
      fontSize: '1.5rem',
    };
  }

  return css;
};
