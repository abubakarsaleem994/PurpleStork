import React from 'react';
import {Pressable, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import {arrowIcon, emailIcon} from '../../../assets/icons';
import CustomInput from '../../../shared/components/customInput';
import {COLORS} from '../../../shared/theme/colors';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {setAuth} from '../../../shared/redux/authSlice';
import Toast from 'react-native-toast-message';
import {CheckEmailSchema, LoginScreenSchema} from '../../../shared/validations';
interface initialValuesProps {
  email: string;
}
const initialValues: initialValuesProps = {
  email: '',
};
const ForgetPassword = ({navigation}: any) => {
  //const dispatch = useDispatch();

  const handleForgetPassword = (values: initialValuesProps, actions: any) => {
    console.log('Values', values.email);
    if (values.email === 'abubakar87@gmail.com' && null) {
      // dispatch(
      //   setAuth({
      //     user: {
      //       email: values.email,
      //       role: 'Customer',
      //     },
      //   }),
      // );
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: ' Successfully Send OTP verification',
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
        handleForgetPassword(values, actions);
      }}
      validationSchema={CheckEmailSchema}>
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
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <FastImage
                  source={arrowIcon}
                  resizeMode={FastImage.resizeMode.stretch}
                  style={styles.arrow}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.textView}>
              <Text style={styles.textSignUp}>Reset Password</Text>
              <Text style={styles.showText}>
                Enter your email, we will send a verification code to email
              </Text>
            </View>
            <View style={styles.contentContainer}>
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
            </View>

            <Pressable
              style={styles.signInBtn}
              onPress={() => navigation.navigate('OtpVerify')}
              // onPress={() => {
              //   handleSubmit();
              // }}
            >
              <Text style={styles.teststyles}>Send Verification Code</Text>
            </Pressable>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      )}
    </Formik>
  );
};
export default ForgetPassword;
