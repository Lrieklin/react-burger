import React, { useCallback, useEffect, useState } from 'react';

import style from './IngredientsList.module.css';
import { buttons_tab } from '../../utils/buttons_tab';
import { CurrencyIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { TIngredients } from '../../types/ingredients';
import { Modal } from '../ModalWindow/Modal';
import { IngredientDetails } from '../IngredientDetails/IngredientDetails';
import { ingredientTypes, ingredientTypesRus } from '../../constants/IngredientsListConstants';

type TBurgerConstructorProps = {
  data: TIngredients[];
  portalContainer: HTMLElement | null;
};

export const IngredientsList = ({ data, portalContainer }: TBurgerConstructorProps) => {
  const [current, setCurrent] = React.useState('1');
  const [isOpen, setOpen] = useState(false);
  const [currentData, setData] = useState<TIngredients>();

  const handleOpenPlaceOrderClick = useCallback(
    (id: string | null) => {
      setOpen(true);
      const test = data.find(currentData => currentData._id === id) || null;
      test && setData(test);
    },
    [isOpen, currentData, data],
  );

  const handleClosePlaceOrderClick = useCallback(() => {
    setOpen(false);
  }, [isOpen]);

  const getValueByKey = (title: string) => {
    return ingredientTypesRus.find(type => type.key === title)?.value;
  };

  const IngrAndTitles = ingredientTypes.map(currentType => ({
    title: currentType,
    ingredients: data.filter(ingredient => ingredient.type === currentType),
  }));

  return (
    <section className={style.burger_list} style={{ textAlign: 'start' }}>
      <p className="text text_type_main-large pt-10 pb-5">{'Соберите бургер'}</p>
      <div style={{ display: 'flex', paddingBottom: '40px' }}>
        {buttons_tab.map(currentTab => (
          <Tab
            key={currentTab.key}
            value={currentTab.value}
            active={current === currentTab.key}
            onClick={setCurrent}
          >
            {currentTab.value}
          </Tab>
        ))}
      </div>
      <div className={style.scroll_container}>
        {IngrAndTitles.map((ingredient, index) => (
          <React.Fragment key={index}>
            <p className={`${style.title_container} text_type_main-medium`}>
              {getValueByKey(ingredient.title)}
            </p>
            <div className="pt-6 pl-4 pb-10">
              <div className={style.card_list}>
                {ingredient.ingredients.map(data => (
                  <div key={data._id} className={style.card}>
                    <button
                      className={style.img_price}
                      onClick={() => handleOpenPlaceOrderClick(data._id)}
                    >
                      <img src={data.image || ''} />
                      <div className={style.price}>
                        <p className="text text_type_digits-default p-1">{data.price}</p>
                        <CurrencyIcon type="primary" />
                      </div>
                    </button>
                    <div className={style.ingredient_name}>
                      <p className="text text_type_main-default">{data.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      {isOpen && (
        <Modal
          title={'Детали ингредиента'}
          container={portalContainer}
          onClose={handleClosePlaceOrderClick}
        >
          <IngredientDetails data={currentData} />
        </Modal>
      )}
    </section>
  );
};
