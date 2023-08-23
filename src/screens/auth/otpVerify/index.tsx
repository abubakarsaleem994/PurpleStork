import React, {useState} from 'react';
import {Pressable, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {arrowIcon} from '../../../assets/icons';
import {COLORS} from '../../../shared/theme/colors';
import {Formik} from 'formik';
import {styles} from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {RF} from '../../../shared/theme/responsive';
import {SafeAreaView} from 'react-native-safe-area-context';
import {setAuth} from '../../../shared/redux/authSlice';
import Toast from 'react-native-toast-message';
import {
  CheckOtpCodeSchema,
} from '../../../shared/validations';
import {useDispatch} from 'react-redux';
interface initialValuesProps {
  otpCode: string;
}
const initialValues: initialValuesProps = {
  otpCode: '',
};
const OtpVerify = ({navigation}: any) => {
  
  const handleOtpVerify = (values: initialValuesProps, actions: any) => {
    console.log('Values', values.otpCode);
    if (values.otpCode ? '' : null) {
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
        console.log('GGG', values.otpCode);
        handleOtpVerify(values, actions);
      }}
      validationSchema={CheckOtpCodeSchema}>
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
              <TouchableOpacity onPress={() => navigation.navigate('ForgetP')}>
                <FastImage
                  source={arrowIcon}
                  resizeMode={FastImage.resizeMode.stretch}
                  style={styles.arrow}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.textView}>
              <Text style={styles.textSignUp}>Verify Code</Text>
              <Text style={styles.showEmailText}>
                Please enter the code we just sent to email timsmxxx@email.com
              </Text>
            </View>
            <View style={styles.contentContainer}>
              <OTPInputView
                style={{
                  width: '80%',
                  height: RF(100),
                  alignSelf: 'center',
                }}
                pinCount={4}
                code={values.otpCode}
                autoFocusOnLoad
                codeInputFieldStyle={{
                  borderRadius: 100,
                  borderColor: COLORS.Purple,
                  height: RF(56),
                  width: RF(56),
                }}
                codeInputHighlightStyle={{
                  width: 30,
                  height: 45,
                  
                  borderWidth: 0,
                  
                  borderBottomWidth: 1,
                }}
              />

              <View style={[styles.borderStyle]}>
                <Text style={{color: COLORS.Grey}}>Resend code in </Text>
                <Text style={styles.textColor}>00:48</Text>
              </View>
              {errors.otpCode && touched.otpCode && (
                <Text style={styles.errors}>{errors.otpCode}</Text>
              )}
            </View>

            <Pressable
              style={styles.signInBtn}
              onPress={() => navigation.navigate('CreateNewPassword')}
              // onPress={() => {
              //   handleSubmit();
              // }}
              >
              <Text style={styles.teststyles}>Continue</Text>
            </Pressable>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};
export default OtpVerify;
