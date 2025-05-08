import React from 'react';
import { TIngredients, TIngredientsList } from '../../types/ingredients';
import { Modal } from '../ModalWindow/Modal';
import style from './IngredientDetails.module.css';

type TIngredientDetailsProps = {
  data: TIngredients | undefined;
};

export const IngredientDetails = ({ data }: TIngredientDetailsProps) => {
  console.log('DATA', data);
  return (
    <div className={style.container}>
      <img src={data?.image_large} />
      <p className="text text_type_main-medium">{data?.name}</p>
      <div className={`${style.nutrition_container} pt-8 pb-15`}>
        <div className={style.nutrition_value}>
          <p className="text_type_main-default">{'Калории,ккал'}</p>
          <p className="text_type_main-default">{data?.calories}</p>
        </div>
        <div className={style.nutrition_value}>
          <p className="text_type_main-default">{'Белки, г'}</p>
          <p className="text_type_main-default">{data?.proteins}</p>
        </div>
        <div className={style.nutrition_value}>
          <p className="text_type_main-default">{'Жиры, г'}</p>
          <p className="text_type_main-default">{data?.fat}</p>
        </div>
        <div className={style.nutrition_value}>
          <p className="text_type_main-default">{'Углеводы, г'}</p>
          <p className="text_type_main-default">{data?.carbohydrates}</p>
        </div>
      </div>
    </div>
  );
};
