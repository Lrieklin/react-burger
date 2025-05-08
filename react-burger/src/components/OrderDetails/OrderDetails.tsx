import React from 'react';
import { TestTest } from '../../icons/icons';
import style from './OrderDetails.module.css';

export const OrderDetails = () => {
  return (
    <div className={style.container}>
      <p className="text text_type_digits-large pb-8 pt-2">034536</p>
      <p className="text text_type_main-small pb-8 pt-15">
        The quick brown fox jumps over the lazy dog.
      </p>
      <p className="pb-15">
        <TestTest />
      </p>
      <p className="pb-2">Ваш заказ начали готовить</p>
      <p className="pb-30">Дождитесь готовности на орбитальной станции</p>
    </div>
  );
};
