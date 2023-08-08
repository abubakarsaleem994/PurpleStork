import React, {useState} from 'react';
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
const SignUp = ({navigation}: any) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <KeyboardAwareScrollView>
      <FastImage
        source={signIn}
        resizeMode={FastImage.resizeMode.stretch}
        style={styles.image}
      />
      <View style={styles.textView}>
        <Text style={styles.textSignUp}>Sign Up</Text>
        <Text style={{color: COLORS.Grey, marginVertical: 12}}>
          Create account and enjoy all services
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={[styles.borderStyle]}>
          <FastImage source={userIcon} style={styles.inputIcon} />
          <TextInput
            style={styles.textInput}
            placeholder="Types your full name"
            placeholderTextColor={COLORS.Grey}
          />
        </View>

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
        <View style={styles.borderStyle}>
          <FastImage source={phoneIcon} style={styles.inputIcon} />
          <TextInput
            style={styles.textInput}
            placeholder="Types your phone number (optional)"
            placeholderTextColor={COLORS.Grey}
          />
        </View>
        <View
          style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: RF(30)}}>
          <CheckBox
            style={{height: RF(24), width: RF(24)}}
            isChecked={isChecked}
            onClick={() => {
              setIsChecked(!isChecked);
            }}
            checkedCheckBoxColor="#86108B"
            uncheckedCheckBoxColor="#808D9E"
          />

          <Text
            style={{
              color: COLORS.BLACK,
              marginHorizontal: RF(10),
              marginLeft: RF(12),
            }}>
            I agree to the company
          </Text>
          <Pressable>
            <Text
              style={{
                color: COLORS.Purple,
                fontFamily: FONTS.BOLD,
                marginRight: RF(5),
              }}>
              Term of Service
            </Text>
          </Pressable>
          <Text style={{color: COLORS.BLACK}}>and</Text>
          <Pressable>
            <Text
              style={{
                color: COLORS.Purple,
                fontFamily: FONTS.BOLD,
                marginHorizontal: RF(35),
              }}>
              Privacy Policy
            </Text>
          </Pressable>
        </View>
      </View>

      <TouchableHighlight style={styles.signUpBtn}>
        <Text style={styles.teststyles}>Sign Up</Text>
      </TouchableHighlight>
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
          marginTop: RF(25),
          marginBottom: RF(64),
        }}>
        <Text style={{color: COLORS.BLACK}}>have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={{color: COLORS.Purple}}>Sign In</Text>
        </Pressable>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default SignUp;
