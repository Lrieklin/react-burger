import React from 'react';
import style from './ModalOverlay.module.css';

type TModalOverlayProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export const ModalOverlay = ({ children, onClose }: TModalOverlayProps) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={style.container} onClick={handleOverlayClick}>
      {children}
    </div>
  );
};
