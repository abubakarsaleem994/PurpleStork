import React, {useState} from 'react';
import {Pressable, StatusBar, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {signIn} from '../../../assets/images';
import {styles} from './styles';
import {COLORS} from '../../../shared/theme/colors';
import CheckBox from 'react-native-check-box';
import {emailIcon, lockIcon, phoneIcon, userIcon} from '../../../assets/icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RF, WP} from '../../../shared/theme/responsive';
import CustomInput from '../../../shared/components/customInput';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {setAuth} from '../../../shared/redux/authSlice';
import CustomCheckbox from '../../../shared/components/customCheckbox';
import {SafeAreaView} from 'react-native-safe-area-context';
const SignUp = ({navigation}: any) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [fullname, setFullname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const handleSignup = () => {
    console.log('Values', fullname, email, password, phoneNumber, isChecked);
    if (
      fullname === 'abubakar' &&
      email === 'abubakarsaleem87@gmail.com' &&
      password === '12345' &&
      phoneNumber === '03047057974' &&
      isChecked
    ) {
      dispatch(
        setAuth({
          user: {
            fullname: fullname,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            role: 'Customer',
          },
          isLoggedIn: true,
        }),
      );
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Logged In Successfully',
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Incorrect Credentails',
      });
    }
  };
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
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
        <View style={styles.textView}>
          <Text style={styles.textSignUp}>Sign Up</Text>
          <Text style={styles.showText}>
            Create account and enjoy all services
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <CustomInput
            placeholder="Type your full name"
            leftIcon={userIcon}
            textContentType="name"
            value={fullname}
            onChangeText={value => {
              setFullname(value);
            }}
          />
          <CustomInput
            placeholder="Type your email"
            leftIcon={emailIcon}
            textContentType="emailAddress"
            value={email}
            onChangeText={value => {
              setEmail(value);
            }}
          />
          <CustomInput
            placeholder="Type your password"
            leftIcon={lockIcon}
            isPassword
            secureTextEntry
            textContentType="password"
            value={password}
            onChangeText={value => {
              setPassword(value);
            }}
          />
          <CustomInput
            placeholder="Type your phone number (optional)"
            leftIcon={phoneIcon}
            textContentType="telephoneNumber"
            value={phoneNumber}
            onChangeText={value => {
              setPhoneNumber(value);
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: RF(10),
              marginTop: RF(20),
              flex: 1,
            }}>
            <CustomCheckbox
              isChecked={isChecked}
              onPress={() => {
                setIsChecked(!isChecked);
              }}
              containerStyle={
                isChecked ? styles.checkedStyle : styles.unCheckedStyle
              }
            />
            <View style={[styles.checkBoxContainer]}>
              <Text style={[styles.checkBoxText]}>I agree to the company </Text>
              <Pressable>
                <Text style={[styles.checkBoxText, {color: COLORS.Purple}]}>
                  Term of Service
                </Text>
              </Pressable>
              <Text style={styles.checkBoxText}> and </Text>
              <Pressable>
                <Text style={[styles.checkBoxText, {color: COLORS.Purple}]}>
                  Privacy Policy
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        <Pressable style={styles.signUpBtn} onPress={handleSignup}>
          <Text style={styles.teststyles}>Sign Up</Text>
        </Pressable>
        <View style={styles.showSignUpText}>
          <Text style={styles.showSignUpText1}>have an account?</Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signInColor}>Sign In</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default SignUp;
