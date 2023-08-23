import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StatusBar} from 'react-native';
import FastImage from 'react-native-fast-image';
import {signIn} from '../../../assets/images';
import {styles} from './styles';
import {COLORS} from '../../../shared/theme/colors';
import CheckBox from 'react-native-check-box';
import {arrowIcon, lockIcon} from '../../../assets/icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomInput from '../../../shared/components/customInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {CheckNewPasswordSchema} from '../../../shared/validations';
import {Formik} from 'formik';
interface initialValuesProps {
  newPassword: string;
  confirmNewPassword: string;
}
const initialValues: initialValuesProps = {
  newPassword: '',
  confirmNewPassword: '',
};
const ChangePassword = ({navigation}: any) => {
  const handleNewPassword = (values: initialValuesProps, actions: any) => {
    console.log('Values', values.newPassword, values.confirmNewPassword);
    if (
      values.newPassword === 'saleem' &&
      values.confirmNewPassword === 'saleem'
    ) {
      // dispatch(
      //   setAuth({
      //     user: {
      //       email: values.otpCode,
      //       role: 'Customer',
      //     },
      //   }),
      // );
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: ' Please set newPassword',
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Incorrect Credentails',
      });
    }
    actions.setSubmitting(true);
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnMount={true}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        handleNewPassword(values, actions);
      }}
      validationSchema={CheckNewPasswordSchema}>
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
            <View>
              <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor="transparent"
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('OtpVerify')}>
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
                placeholder="Type your password"
                leftIcon={lockIcon}
                isPassword
                onChangeText={handleChange('newPassword')}
                onBlur={handleBlur('newPassword')}
                value={values.newPassword}
                secureTextEntry
                textContentType="password"
              />
              {errors.newPassword && touched.newPassword && (
                <Text style={styles.errors}>{errors.newPassword}</Text>
              )}
              <CustomInput
                placeholder="Type your confirm Password"
                leftIcon={lockIcon}
                isPassword
                onChangeText={handleChange('confirmNewPassword')}
                onBlur={handleBlur('confirmNewPassword')}
                value={values.confirmNewPassword}
                secureTextEntry
                textContentType="password"
              />
              {errors.confirmNewPassword && touched.confirmNewPassword && (
                <Text style={styles.errors}>{errors.confirmNewPassword}</Text>
              )}
            </View>

            <TouchableOpacity
              style={styles.signInBtn}
              onPress={() => navigation.navigate('PasswordUpdate')}
              // onPress={() => {
              //   handleSubmit();
              // }}
              >
              <Text style={styles.teststyles}>Confirm New Password</Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};
export default ChangePassword;
