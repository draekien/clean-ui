/** @jsxImportSource theme-ui */
import React from 'react';
import { Overlay } from '../overlay/overlay';
import { Card } from '../card/card';
import { Button } from '../button/button';
import { modalWrapperCss, modalWrapperTransitionCss } from './modal.styles';
import OutsideClickHandler from 'react-outside-click-handler';
import { Transition } from 'react-transition-group';

export interface ModalProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  width?: string | number | string[] | number[];
  visible?: boolean;
  feature?: boolean;
  fullPage?: boolean;
  noPadding?: boolean;
  showCloseButton?: boolean;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  fullPage = false,
  children,
  onClose,
  showCloseButton = false,
  header,
  visible = false,
  ...rest
}) => {
  const handleOutsideClicked = () => {
    onClose && onClose();
  };

  const closeButton = showCloseButton && (
    <Button
      variant="text"
      icon="close"
      iconPosition="right"
      onClick={handleOutsideClicked}
    />
  );

  const modalHeader = (
    <div
      sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
      {header}
      {closeButton}
    </div>
  );

  const card = (
    <OutsideClickHandler onOutsideClick={handleOutsideClicked}>
      <Card {...rest} variant="large" header={modalHeader}>
        {children}
      </Card>
    </OutsideClickHandler>
  );

  const cardWithOverlay = <Overlay>{card}</Overlay>;

  return (
    <Transition appear in={visible} timeout={0}>
      {(state) => (
        <div sx={{ ...modalWrapperCss, ...modalWrapperTransitionCss[state] }}>
          {fullPage ? cardWithOverlay : card}
        </div>
      )}
    </Transition>
  );
};
