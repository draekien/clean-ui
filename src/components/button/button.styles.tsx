import { ButtonSize, ButtonVariant } from './button';
import { alpha } from '@theme-ui/color';
import { Theme, ThemeUIStyleObject } from '@theme-ui/css';

export interface ButtonCssProps {
  variant: ButtonVariant;
  size: ButtonSize;
  disabled: boolean;
  loading: boolean;
  fullWidth: boolean;
  active: boolean;
  feature: boolean;
  showContentWhileLoading: boolean;
  iconPosition?: 'left' | 'right';
  hasText?: boolean;
}

const getColors = (variant: ButtonVariant) => {
  if (variant === 'secondary') {
    return {
      backgroundColor: 's-400',
      borderColor: 's-400',
      color: 'b-000',
      hoverBackground: 's-300',
      hoverBorder: 's-300',
      activeBackground: 's-200',
      activeBorder: 's-200',
    };
  } else if (variant === 'outline') {
    return {
      backgroundColor: 'transparent',
      borderColor: 'p-400',
      color: 'p-400',
      hoverBackground: 'transparent',
      hoverBorder: 'p-300',
      activeBackground: 'transparent',
      activeBorder: 'p-200',
    };
  } else if (variant === 'gradient') {
    return {
      backgroundColor: (t: Theme) =>
        `linear-gradient(to right, ${alpha('p-400', 1)(t)} 0%, ${alpha(
          's-400',
          1
        )(t)} 51%, ${alpha('p-400', 1)(t)} 100%)`,
      borderColor: 'transparent',
      color: 'b-000',
    };
  }

  // default to primary
  return {
    backgroundColor: 'p-400',
    borderColor: 'p-400',
    color: 'b-000',
    hoverBackground: 'p-300',
    hoverBorder: 'p-300',
    activeBackground: 'p-200',
    activeBorder: 'p-200',
  };
};

export const buttonCss = (props: ButtonCssProps): ThemeUIStyleObject => {
  const css: any = {
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
    justifyContent: 'space-between',
    textDecoration: 'none',
  };

  if (props.fullWidth) {
    css.width = '100%';
    css.display = 'flex';
  }

  if (props.feature) {
    props.variant = 'gradient';
    props.size = 'large';

    css.textTransform = 'uppercase';
    css.letterSpacing = '0.5rem';
  }

  const colors = getColors(props.variant);

  if (props.variant === 'gradient') {
    css.backgroundSize = '200% auto';
    css.border = '1px solid transparent';
    css.position = 'relative';
    css['&:before'] = {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: -1,
      margin: -1,
      borderRadius: 'inherit',
      backgroundImage: colors.backgroundColor,
    };
  }

  if (props.hasText) {
    if (props.size === 'small') {
      css.px = 'md';
      css.height = '1.75rem';
    } else if (props.size === 'large') {
      css.height = '2.25rem';
      css.px = 'xxl';
    } else {
      css.height = '1.75rem';
      css.px = 'xl';
    }
  } else {
    if (props.size === 'small') {
      css.height = '1.5rem';
      css.width = '1.5rem';
    } else if (props.size === 'large') {
      css.height = '2.5rem';
      css.width = '2.5rem';
    } else {
      css.height = '2rem';
      css.width = '2rem';
    }
  }

  if ((!props.loading || props.showContentWhileLoading) && props.hasText) {
    if (props.iconPosition === 'left') {
      switch (props.size) {
        case 'small':
          css.pl = 'xs';
          css.pr = 'sm';
          break;
        case 'medium':
          css.pl = 'sm';
          css.pr = 'md';
          break;
        default:
          css.pl = 'md';
          css.pr = 'lg';
          break;
      }
    } else if (props.iconPosition === 'right') {
      switch (props.size) {
        case 'small':
          css.pl = 'sm';
          css.pr = 'xs';
          break;
        case 'medium':
          css.pl = 'md';
          css.pr = 'sm';
          break;
        default:
          css.pl = 'lg';
          css.pr = 'md';
          break;
      }
    }
  }

  if (!props.disabled) {
    if (props.variant === 'outline') {
      css.backgroundColor = colors.backgroundColor;
      css.color = colors.borderColor;
      css.span = {
        color: colors.borderColor,
        textShadow: 'text',
        transition: 'all 300ms',
      };
      css[':hover, :focus'] = {
        color: colors.hoverBorder,
        span: {
          color: colors.hoverBorder,
        },
      };
      css[':active'] = {
        color: colors.activeBorder,
        span: {
          color: colors.activeBorder,
        },
      };
    } else if (props.variant === 'gradient') {
      css.backgroundImage = colors.backgroundColor;
      css.color = colors.color;
      css[':hover, :focus'] = {
        backgroundPosition: 'right center',
      };
      css[':active'] = {
        backgroundPosition: 'center',
      };
    } else {
      css.backgroundColor = colors.backgroundColor;
      css.borderColor = colors.borderColor;
      css.color = colors.color;
      css.span = {
        color: colors.color,
      };
      css[':hover, :focus'] = {
        backgroundColor: colors.hoverBackground,
        borderColor: colors.hoverBorder,
      };
      css[':active'] = {
        backgroundColor: colors.activeBackground,
        borderColor: colors.activeBorder,
      };
    }

    if (props.active && props.variant !== 'gradient') {
      css.backgroundColor = colors.activeBackground;
      css.borderColor = colors.activeBackground;
    } else if (props.active) {
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
