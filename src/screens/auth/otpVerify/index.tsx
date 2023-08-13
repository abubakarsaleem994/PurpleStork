import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {arrowIcon} from '../../../assets/icons';
import {COLORS} from '../../shared/theme/colors';
import {styles} from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {RF} from '../../shared/theme/responsive';
const OtpVerify = ({navigation}: any) => {
  return (
    <KeyboardAwareScrollView>
      <View>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <TouchableOpacity onPress={() => navigation.navigate('ForgetP')}>
          <FastImage
            source={arrowIcon}
            resizeMode={FastImage.resizeMode.stretch}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textSignUp}>Verify Code</Text>
        <Text style={{color: COLORS.Grey, marginVertical: 12}}>
          Please enter the code we just sent to email timsmxxx@email.com
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <OTPInputView
          style={{
            width: '80%',
            height: RF(100),
            alignSelf: 'center',
          }}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={{
            borderRadius: 100,
            height: RF(56),
            width: RF(56),
          }}
          codeInputHighlightStyle={{
            width: 30,
            height: 45,
            borderWidth: 0,
            borderBottomWidth: 1,
          }}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        <View style={[styles.borderStyle]}>
          <Text style={{color: COLORS.Grey}}>Resend code in </Text>
          <Text style={{color: COLORS.BLACK}}>00:48</Text>
        </View>
      </View>
      <View>
        <TouchableHighlight
          style={styles.signInBtn}
          onPress={() => navigation.navigate('CreateNewPassword')}>
          <Text style={styles.teststyles}>Continue</Text>
        </TouchableHighlight>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default OtpVerify;
