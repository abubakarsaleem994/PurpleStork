import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/auth/login';
import SignUp from './src/screens/auth/signUp';
import ForgetPassword from './src/screens/auth/forgetPassword';
import OtpVerify from './src/screens/auth/otpVerify';
import ChangePassword from './src/screens/auth/changePassword';
import passwordUpdate from './src/screens/auth/passwordUpdate';
import ForUser from './src/screens/general/CustomerScreen/forUser';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetP" component={ForgetPassword} />
        <Stack.Screen name="OtpVerify" component={OtpVerify} />
        <Stack.Screen name="CreateNewPassword" component={ChangePassword} />
        <Stack.Screen name="PasswordUpdate" component={passwordUpdate} />
        <Stack.Screen name="ForUser" component={ForUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
