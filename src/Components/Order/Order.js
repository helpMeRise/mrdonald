import React from 'react';
import styled from 'styled-components';
import { formatCurrency, totalPriceItems } from '../Functions/secondaryFunction';
import { Button } from '../Style/Button';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 80px;
  background: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const OrderTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;

const EmptyList = styled.p`
  text-align: center;
`;

export const Order = ({ orders, setOrders, setOpenItem }) => {

  const total = orders.reduce((acc, item) => {
    return totalPriceItems(item) + acc
  }, 0);

  const totalCounter = orders.reduce((acc, item) => {
    return item.count + acc
  }, 0);

  const removeItem = index => {
    const newOrder = [...orders];

    newOrder.splice(index, 1);
    setOrders(newOrder);
  }

  return (
    <>
      <OrderStyled>
        <OrderTitle>Ваш заказ</OrderTitle>
        <OrderContent>
          {orders.length ?
          (
            <OrderList>
              {orders.map((order, index) => <OrderListItem 
              key={index} 
              order={order} 
              removeItem={removeItem}
              index={index}
              setOpenItem={setOpenItem}
            />)}
            </OrderList>
          ) : (
            <EmptyList>Список заказов пуст</EmptyList>
          )}

        </OrderContent>
        <Total>
          <span>Итого:</span>
          <span>{totalCounter}</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <Button>Оформить</Button>
      </OrderStyled>
    </>
  )
}
