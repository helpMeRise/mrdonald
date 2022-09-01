import styled from 'styled-components';

const ToppingWrap = styled.div`
  padding: 0px 50px;
  width: 100%;
  max-width: 500px;
  column-count: 2;
  column-gap: 10px;
`;

const ToppingLabel = styled.label`
  cursor: pointer;
  display: block;
`;

const ToppingCheckbox = styled.input`
  cursor: pointer;
  margin-top: 5px;
`;

export const Toppings = ({ toppings, checkToppings }) => {
  return (
    <>
      <h3 style={{marginRight: 'auto', marginLeft: '50px'}}>Добавки</h3>
      <ToppingWrap>
      {toppings.map((item, i) => (
        <ToppingLabel key={i}>
          <ToppingCheckbox 
            type="checkbox"
            checked={item.checked}
            onChange={() => checkToppings(i)}
          />
          {item.name}
        </ToppingLabel>
      ))}
      </ToppingWrap>
    </>
  );
};
