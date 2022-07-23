import styled from 'styled-components';
import React from 'react';
import { Button } from './Button';

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 600px;
  height: 600px;
  padding-bottom: 45px;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background: url(${({ img }) => img}) center/cover;
  margin-bottom: 20px;
`;

const GoodWithPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  font-family: Pacifico;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 53px;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

  const closeModal = e => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  if (!openItem) return null;
  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img}/>
        <GoodWithPrice>
          <p>{openItem.name}</p>
          <p>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</p>
        </GoodWithPrice>
        <Button>
          Добавить
        </Button>
      </Modal>

    </Overlay>
  )
};
