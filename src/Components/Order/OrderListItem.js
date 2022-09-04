import React, { useRef } from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { formatCurrency, totalPriceItems } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  cursor: pointer;
`;

const OrderItemWrap = styled.div`
  display: flex;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background: url(${trashImage}) center/cover no-repeat;
  cursor: pointer;
`;

const ItemToppings = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ItemTopping = styled.li`
  color: tomato;
  padding-left: 10px;
  font-size: 14px;
`;

export const OrderListItem = ({ order, removeItem, index, setOpenItem }) => {
  
  const editOrder = e => {
    if (e.target === refDeleteButton.current) return;
    setOpenItem({...order, index});
  }

  const refDeleteButton = useRef(null);

  return (
    <OrderItemStyled onClick={editOrder}>
      <OrderItemWrap>
        <ItemName>{order.name} {order.choice}</ItemName>
        <span>{order.count}</span>
        <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
        <TrashButton ref={refDeleteButton} onClick={() => removeItem(index)}/>
      </OrderItemWrap>
        <ItemToppings>
        {order.topping.filter(item => item.checked).map(item => (
          <ItemTopping key={item.name}>
            {item.name}
          </ItemTopping>
        ))}
  
        </ItemToppings>
    </OrderItemStyled>
  )
};
