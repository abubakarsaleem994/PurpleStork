import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import Navigation from './src/navigation';
import {store} from './src/shared/redux/store';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
        <Toast position={'bottom'} />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
