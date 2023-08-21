import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ChangePassword from '../screens/auth/changePassword';
import OtpVerify from '../screens/auth/otpVerify';
import PasswordUpdate from '../screens/auth/passwordUpdate';
import SignUp from '../screens/auth/signUp';
import ForgetPassword from '../screens/auth/forgetPassword';
import Login from '../screens/auth/login';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetP" component={ForgetPassword} />
      <Stack.Screen name="OtpVerify" component={OtpVerify} />
      <Stack.Screen name="CreateNewPassword" component={ChangePassword} />
      <Stack.Screen name="PasswordUpdate" component={PasswordUpdate} />
    </Stack.Navigator>
  );
};

export default AuthStack;
