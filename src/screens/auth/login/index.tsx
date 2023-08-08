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
          source={signIn}
          resizeMode={FastImage.resizeMode.stretch}
          style={styles.image}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.textSignUp}>Welcome Back!</Text>
        <Text style={{color: COLORS.Grey, marginVertical: 12}}>
          Sign In to your account
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
        <View style={[styles.borderStyle]}>
          <FastImage source={lockIcon} style={styles.inputIcon} />
          <TextInput
            style={styles.textInput}
            placeholder="Types your password"
            placeholderTextColor={COLORS.Grey}
          />
          <TouchableOpacity style={{marginHorizontal: -30}}>
            <FastImage source={eyeoffIcon} style={styles.eyeoff} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.forgetpassword}
            onPress={() => navigation.navigate('ForgetP')}>
            <Text style={{color: COLORS.Purple}}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableHighlight
          style={styles.signInBtn}
          onPress={() => navigation.navigate('ForUser')}>
          <Text style={styles.teststyles}>Sign In</Text>
        </TouchableHighlight>
      </View>

      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          marginTop: RF(25),
          marginBottom: RF(64),
        }}>
        <Text style={{color: COLORS.BLACK}}>have an account?</Text>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: COLORS.Purple}}>Sign In</Text>
        </Pressable>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default Login;
