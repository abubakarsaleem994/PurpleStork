import React from 'react';
import {Pressable, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {arrowIcon, emailIcon} from '../../../assets/icons';
import CustomInput from '../../../shared/components/customInput';
import {COLORS} from '../../../shared/theme/colors';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
const ForgetPassword = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <View>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <FastImage
              source={arrowIcon}
              resizeMode={FastImage.resizeMode.stretch}
              style={styles.arrow}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.textView}>
          <Text style={styles.textSignUp}>Reset Password</Text>
          <Text style={{color: COLORS.Grey, marginVertical: 12}}>
            Enter your email, we will send a verification code to email
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <CustomInput
            placeholder="Enter Email"
            leftIcon={emailIcon}
            textContentType="emailAddress"
          />
        </View>

        <Pressable
          style={styles.signInBtn}
          onPress={() => navigation.navigate('OtpVerify')}>
          <Text style={styles.teststyles}>Send Verification Code</Text>
        </Pressable>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default ForgetPassword;
