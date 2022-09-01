
export const totalPriceItems = (order) => {
  const countTopping = order.topping.filter(item => {
    return item.checked;
  }).length;

  const priceTopping = (order.price * 0.1) * countTopping;

  return (order.price + priceTopping) * order.count;
};

export const formatCurrency = (price) => price.toLocaleString('ru-RU', 
  { style: 'currency', currency: 'RUB' });