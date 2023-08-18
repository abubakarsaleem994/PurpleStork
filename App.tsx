import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import 'react-native-gesture-handler';
import MyDrawer from './src/Navigation/drawer';
import ChangePassword from './src/screens/auth/changePassword';
import ForgetPassword from './src/screens/auth/forgetPassword';
import Login from './src/screens/auth/login';
import OtpVerify from './src/screens/auth/otpVerify';
import passwordUpdate from './src/screens/auth/passwordUpdate';
import SignUp from './src/screens/auth/signUp';
import DriverScreen from './src/screens/general/driverScreen';
import CustomerScreen from './src/screens/general/customerScreen';
import MapScreen from './src/screens/general/mapScreen';
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
        <Stack.Screen name="ForUser" component={MyDrawer} />
        <Stack.Screen name="Driver" component={DriverScreen} />
        <Stack.Screen name="Custom" component={CustomerScreen} />
        <Stack.Screen name="Map" component={MapScreen} />

       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
