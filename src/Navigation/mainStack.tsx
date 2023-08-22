import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MyDrawer from './drawer';

const Stack = createNativeStackNavigator<any>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={MyDrawer} />
    </Stack.Navigator>
  );
};

export default MainStack;
