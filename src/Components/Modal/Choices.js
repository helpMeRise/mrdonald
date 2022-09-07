import { useContext } from 'react';
import styled from 'styled-components';
import { Context, ContextItem } from '../Functions/context';

const ChoiceWrap = styled.div`
  padding: 0px 50px;
  width: 100%;
  max-width: 500px;
  column-count: 2;
  column-gap: 10px;
`;

const ChoiceLabel = styled.label`
  cursor: pointer;
  display: block;
`;

const ChoiceRadio = styled.input`
  cursor: pointer;
  margin-top: 5px;
`;

export const Choices = () => {
  const {
    choices: { choice, changeChoices }
  } = useContext(ContextItem);
  const { openItem: { openItem } } = useContext(Context);
  return (
    <>
      <h3 style={{marginRight: 'auto', marginLeft: '50px'}}>Добавки</h3>
      <ChoiceWrap>
      {openItem.choices.map((item, i) => (
        <ChoiceLabel key={i}>
          <ChoiceRadio 
            type="radio"
            name="choices"
            checked={choice === item}
            value={item}
            onChange={changeChoices}
          />
          {item}
        </ChoiceLabel>
      ))}
      </ChoiceWrap>
    </>
  )
};
