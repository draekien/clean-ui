import { ThemeUIStyleObject } from '@theme-ui/css';

export interface ToggleCssProps {
  checked?: boolean;
  disabled?: boolean;
}

export const toggleCss = ({ checked, disabled }: ToggleCssProps): ThemeUIStyleObject => ({
  height: '2em',
  width: '4em',
  marginX: 'xs',
  borderRadius: 'sm',
  border: '0.25em solid',
  borderColor: 'border',
  position: 'relative',
  backgroundColor: disabled ? 'b-300' : 'border',
  boxShadow: 'inset 0 0 1em rgba(61, 61, 61, 0.25)',
  cursor: disabled ? 'not-allowed' : 'pointer',
  ':hover, :focus': {
    ':before': {
      backgroundColor: disabled ? 'b-200' : 'b-000',
    },
  },
  ':after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: checked ? '100%' : '0%',
    transition: 'all 100ms ease-in-out',
    backgroundColor: disabled ? 'success-100' : 'success-300',
    boxShadow: 'inset 0 0 1em rgba(61, 61, 61, 0.25)',
    zIndex: 'low',
  },
  ':before': {
    content: '""',
    position: 'absolute',
    boxSizing: 'content-box',
    top: 0,
    left: checked ? '55%' : '0%',
    height: '100%',
    width: '45%',
    borderRadius: 'xs',
    backgroundColor: disabled ? 'b-200' : 'b-100',
    transition: 'all 100ms ease-in-out',
    zIndex: 'middle',
  },
});

export const toggleContainerCss: ThemeUIStyleObject = {
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
};
