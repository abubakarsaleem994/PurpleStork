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
  eyeIcon,
  eyeoffIcon,
  lockIcon,
  phoneIcon,
  userIcon,
} from '../../../assets/icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RF, WP} from '../../shared/theme/responsive';
import {FONTS} from '../../shared/theme/fonts';
const ChangePassword = ({navigation}: any) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <KeyboardAwareScrollView>
      <View>
        <StatusBar backgroundColor={COLORS.Purple} />
        <FastImage
          source={arrowIcon}
          resizeMode={FastImage.resizeMode.stretch}
          style={styles.arrow}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.textSignUp}>New Password</Text>
        <Text style={{color: COLORS.Grey, marginVertical: 12}}>
          Create a new password that is safe and easy to remember
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={[styles.borderStyle]}>
          <FastImage source={lockIcon} style={styles.inputIcon} />
          <TextInput
            style={styles.textInput}
            placeholder="Types your password"
            placeholderTextColor={COLORS.Grey}
          />
          <TouchableOpacity style={{marginHorizontal: -50}}>
            <FastImage source={eyeIcon} style={styles.eye} />
          </TouchableOpacity>
        </View>
        <View style={[styles.borderStyle]}>
          <FastImage source={lockIcon} style={styles.inputIcon} />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm New password"
            placeholderTextColor={COLORS.Grey}
          />
          <TouchableOpacity style={{marginHorizontal: -50}}>
            <FastImage source={eyeoffIcon} style={styles.eyeoff} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableHighlight
          style={styles.signInBtn}
          onPress={() => navigation.navigate('PasswordUpdate')}>
          <Text style={styles.teststyles}>Confirm New Password</Text>
        </TouchableHighlight>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default ChangePassword;
