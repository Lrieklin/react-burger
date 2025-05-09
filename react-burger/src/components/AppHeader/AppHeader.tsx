import React from 'react';
import styles from './AppHeader.module.css';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

export const AppHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.container}>
          <div className={styles.container}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default">{'Конструктор'}</p>
          </div>
          <div className={styles.container}>
            <ListIcon type="primary" />
            <p className="text text_type_main-default">{'Лента заказов'}</p>
          </div>
        </div>
        <Logo />
        <div className={styles.container}>
          <ProfileIcon type="primary" />
          <p className="text text_type_main-default">{'Личный кабинет'}</p>
        </div>
      </div>
    </div>
  );
};
