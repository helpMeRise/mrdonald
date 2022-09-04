import styled from 'styled-components';

export const Button = styled.button`
  padding: 20px 40px;
  background: #299B01;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 25px;
  color: #FFFFFF;
  border-color: transparent;
  max-width: 250px;
  margin-top: auto;
  transition-property: color, background-color, border-color;
  transition-duration: .3s;
  align-self: center;
  &:hover {
    background-color: #fff;
    color: #299B01;
    border-color: #299B01;
  }

  &:disabled {
    color: #bbb;
    background-color: #ccc;
    border-color: $aaa;
  }
`;
