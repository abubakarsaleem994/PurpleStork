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
        <StatusBar backgroundColor={COLORS.Purple} />
        <FastImage
          source={arrowIcon}
          resizeMode={FastImage.resizeMode.stretch}
          style={styles.arrow}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.textSignUp}>Verify Code</Text>
        <Text style={{color: COLORS.Grey, marginVertical: 12}}>
          Please enter the code we just sent to email timsmxxx@email.com
        </Text>
      </View>
      <View style={styles.contentContainer}>
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
export default Login;
