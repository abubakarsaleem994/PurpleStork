import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {acrossIcon, iconPrivacyPolicy, loginIcon} from '../assets/icons';
import CustomerScreen from '../screens/general/driverScreen';
import Privacy from '../screens/general/privacy Policy';
import TermOfServices from '../screens/general/termOfServices';
import CustomDrawer from '../screens/shared/components/customDrawer';
import {COLORS} from '../screens/shared/theme/colors';
import {RF} from '../screens/shared/theme/responsive';
import {styles} from './drawerStyles';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

function CustomDrawerContent({navigation}: any) {
  return (
    <View
      style={{
        width: '100%',

        backgroundColor: COLORS.Purple,
        flex: 1,
      }}>
      <View style={{marginTop: RF(68)}}>
        <View style={styles.textView}>
          <Text style={styles.text}>My Profile</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Customer')}>
            <FastImage
              source={acrossIcon}
              resizeMode={FastImage.resizeMode.stretch}
              style={styles.crossIcon}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text1}>Beby Jovanca</Text>
          <Text style={styles.text2}>jovanca@gmail.com</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: COLORS.WHITE,
          flex: 1,
          marginTop: RF(37),
        }}>
        <View
          style={{marginTop: RF(20), padding: RF(10), alignContent: 'center'}}>
          <CustomDrawer
            leftIcon={iconPrivacyPolicy}
            textShow={'Privacy Policy'}
            onPress={() => {
              navigation.navigate('Privacy Policy');
            }}
          />
          <CustomDrawer
            leftIcon={iconPrivacyPolicy}
            textShow={'Terms of Services'}
            onPress={() => {
              navigation.navigate('Terms of Services');
            }}
          />
          <CustomDrawer
            leftIcon={loginIcon}
            textShow={'Log out'}
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      </View>
    </View>
  );
}
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: '100%',
        },
        headerShown: false,
        swipeEnabled: true,
        drawerType: 'slide',
        swipeEdgeWidth: RF(100),
        swipeMinDistance: RF(100),
      }}
      useLegacyImplementation
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="Customer">
      <Drawer.Screen name="Privacy Policy" component={Privacy} />
      <Drawer.Screen name="Customer" component={CustomerScreen} />
      <Drawer.Screen name="Terms of Services" component={TermOfServices} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
