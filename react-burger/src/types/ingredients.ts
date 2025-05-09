export type TIngredients = {
  _id: string | null;
  name: string | null;
  type: 'bun' | 'sauce' | 'main';
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export type TIngredientsList = {
  success: boolean;
  data: TIngredients[];
};
