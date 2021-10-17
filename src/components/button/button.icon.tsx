/** @jsxImportSource theme-ui */
import { FC } from 'react';
import { iconWrapperCss } from './button.styles';
import { ButtonAddonPosition } from './button.types';
import { Size } from '../../types/layouts';
import { Icon } from '../icon/icon';

/** The props required to render the button's icon. */
export interface ButtonIconProps {
  /**
   * The material icon name.
   * @remarks
   * No icon will be rendered if a name is not provided.
   */
  name?: string;
  /**
   * The size of the icon to render.
   * @remarks
   * See {@link Size} for more details.
   *
   * @defaultValue `'small'`
   */
  size?: Size;
  /**
   * The position of the icon on the button.
   * @remarks
   * See {@link ButtonAddonPosition} for more details.
   */
  position: ButtonAddonPosition;
  /**
   * The requested render position of the icon on the button.
   * The icon will only be rendered when this value matches the
   * `position` property.
   * @remarks
   * See {@link ButtonAddonPosition} for more details.
   */
  renderPosition?: ButtonAddonPosition;
  /**
   * Is the button in the loading state?
   * @remarks
   * The icon will not be rendered if loading is `true`
   */
  loading?: boolean;
  /** Does the button have any children? */
  buttonHasChildren?: boolean;
}

/**
 * Renders a button icon.
 * @param props - the {@link ButtonIconProps}.
 * @returns A button icon component
 */
export const ButtonIcon: FC<ButtonIconProps> = ({
  name,
  position,
  renderPosition,
  size = 'small',
  loading,
  buttonHasChildren,
}) => {
  if (!name) return null;
  if (loading) return null;
  if (renderPosition !== position) return null;

  return (
    <span sx={iconWrapperCss(renderPosition, !!buttonHasChildren)}>
      <Icon name={name} size={size} />
    </span>
  );
};
