import React, {useState} from 'react';
import {Pressable, StatusBar, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {signIn} from '../../../assets/images';
import {styles} from './styles';
import {COLORS} from '../../../shared/theme/colors';
import {emailIcon, lockIcon, phoneIcon, userIcon} from '../../../assets/icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RF, WP} from '../../../shared/theme/responsive';
import CustomInput from '../../../shared/components/customInput';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import {setAuth} from '../../../shared/redux/authSlice';
import CustomCheckbox from '../../../shared/components/customCheckbox';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UserSignUpSchema} from '../../../shared/validations';

interface initialValuesProps {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
}
const initialValues: initialValuesProps = {
  fullName: '',
  email: '',
  password: '',
  phoneNumber: '',
};

const SignUp = ({navigation}: any) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const handleSignup = (Values: initialValuesProps, actions: any) => {
    console.log(
      'Values',
      Values.fullName,
      Values.email,
      Values.password,
      Values.phoneNumber,
    );
    if (
      Values.fullName === 'abubakar' &&
      Values.email === 'abubakarsaleem.cp@gmail.com' &&
      Values.password === 'Saleem@32' &&
      Values.phoneNumber === '03047057974' &&
      isChecked
    ) {
      dispatch(
        setAuth({
          user: {
            fullname: Values.fullName,
            email: Values.email,
            password: Values.password,
            phoneNumber: Values.phoneNumber,
            role: 'Customer',
          },
          isLoggedIn: true,
        }),
      );
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'SignIn In Successfully',
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
    <Formik
      initialValues={initialValues}
      validateOnMount={true}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        handleSignup(values, actions);
      }}
      validationSchema={UserSignUpSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
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
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />
              {errors.fullName && touched.fullName && (
                <Text style={styles.errors}>{errors.fullName}</Text>
              )}
              <CustomInput
                placeholder="Enter Email"
                leftIcon={emailIcon}
                textContentType="emailAddress"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {errors.email && touched.email && (
                <Text style={styles.errors}>{errors.email}</Text>
              )}
              <CustomInput
                placeholder="Enter Password"
                leftIcon={lockIcon}
                isPassword
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                textContentType="password"
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text style={styles.errors}>{errors.password}</Text>
              )}
              <CustomInput
                placeholder="Enter phoneNumber"
                leftIcon={phoneIcon}
                textContentType="telephoneNumber"
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <Text style={styles.errors}>{errors.phoneNumber}</Text>
              )}

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
                  <Text style={[styles.checkBoxText]}>
                    I agree to the company{' '}
                  </Text>
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

            <Pressable
              style={styles.signUpBtn}
              onPress={() => {
                handleSubmit();
              }}>
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
      )}
    </Formik>
  );
};
export default SignUp;
