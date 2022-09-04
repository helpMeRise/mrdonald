import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyCdauat1U0IGBMG0PLkpwQcvzLRHfGurY4",
  authDomain: "mrdonalds-6b4ad.firebaseapp.com",
  projectId: "mrdonalds-6b4ad",
  storageBucket: "mrdonalds-6b4ad.appspot.com",
  messagingSenderId: "887392804827",
  appId: "1:887392804827:web:cdca73be287c27e3e911fe"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order {...auth} {...orders} {...openItem}/>
      <Menu {...openItem}/>
      { openItem.openItem && <ModalItem {...openItem} {...orders}/> }
    </>
  );
}

export default App;
