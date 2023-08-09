import React from 'react';
import {
  Pressable,
  StatusBar,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {signIn} from '../../../assets/images';
import CustomInput from '../../shared/components/customInput';
import {COLORS} from '../../shared/theme/colors';
import {RF} from '../../shared/theme/responsive';
import {styles} from './styles';
import {emailIcon, lockIcon} from '../../../assets/icons';
const Login = ({navigation}: any) => {
  return (
    <KeyboardAwareScrollView>
      <View>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
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
        <CustomInput
          placeholder="Enter Email"
          leftIcon={emailIcon}
          textContentType="emailAddress"
        />
        <CustomInput
          placeholder="Enter Password"
          leftIcon={lockIcon}
          isPassword
          secureTextEntry
          textContentType="password"
        />
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
