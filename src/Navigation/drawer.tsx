import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {acrossIcon, iconPrivacyPolicy, loginIcon} from '../assets/icons';
import {resetAuth} from '../shared/redux/authSlice';
import CustomerScreen from '../screens/general/customerScreen';
import DriverScreen from '../screens/general/driverScreen';
import Privacy from '../screens/general/privacy Policy';
import TermOfServices from '../screens/general/termOfServices';
import CustomDrawer from '../shared/components/customDrawer';
import {COLORS} from '../shared/theme/colors';
import {RF} from '../shared/theme/responsive';
import {styles} from './drawerStyles';

const Drawer = createDrawerNavigator();

function CustomDrawerContent({navigation}: any) {
  const dispatch = useDispatch();
  return (
    <SafeAreaView
      style={{
        width: '100%',

        backgroundColor: COLORS.Purple,
        flex: 1,
      }}>
      <View style={styles.textView}>
        <Text style={styles.text}>My Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
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
              dispatch(resetAuth());
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const MyDrawer = () => {
  const {
    auth: {user},
  } = useSelector((state: any) => state.root);
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
      initialRouteName="User">
      <Drawer.Screen name="Privacy Policy" component={Privacy} />
      <Drawer.Screen
        name="User"
        component={user?.role === 'Customer' ? CustomerScreen : DriverScreen}
      />
      <Drawer.Screen name="Terms of Services" component={TermOfServices} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
