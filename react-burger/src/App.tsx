import React, { useEffect, useState } from 'react';
import './App.css';
import { AppHeader } from './components/AppHeader/AppHeader';
import { BurgerConstructor } from './components/BurgerConstructor/BurgerConstructor';
import { IngredientsList } from './components/IngredientsList/IngredientsList';
import { Modal } from './components/ModalWindow/Modal';
import { TIngredients, TIngredientsList } from './types/ingredients';

const portalContainer = document.getElementById('modal-root');

function App() {
  const [data, setData] = useState<TIngredients[]>([]);
  const [isLoading, setLoading] = useState(true);
  const ingridients = 'https://norma.nomoreparties.space/api/ingredients';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ingridients);
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.log('ERROR');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <div className="app_container">
        <IngredientsList data={data} portalContainer={portalContainer} />
        <BurgerConstructor data={data} portalContainer={portalContainer} />
      </div>
    </div>
  );
}

export default App;
