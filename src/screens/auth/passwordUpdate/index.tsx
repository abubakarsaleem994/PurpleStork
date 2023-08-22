import React from 'react';
import {Pressable, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import {COLORS} from '../../../shared/theme/colors';
import {successIcon} from '../../../assets/icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const PasswordUpdate = ({navigation}: any) => {
  const {Purple} = COLORS;
  return (
    <SafeAreaView style={{flex: 1}}>
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

        <Pressable
          onPress={() => navigation.navigate('Login')}
          style={styles.LoginNow}>
          <Text style={styles.teststyles}>Login Now</Text>
        </Pressable>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default PasswordUpdate;
