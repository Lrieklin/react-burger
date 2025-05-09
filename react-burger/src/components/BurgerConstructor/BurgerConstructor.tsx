import React, { useCallback, useMemo, useState } from 'react';
import { Button, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './BurgerConstructor.module.css';
import { TIngredients, TIngredientsList } from '../../types/ingredients';
import { Modal } from '../ModalWindow/Modal';
import { OrderDetails } from '../OrderDetails/OrderDetails';

type TBurgerConstructorProps = {
  data: TIngredients[];
  portalContainer: HTMLElement | null;
};

export const BurgerConstructor = ({ data, portalContainer }: TBurgerConstructorProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpenPlaceOrderClick = useCallback(() => {
    setOpen(true);
  }, [isOpen]);

  const handleClosePlaceOrderClick = useCallback(() => {
    setOpen(false);
  }, [isOpen]);

  const summ = useMemo(() => data.map(ingredient => ingredient.price).flat(), [data]);

  const totalSumm = useMemo(() => summ.reduce((sum, value) => sum + value, 0), [summ]);

  return (
    <div className={style.card}>
      <div className={style.scroll_container}>
        <div className={style.items}>
          {data.map(ingredient => (
            <ConstructorElement
              key={ingredient._id}
              text={ingredient.name || ''}
              price={ingredient.price}
              thumbnail={ingredient.image || ''}
            />
          ))}
        </div>
      </div>
      <div className={style.total_price_container}>
        <p className="text text_type_main-medium">{totalSumm}</p>
        <Button htmlType="button" type="primary" size="large" onClick={handleOpenPlaceOrderClick}>
          {'Оформить заказ'}
        </Button>
      </div>
      {isOpen && (
        <Modal container={portalContainer} onClose={handleClosePlaceOrderClick}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};
