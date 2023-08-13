import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MyDrawer from './drawer';

const Stack = createNativeStackNavigator<any>();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drawer" component={MyDrawer} />
    </Stack.Navigator>
  );
};

export default MainStack;
