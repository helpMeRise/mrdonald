import React from 'react';
import styled from 'styled-components';
import logoImage from '../image/logo.svg';
import loginImage from '../image/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299B01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const ImgLogin = styled.img`
  width: 32px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  color: #fff;
  gap: 3px;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImage} alt='logo'/>
      <H1>MrDonald's</H1>
    </Logo>
    <Button>
      <ImgLogin src={loginImage} alt='login'/>
      войти
    </Button>
  </NavBarStyled>
)