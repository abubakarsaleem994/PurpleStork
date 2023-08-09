import React, {useState} from 'react';
import {
  Pressable,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {signIn} from '../../../assets/images';
import {styles} from './styles';
import {COLORS} from '../../shared/theme/colors';
import CheckBox from 'react-native-check-box';
import {
  arrowIcon,
  emailIcon,
  eyeoffIcon,
  lockIcon,
  phoneIcon,
  userIcon,
} from '../../../assets/icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RF, WP} from '../../shared/theme/responsive';
import {FONTS} from '../../shared/theme/fonts';
const Login = ({navigation}: any) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <KeyboardAwareScrollView>
      <View>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <FastImage
          source={arrowIcon}
          resizeMode={FastImage.resizeMode.stretch}
          style={styles.arrow}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.textSignUp}>Reset Password</Text>
        <Text style={{color: COLORS.Grey, marginVertical: 12}}>
          Enter your email, we will send a verification code to email
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={[styles.borderStyle]}>
          <FastImage source={emailIcon} style={styles.inputIcon} />
          <TextInput
            style={styles.textInput}
            placeholder="Types your email"
            placeholderTextColor={COLORS.Grey}
          />
        </View>
      </View>
      <View>
        <TouchableHighlight
          style={styles.signInBtn}
          onPress={() => navigation.navigate('OtpVerify')}>
          <Text style={styles.teststyles}>Send Verification Code</Text>
        </TouchableHighlight>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default Login;
