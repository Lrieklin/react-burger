import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';
import { Button, CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';

type TModalProps = {
  title?: string;
  container: HTMLElement | null;
  children?: React.ReactNode;
  onClose: () => void;
};

export const Modal = ({ title, container, children, onClose }: TModalProps) => {
  useEffect(() => {
    const handleEscClick = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscClick);

    return () => window.removeEventListener('keydown', handleEscClick);
  }, [onClose]);

  return (
    <>
      {container &&
        createPortal(
          <ModalOverlay onClose={onClose}>
            <div className={style.container}>
              <div className="pl-10 pr-10 pb-0 pt-10">
                <div className={style.close_button_and_title}>
                  {title && <p className="text text_type_main-large">{title}</p>}
                  <Button htmlType="button" type="secondary" size="large" onClick={onClose}>
                    <CloseIcon type="primary" />
                  </Button>
                </div>
              </div>
              {children}
            </div>
          </ModalOverlay>,
          container,
        )}
    </>
  );
};
