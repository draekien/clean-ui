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
    py: 'xxs',
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

  if (props.size === 'small') {
    css.px = 'md';
  } else if (props.size === 'large') {
    css.py = 'xs';
    css.px = 'xxl';
  } else {
    css.px = 'xl';
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
      css.backgroundColor = 'b-200';
      css.borderColor = 'b-200';
      css.color = 'b-300';
    }
  }

  return css;
};
