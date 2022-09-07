import React, { useContext } from 'react';
import styled from 'styled-components';
import logoImage from '../../image/logo.svg';
import loginImage from '../../image/sign.svg';
import { Context } from '../Functions/context';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
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
  font-size: 16px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const LogOut = styled.span`
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  margin-right: 30px;
`;

const Figure = styled.figure`
  margin: 0 30px;
`;

export const NavBar = () => {
  const { auth: { authentification, logIn, logOut } } = useContext(Context);
  
  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImage} alt='logo'/>
        {/* eslint-disable-next-line react/no-unescaped-entities*/}
        <H1>MrDonald's</H1>
      </Logo>
      {authentification ? (
        <User>
          <Figure>
            <img src={loginImage} alt={authentification.displayName}/>
            <figcaption>{authentification.displayName}</figcaption>
          </Figure>
          <LogOut onClick={logOut}>X</LogOut>
        </User>
      ) : (
        <Button>
          <ImgLogin
            src={loginImage}
            alt='login'
            onClick={logIn}  
          />
        войти
      </Button>
      )}
    </NavBarStyled>
  )
};
