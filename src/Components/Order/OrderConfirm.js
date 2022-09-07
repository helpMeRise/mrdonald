import styled from 'styled-components';
import { Overlay } from '../Modal/ModalItem';
import { OrderTitle, Total, TotalPrice } from './Order';
import { Button } from '../Style/Button';
import { projection } from '../Functions/secondaryFunction';
import { formatCurrency, totalPriceItems } from '../Functions/secondaryFunction';
import { useContext } from 'react';
import { Context } from '../Functions/context';

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  padding: 30px;
`;

const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  topping: ['topping', (item) => item.filter(el => el.checked).map(el => el.name)],
  choice: ['choice', (item) => item ? item : 'no choices'],
}


const sendOrder = (dataBase, orders, authentification) => {
  const newOrder = orders.map(projection(rulesData));
  dataBase.ref('orders').push().set({
    nameClient: authentification.displayName,
    email: authentification.email,
    order: newOrder,
  });
};

export const OrderConfirm = ({ firebaseDatabase }) => {

  const {
    orders: { orders, setOrders },
    auth: { authentification },
    orderConfirm: { setOpenOrderConfirm },
  } = useContext(Context);

  const dataBase = firebaseDatabase();

  const total = orders.reduce((acc, item) => {
    return totalPriceItems(item) + acc
  }, 0);

  return (
    <Overlay>
      <Modal>
        <OrderTitle>{authentification.displayName}</OrderTitle>
        <Text>Осталось только подтвердить заказ</Text>
        <Total>
          <span>Итого</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <Button onClick={() => {
          sendOrder(dataBase, orders, authentification);
          setOrders([]);
          setOpenOrderConfirm(false);
        }}>
          Подтвердить
        </Button>
      </Modal>
    </Overlay>
  )
};
