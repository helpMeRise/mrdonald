import { useState } from 'react';

const getTopping = toppings => toppings.map(item => ({
  name: item,
  checked: false,
}))

export const useToppings = (openItem) => {
  const [toppings, setToppings] = useState(openItem.toppings ? getTopping(openItem.toppings) : []);

  const checkToppings = index => {
    setToppings(toppings.map((item, i) => {
      if (i === index) item.checked = !item.checked;
      return item;
    }));
  };

  return { toppings, checkToppings }

};
