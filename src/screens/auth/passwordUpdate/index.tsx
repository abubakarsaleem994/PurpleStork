import React from 'react';
import {
  Pressable,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {signIn} from '../../../assets/images';
import {styles} from './styles';
import {COLORS} from '../../shared/theme/colors';
import {successIcon} from '../../../assets/icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RF, WP} from '../../shared/theme/responsive';
import {StatusBar} from 'react-native';
const PasswordUpdate = ({navigation}: any) => {
  const {Purple} = COLORS;
  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <View style={styles.updateView}>
          <FastImage source={successIcon} style={styles.successIcon} />
        </View>

        <View style={styles.textView}>
          <Text style={styles.textResetPassword}>Password Changed</Text>
          <Text style={styles.textshow}>
            Password changed successfully, you can login again with a new
            password
          </Text>
        </View>

        <View>
          <TouchableHighlight
            onPress={() => navigation.navigate('Login')}
            style={styles.LoginNow}>
            <Text style={styles.teststyles}>Login Now</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
export default PasswordUpdate;
