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
import {COLORS} from '../../../shared/theme/colors';
import CheckBox from 'react-native-check-box';
import {arrowIcon, lockIcon} from '../../../assets/icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomInput from '../../../shared/components/customInput';
const ChangePassword = ({navigation}: any) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <KeyboardAwareScrollView>
      <View>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <TouchableOpacity onPress={() => navigation.navigate('OtpVerify')}>
          <FastImage
            source={arrowIcon}
            resizeMode={FastImage.resizeMode.stretch}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textView}>
        <Text style={styles.textSignUp}>New Password</Text>
        <Text style={{color: COLORS.Grey, marginVertical: 12}}>
          Create a new password that is safe and easy to remember
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <CustomInput
          placeholder="Enter Password"
          leftIcon={lockIcon}
          isPassword
          secureTextEntry
          textContentType="password"
        />

        <CustomInput
          placeholder="Enter Password"
          leftIcon={lockIcon}
          isPassword
          secureTextEntry
          textContentType="password"
        />
      </View>

      <TouchableOpacity
        style={styles.signInBtn}
        onPress={() => navigation.navigate('PasswordUpdate')}>
        <Text style={styles.teststyles}>Confirm New Password</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};
export default ChangePassword;
