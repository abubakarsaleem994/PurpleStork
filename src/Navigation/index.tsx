import React from 'react';
import MainStack from './mainStack';
import {useSelector} from 'react-redux';
import AuthStack from './authStack';

const Navigation = () => {
  const {
    auth: {isLoggedIn},
  } = useSelector((state: any) => state.root);
  return isLoggedIn ? <MainStack /> : <AuthStack />;
};

export default Navigation;
